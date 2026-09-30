# S02 — Sesión 2: límites del producto

Estado: `completed`. Acuerdos confirmados por el usuario y criterio de salida
comprobado el 2026-09-14.

### Objetivo

Delimitar las responsabilidades de T800R, del repositorio consumidor y de las
herramientas proveedoras de agentes, partiendo de los tres casos de uso aceptados.

### Punto de entrada utilizado

Discutir si T800R ejecutará y supervisará agentes o preparará y validará los
contratos de trabajo que otras herramientas ejecutan. Comparar las alternativas
por su contribución a la continuidad y coordinación, el esfuerzo de adopción y
la portabilidad entre Codex, Claude Code y OpenCode.

### Criterio de salida

Un modelo de responsabilidades que asigne a T800R, al repositorio consumidor y
al proveedor sus obligaciones para incorporar el harness, cerrar y retomar
trabajo y coordinar agentes; que aclare quién ejecuta los agentes; y que no deje
ambigüedades bloqueantes para discutir las fuentes de verdad en la sesión 3.

### Decisiones

| Decisión | Estado | Justificación |
| --- | --- | --- |
| T800R ejecutará y supervisará agentes, además de preparar y validar sus contratos de trabajo. | `accepted` | El usuario prioriza un producto más autónomo y acepta el mayor esfuerzo de integración y manejo de fallos. La ejecución forma parte del objetivo real del producto. |
| Limitar T800R a preparar y validar contratos cuya ejecución siempre corresponde a otras herramientas. | `rejected` | Ese límite no alcanza el grado de autonomía buscado. Preparar y validar contratos sigue siendo necesario, pero no constituye todo el alcance. |
| T800R recibirá un objetivo y sus restricciones, preparará el plan, lo descompondrá en tareas, identificará dependencias y coordinará su ejecución y validación. | `accepted` | El usuario confirmó que el alcance 2 es el producto que busca; la autonomía incluye preparar el trabajo y no sólo ejecutar tareas ya definidas. |
| En desarrollo de software, la mayor intervención humana se concentrará al definir y aclarar qué construir con los agentes y al revisar el resultado al final de la construcción. | `accepted` | El usuario busca establecer un entendimiento compartido al inicio y comprobar al final que el software funciona como se pidió, con ejecución autónoma entre ambos puntos. Esto no excluye intervenciones excepcionales durante la construcción. |
| Durante la construcción habrá revisiones humanas de código cuando sean realmente necesarias, en particular si se detecta que un cambio tiene alto riesgo por las consecuencias de un fallo. | `accepted` | El usuario incorpora un control selectivo basado en riesgo, preservando la autonomía para el resto del trabajo. Los criterios concretos de riesgo quedan pendientes. |
| T800R detectará y señalará los cambios de alto riesgo, explicará sus posibles consecuencias y solicitará revisión humana con el cambio y la evidencia de validación. El cambio esperará esa revisión antes de integrarse, mientras continúan las tareas independientes. | `accepted` | El usuario confirmó este comportamiento para dar la mayor capacidad de autonomía sin omitir la revisión necesaria ni detener trabajo independiente. |
| Adoptar el modelo inicial de responsabilidades entre T800R, repositorio consumidor y proveedor descrito abajo. | `accepted` | El usuario lo considera una buena versión de inicio; permite distinguir la conducción del trabajo de las capacidades de ejecución y las reglas particulares del proyecto. |
| T800R definirá una estructura de directorios para que los agentes sepan dónde buscar la información necesaria para trabajar. | `accepted` | El usuario requiere ubicaciones predecibles como parte del producto. Las rutas concretas y la distribución de fuentes de verdad se definirán en las sesiones correspondientes. |
| T800R tendrá una estructura base estándar y un punto de entrada conocido, con referencias configurables a documentos existentes del repositorio consumidor. | `accepted` | El usuario aceptó la recomendación porque combina orientación predecible para los agentes con adaptación a repositorios existentes, sin duplicar información. T800R deberá validar las referencias. |
| Durante la construcción, T800R resolverá problemas técnicos, corregirá fallos y ajustará su plan autónomamente dentro de lo acordado. Consultará a la persona si necesita cambiar el alcance, resolver una ambigüedad que afecte al comportamiento esperado o superar un bloqueo fuera de sus capacidades o permisos; mientras espera, continuará el trabajo independiente. | `accepted` | El usuario confirmó este límite para maximizar la autonomía sin sustituir decisiones humanas sobre el producto ni exceder las capacidades o permisos disponibles. Se mantiene la revisión por riesgo acordada. |
| La definición colaborativa incluirá también los aspectos técnicos que la persona quiera acordar, como tecnologías, lenguajes y estrategias de construcción. | `accepted` | El usuario aclaró que su participación inicial no se limita a expresar la intención funcional. Los acuerdos técnicos forman parte de los límites que T800R debe respetar durante la construcción autónoma. |
| La construcción comienza cuando la persona confirma que la definición funcional y técnica está lista para construir. T800R conduce la ejecución y resuelve los detalles delegados sin aprobación adicional de cada plan técnico que respete los acuerdos. | `accepted` | El usuario confirmó esta transición tras aclarar el alcance técnico de la definición colaborativa. Establece un punto explícito de arranque sin introducir revisiones rutinarias que reduzcan la autonomía. |

### Modelo inicial de responsabilidades

