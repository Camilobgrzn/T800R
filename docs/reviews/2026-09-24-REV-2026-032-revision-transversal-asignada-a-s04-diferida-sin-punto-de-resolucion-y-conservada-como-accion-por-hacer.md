# Anotación de revisión

- ID de anotación: `REV-2026-032`
- Unidad y ubicación: `S04` — [session-04-operating-cycle.md, «Detalles diferidos después del cierre»](../definition/session-04-operating-cycle.md#detalles-diferidos-después-del-cierre)
  (l. 253) y [«Transiciones de etapa y continuidad de tareas»](../definition/session-04-operating-cycle.md#transiciones-de-etapa-y-continuidad-de-tareas)
  (párrafo l. 289-292), frente al índice rector,
  [«Revisión transversal de prácticas de harnesses»](../product-definition.md#revisión-transversal-de-prácticas-de-harnesses)
  (l. 113-135), al [«Criterio de salida»](../definition/session-04-operating-cycle.md#criterio-de-salida)
  de la misma unidad (l. 312-313) y a la [«Comprobación de cierre»](../definition/session-04-operating-cycle.md#s04-cierre)
  (l. 319-326, sólo como frontera; su análisis es de `B018`). Bloque `B017`.
- Revisión examinada: 2026-09-24; repositorio sin commits, huella no
  disponible. Citas distintivas: «Continuar revisión transversal de OpenAI y
  Anthropic en las sesiones aplicables» (l. 253); «Revisar las prácticas
  aplicables de OpenAI y Anthropic: inicialización, planificación, progreso
  incremental, trabajo prolongado, comprobación del estado real, validación y
  recuperación. Compararlas con las necesidades de agentes de una misma sesión
  y de sesiones independientes» (l. 289-292); «Las prácticas revisadas deben
  conservar su decisión y justificación» (l. 312-313); «Inicialización,
  planificación, progreso incremental, ejecución prolongada, recuperación y
  cierre | 4» (índice l. 116); «Una decisión aplazada incluirá un punto
  concreto de resolución» (índice l. 128).
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos; `media` sobre el impacto (S11 y S12 no
  leídas; S05-S07 sólo por búsqueda de términos; el cierre de S04 l. 319-327
  corresponde a `B018`)
- Impacto: si las dos áreas de la revisión transversal que el índice asigna a
  la sesión 4 (l. 116-117) están cubiertas, aplazadas con destino o
  simplemente sin hacer. De ello depende que la «comprobación final de
  cobertura» (índice l. 129-130, 134-135) pueda encontrar el registro, que el
  criterio de salida de S04 (l. 312-313) sea verificable frente a lo que el
  índice comprometió, y el cruce `CT07`. No cambia el contenido de las filas
  aceptadas.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión y contradicción exclusivamente
  internas; la única fuente externa consultada no se usa como evidencia)
- Fuente primaria: `docs/product-definition.md` l. 98-135;
  `docs/definition/session-04-operating-cycle.md` l. 3-4, 54-67, 109-113,
  190-191, 246-255, 289-292, 312-313 y 319-326;
  `docs/definition/session-03-sources-of-truth.md` l. 221-224 (vía
  `REV-2026-022`); búsqueda de «OpenAI|Anthropic» en
  `docs/definition/session-05-handoffs.md`, `session-06-context.md` y
  `session-07-knowledge.md` (2026-09-24: sin coincidencias)
- Sección o localizador: «Detalles diferidos después del cierre»,
  «Transiciones de etapa y continuidad de tareas», «Criterio de salida» y
  «Comprobación de cierre» (S04); «Revisión transversal de prácticas de
  harnesses» (índice)
- Fecha de consulta/publicación: consulta 2026-09-24; S04 declara criterio
  comprobado el 2026-09-15 (l. 3-4); el índice fija el compromiso el
  2026-09-14 (l. 100-101)
- Hecho observado:
  1. El índice asigna a la sesión 4 dos áreas de la revisión transversal:
     «Inicialización, planificación, progreso incremental, ejecución
     prolongada, recuperación y cierre» (l. 116, sólo sesión 4) y
     «Coordinación, delegación, revisión entre agentes y transferencia de
     trabajo» (l. 117, «4 y 5»). Compromete para cada práctica «fuente,
     problema que resuelve, beneficios, costes, riesgos, decisión
     `accepted`/`deferred`/`rejected` y justificación», que «Una decisión
     aplazada incluirá un punto concreto de resolución» (l. 126-128) y que
     antes de cerrar «se explicitarán los casos en que los artículos no
     aporten evidencia suficiente» (l. 129-130).
  2. S04 difiere esa revisión en su lista de «Detalles diferidos después del
     cierre»: «Continuar revisión transversal de OpenAI y Anthropic en las
     sesiones aplicables» (l. 253), sin estado, sin sesión y sin punto
     concreto de resolución; es el único ítem de la lista sin destino que no
     nombra siquiera un tema concreto por resolver.
  3. La misma unidad, cerrada (`completed`, l. 3-4), conserva en l. 289-292,
     bajo «Transiciones de etapa y continuidad de tareas» y después del
     «Resumen operativo», un párrafo en imperativo sin estado: «Revisar las
     prácticas aplicables de OpenAI y Anthropic: inicialización, planificación,
     progreso incremental, trabajo prolongado, comprobación del estado real,
     validación y recuperación. Compararlas con las necesidades de agentes de
     una misma sesión y de sesiones independientes». La enumeración reproduce
     casi literalmente el área de l. 116 del índice, y la segunda frase alude
     a la de l. 117. Es una acción por hacer conservada en una unidad cerrada,
     como las de l. 141-142, 190-193 y 255 (`REV-2026-031`, hecho 1).
  4. El criterio de salida de S04 sólo exige que «Las prácticas revisadas
     deben conservar su decisión y justificación» (l. 312-313): protege lo
     revisado y no obliga a revisar las áreas asignadas ni a declarar cuáles
     quedaron sin revisar. El cierre (l. 319-323, `B018`) no menciona la
     revisión transversal y l. 325-326 afirma que lo diferido «tiene sesión de
     resolución asignada», lo que l. 253 no cumple.
  5. Lo que S04 sí contrastó no está registrado por área ni con el formato del
     índice: el playbook de claude.com (l. 61-67 → filas l. 75, 111, 112,
     113), la investigación del orchestrator (l. 54-59 → l. 110) y dos filas
     de la matriz de S03 asignadas a la sesión 4 (S03 l. 221 y 223 → S04
     l. 109 y 112, según `REV-2026-022`). l. 190-191 dice «Tras evaluar las
     candidatas aplicables del playbook» sin enumerarlas. Ninguna fila de S04
     cita las «fuentes de partida» del índice (l. 105-107: «Harness
     engineering» de OpenAI y los dos artículos de Anthropic); en toda S04,
     «OpenAI» y «Anthropic» aparecen sólo en l. 55, 61, 253 y 289 (búsqueda).
  6. Las «sesiones aplicables» de l. 253 no recogieron la revisión: la
     búsqueda de «OpenAI|Anthropic» en S05, S06 y S07 no devuelve ninguna
     coincidencia (2026-09-24; coherente con `REV-2026-005`). El estado
     global del índice (l. 132-135) dice «pendiente de completar», atribuye a
     S11 «arquitectura, restricciones ejecutables, seguridad de credenciales,
     aislamiento y estrategia de pruebas» y a S12 «validación, calidad, costes,
     ciclos de mejora y la comprobación final de cobertura»; no nombra las
     áreas de la sesión 4 ni entre lo cubierto ni entre lo pendiente.
- Inferencia (si aplica): quien busque la cobertura de las dos áreas de
  l. 116-117 no la encuentra en S04 (que la difiere sin destino y la conserva
  como acción por hacer), ni en S05-S07 (sin rastro por búsqueda), ni en el
  estado del índice. El criterio de salida de S04, tal como está redactado,
  no puede detectar esa ausencia porque sólo alcanza a «las prácticas
  revisadas». La comprobación final de cobertura (índice l. 129-130) tendrá
  que reconstruir desde las filas l. 109-113 qué prácticas se evaluaron, sin
  columna de fuente ni de problema que resuelve.

## Observación y propuesta

- Observación: S04 no incumple su propio criterio de salida —las prácticas
  que sí revisó conservan decisión y justificación en filas `accepted`—, pero
  el criterio es más estrecho que el compromiso del índice que debía
  satisfacer, y la unidad reconoce dos veces que la revisión de sus áreas
  quedó por hacer (l. 253 y l. 289-292) sin darle estado, sesión ni punto de
  resolución, en contra de la regla del índice l. 128. Es la respuesta a la
  pregunta pendiente 2 de `REV-2026-005` («¿Las sesiones 3 y 4 dejaron el
  registro con el formato completo comprometido?») desde el lado de S04, y
  extiende `REV-2026-022` (marcas de S03 frente a S04) y el patrón de
  `REV-2026-028`/`REV-2026-031` (aplazamientos sin destino y acciones
  superadas conservadas en una unidad cerrada).
- Propuesta concreta: que la persona (1) decida si las áreas de l. 116-117 se
  consideran cubiertas por S04 (playbook, investigación del orchestrator y
  filas l. 221/223 de S03) —y entonces registre esa cobertura por área con el
  formato de l. 126-128, o declare conforme a l. 130 qué prácticas de las
  fuentes de partida no aportan evidencia suficiente— o pendientes —y entonces
  dé a l. 253 un punto concreto de resolución (S12, según l. 134-135, o la
  pasada retroactiva que propone `REV-2026-005`) y feche o retire l. 289-292
  como acción superada—; (2) que el estado del índice (l. 132-135) nombre las
  áreas de la sesión 4 entre lo cubierto o lo pendiente. No editar S04 ni el
  índice sin esa decisión.
- Contraargumento o coste/riesgo: S04 contrastó prácticas reales y varias de
  las de «Effective harnesses for long-running agents» (inicializador,
  progreso incremental, archivo de progreso, comprobar el estado real al
  reanudar; fichas de `B011` y `REV-2026-005`) tienen correlato en l. 101, 109
  y 115-116, de modo que la cobertura material puede ser mayor que la
  registrada; el registro por área es un requisito del índice y la persona
  puede decidir que S12 lo cierre de una vez. El artículo de OpenAI sigue
  inaccesible (HTTP 403 el 2026-09-21 y el 2026-09-24), lo que limita lo que
  cualquier sesión puede revisar de él. El coste de la propuesta es una lista
  por área o una frase en l. 253 y en el índice.

## Análisis adicional

- Evidencia interna: hechos 1-6. Índice l. 116-117 y 126-130 (compromiso)
  frente a S04 l. 253 (diferido sin destino) y l. 289-292 (acción por hacer);
  l. 312-313 (criterio estrecho) frente a l. 325-326 (afirmación de destino);
  l. 109-113 y 190-191 (lo revisado, sin registro por área); búsqueda en
  S05-S07 e índice l. 132-135 (sin recepción). Relación con
  [`REV-2026-005`](2026-09-21-REV-2026-005-revision-transversal-sin-rastro-s05-s07.md)
  (S05-S07 sin rastro; su pregunta pendiente 2 remite a los bloques de S03 y
  S04),
  [`REV-2026-022`](2026-09-24-REV-2026-022-matriz-de-practicas-con-marcas-de-aceptacion-parciales-frente-a-s04.md)
  (marcas de S03 frente a S04 l. 109 y 112),
  [`REV-2026-028`](2026-09-24-REV-2026-028-aplazamientos-embebidos-en-filas-accepted-de-s04-sin-fila-deferred-ni-destino-en-la-unidad.md)
  (lista l. 246-253 sin estado) y
  [`REV-2026-031`](2026-09-24-REV-2026-031-prosa-de-proxima-accion-de-s04-duplica-las-filas-con-omisiones-y-conserva-acciones-superadas-sin-regla-de-precedencia.md)
  (acciones por hacer en una unidad cerrada).
- Contraevidencia y límites: no se leyeron S11 ni S12, donde el índice
  l. 132-135 sitúa el resto de la revisión; no se afirma que las áreas de la
  sesión 4 estén sin cubrir en el fondo, sólo que ningún documento leído o
  buscado registra su cobertura ni su destino. La búsqueda en S05-S07 es por
  términos, no lectura completa (mismo límite que `REV-2026-005`). El cierre
  de S04 (l. 319-327) se cita como frontera; `B018` debe contrastarlo.
- Fuentes externas: <https://openai.com/index/harness-engineering/>,
  consultada el 2026-09-24: HTTP 403, no leída (igual que `B011` y
  `REV-2026-005`); no se usa como evidencia. Ninguna otra fuente externa es
  necesaria: el hallazgo es interno.
- Pregunta para resolver: ¿dónde consta la cobertura de las dos áreas de la
  revisión transversal asignadas a la sesión 4 (índice l. 116-117), o en qué
  sesión y con qué formato se completará, y debe el criterio de salida de S04
  (l. 312-313) alcanzar a las prácticas asignadas y no sólo a «las
  revisadas»?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B017](blocks/B017.md), [B013](blocks/B013.md)
  (pregunta 6), [B016](blocks/B016.md) (pregunta 5), `REV-2026-005`,
  `REV-2026-022`, `REV-2026-028`, `REV-2026-031`, cruce `CT07`

## Preguntas pendientes

Ver el checkpoint [B017](blocks/B017.md).

## Cobertura y límites

Ver el checkpoint [B017](blocks/B017.md). Una fuente externa intentada
(OpenAI, 403); el contraste es interno.
