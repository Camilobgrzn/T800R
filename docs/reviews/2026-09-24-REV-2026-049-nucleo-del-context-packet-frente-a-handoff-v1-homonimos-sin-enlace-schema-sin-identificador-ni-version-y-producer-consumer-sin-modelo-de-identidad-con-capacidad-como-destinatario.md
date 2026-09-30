# Anotación de revisión

- ID de anotación: `REV-2026-049`
- Unidad y ubicación: `S06` — [session-06-context.md, «Núcleo obligatorio del context packet»](../definition/session-06-context.md#núcleo-obligatorio-del-context-packet)
  (tabla l. 78-90: `schema` l. 80, `id` l. 81, `producer` l. 83, `consumer`
  l. 84, `subject` l. 85, `base` l. 87, `constraints` l. 88) y
  [«Reglas de progressive disclosure»](../definition/session-06-context.md#reglas-de-progressive-disclosure)
  (l. 115-116 «actor autorizado»), frente a la fila l. 44 y a la fila
  `deferred` l. 57 de [«Decisiones»](../definition/session-06-context.md#decisiones),
  a [S05, «Decisiones»](../definition/session-05-handoffs.md#decisiones)
  (l. 71), [«Identidad de actores»](../definition/session-05-handoffs.md#identidad-de-actores)
  (l. 84-89) y [«Envoltura común mínima»](../definition/session-05-handoffs.md#envoltura-común-mínima)
  (`schema` l. 95, `id` l. 96, `sender` l. 102, `recipient` l. 103, `subject`
  l. 104, `base` l. 105), y a [ADR-005, «Decisión», punto 1](../adr/ADR-005-contrato-portable-de-contexto.md#decisión)
  (l. 63-66). Bloque `B024`.
- Revisión examinada: estado de los archivos al 2026-09-24; repositorio sin
  commits, huella no disponible. S06 «iniciada el 2026-09-17; cerrada el
  2026-09-18» (l. 3); S05 cerrada el 2026-09-16. Citas distintivas: «`schema`
  | Identifica el esquema del packet» (S06 l. 80) frente a «`schema` |
  Identificador y versión del contrato: `handoff/v1`» (S05 l. 95);
  «`producer` | Identifica quién o qué produjo el packet» (l. 83);
  «`consumer` | Identifica el actor o la capacidad objetivo» (l. 84);
  «`base` | Referencia la revisión, el tracker y el handoff aplicables»
  (l. 87) frente a «`base` | Revisión, checkpoint, estado y owner esperados
  sobre los que se emitió» (S05 l. 105); «Una referencia de actor distingue
  identidad lógica, tipo de actor y ejecución o sesión aplicable» (S05
  l. 84); «La identidad lógica y los aliases concretos del context packet …
  Se resolverán en la sesión 8» (S06 l. 57).
- Tipo: `incompleto`
- Gravedad: `baja`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos textuales (búsquedas de `producer`,
  `consumer` y de identificadores `*/v1` en todo `docs/`); `media` sobre el
  efecto (S08 y S11 sólo por líneas devueltas por búsqueda: S08 l. 124 y 210
  resuelven la identidad lógica de actores; S11 nombra ocho esquemas `*/v1` y
  ninguno del packet)
- Impacto: si los cinco campos que el núcleo del packet comparte por nombre
  con `handoff/v1` (`schema`, `id`, `created_at`, `subject`, `base`) tienen la
  misma semántica —S06 no cita S05 y `base` difiere en contenido—; si
  `producer` y `consumer` usan la referencia de actor de S05 (identidad
  lógica, tipo, ejecución) o un modelo propio, y qué es una «capacidad» como
  destinatario, que S05 no admite como `recipient`; y si el esquema del packet
  tiene identificador y versión como el handoff (`handoff/v1`) o queda sin
  valor y sin fila `deferred`. Afecta a lo que la capa `structural` (l. 66,
  «campos, tipos») puede comprobar, a quién es el «actor autorizado» de
  l. 116 y el «actor» de la evidencia (l. 190), y a la portabilidad de la
  identidad (`CT03`). No cambia el contenido de ninguna fila aceptada.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión exclusivamente interna; no se
  invoca ninguna fuente externa)
- Fuente primaria: `docs/definition/session-06-context.md` l. 41-60 (por
  `B023`), 76-139 (leídas) y búsqueda en toda la unidad de «producer|consumer|
  actor|capacidad|identidad» (l. 8, 23, 43, 46, 57, 83, 84, 116, 190);
  `docs/definition/session-05-handoffs.md` l. 66-80, 82-89, 91-109 (leídas) y
  búsqueda de «capacidad» (l. 8, 145: nunca como destinatario);
  `docs/adr/ADR-005-contrato-portable-de-contexto.md` l. 14, 63-66 (leídas);
  búsqueda de «producer|consumer|budget_profile|packet» en `docs/` fuera de
  `reviews/` (`producer`/`consumer` sólo en S06 l. 44, 83-84 y ADR-005
  l. 63-64) y de identificadores `\S+/v1` en S08 y S11 (S08 l. 99
  `handoff/v1`; S11 l. 100-181: `proposal/v1`, `handoff/v1`, `approval/v1`,
  `policy/v1`, `diagnostic/v1`, `operation-result/v1`, `evidence-event/v1`,
  `mediated-operation/v1`; ninguno del context packet; fuera del alcance,
  sólo líneas devueltas); `docs/definition/session-08-portability.md` l. 45,
  48, 124, 210 (por búsqueda; fuera del alcance).
- Sección o localizador: «Decisiones», «Núcleo obligatorio del context
  packet», «Reglas de progressive disclosure» (S06); «Decisiones», «Identidad
  de actores», «Envoltura común mínima» (S05); «Decisión» punto 1 (ADR-005).
- Fecha de consulta/publicación: consulta 2026-09-24; sesión cerrada el
  2026-09-18 según l. 3.
- Hecho observado:
  1. **Cinco homónimos sin declaración de equivalencia, y `base` con
     contenido distinto.** `schema`, `id`, `created_at`, `subject` y `base`
     existen en ambos núcleos (S06 l. 80-82, 85, 87; S05 l. 95-96, 99, 104-105).
     S06 no nombra S05 ni `handoff/v1` en ninguna línea (`REV-2026-046`
     hecho 1) y no dice si comparten semántica. `subject` del handoff es una
     «referencia tipada» (S05 l. 104); el del packet «identifica el asunto o
     trabajo» (l. 85), sin tipo. `base` del handoff contiene «revisión,
     checkpoint, estado y owner esperados» (S05 l. 105); `base` del packet
     «referencia la revisión, el tracker y el handoff aplicables» (l. 87): el
     estado y el owner esperados no están en el núcleo del packet, aunque la
     reconciliación (l. 47, 142-144) compare «estado del handoff» y «versión
     de políticas o permisos» como marcadores. `created_at` es compatible
     (S05 l. 99 «no demuestra vigencia»; S06 l. 48 «el tiempo por sí solo no
     invalidará»).
  2. **`schema` sin identificador ni versión.** S05 fijó en la fila
     equivalente el valor `handoff/v1` (l. 95) sin seleccionar representación
     física. S06 l. 80 sólo dice «Identifica el esquema del packet»; ADR-005
     l. 63 repite el nombre del campo sin valor. Ningún documento de `docs/`
     fuera de `reviews/` contiene un identificador de esquema del packet
     (búsqueda de `*/v1`: S11 nombra ocho esquemas y ninguno del context
     packet). No lo difiere ninguna fila (l. 56-58: herramientas; identidad y
     aliases del packet; sintaxis del `manifest`) ni ADR-005 l. 118-128.
  3. **`producer` y `consumer` sin modelo de identidad y con un tipo de
     destinatario que S05 no conoce.** S05 l. 71 y 84-89 fijan que un actor
     se referencia por identidad lógica, tipo de actor y ejecución, y que
     `recipient` es «actor concreto o selector de rol o autoridad» (l. 71,
     103). S06 l. 83 admite «quién o qué» como productor y l. 84 «el actor o
     la capacidad objetivo» como consumidor, sin enlazar el modelo de S05 ni
     decir qué es una capacidad como destinatario («capacidad» aparece en
     S05 sólo como propiedad del receptor, l. 145, y en su objetivo, l. 8).
     La fila `deferred` l. 57 difiere «la identidad lógica y los aliases
     concretos del context packet» —la identidad del artefacto—, no la de
     sus actores. `producer` y `consumer` no aparecen en S08, S11 ni ADR-007
     (búsqueda); S08 l. 124 y 210 (por búsqueda) resuelven `actor_id` e
     identidad lógica para actores, sin nombrar los campos del packet.
  4. **Los actores del rango no se conectan con esos campos.** L. 116 admite
     cargar una sección si «la solicita explícitamente un actor autorizado» y
     l. 88 sintetiza «los permisos efectivos» sin decir de quién (el
     `consumer`, el `producer` u otro); ninguna línea dice si el «actor
     autorizado» es el `consumer` ni si los permisos sintetizados son los del
     `consumer`. La evidencia de l. 190 registra «actor» sin modelo
     (`REV-2026-047` hechos 2-3, no duplicados aquí).
- Inferencia (si aplica): la capa `structural` (l. 66: «campos, tipos») no
  tiene, en S06, tipo para `schema`, `producer` ni `consumer`; un adapter que
  produzca un packet para una «capacidad» no tiene en S05 ni S06 una
  referencia portable con la que expresarla, y la equivalencia de `base`
  entre handoff y packet —de la que depende comparar «estado del handoff»—
  no está escrita.

## Observación y propuesta

- Observación: el núcleo del packet reutiliza cinco nombres de `handoff/v1`
  sin declarar si comparten semántica (uno no la comparte), deja `schema` sin
  valor cuando el handoff lo fijó, y define `producer`/`consumer` sin el
  modelo de identidad de S05 y con «capacidad» como destinatario, que ninguna
  unidad leída define.
- Propuesta concreta: (a) fijar en S06 el identificador y la versión del
  esquema del packet (por ejemplo `context/v1`) o registrar una fila
  `deferred` con destino; (b) declarar que `producer` y `consumer` usan la
  referencia de actor de S05 l. 84 (identidad lógica, tipo y ejecución) y qué
  referencia identifica una «capacidad» como `consumer` (enlace a S08 si ahí
  se resolvió); (c) añadir una nota sobre los homónimos: si `subject` del
  packet es la misma referencia tipada que `subject` del handoff y en qué
  campo del packet constan los marcadores esperados de l. 47 (`base` del
  packet no los contiene, a diferencia de `base` del handoff).
- Contraargumento o coste/riesgo: puede sostenerse que los nombres son
  homónimos deliberados en contratos separados y que basta el glosario de
  ADR-005; que la identidad de actores quedó resuelta en S08 para todo el
  canon; y que el identificador del esquema es representación física
  (sesión 11). S05 fijó `handoff/v1` sin seleccionar representación, y S06
  no enlaza S08 ni difiere el valor. El coste de (a)-(c) es tres frases; el
  riesgo de no hacerlo es que cada adapter tipifique productor, consumidor y
  esquema a su modo, contra l. 43 «validación y continuidad comunes».

## Análisis adicional

- Evidencia interna: [`REV-2026-046`](2026-09-24-REV-2026-046-referencia-del-handoff-al-context-packet-sin-campo-en-ningun-contrato-s06-parte-de-adr-004-sin-acuse-de-s05-l66-y-packet-sucesor-inalcanzable-desde-references-inmutable.md)
  (S06 no nombra S05; `base` como único enlace packet → handoff: aquí se
  añade que `base` del packet no contiene el estado ni el owner esperados);
  [`REV-2026-038`](2026-09-24-REV-2026-038-tipo-de-actor-sin-enumeracion-y-persona-sin-lugar-en-handoff-v1-como-actor-receptor-o-aceptante.md)
  («tipo de actor» sin enumeración en S05; el packet añade «capacidad» sin
  enumerarla); [`REV-2026-036`](2026-09-24-REV-2026-036-pregunta-8-de-s05-representacion-y-ubicacion-sin-fila-y-aplazamiento-de-s04-l299-no-recibido.md)
  (representación → S11; el identificador de esquema no es representación
  según el precedente de S05 l. 95); [`REV-2026-047`](2026-09-24-REV-2026-047-parada-del-agente-y-diagnostico-auditable-en-s06-sin-actor-canal-ni-estado-actor-autorizado-y-fuente-autorizada-sin-criterio.md)
  hecho 3 («actor autorizado» sin criterio; aquí, sin campo que lo
  identifique); [`REV-2026-040`](2026-09-24-REV-2026-040-actor-que-aplica-las-capas-de-validacion-y-registra-rejected-sin-fijar-y-capas-mecanizables-sin-clasificar.md)
  (capa estructural sin tipos que contrastar).
- Contraevidencia y límites: ADR-005 l. 14 define el packet como material
  «para una tarea o capacidad», lo que explica `consumer` como capacidad sin
  definirla; S08 l. 45-48 (por búsqueda) concreta un «manifest de
  capacidades» como «descriptor versionado» que podría dar identidad a una
  capacidad, y S08 l. 124/210 resuelven la identidad lógica de actores: si
  S08 cubre `producer`/`consumer` sin nombrarlos, el hecho 3 se reduce a una
  ausencia de enlace desde S06. S11 y ADR-010 no leídos: pueden fijar el
  esquema del packet con otro nombre que la búsqueda de `*/v1` no capture.
- Pregunta para resolver: ¿tienen `schema`, `id`, `subject` y `base` del
  packet la misma semántica que en `handoff/v1`, y dónde constan el
  identificador y la versión del esquema del packet? ¿`producer` y `consumer`
  usan la referencia de actor de S05 l. 84, y qué referencia identifica a una
  «capacidad» como destinatario? ¿Es el `consumer` el «actor autorizado» de
  l. 116 y el titular de los «permisos efectivos» de l. 88?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: pendiente
