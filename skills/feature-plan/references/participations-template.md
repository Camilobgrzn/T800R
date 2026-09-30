# Plantilla de `features/<id>/participations.md`

Historial **append-only** de quién participó en cada tarea. Lo inicializa
`/feature-plan` sin eventos; después **sólo el orchestrator** añade líneas, nunca
las edita ni borra. El verifier lo consulta completo para decidir su
elegibilidad; si falta la línea del worker de una tarea o el historial es
incoherente con `evidence/`, la elegibilidad no puede determinarse y se rechaza.

```markdown
# Participaciones: <id>

Formato: `<fecha ISO> | <tarea> | <actor_id> | <proveedor/sesión> | <rol> | <evento> | <nota>`

Roles: worker, owner, verifier, integrador, orchestrator.
Eventos:
- assigned, transferred, started, delivered (worker/owner)
- verdict, ineligible (verifier; `ineligible` lo registra el orchestrator cuando
  un candidato a verifier no pudo verificar, sin que se escriba veredicto)
- handoff_emitted, handoff_accepted, handoff_rejected
- invalidated (tras una replanificación: la evidencia previa de la tarea deja de
  valer)
- integrated (cierre de la feature tras el merge)

<!-- sin eventos -->
```

Ejemplos de líneas:

```
2026-10-02T09:10 | T1 | claude-code:camilo-mbp | Claude Code | worker | assigned | brief v1
2026-10-02T09:12 | T1 | claude-code:camilo-mbp | Claude Code | worker | started | rama feat/idp-catalog/T1
2026-10-02T11:40 | T1 | claude-code:camilo-mbp | Claude Code | worker | delivered | sha abc1234
2026-10-02T12:05 | T1 | codex:camilo-mbp | Codex | verifier | verdict | pass
2026-10-03T08:00 | T2 | opencode:camilo-mbp | OpenCode | owner | transferred | desde claude-code:camilo-mbp, handoff aceptado
```

Convención provisional de `actor_id` en bootstrap: `<proveedor>:<máquina o
usuario>`; el ledger de T800R lo sustituirá por un identificador verificable
(workflow §10, tarea 1 del roadmap).
