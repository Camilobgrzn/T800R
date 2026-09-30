# S05 — Sesión 5: handoffs y coordinación

Estado: `completed`. Sesión iniciada y cerrada el 2026-09-16.

### Objetivo

Definir el contrato semántico portable `handoff/v1` con el que T800R transfiere
trabajo, responsabilidad o una solicitud entre agentes, sesiones y capacidades,
sin depender del contexto conversacional ni debilitar las reglas aceptadas de
ownership, autoridad, evidencia y reconciliación.

### Punto de entrada de la sesión

Delimitar primero qué eventos requieren un handoff persistido y si asignación,
transferencia de ownership, entrega a verificación y consulta pueden representarse
como variantes explícitas de un contrato común. Esta decisión precede al detalle
de campos, validación, caducidad, aceptación y rechazo.

El handoff no sustituye las fuentes canónicas: referencia tareas, acuerdos,
revisiones y evidencia. Tampoco transfiere permisos o autoridad que el emisor no
posee. La recepción de un mensaje no autoriza escritura: deben mantenerse la
reconciliación y el ownership único definidos en la sesión 4 y ADR-003.

### Preguntas de la sesión

1. ¿Qué eventos crean obligatoriamente un handoff y cuáles pueden resolverse como
   una actualización ordinaria del tracker?
2. ¿Conviene un único contrato con tipos explícitos o contratos distintos para
   asignación, transferencia, verificación y consulta?
3. ¿Qué campos mínimos permiten al receptor comprobar intención, alcance,
   autoridad, base, estado heredado, evidencia y resultado esperado?
4. ¿Qué validaciones son estructurales y cuáles requieren reconciliación semántica
   o revisión humana?
5. ¿Cuándo un handoff vence, queda obsoleto o debe renovarse?
6. ¿Qué significan emitir, recibir, aceptar, rechazar, cancelar y completar un
   handoff, y cómo afectan al ownership y al estado de la tarea?
7. ¿Cómo se encadenan, deduplican y auditan los handoffs entre sesiones y
   proveedores sin copiar las fuentes originales?
8. ¿Qué representación y ubicación mínimas son portables, dejando adapters y
   transporte específico para las sesiones posteriores?

### Alternativas iniciales para el ámbito

| Alternativa | Beneficios | Costes y riesgos |
| --- | --- | --- |
| Handoff sólo para transferir ownership entre dos owners. | Contrato pequeño y significado inequívoco. | Deja asignación inicial, verificación y consultas sin una envoltura portable común. |
| Contrato común tipado para asignación, transferencia, verificación y consulta. | Unifica trazabilidad, correlación, estados y validación sin confundir la intención de cada variante. | Exige separar claramente los efectos de cada tipo para que recibir o aceptar no conceda ownership por accidente. |
| Contratos independientes por evento. | Cada flujo puede tener campos y estados especializados. | Duplica conceptos comunes, complica adapters y dificulta seguir una cadena entre proveedores y sesiones. |

### Decisiones

