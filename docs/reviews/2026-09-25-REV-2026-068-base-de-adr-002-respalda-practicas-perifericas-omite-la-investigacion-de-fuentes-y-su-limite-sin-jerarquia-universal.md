# Anotación de revisión

- ID de anotación: `REV-2026-068`
- Unidad y ubicación: `ADR-002` — [«Contexto»](../adr/ADR-002-fuentes-canonicas-y-conocimiento.md#contexto)
  y [«Por qué la decisión (qué dice la industria)»](../adr/ADR-002-fuentes-canonicas-y-conocimiento.md#por-qué-la-decisión-qué-dice-la-industria),
  `docs/adr/ADR-002-fuentes-canonicas-y-conocimiento.md:40-42, 59-70`, frente a
  `S03` — [«Evidencia investigada»](../definition/session-03-sources-of-truth.md#evidencia-investigada)
  (l. 178-188) y a `docs/research-fuentes-sesion-3.md` (l. 20-28, 53-67). Bloque
  `B032`.
- Revisión examinada: estado de los archivos al 2026-09-25 (repositorio sin
  commits; ADR-002 y la investigación de fuentes fechados 2026-09-14). Citas
  distintivas: «La investigación sobre harnesses, conocimiento y skills aporta
  prácticas de orientación progresiva, mantenimiento y evaluación» (ADR-002
  l. 40-41); «Son evidencia de prácticas útiles, no una demostración de que el
  diseño de T800R ya funciona en los tres proveedores» (l. 69-70); «No existe
  en estas referencias una jerarquía universal que resuelva toda contradicción
  entre acuerdos, documentación y código» (investigación, l. 25).
- Tipo: `incompleto`
- Gravedad: `baja`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos; `media` sobre el impacto
- Impacto: la verificabilidad de la justificación del núcleo de ADR-002
  (autoridad por tipo de información y ámbito, registro colaborativo, regla de
  discrepancias) y la visibilidad, desde el ADR, del límite de la investigación
  que coincide con los casos sin salida de `REV-2026-017` y con la pregunta de
  quién incorpora fuentes de `REV-2026-018`. No cambia ningún acuerdo.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado`. Las cuatro afirmaciones externas del rango se
  comprobaron y se confirman; el hallazgo es de omisión interna (qué evidencia
  se cita para qué parte de la decisión).
- Fuente primaria:
  1. W3C, *Data on the Web Best Practices*, W3C Recommendation 31 January
     2017, <https://www.w3.org/TR/dwbp/>, consulta 2026-09-25. Best Practice 5
     «Provide data provenance information» («Provenance is one means by which
     consumers of a dataset judge its quality»); BP 7 «Provide a version
     indicator»; BP 8 «Provide version history»; BP 9-11 sobre URI
     persistentes como identificadores. Alcance: «specifically relevant to data
     published on the Web». Fuerza `alta`; confirma l. 61-62.
  2. W3C, *PROV-Overview*, W3C Working Group Note 30 April 2013,
     <https://www.w3.org/TR/prov-overview/>, consulta 2026-09-25. Define la
     procedencia como «information about entities, activities, and people
     involved in producing a piece of data or thing, which can be used to form
     assessments about its quality, reliability or trustworthiness» y enumera
     «representing derivation». Fuerza `alta`; confirma l. 63.
  3. Agent Skills, «Specification», <https://agentskills.io/specification>, sin
     fecha ni versión visibles, consulta 2026-09-25: «Directory structure»
     (`SKILL.md`, `scripts/`, `references/`, `assets/`) y «Progressive
     disclosure» («Agents load skills *progressively*, pulling in more detail
     only as a task calls for it»). Fuerza `alta`; confirma «empaquetado y carga
     progresiva» (l. 68).
  4. Agent Skills, «Optimizing skill descriptions»,
     <https://agentskills.io/skill-creation/optimizing-descriptions>, sin fecha,
     consulta 2026-09-25: «A skill only helps if it gets activated»; consultas
     con `should_trigger` verdadero y falso y «trigger rate». Y «Evaluating
     skill output quality»,
     <https://agentskills.io/skill-creation/evaluating-skills>, consulta
     2026-09-25: «run each test case twice: once **with the skill** and once
     **without it** (or with a previous version)». Fuerza `alta`; confirman
     «evaluar activación y resultados» (l. 68-69). La guía de activación no
     figura en «Referencias» (l. 159, bloque `B034`).
  5. OpenAI «Harness engineering» y Anthropic «Effective harnesses for
     long-running agents» (l. 66-67): no se volvieron a consultar; `B011` los
     comprobó el 2026-09-24 (OpenAI con fuerza `media` por HTTP 403; Anthropic
     confirma «progress notes file and git commit logs» y la prueba básica al
     retomar).
  Interna: `docs/adr/ADR-002-fuentes-canonicas-y-conocimiento.md:9, 14, 26-29,
  40-42, 59-70, 154`; `docs/definition/session-03-sources-of-truth.md:36, 38,
  180-188`; `docs/research-fuentes-sesion-3.md:3, 20-28, 38-56, 58-67, 73-75`.
- Sección o localizador: ver arriba.
- Fecha de consulta/publicación: consulta 2026-09-25; publicaciones indicadas
  por fuente.
- Hecho observado:
  1. **La investigación que S03 presenta como evidencia no se nombra en el
     rango.** S03 l. 180-185 describe como «Evidencia investigada» la de «tres
     agentes [que] investigaron prácticas de registro de fuentes, acceso
     mediante RAG/MCP y autoridad y discrepancias» y enlaza
     `research-fuentes-sesion-3.md`. ADR-002 l. 40-41 enumera «La investigación
     sobre harnesses, conocimiento y skills» y l. 59-70 no la menciona; sólo
     aparece como enlace en «Referencias» (l. 154). Sin embargo, las dos
     referencias W3C de l. 61-63 proceden de ella (investigación l. 23-24 y
     73-75).
  2. **Las cuatro bases externas respaldan prácticas periféricas, no el
     núcleo.** DWBP/PROV respaldan procedencia, versiones e identificadores;
     OpenAI, el punto de entrada y el mantenimiento; Anthropic, el progreso
     persistente; Agent Skills, el empaquetado y la evaluación. Ninguna se
     cita para lo que el TL;DR presenta como la decisión: «asignar autoridad
     por tipo de información» (l. 9), el registro colaborativo con autonomía
     «dentro de los criterios de autoridad acordados» (l. 26-29) ni la regla de
     discrepancias (l. 95-98, en `B033`).
  3. **El límite de la investigación sobre ese núcleo no llega al ADR.** La
     investigación dice que la autoridad «necesita contexto» y recomienda
     «Declarar para qué preguntas aplica una fuente» (l. 25), lo que respalda
     «tipo de información y ámbito» (ADR l. 14), pero añade «No existe en estas
     referencias una jerarquía universal que resuelva toda contradicción entre
     acuerdos, documentación y código» (l. 25), «Las precedencias de un
     proveedor no son un contrato portable de T800R» (l. 62) y «No se ha
     aprobado el registro propuesto, su esquema, una política de actualización
     ni quién puede incorporar fuentes de forma autónoma» (l. 66-67). El ADR
     sólo declara que las prácticas «no [demuestran] que el diseño de T800R ya
     funciona en los tres proveedores» (l. 69-70) y que W3C no garantiza
     veracidad (l. 64).
- Inferencia (si aplica): un lector del ADR no puede ir desde «Por qué la
  decisión» a la evidencia de la parte más discutible de la decisión, y no ve
  que esa evidencia reconoce expresamente que ámbito y versión no resuelven
  todas las contradicciones: justo el residuo que `REV-2026-017` documenta y
  que la regla de l. 95-98 no cubre.

## Observación y propuesta

- Observación: la sección es honesta sobre sus límites generales y las cuatro
  paráfrasis son fieles; el problema es de trazabilidad selectiva. La
  evidencia citada cubre lo menos controvertido y la investigación que sostiene
  el núcleo, con su principal salvedad, queda fuera del razonamiento visible.
- Propuesta concreta: que la persona decida si «Contexto» l. 40-42 y «Por qué
  la decisión» deben nombrar la investigación de fuentes y trasladar su límite
  («no existe una jerarquía universal»; quién incorpora fuentes sin aprobar),
  enlazándolo con la resolución de `REV-2026-017`/`018`, o si basta el enlace
  de l. 154. No editar ADR-002 sin esa decisión.
- Contraargumento o coste/riesgo: l. 154 enlaza la investigación y un ADR no
  tiene por qué resumir cada límite de sus insumos; la regla de discrepancias
  ya prevé consultar cuando cambia un acuerdo, lo que puede leerse como
  reconocimiento implícito de que no hay jerarquía; y el encabezado «qué dice
  la industria» puede entenderse limitado a prácticas de mercado. El coste de
  corregirlo es una o dos frases.

## Análisis adicional

- Evidencia interna: hechos 1-3 con sus localizadores.
- Contraevidencia y límites: no se volvió a leer OpenAI (HTTP 403 en `B011` y
  `B017`) ni Anthropic (ya comprobado por `B011`); no se consultaron DCAT, MCP
  ni RFC 9110, que la investigación cita pero el ADR no. El alcance de DWBP es
  «data published on the Web»; aplicarlo a documentos de un repositorio es
  analogía, y el ADR lo limita correctamente («referencias para la
  trazabilidad», l. 63-64). No se afirma que la decisión carezca de base, sólo
  que su base no se muestra en el rango.
- Pregunta para resolver: ¿debe ADR-002 nombrar en su justificación la
  investigación de fuentes y su límite «no existe una jerarquía universal»,
  como antecedente explícito de la regla de discrepancias y de
  `REV-2026-017`?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B032](blocks/B032.md), [B011](blocks/B011.md),
  [`REV-2026-017`](2026-09-21-REV-2026-017-regla-de-discrepancias-entre-originales-con-casos-sin-salida.md),
  [`REV-2026-018`](2026-09-21-REV-2026-018-quien-define-criterios-de-autoridad-y-como-se-audita-el-limite.md),
  [`REV-2026-021`](2026-09-24-REV-2026-021-atribuciones-de-evidencia-sin-enlace-y-evals-atribuidos-a-fuente-no-listada.md),
  [`REV-2026-005`](2026-09-21-REV-2026-005-revision-transversal-sin-rastro-s05-s07.md),
  cruces `CT01`, `CT04` y `CT07`.

## Preguntas pendientes

Ver el checkpoint [B032](blocks/B032.md).

## Cobertura y límites

Ver el checkpoint [B032](blocks/B032.md). Fuentes externas efectivamente
consultadas: W3C DWBP, W3C PROV-Overview, Agent Skills (especificación,
«Optimizing skill descriptions», «Evaluating skill output quality» e índice
`llms.txt` para localizar la guía de activación).
