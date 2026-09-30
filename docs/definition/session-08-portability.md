# S08 — Sesión 8: portabilidad

Estado: `completed`. Sesión iniciada el 2026-09-21 y cerrada el 2026-09-22.

### Objetivo

Definir el contrato portable común entre Codex, Claude Code y OpenCode, las
capacidades mínimas exigibles, las responsabilidades de los adapters y las reglas
de degradación explícita. Debe completar la identidad lógica portable y su mapeo
a aliases de proveedor y a la identidad por ruta de OKF, preservando los contratos
aceptados de ciclo operativo, handoffs, contexto y conocimiento.

No corresponde todavía seleccionar representación física, rutas, almacenamiento,
tecnología, mecanismos de búsqueda ni la arquitectura del MVP.

### Punto de entrada

Delimitar primero la frontera entre garantías del contrato común y capacidades
propias de cada adapter. El núcleo debe expresar semántica observable y
verificable sin asumir que los tres proveedores ofrecen las mismas primitivas;
el adapter puede traducir, emular o declarar ausente una capacidad, pero no
alterar silenciosamente lifecycle, autoridad, ownership, procedencia o
condiciones de parada.

### Preguntas de la sesión

1. ¿Qué garantías pertenecen al contrato común y cuáles son responsabilidad del
   adapter?
2. ¿Qué capacidades mínimas debe ofrecer una integración para considerarse
   compatible con T800R?
3. ¿Cómo se declara, negocia y evidencia una capacidad nativa, emulada o ausente?
4. ¿Qué degradaciones permiten continuar y cuáles deben detener el trabajo?
5. ¿Cómo se representan la identidad lógica, las ejecuciones y los aliases de
   proveedor sin confundir actor, rol, sesión o credencial?
6. ¿Cómo se mapea la identidad portable del conocimiento a la identidad basada en
   ruta de OKF sin fijar todavía rutas físicas?
7. ¿Cómo se proyectan instrucciones, skills, herramientas, subagentes y límites
   de contexto en cada proveedor sin convertir sus extensiones en contrato común?
8. ¿Qué evidencia permitirá demostrar compatibilidad del MVP con los tres
   proveedores?

### Criterio de salida

La sesión termina cuando exista una especificación lógica de adapters que defina
la frontera entre núcleo y proveedor, capacidades mínimas, manifest de
capacidades, identidad y aliases, traducción de contratos, degradación, parada y
el contrato de evidencia de conformidad para Codex, Claude Code y OpenCode. En
esta sesión, “manifest de capacidades” se concreta como descriptor versionado más
snapshot efectivo; la ejecución de conformidad corresponde a la sesión 12 sobre
adapters construidos tras autorizar la fase. Debe preservar los acuerdos de las
sesiones 4 a 7 y dejar para arquitectura sólo representación física, tecnología y
mecanismos concretos de ejecución.

### Decisiones

