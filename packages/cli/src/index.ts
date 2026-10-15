/**
 * @t800r/cli: única composition root ejecutable (S11 l. 156). Depende de
 * runtime y adapters oficiales. Comandos en F1+; en 0.7 sólo `--version` y la
 * comprobación del runtime (CA9).
 */
export const PACKAGE_NAME = '@t800r/cli' as const;

export { checkRuntime, majorOf, SUPPORTED_MAJOR } from './runtime.js';
export type { RuntimeCheck, RuntimeInfo } from './runtime.js';
export { buildProgram } from './program.js';
export { readPackageInfo } from './package-info.js';
export type { PackageInfo } from './package-info.js';
