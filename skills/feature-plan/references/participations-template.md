# Plantilla de `features/<id>/participations.md`

Historial **append-only** de quién participó en cada tarea. Vive en la rama
`feat/<id>` (workflow §2.1). Lo inicializa `/feature-plan` sin eventos; después
**sólo el orchestrator** añade líneas desde el checkout de coordinación
(commits `coord:`), nunca las edita ni borra. Los demás actores lo leen con
`git show feat/<id>:features/<id>/participations.md`. El verifier lo consulta
completo para decidir su elegibilidad; si falta la línea del worker de una
tarea o el historial es incoherente con `evidence/`, la elegibilidad no puede
determinarse y se rechaza.

```markdown
# Participaciones: <id>

Formato: `<fecha ISO> | <tarea> | <actor_id> | <proveedor/sesión> | <rol> | <evento> | <nota>`

Roles: worker, owner, verifier, integrador, orchestrator.
Eventos:
- assigned, transferred, started, delivered (worker/owner; `assigned` y
  `started` se registran juntos al asignar; `delivered` cita `<sha-trabajo>` y
  `<sha-entrega>`, que es el HEAD de la rama de la tarea)
- verdict, ineligible (verifier; `ineligible` lo registra el orchestrator cuando
  un candidato a verifier no pudo verificar, sin que se escriba veredicto)
- merged (orchestrator: rama de la tarea integrada en feat/<id> tras pass o
  concerns; cita el SHA de merge)
- handoff_emitted, handoff_accepted, handoff_rejected (con tipo `work` o
  `integrate` y `<sha-trabajo>`; el receptor no escribe: el orchestrator
  registra su aceptación o rechazo)
- invalidated (tras una replanificación: la evidencia y los veredictos previos
  de la tarea dejan de valer)

<!-- sin eventos -->
```

Ejemplos de líneas:

```
2026-10-02T09:10 | T1 | camilo-a1 | Claude Code, sesión 3f2 | worker | assigned | brief v1, base feat/idp-catalog @ 9c1d2e3
2026-10-02T09:10 | T1 | camilo-a1 | Claude Code, sesión 3f2 | worker | started | rama task/idp-catalog/T1 (registrado junto con assigned)
2026-10-02T11:40 | T1 | camilo-a1 | Claude Code, sesión 3f2 | worker | delivered | trabajo abc1234, entrega def5678
2026-10-02T12:05 | T1 | camilo-a2 | Codex, sesión 7b0 | verifier | verdict | pass, ronda 1
2026-10-02T12:10 | T1 | camilo | checkout de coordinación | orchestrator | merged | feat/idp-catalog @ 0a1b2c3
2026-10-03T08:00 | T2 | camilo-a1 | OpenCode, sesión c91 | owner | handoff_emitted | work, trabajo 1122aab
2026-10-03T09:00 | T2 | camilo-a3 | Claude Code, sesión d04 | owner | handoff_accepted | work, trabajo 1122aab
2026-10-03T09:01 | T2 | camilo-a3 | Claude Code, sesión d04 | owner | transferred | desde camilo-a1
```

Convención provisional de `actor_id` en bootstrap (workflow §4.4): un
**identificador lógico estable que asigna la persona** al abrir una sesión,
independiente del proveedor: `<usuario>-a<n>` (`camilo-a1`, `camilo-a2`, …).
Proveedor y sesión van en la columna `<proveedor/sesión>`, no en el `actor_id`.

- Una sesión **continúa el mismo actor** (reutiliza su `actor_id`) cuando
  retoma su propio trabajo: el handoff que él emitió, la ronda siguiente de la
  misma tarea, la fase de efecto. Cambiar de proveedor no cambia la identidad
  si la persona declara que es una continuación.
- La persona **crea un actor nuevo** (`a<n+1>`) para verificar una tarea en
  la que ese actor participó, o cuando quiere independencia real; dos actores
  nunca comparten `actor_id` aunque usen el mismo proveedor y máquina.
- El ledger de T800R sustituirá esta convención por un identificador
  verificable (workflow §10, tarea 1 del roadmap).