| Decisión | Estado | Justificación |
| --- | --- | --- |
| `handoff/v1` será un contrato común tipado que cubra asignación inicial, transferencia de ownership, entrega a verificación y consulta o decisión. Una actualización de estado sin receptor ni acción esperada permanece sólo en el tracker. | `accepted` | El usuario aceptó una envoltura y lifecycle comunes para mantener trazabilidad y portabilidad, distinguiendo mediante el tipo los efectos de cada evento. Evita multiplicar contratos sin convertir toda actualización operativa en un handoff. |
| Limitar `handoff/v1` exclusivamente a transferencias de ownership. | `rejected` | No cubriría de forma portable asignaciones, verificaciones ni consultas dirigidas, que también cruzan límites entre actores, sesiones o proveedores. |
| Crear contratos completamente separados por evento. | `rejected` | Duplicaría identidad, correlación, referencias, validación y estados, dificultando seguir una misma cadena de coordinación. |
| La taxonomía mínima de intención será `assignment`, `ownership_transfer`, `verification_request` y `consultation`. Aceptación, rechazo, cancelación y finalización serán transiciones o resultados del handoff, no tipos de intención adicionales. | `accepted` | El usuario eligió cuatro tipos explícitos. Separan la asignación inicial del reemplazo de un owner, la verificación independiente de la implementación y la consulta de cualquier cesión de ownership, sin multiplicar contratos de respuesta. |
| Persistir `handoff/v1` será obligatorio cuando una solicitud dirigida cruce una frontera de actor, sesión o proveedor y su respuesta condicione trabajo, ownership, validación o autorización. Dentro del mismo actor también será obligatorio si debe sobrevivir a la ejecución o conservarse para auditoría; la coordinación efímera sin esos efectos no requiere handoff. | `accepted` | El usuario eligió obligatoriedad por frontera y efecto. Conserva continuidad y trazabilidad donde otro actor debe actuar, sin convertir cada interacción interna o actualización ordinaria del tracker en un artefacto persistente. |
| En `assignment` y `ownership_transfer`, aceptar el handoff y actualizar el owner en el tracker será una única operación condicional. Sólo tendrá éxito si la revisión base, el owner esperado, el alcance de escritura y la ausencia de conflicto continúan vigentes; en caso contrario no cambia el ownership y el handoff pasa a `rejected` con `stale_or_conflicting_base`, o a `superseded` si existe un sucesor válido. | `accepted` | El usuario eligió aplicación atómica. Evita un handoff aceptado que discrepe del tracker, intervalos con dos owners y escrituras autorizadas sobre una base que cambió. La implementación del mecanismo se decidirá en arquitectura. |
| El lifecycle común será `pending → accepted → completed`, con salidas terminales `rejected`, `cancelled`, `expired` y `superseded`. En los tipos de ownership, aceptación y `completed` se registran dentro de la misma operación atómica; en `verification_request` y `consultation`, `accepted` mantiene activa la obligación hasta persistir su resultado. | `accepted` | El usuario aceptó estados comunes y duración dependiente del tipo. Preserva una cadena auditable sin confundir la transferencia, que concluye al aplicarse, con solicitudes cuyo trabajo continúa después de aceptarlas. |
| Un handoff `pending` puede ser cancelado unilateralmente por su emisor. Tras `accepted`, una verificación o consulta sólo se cancela mediante un cierre coordinado que registre razón, actor y trabajo parcial; un cambio de ownership ya `completed` no se revierte y requiere un nuevo `ownership_transfer`. | `accepted` | El usuario eligió cancelación según el compromiso asumido. Permite retirar ofertas no aceptadas sin bloquearse, pero evita descartar silenciosamente trabajo ya iniciado o reescribir la historia de ownership. |
| `expires_at` limitará únicamente hasta cuándo puede aceptarse un handoff `pending`. Después de `accepted`, una fecha `due_at` puede activar aviso, espera o escalación, pero no extingue la obligación ni libera ownership automáticamente. | `accepted` | El usuario eligió caducidad sólo para la oferta pendiente. Evita aceptar contexto viejo sin convertir el paso del tiempo en abandono, pérdida de trabajo o reasignación silenciosa. |
| `rejected` exigirá una categoría estructurada, una explicación y una próxima acción. El rechazo no cambia por sí solo el ownership ni el estado de la tarea; el orchestrator reconciliará el impacto y decidirá si corresponde corregir, reasignar, consultar o bloquear. | `accepted` | El usuario eligió un rechazo accionable. Evita negativas ambiguas y también efectos implícitos que podrían liberar trabajo o reasignarlo sin comprobar el estado real. Las categorías se fijan en este mismo contrato. |
| `superseded` reemplazará directamente sólo un handoff `pending` y deberá enlazar el sucesor. Una consulta o verificación ya aceptada requiere cierre coordinado antes de reemplazarse; un ownership completado conserva su historia y cualquier cambio requiere otro `ownership_transfer`. | `accepted` | El usuario limitó la sustitución a ofertas aún no comprometidas. Evita invalidar unilateralmente obligaciones activas o reescribir transferencias ya aplicadas. |
| `handoff/v1` se organizará como una envoltura común y un `payload` discriminado por `type`. La envoltura mantendrá identidad, actores, correlación, sujeto, base, tiempos, estado y referencias; cada payload exigirá sólo los datos propios de su intención. | `accepted` | El usuario eligió separar núcleo y variantes. Evita tanto un objeto plano lleno de campos opcionales como cuatro schemas que dupliquen identidad, lifecycle y trazabilidad. |
| La envoltura mínima tendrá `schema`, `id`, `type`, `status`, `created_at`, `sender`, `recipient`, `subject`, `base`, `authority`, `references`, `correlation` y `events`; `expires_at` y `due_at` serán condicionales. Cada evento conservará actor, fecha, transición, razón y evidencia. | `accepted` | El usuario aceptó un núcleo que permite identificar, validar vigencia y autoridad, reconciliar el estado real, seguir procedencia y auditar el lifecycle. El contenido contextual no se incorpora por defecto: se referenciará y su contrato se definirá en la sesión 6. |
| Los payloads de `assignment` y `ownership_transfer` incluirán alcance de escritura, resultado esperado, criterios de cierre, dependencias y validación. `assignment` exigirá ausencia de owner activo; `ownership_transfer` añadirá owner actual, razón, checkpoint, trabajo preservado, pendientes y evidencia vigente. | `accepted` | El usuario eligió un payload operativo que permite aceptar y continuar sin inferir estado o límites. No será un snapshot: los acuerdos y evidencias completos permanecen en sus fuentes canónicas y se enlazan desde el handoff. |
| `verification_request` exigirá revisión objetivo, criterios, evidencia, grado de independencia, permisos y resultado esperado. `consultation` exigirá pregunta o acción exacta, autoridad, motivo, consecuencias, trabajo detenido e independiente, opciones y recomendación cuando existan, y condición de resolución. | `accepted` | El usuario aceptó reutilizar los acuerdos de verificación, consultas y esperas de la sesión 4. Proporciona información accionable sin copiar requisitos o evidencia completa ni convertir el context packet en parte del handoff. |
| Antes de aceptar se aplicarán cuatro capas de validación: estructural, referencial, reconciliación de precondiciones y semántica/autoridad. La recepción por un transporte sólo acredita entrega y no equivale a validación, aceptación, permiso ni ownership. | `accepted` | El usuario eligió separar conformidad del schema, resolución de referencias, vigencia frente al estado real y juicio sobre intención y autoridad. Mantiene un núcleo portable sin delegar garantías críticas a cada adapter. |
| Un artefacto estructuralmente inválido no entrará al lifecycle y generará un diagnóstico auditable. Un handoff estructuralmente válido que falle al aceptar por referencias, precondiciones, semántica o autoridad pasará a `rejected` con categoría y explicación; sólo pasará a `superseded` si identifica un sucesor válido. | `accepted` | El usuario eligió distinguir ingestión de rechazo. Evita atribuir identidad y transiciones fiables a contenido malformado, a la vez que conserva una salida accionable para solicitudes válidas que no pueden aceptarse. |
| Los actores usarán identidad lógica portable. `sender` identificará siempre un actor concreto y su ejecución; `recipient` podrá identificar un actor concreto o un selector de rol o autoridad, pero la aceptación deberá resolverse y atribuirse a un actor concreto. Los identificadores locales de proveedor serán aliases del adapter, no identidad canónica. | `accepted` | El usuario eligió desacoplar identidad y proveedor. Permite correlacionar handoffs entre sesiones y herramientas sin perder quién asumió realmente la acción ni depender de identificadores incompatibles. |
| La taxonomía base de `rejected` será `unresolved_reference`, `stale_or_conflicting_base`, `insufficient_request`, `insufficient_authority`, `recipient_unavailable_or_ineligible` y `policy_denied`. Todo rechazo exigirá explicación y próxima acción concreta. | `accepted` | El usuario aceptó seis categorías que distinguen fuente no resoluble, divergencia del estado real, solicitud insuficiente, autoridad insuficiente, receptor inadecuado y acción prohibida. Cada rechazo queda accionable y trazable. |
| Un artefacto estructuralmente inválido, la caducidad, la cancelación y la sustitución no son categorías de rechazo: conservan respectivamente su diagnóstico o sus estados `expired`, `cancelled` y `superseded`. | `accepted` | El usuario estableció que esos casos tienen tratamiento propio y no deben mezclarse con la negativa del receptor a asumir una solicitud válida. |
| `completed` satisface la intención del handoff, pero no implica necesariamente completar una tarea o un incremento. En `assignment` exige actor concreto, ownership y alcance efectivos, revisión resultante del tracker y evidencia de la operación atómica. | `accepted` | El usuario fijó un resultado mínimo orientado a la intención coordinada y a la evidencia persistida, sin confundirla con el cierre de trabajo de mayor nivel. |
| `ownership_transfer` exige los mínimos de `assignment`, más owner anterior, checkpoint y trabajo preservado, y continuidad de pendientes. | `accepted` | El usuario exige conservar la trazabilidad del owner sustituido, el punto de reanudación y los pendientes para que la transferencia sea continuable. |
| `verification_request` se completa con revisión evaluada, cobertura de criterios, evidencia producida, hallazgos y veredicto `passed | failed | inconclusive`, con seguimiento requerido. `consultation` se completa con respuesta o decisión atribuida a la autoridad, justificación, condiciones, referencias afectadas y acción de seguimiento. Verificación y consulta completan al persistir el resultado; aplicar consecuencias corresponde después a reconciliación operativa. | `accepted` | El usuario separó la persistencia del resultado de la aplicación posterior de sus consecuencias, preservando la atribución, la cobertura y la reconciliación con el estado real. |
| Las transiciones permitidas desde `pending` serán `accepted`, `rejected`, `cancelled`, `expired` o `superseded`; en ownership, `accepted` y `completed` se registrarán atómicamente. Desde `accepted` sólo se permitirá `completed` o `cancelled` coordinado. Los estados terminales serán inmutables y una transición no permitida no alterará el estado. | `accepted` | El usuario eligió una matriz cerrada para impedir rutas inventadas por adapters y conservar historia. Reintentar, corregir, reasignar o revertir requiere otro handoff correlacionado. |
| La identidad, intención y contenido emitido de un handoff serán inmutables. Estado, eventos y resultado sólo crecerán mediante operaciones válidas. Reentregar el mismo `id` y contenido será idempotente; reutilizar el `id` con contenido base distinto será un conflicto de integridad que no se ingiere ni modifica el original. | `accepted` | El usuario eligió deduplicación portable y procedencia auditable entre transportes. Toda corrección o renovación se expresa con un nuevo handoff correlacionado. |
| El transporte sólo entregará, reintentará y aportará metadatos diagnósticos; el context packet será un artefacto separado y referenciado que aporta material acotado. Ninguno cambiará lifecycle, autoridad, permisos u ownership. | `accepted` | El usuario preservó `handoff/v1` como contrato semántico independiente de mecanismos de entrega y de contenido de trabajo regenerable. |
| La recuperación partirá del handoff y de las fuentes canónicas: un `pending` vigente puede reentregarse; uno vencido requiere otro handoff; una verificación o consulta `accepted` se reanuda o cancela coordinadamente antes de reemplazarse; un ownership completado sólo cambia mediante otro `ownership_transfer`. Ante estado ambiguo no se autoriza escritura. | `accepted` | El usuario mantuvo continuidad sin interpretar la pérdida de una sesión o transporte como abandono, liberación de ownership o extinción de obligaciones. |

