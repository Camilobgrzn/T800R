# Plantilla de brief para el worker

Lo redacta el orchestrator al asignar una tarea (a partir de `spec.md` y
`plan.md`) y se entrega al worker con contexto nuevo. Enlaza; no copia. Cabe en
una pantalla.

```markdown
# Brief: <id> / T<n>

- Feature: features/<id>/ (spec digest <…>, plan digest <…>, build autorizado el <fecha>)
- Tarea: T<n> — <objetivo en una frase>
- actor_id asignado: <usuario>-a<n> (proveedor: <Claude Code | Codex | OpenCode>)
- Base: feat/<id> @ <sha> (contiene las dependencias T<m> ya `merged`) → rama task/<id>/T<n> en worktree propio
- Registros: léelos con `git show feat/<id>:features/<id>/<archivo>` y `git show control:approvals/<id>.md`, no desde tu worktree

## Aceptación
- <criterio propio de la tarea> (cubre CA<n>)

## Archivos permitidos
- `ruta/…`
- `glob/**`
(Más tus rutas de registro: features/<id>/evidence/T<n>.md y features/<id>/evidence/<task>.findings.md.
Tocar cualquier otro archivo bloquea la tarea.)

## Interfaces
- Consume: …
- Produce: …

## Referencias (máximo diez)
| Qué | Dónde | Revisión | Papel |
| --- | --- | --- | --- |
| Spec, CA<n> | features/<id>/spec.md | <digest> | acuerdo |
| Convención X del repo | docs/… | <sha> | referencia |
| Ejemplo de módulo similar | src/… | <sha> | ejemplo |

## Validación (únicos comandos que ejecutan código del repositorio)
- `<comando 1>`
- `<comando 2>`
(Inspección con Git y coordinación en tu rama no necesitan declararse; workflow §2.1.)

## Rutas protegidas
- policy.yaml: <ruta o «no existe»>; lista efectiva: <…>
- Regla: ninguna ejecución ni commit con hooks versionados mientras una esté modificada y sin revisar.

## Riesgo
- routine | high (<motivo>; si high: fase de efecto | protected_paths; aprobación local antes del efecto o del gate 3). Efectos prohibidos: ninguno (si hubiera, la tarea no existiría). El verifier con actor_id distinto es obligatorio en todas las tareas.

## Tests primero
- sí | no (<motivo>)

## Presupuesto y parada
- Presupuesto orientativo: <n> turnos / <n> minutos
- Para si: necesitas un archivo fuera de la lista; necesitas un comando no
  declarado; aparece una laguna de intención o un defecto de spec; el efecto es
  `high` y no hay aprobación, o es `prohibited`; se agota el presupuesto.

## Entrega esperada
- Commits en la rama hasta <sha-trabajo>; encima, commit `evidence:` con
  `evidence/T<n>.md`; retorno breve con ambos SHA, validado / no validado y
  hallazgos clasificados.
```
