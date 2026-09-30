# S10 — Sesión 10: experiencia del producto

Estado: `completed`. Sesión iniciada y completada el 2026-09-22.

### Objetivo

Definir un flujo de adopción y mantenimiento predecible para incorporar T800R en
un repositorio existente, configurarlo, diagnosticarlo, sincronizar sus artefactos
y actualizarlo sin sobrescribir personalizaciones ni degradar silenciosamente sus
contratos. Debe hacer visibles el contrato de capacidades y el baseline de
seguridad ya aceptados sin seleccionar todavía tecnología, representación física,
empaquetado ni arquitectura del MVP.

### Punto de entrada

Delimitar primero la experiencia común que toda adopción debe ofrecer y los
mecanismos particulares que pueden realizarla. En especial, decidir si la CLI es
la interfaz principal del producto, una realización opcional sobre operaciones
utilizables por otros medios o sólo una ayuda de conveniencia. La decisión debe
preservar una conducta comparable para instalación, configuración, diagnóstico,
sincronización y actualización, aunque cambien el proveedor o el mecanismo local.

### Preguntas de la sesión

1. ¿Qué operaciones y resultados forman la experiencia común de adopción y cuáles
   pertenecen a una CLI u otra realización particular?
2. ¿Qué precondiciones, entradas, salidas, efectos y condiciones de parada debe
   tener la incorporación inicial a un repositorio existente?
3. ¿Cómo descubre y valida T800R la configuración, las fuentes canónicas, la
   política, los adapters y las capacidades efectivas sin inventar valores ni
   autoridad?
4. ¿Qué debe comprobar `doctor`, qué severidades produce y cuándo un diagnóstico
   permite continuar, degrada el trabajo o bloquea una acción?
5. ¿Cómo proyecta `init` los artefactos T800R y las integraciones de proveedor sin
   sobrescribir archivos existentes ni duplicar fuentes canónicas?
6. ¿Cómo se sincronizan núcleo, adapters, instrucciones, skills y otros artefactos
   distribuidos, distinguiendo contenido gestionado de personalizaciones locales?
7. ¿Cómo se detectan, presentan y resuelven conflictos durante sincronización o
   actualización, y qué cambios requieren aprobación?
8. ¿Qué identidad de versión, procedencia, compatibilidad, migración, recuperación
   y evidencia debe conservar cada adopción?
9. ¿Cómo se exponen durante adopción los permisos efectivos, secretos, recursos
   protegidos, riesgo, aislamiento y auditoría del baseline de seguridad?
10. ¿Qué flujo de desinstalación o retiro revierte artefactos gestionados sin
    eliminar estado o personalizaciones del repositorio consumidor?

### Criterio de salida

La sesión termina cuando exista un flujo lógico de adopción que defina la frontera
entre experiencia común y mecanismos particulares; las operaciones de instalación,
configuración, diagnóstico, sincronización, actualización y retiro; la propiedad de
artefactos y personalizaciones; detección y resolución de conflictos; versionado,
migración y recuperación; validación y evidencia; y las condiciones de degradación
y parada. Debe preservar ADR-001 y ADR-003 a ADR-008, dejar para arquitectura la
tecnología y representación física, y aportar escenarios verificables para la
validación de la sesión 12.

### Decisiones

