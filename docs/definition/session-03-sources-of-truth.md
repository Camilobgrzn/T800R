# S03 — Sesión 3: fuentes de verdad

Estado: `completed`. Acuerdos confirmados por el usuario y criterio de salida
comprobado el 2026-09-14.

### Objetivo

Asignar una fuente canónica a cada tipo de información que T800R y sus agentes
necesitan para definir, ejecutar, coordinar, validar y retomar trabajo.

### Punto de entrada utilizado

Partir del modelo de responsabilidades de la sesión 2 y distinguir qué
información corresponde a Git, al work tracker, al conocimiento persistente
(evaluando Open Knowledge Format, OKF, como representación), a la memoria, a las
skills y al contexto efímero. Discutir primero dónde
residen los acuerdos funcionales y técnicos y cómo se relacionan con el estado
del trabajo, evitando que varias copias compitan como fuente de verdad.

La estructura base estándar y las referencias configurables ya están aceptadas;
ninguna herramienta ni ruta concreta se presupone elegida.

### Criterio de salida

Un modelo de información canónico que asigne responsabilidades a Git, work
tracker, OKF, memoria, skills y contexto efímero; distinga datos canónicos de
referencias o derivados; y establezca cómo resolver discrepancias sin dejar
ambigüedades bloqueantes para definir el ciclo operativo en la sesión 4.

### Decisiones

| Decisión | Estado | Justificación |
| --- | --- | --- |
| T800R aportará herramientas para que cada proyecto incorpore las fuentes que considera de verdad, tanto durante la configuración inicial como durante su evolución. | `accepted` | El usuario requiere agnosticismo tecnológico y poder ampliar las fuentes a medida que avanza el proyecto, sin depender de un catálogo fijo impuesto por T800R. |
| T800R mantendrá un registro de fuentes por proyecto con incorporación asistida y colaborativa: el mecanismo ayudará a completarlo mediante preguntas al usuario. | `accepted` | El usuario aceptó el registro asistido y aclaró que su construcción debe apoyarse en el diálogo, sin exigir que la persona aporte de entrada todos los datos. |
| La colaboración humana definirá los criterios de autoridad; T800R consultará y gestionará referencias concretas autónomamente dentro de esos criterios. Incorporar una nueva fuente como autoridad o convertir un ejemplo en regla requiere aclaración humana cuando no esté cubierto por los acuerdos. | `accepted` | El usuario confirmó este reparto para conservar la autonomía sin pedir autorización por cada documento consultado ni modificar implícitamente las reglas del proyecto. |
| Adoptar especificaciones versionadas para acuerdos, ADRs para decisiones relevantes y sus razones, work tracker para plan y estado operativo, y registro de fuentes para referencias y criterios de autoridad. | `accepted` | El usuario aceptó la distribución propuesta para asignar responsabilidades distintas y evitar copias que compitan como fuente canónica. |
| Vincular tareas, acuerdos y fuentes mediante referencias. Ante un resumen que contradiga el original, corregir el resumen; ante originales contradictorios, comprobar ámbito y versión y consultar si resolverlo exige cambiar un acuerdo. | `accepted` | El usuario aceptó esta regla junto con la distribución, preservando la autonomía y la autoridad de los acuerdos. |
| Git será autoridad sobre contenido versionado e historial; el work tracker, sobre estado operativo; la evidencia de ejecución y revisión, sobre las comprobaciones realizadas y sus resultados. El tracker enlazará entrega y evidencia, y T800R comprobará su coherencia antes de dar el trabajo por completado. | `accepted` | El usuario confirmó que un commit o un estado declarado no demuestran por sí solos que el resultado funcione. La separación permite retomar y verificar el trabajo sin confiar únicamente en el relato anterior. |
| El conocimiento mantenido conectará y sintetizará las fuentes del proyecto, conservando su procedencia y sin sustituir la autoridad de los acuerdos originales. Se evaluará Open Knowledge Format como representación e intercambio. | `accepted` | El usuario confirmó el valor de esta función y la evaluación de OKF; no constituye adopción del formato, perfil o versión. |
| Revisar las prácticas documentadas en los artículos investigados como candidatas para el harness de T800R. | `accepted` | El usuario considera valiosos los artículos para decidir qué prácticas podemos o debemos adoptar. Cada práctica requiere evaluación y acuerdo propio dentro de su sesión correspondiente. |
| T800R mantendrá un punto de entrada breve que oriente a los agentes e índices con descripciones y referencias a las fuentes canónicas, actualizados al incorporar o reorganizar contenido. | `accepted` | El usuario aceptó esta práctica de orientación progresiva para dar continuidad entre agentes y sesiones sin concentrar toda la documentación en el contexto inicial. Requiere mantener enlaces y consultar los originales para decidir. |
| T800R mantendrá activamente el conocimiento: detectará referencias rotas, desactualización y contradicciones; corregirá referencias inequívocas y resúmenes derivados autónomamente, revisará aprendizajes cuando cambien sus fundamentos y consultará si resolver una discrepancia exige cambiar acuerdos. | `accepted` | El usuario aceptó prevenir la reutilización de información obsoleta mediante comprobaciones mecánicas y revisión semántica apoyada en evidencia, sin adaptar los requisitos al código por conveniencia. |
| La memoria servirá para continuidad del trabajo y recuperación de experiencias, sin sustituir acuerdos, estado operativo ni evidencia. Puede persistir e indexar fuentes, pero los agentes comprobarán sus referencias y aplicabilidad cuando una acción dependa de ellas. | `accepted` | El usuario aceptó aprovechar investigaciones y antecedentes entre sesiones y proveedores sin convertir hipótesis o recuerdos en una autoridad paralela. |
| Las skills serán la fuente de procedimientos reutilizables, con condiciones de aplicación, pasos, límites y resultado verificable; pueden incluir referencias y scripts de apoyo. Guían la ejecución dentro de los acuerdos, sin modificarlos ni conceder por sí mismas permisos adicionales. | `accepted` | El usuario aceptó este papel y pidió contrastarlo con el mercado. La reutilización requiere comprobar compatibilidad y resolver contradicciones con las reglas del proyecto. |
| Las skills se crearán y mejorarán a partir de necesidades reales y se evaluarán tanto por su activación correcta como por la calidad y el coste de sus resultados. | `accepted` | El usuario aceptó la práctica respaldada por la investigación: una skill válida o bien redactada no demuestra utilidad. La evaluación debe comprobar cuándo corresponde usarla y qué aporta frente a trabajar sin ella o con su versión anterior. |
| El contexto efímero reúne información de una ejecución y puede reconstruirse o descartarse siempre que lo necesario para continuar quede registrado en la fuente correspondiente. Estar en contexto no concede autoridad adicional; un resumen de sesión no sustituye los registros canónicos. | `accepted` | El usuario aceptó preservar acuerdos, estado, evidencia, aprendizajes e investigaciones relevantes en sus fuentes, sin exigir conservar cada mensaje o resultado intermedio. Esto permite cambiar de sesión, agente o proveedor. |