### Identidad de actores

Una referencia de actor distingue identidad lógica, tipo de actor y ejecución o
sesión aplicable. Los metadatos locales de Codex, Claude Code u OpenCode pueden
permitir entrega y diagnóstico, pero no sustituyen la identidad canónica. Si el
destinatario se expresó mediante un selector, el evento de aceptación registra
su resolución al actor concreto y la evidencia de que satisface el rol o la
autoridad requeridos.

### Envoltura común mínima

| Campo | Semántica mínima |
| --- | --- |
| `schema` | Identificador y versión del contrato: `handoff/v1`. |
| `id` | Identidad global estable del handoff, independiente del transporte. |
| `type` | Una de las cuatro intenciones aceptadas. Discrimina el `payload`. |
| `status` | Estado observable conforme al lifecycle común. |
| `created_at` | Momento de emisión; no demuestra vigencia por sí solo. |
| `expires_at` | Límite condicional para aceptar una oferta `pending`. |
| `due_at` | Expectativa condicional de respuesta tras aceptar; no extingue obligaciones. |
| `sender` | Referencia estable al actor emisor y a su ejecución o sesión cuando corresponda. |
| `recipient` | Actor o autoridad destinataria identificable; no implica aceptación. |
| `subject` | Referencia tipada a la tarea, incremento, decisión, revisión u objeto afectado. |
| `base` | Revisión, checkpoint, estado y owner esperados sobre los que se emitió. |
| `authority` | Referencias que justifican solicitar o aplicar la acción y autoridad requerida del receptor. |
| `references` | Enlaces tipados a acuerdos, tracker, evidencia y otras fuentes canónicas; no copias con autoridad propia. |
| `correlation` | Relación con handoffs previos, padre, sucesor o solicitud originaria. |
| `events` | Historia de actor, fecha, transición, razón y evidencia del lifecycle. |

