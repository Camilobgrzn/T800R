# Flujo de construcción por feature y skills

- Estado: **v4, aceptado** (2026-09-30) como flujo de construcción del v0 por
  decisión de S12. v1 redactado por Claude a partir de las fuentes; v2 integra la
  ronda 1 de Astra (`gpt-6-astra`); v3 su ronda 2 (arranque sin infraestructura,
  límites reales del enforcement); v4 su ronda 3 (aprobaciones en rama de
  control, plan autorizado separado del estado operativo, historial de
  participaciones append-only). Ronda 4: veredicto SÍ.
- Ámbito: cómo la persona y los agentes construyen T800R y el repositorio piloto
  (IDP con Backstage) feature a feature. Es la versión 0 del flujo que T800R
  instalará después en otros repositorios; las skills de este documento son las
  primeras que el producto empaquetará.
- Prioridades declaradas por la persona: seguridad, agilidad y calidad, en ese
  orden cuando entren en conflicto.
- Marco ya decidido que este flujo no reabre: etapas `plan → design → build →
  verify → deploy`, estados y autorización humana de `build` por incremento (S04
  l. 81-84, 275); roles `planner` / `worker` / `verifier`; verifier con `actor_id`
  distinto de todo worker u owner histórico de la tarea (S12); niveles `routine`
  / `high` / `prohibited` con aprobación `local` para `high` (S12); Git como red
  de seguridad; una feature vive en `features/<id>/`.
- Fuentes: `docs/research-*.md`, `docs/proposal-efficient-workflow.md`,
  `ideas/MULTI_AGENT_HARNESS_ARCHITECTURE.md`, `ideas/propuesta-harness-multiagente.md`.

## 1. Principios tomados de las fuentes

| Principio | Fuente |
| --- | --- |
| Preparación proporcional: la profundidad la fijan las decisiones necesarias, el riesgo y la incertidumbre, no una lista de documentos obligatoria. | BMAD `choose-a-planning-path`; `research-sdlc-references.md` l. 130-131 |
| Las skills e instrucciones no conceden permisos; el enforcement es determinista y los gates humanos son por riesgo. | `research-ai-native-sdlc-playbook.md` l. 63; `research-agent-skills.md` l. 33-39 |
| Un campo declarado no es evidencia: sólo cuenta lo ejecutado sobre una revisión y un entorno identificados. | nWave `PhaseStateValidator`; ADR-002 |
| Tareas verticales, verificables, con interfaces y dependencias explícitas; contratos antes de paralelizar. | Osmani, Pocock `to-tickets`, Superpowers `writing-plans` |
| Brief con contexto nuevo por tarea; informe en archivo; revisión por tarea y global; límite de rondas; ante dificultad cambiar contexto o modelo, no repetir. | Superpowers `subagent-driven-development` |
| Clasificar cada hallazgo: laguna de intención, defecto de spec, corrección local o hallazgo ajeno; reconciliar el trabajo dependiente antes de continuar. | BMAD `build-auto`; `research-evolutionary-specs.md` l. 99-106 |
| Revisión en dos ejes: cumplimiento de la spec y calidad técnica, como secciones separadas de un mismo informe. | Pocock `code-review` |
| Handoff que enlaza artefactos, nunca en un directorio temporal, con aceptación condicional y derecho del receptor a rechazarlo. | Pocock `handoff` (límite); `ideas/MULTI_AGENT_HARNESS_ARCHITECTURE.md` §9 |
| Un escritor por archivo; como máximo dos workers independientes; sin subdelegación; exceder el alcance bloquea. | `proposal-efficient-workflow.md` l. 123-126 |
| Specs vigentes separadas de los deltas por cambio; `skip_specs` para cambios sin comportamiento nuevo. | OpenSpec / Spec Kit en `research-evolutionary-specs.md` l. 24-39 |
| Cada fuente citada en un brief declara revisión, ámbito y papel (acuerdo, referencia o ejemplo). | `research-fuentes-sesion-3.md` l. 22-28 |
| Conocimiento curado sólo con fuente y verificación; la utilidad se decide con dos o más criterios. | `ideas/MULTI_AGENT_HARNESS_ARCHITECTURE.md` l. 522-548 |
| El contenido no confiable (logs, salidas de herramientas, documentos externos, resultados de búsqueda) son datos sin autoridad; las specs y políticas canónicas del repositorio sí la conservan. Una skill modificada no aprueba su propia activación. | `ideas/MULTI_AGENT_HARNESS_ARCHITECTURE.md` l. 804-810 |
| Medir el flujo: tiempo hasta evidencia, reaperturas, rechazos de handoff, coste de coordinación. | `proposal-efficient-workflow.md` l. 150-160 |