| Tema | Estado | Decisión y justificación |
| --- | --- | --- |
| Contrato común de operaciones con CLI de referencia | `accepted` | T800R define operaciones comunes de adopción y mantenimiento mediante precondiciones, entradas, resultados, efectos, evidencia y condiciones de parada independientes de su transporte. La CLI será la interfaz humana de referencia y deberá exponer esa semántica sin convertirse en fuente de autoridad; adapters y automatizaciones podrán invocar realizaciones equivalentes sin simular comandos. Esta frontera ofrece una experiencia visible y comparable, conserva portabilidad y evita acoplar el núcleo a una interfaz concreta. |
| CLI como única interfaz del producto | `rejected` | Simplificaría el punto de entrada visible, pero acoplaría adapters, automatizaciones y futuras integraciones al transporte y comportamiento de una CLI, confundiendo la interfaz de referencia con los contratos del producto. |
| Artefactos y procedimientos sin operaciones comunes | `rejected` | Reduciría la superficie operacional inicial, pero dejaría instalación, diagnóstico y actualización sujetos a interpretación manual o particular de cada mecanismo, sin resultados ni condiciones de parada comparables. |
| Adopción inicial escalonada y reconciliada | `accepted` | La adopción sigue cuatro fases lógicas: inspección de sólo lectura del repositorio y entorno; propuesta reproducible con fuentes, supuestos, diferencias, conflictos, efectos y requisitos; aplicación explícita de una propuesta identificada cuya base y autorizaciones continúan vigentes; y verificación del estado y efectos reales contra el resultado esperado. Cada fase produce diagnóstico y evidencia reutilizables por CLI, adapters o automatizaciones. Ninguna inspección modifica el repositorio, ninguna propuesta concede autorización y ningún conflicto se resuelve por sobrescritura silenciosa. Si una aplicación produce efectos parciales, T800R los reconcilia antes de reintentar, continuar o proponer recuperación; no promete atomicidad ni rollback total cuando los mecanismos implicados no pueden demostrarlos. |
| `init` directo e idempotente como flujo base | `rejected` | Un único paso reduciría fricción en el caso simple, pero mezclaría descubrimiento, decisión y efectos, y haría menos visibles los conflictos, la autoridad y el estado parcial. La idempotencia puede exigirse donde sea demostrable, pero no sustituye la propuesta ni la reconciliación. |
| Asistente interactivo como flujo canónico | `rejected` | Puede guiar a una persona, pero sus respuestas efímeras dificultan reproducibilidad, revisión y automatización. Una interfaz interactiva podrá materializar el mismo flujo común si conserva una propuesta y evidencia equivalentes. |
| Configuración declarada y confirmada | `accepted` | La inspección descubre hechos verificables y puede proponer valores, pero los identifica por separado de la configuración confirmada. El estado deseado queda en una declaración revisable que registra fuentes, procedencia, revisión y los defaults efectivos. Los defaults sólo completan decisiones mecánicas cuyo valor no cambia autoridad, permisos, fuentes canónicas ni comportamiento observable; nunca resuelven silenciosamente una ambigüedad semántica. Un valor `required` desconocido, contradictorio o sin autoridad invalida sólo las operaciones dependientes y debe confirmarse o corregirse antes de aplicarlas. |
| Convenciones inferidas como configuración efectiva | `rejected` | Reducirían escritura inicial, pero permitirían que nombres de archivos, presencia de herramientas o convenciones locales se convirtieran implícitamente en decisiones sobre autoridad y comportamiento. El descubrimiento se conserva como evidencia y propuesta, no como fuente normativa. |
| Configuración completa controlada por un generador | `rejected` | Un generador puede materializar una propuesta, pero no debe ser propietario exclusivo de decisiones del proyecto ni exigir regenerar todo para conservar personalizaciones. La autoridad reside en la declaración confirmada y sus fuentes registradas. |
| Propiedad explícita por artefacto o sección | `accepted` | Cada unidad incorporada o usada por T800R declara identidad lógica, destino efectivo, clase de propiedad, origen, revisión base, marcadores de integridad y política de actualización. `managed` identifica contenido cuyo origen autoritativo distribuye T800R y cuyos cambios se proponen contra una base conocida; `generated` identifica una proyección derivada y reconstruible; `referenced` identifica contenido autoritativo del repositorio que T800R no modifica y sólo resuelve o valida; `local` identifica personalización bajo control del repositorio consumidor. La clasificación puede aplicarse a una sección identificable sin atribuir a T800R todo el archivo contenedor. T800R puede proponer cambios sobre contenido `managed` o regenerar contenido `generated`, pero una divergencia local o una base desconocida se presenta como conflicto y nunca se sobrescribe silenciosamente. Modificar contenido `referenced` o `local` requiere una operación separada, explícitamente autorizada por su política y autoridad. |
| Limitar toda gestión a un directorio exclusivo | `rejected` | Daría una frontera física simple, pero no cubre integraciones que deben convivir con archivos o sistemas existentes y confunde ubicación con ownership. Puede ser una realización preferente, no el contrato general. |
| Copiar plantillas sin relación de actualización | `rejected` | Evita conflictos automáticos, pero pierde procedencia y hace imposible distinguir una personalización de una versión obsoleta o aplicar correcciones compartidas de forma verificable. |
| `doctor` por capas y elegibilidad de operación | `accepted` | `doctor` es una operación de sólo lectura por defecto que comprueba, según aplicabilidad: estructura y coherencia de configuración y artefactos; resolución, revisión y procedencia de referencias; adapters, capacidades y restricciones efectivas; política, controles y precondiciones del baseline de seguridad; y drift, propiedad, compatibilidad y posibilidad de actualización. Cada hallazgo estructurado conserva código estable, capa, sujeto y alcance, resultado esperado y observado, evidencia no sensible, impacto y corrección propuesta. La severidad comunicativa se separa del efecto operacional `advisory`, `degrades` o `blocks`; el resultado indica por operación aplicable si está `ready`, `degraded` o `blocked`, con la dependencia concreta que lo justifica, en vez de declarar una salud global. Una reparación sugerida genera una propuesta y vuelve al flujo común de aplicación y verificación; `doctor` no la ejecuta implícitamente. |
| Reducir `doctor` a un estado global | `rejected` | Un indicador único ocultaría qué capacidad, artefacto u operación está afectado y bloquearía de más o permitiría de más frente al principio de degradación por alcance. Puede ofrecerse un resumen derivado, pero no sustituir los hallazgos ni la elegibilidad. |
| Limitar `doctor` a validación estática | `rejected` | Los schemas y referencias son necesarios, pero no detectan por sí solos capacidades efectivas, política obsoleta, restricciones del entorno, drift ni precondiciones de seguridad requeridas para actuar. |
| Sincronización por reconciliación de tres vías | `accepted` | Para cada unidad `managed` o `generated`, T800R compara la revisión base incorporada, la revisión objetivo distribuida y el estado local efectivo. Sólo prepara automáticamente una combinación cuando puede demostrar que preserva intención y cambios locales; una base desconocida, una edición incompatible, un destino ambiguo o una diferencia semántica no resoluble produce un conflicto explícito y bloquea únicamente la unidad y operaciones dependientes. El contenido `referenced` y `local` no se incorpora a la combinación. La propuesta identifica adiciones, modificaciones, retiros, migraciones, conflictos, efectos y recuperación; se revalida antes de aplicar y se verifica y reconcilia después. Que una combinación sea automática no concede autorización: su aplicación sigue los permisos, riesgo y aprobaciones efectivos. |
| Reemplazar siempre el contenido gestionado | `rejected` | Haría sencilla la convergencia con la distribución, pero perdería cambios locales legítimos en unidades compartidas y convertiría la etiqueta `managed` en permiso de sobrescritura, contrario a la propiedad y adopción segura aceptadas. |
| Limitar la actualización a diferencias manuales | `rejected` | Evitaría decisiones automáticas incorrectas, pero trasladaría toda reconciliación repetitiva a la persona y no permitiría automatizar cambios independientes demostrables. La revisión humana se conserva para conflictos y efectos que la requieran. |
| Separar sincronización de actualización | `accepted` | `sync` reconcilia el estado efectivo con la configuración y las revisiones objetivo ya fijadas, sin seleccionar versiones nuevas. `update` descubre revisiones candidatas, propone cambiar una o más revisiones, comprueba compatibilidad, cambios contractuales y migraciones aplicables y, tras la decisión autorizada, materializa el nuevo estado mediante el mismo flujo de sincronización y verificación. Una comprobación de actualización puede ser de sólo lectura; ni consultar ni ejecutar `sync` adopta implícitamente la revisión más reciente. Esta separación hace reproducible la convergencia y permite evaluar el cambio de versión como un efecto distinto. |
| Unificar convergencia y cambio de revisión | `rejected` | Reduciría el número de operaciones, pero haría ambiguo si corregir drift también cambia la base distribuida y dificultaría reproducir, aprobar o recuperar cada efecto por separado. |
| Actualizar siempre durante `sync` | `rejected` | Mantendría instalaciones recientes con menos pasos, pero convertiría una operación de convergencia en adopción implícita de cambios y migraciones aún no evaluados. |
| Snapshot exacto y compatible de adopción | `accepted` | Cada adopción conserva un snapshot correlacionado con la revisión exacta, origen, integridad y evidencia de compatibilidad de cada componente efectivo, incluidos núcleo distribuido, adapters, instrucciones, skills y otros paquetes aplicables. La configuración puede declarar restricciones o canales para descubrir candidatos, pero éstos no alteran el snapshot hasta que una propuesta de `update` sea aplicada y verificada. La compatibilidad se evalúa sobre el conjunto efectivo y sus contratos, no se infiere de la validez aislada de cada componente; una combinación incompatible, con evidencia ausente u obsoleta, bloquea la actualización afectada. Los snapshots reemplazados se conservan como historia suficiente para diagnóstico y recuperación, sin convertirse en fuentes normativas actuales. |
| Versión monolítica para todos los componentes | `rejected` | Simplificaría identificación y pruebas de una distribución, pero acoplaría la evolución de adapters, skills y núcleo aunque sus ciclos y compatibilidad puedan variar. Puede publicarse un conjunto recomendado sin eliminar identidades propias. |
| Resolver rangos dinámicamente en cada operación | `rejected` | Facilitaría recibir cambios compatibles sin una actualización explícita, pero haría que dos ejecuciones con la misma configuración pudieran usar componentes distintos y debilitaría reproducción, auditoría y recuperación. |
| Migraciones verificables con recuperación explícita | `accepted` | Todo cambio de configuración, schema, artefacto o semántica persistente que no pueda reconciliarse directamente se expresa como una secuencia ordenada de pasos con revisiones de origen y destino, unidades afectadas, precondiciones, efectos, riesgo, permisos, validación posterior y estrategia de recuperación. La reversibilidad se declara por paso y sólo se ofrece cuando está demostrada; copia de seguridad, compensación, restauración y corrección hacia delante no se consideran equivalentes ni garantizadas por defecto. Cada paso revalida su base antes de actuar y registra su resultado. Si falta una migración requerida, falla una verificación o el efecto queda incierto, se detienen los pasos y operaciones dependientes y se reconcilia el estado real. Durante una transición parcial se conservan el snapshot anterior, el objetivo propuesto y las revisiones efectivas observadas por componente; el snapshot objetivo no entra en vigor hasta completar y verificar el conjunto requerido. |
| Exigir migración y reversión automáticas universales | `rejected` | No todos los efectos externos o transformaciones persistentes admiten atomicidad o reversión demostrable; prometerlas ocultaría riesgo y podría empeorar una recuperación. Los componentes pueden ofrecerlas cuando aporten evidencia suficiente. |
| Delegar toda migración a instrucciones manuales | `rejected` | Evitaría automatización riesgosa, pero perdería precondiciones, correlación, verificación y recuperación comunes. Un paso manual puede formar parte de una migración cuando queda explícitamente delimitado y su resultado se verifica. |
| Retiro selectivo, escalonado y verificable | `accepted` | Retirar T800R o un componente sigue las fases de desactivar nuevas operaciones dependientes, inspeccionar uso y dependencias, proponer cambios, aplicar acciones autorizadas y verificar el estado residual. Sólo se eliminan unidades `managed` o `generated` cuya identidad, origen y pertenencia puedan demostrarse y cuya política permita retirarlas. Una divergencia local, una base desconocida o una dependencia activa se conserva como conflicto o acción pendiente; el contenido `local`, `referenced`, las fuentes canónicas del repositorio y el estado que no sea propiedad demostrable de T800R se preservan por defecto. La propuesta distingue eliminación, conservación, exportación o migración y explica efectos sobre proveedores y contratos. El resultado registra unidades retiradas y conservadas, referencias o dependencias rotas, acciones manuales y evidencia mínima de procedencia y retiro conforme a retención y seguridad. Retirar un componente no equivale a retirar toda la adopción. |
| Purga completa tras confirmación | `rejected` | Una confirmación global no demuestra ownership de cada unidad ni vuelve prescindibles fuentes canónicas, personalizaciones o evidencia; podría destruir estado del repositorio que T800R sólo referenciaba o compartía. |
| Desactivar sin preparar limpieza | `rejected` | Es una contención inicial segura, pero dejaría dependencias, proyecciones y configuración obsoletas sin un resultado verificable. Puede ser el primer paso o el resultado temporal ante conflictos, no el contrato completo de retiro. |
| `init` propone antes de modificar | `accepted` | En la CLI de referencia, `init` inspecciona el repositorio y entorno y produce por defecto una propuesta de adopción sin efectos. La propuesta distingue hechos descubiertos, decisiones pendientes, defaults, unidades y propiedad, diferencias, conflictos, permisos, riesgo, migraciones y validaciones previstas. Aplicarla requiere una acción explícita correlacionada con esa propuesta y revalida base, política, autorizaciones y vigencia inmediatamente antes de cada efecto. Al terminar ejecuta `doctor` o una verificación semánticamente equivalente y sólo declara la adopción vigente si el conjunto requerido queda verificado. Un modo interactivo puede ayudar a completar decisiones, pero debe producir la misma propuesta persistente; sus respuestas o confirmación final no constituyen por sí solas aprobación de efectos protegidos. |
| `init` interactivo que aplica al confirmar | `rejected` | Puede parecer más directo, pero mezcla decisiones, autorización y efectos en una conversación efímera y dificulta revisar o automatizar exactamente la misma adopción. La interacción se admite como frontend de la propuesta común. |
| `init` limitado a crear un esqueleto | `rejected` | Evitaría efectos amplios, pero no cumpliría la incorporación predecible ni comprobaría conflictos, adapters, política y referencias. Una plantilla puede ser parte de la propuesta, no el resultado completo de `init`. |
| Gates de seguridad explicables por efecto | `accepted` | Toda propuesta y acción muestra un resumen por efecto con propósito, recursos y destinos efectivos, nivel y factores de riesgo, autoridad y permisos efectivos, controles satisfechos y pendientes, aprobaciones o aislamiento requeridos, recuperación y evidencia prevista. El detalle expandible identifica reglas, fuentes, revisiones, restricciones y relaciones causales necesarias para revisar la decisión, sin exigir leer política no aplicable. Los valores secretos nunca aparecen: sólo referencias opacas y metadatos no sensibles. Una confirmación de interfaz no sustituye una aprobación persistente ni eleva autoridad; la CLI y otras realizaciones presentan el mismo gate semántico. Los fallos indican alcance afectado y trabajo independiente posible, en lugar de usar advertencias genéricas. |
| Mostrar controles sólo cuando bloquean | `rejected` | Reduciría ruido, pero ocultaría por qué una acción fue autorizada, qué evidencia se usará y qué cambió entre propuestas, debilitando revisión y auditoría preventiva. El resumen permite concisión sin perder trazabilidad. |
| Mostrar siempre la política completa | `rejected` | Maximizaría información disponible, pero mezclaría reglas no aplicables con la decisión efectiva, aumentaría carga de revisión y podría exponer metadatos innecesarios. El detalle aplicable permanece accesible bajo demanda. |
| Resolución explícita de colisiones | `accepted` | T800R distingue identidad lógica de la unidad, nombre de descubrimiento y destino proyectado. Durante inspección, adopción, sincronización o actualización detecta colisiones entre componentes distribuidos y contenido existente antes de escribir. Sólo puede deduplicar o compartir una proyección cuando origen, revisión, contenido y semántica equivalente estén demostrados; nombres iguales o aceptación sintáctica por un proveedor no prueban equivalencia. Toda diferencia exige una decisión persistente y revisable de selección, mapeo, composición o renombre que preserve ambos orígenes y explique la precedencia en ese destino. Mientras falte, el destino y operaciones dependientes quedan bloqueados, sin impedir trabajo independiente. La resolución se revalida si cambia cualquiera de las unidades o la regla de descubrimiento del proveedor. |
| Precedencia global de fuentes | `rejected` | Automatizaría colisiones conocidas, pero una misma fuente no debe prevalecer necesariamente para todos los destinos y podría ocultar diferencias semánticas bajo una regla demasiado amplia. La precedencia puede formar parte de una resolución acotada y explícita. |
| Última instalación gana | `rejected` | Hace depender el resultado del orden accidental de operaciones, pierde intención y puede cambiar silenciosamente qué instrucciones o skills descubre un proveedor. |

