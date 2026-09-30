# Anotación de revisión

- ID de anotación: `REV-2026-062`
- Unidad y ubicación: `S07` — [Comprobación de cierre](../definition/session-07-knowledge.md#s07-cierre),
  «El criterio de salida está cumplido: el perfil lógico compatible con OKF
  v0.2, la taxonomía y sus límites, los bundles y ámbitos, los metadatos, la
  autoridad y la procedencia, el lifecycle y la frescura, la responsabilidad de
  curator, las reglas de vigencia, la indexación y la relación entre memoria,
  Hindsight y la sección `knowledge` del context packet quedaron explícitos.
  También quedaron delimitados los diferimientos tecnológicos: identidad
  portable y mapeo de ruta OKF para la sesión 8; …» y «La decisión transversal
  queda documentada en [ADR-006]» (`docs/definition/session-07-knowledge.md:113-123`),
  frente a [Criterio de salida](../definition/session-07-knowledge.md#criterio-de-salida)
  (l. 30-34), a la pregunta 3 de la sesión (l. 22), a la fila de la sesión 7
  del índice rector
  ([«Sesiones de definición»](../product-definition.md#sesiones-de-definición),
  `docs/product-definition.md:65`), a la tabla de áreas de la
  [revisión transversal](../product-definition.md#revisión-transversal-de-prácticas-de-harnesses)
  (l. 119, 126-135), a `docs/definition-tracker.md` l. 382-409 y a
  [ADR-006](../adr/ADR-006-modelo-portable-de-conocimiento.md) (l. 3-10,
  93-99). Bloque `B029`.
- Revisión examinada: estado de los archivos al 2026-09-25; repositorio sin
  commits, huella no disponible. S07 declara «Sesión iniciada y cerrada el
  2026-09-21» (l. 3); ADR-006 está fechado 2026-09-21, «Aceptada» (l. 3-4).
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos textuales (unidad completa leída;
  búsquedas en toda la unidad); `media` sobre la calificación de la identidad
  como diferimiento no tecnológico (hecho 3) y sobre el efecto (S08 y S11 sólo
  a través del tracker de definición)
- Impacto: si el cierre de S07 sirve como constancia de que se cumplió el
  criterio literal —en particular «preparado el contrato lógico para
  portabilidad» y el carácter «explícito» de los elementos que enumera— y si el
  criterio de cierre global (índice l. 151-152 y 160-162) puede apoyarse en
  él; si el patrón de `REV-2026-011`/`016`/`024`/`034`/`044`/`053` se acepta
  también para la última sesión del inventario. No cambia el contenido de
  ninguna fila aceptada.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión y contradicción exclusivamente
  internas; no se invoca ninguna fuente externa)
- Fuente primaria: `docs/definition/session-07-knowledge.md` l. 1-123 (leída
  completa) y búsqueda en la unidad de «bloque|auditor|contrato|portab|
  práctica|artículo|sesión 8|verific» (l. 18, 33-34, 40, 48, 54, 55, 59-60,
  118-119, 123); `docs/product-definition.md` l. 55-70, 79-89, 108-135,
  146-163, 188-190; `docs/definition-tracker.md` l. 336-349 y 370-409;
  `docs/adr/ADR-006-modelo-portable-de-conocimiento.md` l. 1-12 y 80-107.
- Sección o localizador: anclas `criterio-de-salida` y `s07-cierre` de S07;
  «Preguntas de la sesión» y «Decisiones» de S07; «Sesiones de definición»,
  «Revisión transversal de prácticas de harnesses», «Criterio de cierre de la
  definición» y «Enlaces de compatibilidad» del índice rector; «Criterio de
  salida de la sesión 7» y «de la sesión 8» del tracker de definición; TL;DR,
  «Consecuencias» y «Puntos abiertos» de ADR-006.
- Fecha de consulta/publicación: consulta 2026-09-25; sesión cerrada el
  2026-09-21 según l. 3.
- Hecho observado:
  1. **El cierre amplía el criterio con elementos que tienen fila y omite uno
     del criterio: «preparado el contrato lógico para portabilidad».** El
     criterio (l. 30-34) pide perfil, taxonomía, metadatos, autoridad,
     procedencia, lifecycle, reglas de vigencia, curación e indexación
     «explícitos», delimitar la relación «entre conocimiento, memoria y
     Hindsight» y «preparado el contrato lógico para portabilidad», sin
     seleccionar tecnología ni duplicar fuentes. El cierre (l. 113-117) añade
     «sus límites» (tabla l. 66-71), «los bundles y ámbitos» (l. 46),
     «frescura» (l. 52), «responsabilidad de curator» (l. 50) y la sección
     `knowledge` (l. 104-107), y cierra con «No se seleccionó tecnología ni se
     duplicaron fuentes canónicas» (l. 121). No dice en ninguna forma que el
     contrato lógico para portabilidad quedara preparado: «contrato» no
     aparece en l. 109-123 y «portab» sólo en «identidad portable», que el
     mismo cierre difiere (l. 118). El tracker de definición también reformula
     el criterio (l. 384-388: añade la sección `knowledge`, que el criterio de
     la unidad no nombra) y su cierre (l. 389-392) tampoco declara el
     contrato para portabilidad. Como en S06 con «verificables»
     (`REV-2026-053` hecho 2), la sustracción cae en el elemento cuyo
     componente central —la identidad portable, pregunta 3 de la sesión
     (l. 22)— quedó fuera de la sesión. Índice (l. 65), criterio de la unidad,
     criterio del tracker y cierre son cuatro redacciones distintas; ni el
     criterio ni el cierre nombran «front matter» ni «caducidad» del índice
     (`REV-2026-055` hecho 1, sin novedad).
  2. **El cierre declara «explícitos» elementos cuya regla no está escrita,
     según las anotaciones de la propia sesión.** «el lifecycle y la frescura»
     (l. 115): no hay condición que produzca `current`, `review_due` ni
     `stale` salvo el caso temporal, ni campo, actor o base para detectar una
     fuente cambiada (`REV-2026-059`); «los bundles y ámbitos», «la
     responsabilidad de curator» y «la indexación» (l. 114-116): owner,
     curator predeterminado y `scope` no tienen artefacto que los declare, y el
     índice raíz expone «temas», «resumen» y «frescura» sin campo de origen
     (`REV-2026-060`); «la relación entre … la sección `knowledge`» (l. 116-117):
     S07 la llena sólo con bundle y entradas mientras S06 l. 102 le asigna
     requisitos y decisiones que S07 l. 73-76 excluye del conocimiento
     (`REV-2026-061`); «la procedencia» (l. 115): `sources` apunta a «el
     registro autorizado» (l. 89-90), cuyo esquema remitido a S07 por S03
     l. 237 no se fijó (`REV-2026-056` hecho 3). El cierre no nombra ninguna
     de estas lagunas ni las remite. A diferencia de S06, el criterio de S07
     sí contiene el calificador («explícitos», l. 31) y el cierre lo conserva
     (l. 117): la afirmación es por tanto más fuerte que la de S06.
  3. **La identidad portable se presenta como «diferimiento tecnológico»
     mientras el cierre declara explícitos los metadatos.** La pregunta 3
     (l. 22) es «¿Qué identidad lógica, metadatos y referencias son
     obligatorios?»; la fila l. 48 difiere «La identidad portable y su mapeo a
     la identidad por ruta de OKF» a la sesión 8; el cierre agrupa esa
     identidad con representación física, rutas, almacenamiento y búsqueda
     bajo «los diferimientos tecnológicos» (l. 117-121). La sesión 8 que la
     recibe se define como «especificación lógica … identidad y aliases …
     sin seleccionar representación física ni tecnología» (tracker de
     definición l. 399-402) y aceptó «identidad portable de actores y
     conocimiento» (l. 403-404). El rótulo permite que «No se seleccionó
     tecnología» (l. 121) y «metadatos … explícitos» (l. 114) convivan con el
     aplazamiento de un elemento lógico que la sesión se había preguntado.
     `REV-2026-055` hecho 4 registró que la pregunta 3 se difiere sin marca;
     aquí se añade que el cierre la clasifica como tecnológica.
  4. **La cobertura del área l. 119 del índice no se declara.** El índice
     asigna a la sesión 7 «Memoria, aprendizaje, mantenimiento y vigencia de
     documentación» y compromete un registro por práctica (l. 126-128). En S07
     «transversal» sólo aparece en l. 123 («La decisión transversal»);
     «práctica», «artículo» y «auditor» no aparecen en la unidad; el estado de
     la revisión transversal (índice l. 132-135) nombra S11 y S12 y no dice
     nada del área de la sesión 7. `REV-2026-005` hecho 3 queda confirmado para
     toda S07 (l. 1-123).
  5. **ADR-006 se enlaza sólo como decisión, no como inventario de
     pendientes.** «queda documentada» (l. 123) está en presente (a diferencia
     de S06 l. 203-205, `REV-2026-053` hecho 7) y la fecha coincide. Los tres
     diferimientos de l. 118-121 reproducen la prosa l. 58-62 y los tres
     «Puntos abiertos» de ADR-006 (l. 95-99); el ADR marca resuelto el primero
     con ADR-007, posterior (`REV-2026-058` hecho 2, sin novedad), y deja sin
     marca los de la sesión 11, que el tracker de definición l. 392-394 da por
     resueltos («S11 seleccionó representación física, almacenamiento y
     búsqueda textual, y difirió Hindsight para medición en S12»). Tres
     lugares, tres estados para los mismos diferimientos; el cierre no remite a
     ninguno de los otros dos.
  6. **El cierre no nombra lo que S07 recibió.** No menciona las siete
     remisiones dirigidas a la sesión 7 (S03 l. 135, 220, 236, 237; ADR-001
     l. 120; ADR-002 l. 138-144; ADR-003 l. 116; S06 l. 36-37; ADR-005
     l. 126-128: `REV-2026-055` hecho 2) ni «frecuencia», «mecanismos» o
     «validación de referencias» (`REV-2026-056` hechos 1-2); «sesión 6» y
     «ADR-005» no aparecen en l. 109-123. Sin novedad de contenido para esas
     anotaciones: queda confirmado que tampoco el cierre las recoge.
- Inferencia (si aplica): el cierre funciona como resumen de lo producido y no
  como verificación del criterio. Quien lea sólo el cierre entenderá que el
  contrato lógico para portabilidad quedó preparado, que frescura, bundles,
  curator, indexación y sección `knowledge` son explícitos y que sólo se
  aplazaron decisiones tecnológicas; ninguna de esas tres cosas puede
  comprobarse desde la unidad.

## Observación y propuesta

- Observación: el patrón de cierres de `REV-2026-011`/`016`/`024`/`034`/
  `044`/`053` se repite en la séptima sesión con dos variantes: (i) una
  sustracción precisa del criterio —el contrato lógico para portabilidad—,
  análoga a «verificables» en S06; (ii) S07 es la primera sesión del
  inventario cuyo cierre no afirma el no bloqueo de la siguiente ni invoca una
  auditoría, y su criterio tampoco lo exige; el tracker de definición
  tampoco afirma auditoría para S07 (l. 389-395), a diferencia de S05
  (l. 357-360), S06 (l. 379-380) y S08 (l. 407-408, que dice haber auditado
  «frente a ADR-003 a ADR-006»).
- Propuesta concreta: (a) que el cierre contraste cada término del criterio y
  de la fila del índice l. 65 con un pasaje, y diga expresamente qué parte del
  contrato lógico para portabilidad quedó preparada y qué parte (identidad y
  mapeo) se entregó a la sesión 8, sin rotularla como tecnológica; (b) que
  enumere las lagunas conocidas de frescura, bundle, índice y sección
  `knowledge` (`REV-2026-059`-`061`) como pendientes con destino o las
  resuelva, en lugar de declararlas explícitas; (c) que declare la cobertura
  o el residuo del área l. 119; (d) que enlace ADR-006 también como inventario
  de pendientes y alinee su estado con el del tracker de definición
  l. 392-394.
- Contraargumento o coste/riesgo: `AGENTS.md` l. 39-40 sólo exige «comprueba
  el criterio de salida», no un acta; cada elemento nombrado en el cierre
  tiene fila, y el perfil lógico (l. 40), el índice portable (l. 54) y el
  contrato común (l. 55) pueden leerse como el «contrato lógico para
  portabilidad» preparado, dejando a S08 sólo la identidad; el mapeo a la
  ruta de OKF sí es de representación (OKF identifica por ruta), lo que da
  base parcial al rótulo «tecnológico»; «explícito» puede entenderse como
  «nombrado con estado», no como «completo»; editar el cierre de una sesión
  cerrada tiene coste. Nada de esto hace comprobable desde la unidad lo que
  el cierre afirma.

## Análisis adicional

- Evidencia interna: [S07, «Criterio de salida»](../definition/session-07-knowledge.md#criterio-de-salida)
  l. 30-34 y «Preguntas de la sesión» l. 22 frente a
  [«Comprobación de cierre»](../definition/session-07-knowledge.md#s07-cierre)
  l. 113-123; filas l. 46, 48, 50, 52, 54-56 y prosa l. 58-62, 73-76, 89-90,
  95-107; [índice rector](../product-definition.md) l. 65, 119, 126-135;
  [tracker de definición](../definition-tracker.md) l. 382-409;
  [ADR-006](../adr/ADR-006-modelo-portable-de-conocimiento.md) l. 3, 93-99.
  Anotaciones relacionadas sin duplicar: `REV-2026-005` (área l. 119),
  `REV-2026-055` (apertura, remisiones sin acuse, identidad sin marca),
  `REV-2026-056` (frecuencia, mecanismos, registro de fuentes),
  `REV-2026-058` (inventario de diferidos y marca posterior en ADR-006),
  `REV-2026-059`, `REV-2026-060`, `REV-2026-061` (lagunas que el cierre
  declara explícitas), `REV-2026-011`/`016`/`024`/`034`/`044`/`053` (patrón de
  cierres S01-S06).
- Contraevidencia y límites: el cierre no afirma nada falso sobre la
  existencia de filas; la lectura «explícito = nombrado» lo hace verdadero; la
  omisión del contrato para portabilidad puede considerarse cubierta por
  «perfil lógico compatible con OKF v0.2». No se leyó S08 ni S11: que la
  identidad sea lógica se toma del tracker de definición (l. 399-404) y de la
  pregunta 3 de S07; que S11 resolviera los diferimientos se toma del mismo
  tracker, no de la unidad S11.
- Pregunta para resolver: ¿puede el cierre de S07 declarar cumplido el
  criterio sin afirmar que quedó preparado el contrato lógico para
  portabilidad, calificar la identidad portable —pregunta 3 de la sesión—
  como diferimiento tecnológico y declarar «explícitos» frescura, bundles,
  curator, indexación y sección `knowledge` con las lagunas de
  `REV-2026-059`-`061` abiertas, y dónde debe constar la cobertura del área
  l. 119?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B029](blocks/B029.md); `REV-2026-005`,
  `REV-2026-011`, `REV-2026-016`, `REV-2026-024`, `REV-2026-034`,
  `REV-2026-044`, `REV-2026-053`, `REV-2026-055`, `REV-2026-056`,
  `REV-2026-058`, `REV-2026-059`, `REV-2026-060`, `REV-2026-061`
