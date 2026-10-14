---
id: 0.7-monorepo
spec_digest: f0ea9d14cae7471b311c3fdad38611079e619f6d
size: feature
readiness: CONCERNS
created: 2026-10-14
replans: 0
---

# Plan: Esqueleto del monorepo de T800R

## Spec del acotado

Ver spec.md.

## Convenciones del plan

- Todos los comandos se ejecutan en la raíz del worktree de la tarea con Node
  24.21.0 (`nvm use`) y pnpm activado por corepack.
- Los cinco scripts raíz son interfaces acordadas entre tareas: T1 los declara
  en `package.json` con estos objetivos y las tareas posteriores crean lo que
  apuntan. `build` → `tsc -b` sobre el `tsconfig` de referencias de la raíz;
  `test` → Vitest en modo no interactivo sobre `packages/**` y `tools/**`;
  `lint` → ESLint con `eslint.config.js` (raíz) sobre `packages/**` y
  `tools/**`; `check:boundaries` → las reglas de frontera de ESLint más
  dependency-cruiser con `.dependency-cruiser.cjs` (raíz); `check:links` →
  `tools/links/check.ts` ejecutado con `tsx`.
- T1 fija en el lockfile **todas** las dependencias de desarrollo que usan las
  tareas T2-T5 (TypeScript, Vitest, ESLint y typescript-eslint,
  dependency-cruiser, tsx, `@types/node`) y las de ejecución de los packages
  (`ajv` en `contracts`, `commander` en `cli`). Ninguna otra tarea toca
  `package.json` ni `pnpm-lock.yaml`; si una necesita otra dependencia, se
  detiene y lo anota como hallazgo (es una ruta fuera de sus permitidos).
- Disposición: `packages/<nombre>/` para los cinco packages
  (`packages/adapters/claude-code/` para el adapter) y `tools/<herramienta>/`
  para las herramientas del repositorio; `src/`, `test/`, `dist/` dentro de
  cada uno.

## Tareas

### T1 — Workspace pnpm con cinco packages compilables, harness de pruebas y toolchain fijado

- Aceptación: en un worktree limpio, `pnpm install --frozen-lockfile`,
  `pnpm build` y `pnpm test` están en verde; `pnpm -r exec node -p
  "require('./package.json').name"` lista exactamente los cinco nombres de
  CA2; `packages/runtime/src` tiene los directorios `core`, `policy`,
  `evidence`, `application` y `adoption` con un módulo placeholder exportado
  cada uno; cada package tiene `"type": "module"`, `exports` explícitos,
  `strict: true` y `composite: true`, y una prueba de humo que Vitest nombra;
  `dist/` ignorado por Git; `package.json` raíz con `engines.node` dentro de
  la major 24, `packageManager` exacto y los cinco scripts de «Convenciones»;
  `.npmrc` con `engine-strict=true`; `packages/cli/package.json` declara el
  `bin` que T4 implementa; `pnpm install` con Node 25 falla por `engines`
  (cubre CA1, CA2, CA3, CA10, CA11).
- Interfaces consumidas: `.nvmrc` (0.1).
- Interfaces producidas: los cinco scripts raíz; nombres y `exports` de los
  cinco packages; directorios de `runtime`; dependencias fijadas en el
  lockfile para T2-T5; `bin` de `@t800r/cli`.
- Archivos permitidos: `package.json`, `pnpm-workspace.yaml`,
  `pnpm-lock.yaml`, `.npmrc`, `.gitignore`, `tsconfig*.json`,
  `vitest.config.*`, `packages/**`.
- Dependencias: ninguna.
- Validación: `pnpm install --frozen-lockfile`; `pnpm build`; `pnpm test`.
- Riesgo: high (protected_paths: `**/package.json`, `pnpm-workspace.yaml`,
  `**/pnpm-lock.yaml`; sin fase de efecto: la aprobación `high <digest>
  approved` es precondición del gate 3, workflow §4.3; verifier con
  `actor_id` distinto).
- Tests primero: no (no existe harness antes de esta tarea; las pruebas de
  humo forman parte de la entrega).
- Paralelizable con: ninguna.
- Nota para el verifier: la comprobación negativa de CA1 con Node 25 no es
  determinista en el harness (depende de nvm); se reproduce a mano. Node 25
  no incluye corepack: usar `npx pnpm@<versión de packageManager> install
  --frozen-lockfile` bajo `nvm exec 25` y comprobar salida distinta de 0 y
  `node_modules` sin cambios.

### T2 — Fronteras entre packages y dentro de `runtime`, con remediación en cada regla