### Distribución canónica inicial

| Fuente o capa de información | Responsabilidad |
| --- | --- |
| Especificaciones versionadas | Qué construir, restricciones funcionales y técnicas y criterios de aceptación acordados. |
| ADRs, cuando correspondan | Decisiones relevantes y sus razones, referenciadas desde las especificaciones. |
| Work tracker | Plan ejecutable, tareas, responsables, dependencias, bloqueos y estado del trabajo. |
| Registro de fuentes | Referencias disponibles, ámbitos y criterios de autoridad, versiones aplicables y formas de acceso. |
| Git | Contenido versionado e historial de cambios, identificando qué revisión contiene una implementación o documento. |
| Evidencia de ejecución y revisión | Qué se comprobó, sobre qué revisión, en qué condiciones y con qué resultado, incluidas las revisiones humanas correspondientes. |
| Conocimiento mantenido | Conecta y sintetiza las fuentes del proyecto, conservando procedencia; las síntesis son derivadas y no sustituyen acuerdos originales. OKF se evaluará como representación e intercambio. |
| Punto de entrada e índices | Orientan hacia acuerdos, trabajo activo e instrucciones aplicables. Los índices y sus descripciones son derivados de las fuentes canónicas, sin autoridad independiente sobre su contenido. |
| Memoria | Conserva continuidad e identifica experiencias relacionadas; sus notas, hipótesis e índices no sustituyen las fuentes canónicas de acuerdos, estado o evidencia. |
| Skills | Procedimientos reutilizables y sus recursos de apoyo; referencian acuerdos y conocimiento y guían su aplicación sin sustituirlos ni ampliar permisos por sí mismas. |
| Contexto efímero | Información disponible durante una ejecución, incluidas copias de otras fuentes; no adquiere autoridad adicional por estar cargada. Lo necesario para continuar se persiste en la fuente que corresponda. |

Las tareas enlazan requisitos y referencias sin necesitar copiar sus documentos.
T800R mantiene válidas las referencias. Un resumen es derivado: si contradice el
original, se corrige el resumen. Si los originales se contradicen, se comprueban
ámbito y versión y se consulta cuando resolverlo implique cambiar un acuerdo.
Esta distribución no selecciona una herramienta de tracking ni rutas concretas.

