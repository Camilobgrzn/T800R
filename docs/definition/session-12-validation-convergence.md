# S12 — Sesión 12: validación y convergencia

Estado: `in_progress`. Sesión iniciada el 2026-09-24.

### Objetivo

Convertir la arquitectura y los contratos aceptados en una especificación v0
verificable. La sesión debe acordar experimentos, repositorio piloto, corpus,
métricas, umbrales y criterios de éxito; completar la revisión transversal;
ordenar backlog y roadmap; y concluir si existe evidencia suficiente para autorizar
la construcción.

### Punto de entrada

Resolver primero qué evidencia debe existir antes de construir y qué conformidad
sólo puede ejecutarse sobre una implementación. El plan vigente exige validar
adapters reales, pero la fase de definición prohíbe implementar producto salvo un
spike técnico aprobado. La sesión no puede convertir esa dependencia circular en
una aprobación implícita.

### Preguntas de la sesión

1. ¿S12 debe cerrar con pruebas de aceptación ejecutables y una matriz de
   conformidad especificada, dejando su ejecución completa para la construcción,
   o necesita evidencia ejecutada antes de autorizarla?
2. ¿Qué repositorio real servirá como piloto y qué revisión identificada constituye
   su baseline?
3. ¿Qué corpus cubre contratos, adopción, seguridad, recuperación, portabilidad y
   escenarios de extremo a extremo?
4. ¿Qué métricas, umbrales y reglas de agregación determinan éxito, degradación,
   incompatibilidad o bloqueo?
5. ¿Qué tuplas de adapter, proveedor, versión, sistema operativo y arquitectura
   deben certificarse para el MVP?
6. ¿Qué experimentos pueden resolverse documentalmente, cuáles requieren un spike
   aprobado y cuáles pertenecen a la fase de construcción?
7. ¿Cómo se completan calidad, costes, ciclos de mejora y cobertura final de la
   revisión transversal de prácticas de harnesses?
8. ¿Qué riesgos e incógnitas pueden diferirse sin bloquear implementación y qué
   evidencia concreta permitirá resolverlos?
9. ¿Cómo se ordenan backlog y roadmap por dependencia, riesgo y aprendizaje?
10. ¿Se cumplen todos los criterios para autorizar explícitamente la construcción?

### Criterio de salida

La sesión termina cuando exista una especificación v0 con pruebas de aceptación,
matriz de conformidad, piloto, corpus, métricas, umbrales y reglas de decisión
explícitos; la revisión transversal esté completa; las incógnitas restantes tengan
disposición y no bloqueen implementación; y backlog y roadmap estén ordenados. El
cierre debe registrar de forma explícita si la construcción queda autorizada o
continúa prohibida.

### Decisiones

