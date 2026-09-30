# Anotación de revisión

- ID de anotación: `REV-2026-055`
- Unidad y ubicación: `S07` — [session-07-knowledge.md, «Objetivo»](../definition/session-07-knowledge.md#objetivo)
  (l. 7-14), [«Preguntas de la sesión»](../definition/session-07-knowledge.md#preguntas-de-la-sesión)
  (l. 18-26), [«Criterio de salida»](../definition/session-07-knowledge.md#criterio-de-salida)
  (l. 30-34) y la prosa de [«Decisiones»](../definition/session-07-knowledge.md#decisiones)
  (l. 58-62), frente a la fila de la sesión 7 del índice rector,
  [«Sesiones de definición»](../product-definition.md#sesiones-de-definición)
  (`docs/product-definition.md:65`), y a las remisiones que S07 recibe de
  [S03](../definition/session-03-sources-of-truth.md) (l. 135, 220, 236-237),
  [ADR-001](../adr/ADR-001-autonomia-y-responsabilidades.md) (l. 120),
  [ADR-002](../adr/ADR-002-fuentes-canonicas-y-conocimiento.md) (l. 138-144),
  [ADR-003](../adr/ADR-003-ciclo-operativo-y-coordinacion.md) (l. 116),
  [S06](../definition/session-06-context.md) (l. 36-37) y
  [ADR-005](../adr/ADR-005-contrato-portable-de-contexto.md) (l. 126-128).
  Bloque `B027`.
- Revisión examinada: estado de los archivos al 2026-09-24; repositorio sin
  commits, huella no disponible. S07 declara «Sesión iniciada y cerrada el
  2026-09-21» (l. 3); ADR-006 fechado 2026-09-21. Citas distintivas: «Taxonomía
  OKF, ubicación, front matter, curator, caducidad, indexación y Hindsight»
  (índice l. 65); «perfil y taxonomía compatibles con Open Knowledge Format
  (OKF), ubicación lógica, metadatos, curación, vigencia, indexación y relación
  con memoria y Hindsight» (l. 7-9); «No corresponde todavía elegir
  representación física» (l. 13); «La compatibilidad lógica no impone todavía
  Markdown, rutas, almacenamiento ni servicios de Google» (l. 40); «La base
  evaluada corresponde a OKF v0.2 en el commit
  `ad30107c31c06aec8a7d5636e0d1058118604e6f`» (l. 58-59).
- Tipo: `incompleto`
- Gravedad: `baja`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos textuales (búsquedas en toda la unidad y
  en `docs/`); `media` sobre el efecto (S11 y ADR-010 sólo por líneas
  devueltas por búsqueda)
- Impacto: si la fila del índice l. 65 («front matter», «caducidad») queda
  cubierta por una apertura que la reformula («metadatos», «vigencia») y por
  una sesión que declina expresamente la representación física que «front
  matter» supone; si las remisiones que cinco documentos anteriores dirigen a
  la sesión 7 tienen constancia de recepción en la unidad, de modo que el
  cierre de S07 (`B029`) pueda verificarse frente a ellas; y si la base
  externa que fija dos filas `accepted` (l. 40-41) es rastreable desde la
  unidad. No cambia el contenido de ninguna fila aceptada.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión exclusivamente interna; no se invoca
  ninguna fuente externa como obligación)
- Fuente primaria: `docs/definition/session-07-knowledge.md` l. 3, 7-14,
  18-26, 30-34, 40-41, 48, 58-62 (leídas) y búsqueda en toda la unidad de
  «front matter» (ninguna), «caducidad» (sólo l. 24: «sin usar una caducidad
  universal»), «sesión 3» (sólo l. 42), «sesión 6» (ninguna), «sesión 4|sesión
  5» (ninguna), «ADR-» (sólo l. 107 y 123), «Punto de entrada» (ninguno),
  «](» (sólo l. 123), «research|http» (ninguna);
  `docs/product-definition.md` l. 61, 65 y 128;
  `docs/definition/session-03-sources-of-truth.md` l. 134-135, 198-202,
  219-220, 236-237; `docs/adr/ADR-001-autonomia-y-responsabilidades.md`
  l. 120; `docs/adr/ADR-002-fuentes-canonicas-y-conocimiento.md` l. 138-144,
  154; `docs/adr/ADR-003-ciclo-operativo-y-coordinacion.md` l. 116;
  `docs/definition/session-06-context.md` l. 12-17 (por `B023`) y 36-37;
  `docs/adr/ADR-005-contrato-portable-de-contexto.md` l. 126-128;
  `docs/adr/ADR-006-modelo-portable-de-conocimiento.md` l. 3, 48-49, 106;
  `docs/research-open-knowledge-format.md` l. 1-3, 18-24, 110-117;
  `docs/adr/ADR-010-arquitectura-tecnica-del-mvp.md` l. 126 y
  `docs/definition-tracker.md` l. 302 (por búsqueda de «front matter»).
- Sección o localizador: «Objetivo», «Preguntas de la sesión», «Criterio de
  salida» y «Decisiones» (prosa) de S07; «Sesiones de definición» del índice
  rector; «Mantenimiento del conocimiento», «Prácticas candidatas» y
  «Detalles aplazados» de S03; «Puntos abiertos» de ADR-001 y ADR-002;
  «Detalles diferidos» de ADR-003; «Criterio de salida» de S06; «Puntos
  abiertos» de ADR-005; «Fuente y versión verificadas» y «Referencias» de la
  investigación de OKF.
- Fecha de consulta/publicación: consulta 2026-09-24; S07 cerrada el
  2026-09-21; investigación de OKF fechada «2026-09-14. Insumo para la sesión
  3» (l. 3).
- Hecho observado:
  1. **El índice asigna «front matter» y «caducidad»; la apertura los
     sustituye y la sesión declina el primero.** La fila l. 65 del índice
     nombra como decisiones obligatorias «Taxonomía OKF, ubicación, front
     matter, curator, caducidad, indexación y Hindsight». El objetivo (l. 7-9)
     dice «metadatos» y «vigencia»; el criterio (l. 30-34) dice «metadatos» y
     «reglas de vigencia» y añade «autoridad, procedencia, lifecycle» y
     «contrato lógico para portabilidad», ausentes del índice. «front matter»
     no aparece en la unidad; «caducidad» sólo como lo que se evita (l. 24,
     l. 51 «No existe una caducidad universal»). «front matter» es la forma
     física de OKF (investigación l. 31: «bundle de Markdown con front matter
     YAML»), y S07 declara en l. 13-14 que «No corresponde todavía elegir
     representación física» y en l. 40 que «La compatibilidad lógica no impone
     todavía Markdown». La elección consta después en ADR-010 l. 126
     («Markdown con front matter, a OKF») y en el tracker de definición l. 302
     («S11 seleccionó … Markdown con front matter compatible con OKF»). El
     índice no se actualizó ni S07 declara que traslada esa decisión a S11:
     la prosa l. 60-61 difiere «La representación física, las rutas, el
     almacenamiento y la búsqueda» sin nombrar «front matter». Es el patrón de
     [`REV-2026-026`](2026-09-24-REV-2026-026-objetivo-s04-incorporar-repositorio-y-bootstrap-del-indice-sin-decision-ni-aplazamiento.md)
     («Bootstrap» del índice decidido en S10),
     [`REV-2026-024`](2026-09-24-REV-2026-024-cierre-s03-reformula-okf-afirma-no-bloqueo-y-no-declara-cobertura-del-area-3.md)
     hecho 1 («OKF» del índice reformulado) y
     [`REV-2026-045`](2026-09-24-REV-2026-045-rtk-y-context-mode-decididos-en-s06-sin-identificacion-ni-fuente-omitidos-del-criterio-y-con-destino-divergente-en-adr-005.md)
     hecho 3 (término del índice ausente del criterio).
  2. **Siete remisiones dirigidas a la sesión 7 no tienen acuse en la
     apertura.** Envían algo expresamente a S07: S03 l. 135 («La frecuencia y
     los mecanismos se concretarán en la sesión 7»), l. 220 («7: concretar
     curación y caducidad»), l. 236 (perfil, curación, frecuencia de
     mantenimiento, adopción/versionado de OKF) y l. 237 (esquema del
     registro → 7, 8 y 10); ADR-001 l. 120 (validación de referencias →
     sesiones 3, 7 y 10); ADR-002 l. 138-144; ADR-003 l. 116 («Representación
     del conocimiento y OKF → sesión 7»); S06 l. 36-37 («no dejar ambigüedad
     bloqueante para la sesión 7») y ADR-005 l. 126-128 (sección `knowledge` →
     sesión 7 y ADR-006). En l. 1-63 «sesión 3» aparece una vez (l. 42, como
     origen de los criterios de autoridad, no como remitente); «sesión 6» no
     aparece en toda la unidad; ningún ADR se nombra en l. 1-63; no hay
     sección «Punto de entrada» (S06 l. 12-17 sí la tenía). Las filas l. 40-41
     y 45-53 responden en sustancia a l. 220 y 236; l. 135, 237 y ADR-001
     l. 120 no tienen fila (véase
     [`REV-2026-056`](2026-09-24-REV-2026-056-frecuencia-y-mecanismos-de-validacion-de-referencias-y-esquema-del-registro-de-fuentes-remitidos-a-s07-sin-fila-y-adr-002-declara-resuelto-el-esquema-de-conocimiento-en-su-lugar.md)).
     Patrón de
     [`REV-2026-036`](2026-09-24-REV-2026-036-pregunta-8-de-s05-representacion-y-ubicacion-sin-fila-y-aplazamiento-de-s04-l299-no-recibido.md)
     (aplazamiento recibido sin acuse) y
     [`REV-2026-054`](2026-09-24-REV-2026-054-puntos-abiertos-de-adr-005-divergen-de-las-filas-deferred-de-s06-seccion-knowledge-y-representacion-fisica-sin-fila-y-destinos-ampliados.md)
     hecho 2 (lo que S06 remite a S07 vive sólo en el ADR).
  3. **La base externa de dos filas `accepted` no está enlazada desde la
     unidad.** L. 40-41 fijan «OKF v0.2» y l. 58-59 un commit; l. 1-63 no
     contiene ningún enlace (el único de la unidad es l. 123 → ADR-006). La
     investigación que fijó ese commit
     (`docs/research-open-knowledge-format.md` l. 23-24 y 113-117) se enlaza
     desde ADR-006 l. 106 y ADR-002 l. 154, no desde S07. La investigación
     está fechada «2026-09-14. Insumo para la sesión 3; no implica adopción»
     (l. 3); S07 (2026-09-21) no dice si volvió a comprobar la base ni enlaza
     el repositorio. La pregunta 1 de `B011` (investigación completada sin los
     agentes previstos, S03 l. 200-202) sigue siendo la única base declarada.
  4. **La pregunta 3 se responde difiriendo su primer término.** L. 22
     pregunta «¿Qué identidad lógica, metadatos y referencias son
     obligatorios?»; la fila l. 48 fija metadatos y remite «La identidad
     portable y su mapeo a la identidad por ruta de OKF» a la sesión 8. El
     criterio l. 30-34 no nombra identidad, así que el cierre puede cumplirse
     sin responderla; la pregunta no se marca como parcialmente diferida.
- Inferencia (si aplica): sin acuse, la afirmación de cierre de S07 (l. 113-121,
  `B029`) y el «no quedan bloqueos» de S06 (l. 202-203) no pueden contrastarse
  con lo que S07 debía recibir; sin enlace, la conformidad con «OKF v0.2» de
  l. 40-41 depende de un documento que la unidad no cita.

## Observación y propuesta

- Observación: la apertura de S07 repite el patrón de S03-S06 (criterio que
  reformula el índice, aplazamientos recibidos sin acuse) y añade una base
  externa fijada por commit sin enlace desde la unidad.
- Propuesta concreta: (a) decidir si el índice l. 65 se actualiza («metadatos»
  y «vigencia» en lugar de «front matter» y «caducidad», o una nota de que
  «front matter» se decidió en S11/ADR-010) o si S07 debe declarar que lo
  difiere; (b) añadir a S07 un párrafo de entrada con las remisiones recibidas
  (S03 l. 135/220/236/237, ADR-001 l. 120, ADR-002, ADR-003 l. 116, S06/ADR-005)
  y su disposición (fila, diferido o no aplicable); (c) enlazar desde l. 58-59
  la investigación de OKF y el repositorio en el commit fijado, con la fecha
  de la comprobación que S07 hizo.
- Contraargumento o coste/riesgo: el índice es un plan y las unidades pueden
  reformularlo; «metadatos» abarca «front matter» sin fijar forma física, lo
  que es coherente con l. 13-14. El coste es editorial. El riesgo de no
  hacerlo es que la cobertura del plan y de las remisiones se declare en los
  cierres sin pasajes que la sostengan (`REV-2026-053` hecho 4).

## Análisis adicional

- Evidencia interna: índice l. 65 frente a S07 l. 7-14 y 30-34; S07 l. 13-14 y
  40 frente a ADR-010 l. 126 y tracker l. 302; las remisiones citadas en el
  hecho 2 frente a las búsquedas de «sesión 3|sesión 6|ADR-» en S07; S07
  l. 58-59 frente a la investigación l. 3, 23-24 y 113-117 y a ADR-006 l. 106.
- Contraevidencia y límites: el criterio l. 30-34 es más exigente que el índice
  en autoridad, procedencia y lifecycle, por lo que la reformulación amplía y
  no reduce; las remisiones de S03 l. 220 y 236 sí tienen filas que las
  responden en sustancia (l. 40-41, 45, 50-53); el commit de l. 58-59 coincide
  con el de la investigación y con ADR-006 l. 48-49 (comprobado). No se
  comprobó si el commit sigue siendo el más reciente del repositorio ni si S11
  cita a S07 al decidir «front matter».
- Pregunta para resolver: ¿se considera cubierta la fila del índice l. 65 por
  el criterio de S07 con «front matter» decidido en S11, y debe S07 registrar
  con acuse las remisiones que recibió para que su cierre sea verificable?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B027](blocks/B027.md); `REV-2026-024`,
  `REV-2026-026`, `REV-2026-036`, `REV-2026-045`, `REV-2026-053`,
  `REV-2026-054`, `REV-2026-056`