| Área | T800R | Repositorio consumidor | Proveedor — Codex, Claude Code u OpenCode |
| --- | --- | --- | --- |
| Incorporación | Prepara el harness y comprueba que dispone de lo necesario para operar. Define una estructura de directorios que oriente a los agentes. | Aporta sus reglas, documentación, restricciones y mecanismos de validación. | Aporta las capacidades para ejecutar agentes y utilizar herramientas. |
| Construcción y coordinación | Planifica, inicia y supervisa agentes; asigna trabajo, gestiona dependencias y verifica entregas. | Aporta el código y los criterios específicos del proyecto que deben cumplirse. | Ejecuta los agentes mediante sus capacidades y permisos disponibles. |
| Cierre y reanudación | Conserva el estado del trabajo y prepara su continuación, comprobando qué quedó realmente hecho. | Conserva los cambios y la información persistente del proyecto. | Proporciona las capacidades para terminar o iniciar ejecuciones. |
| Revisión por riesgo | Detecta y explica el riesgo, reúne evidencia, solicita revisión y mantiene pendiente la integración del cambio afectado. | Aporta las restricciones y particularidades relevantes para evaluar el riesgo. | Respeta los controles de ejecución que le correspondan. |

La persona aporta la intención y las decisiones técnicas que quiera establecer,
y participa en la definición, las revisiones necesarias y la aceptación final.
T800R conduce el trabajo: decide y coordina qué
agentes ejecutar; el proveedor aporta el mecanismo para ejecutarlos.

La estructura de directorios forma parte del contrato de orientación de los
agentes: tendrá una base estándar y un punto de entrada conocido, con referencias
configurables a documentos existentes del repositorio consumidor. T800R deberá
validar esas referencias. No se han acordado nombres de directorios ni una
reorganización del código del proyecto.

### Modelo de interacción acordado para desarrollo de software

1. **Definición colaborativa:** la persona y los agentes aclaran qué se quiere
   construir y crean un entendimiento compartido. No se reduce a entregar una
   instrucción inicial ni a revisar únicamente un plan técnico. Incluye los
   aspectos técnicos que la persona quiera acordar, como tecnologías, lenguajes
   y estrategias de construcción, además del comportamiento esperado y el
   alcance. Estos acuerdos técnicos limitan las decisiones autónomas posteriores.
2. **Construcción autónoma:** T800R prepara y coordina el trabajo de los agentes
   después de que la persona confirme que la definición funcional y técnica
   está lista para construir. Incluye planificación, ejecución, supervisión y
   validación, resolviendo los detalles delegados sin aprobación adicional de
   cada plan técnico que respete lo acordado.
3. **Revisión humana final:** la persona revisa que el resultado funcione como se
   pidió. La validación realizada durante la construcción no sustituye esta
   revisión.

La mayor intervención humana se concentra en los extremos del ciclo. Durante
la construcción, T800R resuelve problemas técnicos, corrige fallos y ajusta su
plan dentro de lo acordado. Consulta a la persona cuando necesita cambiar el
alcance, resolver una ambigüedad que afecta al comportamiento esperado o superar
un bloqueo fuera de sus capacidades o permisos. Mientras espera la respuesta,
continúa el trabajo independiente.

La autonomía también debe respetar los acuerdos técnicos de la definición:
modificarlos requiere volver a la persona. Este requisito describe el producto
T800R; no selecciona tecnologías para su propia implementación en esta sesión.

Durante la construcción también se contemplan revisiones humanas de código
selectivas cuando sean necesarias, por ejemplo ante cambios de alto riesgo si
fallan. No se ha establecido una revisión humana obligatoria para cada cambio.
T800R es responsable de detectar y señalar el riesgo, explicar las posibles
consecuencias y solicitar revisión con el cambio y la evidencia de validación.
El cambio afectado espera revisión humana antes de integrarse; T800R continúa
con las tareas independientes. Los criterios para detectar ese riesgo y quién
los define están pendientes; su detalle operativo corresponde a las sesiones
de ciclo operativo y seguridad y gobernanza.

### Detalles aplazados

| Detalle | Estado | Justificación y punto de resolución |
| --- | --- | --- |
| Fuentes canónicas, rutas concretas y reglas de validación de referencias. | `deferred` | El límite de producto ya exige una base estándar con referencias configurables; la distribución de información comienza en la sesión 3 y se concreta en conocimiento y experiencia del producto. |
| Mecánica de arranque, replanificación, espera de revisión y continuidad del trabajo independiente. | `deferred` | Las responsabilidades están acordadas; los estados y transiciones corresponden a la sesión 4. |
| Criterios de alto riesgo, quién los define y controles de revisión. | `deferred` | La obligación de revisión previa a integrar está acordada; su política y controles corresponden a la sesión 9, con requisitos operativos en la sesión 4. |
| Mecanismos de ejecución por proveedor y tecnología de T800R. | `deferred` | La ejecución y supervisión son responsabilidad de T800R; su realización se definirá en portabilidad y arquitectura, sesiones 8 y 11. |

<a id="s02-cierre"></a>

### Comprobación de cierre

El criterio de salida está cumplido: existe un modelo de responsabilidades de
T800R, repositorio consumidor y proveedor para incorporación, cierre y reanudación,
y coordinación. Está definido quién conduce y quién proporciona la ejecución de
agentes, así como los límites de autonomía, las intervenciones humanas y la
transición desde la definición funcional y técnica a la construcción.

La estructura base estándar con referencias configurables da el punto de partida
para discutir las fuentes de verdad. Los detalles aplazados no bloquean esa
discusión. La decisión transversal queda documentada en
[ADR-001](../adr/ADR-001-autonomia-y-responsabilidades.md).

Estos acuerdos describen el comportamiento del producto futuro. La definición
de T800R continúa; aún no se ha autorizado su construcción.