### Payloads de ownership

| Tipo | Campos mínimos propios |
| --- | --- |
| `assignment` | `write_scope`, `expected_result`, `completion_criteria`, `dependencies`, `validation`; la precondición de `base` declara que no existe owner activo. |
| `ownership_transfer` | Los campos de `assignment`, más `current_owner`, `transfer_reason`, `checkpoint`, `preserved_work`, `remaining_work` y `validation_state`; `base` identifica el ownership y la revisión que deben seguir vigentes al aceptar. |

### Payloads de verificación y consulta

| Tipo | Campos mínimos propios |
| --- | --- |
| `verification_request` | `target_revision`, `verification_criteria`, `evidence_refs`, `independence`, `permissions`, `expected_verdict`. Los permisos no conceden escritura por omisión ni sustituyen runtime/policy. |
| `consultation` | `request`, `authority`, `reason`, `consequences`, `stopped_work`, `independent_work`, `options`, `recommendation`, `resolution_condition`. `options` y `recommendation` pueden no aplicar si no existen alternativas honestas. |

### Capas de validación

| Capa | Comprobaciones mínimas |
| --- | --- |
| Estructural | Versión soportada, tipos, enumeraciones, campos condicionales, tiempos y transición permitida. |
| Referencial | Sujeto y referencias resolubles, tipados y correspondientes a las fuentes declaradas. |
| Reconciliación | Revisión, checkpoint, estado, owner, alcance, conflictos y vigencia de evidencia contrastados con el repositorio y tracker reales. |
| Semántica y autoridad | Intención coherente, información suficiente, criterios aplicables y autoridad y permisos efectivos para solicitar, aceptar y ejecutar la acción. Incluye revisión humana cuando los acuerdos la exijan. |

