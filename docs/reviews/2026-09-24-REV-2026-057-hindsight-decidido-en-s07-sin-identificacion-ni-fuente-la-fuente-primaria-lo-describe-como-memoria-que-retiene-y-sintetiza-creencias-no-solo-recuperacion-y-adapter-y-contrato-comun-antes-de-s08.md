# Anotación de revisión

- ID de anotación: `REV-2026-057`
- Unidad y ubicación: `S07` — [session-07-knowledge.md, «Decisiones»](../definition/session-07-knowledge.md#decisiones),
  filas «Posición de Hindsight» (l. 55, `accepted`) y «Hindsight en el MVP»
  (l. 56, `deferred`), con el objetivo (l. 9), la pregunta 6 (l. 26), el
  criterio (l. 33) y la prosa (l. 61-62), frente a la fila de la sesión 7 del
  índice rector (`docs/product-definition.md:65`) y a
  [ADR-006, «Posición de Hindsight»](../adr/ADR-006-modelo-portable-de-conocimiento.md)
  (l. 38-44, 77-80, 99). Bloque `B027`.
- Revisión examinada: estado de los archivos al 2026-09-24; repositorio sin
  commits, huella no disponible. S07 cerrada el 2026-09-21 (l. 3). Citas
  distintivas: «Hindsight, o un motor equivalente, puede actuar como adapter
  opcional de recuperación semántica sobre fuentes autorizadas. Cada resultado
  es una pista que conserva referencia y revisión y debe reconciliarse con la
  fuente vigente antes de usarse. Su ausencia degrada al índice portable y
  búsqueda textual sin romper el contrato común. No promueve memoria a
  conocimiento ni cambia entradas por sí mismo» (l. 55); «La adopción de
  Hindsight concreto se resolverá en las sesiones 11 y 12» (l. 56).
- Tipo: `incompleto`
- Gravedad: `baja`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos textuales y sobre lo que la fuente
  primaria dice de sí misma; `media` sobre el efecto (S08 y S11 sólo por
  líneas devueltas por búsqueda)
- Impacto: verificabilidad de dos filas con estado que deciden sobre una
  herramienta concreta de terceros que ningún documento canónico identifica,
  enlaza ni fecha; si lo que la fila l. 55 atribuye a Hindsight («recuperación
  semántica sobre fuentes autorizadas», resultados que «conserva[n] referencia
  y revisión») corresponde a lo que la herramienta hace según su propia
  descripción (un sistema de memoria que extrae, deduplica y sintetiza
  creencias y las reescribe en segundo plano); y qué ocurre con lo que
  Hindsight retiene, que la fila no sitúa en la taxonomía de S03/S07 (memoria
  provisional, evidencia o conocimiento). No cambia el contenido de la fila:
  la posición «opcional, no autoridad, no promueve, no cambia entradas» es
  una restricción de T800R, no una descripción de la herramienta.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión interna; la fuente externa se
  consultó para comprobar qué es Hindsight y contrastar lo que la fila le
  atribuye)
