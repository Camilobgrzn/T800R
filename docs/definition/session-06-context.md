# S06 — Sesión 6: contexto

Estado: `completed`. Sesión iniciada el 2026-09-17; cerrada el 2026-09-18.

### Objetivo

Definir el contrato de contexto que permita preparar material de trabajo
portable y verificable para cada tarea o capacidad, mediante un núcleo mínimo
común y secciones tipadas bajo demanda, sin seleccionar todavía representación
física, herramientas ni tecnología.

### Punto de entrada

Partir de la separación establecida en [ADR-004](../adr/ADR-004-contrato-portable-de-handoffs.md):
el context packet es un artefacto separado y referenciado desde el handoff,
aporta material de trabajo acotado y no cambia la intención, autoridad,
lifecycle, permisos ni ownership.

### Preguntas de la sesión

1. ¿Qué campos deben formar el núcleo mínimo común del contrato de contexto?
2. ¿Qué secciones tipadas deben incorporarse bajo demanda según la tarea o
   capacidad?
3. ¿Cómo se realizará el progressive disclosure sin cargar información
   irrelevante?
4. ¿Qué referencias, presupuestos y condiciones de parada permiten mantener
   contexto suficiente y verificable?
5. ¿Cómo se preservan portabilidad, validación y continuidad comunes sin fijar
   todavía la representación física, las herramientas ni la tecnología?

### Criterio de salida

Un contrato de contexto que delimite el núcleo mínimo común, las secciones
tipadas bajo demanda, sus referencias y las condiciones para descubrir material
progresivamente, manteniendo presupuestos y condiciones de parada verificables.
Debe preservar la separación de ADR-004 y no dejar ambigüedad bloqueante para
la sesión 7.

### Decisiones

