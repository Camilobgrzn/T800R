// Configuración plana de ESLint (eslint 10, typescript-eslint 8). Las reglas de
// frontera salen de tools/boundaries/graph.cjs y llevan la remediación en el
// mensaje (roadmap v2.2, P14). Se ejecuta con `pnpm lint` y `pnpm check:boundaries`.
import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';
import graph from './tools/boundaries/graph.cjs';

const nodeGlobals = {
  process: 'readonly',
  console: 'readonly',
  Buffer: 'readonly',
  __dirname: 'readonly',
  __filename: 'readonly',
  module: 'writable',
  require: 'readonly',
  exports: 'writable',
};

export default defineConfig([
  globalIgnores(['**/dist/**', '**/node_modules/**', 'coverage/**']),
  js.configs.recommended,
  tseslint.configs.recommended,
  {
    name: 't800r/node',
    files: ['**/*.{js,cjs,mjs,ts}'],
    languageOptions: { globals: nodeGlobals },
  },
  {
    name: 't800r/commonjs',
    files: ['**/*.cjs'],
    rules: { '@typescript-eslint/no-require-imports': 'off' },
  },
  ...graph.eslintConfigs(),
]);
