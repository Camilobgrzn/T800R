# Editor adversarial incremental de T800R

## Alcance y punto de entrada

El editor revisa **todo lo ya decidido**, no sólo el documento que se le adjunte:
índice rector, sesiones 1–7, ADR-001 a ADR-006 y coherencia entre ellos. Prepara
hallazgos fundamentados para una posterior discusión humana.

Empieza por [review-tracker.md](reviews/review-tracker.md). Contiene dos progresos
independientes: análisis adversarial y discusión humana. El
[inventario](reviews/blocks.md) distribuye las 14 fuentes en 45 bloques de hasta
100 líneas y siete cruces transversales. Las fuentes adicionales se consultan
selectivamente como evidencia; los nuevos acuerdos se añaden al inventario.

## Cómo cabe en contexto

- Una ejecución revisa un bloque y, si hace falta, hasta dos fragmentos de
  dependencias. No carga todas las sesiones, todos los ADRs ni todos los reportes.
- El agente localiza el rango del bloque y lee con offset/límite. Los archivos
  canónicos conservan su contenido íntegro: el inventario permite leer porciones
  sin crear copias ni resúmenes con autoridad paralela.
- Si falta contexto, guarda cursor, fuentes consultadas, análisis pendiente y
  próxima acción en `docs/reviews/blocks/<ID>.md`, y termina la ejecución.
- En la siguiente invocación retoma el checkpoint. Una sesión nueva puede continuar
  sin historial de conversación. El número de líneas no garantiza un presupuesto
  de tokens, por lo que una tabla o fuente grande se examina en partes.

## Archivos y responsabilidades

| Archivo | Función |
| --- | --- |
| [Tracker](reviews/review-tracker.md) | Qué se revisó, qué falta, qué está listo para discutir y próxima unidad. |
| [Inventario](reviews/blocks.md) | Rangos exactos del PRD y ADRs, IDs estables y cruces a contrastar. |
| [Plantilla de bloque](reviews/BLOCK-TEMPLATE.md) | Base examinada, cobertura, evidencia, hallazgos, cursor y discusión. |
| [Plantilla de hallazgo](reviews/TEMPLATE.md) | Una propuesta con fundamento, enlace a fuente, impacto y resolución humana. |
| [Instrucciones comunes](reviews/adversarial-editor-prompt.md) | Protocolo que cargan ambos agentes. |
| [Agente OpenCode](../.opencode/agents/t800r-adversarial-editor.md) | Lee fuentes y escribe sólo en rutas de progreso y resultados permitidas. |
| [Agente Claude Code](../.claude/agents/t800r-adversarial-editor.md) | Mismo protocolo, con Read/Glob/Grep/WebFetch/WebSearch/Write/Edit. |

OpenCode delimita escritura por patrones de permisos. En Claude Code, `tools`
habilita Write/Edit y el alcance por rutas es una instrucción del agente, no una
restricción de filesystem de ese campo. Ambos tienen prohibido modificar PRD,
ADRs, acuerdos y tracker de definición. No tienen shell ni subdelegación.

## Ejecución

Se recomienda **Astra o Fable**. Los archivos no fijan un ID de proveedor.
En OpenCode, selecciona el modelo disponible con `/models` (o consulta
`opencode models`) y luego invoca:

```text
@t800r-adversarial-editor Continúa la revisión integral desde
docs/reviews/review-tracker.md. Revisa el siguiente bloque y guarda el progreso.
```

En Claude Code selecciona Fable con `/model fable` si tu cuenta lo ofrece y pide:

```text
Usa t800r-adversarial-editor para continuar la revisión integral desde
docs/reviews/review-tracker.md. Revisa el siguiente bloque y guarda el progreso.
```

OpenCode hereda el modelo del agente que invoca. En Claude Code puede prevalecer
una selección por invocación o `CLAUDE_CODE_SUBAGENT_MODEL`; consulta `/tasks`
cuando la versión lo permita para comprobar el modelo efectivo.

Para discutir un resultado, basta pedir:

```text
Discutamos el bloque B001: lee su resultado y sus hallazgos enlazados,
y abre sólo los fragmentos canónicos necesarios para resolverlos.
```

El coordinador registra tus decisiones. `reviewed` nunca significa `accepted`:
se puede discutir un bloque terminado mientras el revisor continúa con otro.
La revisión global exige completar también los cruces transversales.

## Evidencia y segunda pasada

Cada hallazgo incluye ubicación exacta, base examinada, fuente primaria consultada,
enlace, sección/versión/fecha, observación separada de inferencia, impacto,
contraargumento y propuesta mínima. Las contradicciones internas citan los dos
acuerdos. Si falta respaldo, queda como investigación pendiente, no como error
demostrado. El agente no acepta sus propias propuestas ni resuelve por la persona.

## Recarga y fuentes de configuración

Reinicia OpenCode para aplicar cambios de agentes. En Claude Code, reinicia si el
directorio de agentes no existía al iniciar o si tu versión no recarga los archivos.

Referencias oficiales consultadas para configurar los agentes (2026-09-21):

- [OpenCode: Agents](https://opencode.ai/docs/agents/): Markdown, modelos y permisos.
- [OpenCode: esquema](https://opencode.ai/config.json): configuración de agentes y permisos.
- [Claude Code: subagents](https://code.claude.com/docs/en/sub-agents): frontmatter,
  lista de herramientas, herencia de modelos y recarga.

La preparación del inventario no cuenta como revisión: los 45 bloques y los siete
cruces comienzan pendientes. No hay hallazgos ni aprobación inventados.