| Decisión | Estado | Justificación |
| --- | --- | --- |
| El contrato de contexto tendrá un núcleo mínimo común y secciones tipadas bajo demanda según la tarea o capacidad. | `accepted` | Mantiene portabilidad entre proveedores, permite validación y continuidad comunes y evita cargar todos los contextos con información irrelevante. No selecciona todavía representación física, herramientas ni tecnología. |
| El núcleo obligatorio del context packet incluirá `schema`, `id`, `created_at`, `producer`, `consumer`, `subject`, `purpose`, `base`, `constraints`, `sources` y `manifest`. El objetivo, los criterios y la autoridad completos permanecen en sus fuentes canónicas; el packet conserva sólo una síntesis operativa y referencias. | `accepted` | Proporciona identidad, destinatario, propósito, base de revisión y continuidad, restricciones efectivas sin conceder permisos, procedencia tipada y descubrimiento progresivo, sin duplicar ni sustituir las fuentes canónicas. |
| El context packet tendrá seis tipos mínimos de secciones bajo demanda: `work`, `environment`, `knowledge`, `capabilities`, `evidence` y `coordination`. Cada sección se referenciará desde `manifest` y sólo se cargará cuando aplique su condición. La taxonomía será semántica y no dependerá de una etapa SDLC ni de un proveedor. | `accepted` | Proporciona una clasificación mínima común para descubrir material pertinente sin convertir el contrato en un flujo de etapas ni acoplarlo a proveedores. Las referencias en `manifest` permiten carga progresiva y trazable; la condición concreta de paso de disponible a cargada queda pendiente. |
| El packet inicia con el núcleo, `manifest` y sólo las secciones esenciales para comenzar. Una sección adicional se carga si la exige la tarea o capacidad; resuelve una ambigüedad que afecta la corrección; permite comprobar vigencia o evidencia; es dependencia de otra sección; o la solicita explícitamente un actor autorizado. Cada carga registra la sección, la condición activada y la revisión de la fuente. | `accepted` | Define un progressive disclosure trazable y suficiente para la corrección, la vigencia y las dependencias, sin cargar por mera disponibilidad, ampliar permisos ni sustituir la reconciliación con fuentes canónicas. |
| La reconciliación del context packet será incremental. Al iniciar o reanudar una sesión se compararán sólo los marcadores compactos aplicables —como revisión del repositorio, revisión del tracker, estado del handoff y versión de políticas o permisos—. Si coinciden, se reutilizará el packet sin releer secciones; si cambia un marcador, se revisarán sólo las referencias afectadas. Antes de una acción con efectos se validarán únicamente sus precondiciones relacionadas. El packet completo se reconstruirá sólo ante cambios críticos; la caché y las señales de invalidación serán optimizaciones, no fuentes de verdad. | `accepted` | Concreta de forma eficiente la reconciliación mínima ya exigida por [ADR-003](../adr/ADR-003-ciclo-operativo-y-coordinacion.md), preservando la comprobación contra fuentes canónicas y evitando releer material no afectado. |
| Cada referencia declarará impacto `packet`, `section` o `advisory`. Un cambio `packet` invalida el context packet y exige uno nuevo correlacionado; un cambio `section` recarga sólo la sección afectada y conserva su revisión anterior; uno `advisory` se registra y sólo se consulta si pasa a ser relevante. No habrá TTL universal: `check_after` podrá programar una comprobación, pero el tiempo por sí solo no invalidará contenido. | `accepted` | Permite aplicar la reconciliación incremental sin razonar desde cero ni reconstruir todo ante cambios locales, preservando historia y evitando caducidad arbitraria. |
| Los estados observables del context packet serán `ready`, `degraded`, `invalid` y `superseded`; no tendrá `completed`, porque no representa una obligación ni el cierre del trabajo. Los estados no conceden permisos. | `accepted` | Distingue la vigencia y utilidad del material del lifecycle del trabajo y hace explícitas las condiciones de uso, parada, reconciliación, reconstrucción y conservación histórica del packet. |
| El modelo de presupuesto y prioridades será híbrido y portable. El `manifest` clasificará el material como `required`, `relevant` u `optional` y declarará `budget_profile`. El adapter añadirá los límites y las estimaciones cuantitativas disponibles y reservará capacidad para la respuesta y las herramientas; tokens o coste no serán obligatorios en el contrato común. Ante presión, se deduplicará, resumirá y diferirá primero lo `optional` y después lo `relevant`. Nunca se omitirán silenciosamente el núcleo, las restricciones, `base` ni el material `required`; si lo obligatorio no cabe, el agente se detendrá antes de actuar y solicitará reducir el alcance, ampliar la capacidad o dividir el trabajo. | `accepted` | Combina un contrato común portable con las capacidades cuantitativas que cada adapter pueda exponer, y establece una degradación explícita que protege el contexto obligatorio antes de actuar. |
| El context packet se validará mediante cuatro capas: `structural`, `referential`, `freshness` y `sufficiency`. Un artefacto estructuralmente inválido no entra en los estados del packet y genera un diagnóstico auditable. Un packet bien formado queda `ready` si pasa todo lo requerido; queda `degraded` únicamente por faltantes `relevant` u `optional` declarados; queda `invalid` si falla el núcleo, material `required`, restricciones, contradicciones o presupuesto obligatorio. | `accepted` | Separa la conformidad formal, la resolubilidad y procedencia de las fuentes, la vigencia reconciliada y la suficiencia para actuar; hace deterministas los estados y conserva un diagnóstico trazable cuando el artefacto ni siquiera puede evaluarse como packet. |
| La carga termina cuando el material `required` está validado y no queda incertidumbre capaz de cambiar la acción o el veredicto. Sólo continúa si existe una fuente candidata autorizada y cabe en presupuesto. El trabajo se detiene si falta material `required`, existe una contradicción crítica, la base, el ownership o los permisos son ambiguos, el presupuesto obligatorio no cabe o ninguna fuente permitida resuelve una incertidumbre relevante. | `accepted` | Establece una frontera verificable para dejar de cargar contexto y evita actuar con material obligatorio ausente, autoridad o precondiciones ambiguas, contradicciones críticas o presupuesto insuficiente. |
| El contrato de contexto exigirá capacidades semánticas para reducir la salida preservando errores, estado, procedencia y acceso al contenido bruto, y para externalizar contenido grande con búsqueda, paginación o expansión bajo demanda. | `accepted` | Define el comportamiento portable que debe conservar el contrato, sin fijar una herramienta, dependencia ni nombre concreto en el núcleo. |
| RTK y Context Mode se aceptan como optimizaciones opcionales de los adapters, no como dependencias ni como nombres del contrato núcleo. | `accepted` | Pueden mejorar la realización de las capacidades semánticas, pero la compatibilidad y las mediciones deben determinar si resultan útiles para el MVP. No hay métricas actuales que justifiquen hacerlos obligatorios. |
| Hacer obligatorias RTK, Context Mode o herramientas concretas equivalentes en el núcleo actual. | `rejected` | Acoplaría el contrato a mecanismos específicos sin evidencia suficiente y contradiría la portabilidad y la separación entre semántica y representación física. |
| Seleccionar o adoptar RTK, Context Mode o un mecanismo equivalente para el MVP. | `deferred` | Se resolverá en las sesiones 8 (portabilidad) y 11 (arquitectura), según compatibilidad y mediciones; esta sesión no elige herramientas ni tecnología. |
| La identidad lógica y los aliases concretos del context packet. | `deferred` | Se resolverán en la sesión 8, al definir el contrato portable y sus adapters; la semántica del packet queda aceptada en esta sesión. |
| La sintaxis o representación de las condiciones de carga del `manifest`. | `deferred` | Se resolverá en las sesiones 8 y 11, al definir portabilidad y arquitectura; la semántica de carga bajo condición queda aceptada en esta sesión. |
| Contratos completamente independientes por tipo de trabajo. | `rejected` | Duplicarían identidad, procedencia, presupuesto y validación y dificultarían la portabilidad. |
| Un paquete único exhaustivo. | `rejected` | Introduciría sobrecarga y obsolescencia y produciría pérdida de señal. |