## 2. Autoridades: qué archivo manda sobre qué

Una autoridad por dato, coherente con S12 («Perfil MVP mínimo»). Como el día 1
no existen ni el adapter de Beads ni el ledger de T800R, la tabla distingue la
**autoridad provisional (bootstrap)** de la **autoridad objetivo**; la migración
es una tarea explícita del roadmap, no un supuesto.

| Dato | Autoridad provisional (día 1) | Autoridad objetivo | Escritor |
| --- | --- | --- | --- |
| Plan autorizado (tareas, interfaces, archivos permitidos, validaciones, readiness) | `features/<id>/plan.md`, **inmutable tras la autorización de `build`**; cambiarlo es reautorizar | Igual | Planner |
| Estado operativo de cada tarea (`status`, owner actual, dependencias, bloqueos) | `features/<id>/tasks.md`, tabla mutable **separada del plan** para que el progreso no altere el digest autorizado | Work tracker (Beads) | Sólo el orchestrator (la persona o la sesión que coordina) |
| Participaciones (quién fue worker, owner o verifier de cada tarea, incluidas transferencias) | `features/<id>/participations.md`, **append-only**: una línea por asignación, transferencia, inicio, entrega y veredicto | Ledger | Sólo el orchestrator, en el momento de cada evento; el worker repite su `actor_id` en la cabecera de su evidencia como redundancia |
| Evidencia de ejecución | `features/<id>/evidence/<task>.md`, append-only | Ledger | Sólo el worker de esa tarea |
| Veredictos del verifier | `features/<id>/evidence/<task>.verdict.md` | Ledger | Sólo el verifier |
| Aprobaciones humanas (spec, `build`, merge, `high`) | Rama de control huérfana **`control`**, archivo `approvals/<feature-id>.md`: **fuera de la rama candidata y de `main`**, de modo que registrar una aprobación no cambia el SHA de nada aprobado | Mecanismo `local` de T800R; Beads lo enlaza sin duplicar autoridad | Sólo la persona, fuera de una sesión de agente |
| Handoffs | `features/<id>/handoff.md` (única autoridad en bootstrap) | Work tracker | Quien cierra la sesión |
| Spec, hallazgos | Markdown en `features/<id>/` | Igual | Planner / worker según sección |
| Specs vigentes del sistema | `specs/` | Igual | Integrador |

Reglas:
- Un agente que escriba en `control`, en `participations.md` sin ser orchestrator
  o en un `.verdict.md` que no le corresponde invalida la feature; el integrador
  lo registra y la feature vuelve a `verify` (sección 7).
- El verifier consulta **`participations.md` completo**; si una tarea no tiene
  ahí la línea de su worker, o el historial es incoherente con la evidencia, la
  elegibilidad no puede determinarse y se rechaza.

## 3. Tres tamaños de cambio

Tomado de Superpowers `brainstorming`. El tamaño lo propone quien abre el cambio y
lo confirma la persona en el primer gate.

| Tamaño | Cuándo | Recorrido | Artefactos |
| --- | --- | --- | --- |
| `spike` | Una incertidumbre impide decidir | Pregunta → experimento en rama desechable → respuesta. El código **no se conserva** como solución. | `spikes/<id>.md` con pregunta, qué se probó, respuesta y evidencia |
| `acotado` | Bugfix, refactor sin cambio de comportamiento, tarea única (`skip_specs`) | Una tarea: `build → verify → integrate`. La spec y el readiness caben en `plan.md`; la persona autoriza spec y `build` en un solo acto. | `features/<id>/{plan,tasks,participations}.md`, `evidence/<task>.md`, `control:approvals/<id>.md` |
| `feature` | Comportamiento nuevo o cambio arquitectónico | Recorrido completo de la sección 4. | `control:approvals/<id>.md`, `features/<id>/{spec,plan,tasks,participations}.md`, `evidence/`, y `findings.md` / `handoff.md` **sólo si existen** |