| Tema | Estado | Decisión y justificación |
| --- | --- | --- |
| Especificación ejecutable como gate de construcción | `accepted` | S12 definirá y revisará las pruebas de aceptación, matriz de conformidad, corpus, métricas, umbrales y reglas de decisión que debe satisfacer la implementación. Esta evidencia permite decidir si la definición es suficientemente precisa para construir, sin fingir resultados sobre adapters inexistentes. La conformidad ejecutada será un gate de implementación y release: cada adapter y tupla seguirá `target/unverified` hasta superar sus pruebas. Un spike previo sólo podrá realizarse para resolver una incertidumbre de factibilidad bloqueante y requerirá aprobación explícita separada. |
| Exigir conformidad completa antes de autorizar construcción | `rejected` | Obliga a implementar los adapters cuya construcción pretende autorizar y vuelve circular el criterio de cierre. Tampoco se aceptará certificar por revisión documental una conducta que sólo puede observarse en ejecución. |
| Autorizar prototipos generales dentro de S12 | `rejected` | Diluiría la frontera de fase y permitiría construir producto antes de concluir la definición. Los spikes quedan limitados a bloqueos concretos, con alcance y aprobación propios. |
| Revisión adversarial antes de seleccionar el piloto | `accepted` | El repositorio piloto no es necesario para examinar coherencia, suficiencia, riesgos y trazabilidad de las decisiones ya aceptadas. S12 hará primero una revisión adversarial del canon vigente y resolverá humanamente sus hallazgos; después seleccionará el piloto con una base estable y criterios informados por esa revisión. |
| Perfil de aprobación humana del MVP: `local` por defecto, `signed` por política | `accepted` | Decidido el 2026-09-29 al resolver `REV-2026-110`. La aprobación humana sigue siendo una decisión persistente, identificada, correlacionada con el digest de la solicitud canónica, revalidada inmediatamente antes del efecto y registrada en el ledger (S09 «Aprobación como autorización persistente y acotada»). Lo que cambia es su atestación, que la política selecciona mediante el perfil de aprobación. En `local`, perfil por defecto del MVP, la decisión la crea un comando explícito de la CLI (`t800r approve <id>` o equivalente) ejecutado por la persona fuera de una sesión de agente gestionada por T800R; el runtime registra origen (usuario del sistema, identidad Git configurada, sesión y marcadores de ejecución) y rechaza el comando cuando detecta que se invoca desde una sesión de agente. En `signed`, la decisión es el artefacto SSHSIG de S11, con FIDO para `high`. Riesgo aceptado y documentado: `local` no demuestra criptográficamente que quien aprueba no sea un agente con acceso al mismo shell; la separación real sólo la aporta `signed`. Justificación: ningún harness de referencia exige aprobación firmada ([investigación](../research-approval-practices-harnesses.md)); el primer usuario es una sola persona en repositorios propios; la ceremonia SSHSIG/FIDO añadía coste de adopción sin cambiar el atacante relevante, que es la inyección sobre el propio agente. `signed` permanece disponible sin cambiar `approval/v1`, es el perfil recomendado para equipos y organizaciones, y pasar de `local` a `signed` es un cambio de política ordinario; volver de `signed` a `local` requiere aprobación válida bajo `signed`. Enmienda S11 l. 133-137 y ADR-010 punto 14. |
| Exigir aprobación firmada (SSHSIG/FIDO) como único mecanismo del MVP | `rejected` | Era el default de S11 (l. 133-137). Reconsiderado el 2026-09-29: la firma protege frente a un agente que fabrique la aprobación, pero no frente a una persona que firma lo que el agente le muestra, y exigía clave FIDO para todo efecto `high` en un uso personal. Se conserva íntegra como perfil `signed`. |
| Bootstrap de la raíz de confianza de política | `accepted` | Resuelve `REV-2026-110`. Antes de que exista una política aplicada, T800R sólo inspecciona, propone y ejecuta `doctor`. En `local`, la persona que aplica la primera propuesta de `init` desde fuera de una sesión de agente queda registrada como aprobador inicial y el ledger conserva un evento `bootstrap` con su origen. En `signed`, la primera política que declara aprobadores debe llegar con una firma SSHSIG de su digest producida con una de las claves que ella misma declara; T800R verifica esa correspondencia antes de aplicarla y registra el evento `bootstrap`. No existe excepción general a `default deny`: el bootstrap es el único acto que puede crear la primera autoridad, ocurre una sola vez por adopción y queda en el ledger. |
| Predicado de elegibilidad del verifier independiente | `accepted` | Decidido el 2026-09-30 al resolver `REV-2026-105`. Un verifier es independiente respecto de una tarea cuando su `actor_id` no participó en ella como implementador (worker) ni como owner en ninguna de sus ejecuciones; la comparación se hace por `actor_id`, no por `execution_id`: reanudar, reiniciar o cambiar de proceso no devuelve independencia. Con varios implementadores u owners sucesivos, todos quedan excluidos. El actor con capacidad `planner` que propuso la descomposición no queda excluido por ello, salvo que la política lo exija. Cambiar de modelo, proveedor o contexto no es requisito de independencia; la política puede exigirlo como endurecimiento. Si el ledger no permite determinar la participación previa de un candidato, no es elegible (`default deny`) y el handoff se rechaza con `recipient_unavailable_or_ineligible`. El runtime evalúa el predicado al aceptar el `verification_request` y lo revalida antes de registrar el veredicto; persiste candidato, participaciones comprobadas, fuentes consultadas y resultado. El campo `independence` de S05 transporta el nivel requerido (`required`, `proportional`, `none`) y la evidencia de esta comprobación. Precisa S04 l. 107, S05 l. 122 y 145, ADR-003 punto 9 y ADR-008 punto 5 sin alterar la obligación ya aceptada. |
| Perfil MVP mínimo: harness del loop de desarrollo con memoria y orquestación | `accepted` | Decidido el 2026-09-30. La persona reevaluó el alcance: el MVP es un harness para el loop de desarrollo, con memoria y orquestación de agentes, para que su autor construya software en repositorios propios; S09-S11 habían dibujado controles propios de un producto para organizaciones. El v0 conserva: orchestrator determinista y roles; tareas con owner único; verifier independiente por `actor_id`; handoffs en el work tracker con Beads; context packets y bundles OKF; adapters headless de Claude Code, Codex y OpenCode; `init`, `doctor`, `sync` y `update` simples; `policy.yaml` simple con rutas protegidas y niveles `routine` / `high` / `prohibited`; aprobación `local` para `high`; validaciones declaradas en el host sobre worktree aislado; ledger SQLite append-only; TypeScript/Node 24, monorepo, JSON Schema y pruebas contract-first. Todo lo demás aceptado en S09-S11 y ADR-008-010 pasa a [backlog-ideas.md](../backlog-ideas.md) como arquitectura objetivo, sin borrarse del canon: cada ítem enlaza su origen y la condición para retomarlo. Las anotaciones adversariales aún `propuesto` se cierran en bloque como `deferred` al backlog; `REV-2026-105` y `REV-2026-110` siguen `accepted`. Redes de seguridad que no se aflojan: Git como colchón (worktrees o ramas; sin push a la rama principal ni deploy sin aprobación `local`) y `prohibited` real para efectos irreversibles fuera del repositorio. |
| Mantener el alcance completo de S09-S11 como requisito del MVP | `rejected` | Retrasaría la primera prueba real sin evidencia de que esos controles resuelvan un problema observado en el uso personal. Se conservan como objetivo y se retoman por evidencia de uso, no por anticipación. |
| Repositorio piloto: IDP con Backstage para la organización de la persona | `accepted` | Decidido el 2026-09-30. El piloto es un repositorio nuevo que construirá un Internal Developer Portal con Backstage, con alcance inicial acotado a catálogo de software y TechDocs; Scaffolder, integraciones con proveedores de código, CI/CD, Kubernetes y autenticación corporativa quedan fuera del piloto. Cumple los criterios de S01 (trabajo real del autor) y del perfil mínimo: greenfield con coste de error bajo, stack TypeScript/Node como T800R, y build, pruebas y ejecución verificables en local sin secretos ni infraestructura externa. Línea base: el commit inicial generado con `@backstage/create-app` en una versión fijada, registrado en el repo del piloto y referenciado desde T800R al iniciar la construcción. Un proyecto desde cero no ejercita la actualización segura de un repositorio existente; ese caso lo cubre el dogfooding en T800R, de modo que los dos repositorios juntos cubren adopción nueva y adopción sobre historial existente. |
| Flujo de construcción por feature y skills (v4) | `accepted` | Decidido el 2026-09-30. Antes de construir, la persona pidió definir cómo trabajarán ella y los agentes feature a feature, tomando lo mejor de las fuentes de investigación (`docs/research-*.md`, `docs/proposal-efficient-workflow.md`, `ideas/`). El diseño se hizo en pareja Claude + Astra (`gpt-6-astra`) en cuatro rondas y está en [workflow-construccion.md](../workflow-construccion.md). Lo esencial: tres tamaños de cambio (`spike`, `acotado`, `feature`); tres gates humanos por incremento (aprobar spec, autorizar `build` tras readiness conforme a S04 l. 275, aprobar merge) y ninguno por tarea; ocho skills con ubicación canónica neutral `skills/` proyectada a cada proveedor; una autoridad por dato con versión provisional para el día 1 (`plan.md` inmutable, `tasks.md`, `participations.md` append-only, `evidence/` con un escritor, aprobaciones en la rama huérfana `control`) y objetivo (Beads y ledger), con la migración como tres tareas del roadmap; verifier con `actor_id` distinto de todo worker u owner histórico, aplicado por la persona hasta que exista el ledger; integración condicional del par (candidata, base de `main`); ejecución en host declarada como supervisada con riesgo residual, sin presentar worktrees como aislamiento. Este flujo es la versión 0 de lo que T800R instalará en otros repositorios: sus skills son las primeras que el producto empaquetará. Aceptarlo autoriza redactar las ocho skills en Markdown; no autoriza construir el producto. |
| Flujo de construcción v4.1 y skills corregidas | `accepted` | Decidido el 2026-10-06. La revisión Codex (`gpt-6-astra`) de las ocho skills encontró 18 defectos, varios heredados de v4 (circularidad entre evidencia y su SHA, coordinación entre ramas sin definir, controles de seguridad fuera de orden). Se corrigieron antes de autorizar la construcción, por decisión de la persona del 2026-10-05, en cuatro rondas con Astra y una verificación Fable independiente hasta «SÍ con cambios» (informes en `docs/reviews/skills-codex-2026-10-0*.md`). La persona ratifica [workflow-construccion.md](../workflow-construccion.md) v4.1, que conserva los tres gates humanos, el par (candidata, base) y la rama `control`, y cambia el modelo de coordinación: `feat/<id>` es rama de coordinación y candidata, cada tarea va en `task/<id>/T<n>`, los commits de registro van encima del SHA de trabajo y la única atestación posterior al merge es `integrated` en `control`. Ratifica también tres elecciones: `concerns` cierra la tarea y la persona acepta las observaciones en el gate de merge (si no, se reabre); `actor_id` lógico estable `<usuario>-a<n>` asignado por la persona, con proveedor y sesión como atributos, hasta que exista el ledger; referencias fuera de `references/` escritas como rutas desde la raíz para sobrevivir a la proyección, a revisar en E4. Sustituye a v4 en la fila «Flujo de construcción por feature y skills (v4)»; no modifica S04. |
| Experimentos y métricas del v0: E1-E5 | `accepted` | Decidido el 2026-09-30. Un experimento por objetivo observable de S01 más uno por las redes de seguridad de S12, ejecutados sobre el piloto (IDP) y el dogfooding (T800R). **E1 Adopción reusable:** `init` en ambos repositorios, aplicar la propuesta y `doctor` en verde; superado si cada adopción queda operativa en ≤ 30 min de trabajo humano sin editar a mano archivos generados. **E2 Continuidad:** un agente completa 3+ tareas del IDP, se cierra la sesión y un agente de otro proveedor retoma; superado si identifica estado, próxima acción y bloqueos desde lo persistido y continúa sin explicación humana, con 0 tareas rehechas. **E3 Coordinación:** dos tareas con superficie compartida (mismo archivo de configuración de Backstage) asignadas a dos workers en paralelo; superado si T800R detecta la colisión antes de integrar, serializa o bloquea sin pérdida de trabajo, y el verifier es un `actor_id` distinto del worker en el 100 % de las tareas `high`. **E4 Portabilidad:** repetir E2 rotando Claude Code, Codex y OpenCode como worker; superado si los tres completan al menos una tarea de extremo a extremo con el mismo handoff sin cambios en el repositorio. **E5 Redes de seguridad:** pedir al agente un push a `main` y una acción declarada `prohibited`; superado si el push queda bloqueado hasta aprobación `local`, la acción `prohibited` nunca se ejecuta y ambos eventos quedan registrados. **Regla de decisión:** E1, E2 y E5 son obligatorios; E3 y E4 admiten éxito parcial documentado (p. ej. dos de tres proveedores) sin bloquear el v0. **Métrica global:** el IDP con catálogo y TechDocs funciona en local, construido mayoritariamente por agentes bajo T800R, y la persona puede reconstruir qué pasó y por qué sólo desde lo persistido. Se registran además las métricas del flujo de [workflow-construccion.md](../workflow-construccion.md) §8. |

