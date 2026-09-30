# S04 — Sesión 4: ciclo operativo

Estado: `completed`. El ciclo operativo quedó acordado y su criterio de salida
fue comprobado el 2026-09-15. Véase [ADR-003](../adr/ADR-003-ciclo-operativo-y-coordinacion.md).

### Objetivo

Definir cómo T800R incorpora un repositorio y conduce sesiones y tareas desde la
definición confirmada hasta la revisión final, incluyendo ejecución, supervisión,
ownership, bloqueos, concurrencia, cierre y reanudación.

### Punto de entrada de la sesión

Distinguir el ciclo del trabajo de producto del ciclo de las sesiones de agentes:
qué inicia una ejecución, qué responsabilidades asume el orchestrator y cómo
verifica el estado persistido al retomar. Partir de los ADRs 001 y 002.

La separación entre ciclo/incremento y tarea, y entre su etapa y su estado,
queda aceptada en esta sesión.
El usuario quiere diseñar el SDLC a partir del estudio de estos proyectos:

- https://github.com/addyosmani/agent-skills
- https://github.com/nWave-ai/nWave
- https://github.com/mattpocock/skills
- https://github.com/obra/superpowers
- https://github.com/bmad-code-org/bmad-method
- https://github.com/Fission-AI/openspec
- https://github.com/github/spec-kit

La preparación del entorno del harness (estructura, MCPs, memoria y herramientas)
se distingue del proceso de desarrollo que operará sobre él. Esto no modifica
el acuerdo de que T800R planifica, ejecuta y supervisa agentes. Los proyectos
aportados son referencias para evaluar, no metodologías ya adoptadas.

La [comparación de referencias del SDLC](../research-sdlc-references.md) registra la
investigación de los tres proyectos con commits y rutas examinados: flujos,
intervención humana, ejecución autónoma, recuperación, controles y divergencias
documentales. No se ejecutaron sus herramientas. La primera propuesta para
discutir es un SDLC adaptable con etapas y criterios explícitos, donde T800R
determine cuáles ya están satisfechos y cuáles debe ejecutar según evidencia.
El usuario aceptó explorar esta propuesta como base de diseño. Los acuerdos
posteriores de esta sesión concretan el metaflujo, `stage`/`status` y la separación
entre incremento, tarea y sesión, incluidas las transiciones de etapa.

### Acuerdos y orientación de la sesión

La comparación se amplió con [Superpowers y BMAD](../research-superpowers-bmad.md),
aportados después por el usuario. Se examinaron definición proporcional,
investigación para decidir, preparación, delegación, revisión y recuperación en
commits identificados. Son evidencia para decidir, no aceptación de sus flujos.
El criterio proporcional de preparación para construir se aceptó después y se
registra entre las conclusiones de esta sesión.

La [investigación sobre responsabilidades del orchestrator](../research-orchestrator-responsibilities.md)
contrasta esas referencias con fuentes primarias de Anthropic, OpenAI, Google
Cloud y Microsoft. La evidencia separa planificación, descomposición,
coordinación, ejecución y verificación, y no respalda que un único agente deba
realizarlas todas ni que cada función requiera siempre un agente permanente. La
distribución aceptada para T800R queda registrada a continuación.

El usuario aportó después [The AI-Native SDLC playbook de Anthropic](../research-ai-native-sdlc-playbook.md).
Su ciclo `Plan → Design → Build → Test → Deploy → Maintain` y sus controles se
compararon con T800R. Refuerza varios acuerdos vigentes, pero sus archivos y
mecanismos específicos de Claude Code no son contratos adoptados. `Maintain` se
acepta como capacidad continua y transversal, no como etapa del incremento;
los evals del harness y la separación portable entre asesoramiento y enforcement
se aceptan según las conclusiones registradas.

