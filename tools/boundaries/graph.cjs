'use strict';
/**
 * Grafo unidireccional de dependencias de T800R (S11 l. 156; ADR-010 punto 2)
 * y mensajes de remediación (roadmap v2.2, cierre P14). Única fuente para
 * `eslint.config.js` (imports por especificador) y `.dependency-cruiser.cjs`
 * (rutas resueltas y ciclos). CommonJS para que ambos lo carguen.
 *
 * Nota de diseño: el script `check:boundaries` fijado por la tarea 0.7/T1 usa
 * el reporter `err` de dependency-cruiser, que imprime el nombre de la regla
 * pero no su `comment`, y el schema no admite `long` en `reporterOptions.err`.
 * Por eso la remediación forma parte del **nombre** de cada regla.
 */

const PREFIX = 'Remediación:';

/** Packages del monorepo: directorio y a qué packages de T800R pueden importar. */
const PACKAGES = {
  '@t800r/contracts': {
    dir: 'packages/contracts',
    allowed: [],
    rule: 'frontera-contracts',
    message:
      '@t800r/contracts no importa ningún otro package de T800R: es la base del grafo (S11 l. 156). ' +
      `${PREFIX} si lo que necesitas es un schema o un tipo, defínelo en @t800r/contracts y que el otro package lo importe desde aquí; si es lógica, no pertenece a contracts: muévela a runtime.`,
  },
  '@t800r/adapter-api': {
    dir: 'packages/adapter-api',
    allowed: ['@t800r/contracts'],
    rule: 'frontera-adapter-api',
    message:
      '@t800r/adapter-api sólo importa @t800r/contracts: define puertos, capabilities y resultados, no implementaciones (S11 l. 156). ' +
      `${PREFIX} declara aquí el puerto o el tipo que necesitas y que runtime o el adapter lo implementen; no importes runtime, cli ni adapters.`,
  },
  '@t800r/runtime': {
    dir: 'packages/runtime',
    allowed: ['@t800r/contracts', '@t800r/adapter-api'],
    rule: 'frontera-runtime',
    message:
      '@t800r/runtime no importa @t800r/cli ni ningún adapter: los mecanismos externos entran por puertos (S11 l. 156). ' +
      `${PREFIX} define un puerto en @t800r/adapter-api o en el módulo de runtime que lo consume y deja que cli lo cablee con el adapter; runtime nunca conoce al adapter concreto.`,
  },
  '@t800r/cli': {
    dir: 'packages/cli',
    allowed: ['@t800r/contracts', '@t800r/adapter-api', '@t800r/runtime', '@t800r/adapter-*'],
    rule: null,
    message: null,
  },
};

/** Cualquier `packages/adapters/<nombre>` (`@t800r/adapter-<nombre>`, distinto de adapter-api). */
const ADAPTERS = {
  dirGlob: 'packages/adapters/*',
  allowed: ['@t800r/contracts', '@t800r/adapter-api'],
  rule: 'frontera-adapters',
  message:
    'un adapter importa sólo @t800r/contracts y @t800r/adapter-api; nunca internals del runtime, la cli ni otro adapter (S11 l. 156). ' +
    `${PREFIX} si dos adapters comparten código, súbelo a @t800r/adapter-api como puerto o utilidad común; si necesitas algo del runtime, pídelo como entrada del puerto que implementas.`,
};

/** Capas internas de @t800r/runtime: qué no puede importar cada una (spec 0.7 CA5). */
const RUNTIME_LAYERS = {
  core: {
    forbidden: ['policy', 'evidence', 'application', 'adoption'],
    rule: 'capa-core',
    message:
      'runtime/core no importa policy, evidence, application ni adoption: core es lógica pura con tipos e invariantes (S11 l. 156). ' +
      `${PREFIX} pasa lo que core necesita como argumento desde la capa superior, o mueve la función a policy/evidence/application si depende de ellas.`,
  },
  policy: {
    forbidden: ['application', 'adoption'],
    rule: 'capa-policy',
    message:
      'runtime/policy no importa application ni adoption: la dirección es application/adoption → policy (S11 l. 156). ' +
      `${PREFIX} invierte la dependencia con un puerto definido en policy que application o adoption implementen o invoquen.`,
  },
  evidence: {
    forbidden: ['application', 'adoption'],
    rule: 'capa-evidence',
    message:
      'runtime/evidence no importa application ni adoption: la dirección es application/adoption → evidence (S11 l. 156). ' +
      `${PREFIX} invierte la dependencia con un puerto definido en evidence que application o adoption implementen o invoquen.`,
  },
};

