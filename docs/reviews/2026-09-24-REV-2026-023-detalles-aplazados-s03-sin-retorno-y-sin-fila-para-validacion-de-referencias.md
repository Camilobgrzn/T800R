# Anotación de revisión

- ID de anotación: `REV-2026-023`
- Unidad y ubicación: `S03-detalles-aplazados` —
  [session-03-sources-of-truth.md, «Detalles aplazados»](../definition/session-03-sources-of-truth.md#detalles-aplazados)
  (l. 230-240), frente a
  [S02, «Detalles aplazados»](../definition/session-02-limits.md#detalles-aplazados)
  (l. 104) y al estado del
  [tracker de definición](../definition-tracker.md) (l. 6-7). Bloque `B011`.
- Revisión examinada: 2026-09-24; repositorio sin commits. Citas distintivas:
  «El lifecycle y sus invariantes quedaron aceptados en la sesión 4 y ADR-003;
  mecanismos, schemas y detalles de handoff continúan en la sesión 5» (l. 234);
  «La obligación de persistir y los límites de autoridad están definidos»
  (l. 235); «Fuentes canónicas, rutas concretas y reglas de validación de
  referencias» (S02 l. 104)
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos; `media` sobre el impacto (no se leyeron
  las sesiones de destino para comprobar qué resolvieron)
- Impacto: saber qué aplazamientos de S03 siguen abiertos y dónde se
  resolvieron, y si el aplazamiento de S02 sobre reglas de validación de
  referencias tiene todavía dueño. Afecta a `CT07` (diferimientos y cierre
  global) y al bloque `B012` (comprobación de cierre de S03).

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión exclusivamente interna)
- Fuente primaria: `docs/definition/session-03-sources-of-truth.md` l. 43, 66,
  76-78, 123-124, 134-135 y 230-240; `docs/definition/session-02-limits.md`
  l. 104; `docs/definition-tracker.md` l. 6-7
- Sección o localizador: «Detalles aplazados» (S03 y S02); «Estado actual»
  (tracker)
- Fecha de consulta/publicación: consulta 2026-09-24; S03 confirmada el
  2026-09-14 y editada después (l. 234 menciona S04 y ADR-003); tracker
  actualizado el 2026-09-24
- Hecho observado:
  1. Las siete filas de l. 234-240 están en `deferred` con destinos en las
     sesiones 4, 5, 6, 7, 8, 9, 10, 11 y 12. El tracker declara «11 de 12
     sesiones completadas» y la 12 `in_progress`: todos los destinos salvo la
     sesión 12 están cerrados. Ninguna fila tiene marca de resolución, enlace
     de retorno ni condición de reapertura. Es el patrón documentado para S02 en
     [`REV-2026-015`](2026-09-21-REV-2026-015-aplazamientos-s02-sin-retorno-y-divergentes-de-adr-001.md).
  2. Sólo l. 234 fue actualizada tras el cierre: su justificación dice que el
     lifecycle «quedó aceptado en la sesión 4 y ADR-003» y que el resto
     «continúa en la sesión 5», pero el estado sigue `deferred` y la sesión 5
     también está cerrada. Las otras seis filas conservan la redacción de
     cierre.
  3. S02 l. 104 aplazó a la sesión 3 «Fuentes canónicas, rutas concretas y
     reglas de validación de referencias». S03 recoge las fuentes canónicas
     (l. 34-39, 49-63), vuelve a aplazar las rutas concretas (l. 239: sesiones
     8, 10 y 11) y no tiene fila para las reglas de validación de referencias.
     La palabra «revalidación» de l. 234 pertenece a la mecánica de
     persistencia y lifecycle (revalidar trabajo según cambios, l. 76-78), no a
     referencias. Lo más cercano en la unidad es la responsabilidad de detectar
     y corregir referencias (l. 43, 66, 123-124) y el aplazamiento de «la
     frecuencia y los mecanismos de comprobación» a la sesión 7 (l. 134-135),
     sin fila en la tabla. S03 no menciona que recibe ese aplazamiento de S02
     (ya observado en [B009](blocks/B009.md)).
  4. l. 235 justifica aplazar «Selección, presupuestos y reconstrucción de
     contexto» con «La obligación de persistir y los límites de autoridad
     están definidos».
     [`REV-2026-020`](2026-09-21-REV-2026-020-tabla-de-persistencia-sin-destino-para-lo-no-confirmado.md)
     documenta que la tabla de persistencia no da destino a lo no confirmado ni
     dice quién confirma, y
     [`REV-2026-019`](2026-09-21-REV-2026-019-registro-de-fuentes-autoridad-canonica-con-escritura-del-agente-sin-procedencia.md),
     que los límites de autoridad del registro no son comprobables por falta de
     procedencia. Esa frase es la premisa con la que la sesión 6 recibió su
     contrato. Se enlaza como hecho; no se repite el hallazgo.
- Inferencia (si aplica): desde S03 no puede saberse qué aplazamientos se
  cerraron ni dónde; el aplazamiento de S02 sobre validación de referencias se
  pierde entre S02 y S03 sin que ninguna unidad lo declare resuelto, absorbido
  por una responsabilidad o reaplazado con destino.

## Observación y propuesta

- Observación: la tabla puede leerse como fotografía del cierre (2026-09-14),
  pero l. 224 y l. 234 muestran que la unidad sí se edita después del cierre
  para reflejar sesiones posteriores; la edición fue selectiva y dejó filas
  con destinos ya vencidos sin marca. Para el aplazamiento heredado de S02, la
  falta de fila hace que la única regla vigente sea una responsabilidad
  general («T800R mantiene válidas las referencias», l. 66) sin reglas ni
  destino declarado.
- Propuesta concreta: (a) añadir a cada fila una marca de resolución con enlace
  (sesión o ADR) o `open` con acción, como pide
  [`REV-2026-015`](2026-09-21-REV-2026-015-aplazamientos-s02-sin-retorno-y-divergentes-de-adr-001.md)
  para S02, con una única convención para ambas unidades; (b) añadir una fila
  para las reglas de validación de referencias con destino (sesión 7 según
  l. 134-135) o declarar en S03 que la responsabilidad de l. 43 y 66 cierra el
  aplazamiento de S02 l. 104; (c) que `B012` y `CT07` comprueben si el cierre
  de S03 (l. 246 y siguientes) se apoya en la afirmación de l. 235.
- Contraargumento o coste/riesgo: `deferred` con sesión de destino es una
  convención uniforme en las unidades y una decisión global sobre marcas de
  retorno resolvería S02 y S03 a la vez; editar retroactivamente una sesión
  cerrada tiene coste y riesgo de reabrirla; las reglas de validación de
  referencias pueden haberse concretado en S07 sin que S03 lo diga (no se leyó
  S07). La afirmación de l. 235 es una justificación, no un acuerdo nuevo.

## Análisis adicional

- Evidencia interna: l. 230-240 frente a `docs/definition-tracker.md` l. 6-7;
  l. 234 (justificación actualizada, estado no); S02 l. 104 frente a S03
  l. 43, 66, 123-124, 134-135 y 239; l. 235 frente a `REV-2026-019` y
  `REV-2026-020`.
- Contraevidencia y límites: no se leyeron S04-S12 ni ADR-003 para comprobar
  qué filas quedaron efectivamente resueltas; el hallazgo es sobre el rastro en
  S03, no sobre si el contenido está o no decidido. Si la persona resuelve
  `REV-2026-015` con una convención general, esta anotación se resuelve con la
  misma decisión salvo el punto (b).
- Pregunta para resolver: ¿se adopta una convención de retorno para las filas
  `deferred` (marca y enlace, o `open` con acción) aplicable a S02 y S03, y
  dónde quedan hoy las reglas de validación de referencias aplazadas por S02?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B011](blocks/B011.md), [B009](blocks/B009.md),
  [B010](blocks/B010.md),
  [`REV-2026-015`](2026-09-21-REV-2026-015-aplazamientos-s02-sin-retorno-y-divergentes-de-adr-001.md),
  [`REV-2026-019`](2026-09-21-REV-2026-019-registro-de-fuentes-autoridad-canonica-con-escritura-del-agente-sin-procedencia.md),
  [`REV-2026-020`](2026-09-21-REV-2026-020-tabla-de-persistencia-sin-destino-para-lo-no-confirmado.md)

## Preguntas pendientes

Ver el checkpoint [B011](blocks/B011.md).

## Cobertura y límites

Ver el checkpoint [B011](blocks/B011.md). Sin fuentes externas necesarias para
este hallazgo; el contraste es interno.
