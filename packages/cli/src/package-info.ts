import { readFileSync } from 'node:fs';

/** Datos del manifiesto de @t800r/cli que el bin necesita en ejecución. */
export interface PackageInfo {
  readonly name: string;
  readonly version: string;
}

/** Lee `packages/cli/package.json` relativo al módulo compilado (`dist/`). */
export function readPackageInfo(): PackageInfo {
  const raw = readFileSync(new URL('../package.json', import.meta.url), 'utf8');
  const parsed = JSON.parse(raw) as { name?: unknown; version?: unknown };
  return {
    name: typeof parsed.name === 'string' ? parsed.name : '@t800r/cli',
    version: typeof parsed.version === 'string' ? parsed.version : '0.0.0',
  };
}