### Capas de validación del context packet

| Capa | Comprobación mínima |
| --- | --- |
| `structural` | Schema, campos, tipos y coherencia de `manifest`. Si falla, el artefacto no entra en los estados del packet y genera un diagnóstico auditable. |
| `referential` | Fuentes resolubles, tipadas, con revisión y procedencia. |
| `freshness` | Marcadores e impactos reconciliados incrementalmente. |
| `sufficiency` | Núcleo y material `required` suficientes; restricciones y contradicciones resueltas; presupuesto viable para la acción. |

Un packet bien formado queda `ready` si pasa todo lo requerido. Sólo queda
`degraded` por faltantes `relevant` u `optional` declarados. Queda `invalid` si
falla el núcleo, material `required`, las restricciones, las contradicciones o
el presupuesto obligatorio.

### Núcleo obligatorio del context packet

| Campo | Semántica mínima aceptada |
| --- | --- |
| `schema` | Identifica el esquema del packet. |
| `id` | Identifica el packet. |
| `created_at` | Registra cuándo se creó el packet. |
| `producer` | Identifica quién o qué produjo el packet. |
| `consumer` | Identifica el actor o la capacidad objetivo. |
| `subject` | Identifica el asunto o trabajo al que aplica. |
| `purpose` | Resume el propósito operativo del packet. |
| `base` | Referencia la revisión, el tracker y el handoff aplicables. |
| `constraints` | Sintetiza el alcance, los permisos efectivos y las políticas referenciadas, sin concederlos. |
| `sources` | Contiene referencias tipadas, con revisión y procedencia. |
| `manifest` | Describe las secciones incluidas o disponibles, con resumen, condición de carga y referencia. |

El objetivo, los criterios y la autoridad completos permanecen en sus fuentes
canónicas. El packet conserva únicamente una síntesis operativa y referencias;
no sustituye esas fuentes ni adquiere autoridad adicional por estar cargado.

### Tipos mínimos de secciones bajo demanda

| Tipo | Semántica |
| --- | --- |
| `work` | Detalle operativo, criterios, checkpoint y dependencias. |
| `environment` | Repositorio, artefactos y estado de ejecución relevante. |
| `knowledge` | Requisitos, decisiones y conocimiento de dominio. |
| `capabilities` | Skills, herramientas y procedimientos disponibles. |
| `evidence` | Pruebas, logs, hallazgos y resultados. |
| `coordination` | Owners, handoffs, trabajo relacionado y conflictos. |

Cada sección se referencia desde `manifest` y sólo se carga cuando su condición
aplica. Los tipos describen semántica, no etapas SDLC ni proveedores.

### Reglas de progressive disclosure

El packet inicia con el núcleo, `manifest` y sólo las secciones esenciales para
comenzar. Una sección adicional se carga únicamente si la exige la tarea o
capacidad, resuelve una ambigüedad que afecta la corrección, permite comprobar
vigencia o evidencia, es dependencia de otra sección o la solicita
explícitamente un actor autorizado. Cada carga registra la sección, la condición
activada y la revisión de la fuente. La disponibilidad por sí sola no justifica
una carga; cargar una sección no amplía permisos y no sustituye la
reconciliación con las fuentes canónicas.

### Presupuesto y prioridades

