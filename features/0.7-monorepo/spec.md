---
id: 0.7-monorepo
title: Esqueleto del monorepo de T800R
size: feature
risk: high
risk_reason: crea rutas de protected_paths (`**/package.json`, `pnpm-workspace.yaml`, `**/pnpm-lock.yaml`); no hay disparador de S09 l. 83
prohibited_effects: none
status: draft
created: 2026-10-14
---

# Esqueleto del monorepo de T800R

Tarea 0.7 del [roadmap v0](../../docs/roadmap-v0.md) (F0), primera feature de
T800R construida con el flujo de
[workflow-construccion.md](../../docs/workflow-construccion.md) v4.2 y las
skills de `skills/`.

## Problema y resultado observable

**Problema.** T800R no tiene código: sólo definición, skills y política. F1
(contratos, `core`, ledger) necesita packages con fronteras comprobables
mecánicamente, un validador de JSON Schema 2020-12 y pruebas, y el flujo de
construcción necesita validaciones declaradas que un worker pueda ejecutar y un
verifier reejecutar. Además, la documentación que los agentes leen como canon
no tiene comprobación de vigencia: hoy hay 8 enlaces internos rotos de 2862.

**Resultado observable.** En un checkout limpio, con Node 24.21.0 (`nvm use`) y
pnpm activado por corepack, `pnpm install --frozen-lockfile`, `pnpm build`,
`pnpm test`, `pnpm lint`, `pnpm check:boundaries` y `pnpm check:links`
terminan en verde. Cinco packages compilan con TypeScript estricto y ESM. Un
import que viola el grafo de dependencias de S11 l. 156, introducido a
propósito, hace fallar `pnpm check:boundaries` con un mensaje que dice cómo
corregirlo. Un enlace interno roto en `docs/` o `skills/` hace fallar
`pnpm check:links` con archivo, línea y remediación. Ejecutar el bin de la CLI
con Node 25 produce un diagnóstico que nombra la versión soportada y termina
con error antes de hacer nada más.

## Criterios de aceptación

Salvo que se indique otra cosa, los comandos se ejecutan en la raíz del
repositorio con Node 24.21.0 (`nvm use`, `.nvmrc` ya fijado en 0.1) y pnpm
activado por corepack. «En verde» significa código de salida 0.

1. **CA1 — Toolchain fijado y verificado al instalar.** El `package.json` raíz
   declara `engines.node` dentro de la major 24 (compatible con 24.21.0) y
   `packageManager` con la versión exacta de pnpm; `.npmrc` declara
   `engine-strict=true`; `pnpm-lock.yaml` está cometido. Verificación:
   `pnpm install --frozen-lockfile` en verde con Node 24.21.0; el mismo
   comando con Node 25 (el default global de la persona) termina con error de
   `engines` sin modificar `node_modules`.
2. **CA2 — Cinco packages del workspace.** `pnpm-workspace.yaml` incluye
   `@t800r/contracts`, `@t800r/adapter-api`, `@t800r/runtime`, `@t800r/cli` y
   `@t800r/adapter-claude-code` (stub sin comportamiento). `@t800r/runtime`
   contiene los directorios `core`, `policy`, `evidence`, `application` y
   `adoption`, cada uno con al menos un módulo placeholder exportado.
   Verificación: `pnpm -r exec node -p "require('./package.json').name"`
   lista exactamente los cinco nombres; `ls packages/runtime/src` (o la ruta
   que fije el plan) muestra los cinco directorios.
3. **CA3 — TypeScript estricto, ESM, `tsc` con project references.** Cada
   package tiene `"type": "module"`, `exports` explícitos, `tsconfig` con
   `strict: true` y `composite: true`, y compila a JavaScript con
   declarations; la raíz tiene un `tsconfig` de referencias. Verificación:
   `pnpm build` (que ejecuta `tsc -b`) en verde; para cada package,
   `tsc --showConfig` muestra `"strict": true` y `"module"` ESM; `dist/` no
   está versionado (`git check-ignore -q packages/cli/dist`).
