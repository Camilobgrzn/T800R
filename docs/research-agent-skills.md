# Investigación de mercado: Agent Skills

Consulta: 2026-09-14. Insumo documental para sesión 3 y revisión transversal.
Las recomendaciones de este informe no son acuerdos automáticos.

## Alcance y grado de evidencia

Lectura directa de la especificación abierta Agent Skills, documentación de
Codex, Claude Code y OpenCode, y guías de creación y evaluación. Cubre los tres
proveedores objetivo de T800R; no es una encuesta exhaustiva ni una medición de
cuota de mercado. No se instalaron skills ni se ejecutaron experimentos.
Las páginas de producto son documentación viva, consultada en la fecha indicada.

## Hallazgos

1. **Hay un formato común identificable.** Agent Skills define un directorio con
   `SKILL.md`, metadatos YAML y cuerpo Markdown; `name` y `description` son
   obligatorios en el estándar. `scripts/`, `references/` y `assets/` son
   convenciones opcionales. Codex declara apoyarse en ese estándar; Claude Code
   declara seguirlo con extensiones; OpenCode documenta lectura del mismo tipo
   de archivo y un subconjunto de campos [1–4].
2. **La skill puede contener más que pasos.** Anthropic distingue contenido de
   referencia (convenciones, patrones, conocimiento) y contenido de tarea.
   La especificación permite cuerpo libre. Definir en T800R responsabilidad
   principalmente procedural es una decisión de organización, no una restricción
   universal del formato. Puede contener conocimiento de apoyo sin que ese
   empaquetado le otorgue autoridad para cambiar acuerdos [1, 2, 5].
3. **La carga progresiva es una práctica compartida.** Nombre y descripción
   permiten descubrir; el cuerpo se carga al activar; referencias y recursos se
   consultan según necesidad. Codex documenta un presupuesto para el listado
   inicial que puede abreviar descripciones u omitir skills. Muchos paquetes
   instalados no garantizan que todos sean descubiertos [1, 3, 4].
4. **Formato portable no equivale a ejecución portable.** Rutas, invocación,
   colisiones de nombres y metadatos específicos varían entre proveedores.
   El estándar marca `allowed-tools` como experimental. Claude Code documenta
   preaprobaciones durante el turno de invocación; OpenCode documenta campos
   reconocidos que no incluyen éste y permisos de acceso a skills en su
   configuración. Una integración debe conciliar esta semántica con la política
   de T800R, no trasladar metadatos sin interpretación [1–4].
5. **Una unidad de trabajo coherente es preferible a instrucciones genéricas.**
   Codex recomienda un trabajo por skill, entradas y salidas explícitas y
   preferir instrucciones a scripts salvo necesidad determinista o de herramientas.
   Agent Skills recomienda extraer conocimiento de tareas y artefactos reales,
   evitar contenido que el agente ya domina y calibrar rigidez según fragilidad
   de la operación [3, 6]. Son guías, no resultados controlados universales.
6. **Activación y calidad necesitan evaluaciones distintas.** Codex recomienda
   comprobar el disparo mediante prompts. Agent Skills propone comparar resultados
   con y sin skill, o contra versión anterior, en contextos limpios, incluyendo
   casos límite, evidencia, duración y tokens. Los números de sus ejemplos son
   ilustrativos, no benchmarks del mercado ni de T800R [3, 7].
7. **La mejora puede apoyarse en agentes.** Anthropic propone capturar enfoques
   exitosos y errores recurrentes; las guías recomiendan revisar trazas y eliminar
   instrucciones que generen trabajo improductivo. Eso no demuestra que una
   modificación autogenerada mejore la skill: debe contrastarse [5–7].

## Diferencias relevantes entre proveedores

| Aspecto | Codex | Claude Code | OpenCode |
| --- | --- | --- | --- |
| Activación | Explícita o por descripción; política propia en `agents/openai.yaml`. | Explícita o por relevancia; controles de invocación en front matter. | Carga bajo demanda mediante herramienta `skill`; acceso regulado por configuración. |
| Descubrimiento local | `.agents/skills` por repositorio y usuario, entre otras ubicaciones. | `.claude/skills`, ámbitos personales/proyecto/otros y plugins. | Rutas `.opencode/skills`, `.claude/skills` y `.agents/skills`, con equivalentes globales. |
| Metadatos | Núcleo `name`/`description` más archivo específico de integración. | Amplias extensiones, como `context: fork`, control de invocación y herramientas; documentación de producto permite omitir campos que el estándar exige. | Reconoce `name`, `description`, `license`, `compatibility`, `metadata`; ignora campos desconocidos. |
| Consecuencia | Identificar dependencias y política específica. | Distinguir formato común de funciones exclusivas. | No asumir que un campo aceptado por otro proveedor controle aquí la ejecución. |

Estas ubicaciones son evidencia comparativa, no una selección de rutas para T800R.

## Recomendaciones pendientes para T800R

- Entender cada skill como una capacidad reutilizable con procedimiento y
  contexto de apoyo; respetar las fuentes canónicas ya acordadas.
- Declarar alcance, activación, entradas, resultados, referencias y requisitos
  de ejecución con detalle proporcional a la tarea. El estándar no exige un
  esquema fijo de entradas/salidas; ese perfil sería de T800R.
- Separar contenido común de extensiones de proveedor y comprobar capacidades
  reales. Mantener visible qué revisión/origen de una skill se utilizó.
- Evaluar cuándo se activa y qué resultado produce. Comparar con una base sin
  skill o con la versión previa; usar casos de no activación y restricciones
  del proyecto, además de casos exitosos.
- Mejorar desde experiencia y evidencia. La publicación autónoma de mejoras y
  su política de revisión todavía requieren definición.

## Decisiones que corresponden a otras sesiones

- Sesión 6: presupuestos y selección de contexto de skills y referencias.
- Sesión 7: relación con conocimiento, aprendizaje y mantenimiento.
- Sesión 8: formato común, capacidades, extensiones y adapters.
- Sesión 9: permisos y autorización efectiva frente a metadatos de skills.
- Sesión 10: distribución, incorporación, actualización y colisiones.
- Sesión 12: evaluaciones de activación, calidad, coste y regresiones.

El papel de las skills aceptado en sesión 3 no implica seleccionar un paquete,
crear un catálogo extenso ni aprobar automáticamente estas recomendaciones.

## Referencias primarias

1. Agent Skills, especificación: https://agentskills.io/specification
2. Claude Code, skills: https://code.claude.com/docs/en/skills
3. Codex, creación de skills: https://developers.openai.com/codex/skills (redirige a Build skills).
4. OpenCode, Agent Skills: https://opencode.ai/docs/skills/
5. Anthropic, Equipping agents for the real world with Agent Skills: https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills
6. Agent Skills, prácticas de creación: https://agentskills.io/skill-creation/best-practices
7. Agent Skills, evaluación: https://agentskills.io/skill-creation/evaluating-skills
