#!/usr/bin/env -S node --import tsx
// Validación declarada del repositorio: `pnpm check:links` (roadmap v2.2, P20).
// Uso: tsx tools/links/check.ts [--root <dir>] [dir ...]   (por defecto: docs skills)
import { checkLinks, formatFinding } from './links.js';

const args = process.argv.slice(2);
let root = process.cwd();
const dirs: string[] = [];
for (let i = 0; i < args.length; i += 1) {
  const arg = args[i];
  if (arg === '--root') {
    root = args[i + 1] ?? root;
    i += 1;
  } else if (arg !== undefined) {
    dirs.push(arg);
  }
}
if (dirs.length === 0) dirs.push('docs', 'skills');

const result = await checkLinks({ root, dirs });
for (const finding of result.findings) {
  process.stdout.write(`${formatFinding(finding)}\n`);
}
if (result.findings.length > 0) {
  process.stdout.write(
    `\n✖ ${result.findings.length} enlace(s) roto(s) en ${result.files} archivos (${result.links} enlaces internos comprobados).\n`,
  );
  process.exitCode = 1;
} else {
  process.stdout.write(`✔ ${result.links} enlaces internos en ${result.files} archivos; ninguno roto.\n`);
}
