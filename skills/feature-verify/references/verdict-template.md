# Plantilla de `features/<id>/evidence/<task>.verdict.md`

Lo escribe **sólo el verifier**. Una entrada por ronda, append-only.

```markdown
# Veredicto: <id> / T<n>

## Ronda <k> — <YYYY-MM-DDTHH:MM>

- actor_id: <proveedor>:<máquina o usuario>
- Proveedor / sesión: <…>
- SHA verificado: <sha> (coincide con la entrega de evidence/T<n>.md ronda <k>)
- Plan digest vigente: <…> ✔

### Elegibilidad
- participations.md leído completo ✔
- Mi actor_id no figura como worker/owner de T<n> ✔
- Línea `delivered` del worker <actor_id> presente y coherente con la evidencia ✔
(Si algo falla, este archivo no se escribe: el verifier se detiene y reporta al
orchestrator, que registra `ineligible` en participations.md.)

### Protected paths
- Diff toca protected_paths: no | sí (<archivos>) → revisados antes de ejecutar: justificado / injustificado

### Validaciones reejecutadas
| Comando | Resultado | Código | Reutilizado (vigencia) | Nota |
| --- | --- | --- | --- | --- |
| `<comando 1>` | pasó / falló | 0 / n | no | |
| `<comando 2>` | pasó | 0 | sí: mismo SHA, comando y entorno; salida capturada | |

### A. Cumplimiento de la spec
| Criterio | Estado | Evidencia |
| --- | --- | --- |
| CA<n> / aceptación T<n> | cumplido / parcial / no | <salida, prueba, observación> |
- Archivos fuera de los permitidos: ninguno | <lista>
- Cambios de comportamiento fuera del alcance: ninguno | <descripción>

### B. Calidad técnica
- Bloqueante: <lista> | ninguno
- No bloqueante: <lista> | ninguno

### Veredicto
**pass | concerns | fail**

- Si concerns: <observaciones no bloqueantes; sin incumplimiento ni riesgo pendiente; los acepta la persona en el gate 3>
- Si fail: clase = <defecto de implementación | criterio no cubierto | archivo fuera de alcance | validación en rojo | protected_path injustificado | defecto de spec | laguna de intención>; qué información nueva necesita la siguiente ronda.

### Solicitud de aprobación `high` (sólo si la tarea es high)
- Efecto: <qué efecto protegido>
- Digest de la solicitud: `printf '%s' '<id>/T<n> <sha> <efecto>' | git hash-object --stdin` → <valor>
- Línea para control:approvals/<id>.md: `high <digest> approved`
```