Si durante un `acotado` aparece comportamiento nuevo o una decisión no registrada,
se reclasifica a `feature` y vuelve a `plan`; no se improvisa la decisión.

Spikes: durante la definición requieren aprobación explícita separada, con
pregunta bloqueante y alcance acotado (S12 l. 56). Durante la construcción pueden
quedar autorizados dentro del incremento. Una rama desechable no autoriza efectos
externos ni instalar dependencias fuera del worktree.

## 4. Recorrido de una `feature`

Tres gates humanos, ninguno por tarea: **aprobar la spec**, **autorizar `build`**
del incremento (S04 l. 275) y **aprobar el merge**. `high` añade aprobación
`local` en el punto del efecto.

### 4.1 `plan`: `/feature-spec`

- Entrada: una idea, issue o problema en una frase.
- Método: entrevista breve al estilo `grilling` (Pocock): preguntas ordenadas por
  las decisiones que faltan; se confirma el entendimiento antes de escribir.
- Salida `features/<id>/spec.md`:
  - problema y resultado observable;
  - criterios de aceptación verificables (Given/When/Then cuando ayude);
  - no-alcance;
  - **decisiones tomadas** y **decisiones delegadas** al worker;
  - interfaces públicas que se crean o cambian;
  - riesgo `routine` o `high` según los disparadores de S09 más `protected_paths`
    del `policy.yaml`;
  - glosario si introduce términos.
- Gate 1: la persona registra en `control:approvals/<id>.md` (rama `control`,
  desde fuera de una sesión de agente) `spec <digest-spec> approved`. `status: approved` dentro
  del spec es metadato, no autorización.

### 4.2 `design`: `/feature-plan`

Orden corregido (Astra): primero diseño y tareas, después readiness.

- Paso 1, **descomposición en tareas verticales** en `plan.md`. El estado de
  cada tarea no vive aquí sino en `tasks.md`, que la skill crea con todas en
  `pending`. Cada tarea declara:
  - `id`, objetivo y criterio de aceptación propio;
  - interfaces consumidas y producidas;
  - **archivos permitidos** (ownership de rutas) y dependencias;
  - comandos de validación deterministas que debe dejar en verde;
  - riesgo heredado o propio;
  - **tests primero** cuando el criterio describe comportamiento observable y
    existe harness de pruebas; no como regla universal.
- Paso 2, **análisis de coherencia** (Spec Kit `analyze`): cada criterio de
  aceptación cubierto por al menos una tarea; ambigüedades; contradicciones
  spec ↔ plan.
- Paso 3, **readiness** (BMAD): «¿puede implementarse sin inventar decisiones no
  registradas?» sobre cobertura, dependencias, permisos e incógnitas. Lo prepara
  el planner; las condiciones mecánicas (tareas con aceptación y archivos, IDs en
  el tracker, comandos declarados) las comprueba la skill, no el modelo. Resultado
  `PASS`, `CONCERNS` (lista) o `FAIL`. `FAIL` devuelve a `/feature-spec`. Un actor
  distinto sólo revisa el readiness cuando el riesgo o la incertidumbre lo
  justifiquen.
- Paralelismo: dos tareas sólo corren en paralelo si sus archivos permitidos son
  disjuntos y sus interfaces ya están acordadas; máximo dos workers a la vez.
- Gate 2: la persona autoriza `build` del incremento con `build <digest-plan>
  on spec <digest-spec> authorized` en `control:approvals/<id>.md`, aceptando
  explícitamente los `CONCERNS` si los hay. Vincula plan **y** spec aprobada.
  Desde ese momento `plan.md` es inmutable: cualquier cambio exige una nueva
  autorización; el progreso se anota en `tasks.md`. Sin esta línea ninguna skill
  de build arranca.

### 4.3 `build`: `/feature-build <task>`

- Precondición mecánica: `control:approvals/<id>.md` contiene la autorización
  de `build` para los digests actuales de `plan.md` y `spec.md`; la tarea está
  `ready` en `tasks.md`; sus dependencias están `completed`; el orchestrator
  registró la asignación en `participations.md`.