### Revisión transversal aplicable

| Práctica y fuente | Problema que resuelve | Estado | Evaluación para T800R |
| --- | --- | --- | --- |
| Hacer el entorno legible y convertir capacidades ausentes en feedback loops; OpenAI, *Harness engineering* | Un entorno subespecificado obliga al agente a adivinar herramientas, estructura y estado. | `accepted` | La inspección, la configuración declarada y `doctor` hacen visibles hechos, faltantes y elegibilidad antes de actuar. T800R añade autoridad, procedencia y degradación por alcance, aspectos que el caso de OpenAI no pretende especificar para adopciones reusables. |
| Validaciones mecánicas con errores que indiquen remediación; OpenAI, *Harness engineering* | La documentación sola no evita drift ni ayuda al agente a corregir una infracción. | `accepted` | Los hallazgos estables y accionables de `doctor`, más la verificación posterior a cada aplicación, conservan esta práctica sin fijar linters, CI ni tecnología concreta. |
| Punto de entrada breve y progressive disclosure; OpenAI, *Harness engineering*, y Anthropic, *Effective context engineering for AI agents* | Un manual o contexto inicial exhaustivo consume atención, se vuelve obsoleto y dificulta navegación. | `accepted` | Ratifica S06: la experiencia proyecta un punto de entrada y referencias, no copia todas las fuentes. No crea una nueva representación ni autoriza inferir configuración desde convenciones. |
| Inicializador diferenciado y prueba básica del entorno antes de continuar; Anthropic, *Effective harnesses for long-running agents* | Las sesiones posteriores pierden tiempo reconstruyendo el entorno o avanzan sobre una base rota. | `accepted` | `init` cubre la adopción diferenciada y la verificación final. La comprobación concreta dependerá del repositorio y debe declararse; no se adoptan universalmente `init.sh`, `claude-progress.txt` ni el formato del experimento. |
| Usar `init.sh`, un archivo de progreso y un commit inicial como mecanismos universales; Anthropic, *Effective harnesses for long-running agents* | Proporciona un arranque reproducible en el experimento descrito. | `deferred` | Son realizaciones candidatas, no semántica portable. Rutas, formatos, Git y mecanismos de bootstrap corresponden a S11 y su eficacia a S12. La fuente estudia principalmente un proyecto web creado desde cero, no actualización segura de repositorios existentes. |
| Herramientas mínimas, no solapadas y con contratos claros; Anthropic, *Effective context engineering for AI agents* | Herramientas redundantes o ambiguas consumen contexto y producen decisiones inconsistentes. | `accepted` | El contrato común mantiene operaciones con responsabilidades distintas (`init`, diagnóstico, sincronización, actualización y retiro). La sintaxis y agrupación exactas de la CLI se difieren a S11 y deberán comprobar que no introducen solapamientos. |
| Worktrees, observabilidad local y herramientas end-to-end concretas; OpenAI, *Harness engineering*, y Anthropic, *Effective harnesses for long-running agents* | Permiten observar y validar el comportamiento real en entornos contenidos. | `deferred` | Son realizaciones candidatas de aislamiento y verificación. Su inclusión en el MVP depende de S11 y las pruebas de S12; no son requisitos universales de adopción. |