Git conserva las revisiones de los artefactos versionados; la responsabilidad
semántica de cada documento sigue correspondiendo a su tipo. El tracker declara
el estado operativo y enlaza la entrega y su evidencia. T800R comprueba su
coherencia antes de dar el trabajo por completado: un commit no demuestra que el
cambio funcione, y marcar una tarea como terminada no sustituye sus validaciones.
Si la evidencia corresponde a una revisión anterior, T800R detecta la discrepancia
y determina qué debe volver a validar según los cambios, sin repetir
automáticamente todas las pruebas. El detalle de esa evaluación se concretará
en ciclo operativo y validación.

### Contexto efímero y persistencia

El contexto efímero incluye conversación, fragmentos recuperados, resultados de
herramientas, instrucciones cargadas y notas temporales de una ejecución. Puede
contener copias de información canónica, pero su presencia en el contexto no
altera la autoridad del original ni garantiza continuidad entre sesiones.

T800R puede reconstruirlo o descartarlo si persiste lo necesario para continuar
y justificar el trabajo en la fuente correspondiente:

| Información que debe conservarse | Destino |
| --- | --- |
| Cambio de requisito confirmado | Especificación o decisión correspondiente. |
| Bloqueo o cambio de responsable | Work tracker. |
| Validación relevante | Evidencia vinculada a la revisión comprobada. |
| Aprendizaje reutilizable confirmado | Conocimiento mantenido, con sus fundamentos. |
| Investigación inconclusa | Memoria de continuidad que distinga hechos e hipótesis. |

No se exige conservar cada mensaje ni cada resultado intermedio. Un resumen de
sesión puede facilitar la reanudación, pero no sustituye estos registros. Los
mecanismos y momentos de persistencia se concretarán en ciclo operativo y contexto.

### Responsabilidad de la memoria

La memoria puede persistir entre sesiones y cumple dos funciones:

| Función | Contenido | Condición de uso |
| --- | --- | --- |
| Continuidad del trabajo | Investigaciones en curso, intentos realizados, hipótesis y próximos pasos. | Contrastar el estado con el tracker y los artefactos al retomar. |
| Recuperación de experiencias | Referencias a soluciones anteriores, decisiones y aprendizajes relacionados. | Comprobar la fuente y su aplicabilidad antes de reutilizarla cuando una acción dependa de ella. |

Persistir una hipótesis no la convierte en conocimiento confirmado. Un hallazgo
con evidencia puede fundamentar conocimiento mantenido; cambiar acuerdos sigue
requiriendo la consulta ya definida. Un motor de memoria puede indexar fuentes
y devolver referencias sin constituirse en autoridad paralela. No se ha elegido
ningún motor ni mecanismo de almacenamiento.

### Mantenimiento del conocimiento

T800R mantiene el conocimiento dentro de los acuerdos; no modifica los acuerdos
para hacerlos coincidir con el código. Sus responsabilidades aceptadas son:

- Actualizar referencias e índices cuando un documento se mueve y el destino es
  inequívoco.
- Corregir resúmenes desactualizados respecto de sus originales, conservando la
  referencia a éstos.
- Revisar la aplicabilidad de un aprendizaje cuando cambie una fuente que lo
  sustenta, señalando qué necesita volver a comprobarse.
- Ante diferencias entre documentación y código, distinguir documentación
  descriptiva desactualizada de una implementación que incumple un requisito.
- Consultar cuando resolver una contradicción exija cambiar un acuerdo funcional
  o técnico, continuando el trabajo independiente.

Se combinarán comprobaciones mecánicas y revisión semántica apoyada en evidencia.
La frecuencia y los mecanismos se concretarán en la sesión 7.

### Fuentes incorporables por proyecto

El usuario quiere aportar ejemplos de implementación y documentación oficial,
como Microsoft Learn, que pueden consultarse mediante recuperación de documentos
(RAG) o herramientas expuestas por MCP. Son ejemplos de fuentes y mecanismos de
acceso posibles, no una selección tecnológica ni fuentes obligatorias para todos
los proyectos.

T800R debe proporcionar herramientas para incorporar las fuentes que el proyecto
considera de verdad en la configuración inicial y durante el trabajo posterior.
El registro declara el ámbito y los criterios de autoridad acordados con la
persona, separados de la forma de acceso. La fuente recuperada se utiliza dentro
de esos criterios y no modifica por sí sola acuerdos funcionales o técnicos.
Las discrepancias se resuelven según las reglas aceptadas de originales,
derivados, ámbito, versión y consulta humana. El esquema y los campos obligatorios
del registro se concretarán posteriormente.