4. **CA4 — Fronteras entre packages (AT-04).** Con el árbol limpio,
   `pnpm check:boundaries` (ESLint con las reglas de frontera más
   dependency-cruiser) está en verde. Introducir a propósito (a) un import de
   `@t800r/contracts` hacia `@t800r/runtime`, (b) un import lateral de
   `@t800r/adapter-claude-code` hacia un segundo adapter de prueba y (c) un
   ciclo entre dos packages hace fallar la comprobación, señalando cada import
   por archivo y línea. Verificación: prueba automatizada en `pnpm test` que
   aplica las tres violaciones sobre copias temporales o fixtures y comprueba
   los tres fallos; además, el verifier reproduce al menos una a mano.
5. **CA5 — Fronteras dentro de `runtime` (S11 l. 156).** `core` no importa
   `policy`, `evidence`, `application` ni `adoption`; `policy` y `evidence`
   no importan `application` ni `adoption`; ningún módulo de `runtime` importa
   `@t800r/cli` ni un adapter. Verificación: misma prueba automatizada de CA4
   con un fixture `core → application`, que falla; árbol limpio en verde.
6. **CA6 — Remediación en cada regla propia (P14).** Cada regla propia de
   ESLint o dependency-cruiser tiene un mensaje de error que nombra la regla
   violada, la dirección permitida y el paso concreto para corregirla (por
   ejemplo, «mueve el tipo a `@t800r/contracts` e impórtalo desde allí»).
   Verificación: la prueba de CA4 y CA5 comprueba que la salida de cada fallo
   contiene su remediación; una regla sin remediación es un fallo de la
   prueba. El verifier viola una regla a mano y lee la remediación en la
   salida de `pnpm check:boundaries` (salida verificable del roadmap 0.7).
7. **CA7 — Validador de JSON Schema 2020-12.** `@t800r/contracts` exporta una
   función que compila un schema 2020-12 con Ajv en modo estricto y valida
   datos, devolviendo un diagnóstico determinista (misma entrada, misma
   salida, con ruta del error). Incluye un schema de prueba con núcleo cerrado
   (`additionalProperties: false`) y fixtures válido e inválido. Verificación:
   pruebas en `pnpm test`: el fixture válido pasa, el inválido falla, una
   propiedad desconocida se rechaza, y dos ejecuciones producen el mismo
   diagnóstico. Los schemas v1 reales son la tarea 1.2.
8. **CA8 — Comprobación de enlaces internos (P20).** `pnpm check:links`
   recorre todos los `.md` de `docs/` y `skills/`, incluido `docs/reviews/`,
   y comprueba cada enlace Markdown interno: admite rutas relativas al archivo
   y rutas desde la raíz, tolera el sufijo `:<línea>`, exige que el archivo
   exista y que el ancla, si la hay, corresponda a un encabezado del destino
   según la regla de slug de GitHub. Un fallo lista archivo, línea, enlace,
   causa (archivo o ancla) y remediación, y termina con error. Verificación:
   `pnpm check:links` en verde sobre el repositorio (los 8 enlaces rotos
   actuales se corrigen en esta feature; ninguno está en `skills/`); prueba en
   `pnpm test` con un fixture que tiene un archivo inexistente y un ancla
   inexistente y produce ambos hallazgos.
9. **CA9 — Diagnóstico del runtime (AT-05, parte de 0.7).** El bin de
   `@t800r/cli` comprueba la major de Node antes de cualquier otra cosa.
   Verificación: con Node 24.21.0, `node packages/cli/dist/bin.js --version`
   imprime la versión del package y sale 0; con Node 25, imprime un diagnóstico
   que nombra la versión soportada y la encontrada y sale con código distinto
   de 0. La parte «no abre el ledger» de AT-05 queda para 1.5.
10. **CA10 — Pruebas con Vitest.** `pnpm test` ejecuta Vitest sobre los cinco
    packages y sobre las herramientas del repositorio (fronteras, enlaces);
    cada package tiene al menos una prueba. Verificación: `pnpm test` en verde
    y su salida nombra los cinco packages.