Las fuentes describen prácticas y experiencias valiosas, pero no ofrecen evidencia
directa sobre reconciliación de tres vías, actualización de componentes
independientes o retiro seguro en repositorios existentes. Esos contratos se
fundamentan en los objetivos y acuerdos internos de T800R y deberán validarse en el
repositorio piloto.

### Escenarios para validación

1. En un repositorio existente, `init` inspecciona y produce una propuesta completa
   sin modificar archivos, configuración, proveedores ni estado externo.
2. Una adopción limpia aplicada desde una propuesta vigente termina con
   configuración confirmada, propiedad explícita, snapshot exacto y `doctor`
   `ready` para las operaciones requeridas.
3. Una fuente canónica, política o capacidad `required` desconocida bloquea sólo
   las operaciones dependientes y conserva trabajo independiente elegible.
4. Una colisión con instrucciones o skills existentes se detecta antes de escribir
   y no se resuelve por orden de instalación ni precedencia implícita.
5. `sync` combina un cambio distribuido independiente con una personalización
   local, pero presenta como conflicto una edición semánticamente incompatible y
   no modifica la unidad afectada.
6. `sync` sobre una adopción sin drift no cambia el snapshot ni adopta revisiones
   nuevas, y su repetición produce el mismo resultado observable.
7. `update` propone un conjunto compatible, muestra cambios y migraciones, lo
   aplica con autorización efectiva y sólo activa el snapshot objetivo tras
   verificar todo lo `required`.
