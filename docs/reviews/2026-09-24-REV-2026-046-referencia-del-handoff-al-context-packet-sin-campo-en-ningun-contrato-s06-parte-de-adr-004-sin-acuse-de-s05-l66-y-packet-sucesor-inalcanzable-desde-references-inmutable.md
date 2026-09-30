# Anotación de revisión

- ID de anotación: `REV-2026-046`
- Unidad y ubicación: `S06` — [session-06-context.md, «Punto de entrada»](../definition/session-06-context.md#punto-de-entrada)
  (l. 14-17) y [«Decisiones»](../definition/session-06-context.md#decisiones)
  (filas l. 44, 47 y 48), frente a
  [S05, «Decisiones»](../definition/session-05-handoffs.md#decisiones) (filas
  l. 66 y 79), [S05, «Envoltura común mínima»](../definition/session-05-handoffs.md#envoltura-común-mínima)
  (l. 93-109, en particular `references` l. 107), [S05, «Integridad,
  deduplicación y referencias»](../definition/session-05-handoffs.md#integridad-deduplicación-y-referencias)
  (l. 183-184, dependencia por `REV-2026-043`), a
  [ADR-004, «Decisión», punto 10](../adr/ADR-004-contrato-portable-de-handoffs.md#decisión)
  (l. 95-97) y a [S06, «Núcleo obligatorio del context packet»](../definition/session-06-context.md#núcleo-obligatorio-del-context-packet)
  (`base`, l. 87, dependencia del bloque `B024`). Bloque `B023`.
- Revisión examinada: estado de los archivos al 2026-09-24; repositorio sin
  commits, huella no disponible. S06 «iniciada el 2026-09-17; cerrada el
  2026-09-18» (l. 3); S05 cerrada el 2026-09-16; ADR-004 fechado 2026-09-16;
  ADR-005 fechado 2026-09-18. Citas distintivas: «el context packet es un
  artefacto separado y referenciado desde el handoff» (S06 l. 15); «El
  contenido contextual no se incorpora por defecto: se referenciará y su
  contrato se definirá en la sesión 6» (S05 l. 66); «el context packet será un
  artefacto separado y referenciado que aporta material acotado» (S05 l. 79);
  «El context packet aporta material acotado mediante una referencia
  separada» (ADR-004 l. 96); «`references` | Enlaces tipados a acuerdos,
  tracker, evidencia y otras fuentes canónicas; no copias con autoridad
  propia» (S05 l. 107); «Un cambio `packet` invalida el context packet y
  exige uno nuevo correlacionado» (S06 l. 48); «`base` | Referencia la
  revisión, el tracker y el handoff aplicables» (S06 l. 87).
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos textuales; `media` sobre el efecto (S06
  l. 76-206 sólo por lista de encabezados y líneas devueltas por búsqueda;
  ADR-005 sólo por cabecera, punto 12, «Puntos abiertos», «Referencias» y
  búsqueda; S11/ADR-010 no leídos: la representación física puede añadir
  campos, `REV-2026-036`)
- Impacto: si un consumidor puede llegar desde un handoff al context packet
  vigente con los dos contratos tal como están escritos; qué campo del
  handoff (inmutable tras emitir) apunta al packet cuando éste se sustituye
  por «uno nuevo correlacionado»; y si S06 recibió con acuse lo que S05 le
  envió expresamente (l. 66). Responde a la pregunta 3 de `B022` y al hecho 4
  de `REV-2026-044`. No cambia el contenido de ninguna fila aceptada.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión exclusivamente interna; no se
  invoca ninguna fuente externa)
- Fuente primaria: `docs/definition/session-06-context.md` l. 14-17, 41-60,
  62-74 (leídas) y búsqueda en toda la unidad de «handoff» (l. 15, 47, 87,
  105, 136, 144: ninguna define un campo del handoff), «S05|sesión 5»
  (ninguna coincidencia), «sucesor|predecesor|correlacion» (l. 48, 158, 172,
  192, por búsqueda: `superseded` «Existe un packet sucesor», sin campo);
  `docs/definition/session-05-handoffs.md` l. 64-80 y 93-109 (leídas),
  183-184 (por `REV-2026-043`) y búsqueda de «context packet» (l. 68, 79, 199,
  240, 259, según `B022`); `docs/adr/ADR-004-contrato-portable-de-handoffs.md`
  l. 92-100 (leídas) y búsqueda de «context packet» (l. 96, 122);
  `docs/adr/ADR-005-contrato-portable-de-contexto.md` l. 14, 28-31, 85, 99 y
  búsqueda de «handoff|sucesor|predecesor» (ninguna define el campo).
- Sección o localizador: «Punto de entrada», «Decisiones», «Núcleo
  obligatorio del context packet» (S06); «Decisiones», «Envoltura común
  mínima», «Integridad, deduplicación y referencias» (S05); «Decisión» punto
  10 (ADR-004); glosario y «Decisión» (ADR-005).
- Fecha de consulta/publicación: consulta 2026-09-24; sesión cerrada el
  2026-09-18 según l. 3.
- Hecho observado:
  1. **S06 parte de ADR-004 y no acusa recibo de S05 l. 66.** El punto de
     entrada (l. 14-17) enlaza sólo ADR-004; «S05», «sesión 5» y «handoff/v1»
     no aparecen en ninguna línea de S06. S05 l. 66 envió a la sesión 6 el
     contrato del «contenido contextual» que «se referenciará»; ninguna de
     las 18 filas de S06 (l. 43-60) recibe esa remisión ni la nombra.
  2. **La dirección «referenciado desde el handoff» no tiene campo en el
     handoff.** S06 l. 15, S05 l. 79 y ADR-004 l. 96 afirman que el packet es
     «referenciado desde el handoff» o «mediante una referencia separada».
     La envoltura de `handoff/v1` (S05 l. 93-109) no tiene campo para el
     packet; `references` (l. 107) son «enlaces tipados a acuerdos, tracker,
     evidencia y otras fuentes canónicas», y el packet no es fuente canónica
     (S06 l. 44; ADR-005 l. 28). S06 no añade campo ni regla al handoff
     (búsqueda de «handoff»: hecho 1).
  3. **La única referencia definida va en sentido contrario.** S06 fija en el
     núcleo del packet `base`, que «Referencia la revisión, el tracker y el
     handoff aplicables» (l. 44, 87), y usa «estado del handoff» como marcador
     de reconciliación (l. 47). Es el packet quien apunta al handoff; ningún
     contrato escribe cómo el handoff, o quien lo acepta, localiza el packet.
  4. **El packet sucesor es inalcanzable desde un handoff que lo referenciara
     en `references`.** S06 l. 48: un cambio `packet` «invalida el context
     packet y exige uno nuevo correlacionado»; l. 172 (por búsqueda):
     `superseded` «Existe un packet sucesor y el anterior queda sólo para
     historia»; l. 192 registra «packet predecesor» (enlace hacia atrás). S05
     l. 183-184 declara `references` inmutable tras emitir y l. 190 exige «un
     identificador nuevo» para corregir. Si el handoff referenciara el packet
     por `id` en `references`, quedaría apuntando al packet `superseded` y no
     podría actualizarse sin otro handoff; S06 no define un enlace del packet
     antiguo al sucesor ni una regla de resolución «vigente por `subject`».
  5. **Ni S06 ni ADR-005 difieren el campo.** Las tres filas `deferred`
     (l. 56-58) y los «Puntos abiertos» de ADR-005 (l. 118-128) tratan
     herramientas, identidad/aliases del packet, sintaxis del `manifest`,
     representación física y `knowledge`; ninguno el campo o mecanismo de
     referencia handoff → packet. ADR-004 l. 122-123 da por «resuelto en
     sesión 6 y ADR-005» «la estructura y presupuesto del context packet
     referenciado», sin mencionar el campo.
- Inferencia (si aplica): con los dos contratos escritos, un receptor que
  acepta un `assignment` no tiene, en el propio handoff, un campo que
  identifique el packet que debe cargar; puede localizarlo sólo por
  convención externa (por ejemplo, buscar el packet cuyo `base` cita ese
  handoff y cuyo estado sea `ready`), que ninguna unidad escribe. La
  afirmación «referenciado desde el handoff», repetida en tres documentos,
  describe un enlace que ninguno define.

## Observación y propuesta

- Observación: S05 remitió a la sesión 6 el contrato del contenido
  referenciado; S06 partió de ADR-004, definió el packet y su referencia
  hacia el handoff (`base`), pero no fijó el campo ni la regla por la que un
  handoff referencia el packet, ni cómo se alcanza el sucesor cuando el
  packet se invalida y `references` del handoff es inmutable.
- Propuesta concreta: (a) decidir y escribir en S06 (o en S05 como fila
  correlacionada, si se reabre) el mecanismo: un campo de la envoltura de
  `handoff/v1` para el packet vigente (con regla de qué ocurre al
  sustituirse), o una regla de resolución inversa («el packet vigente para un
  handoff es el `ready` cuyo `base` lo cita; si hay varios, el de `created_at`
  mayor con predecesor enlazado»), o una entrada tipada en `references` con
  semántica «no canónica, regenerable»; (b) añadir en S06 una fila que reciba
  S05 l. 66 con acuse («el contrato del contenido referenciado es este
  packet»); (c) si el campo se remite a la representación física de S11,
  registrar una fila `deferred` con ese destino en S06 y en ADR-005 «Puntos
  abiertos».
- Contraargumento o coste/riesgo: puede sostenerse que «referenciado desde
  el handoff» es un principio de separación (el packet no viaja dentro del
  handoff) y no la promesa de un campo, y que la resolución inversa por
  `base` y `subject` basta en la práctica; también que S11/ADR-010 pueden
  haber fijado la representación (no leídos). El coste de (a)-(c) es una fila
  y una regla; el riesgo de no hacerlo es que cada adapter invente el enlace,
  que es justo lo que S05 l. 77 y 79 quisieron impedir para el handoff.

## Análisis adicional

- Evidencia interna: [`REV-2026-044`](2026-09-24-REV-2026-044-cierre-s05-omite-caducidad-fuentes-canonicas-y-evidencia-auditoria-como-relectura-de-filas-y-no-bloqueo-para-s06-sin-enumerar.md)
  hecho 4 (S05 afirma el no bloqueo para S06 sin enumerar lo que le envía;
  ningún campo de la envoltura nombra el packet): esta anotación cierra su
  límite («no se comprobó si S06 recibió con acuse lo que S05 le envía») en
  negativo; [`REV-2026-043`](2026-09-24-REV-2026-043-tiempos-de-la-envoltura-fuera-de-los-inmutables-contenido-de-la-idempotencia-sin-definir-y-resultado-de-completed-sin-campo.md)
  (inmutables l. 183-184; resultado sin campo: mismo patrón de «dato que el
  contrato promete y ningún campo aloja»); [`REV-2026-036`](2026-09-24-REV-2026-036-pregunta-8-de-s05-representacion-y-ubicacion-sin-fila-y-aplazamiento-de-s04-l299-no-recibido.md)
  (representación y ubicación sólo en ADR-004 l. 118-119 → S11; aplazamiento
  recibido sin acuse en S05: aquí se repite entre S05 y S06);
  [`REV-2026-015`](2026-09-21-REV-2026-015-aplazamientos-s02-sin-retorno-y-divergentes-de-adr-001.md)
  y [`REV-2026-025`](2026-09-24-REV-2026-025-puntos-abiertos-de-adr-002-divergen-de-detalles-aplazados-s03.md)
  (ADR como único inventario de pendientes; ADR-004 l. 122-123 «resuelto en
  sesión 6» editado tras la fecha del ADR, pista de `B019` para `B038`-`B040`).
- Contraevidencia y límites: ADR-005 l. 14 define el packet como «artefacto
  separado del handoff que reúne una síntesis operativa y referencias», sin
  prometer un campo en el handoff; una lectura estricta de «referenciado» como
  «no embebido» elimina el hecho 2 pero no el 3-4 (sigue sin haber forma
  escrita de llegar del handoff al packet vigente). No se leyó S06 l. 76-206
  completo (bloques `B024`-`B026`): la sección `coordination` (l. 105
  «Owners, handoffs, trabajo relacionado»), el cierre de «Presupuesto y
  prioridades» (l. 135-136: «el context packet permanece separado y
  referenciado desde el handoff») y «Reconciliación incremental» (l. 140-153)
  podrían contener una regla de resolución; la búsqueda de «handoff» en esas
  líneas (l. 105, 136, 144) no la muestra. S11 y ADR-010 no leídos.
- Pregunta para resolver: ¿cómo localiza un receptor el context packet
  vigente de un handoff con los contratos escritos, qué campo o regla lo
  fija, en qué unidad debe constar, y qué ocurre con esa referencia cuando el
  packet pasa a `superseded` y `references` del handoff es inmutable? ¿Debe
  S06 registrar con acuse la remisión de S05 l. 66?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: pendiente
