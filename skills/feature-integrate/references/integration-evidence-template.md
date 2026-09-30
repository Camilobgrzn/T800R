# Plantilla de `features/<id>/evidence/README.md`

Lo escribe el **integrador**. Consolida los veredictos y registra las
validaciones globales de la candidata. Forma parte de la candidata (se escribe
antes de verificar, nunca después del merge).

```markdown
# Evidencia consolidada: <id>

- Candidata: feat/<id>/integrate @ <sha-candidato>
- Base de main: <sha-main-base>
- Fecha: <YYYY-MM-DDTHH:MM>
- Integrador (actor_id): <…>

## Tareas
| Tarea | Worker (actor_id) | Verifier (actor_id) | Rondas | Veredicto | Concerns | High aprobado |
| --- | --- | --- | --- | --- | --- | --- |
| T1 | … | … | 1 | pass | — | n/a |
| T2 | … | … | 2 | concerns | <resumen> | `high <digest> approved` |

## Elegibilidad y escrituras
- Cada verifier ausente de participations.md como worker/owner de su tarea ✔ (comprobación mecánica)
- Revisión manual de la persona de control:approvals/<id>.md, participations.md y .verdict.md: hecha el <fecha> | pendiente (la autoría Git no distingue actores; workflow §7)
- Escrituras indebidas detectadas: ninguna | <incidente → feature devuelta a verify>

## Cierre documental incluido en la candidata
- spec.md → status: implemented ✔
- specs/: <archivos consolidados> | sin cambio de comportamiento vigente
- features/<id>/ queda como historial ✔

## Validaciones globales sobre <sha-candidato>
| Comprobación | Comando | Resultado | Nota |
| --- | --- | --- | --- |
| Dependencias fijadas | `git diff <base>..HEAD -- <lockfile>` | sin cambios / justificados | |
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

## Después del merge (lo registra la persona)
- `integrated <sha-merge>` en control:approvals/<id>.md
- Notas de conocimiento propuestas: <…> | ninguna
- Skill propuesta: <…> | ninguna
```