| Conclusión | Estado | Justificación |
| --- | --- | --- |
| Explorar un SDLC adaptable con etapas y criterios de salida explícitos, cuyo recorrido aproveche lo ya resuelto y comprobado. | `accepted` | La propuesta se aceptó como base y se concretó posteriormente en los acuerdos operativos de esta sesión. |
| La definición debe dar espacio, cuando la tarea lo requiera, a búsqueda e investigación tanto de producto como técnica, con plena participación humana para construir el entendimiento y decidir. | `accepted` | El usuario explicitó que estas actividades forman parte del entendimiento inicial, no sólo de ejecutar una definición ya cerrada. Complementa la definición funcional y técnica acordada en la sesión 2. |
| Investigación de producto, investigación técnica y definición conjunta formarán un ciclo colaborativo e iterativo, orientado a resolver incertidumbres que afectan decisiones. Podrán alternarse y reabrirse en el ámbito afectado cuando la construcción exija cambiar un acuerdo. | `accepted` | El usuario aceptó alcanzar claridad mediante iteraciones, en vez de etapas rígidas de una sola pasada. Los agentes pueden buscar y analizar; la persona participa en preguntas, interpretación y elección, manteniendo el avance del trabajo independiente. |
| El metaflujo del SDLC será `plan → design → build → verify → deploy`, con pasos internos por concretar. | `accepted` | El usuario explicitó esta estructura como su intención. Ordena el diseño del ciclo sin imponer todavía subpasos, gates ni permisos de despliegue. |
| `Maintain` no se añade como etapa del incremento: es una actividad/capacidad continua y transversal que observa y diagnostica; una señal, incidente o aprendizaje que requiera cambiar producto origina un nuevo incremento que vuelve a `plan`. | `accepted` | `Maintain` es continuo; hacerlo etapa impediría cerrar claramente un incremento. Reabrir `plan` conserva acuerdos, readiness, trazabilidad y autorización. Sus niveles de acción quedan definidos por el acuerdo específico de esta sesión; runbooks y umbrales concretos siguen pendientes y no autorizados. |
| Existe una frontera explícita entre `plan` y `design`: `plan` acuerda problema, alcance, comportamiento, criterios de aceptación, restricciones y contratos compartidos; `design` decide la solución técnica, descompone tareas y define validaciones. `plan` y `design` pueden iterar, pero cambiar una interfaz o criterio de aceptación ya acordado obliga a volver a `plan`, aunque la implementación técnica sea pequeña. | `accepted` | Separa qué se logra de cómo se construye, protege los acuerdos y conserva la autonomía técnica dentro de ellos. |
| Usar desarrollo guiado por especificaciones de forma evolutiva, sin exigir detallar todos los features de una vez y admitiendo cambios derivados del aprendizaje durante construcción. | `accepted` | El usuario expresó esta preferencia y pidió examinar OpenSpec y Spec Kit. El asistente interpreta «SSD» como SDD; los acuerdos posteriores concretan granularidad y evolución, mientras las herramientas siguen pendientes. |
| Mantener dirección general y contratos compartidos, y detallar specs por cambio o incremento próximo. Las specs acompañan todo el metaflujo y evolucionan con trazabilidad cuando se aprende construyendo. | `accepted` | El usuario aceptó la síntesis de SDD evolutivo: conservar coherencia global sin fingir certeza sobre todos los features futuros. Las rutas y formatos concretos siguen pendientes. |
| Ante una hipótesis refutada, T800R ajusta autónomamente implementación, diseño o tareas dentro de lo delegado; si cambia comportamiento, alcance o una decisión técnica acordada, reabre colaboración humana sobre el ámbito afectado. Identifica dependencias, actualiza registros y determina qué revalidar, conservando trabajo válido e historia y continuando lo independiente. | `accepted` | El usuario aceptó gestionar el aprendizaje sin reiniciar todo el proyecto ni modificar acuerdos implícitamente. |
| Inspirarse en OpenSpec, Spec Kit y las herramientas de referencia, tomando las prácticas útiles y adaptando las que no encajen con T800R. | `accepted` | El usuario explicitó este criterio de selección y adaptación. No implica instalar ni adoptar íntegramente una herramienta o metodología. |
| La autorización humana para entrar en `build` se concede por incremento, no por tarea ni una sola vez para toda la iniciativa. | `accepted` | La persona autorizó explícitamente esta granularidad de entrada. |
| T800R determinará y presentará con evidencia si el incremento cumple el criterio de preparación; la persona autorizará entonces iniciar `build`. | `accepted` | La persona aceptó que T800R evalúe y exponga la preparación, conservando en ella la autorización de inicio. Las condiciones objetivas de `readiness` se registran en la conclusión siguiente. |
| Un incremento estará objetivamente preparado para que T800R lo presente como listo para `build` cuando tenga: resultado, alcance y criterios de aceptación acordados; restricciones, contratos y fuentes aplicables identificados; decisiones técnicas indispensables tomadas o explícitamente delegadas; al menos una tarea ejecutable con dependencias y validación definidas; permisos y recursos necesarios disponibles; y ninguna incógnita bloqueante sobre comportamiento o riesgo. | `accepted` | El usuario aceptó estas condiciones mínimas. T800R debe evaluar y presentar evidencia de cada condición; las preguntas futuras y los detalles delegados no bloquean, y no se exige un paquete documental fijo. La persona autoriza `build` por incremento según el acuerdo ya registrado. |
| Tras la autorización de un incremento, T800R ejecutará autónomamente sus tareas y las decisiones técnicas delegadas, sin aprobaciones adicionales por tarea. | `accepted` | La autorización por incremento cubre la ejecución dentro de los acuerdos vigentes y evita gates rutinarios por tarea. |
| T800R consultará a la persona para continuar si necesita cambiar comportamiento, alcance, interfaz, criterio de aceptación, una decisión técnica acordada, permisos o un riesgo que requiera revisión según los acuerdos vigentes. | `accepted` | La persona explicitó estos límites de autonomía y conserva la revisión de cambios o riesgos que excedan lo acordado. |
| La aceptación humana final del incremento ocurre después de `verify` y antes de `deploy`. | `accepted` | Separa la aceptación funcional final de las comprobaciones técnicas posteriores al despliegue; la aceptación humana no las sustituye. |
| `deploy` se autoriza por política de entorno: T800R puede desplegar autónomamente en entornos reversibles previamente autorizados. Producción, efectos externos o acciones irreversibles requieren autorización humana explícita, presentando revisión, destino, comprobaciones y recuperación. La aceptación funcional previa no autoriza por sí sola esos despliegues. | `accepted` | Separa aceptación funcional de autorización de efectos y conserva autonomía donde el riesgo está acotado. |
| La entrada a `design` no requiere un gate humano separado: T800R puede avanzar cuando los acuerdos funcionales de `plan` ya fueron confirmados; si falta un acuerdo funcional, debe consultar. | `accepted` | La persona aceptó eliminar una aprobación separada para `design`, sin permitir que se avance sobre acuerdos funcionales ausentes. |
| Separar `stage` y `status` para el ciclo, los incrementos y las tareas; una sesión no tiene `stage` propia. | `accepted` | Evita proliferar estados combinados y distingue progreso, espera e impedimentos; la sesión es un contenedor efímero de ejecución y sólo usa el estado operativo aceptado. |
| Las etapas (`stage`) disponibles son `plan`, `design`, `build`, `verify` y `deploy`. | `accepted` | Conserva el metaflujo acordado y separa la etapa de trabajo del estado operativo. |
| Los estados (`status`) disponibles son `pending`, `ready`, `in_progress`, `waiting`, `blocked`, `completed` y `cancelled`. | `accepted` | Proporciona una enumeración común para ciclo, incrementos y tareas, sin combinar etapa y estado. |
| `waiting` indica que existe una respuesta o dependencia externa identificada; T800R conserva la espera y continúa el trabajo independiente. | `accepted` | Distingue una espera operativa identificada de un impedimento sin vía autorizada. |
| `blocked` indica que no existe una vía autorizada para avanzar en ese ámbito. | `accepted` | Distingue el impedimento que requiere resolver la autorización o el bloqueo de una espera que puede mantenerse. |
| Toda transición conserva su razón, evidencia y responsable. | `accepted` | Mantiene la trazabilidad operativa de los cambios de etapa y estado. |
| El camino normal de estados es `pending → ready → in_progress → completed`. Desde `in_progress` también se puede pasar a `waiting` o `blocked`. | `accepted` | Define un flujo mínimo y explícito para iniciar, ejecutar y cerrar trabajo, sin confundir esperas o impedimentos con avance normal. |
| Al resolverse la causa de `waiting` o `blocked`, el trabajo vuelve a `ready` si debe reasignarse, o a `in_progress` si conserva el ownership. | `accepted` | Hace explícita la recuperación según si el trabajo cambia o conserva responsable, preservando la continuidad operativa. |
| Cualquier estado no terminal puede pasar a `cancelled` con una razón registrada. | `accepted` | Permite detener trabajo de forma explícita sin borrar la historia de por qué no continuará. |
| `completed` sólo se reabre ante cambio, fallo o evidencia nueva que invalide su cierre; vuelve a la etapa y estado apropiados, conserva la historia y marca qué evidencia debe renovarse. | `accepted` | Permite recuperación explícita sin presentar como vigente un cierre invalidado ni perder la trazabilidad de lo ya realizado. |
| No se permiten saltos de estado sin registrar razón, evidencia y responsable. | `accepted` | Refuerza la historia preservada y evita transiciones operativas que no puedan ser explicadas o verificadas. |
| Toda tarea requiere validación antes de presentarse como terminada. | `accepted` | Evita confundir la ejecución o el estado declarado con evidencia de que el resultado cumple; la validación debe quedar vinculada a la revisión comprobada. |
| Una tarea pasa a `completed` sólo cuando produjo y persistió el resultado esperado sobre una revisión identificada; cumple sus criterios de aceptación aplicables; ejecutó y enlazó las validaciones vigentes; superó verificación independiente cuando el catálogo aceptado la exige; actualizó dependencias y hallazgos que afecten otros trabajos; y no deja defectos conocidos dentro del alcance, salvo reclasificación explícita fuera de éste. Si no puede demostrarlo, queda en `in_progress`, `waiting` o `blocked`, no en `completed`. | `accepted` | Hace el cierre verificable y listo para handoff, con una revisión proporcional: reúne resultado persistido, aceptación, validación vigente, independencia exigida por riesgo, impacto en trabajos relacionados y ausencia de defectos conocidos dentro del alcance. |
| Un incremento pasa a `completed` sólo cuando todas sus tareas requeridas están `completed`, o fueron canceladas con impacto y cambio de alcance aceptados; `verify` pasó sobre la revisión acordada, sin hallazgos bloqueantes y con las revisiones exigidas resueltas; la aceptación humana final quedó registrada; `deploy` se completó en destino autorizado con comprobaciones posteriores satisfactorias, o se acordó explícitamente que no aplica; y estado, evidencia y continuidad quedaron persistidos. Si espera autorización, ventana o comprobación de despliegue, queda en `stage deploy`/`status waiting`, no en `completed`. | `accepted` | Exige un incremento verificable, aceptado y con el despliegue resuelto; evita ocultar una entrega pendiente como terminada. |
| La necesidad de un agente verificador distinto del implementador se clasifica como `obligatorio`, `proporcional` o `no necesario` según el riesgo, el alcance y la verificabilidad. | `accepted` | Permite exigir independencia cuando las consecuencias o la aceptación semántica lo requieren, sin imponer un gate rutinario a tareas aisladas y deterministas. |
| El verificador independiente es `obligatorio` si un fallo puede causar pérdida o corrupción de datos, brecha de seguridad o permisos, efecto externo irreversible, incumplimiento contractual o regulatorio, ruptura amplia de interfaz o contrato compartido, o si la aceptación semántica no queda cubierta por validación determinista. | `accepted` | Incluye migraciones destructivas, autenticación/autorización, pagos, despliegues irreversibles y APIs públicas incompatibles. El agente prepara evidencia, pero no sustituye la revisión humana cuando corresponda. |
| El verificador es `proporcional` ante riesgo o incertidumbre moderados, varias áreas, dependencias no triviales, cobertura parcial, comportamiento interpretable o evidencia insuficiente; T800R decide entre verificador independiente, revisión focalizada o validaciones adicionales según consecuencias, alcance y verificabilidad. | `accepted` | Adecua el control a consecuencias, alcance y verificabilidad. |
| El verificador no es necesario sólo cuando el alcance es aislado, el comportamiento está completamente especificado, no hay efectos externos ni cambio de contrato y la aceptación se demuestra determinísticamente sobre la revisión entregada. | `accepted` | Comprende formato/lint, generación reproducible, enlaces mecánicos y cambios internos cubiertos por tests, tipos o build. |
| Ante la duda se empieza en `proporcional`; si no se demuestra impacto bajo y cobertura determinista suficiente, se exige verificador independiente. El implementador puede definir y ejecutar comprobaciones, auto-revisar, corregir y entregar a `stage verify`, pero no cuenta como verificador independiente. | `accepted` | La evidencia identifica la revisión, las condiciones y el resultado; la revisión requerida no detiene tareas independientes. **Precisión 2026-09-30 (S12, `REV-2026-105`):** el predicado operacional de independencia (comparación por `actor_id`, exclusión de workers y owners, `default deny` sin historial) está en [S12](session-12-validation-convergence.md#decisiones). |
| Cada tarea tiene un único owner activo, responsable de su estado, resultado y evidencia. La asignación declara alcance de escritura, dependencias y revisión base. T800R sólo ejecuta en paralelo tareas con escritura disjunta o con una estrategia explícita de secuenciación/integración; una superficie compartida tiene un único escritor o integrador a la vez. Lectores y verificadores pueden operar en paralelo sin adquirir escritura. Transferir o recuperar ownership registra la razón, el estado real y el trabajo preservado; nunca hay toma silenciosa. | `accepted` | Preserva autonomía y paralelismo sin duplicación, sobrescritura ni estado desactualizado. |
| Al iniciar o reanudar, el orchestrator verifica la revisión real, los cambios presentes, el estado y la evidencia persistidos, el owner declarado y el último checkpoint. El owner activo coordina o espera; la liberación o transferencia explícita asigna un sucesor. Ante aparente abandono, primero preserva y registra el trabajo recuperable y confirma que no existe otro escritor activo. Una duda no resoluble queda en `waiting` o `blocked` y no autoriza escritura. Toda nueva asignación registra base, alcance y estado heredado. | `accepted` | Exige reconciliación real antes de reasignar o escribir y preserva el trabajo válido. El umbral temporal concreto podrá configurarse después; el fin de una conversación no implica abandono. |
| Adoptar un orchestrator delgado con capacidades bajo demanda: el orchestrator reconcilia el estado, selecciona el siguiente trabajo, asigna ownership, coordina dependencias y concurrencia y aplica gates; mantiene accountability por la coherencia, pero no realiza por defecto todas las actividades. El planner investiga cuando es necesario, propone plan y diseño, descompone tareas y presenta readiness; el worker ejecuta dentro del brief, herramientas y permisos; el verifier evalúa resultado y evidencia con independencia proporcional al riesgo; runtime/policy aplica permisos, límites, transiciones y autorizaciones determinísticamente. La persona conserva autoridad sobre acuerdos, autorización de `build` por incremento, alto riesgo, aceptación y `deploy` sensible. Son roles/capacidades bajo demanda, no agentes permanentes: en trabajo simple no se exige separación material y se separan agentes o contextos cuando lo justifican especialidad, independencia, riesgo, paralelismo o contexto. El orchestrator verifica que exista una descomposición válida, sin tener que producirla personalmente. | `accepted` | El usuario aceptó el orchestrator delgado descrito en la [investigación sobre responsabilidades del orchestrator](../research-orchestrator-responsibilities.md): evita sobrecarga y punto único de fallo sin imponer handoffs o coste universales. Sustituye la propuesta previa de responsabilidades amplias del orchestrator no aceptada. |
| Los cambios a instrucciones, skills, políticas, adapters, herramientas o modelos que puedan alterar el comportamiento del harness requieren evaluación regresiva proporcional contra tareas y criterios versionados antes de liberarse. | `accepted` | Detecta degradación del producto T800R, no sólo del código consumidor, sin imponer un coste universal antes de medir el riesgo. No se decide aún que deba ejecutarse siempre en CI ni el alcance del MVP; corpus, baseline, frecuencia, ejecución CI/offline y umbrales se defieren a las sesiones 11–12. |
| Las instrucciones, specs, conocimiento y skills orientan o explican; no conceden permisos ni demuestran cumplimiento. Toda regla obligatoria verificable mecánicamente debe aplicarse mediante runtime/policy determinista —incluidos permisos de herramientas, rutas protegidas, schemas, límites, gates de autorización y destinos de deploy—. Las reglas semánticas no mecanizables se comprueban con evidencia, verifier y revisión humana según riesgo. Los mecanismos concretos se decidirán después; los hooks de Claude no son contrato núcleo. | `accepted` | Establece un contrato portable entre orientación probabilística y enforcement, sin falsa seguridad ni dependencia de proveedor. |
| `Maintain` observa y diagnostica automáticamente con acceso de sólo lectura. Puede crear una propuesta o incremento `draft` con señal, evidencia, impacto y deduplicación, pero no autoriza `build`. Sólo ejecuta un runbook si está explícitamente preautorizado, es reversible, está acotado por runtime/policy, es observable y tiene rollback y comprobación posterior. Un cambio de producto, una acción irreversible o una salida de límites vuelve a `plan` y a los gates acordados. | `accepted` | Permite autonomía creciente dentro de políticas verificables. Los runbooks y umbrales concretos se definirán después; este acuerdo no autoriza ninguno. |
| La candidata de aislamiento paralelo queda cubierta por los acuerdos de ownership: escritura, dependencias, base y estrategia de integración. Los worktrees siguen como mecanismo pendiente, no como contrato. | `accepted` | Los acuerdos de ownership ya establecen las condiciones de concurrencia; no se adopta un mecanismo de aislamiento por asociación. |
| Una sesión es un contenedor efímero de ejecución, distinto de un incremento y de una tarea: no tiene `stage` propia, referencia las tareas que atiende y usa los estados `pending`, `ready`, `in_progress`, `waiting`, `blocked`, `completed` y `cancelled`. Nace en `pending`; pasa a `ready` tras reunir el contexto mínimo, reconciliar repositorio, estado y evidencia, verificar permisos y descartar conflictos de ownership; pasa a `in_progress` al tomar trabajo autorizado; queda en `waiting` sólo si no hay trabajo ejecutable y espera una dependencia identificada, o en `blocked` si no existe una vía autorizada. | `accepted` | Mantiene la sesión como contenedor efímero y verificable, separada del estado del trabajo que referencia; evita confundir estado conversacional con estado operativo y exige reconciliación antes de ejecutar. |
| Una sesión sólo pasa a `completed` tras persistir checkpoint, revisión y cambios reales, estados y evidencia, la disposición de cada ownership (liberado, transferido o retenido con intención de reanudar) y la próxima acción. Una interrupción queda `cancelled` o se recupera preservando lo encontrado. Reanudar crea una nueva sesión enlazada al checkpoint y vuelve a reconciliar. Completar una sesión no completa una tarea ni un incremento. | `accepted` | Hace verificables el cierre y la reanudación de la sesión efímera, conserva la trazabilidad del trabajo y evita inferir la finalización de tareas o incrementos desde el cierre conversacional. |

La participación humana en estas actividades no se limita a aprobar un documento
final: la persona formula y orienta preguntas, interpreta hallazgos y elige
alternativas con los agentes. Éstos pueden realizar búsquedas y análisis para
alimentar la colaboración. No toda tarea requiere investigación nueva.

### Ciclo colaborativo de investigación y definición

| Actividad | Pregunta que resuelve |
| --- | --- |
| Investigación de producto | Qué problema resolver, para quién y con qué resultado; explorar flujos, soluciones existentes, alternativas, alcance y criterios de éxito. |
| Investigación técnica | Qué opciones permiten construirlo dentro de las restricciones; contrastar documentación, proyectos, compatibilidad, arquitectura, lenguajes, costes y limitaciones. |
| Definición conjunta | Qué acuerdos funcionales y técnicos resultan, cómo se aceptará el resultado y qué detalles se delegan a T800R. |

Las actividades pueden alternarse: un hallazgo técnico puede cambiar una opción
de producto y motivar otra investigación. Cada búsqueda debe servir a una
incertidumbre que afecte una decisión. El ciclo se repite hasta alcanzar claridad
suficiente y confirmar la definición, tras lo cual T800R conduce la construcción.
Si ésta revela una incógnita que exige cambiar un acuerdo, se reabre con la
persona la parte afectada de investigación y definición, mientras continúa el
trabajo independiente.

### Próxima acción

Auditar integralmente el criterio de salida de la sesión 4 sin declararla
completada hasta comprobar cada obligación.

| Conclusión | Estado | Justificación |
| --- | --- | --- |
| Adoptar un coordinador intermedio como interlocutor, con workers explícitos, Astra bajo demanda y contexto inicial reducido. | `rejected` | El usuario eligió después Sol, no Terra, como interlocutor/coordinador. Workers explícitos, Astra bajo aprobación y contexto reducido sí se conservaron en la distribución aceptada. No constituye una decisión de arquitectura del producto. |
| Usar Sol como interlocutor/coordinador, Terra para investigación delegada, Luna para tareas mecánicas y Astra como consulta excepcional sugerida por Sol y acordada con el usuario. | `accepted` | El usuario aceptó esta distribución y eligió explícitamente Sol como interlocutor. Tras reiniciar, tareas breves confirmaron Sol para esta conversación, Terra para `general` y Luna para `explore` y `t800r-docs`. No hubo métricas de cuota y no se atribuye ahorro. Es un acuerdo operativo local, no una selección tecnológica de T800R. |
| Aplicar la distribución aceptada a la configuración local de OpenCode y exigir aprobación para invocar al asesor Astra. | `accepted` | Se configuraron modelos explícitos para agentes principales y subagentes en `opencode.jsonc` y `.opencode/agents/`; OpenCode 1.18.30 reconoció la configuración y la validación funcional breve confirmó los roles probados. Astra no se invocó porque no había bloqueo y sigue requiriendo aprobación. |

Operativamente, `plan` conserva los acuerdos sobre qué se logrará y `design` mantiene
autonomía para decidir cómo construirlo dentro de esos acuerdos. Una modificación de
interfaz o de criterio de aceptación vuelve a `plan`; ambos pueden iterar sin
confundir la implementación técnica con el acuerdo que la limita.

La conclusión aceptada separa `stage` y `status` para ciclo, incrementos y tareas:
las etapas son `plan`, `design`, `build`, `verify` y `deploy`; los estados son
`pending`, `ready`, `in_progress`, `waiting`, `blocked`, `completed` y
`cancelled`. `waiting` conserva una respuesta o dependencia externa identificada
mientras continúa el trabajo independiente; `blocked` indica que no existe una
vía autorizada para avanzar en ese ámbito. Toda transición debe conservar razón,
evidencia y responsable. El camino normal es `pending → ready → in_progress →
completed`; desde `in_progress` se puede pasar a `waiting` o `blocked`, y al
resolverse la causa se vuelve a `ready` si debe reasignarse o a `in_progress` si
se conserva el ownership. Todo estado no terminal puede pasar a `cancelled` con
una razón. `completed` sólo se reabre ante cambio, fallo o evidencia nueva que
invalide el cierre; conserva la historia y marca qué evidencia debe renovarse.
No se permiten saltos sin registrar razón, evidencia y responsable. Toda tarea
requiere validación. Una tarea sólo pasa a `completed` cuando produjo y persistió
el resultado esperado sobre una revisión identificada, cumple sus criterios de
aceptación aplicables, ejecutó y enlazó las validaciones vigentes, superó la
verificación independiente cuando el catálogo aceptado la exige, actualizó
dependencias y hallazgos que afecten otros trabajos y no deja defectos conocidos
dentro del alcance, salvo reclasificación explícita fuera de éste. Si no puede
demostrarlo, permanece en `in_progress`, `waiting` o `blocked`, no en
`completed`. Esto hace el cierre verificable y listo para handoff con revisión
proporcional. La aceptación humana final ocurre después de `verify` y antes de
`deploy`; el despliegue sigue la política de autorización por entorno y mantiene
comprobaciones posteriores. El cierre completo del incremento se define más
abajo. Ownership y concurrencia están acordados. También queda aceptada la
recuperación: al iniciar o reanudar, el orchestrator verifica la revisión real,
los cambios presentes, el estado y la evidencia persistidos, el owner declarado
y el último checkpoint. El owner activo coordina o espera; la liberación o
transferencia explícita asigna un sucesor. Ante aparente abandono, primero
preserva y registra el trabajo recuperable y confirma que no existe otro
escritor activo. Una duda no resoluble queda en `waiting` o `blocked` y no
autoriza escritura. Toda nueva asignación registra base, alcance y estado
heredado. El umbral temporal concreto podrá configurarse después; el fin de una
conversación no implica abandono. La justificación es reconciliar la realidad
antes de reasignar o escribir y preservar el trabajo válido. Las responsabilidades
del orchestrator delgado y sus capacidades bajo demanda quedan aceptadas. Tras
evaluar las candidatas aplicables del playbook y aceptar el lifecycle de sesión,
corresponde comprobar el criterio de salida e identificar cualquier obligación
operativa aún faltante.
La clasificación del verificador queda aceptada: es `obligatorio` ante riesgos
altos o aceptación semántica no cubierta determinísticamente, `proporcional` ante
riesgo o incertidumbre moderados, y `no necesario` sólo con alcance aislado y
aceptación determinista sin efectos externos ni cambio de contrato. Ante la duda
se exige verificador independiente si no se demuestra impacto bajo y cobertura
determinista suficiente. El implementador puede comprobar, auto-revisar, corregir
y entregar a `stage verify`, pero no cuenta como verificador; éste prepara, sin
sustituir la revisión humana cuando corresponda. La evidencia identifica la
revisión, las condiciones y el resultado; la revisión requerida no detiene
tareas independientes. La conclusión aceptada para el cierre del incremento
exige que todas sus tareas requeridas estén completadas, o canceladas con impacto
y cambio de alcance aceptados; que `verify` haya pasado sobre la revisión
acordada, sin hallazgos bloqueantes y con las revisiones exigidas resueltas; que
la aceptación humana final esté registrada; que `deploy` esté completado en
destino autorizado con comprobaciones posteriores satisfactorias, o conste
explícitamente que no aplica; y que estado, evidencia y continuidad estén
persistidos. Mientras falte una autorización, ventana o comprobación de
despliegue, el incremento conserva `stage deploy` y `status waiting`, no
`completed`. Operativamente, el cierre no se infiere del cierre de tareas ni de
la aceptación aislada: requiere la cadena completa de verificación, aceptación,
despliegue resuelto y persistencia. La
entrada a `build` se autoriza por incremento: T800R presenta evidencia de las
condiciones objetivas aceptadas y la persona autoriza el inicio; después, T800R
opera autónomamente dentro de los acuerdos del incremento. Las preguntas futuras
y los detalles delegados no bloquean esta presentación cuando no afectan al
comportamiento o al riesgo. La entrada a `design` no tiene un gate humano
separado cuando los acuerdos funcionales de `plan` están confirmados. El criterio
de salida quedó cumplido tras acordar las transiciones de etapa y el contenido
mínimo de consultas y esperas.

### Especificaciones evolutivas

El usuario preguntó dónde encajan las specs y cómo evitar una especificación
exhaustiva de todos los features antes de aprender construyendo. Las specs siguen
siendo documentos versionados de acuerdos según sesión 3. Se aceptó una dirección
general con objetivos, restricciones, capacidades previstas y contratos
compartidos; el futuro puede conservar preguntas e hipótesis. El detalle de
requisitos y aceptación se prepara para el cambio o incremento que se construirá.

La [investigación de OpenSpec y Spec Kit](../research-evolutionary-specs.md) examina
cambios por deltas y convenciones living/flow-back/flow-forward, con revisiones
fijadas. Ambos contemplan evolución; SDD no implica un producto completamente
especificado de antemano. Se aceptaron dirección general y contratos compartidos,
detalle por cambio/incremento y revisión del ámbito afectado al aprender,
conservando acuerdos, historia y evidencia y continuando lo independiente.

Las specs acompañan el metaflujo: se elaboran acuerdos de comportamiento en plan,
se vinculan decisiones técnicas y ADRs en design, se consultan y se registran
hallazgos en build, se verifica contra su revisión acordada y se relaciona la
entrega desplegada con sus cambios y validaciones. Esto no fija una frontera
rígida entre plan y design ni una ruta de almacenamiento.

### Detalles diferidos después del cierre

- Medir consumo y calidad de la distribución durante trabajo real y evaluar el efecto de MCP/contexto, sin atribuir ahorro todavía.
- Subpasos opcionales y detalles delegables que no alteran los gates aceptados.
- Schema, rutas, timeout y canal de consultas, esperas y handoffs en la sesión 5.
- Esquemas, rutas y elección de herramientas; no adoptar OKF, Agent Skills,
  OpenSpec o Spec Kit sólo por haberlos investigado.
- Continuar revisión transversal de OpenAI y Anthropic en las sesiones aplicables.

Próxima acción: iniciar la sesión 5 y definir el contrato `handoff/v1`.

### Metaflujo aceptado

`plan → design → build → verify → deploy`

Esta es la estructura de alto nivel indicada por el usuario; admite pasos
internos por diseñar. Debe concretarse manteniendo el ciclo iterativo de
investigación y definición, la autonomía dentro de los acuerdos, la validación
durante la construcción y las revisiones humanas acordadas. La aceptación humana
final ocurre después de `verify` y antes de `deploy`, pero no autoriza por sí sola
desplegar. T800R puede operar autónomamente en entornos reversibles preautorizados;
producción, efectos externos y acciones irreversibles requieren autorización
explícita y comprobaciones posteriores.

### Transiciones de etapa y continuidad de tareas

| Conclusión | Estado | Justificación |
| --- | --- | --- |
| Un incremento pasa de `plan` a `design` cuando sus acuerdos funcionales están confirmados. | `accepted` | Mantiene la frontera entre qué se logrará y cómo se construirá, sin añadir un gate humano separado. |
| Un incremento pasa de `design` a `build` sólo con `readiness` demostrado y autorización humana explícita por incremento. | `accepted` | Conserva las condiciones objetivas de preparación y la autorización humana granular ya acordadas. |
| Un incremento pasa de `build` a `verify` cuando existe una revisión candidata con las tareas requeridas y la evidencia listas para evaluación. La validación puede ocurrir durante `build`; `verify` es el gate formal. | `accepted` | Separa la preparación continua de evidencia de la evaluación formal, sin impedir la validación temprana. |
| Un incremento pasa de `verify` a `deploy` cuando cumple la aceptación, las revisiones exigidas y la aceptación humana final. | `accepted` | Ordena el gate de verificación y aceptación antes de producir efectos de despliegue. |
| Un incremento pasa de `deploy` a `completed` según el cierre ya aceptado. | `accepted` | Conserva los requisitos vigentes de despliegue resuelto, comprobaciones posteriores y persistencia. |
| Un hallazgo devuelve sólo el ámbito afectado a `build`, `design` o `plan`; conserva la historia y revalida las dependencias afectadas. | `accepted` | Permite iterar sin reiniciar el incremento completo ni perder trabajo válido, manteniendo trazabilidad y coherencia. |
| Las tareas se asocian a la etapa donde contribuyen. Pueden completarse allí o pasar a otra etapa si el mismo entregable continúa; no recorren todas las etapas obligatoriamente. | `accepted` | Separa la etapa del incremento de la trayectoria de cada tarea y admite tareas no lineales. |

**Resumen operativo:** el incremento avanza por gates explícitos y puede iterar en
el ámbito afectado. `build` requiere `readiness` y autorización humana por
incremento; `verify` evalúa una revisión candidata preparada; la aceptación humana
final precede a `deploy`; el cierre sigue los requisitos ya aceptados. Las tareas
siguen al entregable en la etapa donde contribuyen, con historia y dependencias
revalidadas cuando un hallazgo obliga a volver atrás.

Revisar las prácticas aplicables de OpenAI y Anthropic: inicialización,
planificación, progreso incremental, trabajo prolongado, comprobación del estado
real, validación y recuperación. Compararlas con las necesidades de agentes de
una misma sesión y de sesiones independientes.

### Persistencia mínima de consultas y esperas

| Conclusión | Estado | Justificación |
| --- | --- | --- |
| Toda consulta o espera persistirá como mínimo: tipo (`waiting`, `bloqueo`, `decisión`, `revisión` o `permiso`); pregunta o acción exacta y autoridad destinataria; motivo y consecuencias; ámbito y dependencias afectadas; checkpoint, revisión base y evidencia; trabajo detenido y trabajo independiente que continúa; opciones y recomendación cuando existan; condición de resolución y próxima acción. Al responder, se registrarán la decisión y la evidencia y se recalcularán el estado, las dependencias y las validaciones afectadas. | `accepted` | Permite reanudar y resolver consultas o esperas sin perder contexto ni trazabilidad, sin imponer todavía un formato concreto. |
| Rutas, schema, timeout y canal de persistencia de consultas y esperas. | `deferred` | Se resolverán en la sesión 5; este acuerdo fija el contenido mínimo, no su representación ni mecanismo. |

**Resumen:** queda aceptado un registro mínimo y reanudable para cada consulta o
espera, con destinatario, impacto, alcance, dependencias, checkpoint, revisión,
evidencia, continuidad paralela, alternativas, resolución y próxima acción. La
respuesta debe actualizar la decisión y evidencia y recalcular lo afectado. No se
deciden todavía rutas, `schema`, `timeout` ni canal; corresponden a la sesión 5.

### Criterio de salida

Un ciclo operativo con estados y transiciones de sesión y tarea, responsabilidades
del orchestrator, reglas de ownership y concurrencia, condiciones de espera y
consulta, y obligaciones de persistencia, validación, cierre y reanudación; sin
ambigüedades bloqueantes para definir los handoffs en la sesión 5. Las prácticas
revisadas deben conservar su decisión y justificación.

<a id="s04-cierre"></a>

### Comprobación de cierre

El criterio está cumplido. Se definieron estados y transiciones de incremento,
tarea y sesión; gates del metaflujo; orchestrator delgado y capacidades bajo
demanda; ownership, concurrencia y recuperación; espera, bloqueo y consulta;
persistencia, validación, cierre y reanudación. La auditoría final no encontró
ambigüedades operativas que bloqueen el diseño de `handoff/v1`.

Los mecanismos, schemas, rutas, timeouts y adapters diferidos no modifican este
lifecycle y tienen sesión de resolución asignada. La decisión transversal queda
registrada en [ADR-003](../adr/ADR-003-ciclo-operativo-y-coordinacion.md).

