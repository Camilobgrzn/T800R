# Revisión Codex de skills/ (2026-10-05)

- Modelo: `gpt-6-astra`, esfuerzo `medium`, sin reintento. Base: `6f4519a`. Solo lectura.

Revisé los ocho `SKILL.md`, sus once plantillas y `skills/README.md`, contrastándolos con el flujo v4, S12 y el tracker. Base examinada: `6f4519a`. **No modifiqué archivos ni ejecuté las skills.**

Los hallazgos siguientes son documentales; no certifican compatibilidad ejecutada con los proveedores. Algunas contradicciones ya están presentes en v4: corregirlas requiere ajustar también el canon, no sólo las skills.

1. **Alta — La evidencia exige registrar el SHA del commit que la contiene.**  
   [feature-build/SKILL.md:93](skills/feature-build/SKILL.md:93) pide escribir el SHA entregado en la evidencia; [feature-verify/SKILL.md:44](skills/feature-verify/SKILL.md:44) exige `HEAD` igual a ese SHA y árbol limpio. Registrar la evidencia en otro commit cambia `HEAD`; dejarla sin commit ensucia el árbol. La circularidad reaparece al escribir el SHA candidato y los resultados dentro de la candidata en [feature-integrate/SKILL.md:70](skills/feature-integrate/SKILL.md:70).  
   **Corrección:** separar explícitamente revisión de trabajo y revisión de evidencia. Para integración, conservar la atestación del SHA final fuera de la candidata, en una ubicación con escritor autorizado. Ajustar también [workflow-construccion.md:221](docs/workflow-construccion.md:221).

2. **Alta — No se define cómo circulan los registros autoritativos entre ramas y worktrees.**  
   [feature-plan/SKILL.md:115](skills/feature-plan/SKILL.md:115) crea los registros; [feature-build/SKILL.md:48](skills/feature-build/SKILL.md:48) parte por defecto de `main`, y el [brief-template.md:13](skills/feature-build/references/brief-template.md:13) prescribe esa base. No se establece dónde persiste el orchestrator `assigned`, `delivered` y `completed`, ni cómo llegan a cada worktree. Tampoco cómo una tarea dependiente incorpora el código de su dependencia, todavía no integrado en `main`. El verifier escribe su informe pero tiene prohibido hacer commits en la rama ([feature-verify/SKILL.md:23](skills/feature-verify/SKILL.md:23)).  
   **Corrección:** definir referencia canónica de coordinación, responsable de persistir cada informe y protocolo de sincronización; incluir en el brief una base que contenga las dependencias verificadas.

3. **Alta — Un handoff emitido correctamente resulta inválido al reanudar.**  
   [session-handoff/SKILL.md:51](skills/session-handoff/SKILL.md:51) captura el hash de `participations.md` antes de solicitar `handoff_emitted` en la línea 66. [session-resume/SKILL.md:48](skills/session-resume/SKILL.md:48) exige simultáneamente ese hash y el nuevo evento. Si se registra el evento, cambia el hash; si no, falta el evento. Además, un commit posterior del orchestrator incumple la comprobación estricta de `HEAD^`.  
   **Corrección:** registrar la emisión antes de congelar el snapshot, o identificar una revisión de coordinación separada. Documentar el orden exacto y probar una emisión/aceptación completa.

4. **Alta — Los consumidores no comprueban toda la autorización vigente ni las invalidaciones.**  
   [feature-build/SKILL.md:37](skills/feature-build/SKILL.md:37) compara el digest del plan, pero no recalcula el de la spec actual; [feature-verify/SKILL.md:46](skills/feature-verify/SKILL.md:46) repite esa omisión. Contradice la exigencia de ambos digests actuales en [workflow-construccion.md:148](docs/workflow-construccion.md:148). Además, `feature-plan` produce eventos `invalidated`, pero las precondiciones de [feature-integrate/SKILL.md:35](skills/feature-integrate/SKILL.md:35) no exigen descartarlos ni vincular cada veredicto al plan vigente.  
   **Corrección:** comprobar spec, plan, autorización y revisión de entrega como conjunto; rechazar evidencia invalidada hasta que exista una verificación posterior aplicable.

5. **Alta — Un efecto prohibido por S12 puede clasificarse como aprobable.**  
   [feature-spec/SKILL.md:57](skills/feature-spec/SKILL.md:57) clasifica los «efectos externos irreversibles» como `high` y permite que la persona rebaje el riesgo. Sin embargo, [S12:64](docs/definition/session-12-validation-convergence.md:64) los declara `prohibited`; el propio [README.md:600](skills/README.md:600) lo conserva. Las skills principales sólo representan `routine | high`, y build no contiene una comprobación explícita de prohibición.  
   **Corrección:** evaluar primero `prohibited` y detenerse; una aprobación `high` nunca debe convertirlo en ejecutable. Distinguir corrección de clasificación de cambio autorizado de política.

