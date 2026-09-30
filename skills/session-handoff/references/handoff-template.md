# Plantilla de `features/<id>/handoff.md`

Un handoff por feature; el nuevo sustituye al anterior (la historia queda en
Git). Lo escribe quien cierra; la aceptación o el rechazo los añade el receptor
al final.

```markdown
# Handoff: <id> / T<n>

- Emitido: <YYYY-MM-DDTHH:MM> por <actor_id> (<proveedor>)
- Rama: feat/<id>/T<n>
- SHA base: <sha-base>
- SHA último commit: <sha-head> (incluye `wip:` si aplica)
- tasks.md: <git hash-object>
- participations.md: <git hash-object>
- Receptor esperado: cualquiera | <actor_id> | «un actor_id distinto de <worker>» (para verificar)

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
- Hallazgos ajenos: ver findings.md | ninguno.

## Contexto
Decisiones tomadas en esta sesión que no están en spec, plan ni evidencia:
| Decisión | Fuente | Dónde debería persistir |
| --- | --- | --- |
(Si está vacío, mejor.)

---
## Aceptación (la escribe el receptor con /session-resume)
- <fecha> | <actor_id receptor> | aceptado | árbol en <sha-head>, tasks/participations coinciden
- o: rechazado | motivo: <árbol distinto / owner distinto / historial incoherente>
```