| Tema | Estado | Decisión y justificación |
| --- | --- | --- |
| Frontera entre núcleo y adapters | `accepted` | T800R adopta un contrato de capacidades semánticas. El núcleo define invariantes, precondiciones, resultados observables, evidencia y condiciones de parada independientes del proveedor; cada adapter traduce esas exigencias a Codex, Claude Code u OpenCode y declara cada capacidad como nativa, emulada o ausente. Una emulación debe conservar la misma semántica y aportar evidencia equivalente; una ausencia activa degradación o parada explícita y nunca permite inventar cumplimiento. Esta frontera conserva los contratos aceptados sin imponer primitivas idénticas. |
| Limitar el núcleo a intercambio de artefactos | `rejected` | Leer y escribir artefactos comunes no basta para comprobar ejecución, reconciliación, permisos, continuidad y degradación conforme a los contratos aceptados. Trasladaría garantías críticas a comportamiento no comparable de cada adapter. |
| Exigir una API operacional idéntica a los tres proveedores | `rejected` | Confundiría uniformidad de interfaz con equivalencia semántica, forzaría emulaciones opacas y acoplaría el núcleo a primitivas particulares o al mínimo común accidental de los proveedores. |
| Modelo de compatibilidad | `accepted` | La compatibilidad combina un baseline obligatorio con perfiles opcionales. Un adapter sólo es compatible con T800R si satisface todo el baseline; una tarea puede exigir además uno o más perfiles y sólo puede asignarse a un adapter que los satisfaga. Las capacidades sueltas continúan declarándose para diagnóstico y selección, pero no sustituyen el mínimo global. Esto preserva un significado común de compatibilidad sin volver obligatorias capacidades avanzadas para todo trabajo. |
| Baseline único que incluya todas las capacidades avanzadas | `rejected` | Excluiría integraciones válidas para tareas básicas y convertiría diferencias no esenciales, como recuperación semántica o subagentes nativos, en falsos incumplimientos del contrato común. |
| Matriz de capacidades sin baseline global | `rejected` | Haría posible llamar compatible a un adapter incapaz de preservar identidad, contratos, reconciliación o evidencia, vaciando de significado la compatibilidad del MVP. |
| Capacidades del baseline | `accepted` | Todo adapter compatible debe satisfacer siete capacidades semánticas: intercambio y validación de contratos; identidad, aliases y correlación; resolución de referencias y reconciliación con fuentes; entrega progresiva de contexto y declaración de límites; mediación de acciones y herramientas dentro de restricciones efectivas; persistencia de estado y resultados entre ejecuciones; y evidencia, errores y diagnóstico con procedencia. El baseline cubre el ciclo portable mínimo sin exigir subagentes, skills, recuperación semántica ni optimizaciones concretas. |
| Perfiles opcionales iniciales | `accepted` | T800R define `delegation`, `isolated_execution`, `portable_skills` y `semantic_retrieval`. Una tarea declara los perfiles que requiere y no se asigna a un adapter que no pueda satisfacerlos de forma nativa o mediante una emulación conforme. Herramientas, modelos y límites concretos son requisitos atómicos de la tarea y no perfiles nuevos. Los perfiles agrupan resultados semánticos, no productos ni tecnologías. |
| Declaración de capacidades en dos capas | `accepted` | Cada versión de adapter publica un descriptor versionado de soporte potencial y cada ejecución produce un snapshot efectivo correlacionado con ese descriptor. El descriptor permite descubrimiento y validación previa; el snapshot incorpora configuración, límites, permisos y entorno observados. La asignación y la actuación se deciden por el snapshot vigente, no sólo por lo que el adapter declara estáticamente. |
| Manifest estático como única evidencia | `rejected` | No detecta capacidades deshabilitadas o limitadas por configuración, permisos, versión del proveedor o entorno de una ejecución concreta. |
| Sondeo runtime sin descriptor estable | `rejected` | Obliga a redescubrir todo, impide validar compatibilidad antes de ejecutar y dificulta atribuir regresiones a una revisión concreta del adapter. |
| Realización separada de verificación | `accepted` | Cada capacidad conserva realización `native`, `emulated` o `absent` y declara por separado verificación `verified`, `unverified` o `stale`. Los límites se expresan como restricciones estructuradas, no como un estado `partial`. Una capacidad no satisface un requisito si está ausente, no está verificada o sus restricciones no cubren las condiciones de la tarea. `stale` exige reconciliar sólo los marcadores afectados antes de decidir. |
| Añadir `partial` y `unknown` como realizaciones | `rejected` | Mezclaría cómo se realiza una capacidad con sus límites y con la falta de evidencia, haciendo ambigua la comparación entre requisitos y soporte efectivo. |
| Reducir soporte a disponible o no disponible | `rejected` | Ocultaría emulación, restricciones, vigencia y evidencia necesarias para degradar o detenerse de forma auditable. |
| Equivalencia de realizaciones conformes | `accepted` | Una realización `native` y una `emulated` son igualmente elegibles cuando están verificadas y satisfacen las mismas restricciones semánticas y no funcionales. La selección puede ordenar fiabilidad, coste, latencia, límites o calidad de evidencia medidos, pero no favorece por sí sola la etiqueta `native`. Si una diferencia importa para la tarea, se expresa como requisito observable y no como preferencia por la implementación. |
| Preferencia incondicional por realización nativa | `rejected` | Confundiría mecanismo con calidad y podría elegir una primitiva nativa peor comprobada o menos adecuada que una emulación conforme. |
| Permitir que una tarea exija `native` sin otra condición | `rejected` | Acoplaría requisitos portables a detalles del proveedor sin identificar la propiedad semántica o no funcional realmente necesaria. |
| Criticidad de requisitos de capacidad | `accepted` | Los requisitos usan `required`, `relevant` y `optional`, con la misma semántica de degradación del context packet. Todo el baseline es siempre `required`. La falta de una capacidad o perfil `required` impide esa asignación; la falta de uno `relevant` sólo permite trabajo explícitamente independiente y deja la ejecución degradada; la falta de uno `optional` se registra y puede omitirse. La tarea fija la criticidad y el adapter no puede rebajarla. |
| Clasificación binaria obligatoria u opcional | `rejected` | No distinguiría una ausencia que limita parte del trabajo de otra que puede omitirse sin afectar acción ni veredicto. |
| Delegar la decisión de degradación al adapter | `rejected` | Haría variar las garantías por proveedor y permitiría continuar sin una decisión portable, trazable y reconciliada con los requisitos de la tarea. |
| Recuperación ante falta de capacidad `required` | `accepted` | T800R intenta, en orden: reconciliar o verificar el snapshot; seleccionar otro adapter elegible; descomponer el trabajo únicamente si preserva intención, criterios, dependencias y ownership; y, si no existe vía válida, emitir una consulta o declarar bloqueo según la autoridad requerida. El requisito no se rebaja ni se sustituye silenciosamente. El trabajo independiente puede continuar conforme a ADR-003. |
| Descomponer antes de buscar un adapter elegible | `rejected` | Transformaría innecesariamente el trabajo y aumentaría coordinación y riesgo cuando otra integración ya puede satisfacer el contrato original. |
| Consultar inmediatamente sin recuperación automática | `rejected` | Reduciría la autonomía acordada aun cuando reconciliar, reasignar o dividir de forma segura pueda resolver la ausencia sin cambiar acuerdos. |
| Identidad separada de actor y ejecución | `accepted` | `actor_id` identifica de forma lógica y estable al actor a través de proveedores y reanudaciones; `execution_id` identifica una ejecución concreta e inmutable. El rol, la autoridad o un selector son atributos o criterios de resolución y no identidad. Los identificadores de Codex, Claude Code y OpenCode son aliases acotados del actor o la ejecución y nunca sustituyen los identificadores canónicos. |
| Usar sólo la ejecución como identidad canónica | `rejected` | Rompería continuidad, atribución y correlación al reanudar o cambiar de proveedor, y confundiría un actor con uno de sus procesos temporales. |
| Usar el rol como identidad | `rejected` | Un rol puede cambiar de ocupante y un actor puede desempeñar varios roles; usarlo como identidad permitiría atribución ambigua y aceptación por un sujeto distinto. |
| Aliases acotados y versionados | `accepted` | Un alias declara proveedor, adapter y revisión, ámbito de instalación o proyecto, identificador local, objetivo `actor_id` o `execution_id`, vigencia y evidencia de vinculación. Sólo se resuelve cuando el mapeo aplicable es único y vigente. Una ambigüedad, reutilización o conflicto no se resuelve por nombre, rol o modelo: genera diagnóstico y detiene la acción afectada hasta reconciliar. |
| Presuponer aliases globales y permanentes por proveedor | `rejected` | Los identificadores pueden ser locales, reutilizables o depender de cuenta, instalación y sesión; tratarlos como globales produciría colisiones y atribución incorrecta. |
| Inferir identidad por nombre, rol o modelo | `rejected` | Esas propiedades no son únicas ni estables y no demuestran continuidad, aceptación ni autoridad del actor. |
| Identidad dual para conocimiento y OKF | `accepted` | Cada entrada tiene un `knowledge_id` lógico estable de T800R y, por revisión, una identidad OKF formada por `bundle_id` y ruta lógica conforme a OKF v0.2. Mover una entrada cambia su identidad OKF y registra una relación explícita de sucesión, pero puede conservar `knowledge_id` si la curación confirma que sigue siendo la misma entrada y mantiene continuidad semántica. Divisiones, fusiones o sustituciones no reutilizan identidad sin registrar nuevas entradas y relaciones. |
| Usar la ruta OKF como única identidad portable | `rejected` | Haría que una reorganización editorial rompiera toda continuidad de T800R o exigiera fingir que OKF no cambió de identidad al cambiar la ruta. |
| Derivar identidad del contenido | `rejected` | Convertiría cada edición en una identidad nueva, confundiría identidad con revisión y dificultaría seguir lifecycle, curación y referencias. |
| Resolución explícita de referencias de conocimiento | `accepted` | Una referencia declara intención `exact` o `current`. `exact` resuelve la revisión y la identidad OKF históricas y no sigue movimientos; `current` resuelve el `knowledge_id` hasta su revisión vigente y registra la cadena de identidades OKF y sucesiones recorrida. Ninguna modalidad omite la reconciliación de fuentes, frescura y aplicabilidad, y un sucesor no hereda autoridad por redirección. |
| Redirigir siempre a la ruta vigente | `rejected` | Ocultaría qué contenido se citó originalmente y podría sustituir evidencia o significado sin que el consumidor lo detecte. |
| Invalidar toda referencia tras un movimiento | `rejected` | Perdería trazabilidad histórica y continuidad aunque la identidad exacta siga siendo resoluble y exista una sucesión explícita. |
| Perfil T800R compatible con Agent Skills | `accepted` | `portable_skills` usa el núcleo común de Agent Skills para nombre, descripción, instrucciones y recursos, y añade un perfil lógico T800R con identidad y revisión estables, activación, entradas, resultados, fuentes y requisitos de ejecución. Las extensiones de Codex, Claude Code u OpenCode se mantienen namespaced; el adapter declara cuáles interpreta, ignora o emula. Ninguna extensión concede permisos, autoridad ni cambia silenciosamente el contrato común. |
| Adoptar sólo el mínimo de Agent Skills | `rejected` | Nombre, descripción y cuerpo libre no bastan para seleccionar, validar y auditar activación, entradas, resultados, procedencia y requisitos de ejecución de forma portable. |
| Definir un contrato de skills independiente de Agent Skills | `rejected` | Desaprovecharía el formato común documentado por los tres proveedores y obligaría a mantener conversiones innecesarias como modelo principal. |
| Proyección de instrucciones desde un conjunto lógico | `accepted` | T800R resuelve antes de ejecutar las referencias de instrucciones aplicables, sus revisiones, ámbitos, criterios de autoridad y precedencia. El adapter proyecta ese conjunto mediante mecanismos nativos o contexto emulado y registra fuente, orden efectivo, transformación, inclusión y omisión. `AGENTS.md`, `CLAUDE.md` u otra configuración sólo tienen la autoridad que declare el registro de fuentes; una copia o wrapper derivado no adquiere autoridad independiente. |
| Mantener copias autoritativas por proveedor | `rejected` | Crearía fuentes competidoras y riesgo de divergencia, obligando a sincronizar significado entre archivos específicos en vez de referenciar originales. |
| Aceptar la precedencia nativa de cada proveedor como semántica común | `rejected` | Haría que una misma tarea recibiera reglas efectivas distintas por diferencias de descubrimiento y orden de carga no gobernadas por T800R. |
| Estado canónico con proyecciones de proveedor | `accepted` | `handoff/v1`, context packets, conocimiento, skills, instrucciones y sus eventos conservan la semántica completa en los contratos T800R. El adapter genera una proyección acotada para el proveedor y registra las pérdidas o transformaciones; captura la salida bruta y la normaliza como resultado o evento candidato. Sólo la validación y reconciliación comunes pueden aplicar una transición canónica. Una vista, mensaje, sesión o acuse del proveedor no se vuelve coautoritativo. |
| Estado T800R y estado del proveedor coautoritativos | `rejected` | Introduciría conflictos de sincronización y permitiría que señales locales alteraran lifecycle, ownership o aceptación sin pasar por las reglas comunes. |
| Reducir los contratos al mínimo representable nativamente por todos | `rejected` | Eliminaría garantías necesarias por limitaciones accidentales de un proveedor aunque el adapter pueda preservarlas fuera de su estado nativo. |
| Evidencia de conformidad por capas | `accepted` | La compatibilidad del baseline exige evidencia estructural de schemas y fixtures, pruebas conductuales de las siete capacidades, integración real contra una versión y configuración soportadas del proveedor, y escenarios de degradación, recuperación y continuidad. Cada perfil opcional se certifica por separado. Toda evidencia se vincula a revisión del adapter, proveedor, configuración, contratos y resultados; documentación o una única tarea exitosa no bastan. |
| Aceptar una declaración documental como conformidad | `rejected` | La documentación describe primitivas potenciales, pero no demuestra traducción, restricciones efectivas, persistencia, fallos ni invariantes del adapter integrado. |
| Certificar sólo mediante una prueba extremo a extremo | `rejected` | Un éxito aislado no localiza qué capacidades se comprobaron ni cubre rechazo, degradación, reanudación o conflictos necesarios para confiar en el contrato. |
| Reservar “compatible” para conformidad verificada | `accepted` | La evidencia documental permite declarar un proveedor `target` y un adapter `candidate`, pero no compatibilidad. Sólo una revisión que supera las cuatro capas del baseline puede declararse `compatible`; cada perfil se publica por separado como verificado o no verificado, con proveedor, versión, configuración, límites y evidencia. Verificar un proveedor no permite inferir conformidad de otro. |
| Declarar compatibilidad provisional por documentación | `rejected` | Confundiría disponibilidad potencial de primitivas con preservación probada de contratos y recuperación en la integración real. |
| Inferir compatibilidad entre proveedores de la misma familia | `rejected` | Cada proveedor difiere en identidad, instrucciones, permisos, herramientas, contexto y continuidad; la evidencia no es transferible sin ejecutar el adapter correspondiente. |
| Vigencia de conformidad por impacto | `accepted` | Descriptor, snapshot y evidencia declaran marcadores y capacidades o perfiles dependientes. Cambios en contrato, adapter, proveedor, configuración, política o entorno vuelven `stale` sólo la evidencia afectada y exigen repetir sus capas aplicables. No existe TTL universal; `check_after` programa revisión sin invalidar por sí mismo. Una falla observada invalida de inmediato el alcance relacionado, pero no es necesario esperar un fallo para detectar cambios. |
| Caducidad periódica universal de conformidad | `rejected` | Repetiría pruebas sin relación con cambios reales y no garantiza detectar a tiempo una modificación ocurrida antes del plazo. |
| Mantener conformidad hasta que falle una tarea real | `rejected` | Permitiría seguir asignando trabajo con evidencia conocida como obsoleta y convertiría producción en el mecanismo de detección. |
| Condiciones declarativas de carga | `accepted` | Las condiciones del `manifest` son predicados sin efectos sobre hechos portables y verificables: requisitos de tarea o capacidad, ambigüedad relevante, vigencia o evidencia, dependencia de otra sección y solicitud de un actor autorizado. Evalúan `true`, `false` o `unknown` y registran hechos, revisiones y resultado. No ejecutan código ni dependen de sintaxis o estado privado del proveedor; la sintaxis y el evaluador se decidirán en arquitectura. |
| Condiciones definidas por cada adapter | `rejected` | Producirían cargas y paradas distintas ante el mismo packet y volverían incomparables la suficiencia y la evidencia. |
| Condiciones en prosa sin resultado estructurado | `rejected` | Impedirían distinguir activación, no aplicabilidad e incertidumbre, y no ofrecerían una base auditable para presupuesto o parada. |
| Mantener mecanismos concretos como candidatos opcionales | `accepted` | RTK y Context Mode pueden ser realizaciones de reducción o externalización de contexto; Hindsight, de `semantic_retrieval`; y worktrees, de `isolated_execution`. No cambian el baseline ni los perfiles, no son dependencias del núcleo y no quedan incorporados ni excluidos del MVP en esta sesión. Su adopción se decide en arquitectura y su valor se comprueba en validación, con evidencia y métricas frente a alternativas. |
| Hacer obligatorios RTK, Context Mode, Hindsight o worktrees | `rejected` | No existe conformidad ni medición suficiente para ligar las garantías portables a esos mecanismos y algunos no tienen soporte equivalente documentado en los tres proveedores. |
| Excluir anticipadamente esos mecanismos del MVP | `rejected` | Son candidatos plausibles para realizar capacidades aceptadas y pueden evaluarse sin convertirlos en semántica canónica. |
| Contrato de conformidad en sesión 8 y ejecución en sesión 12 | `accepted` | La sesión 8 define capacidades, casos, evidencia y estados `target`, `candidate` y `compatible`; la sesión 12 ejecutará las cuatro capas sobre adapters construidos después de autorizar construcción. Exigir pruebas ahora requeriría un spike no necesario y mezclaría definición con validación; aceptar documentación como prueba produciría una afirmación falsa. |