- Aceptación: con el árbol limpio, `pnpm lint` y `pnpm check:boundaries` en
  verde; una prueba en `pnpm test` aplica sobre copias temporales o fixtures
  las violaciones (a) `contracts → runtime`, (b) adapter de Claude Code →
  adapter de prueba, (c) ciclo entre dos packages y (d) `runtime/core →
  runtime/application`, comprueba que cada una falla con archivo y línea, y
  que la salida de cada fallo contiene la remediación de su regla; cada regla
  propia de ESLint o dependency-cruiser nombra la regla, la dirección
  permitida y el paso de corrección (cubre CA4, CA5, CA6).
- Interfaces consumidas: scripts `lint`, `check:boundaries`, `test` (T1);
  nombres de packages y directorios de `runtime` (T1).
- Interfaces producidas: `eslint.config.js`, `.dependency-cruiser.cjs`, las
  reglas de frontera y sus mensajes; `tools/boundaries/` con la prueba.
- Archivos permitidos: `eslint.config.js`, `.dependency-cruiser.cjs`,
  `tools/boundaries/**`, `packages/*/src/**` y `packages/adapters/*/src/**`
  (sólo ajustes sin comportamiento que exija el lint sobre los placeholders de
  T1).
- Dependencias: T1.
- Validación: `pnpm lint`; `pnpm check:boundaries`; `pnpm test`; `pnpm build`.
- Riesgo: routine (ninguna ruta protegida; no modifica scripts).
- Tests primero: sí.
- Paralelizable con: ninguna (T3-T5 deben pasar `pnpm lint`, que esta tarea
  define).

### T3 — Validador de JSON Schema 2020-12 en `@t800r/contracts`

- Aceptación: `@t800r/contracts` exporta una función que compila un schema
  2020-12 con Ajv en modo estricto y valida datos devolviendo un diagnóstico
  determinista con ruta del error; incluye un schema de prueba con
  `additionalProperties: false` y fixtures válido e inválido; pruebas en
  `pnpm test`: el válido pasa, el inválido falla, una propiedad desconocida se
  rechaza y dos ejecuciones producen el mismo diagnóstico (cubre CA7).
- Interfaces consumidas: package `@t800r/contracts` con `ajv` fijado (T1);
  `pnpm lint` (T2).
- Interfaces producidas: función de validación exportada por
  `@t800r/contracts` (firma provisional, se fija en 1.2).
- Archivos permitidos: `packages/contracts/src/**`,
  `packages/contracts/test/**`, `packages/contracts/schemas/**`.
- Dependencias: T1, T2.
- Validación: `pnpm build`; `pnpm test`; `pnpm lint`; `pnpm check:boundaries`.
- Riesgo: routine.
- Tests primero: sí.
- Paralelizable con: T4, T5 (archivos disjuntos; interfaces de T1 y T2 ya
  acordadas).

### T4 — Bin de `@t800r/cli` con `--version` y diagnóstico del runtime

- Aceptación: el bin comprueba la major de Node antes de cualquier otra cosa;
  la comprobación es una función pura probada en `pnpm test` (versión
  soportada → sin diagnóstico; otra major → diagnóstico que nombra la versión
  soportada y la encontrada); con Node 24.21.0, `node packages/cli/dist/bin.js
  --version` imprime la versión del package y sale 0; con Node 25 imprime el
  diagnóstico y sale con código distinto de 0 (cubre CA9).
- Interfaces consumidas: `bin` declarado en `packages/cli/package.json` y
  `commander` fijado (T1); `pnpm lint` (T2).
- Interfaces producidas: bin `t800r` con `--version`; función de comprobación
  del runtime.
- Archivos permitidos: `packages/cli/src/**`, `packages/cli/test/**`.
- Dependencias: T1, T2.
- Validación: `pnpm build`; `pnpm test`; `pnpm lint`; `pnpm check:boundaries`;
  `node packages/cli/dist/bin.js --version`.
- Riesgo: routine.
- Tests primero: sí.
- Paralelizable con: T3, T5.
- Nota para el verifier: la ejecución con Node 25 se reproduce a mano
  (`nvm exec 25 node packages/cli/dist/bin.js --version`).

### T5 — Comprobación de enlaces internos de `docs/` y `skills/` y corrección de los rotos

