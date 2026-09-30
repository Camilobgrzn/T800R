# Anotación de revisión

- ID de anotación: `REV-2026-035`
- Unidad y ubicación: `S04` — [Comprobación de cierre](../definition/session-04-operating-cycle.md#s04-cierre),
  «Los mecanismos, schemas, rutas, timeouts y adapters diferidos no modifican
  este lifecycle y tienen sesión de resolución asignada»
  (`docs/definition/session-04-operating-cycle.md:325-326`), frente a
  [«Detalles diferidos después del cierre»](../definition/session-04-operating-cycle.md#detalles-diferidos-después-del-cierre)
  (l. 248-253), a los aplazamientos embebidos de la tabla (l. 74, 75, 77, 78,
  109, 111, 112, 113, 114), a la fila `deferred` de l. 299 y a
  [ADR-003, «Detalles diferidos»](../adr/ADR-003-ciclo-operativo-y-coordinacion.md#detalles-diferidos)
  (l. 112-121). Bloque `B018`.
- Revisión examinada: estado de los archivos al 2026-09-24; repositorio sin
  commits, huella no disponible. S04 declara cierre comprobado el 2026-09-15
  (l. 3-4); ADR-003 está fechado 2026-09-15, «Aceptada» (l. 3-4).
- Tipo: `error`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos textuales; `media` sobre el efecto (S05,
  S08 y S11 sólo por líneas devueltas por búsqueda en `B017`/`REV-2026-028`)
- Impacto: si la afirmación del cierre sobre lo diferido es verificable desde
  la unidad canónica; qué aplazamientos de S04 carecen de destino en cualquier
  documento y pueden perderse antes del cierre global (índice l. 128: «Una
  decisión aplazada incluirá un punto concreto de resolución»; l. 162: «las
  incógnitas restantes no bloqueen la implementación»); y si S04 debe enlazar
  el inventario de ADR-003 como fuente de destinos. No cambia el lifecycle.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (contradicción exclusivamente interna; no se
  invoca ninguna fuente externa)
- Fuente primaria: `docs/definition/session-04-operating-cycle.md` l. 64, 74,
  75, 77, 78, 109, 111, 112, 113, 114, 243-244, 246-253, 299, 305 y 325-327
  (búsqueda de «adapter|mecanismo» en toda la unidad: l. 64, 111, 112, 114,
  299, 325); `docs/adr/ADR-003-ciclo-operativo-y-coordinacion.md` l. 3-4,
  112-121 y 125; `docs/product-definition.md` l. 62-68, 116-117 y 126-128
- Sección o localizador: «Comprobación de cierre», «Detalles diferidos
  después del cierre», tabla de «Acuerdos y orientación de la sesión» y
  «Persistencia mínima de consultas y esperas» (S04); «Detalles diferidos»
  (ADR-003); «Sesiones de definición» (índice)
- Fecha de consulta/publicación: consulta 2026-09-24; cierre comprobado el
  2026-09-15 según l. 3-4
- Hecho observado:
  1. l. 325-326 afirma que «Los mecanismos, schemas, rutas, timeouts y
     adapters diferidos … tienen sesión de resolución asignada». l. 327
     enlaza ADR-003 sólo como registro de «La decisión transversal», no como
     inventario de destinos.
  2. En la propia unidad, sólo dos lugares asignan sesión a algo diferido:
     l. 250 («Schema, rutas, timeout y canal de consultas, esperas y handoffs
     en la sesión 5») y la fila `deferred` l. 299 («Rutas, schema, timeout y
     canal de persistencia de consultas y esperas … Se resolverán en la
     sesión 5»; l. 305 lo repite). Los demás aplazamientos no tienen sesión:
     l. 249 (subpasos), l. 251 («Esquemas, rutas y elección de herramientas»),
     l. 253 («sesiones aplicables»), y los embebidos en filas `accepted`:
     l. 74 («pasos internos por concretar»), l. 75 y 113 (runbooks y umbrales
     de `Maintain`), l. 77 (herramientas), l. 78 y 243-244 (rutas y formatos
     de specs; «ni una ruta de almacenamiento»), l. 109 (umbral temporal de
     abandono), l. 112 («Los mecanismos concretos se decidirán después»),
     l. 114 (worktrees «mecanismo pendiente»). `REV-2026-028` (hechos 2-3)
     registró la lista sin estado y sin destino; aquí se añade que el cierre
     afirma lo contrario.
  3. Término a término: «mecanismos» → l. 112 y 114, sin sesión en S04;
     «schemas» → l. 250/299 con sesión y l. 251 sin ella; «rutas» → l. 250/299
     con sesión (consultas y esperas) y l. 78, 243-244 y 251 sin ella (specs;
     esquemas y herramientas); «timeouts» → l. 250/299 con sesión;
     «adapters» → S04 no difiere adapters en ninguna fila ni punto: la única
     mención fuera del cierre es l. 111, donde los adapters son objeto de
     evaluación regresiva, no un diferido.
  4. Los destinos existen sobre todo en ADR-003 l. 112-121: sesión 5 para
     `handoff/v1` (l. 114), sesión 8 y ADR-007 para adapters (l. 117:
     «resueltos en sesión 8 y ADR-007; mecanismos concretos → sesiones 11 y
     12»), sesión 9 para runbooks (l. 118), sesión 11 para enforcement
     (l. 120), sesión 12 para umbrales (l. 121). Ni siquiera el ADR asigna
     sesión al umbral temporal de abandono (l. 109), a los subpasos (l. 249),
     a las rutas y formatos de specs (l. 78), a la elección de herramientas
     (l. 77, 251; OpenSpec/Spec Kit, pregunta 6 de `B017`) ni a la revisión
     transversal (l. 253; `REV-2026-032`). S04 no enlaza esa lista ni la
     reproduce.
  5. «Rutas» con sesión 5 asignada: por búsqueda (`B017`, pregunta 4), S05
     resuelve schema, timeout y canal de consultas, pero «rutas» de
     persistencia no aparecen en S05 ni en ADR-004, y l. 299 no lleva marca de
     retorno. La sesión está asignada; que la resolviera no consta.
- Inferencia (si aplica): la afirmación de l. 325-326 sólo es verdadera si
  «sesión de resolución asignada» se lee como «asignada por el plan del índice
  a algún tema» (sesión 5 handoffs, l. 63; sesión 8 adapters, l. 66; sesión 11
  arquitectura, l. 69) o como «asignada en ADR-003». En la primera lectura, el
  umbral temporal, los subpasos, las rutas de specs, la elección de
  herramientas y la revisión transversal siguen sin fila del plan que los
  reciba; en la segunda, la unidad afirma algo que sólo otro documento
  sostiene, sin enlazarlo para ese fin, y ese documento tampoco lo cubre todo.
  En ambas, «adapters diferidos» no tiene antecedente en S04.

## Observación y propuesta

- Observación: el defecto es una afirmación de cierre contradicha por la
  propia unidad, no un aplazamiento indebido. Lo diferido con sesión (l. 250,
  299) y lo que ADR-003 sí asigna (l. 114, 117-121) no están en cuestión; lo
  que queda es un residuo sin destino en ningún documento (umbral temporal,
  subpasos, rutas y formatos de specs, herramientas, revisión transversal) que
  el cierre da por asignado. Complementa `REV-2026-028` (inventario de la
  unidad frente al ADR) desde el lado del cierre y extiende el patrón de
  `REV-2026-023` (fila `deferred` sin marca de retorno) a l. 299.
- Propuesta concreta: que la persona decida (a) si l. 325-326 se corrige para
  remitir a un inventario con destinos (la lista de l. 246-253 completada con
  estado y sesión, o ADR-003 «Detalles diferidos» enlazado como fuente) y para
  retirar «adapters» o darle antecedente; (b) qué sesión, backlog o
  declaración explícita recibe el residuo sin destino (índice l. 128; S12 o
  el backlog inicial de l. 163); (c) si l. 299 debe remitir a lo que S05
  decidió (patrón `REV-2026-023`) y dónde quedaron las «rutas». No editar S04
  ni ADR-003 sin esa decisión.
- Contraargumento o coste/riesgo: el índice ya asigna temas a sesiones y
  ADR-003 fija destinos para la mayoría de lo diferido, de modo que el fondo
  está en gran parte resuelto (S05, S08/ADR-007, S09, S11 según ADR-003;
  worktrees en S08 según `REV-2026-028` hecho 6); la frase pudo escribirse
  pensando en ese mapa. El residuo es pequeño y de detalle operativo
  («subpasos opcionales», umbral configurable) y `AGENTS.md` l. 6 impide
  ampliar sesiones cerradas. El coste de la propuesta es una frase y una lista
  con estado en una unidad cerrada.

## Análisis adicional

- Evidencia interna: hechos 1-5. l. 325-326 frente a l. 246-253, 299 y los
  aplazamientos embebidos; ADR-003 l. 112-121 como inventario no enlazado;
  índice l. 62-69 (plan), 126-128 (punto concreto de resolución) y 162-163
  (incógnitas y backlog).
  [`REV-2026-028`](2026-09-24-REV-2026-028-aplazamientos-embebidos-en-filas-accepted-de-s04-sin-fila-deferred-ni-destino-en-la-unidad.md)
  (inventario sin estado ni destino en la unidad; umbral temporal sin destino
  en ninguno),
  [`REV-2026-023`](2026-09-24-REV-2026-023-detalles-aplazados-s03-sin-retorno-y-sin-fila-para-validacion-de-referencias.md)
  y
  [`REV-2026-015`](2026-09-21-REV-2026-015-aplazamientos-s02-sin-retorno-y-divergentes-de-adr-001.md)
  (convención de retorno; inventarios divergentes unidad/ADR),
  [`REV-2026-025`](2026-09-24-REV-2026-025-puntos-abiertos-de-adr-002-divergen-de-detalles-aplazados-s03.md)
  (ADR editado tras su fecha sin nota de revisión: ADR-003 l. 117 «resueltos
  en sesión 8 y ADR-007» presenta el mismo rasgo, para `B035`-`B037`),
  [`REV-2026-032`](2026-09-24-REV-2026-032-revision-transversal-asignada-a-s04-diferida-sin-punto-de-resolucion-y-conservada-como-accion-por-hacer.md)
  (l. 253 sin destino),
  [`REV-2026-026`](2026-09-24-REV-2026-026-objetivo-s04-incorporar-repositorio-y-bootstrap-del-indice-sin-decision-ni-aplazamiento.md)
  (incorporación del repositorio tampoco figura entre lo diferido). El
  patrón general del cierre se trata en `REV-2026-034`.
- Contraevidencia y límites: S05, S08, S09, S11 y S12 no se leyeron; no se
  afirma que ningún aplazamiento esté sin resolver en el fondo, sólo que el
  cierre afirma una asignación que la unidad no contiene y que ADR-003 no
  completa. La lectura «asignada por el plan» es plausible para adapters,
  schemas y timeouts; no lo es para los ítems del hecho 4. «Rutas» en S05 se
  comprobó sólo por búsqueda de términos.
- Pregunta para resolver: ¿qué documento es el inventario vigente de lo
  diferido por S04 con su sesión de resolución, y qué recibe el residuo
  (umbral temporal de abandono, subpasos, rutas y formatos de specs, elección
  de herramientas, revisión transversal) que ni S04 ni ADR-003 asignan?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B018](blocks/B018.md), [B017](blocks/B017.md)
  (pistas (b) y pregunta 4), [B014](blocks/B014.md), `REV-2026-034`, cruce
  `CT07`, bloques `B035`-`B037`

## Preguntas pendientes

Ver el checkpoint [B018](blocks/B018.md).

## Cobertura y límites

Ver el checkpoint [B018](blocks/B018.md). Sin fuentes externas necesarias para
este hallazgo; el contraste es interno.