### Baseline de compatibilidad

| Capacidad | Resultado observable mínimo |
| --- | --- |
| Contratos | Ingerir, validar y emitir las versiones comunes aplicables sin cambiar su semántica; rechazar versiones o transiciones no soportadas con diagnóstico. |
| Identidad y correlación | Resolver actor, rol o selector a identidad lógica y ejecución concretas, conservar aliases locales y correlacionar artefactos sin usar el identificador del proveedor como identidad canónica. |
| Referencias y reconciliación | Resolver referencias tipadas y sus revisiones, comparar los marcadores aplicables y detener efectos cuando base, ownership, autoridad o vigencia no puedan comprobarse. |
| Contexto y límites | Entregar núcleo y material `required`, activar progressive disclosure, declarar los límites cuantitativos disponibles y aplicar presupuesto y parada sin omisiones silenciosas. La reducción y externalización exigidas por ADR-005 preservan errores, estado, procedencia y acceso al contenido bruto. |
| Acciones y herramientas | Mediar las acciones necesarias dentro de restricciones y permisos efectivos, distinguir disponibilidad de autorización y registrar resultados y efectos reales. Los controles concretos se definirán en la sesión 9. |
| Continuidad durable | Leer y persistir el estado, los eventos y los resultados requeridos para reanudar otra ejecución sin depender del historial conversacional del proveedor. |
| Evidencia y diagnóstico | Conservar estado, errores, procedencia y acceso al contenido bruto o a su referencia; producir evidencia suficiente para auditar capacidad, degradación y resultado. |

