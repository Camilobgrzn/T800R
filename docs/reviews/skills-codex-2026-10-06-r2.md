# Revisión Codex de skills/ — ronda 2 (2026-10-06)

- Modelo: `gpt-6-astra`, esfuerzo `medium`. El intento previo del 2026-10-05 con `gpt-6-astra` y su reintento con `gpt-5.6-sol` `xhigh` fallaron por cuota antes de dar hallazgos. Base: `2af03ab`. Solo lectura.

**Veredicto: NO, todavía no está listo para ejecutarse de principio a fin tal como está escrito.** El modelo central es viable y corrige las circularidades principales, pero quedan bloqueos en replanificación y continuidad, además de una contradicción con S12.

Base revisada: `2af03ab`, comparada con `6f4519a`. Revisé las ocho skills, once plantillas, README, v4.1 y los acuerdos aplicables de S04/S12. **No modifiqué archivos ni ejecuté las skills.** La comprobación fue documental; el canon de `docs/definition/` no cambió entre ambas revisiones.

**Estado de los 18 hallazgos anteriores: 12 corregidos y 6 parcialmente corregidos.** «Corregido» se refiere al defecto original; los problemas adicionales aparecen después.

| N.º | Hallazgo anterior | Estado | Resultado de la segunda revisión |
|---|---|---|---|
| 1 | Evidencia que contiene su propio SHA | Corregido | Trabajo, entrega y candidata quedan separados. La entrega se fija mediante HEAD y `delivered`; la aprobación vive en `control`. |
| 2 | Circulación de registros y dependencias | Parcial | `feat/<id>`, lecturas con `git show` y bases posteriores a `merged` resuelven la circulación. Faltan reglas para el checkout compartido y el arranque de `control` — R3/R8. |
| 3 | Handoff inválido por sus propios registros | Parcial | Desaparecen los hashes circulares de coordinación y la dependencia de `HEAD^`. Persisten rechazos de handoffs válidos por listas incompatibles de rutas — R4. |
| 4 | Autorización e invalidaciones incompletas | Corregido | Build/verify/integrate comprueban digests actuales; las entregas y los veredictos deben superar las invalidaciones. Esta exigencia descubre el problema de replanificación R1. |
| 5 | Efectos prohibidos tratados como aprobables | Parcial | Se comprueba `prohibited` antes de actuar, pero se permite levantar una prohibición del canon cambiando `policy.yaml` — R2. |
| 6 | Revisión tardía/incompleta de rutas protegidas | Corregido | Build controla antes de ejecutar; verify revisa primero y registra hashes. Se incluyen las rutas adicionales de política. |
| 7 | Handoff que incorpora cambios ajenos | Corregido | Inspección previa del índice y árbol, lista explícita y comprobación del staged completo. El mismo problema permanece en otros escritores — R3. |
| 8 | Pérdida del informe del spike | Corregido | El informe debe quedar comprometido en una rama durable antes de eliminar el experimento. |
| 9 | Circularidad de `concerns` | Corregido | Sólo admite observaciones sin incumplimientos ni riesgos pendientes; permite completar y habilitar dependencias, con aceptación en gate 3. Compatible con S04:101. |
| 10 | Efecto `high` dependiente de otra ronda | Parcial | Hay fase de efecto y espera independiente de las rondas. Falta distinguir el veredicto previo del cumplimiento final y resolver el fallo posterior — R5. |
| 11 | Transferencia que convierte al verifier en owner | Corregido | Se separan `work` e `integrate`; una verificación incompleta se rehace. La aceptación la registra el orchestrator antes de la escritura. |
| 12 | Evidencia que atribuye todas las rondas a un worker | Corregido | Cada entrada identifica actor y sesión; las anteriores se conservan. |
| 13 | Entradas insuficientes para revisar/replanificar | Parcial | Se admiten borradores, reclasificación y rondas agotadas; el acotado ya no exige spec al cerrar. Persisten obstáculos para cambiar alcance y reconciliar tareas — R1/R7. |
| 14 | Prohibición de comandos necesarios para la skill | Corregido | Se distinguen inspección, coordinación, edición y ejecución del repositorio; se autorizan registros por rol. |
| 15 | Identidad ligada al proveedor | Corregido | Identidad lógica estable asignada por la persona; proveedor y sesión son atributos. |
| 16 | Referencias rotas por proyección | Parcial | Las referencias externas pasan a rutas desde la raíz. No se define cómo llegan esas dependencias al repositorio piloto — R9. |
| 17 | Escritura posterior al merge en el árbol integrado | Corregido | La única atestación posterior es `integrated <sha-merge>` en `control`, por la persona. |
| 18 | Catálogo desactualizado y sección inexistente | Corregido | Se eliminan los dos defectos originales. Quedan otras contradicciones editoriales — R10. |

**Hallazgos residuales y nuevos, por severidad.** Las correcciones propuestas preservan los tres gates humanos y no requieren modificar S04/S12.

