# Evidencia consolidada: 0.7-monorepo

- Candidata: feat/0.7-monorepo
- SHA verificado (validaciones globales): c235af8a9cdaf898cfb51eb7daabb266a6286abd
- SHA candidato (este archivo encima, sólo rutas de registro): se cita en la línea de aprobación
- Base de main: 38ea68722f31860a10566f4222843b616e44a3a3 (ancestro de la candidata ✔; `git merge main` sin cambios)
- Autorización vigente: `build cbc188d9c81e76bb0ec32c7fef21f1ba42d63860 on spec f0ea9d14cae7471b311c3fdad38611079e619f6d authorized` (control `321e6d7`); digests actuales de `plan.md` y `spec.md` coinciden ✔
- Fecha: 2026-10-15T15:10
- Integrador (actor_id): camilo-a1 (Claude Code, sesión 22baeb5f)

## Tareas completadas
| Tarea | Worker(s) (actor_id) | Verifier (actor_id) | Rondas | Veredicto | Digests vigentes | Merged en feat/0.7-monorepo | Concerns | High aprobado |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| T1 | camilo-a1 | camilo-a2 (verify-T1, verify-T1-r2) | 1 fail + pass | pass (`2e19d70`, trabajo 5b9628f) | sí (sin `invalidated`) | `2d05120` (entrega b2595e1) | — (B informativas) | `high 38fcbd67b2db1f1c7186c116c98b61af8b5901f4 approved` (protected_paths; precondición del gate 3, la registra la persona en control) |
| T2 | camilo-a1 | camilo-a2 (verify-T2, verify-T2-r2) | 1 fail + concerns | concerns (`886b3f9`, trabajo c7da9dd) | sí | `b17c22c` (entrega 82abd3a) | B.1-B.4, B.6 de la ronda 2 (ver abajo) | n/a |
| T3 | camilo-a1 | camilo-a2 (verify-T3, verify-T3-r2) | 1 fail + concerns | concerns (`fad92f2`, trabajo 62050b9) | sí | `36d8e8f` (entrega b8b130a) | B.1-B.7 informativas/opinables | n/a |
| T4 | camilo-a1 | camilo-a2 (verify-T4) | pass a la primera | pass (`7b86559`, trabajo 4985539) | sí | `9a56bf3` (entrega c63960d) | — | n/a |
| T5 | camilo-a1 | camilo-a2 (verify-T5) | concerns a la primera | concerns (`fdfe31e`, trabajo f34230f) | sí | `b5f0cc9` (entrega 91eb846) | B.1, B.2 (B.3-B.6 informativas) | n/a |

Ramas `task/0.7-monorepo/T1..T5` en su `<sha-entrega>` integrado (comprobado antes de empezar; nadie las movió).

## Tareas canceladas (sin entrega, veredicto ni merge)
Ninguna.

## Elegibilidad y escrituras
- Cada verifier ausente de participations.md como worker/owner de su tarea ✔ (comprobación mecánica: todos los `verdict` son de `camilo-a2`; todos los `assigned`/`started`/`delivered` de `camilo-a1`)
- Revisión manual de la persona de control:approvals/0.7-monorepo.md y de los commits `coord:` y `verdict:` de feat/0.7-monorepo: pendiente (la autoría Git no distingue actores; workflow §7); se hace en el gate 3
- Escrituras indebidas detectadas: ninguna por el integrador. Observación registrada en `metrics.md` (capacidad ausente 3): durante commits del orchestrator hubo archivos `*.verdict.md` sin seguimiento de verifiers concurrentes; ningún commit los arrastró (lista explícita)

## Cierre documental incluido en la candidata
- spec.md y plan.md sin cambios (digests autorizados intactos) ✔
- specs/: `specs/0.7-monorepo.md` (spec vigente del esqueleto del monorepo, con las precisiones observadas: `.npmrc engine-strict` ignorado por pnpm 12 y `engineStrict` efectivo en `pnpm-workspace.yaml`; 4 enlaces rotos reales corregidos por T5, no 8)
- `features/0.7-monorepo/metrics.md` con las métricas §8 y cinco capacidades ausentes con destino ✔
- features/0.7-monorepo/ queda como historial ✔
- Commit de cierre: `c235af8` (`coord: cierre 0.7-monorepo`)

## Validaciones globales sobre c235af8a9cdaf898cfb51eb7daabb266a6286abd
- Rutas protegidas en `git diff --name-only 38ea687..c235af8`: `package.json`, `pnpm-workspace.yaml`, `pnpm-lock.yaml`, `packages/{contracts,adapter-api,runtime,cli}/package.json`, `packages/adapters/claude-code/package.json`. Los ocho `git hash-object` coinciden con los revisados por el verifier de T1 en la ronda 2 (veredicto `2e19d70`; `package.json` 9e5fd7dd…, `pnpm-workspace.yaml` c0140362…, `pnpm-lock.yaml` 0519b216…, `packages/contracts/package.json` 1380aa30…, `adapter-api` 06114c2a…, `runtime` b0fbd902…, `adapters/claude-code` 8008ac5c…, `cli` 280d2c37…); regla §4.3 satisfecha antes de ejecutar. Ninguna otra ruta protegida cambió.
- Entorno: macOS arm64 (Darwin 25.6.0); Node 24.21.0 vía `nvm use` (`.nvmrc`); corepack 0.36.0; pnpm 12.11.2.

