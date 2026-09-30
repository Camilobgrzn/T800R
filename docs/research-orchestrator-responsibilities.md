# Investigación: responsabilidades del orchestrator

Fecha de consulta: 2026-09-15. Estado: evidencia para la sesión 4; las
recomendaciones no son acuerdos hasta que el usuario las acepte.

## Pregunta

¿Debe un único orchestrator investigar, planificar, descomponer, asignar,
ejecutar y verificar, o conviene separar esas funciones?

## Evidencia de las referencias del SDLC

| Referencia | Distribución observada |
| --- | --- |
| Addy Osmani | Las skills preparan specs y planes; `/build auto` recorre tareas después de aprobación y `/ship` reúne evidencia. Los comandos coordinan, pero las funciones siguen separadas por etapa. |
| nWave | DISCOVER–DESIGN producen entendimiento; DELIVER coordina roadmap, ejecutores y gates. La coordinación no equivale a realizar personalmente cada actividad. |
| Matt Pocock | Skills distintas entrevistan, modelan, crean tickets, implementan y revisan. No se demostró un supervisor general ni una reserva atómica de tareas. |
| Superpowers | `brainstorming` y `writing-plans` preparan; `subagent-driven-development` coordina briefs; workers implementan y la revisión ocurre por tarea y globalmente. |
| BMAD | Investigación y readiness preparan unidades; `build-auto` ejecuta una unidad y publica el resultado, pero no elige backlog ni sustituye al coordinador. |
| OpenSpec y Spec Kit | Separan propuesta/spec/diseño, aplicación y análisis/convergencia. No demuestran un scheduler ni obligan a materializar cada función como agente permanente. |

La evidencia local favorece separar responsabilidades conceptualmente. Sólo
algunos flujos las materializan como agentes distintos; ninguno justifica crear
un agente permanente para cada función.

## Evidencia primaria externa

| Fuente | Hallazgo aplicable |
| --- | --- |
| Anthropic, sistema multiagente de Research | Usa un patrón orchestrator-worker: `LeadResearcher` planifica y delega búsquedas independientes; subagentes exploran y un `CitationAgent` verifica atribución. Recomienda objetivos, formato, herramientas y límites explícitos. Advierte que multiagente usa aproximadamente 15 veces los tokens de chat y que la mayoría de tareas de código tiene menos paralelismo útil. |
| OpenAI Agents SDK | Distingue manager con especialistas como tools de handoffs que transfieren control. La orquestación por código ofrece más determinismo en velocidad, coste y rendimiento; la dirigida por LLM es flexible para problemas abiertos. |
| Google Cloud Architecture Center | Recomienda seleccionar patrón según el flujo: secuencial para dependencias, paralelo para trabajo independiente, routing para especialidad y jerárquico para coordinación. La complejidad multiagente sólo se justifica por modularidad, paralelismo o aislamiento reales. |
| Microsoft AutoGen | El patrón reflection separa generador y reviewer mediante un protocolo explícito y una condición de terminación. Ilustra separación de ejecución y verificación, no autoridad de seguridad automática. |

## Funciones que conviene distinguir

| Función | Responsabilidad | Puede delegarse |
| --- | --- | --- |
| Decisión y planificación | Convertir intención y evidencia en acuerdos, alcance y aceptación. | Investigación y análisis sí; cambios de acuerdos conservan la autoridad humana aceptada. |
| Descomposición | Proponer tareas, dependencias, validaciones y orden ejecutable. | Sí, a una capacidad planner; el orchestrator comprueba que respeta acuerdos y readiness. |
| Coordinación | Mantener estado, ownership, concurrencia, autorizaciones, reanudación y selección del siguiente trabajo. | Puede usar herramientas deterministas, pero el orchestrator conserva accountability de coherencia. |
| Ejecución | Producir artefactos dentro de un brief y permisos. | Sí, a workers especializados. |
| Verificación | Comprobar resultado y evidencia contra criterios; separar reviewer cuando el riesgo lo exige. | Sí, preservando independencia y los gates humanos acordados. |

## Alternativas para T800R

| Alternativa | Beneficio | Coste o riesgo |
| --- | --- | --- |
| Orchestrator monolítico | Menos handoffs y contexto compartido. | Sobrecarga, menor independencia y punto único de fallo; mezcla accountability con ejecución. |
| Orchestrator delgado con capacidades bajo demanda | Un interlocutor y estado coherente; planner, researcher, worker y verifier sólo se invocan cuando aportan. | Requiere contratos de trabajo, límites y retorno explícitos. |
| Equipo fijo de agentes por rol | Especialización visible. | Coste y handoffs incluso para tareas simples; la evidencia no justifica hacerlo universal. |

## Recomendación pendiente

Adoptar un **orchestrator delgado**. Conserva la responsabilidad por reconciliar
el estado real, aplicar acuerdos y políticas, asignar ownership, coordinar
dependencias y decidir la transición siguiente. Puede solicitar a capacidades
especializadas investigación, propuesta de plan y descomposición, ejecución y
verificación. No rehace su trabajo: valida contratos, evidencia y coherencia.

Empezar con una capacidad general y workflows deterministas. Separar agentes
cuando existan independencia, especialidad, riesgo o contexto suficientes; no por
cada etapa de forma automática. La descomposición es responsabilidad del proceso
de planificación, no una obligación de que el orchestrator genere personalmente
todas las tareas.

## Fuentes

- [Anthropic: How we built our multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system), publicado el 2025-06-13.
- [OpenAI Agents SDK: Agent orchestration](https://openai.github.io/openai-agents-js/guides/multi-agent/), consultado el 2026-09-15.
- [OpenAI: A practical guide to building agents](https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf), 2025.
- [Google Cloud: Choose a design pattern for your agentic AI system](https://docs.cloud.google.com/architecture/choose-design-pattern-agentic-ai-system), consultado el 2026-09-15.
- [Google Cloud: Choose agentic AI architecture components](https://docs.cloud.google.com/architecture/choose-agentic-ai-architecture-components), consultado el 2026-09-15.
- [Microsoft AutoGen: Reflection](https://microsoft.github.io/autogen/stable/user-guide/core-user-guide/design-patterns/reflection.html), documentación oficial, consultada el 2026-09-15.
- Evidencia local con revisiones fijadas: [referencias SDLC](research-sdlc-references.md), [Superpowers y BMAD](research-superpowers-bmad.md) y [especificaciones evolutivas](research-evolutionary-specs.md).
