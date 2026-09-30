# Anotación de revisión

- ID de anotación: `REV-2026-045`
- Unidad y ubicación: `S06` — [session-06-context.md, «Decisiones»](../definition/session-06-context.md#decisiones),
  filas l. 53-56 («El contrato de contexto exigirá capacidades semánticas…»,
  «RTK y Context Mode se aceptan como optimizaciones opcionales…», «Hacer
  obligatorias RTK, Context Mode…», «Seleccionar o adoptar RTK, Context Mode…»),
  frente a [«Objetivo»](../definition/session-06-context.md#objetivo) (l. 7-10),
  [«Preguntas de la sesión»](../definition/session-06-context.md#preguntas-de-la-sesión)
  (l. 21-29), [«Criterio de salida»](../definition/session-06-context.md#criterio-de-salida)
  (l. 33-37), a la fila de la sesión 6 del índice rector,
  [«Sesiones de definición»](../product-definition.md#sesiones-de-definición)
  (`docs/product-definition.md:64`), y a
  [ADR-005, «Puntos abiertos»](../adr/ADR-005-contrato-portable-de-contexto.md#puntos-abiertos)
  (l. 124-125). Bloque `B023`.
- Revisión examinada: estado de los archivos al 2026-09-24; repositorio sin
  commits, huella no disponible. S06 declara «Sesión iniciada el 2026-09-17;
  cerrada el 2026-09-18» (l. 3); ADR-005 está fechado 2026-09-18, «Aceptada»
  (l. 3-4). Citas distintivas: «Progressive disclosure, context packet,
  referencias, presupuestos, condiciones de parada, RTK y Context Mode»
  (índice l. 64); «No hay métricas actuales que justifiquen hacerlos
  obligatorios» (l. 54); «Acoplaría el contrato a mecanismos específicos sin
  evidencia suficiente» (l. 55); «Se resolverá en las sesiones 8
  (portabilidad) y 11 (arquitectura), según compatibilidad y mediciones»
  (l. 56); «¿RTK, Context Mode o equivalentes entran al MVP? → conservados como
  candidatos opcionales en sesión 8; selección y medición → sesiones 11 y 12»
  (ADR-005 l. 124-125).
- Tipo: `incompleto`
- Gravedad: `baja`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos textuales y sobre lo que las fuentes
  primarias sí dicen; `media` sobre el efecto (S08 y S11 sólo por líneas
  devueltas por búsqueda; ADR-005 sólo por cabecera, punto 12, «Puntos
  abiertos» y «Referencias»)
- Impacto: verificabilidad de tres filas con estado (`accepted`, `rejected`,
  `deferred`) que deciden sobre dos herramientas concretas de terceros que
  ninguna unidad canónica ni ADR identifica, enlaza ni fecha; si la fila del
  índice l. 64 («RTK y Context Mode» como decisión obligatoria de la sesión 6)
  queda cubierta por un criterio de salida que no la nombra; y qué destino es
  el vigente para la selección (S06 l. 56: sesiones 8 y 11; ADR-005 l. 124-125:
  8, 11 y 12). No cambia el contenido de ninguna fila aceptada: lo que las
  filas atribuyen a las herramientas es compatible con sus fuentes primarias.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión interna; las fuentes externas se
  consultaron para comprobar que lo atribuido a las herramientas es exacto y
  para registrar matices que ninguna unidad recoge)
- Fuente primaria:
  1. `docs/definition/session-06-context.md` l. 3, 7-10, 21-29, 33-37, 41-60
     (leídas) y búsqueda en toda la unidad de «RTK|Context Mode» (sólo
     l. 54-56), «research|ideas/|http» (ninguna coincidencia) y «práctica|
     transversal|auditor» (sólo l. 203, ya registrada por `REV-2026-005`).
  2. `docs/product-definition.md` l. 64 y 118, 126-130.
  3. `docs/adr/ADR-005-contrato-portable-de-contexto.md` l. 1-4, 100-102,
     116-129 (leídas), 130-139 («Referencias»: sólo la sesión 6, ADR-004 y
     tres artículos de OpenAI/Anthropic; ninguna referencia a RTK ni a Context
     Mode).
  4. `docs/definition-tracker.md` l. 305-309 y 370-380 (por búsqueda).
  5. Búsqueda de «RTK|Context Mode|context-mode|Token Killer» en `docs/` fuera
     de `reviews/`: índice l. 64; S06 l. 54-56; S08 l. 114-115, 378; S11 l. 91,
     200; ADR-005 l. 102, 124; ADR-007 l. 104; ADR-010 l. 185; tracker de
     definición l. 85, 192, 305. Ninguna línea define, expande, enlaza ni fecha
     las herramientas. En `ideas/` (no canónico según `AGENTS.md` l. 21-23):
     `propuesta-harness-multiagente.md` l. 159-169 y
     `MULTI_AGENT_HARNESS_ARCHITECTURE.md` l. 217-231 las describen, también
     sin enlace.
  6. RTK, repositorio `rtk-ai/rtk`, README, <https://github.com/rtk-ai/rtk>;
     consultado 2026-09-24; versión visible en el README «rtk 0.28.2»;
     licencia «Apache License 2.0»; sin fecha de publicación en el README.
     Citas: «RTK intercepts shell commands and compresses their output before
     your agent reads it»; estrategias «Smart Filtering … Grouping …
     Truncation … Deduplication»; «When a command fails, RTK saves the full
     unfiltered output so the LLM can recall it without re-executing: FAILED:
     2/15 tests [full output: rtk recall 3f9c2a81d4e7]»; retriever «sqlite
     (default) | tee (legacy files) | disabled»; «cuts up to 90% of the bash
     output»; «The token counts RTK reports are estimated as `bytes / 4` — RTK
     ships no tokenizer, so the percentages are reliable but the absolute
     token numbers are approximate». Fuerza `alta` para lo que la herramienta
     declara de sí misma; pertinencia directa a l. 53-54 (reducir salida
     preservando errores y acceso al bruto) y a l. 54/56 («mediciones»).
  7. Context Mode, repositorio `mksglu/context-mode`, README,
     <https://github.com/mksglu/context-mode>; consultado 2026-09-24; licencia
     «ELv2» (Elastic License v2); sin versión ni fecha en el extracto; declara
     soporte para Claude Code, Gemini CLI, VS Code Copilot, Cursor, OpenCode,
     Codex CLI y otros. Citas: «The subprocess runs your code, captures stdout,
     and only that stdout enters the conversation context. The raw data — log
     files, API responses, snapshots — never leaves the sandbox»; herramientas
     `ctx_search` («Query indexed content with multiple queries in one call»),
     `ctx_index` («Chunk markdown into FTS5 with BM25 ranking»),
     `ctx_fetch_and_index`; «315 KB becomes 5.4 KB. 98% reduction»; registra
     «Errors — Tool failures, non-zero exit codes». Fuerza `alta` para lo que
     la herramienta declara de sí misma; pertinencia directa a l. 53
     (externalizar contenido grande con búsqueda, paginación o expansión) y a
     l. 54-56.
- Sección o localizador: «Objetivo», «Preguntas de la sesión», «Criterio de
  salida» y «Decisiones» (S06); «Sesiones de definición» y «Revisión
  transversal de prácticas de harnesses» (índice); «Decisión» punto 12,
  «Puntos abiertos» y «Referencias» (ADR-005); README de cada herramienta.
- Fecha de consulta/publicación: consulta 2026-09-24; sesión cerrada el
  2026-09-18 según l. 3; ADR-005 fechado 2026-09-18.
- Hecho observado:
  1. **Tres filas con estado deciden sobre herramientas que el canon no
     identifica.** L. 54 acepta «RTK y Context Mode» como «optimizaciones
     opcionales de los adapters»; l. 55 rechaza hacerlas obligatorias; l. 56
     difiere seleccionarlas o adoptarlas. Ninguna línea de S06, del índice, de
     ADR-005 (incluidas sus «Referencias» l. 130-139), de S08, S11, ADR-007 o
     ADR-010 expande el nombre, enlaza un repositorio, cita una versión o
     fecha, ni remite a una investigación (fuente 5). La única descripción del
     repositorio está en `ideas/` (fuente 5), que `AGENTS.md` l. 21-23 declara
     «insumos» que «no representan decisiones aceptadas», y S06 no la enlaza.
  2. **Las justificaciones invocan evidencia y métricas sin fuente.** L. 54:
     «No hay métricas actuales que justifiquen hacerlos obligatorios»; l. 55:
     «sin evidencia suficiente»; l. 56: «según compatibilidad y mediciones».
     La unidad no dice de quién son las métricas ausentes ni qué medición se
     hará. Las fuentes primarias sí publican cifras propias («up to 90%»;
     «98% reduction», fuentes 6 y 7), con un límite que ninguna unidad recoge:
     RTK declara que sus recuentos de tokens son estimaciones `bytes / 4` sin
     tokenizador. La lectura compatible es que «métricas actuales» designa
     mediciones propias de T800R; la unidad no lo escribe.
  3. **El criterio de salida omite el término del índice.** La fila del índice
     l. 64 enumera siete decisiones obligatorias; el objetivo (l. 7-10), las
     cinco preguntas (l. 21-29) y el criterio (l. 33-37) contienen o parafrasean
     seis («descubrir material progresivamente», «contrato de contexto»,
     «referencias», «presupuestos», «condiciones de parada», secciones) y no
     nombran «RTK y Context Mode», que sólo aparecen en las filas l. 54-56. El
     tracker de definición l. 372-376 reproduce el criterio también sin ellas.
     El cierre (l. 198-205, bloque `B026`) declara cumplido el criterio con
     «capacidades opcionales de reducción y externalización», sin nombrarlas.
  4. **El destino del diferido no coincide entre la unidad y el ADR.** L. 56:
     «Se resolverá en las sesiones 8 (portabilidad) y 11 (arquitectura)».
     ADR-005 l. 124-125: «conservados como candidatos opcionales en sesión 8;
     selección y medición → sesiones 11 y 12». S11 l. 91 vuelve a diferir a S12
     («S12 comparará el baseline y decidirá el backlog posterior con
     métricas», por búsqueda). Ninguna fila `deferred` de S06 tiene marca de
     retorno ni fue editada al resolverse en S08/S11 (patrón de
     `REV-2026-015`/`023`; ADR-005 l. 118-128 sí lleva «resuelto en…»).
  5. **Lo que l. 53-54 atribuyen a las herramientas es compatible con sus
     fuentes, con dos matices que ninguna unidad registra.** RTK conserva el
     acceso al bruto mediante `rtk recall` cuando un comando falla o se trunca
     (fuente 6), no en toda salida; Context Mode no devuelve el bruto sino
     búsqueda indexada sobre él («never leaves the sandbox», `ctx_search`,
     fuente 7). Ambos casos caben en «acceso al contenido bruto» y
     «externalizar contenido grande con búsqueda, paginación o expansión»
     (l. 53), pero la equivalencia depende de que «acceso» admita búsqueda y
     recuperación condicionada. Context Mode se distribuye bajo ELv2, no bajo
     una licencia OSI; RTK bajo Apache 2.0. Ninguna unidad ni ADR anota
     licencia, versión ni fecha, aunque l. 56 y ADR-005 l. 124-125 remiten la
     selección a «compatibilidad y mediciones».
- Inferencia (si aplica): la fila del índice l. 64 exige una decisión sobre
  «RTK y Context Mode»; S06 la toma en tres filas, pero la cadena
  índice → criterio → cierre no la nombra y las filas no tienen un
  localizador de la herramienta decidida. Quien compruebe en S08/S11/S12 «si
  resultan útiles» no encontrará en el canon qué objeto medir ni desde qué
  versión, y el tracker de definición l. 305-307 («S11 los difirió del MVP y
  S12 medirá si justifican backlog») es la única frase que sigue la cadena.

## Observación y propuesta

- Observación: S06 decide sobre dos herramientas nombradas sólo por su marca,
  sin enlace, versión, fecha ni descripción en el canon; las justificaciones
  apelan a métricas y evidencia sin fuente; el criterio de salida omite el
  término que el índice exige; y el destino del diferido difiere entre S06
  (8 y 11) y ADR-005 (8; 11 y 12) sin marca de retorno.
- Propuesta concreta: (a) añadir en S06 (o en ADR-005 «Referencias») el
  localizador de cada herramienta (repositorio, versión o fecha consultada y
  licencia) y, si existe, la investigación o el documento de `ideas/` en que
  se apoyaron l. 53-56, declarándolo como insumo; (b) reescribir l. 54 para
  decir de quién son las «métricas actuales» ausentes (propias de T800R) y qué
  medición decidirá; (c) alinear el destino de l. 56 con ADR-005 l. 124-125 y
  añadir la marca de retorno («resuelto en S08 l. 114-115 y S11 l. 91;
  medición en S12») en la fila `deferred` o en una sección de diferidos de la
  unidad; (d) o bien nombrar «RTK y Context Mode» en el criterio de salida, o
  bien registrar en el índice l. 64 que la sesión 6 sólo fija su condición
  (opcionales, no obligatorias) y remite la selección.
- Contraargumento o coste/riesgo: las tres filas son coherentes entre sí y
  con S08 l. 114-115 y S11 l. 91; la decisión sustantiva («no obligatorias,
  candidatas opcionales») no depende de la versión concreta y podría
  considerarse que un contrato semántico no debe citar herramientas. El coste
  de (a)-(c) es editorial; el riesgo de no hacerlo es que la medición de S12
  compare contra un objeto no fijado y que la cadena índice → S06 → S08 → S11
  → S12 sólo sea seguible desde el tracker de definición.

## Análisis adicional

- Evidencia interna: `AGENTS.md` l. 21-23 (ideas como insumos no aceptados);
  índice l. 126-130 («Para cada práctica revisada se registrarán fuente,
  problema que resuelve, beneficios, costes, riesgos, decisión … Una decisión
  aplazada incluirá un punto concreto de resolución»); [`REV-2026-005`](2026-09-21-REV-2026-005-revision-transversal-sin-rastro-s05-s07.md)
  (S06 sin rastro de la revisión transversal del área l. 118; esta anotación
  no lo duplica: aquí el objeto son tres filas con estado sobre herramientas
  concretas); [`REV-2026-021`](2026-09-24-REV-2026-021-atribuciones-de-evidencia-sin-enlace-y-evals-atribuidos-a-fuente-no-listada.md)
  (patrón de evidencia atribuida sin enlace en S03; aquí ni siquiera hay
  atribución a una fuente); [`REV-2026-015`](2026-09-21-REV-2026-015-aplazamientos-s02-sin-retorno-y-divergentes-de-adr-001.md),
  [`REV-2026-023`](2026-09-24-REV-2026-023-detalles-aplazados-s03-sin-retorno-y-sin-fila-para-validacion-de-referencias.md),
  [`REV-2026-025`](2026-09-24-REV-2026-025-puntos-abiertos-de-adr-002-divergen-de-detalles-aplazados-s03.md)
  y [`REV-2026-035`](2026-09-24-REV-2026-035-cierre-s04-afirma-sesion-de-resolucion-asignada-para-diferidos-sin-sesion-en-la-unidad.md)
  (diferidos sin retorno y con destino divergente entre unidad y ADR);
  [`REV-2026-026`](2026-09-24-REV-2026-026-objetivo-s04-incorporar-repositorio-y-bootstrap-del-indice-sin-decision-ni-aplazamiento.md),
  [`REV-2026-034`](2026-09-24-REV-2026-034-cierre-s04-auditoria-sin-rastro-no-bloqueo-sin-enumerar-y-cobertura-no-declarada.md)
  hecho 2 y [`REV-2026-044`](2026-09-24-REV-2026-044-cierre-s05-omite-caducidad-fuentes-canonicas-y-evidencia-auditoria-como-relectura-de-filas-y-no-bloqueo-para-s06-sin-enumerar.md)
  hecho 1 (criterio de salida frente a la fila del índice: en S04 omite, en
  S05 amplía, en S06 omite un término); [`REV-2026-004`](2026-09-21-REV-2026-004-preguntas-abiertas-sin-disposicion.md)
  hecho sobre «¿RTK, Context Mode y Hindsight quedarán fuera del MVP?».
- Contraevidencia y límites: S06 sí registra el diferido con destino (l. 56),
  a diferencia de S05, y el índice l. 128 sólo exige «un punto concreto de
  resolución», que existe; S08 l. 114-115 y S11 l. 91 sí recibieron la
  decisión (comprobado sólo por búsqueda, fuera del alcance). Las fuentes
  externas demuestran qué declaran las herramientas de sí mismas, no su
  rendimiento en T800R ni que sean las mismas que la sesión tuvo en mente
  (no hay localizador en el canon, de modo que la identificación aquí es una
  inferencia a partir de `ideas/` y del nombre). No se comprobó si S12 tiene
  fila de medición.
- Pregunta para resolver: ¿debe el canon identificar (repositorio, versión,
  fecha, licencia) las herramientas concretas sobre las que emite filas
  `accepted`/`rejected`/`deferred`, y cuál es el destino vigente de la
  selección de RTK y Context Mode: S06 l. 56 (8 y 11), ADR-005 l. 124-125 (8;
  11 y 12) o S11 l. 91 (S12)? ¿Debe el criterio de salida de S06 nombrar el
  término del índice l. 64 que sus filas deciden?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: pendiente