- El worker recibe un **brief con contexto nuevo**: objetivo, criterio de
  aceptación, archivos permitidos, hasta diez referencias con revisión, ámbito y
  papel, comandos de validación, presupuesto y condiciones de parada.
- Trabaja en worktree o rama `feat/<id>/<task>`; nunca en `main`. El worktree
  **no es contención de seguridad**: todo lo que el worker ejecute (tests,
  scripts, hooks, dependencias) corre en el host con los permisos de la persona.
  En el v0 esto es **ejecución en host supervisada con riesgo residual
  aceptado**, no aislamiento. Lo que sí se hace:
  - sólo se ejecutan los comandos de validación declarados en el plan; un comando
    permitido ejecuta igualmente tests y dependencias modificados, y eso no se
    contiene, sólo se revisa;
  - `package.json` scripts, hooks de Git, `Makefile`, configuración de CI,
    lockfiles, `policy.yaml`, skills y configuración de los agentes son
    `protected_paths`: tocarlos es `high` y el verifier los revisa antes de que
    nadie ejecute comandos sobre ellos modificados;
  - el entorno del worker no recibe secretos;
  - el runner OCI que contendría esta ejecución está en el backlog.
- Salida: commits en la rama y `evidence/<task>.md` con: SHA, comandos, resultado,
  entorno (SO, versión de Node, hash del lockfile), quién ejecutó, fecha, y «no
  ejecutado: motivo» cuando algo no se pudo correr.
- Hallazgos durante el build, clasificados:
  - **laguna de intención** → tarea `blocked` (`intent gap`), consulta a la
    persona; el intento se guarda como parche;
  - **defecto de spec** → vuelve a `/feature-spec`; el planner identifica las
    tareas afectadas, el orchestrator registra `invalidated` en
    `participations.md` para cada una (eso **invalida su evidencia** sin que
    nadie edite `evidence/`) y las independientes continúan;
  - **corrección local** → se hace y se anota;
  - **hallazgo ajeno** → `findings.md`, sin tocar archivos fuera del alcance.
- Límite de **tres rondas** por tarea (build+verify); al agotarlas, cambiar
  contexto, tamaño de tarea o modelo, o escalar; nunca repetir sin cambios.
- Tocar un archivo fuera de los permitidos bloquea la tarea.
- Sin subdelegación: un worker no lanza workers.
- El worker **no escribe** veredictos, aprobaciones ni ejecuta integración.

### 4.4 `verify`: `/feature-verify <task>`

- Elegibilidad (S12): el `actor_id` del verifier no fue worker ni owner de la
  tarea en ninguna ejecución. **Cómo se garantiza en bootstrap**: no hay
  mecanismo que identifique al actor que escribió un archivo (el autor de un
  commit no lo demuestra), así que la separación la aplica la persona: abre la
  sesión de verificación en un proveedor o sesión distinta de la del worker y
  declara ese `actor_id` en la cabecera del veredicto. La skill comprueba lo
  mecánico: que el `actor_id` declarado no aparece en **`participations.md`**
  como worker u owner de la tarea en ningún evento (asignación, transferencia,
  inicio, entrega), y que ese historial es coherente con `evidence/<task>.md`;
  **historial incompleto o incoherente → no elegible**. El orchestrator registra
  el veredicto como evento en `participations.md`. Esto es supervisión humana
  provisional, no enforcement.
- Verifier con contexto nuevo. Reejecuta los comandos de validación sobre el SHA
  entregado. **Vigencia de la evidencia**: la del worker sólo se reutiliza si
  coinciden SHA, comandos y entorno registrado y la ejecución quedó capturada;
  si no, se vuelve a ejecutar.
- Un informe con dos secciones separadas: **cumplimiento de la spec** (cada
  criterio con evidencia) y **calidad técnica**.
- Veredicto en `evidence/<task>.verdict.md`: `pass`; `concerns` sólo para
  observaciones no bloqueantes sin incumplimiento de aceptación ni riesgo
  pendiente; `fail` con la clase de hallazgo. Un defecto dentro del alcance se
  corrige o se reclasifica explícitamente fuera de él (S04 l. 101); `concerns`
  no lo elude. `fail` devuelve la tarea a `build` y consume una ronda.