El contrato común usa un modelo híbrido y portable. El `manifest` clasifica cada
material como `required`, `relevant` u `optional` y declara `budget_profile`. El
adapter incorpora los límites y las estimaciones cuantitativas disponibles y
reserva capacidad para la respuesta y las herramientas; el contrato común no
exige que existan métricas de tokens o coste.

Ante presión de presupuesto, el material se deduplica, resume y difiere en este
orden: primero lo `optional` y después lo `relevant`. Nunca se omiten
silenciosamente el núcleo, las restricciones, `base` ni el material `required`.
Si lo obligatorio no cabe, el agente se detiene antes de actuar y solicita
reducir el alcance, ampliar la capacidad o dividir el trabajo.

La frontera de [ADR-004](../adr/ADR-004-contrato-portable-de-handoffs.md) se
preserva: el context packet permanece separado y referenciado desde el handoff,
aporta material acotado y no cambia intención, autoridad, lifecycle, permisos
ni ownership.

### Reconciliación incremental

Al iniciar o reanudar una sesión, T800R compara sólo los marcadores compactos
aplicables, como la revisión del repositorio, la revisión del tracker, el estado
del handoff y la versión de políticas o permisos. Si coinciden, reutiliza el
packet sin releer sus secciones. Si cambia un marcador, revisa únicamente las
referencias afectadas. Antes de una acción con efectos, valida sólo sus
precondiciones relacionadas.

El packet completo se reconstruye únicamente cuando cambia una referencia con
impacto `packet`. La caché y las señales de invalidación pueden optimizar este
proceso, pero no son fuentes de verdad: la reconciliación sigue dependiendo de
las fuentes canónicas.

### Impacto de cambios

| Impacto declarado | Efecto |
| --- | --- |
| `packet` | Se invalida el packet y se crea uno nuevo correlacionado. Aplica a cambios en base, ownership, permisos o contrato aplicable. |
| `section` | Sólo se recarga la sección afectada y se conserva la revisión anterior en la historia. |
| `advisory` | Se registra el cambio y sólo se consulta si pasa a ser relevante. |

No hay TTL universal. Un `check_after` opcional puede programar una comprobación
de marcador, pero el tiempo por sí solo no invalida contenido.

### Estados observables del context packet

| Estado | Semántica | Acciones permitidas |
| --- | --- | --- |
| `ready` | El packet bien formado pasa las cuatro capas y todo lo requerido está vigente y disponible. | Puede usarse, sujeto a los permisos reales. |
| `degraded` | El packet bien formado sólo tiene faltantes `relevant` u `optional` declarados. | Sólo permite trabajo que no dependa del material faltante u obsoleto. |
| `invalid` | El packet bien formado falla en núcleo, material `required`, restricciones, contradicciones o presupuesto obligatorio. | No permite actuar; exige reconciliar o reconstruir el packet. |
| `superseded` | Existe un packet sucesor y el anterior queda sólo para historia. | Sólo permite conservarlo como historia; no se usa para actuar. |

Estos estados describen el estado observable del packet y no conceden permisos.
Un artefacto estructuralmente inválido no entra en estos estados y genera un
diagnóstico auditable.
El packet no tendrá `completed`, porque no representa una obligación ni el cierre
del trabajo.

### Condiciones de parada y evidencia

La carga termina cuando el material `required` está validado y no queda
incertidumbre capaz de cambiar la acción o el veredicto. Sólo continúa si existe
una fuente candidata autorizada y cabe en presupuesto. El trabajo se detiene si
falta material `required`, existe una contradicción crítica, la base, el ownership
o los permisos son ambiguos, el presupuesto obligatorio no cabe o ninguna fuente
permitida resuelve una incertidumbre relevante.

Cada ensamblaje, carga, reconciliación, degradación, invalidación o reconstrucción
registra como evidencia auditable: actor, fecha, base, trigger,
referencias/revisiones, material incluido u omitido con su razón, presupuesto
aplicado, resultado y packet predecesor cuando exista.

<a id="s06-cierre"></a>

### Comprobación de cierre

El criterio de salida está cumplido: el contrato cubre núcleo, secciones,
progressive disclosure, referencias y procedencia, presupuesto, reconciliación
incremental, impactos, estados, validación, parada, evidencia y capacidades
opcionales de reducción y externalización. Se confirma la separación de
[ADR-004](../adr/ADR-004-contrato-portable-de-handoffs.md) y no quedan bloqueos para
iniciar la sesión 7. La decisión transversal del contrato portable de contexto
queda preparada para documentarse en
[ADR-005](../adr/ADR-005-contrato-portable-de-contexto.md).

