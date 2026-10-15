/**
 * Validación de JSON Schema 2020-12 con Ajv en modo estricto (S11 l. 69, 118).
 * Los schemas son la autoridad estructural; este módulo sólo comprueba
 * estructura, tipos y restricciones locales y devuelve un diagnóstico
 * determinista. Las invariantes relacionales viven en `core` y `policy`.
 * Firma provisional (tarea 0.7/T3); se fija con los schemas v1 en 1.2.
 */
import { Ajv2020 } from 'ajv/dist/2020.js';
import type { ErrorObject, Options } from 'ajv';

/** Un hallazgo de validación, con la ruta JSON Pointer de la instancia. */
export interface Diagnostic {
  /** JSON Pointer del valor que falla (`''` es la raíz). */
  readonly path: string;
  /** Palabra clave del schema que falla (`required`, `additionalProperties`, …). */
  readonly keyword: string;
  /** Mensaje de Ajv, estable para una misma versión. */
  readonly message: string;
  /** Parámetros de la palabra clave (p. ej. la propiedad faltante o la desconocida). */
  readonly params: Readonly<Record<string, unknown>>;
}

export type ValidationResult =
  | { readonly ok: true }
  | { readonly ok: false; readonly diagnostics: readonly Diagnostic[] };

export type Validator = (data: unknown) => ValidationResult;

const AJV_OPTIONS: Options = {
  strict: true, // rechaza schemas con palabras clave desconocidas o ambiguas
  allErrors: true, // informa de todos los fallos, no sólo del primero
  allowUnionTypes: false,
};

function toDiagnostic(error: ErrorObject): Diagnostic {
  return {
    path: error.instancePath,
    keyword: error.keyword,
    message: error.message ?? '',
    params: { ...error.params },
  };
}

function compare(a: Diagnostic, b: Diagnostic): number {
  return (
    a.path.localeCompare(b.path) ||
    a.keyword.localeCompare(b.keyword) ||
    a.message.localeCompare(b.message) ||
    JSON.stringify(a.params).localeCompare(JSON.stringify(b.params))
  );
}

/**
 * Compila un schema JSON Schema 2020-12 y devuelve un validador puro.
 * Lanza si el schema no es válido en modo estricto.
 */
export function compileSchema(schema: object): Validator {
  const ajv = new Ajv2020(AJV_OPTIONS);
  const validate = ajv.compile(schema);
  return (data: unknown): ValidationResult => {
    if (validate(data)) {
      return { ok: true };
    }
    const diagnostics = (validate.errors ?? []).map(toDiagnostic).sort(compare);
    return { ok: false, diagnostics };
  };
}

/** Atajo: compila y valida en una sola llamada. */
export function validateAgainst(schema: object, data: unknown): ValidationResult {
  return compileSchema(schema)(data);
}