- Aceptación: `pnpm check:links` recorre todos los `.md` de `docs/` y
  `skills/`, admite rutas relativas al archivo y desde la raíz, tolera el
  sufijo `:<línea>`, comprueba archivo y ancla (slug de GitHub) y, ante un
  fallo, lista archivo, línea, enlace, causa y remediación y sale con error;
  prueba en `pnpm test` con un fixture que tiene un archivo inexistente y un
  ancla inexistente y produce ambos hallazgos; `pnpm check:links` en verde
  sobre el repositorio tras corregir los 8 enlaces rotos (7 en
  `docs/reviews/`, 1 en `docs/revision-transversal-cierre.md`); ninguna
  edición en `skills/` (cubre CA8).
- Interfaces consumidas: script `check:links` y `tsx` (T1); `pnpm lint` (T2).
- Interfaces producidas: `tools/links/check.ts` (validación declarada del
  repositorio).
- Archivos permitidos: `tools/links/**`, `docs/**` (sólo corrección de
  enlaces; ningún otro cambio de contenido).
- Dependencias: T1, T2.
- Validación: `pnpm check:links`; `pnpm test`; `pnpm lint`;
  `pnpm check:boundaries`.
- Riesgo: routine (`skills/**` queda fuera de los permitidos).
- Tests primero: sí.
- Paralelizable con: T3, T4.

## Cobertura spec ↔ plan

| CA | Tareas | Nota |
| --- | --- | --- |
| CA1 | T1 | comprobación negativa con Node 25 a mano por el verifier |
| CA2 | T1 | |
| CA3 | T1 | T2 puede ajustar placeholders por lint, sin comportamiento |
| CA4 | T2 | |
| CA5 | T2 | |
| CA6 | T2 | |
| CA7 | T3 | |
| CA8 | T5 | |
| CA9 | T4 | T1 declara el `bin` |
| CA10 | T1 | T2-T5 añaden sus pruebas al mismo harness |
| CA11 | T1 | scripts declarados; la cadena completa en verde la comprueba `/feature-integrate` con las validaciones globales |

Tareas habilitadoras sin CA directo: ninguna.

Ambigüedades detectadas: ninguna.
Contradicciones detectadas: ninguna.

## Readiness

Pregunta: ¿puede implementarse sin inventar decisiones no registradas?

Comprobaciones mecánicas:
- [x] Cada tarea tiene aceptación, archivos permitidos y validación.
- [x] Cada CA está en la tabla de cobertura.
- [x] Ningún par de tareas paralelas comparte archivos (T3: `packages/contracts/**`; T4: `packages/cli/**`; T5: `tools/links/**`, `docs/**`).
- [x] Ningún comando de validación toca protected_paths sin tarea high (`pnpm install --frozen-lockfile` no modifica el lockfile; sólo T1, `high`, los escribe).
- [x] Las tareas high anotan aprobación local (T1: protected_paths, sin fase de efecto; precondición del gate 3) y verifier distinto.
- [x] Ninguna tarea exige un efecto prohibited.

Resultado: CONCERNS

CONCERNS:
1. T1 es `high` por crear `package.json`, `pnpm-workspace.yaml` y
   `pnpm-lock.yaml`. No hay fase de efecto: tras el veredicto del verifier, la
   persona registra `high <digest> approved` (digest de la solicitud: tarea,
   `<sha-trabajo>`, rutas protegidas creadas) antes del gate 3. Aceptar que
   la primera tarea del repositorio pase por ese paso.
2. T1 fija de antemano todas las dependencias de T2-T5 para que ninguna otra
   tarea toque el lockfile. Si T2-T5 necesitan una dependencia no prevista,
   la tarea se detiene con hallazgo y se replanifica (nuevo gate 2). Aceptar
   ese riesgo frente a la alternativa de hacer `high` y secuenciales las
   cinco tareas.
3. Las comprobaciones con Node 25 (CA1 negativa, CA9) no entran en `pnpm
   test` porque dependen de nvm y del entorno de la persona; las reproduce el
   verifier a mano y las anota en su veredicto.

Revisión del readiness por otro actor: no requerida (sin incógnitas de
comportamiento; riesgo `high` limitado a manifiestos y lockfile).

## Paralelismo

Máximo dos workers. Pares admitidos: T3 ∥ T4, T3 ∥ T5, T4 ∥ T5 (todos tras
T2). T1 y T2 van solas.

## Replanificación

No aplica (primera planificación).

## Línea para control:approvals/0.7-monorepo.md

`build <digest-plan> on spec f0ea9d14cae7471b311c3fdad38611079e619f6d authorized`

`<digest-plan>` = `git hash-object features/0.7-monorepo/plan.md` sobre el
archivo guardado; no se escribe dentro del archivo. Se entrega en el retorno.
