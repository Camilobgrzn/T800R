# Plantilla de `features/<id>/evidence/<task>.verdict.md`

Lo escribe **sólo el verifier**, en la rama `feat/<id>` (commit `verdict: T<n>
ronda <k>` que sólo toca este archivo), nunca en la rama de la tarea. Una
entrada por ronda y por comprobación posterior, append-only.

```markdown
# Veredicto: <id> / T<n>

## Ronda <k> — <YYYY-MM-DDTHH:MM>

- actor_id: <usuario>-a<n>
- Proveedor / sesión: <…>
- SHA del trabajo verificado: <sha-trabajo>
- SHA de entrega: <sha-entrega> (encima sólo rutas de registro ✔)
- Autorización vigente: `build <digest-plan> on spec <digest-spec> …` ✔; digests actuales de plan.md y spec.md coinciden ✔

### Elegibilidad
- participations.md (feat/<id>) leído completo ✔
- Mi actor_id no figura como worker/owner de T<n> en ningún evento ✔
- Línea `delivered` de <actor_id> posterior a todo `invalidated`; su sha-entrega es el HEAD de task/<id>/T<n>; actor_id y sha-trabajo coinciden con la entrada ronda <k> de la evidencia ✔
(Si algo falla, este archivo no se escribe: el verifier se detiene y reporta al
orchestrator, que registra `ineligible` en participations.md.)

### Rutas protegidas (antes de ejecutar)
- Lista efectiva: policy.yaml <sí/no> + workflow §4.3
- Diff toca protected_paths: no | sí:
  | Archivo | git hash-object | Revisión | Justificado |
  | --- | --- | --- | --- |
  | `<ruta>` | <hash> | línea a línea | sí / no → fail sin ejecutar |

### Validaciones reejecutadas (worktree desechable en <sha-entrega>)
| Comando | Resultado | Código | Reutilizado (vigencia) | Nota |
| --- | --- | --- | --- | --- |
| `<comando 1>` | pasó / falló | 0 / n | no | |
| `<comando 2>` | pasó | 0 | sí: mismo sha-trabajo, comando y entorno; salida capturada | |

### A. Cumplimiento de la spec
| Criterio | Estado | Evidencia |
| --- | --- | --- |
| CA<n> / aceptación T<n> | cumplido / parcial / no | <salida, prueba, observación> |
- Archivos fuera de los permitidos (hasta sha-trabajo): ninguno | <lista>
- Cambios de comportamiento fuera del alcance: ninguno | <descripción>

### B. Calidad técnica
- Bloqueante: <lista> | ninguno
- No bloqueante: <lista> | ninguno

### Veredicto
**pass | concerns | fail | ready_for_effect**

- Si concerns: <observaciones no bloqueantes; sin incumplimiento ni riesgo pendiente; cierran la tarea y los acepta la persona en el gate 3>
- Si fail: clase = <defecto de implementación | criterio no cubierto | archivo fuera de alcance | validación en rojo | protected_path injustificado | efecto prohibido | defecto de spec | laguna de intención>; qué información nueva necesita la siguiente ronda.
- Si ready_for_effect (sólo high con fase de efecto; **no declara cumplimiento**): criterios que no dependen del efecto cumplidos ✔; validaciones en verde ✔; efecto y recuperación descritos ✔; criterios que dependen del efecto: <lista, pendientes>. La tarea pasa a waiting.

### Solicitud de aprobación `high` (sólo si la tarea es high)
- Tipo: fase de efecto (veredicto ready_for_effect; el worker ejecuta tras la aprobación) | protected_paths (precondición del gate 3; sin fase de efecto; veredicto normal)
- Efecto: <qué efecto protegido>; recuperación prevista: <cómo se revierte o completa>
- Digest de la solicitud: `printf '%s' '<id>/T<n> <sha-trabajo> <efecto>' | git hash-object --stdin` → <valor>
- Línea para control:approvals/<id>.md: `high <digest> approved`

## Comprobación posterior — <fecha> (sólo tras una fase de efecto)
- actor_id: <…>
- Entrada «Efecto» de la evidencia: <sha-trabajo>; aprobación releída por el worker ✔
- Estado observado del efecto: ejecutado total | parcial (<qué quedó>) | no ejecutado
- Criterios que dependían del efecto: <cumplido / no, con evidencia>
- Veredicto final: **pass | concerns** (no consume ronda) | **fail** (consume ronda; la tarea queda blocked con el estado observado hasta que la persona decida la recuperación; un efecto distinto exige nuevo digest y aprobación)

## Ratificación — <fecha> (sólo tras una replanificación, tarea conservada)
- actor_id: <…> (elegible para T<n>)
- Digests vigentes: plan <…>, spec <…> (`build … authorized` renovado ✔)
- T<n> no cambia en el plan nuevo ✔; <sha-entrega> sigue merged en feat/<id> ✔
- Validaciones: sin cambios en el plan → no reejecutadas | reejecutadas: <resultado>
- El veredicto de la ronda <k> sigue válido ✔ (el orchestrator registra `ratified`)
```
