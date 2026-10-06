# Plantilla de `features/<id>/evidence/README.md`

Lo escribe el **integrador**. Consolida los veredictos y registra las
validaciones globales de la candidata. Forma parte de la candidata: se comete
como commit de registro `evidence: integración <id>` encima de
`<sha-verificado>` (sólo este archivo), antes del gate 3 y nunca después del
merge (workflow §2.1 y §4.5).

```markdown
# Evidencia consolidada: <id>

- Candidata: feat/<id>
- SHA verificado (validaciones globales): <sha-verificado>
- SHA candidato (este archivo encima, sólo rutas de registro): se cita en la línea de aprobación
- Base de main: <sha-main-base> (ancestro de la candidata ✔)
- Autorización vigente: `build <digest-plan> on spec <digest-spec> …`; digests actuales coinciden ✔
- Fecha: <YYYY-MM-DDTHH:MM>
- Integrador (actor_id): <…>

## Tareas
| Tarea | Worker(s) (actor_id) | Verifier (actor_id) | Rondas | Veredicto | Posterior a invalidated | Merged en feat/<id> | Concerns | High aprobado |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| T1 | … | … | 1 | pass | n/a | <sha> | — | n/a |
| T2 | …, … | … | 2 | concerns | sí | <sha> | <resumen> | `high <digest> approved` (protected_paths) |

## Elegibilidad y escrituras
- Cada verifier ausente de participations.md como worker/owner de su tarea ✔ (comprobación mecánica)
- Revisión manual de la persona de control:approvals/<id>.md y de los commits `coord:` y `verdict:` de feat/<id>: hecha el <fecha> | pendiente (la autoría Git no distingue actores; workflow §7)
- Escrituras indebidas detectadas: ninguna | <incidente → feature devuelta a verify>

## Cierre documental incluido en la candidata
- spec.md y plan.md sin cambios (digests autorizados intactos) ✔
- specs/: <archivos consolidados> | sin cambio de comportamiento vigente
- features/<id>/ queda como historial ✔

## Validaciones globales sobre <sha-verificado>
- Rutas protegidas en `git diff <sha-main-base>..<sha-verificado>`: ninguna | <revisadas antes de ejecutar>
| Comprobación | Comando | Resultado | Nota |
| --- | --- | --- | --- |
| Dependencias fijadas | `git diff <sha-main-base>..<sha-verificado> -- <lockfile>` | sin cambios / justificados | |
| Tipos | `<comando>` | pasó / falló / no disponible | |
| Lint | `<comando>` | … | |
| Build | `<comando>` | … | |
| Arranque local | `<comando>` | … | |
| Comportamiento incorporado | `<comando o pasos>` | … | catálogo / TechDocs |

Aceptación focalizada (si no hay suite): pasos reproducibles por CA.
| CA | Pasos | Resultado observado |
| --- | --- | --- |

## Concerns a aceptar en el gate 3
1. <tarea, observación>

## Línea para control:approvals/<id>.md
`merge <sha-candidato> onto <sha-main-base> approved`

## Después del merge (lo registra la persona, sólo en control)
- `integrated <sha-merge>` en control:approvals/<id>.md
- Notas de conocimiento propuestas (como cambios nuevos): <…> | ninguna
- Skill propuesta (cambio high, como cambio nuevo): <…> | ninguna
```