Estas capacidades son obligaciones de resultado del adapter integrado con T800R,
no una asignación prematura de módulos. Que una parte sea realizada por el
proveedor, el adapter o el núcleo se decidirá en arquitectura; la conformidad debe
observarse en el límite del adapter y no puede depender de una intervención manual
no declarada.

### Perfiles opcionales

| Perfil | Resultado observable mínimo | No implica |
| --- | --- | --- |
| `delegation` | Crear o seleccionar actores subordinados, atribuir cada ejecución, dirigirles contexto y handoffs aplicables, recoger resultados y reanudar o cerrar obligaciones sin perder correlación. | Que el proveedor tenga una primitiva nativa de subagentes ni que delegar transfiera ownership automáticamente. |
| `isolated_execution` | Ejecutar trabajo concurrente en ámbitos separados, comprobar el alcance efectivo de escritura y reconciliar resultados antes de integrarlos. | Seleccionar worktrees, contenedores u otro mecanismo ni decidir todavía las políticas de aislamiento de la sesión 9. |
| `portable_skills` | Descubrir, seleccionar y activar una skill identificada y revisada, suministrar sus referencias y requisitos bajo demanda y registrar cuál revisión se utilizó. | Trasladar ciegamente extensiones o permisos de un proveedor ni conceder autoridad a la skill. |
| `semantic_retrieval` | Recuperar candidatas por significado sobre fuentes autorizadas, conservar referencia y revisión y verificar el resultado contra la fuente vigente antes de usarlo. | Hacer obligatorio Hindsight, convertir el índice derivado en autoridad ni promover memoria automáticamente. |

