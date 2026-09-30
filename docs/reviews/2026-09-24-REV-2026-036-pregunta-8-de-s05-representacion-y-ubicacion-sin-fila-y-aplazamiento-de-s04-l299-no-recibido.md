# Anotación de revisión

- ID de anotación: `REV-2026-036`
- Unidad y ubicación: `S05` — [session-05-handoffs.md, «Preguntas de la sesión»](../definition/session-05-handoffs.md#preguntas-de-la-sesión),
  pregunta 8 (l. 39-40), y [«Decisiones»](../definition/session-05-handoffs.md#decisiones)
  (tabla l. 52-80, en particular l. 54, 58, 62, 65-68, 79), frente a
  [S04, «Persistencia mínima de consultas y esperas»](../definition/session-04-operating-cycle.md#persistencia-mínima-de-consultas-y-esperas)
  (l. 298-299 y resumen l. 301-305), a
  [S04, «Detalles diferidos después del cierre»](../definition/session-04-operating-cycle.md#detalles-diferidos-después-del-cierre)
  (l. 250) y a
  [ADR-004, «Puntos abiertos»](../adr/ADR-004-contrato-portable-de-handoffs.md#puntos-abiertos)
  (l. 118-119). Bloque `B019`.
- Revisión examinada: estado de los archivos al 2026-09-24; repositorio sin
  commits, huella no disponible. S05 declara «Sesión iniciada y cerrada el
  2026-09-16» (l. 3); ADR-004 está fechado 2026-09-16, «Aceptada» (l. 3-4).
  Citas distintivas: «¿Qué representación y ubicación mínimas son portables,
  dejando adapters y transporte específico para las sesiones posteriores?»
  (l. 39-40); «Una actualización de estado sin receptor ni acción esperada
  permanece sólo en el tracker» (l. 54); «la coordinación efímera sin esos
  efectos no requiere handoff» (l. 58); «Rutas, schema, timeout y canal de
  persistencia de consultas y esperas. | `deferred` | Se resolverán en la
  sesión 5» (S04 l. 299); «¿Qué representación física y ubicación tendrá
  `handoff/v1`? → sesión 11, arquitectura del MVP» (ADR-004 l. 118-119).
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos textuales; `media` sobre el efecto
  (S05 l. 82-266 sólo por lista de encabezados y líneas devueltas por
  búsqueda; S11 sólo por una línea del tracker de definición; ADR-004 sólo por
  cabecera, «Consecuencias», «Puntos abiertos» y búsqueda)
- Impacto: si la unidad canónica de S05 registra el destino de lo que la
  propia sesión preguntó y no decidió (índice l. 128: «Una decisión aplazada
  incluirá un punto concreto de resolución»); dónde queda la persistencia
  (schema, ruta, timeout y canal) de las esperas sin destinatario que S04
  envió expresamente a la sesión 5 y que S05 deja fuera del contrato; y si la
  cadena S04 l. 299 → S05 → S11 puede seguirse desde las unidades o sólo
  desde ADR-004. No cambia el contenido de ninguna fila aceptada.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión exclusivamente interna; no se
  invoca ninguna fuente externa)
- Fuente primaria: `docs/definition/session-05-handoffs.md` l. 3, 14-17,
  19-22, 26-40, 52-80 (leídas) y búsqueda en toda la unidad de «ubicaci»,
  «representaci», «ruta», «almacen», «formato», «deferred», «diferid»,
  «aplaz», «Detalles», «espera», «bloqueo» (resultados en los hechos);
  `docs/definition/session-04-operating-cycle.md` l. 92-93, 250, 298-299,
  301-305 y 325-326; `docs/adr/ADR-004-contrato-portable-de-handoffs.md`
  l. 1-45, 103-131 y búsqueda de «ubicaci|ruta|canal|waiting|blocked»;
  `docs/product-definition.md` l. 63, 69 y 128; `docs/definition-tracker.md`
  l. 76 (sólo esa línea, por búsqueda de «handoff»)
- Sección o localizador: «Preguntas de la sesión» y «Decisiones» (S05);
  «Persistencia mínima de consultas y esperas» y «Detalles diferidos después
  del cierre» (S04); «Puntos abiertos» (ADR-004)
- Fecha de consulta/publicación: consulta 2026-09-24; S05 cerrada el
  2026-09-16 según l. 3
- Hecho observado:
  1. **La sesión formula la pregunta y no la decide.** La pregunta 8
     (l. 39-40) pide «qué representación y ubicación mínimas son portables».
     Ninguna de las 27 filas de l. 52-80 (25 `accepted`, 2 `rejected`,
     ninguna `deferred`) menciona representación, ubicación, ruta, formato
     ni almacenamiento; la fila más cercana, l. 79, sólo dice lo que el
     transporte y el context packet **no** hacen. En toda la unidad,
     «ubicaci» y «representaci» aparecen únicamente en l. 39; «ruta»,
     «almacen», «formato», «deferred», «diferid» y «aplaz» no aparecen, y la
     lista de encabezados (l. 1-245) no contiene ninguna sección de detalles
     diferidos o aplazados. Las siete preguntas restantes (l. 26-38) tienen
     filas que las responden (eventos: l. 54, 58; contrato único: l. 54-57;
     campos: l. 65-68; validación: l. 69-70; caducidad: l. 62; significados y
     efectos: l. 59-64, 74-77; encadenar/deduplicar/auditar: l. 66, 78).
  2. **El aplazamiento que S04 dirigió a la sesión 5 no se recibe.** S04
     l. 299 (`deferred`) difiere «Rutas, schema, timeout y canal de
     persistencia de consultas y esperas» con destino «la sesión 5»; l. 250
     lo repite («Schema, rutas, timeout y canal de consultas, esperas y
     handoffs en la sesión 5») y l. 305 también. S05 l. 1-80 no menciona ese
     aplazamiento: l. 22 cita la sesión 4 sólo por «la reconciliación y el
     ownership único», y l. 68 sólo por «los acuerdos de verificación,
     consultas y esperas de la sesión 4» (el contenido mínimo de l. 298, no
     el diferido de l. 299). Ninguna fila lo resuelve como conjunto ni lo
     vuelve a diferir.
  3. **Lo que S05 sí resuelve de l. 299 alcanza sólo a las solicitudes
     dirigidas.** Para un handoff: schema (envoltura y payloads, l. 65-68),
     timeout (`expires_at` para la oferta `pending` y `due_at` tras
     `accepted`, l. 62) y canal (transporte separado del contrato, l. 79;
     adapters y transporte «para las sesiones posteriores», l. 40). Rutas o
     ubicación: nada (hecho 1).
  4. **Las esperas sin destinatario quedan fuera del contrato y sin
     representación.** l. 54 deja «sólo en el tracker» toda «actualización
     de estado sin receptor ni acción esperada» y l. 58 exime de handoff «la
     coordinación efímera sin esos efectos». S04 l. 298 exige persistir
     cinco tipos —`waiting`, `bloqueo`, `decisión`, `revisión`, `permiso`—;
     `waiting` es «una respuesta o dependencia externa identificada» (S04
     l. 92) y `blocked`, «no existe una vía autorizada» (l. 93). Una espera
     por dependencia externa o un bloqueo sin autoridad a la que dirigirse
     no es una «solicitud dirigida» (l. 58): conserva el contenido de S04
     l. 298 en el tracker con el schema, la ruta, el timeout y el canal que
     l. 299 envió a S05 aún sin decidir. S05 no contiene ningún mapa entre
     los cinco tipos de S04 y sus tipos de handoff o el tracker: «espera» y
     «bloqueo» no aparecen en S05 (búsqueda), y l. 217 (por búsqueda) define
     `consultation` como «información, decisión, revisión humana o permiso».
  5. **El único destino registrado está en el ADR, no en la unidad.**
     ADR-004 «Puntos abiertos» (l. 118-119) recoge la pregunta 8 con destino
     «sesión 11, arquitectura del MVP». S05 no enlaza ADR-004 salvo en el
     cierre (l. 263, única URL de la unidad) y esa lista del ADR no menciona
     consultas ni esperas ni S04 l. 299. El tracker de definición l. 76
     (contexto de S11) afirma «Los handoffs autoritativos vivirán en el work
     tracker», lo que sugiere que S11 decidió la ubicación de los handoffs;
     no se leyó S11 y no consta allí, por búsqueda, la persistencia de las
     esperas sin destinatario.
  6. **Otros aplazamientos de S05 l. 52-80 están embebidos en filas
     `accepted`, sin fila `deferred`:** «La implementación del mecanismo se
     decidirá en arquitectura» (l. 59, sin número de sesión), «su contrato se
     definirá en la sesión 6» (l. 66, con destino) y adapters/transporte
     «para las sesiones posteriores» (l. 40, 79). Patrón de `REV-2026-028`
     (S04) con la diferencia de que S05 no tiene ninguna lista de diferidos.
- Inferencia (si aplica): la unidad da por cerrada la sesión (l. 3) con una
  de sus ocho preguntas sin fila y con el aplazamiento que la sesión
  anterior le dirigió sin acuse ni retorno; el destino existe sólo en
  ADR-004, de modo que quien lea S04 l. 299 → S05 no encuentra ni la
  resolución ni el nuevo destino. Es el patrón de `REV-2026-025`/`028`/`035`
  (el ADR como único inventario) visto ahora desde la sesión receptora, y
  extiende `REV-2026-023`/`035` (fila `deferred` sin marca de retorno) al par
  S04 l. 299 → S05.

## Observación y propuesta

- Observación: el defecto no es haber aplazado la representación física
  —es razonable que la decida la arquitectura— sino que la unidad no lo dice
  y que el subconjunto de l. 299 que S05 excluye del contrato (esperas sin
  destinatario) no recibe destino en ningún documento leído. Complementa
  `REV-2026-035` hecho 5 («rutas» no localizadas en S05) con el hecho de que
  S05 tampoco recibe el aplazamiento, y `REV-2026-020` (destino de lo no
  confirmado) con el caso de la espera sin receptor.
- Propuesta concreta: que la persona decida (a) si S05 debe registrar la
  pregunta 8 con estado (`deferred`) y destino (sesión 11, enlazando ADR-004
  l. 118-119 o la fila de S11 que la resolvió), en la tabla o en una sección
  de diferidos; (b) qué documento posee el schema, la ruta, el timeout y el
  canal de las esperas sin destinatario (`waiting` por dependencia externa,
  `bloqueo` sin autoridad) que S04 l. 299 envió a la sesión 5 y S05 l. 54/58
  deja fuera de `handoff/v1`: S05, S11 o el registro del tracker con formato
  por decidir; (c) si S04 l. 299 debe llevar marca de retorno a S05/ADR-004/
  S11 (propuesta (c) de `REV-2026-035`); (d) si los aplazamientos embebidos
  de l. 59 y l. 40/79 deben constar con sesión. No editar S04, S05 ni
  ADR-004 sin esa decisión.
- Contraargumento o coste/riesgo: el plan del índice asigna la arquitectura
  a la sesión 11 (l. 69) y ADR-004 registra el destino, de modo que la
  representación física no está perdida; S05 anticipó en l. 40 que adapters y
  transporte irían a «sesiones posteriores»; una espera por dependencia
  externa puede no necesitar más schema que el contenido mínimo de S04
  l. 298 y vivir en el tracker sin contrato propio; `AGENTS.md` l. 6 impide
  ampliar sesiones cerradas. El coste de la propuesta es una fila con estado
  y un enlace en una unidad cerrada, y una decisión sobre quién posee la
  persistencia de las esperas sin receptor.

## Análisis adicional

- Evidencia interna: hechos 1-6. Enlaces: S04 l. 298-299 y 250
  ([sesión 4](../definition/session-04-operating-cycle.md#persistencia-mínima-de-consultas-y-esperas));
  ADR-004 l. 116-125 ([Puntos abiertos](../adr/ADR-004-contrato-portable-de-handoffs.md#puntos-abiertos));
  índice l. 128 ([Revisión transversal](../product-definition.md#revisión-transversal-de-prácticas-de-harnesses));
  anotaciones relacionadas: [`REV-2026-035`](2026-09-24-REV-2026-035-cierre-s04-afirma-sesion-de-resolucion-asignada-para-diferidos-sin-sesion-en-la-unidad.md)
  (hecho 5), [`REV-2026-028`](2026-09-24-REV-2026-028-aplazamientos-embebidos-en-filas-accepted-de-s04-sin-fila-deferred-ni-destino-en-la-unidad.md),
  [`REV-2026-023`](2026-09-24-REV-2026-023-detalles-aplazados-s03-sin-retorno-y-sin-fila-para-validacion-de-referencias.md),
  [`REV-2026-025`](2026-09-24-REV-2026-025-puntos-abiertos-de-adr-002-divergen-de-detalles-aplazados-s03.md),
  [`REV-2026-020`](2026-09-21-REV-2026-020-tabla-de-persistencia-sin-destino-para-lo-no-confirmado.md).
- Contraevidencia y límites: el criterio de salida y el cierre de S05
  (l. 234-263, bloque `B022`) no se analizaron aquí; por búsqueda, ninguna
  línea de la unidad contiene «ubicaci», «ruta» ni «diferid», así que el
  cierre no puede nombrar la pregunta 8 con esos términos, pero podría
  declararla resuelta con otras palabras. S11 y ADR-010 no se leyeron: el
  hecho 5 sólo afirma lo que dice el tracker de definición l. 76. No se
  demuestra que las esperas sin destinatario carezcan de destino en S11; se
  demuestra que S05 no lo da y que S04 lo envió a S05.
- Pregunta para resolver: ¿dónde debe constar, desde la unidad S05, el
  destino de la representación y ubicación de `handoff/v1` (pregunta 8) y de
  la persistencia de las esperas sin destinatario que S04 l. 299 envió a la
  sesión 5 y que S05 l. 54/58 deja fuera del contrato?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: pendiente
