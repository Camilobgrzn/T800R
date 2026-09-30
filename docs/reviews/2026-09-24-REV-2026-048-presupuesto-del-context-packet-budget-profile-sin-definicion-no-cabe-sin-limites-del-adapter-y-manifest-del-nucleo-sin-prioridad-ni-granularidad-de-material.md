# Anotación de revisión

- ID de anotación: `REV-2026-048`
- Unidad y ubicación: `S06` — [session-06-context.md, «Presupuesto y prioridades»](../definition/session-06-context.md#presupuesto-y-prioridades)
  (l. 121-133) y [«Núcleo obligatorio del context packet»](../definition/session-06-context.md#núcleo-obligatorio-del-context-packet)
  (`manifest`, l. 90), frente a las filas l. 43, 50, 51 y 52 de
  [«Decisiones»](../definition/session-06-context.md#decisiones), a
  [«Capas de validación del context packet»](../definition/session-06-context.md#capas-de-validación-del-context-packet)
  (l. 66, 69, 71-74), al [«Criterio de salida»](../definition/session-06-context.md#criterio-de-salida)
  (l. 35) y a [ADR-005, glosario y «Decisión», puntos 4-5](../adr/ADR-005-contrato-portable-de-contexto.md#decisión)
  (l. 16, 74-80). Bloque `B024`.
- Revisión examinada: estado de los archivos al 2026-09-24; repositorio sin
  commits, huella no disponible. S06 «iniciada el 2026-09-17; cerrada el
  2026-09-18» (l. 3); ADR-005 fechado 2026-09-18. Citas distintivas: «El
  `manifest` clasifica cada material como `required`, `relevant` u `optional`
  y declara `budget_profile`. El adapter incorpora los límites y las
  estimaciones cuantitativas disponibles y reserva capacidad para la respuesta
  y las herramientas; el contrato común no exige que existan métricas de
  tokens o coste» (l. 123-127); «Si lo obligatorio no cabe, el agente se
  detiene antes de actuar» (l. 132); «`manifest` | Describe las secciones
  incluidas o disponibles, con resumen, condición de carga y referencia»
  (l. 90); «**Manifest:** índice de secciones incluidas o disponibles, con
  resumen, referencia, prioridad y condición de carga» (ADR-005 l. 16);
  «manteniendo presupuestos y condiciones de parada verificables» (l. 35);
  «hace deterministas los estados» (l. 51, justificación).
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos textuales (búsqueda de `budget_profile`
  en todo `docs/`); `media` sobre el efecto (S08, S11 y ADR-007 sólo por
  líneas devueltas por búsqueda; la representación física puede añadir
  campos, `REV-2026-036`)
- Impacto: si la parada por presupuesto (l. 50, 52, 132) y el estado
  `invalid` por «presupuesto obligatorio» (l. 51, 73, 171) son decidibles con
  el contrato común cuando el adapter no expone límites, o dependen de una
  cantidad que el propio contrato declara no obligatoria; qué valores,
  semántica y dueño tiene `budget_profile`, único dato de presupuesto que el
  `manifest` «declara» obligatoriamente; y si la definición de `manifest` en
  el núcleo (l. 90) cubre la clasificación y el perfil que l. 123-124 le
  atribuyen, a qué unidad («material») se aplica esa clasificación y qué
  comprueba la capa `structural` (l. 66, «coherencia de `manifest`»). Toca la
  verificabilidad del criterio l. 35 y la portabilidad de los estados
  (l. 43, 51). Responde a la pregunta 2 de `B023`. No cambia el contenido de
  ninguna fila aceptada.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión exclusivamente interna; no se
  invoca ninguna fuente externa)
- Fuente primaria: `docs/definition/session-06-context.md` l. 33-37, 41-60,
  62-74 (dependencia, por `B023`), 76-139 (leídas) y búsqueda en toda la
  unidad de «material» (l. 7, 16, 34, 45, 47, 49-52, 69, 73, 124, 129, 131,
  137, 170, 171, 182, 185, 191), «sección|secciones» y «referencia»; búsqueda
  de `budget_profile` en todo `docs/` (S06 l. 50 y 124; ADR-005 l. 75;
  `definition-tracker.md` l. 245; ninguna otra coincidencia fuera de
  `reviews/`); `docs/adr/ADR-005-contrato-portable-de-contexto.md` l. 16,
  61-100 (leídas) y l. 118-128 (por `B023`); `docs/definition/session-08-portability.md`
  l. 75, 111, 126, 160 (sólo líneas devueltas por búsqueda de «manifest|context
  packet|presupuesto|límites cuantitativos»; fuera del alcance);
  `docs/adr/ADR-007-contrato-de-capacidades-y-adapters-portables.md`
  (búsqueda de «budget_profile|presupuesto»: sin coincidencias).
- Sección o localizador: «Criterio de salida», «Decisiones», «Capas de
  validación del context packet», «Núcleo obligatorio del context packet»,
  «Presupuesto y prioridades» (S06); glosario, «Decisión» puntos 4-5 y
  «Puntos abiertos» (ADR-005).
- Fecha de consulta/publicación: consulta 2026-09-24; sesión cerrada el
  2026-09-18 según l. 3.
- Hecho observado:
  1. **`budget_profile` es obligatorio y no está definido en ninguna
     parte.** L. 50 y l. 124 dicen que el `manifest` «declara `budget_profile`»;
     ADR-005 l. 75 lo repite. Ninguna línea de S06, ADR-005, S08, S11 ni
     ADR-007 dice qué valores toma, qué significa, quién lo fija (productor,
     adapter, persona) ni cómo se relaciona con «los límites y las
     estimaciones cuantitativas disponibles» del adapter (l. 125). No figura
     en las filas `deferred` l. 56-58 (herramientas; identidad y aliases del
     packet; sintaxis de las condiciones de carga) ni en «Puntos abiertos» de
     ADR-005 l. 118-128. La búsqueda de `budget_profile` en todo `docs/` sólo
     devuelve S06 l. 50/124, ADR-005 l. 75 y el tracker de definición l. 245.
  2. **«No cabe» exige una cantidad que el contrato común no obliga a
     existir, y el rango no fija el caso sin límites.** L. 125-127: el adapter
     «incorpora los límites y las estimaciones cuantitativas disponibles» y
     «el contrato común no exige que existan métricas de tokens o coste».
     Sobre esa base, l. 132 detiene al agente «si lo obligatorio no cabe»,
     l. 126 exige «reserva[r] capacidad para la respuesta y las herramientas»,
     l. 69 hace depender `sufficiency` de un «presupuesto viable para la
     acción» y l. 51/73/171 hacen `invalid` un packet por «presupuesto
     obligatorio». Ninguna línea dice qué ocurre cuando el adapter no expone
     límite alguno: si la condición no se dispara (el packet queda `ready` y
     el proveedor trunca sin que S06 lo detecte, contra l. 130-131 «Nunca se
     omiten silenciosamente…») o si el packet es `invalid` porque nada puede
     comprobarse. S08 l. 126 (por búsqueda) repite «declarar los límites
     cuantitativos disponibles» sin fijar el caso.
  3. **El estado por presupuesto depende del adapter, y las filas lo declaran
     común y determinista.** L. 43 justifica el núcleo común porque «permite
     validación y continuidad comunes»; la justificación de l. 51 dice que las
     capas «hace[n] deterministas los estados»; l. 35 exige «presupuestos …
     verificables». Con los hechos 1-2, el mismo packet con el mismo
     `manifest` puede ser `ready` en un adapter que no expone límites e
     `invalid` en otro que sí; el estado deja de ser función del packet.
  4. **La definición de `manifest` en el núcleo no contiene lo que
     «Presupuesto y prioridades» le atribuye.** L. 90: «Describe las secciones
     incluidas o disponibles, con resumen, condición de carga y referencia».
     L. 50 y l. 123-124: el `manifest` «clasifica cada material como
     `required`, `relevant` u `optional` y declara `budget_profile`». Ni la
     clasificación ni el perfil aparecen en l. 90. ADR-005 l. 16 define el
     manifest con «resumen, referencia, prioridad y condición de carga»
     (añade «prioridad», que S06 l. 90 no tiene; sigue sin `budget_profile`).
     La capa `structural` (l. 66) comprueba «coherencia de `manifest`» contra
     una definición que omite dos de sus contenidos.
  5. **La unidad a la que se aplica la clasificación no está escrita.** La
     condición de carga se aplica a la «sección» (l. 45, 90, 107); el impacto
     `packet`/`section`/`advisory` a la «referencia» (l. 48; l. 158 y 160 por
     búsqueda); la
     clasificación `required`/`relevant`/`optional`, la deduplicación, el
     resumen y el diferimiento (l. 129-130) al «material» (l. 50, 124, 129,
     131), y `degraded` a «faltantes `relevant` u `optional` declarados»
     (l. 51, 72, 170). S06 no dice si «material» es una sección, una
     referencia o una unidad menor, ni dónde se declara su clase (l. 90 no la
     lista). ADR-005 l. 74 usa la misma palabra sin definirla; S08 l. 75 (por
     búsqueda) reutiliza `required`/`relevant`/`optional` para requisitos de
     capacidad «con la misma semántica de degradación del context packet»,
     sin fijar la granularidad.
- Inferencia (si aplica): el modelo «híbrido y portable» garantiza en el
  contrato común el orden de degradación y la prohibición de omitir en
  silencio; sus dos efectos observables —parada e `invalid`— sólo son
  decidibles donde un adapter aporta números que el contrato no exige. El
  `manifest` que transporta la clasificación está definido en el núcleo sin
  ella, y «material» no tiene unidad, de modo que `degraded` y el orden de
  l. 129-130 no son computables de forma uniforme a partir del texto.

## Observación y propuesta

- Observación: S06 decide con precisión qué se difiere primero y qué nunca se
  omite, pero deja sin valores el único campo de presupuesto obligatorio, sin
  regla el caso sin límites cuantitativos y sin unidad la clasificación,
  mientras el criterio de salida declara los presupuestos «verificables» y las
  filas declaran los estados comunes y deterministas.
- Propuesta concreta: (a) definir en S06 (o registrar como `deferred` con
  destino y marca de retorno) los valores, la semántica y el dueño de
  `budget_profile` y su relación con los límites del adapter; (b) escribir la
  regla del caso sin límites: por ejemplo, «sin límites cuantitativos del
  adapter, el presupuesto obligatorio se considera viable, la parada por
  presupuesto no aplica y la evidencia registra "presupuesto no medible"», o
  la inversa; (c) completar l. 90 con la clasificación y `budget_profile`, o
  declarar en qué elemento del packet se declaran; (d) fijar qué es «material»
  (sección, referencia u otra unidad) y, en consecuencia, cómo se computan
  `degraded` y el orden de l. 129-130.
- Contraargumento o coste/riesgo: puede sostenerse que el modelo híbrido es
  deliberado —el contrato común sólo garantiza orden y no omisión, y cada
  adapter añade lo que puede— y que S08 concretó los adapters; que ADR-005
  l. 16 ya incluye «prioridad» en el manifest; y que `budget_profile` puede
  ser un nombre libre cuya semántica corresponde a S08/S11. Ninguna fila lo
  dice ni lo difiere. El coste de (a)-(d) es cuatro frases; el riesgo de no
  hacerlo es un estado `invalid` y una parada «verificables» sólo por adapter,
  y una clasificación que cada productor aplica a la unidad que prefiera.

## Análisis adicional

- Evidencia interna: [`REV-2026-047`](2026-09-24-REV-2026-047-parada-del-agente-y-diagnostico-auditable-en-s06-sin-actor-canal-ni-estado-actor-autorizado-y-fuente-autorizada-sin-criterio.md)
  (la parada de l. 50/52/132 sin destinatario ni estado; aquí, además, sin
  condición decidible cuando no hay límites; no se duplica);
  [`REV-2026-028`](2026-09-24-REV-2026-028-aplazamientos-embebidos-en-filas-accepted-de-s04-sin-fila-deferred-ni-destino-en-la-unidad.md)
  y [`REV-2026-045`](2026-09-24-REV-2026-045-rtk-y-context-mode-decididos-en-s06-sin-identificacion-ni-fuente-omitidos-del-criterio-y-con-destino-divergente-en-adr-005.md)
  hecho 4 (aplazamientos embebidos o silenciosos sin fila `deferred`: aquí
  `budget_profile` y el caso sin límites); [`REV-2026-039`](2026-09-24-REV-2026-039-expires-at-y-due-at-condicionales-sin-condicion-ni-politica-de-caducidad-frente-a-la-capa-estructural.md)
  (campo declarado sin condición escrita frente a la capa estructural: mismo
  patrón para `manifest` l. 90 y l. 66); [`REV-2026-043`](2026-09-24-REV-2026-043-tiempos-de-la-envoltura-fuera-de-los-inmutables-contenido-de-la-idempotencia-sin-definir-y-resultado-de-completed-sin-campo.md)
  («dato que el contrato promete y ningún campo aloja»: la clasificación y el
  perfil frente a l. 90); [`REV-2026-040`](2026-09-24-REV-2026-040-actor-que-aplica-las-capas-de-validacion-y-registra-rejected-sin-fijar-y-capas-mecanizables-sin-clasificar.md)
  (`sufficiency` juzga «presupuesto viable» sin actor ni clasificación
  mecanizable).
- Contraevidencia y límites: S08 l. 126 y l. 160 (por búsqueda) asignan al
  adapter «declarar los límites cuantitativos disponibles» y registrar
  «límites cuantitativos disponibles» en la evidencia, lo que hace observable
  la ausencia de límites aunque no decida su efecto; S11 y ADR-010 no leídos
  (la representación puede fijar valores de `budget_profile`). Puede leerse
  que «presupuesto obligatorio no cabe» sólo se evalúa cuando existe un
  límite, y que sin límite el packet es `ready`; el texto no lo dice, y esa
  lectura deja sin efecto l. 130-131 en los adapters sin métricas. No se leyó
  S06 l. 140-193 (bloque `B025`) salvo las líneas devueltas por búsqueda.
- Pregunta para resolver: cuando el adapter no expone límites cuantitativos,
  ¿el presupuesto obligatorio se considera viable, no evaluable o
  insuficiente, y qué estado adopta el packet? ¿Qué valores y dueño tiene
  `budget_profile`, dónde se declara la clase `required`/`relevant`/`optional`
  de cada elemento si l. 90 no la lista, y qué unidad es «material»?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: pendiente