Una tarea puede requerir varios perfiles. La ausencia de un perfil no vuelve
incompatible al adapter con el baseline, pero lo hace inelegible para esa tarea si
no existe una descomposición autorizada que elimine el requisito. Que una tarea no
exija el perfil tampoco autoriza al orchestrator a usarlo sin necesidad.

### Declaración de capacidades

El descriptor del adapter declara como mínimo identidad y revisión del adapter,
proveedor y rango conocido, versiones de contratos soportadas, baseline, perfiles,
realización nativa o emulada, restricciones conocidas y referencias a evidencia de
conformidad. No afirma que toda capacidad esté habilitada en cualquier ejecución.

El snapshot efectivo declara como mínimo identidad y revisión del descriptor,
ejecución y actor aplicables, marcadores del proveedor y entorno, capacidades y
perfiles efectivos, límites cuantitativos disponibles, restricciones y permisos
observados, discrepancias con el descriptor, momento de comprobación y evidencia.
Un cambio relevante produce otro snapshot correlacionado; no reescribe el
anterior.

Para cada capacidad, descriptor y snapshot separan:

- `realization`: `native`, `emulated` o `absent`;
- `verification`: `verified`, `unverified` o `stale`;
- restricciones estructuradas que delimitan cuándo se cumple;
- revisión y evidencia que sustentan la declaración; y
- dependencias o precondiciones requeridas por una emulación.