6. **Alta — La revisión de rutas protegidas aparece después de ejecutar, y no cubre todas las rutas declaradas.**  
   [feature-build/SKILL.md:59](skills/feature-build/SKILL.md:59) ordena ejecutar tests y validaciones antes del control de `protected_paths`, situado en la línea 79. Aunque la prohibición posterior es explícita, el orden procedimental es peligroso. Además, build y verify enumeran rutas habituales sin exigir cargar las rutas adicionales de `policy.yaml`; véase [feature-verify/SKILL.md:57](skills/feature-verify/SKILL.md:57).  
   **Corrección:** convertir estos controles en precondiciones anteriores a cualquier ejecución, incluidos hooks. Resolver la política aplicable y registrar los hashes revisados; la [plantilla de veredicto:23](skills/feature-verify/references/verdict-template.md:23) actualmente no los recoge, aunque build los necesita para reutilizar la revisión.

7. **Alta — El handoff puede incluir cambios de otros actores en un commit del worker.**  
   [session-handoff/SKILL.md:45](skills/session-handoff/SKILL.md:45) ejecuta `git add` sobre todo `features/<id>/`, que incluye registros del orchestrator y veredictos ajenos. `git commit` también incorpora cualquier cambio que ya estuviera staged, aunque el `git add` sea selectivo. La comprobación de procedencia aparece después de los comandos. Esto debilita la separación de escritores de [workflow-construccion.md:50](docs/workflow-construccion.md:50).  
   **Corrección:** inspeccionar índice y árbol antes de actuar; detenerse ante cambios ajenos; añadir únicamente una lista explícita de archivos propios y comprobar el diff staged completo antes del commit.

8. **Alta — El cierre del spike puede eliminar su única entrega persistente.**  
   [spike/SKILL.md:45](skills/spike/SKILL.md:45) escribe `spikes/<id>.md` durante el experimento y después elimina worktree y rama, sin un paso para conservar el informe fuera de ellos. Si está sin commit, la eliminación puede fallar; si está comprometido sólo en esa rama, deja de tener una referencia durable.  
   **Corrección:** separar el informe de la rama desechable y persistirlo en una rama documental autorizada, verificando su conservación antes de eliminar el experimento. El reflog mencionado en la línea 56 no sustituye la entrega durable.

9. **Media — Los `concerns` producen una dependencia circular entre completar e integrar.**  
   [tasks-template.md:28](skills/feature-plan/references/tasks-template.md:28) permite `completed` únicamente con `concerns` aceptados. [feature-verify/SKILL.md:81](skills/feature-verify/SKILL.md:81) sitúa esa aceptación en gate 3, pero [feature-integrate/SKILL.md:35](skills/feature-integrate/SKILL.md:35) exige tareas completadas antes de preparar ese gate. Una dependencia posterior tampoco puede avanzar.  
   **Corrección:** definir una transición explícita para «verificada con observaciones pendientes» y decidir cuándo habilita dependencias e integración. Conservar la aceptación humana sin introducir implícitamente gates nuevos por tarea.

10. **Media — Ejecutar un efecto `high` depende de una “ronda siguiente” que puede no existir.**  
    [feature-verify/SKILL.md:88](skills/feature-verify/SKILL.md:88) prepara la solicitud y manda ejecutar el efecto en la ronda siguiente. Pero build sólo admite tareas `ready/in_progress` y menos de tres rondas ([feature-build/SKILL.md:41](skills/feature-build/SKILL.md:41)). Con `pass`, la tarea puede quedar `completed`; con tres rondas, queda bloqueada. No existe una transición específica de espera y ejecución del efecto aprobado.  
    **Corrección:** separar revisión, espera de aprobación, ejecución del efecto y comprobación posterior; no consumir una ronda de corrección sólo por esperar autorización.

11. **Media — Handoff/resume no distingue transferencia de implementación y continuación de verificación.**  
    [session-handoff/SKILL.md:32](skills/session-handoff/SKILL.md:32) admite emisores verifier e integrador sin ownership. [session-resume/SKILL.md:49](skills/session-resume/SKILL.md:49) exige que el emisor sea owner y después transfiere ownership al receptor si es distinto. Así rechaza esos handoffs o convierte al futuro verifier en owner, haciéndolo inelegible según S12. Además, escribe la aceptación antes de la transferencia que declara necesaria antes de escribir.  
    **Corrección:** añadir tipo de handoff, rol receptor y efecto sobre ownership; la verificación no debe transferir ownership de implementación. Delimitar expresamente la escritura de aceptación y el orden de transición.