1. **Alta — R1. La replanificación no tiene un recorrido completo para conservar o sustituir tareas ya verificadas.**  
   Fuentes: [feature-plan/SKILL.md:129](skills/feature-plan/SKILL.md:129), [tasks-template.md:55](skills/feature-plan/references/tasks-template.md:55), [feature-integrate/SKILL.md:48](skills/feature-integrate/SKILL.md:48).

   Hay dos casos concretos:
   - T1 está completada y no cambia; se replanifica T2. Cambia el digest global del plan, pero el veredicto conservado de T1 cita el anterior. Integrate exige que **todos** citen los digests vigentes y no existe un paso explícito para renovar esa vinculación.
   - T1 ya está `merged` y queda afectada. Se la invalida y devuelve a `pending`, pero se ordena corregirla mediante una tarea nueva. Aunque esa tarea termine, T1 permanece invalidada y sin completar, impidiendo integrar.

   **Corrección:** definir la reconciliación por tarea después del gate 2 renovado: ratificación documentada del verifier para tareas sin cambios; para las afectadas, nueva entrega/verificación o sustitución explícita con disposición de la original y actualización de dependencias. No dejar una tarea antigua obligatoria en `pending` cuando su corrección se realiza mediante otra.

2. **Alta — R2. Cambiar `policy.yaml` sigue permitiendo levantar una prohibición que S12 declara irrenunciable para el v0.**  
   Fuentes: [feature-spec/SKILL.md:68](skills/feature-spec/SKILL.md:68), [workflow-construccion.md:185](docs/workflow-construccion.md:185), [README.md:686](skills/README.md:686), frente a [S12:64](docs/definition/session-12-validation-convergence.md:64).

   La frase «sólo un cambio de `policy.yaml` […] lo reclasifica» incluye los efectos irreversibles fuera del repositorio. S12 los conserva como una red de seguridad que no se afloja. Una feature `high` de política no puede modificar ese acuerdo.

   **Corrección:** separar prohibiciones mínimas del canon y prohibiciones adicionales de política. Las primeras permanecen prohibidas en el v0; únicamente las adicionales pueden reconsiderarse mediante el procedimiento autorizado de cambio de política.

3. **Alta — R3. El checkout de coordinación comparte índice, pero los commits de sus escritores no están protegidos contra cambios staged ajenos.**  
   Fuentes: [workflow-construccion.md:87](docs/workflow-construccion.md:87), [feature-verify/SKILL.md:128](skills/feature-verify/SKILL.md:128), [feature-integrate/SKILL.md:97](skills/feature-integrate/SKILL.md:97).

   Orchestrator, verifier e integrador operan en el mismo checkout. Si el orchestrator dejó `tasks.md` staged, el comando del verifier `git add -- <verdict> && git commit …` incorpora también `tasks.md`. La lista pasada a `git add` no limita lo que después comete `git commit`. Puede ocurrir igualmente entre dos verificadores.

   **Corrección:** establecer exclusión temporal del checkout de coordinación, incluyendo su índice; comenzar cada operación con índice limpio, detenerse ante cambios ajenos y comprobar el staged completo antes de cada commit. Aplicar la protección ya introducida en handoff a todos los escritores.

4. **Media — R4. Las listas de rutas permitidas todavía rechazan continuaciones legítimas.**  
   Fuentes: [feature-build/SKILL.md:128](skills/feature-build/SKILL.md:128), [feature-verify/SKILL.md:66](skills/feature-verify/SKILL.md:66), [session-handoff/SKILL.md:67](skills/session-handoff/SKILL.md:67), [session-resume/SKILL.md:54](skills/session-resume/SKILL.md:54).

   Dos reproducciones documentales:
   - Un worker emite handoff después del último cambio de código. El receptor termina únicamente validaciones y evidencia. Entre el SHA de trabajo y la entrega queda también `T1.handoff.md`, pero build/verify sólo permiten evidencia y findings: rechazan la entrega.
   - El integrador ya comprometió `evidence/README.md` y emite handoff sin nuevo código. Resume permite handoff, evidencia de tarea y coordinación, pero omite `evidence/README.md`: rechaza una candidata preparada correctamente.

   **Corrección:** definir una única lista por rol y operación, compartida por productores y consumidores. Admitir el handoff de tarea en entregas posteriores y el README en continuidad de integración. Añadir ambos casos a los evals. No exigir un commit artificial de trabajo para sortear la comprobación.

5. **Media — R5. La fase de efecto `high` conserva una dependencia circular de aceptación y una recuperación indefinida.**  
   Fuentes: [feature-verify/SKILL.md:106](skills/feature-verify/SKILL.md:106), [feature-verify/SKILL.md:120](skills/feature-verify/SKILL.md:120), [tasks-template.md:50](skills/feature-plan/references/tasks-template.md:50), [verdict-template.md:61](skills/feature-verify/references/verdict-template.md:61).

   El `pass` exige todos los criterios cumplidos, pero es requisito para ejecutar un efecto que puede formar parte de esos criterios. Además, la comprobación posterior permite `fail` sin consumir ronda, mientras la regla general incrementa las rondas ante `fail`. No se indica cómo reconciliar un efecto parcialmente ejecutado antes de volver a actuar.

   **Corrección:** distinguir revisión previa de preparación y veredicto final de la tarea. La primera puede habilitar `waiting` sin declarar cumplimiento completo. Definir la transición tras fallo posterior: registrar estado observado, bloquear o preparar recuperación y exigir nueva autorización cuando cambie el efecto. La espera no consume ronda; una corrección de implementación debe tener una regla explícita.