11. **CA11 — Validaciones declaradas y árbol reproducible.** Los scripts
    `build`, `test`, `lint`, `check:boundaries` y `check:links` existen en el
    `package.json` raíz y son los comandos que el plan declara como
    validaciones. Verificación: tras `pnpm install --frozen-lockfile && pnpm
    build && pnpm test && pnpm lint && pnpm check:boundaries && pnpm
    check:links`, `git status --porcelain` está vacío.

## No-alcance

- Schemas v1 del catálogo (1.2), `core` (1.3), bootstrap (1.4), ledger (1.5):
  ningún comportamiento de producto; los packages son placeholders.
- Comandos de la CLI (`init`, `apply`, `doctor`, `sync`, `update`): sólo
  `--version` y el diagnóstico del runtime.
- Implementación del adapter de Claude Code (4.2); adapters de Codex y OpenCode
  (roadmap v2.3, sin fecha).
- CI (`.github/**`, backlog «CI de Linux y Windows»), hooks de Git
  (`.githooks/**`, `.husky/**`; el `pre-push` llega con 5.1), publicación en
  npm, bundler.
- Formateador (Prettier u otro) y reglas de estilo que no sean de frontera.
- `t800r.yaml`, `t800r.lock.json`, `t800r/policy.yaml` (ADR-010 punto 5; F5).
- Cambios en `skills/**`, `policy.yaml`, `AGENTS.md`, configuración de agentes.
- Reescritura de `docs/` más allá de corregir los 8 enlaces rotos.
- Agente de jardinería de documentación (P20 `deferred`; decisión en 5.4).
- Dev containers, Beads, runner OCI.

## Decisiones tomadas

| Decisión | Fuente |
| --- | --- |
| Node 24 LTS fijado a patch reproducible (24.21.0 en `.nvmrc`); rango compatible dentro de la major; verificar el runtime | S11 l. 65; roadmap 0.1 (2026-10-13); persona 2026-10-13 (24 frente a 26) |
| TypeScript estricto, ESM, pnpm workspaces, `tsc` con project references, Ajv, Vitest, ESLint + dependency-cruiser; sin bundler, ORM, service locator ni framework de monorepo | S11 l. 118; ADR-010 punto 3 |
| JSON Schema 2020-12 como autoridad estructural; validadores conformes; núcleo cerrado | S11 l. 69, 72; ADR-010 punto 4 |
| Grafo unidireccional: `contracts` ← `adapter-api` ← adapters; `runtime` (`core` ← `policy`/`evidence` ← `application`/`adoption`) ← `cli`; adapters no se importan entre sí ni importan internals del runtime; `cli` es la única composition root | S11 l. 156; ADR-010 punto 2 |
| Packages de AT-04: `contracts`, `adapter-api`, `runtime`, `cli` y adapters oficiales | especificacion-v0 AT-04 |
| Esqueleto con los cuatro de AT-04 más `adapter-claude-code` como stub; el import lateral se prueba con un segundo adapter de prueba; directorios internos de `runtime` con sus reglas desde ahora | persona (2026-10-14, entrevista de esta spec); roadmap v2.3 (Claude Code primero) |
| Toda regla propia de lint o de fronteras lleva la remediación en el mensaje | roadmap v2.2 (P14, aprobado 2026-10-09) |
| Comprobación de enlaces internos de `docs/` y `skills/` como validación declarada del repositorio | roadmap v2.2 (P20, aprobado 2026-10-09) |
| La comprobación de enlaces cubre archivos y anclas, todo `docs/` (incluido `docs/reviews/`) y `skills/`; admite rutas relativas y desde la raíz y el sufijo `:línea`; los 8 rotos actuales se corrigen aquí | persona (2026-10-14, entrevista de esta spec) |
| AT-05 en 0.7: `engines` + `engine-strict` + stub de CLI que diagnostica; «no abre el ledger» en 1.5 | persona (2026-10-14, entrevista de esta spec) |
| `engine-strict` y lockfile cometido: las versiones exactas y su integridad viven en el lockfile del monorepo | S11 l. 118 |
| Validaciones ejecutadas en el host sobre worktree, sólo comandos declarados; `protected_paths` comprobados antes de ejecutar | workflow §2.1 p. 10, §4.3; S12 «Perfil MVP mínimo» |

