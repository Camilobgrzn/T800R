# Anotación de revisión

- ID de anotación: `REV-2026-092`
- Unidad y ubicación: `S04`/`S05` — [S04, «Decisiones»](../definition/session-04-operating-cycle.md)
  (l. 108, 109, 115, 116), [S05, «Decisiones»](../definition/session-05-handoffs.md#decisiones)
  (l. 71, 74), [«Identidad de actores»](../definition/session-05-handoffs.md#identidad-de-actores)
  (l. 84) y [«Envoltura común mínima»](../definition/session-05-handoffs.md#envoltura-común-mínima)
  (`sender` l. 102); [ADR-003 punto 5](../adr/ADR-003-ciclo-operativo-y-coordinacion.md#decisión)
  (l. 62-65). Destino fuera del alcance usado como evidencia: S08 l. 81-82, 128,
  206-220; ADR-007 l. 86-88; S11 l. 115, 147. Cruce `CT03`.
- Revisión examinada: estado de los archivos al 2026-09-25 (repositorio sin
  commits; S04 cerrada 2026-09-15, S05 2026-09-16, S08 2026-09-22 según su l. 3,
  S11 2026-09-24). Citas distintivas: «Una sesión es un contenedor efímero de
  ejecución … usa los estados `pending`, `ready`, `in_progress`, `waiting`,
  `blocked`, `completed` y `cancelled`» (S04 l. 115); «la disposición de cada
  ownership (liberado, transferido o retenido con intención de reanudar) …
  Reanudar crea una nueva sesión enlazada al checkpoint» (S04 l. 116); «Una
  referencia de actor distingue identidad lógica, tipo de actor y ejecución o
  sesión aplicable» (S05 l. 84); «Reanudar puede crear otro `execution_id` para
  el mismo actor» (S08 l. 217-218).
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos textuales (búsquedas de «sesión»,
  «ejecución», `execution_id`, `session`, «owner» en S04, S05, S08, S11, ADR-003,
  ADR-004 y ADR-007); `media` sobre el efecto, porque S08 admite la lectura
  implícita «sesión ≡ ejecución, owner ≡ `actor_id`» (ver contraevidencia).
- Impacto: qué identificador lleva la sesión de S04 —un objeto con lifecycle de
  siete estados, requisitos de cierre y disposición persistida del ownership—,
  si equivale a la ejecución de S08, y qué identidad figura como owner en el
  tracker (actor lógico o ejecución). De ello depende que «retenido con
  intención de reanudar» sea verificable al reanudar en otra sesión o con otro
  proveedor sin `ownership_transfer`, y que la reanudación no se confunda con
  una transferencia (S08 l. 218-219). No cambia ninguna fila aceptada.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión exclusivamente interna; no se invoca
  fuente externa).
- Fuente primaria: `docs/definition/session-04-operating-cycle.md:108-116`;
  `docs/definition/session-05-handoffs.md:36-110`;
  `docs/adr/ADR-003-ciclo-operativo-y-coordinacion.md:62-66`;
  `docs/adr/ADR-004-contrato-portable-de-handoffs.md:64, 71-72` (búsqueda);
  `docs/definition/session-08-portability.md:81-86, 128, 206-228` (destino);
  `docs/adr/ADR-007-contrato-de-capacidades-y-adapters-portables.md:86-88`;
  `docs/definition/session-11-mvp-architecture.md:115, 147` (destino).
- Sección o localizador: ver «Unidad y ubicación».
- Fecha de consulta/publicación: consulta 2026-09-25.
- Hecho observado:
  1. **La sesión de S04 es un objeto con estado y obligaciones de cierre.**
     S04 l. 115 le da siete estados y condiciones de entrada; l. 116 exige
     persistir al completarla checkpoint, cambios, evidencia, «la disposición
     de cada ownership (liberado, transferido o retenido con intención de
     reanudar)» y la próxima acción, y enlaza la sesión nueva «al checkpoint».
     ADR-003 punto 5 (l. 62-65) lo repite.
  2. **S05 usa «ejecución o sesión» como alternativa sin definirla.** S05 l. 84
     («ejecución o sesión aplicable») y l. 102 (`sender`: «su ejecución o
     sesión cuando corresponda»); S05 l. 71 dice que `sender` identifica «un
     actor concreto y su ejecución». Ninguna línea de S05 dice si sesión y
     ejecución son lo mismo ni qué identificador lleva cada una. ADR-004 l. 64
     usa «sesión» como frontera («actor, sesión o proveedor»).
  3. **El destino de la identidad sólo define `execution_id`.** S08 l. 81 y
     l. 210-214 fijan `actor_id`, `actor_type`, `execution_id`, roles y
     aliases; ninguna línea de S08 nombra la sesión de S04 ni dice que una
     sesión sea una ejecución. S08 l. 220 excluye como actor la «sesión de
     chat», que es otra cosa, aunque la pregunta 5 de S08 (l. 33-34) se
     formuló precisamente para no «confundir actor, rol, sesión o
     credencial». S08 l. 217-218 dice que reanudar «puede» crear
     otro `execution_id`; S04 l. 116 y ADR-003 l. 65 dicen que reanudar «crea»
     otra sesión. Si sesión y ejecución fueran equivalentes, una reanudación
     podría conservar la ejecución (S08) y a la vez exigir sesión nueva (S04).
     El catálogo de S11 l. 115 no tiene un schema de sesión (tiene
     `agent-turn`, `lease` y `work-item`, sin relación declarada con la sesión
     de S04).
  4. **Nadie dice qué identidad es el owner.** S04 l. 108 («único owner
     activo») y S05 l. 74 («actor concreto, ownership y alcance efectivos»)
     no dicen si el owner registrado es un `actor_id` o una ejecución. S08
     l. 81 («`actor_id` identifica … a través de proveedores y reanudaciones»)
     y l. 218-219 («transferir trabajo a otro actor no es reanudación y exige
     el handoff aplicable») implican, sin afirmarlo, que el ownership retenido
     pertenece al actor lógico. S11 l. 147 añade un lease técnico con
     «holder» sin decir si es actor o ejecución, y separa «task ownership» del
     lease.
- Inferencia (si aplica): la disposición «retenido con intención de reanudar»
  no tiene sujeto verificable. Una sesión nueva del mismo actor lógico (otro
  proveedor u otra ejecución) no puede demostrar con los contratos escritos que
  es la titular del ownership retenido. Tampoco hay regla que impida que dos
  ejecuciones simultáneas del mismo `actor_id` reclamen el mismo ownership,
  salvo el lease de S11, cuyo holder no está definido. La pregunta 2 de
  [CT02](blocks/CT02.md) sólo tiene respuesta implícita en el destino.

## Observación y propuesta

- Observación: el ciclo operativo trata la sesión como unidad con identidad
  propia (estados, cierre, enlace de reanudación). El contrato de identidad
  portable sólo conoce actores y ejecuciones. Ninguna unidad declara la
  equivalencia ni el titular del ownership.
- Propuesta concreta: que la persona decida (a) si la sesión de S04 es una
  ejecución de S08 (y entonces si reanudar «crea» o «puede crear» otra) o un
  objeto distinto con identificador propio y relación con `execution_id`;
  (b) que el owner de una tarea es un `actor_id` y que la ejecución sólo se
  registra como atribución, o lo contrario; (c) cómo se enlaza la sesión nueva
  con la disposición «retenido» de la anterior (checkpoint y `actor_id`) y
  qué impide que dos ejecuciones del mismo actor escriban a la vez (remitir al
  holder del lease de S11 l. 147 si esa es la respuesta). Bastaría una nota en
  S04 o S05 que enlace S08 l. 206-220.
- Contraargumento o coste/riesgo: la lectura más natural de S08 l. 81 y
  l. 217-219 ya responde (b) —el ownership es del actor lógico— y la de S04
  l. 115 («contenedor efímero de ejecución») sugiere (a). Pero ambas quedan
  implícitas, S05 mantiene «ejecución o sesión» como alternativa y el
  «puede»/«crea» no coincide. El coste de la nota es bajo. El riesgo de no
  escribirla es que cada adapter decida si la reanudación con otro proveedor
  exige `ownership_transfer`.

## Análisis adicional

- Evidencia interna: hechos 1-4.
  [`REV-2026-090`](2026-09-25-REV-2026-090-liberacion-de-ownership-de-s04-sin-vehiculo-en-handoff-v1-y-fin-del-ownership-al-completar-o-cancelar-la-tarea-sin-regla.md)
  (liberación sin vehículo: aquí falta además el titular de la retención);
  [`REV-2026-038`](2026-09-24-REV-2026-038-tipo-de-actor-sin-enumeracion-y-persona-sin-lugar-en-handoff-v1-como-actor-receptor-o-aceptante.md)
  hecho 4 (`sender` «siempre» con ejecución frente a «cuando corresponda»; no
  se duplica); [`REV-2026-042`](2026-09-24-REV-2026-042-accepted-sin-salida-si-el-aceptante-desaparece-cierre-coordinado-sin-partes-y-escalacion-de-due-at-sin-observador-ni-representacion.md)
  (obligación aceptada sin aceptante: el aceptante es actor o ejecución);
  pregunta 4 de [B014](blocks/B014.md) y 6 de [B021](blocks/B021.md);
  pregunta 2 de [CT02](blocks/CT02.md).
- Contraevidencia y límites: S08 l. 128 («reanudar otra ejecución») y S04
  l. 115 permiten leer sesión y ejecución como sinónimos. S11 l. 115
  («definiciones versionadas de identidad, actor y ejecución») puede absorber
  la sesión en `agent-turn`, que no se leyó más allá del nombre. S08 y S11
  están fuera del alcance autorizado y se usan sólo como destino; si S08
  cambia (en curso según la decisión de la persona sobre `B001`), el hecho 3
  debe recomprobarse.
- Pregunta para resolver: ¿la sesión de S04 es una ejecución de S08 o un
  objeto con identidad propia? ¿El owner de una tarea es un `actor_id`? ¿Con
  qué evidencia demuestra una sesión nueva que es titular del ownership
  «retenido con intención de reanudar»?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [CT03](blocks/CT03.md), [CT02](blocks/CT02.md)
