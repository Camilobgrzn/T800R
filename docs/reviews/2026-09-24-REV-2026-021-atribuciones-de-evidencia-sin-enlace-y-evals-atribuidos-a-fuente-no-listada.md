# Anotación de revisión

- ID de anotación: `REV-2026-021`
- Unidad y ubicación: `S03-prácticas-candidatas-de-los-artículos` —
  [session-03-sources-of-truth.md, matriz «Prácticas candidatas de los artículos»](../definition/session-03-sources-of-truth.md#prácticas-candidatas-de-los-artículos)
  (l. 217-224), con
  [«Evidencia investigada»](../definition/session-03-sources-of-truth.md#evidencia-investigada)
  (l. 178-188) y la fila de evaluación de skills de la tabla de decisiones
  (l. 46). Bloque `B011`.
- Revisión examinada: 2026-09-24; repositorio sin commits. Citas distintivas:
  «Anthropic, evals ante cambios del harness» (l. 224); «El usuario aceptó la
  práctica respaldada por la investigación» (l. 46); «tres agentes investigaron
  prácticas de registro de fuentes, acceso mediante RAG/MCP y autoridad y
  discrepancias» (l. 180-181)
- Tipo: `incompleto`
- Gravedad: `baja`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos; `media` sobre el impacto
- Impacto: la verificabilidad de las decisiones «respaldadas por la
  investigación» y de la revisión transversal de prácticas, cuyo criterio de
  cierre exige «decisiones y pendientes trazables» (ver
  [`REV-2026-005`](2026-09-21-REV-2026-005-revision-transversal-sin-rastro-s05-s07.md)).
  No cambia el contenido de ningún acuerdo: las afirmaciones atribuidas se
  sostienen en fuentes primarias; lo que falla es el camino de la fila a su
  fuente y, en un caso, la fuente señalada.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado`
- Fuente primaria:
  1. Anthropic, «Effective harnesses for long-running agents»,
     <https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents>,
     publicado 2025-11-26; consultado 2026-09-24 (dos lecturas con preguntas
     distintas). Secciones: «Environment management», «Feature list»,
     «Incremental progress», «Testing», «Getting up to speed», «Agent failure
     modes and solutions», «Future work». Las palabras «eval», «evaluation»,
     «regression» y «benchmark» no aparecen en el artículo. Sí dice: «Start the
     session by reading the progress notes file and git commit logs, and run a
     basic test on the development server to catch any undocumented bugs».
     Fuerza `alta` para lo que no contiene y para l. 221; pertinencia directa a
     l. 221 y l. 224.
  2. Anthropic (Claude), «The AI-Native SDLC playbook», Louis Claxton,
     <https://claude.com/blog/the-ai-native-sdlc-playbook>, publicado
     2026-08-21; consultado 2026-09-24. Cita: «The suite runs non-interactively
     in CI on a schedule and on any change to `CLAUDE.md`, skills or hooks, since
     that configuration steers the agent and deserves the regression testing that
     code gets»; «Gate configuration changes on the results». Fuerza `alta`;
     es la fuente real de l. 224, vía
     `docs/research-ai-native-sdlc-playbook.md` l. 8, 34 y 62 y S04 l. 62-67 y
     111.
  3. Agent Skills, «Evaluating skill output quality»,
     <https://agentskills.io/skill-creation/evaluating-skills>, sin fecha ni
     versión visibles; consultado 2026-09-24. Citas: «run each test case twice:
     once **with the skill** and once **without it** (or with a previous
     version)»; «Each eval run should start with a clean context»; «Timing data
     lets you compare how much time and tokens the skill costs relative to the
     baseline». Fuerza `alta`; respalda la parte de calidad, coste y línea base
     de l. 46.
  4. OpenAI/ChatGPT Learn, «Build skills»,
     <https://learn.chatgpt.com/docs/build-skills> (destino de la redirección
     308 de `https://developers.openai.com/codex/skills`), sin fecha visible;
     consultado 2026-09-24. Cita: «Test prompts against the skill description to
     confirm the right trigger behavior». Fuerza `alta`; respalda la parte de
     activación de l. 46.
  5. OpenAI, «Harness engineering: leveraging Codex in an agent-first world»,
     <https://openai.com/index/harness-engineering/>. La lectura directa
     devolvió HTTP 403 y el archivo web no está disponible desde esta
     herramienta; se usaron extractos de resultados de búsqueda restringida a
     `openai.com` (2026-09-24): AGENTS.md tratado como «the table of contents»
     y no «the encyclopedia»; «custom linters and structural tests, plus a small
     set of "taste invariants"»; «A recurring "doc-gardening" agent scans for
     stale or obsolete documentation». Fuerza `media` (extractos, no lectura
     completa); respalda l. 219, 220 y 223.
  6. GoogleCloudPlatform, «Open Knowledge Format», README
     <https://github.com/GoogleCloudPlatform/open-knowledge-format> y SPEC.md
     fijada al commit `ad30107c31c06aec8a7d5636e0d1058118604e6f`
     (<https://github.com/GoogleCloudPlatform/open-knowledge-format/blob/ad30107c31c06aec8a7d5636e0d1058118604e6f/SPEC.md>);
     consultados 2026-09-24. Confirman «Open Knowledge Format v0.2 specification»
     y los dos cambios respecto de v0.1: «`timestamp` is superseded by
     `generated.at`» y «The body `# Citations` list is superseded by `sources`».
     Fuerza `alta`; respalda l. 192-193 y 198-199. No se leyó el anuncio de
     Google Cloud (v0.1).
- Sección o localizador: interno, l. 46, 178-188, 198-200, 217-224; externo,
  los indicados por fuente.
- Fecha de consulta/publicación: consulta 2026-09-24; acuerdos de S03
  confirmados el 2026-09-14 según la cabecera de la unidad; la matriz fue
  editada después (marca «`accepted` en sesión 4», l. 224).
- Hecho observado:
  1. La columna «Evidencia» (l. 219-224) cita autores y títulos abreviados
     («OpenAI, Harness engineering»; «OKF, índices»; «LLM Wiki, revisión
     periódica»; «StrongDM, Pyramid Summaries»; «Anthropic, agentes de larga
     duración»; «Anthropic, evals ante cambios del harness») sin enlace. Las
     URLs de OpenAI, Anthropic (harnesses), Karpathy (LLM Wiki) y StrongDM
     están en `docs/research-open-knowledge-format.md` l. 118-122, documento
     que S03 enlaza en l. 198 como investigación de OKF, no como fuente de la
     matriz. El índice rector (`docs/product-definition.md` l. 105-107) lista
     tres fuentes de partida: OpenAI «Harness engineering» y dos artículos de
     Anthropic («Effective harnesses…» y «Effective context engineering…»).
  2. «Anthropic, evals ante cambios del harness» (l. 224) no procede del
     artículo de Anthropic listado: ese artículo no contiene «eval» ni
     «regression» (fuente 1). La afirmación está en el playbook de claude.com
     (fuente 2), consultado en S04 y citado en
     `docs/research-ai-native-sdlc-playbook.md` l. 34 («ejecutar evals ante
     cambios al harness») y l. 62. Ni S03 ni el índice rector enlazan ni listan
     el playbook; S03 l. 200 nombra «prácticas documentadas por OpenAI,
     Anthropic y StrongDM» de la investigación ampliada, que enlaza el artículo
     de harnesses (l. 120 de esa investigación), no el playbook.
  3. La decisión de skills (l. 45-46: «pidió contrastarlo con el mercado»; «la
     práctica respaldada por la investigación») no tiene investigación enlazada
     en S03: «Evidencia investigada» (l. 180-188) describe sólo la investigación
     de fuentes (tres agentes) y, en l. 190-208, la de OKF; la búsqueda de
     `research-` en la unidad sólo devuelve l. 183 y 198.
     `docs/research-agent-skills.md` (l. 46-50, referencias 3 y 7) es donde
     está el respaldo, y sus fuentes primarias confirman el contenido de l. 46
     (fuentes 3 y 4).
  4. Las demás atribuciones comprobadas se sostienen: l. 221 en la fuente 1;
     l. 219, 220 y 223 en la fuente 5 (con fuerza `media`); l. 192-193 y
     198-199 en la fuente 6. No se comprobaron «StrongDM, Pyramid Summaries»,
     «StrongDM, validación por escenarios», «LLM Wiki, revisión periódica» ni
     «OKF, índices» en su fuente primaria.
- Inferencia (si aplica): el defecto es de trazabilidad, no de contenido. Un
  lector de S03 no puede ir de una fila de la matriz, ni de la justificación de
  l. 46, a la fuente que la respalda sin pasar por documentos no enlazados; y
  en l. 224 la fuente listada que lleva el nombre de Anthropic no contiene la
  práctica atribuida.

## Observación y propuesta

- Observación: S03 l. 187-188 y l. 213 aclaran con acierto que la investigación
  no confiere estado a una práctica. Pero el criterio de cierre global exige que
  las decisiones sobre prácticas sean trazables, y l. 46 se justifica con «la
  investigación» sin decir cuál. La atribución «Anthropic» de l. 224 es
  institucionalmente correcta y materialmente equívoca: apunta al autor de un
  artículo listado que no dice eso, mientras la fuente real (playbook,
  2026-08-21) no está listada en ninguna unidad de S01-S03 ni en el índice.
- Propuesta concreta: (a) enlazar cada celda de «Evidencia» a su URL primaria o
  al documento de investigación que la contiene; (b) sustituir en l. 224
  «Anthropic, evals ante cambios del harness» por una referencia al playbook
  (o al documento que la persona reconozca como fuente); (c) enlazar desde la
  justificación de l. 46 o desde «Evidencia investigada»
  `docs/research-agent-skills.md`; (d) decidir si el playbook se incorpora a
  las «Fuentes de partida» del índice rector o si se registra que S04 amplió las
  fuentes de la revisión transversal.
- Contraargumento o coste/riesgo: los enlaces existen en los documentos de
  investigación y la unidad remite a ellos en l. 183 y 198; el índice rector
  l. 109-111 declara que los artículos son evidencia y no decisiones; el coste
  es una edición menor de una sesión cerrada. Ninguna decisión cambia de
  sentido al corregirlo.

## Análisis adicional

- Evidencia interna: l. 46 (justificación sin fuente enlazada); l. 180-188 y
  198-200 (qué investigaciones enumera S03); l. 217-224 (columna «Evidencia»);
  `docs/product-definition.md` l. 105-107 (fuentes de partida) y l. 126-128
  («Para cada práctica revisada se registrarán fuente…»);
  `docs/research-ai-native-sdlc-playbook.md` l. 8, 34 y 62;
  `docs/definition/session-04-operating-cycle.md` l. 62-67 y 111;
  `docs/research-agent-skills.md` l. 46-50 y 96-102;
  `docs/research-open-knowledge-format.md` l. 71-76 y 118-122.
- Contraevidencia y límites: el artículo de OpenAI no se leyó completo (403);
  los extractos de búsqueda coinciden con `research-open-knowledge-format.md`
  l. 74, pero la fuerza es `media`. No se comprobaron las atribuciones a
  StrongDM, LLM Wiki ni «OKF, índices» (sí se confirmó la versión v0.2 del
  formato). Es posible que la persona considere «Anthropic» suficiente como
  atribución institucional; entonces queda sólo la falta de enlace. No se
  leyeron S06, S07 ni S12 para saber si un registro posterior ya enlaza las
  fuentes.
- Pregunta para resolver: ¿debe cada fila de la matriz y cada justificación
  «respaldada por la investigación» enlazar su fuente primaria o su documento
  de investigación, y se reconoce el playbook «AI-Native SDLC» (2026-08-21)
  como fuente de la revisión transversal, corrigiendo la atribución de l. 224?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B011](blocks/B011.md), [B009](blocks/B009.md)
  (pregunta 6),
  [`REV-2026-005`](2026-09-21-REV-2026-005-revision-transversal-sin-rastro-s05-s07.md),
  [`REV-2026-022`](2026-09-24-REV-2026-022-matriz-de-practicas-con-marcas-de-aceptacion-parciales-frente-a-s04.md)

## Preguntas pendientes

Ver el checkpoint [B011](blocks/B011.md).

## Cobertura y límites

Ver el checkpoint [B011](blocks/B011.md). Fuentes externas consultadas: las
seis fichas anteriores; no consultadas: StrongDM, gist de Karpathy, anuncio de
Google Cloud, artículo de Anthropic sobre context engineering.