`native` identifica una primitiva del proveedor; `emulated`, una composición del
adapter y T800R que conserva el mismo resultado semántico; `absent`, la
imposibilidad conocida de ofrecerlo. `verified` significa que la evidencia y los
marcadores aplicables están vigentes; `unverified`, que aún no existe comprobación
suficiente; `stale`, que un marcador relevante cambió. Ni `unverified` ni `stale`
satisfacen un requisito hasta realizar la comprobación aplicable.

La comparación enfrenta requisitos estructurados de la tarea con el snapshot. Una
realización sólo hace match cuando está `verified`, sus versiones son compatibles,
sus restricciones cubren las condiciones exigidas y sus dependencias están
disponibles. `native` y `emulated` no cambian el resultado del match. Si varias
realizaciones cumplen, el orchestrator puede ordenarlas mediante propiedades
observables y evidencia vigente; no presume que una primitiva nativa sea mejor.

Cada requisito de capacidad declara además criticidad `required`, `relevant` u
`optional`. El baseline no admite otra criticidad que `required`. Un perfil o una
capacidad atómica puede variar por tarea, pero una degradación nunca modifica los
criterios, el alcance o la criticidad originales: registra el faltante y limita el
trabajo permitido.

| Criticidad | Ausencia o falta de verificación |
| --- | --- |
| `required` | El adapter no es elegible para esa asignación y no se ejecutan sus efectos. |
| `relevant` | La ejecución queda degradada y sólo continúa trabajo cuya acción y veredicto no dependan del requisito faltante. |
| `optional` | Puede omitirse con razón y evidencia registradas; no cambia el resultado exigido. |

Ante un faltante `required`, el orchestrator registra requisito, snapshot y causa;
reconcilia marcadores o completa la verificación aplicable; busca otro adapter cuyo
snapshot haga match; y sólo después puede proponer una descomposición que conserve
intención, criterios de cierre, dependencias, autoridad y ownership. Si ninguna vía
es válida, crea la consulta o el bloqueo correspondiente. La recuperación no
convierte una ausencia en emulación ni altera la criticidad original.

### Identidad portable

Una referencia portable distingue:

- `actor_id`: identidad lógica estable del actor;
- `actor_type`: clase declarada del actor, sin conceder autoridad por sí misma;
- `execution_id`: identidad inmutable de una ejecución concreta cuando aplica;
- roles, capacidades y autoridad, siempre con ámbito y fuente verificables; y
- aliases locales necesarios para entrega, reanudación o diagnóstico.

Un selector puede expresar un rol, capacidad o autoridad requerida, pero debe
resolverse a un `actor_id` y a la ejecución que acepta o actúa. Reanudar puede
crear otro `execution_id` para el mismo actor; transferir trabajo a otro actor no
es reanudación y exige el handoff aplicable. Una credencial, modelo, proceso,
sesión de chat o nombre de rol no constituye por sí solo un actor portable.

Cada alias contiene como mínimo proveedor, identidad y revisión del adapter,
ámbito local, tipo de objetivo, identificador local, identidad portable de destino,
marcadores de vigencia y evidencia de vinculación. Un alias puede expirar o quedar
reemplazado sin cambiar `actor_id`; no se reutiliza para atribuir retrospectivamente
otra ejecución. Resolverlo exige coincidencia de ámbito y un único mapeo vigente.
Los conflictos se conservan como diagnóstico auditable y no eligen arbitrariamente
una identidad.

### Identidad portable del conocimiento

`knowledge_id` identifica la entrada en T800R y no codifica ruta, título, tipo ni
proveedor. Cada revisión registra su `bundle_id`, la identidad OKF basada en ruta
lógica y la revisión del contenido. La ruta lógica es relativa al bundle y cumple
la semántica de OKF; su representación como ruta física queda diferida.

Mover una entrada crea una nueva identidad OKF y una relación tipada con la
anterior. El curator puede conservar `knowledge_id` sólo si verifica continuidad
de asunto, propósito y aplicabilidad. Una división, fusión o reemplazo crea las
identidades T800R correspondientes y conserva relaciones de procedencia o
sucesión; no reutiliza un ID para ocultar un cambio de entidad.