6. **Media — R6. La excepción para tareas canceladas es inejecutable.**  
   Fuentes: [feature-integrate/SKILL.md:48](skills/feature-integrate/SKILL.md:48), frente a [S04:102](docs/definition/session-04-operating-cycle.md:102).

   Integrate admite `cancelled` con aceptación de alcance, pero inmediatamente exige `merged`, veredicto `pass/concerns` y rama de entrega para cada tarea. Una tarea cancelada antes de implementarse no dispone de esos artefactos.

   **Corrección:** aplicar los requisitos de entrega, verificación y merge únicamente a tareas completadas. Para canceladas, exigir razón, impacto y cambio de alcance aceptados, dependencias reconciliadas y disposición explícita de cualquier código parcial. Reflejar ambas alternativas en la plantilla de integración.

7. **Media — R7. Un cambio de alcance autorizado por la persona puede entrar en plan, pero no en spec.**  
   Fuentes: [feature-plan/SKILL.md:42](skills/feature-plan/SKILL.md:42), [feature-spec/SKILL.md:33](skills/feature-spec/SKILL.md:33), frente a [S04:76](docs/definition/session-04-operating-cycle.md:76).

   Plan admite expresamente el cambio de alcance pedido por la persona. Spec sólo admite nueva feature, borrador, reclasificación o defecto reportado. Ampliar legítimamente un criterio aprobado no implica que la spec anterior fuera defectuosa.

   **Corrección:** añadir «cambio de alcance/comportamiento/interfaz solicitado por la persona» como entrada de feature-spec; renovar gate 1 y después gate 2, con análisis de impacto. También debe quedar cubierto el retorno desde readiness cuando se descubre una decisión funcional pendiente.

8. **Media — R8. Falta el procedimiento mínimo para crear y publicar las aprobaciones de `control`.**  
   Fuentes: [workflow-construccion.md:83](docs/workflow-construccion.md:83), [workflow-construccion.md:195](docs/workflow-construccion.md:195), [feature-build/SKILL.md:48](skills/feature-build/SKILL.md:48).

   El primer comando presentado añade un worktree de `control`, suponiendo que esa referencia ya existe. Los gates ordenan escribir una línea; los consumidores leen exclusivamente commits mediante `git show control:…`. Una línea guardada pero no comprometida no abre el gate.

   **Corrección:** documentar una preparación única por la persona: creación de la rama huérfana, commit inicial y worktree dedicado. Cada aprobación debe incluir escritura y commit en `control`, seguido de comprobación mediante la misma lectura que hará el consumidor. Es concreción del gate existente, no otro gate.

9. **Media — R9. La proyección al piloto sigue sin incluir sus dependencias documentales.**  
   Fuentes: [README.md:19](skills/README.md:19), [workflow-construccion.md:450](docs/workflow-construccion.md:450), [feature-spec/SKILL.md:48](skills/feature-spec/SKILL.md:48).

   Resolver desde la raíz evita `.claude/docs/`, pero no crea `docs/workflow-construccion.md`, `skills/README.md` ni las referencias canónicas en el repositorio nuevo de Backstage. Algunas son operativas: por ejemplo, la lista de rutas protegidas de respaldo.

   **Corrección:** definir el conjunto documental que acompaña a la proyección, con revisión y ubicación exactas, o referencias explícitas a un checkout identificado de T800R. E4 debe comprobar esas dependencias desde el piloto, además de las rutas dentro de T800R.

10. **Baja — R10. Quedan instrucciones editoriales que contradicen las skills corregidas.**
    - [workflow-construccion.md:436](docs/workflow-construccion.md:436) y [README.md:252](skills/README.md:252) todavía autorizan al integrador a escribir `spec.md`.
    - [README.md:365](skills/README.md:365) exige tarea `ready`; [feature-build/SKILL.md:55](skills/feature-build/SKILL.md:55) exige `in_progress` después de asignarla.
    - [README.md:415](skills/README.md:415) todavía busca `<sha-entrega>` dentro de la entrada de evidencia.
    - [participations-template.md:45](skills/feature-plan/references/participations-template.md:45) ejemplifica `transferred` sin SHA, aunque resume exige ese SHA para reconocer una transferencia ya aceptada.

    **Corrección:** retirar `spec.md` de las escrituras del integrador, distinguir elegibilidad `ready` de ejecución `in_progress`, obtener entrega desde `delivered` y completar el ejemplo de transferencia.

El recorrido ordinario **spec → plan → tarea → verificación → merge en coordinación → candidata → aprobación en control → merge humano** ya evita las autorreferencias originales. Los prefijos `feat/` y `task/` son compatibles y la atestación posterior no mueve la candidata. El **NO** corresponde a los recorridos todavía incompletos y contradictorios señalados arriba; no exige rediseñar el modelo ni añadir gates.
