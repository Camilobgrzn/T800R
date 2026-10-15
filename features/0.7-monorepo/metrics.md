# Métricas: 0.7-monorepo (workflow §8)

Hasta la candidata (cierre documental del 2026-10-15). El tiempo del gate 3 se
deriva de los commits de `control`.

| Métrica | Valor | Nota |
| --- | --- | --- |
| Spec aprobada → primera evidencia | 2026-10-14 16:5x (control `e8175fb`) → 2026-10-14 17:27 (`evidence: T1 ronda 1`, `1bdecb7`) | ≈ 35 min, incluidos el plan (`099af55`, 16:5x-17:0x), la autorización de build (`321e6d7`) y la asignación |
| Spec aprobada → candidata | 2026-10-14 ≈ 16:55 → 2026-10-15 14:32 (`0b89350`, T3 y T5 merged) | ≈ 21,5 h de calendario con pausa nocturna; trabajo efectivo de la sesión ≈ 1 h el 14 y ≈ 5 h el 15 (estimación; el proveedor no expone tiempos) |
| Rondas por tarea (build → verify con fail) | T1: 1 fail + pass; T2: 1 fail + concerns; T3: 1 fail + concerns; T4: pass a la primera; T5: concerns a la primera | 3 fails en 5 tareas; ninguna agotó las 3 rondas |
| Causas de los fails | T1: `pnpm install` en rojo (decisión de builds de pnpm 12) y reporter de Vitest; T2: bloques de capa de ESLint anulaban la regla de package; T3: orden por `localeCompare` dependiente del locale | Los tres son defectos reales encontrados por el verifier; ninguno fue un falso positivo |
| Reaperturas de spec | 0 | dos precisiones registradas en `specs/0.7-monorepo.md` sin cambiar el comportamiento (`.npmrc`/`engineStrict`; «8 enlaces» → 4 reales) |
| Rechazos de handoff | 0 | no hubo handoffs |
| Tareas bloqueadas por `intent gap` | 0 | |
| Reejecuciones por validación no determinista | 0 | ninguna validación fue no determinista |
| Tokens | Verifiers (subagentes, expuestos por el harness): T1 r1 132 542; T1 r2 99 020; T2 r1 137 058; T2 r2 110 086; T3 r1 135 178; T3 r2 101 898; T4 r1 95 504; T5 r1 122 125; total ≈ 933 000. Worker/orchestrator/planner (sesión principal): no expuesto | |
| Actores | worker, planner, orchestrator e integrador: `camilo-a1` (sesión principal de Claude Code); verifier: `camilo-a2` (8 subagentes con contexto nuevo) | verifier siempre distinto del worker (S12, REV-105) |
| Paralelismo | T3, T4 y T5 en vuelo a la vez (construcción secuencial por un solo worker; verificaciones concurrentes) | sin colisiones de archivos; sí concurrencia de escritores en el checkout de coordinación (ver abajo) |

## Capacidad ausente detectada → destino

1. **Una tarea que crea los manifiestos no puede validarse a sí misma** (regla de rutas protegidas, workflow §4.3): T1 se entregó a ciegas y el primer veredicto fue la primera ejecución de `install`/`build`/`test`; cada corrección de un manifiesto exige otra revisión del verifier. → `lesson` para la tarea 1.1 (medición del coste manual) y candidata a regla mecánica en F2: un «veredicto previo de rutas protegidas» que habilite al worker a ejecutar en la misma ronda.
2. **El reporter `err` de dependency-cruiser no imprime el comentario de la regla** y el script está fijado en `package.json` (protegido): la remediación va en el nombre de la regla. → anotado en `specs/0.7-monorepo.md`; si molesta, un `acotado` cambia el script a `-T err-long` (cambio `high`).
3. **Varios escritores en el checkout de coordinación**: tres verifiers concurrentes y el orchestrator escribieron en `feat/0.7-monorepo` a la vez; hubo archivos `*.verdict.md` sin seguimiento ajenos durante commits de otros (ningún commit los arrastró gracias a la lista explícita, pero el protocolo §2.1 (a) pedía escalar). → regla mecánica candidata para el bootstrap: un verifier escribe su veredicto desde su propio worktree sobre una rama efímera y el orchestrator lo integra, o se serializan los verifiers; destino: tarea 1.1 / F2 (ledger sustituye al checkout compartido).
4. **El orchestrator no emitió archivos de brief** (la skill lo prevé): los workers usaron plan + spec como brief v1. → `lesson`: en 0.8 producir el brief como archivo o aceptar explícitamente plan+spec como brief en el workflow.
5. **Hallazgos de mecanismo en el texto de la spec** (`.npmrc`, «8 enlaces rotos»): la spec fijó detalles de herramienta que la realidad corrigió. → `lesson` para `/feature-spec`: los CA describen comportamiento observable y dejan el mecanismo a «decisiones delegadas».
