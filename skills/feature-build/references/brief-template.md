# Plantilla de brief para el worker

Lo redacta el orchestrator al asignar una tarea (a partir de `spec.md` y
`plan.md`) y se entrega al worker con contexto nuevo. Enlaza; no copia. Cabe en
una pantalla.

```markdown
# Brief: <id> / T<n>

- Feature: features/<id>/ (spec digest <…>, plan digest <…>, build autorizado el <fecha>)
- Tarea: T<n> — <objetivo en una frase>
- actor_id asignado: <proveedor>:<máquina o usuario>
- Base: <sha de main> → rama feat/<id>/T<n>

## Aceptación
- <criterio propio de la tarea> (cubre CA<n>)

## Archivos permitidos
- `ruta/…`
- `glob/**`
(Tocar cualquier otro archivo bloquea la tarea.)

## Interfaces
- Consume: …
- Produce: …

## Referencias (máximo diez)
| Qué | Dónde | Revisión | Papel |
| --- | --- | --- | --- |
| Spec, CA<n> | features/<id>/spec.md | <digest> | acuerdo |
| Convención X del repo | docs/… | <sha> | referencia |
| Ejemplo de módulo similar | src/… | <sha> | ejemplo |

## Validación (únicos comandos permitidos)
- `<comando 1>`
- `<comando 2>`

## Riesgo
- routine | high (<motivo>; si high: aprobación local antes del efecto). El verifier con actor_id distinto es obligatorio en todas las tareas.

## Tests primero
- sí | no (<motivo>)

## Presupuesto y parada
- Presupuesto orientativo: <n> turnos / <n> minutos
- Para si: necesitas un archivo fuera de la lista; necesitas un comando no
  declarado; aparece una laguna de intención o un defecto de spec; el efecto es
  `high` y no hay aprobación; se agota el presupuesto.

## Entrega esperada
- Commits en la rama, `evidence/T<n>.md` actualizado, retorno breve con SHA,
  validado / no validado y hallazgos clasificados.
```
