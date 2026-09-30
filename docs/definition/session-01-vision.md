# S01 — Sesión 1: visión y problema

Estado: `completed`. Síntesis aceptada y cierre aprobado por el usuario el
2026-09-14.

### Objetivo

Definir el problema que T800R resolverá antes de discutir mecanismos o
tecnología.

### Preguntas de la sesión

1. ¿Qué experiencias concretas han provocado pérdida de contexto, trabajo
   duplicado o dificultad para cambiar de agente o sesión?
2. ¿Qué hace actualmente una persona para recuperarse de esos problemas?
3. ¿Cuáles son los tres casos de uso principales que debe resolver el MVP?
4. ¿Qué resultado observable haría que T800R fuese valioso en esos casos?
5. ¿Qué problemas relacionados no intentará resolver T800R?

### Criterio de salida

- Una declaración del problema basada en experiencias reales.
- Un usuario primario y actores secundarios identificados.
- Tres casos de uso prioritarios.
- Una propuesta de valor comprobable.
- Objetivos y no objetivos explícitos.
- Un glosario inicial sin términos críticos ambiguos.

### Evidencia recogida

El usuario ha empezado a utilizar harnesses pequeños para prevenir la pérdida
de contexto, pero debe crearlos en cada repositorio. Su solución actual exige
repetir ese trabajo de preparación. Busca algo instalable que permita a los
agentes conseguir el contexto necesario sobre la forma de trabajo y las tareas,
y que facilite el trabajo de múltiples agentes en un proyecto sin interferencias.

El usuario concretó la preparación repetida: un lugar para specs, un tracker,
skills para retomar contexto y cerrar tareas dejando el estado actualizado, y
scripts de validación. Compartió `AprovisionamientoProd` como ejemplo real.
Todavía falta precisar el impacto de esa preparación. Sobre coordinación, el
usuario confirmó que le preocupan todos los conflictos planteados: tareas
duplicadas, sobrescritura de cambios, trabajo sobre estado desactualizado y
desalineación entre entregables. El resultado esperado es coordinar a los
agentes para no perder trabajo ni perjudicar el trabajo de los demás.

El usuario confirmó ambos escenarios de concurrencia en el mismo repositorio:
agentes dentro de una misma sesión y agentes en sesiones independientes.

#### Ejemplo revisado: AprovisionamientoProd

Revisión documental local realizada el 2026-09-14 en
`/Users/camilo-dev/src/AprovisionamientoProd`:

| Componente | Evidencia | Función observada |
| --- | --- | --- |
| Instrucciones de entrada | `AGENTS.md` y `CLAUDE.md` | Fuente común de reglas, mapa del proyecto y lectura selectiva del contexto; `CLAUDE.md` remite a `AGENTS.md`. |
| Specs y evidencia | `docs/evidencias/`, muestra `pieza-13b-projections-especificacion.md` | Alcance, decisiones ratificadas, verificaciones, revisiones y estado del trabajo. |
| Tracker | `docs/plan-aprovisionamiento.md`, sección «Orden y tracker» | Dependencias, secuencia, estado y referencias a evidencia por pieza. |
| Reanudación | `.claude/skills/retomar/SKILL.md` | Lee Git, tracker y punto de reanudación; prescribe comprobar vigencia antes de elegir el siguiente paso. |
| Cierre | `.claude/skills/cerrar-sesion/SKILL.md` | Prescribe persistir estado verificado, decisiones, bloqueos y próxima acción, y actualizar el tracker. |
| Validación | `scripts/fronts-prod/validar-local.sh` | Comprueba el payload contra reglas y referencias del proyecto; es validación específica del dominio. |

Las skills se leyeron como evidencia del harness, sin invocarlas. Los scripts
se inspeccionaron sin ejecutarlos; esta revisión no verifica el estado remoto
ni la eficacia operativa del harness.

Un incidente relevante está documentado en la cabecera de la spec de la pieza
13b: dos lotes de archivos disjuntos dejaron spec y payload coherentes por
separado, pero desalineados entre sí, y se necesitó una sesión de alineación.
Esto aporta un ejemplo de conflicto semántico entre entregables. El usuario
confirmó que este conflicto forma parte de su necesidad de coordinación, junto
con tareas duplicadas, sobrescrituras y uso de estado desactualizado, sin
priorizar uno sobre los demás.

