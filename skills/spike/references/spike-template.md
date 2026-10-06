# Plantilla de `spikes/<id>.md`

```markdown
# Spike: <id> — <pregunta en una línea>

- Fecha: <YYYY-MM-DD>
- Solicitado por / decisión que bloquea: <spec CA<n> | plan T<n> | S12 pregunta <n>>
- Autorización: `spike <id> approved` en control:approvals/spikes.md | contemplado en plan <digest> T<n>
- actor_id: <usuario>-a<n>
- Presupuesto: <n turnos | n minutos>
- Rama de destino del informe: feat/<id> | rama de la definición (commit `spike: <id>`)
- Rama desechable: spike/<id> (último SHA: <…>; descartada el <fecha>, después de persistir este archivo)

## Pregunta
<una pregunta concreta, con la observación que la respondería>

## Alcance
- Dentro: <…>
- Fuera: <…> (nada externo, nada en main, ninguna dependencia fuera del worktree)

## Hipótesis
1. <…>

## Qué se probó
| Paso | Comando / acción | Resultado | Entorno |
| --- | --- | --- | --- |
| 1 | `<…>` | <…> | <SO, Node, versión de la herramienta> |
| 2 | `<…>` | no ejecutado: <motivo> | |

## Respuesta
<una o dos frases> — confianza: alta | media | baja.
Límites: <qué no se probó y por qué importa>.

## Decisión que desbloquea
<qué puede decidir ahora la persona o el planner, y a qué skill vuelve el flujo>

## Contexto consultado (orienta, no sustenta)
- <documentación, fuentes, con revisión>
```