- `high`: además, aprobación `local` de la persona en `control:approvals/<id>.md`
  con el digest de la solicitud (tarea, SHA, efecto), revalidada justo antes del
  efecto.

### 4.5 `deploy` (integrar): `/feature-integrate`

- Precondiciones mecánicas: todas las tareas `pass` (o `concerns` aceptados);
  cada veredicto con un `actor_id` elegible; árbol de la rama igual al SHA de la
  evidencia; rama actualizada sobre `main`.
- La **candidata es completa**: antes de verificarla, el integrador prepara en
  la misma rama los cambios documentales del cierre (`spec.md` a `implemented`,
  consolidación en `specs/`, `evidence/README.md`). Nada se modifica después del
  merge.
- Se verifica la **candidata integrada exacta**: tras actualizar sobre `main` y
  resolver conflictos, se ejecutan las validaciones globales del repositorio y se
  registra su evidencia con el SHA candidato y el SHA de `main` que sirvió de
  base. Lo que se aprueba es ese par.
- Validaciones globales mínimas en el día 1 del IDP: dependencias fijadas; tipos,
  lint y build disponibles; arranque local; comprobación reproducible del
  comportamiento incorporado (catálogo o TechDocs). Si no hay suite, se registra
  la ausencia y se aporta una aceptación focalizada; «no ejecutado» no es
  «aprobado».
- Gate 3: la persona escribe en `control:approvals/<id>.md` `merge
  <sha-candidato> onto <sha-main-base> approved`. Como `control` es una rama
  aparte, registrar la aprobación no mueve ni `main` ni la candidata. La
  integración es **condicional**: la persona ejecuta el merge sólo si `main`
  sigue en `<sha-main-base>` y la candidata en `<sha-candidato>`; si `main`
  avanzó, se vuelve a actualizar, verificar y aprobar. En bootstrap la persona
  ejecuta el merge; la skill sólo comprueba y prepara el comando.
- Después del merge:
  - `features/<id>/` queda como historial; la persona registra el SHA de
    integración en `control:approvals/<id>.md`;
  - conocimiento: sólo se cura una nota si tiene **fuente y verificación**; los
    criterios de utilidad (reusable, no derivable del código) deciden si vale la
    pena, no si es verdad;
  - si una instrucción se repitió tres veces, se propone skill (cambio `high`).
- El deploy real a un entorno queda fuera del v0; cuando exista será `high`.

### 4.6 Transversal: `/session-handoff` y `/session-resume`

- `handoff.md` por feature, sólo cuando hay algo que entregar, con cuatro bloques:
  **Resultado**, **Validación** (o «no ejecutada: motivo»), **Pendiente**,
  **Contexto**. Enlaza artefactos; no los duplica; nunca en temporal.
- **No se entrega trabajo sin commit**: antes del handoff, todo cambio pendiente
  (staged, unstaged y archivos nuevos pertinentes) va en un commit `wip:` en la
  rama de la tarea. Así el handoff vincula proyecto, tarea, SHA base, SHA del
  último commit y SHA de `tasks.md` y `participations.md`, sin hashes parciales
  que puedan no cambiar aunque cambie el entregable.
- `/session-resume`: **aceptación condicional** contra el estado actual. El
  receptor comprueba que el árbol está limpio y en el SHA declarado, el owner en
  `tasks.md` y el último evento en `participations.md`; si difieren, rechaza el
  handoff y lo anota; cualquier cambio posterior exige reconciliar antes de
  continuar. Una transferencia de owner se registra en `participations.md`
  antes de que el receptor escriba.

## 5. Skills

| Skill | Etapa | Rol | Escribe en |
| --- | --- | --- | --- |
| `/feature-spec` | `plan` | planner + persona | `spec.md` |
| `/feature-plan` | `design` | planner | `plan.md`; crea `tasks.md` con todas las tareas en `pending` y `participations.md` sin eventos |
| `/feature-build <task>` | `build` | worker | rama de la tarea, `evidence/<task>.md`, `findings.md` |
| `/feature-verify <task>` | `verify` | verifier | `evidence/<task>.verdict.md` |
| `/feature-integrate` | `deploy` | integrador + persona | rama candidata (`specs/`, `spec.md`, `evidence/README.md`); el merge a `main` lo ejecuta la persona |
| `/session-handoff` | transversal | quien cierra | `handoff.md` |
| `/session-resume` | transversal | quien abre | nada hasta validar |
| `/spike` | `plan` | worker | `spikes/<id>.md` |