### Conclusiones

| Estado | Conclusión | Justificación |
| --- | --- | --- |
| `accepted` | La preparación repetida de pequeños harnesses en cada repositorio es un problema que T800R debe abordar. | Es el coste de la solución que el usuario utiliza actualmente para prevenir la pérdida de contexto. |
| `accepted` | El producto debe ser instalable y permitir obtener el contexto de la forma de trabajo y las tareas del repositorio. | Es el resultado solicitado por el usuario para reutilizar esa preparación. |
| `accepted` | El trabajo de múltiples agentes sin interferencias es una necesidad del producto. | El usuario quiere que varios agentes puedan trabajar en el mismo proyecto sin chocarse; falta precisar los conflictos prioritarios. |
| `accepted` | La preparación repetida incluye specs, tracker, skills de reanudación y cierre, y scripts de validación. | El usuario enumeró estos componentes y la revisión documental de AprovisionamientoProd aporta un ejemplo concreto. Esto no fija aún su formato ni su implementación en T800R. |
| `accepted` | La coordinación debe abordar tareas duplicadas, sobrescrituras, estado desactualizado y desalineación entre entregables. | El usuario confirmó que todos le preocupan: los agentes deben coordinarse para preservar el trabajo propio y ajeno. No se ha elegido un mecanismo ni establecido una garantía absoluta de ausencia de conflictos. |
| `accepted` | La coordinación debe cubrir agentes de una misma sesión y agentes en sesiones independientes sobre el mismo repositorio. | El usuario confirmó que ambos escenarios forman parte de su forma de trabajo esperada. La coordinación no puede depender exclusivamente del contexto compartido de una conversación. |
| `accepted` | Los tres casos de uso prioritarios iniciales son incorporar el harness, cerrar y retomar trabajo, y coordinar múltiples agentes. | El usuario consideró adecuada esta propuesta para empezar. |
| `accepted` | La propuesta de valor inicial es preparar una vez la forma de trabajo del repositorio y mantener su continuidad al cambiar de sesión, cambiar de agente o trabajar en paralelo. | El usuario aceptó como punto de partida la propuesta presentada junto con los tres casos de uso. |
| `accepted` | T800R no resolverá de antemano el dominio de cada proyecto, no impondrá una metodología única ni tendrá como condición de éxito eliminar toda intervención humana. | El usuario aprobó estos límites iniciales: la base reusable debe admitir el conocimiento, la forma de trabajo y los puntos de intervención propios del repositorio. |
| `accepted` | La declaración del problema, los actores, los objetivos observables y el glosario inicial completan la visión del producto. | El usuario aceptó explícitamente la síntesis y aprobó cerrar la sesión 1 antes de limpiar el contexto. |
| `deferred` | El mecanismo de instalación, la obtención de contexto y la coordinación entre agentes. | Primero se concretarán los casos de uso; los mecanismos se resolverán en las sesiones correspondientes. |

### Casos de uso prioritarios iniciales

1. **Incorporar T800R a un repositorio:** disponer de una base instalable para
   specs, seguimiento, contexto y validaciones, adaptada a la forma de trabajo
   del proyecto, sin reconstruir el harness cada vez.
2. **Cerrar y retomar trabajo:** una sesión nueva o un agente distinto puede
   identificar qué se hizo, qué se verificó, qué está pendiente y cómo
   continuar, comprobando si el estado cambió.
3. **Trabajar con múltiples agentes:** los agentes conocen el trabajo en curso
   y sus dependencias, coordinan sus cambios y comprueban la coherencia de los
   entregables para evitar duplicación, sobrescrituras y trabajo desactualizado.

### Propuesta de valor inicial

Preparar una vez la forma de trabajo del repositorio y mantener su continuidad
al cambiar de sesión, cambiar de agente o trabajar en paralelo.

### No objetivos iniciales — aceptados

1. **Resolver de antemano el dominio de cada proyecto.** T800R aporta la base
   para descubrir y utilizar specs, reglas y validaciones; el conocimiento
   particular del proyecto debe incorporarse.