Las capas aplicables se repiten al aceptar; haber entregado o validado antes un
handoff no demuestra que sus precondiciones sigan vigentes.

### Categorías de rechazo

| Categoría | Semántica mínima |
| --- | --- |
| `unresolved_reference` | La fuente referenciada no puede resolverse. |
| `stale_or_conflicting_base` | El estado real diverge de la base o entra en conflicto con ella. |
| `insufficient_request` | El alcance, los criterios o los datos de la solicitud son insuficientes. |
| `insufficient_authority` | El emisor o el receptor no tiene la autoridad requerida. |
| `recipient_unavailable_or_ineligible` | La capacidad, independencia o disponibilidad del receptor es inadecuada. |
| `policy_denied` | La acción está prohibida por política o por riesgo. |

Cada `rejected` conserva la categoría, una explicación y una próxima acción
concreta. Un artefacto estructuralmente inválido, `expired`, `cancelled` y
`superseded` mantienen su tratamiento propio y no se clasifican como rechazo.

### Lifecycle inicial

- `pending`: emitido y dirigido, aún sin compromiso del receptor ni efecto sobre
  ownership.
- `accepted`: el receptor asumió la solicitud; sólo permanece observable en este
  estado mientras exista trabajo de verificación o consulta pendiente.
- `completed`: se produjo el efecto o resultado esperado y quedó persistido con
  sus referencias y evidencia.
