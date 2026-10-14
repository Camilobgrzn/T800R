# Participaciones: 0.7-monorepo

Formato: `<fecha ISO> | <tarea> | <actor_id> | <proveedor/sesión> | <rol> | <evento> | <nota>`

Roles: worker, owner, verifier, integrador, orchestrator.
Eventos: assigned, transferred, started, delivered, verdict, ratified,
reconciled, ineligible, merged, handoff_emitted, handoff_accepted,
handoff_rejected, invalidated, cancelled (semántica en
`skills/feature-plan/references/participations-template.md`).

<!-- sin eventos -->
2026-10-14T17:21 | T1 | camilo-a1 | Claude Code, sesión 22baeb5f | worker | assigned | brief v1, base feat/0.7-monorepo @ 159fc3c
2026-10-14T17:21 | T1 | camilo-a1 | Claude Code, sesión 22baeb5f | worker | started | rama task/0.7-monorepo/T1 (registrado junto con assigned)
2026-10-14T17:27 | T1 | camilo-a1 | Claude Code, sesión 22baeb5f | worker | delivered | trabajo 9743a4bc993896d0c86a4b99c6b74d875a8f3c48, entrega 1bdecb70307c13cb0ac4e59491f833bffc442d29; validaciones no ejecutadas (protected_paths nuevas, pendientes de revisión)
