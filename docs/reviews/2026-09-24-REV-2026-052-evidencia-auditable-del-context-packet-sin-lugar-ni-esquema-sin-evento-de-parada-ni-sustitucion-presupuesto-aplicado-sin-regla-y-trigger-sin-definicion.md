# Anotación de revisión

- ID de anotación: `REV-2026-052`
- Unidad y ubicación: `S06` — [session-06-context.md, «Condiciones de parada y evidencia»](../definition/session-06-context.md#condiciones-de-parada-y-evidencia)
  (l. 182-192) y [«Estados observables del context packet»](../definition/session-06-context.md#estados-observables-del-context-packet)
  (l. 172, 175-176), frente al [«Criterio de salida»](../definition/session-06-context.md#criterio-de-salida)
  (l. 35), a las filas l. 46, 51 y 52 de
  [«Decisiones»](../definition/session-06-context.md#decisiones), a
  [«Reglas de progressive disclosure»](../definition/session-06-context.md#reglas-de-progressive-disclosure)
  (l. 116-117, dependencia del bloque `B024`), a
  [S03, «Distribución canónica inicial»](../definition/session-03-sources-of-truth.md#distribución-canónica-inicial)
  (l. 58 «Evidencia de ejecución y revisión», l. 63 «Contexto efímero») y a
  [ADR-005, «Decisión», puntos 10-11](../adr/ADR-005-contrato-portable-de-contexto.md#decisión)
  (l. 93-99) y [«Puntos abiertos»](../adr/ADR-005-contrato-portable-de-contexto.md#puntos-abiertos)
  (l. 118-128). Bloque `B025`.
- Revisión examinada: estado de los archivos al 2026-09-24; repositorio sin
  commits, huella no disponible. S06 «iniciada el 2026-09-17; cerrada el
  2026-09-18» (l. 3); ADR-005 fechado 2026-09-18. Citas distintivas: «Cada
  ensamblaje, carga, reconciliación, degradación, invalidación o
  reconstrucción registra como evidencia auditable: actor, fecha, base,
  trigger, referencias/revisiones, material incluido u omitido con su razón,
  presupuesto aplicado, resultado y packet predecesor cuando exista»
  (l. 189-192); «El trabajo se detiene si …» (l. 184-187); «manteniendo
  presupuestos y condiciones de parada verificables» (l. 35); «Establece una
  frontera verificable para dejar de cargar contexto» (l. 52, justificación);
  «registran actor, fecha, base, causa, revisiones, inclusiones y omisiones,
  presupuesto, resultado y predecesor cuando exista» (ADR-005 l. 98-99).
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos textuales (búsqueda de «trigger»,
  «evidence-event», «diagnóstico auditable|evidencia auditable» en `docs/`);
  `media` sobre el efecto (S11 l. 160 y 166 y S08 l. 363 sólo por búsqueda y
  fuera del alcance: la arquitectura puede fijar el lugar y el esquema)
- Impacto: si la única salida observable de la reconciliación y de la parada
  —la evidencia de l. 189-192— permite verificar las condiciones que l. 35 y
  l. 52 declaran «verificables»: la parada de l. 184-187 no es uno de los seis
  eventos que registran evidencia, tampoco el paso a `superseded` (l. 172) ni
  el fallo estructural (l. 175-176); la evidencia no tiene lugar, capa de S03
  ni esquema en S06 ni en ADR-005; «presupuesto aplicado» no tiene valor
  cuando el adapter no expone límites (`REV-2026-048`), «actor» no tiene
  modelo (`REV-2026-049`) y «trigger» no se define en S06. Responde a la
  pregunta 3 de `B023` en negativo para S06. No cambia el contenido de
  ninguna fila aceptada.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión exclusivamente interna; no se
  invoca ninguna fuente externa)
- Fuente primaria: `docs/definition/session-06-context.md` l. 31-37, 41-60,
  62-74, 110-119 (dependencias, por `B023`/`B024`) y 140-193 (leídas);
  búsqueda en toda la unidad de «trigger» (sólo l. 190), «evidencia» (l. 27,
  35, 45-46, 58, 103, 114, 190, 200), «ledger|tracker|events» (sólo «tracker»
  en l. 47, 87, 143); búsqueda de «trigger» en `docs/` fuera de `reviews/`
  (S06 l. 190; tracker de definición l. 276; S08 l. 363 «triggers ya aceptados
  por ADR-005»); búsqueda de «evidence-event|diagnostic/v1|diagnóstico
  auditable|evidencia auditable» en `docs/` (S11 l. 115, 160; S05 l. 70, 178,
  188; S08 l. 227; S09 l. 65; ADR-005 l. 92); `docs/definition/session-03-sources-of-truth.md`
  l. 53-63 (leídas); `docs/adr/ADR-005-contrato-portable-de-contexto.md`
  l. 81-128 (leídas); `docs/definition/session-11-mvp-architecture.md` l. 115,
  160, 166 y `docs/definition/session-08-portability.md` l. 363 (sólo líneas
  devueltas por búsqueda; fuera del alcance).
- Sección o localizador: «Criterio de salida», «Decisiones», «Reglas de
  progressive disclosure», «Estados observables del context packet»,
  «Condiciones de parada y evidencia» (S06); «Distribución canónica inicial»
  (S03); «Decisión» puntos 10-11 y «Puntos abiertos» (ADR-005).
- Fecha de consulta/publicación: consulta 2026-09-24; sesión cerrada el
  2026-09-18 según l. 3.
- Hecho observado:
  1. **La parada no es un evento de evidencia.** L. 189 enumera seis eventos
     que registran evidencia: «ensamblaje, carga, reconciliación, degradación,
     invalidación o reconstrucción». «La carga termina» (l. 182) y «El trabajo
     se detiene» (l. 184) no están en la lista; tampoco el paso a `superseded`
     (l. 172: sólo la «reconstrucción» del sucesor registra «packet
     predecesor») ni el artefacto que «no entra en estos estados» (l. 175-176;
     `REV-2026-047` hecho 2). Puede leerse que el «resultado» de una carga o
     de un ensamblaje contiene la parada; la unidad no lo escribe. L. 35 y la
     justificación de l. 52 declaran las condiciones de parada «verificables»
     y ninguna otra sección de S06 les da constancia. ADR-005 l. 97-99
     enumera los mismos seis eventos.
  2. **La evidencia no tiene lugar, capa ni esquema.** L. 189-192 dice
     «registra como evidencia auditable» sin decir dónde: S06 no nombra el
     tracker para ese fin, un ledger, los `events` del handoff (S05 l. 109) ni
     la capa «Evidencia de ejecución y revisión» de S03 l. 58 («Qué se
     comprobó, sobre qué revisión, en qué condiciones y con qué resultado»),
     a la que el contenido de l. 190-192 se ajusta. L. 116-117 («Cada carga
     registra la sección, la condición activada y la revisión de la fuente»)
     tenía la misma omisión (`B024`, pista (h)). ADR-005 «Puntos abiertos»
     l. 118-128 difiere a la sesión 11 «representación física, almacenamiento
     y mecanismos de búsqueda» del packet sin nombrar la evidencia. S11 l. 160
     («El ledger es la fuente de evidencia»; `evidence-event/v1`) y l. 166 (el
     ledger del packet conserva «estado, digest, … marcadores de fuente,
     presupuesto, material omitido, predecesor») fijan un lugar por búsqueda,
     no enlazado desde S06 ni desde ADR-005.
  3. **Tres campos de la evidencia no tienen valor, modelo o definición.**
     «Presupuesto aplicado» (l. 191) cuando «el contrato común no exige que
     existan métricas de tokens o coste» (l. 126-127): S06 no dice si se
     registra «no medible», nada, o si el campo es obligatorio y su ausencia
     falla `structural` (`REV-2026-048` hecho 2, aquí en la evidencia).
     «Actor» (l. 190) sin referencia de actor (`REV-2026-049` hecho 4;
     `producer` l. 83 «quién o qué»). «Trigger» (l. 190) aparece una sola vez
     en S06 y no se define; ADR-005 l. 98 escribe «causa»; S08 l. 363 (por
     búsqueda) lo identifica con las condiciones de carga de l. 112-116
     («triggers ya aceptados por ADR-005: exigencia de tarea o capacidad,
     resolución de…»), lectura que S06 no escribe y que no cubre el trigger
     de una «invalidación» o «reconstrucción» (un marcador, l. 145; un impacto,
     l. 149).
  4. **ADR-005 reformula la lista sin ampliarla.** L. 98-99: «causa» por
     «trigger», «revisiones» por «referencias/revisiones», «inclusiones y
     omisiones» por «material incluido u omitido con su razón» (omite la
     razón), «presupuesto» por «presupuesto aplicado». Ninguna versión añade
     lugar, esquema ni la parada.
- Inferencia (si aplica): la evidencia de l. 189-192 es lo único que permite a
  alguien distinto del agente comprobar que la reconciliación y la parada
  ocurrieron como l. 142-152 y 182-187 exigen; sin evento de parada, sin lugar
  y con tres campos sin valor definido, «verificable» (l. 35) sólo lo es para
  quien ensambla.

## Observación y propuesta

- Observación: S06 fija con detalle qué registra cada operación del packet,
  pero no registra la parada que el criterio declara verificable, no dice
  dónde queda la evidencia ni en qué capa de S03, y deja tres de sus campos
  sin valor, modelo o definición.
- Propuesta concreta: (a) añadir «parada» y «sustitución» (y el fallo
  estructural, o remitir a la propuesta (b) de `REV-2026-047`) a la lista de
  l. 189; (b) declarar que la evidencia del packet pertenece a la capa de S03
  l. 58 y el artefacto o esquema donde se persiste, o registrar una fila
  `deferred` a la sesión 11 con marca de retorno (S11 l. 160/166); (c) fijar
  el valor de «presupuesto aplicado» cuando no hay límites (junto con la
  propuesta (b) de `REV-2026-048`); (d) definir «trigger» (remitiendo a las
  condiciones de l. 112-116 para la carga y a marcador/impacto para
  reconciliación e invalidación) y «actor» (referencia de actor de S05
  l. 84), y alinear ADR-005 l. 98-99 con l. 190-192.
- Contraargumento o coste/riesgo: puede sostenerse que «resultado» de cada
  evento captura la parada, que S11 ya fijó ledger y esquema (l. 160, 166) y
  que S06 no debía elegir representación (l. 43); pero S06 no remite a S11 ni
  difiere la evidencia, ADR-005 tampoco, y una lectura por «resultado» no da
  evento a la parada por presupuesto durante el ensamblaje. El coste de
  (a)-(d) es dos palabras en l. 189, un enlace y dos definiciones.

## Análisis adicional

- Evidencia interna: [`REV-2026-047`](2026-09-24-REV-2026-047-parada-del-agente-y-diagnostico-auditable-en-s06-sin-actor-canal-ni-estado-actor-autorizado-y-fuente-autorizada-sin-criterio.md)
  (parada sin destinatario, handoff ni estado; su contraevidencia suponía que
  l. 190-192 «registra la parada como evento del packet»: el hecho 1 muestra
  que la lista no la incluye; l. 182-187 repite literalmente la fila l. 52 y
  no añade destinatario, de modo que su límite queda cerrado para l. 140-193);
  [`REV-2026-048`](2026-09-24-REV-2026-048-presupuesto-del-context-packet-budget-profile-sin-definicion-no-cabe-sin-limites-del-adapter-y-manifest-del-nucleo-sin-prioridad-ni-granularidad-de-material.md)
  hecho 2 (caso sin límites; aquí «presupuesto aplicado»);
  [`REV-2026-049`](2026-09-24-REV-2026-049-nucleo-del-context-packet-frente-a-handoff-v1-homonimos-sin-enlace-schema-sin-identificador-ni-version-y-producer-consumer-sin-modelo-de-identidad-con-capacidad-como-destinatario.md)
  hecho 4 («actor» sin modelo);
  [`REV-2026-020`](2026-09-21-REV-2026-020-tabla-de-persistencia-sin-destino-para-lo-no-confirmado.md)
  (S03: lo no confirmado sin destino; aquí la evidencia del packet sin capa);
  [`REV-2026-040`](2026-09-24-REV-2026-040-actor-que-aplica-las-capas-de-validacion-y-registra-rejected-sin-fijar-y-capas-mecanizables-sin-clasificar.md)
  (quién registra: sin actor en S05 y S06);
  [`REV-2026-036`](2026-09-24-REV-2026-036-pregunta-8-de-s05-representacion-y-ubicacion-sin-fila-y-aplazamiento-de-s04-l299-no-recibido.md)
  (ubicación diferida a S11 sin acuse en la unidad: mismo patrón).
- Contraevidencia y límites: S03 l. 63 («Lo necesario para continuar se
  persiste en la fuente que corresponda») y S04 l. 94 («Toda transición
  conserva su razón, evidencia y responsable») permiten leer que la evidencia
  del packet cae bajo reglas generales ya aceptadas; ninguna de las dos nombra
  el packet. S11 l. 160 y 166 (por búsqueda) parecen resolver el lugar y el
  esquema (`evidence-event/v1`; ledger con «material omitido, predecesor»),
  lo que reduce el hecho 2 a una remisión ausente; no se leyó S11 fuera de
  esas líneas ni ADR-010. No se demuestra que la parada carezca de
  constancia en la práctica: se demuestra que S06 no la enumera.
- Pregunta para resolver: ¿es la parada de l. 182-187 un evento de evidencia
  (con qué campos) o el «resultado» de otro evento, y quién distinto del
  agente puede comprobarla? ¿En qué capa de S03 y en qué artefacto o esquema
  se persiste la evidencia de l. 189-192 (S11 l. 160/166), y debe S06
  remitirlo? ¿Qué se registra como «presupuesto aplicado» sin límites, qué
  referencia de actor usa «actor» y qué es «trigger» para una invalidación o
  reconstrucción?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: pendiente