Las referencias a conocimiento declaran modo de resolución. En modo `exact`
incluyen `knowledge_id`, revisión e identidad OKF aplicable y conservan el objeto
histórico. En modo `current`, `knowledge_id` es el punto estable y el resolvedor
registra la revisión resultante y cada relación de sucesión atravesada. Si la
cadena es ambigua, está rota o cambia la aplicabilidad requerida, la referencia
no se considera resuelta. En ambos modos se aplican las reglas de autoridad y
vigencia de ADR-006.

### Perfil portable de skills

El perfil conserva los elementos comunes de Agent Skills: nombre, descripción,
instrucciones y recursos bajo demanda. T800R añade lógicamente:

- `skill_id` y revisión, separados del nombre y de la ruta;
- condiciones de activación y de no activación;
- entradas necesarias y resultados observables;
- fuentes y recursos con revisión y procedencia;
- capacidades, herramientas, límites y otras precondiciones de ejecución; y
- evidencia de la revisión realmente activada y del resultado obtenido.

La forma física de esos metadatos y la distribución se decidirán posteriormente.
Un campo como `allowed-tools` puede ser una extensión interpretada por un adapter,
pero no prueba autorización efectiva ni sustituye la política de la sesión 9. Los
campos específicos de proveedor se conservan bajo su namespace y el snapshot debe
declarar si se aplicaron, emularon o ignoraron. Si una tarea depende de una
extensión, esa propiedad se expresa además como requisito de capacidad verificable.

### Proyección de instrucciones

El conjunto lógico de instrucciones contiene referencias a fuentes registradas,
revisiones, ámbitos y condiciones de aplicabilidad. T800R resuelve discrepancias
mediante los criterios de autoridad acordados para el proyecto; no define una
jerarquía universal nueva ni usa el último archivo cargado como desempate. Una
contradicción crítica no resuelta invalida el contexto aplicable y detiene la
acción según ADR-005.

El adapter puede usar descubrimiento nativo, archivos puente o inclusión en el
context packet, pero debe demostrar el conjunto efectivo. La evidencia registra
por instrucción su fuente y revisión, ámbito, mecanismo de proyección, orden
efectivo, transformaciones y cualquier omisión con causa. Resumir no puede cambiar
restricciones, autoridad ni condiciones de parada; si una regla `required` no
puede proyectarse fielmente, la capacidad no hace match.

### Traducción de contratos

La traducción sigue un límite unidireccional controlado:

1. T800R valida el artefacto canónico y el snapshot efectivo.
2. El adapter produce una proyección suficiente para la acción y registra campos,
   transformaciones, referencias y material externalizado.
3. El proveedor ejecuta sin adquirir autoridad sobre el estado canónico.
4. El adapter captura salida y metadatos brutos y los normaliza como candidato.
5. T800R valida estructura, referencias, precondiciones, autoridad y suficiencia
   aplicables antes de persistir un evento, resultado o transición.

Una representación local puede omitir datos que permanezcan accesibles por
referencia, siempre que la acción no dependa de interpretarlos localmente y la
omisión esté declarada. Si una pérdida impide conservar una garantía `required`,
la proyección falla y se aplica la recuperación de capacidades. Entrega, salida o
acuse del proveedor no equivalen a aceptación, `completed`, permiso u ownership.

### Evidencia de conformidad

| Capa | Evidencia mínima |
| --- | --- |
| Estructural | Descriptor y snapshots válidos; fixtures válidos e inválidos para contratos y transiciones soportadas; diagnóstico determinista. |
| Conductual | Pruebas de cada capacidad del baseline, incluidas precondiciones, resultado observable, evidencia, restricciones y parada. |
| Integración | Ejecución real contra proveedor, versión y configuración identificados, con proyección, captura, normalización y reconciliación completas. |
| Resiliencia | Ausencia y obsolescencia de capacidades, límites insuficientes, referencias rotas, reentrega idempotente, reanudación, cambio de ejecución y recuperación según el orden aceptado. |

Un perfil se declara conforme sólo si supera las capas aplicables además del
baseline. La evidencia registra adapter y revisión, proveedor y versión, snapshot,
contratos y fixtures, entorno relevante, resultados brutos y normalizados,
veredictos y faltantes. Cambios que alteren comportamiento vuelven `stale` la
evidencia afectada y activan evaluación regresiva proporcional conforme a ADR-003.

Los estados publicados distinguen `target`, para un proveedor objetivo aún no
verificado; `candidate`, para una revisión de adapter pendiente de completar la
conformidad; y `compatible`, reservado a una revisión que supera las cuatro capas
del baseline. Los perfiles no heredan ese último estado: cada uno conserva su
propia evidencia. Estos estados describen conformidad técnica, no permisos,
autoridad ni aptitud automática para cualquier tarea.

### Matriz documental inicial

La [investigación comparativa](../research-portability-providers.md) revisa
documentación primaria de Codex, Claude Code y OpenCode. Los tres permanecen
`target`: hay primitivas documentadas para construir candidatos del baseline,
pero las garantías de T800R requieren adapter y las cuatro capas de prueba.