### Registro asistido de fuentes

El registro se construye y mantiene de forma colaborativa. La persona puede
aportar una fuente o expresar la necesidad de una referencia; T800R ayuda a
completar la información necesaria mediante preguntas y colaboración con ella.
La incorporación asistida se aplica tanto en la configuración inicial como
durante la evolución del proyecto.

La propuesta aceptada contempla identificar origen y acceso, ámbito y papel, y
versión aplicable cuando corresponda, además de conservar evidencia al utilizar
la fuente. El esquema exacto y sus campos obligatorios siguen pendientes; no se
exige a la persona completar manualmente todos los metadatos. El diálogo permite
aclarar para qué se utilizará una fuente, en vez de asumir que tiene autoridad
sobre todo el proyecto.

La colaboración humana establece los criterios de autoridad. Dentro de las
fuentes y criterios autorizados, T800R puede consultar y conservar referencias
concretas autónomamente. Si incorporar una fuente como autoridad o convertir un
ejemplo en regla no está cubierto por los acuerdos, debe aclararlo con la persona.
Una autorización por categoría, como documentación oficial de dependencias en
sus versiones aplicables, puede cubrir múltiples documentos sin consultas
humanas individuales; esa categoría es un ejemplo, no una política universal
impuesta a todos los proyectos.

### Evidencia investigada

Por petición del usuario, tres agentes investigaron prácticas de registro de
fuentes, acceso mediante RAG/MCP y autoridad y discrepancias. La síntesis y las
referencias primarias están en
[Investigación de fuentes](../research-fuentes-sesion-3.md). Recomiendan separar
identidad, ámbito de autoridad, acceso y evidencia de uso; comprobar versión y
procedencia; y distinguir incorporación de fuentes de modificación de acuerdos.
El registro asistido fue aceptado posteriormente, según la tabla de decisiones.
Las demás recomendaciones sólo son acuerdos cuando se registran expresamente
como tales; la investigación por sí sola no les confiere ese estado.

### Aclaración de OKF e investigación ampliada

El usuario aclaró que OKF significa **Open Knowledge Format**, la especificación
abierta presentada por Google Cloud, y aportó su artículo de introducción.
La expansión Operational Knowledge Files de un documento de ideas fue aplicada
erróneamente por el asistente a la discusión. Se corrige esa interpretación;
OKF no es sinónimo de conocimiento verificado ni una decisión de adopción.

La [investigación ampliada](../research-open-knowledge-format.md) contrasta el anuncio
v0.1 con la especificación v0.2 en su repositorio canónico, la implementación de
referencia y prácticas documentadas por OpenAI, Anthropic y StrongDM. Los cuatro
agentes solicitados no pudieron iniciar por límite de uso; la investigación se
completó directamente mediante lectura de fuentes primarias y código público.

Open Knowledge Format describe representación e intercambio. El usuario aceptó
evaluarlo para el conocimiento mantenido que conecta y sintetiza fuentes sin
sustituir la autoridad de los originales. La responsabilidad de la memoria se
aceptó posteriormente para continuidad y recuperación de experiencias, sin
autoridad paralela. El formato, perfil y versión de OKF no están elegidos.

### Prácticas candidatas de los artículos