Reglas de las skills:
- Formato `SKILL.md` con `name`, `description` y cuerpo breve; `references/` bajo
  demanda.
- Ninguna skill declara permisos; lo que puede tocar lo fijan el plan y el
  `policy.yaml`.
- **Ubicación canónica neutral** `skills/<skill>/SKILL.md`; se proyectan a
  `.claude/skills/`, `.opencode/` y la configuración de Codex **sólo tras
  comprobar** que cada proveedor la ejecuta (E4). Un formato común no garantiza
  ejecución portable (`research-agent-skills.md` l. 33).
- Cambiar una skill es `high`: la skill modificada no aprueba su propia
  activación.
- Evals por skill, desde el v0 como checklist manual con cuatro casos: activación
  correcta, no activación, incumplimiento de una restricción (p. ej. tocar un
  archivo no permitido) y comparación con la revisión anterior.

## 6. Estructura de archivos

```
control:approvals/<feature-id>.md  # rama huérfana `control`; sólo la persona: spec / build / merge / high, con digests
features/<id>/
  spec.md                 # problema, aceptación, decisiones, riesgo
  plan.md                 # tareas, interfaces, ownership, validaciones, readiness; inmutable tras autorizar build
  tasks.md                # estado operativo mutable: status, owner actual, deps; sólo el orchestrator
  participations.md       # append-only: asignaciones, transferencias, inicios, entregas, veredictos; sólo el orchestrator
  evidence/<task>.md      # sólo el worker de esa tarea, append-only; cabecera con actor_id
  evidence/<task>.verdict.md  # sólo el verifier
  evidence/README.md      # consolidado por el integrador
  findings.md             # sólo si hay hallazgos ajenos
  handoff.md              # sólo si hay handoff
specs/                    # specs vigentes tras integrar
spikes/<id>.md
skills/<skill>/SKILL.md   # canónico; proyectado a cada proveedor
```

## 7. Seguridad: controles efectivos y límites conocidos

| Riesgo | Control en el v0 | Límite aceptado |
| --- | --- | --- |
| El worker se salta al verifier | La persona abre la verificación en una sesión o proveedor distinto del worker; el veredicto declara su `actor_id` y la skill comprueba que no aparece en `participations.md` como worker u owner de la tarea en ningún evento; historial incompleto o incoherente → no elegible | **Supervisión humana provisional**: nada identifica qué actor escribió un archivo; un agente con shell puede escribir el veredicto o `participations.md`. El ledger y el `actor_id` verificable son tareas del roadmap |
| Un agente aprueba como humano | `control:approvals/<id>.md` sólo lo escribe la persona, en la rama `control`, fuera de una sesión de agente, con digests de lo aprobado; se revalida justo antes de actuar | Perfil `local` de S12: no impide criptográficamente la suplantación desde el mismo shell; el perfil `signed` está en el backlog |
| El progreso invalida la autorización | `plan.md` es inmutable tras autorizar; el estado vive en `tasks.md`, que no forma parte del digest autorizado | — |
| Se acepta un handoff con otra base | Todo trabajo va en commit antes del handoff; aceptación condicional contra SHA base, SHA candidato y SHA de `tasks.md` y `participations.md` | — |
| Código del host peligroso (tests, scripts, hooks, dependencias) | Sólo comandos declarados; `protected_paths` para todo lo ejecutable por configuración; revisión del verifier antes de ejecutar sobre ellos modificados; sin secretos en el entorno | **Ejecución en host supervisada, riesgo residual aceptado**: un comando permitido ejecuta tests y dependencias modificados; los worktrees no aíslan; el runner OCI está en el backlog |
| Inyección y autoalteración | El contenido no confiable es dato, no instrucción; cambiar skills, política o configuración de agentes es `high` | — |
| Base distinta a la aprobada | Se aprueba el par (candidata, base de `main`) y la persona integra sólo si ambos siguen iguales | — |
| La aprobación altera lo aprobado | Las aprobaciones viven en la rama huérfana `control`, fuera de la candidata y de `main`; registrar una no cambia el SHA de ninguna de las dos | — |

## 8. Métricas del flujo (v0)

