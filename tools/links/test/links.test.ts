import { mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { anchorsOf, checkLinks, extractLinks, formatFinding, slugify, stripCodeSpans } from '../links.js';

describe('slugify (regla de GitHub)', () => {
  it('minúsculas, sin puntuación, espacios como guiones, acentos conservados', () => {
    expect(slugify('Qué sí queda en el MVP (v0)')).toBe('qué-sí-queda-en-el-mvp-v0');
    expect(slugify('4.3 `build`: `/feature-build <task>`')).toBe('43-build-feature-build-task');
    expect(slugify('**Negrita** y [enlace](x.md)')).toBe('negrita-y-enlace');
  });
  it('anchorsOf numera encabezados repetidos y admite id explícitos', () => {
    const anchors = anchorsOf('# Uno\n\n## Dos\n\n## Dos\n\n<a id="s07-cierre"></a>\n\n```\n# No cuenta\n```\n');
    expect([...anchors]).toEqual(['uno', 'dos', 'dos-1', 's07-cierre']);
  });
});

describe('extracción de enlaces', () => {
  it('ignora code spans, bloques de código y URLs con esquema', () => {
    const md = 'Ver [a](a.md) y `[b](b.md)` y [c](https://x.y/z).\n```\n[d](d.md)\n```\n[e](e.md#ancla)\n';
    expect(extractLinks(md)).toEqual([
      { line: 1, target: 'a.md' },
      { line: 1, target: 'https://x.y/z' },
      { line: 5, target: 'e.md#ancla' },
    ]);
    expect(stripCodeSpans('x `[b](b.md)` y')).toBe(`x ${' '.repeat(11)} y`);
  });
});

describe('checkLinks (CA8)', () => {
  let root: string;
  beforeAll(async () => {
    root = await mkdtemp(join(tmpdir(), 't800r-links-'));
    await mkdir(join(root, 'docs/sub'), { recursive: true });
    await mkdir(join(root, 'skills'), { recursive: true });
    await writeFile(
      join(root, 'docs/a.md'),
      [
        '# Documento A',
        '',
        '## Sección con tilde',
        '',
        '<a id="explicito"></a>',
        '',
        'Relativo [b](sub/b.md), desde la raíz [b](docs/sub/b.md), con línea [b](docs/sub/b.md:7),',
        'ancla propia [s](#sección-con-tilde), ancla explícita [x](#explicito), skill [s](skills/README.md#uso).',
        'Roto: [no](sub/no-existe.md). Ancla rota: [b](sub/b.md#no-hay).',
        '`[ignorado](nada.md)` y [externo](https://ejemplo.org/x).',
      ].join('\n'),
    );
    await writeFile(join(root, 'docs/sub/b.md'), '# B\n\n## Parte\n\nVuelve a [a](../a.md#documento-a).\n');
    await writeFile(join(root, 'skills/README.md'), '# Skills\n\n## Uso\n');
  });
  afterAll(async () => {
    await rm(root, { recursive: true, force: true });
  });

  it('produce exactamente un hallazgo por archivo inexistente y otro por ancla inexistente, con línea y remediación', async () => {
    const result = await checkLinks({ root, dirs: ['docs', 'skills'] });
    expect(result.files).toBe(3);
    expect(result.links).toBe(9);
    expect(result.findings.map((f) => [f.file, f.line, f.link, f.cause])).toEqual([
      ['docs/a.md', 9, 'sub/no-existe.md', 'archivo'],
      ['docs/a.md', 9, 'sub/b.md#no-hay', 'ancla'],
    ]);
    for (const finding of result.findings) {
      const text = formatFinding(finding);
      expect(text).toMatch(/^docs\/a\.md:9: /);
      expect(text).toContain('Remediación:');
    }
  });

  it('sin enlaces rotos no hay hallazgos', async () => {
    const result = await checkLinks({ root, dirs: ['skills'] });
    expect(result.findings).toEqual([]);
  });
});