12. **Media — La evidencia append-only no representa correctamente varios workers sucesivos.**  
    [evidence-template.md:11](skills/feature-build/references/evidence-template.md:11) tiene un único `actor_id` en la cabecera. [feature-verify/SKILL.md:35](skills/feature-verify/SKILL.md:35) exige que coincida con el worker de la entrega. Tras una transferencia, conservar la cabecera provoca incoherencia; reemplazarla atribuye ambiguamente las rondas anteriores.  
    **Corrección:** registrar actor, ejecución y entrega en cada entrada append-only; contrastar cada evento con su entrada correspondiente y mantener todos los participantes para calcular elegibilidad.

13. **Media — Faltan vías válidas para reclasificar, corregir borradores y replanificar.**  
    [feature-spec/SKILL.md:32](skills/feature-spec/SKILL.md:32) sólo admite un directorio inexistente o una spec con defecto reportado: excluye el `acotado` que ya tiene directorio pero no spec, pese a anunciar su reclasificación. También excluye revisar un borrador normal. [feature-plan/SKILL.md:41](skills/feature-plan/SKILL.md:41) limita la replanificación al defecto de spec, aunque v4 contempla cambiar el tamaño de tarea al agotar rondas.  
    **Corrección:** definir entradas para borrador, reclasificación, cambio de alcance y agotamiento de rondas, indicando qué aprobaciones se invalidan. Añadir además el recorrido `acotado` al cierre: [feature-integrate/SKILL.md:60](skills/feature-integrate/SKILL.md:60) exige modificar una `spec.md` que ese recorrido no crea.

14. **Media — “Sólo comandos de validación” contradice las operaciones necesarias de la propia skill.**  
    [feature-build/SKILL.md:28](skills/feature-build/SKILL.md:28) prohíbe cualquier comando fuera de «Validación», pero exige `git show`, `git hash-object`, creación de ramas, commits y `node --version`. El [brief-template.md:34](skills/feature-build/references/brief-template.md:34) reproduce la prohibición absoluta. Asimismo, no se aclara cómo se autorizan evidencia y `findings.md` cuando no figuran en las rutas del plan.  
    **Corrección:** distinguir operaciones de inspección, coordinación, edición y ejecución; declarar en el plan las escrituras documentales por rol y los comandos con efectos permitidos.

15. **Media — La convención de identidad mezcla actor y proveedor.**  
    [participations-template.md:37](skills/feature-plan/references/participations-template.md:37) define `actor_id` como `<proveedor>:<máquina o usuario>`. Dos actores independientes del mismo proveedor y máquina colisionan; una continuación del mismo actor en otro proveedor cambia de identidad aparente. Esto dificulta aplicar la independencia persistente de [S12:63](docs/definition/session-12-validation-convergence.md:63) y la rotación de E2/E4.  
    **Corrección:** asignar un identificador lógico estable independiente del proveedor; guardar proveedor y sesión como atributos. Documentar cuándo se continúa el mismo actor y cuándo la persona crea otro.

16. **Media — Las rutas relativas no sobreviven a la proyección descrita.**  
    [README.md:16](skills/README.md:16) promete proyecciones a proveedores, mientras los `SKILL.md` enlazan `../../docs/workflow-construccion.md` y `../README.md`; por ejemplo, [feature-build/SKILL.md:8](skills/feature-build/SKILL.md:8). Desde `.claude/skills/feature-build/`, el primer enlace apunta a `.claude/docs/`, y el segundo ya no alcanza el catálogo canónico. Tampoco se define cómo conserva el piloto estas dependencias documentales.  
    **Corrección:** establecer resolución desde la raíz del proyecto o reescritura de enlaces al proyectar; incluir las referencias necesarias y comprobar su resolución en Claude Code, OpenCode y Codex como parte de E4. Es un defecto de empaquetado documental, no una incompatibilidad ejecutada demostrada.

17. **Media — Se introduce una escritura posterior al merge prohibida por v4.**  
    [feature-integrate/SKILL.md:81](skills/feature-integrate/SKILL.md:81) añade `integrated` a `participations.md` después del merge e incluso permite que lo escriba la sesión coordinadora. [workflow-construccion.md:221](docs/workflow-construccion.md:221) exige candidata completa y ninguna modificación posterior; para el SHA de integración prescribe `control`, fuera de la candidata.  
    **Corrección:** conservar el registro posterior exclusivamente fuera del árbol integrado, o acordar explícitamente una excepción con ubicación, escritor y persistencia definidos.

18. **Baja — El catálogo y las referencias contienen instrucciones desactualizadas.**  
    [README.md:9](skills/README.md:9) afirma que los `SKILL.md` todavía no están escritos, mientras el [tracker:19](docs/definition-tracker.md:19) registra su aceptación. [feature-spec/SKILL.md:40](skills/feature-spec/SKILL.md:40) remite a una sección «Riesgo» inexistente en su plantilla.  
    **Corrección:** actualizar el estado del catálogo y sustituir referencias inexistentes por enlaces precisos al criterio aplicable.
