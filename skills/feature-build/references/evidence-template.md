# Plantilla de `features/<id>/evidence/<task>.md`

Append-only. Lo escribe **sólo el worker de la tarea**, en la rama de la tarea,
en commits `evidence: T<n> ronda <k>` que van encima del SHA del trabajo y sólo
tocan este archivo (y `evidence/<task>.findings.md`). Una entrada por ronda y por fase de
efecto; nunca se edita una entrada anterior. Cada entrada lleva su propio
`actor_id`: tras una transferencia, el nuevo owner añade entradas con el suyo y
las anteriores conservan el de quien las escribió (el verifier contrasta cada
`delivered` de `participations.md` con la entrada de su ronda). Nadie más
escribe aquí: una invalidación tras replanificar se registra como evento
`invalidated` en `participations.md` (orchestrator), no en este archivo.

```markdown
# Evidencia: <id> / T<n>

- Brief: <versión o fecha>
- Base: feat/<id> @ <sha-base>

## Ronda 1 — <YYYY-MM-DDTHH:MM>

- actor_id: <usuario>-a<n>
- Proveedor / sesión: <Claude Code | Codex | OpenCode>, <identificador de sesión si existe>

### Precondiciones comprobadas
- build autorizado: `build <digest-plan> on spec <digest-spec> …` en control:approvals/<id>.md ✔
- plan.md y spec.md: digests actuales coinciden ✔
- tasks.md (feat/<id>): T<n> ready/in_progress, owner <actor_id>; dependencias completed y merged ✔
- participations.md (feat/<id>): assigned/transferred posterior a todo invalidated ✔
- Rama task/<id>/T<n> desde <sha-base> en worktree propio ✔

### Entorno
- SO: <uname -sm>
- Node: <node --version>
- Lockfile: <git hash-object pnpm-lock.yaml | package-lock.json>

### Rutas protegidas
- Lista efectiva: policy.yaml <sí/no> + workflow §4.3
- Modificadas en esta ronda: ninguna | <ruta: git hash-object> (sin ejecutar hasta revisión; revisadas en veredicto ronda <k> con el mismo hash)

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
- Hallazgo ajeno: anotado en evidence/<task>.findings.md | ninguno
- Efecto high pendiente de aprobación: <efecto> | ninguno

### Entrega
- SHA del trabajo: <sha-trabajo>
- SHA de entrega: no se escribe aquí (sería el commit que contiene esta entrada); lo fijan el HEAD de la rama y el evento `delivered`
- Retorno: <≈300 palabras orientativas o enlace>

## Ronda 2 — <fecha>
- actor_id: <…>
- Motivo del fail anterior: <resumen del veredicto, leído de feat/<id>>
- Qué cambia en esta ronda: <información nueva; si no la hay, no abrir ronda>
(… mismas secciones …)

## Efecto — <fecha> (sólo tareas high con fase de efecto)
- actor_id: <…>
- Aprobación releída: `high <digest> approved` en control:approvals/<id>.md ✔ (<hora>)
- Efecto ejecutado: <qué, comando, resultado>
- Comprobación propuesta al verifier: <qué observar>
- SHA del trabajo: <…> (la entrega la fija el evento `delivered`)
```