| Área | Codex | Claude Code | OpenCode |
| --- | --- | --- | --- |
| Baseline | Candidato documental; no verificado. | Candidato documental; no verificado. | Candidato documental; no verificado. |
| `delegation` | Primitivas nativas; perfil no verificado. | Primitivas nativas; perfil no verificado. | Primitivas nativas; perfil no verificado. |
| `isolated_execution` | Worktrees/contenedores documentados; perfil no verificado. | Worktrees documentados; perfil no verificado. | Capacidad desconocida; posible emulación por investigar. |
| `portable_skills` | Agent Skills documentado; perfil no verificado. | Agent Skills con extensiones; perfil no verificado. | `SKILL.md` y carga bajo demanda; perfil no verificado. |
| `semantic_retrieval` | Sin soporte nativo documentado; integración externa posible. | Sin soporte nativo documentado; integración externa posible. | Sin soporte nativo documentado; integración externa posible. |

La falta de evidencia de `isolated_execution` en OpenCode no bloquea el baseline.
Sí impide asignarle una tarea que marque ese perfil `required` hasta demostrar una
emulación conforme. Ninguna fila autoriza publicar compatibilidad ni seleccionar
Hindsight, worktrees u otro mecanismo para el MVP.

### Vigencia de la evidencia

Cada resultado de conformidad referencia las revisiones de contratos y adapter,
la versión o marcador disponible del proveedor, la configuración y política
efectivas, el entorno relevante y los fixtures aplicados. También declara impacto
por capacidad o perfil. Si cambia un marcador, sólo ese alcance pasa a `stale` y
se repiten las capas capaces de verse afectadas; un cambio crítico de contrato o
adapter puede invalidar el baseline completo.

Una nueva documentación sin cambio observable no invalida automáticamente la
evidencia, pero puede activar `check_after`. Una falla de comportamiento sí marca
`stale` el alcance relacionado, conserva el resultado anterior y abre la acción de
diagnóstico y regresión. Hasta revalidar, esa capacidad no satisface requisitos.

### Condiciones portables de carga

Una condición sólo consulta hechos tipados y referenciados. Puede combinar los
triggers ya aceptados por ADR-005: exigencia de tarea o capacidad, resolución de
una ambigüedad capaz de cambiar acción o veredicto, comprobación de vigencia o
evidencia, dependencia entre secciones y solicitud de un actor autorizado. Su
evaluación registra condición, hechos y revisiones consultados, actor, resultado y
sección afectada.

`true` activa la carga y `false` conserva la sección sin cargar. `unknown` obliga a
intentar resolver sólo los hechos autorizados y pertinentes. Si persiste, una
sección `required` vuelve el packet `invalid`; una `relevant` lo deja `degraded` y
limita el trabajo independiente; una `optional` puede omitirse con diagnóstico.
Evaluar una condición no amplía permisos ni autoriza por sí mismo la carga de una
fuente restringida.

### Mecanismos diferidos

- RTK, Context Mode o equivalentes se compararán como realizaciones opcionales de
  las capacidades de contexto, siempre preservando errores, estado, procedencia y
  acceso al bruto.
- Hindsight o equivalentes se compararán para `semantic_retrieval` conforme a
  ADR-006; los resultados continúan siendo pistas verificables, no autoridad.
- Worktrees, contenedores u otros mecanismos se compararán para
  `isolated_execution`; las políticas y permisos corresponden primero a la sesión
  9.

La selección técnica corresponde a la sesión 11 y la medición y decisión final de
alcance a la sesión 12. La ausencia de un mecanismo concreto no degrada el
baseline; la ausencia del resultado semántico sí afecta una tarea que lo declare
`required`.

El snapshot es una observación operativa, no una fuente de permisos ni autoridad.
Debe reconciliarse antes de acciones con efectos según ADR-003 y ADR-005. La
representación física y el mecanismo de sondeo quedan para arquitectura.

<a id="s08-cierre"></a>

### Comprobación de cierre

El criterio de salida está cumplido. La sesión define la frontera entre núcleo y
adapter, las siete capacidades del baseline, cuatro perfiles opcionales, descriptor
y snapshot, comparación y degradación, recuperación, identidad de actores y
conocimiento, aliases, skills, instrucciones, traducción de contratos, condiciones
de carga y evidencia de conformidad. La matriz documental mantiene correctamente
a Codex, Claude Code y OpenCode como `target`, sin afirmar compatibilidad antes de
las pruebas de la sesión 12.

La auditoría final confirmó que no se alteran lifecycle, ownership, autoridad,
presupuestos, procedencia ni vigencia definidos en ADR-003 a ADR-006; seguridad y
enforcement permanecen para la sesión 9; distribución para la 10; representación,
schemas y mecanismos para la 11; y conformidad ejecutada y métricas para la 12.
No queda ambigüedad bloqueante para iniciar seguridad y gobernanza. La decisión
transversal se conserva en
[ADR-007](../adr/ADR-007-contrato-de-capacidades-y-adapters-portables.md).
