# Proyección de skills/ a los proveedores (roadmap 0.4, copia manual)

Origen: `skills/` de T800R @ `b4a746b` (2026-10-14).
Destinos: `.claude/skills/` (Claude Code), `.agents/skills/` (Codex CLI y OpenCode),
`.opencode/skills/` (OpenCode). Hasta que exista `sync` (roadmap 5.1) la
reconciliación es manual: regenerar las tres copias y esta tabla tras cada cambio
`high` de `skills/`. Las rutas fuera de cada skill se citan desde la raíz del repo.

| Skill | sha256 de SKILL.md | Archivos |
| --- | --- | --- |
| `feature-build` | `5a2b53f4dba2d147…` | 3 |
| `feature-integrate` | `463d7a3cbc7141e6…` | 2 |
| `feature-plan` | `51994fe748610241…` | 4 |
| `feature-spec` | `7138a3daec05ddac…` | 2 |
| `feature-verify` | `03326101bcf3980e…` | 2 |
| `session-handoff` | `b7b518d35e5db9c0…` | 2 |
| `session-resume` | `3771f5a40216c2b0…` | 1 |
| `spike` | `966c52b594cf9126…` | 2 |

## Verificación de activación (2026-10-14, roadmap 0.4 / AT-15)

Prueba headless por proveedor: activar `spike` y `feature-spec` sin ejecutar
nada ni escribir, informar la ruta del `SKILL.md` cargado, la primera frase del
cuerpo y si `docs/workflow-construccion.md` y `skills/README.md` existen desde la
raíz. Resultado: las dos skills se activaron y las rutas se resolvieron en los
seis casos (tres proveedores por dos repositorios).

| Proveedor | Versión | Invocación | Copia cargada en T800R | Copia cargada en idp-backstage |
| --- | --- | --- | --- | --- |
| Claude Code | 2.1.299 | `claude -p … --permission-mode plan`, skill por `/nombre` | `.claude/skills/` | `.claude/skills/` |
| Codex CLI | 0.159.2 | `codex exec --sandbox read-only`, skill por `$nombre` | `.agents/skills/` | `.agents/skills/` |
| OpenCode | 1.18.31 | `opencode run --agent plan`, herramienta `skill` | `.claude/skills/` | `.opencode/skills/` |

Observaciones: OpenCode descubre las tres rutas (`.opencode/skills`,
`.claude/skills`, `.agents/skills`) y, ante copias idénticas, cargó una distinta
en cada repo; la copia de `.opencode/skills/` es redundante para él mientras
exista `.claude/skills/`. Codex no lee `.codex/skills`; su ruta de repositorio es
`.agents/skills`. En el piloto, `skills/README.md` empieza con
`Proyectado desde T800R @ b4a746b`. La decisión de mantener o retirar la copia
`.opencode/skills/` queda para la persona antes de 5.1 (`sync`).