8. Un fallo de migración conserva base, objetivo y estado efectivo observado,
   bloquea dependencias y exige reconciliación antes de reintentar.
9. Una acción protegida muestra un gate explicable, exige los controles de S09 y
   conserva los secretos como referencias opacas en interfaz y evidencia.
10. `doctor` distingue un hallazgo informativo de uno que degrada y otro que
    bloquea, y atribuye cada efecto a operaciones y dependencias concretas.
11. Retirar un componente elimina sólo unidades atribuibles y autorizadas,
    preserva contenido `local` y `referenced` y reporta el estado residual.
12. La CLI y una realización de automatización producen resultados, condiciones de
    parada y evidencia semánticamente equivalentes para la misma operación.

<a id="s10-cierre"></a>

### Comprobación de cierre

El criterio de salida está cumplido. S10 define una experiencia común independiente
del transporte y una CLI de referencia; adopción escalonada; configuración
declarada; propiedad y procedencia de artefactos; diagnóstico por operación;
sincronización, actualización y reconciliación; snapshots y compatibilidad;
migraciones y recuperación; retiro; colisiones; gates de seguridad; evidencia,
degradación y condiciones de parada. Los doce escenarios trasladan estos contratos
a validación sin seleccionar su tecnología.

La comprobación de coherencia no encontró contradicciones con ADR-001 ni con
ADR-003 a ADR-008. Se preservan autonomía y autoridad, fuentes canónicas,
reconciliación y trabajo independiente, identidad y capacidades portables,
proyecciones no autoritativas, permisos efectivos, secretos opacos y controles por
riesgo. La revisión transversal aplicable acepta prácticas de legibilidad,
diagnóstico accionable, progressive disclosure e inicialización verificada; los
mecanismos concretos permanecen diferidos a S11 y su eficacia a S12.

La representación física, tecnología, empaquetado, sintaxis exacta de la CLI,
schemas, almacenamiento, runtime y selección de realizaciones quedan para S11. La
conformidad de adapters, recuperación ante fallos, equivalencia entre interfaces y
eficacia en T800R y el repositorio piloto quedan para S12. No permanece una
ambigüedad de experiencia que bloquee la arquitectura.

La decisión transversal se conserva en
[ADR-009](../adr/ADR-009-experiencia-portable-de-adopcion-y-mantenimiento.md).