## Decisiones delegadas al worker

- Disposición de directorios (`packages/<nombre>` o similar) y nombre del
  directorio del adapter de prueba usado en CA4.
- Versiones exactas de las dependencias de desarrollo (TypeScript, Ajv,
  Vitest, ESLint, dependency-cruiser, pnpm), con la condición de que queden
  fijadas en el lockfile.
- Flags adicionales de `tsconfig` más allá de `strict` (p. ej.
  `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`), formato de
  `eslint.config`, configuración de dependency-cruiser y de Vitest.
- Cómo reparte el trabajo entre ESLint y dependency-cruiser (p. ej. ESLint
  para imports dentro de `runtime` y dependency-cruiser para ciclos y
  fronteras entre packages), siempre que CA4-CA6 se cumplan.
- Implementación de `check:links` (lenguaje: TypeScript ejecutado con el
  toolchain del repo, sin dependencia nueva de ejecución si puede evitarse) y
  de la regla de slug; si un encabezado con tildes no es alcanzable con esa
  regla, se corrige el enlace, no la regla.
- Firma de la función de validación de `@t800r/contracts` (se fija en 1.2 con
  los schemas v1); nombre y forma del schema de prueba.
- Mecanismo de la prueba de CA4/CA5 (copias temporales, fixtures bajo un
  directorio de prueba, o invocación programática de las herramientas).
- Nombre del bin de la CLI (`t800r`) y texto exacto del diagnóstico de runtime.

## Interfaces públicas que se crean o cambian

| Interfaz | Cambio | Consumidores conocidos |
| --- | --- | --- |
| Packages `@t800r/contracts`, `@t800r/adapter-api`, `@t800r/runtime`, `@t800r/cli`, `@t800r/adapter-claude-code` | Se crean (placeholders con `exports` explícitos) | F1 (1.2-1.5), F4 (4.2) |
| Scripts raíz `build`, `test`, `lint`, `check:boundaries`, `check:links` | Se crean; son las validaciones declaradas que citarán los planes de T800R | `/feature-plan`, `/feature-build`, `/feature-verify` de todas las features posteriores de T800R |
| Función de validación de schemas de `@t800r/contracts` | Se crea (firma provisional) | 1.2 |
| Bin de `@t800r/cli` con `--version` y diagnóstico de runtime | Se crea | 1.4 y posteriores |
| Reglas de frontera (ESLint + dependency-cruiser) con remediación | Se crean | todo código futuro de T800R |
| `protected_paths` de `policy.yaml` | No cambia; los patrones `**/package.json`, `pnpm-workspace.yaml`, `**/pnpm-lock.yaml` ya cubren lo que esta feature crea | — |

## Efectos prohibidos

Ninguno. `pnpm install` descarga dependencias de npm (red, reversible, dentro
del repositorio y de `node_modules`); no hay despliegue, push, borrado de
datos externos ni secretos en el entorno. La escritura en `control` y el push
a `main` siguen siendo de la persona.

## Impacto del cambio

No aplica: feature nueva.

## Preguntas abiertas

Ninguna.

## Glosario

- **Frontera**: restricción de qué package o directorio puede importar a cuál,
  según el grafo de S11 l. 156; se comprueba mecánicamente.
- **Regla propia**: regla de ESLint o de dependency-cruiser escrita para este
  repositorio (no una regla preconfigurada de terceros).
- **Remediación**: parte del mensaje de error que dice el paso concreto para
  corregir la violación (P14).
- **Validación declarada del repositorio**: comando que los planes de T800R
  citan como validación y que worker y verifier ejecutan tal cual.
- **Slug**: identificador de ancla que GitHub deriva de un encabezado
  Markdown (minúsculas, espacios a guiones, puntuación eliminada).
