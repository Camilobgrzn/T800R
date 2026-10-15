/**
 * Comprobación de enlaces internos de Markdown (roadmap v2.2, cierre P20;
 * spec 0.7 CA8). Recorre los `.md` de los directorios indicados y comprueba
 * cada enlace inline `[texto](destino)` que no sea una URL con esquema:
 * - admite rutas relativas al archivo y rutas desde la raíz del repositorio;
 * - tolera el sufijo `:<línea>` (citas del tipo `skills/README.md:392`);
 * - exige que el archivo exista y que el ancla, si la hay, corresponda a un
 *   encabezado del destino (regla de slug de GitHub) o a un `<a id="…">`.
 * Los bloques de código (``` … ```) y los code spans (`…`) no contienen
 * enlaces: son texto literal y se ignoran.
 */
import { readdir, readFile, stat } from 'node:fs/promises';
import { dirname, join, normalize, relative, resolve, sep } from 'node:path';

export interface LinkFinding {
  /** Ruta del archivo que contiene el enlace, relativa a la raíz. */
  readonly file: string;
  readonly line: number;
  readonly link: string;
  readonly cause: 'archivo' | 'ancla';
  readonly detail: string;
  readonly remediation: string;
}

export interface CheckOptions {
  /** Raíz del repositorio (base de las rutas «desde la raíz»). */
  readonly root: string;
  /** Directorios a recorrer, relativos a `root`. */
  readonly dirs: readonly string[];
}

const SCHEME = /^[a-z][a-z0-9+.-]*:/i;
const INLINE_LINK = /!?\[(?:[^[\]]|\[[^\]]*\])*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;
const LINE_SUFFIX = /:\d+(?:-\d+)?$/;

/** Slug de un encabezado según GitHub: minúsculas, puntuación fuera, espacios → guiones. */
export function slugify(heading: string): string {
  return heading
    .trim()
    .replace(/<\/?a\b[^>]*>/g, '') // etiquetas <a id=…> en encabezados
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1') // enlaces → su texto
    .replace(/[`*_~]/g, '') // formato
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\p{M} _-]/gu, '')
    .replace(/ /g, '-');
}

/** Anclas disponibles en un documento: slugs de encabezados (con sufijos -1, -2 … para repetidos) y `id="…"` explícitos. */
export function anchorsOf(markdown: string): Set<string> {
  const anchors = new Set<string>();
  const seen = new Map<string, number>();
  for (const line of stripFences(markdown).split('\n')) {
    const heading = /^ {0,3}#{1,6}\s+(.*?)\s*#*\s*$/.exec(line);
    if (heading) {
      const base = slugify(heading[1] ?? '');
      const count = seen.get(base) ?? 0;
      seen.set(base, count + 1);
      anchors.add(count === 0 ? base : `${base}-${count}`);
    }
  }
  for (const match of markdown.matchAll(/\b(?:id|name)="([^"]+)"/g)) {
    anchors.add(match[1] ?? '');
  }
  return anchors;
}

/** Sustituye el contenido de los bloques ``` … ``` por líneas vacías (conserva la numeración). */
export function stripFences(markdown: string): string {
  const out: string[] = [];
  let fence: string | null = null;
  for (const line of markdown.split('\n')) {
    const open = /^ {0,3}(`{3,}|~{3,})/.exec(line);
    if (fence === null && open) {
      fence = open[1] ?? '```';
      out.push('');
      continue;
    }
    if (fence !== null) {
      if (open && (open[1] ?? '').startsWith(fence[0] ?? '`') && (open[1]?.length ?? 0) >= fence.length) {
        fence = null;
      }
      out.push('');
      continue;
    }
    out.push(line);
  }
  return out.join('\n');
}

/** Sustituye los code spans `…` de una línea por espacios (misma longitud). */
export function stripCodeSpans(line: string): string {
  return line.replace(/(`+)[^`]*?\1/g, (m) => ' '.repeat(m.length));
}

export function extractLinks(markdown: string): { line: number; target: string }[] {
  const links: { line: number; target: string }[] = [];
  stripFences(markdown)
    .split('\n')
    .forEach((raw, index) => {
      const line = stripCodeSpans(raw);
      for (const match of line.matchAll(INLINE_LINK)) {
        links.push({ line: index + 1, target: match[1] ?? '' });
      }
    });
  return links;
}

async function listMarkdown(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
      files.push(...(await listMarkdown(full)));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(full);
    }
  }
  return files.sort();
}

async function exists(path: string): Promise<boolean> {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

function toPosix(path: string): string {
  return path.split(sep).join('/');
}

/** Comprueba los enlaces y devuelve los hallazgos (vacío si todo está en orden). */
export async function checkLinks(options: CheckOptions): Promise<{ files: number; links: number; findings: LinkFinding[] }> {
  const root = resolve(options.root);
  const findings: LinkFinding[] = [];
  let links = 0;
  const anchorCache = new Map<string, Promise<Set<string>>>();
  const anchorsFor = (file: string): Promise<Set<string>> => {
    let cached = anchorCache.get(file);
    if (!cached) {
      cached = readFile(file, 'utf8').then(anchorsOf);
      anchorCache.set(file, cached);
    }
    return cached;
  };

  const files: string[] = [];
  for (const dir of options.dirs) {
    files.push(...(await listMarkdown(join(root, dir))));
  }

  for (const file of files) {
    const rel = toPosix(relative(root, file));
    const markdown = await readFile(file, 'utf8');
    for (const { line, target } of extractLinks(markdown)) {
      if (SCHEME.test(target)) continue;
      links += 1;
      const [rawPath = '', anchor = ''] = target.split('#', 2);
      const path = decodeURIComponent(rawPath).replace(LINE_SUFFIX, '');
      let destination = file;
      if (path !== '') {
        const fromFile = normalize(resolve(dirname(file), path));
        const fromRoot = normalize(resolve(root, path));
        if (await exists(fromFile)) destination = fromFile;
        else if (await exists(fromRoot)) destination = fromRoot;
        else {
          findings.push({
            file: rel,
            line,
            link: target,
            cause: 'archivo',
            detail: `no existe ni relativo al archivo (${toPosix(relative(root, fromFile))}) ni desde la raíz (${toPosix(relative(root, fromRoot))})`,
            remediation:
              'corrige la ruta (relativa al archivo o desde la raíz del repositorio) o, si el texto es una cita literal y no un enlace, enciérralo en un code span con acentos graves',
          });
          continue;
        }
      }
      if (anchor !== '' && destination.endsWith('.md')) {
        const anchors = await anchorsFor(destination);
        const wanted = decodeURIComponent(anchor);
        if (!anchors.has(wanted)) {
          findings.push({
            file: rel,
            line,
            link: target,
            cause: 'ancla',
            detail: `${toPosix(relative(root, destination))} no tiene un encabezado con slug «${wanted}» ni un id="${wanted}"`,
            remediation:
              'usa el slug del encabezado actual (minúsculas, sin puntuación, espacios como guiones; los repetidos llevan -1, -2…) o añade <a id="…"></a> en el destino',
          });
        }
      }
    }
  }
  return { files: files.length, links, findings };
}

export function formatFinding(f: LinkFinding): string {
  return `${f.file}:${f.line}: enlace «${f.link}» → ${f.cause}: ${f.detail}. Remediación: ${f.remediation}`;
}