| Comprobación | Comando | Resultado | Nota |
| --- | --- | --- | --- |
| Dependencias fijadas | `git diff 38ea687..c235af8 -- pnpm-lock.yaml`; `pnpm install --frozen-lockfile` | lockfile nuevo (no existía en main; creado en T1 y revisado); install exit 0 | hash del lockfile = el revisado en T1 r2 |
| Build (tipos) | `pnpm build` | exit 0 | `tsc -b` de los cinco packages |
| Tests | `pnpm test` | exit 0; 10 archivos, 34 pruebas | reporter `verbose` nombra los packages (CA10) |
| Lint | `pnpm lint` | exit 0 | |
| Fronteras | `pnpm check:boundaries` | exit 0; 35 módulos, 0 violaciones | |
| Enlaces | `pnpm check:links` | exit 0; 2854 enlaces en 237 archivos; ninguno roto | |
| Arranque local | `node packages/cli/dist/bin.js --version` | `0.0.0`, exit 0 | con Node 24.21.0 |
| Comportamiento incorporado (CA9) | `node packages/cli/dist/bin.js --version` con Node 25.8.2 | diagnóstico de versión no soportada, exit 1 | |
| Árbol limpio (CA11) | `git status --porcelain` tras build y tests | vacío | |

Aceptación focalizada: no necesaria; la suite existe y cubre CA1-CA11 (ver tabla de cobertura del plan y los veredictos por tarea).

Validaciones no deterministas repetidas: ninguna. Observaciones de calidad marcadas «repetida»: ninguna.

## Concerns a aceptar en el gate 3
1. T2 B.1 (veredicto `886b3f9`, r2): dependency-cruiser no resuelve subrutas `@t800r/<pkg>/…` (silencioso, sin `not-to-unresolvable`); hoy las cubren ESLint y `tsc` por los `exports` explícitos. Aviso para cuando exista subpath `exports`.
2. T2 B.2: patrones de capa (`**/policy/**`, …) sin anclar al package; sin efecto hoy.
3. T2 B.3: dependency-cruiser no da línea en ciclos hechos sólo con rutas relativas; con packages reales ESLint señala la línea.
4. T2 B.4: la remediación va en el nombre de la regla de dependency-cruiser porque el reporter `err` del script no imprime `comment` (candidato a `acotado` `high` para cambiar el script).
5. T2 B.6: el grupo `frontera-runtime` se repite en los bloques de capa de la configuración efectiva de ESLint; fuente única en `tools/boundaries/graph.cjs`.
6. T3 B.1-B.7 (veredicto `fad92f2`, r2), informativas/opinables: ruta `ajv/dist/2020.js` sin `exports`; `Diagnostic.message` estable sólo para la versión fijada; `validateAgainst` recompila por llamada; `allErrors: true` con schemas propios; tipo de `compileSchema` ampliable; `describe` async; la prueba de orden por unidades de código no discrimina una regresión a `localeCompare` en locales donde `ä` > `z`. Decisiones para 1.2.
7. T5 B.1 (veredicto `fdfe31e`): `decodeURIComponent` sin `try/catch` en `tools/links/links.ts`; un destino con `%` mal formado lanzaría excepción en vez de hallazgo. Ningún destino actual contiene `%`.
8. T5 B.2: `exists()` con `stat` es insensible a mayúsculas en APFS; un enlace con caja distinta pasaría en macOS y fallaría en Linux. Comprobado que ninguno de los 2853 enlaces actuales depende de ello; deuda hasta que haya CI de Linux.

Ninguno exige cambios en esta feature; todos cierran su tarea igual que `pass` si la persona los acepta.

## Tareas high y aprobaciones
- T1 (protected_paths, sin fase de efecto): solicitud `0.7-monorepo/T1 5b9628fc654c31b3107ed8bf553aadcf6953c8e2 protected_paths: package.json, pnpm-workspace.yaml, pnpm-lock.yaml, packages/{contracts,adapter-api,runtime,cli}/package.json, packages/adapters/claude-code/package.json`, digest `38fcbd67b2db1f1c7186c116c98b61af8b5901f4`. Línea requerida en control antes de la de merge: `high 38fcbd67b2db1f1c7186c116c98b61af8b5901f4 approved`.

## Línea para control:approvals/0.7-monorepo.md
`merge <sha-candidato> onto 38ea68722f31860a10566f4222843b616e44a3a3 approved`

(`<sha-candidato>` = HEAD de feat/0.7-monorepo tras el commit `evidence: integración 0.7-monorepo` que contiene este archivo.)

## Después del merge (lo registra la persona, sólo en control)
- `integrated <sha-merge>` en control:approvals/0.7-monorepo.md
- Notas de conocimiento propuestas (como cambios nuevos): las cinco capacidades ausentes de `metrics.md` (lesson 1.1: T1 no puede autovalidarse; verifiers concurrentes en el checkout; brief como archivo; mecanismo fuera de los CA de la spec; remediación en nombre de regla)
- Skill propuesta (cambio high, como cambio nuevo): ninguna (ninguna instrucción se repitió tres veces)
