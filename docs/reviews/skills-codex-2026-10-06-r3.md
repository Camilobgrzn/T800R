# Revisión Codex de skills/ — ronda 3 (2026-10-06)

- Modelo: `gpt-6-astra`, esfuerzo `medium`, sin reintento. Base: `4ffb3ef`. Solo lectura.

**Veredicto: NO.** La base `4ffb3ef` corrige buena parte de la ronda 2, pero el recorrido completo todavía exige resolver instrucciones incompatibles y un caso de replanificación sin salida definida.

Revisión documental de las ocho skills, sus plantillas, README, v4.1 y S04/S12, comparando `2af03ab..HEAD`. No modifiqué archivos ni ejecuté las skills. `docs/definition/` no cambió.

| Ronda 2 | Estado | Resultado |
|---|---|---|
| R1 — Replanificación | Parcial | Resuelve ratificación de completadas y sustitución de tareas integradas; omite conservadas aún no completadas. N1. |
| R2 — Prohibiciones del canon | Corregido | Se separan de las adicionales de política y no pueden levantarse en el v0. |
| R3 — Índice compartido | Corregido | Hay exclusión, inspección inicial y comprobación completa del staged. La generalización del protocolo introduce N2. |
| R4 — Rutas de continuidad | Corregido | Productores y consumidores admiten el handoff del worker y el README de integración. |
| R5 — Fase `high` | Parcial | Añade `ready_for_effect` y recuperación, pero conserva reglas incompatibles sobre `pass` y rondas. N3. |
| R6 — Tareas canceladas | Parcial | Las precondiciones detalladas y la plantilla las admiten; activación, README y checklist todavía las excluyen. N4. |
| R7 — Cambio de alcance en spec | Parcial | El procedimiento lo admite; la descripción de activación todavía lo prohíbe. N5. |
| R8 — Bootstrap de `control` | Corregido | Creación, commit de aprobación y lectura de comprobación explícitos. |
| R9 — Proyección al piloto | Corregido documentalmente | Define paquete operativo y consulta del canon en un checkout identificado de T800R. E4 sigue pendiente de ejecución. |
| R10 — Contradicciones editoriales | Parcial | Corrige los puntos principales, pero persisten estado de build y origen del SHA de entrega en otras instrucciones. N6. |

Los seis hallazgos originales que seguían parciales quedan así:

| Original | Estado | Resultado |
|---|---|---|
| 2 — Circulación de registros | Corregido | Referencias autoritativas, coordinación y bootstrap de `control` definidos. |
| 3 — Handoff invalidado por sus registros | Corregido | Las listas de rutas ahora coinciden para los casos reportados. |
| 5 — Prohibido tratado como aprobable | Corregido | El cambio de política no puede levantar prohibiciones del canon. |
| 10 — Efecto `high` dependiente de otra ronda | Parcial | La fase independiente existe, pero N3 impide una interpretación única. |
| 13 — Entradas y replanificación | Parcial | Persisten N1 y N5. |
| 16 — Referencias al proyectar | Corregido documentalmente | Paquete y revisión de origen explícitos; no equivale a portabilidad ejecutada. |

Hallazgos de esta ronda, incluidos los residuos operativos:

1. **Alta — N1. La reconciliación supone que toda tarea conservada ya está completada.**  
   Fuentes: [feature-plan/SKILL.md:130](skills/feature-plan/SKILL.md:130), [feature-verify/SKILL.md:142](skills/feature-verify/SKILL.md:142).

   Caso: T1 obliga a replanificar; T2 permanece `pending` o `in_progress` y no cambia. Es «conservada», pero se exige ratificar su veredicto y comprobar que su entrega está `merged`. T2 todavía no tiene esos artefactos. Clasificarla como «rehacer» tampoco representa lo sucedido y puede invalidar trabajo independiente válido, contrario a la conservación exigida por S04.

   **Corrección concreta:** distinguir conservadas completadas —ratificación— de conservadas no terminales —mantener estado, owner y trabajo válido; reconciliar dependencias y referencias al plan autorizado; verificar cuando entreguen—. Conservar también las canceladas previamente sin exigirles ratificación.

