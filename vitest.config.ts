import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['packages/**/test/**/*.test.ts', 'tools/**/test/**/*.test.ts'],
    exclude: ['**/node_modules/**', '**/dist/**'],
    // CA10: la salida de `pnpm test` debe nombrar los packages; el reporter por
    // defecto de Vitest 5 sólo imprime el resumen en modo no interactivo.
    reporters: ['verbose'],
  },
});