El usuario autorizó revisar los artículos como insumos de adopción. La siguiente
matriz organiza parte de la discusión; salvo las prácticas expresamente aceptadas
en la tabla de decisiones, sus filas siguen siendo propuestas. Forma parte de la [revisión transversal](../product-definition.md#revisión-transversal-de-prácticas-de-harnesses)
que abarca todos los aspectos del harness y continúa en las sesiones posteriores.

| Práctica candidata | Evidencia | Beneficio esperado | Coste o riesgo | Sesión de decisión |
| --- | --- | --- | --- | --- |
| Punto de entrada breve que orienta hacia documentos canónicos; índices derivados. **`accepted` en sesión 3.** | OpenAI, Harness engineering; OKF, índices. | Descubrimiento predecible sin duplicar acuerdos ni cargar un manual completo. | Mantener enlaces y evitar que los resúmenes oculten condiciones relevantes. | 3: responsabilidad aceptada; 6: concretar carga de contexto. |
| Mantenimiento del conocimiento con comprobaciones de estructura, enlaces y vigencia, y revisión semántica apoyada en evidencia. **`accepted` en sesión 3.** | OpenAI, mantenimiento documental; LLM Wiki, revisión periódica. | Detectar degradación y contradicciones antes de reutilizarlas. | Coste de revisión y falsos positivos; el comportamiento actual del código no autoriza cambiar un requisito. | 3: responsabilidad aceptada; 7: concretar curación y caducidad. |
| Reanudar comprobando artefactos y estado real, no sólo notas. | Anthropic, agentes de larga duración. | Evitar continuar desde supuestos incorrectos o declarar éxito prematuro. | Tiempo de comprobación; ajustar su alcance al cambio. | 4, partiendo de la coherencia de Git, tracker y evidencia ya aceptada. |
| Recuperación selectiva y resúmenes con referencias al detalle original. | OpenAI; StrongDM, Pyramid Summaries. | Reducir ocupación de contexto y facilitar exploración. | Pérdida de matices en resúmenes y latencia al expandirlos. | 6. |
| Convertir restricciones acordadas y verificables en comprobaciones automatizadas. | OpenAI, invariantes; StrongDM, validación por escenarios. | Mayor autonomía con evidencia observable de cumplimiento. | Cobertura incompleta y coste de mantener validaciones; no toda regla admite comprobación mecánica. | 4 y 12. |
| Evaluación regresiva proporcional del harness ante cambios de instrucciones, skills, políticas, adapters, herramientas o modelos que puedan alterar su comportamiento. **`accepted` en sesión 4.** | Anthropic, evals ante cambios del harness. | Detectar degradación del producto T800R, no sólo del código consumidor. | Corpus, baseline, frecuencia, ejecución CI/offline y umbrales pendientes; no se impone todavía su ejecución siempre en CI ni un alcance de MVP. | 4: principio aceptado; 11–12: concretar arquitectura y validación. |

Las prácticas no se adoptan en bloque ni implican asumir los límites de revisión
humana de los casos externos. Las revisiones por riesgo y final de T800R siguen
siendo los acuerdos vigentes.

### Detalles aplazados

| Detalle | Estado | Justificación y punto de resolución |
| --- | --- | --- |
| Mecánica restante de persistencia, conciliación, concurrencia, reanudación y revalidación. | `deferred` | El lifecycle y sus invariantes quedaron aceptados en la sesión 4 y ADR-003; mecanismos, schemas y detalles de handoff continúan en la sesión 5. |
| Selección, presupuestos y reconstrucción de contexto. | `deferred` | La obligación de persistir y los límites de autoridad están definidos; su contrato corresponde a sesión 6. |
| Perfil del conocimiento, curación, frecuencia de mantenimiento y posible adopción/versionado de OKF. | `deferred` | Se aceptaron responsabilidad y evaluación del formato; la representación detallada corresponde a sesión 7. |
| Esquema del registro, campos obligatorios y mecanismos de consulta de fuentes. | `deferred` | Ámbitos, criterios de autoridad y distinción frente al acceso están acordados; se concretarán en conocimiento, portabilidad y adopción, sesiones 7, 8 y 10. |
| Formato, adapters, permisos, distribución y actualización de skills. | `deferred` | Su papel y mejora basada en experiencia y evaluación están aceptados; compatibilidad y operación corresponden a sesiones 8, 9 y 10. |
| Herramientas y rutas concretas de tracking, memoria y evidencia. | `deferred` | Sus responsabilidades ya están asignadas; selección en portabilidad, experiencia y arquitectura, sesiones 8, 10 y 11. |
| Evaluación de activación, calidad y coste de skills y efectividad del modelo de información. | `deferred` | El principio está aceptado; experimentos y métricas se concretarán en sesión 12. |

<a id="s03-cierre"></a>

### Comprobación de cierre

El criterio de salida está cumplido:

- Git y el work tracker tienen responsabilidades distintas de los acuerdos y
  la evidencia, con comprobación de coherencia antes de completar trabajo.
- El conocimiento mantenido conecta fuentes conservando procedencia; OKF se
  evalúa como representación y no como autoridad propia.
- Memoria, skills y contexto efímero tienen funciones y límites explícitos.
- Índices, resúmenes y otras representaciones derivadas no sustituyen originales.
- Las discrepancias se evalúan por fuente, ámbito y versión; los cambios de
  acuerdos requieren consulta, preservando el avance independiente.
- La información necesaria para continuar debe persistirse en su fuente apropiada.

La decisión transversal queda recogida en
[ADR-002](../adr/ADR-002-fuentes-canonicas-y-conocimiento.md). Los detalles aplazados
no bloquean el ciclo operativo. La revisión de artículos avanzó en orientación,
mantenimiento y skills; su cobertura transversal continúa en las demás sesiones.