2. **Media — N2. El protocolo nuevo exige árbol limpio precisamente al entrar al handoff que debe guardar trabajo pendiente.**  
   Fuentes: [workflow-construccion.md:132](docs/workflow-construccion.md:132), [session-handoff/SKILL.md:56](skills/session-handoff/SKILL.md:56).

   El protocolo se extiende a «todo escritor, en cualquier rama» y exige `git status --porcelain` vacío al empezar. Handoff admite explícitamente cambios propios staged y unstaged para producir el commit `wip:`. Una interrupción normal satisface una regla y viola la otra.

   **Corrección concreta:** aplicar la limpieza inicial a la adquisición del checkout compartido y declarar la excepción de handoff para cambios propios identificados. Mantener exclusión, rechazo de cambios ajenos, lista explícita y comprobación completa del staged.

3. **Media — N3. La fase `high` conserva dos protocolos incompatibles.**  
   Fuentes: [README.md:392](skills/README.md:392), [feature-build/SKILL.md:157](skills/feature-build/SKILL.md:157), [tasks-template.md:45](skills/feature-plan/references/tasks-template.md:45).

   README todavía exige `pass` antes del efecto, aunque la skill ahora lo prohíbe y exige `ready_for_effect`. Build y la regla general de la plantilla dicen que la comprobación posterior no consume ronda; la regla específica inmediatamente posterior dice que un `fail` sí consume y bloquea. v4.1 reproduce esta contradicción.

   **Corrección concreta:** sustituir el `pass` previo por `ready_for_effect` en todos los consumidores. Unificar el cómputo: espera y ejecución no consumen; comprobación posterior satisfactoria tampoco; `fail` posterior incrementa y bloquea hasta resolver la recuperación.

4. **Media — N4. La integración de canceladas sigue prohibida en instrucciones de entrada y cierre.**  
   Fuentes: [feature-integrate/SKILL.md:3](skills/feature-integrate/SKILL.md:3), [feature-integrate/SKILL.md:139](skills/feature-integrate/SKILL.md:139), [README.md:475](skills/README.md:475).

   Aunque la precondición 3b ya resuelve R6, la descripción prohíbe invocar con tareas sin veredicto; README exige todas completadas y merged; el checklist exige todas merged. Una cancelada legítima no puede satisfacerlos. S04 admite expresamente ese cierre.

   **Corrección concreta:** aplicar en esos tres lugares la misma disyunción existente: completadas con verificación y merge, o canceladas con aceptación, dependencias reconciliadas y disposición del código.

5. **Media — N5. La descripción de `feature-spec` rechaza una entrada recién autorizada.**  
   Fuente: [feature-spec/SKILL.md:3](skills/feature-spec/SKILL.md:3), frente a su [precondición nueva:46](skills/feature-spec/SKILL.md:46).

   La descripción admite cambios pedidos por la persona, pero termina prohibiendo usarla cuando existe spec aprobada «sin defecto conocido». Ese es precisamente el caso de un cambio legítimo de alcance.

   **Corrección concreta:** excluir únicamente specs aprobadas **sin defecto, decisión funcional pendiente ni cambio solicitado**. Alinear la condición negativa con las entradas admitidas.

6. **Media — N6. El flujo rector todavía impide arrancar una tarea correctamente asignada.**  
   Fuentes: [workflow-construccion.md:299](docs/workflow-construccion.md:299), [tasks-template.md:27](skills/feature-plan/references/tasks-template.md:27), [feature-build/SKILL.md:55](skills/feature-build/SKILL.md:55).

   v4.1 exige simultáneamente tarea `ready` y eventos `assigned`/`started`; registrar esos eventos la pasa a `in_progress`, estado que exige build. No puede satisfacer ambas precondiciones. Además, [README.md:257](skills/README.md:257) todavía obtiene `<sha-entrega>` de la evidencia, donde está expresamente prohibido escribirlo.

   **Corrección concreta:** exigir `in_progress` con owner al ejecutar; reservar `ready` para elegibilidad previa. En el catálogo, obtener `<sha-entrega>` del evento `delivered`, contrastado con HEAD.

**Día 1:** el bootstrap y el recorrido ordinario tienen las piezas necesarias, pero el conjunto aún no es ejecutable de principio a fin tal como está escrito. Resolver N1–N6 no requiere nuevos gates ni cambios en S04/S12.