2. **Imponer una metodología única.** La forma de trabajo se define para el
   repositorio; el ciclo de AprovisionamientoProd es un ejemplo, no un flujo
   obligatorio para todos.
3. **Eliminar toda intervención humana.** Se conservan las decisiones y los
   puntos de intervención establecidos por el proyecto. La autonomía total no
   es una condición de éxito del MVP.

### Síntesis aceptada

#### Declaración del problema

Para trabajar con agentes sin perder continuidad, el usuario prepara pequeños
harnesses en cada repositorio: organiza specs y seguimiento, define cómo
retomar y cerrar trabajo y añade validaciones. Repetir esa preparación dificulta
reutilizar su forma de trabajo. Además, cuando varios agentes trabajan en el
mismo repositorio, dentro de una sesión o en sesiones independientes, necesita
coordinarlos para evitar duplicación, sobrescrituras, uso de estado desactualizado
y desalineación entre entregables. El coste de preparación y recuperación aún
no está cuantificado.

#### Actores

- **Usuario primario:** el autor de T800R, que incorpora el toolkit y dirige
  tareas reales en sus repositorios.
- **Actores secundarios:** agentes que ejecutan o revisan trabajo dentro de una
  sesión o desde sesiones independientes, y personas que intervienen en
  decisiones o pasos definidos por el proyecto.

#### Objetivos observables

1. **Adopción reusable:** incorporar la base común del harness a T800R y a otro
   repositorio real, aportando la configuración particular de cada proyecto sin
   reconstruir esa base.
2. **Continuidad:** una sesión nueva o un agente distinto identifica el estado,
   las decisiones, la evidencia, los bloqueos y la próxima acción desde lo
   persistido, y comprueba su vigencia sin depender de la conversación anterior.
3. **Coordinación:** ante tareas coincidentes, cambios incompatibles, contexto
   desactualizado o entregables desalineados, el flujo permite detectar el
   conflicto y resolverlo antes de dar el trabajo afectado por válido,
   preservando el trabajo propio y ajeno.
4. **Portabilidad:** demostrar los casos de uso con Codex, Claude Code y
   OpenCode. Los escenarios y métricas de aceptación detallados se definirán
   en las sesiones correspondientes.

#### Glosario inicial

| Término | Significado acordado |
| --- | --- |
| Harness | Conjunto de instrucciones, convenciones y herramientas que guía cómo los agentes obtienen contexto, ejecutan, coordinan y dejan constancia del trabajo. |
| Agente | Asistente que realiza o revisa trabajo mediante una herramienta como Codex, Claude Code u OpenCode. |
| Sesión | Instancia de trabajo con su propio contexto conversacional; puede incluir varios agentes y coexistir con otras sesiones. |
| Tarea | Unidad de trabajo con alcance, estado y criterio de finalización explícitos. |
| Spec | Especificación que describe el resultado esperado y los criterios que debe cumplir una tarea o cambio. |
| Tracker | Registro del trabajo, sus estados y dependencias, con referencias al detalle necesario para continuarlo. |
| Contexto vigente | Información pertinente para una tarea cuya correspondencia con el estado actual se ha comprobado; lo no comprobado se identifica como tal. |
| Cierre de sesión | Persistencia del estado y del punto de reanudación; no implica necesariamente que la tarea esté terminada. |
| Coordinación | Acuerdos y mecanismos para distribuir trabajo, gestionar dependencias y conflictos y mantener compatibles los resultados de varios agentes. |
| Repositorio consumidor | Repositorio que incorpora T800R y aporta sus reglas, conocimiento y validaciones particulares. |

<a id="s01-cierre"></a>

### Comprobación de cierre

Los seis criterios de salida están cumplidos: declaración del problema basada
en la experiencia del usuario y el ejemplo de AprovisionamientoProd; actores
identificados; tres casos de uso prioritarios; propuesta de valor comprobable
mediante los objetivos observables; objetivos y no objetivos explícitos; y
glosario inicial aceptado.

El impacto todavía no está cuantificado. Esa medición no bloquea la sesión 2;
las métricas y los experimentos detallados se concretarán en validación y
convergencia. No se seleccionó tecnología ni se autorizó la construcción.

