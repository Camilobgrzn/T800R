# Anotación de revisión

- ID de anotación: `REV-2026-034`
- Unidad y ubicación: `S04` — [Comprobación de cierre](../definition/session-04-operating-cycle.md#s04-cierre),
  «El criterio está cumplido. […] La auditoría final no encontró ambigüedades
  operativas que bloqueen el diseño de `handoff/v1`»
  (`docs/definition/session-04-operating-cycle.md:319-323`), frente a
  [Criterio de salida](../definition/session-04-operating-cycle.md#criterio-de-salida)
  (l. 309-313), a «Próxima acción» (l. 141-142 y 220-222), a la fila de la
  sesión 4 del índice rector,
  [«Sesiones de definición»](../product-definition.md#sesiones-de-definición)
  (`docs/product-definition.md:62`), y al
  [«Criterio de cierre de la definición»](../product-definition.md#criterio-de-cierre-de-la-definición)
  (l. 152, 160-162). Bloque `B018`.
- Revisión examinada: estado de los archivos al 2026-09-24; repositorio sin
  commits, huella no disponible. S04 declara «criterio de salida fue
  comprobado el 2026-09-15» (l. 3-4).
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos textuales; `media` sobre su efecto (S05
  sólo leída en l. 22 y 234-263 y por búsqueda; no se comprobó si S05 cerró
  por su cuenta las ambigüedades que aquí se citan)
- Impacto: si el cierre de S04 sirve como constancia de que se comprobó
  «cada obligación» (l. 141-142) y de que no quedaron ambigüedades bloqueantes
  para `handoff/v1`; si el criterio de cierre global (índice l. 152: «estén
  definidos el lifecycle, el context packet y el handoff») puede apoyarse en
  este cierre; y si el patrón de `REV-2026-011`/`016`/`024` (criterio
  reformulado, no bloqueo afirmado sin enumerar, cobertura de la revisión
  transversal no declarada) se acepta también para S04. No cambia el contenido
  del lifecycle acordado.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (contradicción y omisión exclusivamente
  internas; no se invoca ninguna fuente externa)
- Fuente primaria: `docs/definition/session-04-operating-cycle.md` l. 3-4,
  8-10, 72-73, 85, 88-99, 100-102, 108-110, 115-116, 123-137, 141-142,
  144-148, 220-222, 274-280, 289-292, 298-299 y 307-327;
  `docs/product-definition.md` l. 62, 116-117, 126-130, 146-163;
  `docs/definition/session-05-handoffs.md` l. 22 y 234-263;
  `docs/definition-tracker.md` l. 341 y 351-360 (fragmento) y búsqueda de
  «auditoría» (l. 379, 407, 420, 447: ninguna nombra la sesión 4)
- Sección o localizador: anclas `criterio-de-salida` y `s04-cierre` de S04;
  «Próxima acción» de S04; «Sesiones de definición» y «Criterio de cierre de
  la definición» del índice rector
- Fecha de consulta/publicación: consulta 2026-09-24; cierre comprobado el
  2026-09-15 según l. 3-4
- Hecho observado:
  1. **La sustancia del cierre tiene filas.** Cada elemento que l. 319-322
     declara definido tiene una o varias filas `accepted`: estados y
     transiciones de incremento, tarea y sesión (l. 89-99, 102, 115-116,
     274-280); gates del metaflujo (l. 81-88, 274-278); orchestrator delgado y
     capacidades bajo demanda (l. 110); ownership, concurrencia y recuperación
     (l. 108-109); espera, bloqueo y consulta (l. 85, 92-93, 298); persistencia,
     validación, cierre y reanudación (l. 100-102, 116, 298). En eso el cierre
     es más contrastable que los de S01-S03.
  2. **El criterio reformula la fila del índice y el cierre repite el
     criterio, no el índice.** La fila del índice (l. 62) exige «Bootstrap,
     ejecución, cierre, tareas, ownership, bloqueos, concurrencia y
     orchestrator». El criterio (l. 309-313) omite «Bootstrap» (registrado en
     `REV-2026-026`, hecho 5) y «ejecución», sustituye «bloqueos» por
     «condiciones de espera y consulta» y añade «persistencia, validación …
     reanudación» y la frase sobre prácticas revisadas. El cierre reproduce la
     lista del criterio (añadiendo «incremento», «gates del metaflujo»,
     «recuperación» y «bloqueo»), de modo que ni criterio ni cierre se
     contrastan con la fila del índice que debían satisfacer.
  3. **«La auditoría final» no tiene rastro.** l. 141-142 fija el estándar
     («Auditar integralmente el criterio de salida … sin declararla completada
     hasta comprobar cada obligación»); l. 220-222 declara el criterio
     cumplido «tras acordar» dos secciones; l. 322 invoca una «auditoría
     final». En S04 no hay lista de obligaciones comprobadas ni pasaje que
     asocie cada cláusula del criterio a su fila; l. 3-4 sólo da la fecha. La
     búsqueda de «auditoría» en `docs/definition-tracker.md` devuelve cuatro
     líneas, ninguna sobre la sesión 4; su fila de S04 (l. 341) sólo enlaza el
     cierre y ADR-003. Por contraste, el cierre de S05 (l. 250-260) enumera
     cinco puntos que «La auditoría final confirmó», y el tracker de
     definición registra para S05 que sus acuerdos quedaron «auditados frente
     a ADR-003» (l. 357-360). `REV-2026-031` (hecho 6) ya observó que
     l. 220-222 no enumera; aquí se añade que el cierre invoca una auditoría
     que ningún documento leído o buscado registra.
  4. **No bloqueo afirmado sin enumerar, frente a ambigüedades ya
     identificadas.** l. 322-323 afirma que no hay «ambigüedades operativas
     que bloqueen el diseño de `handoff/v1`» sin decir cuáles se
     consideraron. Tres anotaciones identifican ambigüedades en lo que S05
     debía materializar: `REV-2026-027` (el conjunto de transiciones no es
     cerrado: l. 109 y 115 exigen entradas a `waiting`/`blocked` desde
     `ready`/`pending` que l. 95 no enumera; `draft` en l. 113), y S05 fija una
     «matriz de transiciones» (S05 l. 249) sobre ese conjunto; `REV-2026-033`
     (el retorno parcial de l. 279 no dice si cambia el `stage` del incremento
     ni si la reentrada a `build` repite el gate de l. 275, es decir, qué
     handoff lo materializa); `REV-2026-020` (destino de lo no confirmado),
     con salida sólo parcial en l. 298. S05 declara apoyarse en «la
     reconciliación y el ownership único definidos en la sesión 4 y ADR-003»
     (S05 l. 22) y su propio criterio exige «no dejar ambigüedades
     bloqueantes» para la sesión 6 (S05 l. 240-241): el mismo patrón de
     negativa sin enumerar se transmite de sesión en sesión.
  5. **La última cláusula del criterio no se declara cumplida.** El criterio
     exige que «Las prácticas revisadas deben conservar su decisión y
     justificación» (l. 312-313). El cierre (l. 319-327) no menciona
     prácticas, revisión transversal ni las dos áreas del índice l. 116-117; no
     declara qué se revisó ni qué quedó pendiente, mientras l. 253 y l. 289-292
     conservan esa revisión como diferida sin destino y como acción por hacer
     (`REV-2026-032`, hechos 2-4). El índice exige antes del cierre global
     «decisiones y pendientes trazables para las áreas del harness» (l. 160-161)
     y la comprobación de cobertura (l. 129-130). Es el análogo en S04 del
     hecho 3 de `REV-2026-024`.
  6. **Acuerdos decididos que no constan en criterio ni cierre.** El ciclo
     colaborativo de investigación y definición (filas `accepted` l. 72-73;
     sección l. 123-137; `REV-2026-029`) no aparece en la fila del índice
     (l. 62), en el criterio (l. 309-313) ni en el cierre (l. 319-323), aunque
     fija cuándo alternan persona y T800R y cuándo T800R «conduce la
     construcción» (l. 134). Las tres filas de proceso (l. 144-148,
     `REV-2026-030`) tampoco se cuentan: el cierre enumera sólo materia de
     producto, lo que es coherente con su carácter de proceso, pero la unidad
     no lo dice. Un lector del cierre no sabe que S04 decidió el ciclo
     colaborativo (patrón inverso de `REV-2026-026`: decidido sin constar).
- Inferencia (si aplica): el cierre de S04 es un resumen de lo producido con
  mejor apoyo en filas que los de S01-S03, pero no una verificación: invoca una
  auditoría sin registro, afirma un no bloqueo sin enumerar frente a
  ambigüedades documentadas, no declara la cláusula de prácticas ni la
  cobertura de las áreas asignadas, y no inventaría lo decidido fuera del
  criterio. Quien use este cierre como entrada del criterio de cierre global
  (índice l. 152, 160-162) no encontrará en él qué obligaciones se comprobaron
  ni qué quedó fuera.

## Observación y propuesta

- Observación: no se sostiene que el criterio esté incumplido en su sustancia
  (hecho 1); lo que falta es la constancia de la comprobación y el inventario
  de lo excluido. El patrón es el de `REV-2026-011`, `REV-2026-016` y
  `REV-2026-024`, con dos diferencias: aquí el criterio ya era más estrecho
  que el índice (hecho 2, junto a `REV-2026-026`) y la unidad fija ella misma
  el estándar «comprobar cada obligación» que el cierre no documenta (hecho 3).
- Propuesta concreta: en la segunda pasada, que la persona decida (a) si un
  cierre puede invocar una auditoría sin registrar las obligaciones
  comprobadas, o si S04 (por adenda) o el tracker de definición deben conservar
  esa lista, al menos como mapa cláusula → filas; (b) si el no bloqueo de
  l. 322-323 se mantiene tal cual o remite a las ambigüedades registradas
  (`REV-2026-027`, `REV-2026-033`, `REV-2026-020`) con su disposición o la fila
  de S05 que las cierra; (c) si el cierre debe declarar la cláusula de
  prácticas (l. 312-313) y la cobertura o el residuo de las áreas de l. 116-117
  (junto a `REV-2026-032`); (d) si los cierres deben inventariar lo decidido
  fuera del criterio (ciclo colaborativo) o si basta la tabla. No reescribir el
  cierre sin esa decisión; S04 no se reabre por esta anotación. La decisión
  sobre el patrón conviene tomarla una vez para S01-S07 (`CT07`).
- Contraargumento o coste/riesgo: la persona comprobó el cierre (l. 3-4) y S05
  se celebró y cerró, auditando «frente a ADR-003» (tracker l. 359-360):
  contraevidencia práctica de que nada bloqueó `handoff/v1`. La cláusula de
  no bloqueo es una negativa sólo comprobable a posteriori. «Auditoría final»
  puede designar la conversación de cierre, no un artefacto. Editar una sesión
  cerrada tiene coste; el valor está en fijar el patrón de cierre antes de la
  comprobación global (índice l. 129-130, 146-163) y en no perder las tres
  ambigüedades del hecho 4 al construir sobre S05.

## Análisis adicional

- Evidencia interna: hechos 1-6. Criterio (l. 309-313) frente a cierre
  (l. 319-327) y a la fila del índice (l. 62); l. 141-142 y 220-222 (estándar
  y declaración); l. 253 y 289-292 (revisión transversal diferida y por hacer);
  l. 72-73, 123-137 y 144-148 (decidido fuera del criterio); S05 l. 22 y
  240-241, 250-260 (dependencia y contraste de formato); índice l. 116-117,
  126-130, 152, 160-162.
  [`REV-2026-024`](2026-09-24-REV-2026-024-cierre-s03-reformula-okf-afirma-no-bloqueo-y-no-declara-cobertura-del-area-3.md)
  (mismo patrón en S03),
  [`REV-2026-026`](2026-09-24-REV-2026-026-objetivo-s04-incorporar-repositorio-y-bootstrap-del-indice-sin-decision-ni-aplazamiento.md)
  (criterio omite «Bootstrap»),
  [`REV-2026-027`](2026-09-24-REV-2026-027-enumeracion-de-estados-y-transiciones-de-s04-no-cerrada-draft-y-waiting-blocked-desde-ready.md),
  [`REV-2026-033`](2026-09-24-REV-2026-033-retorno-parcial-de-un-hallazgo-en-s04-sin-stage-del-incremento-ni-regla-de-reentrada-a-build.md)
  y
  [`REV-2026-020`](2026-09-21-REV-2026-020-tabla-de-persistencia-sin-destino-para-lo-no-confirmado.md)
  (ambigüedades no enumeradas),
  [`REV-2026-031`](2026-09-24-REV-2026-031-prosa-de-proxima-accion-de-s04-duplica-las-filas-con-omisiones-y-conserva-acciones-superadas-sin-regla-de-precedencia.md)
  (hecho 6: l. 220-222 sin enumerar),
  [`REV-2026-032`](2026-09-24-REV-2026-032-revision-transversal-asignada-a-s04-diferida-sin-punto-de-resolucion-y-conservada-como-accion-por-hacer.md)
  (cláusula de prácticas y cobertura),
  [`REV-2026-029`](2026-09-24-REV-2026-029-ciclo-colaborativo-de-s04-sin-mapa-a-etapas-y-gates-confirmar-la-definicion-frente-a-autorizacion-por-incremento.md)
  y
  [`REV-2026-030`](2026-09-24-REV-2026-030-distribucion-de-modelos-del-proyecto-con-estado-en-la-unidad-canonica-de-s04-sin-enlace-a-su-documento-de-proceso.md)
  (acuerdos fuera del criterio). La afirmación de l. 325-326 sobre lo diferido
  se trata aparte en `REV-2026-035`.
- Contraevidencia y límites: no se leyó S05 «Lifecycle inicial» ni su matriz
  de transiciones, que podrían cerrar `REV-2026-027`/`REV-2026-033` desde S05;
  por eso no se afirma que las ambigüedades bloquearan de hecho, sólo que el
  cierre no las nombra ni las dispone. El tracker de definición se consultó
  por búsqueda y en l. 336-360; puede existir otro registro de la auditoría no
  localizado. El hecho 6 no es incumplimiento del criterio: el criterio no
  pedía el ciclo colaborativo.
- Pregunta para resolver: ¿dónde consta la auditoría final de S04
  (obligaciones comprobadas y ambigüedades consideradas), y se acepta que un
  cierre afirme el no bloqueo sin enumerarlas y omita la cláusula de prácticas
  y lo decidido fuera del criterio?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B018](blocks/B018.md), [B012](blocks/B012.md),
  [B006](blocks/B006.md), [B008](blocks/B008.md),
  [`REV-2026-011`](2026-09-21-REV-2026-011-cierre-s01-reformula-criterios-de-salida.md),
  [`REV-2026-016`](2026-09-21-REV-2026-016-cierre-s02-reformula-quien-ejecuta-y-afirma-no-bloqueo.md),
  `REV-2026-035`, cruce `CT07`

## Preguntas pendientes

Ver el checkpoint [B018](blocks/B018.md).

## Cobertura y límites

Ver el checkpoint [B018](blocks/B018.md). Sin fuentes externas necesarias para
este hallazgo; el contraste es interno.
