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
**pass | concerns | fail**

- Si concerns: <observaciones no bloqueantes; sin incumplimiento ni riesgo pendiente; cierran la tarea y los acepta la persona en el gate 3>
- Si fail: clase = <defecto de implementación | criterio no cubierto | archivo fuera de alcance | validación en rojo | protected_path injustificado | efecto prohibido | defecto de spec | laguna de intención>; qué información nueva necesita la siguiente ronda.

### Solicitud de aprobación `high` (sólo si la tarea es high)
- Tipo: fase de efecto (la tarea queda waiting; el worker ejecuta tras la aprobación) | protected_paths (precondición del gate 3; sin fase de efecto)
- Efecto: <qué efecto protegido>
- Digest de la solicitud: `printf '%s' '<id>/T<n> <sha-trabajo> <efecto>' | git hash-object --stdin` → <valor>
- Línea para control:approvals/<id>.md: `high <digest> approved`

## Comprobación posterior — <fecha> (sólo tras una fase de efecto)
- actor_id: <…>
- Entrada «Efecto» de la evidencia: <sha-trabajo> / <sha-entrega>; aprobación releída por el worker ✔
- Observado: <qué se comprobó y cómo>
- Veredicto final: **pass | fail** (no consume ronda)
```
