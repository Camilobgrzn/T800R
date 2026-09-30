# Plantilla de `features/<id>/evidence/<task>.md`

Append-only. Lo escribe **sólo el worker de la tarea**. Una entrada por ronda;
nunca se edita una entrada anterior. El orchestrator puede añadir al final una
línea `INVALIDADA: <motivo>` tras una replanificación; nada más.

```markdown
# Evidencia: <id> / T<n>

- actor_id: <proveedor>:<máquina o usuario>
- Proveedor / sesión: <Claude Code | Codex | OpenCode>, <identificador de sesión si existe>
- Brief: <versión o fecha>

## Ronda 1 — <YYYY-MM-DDTHH:MM>

### Precondiciones comprobadas
- build autorizado: `build <digest-plan> …` en control:approvals/<id>.md ✔
- plan.md digest coincide ✔
- tasks.md: T<n> ready/in_progress, owner <actor_id> ✔
- participations.md: assigned ✔
- Rama feat/<id>/T<n> desde <sha-base> ✔

### Entorno
- SO: <uname -sm>
- Node: <node --version>
- Lockfile: <git hash-object pnpm-lock.yaml | package-lock.json>

### Trabajo
- Commits: <sha corto> <mensaje>; …
- Archivos tocados: <lista> (todos dentro de los permitidos)

### Validación
| Comando | Resultado | Código de salida | Nota |
| --- | --- | --- | --- |
| `<comando 1>` | pasó / falló | 0 / n | <resumen de salida> |
| `<comando 2>` | no ejecutado | — | motivo: <falta herramienta / requiere secreto / pendiente de revisión de protected_paths> |

### Criterios
| CA / aceptación | Estado | Evidencia |
| --- | --- | --- |
| CA<n> | cubierto / parcial / no | <prueba, salida, observación> |

### Hallazgos
- Laguna de intención: <pregunta concreta> → tarea a blocked (intent gap) | ninguna
- Defecto de spec: <descripción> → detenida | ninguno
- Corrección local: <qué y por qué> | ninguna
- Hallazgo ajeno: anotado en findings.md | ninguno

### Entrega
- SHA entregado: <sha>
- Retorno: <≈300 palabras orientativas o enlace>

## Ronda 2 — <fecha>
- Motivo del fail anterior: <resumen del veredicto>
- Qué cambia en esta ronda: <información nueva; si no la hay, no abrir ronda>
(… mismas secciones …)
```
