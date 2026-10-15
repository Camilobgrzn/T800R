#!/usr/bin/env node
// Bin `t800r`. Comprueba el runtime antes de cargar cualquier otra cosa
// (spec 0.7 CA9): el programa se importa dinámicamente sólo si la comprobación
// pasa, así ni Commander ni el resto de la CLI se cargan con un Node no soportado.
import { checkRuntime } from './runtime.js';

const RECOMMENDED_NODE = '24.21.0'; // .nvmrc del repositorio

const check = checkRuntime({ found: process.versions.node, recommended: RECOMMENDED_NODE });
if (!check.ok) {
  process.stderr.write(`${check.message}\n`);
  process.exitCode = 1;
} else {
  const { buildProgram } = await import('./program.js');
  const { readPackageInfo } = await import('./package-info.js');
  await buildProgram(readPackageInfo()).parseAsync(process.argv);
}
