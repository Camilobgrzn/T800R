'use strict';
// Fronteras y ciclos sobre rutas resueltas (S11 l. 156). Las reglas y sus
// mensajes viven en tools/boundaries/graph.cjs; ESLint cubre los mismos
// límites por especificador de import. Se ejecuta con `pnpm check:boundaries`.
const { depcruiseRules } = require('./tools/boundaries/graph.cjs');

module.exports = {
  forbidden: depcruiseRules(),
  options: {
    doNotFollow: { path: 'node_modules' },
    exclude: { path: '(^|/)(dist|node_modules|coverage)/' },
    tsPreCompilationDeps: true,
    tsConfig: { fileName: 'tools/boundaries/tsconfig.depcruise.json' },
    enhancedResolveOptions: {
      exportsFields: ['exports'],
      conditionNames: ['import', 'types', 'default'],
      extensions: ['.ts', '.js', '.cjs', '.mjs', '.d.ts'],
    },
  },
};
