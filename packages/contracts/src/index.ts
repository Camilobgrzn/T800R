/**
 * @t800r/contracts: schemas JSON Schema 2020-12 y tipos derivados.
 * No depende del runtime (S11 l. 156). Los schemas v1 llegan en la tarea 1.2;
 * el validador (0.7/T3) está en `./validation.js`.
 */
export const PACKAGE_NAME = '@t800r/contracts' as const;

export { compileSchema, validateAgainst } from './validation.js';
export type { Diagnostic, ValidationResult, Validator } from './validation.js';