- `rejected`: el receptor no asume la solicitud y registra una razón accionable.
- `cancelled`: la solicitud fue retirada según el compromiso asumido: unilateral
  mientras está `pending` y coordinadamente después de `accepted`.
- `expired`: venció antes del punto permitido por la política de caducidad.
- `superseded`: otro handoff identificado lo reemplaza y conserva la cadena.

Las transiciones y sus eventos se conservan aunque una operación atómica de
ownership haga que el estado observable pase de `pending` a `completed` en una
sola transacción.

#### Matriz de transiciones

| Estado actual | Transiciones permitidas | Regla adicional |
| --- | --- | --- |
| `pending` | `accepted`, `rejected`, `cancelled`, `expired`, `superseded` | En `assignment` y `ownership_transfer`, los eventos de aceptación y `completed` forman parte de la misma operación atómica. |
| `accepted` | `completed`, `cancelled` | `cancelled` exige cierre coordinado; no se permite rechazo, caducidad ni sustitución tardíos. |
| Estado terminal | Ninguna | Reintentar, corregir, reasignar o revertir exige un nuevo handoff correlacionado. |

Una transición no permitida produce un diagnóstico auditable y no modifica el
estado. Los estados terminales son inmutables.

### Integridad, deduplicación y referencias

Tras emitir, permanecen inmutables `schema`, `id`, `type`, `sender`, `recipient`,
`subject`, `base`, `authority`, `references`, `correlation` y `payload`. El estado,
los eventos y el resultado sólo crecen mediante transiciones válidas. Una entrega
repetida con el mismo `id` y contenido es idempotente y no crea otro handoff ni
duplica eventos. El mismo `id` con contenido base distinto es un conflicto de
integridad: no se ingiere ni altera el original y genera un diagnóstico auditable.

Corregir, renovar o reintentar una solicitud exige un identificador nuevo y una
relación tipada con el handoff anterior. Las referencias siguen apuntando a las
fuentes canónicas; no convierten sus copias o material transportado en autoridad.

### Separación y recuperación

- El transporte entrega, reintenta y conserva metadatos diagnósticos. Un acuse de
  entrega no cambia el lifecycle ni demuestra aceptación, autoridad, permisos u
  ownership.
- El context packet es un artefacto separado y referenciado que aporta material de
  trabajo acotado. Puede regenerarse sin cambiar la intención del handoff y no
  concede autoridad ni permisos.
- Un handoff `pending` y vigente puede reentregarse idempotentemente. Si expiró,
  renovarlo requiere otro handoff correlacionado.
