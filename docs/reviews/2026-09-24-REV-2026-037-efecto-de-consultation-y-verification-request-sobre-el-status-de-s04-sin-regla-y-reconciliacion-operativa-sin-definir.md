# Anotación de revisión

- ID de anotación: `REV-2026-037`
- Unidad y ubicación: `S05` — [session-05-handoffs.md, «Preguntas de la sesión»](../definition/session-05-handoffs.md#preguntas-de-la-sesión),
  pregunta 6 (l. 35-36), y [«Decisiones»](../definition/session-05-handoffs.md#decisiones)
  (filas l. 59-63, 67-68, 74, 76-77 y 80), frente a la tabla de
  [S04, «Acuerdos y orientación de la sesión»](../definition/session-04-operating-cycle.md#acuerdos-y-orientación-de-la-sesión)
  (l. 91-96, 99, 109-110, 112, 115) y a
  [S04, «Persistencia mínima de consultas y esperas»](../definition/session-04-operating-cycle.md#persistencia-mínima-de-consultas-y-esperas)
  (l. 298). Bloque `B019`.
- Revisión examinada: estado de los archivos al 2026-09-24; repositorio sin
  commits, huella no disponible. S05 declara «Sesión iniciada y cerrada el
  2026-09-16» (l. 3). Citas distintivas: «¿Qué significan emitir, recibir,
  aceptar, rechazar, cancelar y completar un handoff, y cómo afectan al
  ownership y al estado de la tarea?» (l. 35-36); «El rechazo no cambia por
  sí solo el ownership ni el estado de la tarea; el orchestrator reconciliará
  el impacto y decidirá si corresponde corregir, reasignar, consultar o
  bloquear» (l. 63); «Verificación y consulta completan al persistir el
  resultado; aplicar consecuencias corresponde después a reconciliación
  operativa» (l. 76); «Al responder, se registrarán la decisión y la
  evidencia y se recalcularán el estado, las dependencias y las validaciones
  afectadas» (S04 l. 298).
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos textuales; `media` sobre el efecto
  (S05 l. 82-266 no analizadas: sólo l. 118-124 y 152-180 leídas como
  dependencia y l. 206-208, 217, 231-232 por búsqueda; ADR-004 sólo por
  cabecera, «Consecuencias», «Puntos abiertos» y búsqueda)
- Impacto: si emitir, aceptar o completar una `consultation` o una
  `verification_request` es una transición del `status` de tarea o sesión de
  S04 (`in_progress → waiting` al consultar; retorno de l. 96 al completar)
  que runtime/policy debe aplicar «determinísticamente» (S04 l. 110, 112) y
  que debe registrarse con razón, evidencia y responsable (l. 94, 99); quién
  ejecuta la «reconciliación operativa» de l. 76 y con qué evento; y si el
  conjunto de transiciones de S04 (`REV-2026-027`) basta para el «bloquear»
  de l. 63 tras una `assignment` rechazada. No cambia el contenido de ninguna
  fila aceptada.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión exclusivamente interna; no se
  invoca ninguna fuente externa)
- Fuente primaria: `docs/definition/session-05-handoffs.md` l. 19-22, 35-36,
  54, 57-64, 67-68, 74-77, 80 (leídas), l. 118-124 y 152-180 (dependencia) y
  búsqueda en toda la unidad de «waiting», «blocked», «in_progress», «ready»,
  «estado de la tarea», «estado operativo», «tracker», «human»;
  `docs/definition/session-04-operating-cycle.md` l. 91-96, 99, 108-110, 112,
  115, 298, 325; `docs/adr/ADR-004-contrato-portable-de-handoffs.md`
  l. 103-114 y búsqueda de «waiting|blocked|tracker»
- Sección o localizador: «Preguntas de la sesión» y «Decisiones» (S05);
  tabla de «Acuerdos y orientación de la sesión» y «Persistencia mínima de
  consultas y esperas» (S04); «Consecuencias para el equipo» (ADR-004)
- Fecha de consulta/publicación: consulta 2026-09-24; S05 cerrada el
  2026-09-16 según l. 3
- Hecho observado:
  1. **La pregunta 6 pide el efecto sobre el estado de la tarea.** l. 35-36
     pregunta qué significan las seis operaciones «y cómo afectan al
     ownership y al estado de la tarea».
  2. **El efecto sobre el ownership está decidido; el efecto sobre el estado
     sólo en negativo.** Ownership: aceptar `assignment`/`ownership_transfer`
     y actualizar el owner en el tracker es «una única operación condicional»
     (l. 59), con `accepted` y `completed` atómicos (l. 60, 77), sin
     reversión (l. 61, 64, 80) y con mínimos de `completed` (l. 74-75).
     Estado de la tarea: `due_at` «no extingue la obligación ni libera
     ownership» (l. 62); el rechazo «no cambia por sí solo el ownership ni
     el estado de la tarea» (l. 63); `completed` «no implica necesariamente
     completar una tarea o un incremento» (l. 74); transporte y context
     packet no cambian «lifecycle, autoridad, permisos u ownership» (l. 79).
     Ninguna fila dice qué le ocurre al `status` de la tarea o de la sesión
     cuando se emite, acepta o completa una `consultation` o una
     `verification_request`.
  3. **Los estados de S04 no aparecen en S05 ni en ADR-004.** S04 l. 91 y
     115 enumeran `pending`, `ready`, `in_progress`, `waiting`, `blocked`,
     `completed` y `cancelled` para ciclo, incrementos, tareas y sesión. En
     S05, «waiting», «blocked», «in_progress» y «ready» no aparecen
     (búsqueda); `pending`, `completed` y `cancelled` aparecen sólo como
     estados del handoff (l. 60, 77, 154-164). En ADR-004, «waiting» y
     «blocked» tampoco aparecen. La correspondencia es evidente pero no está
     escrita: S04 l. 92 define `waiting` como «existe una respuesta o
     dependencia externa identificada; T800R conserva la espera y continúa
     el trabajo independiente» y S05 l. 68 exige en `consultation` «trabajo
     detenido e independiente» (l. 123: `stopped_work`, `independent_work`).
  4. **S04 exigía recalcular el estado al responder; S05 lo pospone a un paso
     sin definir.** S04 l. 298 (`accepted`): «Al responder, se registrarán la
     decisión y la evidencia y se recalcularán el estado, las dependencias y
     las validaciones afectadas». S05 l. 76: verificación y consulta
     «completan al persistir el resultado; aplicar consecuencias corresponde
     después a reconciliación operativa»; l. 217 (por búsqueda): «la
     respuesta debe aplicarse después al estado y las dependencias
     afectadas»; l. 231-232 y ADR-004 l. 111-112 lo repiten («el seguimiento
     se aplica después al estado operativo»). «Reconciliación operativa» no
     es una fila, un rol ni un evento en S04 (l. 109 define la reconciliación
     «al iniciar o reanudar»; l. 110 dice que el orchestrator «reconcilia el
     estado») ni en S05 l. 1-80; l. 77 exige «otro handoff correlacionado»
     para «reintentar, corregir, reasignar o revertir», pero no dice si
     aplicar la respuesta de una consulta o el veredicto `failed` de una
     verificación (l. 76) es uno de esos casos ni quién lo emite.
  5. **`bloquear` tras una `assignment` rechazada necesita una transición que
     S04 no enumera.** l. 63 deja al orchestrator «corregir, reasignar,
     consultar o bloquear». `assignment` exige «ausencia de owner activo»
     (l. 67), es decir, una tarea que aún no está `in_progress` (S04 l. 95:
     `pending → ready → in_progress`). Bloquearla es `ready → blocked` (o
     `pending → blocked`), entrada que S04 l. 95-98 no prevé y que
     `REV-2026-027` (hechos 2-4) registró como no enumerada; S05 la requiere
     sin nombrarla.
  6. **Ambas unidades afirman la compatibilidad sin el mapa.** S04 l. 325:
     los diferidos «no modifican este lifecycle»; S05 l. 22: «deben mantenerse
     la reconciliación y el ownership único definidos en la sesión 4 y
     ADR-003». S04 l. 110 y 112 asignan a runtime/policy aplicar
     «transiciones … determinísticamente». Sin el mapa, no hay evento
     definido que dispare `in_progress → waiting` al emitir una consulta ni
     el retorno de l. 96 al completarla, ni responsable de registrar esa
     transición (l. 94, 99).
- Inferencia (si aplica): el contrato define por completo su propio lifecycle
  y su acoplamiento con el ownership (l. 59), pero deja su acoplamiento con
  el lifecycle de S04 a una «reconciliación operativa» sin definición,
  responsable ni evento; la obligación de S04 l. 298 de recalcular el estado
  al responder queda debilitada a «después». No se afirma que la lectura
  «el `status` es independiente de los handoffs y sólo lo cambia el
  orchestrator» sea incorrecta: se afirma que ninguna de las dos unidades la
  escribe.

## Observación y propuesta

- Observación: S05 protege deliberadamente que un handoff no altere estado
  por sí solo (l. 54, 63, 74, 79), lo que es coherente con S04 l. 108-109
  (nunca toma silenciosa). El hueco está en el sentido positivo: cuál es el
  efecto normal, quién lo aplica y cuándo. Extiende `REV-2026-027` (conjunto
  de transiciones no cerrado: hecho 5) y `REV-2026-033` (retorno parcial y
  reentrada sin handoff que lo materialice: hecho 4, veredicto `failed`)
  desde el lado de S05, sin repetirlas; se relaciona con la pista (c) de
  `B014` (estado del tracker mientras se reconcilia).
- Propuesta concreta: que la persona decida (a) si S05 (o S11/ADR-010, si la
  materia es del runtime) debe registrar el mapa mínimo: emitir una
  `consultation` o `verification_request` que detiene trabajo lleva el
  ámbito afectado a `waiting` (o `blocked` si no hay vía autorizada) con el
  handoff como evidencia de la transición (S04 l. 94), y completarla dispara
  el retorno de S04 l. 96 como parte de la «acción de seguimiento» (l. 76);
  o, alternativamente, declarar que el `status` de S04 es independiente de
  los handoffs y sólo lo cambia el orchestrator; (b) quién ejecuta la
  «reconciliación operativa» tras `completed`, con qué evento o handoff
  correlacionado (l. 77) y dónde se registra, de modo que S04 l. 298 («al
  responder … se recalcularán») siga siendo verificable; (c) si el `bloquear`
  de l. 63 exige añadir a S04 la entrada `ready → blocked` que
  `REV-2026-027` pide enumerar. No editar S04 ni S05 sin esa decisión.
- Contraargumento o coste/riesgo: la separación entre lifecycle del handoff
  y estado del trabajo es una decisión razonable y explícita (l. 54, 74); S04
  ya asigna al orchestrator reconciliar el estado y seleccionar trabajo
  (l. 110), de modo que «reconciliación operativa» puede leerse como ese rol;
  la prosa de S05 l. 194-232 (`B021`) y ADR-004 pueden contener el mapa con
  otras palabras (por búsqueda sólo repiten «después»); el mapa entre eventos
  de handoff y `status` puede corresponder al runtime (S11) y no a un
  contrato semántico portable. El coste de la propuesta es una fila o una
  frase de independencia explícita.

## Análisis adicional

- Evidencia interna: hechos 1-6. Enlaces: S04 l. 91-99
  ([tabla de conclusiones](../definition/session-04-operating-cycle.md#acuerdos-y-orientación-de-la-sesión)),
  l. 298 ([persistencia mínima](../definition/session-04-operating-cycle.md#persistencia-mínima-de-consultas-y-esperas)),
  l. 325 ([cierre](../definition/session-04-operating-cycle.md#s04-cierre));
  ADR-004 l. 103-114 ([Consecuencias](../adr/ADR-004-contrato-portable-de-handoffs.md#consecuencias-para-el-equipo));
  anotaciones relacionadas: [`REV-2026-027`](2026-09-24-REV-2026-027-enumeracion-de-estados-y-transiciones-de-s04-no-cerrada-draft-y-waiting-blocked-desde-ready.md),
  [`REV-2026-033`](2026-09-24-REV-2026-033-retorno-parcial-de-un-hallazgo-en-s04-sin-stage-del-incremento-ni-regla-de-reentrada-a-build.md),
  [`REV-2026-020`](2026-09-21-REV-2026-020-tabla-de-persistencia-sin-destino-para-lo-no-confirmado.md),
  [`REV-2026-034`](2026-09-24-REV-2026-034-cierre-s04-auditoria-sin-rastro-no-bloqueo-sin-enumerar-y-cobertura-no-declarada.md)
  (hecho 4: no bloqueo afirmado sin enumerar).
- Contraevidencia y límites: no se analizaron S05 l. 82-266 más allá de las
  líneas indicadas (los bloques `B020`-`B022` deben comprobar si «Separación
  y recuperación», «Semántica inicial de los tipos» y el cierre escriben el
  mapa); no se leyeron S11 ni ADR-010; ADR-004 «Decisión» (l. 61-101) no se
  contrastó punto a punto (bloques `B038`-`B040`). La búsqueda de los nombres
  de estado es textual: un mapa expresado sin esos nombres no se habría
  detectado.
- Pregunta para resolver: ¿emitir, aceptar y completar una `consultation` o
  una `verification_request` son transiciones del `status` de S04 —y
  entonces quién las registra y qué evento las dispara— o el `status` sólo
  lo cambia el orchestrator en una «reconciliación operativa» que aún no
  tiene definición, responsable ni evento?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: pendiente
