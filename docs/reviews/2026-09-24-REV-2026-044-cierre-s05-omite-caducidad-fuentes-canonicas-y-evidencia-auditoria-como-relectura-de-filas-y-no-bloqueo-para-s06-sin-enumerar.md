# Anotación de revisión

- ID de anotación: `REV-2026-044`
- Unidad y ubicación: `S05` — [Comprobación de cierre](../definition/session-05-handoffs.md#s05-cierre),
  «El criterio de salida está cumplido. `handoff/v1` define ámbito, variantes,
  envoltura y payloads mínimos, identidad y autoridad, referencias,
  validación, resultados, categorías de rechazo, lifecycle y matriz de
  transiciones. La auditoría final confirmó que:»
  (`docs/definition/session-05-handoffs.md:247-250`) y l. 252-265, frente a
  [Criterio de salida](../definition/session-05-handoffs.md#criterio-de-salida)
  (l. 236-241), a la fila de la sesión 5 del índice rector,
  [«Sesiones de definición»](../product-definition.md#sesiones-de-definición)
  (`docs/product-definition.md:63`), a la tabla de áreas de la
  [revisión transversal](../product-definition.md#revisión-transversal-de-prácticas-de-harnesses)
  (l. 117, 126-130), al
  [«Criterio de cierre de la definición»](../product-definition.md#criterio-de-cierre-de-la-definición)
  (l. 152, 160-162), a `docs/definition-tracker.md` l. 351-360 y a
  [ADR-004, «Puntos abiertos»](../adr/ADR-004-contrato-portable-de-handoffs.md#puntos-abiertos)
  (l. 116-125). Bloque `B022`.
- Revisión examinada: estado de los archivos al 2026-09-24; repositorio sin
  commits, huella no disponible. S05 declara «Sesión iniciada y cerrada el
  2026-09-16» (l. 3); ADR-004 está fechado 2026-09-16, «Aceptada» (l. 3-4).
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos textuales; `media` sobre su efecto (S06
  sólo leída en l. 1-30 y 54-56; no se comprobó si S06 recibió con acuse lo
  que S05 le envía; ADR-004 «Decisión» no releída aquí: `B019`-`B021` la
  contrastaron con las filas)
- Impacto: si el cierre de S05 sirve como constancia de que se cumplió el
  criterio literal (índice l. 63 y S05 l. 236-241) y de que se auditó «frente
  a ADR-003» como afirma el tracker de definición; si el criterio de cierre
  global (índice l. 152: «estén definidos el lifecycle, el context packet y
  el handoff»; l. 160-162: revisión transversal trazable e incógnitas que no
  bloqueen) puede apoyarse en este cierre; y si el patrón de
  `REV-2026-011`/`016`/`024`/`034` (criterio reformulado, no bloqueo afirmado
  sin enumerar, cobertura de la revisión transversal no declarada, pendientes
  sin inventario en la unidad) se acepta también para S05. No cambia el
  contenido de ninguna fila aceptada.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (contradicción y omisión exclusivamente
  internas; no se invoca ninguna fuente externa)
- Fuente primaria: `docs/definition/session-05-handoffs.md` l. 3, 7-10, 17,
  22, 39-40, 52-80, 93-109, 163, 175, 183-184, 199, 234-266 (leídas) y
  búsqueda en toda la unidad de «caducidad» (l. 17, 62, 73, 163, 175, 237),
  «expired», «cancel», «fuentes canónicas», «evidencia», «ADR-003|sesión 4»
  (sólo l. 22), «práctica» (ninguna), «transversal» (sólo l. 262), «context
  packet» (l. 68, 79, 199, 240, 259), «ingesti» (l. 70, 254), «adapter»
  (l. 39, 48, 69, 71, 265), «arquitectura|sesión 8|sesión 9|sesión 11»
  (sólo l. 59 «en arquitectura»); `docs/product-definition.md` l. 63-64,
  66, 69, 117, 126-135, 146-163; `docs/definition-tracker.md` l. 342 y
  351-360; `docs/adr/ADR-004-contrato-portable-de-handoffs.md` l. 1-30 y
  103-134; `docs/definition/session-06-context.md` l. 1-30 y 54-56
- Sección o localizador: anclas `criterio-de-salida` y `s05-cierre` de S05;
  «Decisiones» y «Envoltura común mínima» de S05; «Sesiones de definición»,
  «Revisión transversal de prácticas de harnesses» y «Criterio de cierre de
  la definición» del índice rector; «Criterio de salida de la sesión 5» del
  tracker de definición; «Puntos abiertos» de ADR-004
- Fecha de consulta/publicación: consulta 2026-09-24; sesión cerrada el
  2026-09-16 según l. 3
- Hecho observado:
  1. **El criterio amplía la fila del índice sin omitirla (invierte el hecho
     2 de `REV-2026-034`).** La fila del índice (l. 63) exige «Campos,
     validación, caducidad, aceptación, rechazo y transferencia» con
     resultado «Contrato `handoff/v1`». El criterio (l. 236-241) contiene los
     seis términos y añade ámbito, variantes, referencias, identidad y
     autoridad, estados y transiciones, cancelación y recuperación; cuatro
     preservaciones («ownership único, reconciliación con el estado real,
     fuentes canónicas y evidencia», l. 238-239); la separación del
     transporte y del context packet (l. 239-240); y «no dejar ambigüedades
     bloqueantes para definir el contrato de contexto en la sesión 6»
     (l. 240-241). El tracker de definición l. 353-357 reproduce el criterio
     casi literalmente. No es defecto: fija la vara que el cierre debe
     satisfacer.
  2. **El cierre reformula el criterio por sustracción, y la sustracción cae
     donde hay laguna registrada.** l. 247-249 declara definidos «ámbito,
     variantes, envoltura y payloads mínimos, identidad y autoridad,
     referencias, validación, resultados, categorías de rechazo, lifecycle y
     matriz de transiciones». De los trece elementos del criterio no nombra
     «caducidad» ni «cancelación»; de las cuatro preservaciones, las
     confirmaciones l. 252-253 cubren ownership único y reconciliación («con
     tracker y repositorio»), pero ninguna línea de l. 247-265 contiene
     «fuentes canónicas» ni «evidencia» (búsqueda). «Caducidad» figura en el
     índice l. 63, en el criterio l. 237 y en el tracker de definición
     l. 354; en la unidad aparece en l. 17, 62, 73, 163, 175 y 237, nunca en
     el cierre; «expired» tampoco. Es el elemento donde `REV-2026-039`
     registra la condición de `expires_at`/`due_at` sin escribir y la
     «política de caducidad» (l. 163) sin dueño, y donde l. 163 tiene una
     redacción invertida (pregunta 4 de `B021`). El cierre añade
     «resultados» (con sección propia, l. 219-232): apoyo, no defecto.
  3. **La «auditoría final» enumera, pero lo enumerado son relecturas de
     filas, no contrastes.** Las cinco confirmaciones (l. 252-260)
     corresponden a filas `accepted`: l. 252-253 ↔ l. 59, 60 y 80; l. 254 ↔
     l. 69-70 («distinguir ingestión de rechazo», l. 70); l. 255-256 ↔ l. 78
     (omite «intención»); l. 257-258 ↔ l. 80 y la justificación de l. 62;
     l. 259-260 ↔ l. 79. Ninguna confirmación nombra S04, ADR-003, el
     lifecycle de sesión y tarea de S04, el umbral temporal de S04 l. 109 ni
     una obligación comprobada frente a otro documento: «ADR-003» y «sesión
     4» aparecen en S05 únicamente en l. 22, como base del contrato. El
     tracker de definición l. 357-360 afirma que «las categorías de rechazo,
     resultados por tipo, matriz de transiciones, deduplicación, recuperación
     y fronteras quedaron aceptados y auditados frente a ADR-003»: la única
     mención de una auditoría frente a ADR-003 está fuera de la unidad y no
     dice qué se contrastó. En formato, el cierre de S05 es mejor que el de
     S04 (`REV-2026-034` hecho 3); en constancia de lo comprobado, igual.
  4. **No bloqueo para la sesión 6 afirmado sin enumerar y restringido a la
     separación.** El criterio (l. 240-241) exige no dejar ambigüedades
     bloqueantes para «definir el contrato de contexto»; el cierre (l. 259-
     260) lo afirma sólo respecto de que «el transporte y el context packet
     quedan separados del contrato semántico». Lo que S05 envía a S06 con
     marca es una frase embebida en una justificación: «El contenido
     contextual no se incorpora por defecto: se referenciará y su contrato
     se definirá en la sesión 6» (l. 66). Lo que S05 no fija y S06 presupone
     al partir de que el packet es «referenciado desde el handoff» (S06
     l. 14-17): ningún campo de la envoltura (l. 93-109) nombra el context
     packet; si la referencia viaja en `references` (l. 107), es inmutable
     tras emitir (l. 183-184). No se afirma que esto bloqueara S06; se afirma
     que el cierre no enumera qué consideró. Patrón del hecho 4 de
     `REV-2026-034` y del hecho 2 de `REV-2026-024`.
  5. **Cobertura del área asignada no declarada.** El índice (l. 117) asigna
     «Coordinación, delegación, revisión entre agentes y transferencia de
     trabajo» a las sesiones 4 y 5, y l. 126-130 exige registro por práctica
     y comprobación de cobertura. En S05 «práctica» no aparece; «transversal»
     sólo en l. 262 («La decisión transversal se conserva además»). El
     criterio de S05, a diferencia del de S04 (l. 312-313), no contiene
     cláusula de prácticas, de modo que el cierre no incumple su propio
     criterio: incumple el compromiso del índice. `REV-2026-005` hecho 3 lo
     registró por búsqueda; `B019`-`B022` lo cierran por lectura completa de
     la unidad: no hay rastro en ninguna línea de S05.
  6. **Sin inventario de pendientes en el cierre; ADR-004 enlazado sólo como
     decisión.** l. 262-263 enlaza ADR-004 para conservar «La decisión
     transversal»; l. 264-265 dice que la sesión 6 «definirá … sin
     seleccionar todavía tecnología o adapters». ADR-004 «Puntos abiertos»
     (l. 118-125) lista cuatro pendientes con destino (representación y
     ubicación → sesión 11; traducción de identidad, entrega y capacidades →
     «resuelto en sesión 8»; context packet → «resuelto en sesión 6»;
     controles ejecutables → sesión 9). S05 no tiene sección de diferidos ni
     fila `deferred` (`REV-2026-036` hechos 1 y 6) y el cierre no nombra
     ninguno de los cuatro; «adapters» se aplaza por tercera vez (l. 40, 79,
     265) sin sesión en la unidad (el índice l. 66 los asigna a la 8). Nada
     de lo que `REV-2026-039`, `040`, `042` y `043` registran (dueño de la
     política de caducidad, actor de la validación, partes del cierre
     coordinado, mutabilidad de tiempos y campo del resultado) figura en
     ADR-004 l. 118-125 ni en el cierre. A diferencia de S04 l. 325-326, S05
     no afirma que lo diferido «tenga sesión asignada»: `REV-2026-035` no
     aplica; la omisión es silenciosa.
- Inferencia (si aplica): el cierre de S05 es el mejor apoyado de S01-S05
  (cada elemento declarado tiene fila y la auditoría enumera confirmaciones),
  pero sigue siendo un resumen y no una verificación: reformula por
  sustracción justo en el elemento con laguna registrada (caducidad), no
  contrasta con S04/ADR-003 pese a que el tracker de definición lo afirma,
  no enumera lo que deja a la sesión 6, no declara el área de coordinación y
  no inventaría pendientes. Quien use este cierre como entrada del criterio
  global (índice l. 152, 160-162) no encontrará en él qué se comprobó ni qué
  quedó fuera.

## Observación y propuesta

- Observación: no se sostiene que el criterio esté incumplido en su
  sustancia: caducidad, cancelación, fuentes canónicas y evidencia tienen
  filas (l. 61-62, 73, 77; l. 19-22, 66-67, 78). Lo que falta es la
  constancia de la comprobación, el inventario de lo excluido y la
  coherencia entre lo que la unidad dice de su auditoría y lo que el tracker
  de definición dice de ella. Patrón de `REV-2026-011`, `016`, `024` y `034`,
  con dos diferencias: el criterio amplía el índice (hecho 1) y el cierre
  enumera (hecho 3).
- Propuesta concreta: en la segunda pasada, que la persona decida (a) si el
  cierre debe declarar caducidad, cancelación, fuentes canónicas y evidencia
  con su fila, o remitir la caducidad a un diferido con destino
  (`REV-2026-039`); (b) dónde consta qué se auditó «frente a ADR-003» —y si
  no hubo tal contraste, corregir el tracker de definición—, incluyendo si
  S05 modificó o no el lifecycle de S04 (pregunta 4 de `B018`) y qué hizo
  con `REV-2026-027`/`033`/`020` (pregunta 2 de `B018`); (c) si el no
  bloqueo para la sesión 6 debe enumerar l. 66 y el campo de referencia al
  context packet, o remitir a la fila de S06/ADR-005 que lo recibió; (d) si
  el cierre debe declarar la cobertura o el residuo del área l. 117 (junto a
  `REV-2026-005`/`032`); (e) si S05 debe llevar sección de diferidos que
  enlace ADR-004 l. 118-125 y dé destino a adapters/transporte (propuestas
  (a)-(d) de `REV-2026-036`). No reescribir el cierre sin esa decisión; S05
  no se reabre por esta anotación. La decisión sobre el patrón conviene
  tomarla una vez para S01-S07 (`CT07`).
- Contraargumento o coste/riesgo: S06 se celebró y cerró (tracker l. 343)
  partiendo de la separación de ADR-004 (S06 l. 14-17): contraevidencia
  práctica de que nada bloqueó el contrato de contexto. La caducidad tiene
  filas (l. 62, 73, 77) y estados (l. 163, 175), y «lifecycle y matriz de
  transiciones» (l. 249) puede leerse como su cobertura. «Fuentes canónicas y
  evidencia» pueden leerse cubiertas por l. 256 («no alteran el original») y
  l. 252-253. El tracker de definición puede resumir una conversación de
  cierre no registrada. Editar una sesión cerrada tiene coste; el valor está
  en fijar el patrón antes de la comprobación global (índice l. 129-130,
  146-163) y en no perder, al construir sobre S05, las lagunas que
  `REV-2026-036`-`043` registran.

## Análisis adicional

- Evidencia interna: hechos 1-6. Criterio (l. 236-241) frente a cierre
  (l. 247-265) y a la fila del índice (l. 63); l. 66 y 93-109 (lo enviado a
  S06 y el campo ausente); l. 22 (única mención de ADR-003); índice l. 117,
  126-130, 152, 160-162; tracker de definición l. 351-360; ADR-004
  l. 116-125.
  [`REV-2026-034`](2026-09-24-REV-2026-034-cierre-s04-auditoria-sin-rastro-no-bloqueo-sin-enumerar-y-cobertura-no-declarada.md)
  (mismo patrón en S04; su hecho 3 ya citaba S05 l. 250-260 y el tracker
  l. 357-360 como contraste de formato),
  [`REV-2026-024`](2026-09-24-REV-2026-024-cierre-s03-reformula-okf-afirma-no-bloqueo-y-no-declara-cobertura-del-area-3.md),
  [`REV-2026-016`](2026-09-21-REV-2026-016-cierre-s02-reformula-quien-ejecuta-y-afirma-no-bloqueo.md),
  [`REV-2026-011`](2026-09-21-REV-2026-011-cierre-s01-reformula-criterios-de-salida.md)
  (patrón de cierres),
  [`REV-2026-039`](2026-09-24-REV-2026-039-expires-at-y-due-at-condicionales-sin-condicion-ni-politica-de-caducidad-frente-a-la-capa-estructural.md)
  (caducidad sin condición ni dueño),
  [`REV-2026-036`](2026-09-24-REV-2026-036-pregunta-8-de-s05-representacion-y-ubicacion-sin-fila-y-aplazamiento-de-s04-l299-no-recibido.md)
  (S05 sin sección de diferidos; ADR-004 como único inventario),
  [`REV-2026-005`](2026-09-21-REV-2026-005-revision-transversal-sin-rastro-s05-s07.md)
  (área l. 117 sin rastro),
  [`REV-2026-042`](2026-09-24-REV-2026-042-accepted-sin-salida-si-el-aceptante-desaparece-cierre-coordinado-sin-partes-y-escalacion-de-due-at-sin-observador-ni-representacion.md)
  (hecho 5: l. 257-258 excluye el abandono sin criterio alternativo),
  [`REV-2026-040`](2026-09-24-REV-2026-040-actor-que-aplica-las-capas-de-validacion-y-registra-rejected-sin-fijar-y-capas-mecanizables-sin-clasificar.md)
  (l. 254 «hechos distintos» sin actor),
  [`REV-2026-043`](2026-09-24-REV-2026-043-tiempos-de-la-envoltura-fuera-de-los-inmutables-contenido-de-la-idempotencia-sin-definir-y-resultado-de-completed-sin-campo.md)
  (l. 255 «contenido emitido» sin definir).
- Contraevidencia y límites: no se releyó ADR-004 «Decisión» (contrastada
  por `B019`-`B021`: coincide con las filas sin ampliar); no se leyó S06 más
  allá de l. 1-30 y 54-56, así que el hecho 4 no demuestra que S06 careciera
  de lo necesario, sólo que S05 no lo enumera; no se leyeron S08, S09, S11 ni
  ADR-005/007/010, por lo que el hecho 6 no afirma que los pendientes sigan
  sin resolver, sólo que la unidad no los registra. El tracker de definición
  se leyó en l. 336-360 y por búsqueda de «auditor» (l. 168, 379, 407, 415,
  419, 420, 447: ninguna sobre la sesión 5 salvo l. 357-360); puede existir
  otro registro no localizado.
- Pregunta para resolver: ¿puede el cierre de S05 declarar cumplido el
  criterio sin nombrar la caducidad, las fuentes canónicas ni la evidencia;
  dónde consta la auditoría «frente a ADR-003» que sólo el tracker de
  definición afirma; y deben enumerarse en el cierre el no bloqueo para la
  sesión 6, la cobertura del área de coordinación y los pendientes que sólo
  ADR-004 inventaría?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B022](blocks/B022.md), [B018](blocks/B018.md),
  [B012](blocks/B012.md), [B008](blocks/B008.md), [B006](blocks/B006.md),
  [B019](blocks/B019.md), `REV-2026-032`, `REV-2026-035`, cruces `CT02`,
  `CT05` y `CT07`

## Preguntas pendientes

Ver el checkpoint [B022](blocks/B022.md).

## Cobertura y límites

Ver el checkpoint [B022](blocks/B022.md). Sin fuentes externas necesarias para
este hallazgo; el contraste es interno.