const CIRCULAR = {
  rule: 'sin-ciclos',
  message:
    'ningún módulo puede depender de sí mismo a través de otros (S11 l. 156). ' +
    `${PREFIX} extrae lo que ambos módulos comparten a un tercer módulo del que dependan los dos, o invierte una de las dos dependencias con un puerto.`,
};

const ALL_T800R = Object.keys(PACKAGES).concat(['@t800r/adapter-*']);

/** Patrones (gitignore-style) de especificadores prohibidos para un package, dado lo permitido. */
function forbiddenSpecifiers(allowed) {
  // Todo @t800r/* salvo lo permitido; `!x` excluye del grupo.
  return ['@t800r/*'].concat(allowed.map((a) => `!${a}`));
}

function restricted(patterns, rule, message) {
  return {
    '@typescript-eslint/no-restricted-imports': [
      'error',
      { patterns: [{ group: patterns, message: `[${rule}] ${message}` }] },
    ],
  };
}

/** Bloques de configuración plana de ESLint con las reglas de frontera. */
function eslintConfigs() {
  const blocks = [];
  for (const [name, pkg] of Object.entries(PACKAGES)) {
    if (!pkg.rule) continue;
    blocks.push({
      name: `t800r/${pkg.rule}`,
      files: [`${pkg.dir}/**/*.ts`],
      rules: restricted(forbiddenSpecifiers(pkg.allowed), pkg.rule, pkg.message),
    });
    void name;
  }
  blocks.push({
    name: `t800r/${ADAPTERS.rule}`,
    files: [`${ADAPTERS.dirGlob}/**/*.ts`],
    rules: restricted(forbiddenSpecifiers(ADAPTERS.allowed), ADAPTERS.rule, ADAPTERS.message),
  });
  for (const [layer, cfg] of Object.entries(RUNTIME_LAYERS)) {
    blocks.push({
      name: `t800r/${cfg.rule}`,
      files: [`${PACKAGES['@t800r/runtime'].dir}/src/${layer}/**/*.ts`],
      rules: restricted(cfg.forbidden.map((f) => `**/${f}/**`), cfg.rule, cfg.message),
    });
  }
  return blocks;
}

/** Nombre de regla de dependency-cruiser: lleva la remediación porque el reporter `err` sólo imprime el nombre. */
function ruleName(rule, message) {
  return `${rule}: ${message}`;
}

/** Expresión regular (rutas resueltas) de un package: su directorio o su enlace en node_modules. */
function pathOf(name) {
  if (name === '@t800r/adapter-*') return '(packages/adapters/|node_modules/@t800r/adapter-(?!api))';
  const dir = PACKAGES[name].dir;
  return `(${dir}/|node_modules/${name}/)`;
}

/** Reglas `forbidden` de dependency-cruiser equivalentes al grafo (más ciclos). */
function depcruiseRules() {
  const rules = [
    {
      name: ruleName(CIRCULAR.rule, CIRCULAR.message),
      severity: 'error',
      comment: CIRCULAR.message,
      from: {},
      to: { circular: true },
    },
  ];
  for (const [name, pkg] of Object.entries(PACKAGES)) {
    if (!pkg.rule) continue;
    const forbidden = ALL_T800R.filter((n) => n !== name && !pkg.allowed.includes(n));
    rules.push({
      name: ruleName(pkg.rule, pkg.message),
      severity: 'error',
      comment: pkg.message,
      from: { path: `^${pkg.dir}/` },
      to: { path: `^${forbidden.map(pathOf).join('|^')}` },
    });
  }
  rules.push({
    name: ruleName(ADAPTERS.rule, ADAPTERS.message),
    severity: 'error',
    comment: ADAPTERS.message,
    from: { path: '^packages/adapters/([^/]+)/' },
    to: {
      path: `^${['@t800r/runtime', '@t800r/cli', '@t800r/adapter-*'].map(pathOf).join('|^')}`,
      pathNot: '^packages/adapters/$1/',
    },
  });
  const runtimeDir = PACKAGES['@t800r/runtime'].dir;
  for (const [layer, cfg] of Object.entries(RUNTIME_LAYERS)) {
    rules.push({
      name: ruleName(cfg.rule, cfg.message),
      severity: 'error',
      comment: cfg.message,
      from: { path: `^${runtimeDir}/src/${layer}/` },
      to: { path: `^${runtimeDir}/src/(${cfg.forbidden.join('|')})/` },
    });
  }
  return rules;
}

module.exports = { PREFIX, PACKAGES, ADAPTERS, RUNTIME_LAYERS, CIRCULAR, eslintConfigs, depcruiseRules };
