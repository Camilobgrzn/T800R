# Anotación de revisión

- ID de anotación: `REV-2026-033`
- Unidad y ubicación: `S04` — [session-04-operating-cycle.md, «Transiciones de etapa y continuidad de tareas»](../definition/session-04-operating-cycle.md#transiciones-de-etapa-y-continuidad-de-tareas)
  (filas l. 274-280, en particular l. 275, 277, 279 y 280; resumen
  l. 282-287), frente a las filas de la tabla de conclusiones de
  [«Acuerdos y orientación de la sesión»](../definition/session-04-operating-cycle.md#acuerdos-y-orientación-de-la-sesión)
  (l. 75-76, 79, 81-85, 88-90, 92, 96, 98, 102, 110, 113) y a
  [ADR-003, «Decisión», punto 3](../adr/ADR-003-ciclo-operativo-y-coordinacion.md#decisión)
  (l. 53-56). Bloque `B017`.
- Revisión examinada: 2026-09-24; repositorio sin commits, huella no
  disponible. Citas distintivas: «Un hallazgo devuelve sólo el ámbito afectado
  a `build`, `design` o `plan`; conserva la historia y revalida las
  dependencias afectadas» (l. 279); «Un incremento pasa de `design` a `build`
  sólo con `readiness` demostrado y autorización humana explícita por
  incremento» (l. 275); «Las tareas se asocian a la etapa donde contribuyen.
  Pueden completarse allí o pasar a otra etapa si el mismo entregable
  continúa» (l. 280); «La autorización humana para entrar en `build` se
  concede por incremento, no por tarea ni una sola vez para toda la
  iniciativa» (l. 81); «Un cambio de producto, una acción irreversible o una
  salida de límites vuelve a `plan` y a los gates acordados» (l. 113).
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos; `media` sobre el impacto (S05
  «Lifecycle inicial» y «Semántica inicial de los tipos» sólo por líneas
  devueltas por búsqueda; pueden materializar una de las dos lecturas)
- Impacto: cuántos gates humanos tiene una iteración dentro de un incremento
  ya autorizado (coste), qué debe aplicar «determinísticamente» runtime/policy
  (l. 110, 112: gates de autorización) cuando un hallazgo devuelve parte del
  trabajo a `plan` o `design`, y qué evento materializa S05 (`handoff/v1`)
  para reanudar `build`. Afecta también a la respuesta pendiente de la
  pregunta 5 de `B007` (recuperación si la revisión final rechaza). No cambia
  el contenido de las filas aceptadas.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión exclusivamente interna; no se
  invoca ninguna fuente externa)
- Fuente primaria: `docs/definition/session-04-operating-cycle.md` l. 75-76,
  79, 81-85, 88-90, 92, 96, 98, 102, 110, 113, 150-153, 274-280 y 282-287;
  `docs/adr/ADR-003-ciclo-operativo-y-coordinacion.md` l. 53-56;
  `docs/definition/session-05-handoffs.md` l. 76 (sólo línea devuelta por
  búsqueda)
- Sección o localizador: «Transiciones de etapa y continuidad de tareas» y
  tabla de «Acuerdos y orientación de la sesión» (S04); «Decisión», punto 3
  (ADR-003)
- Fecha de consulta/publicación: consulta 2026-09-24; S04 declara criterio
  comprobado el 2026-09-15 (l. 3-4)
- Hecho observado:
  1. l. 279 (`accepted`) es la única regla de retorno del incremento: «Un
     hallazgo devuelve sólo el ámbito afectado a `build`, `design` o `plan`;
     conserva la historia y revalida las dependencias afectadas». El resumen
     l. 282-287 la repite («puede iterar en el ámbito afectado … cuando un
     hallazgo obliga a volver atrás») y ADR-003 punto 3 (l. 55-56) la
     reproduce sin más detalle. Es la fila que `B014` (pista (g)) no encontró
     en l. 69-116.
  2. Las transiciones de l. 274-278 se enuncian por incremento («Un incremento
     pasa de…») y la entrada a `build` exige «`readiness` demostrado y
     autorización humana explícita por incremento» (l. 275; l. 81-83). Tras
     esa autorización, T800R ejecuta «sin aprobaciones adicionales por tarea»
     (l. 84) y consulta si necesita cambiar «comportamiento, alcance,
     interfaz, criterio de aceptación, una decisión técnica acordada, permisos
     o un riesgo» (l. 85); «si falta un acuerdo funcional, debe consultar»
     (l. 88).
  3. `stage` es una dimensión «para el ciclo, los incrementos y las tareas»
     (l. 89-90) y las tareas «se asocian a la etapa donde contribuyen» y
     «pueden … pasar a otra etapa» (l. 280). l. 279 no dice si el retorno del
     «ámbito afectado» cambia el `stage` del incremento (que volvería a
     `plan`/`design` mientras «continúa lo independiente», l. 79 y 92) o sólo
     el de las tareas afectadas (que quedarían en `plan`/`design` dentro de un
     incremento en `build`). Ninguna otra fila lo resuelve; l. 98 dice sólo
     que `completed` «vuelve a la etapa y estado apropiados».
  4. En consecuencia, la unidad no dice si la reentrada a `build` tras un
     retorno a `plan` o `design` vuelve a exigir el gate de l. 275 (readiness
     y autorización humana explícita) o queda cubierta por la autorización
     del incremento (l. 81) más la consulta de l. 85. La unidad sí lo dice
     para `Maintain`: «vuelve a `plan` y a los gates acordados» (l. 113), pero
     ahí se trata de un incremento nuevo (l. 75), no de un retorno parcial.
  5. Tampoco hay mapa de supuesto a etapa. Sólo l. 76 fija que cambiar «una
     interfaz o criterio de aceptación ya acordado obliga a volver a `plan`»
     (repetido en l. 150-153) y l. 75/113 que un cambio de producto origina un
     incremento en `plan`. Para los demás supuestos de l. 79 y 85
     (comportamiento, alcance, decisión técnica acordada, permisos, riesgo)
     no hay destino ni quién lo decide; l. 79 asigna a T800R «determina qué
     revalidar», no a qué etapa vuelve.
  6. El rechazo humano no tiene fila: l. 277 exige «la aceptación humana
     final» para `verify → deploy` y l. 102 exige `verify` «sin hallazgos
     bloqueantes», pero ni l. 277 ni l. 279 nombran la aceptación negativa ni
     el `verify` fallido; la única vía es leerlos como «hallazgo» de l. 279,
     lo que el texto no dice (pregunta 5 de `B007`; pista (g) de `B014`). Por
     búsqueda, S05 l. 76 da a `verification_request` un veredicto `passed |
     failed | inconclusive` «con seguimiento requerido», sin enlazar l. 279.
  7. El estado de las tareas afectadas durante el retorno (¿`waiting` por
     consulta, l. 92; vuelta a `ready`/`in_progress`, l. 96?) no se nombra en
     l. 270-293 (preguntas 4 de `B015` y 6 de `B016`).
- Inferencia (si aplica): el texto admite dos lecturas. (i) La autorización de
  `build` pertenece al incremento y sobrevive al retorno parcial: el `stage`
  del incremento no cambia, las tareas afectadas vuelven a `plan`/`design`, la
  consulta de l. 85 es el único gate humano de la iteración y `readiness`
  (l. 83) se reevalúa sin gate. (ii) El retorno parcial devuelve el `stage`
  del incremento y la reentrada a `build` repite l. 275 (readiness demostrado
  y autorización humana explícita), como l. 113 hace explícito para
  `Maintain`. Difieren en el número de gates humanos, en lo que runtime/policy
  debe aplicar y en lo que `handoff/v1` materializa. La unidad no elige y
  ADR-003 punto 3 tampoco.

## Observación y propuesta

- Observación: la tabla de l. 274-278 es precisa hacia adelante y la fila
  l. 279 es precisa sobre qué se conserva (historia, revalidación), pero no
  sobre qué gate vuelve a aplicar ni sobre el `stage` del contenedor que
  itera. Es la misma familia de `REV-2026-029` (ciclo colaborativo sin mapa a
  etapas y gates) vista desde el retorno, no desde la entrada: allí faltaba
  saber qué gate inicia el trabajo autónomo; aquí, qué gate lo reanuda tras
  un hallazgo. No es una contradicción de fondo: ambas lecturas son
  compatibles con las filas.
- Propuesta concreta: que la persona (1) declare si en un retorno parcial
  cambia el `stage` del incremento o sólo el de las tareas afectadas; (2) diga
  si la reentrada a `build` tras volver a `plan`/`design` exige de nuevo
  readiness y autorización humana (l. 275) o queda cubierta por la
  autorización del incremento (l. 81) y la consulta de l. 85; (3) fije, para
  cada supuesto de l. 79/85, a qué etapa vuelve el ámbito afectado, o declare
  que T800R lo decide con criterio registrado (l. 94); (4) decida si la
  aceptación humana negativa y un `verify` con hallazgos bloqueantes se tratan
  como «hallazgo» de l. 279 o tienen fila propia. Si se elige (i), bastan una
  o dos frases en l. 279 y en ADR-003 punto 3; si (ii), conviene además una
  transición explícita en la tabla.
- Contraargumento o coste/riesgo: l. 81-85 pueden bastar en la práctica: la
  autorización es del incremento, la consulta cubre cualquier cambio de
  acuerdo y l. 83 sigue siendo condición objetiva que T800R puede reevaluar;
  la unidad aplaza «subpasos opcionales» (l. 249) y «pasos internos» (l. 74,
  261), donde esta mecánica podría caber; S05 (`consultation`,
  `verification_request` con veredicto `failed`) puede haber materializado el
  retorno sin nombrar l. 279. El coste de la propuesta es una o dos frases en
  una unidad cerrada y, quizá, en ADR-003; la gravedad es `media` porque
  afecta al número de gates humanos y a lo que runtime/policy debe aplicar,
  no al contenido de ningún acuerdo.

## Análisis adicional

- Evidencia interna: hechos 1-7. l. 279 y 282-287 (retorno) frente a l. 275
  y 81-84 (gate de `build` por incremento) y l. 85/88 (consulta); l. 89-90 y
  280 (`stage` de incremento y tarea) frente a «sólo el ámbito afectado»;
  l. 76, 75 y 113 (únicos mapas de supuesto a etapa; l. 113 con «gates
  acordados» explícitos) frente a l. 79 y 85 (supuestos sin destino); l. 277 y
  102 frente a la ausencia de fila para el rechazo; ADR-003 l. 55-56 (misma
  formulación). Relación con
  [`REV-2026-029`](2026-09-24-REV-2026-029-ciclo-colaborativo-de-s04-sin-mapa-a-etapas-y-gates-confirmar-la-definicion-frente-a-autorizacion-por-incremento.md)
  (mapa de entrada), con
  [`REV-2026-027`](2026-09-24-REV-2026-027-enumeracion-de-estados-y-transiciones-de-s04-no-cerrada-draft-y-waiting-blocked-desde-ready.md)
  (estados durante el retorno) y con
  [`REV-2026-020`](2026-09-21-REV-2026-020-tabla-de-persistencia-sin-destino-para-lo-no-confirmado.md)
  (dónde queda lo reabierto mientras la persona no responde).
- Contraevidencia y límites: S05 «Lifecycle inicial» (`B021`) y ADR-004 no se
  leyeron; pueden fijar que la reanudación tras consulta es una
  reconciliación operativa sin nuevo handoff, lo que sostendría la lectura
  (i) sin resolver el `stage` del incremento. La prosa de l. 150-153 (`B016`)
  sólo repite l. 76. Si la persona confirma (i), el hallazgo se reduce a una
  aclaración de l. 279.
- Pregunta para resolver: cuando un hallazgo devuelve parte de un incremento
  autorizado a `plan` o `design`, ¿cambia el `stage` del incremento, y la
  vuelta a `build` exige de nuevo readiness y autorización humana (l. 275) o
  basta la consulta de l. 85 dentro de la autorización ya concedida (l. 81)?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B017](blocks/B017.md), [B014](blocks/B014.md)
  (pista (g)), [B007](blocks/B007.md) (pregunta 5), [B015](blocks/B015.md)
  (pregunta 4), [B016](blocks/B016.md) (pregunta 6), `REV-2026-020`,
  `REV-2026-027`, `REV-2026-029`, cruces `CT02` y `CT05`

## Preguntas pendientes

Ver el checkpoint [B017](blocks/B017.md).

## Cobertura y límites

Ver el checkpoint [B017](blocks/B017.md). Sin fuentes externas necesarias para
este hallazgo; el contraste es interno.
