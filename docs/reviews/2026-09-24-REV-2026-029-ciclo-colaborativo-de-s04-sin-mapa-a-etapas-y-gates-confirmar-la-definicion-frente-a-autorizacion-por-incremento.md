# Anotación de revisión

- ID de anotación: `REV-2026-029`
- Unidad y ubicación: `S04` — [session-04-operating-cycle.md, «Ciclo colaborativo de investigación y definición»](../definition/session-04-operating-cycle.md#ciclo-colaborativo-de-investigación-y-definición)
  (l. 123-137) y prosa final de [«Acuerdos y orientación de la sesión»](../definition/session-04-operating-cycle.md#acuerdos-y-orientación-de-la-sesión)
  (l. 118-121), frente a las filas de la tabla de conclusiones de la misma
  unidad sobre etapas y gates (l. 72-73, 76, 81-83 y 88), a [«Metaflujo aceptado»](../definition/session-04-operating-cycle.md#metaflujo-aceptado)
  (l. 261-263) y a [ADR-003, «Decisión»](../adr/ADR-003-ciclo-operativo-y-coordinacion.md#decisión)
  (sin mención del ciclo). Bloque `B015`.
- Revisión examinada: 2026-09-24; repositorio sin commits, huella no
  disponible. Citas distintivas: «El ciclo se repite hasta alcanzar claridad
  suficiente y confirmar la definición, tras lo cual T800R conduce la
  construcción» (l. 133-134); «Qué acuerdos funcionales y técnicos resultan,
  cómo se aceptará el resultado y qué detalles se delegan a T800R» (l. 129);
  «La autorización humana para entrar en `build` se concede por incremento, no
  por tarea ni una sola vez para toda la iniciativa» (l. 81); «Debe
  concretarse manteniendo el ciclo iterativo de investigación y definición»
  (l. 262-263).
- Tipo: `incompleto`
- Gravedad: `baja`
- Estado: `deferred`
- Confianza: `media` (hechos comprobados con lectura directa de S04 l. 71-88,
  118-138, 246-256, 257-269 y 305-328, de S02 l. 62-97 y del índice l. 35-70;
  ADR-003 sólo por búsqueda de términos; la prosa de S04 l. 150-223 pertenece
  a `B016` y no se analizó)
- Impacto: cuál es la granularidad de la confirmación humana que cierra el
  ciclo colaborativo (una vez por iniciativa o por incremento) y con cuál de
  los dos gates humanos de la tabla se identifica «confirmar la definición»
  (confirmación de acuerdos funcionales de `plan`, l. 88, o autorización de
  `build` por incremento, l. 81-82). De ello depende qué evento inicia el
  trabajo autónomo de T800R que S05 (`handoff/v1`) y S11 (runtime/policy)
  deben materializar, y si ADR-003 debe recoger el ciclo. No cambia el
  contenido de las filas aceptadas.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión exclusivamente interna; no se invoca
  ninguna fuente externa)
- Fuente primaria: `docs/definition/session-04-operating-cycle.md` l. 72-73,
  76, 81-83, 88, 118-121, 123-137, 246-253, 261-263, 309-313 y 319-323;
  `docs/definition/session-02-limits.md` l. 64-74; `docs/product-definition.md`
  l. 62; `docs/definition-tracker.md` l. 294-296; búsqueda de «investigación de
  producto|investigación técnica|definición conjunta|ciclo colaborativo|claridad
  suficiente|confirmar la definición» en `docs/` (fuera de `reviews/`) y en
  `docs/adr/`
- Sección o localizador: «Acuerdos y orientación de la sesión» (prosa final y
  filas l. 72-73, 76, 81-83, 88), «Ciclo colaborativo de investigación y
  definición», «Detalles diferidos después del cierre», «Metaflujo aceptado»,
  «Criterio de salida» y «Comprobación de cierre» (S04); «Modelo de interacción
  acordado para desarrollo de software» (S02); «Sesiones de definición»
  (índice)
- Fecha de consulta/publicación: consulta 2026-09-24; S04 declara criterio
  comprobado el 2026-09-15 (l. 3-4)
- Hecho observado:
  1. La sección l. 123-137 describe tres actividades (investigación de
     producto, investigación técnica y definición conjunta; l. 127-129) que
     «pueden alternarse» (l. 131) y cuyo ciclo «se repite hasta alcanzar
     claridad suficiente y confirmar la definición, tras lo cual T800R conduce
     la construcción» (l. 133-134). Si la construcción «revela una incógnita
     que exige cambiar un acuerdo, se reabre con la persona la parte afectada
     de investigación y definición, mientras continúa el trabajo independiente»
     (l. 135-137). Las filas l. 72 y 73 (`accepted`) respaldan el ciclo; l. 72
     dice que «Complementa la definición funcional y técnica acordada en la
     sesión 2».
  2. S02 l. 70-72 define la construcción autónoma como lo que ocurre «después
     de que la persona confirme que la definición funcional y técnica está
     lista para construir», e incluye en ella «planificación, ejecución,
     supervisión y validación». Es una confirmación única de «la definición».
  3. La tabla de S04 fija dos gates humanos distintos: la entrada a `design`
     «no requiere un gate humano separado: T800R puede avanzar cuando los
     acuerdos funcionales de `plan` ya fueron confirmados» (l. 88), y «La
     autorización humana para entrar en `build` se concede por incremento, no
     por tarea ni una sola vez para toda la iniciativa» (l. 81), tras la
     evaluación de readiness por T800R (l. 82-83). La frontera l. 76 asigna a
     `plan` «problema, alcance, comportamiento, criterios de aceptación,
     restricciones y contratos» y a `design` «la solución técnica».
  4. Ni l. 118-137 ni la tabla (l. 71-116) dicen en qué etapa del metaflujo
     ocurre el ciclo colaborativo, ni cuál de los dos gates es «confirmar la
     definición». Las actividades de l. 127-128 se solapan con ambas etapas:
     «alcance y criterios de éxito» (l. 127) con `plan`; «arquitectura,
     lenguajes» (l. 128) con `design`, aunque en el ciclo se deciden con la
     persona (l. 129; S02 l. 67-69 admite acuerdos técnicos en la definición).
  5. La búsqueda del vocabulario del ciclo en S04 devuelve sólo l. 73, 123,
     127-129, 134, 136 y 263; en `docs/adr/` no devuelve nada: ADR-003 no
     recoge el ciclo en «Decisión» ni en «Detalles diferidos» (búsqueda de
     «investigaci|definición conjunta|colaborativ|participación humana» en el
     ADR: sin coincidencias pertinentes).
  6. l. 261-263 («Metaflujo aceptado») dice que el metaflujo «admite pasos
     internos por diseñar. Debe concretarse manteniendo el ciclo iterativo de
     investigación y definición, la autonomía dentro de los acuerdos…». La
     concreción queda declarada pendiente en prosa; «Detalles diferidos después
     del cierre» (l. 248-253) no la nombra y no hay fila `deferred` ni destino.
  7. El índice asigna a la sesión 4 «Bootstrap, ejecución, cierre, tareas,
     ownership, bloqueos, concurrencia y orchestrator» (l. 62); el criterio de
     salida (l. 309-313) y la comprobación de cierre (l. 319-323) no mencionan
     el ciclo colaborativo. `docs/definition-tracker.md` l. 294-296 lo
     resume como contexto para retomar con la misma formulación singular
     («hasta alcanzar claridad; cambiar acuerdos requiere volver a la
     persona»).
- Inferencia (si aplica): el texto admite dos lecturas. (i) El ciclo es una
  fase previa al metaflujo, heredada del modelo de tres fases de S02, cuya
  confirmación única autoriza a T800R a conducir toda la construcción
  (incluidos `plan` y `design`); esa lectura choca con l. 81 («ni una sola vez
  para toda la iniciativa») salvo que «la definición» se entienda por
  incremento, cosa que el texto no dice. (ii) El ciclo es el contenido de
  `plan` (y de la parte de `design` que la persona quiera acordar) para cada
  incremento; «confirmar la definición» es la confirmación de acuerdos
  funcionales de l. 88, y la autorización de `build` (l. 81-82) es un segundo
  gate que el ciclo no menciona. La unidad no elige, ADR-003 no recoge el
  ciclo y l. 261-263 declara la concreción pendiente sin estado ni destino.

## Observación y propuesta

- Observación: las filas de la tabla son precisas sobre gates y granularidad,
  pero la sección que describe cómo la persona y T800R alternan (l. 123-137)
  usa un vocabulario propio («claridad suficiente», «confirmar la definición»,
  «conduce la construcción») que no se ata a etapa, estado ni gate, y conserva
  la confirmación única de S02. Quien lea la sección para saber cuándo empieza
  el trabajo autónomo obtiene una respuesta distinta de quien lea l. 81 y 88.
  No es una contradicción de fondo —ambas lecturas son compatibles con las
  filas— sino una falta de mapa que la propia unidad reconoce «por concretar»
  (l. 261-263) sin registrarla como aplazamiento (patrón de `REV-2026-028`).
- Propuesta concreta: que la persona (1) declare si la definición conjunta se
  confirma por incremento (y entonces l. 133-134 debería decir «confirmar la
  definición del incremento» y remitir a l. 88 y 81-83) o por iniciativa (y
  entonces conciliar con l. 81); (2) diga en qué etapa del metaflujo ocurre el
  ciclo colaborativo o que ocurre dentro de `plan` con acuerdos técnicos
  opcionales; (3) dé estado y destino a la concreción pendiente de l. 261-263,
  o declare que l. 76, 81-83 y 88 ya la resuelven; (4) decida si ADR-003 debe
  recoger el ciclo como parte de la decisión transversal.
- Contraargumento o coste/riesgo: l. 77-78 hacen evolutivas las specs «por
  cambio o incremento próximo», de modo que «la definición» puede leerse por
  incremento sin decirlo; l. 79 y 85 ya regulan la reapertura; la tabla
  prevalece en la práctica sobre la prosa, aunque ninguna regla de la unidad lo
  establezca. El coste de la propuesta es una o dos frases en una unidad
  cerrada y, quizá, un punto en ADR-003; sólo la persona puede hacerlo. La
  gravedad es `baja` porque los gates existen y son verificables en la tabla.

## Análisis adicional

- Evidencia interna: hechos 1-7. l. 133-134 (confirmación única) frente a
  l. 81 (por incremento) y l. 88 (confirmación de acuerdos funcionales);
  l. 127-129 frente a l. 76 (frontera `plan`/`design`); l. 261-263 (concreción
  pendiente) frente a l. 248-253 (lista sin ese punto); ausencia del ciclo en
  ADR-003, en el índice l. 62 y en el criterio/cierre de S04. Relación con
  [`REV-2026-028`](2026-09-24-REV-2026-028-aplazamientos-embebidos-en-filas-accepted-de-s04-sin-fila-deferred-ni-destino-en-la-unidad.md)
  (aplazamientos sin fila ni destino en S04), con
  [`REV-2026-014`](2026-09-21-REV-2026-014-modelo-de-interaccion-frente-a-puntos-de-intervencion-del-proyecto.md)
  (l. 129 «qué detalles se delegan a T800R» sostiene la lectura caritativa de
  esa anotación —la persona pacta lo delegado— sin fijar precedencia con los
  gates del repositorio consumidor) y con
  [`REV-2026-013`](2026-09-21-REV-2026-013-alcance-autonomo-sin-caso-de-uso-ni-objetivo-observable.md)
  (l. 134 reafirma que T800R «conduce la construcción» sin añadir caso de uso ni
  objetivo observable).
- Contraevidencia y límites: la prosa de S04 l. 150-223 (`B016`, en particular
  l. 150-153: «Una modificación de interfaz o de criterio de aceptación vuelve
  a `plan`») y «Transiciones de etapa y continuidad de tareas» (l. 270-293,
  `B017`) pueden atar el ciclo a las etapas; no se leyeron. ADR-003 se
  comprobó sólo por búsqueda, de modo que no se afirma que omita el ciclo con
  otras palabras. Si la persona confirma la lectura (ii), queda sólo el ajuste
  de l. 133-134 y el registro del aplazamiento de l. 261-263.
- Pregunta para resolver: ¿«confirmar la definición» (l. 134) es la
  confirmación de los acuerdos funcionales de `plan` por incremento (l. 88), la
  autorización de `build` por incremento (l. 81-82) o una confirmación única
  de la iniciativa como en S02, y dónde debe constar la concreción pendiente
  que l. 261-263 anuncia?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B015](blocks/B015.md), `REV-2026-013`,
  `REV-2026-014`, `REV-2026-028`, cruces `CT02` y `CT05`

## Preguntas pendientes

Ver el checkpoint [B015](blocks/B015.md).

## Cobertura y límites

Ver el checkpoint [B015](blocks/B015.md). Sin fuentes externas necesarias para
este hallazgo; el contraste es interno.
