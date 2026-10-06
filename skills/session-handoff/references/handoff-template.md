# Plantilla de `features/<id>/evidence/<task>.handoff.md` (`evidence/integrate.handoff.md` para el tipo `integrate`)

Un handoff por feature; el nuevo sustituye al anterior (la historia queda en
Git). Lo escribe quien cierra, en la rama que entrega, en un commit `handoff:`
que sólo toca rutas de registro. El receptor **no escribe aquí**: su aceptación
o rechazo es un evento (`handoff_accepted` / `handoff_rejected`) que registra
el orchestrator en `participations.md`.

```markdown
# Handoff: <id> / T<n> | integrate

- Tipo: work (worker; transfiere ownership si el receptor es otro actor_id) | integrate (integrador; sin ownership de tarea)
- Emitido: <YYYY-MM-DDTHH:MM> por <actor_id> (<proveedor>, sesión <…>)
- Rama: task/<id>/T<n> | feat/<id>
- SHA base: <sha-base> (feat/<id> @ … en el brief | sha-main-base)
- SHA del trabajo: <sha-trabajo> (último commit de trabajo, `wip:` si aplica;
  el commit `handoff:` que contiene este archivo va encima y sólo toca
  evidence/<task>.handoff.md y, si aplica, evidence/T<n>.md)
- Coordinación: el orchestrator registrará `handoff_emitted <tipo> <sha-trabajo>`
  en participations.md (feat/<id>); el receptor comprueba la coordinación actual,
  no un hash congelado
- Receptor esperado: cualquiera | <actor_id> | otra sesión de integrador. Nunca
  quien vaya a verificar esta tarea.
- Worktree de la rama: conservado en <ruta> (reutilízalo: `git worktree list`) | eliminado (crea uno con `git worktree add`)

## Resultado
Qué quedó hecho, en términos de criterios de aceptación: CA<n> cumplido /
parcial / no. Enlaces: plan.md#T<n>, evidence/T<n>.md (ronda <k>).

## Validación
| Comando | Resultado | Nota |
| --- | --- | --- |
| `<comando 1>` | pasó @ <sha> | |
| `<comando 2>` | no ejecutada: <motivo> | |

## Pendiente
- Próxima acción concreta: <verbo + objeto> (una sola).
- Después: <lista corta>.
- Bloqueos: ninguno | <intent gap / defecto de spec / high sin aprobar>, con enlace.
- Hallazgos ajenos: ver evidence/<task>.findings.md | ninguno.
- Rutas restauradas por error propio: ninguna | <lista>.

## Contexto
Decisiones tomadas en esta sesión que no están en spec, plan ni evidencia:
| Decisión | Fuente | Dónde debería persistir |
| --- | --- | --- |
(Si está vacío, mejor.)
```
