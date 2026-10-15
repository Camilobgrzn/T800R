import { Command } from 'commander';
import type { PackageInfo } from './package-info.js';

/** Construye el programa Commander. Sólo `--version` en 0.7; los comandos llegan en F1+. */
export function buildProgram(info: PackageInfo): Command {
  return new Command()
    .name('t800r')
    .description('T800R: harness del loop de desarrollo con memoria y orquestación (v0)')
    .version(info.version, '-v, --version', 'imprime la versión de @t800r/cli')
    .helpOption('-h, --help', 'muestra esta ayuda');
}