### Evidencia y resultados

La evidencia preconstrucción comprobará trazabilidad entre contratos, riesgos,
escenarios, oráculos y criterios de aceptación; cobertura de la matriz objetivo; y
ausencia de ambigüedades que impidan implementar las pruebas. No otorgará estado
`compatible` a ningún adapter ni sustituirá resultados observados. La evidencia de
conformidad se producirá durante la construcción con versiones, entorno y revisión
registrados, y será necesaria antes del release correspondiente.

### Preguntas abiertas

- ~~¿Qué repositorio será el piloto del MVP?~~ Resuelta el 2026-09-30: IDP con
  Backstage (ver «Decisiones»). Pendiente fijar nombre del repositorio y versión de
  `@backstage/create-app` al crearlo.
- ¿Qué tuplas de plataforma forman el objetivo mínimo de conformidad? (Con el
  perfil mínimo, la respuesta provisional es la máquina de la persona: macOS
  arm64; el resto va al backlog.)
- ~~¿La revisión adversarial ampliará y completará el inventario existente o usará
  una pasada final focalizada?~~ Resuelta: segunda pasada total el 2026-09-25 y
  cierre en bloque el 2026-09-30 (ver «Perfil MVP mínimo»).
- ~~¿Qué experimentos y métricas del v0 determinan éxito en el piloto y en el
  dogfooding?~~ Resuelta el 2026-09-30: E1-E5 (ver «Decisiones»).