Se registran por feature, para que E1-E5 y la agilidad sean evaluables:
tiempo desde spec aprobada hasta primera evidencia; rondas por tarea;
reaperturas de spec; rechazos de handoff; tareas bloqueadas por `intent gap`;
tokens cuando el proveedor los exponga.

## 9. Tensiones resueltas

| Tensión | Resolución |
| --- | --- |
| TDD estricto vs. proporcional | Tests primero cuando el criterio describe comportamiento observable y hay harness; no universal. |
| Evidencia fresca vs. no repetir | Vigencia por SHA, comandos y entorno idénticos con ejecución capturada; si no, se reejecuta. |
| Autonomía vs. consulta | El incremento autorizado se ejecuta sin consultar entre tareas; se para por laguna de intención, defecto de spec, `high` o ronda 3 agotada. |
| Aprobaciones | Tres gates humanos por incremento (spec, `build`, merge), ninguno por tarea. |
| Paralelismo | Máximo dos workers, archivos disjuntos, interfaces acordadas. |
| Plan con código vs. brief compacto | Plan sin código; el brief lleva referencias con revisión y papel, no soluciones. |
| Specs en tracker vs. repo | Repo es canónico; el tracker enlaza. |
| Markdown vs. tracker/ledger | Objetivo: tracker para estado y ownership, ledger para evidencia y participaciones, Markdown como vista. Bootstrap: `tasks.md`, `participations.md` y `evidence/` con un escritor cada uno, hasta que existan tracker y ledger (§10). |
| La aprobación cambia lo aprobado | Rama `control` separada; se aprueba el par (candidata, base) y se integra sólo si ambos siguen iguales. |

## 10. Bootstrap del día 1 y migración

Lo que existe el día 1: Git, los tres proveedores, las skills en Markdown y la
persona. No existen el adapter de Beads, el ledger ni el mecanismo `local` de
T800R. Por eso:

- Las autoridades provisionales de la sección 2 son **procedimiento humano**, no
  enforcement implementado. Las skills comprueban lo que se puede comprobar con
  archivos y Git; la persona aplica la separación de actores y ejecuta merges.
- Tres tareas del roadmap del v0 sustituyen ese procedimiento, en este orden:
  (1) `actor_id` y `participations.md` verificables en el ledger; (2) aprobación
  `local` de T800R en lugar de la rama `control`; (3) `tasks.md` migrado a Beads,
  que enlaza aprobaciones sin duplicar autoridad.
- Hasta entonces, cada límite aceptado de la sección 7 se mantiene escrito y se
  revisa al cerrar cada feature.

## 11. Estado de la pareja

- Ronda 1 (Astra): ocho cambios, cinco imprescindibles; integrados en v2.
- Ronda 2 (Astra): imprescindibles 1 y 5 cubiertos; 2, 3 y 4 parcialmente;
  cuatro errores nuevos. Integrados en v3: autoridad provisional y migración
  (§2, §10), supervisión humana explícita en vez de garantías por autoría Git
  (§4.4, §7), aprobación separada de la candidata y candidata completa con
  integración condicional (§2, §4.5), handoff sólo con commit (§4.6), ejecución
  en host declarada como supervisada (§4.3), y las dos correcciones editoriales.
- Ronda 3 (Astra): veredicto NO con tres bloqueos mínimos: aprobaciones fuera
  de la candidata **y** de `main` (la circularidad se había trasladado a
  `main`); plan autorizado separado del estado operativo (el progreso cambiaba
  el digest autorizado); participaciones append-only de todos los workers y
  owners, incluidas transferencias. Integrados en v4: rama `control`, `tasks.md`
  separado de `plan.md`, `participations.md`.
- Ronda 4 (Astra): **SÍ**. Los tres bloqueos cubiertos (§2, §4.2-4.5, §7); una
  inconsistencia editorial corregida (§5, `/feature-plan` crea `tasks.md` con
  tareas en `pending`). Mejoras no bloqueantes para después del piloto: medir el
  coste de los registros y gates manuales antes de automatizar; comprobar con
  una transferencia real que otro proveedor reconstruye ownership,
  participaciones y evidencia; definir conservación y migración de la rama
  `control` al mecanismo `local` sin perder aprobaciones históricas.
