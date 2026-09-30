# Anotación de revisión

- ID de anotación: `REV-2026-028`
- Unidad y ubicación: `S04` — [session-04-operating-cycle.md, «Acuerdos y orientación de la sesión»](../definition/session-04-operating-cycle.md#acuerdos-y-orientación-de-la-sesión),
  tabla de conclusiones (l. 69-116; filas l. 74, 75, 77, 78, 109, 111, 112,
  113 y 114), frente a [«Detalles diferidos después del cierre»](../definition/session-04-operating-cycle.md#detalles-diferidos-después-del-cierre)
  de la misma unidad (l. 246-253) y a
  [ADR-003, «Detalles diferidos»](../adr/ADR-003-ciclo-operativo-y-coordinacion.md#detalles-diferidos)
  (l. 112-121). Bloque `B014`.
- Revisión examinada: 2026-09-24; repositorio sin commits, huella no
  disponible. Citas distintivas: «runbooks y umbrales concretos siguen
  pendientes y no autorizados» (l. 75); «Las rutas y formatos concretos siguen
  pendientes» (l. 78); «El umbral temporal concreto podrá configurarse
  después» (l. 109); «Los mecanismos concretos se decidirán después» (l. 112);
  «Los worktrees siguen como mecanismo pendiente, no como contrato» (l. 114);
  «Permisos ejecutables, política de riesgo y runbooks concretos → sesión 9»
  (ADR-003 l. 118).
- Tipo: `incompleto`
- Gravedad: `baja`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos; `media` sobre el impacto (S05, S08, S09
  y S11 sólo por líneas devueltas por búsqueda; el cierre de S04, l. 319-327,
  corresponde a `B018`)
- Impacto: si desde la unidad canónica de S04 puede saberse qué quedó
  diferido, con qué estado y dónde se resolverá, o si ese inventario vive sólo
  en ADR-003 y diverge de la unidad. Afecta a la verificabilidad del cierre de
  S04 (que afirma «sesión de resolución asignada» para lo diferido, según
  `B013`), al criterio del índice que exige «un punto concreto de resolución»
  para cada aplazamiento (l. 128) y al cruce `CT07`.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión y divergencia exclusivamente
  internas; no se invoca ninguna fuente externa)
- Fuente primaria: `docs/definition/session-04-operating-cycle.md` l. 71-116
  (recuento de estados) y l. 246-253; `docs/adr/ADR-003-ciclo-operativo-y-coordinacion.md`
  l. 112-121; `docs/product-definition.md` l. 126-128; `AGENTS.md` l. 35-36;
  `docs/definition/session-02-limits.md` l. 100-107 y
  `docs/definition/session-03-sources-of-truth.md` l. 230-240 (convención de
  aplazamientos, vistas por `B008` y `B011`);
  `docs/definition/session-05-handoffs.md` l. 62 y
  `docs/definition/session-08-portability.md` l. 114-115 (sólo líneas
  devueltas por búsqueda)
- Sección o localizador: tabla de conclusiones y «Detalles diferidos después
  del cierre» (S04); «Detalles diferidos» (ADR-003); «Revisión transversal de
  prácticas de harnesses» (índice)
- Fecha de consulta/publicación: consulta 2026-09-24; S04 declara criterio
  comprobado el 2026-09-15 (l. 3-4); ADR-003 sin fecha leída
- Hecho observado:
  1. Las 46 filas de la tabla (l. 71-116) tienen estado `accepted`; no hay
     ninguna `deferred` ni `rejected`. En toda la unidad sólo hay una fila
     `rejected` (l. 146) y una `deferred` (l. 299), fuera de este bloque.
  2. Nueve filas `accepted` contienen un aplazamiento en la conclusión o en la
     justificación: l. 74 («pasos internos por concretar»), l. 75 («runbooks y
     umbrales concretos siguen pendientes y no autorizados»), l. 77 («las
     herramientas siguen pendientes»), l. 78 («Las rutas y formatos concretos
     siguen pendientes»), l. 109 («El umbral temporal concreto podrá
     configurarse después»), l. 111 («corpus, baseline, frecuencia, ejecución
     CI/offline y umbrales se defieren a las sesiones 11–12»), l. 112 («Los
     mecanismos concretos se decidirán después»), l. 113 («Los runbooks y
     umbrales concretos se definirán después») y l. 114 («Los worktrees siguen
     como mecanismo pendiente»). Sólo l. 111 nombra una sesión de destino.
  3. «Detalles diferidos después del cierre» (l. 246-253) es una lista de
     cinco puntos sin estado: sólo l. 250 nombra sesión («consultas, esperas y
     handoffs en la sesión 5»); l. 249 (subpasos), l. 251 («Esquemas, rutas y
     elección de herramientas») y l. 253 («sesiones aplicables») no. No hay
     punto para el umbral temporal de abandono (l. 109), los runbooks y
     umbrales de `Maintain` (l. 75, 113) ni los worktrees (l. 114).
  4. ADR-003 «Detalles diferidos» (l. 112-121) sí asigna destino a la mayoría:
     «runbooks concretos → sesión 9» (l. 118), «enforcement y evals → sesión
     11» (l. 120), «umbrales … → sesión 12» (l. 121), «Portabilidad … →
     resueltos en sesión 8 y ADR-007; mecanismos concretos → sesiones 11 y 12»
     (l. 117). El umbral temporal de abandono no aparece en el ADR. La unidad
     no enlaza esa lista ni la reproduce.
  5. El índice rector compromete que «Una decisión aplazada incluirá un punto
     concreto de resolución» (l. 128) y `AGENTS.md` ordena registrar «cada
     conclusión como `accepted`, `deferred` o `rejected`» (l. 35-36). S02
     (l. 100-107) y S03 (l. 230-240) registran sus aplazamientos como filas
     `deferred` con sesión de destino.
  6. Fuera de S04, por búsqueda: S08 l. 114-115 decide que los worktrees son
     «candidatos opcionales» (`accepted`) y rechaza hacerlos obligatorios; S05
     l. 62 decide que `due_at` no convierte «el paso del tiempo en abandono».
     Ninguna de las dos está enlazada desde S04 ni desde ADR-003 l. 117-118.
- Inferencia (si aplica): quien lea sólo la unidad canónica de S04 encuentra
  46 acuerdos completos y una lista de cinco diferidos, y no puede
  reconstruir que también quedaron pendientes el umbral temporal de abandono,
  los runbooks y umbrales de `Maintain`, los mecanismos de enforcement, las
  rutas y formatos de specs y los worktrees, ni dónde se resolverían. El
  inventario existe en ADR-003 y es distinto del de la unidad (patrón de
  `REV-2026-015` y `REV-2026-025`), y un aplazamiento (umbral temporal) no
  está en ninguno.

## Observación y propuesta

- Observación: aplazar dentro de una fila `accepted` es una forma legítima de
  acotar lo aceptado («se acepta el principio, no el mecanismo»), y no se
  objeta ningún aplazamiento en sí. El defecto es de registro: esos
  aplazamientos no tienen estado, no están en la lista de diferidos de la
  unidad y sus destinos sólo constan en el ADR, de modo que la unidad no puede
  usarse para verificar la afirmación de su cierre sobre lo diferido ni la
  regla del índice l. 128. Es el mismo patrón que `REV-2026-015`/`REV-2026-023`
  (aplazamientos sin retorno) y `REV-2026-025` (inventario del ADR distinto del
  de la unidad), y complementa `REV-2026-026` (incorporación del repositorio
  sin fila ni destino) en la misma unidad.
- Propuesta concreta: que la persona (1) decida si el inventario vigente de
  aplazamientos de S04 es la unidad o ADR-003 (misma decisión que piden
  `REV-2026-001`, `REV-2026-015` y `REV-2026-025`); (2) si es la unidad, añada
  a l. 246-253 —o como filas `deferred`— el umbral temporal de abandono, los
  runbooks y umbrales de `Maintain`, los mecanismos de enforcement, las rutas
  y formatos de specs y los worktrees, con destino y, donde ya se resolvió,
  enlace (S05 l. 62, S08 l. 114-115, S09, S11, S12); (3) si es el ADR, lo diga
  en l. 246 y añada al ADR el umbral temporal de abandono. No editar S04 ni
  ADR-003 sin esa decisión.
- Contraargumento o coste/riesgo: ADR-003 ya da destino a casi todo y S04
  l. 4 remite al ADR desde la cabecera, por lo que un lector que siga el
  enlace encuentra el inventario; la persona puede considerar que «pendiente»
  dentro de una fila `accepted` basta como registro y que sólo lo diferido
  «después del cierre» necesita lista. El coste de la propuesta es una lista o
  unas filas en una sesión cerrada y una línea en el ADR. La gravedad es
  `baja` porque los destinos existen para casi todo y las sesiones de destino
  ya se celebraron.

## Análisis adicional

- Evidencia interna: hechos 1-6. Filas l. 74-78, 109, 111-114 (aplazamientos
  embebidos) frente a l. 246-253 (lista sin estado) y ADR-003 l. 112-121
  (inventario con destinos); índice l. 128 y `AGENTS.md` l. 35-36 (regla);
  S02 l. 100-107 y S03 l. 230-240 (convención anterior). Relación con
  [`REV-2026-015`](2026-09-21-REV-2026-015-aplazamientos-s02-sin-retorno-y-divergentes-de-adr-001.md),
  [`REV-2026-023`](2026-09-24-REV-2026-023-detalles-aplazados-s03-sin-retorno-y-sin-fila-para-validacion-de-referencias.md),
  [`REV-2026-025`](2026-09-24-REV-2026-025-puntos-abiertos-de-adr-002-divergen-de-detalles-aplazados-s03.md)
  y [`REV-2026-026`](2026-09-24-REV-2026-026-objetivo-s04-incorporar-repositorio-y-bootstrap-del-indice-sin-decision-ni-aplazamiento.md).
  `REV-2026-022` (hecho 3) muestra la misma falta de sesión para los
  mecanismos de l. 112 desde el lado de S03.
- Contraevidencia y límites: no se leyeron S05, S08, S09, S11 ni S12 más allá
  de las líneas devueltas por búsqueda, por lo que no se afirma que algún
  aplazamiento esté sin resolver, sólo que S04 no lo registra ni enlaza; el
  cierre de S04 (l. 319-327) no se analizó aquí (`B018` debe contrastar su
  afirmación sobre lo diferido con esta anotación); la lista de l. 246-253 y
  su falta de destinos pertenecen a `B017`, que puede matizar el hecho 3.
- Pregunta para resolver: ¿cuál es el inventario vigente de aplazamientos de
  S04 (unidad o ADR-003), y deben los aplazamientos embebidos en filas
  `accepted` —en particular el umbral temporal de abandono, sin destino en
  ninguno— constar con estado y destino en la unidad?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B014](blocks/B014.md), `REV-2026-001`,
  `REV-2026-015`, `REV-2026-022`, `REV-2026-023`, `REV-2026-025`,
  `REV-2026-026`, cruce `CT07`

## Preguntas pendientes

Ver el checkpoint [B014](blocks/B014.md).

## Cobertura y límites

Ver el checkpoint [B014](blocks/B014.md). Sin fuentes externas necesarias para
este hallazgo; el contraste es interno.
