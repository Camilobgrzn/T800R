/**
 * @t800r/runtime: monolito modular. Orden de dependencia interno (S11 l. 156):
 * core ← policy, evidence ← application, adoption. Placeholder de 0.7/T1.
 */
export const PACKAGE_NAME = '@t800r/runtime' as const;

export * as core from './core/index.js';
export * as policy from './policy/index.js';
export * as evidence from './evidence/index.js';
export * as application from './application/index.js';
export * as adoption from './adoption/index.js';