- Una verificación o consulta `accepted` sobrevive a la sesión: se reanuda o se
  cancela coordinadamente antes de crear un reemplazo.
- Un ownership ya completado se recupera reconciliando handoff, tracker y
  repositorio. Sólo otro `ownership_transfer` puede cambiarlo y, ante ambigüedad,
  no se autoriza escritura.

### Semántica inicial de los tipos

| Tipo | Intención | Efecto que no debe inferirse por la mera emisión o recepción |
| --- | --- | --- |
| `assignment` | Proponer a un receptor como owner inicial de una tarea sin owner activo. | No concede ownership hasta que se completen la aceptación y reconciliación exigidas. |
| `ownership_transfer` | Sustituir el owner activo por un sucesor explícito, preservando estado y trabajo. | No libera al owner actual ni autoriza al sucesor a escribir antes de completar la transferencia. |
| `verification_request` | Solicitar evaluación del resultado y su evidencia con el grado de independencia requerido. | No transfiere ownership de implementación ni autoriza al verifier a modificar el resultado salvo asignación separada. |
| `consultation` | Solicitar información, decisión, revisión humana o permiso a una autoridad identificada. | No transfiere ownership, permisos ni autoridad; la respuesta debe aplicarse después al estado y las dependencias afectadas. |

### Resultado mínimo de `completed`

`completed` satisface la intención del handoff; no completa necesariamente una
tarea o un incremento.

| Tipo | Resultado mínimo persistido |
| --- | --- |
| `assignment` | Actor concreto, ownership y alcance efectivos, revisión resultante del tracker y evidencia de la operación atómica. |
| `ownership_transfer` | Lo anterior, más owner anterior, checkpoint, trabajo preservado y continuidad de pendientes. |
| `verification_request` | Revisión evaluada, cobertura de criterios, evidencia producida, hallazgos y veredicto `passed \| failed \| inconclusive`, con seguimiento requerido. |
| `consultation` | Respuesta o decisión atribuida a la autoridad, justificación, condiciones, referencias afectadas y acción de seguimiento. |

La verificación y la consulta completan al persistir el resultado. La aplicación
de sus consecuencias corresponde después a la reconciliación operativa.

### Criterio de salida

Un contrato `handoff/v1` que defina ámbito, variantes, campos mínimos, referencias,
identidad y autoridad, estados y transiciones, validación, caducidad, aceptación,
rechazo, cancelación, transferencia y recuperación. Debe preservar ownership único,
reconciliación con el estado real, fuentes canónicas y evidencia; distinguir el
handoff del transporte y del context packet; y no dejar ambigüedades bloqueantes
para definir el contrato de contexto en la sesión 6.

<a id="s05-cierre"></a>

### Comprobación de cierre

El criterio de salida está cumplido. `handoff/v1` define ámbito, variantes,
envoltura y payloads mínimos, identidad y autoridad, referencias, validación,
resultados, categorías de rechazo, lifecycle y matriz de transiciones. La
auditoría final confirmó que:

- el ownership permanece único y sólo cambia mediante una operación atómica y
  reconciliada con tracker y repositorio;
- entrega, ingestión, validación, aceptación y finalización son hechos distintos;
- identidad y contenido emitido son inmutables, las reentregas son idempotentes y
  los conflictos de integridad no alteran el original;
- la recuperación preserva historia, trabajo y obligaciones y no infiere abandono
  por pérdida de sesión o paso del tiempo; y
- el transporte y el context packet quedan separados del contrato semántico sin
  dejar bloqueos para definir el contexto en la sesión 6.

La decisión transversal se conserva además en
[ADR-004](../adr/ADR-004-contrato-portable-de-handoffs.md). La siguiente sesión
definirá progressive disclosure, context packet, referencias, presupuestos y
condiciones de parada sin seleccionar todavía tecnología o adapters.

