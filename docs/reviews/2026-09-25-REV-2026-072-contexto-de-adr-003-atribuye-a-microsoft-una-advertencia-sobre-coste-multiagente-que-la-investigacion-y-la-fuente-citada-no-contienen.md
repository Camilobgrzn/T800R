# Anotación de revisión

- ID de anotación: `REV-2026-072`
- Unidad y ubicación: `ADR-003` — [«Contexto»](../adr/ADR-003-ciclo-operativo-y-coordinacion.md#contexto),
  `docs/adr/ADR-003-ciclo-operativo-y-coordinacion.md:28-33`, frente a
  [`research-orchestrator-responsibilities.md`](../research-orchestrator-responsibilities.md#evidencia-primaria-externa)
  (l. 26-33, 67-74) y a `S04` l. 54-59. Bloque `B035`.
- Revisión examinada: estado de los archivos al 2026-09-25 (repositorio sin
  commits; ADR-003 fechado 2026-09-15). Cita distintiva: «Anthropic, OpenAI,
  Google y Microsoft también advierten que el multiagente añade coste y
  coordinación y debe utilizarse donde aporta independencia o especialidad
  real» (l. 31-33).
- Tipo: `error`
- Gravedad: `baja`
- Estado: `deferred`
- Confianza: `alta` para Microsoft (fuente citada leída); `media` para OpenAI
  (no verificada)
- Impacto: la base externa que el ADR presenta como convergencia de cuatro
  proveedores para el orchestrator delgado y la separación proporcional
  (alternativa aceptada, l. 42). La decisión no cambia: Anthropic y Google la
  respaldan. Cambia lo que el ADR puede afirmar como consenso y su
  trazabilidad.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado`.
- Fuente primaria (fichas):
  1. Microsoft AutoGen, «Reflection — AutoGen»,
     <https://microsoft.github.io/autogen/stable/user-guide/core-user-guide/design-patterns/reflection.html>
     (única fuente de Microsoft citada por la investigación, l. 74), sin
     versión ni fecha visibles; consulta 2026-09-25. Extracto: «Reflection is a
     design pattern where an LLM generation is followed by a reflection, which
     in itself is another LLM generation conditioned on the output of the first
     one.» Paráfrasis fiel del resultado de la lectura: la página trata la
     implementación del patrón con código de ejemplo y no contiene advertencias
     sobre coste, sobrecarga de coordinación ni sobre cuándo usar varios
     agentes. Fuerza `alta` para lo que la página no dice; pertinencia: es la
     fuente que sostiene la mención de Microsoft.
  2. Google Cloud Architecture Center, «Choose a design pattern for your agentic
     AI system», <https://docs.cloud.google.com/architecture/choose-design-pattern-agentic-ai-system>,
     «Last reviewed 2026-05-28 UTC»; consulta 2026-09-25. Extractos: «Building a
     multi-agent system requires additional evaluation, security, reliability,
     and cost considerations when compared to a single-agent system»; «Running
     multiple agents in parallel can increase immediate resource utilization and
     token consumption, which leads to higher operational costs». **Confirma**
     la mención de Google. Fuerza `alta`.
  3. Anthropic, «How we built our multi-agent research system» (2025-06-13):
     comprobada por `B013` el 2026-09-24 («multi-agent systems use about 15×
     more tokens than chats»; menor paralelismo en tareas de código).
     **Confirma**. No se reconsultó.
  4. OpenAI Agents SDK, «Agent Orchestration»,
     <https://openai.github.io/openai-agents-js/guides/multi-agent/>; consulta
     2026-09-25: la herramienta sólo devolvió navegación, sin el cuerpo de la
     guía. **No verificada.** «A practical guide to building agents» (PDF en
     `cdn.openai.com`, investigación l. 71) no se intentó (OpenAI HTTP 403 en
     `B011`/`B017`).
- Sección o localizador: interno, ADR-003 l. 31-33; investigación l. 30-33
  (tabla «Evidencia primaria externa») y l. 69-74 («Fuentes»).
- Fecha de consulta/publicación: consulta 2026-09-25; ADR-003 2026-09-15;
  investigación consultada el 2026-09-15.
- Hecho observado:
  1. ADR-003 l. 31-33 atribuye a los cuatro proveedores la misma advertencia:
     el multiagente «añade coste y coordinación» y «debe utilizarse donde aporta
     independencia o especialidad real».
  2. La investigación en que se apoya (enlazada en «Referencias» l. 131 y en
     S04 l. 54) registra para Microsoft sólo que «El patrón reflection separa
     generador y reviewer mediante un protocolo explícito y una condición de
     terminación. Ilustra separación de ejecución y verificación, no autoridad
     de seguridad automática» (l. 33). No le atribuye advertencia alguna sobre
     coste o coordinación, y la página citada tampoco la contiene (ficha 1).
  3. Para OpenAI, la investigación registra que «La orquestación por código
     ofrece más determinismo en velocidad, coste y rendimiento; la dirigida por
     LLM es flexible para problemas abiertos» (l. 31): compara dos modos de
     orquestación, no advierte que el multiagente añada coste frente a un
     agente único.
  4. Para Google (l. 32: «La complejidad multiagente sólo se justifica por
     modularidad, paralelismo o aislamiento reales») y Anthropic (l. 30: «15
     veces los tokens»), la investigación sí registra la advertencia, y las
     fuentes la confirman (fichas 2 y 3).
- Inferencia (si aplica): el ADR generaliza a cuatro proveedores una
  advertencia que su propia evidencia registra en dos. La mención de Microsoft no
  tiene respaldo en la fuente citada; la de OpenAI no está demostrada con lo
  registrado.

## Observación y propuesta

- Observación: es una sobreatribución en la justificación, no un defecto de la
  decisión. Importa porque el «Contexto» es lo que un lector consulta para
  saber qué respaldo externo tiene el orchestrator delgado, y porque la
  pregunta 5 de `B013` dejó a la persona decidir si bastaba con la fuente de
  Anthropic.
- Propuesta concreta: que la persona decida (a) reducir l. 31-33 a los
  proveedores cuya advertencia consta (Anthropic y Google), o (b) añadir a la
  investigación la fuente de Microsoft y de OpenAI que sostenga la advertencia,
  con cita y fecha; en ambos casos, dejar a Microsoft AutoGen como ejemplo de
  separación entre generador y reviewer, que es lo que la investigación le
  atribuye. No editar ADR-003 ni la investigación sin esa decisión.
- Contraargumento o coste/riesgo: otras páginas de Microsoft u OpenAI no
  citadas pueden contener la advertencia (la guía práctica de OpenAI en PDF no
  se leyó); «también advierten» puede leerse como síntesis general de la
  investigación, no como atribución a cada fuente. El coste de corregirlo es
  una frase.

## Análisis adicional

- Evidencia interna: investigación l. 30-33 frente a ADR-003 l. 31-33; S04
  l. 55-58 formula la síntesis de otro modo («La evidencia separa
  planificación, descomposición, coordinación, ejecución y verificación, y no
  respalda que un único agente deba realizarlas todas»), sin atribuir la
  advertencia de coste a cada proveedor.
- Contraevidencia y límites: la lectura de la página de AutoGen se hizo con una
  herramienta que resume el contenido; se conserva la cita literal que
  devolvió y la ausencia de advertencias como paráfrasis. No se buscaron otras
  páginas de Microsoft porque ni el ADR ni la investigación las citan. La
  segunda página de Google (investigación l. 73) no se consultó; no hace falta
  para confirmar la mención de Google.
- Pregunta para resolver: ¿qué fuentes de Microsoft y OpenAI sostienen que el
  multiagente añade coste y coordinación, o debe l. 31-33 limitarse a Anthropic
  y Google?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B035](blocks/B035.md), [B013](blocks/B013.md)
  (ficha 1 y pregunta 5),
  [`REV-2026-021`](2026-09-24-REV-2026-021-atribuciones-de-evidencia-sin-enlace-y-evals-atribuidos-a-fuente-no-listada.md)
  (atribuciones de evidencia), cruce `CT05`.

## Preguntas pendientes

Ver el checkpoint [B035](blocks/B035.md).

## Cobertura y límites

Ver el checkpoint [B035](blocks/B035.md). Fuentes externas efectivamente
consultadas: AutoGen «Reflection», Google Cloud «Choose a design pattern for your
agentic AI system» y la página del Agents SDK de OpenAI (sin cuerpo devuelto).
