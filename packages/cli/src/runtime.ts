/**
 * Comprobación del runtime (S11 l. 65: la distribución verifica el runtime;
 * spec 0.7 CA9). Función pura: recibe versiones y devuelve un diagnóstico.
 */

/** Major de Node soportada por el v0 (`engines.node` del package raíz es `^24.21.0`). */
export const SUPPORTED_MAJOR = 24;

export interface RuntimeInfo {
  /** Versión encontrada, p. ej. `process.versions.node`. */
  readonly found: string;
  /** Versión de referencia recomendada (la de `.nvmrc`). */
  readonly recommended: string;
}

export type RuntimeCheck =
  | { readonly ok: true }
  | { readonly ok: false; readonly message: string };

export function majorOf(version: string): number {
  const major = Number.parseInt(version.split('.')[0] ?? '', 10);
  return Number.isNaN(major) ? -1 : major;
}

/** Diagnostica si la versión encontrada está en la major soportada. */
export function checkRuntime(info: RuntimeInfo, supportedMajor: number = SUPPORTED_MAJOR): RuntimeCheck {
  if (majorOf(info.found) === supportedMajor) {
    return { ok: true };
  }
  return {
    ok: false,
    message:
      `t800r: runtime no soportado. Se requiere Node ${supportedMajor}.x ` +
      `(recomendada ${info.recommended}, la de .nvmrc) y se encontró Node ${info.found}. ` +
      `Remediación: ejecuta \`nvm use\` en la raíz del repositorio o instala Node ${info.recommended}.`,
  };
}