- Fuente primaria:
  1. `docs/definition/session-07-knowledge.md` l. 9, 26, 33, 55-56, 61-62
     (leídas) y búsqueda en toda la unidad de «Hindsight» (l. 9, 26, 33, 55,
     56, 62, 116, 120), «adapter» (sólo l. 55), «contrato común» (sólo l. 55),
     «http|research|](» (sólo l. 123).
  2. Búsqueda de «hindsight» (sin distinguir mayúsculas) en `docs/` fuera de
     `reviews/` e `ideas/`: índice l. 65; S07; S08 l. 114-115, 144, 344, 381;
     S11 l. 91, 200; ADR-006 l. 38-44, 77, 99; ADR-007 l. 104; ADR-010 l. 185;
     tracker de definición l. 85, 192, 232, 386-393;
     `research-portability-providers.md` l. 48. Ninguna coincidencia contiene
     URL, versión, fecha ni organización. En `ideas/propuesta-harness-multiagente.md`
     (l. 14, 30, 38, 64, 132, 198, 250, 310, 326) se describe como «motor de
     memoria semántica»; `ideas/` no representa decisiones (AGENTS.md
     l. 22-23).
  3. README de Hindsight, <https://github.com/vectorize-io/hindsight>,
     Vectorize.io, licencia MIT, consultado 2026-09-24 (sin versión ni fecha
     visibles en el README). Pregunta: ¿cómo se describe y sobre qué recupera?
     Citas: «an agent memory system built to create smarter agents that learn
     over time»; «It eliminates the shortcomings of alternative techniques
     such as RAG and knowledge graph»; retain «uses an LLM to extract key
     facts, temporal data, entities, and relationships»; reflect «performs a
     more thorough analysis of existing memories»; «observations» son
     «deduplicated beliefs the bank has built up over time»; «mental models»
     son «standing answer[s] to a question about a bank» reescritas en
     segundo plano; recall opera «from any of the memory types (world,
     experiences, etc.)». Paráfrasis fiel: el README no menciona Open
     Knowledge Format, bundles de Markdown ni procedencia hacia documentos
     originales. Fuerza `alta` para lo que la herramienta dice de sí misma;
     pertinencia directa a l. 55. Límite: es una descripción comercial y de
     producto; no se leyó el código ni la documentación de la API.
  4. Identificación previa por búsqueda web (2026-09-24): anuncio
     «Introducing Hindsight: Agent Memory That Works Like Human Memory»
     (vectorize.io) y artículo arXiv 2512.12818 «Hindsight is 20/20: Building
     Agent Memory that Retains, Recalls, and Reflects». No leídos; sólo
     sirvieron para localizar el repositorio. No se encontró otro producto
     llamado «Hindsight» que encaje con «recuperación semántica».
- Sección o localizador: «Decisiones» de S07; «Posición de Hindsight»,
  «Decisión» punto 9 y «Puntos abiertos» de ADR-006; README del repositorio.
- Fecha de consulta/publicación: consulta 2026-09-24; S07 cerrada el
  2026-09-21.
- Hecho observado:
  1. **La herramienta no está identificada en el canon.** Dos filas con
     estado (l. 55-56), el objetivo, una pregunta, el criterio y la prosa de
     S07, la fila del índice l. 65 y tres alternativas de ADR-006 (l. 42-44)
     deciden sobre «Hindsight» sin URL, organización, versión ni fecha en
     ningún documento canónico, ADR ni investigación. Es el patrón de
     [`REV-2026-045`](2026-09-24-REV-2026-045-rtk-y-context-mode-decididos-en-s06-sin-identificacion-ni-fuente-omitidos-del-criterio-y-con-destino-divergente-en-adr-005.md)
     hecho 1 (RTK y Context Mode en S06); aquí, además, el índice lo nombra
     como decisión obligatoria (l. 65).
  2. **Lo atribuido corresponde a una parte de lo que la herramienta hace.**
     L. 55 la sitúa como «adapter opcional de recuperación semántica sobre
     fuentes autorizadas» cuyos resultados «conserva[n] referencia y
     revisión». La fuente primaria se describe como sistema de memoria que
     retiene (extrae hechos, entidades y relaciones con un LLM), recuerda
     sobre lo retenido y reflexiona sintetizando «beliefs» y «mental models»
     reescritos automáticamente. La fila restringe lo que T800R le permite
     («No promueve memoria a conocimiento ni cambia entradas por sí mismo»),
     pero no dice: (a) qué es, en la taxonomía de S03 l. 206-207 y S07 l. 21,
     lo que Hindsight retiene y sintetiza (¿memoria provisional? ¿quién la
     gobierna y quién la borra?); (b) cómo un resultado «conserva referencia y
     revisión» cuando la herramienta no documenta procedencia hacia
     originales; (c) si las «observations»/«mental models» generados en
     segundo plano son «cambiar entradas» o memoria fuera del modelo. La
     objeción no es que la fila sea falsa —es una restricción, no una
     descripción—, sino que decide sobre un motor de memoria como si fuera un
     índice y deja sin lugar la parte de memoria.
  3. **«O un motor equivalente» sin criterio de equivalencia; «adapter» y
     «contrato común» antes de S08.** L. 55 extiende la posición a una clase
     («o un motor equivalente») sin decir qué la hace equivalente; usa
     «adapter» y «contrato común» cuando el contrato de adapters se decide en
     S08/ADR-007 (2026-09-22, posterior a S07). S08 l. 144 define después la
     capacidad `semantic_retrieval` con la misma restricción («verificar el
     resultado contra la fuente vigente antes de usarlo») y S08 l. 114-115 y
     S11 l. 91 vuelven a diferir Hindsight (S11: «hasta medir el baseline»,
     destino S12). S07 no marca ese retorno (patrón `REV-2026-023`).
- Inferencia (si aplica): la posición aceptada es coherente con S03 (no
  autoridad paralela) y con S08; lo que falta es la identificación de la
  herramienta y el destino de lo que retiene, que S07 no asigna a memoria ni a
  conocimiento.

## Observación y propuesta

- Observación: S07 repite en «Hindsight» la omisión de identificación de
  `REV-2026-045` y decide sobre un sistema de memoria describiéndolo sólo
  como recuperación.
- Propuesta concreta: (a) identificar Hindsight en S07 o ADR-006 (repositorio,
  organización, fecha o commit consultado) o declarar que la fila decide sobre
  una clase de motores y no sobre el producto; (b) añadir en la fila l. 55 o
  en la taxonomía (`B028`) qué es lo retenido y sintetizado por el motor
  (memoria provisional gobernada por S03, con quién la borra o revisa) y que
  la «pista» debe llevar la referencia del original, no de la memoria; (c)
  marcar en S07 el retorno de l. 56 tras S11 l. 91.
- Contraargumento o coste/riesgo: la fila es deliberadamente una posición
  semántica («La sesión 7 sólo acepta su posición semántica opcional», l. 56)
  y S08/S11/S12 son el lugar de la adopción concreta; identificar el producto
  en una fila `deferred` es suficiente. El coste es una línea con URL y fecha.
  El riesgo de no hacerlo es que la comparación prevista en S12 («comparación
  con el índice raíz y búsqueda textual», l. 56) no tenga objeto identificado.

## Análisis adicional

- Evidencia interna: S07 l. 55-56 frente a S03 l. 206-207 (memoria «para
  continuidad y recuperación de experiencias, sin autoridad paralela») y S07
  l. 21 («memoria provisional»); S07 l. 55 frente a S08 l. 114-115, 144 y S11
  l. 91, 200 (por búsqueda); ADR-006 l. 42-44 y 77-80 reproducen la fila sin
  identificar la herramienta.
- Contraevidencia y límites: el README consultado es la descripción del
  proyecto, no una especificación; Hindsight podría usarse sólo como capa
  `recall` sobre un corpus indexado desde bundles OKF, lo que encajaría con
  «recuperación semántica sobre fuentes autorizadas»; la fila no lo excluye,
  pero tampoco lo escribe. No se comprobó la versión ni la fecha de la
  descripción leída, ni si `ideas/` o el tracker de definición enlazan la
  herramienta en líneas no devueltas por la búsqueda.
- Pregunta para resolver: ¿qué producto es «Hindsight» en las filas l. 55-56
  (repositorio y revisión), y en qué capa de S03/S07 queda lo que ese motor
  retiene y sintetiza si T800R lo adopta como adapter?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B027](blocks/B027.md); `REV-2026-023`,
  `REV-2026-045`, `REV-2026-058`
