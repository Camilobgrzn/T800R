# Anotación de revisión

- ID de anotación: `REV-2026-096`
- Unidad y ubicación: `S04`/`S06` — [S04, tabla de acuerdos](../definition/session-04-operating-cycle.md#acuerdos-y-orientación-de-la-sesión)
  (l. 109 y 115) frente a [S06, «Decisiones»](../definition/session-06-context.md#decisiones)
  (fila l. 47) y [«Reconciliación incremental»](../definition/session-06-context.md#reconciliación-incremental)
  (l. 142-152); [ADR-003, «Decisión», punto 5](../adr/ADR-003-ciclo-operativo-y-coordinacion.md#decisión)
  (l. 62-65) frente a [ADR-005, «Contexto»](../adr/ADR-005-contrato-portable-de-contexto.md#contexto)
  (l. 31-33) y «Decisión» punto 6 (l. 81-83). Cruce `CT05`.
- Revisión examinada: estado de los archivos al 2026-09-25; repositorio sin
  commits, huella no disponible. S04 cerrada el 2026-09-15; S06 el 2026-09-18;
  ADR-003 fechado 2026-09-15; ADR-005, 2026-09-18. Citas distintivas: «Al
  iniciar o reanudar, el orchestrator verifica la revisión real, los cambios
  presentes, el estado y la evidencia persistidos, el owner declarado y el
  último checkpoint» (S04 l. 109); «confirma que no existe otro escritor
  activo» (S04 l. 109); «pasa a `ready` tras reunir el contexto mínimo,
  reconciliar repositorio, estado y evidencia, verificar permisos y descartar
  conflictos de ownership» (S04 l. 115); «Al iniciar o reanudar una sesión se
  compararán sólo los marcadores compactos aplicables» y «Concreta de forma
  eficiente la reconciliación mínima ya exigida por ADR-003» (S06 l. 47);
  «ADR-003 exige reconciliar estado real, permisos y ownership antes de
  ejecutar, pero esa reconciliación debe ser incremental para no releer todo en
  cada sesión» (ADR-005 l. 31-33).
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos textuales (lectura completa de S06 y de
  ADR-003/ADR-005; S04 l. 1-140 y 240-328; búsquedas citadas); `media` sobre el
  efecto (S08 y S11 sólo por búsqueda y líneas puntuales: l. 125 y l. 103)
- Impacto: qué debe verificar T800R al iniciar o reanudar una sesión antes de
  tomar trabajo. Si la comparación de marcadores de S06/ADR-005 sustituye la
  verificación de S04 l. 109/115, la reanudación deja de comprobar por sí misma
  los cambios presentes no reflejados en una revisión, el último checkpoint y
  la ausencia de otro escritor. Si no la sustituye, ADR-005 l. 31-33 describe
  mal la regla que resume. Afecta también a cuándo una sesión o tarea puede
  pasar a `ready` según el estado del packet. No cambia ninguna fila aceptada.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión y divergencia exclusivamente
  internas; no se invoca ninguna fuente externa)
- Fuente primaria: `docs/definition/session-04-operating-cycle.md` l. 108-116
  (leídas); `docs/definition/session-06-context.md` l. 1-206 (completa);
  `docs/adr/ADR-003-ciclo-operativo-y-coordinacion.md` l. 1-132 (completo);
  `docs/adr/ADR-005-contrato-portable-de-contexto.md` l. 1-139 (completo);
  `docs/adr/ADR-004-contrato-portable-de-handoffs.md` l. 107-108;
  `docs/definition/session-05-handoffs.md` l. 105, 131; búsqueda en S06 de
  «sesión 4|S04|contexto mínimo|checkpoint» (única coincidencia: l. 100,
  sección `work`); búsqueda de «marcador|reconcili» en S08, S11 y S12
  (S08 l. 125; S11 l. 103 leída).
- Sección o localizador: tabla de acuerdos de S04; «Decisiones», «Núcleo
  obligatorio», «Reconciliación incremental» y «Estados observables» de S06;
  «Decisión» puntos 5 y 7 de ADR-003; «Contexto» y «Decisión» punto 6 de
  ADR-005.
- Fecha de consulta/publicación: consulta 2026-09-25.
- Hecho observado:
  1. **Dos reconciliaciones con el mismo disparador y sin regla que las
     componga.** S04 l. 109 exige, «Al iniciar o reanudar», verificar la
     revisión real, «los cambios presentes», el estado y la evidencia, el owner
     y «el último checkpoint», y ante aparente abandono confirmar «que no existe
     otro escritor activo». ADR-003 punto 5 lo resume: «Antes de ejecutar
     reconcilia contexto mínimo, repositorio, estado, evidencia, permisos y
     ownership». S06 l. 47 establece que, «Al iniciar o reanudar una sesión», se
     comparan «sólo» los marcadores (revisión del repositorio y del tracker,
     estado del handoff y versión de políticas) y, si coinciden, se reutiliza el
     packet, y lo justifica como concreción de «la reconciliación mínima ya
     exigida por ADR-003». Ningún texto dice si la comparación de marcadores
     sustituye la verificación de S04 l. 109 o sólo decide si se reutiliza el
     packet.
  2. **S06 y ADR-005 describen objetos distintos.** S06 habla de «La
     reconciliación del context packet» (l. 47) y de reutilizar «el packet sin
     releer sus secciones» (l. 145). ADR-005 l. 31-33 dice que la
     reconciliación de ADR-003, la del «estado real, permisos y ownership»,
     «debe ser incremental». En el ADR, la regla del packet pasa a ser la forma
     de la reconciliación operativa de la sesión.
  3. **Los marcadores enumerados no cubren tres elementos de S04 l. 109.**
     Faltan «los cambios presentes» (trabajo no reflejado todavía en una
     revisión), «el último checkpoint» y la ausencia de «otro escritor activo».
     El `base` del packet «Referencia la revisión, el tracker y el handoff
     aplicables» (S06 l. 87), sin checkpoint, que sí figura en el `base` del
     handoff (S05 l. 105). En S06 el checkpoint sólo aparece como contenido de
     la sección `work` (l. 100), que no se relee si los marcadores coinciden.
  4. **Cuatro sujetos para la misma reconciliación.** El orchestrator (S04
     l. 109; ADR-004 l. 107-108), «Una sesión» (ADR-003 punto 5), «T800R» (S06
     l. 142) y una forma impersonal (ADR-005 punto 6).
  5. **El «contexto mínimo» de la sesión no se identifica con el packet.** S04
     l. 115 y ADR-003 punto 5 exigen reunir el «contexto mínimo» antes de pasar
     a `ready`. S06 no usa esa expresión ni nombra estados de sesión o tarea. El
     packet es «para cada tarea o capacidad» (S06 l. 8; ADR-005 l. 14), mientras
     que la sesión «referencia las tareas que atiende» (S04 l. 115). Ninguna
     regla dice qué estado del packet (`ready`, `degraded`, `invalid`: S06
     l. 169-171) permite a una sesión o tarea pasar a `ready` o `in_progress`, o
     la deja en `waiting` o `blocked` (S04 l. 109).
- Inferencia: caben dos lecturas y el texto no elige entre ellas. (i) Son dos
  reconciliaciones: la de S04 para sesión y ownership, completa, y la de S06
  para reutilizar el packet, incremental. En ese caso ADR-005 l. 31-33 y la
  justificación de S06 l. 47 describen mal la relación. (ii) La incremental
  sustituye a la de S04 al reanudar. En ese caso, los tres elementos del hecho
  3 sólo se comprueban si algún marcador cambia o en la validación de
  precondiciones «Antes de una acción con efectos» (S06 l. 47, 146-147), no al
  pasar la sesión a `ready`, que es lo que exige S04 l. 115 («descartar
  conflictos de ownership»).

## Observación y propuesta

- Observación: la cadena ciclo operativo → handoff → contexto conserva en todas
  sus piezas que ante duda no se escribe. Pero la regla que conecta la
  reanudación de S04 con la reutilización del packet de S06 no está escrita, y
  el ADR de contexto la reformula como si fuera la misma regla.
- Propuesta concreta: que la persona decida (a) si la reanudación ejecuta dos
  reconciliaciones (S04 completa y S06 incremental) o una sola incremental; (b)
  en el segundo caso, qué marcador o comprobación cubre los cambios presentes,
  el último checkpoint y la ausencia de otro escritor antes de pasar a `ready`;
  (c) si el «contexto mínimo» de S04 l. 115 es el núcleo y material `required`
  del packet; y (d) qué estado de sesión o tarea corresponde a cada estado del
  packet, junto con `REV-2026-047` y `REV-2026-051`. Según la respuesta,
  corregir la justificación de S06 l. 47 y ADR-005 l. 31-33, o añadir una fila
  en S06. No editar el canon sin esa decisión.
- Contraargumento o coste/riesgo: la lista de marcadores es abierta («como»,
  «aplicables»), y la «revisión del repositorio» puede incluir el estado del
  árbol de trabajo. La validación de precondiciones antes de actuar (S06 l. 47;
  S08 l. 125: «detener efectos cuando base, ownership, autoridad o vigencia no
  puedan comprobarse») protege la escritura aunque la sesión haya pasado a
  `ready`. S11 l. 103 asigna a un único runtime «reconcilia fuentes … ensambla
  contexto», lo que atenúa el hecho 4 en el destino. Corregirlo cuesta una
  frase si la lectura (i) es la intención.

## Análisis adicional

- Evidencia interna: hechos 1-5 con sus localizadores. `REV-2026-050` trata el
  valor esperado de los marcadores dentro de S06, no su relación con S04.
  `REV-2026-080` trata el orchestrator de ADR-004 l. 107-108. `REV-2026-082`
  consideró respaldada la atribución de ADR-005 l. 31-33 a ADR-003 punto 5 en
  cuanto al contenido. Esta anotación no discute esa atribución, sino que
  ADR-005 convierta la reconciliación de ADR-003 en incremental sin que S04 ni
  S06 lo digan. `REV-2026-047` y `REV-2026-051` cubren la parada y las
  transiciones del packet sin el estado de S04. `REV-2026-092` cubre la sesión
  sin identidad.
- Contraevidencia y límites: no se leyeron S08 ni S11 completas. La
  arquitectura (S11 l. 103, 106, 166) puede fijar la secuencia de reanudación
  sin decirlo en estos términos. Tampoco se examinó si S12 incluye un escenario
  de reanudación con cambios sin revisión.
- Pregunta para resolver: al reanudar, ¿la comparación de marcadores de S06
  sustituye la verificación de S04 l. 109 o se suma a ella? ¿Qué comprueba que
  no hay cambios presentes ni otro escritor antes de `ready`, y qué estado del
  packet exige S04 para el «contexto mínimo»?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [CT05](blocks/CT05.md),
  [`REV-2026-047`](2026-09-24-REV-2026-047-parada-del-agente-y-diagnostico-auditable-en-s06-sin-actor-canal-ni-estado-actor-autorizado-y-fuente-autorizada-sin-criterio.md),
  [`REV-2026-050`](2026-09-24-REV-2026-050-marcadores-de-reconciliacion-sin-valor-esperado-estado-del-handoff-cambia-por-lifecycle-normal-sin-impacto-impacto-y-check-after-sin-campo-y-contrato-aplicable-sin-definicion.md),
  [`REV-2026-051`](2026-09-24-REV-2026-051-estados-del-context-packet-sin-transiciones-ni-precedencia-invalid-frente-a-superseded-tras-cambio-packet-recarga-section-sin-estado-degraded-por-obsoleto-sin-causa-y-sin-inmutables.md),
  [`REV-2026-080`](2026-09-25-REV-2026-080-consecuencias-de-adr-004-asignan-al-orchestrator-la-reconciliacion-previa-sin-fila-en-s05-y-aplicar-ambiguo-entre-aceptacion-y-seguimiento.md),
  [`REV-2026-082`](2026-09-25-REV-2026-082-glosario-y-contexto-de-adr-005-homonimos-packet-y-adapter-handoff-custodio-de-ownership-y-alternativa-adapter-libre-sin-rejected.md),
  [`REV-2026-092`](2026-09-25-REV-2026-092-sesion-de-s04-sin-identidad-portable-ni-equivalencia-con-execution-id-de-s08-y-titular-del-ownership-retenido-sin-fijar.md).

## Preguntas pendientes

- ¿Puede una sesión pasar a `ready` con un packet `degraded` si sus tareas no
  dependen del material faltante (S06 l. 170)?

## Cobertura y límites

- Leídos: los localizadores de «Fuente primaria». Sin fuentes externas.
- No examinados: S08 y S11 completas; S12; ADR-010.
