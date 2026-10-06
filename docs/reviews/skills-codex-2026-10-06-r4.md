# Revisión Codex de skills/ — ronda 4 (2026-10-06)

- Modelo: `gpt-6-astra`, esfuerzo `medium`, sin reintento. Base: `5528375`. Solo lectura. Residuo de N1 corregido después (`ready` en conservadas no terminales).

**Veredicto: SÍ con cambios.** Revisado `4ffb3ef..5528375`, sin modificar archivos. Queda un residuo de N1; no encontré otros defectos nuevos bloqueantes en el diff. Se conservan los tres gates humanos y `docs/definition/` no cambió.

| Hallazgo | Estado | Resultado |
|---|---|---|
| N1 — Reconciliación | Parcial | Distingue completadas, no terminales y canceladas previas, pero omite `ready` en la enumeración de conservadas. |
| N2 — Handoff con cambios pendientes | Corregido | Excepción explícita, manteniendo control de archivos propios y staged. |
| N3 — Fase `high` | Corregido | `ready_for_effect` previo; `fail` posterior consume ronda y bloquea para recuperación. |
| N4 — Integración de canceladas | Corregido | Activación, catálogo y checklist admiten canceladas con las condiciones exigidas. |
| N5 — Entrada a `feature-spec` | Corregido | La condición negativa permite cambios solicitados y decisiones funcionales pendientes. |
| N6 — Estado de build y SHA | Corregido | Ejecución en `in_progress`; `<sha-entrega>` procede de `delivered`, contrastado con HEAD. |
| Original 10 — Efecto `high` | Corregido | Espera, ejecución y comprobación posterior tienen recorrido separado. |
| Original 13 — Entradas y replanificación | Parcial | Entradas resueltas; pendiente únicamente el residuo de N1. |

**Media — Residuo de N1: una tarea conservada en `ready` queda sin clasificación.**

Fuentes: [skills/feature-plan/SKILL.md:137](skills/feature-plan/SKILL.md:137) y [docs/workflow-construccion.md:289](docs/workflow-construccion.md:289).

Caso: T1 obliga a replanificar mientras T2, independiente y sin cambios, está `ready` esperando asignación. Se exige clasificar todas las tareas, pero la enumeración de «conservada no terminal» excluye `ready`; las demás disposiciones tampoco corresponden. Es un estado admitido por S04 y por la propia plantilla de tareas.

**Corrección concreta:** añadir `ready` a ambas enumeraciones. Cuando mantenga su elegibilidad tras reconciliar dependencias y autorización, conserva ese estado y recibe `reconciled`, sin ratificación ni invalidación.

No requiere nuevos gates ni cambios al canon.
