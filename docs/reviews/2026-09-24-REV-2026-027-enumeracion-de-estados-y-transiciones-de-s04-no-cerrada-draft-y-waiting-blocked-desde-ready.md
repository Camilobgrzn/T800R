# Anotación de revisión

- ID de anotación: `REV-2026-027`
- Unidad y ubicación: `S04` — [session-04-operating-cycle.md, «Acuerdos y orientación de la sesión»](../definition/session-04-operating-cycle.md#acuerdos-y-orientación-de-la-sesión),
  tabla de conclusiones: filas de estados y transiciones (l. 91, 95-99), fila
  de inicio y reanudación (l. 109), fila del orchestrator delgado (l. 110),
  fila de `Maintain` (l. 113) y fila de la sesión (l. 115), frente a
  [ADR-003, «Decisión», punto 4](../adr/ADR-003-ciclo-operativo-y-coordinacion.md#decisión)
  (l. 57-61). Bloque `B014`.
- Revisión examinada: 2026-09-24; repositorio sin commits, huella no
  disponible. Citas distintivas: «Los estados (`status`) disponibles son
  `pending`, `ready`, `in_progress`, `waiting`, `blocked`, `completed` y
  `cancelled`» (l. 91); «Desde `in_progress` también se puede pasar a `waiting`
  o `blocked`» (l. 95); «No se permiten saltos de estado sin registrar razón,
  evidencia y responsable» (l. 99); «Una duda no resoluble queda en `waiting` o
  `blocked` y no autoriza escritura» (l. 109); «Puede crear una propuesta o
  incremento `draft`» (l. 113); «queda en `waiting` sólo si no hay trabajo
  ejecutable» (l. 115).
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos; `media` sobre el impacto (no se
  analizaron la prosa de S04 l. 150-223, que repite la máquina de estados, ni
  S05 «Lifecycle inicial», que puede cerrarla para `handoff/v1`)
- Impacto: si el conjunto de estados y transiciones del lifecycle de sesión y
  tarea (resultado esperado de la sesión 4 según el índice l. 62) está cerrado
  o no. De ello depende que runtime/policy pueda aplicar «transiciones …
  determinísticamente» (l. 110), que S05 tenga un conjunto único que
  materializar y que una transición `ready → waiting` o un incremento `draft`
  sean conformes o violaciones.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (contradicción y omisión exclusivamente
  internas; no se invoca ninguna fuente externa)
- Fuente primaria: `docs/definition/session-04-operating-cycle.md` l. 91-99,
  109, 110, 113 y 115; `docs/adr/ADR-003-ciclo-operativo-y-coordinacion.md`
  l. 57-61 y 92-97; `docs/definition/session-07-knowledge.md` l. 52-53 y
  `docs/adr/ADR-006-modelo-portable-de-conocimiento.md` l. 65 (sólo líneas
  devueltas por búsqueda de «`draft`»)
- Sección o localizador: tabla de conclusiones de «Acuerdos y orientación de
  la sesión» (S04); «Decisión» (ADR-003); «Taxonomía y límites iniciales»
  (S07)
- Fecha de consulta/publicación: consulta 2026-09-24; S04 declara criterio
  comprobado el 2026-09-15 (l. 3-4)
- Hecho observado:
  1. l. 91 enumera los estados «disponibles» para «ciclo, incrementos y
     tareas» como una lista cerrada de siete; l. 115 aplica la misma lista a
     la sesión.
  2. l. 95 define el «camino normal» `pending → ready → in_progress →
     completed` y añade: «Desde `in_progress` también se puede pasar a
     `waiting` o `blocked`». l. 96 define el retorno desde `waiting`/`blocked`
     a `ready` o `in_progress`; l. 97, el paso de cualquier estado no terminal
     a `cancelled`; l. 98, la reapertura de `completed`. Ninguna fila prevé
     entrar en `waiting` o `blocked` desde `pending` o `ready`.
  3. l. 109 exige que, «al iniciar o reanudar», antes de tomar trabajo, «una
     duda no resoluble queda en `waiting` o `blocked` y no autoriza
     escritura». En ese momento la sesión no está `in_progress` (l. 115: pasa
     a `in_progress` «al tomar trabajo autorizado») ni lo está la tarea aún
     no asignada.
  4. l. 115 dispone que la sesión «queda en `waiting` sólo si no hay trabajo
     ejecutable y espera una dependencia identificada, o en `blocked` si no
     existe una vía autorizada». Una sesión sin trabajo ejecutable nunca tomó
     trabajo, de modo que la transición exigida es `ready → waiting` (o
     `pending → blocked`), no prevista en l. 95.
  5. l. 99 («No se permiten saltos de estado sin registrar razón, evidencia y
     responsable») admite dos lecturas incompatibles: (i) cualquier
     transición es válida si se registra, con lo que l. 95-98 no son un
     conjunto cerrado; (ii) prohíbe omitir estados, con lo que l. 109 y 115
     exigen transiciones no enumeradas.
  6. l. 110 asigna a runtime/policy aplicar «permisos, límites, transiciones y
     autorizaciones determinísticamente»; l. 112 exige que toda regla
     obligatoria verificable mecánicamente se aplique así. Una aplicación
     determinista de transiciones necesita un conjunto cerrado de transiciones
     válidas.
  7. l. 113 dice que `Maintain` «puede crear una propuesta o incremento
     `draft`». `draft` no figura en l. 91; en toda S04 sólo aparece en l. 113
     (búsqueda). Fuera de S04, `draft` está definido como estado editorial del
     conocimiento (S07 l. 52-53: «`status` expresa lifecycle editorial mediante
     `draft`, `stable` y `deprecated`»; ADR-006 l. 65), no como estado de
     incrementos. ADR-003 l. 95 repite «crear drafts» sin definirlo.
  8. ADR-003 punto 4 (l. 57-61) dice: «El camino normal de status es `pending
     → ready → in_progress → completed`; `waiting`, `blocked` y `cancelled`
     conservan causa e historia», sin restringir desde qué estado se entra en
     `waiting` o `blocked`. El ADR es más laxo que la unidad; no la contradice.
  9. La prosa de S04 l. 157-162 repite por búsqueda la misma formulación
     («desde `in_progress` se puede pasar a `waiting` o `blocked`», l. 162) y
     l. 185 repite l. 109; no se analizó (bloque `B016`).
- Inferencia (si aplica): la unidad no fija si el conjunto de transiciones es
  cerrado. Bajo la lectura (i) de l. 99, l. 95-98 son ejemplos y cualquier
  transición registrada es válida, lo que vacía la lista y hace no
  determinista lo que l. 110 quiere determinista; bajo la lectura (ii), l. 109
  y l. 115 obligan a transiciones que la lista no admite. En ambos casos
  `draft` es un octavo estado o una etiqueta sin definición. El lector que
  implemente `handoff/v1` (S05) o el runtime (S11) no puede derivar de S04 una
  máquina de estados única.

## Observación y propuesta

- Observación: las filas de estados (l. 89-99) están redactadas para tareas e
  incrementos con un único punto de entrada en `waiting`/`blocked`
  (`in_progress`), mientras que las filas de reconciliación y sesión (l. 109
  y 115) se escribieron después con casos de espera y bloqueo previos a tomar
  trabajo, y la fila de `Maintain` (l. 113) importa un estado de otro dominio.
  No es una contradicción de fondo sobre qué debe ocurrir —los tres casos son
  razonables—, sino una enumeración que se declara cerrada y no lo es.
- Propuesta concreta: que la persona (1) declare si l. 95-98 es el conjunto
  cerrado de transiciones y, si lo es, añada las que l. 109 y 115 exigen
  (`ready → waiting`, `ready → blocked` y, si procede, `pending → blocked`),
  o bien reformule l. 99 como «cualquier transición fuera del camino normal
  requiere razón, evidencia y responsable» si la intención es un conjunto
  abierto; (2) defina `draft` (estado adicional de incremento, o
  `pending` con marca de origen `Maintain`) o retire el código de l. 113; (3)
  refleje lo decidido en ADR-003 punto 4 y en la prosa de S04 l. 157-162.
- Contraargumento o coste/riesgo: l. 95 dice «camino normal» y «también», no
  «sólo», y puede leerse como no exhaustivo; l. 99 puede entenderse como
  permiso de transiciones registradas; «incremento `draft`» puede leerse como
  «borrador de incremento» (tipo de propuesta) y no como `status`; S05 pudo
  haber cerrado la máquina para `handoff/v1` en su «Lifecycle inicial» (no
  leído). El coste de la propuesta es una o dos filas en una unidad cerrada y
  una frase en el ADR; sólo la persona puede hacerlo.

## Análisis adicional

- Evidencia interna: hechos 1-9. l. 91 y 95-99 (enumeración y transiciones)
  frente a l. 109 y 115 (transiciones exigidas antes de `in_progress`); l. 113
  (`draft`) frente a l. 91 y a S07 l. 52-53; l. 110 y 112 (aplicación
  determinista) como razón por la que el cierre del conjunto importa; ADR-003
  l. 57-61 (formulación más laxa). Relación con
  [`REV-2026-020`](2026-09-21-REV-2026-020-tabla-de-persistencia-sin-destino-para-lo-no-confirmado.md)
  (el estado `waiting` es el candidato a destino operativo de una consulta
  abierta; si su entrada sólo es posible desde `in_progress`, una consulta
  planteada antes de tomar trabajo no tiene estado) y con la pregunta 3 de
  [B009](blocks/B009.md) (estado del tracker ante incoherencia: l. 109 la
  envía a `waiting`/`blocked` por una transición no enumerada).
- Contraevidencia y límites: no se analizaron S04 l. 150-223 (prosa que
  repite la tabla), S05 «Lifecycle inicial» (`B021`) ni S11; es posible que
  S05 defina una máquina cerrada para handoffs que S04 no necesite duplicar,
  en cuyo caso el defecto queda en la falta de remisión. No se afirma que
  ADR-003 contradiga a S04: su punto 4 admite las transiciones de l. 109 y
  115 por no restringir el origen. La gravedad es `media` porque la sesión
  entrega como resultado el lifecycle (índice l. 62) y S05/S11 dependen de él;
  no es `alta` porque los tres comportamientos exigidos son compatibles entre
  sí y la corrección es de enumeración.
- Pregunta para resolver: ¿el conjunto de transiciones de l. 95-98 es cerrado
  (y entonces faltan `ready`/`pending → waiting`/`blocked`) o abierto (y
  entonces l. 99 autoriza cualquier transición registrada), y `draft` en
  l. 113 es un estado de incremento, una marca sobre `pending` o una palabra
  sin valor normativo?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B014](blocks/B014.md), `REV-2026-020`, pregunta 3 de
  [B009](blocks/B009.md), pregunta 7 de [B014](blocks/B014.md)

## Preguntas pendientes

Ver el checkpoint [B014](blocks/B014.md).

## Cobertura y límites

Ver el checkpoint [B014](blocks/B014.md). Sin fuentes externas necesarias para
este hallazgo; el contraste es interno.
