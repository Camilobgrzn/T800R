# Anotación de revisión

- ID de anotación: `REV-2026-047`
- Unidad y ubicación: `S06` — [session-06-context.md, «Decisiones»](../definition/session-06-context.md#decisiones),
  filas l. 46 («o la solicita explícitamente un actor autorizado»), l. 50
  («si lo obligatorio no cabe, el agente se detendrá antes de actuar y
  solicitará reducir el alcance, ampliar la capacidad o dividir el trabajo»),
  l. 51 («genera un diagnóstico auditable») y l. 52 («El trabajo se detiene
  si falta material `required`, existe una contradicción crítica, la base, el
  ownership o los permisos son ambiguos, el presupuesto obligatorio no cabe o
  ninguna fuente permitida resuelve una incertidumbre relevante»), y
  [«Capas de validación del context packet»](../definition/session-06-context.md#capas-de-validación-del-context-packet)
  (l. 66), frente a [S04, tabla de acuerdos](../definition/session-04-operating-cycle.md#acuerdos-y-orientación-de-la-sesión)
  (l. 109, 112, 115: estados `waiting`/`blocked`, enforcement, orchestrator),
  [S04, «Persistencia mínima de consultas y esperas»](../definition/session-04-operating-cycle.md#persistencia-mínima-de-consultas-y-esperas)
  (l. 298) y [S05, «Decisiones»](../definition/session-05-handoffs.md#decisiones)
  (l. 68 `consultation`; l. 70 «diagnóstico auditable»). Bloque `B023`.
- Revisión examinada: estado de los archivos al 2026-09-24; repositorio sin
  commits, huella no disponible. S06 «iniciada el 2026-09-17; cerrada el
  2026-09-18» (l. 3). Citas distintivas: «Nunca se omitirán silenciosamente el
  núcleo, las restricciones, `base` ni el material `required`; si lo
  obligatorio no cabe, el agente se detendrá antes de actuar y solicitará
  reducir el alcance, ampliar la capacidad o dividir el trabajo» (l. 50); «Un
  artefacto estructuralmente inválido no entra en los estados del packet y
  genera un diagnóstico auditable» (l. 51, 66); «Sólo continúa si existe una
  fuente candidata autorizada y cabe en presupuesto» (l. 52); «manteniendo
  presupuestos y condiciones de parada verificables» (l. 35).
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos textuales (búsqueda en toda la unidad);
  `media` sobre el efecto (S06 l. 76-206 sólo por líneas devueltas por
  búsqueda: l. 84, 88, 115-116, 132, 158, 172, 176, 184, 190-192; ADR-005
  sólo por cabecera,
  puntos 10-12, «Puntos abiertos» y búsqueda)
- Impacto: si las condiciones de parada que el criterio de salida declara
  «verificables» (l. 35) producen un hecho observable fuera del agente que
  se detiene: a quién se dirige la solicitud de l. 50, con qué handoff de
  S05, qué estado de S04 adopta la tarea, quién produce y dónde se persiste el
  «diagnóstico auditable» de l. 51/66, y quién es el «actor autorizado» de
  l. 46 y la «fuente candidata autorizada» de l. 52. Extiende a S06 lo que
  `REV-2026-040` (actor de validación), `REV-2026-020` (destino de lo no
  confirmado) y `REV-2026-018` (criterio de autoridad) plantean para S05 y
  S03. No cambia el contenido de ninguna fila aceptada.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión exclusivamente interna; no se
  invoca ninguna fuente externa)
- Fuente primaria: `docs/definition/session-06-context.md` l. 33-37, 41-60,
  62-74 (leídas) y búsqueda en toda la unidad de «consultation», «waiting»,
  «blocked», «orchestrator», «persona» (ninguna coincidencia en las 206
  líneas), «solicit» (l. 46, 115, 132), «diagnóstico» (l. 51, 66, 176),
  «actor» (l. 46, 84, 116, 190), «autoriza» (l. 46, 52, 116, 184);
  `docs/definition/session-04-operating-cycle.md` l. 109, 112, 115 y 298 (por
  `B014`/`B017`/`REV-2026-027`/`REV-2026-040`); `docs/definition/session-05-handoffs.md`
  l. 68, 70 (leídas); `docs/adr/ADR-005-contrato-portable-de-contexto.md`
  l. 96-99 (leídas) y búsqueda de «orchestrator|persona|consultation|handoff»
  (sólo l. 14, 29, 135: ninguna nombra un actor o canal de parada).
- Sección o localizador: «Criterio de salida», «Decisiones», «Capas de
  validación del context packet» (S06); tabla de acuerdos y «Persistencia
  mínima de consultas y esperas» (S04); «Decisiones» (S05); «Decisión»
  puntos 10-11 (ADR-005).
- Fecha de consulta/publicación: consulta 2026-09-24; sesión cerrada el
  2026-09-18 según l. 3.
- Hecho observado:
  1. **La parada tiene condiciones pero no destinatario, handoff ni estado.**
     L. 50 y 52 fijan cuándo «el agente se detendrá antes de actuar y
     solicitará…» y cuándo «El trabajo se detiene». La unidad no dice a quién
     se solicita, con qué artefacto ni qué estado adopta la tarea: las
     palabras `consultation` (S05 l. 68: la consulta exige «trabajo detenido e
     independiente… y condición de resolución»), `waiting`/`blocked` (S04
     l. 109, 115), «orchestrator» (S04 l. 110) y «persona» no aparecen en
     ninguna línea de S06 (búsqueda). ADR-005 tampoco (l. 96: «El trabajo se
     detiene ante… falta de una fuente autorizada»).
  2. **«Diagnóstico auditable» sin productor ni lugar.** L. 51 y 66 repiten
     para el packet la regla de S05 l. 70 para el handoff («no entrará al
     lifecycle y generará un diagnóstico auditable»); ninguna de las dos
     unidades dice qué componente lo genera ni dónde se persiste (S05:
     `REV-2026-040`; S06 l. 176, por búsqueda, repite «diagnóstico auditable»
     en «Estados observables» sin actor). S06 l. 190-192 (por búsqueda) exige
     registrar «actor, fecha, base, trigger…» como evidencia de la carga, pero
     no del artefacto que «no entra en los estados del packet».
  3. **«Actor autorizado» y «fuente candidata autorizada» sin criterio ni
     fuente de autoridad.** L. 46 permite cargar una sección si «la solicita
     explícitamente un actor autorizado»; l. 52 continúa la carga «si existe
     una fuente candidata autorizada» y se detiene si «ninguna fuente
     permitida resuelve». L. 44 y 49 dicen que el packet y sus estados «no
     conceden permisos» y l. 88 (por búsqueda) que `constraints` sintetiza
     «los permisos efectivos y las políticas referenciadas, sin concederlos».
     Quién autoriza al actor o a la fuente, y contra qué registro se juzga,
     queda en S03 l. 36/56 (criterios de autoridad «de la colaboración
     humana», `REV-2026-018`) y en S05 l. 106 (`authority` de la envoltura,
     `REV-2026-041`); S06 no enlaza ninguno.
  4. **El criterio declara «verificables» condiciones que dependen de un
     juicio del agente.** L. 35 exige «condiciones de parada verificables»;
     l. 52 termina la carga cuando «no queda incertidumbre capaz de cambiar
     la acción o el veredicto» y se detiene ante una «incertidumbre
     relevante». S06 l. 190-192 (bloque `B025`) fija qué evidencia se
     registra al cargar; no fija quién distinta del agente puede comprobar
     que la incertidumbre restante no cambia la acción.
- Inferencia (si aplica): las filas l. 50-52 describen una parada interna del
  agente que, sin handoff de S05 ni estado de S04, es indistinguible desde el
  tracker de una ejecución que terminó sin resultado; S04 l. 298 exige
  persistir tipo, dependencias y próxima acción de una consulta o espera,
  y S05 l. 68 exige «condición de resolución». La parada de S06 no se conecta
  con ninguno de los dos.

## Observación y propuesta

- Observación: S06 define con precisión cuándo dejar de cargar y cuándo no
  actuar, pero no qué produce esa parada hacia fuera (destinatario, handoff,
  estado de la tarea, diagnóstico persistido) ni quién es el actor o la
  fuente «autorizados» que la evitan.
- Propuesta concreta: (a) añadir en la fila de parada (l. 52) o en
  «Condiciones de parada y evidencia» la salida observable: la solicitud de
  l. 50 se emite como `consultation` de `handoff/v1` (S05 l. 68) o como
  bloqueo registrado en el tracker con el mínimo de S04 l. 298, y la tarea
  pasa a `waiting`/`blocked` según S04 l. 109/115, o bien declarar que la
  parada es un resultado del packet (`invalid`) y que la tarea no cambia;
  (b) fijar quién genera y dónde se persiste el «diagnóstico auditable» de
  l. 51/66 (mismo actor y lugar que S05 l. 70, si se decide uno); (c) enlazar
  «actor autorizado» (l. 46) y «fuente candidata autorizada» (l. 52) a
  `authority`/`constraints` del handoff y del packet y a los criterios de
  autoridad de S03, o registrar el criterio como `deferred` con destino.
- Contraargumento o coste/riesgo: puede sostenerse que S06 sólo define el
  contrato del material y que la parada operativa pertenece a S04 (ciclo) y
  a S05 (handoffs), de modo que basta con que ADR-003/ADR-004 sigan vigentes;
  sin embargo, ninguna de las dos unidades recibe de S06 la parada por
  presupuesto o suficiencia, y S06 no las enlaza para ese fin. El coste de
  (a)-(c) es una fila y tres enlaces; el riesgo de no hacerlo es una parada
  «verificable» sólo por quien se detiene.

## Análisis adicional

- Evidencia interna: [`REV-2026-040`](2026-09-24-REV-2026-040-actor-que-aplica-las-capas-de-validacion-y-registra-rejected-sin-fijar-y-capas-mecanizables-sin-clasificar.md)
  (S05: capas sin actor; aquí las cuatro capas de l. 51/64-69 tampoco tienen
  actor ni clasificación mecanizable/semántica, y `structural` es schema que
  S04 l. 112 obliga a aplicar «mediante runtime/policy determinista»);
  [`REV-2026-020`](2026-09-21-REV-2026-020-tabla-de-persistencia-sin-destino-para-lo-no-confirmado.md)
  (S03: lo no confirmado sin destino; la parada de S06 es otro caso sin
  destino); [`REV-2026-018`](2026-09-21-REV-2026-018-quien-define-criterios-de-autoridad-y-como-se-audita-el-limite.md)
  (criterios de autoridad y quién juzga su cobertura: l. 46/52 presuponen el
  criterio); [`REV-2026-017`](2026-09-21-REV-2026-017-regla-de-discrepancias-entre-originales-con-casos-sin-salida.md)
  (l. 52 «contradicción crítica» detiene el trabajo: salida parcial sin lugar
  ni quién la cierra); [`REV-2026-027`](2026-09-24-REV-2026-027-enumeracion-de-estados-y-transiciones-de-s04-no-cerrada-draft-y-waiting-blocked-desde-ready.md)
  y [`REV-2026-037`](2026-09-24-REV-2026-037-efecto-de-consultation-y-verification-request-sobre-el-status-de-s04-sin-regla-y-reconciliacion-operativa-sin-definir.md)
  (entradas a `waiting`/`blocked` y efecto de una consulta sobre el `status`:
  la parada de S06 sería una tercera fuente de esas transiciones sin regla);
  [`REV-2026-041`](2026-09-24-REV-2026-041-campos-de-consultation-frente-al-minimo-de-s04-l298-y-authority-duplicado-entre-envoltura-y-payload.md)
  (`authority` en envoltura y payload; l. 46/52 no enlazan ninguno).
- Contraevidencia y límites: S06 l. 190-192 (bloque `B025`, por búsqueda)
  exige evidencia con «actor, fecha, base, trigger… resultado», lo que
  registra la parada como evento del packet aunque no como handoff ni estado
  de tarea; ADR-005 l. 97-99 lo repite. Puede leerse que «el agente se
  detendrá… y solicitará» implica una `consultation` porque S05 l. 68 la
  define para «trabajo detenido»; ninguna unidad lo escribe. No se leyó S06
  l. 110-120 («Reglas de progressive disclosure») ni l. 180-193 completas;
  S09 (permisos) y S11 no leídos.
- Pregunta para resolver: cuando el agente se detiene por presupuesto,
  material `required` ausente, contradicción crítica o ambigüedad de base,
  ownership o permisos (l. 50, 52), ¿qué artefacto emite, a quién, con qué
  estado de tarea y dónde queda el diagnóstico de l. 51/66? ¿Quién autoriza
  al «actor autorizado» de l. 46 y a la «fuente candidata autorizada» de
  l. 52, y con qué registro se comprueba?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: pendiente
