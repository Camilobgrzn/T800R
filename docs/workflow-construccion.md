# Flujo de construcción por feature y skills

- Estado: **v4, aceptado** (2026-09-30) como flujo de construcción del v0 por
  decisión de S12. v1 redactado por Claude a partir de las fuentes; v2 integra la
  ronda 1 de Astra (`gpt-6-astra`); v3 su ronda 2 (arranque sin infraestructura,
  límites reales del enforcement); v4 su ronda 3 (aprobaciones en rama de
  control, plan autorizado separado del estado operativo, historial de
  participaciones append-only). Ronda 4: veredicto SÍ. **v4.1 (2026-10-05)**:
  correcciones de la revisión Codex de las skills
  (`docs/reviews/skills-codex-2026-10-05.md`): modelo de coordinación explícito
  (§2), rutas protegidas y `prohibited` antes de ejecutar (§4.1, §4.3),
  candidata y atestación posterior al merge (§4.5), handoff con tipo y orden
  fijo (§4.6). Los tres gates humanos y el canon no cambian.
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
| Participaciones (quién fue worker, owner o verifier de cada tarea, incluidas transferencias) | `features/<id>/participations.md` en `feat/<id>`, **append-only**: una línea por asignación, transferencia, inicio, entrega, veredicto, handoff e integración de la tarea en `feat/<id>` | Ledger | Sólo el orchestrator, en el momento de cada evento; el worker repite su `actor_id` en **cada entrada** de su evidencia como redundancia |
| Evidencia de ejecución | `features/<id>/evidence/<task>.md`, append-only, en la **rama de la tarea**, en commits `evidence:` encima del SHA del trabajo que atesta | Ledger | Sólo el worker de esa tarea |
| Veredictos del verifier | `features/<id>/evidence/<task>.verdict.md` en **`feat/<id>`**, nunca en la rama de la tarea (así el SHA entregado no se mueve) | Ledger | Sólo el verifier |
| Evidencia de integración | `features/<id>/evidence/README.md` en la candidata, en un commit `evidence:` encima de `<sha-verificado>` | Ledger | Sólo el integrador |
| Aprobaciones humanas (spec, `build`, merge, `high`, cancelación de alcance `scope … cancelled T<n> accepted`, spikes en `approvals/spikes.md`) y atestación posterior al merge (`integrated <sha-merge>`) | Rama de control huérfana **`control`**, archivo `approvals/<feature-id>.md` (catálogo de líneas en §6): **fuera de la rama candidata y de `main`**, de modo que registrar una aprobación no cambia el SHA de nada aprobado | Mecanismo `local` de T800R; Beads lo enlaza sin duplicar autoridad | Sólo la persona, fuera de una sesión de agente, desde el worktree de `control` |
| Handoffs | `features/<id>/evidence/<task>.handoff.md` en la rama que se entrega (única autoridad en bootstrap); la aceptación o el rechazo son **eventos** en `participations.md`, no escrituras del receptor | Work tracker | Quien cierra la sesión |
| Spec | `features/<id>/spec.md` en `feat/<id>` | Igual | Planner |
| Hallazgos ajenos | `features/<id>/evidence/<task>.findings.md`, append-only, en la rama de la tarea | Igual | Worker |
| Informe de spike | `spikes/<id>.md` en `feat/<id>` (spike de una feature) o en la rama de trabajo de la definición; **nunca sólo en `spike/<id>`** | Igual | Worker del spike |
| Specs vigentes del sistema | `specs/` | Igual | Integrador |

Reglas:
- Un agente que escriba en `control`, en `participations.md` sin ser orchestrator
  o en un `.verdict.md` que no le corresponde invalida la feature; el integrador
  lo registra y la feature vuelve a `verify` (sección 7).
- El verifier consulta **`participations.md` completo**; si una tarea no tiene
  ahí la línea de su worker, o el historial es incoherente con la evidencia, la
  elegibilidad no puede determinarse y se rechaza.

### 2.1 Modelo de coordinación del bootstrap

Con Git, archivos y la persona, sin tracker ni ledger. Es el único modelo; todas
las skills lo aplican igual.

1. **Tres referencias Git por feature.** `control` (huérfana; sólo la persona).
   **`feat/<id>`, rama de coordinación y candidata**: nace de `main` al abrir la
   feature y contiene `features/<id>/` (spec, plan, `tasks.md`,
   `participations.md`, veredictos, `evidence/README.md`) y, a medida que las
   tareas pasan, su código. Está checkeada en el **checkout de coordinación**
   (el directorio principal del repositorio), que opera el orchestrator; el
   verifier y el integrador escriben ahí sus archivos. **`task/<id>/T<n>`, rama
   de cada tarea** (el prefijo es distinto porque Git no admite `feat/<id>` y
   `feat/<id>/T1` como refs simultáneas): nace de `feat/<id>` actual, vive en
   un worktree propio y sólo la escribe el worker (código, `evidence/<task>.md`,
   `evidence/<task>.findings.md`, `evidence/<task>.handoff.md`; archivos por
   tarea para que dos tareas paralelas no choquen al integrarse). Un spike usa
   `spike/<id>`, desechable. La persona escribe en `control` desde un worktree
   dedicado (`git worktree add ../<repo>-control control`), nunca desde el
   checkout de coordinación ni desde un worktree de tarea.
2. **Los registros se leen de su referencia, no del worktree.** Un worker o un
   verifier consulta `tasks.md`, `participations.md`, veredictos y aprobaciones
   con `git show feat/<id>:features/<id>/<archivo>` y
   `git show control:approvals/<id>.md`; la copia de su worktree es una
   instantánea sin autoridad. Así los registros del orchestrator llegan a todo
   worktree sin sincronizar archivos.
3. **SHA del trabajo y commits de registro.** Las *rutas de registro* son
   `features/<id>/{tasks,participations}.md` y
   `features/<id>/evidence/**`. Un **commit de registro** (`evidence:`,
   `handoff:`, `verdict:`, y los `coord:` que sólo tocan `tasks.md` o
   `participations.md`) sólo toca rutas de registro; los `coord:` de spec, plan
   y cierre tocan `spec.md`, `plan.md` o `specs/` y por eso **no** son commits
   de registro. El **SHA del trabajo** (`<sha-trabajo>`) es el último commit
   que toca algo fuera de ellas (`git log -1 --format=%H -- . ':!features/<id>/tasks.md'
   ':!features/<id>/participations.md' ':!features/<id>/evidence'`):
   es lo que se verifica, se entrega y se acepta; los commits de registro van
   encima y lo atestan sin moverlo. Comprobación mecánica única para evidencia,
   handoff e integración: `git diff --name-only <sha-trabajo>..HEAD` sólo lista
   rutas de registro. Esto separa la revisión del trabajo (sobre
   `<sha-trabajo>`) de la revisión de los registros (por ruta).
4. **Cómo circula el código entre tareas.** Al registrar `pass` (o `concerns`),
   el orchestrator integra la rama de la tarea en `feat/<id>` desde el checkout
   de coordinación (`git merge --no-ff <sha-entrega>`, evento `merged`). Una
   tarea dependiente nace de `feat/<id>` **después** de ese merge, así su base
   contiene las dependencias verificadas; el brief cita ese SHA como base.
5. **Handoff**: commit `wip:` → commit `handoff:` → evento `handoff_emitted`
   con `<sha-trabajo>`. El receptor comprueba la rama con la regla del punto 3
   y la coordinación **actual** (`feat/<id>`): owner igual al emisor y último
   evento de la tarea `handoff_emitted` sobre ese `<sha-trabajo>`. No se
   congelan hashes de `tasks.md` ni `participations.md`: cambian legítimamente
   con el propio evento.
6. **Después del merge a `main` nadie escribe en el árbol integrado.** La única
   atestación posterior es `integrated <sha-merge>` en `control`, por la
   persona.
7. **Protocolo de commit en el checkout de coordinación.** Orchestrator,
   verifier e integrador comparten árbol **e índice**; `git add -- <ruta>` no
   limita lo que `git commit` incorpora si otro dejó algo staged. Por eso una
   operación a la vez (en bootstrap la persona abre una sola sesión sobre el
   checkout) y todo escritor, en cualquier rama, sigue el mismo protocolo:
   (a) **al adquirir el checkout compartido**, `git status --porcelain` vacío;
   si hay cambios o staged ajenos, **no los toca, no comete y escala**;
   (b) escribe sólo sus archivos; (c) `git add -- <lista explícita>`;
   (d) `git diff --cached --name-only` es exactamente su lista, si no,
   `git reset -q` y detenerse; (e) commit; (f) termina con árbol limpio.
   **Excepción de `/session-handoff`**: parte, por definición, de cambios
   propios pendientes (su commit `wip:` existe para guardarlos); sustituye
   (a) por identificar cada cambio y staged contra su lista de rutas propias y
   rechazar cualquier ruta ajena, y aplica (c)-(f) sin cambios. Las skills lo
   citan como «protocolo de commit».
8. **Rutas por rol y operación.** Una sola tabla, usada por quien produce y por
   quien comprueba (`git diff --name-only <desde>..<hasta>` ⊆ conjunto); no se
   exige un commit de trabajo artificial para pasar la comprobación.

   | Operación (rango) | Conjunto admitido bajo `features/<id>/` |
   | --- | --- |
   | Worker, entrega y handoff `work` (`<sha-trabajo>..HEAD` de `task/<id>/T<n>`) | `evidence/<task>.md`, `evidence/<task>.findings.md`, `evidence/<task>.handoff.md` (queda ahí si hubo handoff tras el último cambio de código) |
   | Verifier (`feat/<id>`) | `evidence/<task>.verdict.md` |
   | Orchestrator (`feat/<id>`) | `tasks.md`, `participations.md` |
   | Integrador, handoff `integrate` (`<sha-trabajo>..HEAD` de `feat/<id>`) | `evidence/README.md`, `evidence/integrate.handoff.md`, más `tasks.md`, `participations.md` y `evidence/*.verdict.md` (commits del orchestrator y de verifiers posteriores) |
   | Integrador, candidata (`<sha-verificado>..<sha-candidato>`) | `evidence/README.md` |

9. **Preparación y uso de `control` (la persona, fuera de una sesión de
    agente).** Una vez por repositorio: `git worktree add --detach
    ../<repo>-control main && cd ../<repo>-control && git checkout --orphan
    control && git rm -rfq . && mkdir approvals && : > approvals/.keep && git
    add approvals && git commit -m "control: inicio"`. Cada aprobación son tres
    pasos en ese worktree: escribir la línea (`printf '%s\n' '<línea>' >>
    approvals/<id>.md`), cometer (`git add -- approvals/<id>.md && git commit
    -m "approve: <id> <tipo>"`) y comprobar con la misma lectura que hará el
    consumidor (`git show control:approvals/<id>.md`). Una línea sin commit no
    abre ningún gate. Es la concreción del gate, no un gate nuevo.
10. **Comandos por clase.** *Inspección* (lectura de archivos, `git show`,
   `git diff`, `git log`, `git hash-object`, `uname`, `node --version`): siempre.
   *Coordinación* (crear la rama de la tarea, commits en la propia rama,
   escribir las propias rutas de registro): lo fija esta sección por rol.
   *Edición*: sólo los archivos permitidos del plan más las rutas de registro
   del rol. *Ejecución de código del repositorio* (tests, scripts, build,
   instalación, hooks): **sólo** los comandos de validación declarados en el
   plan. «Sólo comandos declarados» se refiere a esta última clase.

## 3. Tres tamaños de cambio

Tomado de Superpowers `brainstorming`. El tamaño lo propone quien abre el cambio y
lo confirma la persona en el primer gate.

| Tamaño | Cuándo | Recorrido | Artefactos |
| --- | --- | --- | --- |
| `spike` | Una incertidumbre impide decidir | Pregunta → experimento en rama desechable → respuesta. El código **no se conserva** como solución. | `spikes/<id>.md` con pregunta, qué se probó, respuesta y evidencia |
| `acotado` | Bugfix, refactor sin cambio de comportamiento, tarea única (`skip_specs`) | Una tarea: `build → verify → integrate`. La spec y el readiness caben en `plan.md`; la persona autoriza spec y `build` en un solo acto. | `features/<id>/{plan,tasks,participations}.md`, `evidence/<task>.md`, `control:approvals/<id>.md` |
| `feature` | Comportamiento nuevo o cambio arquitectónico | Recorrido completo de la sección 4. | `control:approvals/<id>.md`, `features/<id>/{spec,plan,tasks,participations}.md`, `evidence/`, y `evidence/<task>.findings.md` / `evidence/<task>.handoff.md` **sólo si existen** |

Si durante un `acotado` aparece comportamiento nuevo o una decisión no registrada,
se reclasifica a `feature` y vuelve a `plan`; no se improvisa la decisión. La
reclasificación conserva `features/<id>/` y `participations.md`: `/feature-spec`
escribe `spec.md` en el mismo directorio, la autorización de `build` del
`acotado` deja de aplicar (el orchestrator registra `invalidated` en sus
tareas) y `/feature-plan` replanifica hacia un nuevo gate 2.

Spikes: durante la definición requieren aprobación explícita separada, con
pregunta bloqueante y alcance acotado (S12 l. 56). Durante la construcción pueden
quedar autorizados dentro del incremento. Una rama desechable no autoriza efectos
externos ni instalar dependencias fuera del worktree. El informe `spikes/<id>.md`
se persiste fuera de la rama desechable (en `feat/<id>` o en la rama de trabajo
de la definición) **antes** de borrar worktree y rama; el reflog no es una
entrega.

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
  - riesgo `routine` o `high` según los disparadores de S09 (l. 83) más
    `protected_paths` del `policy.yaml`; **antes** de eso, `prohibited`, en dos
    clases: las **prohibiciones del canon** (S12 l. 64: efectos irreversibles
    fuera del repositorio) no se aflojan en el v0 **aunque cambie
    `policy.yaml`**; las **prohibiciones adicionales** que declare
    `policy.yaml` sí pueden reconsiderarse, sólo mediante un cambio de política
    (`high`, separado). Si un criterio exige cualquiera de las dos, la spec no
    es aprobable tal cual y se detiene; ninguna aprobación `high` lo habilita.
    La persona sí puede corregir una clasificación `high` → `routine` con
    motivo;
  - glosario si introduce términos.
- Entradas válidas: feature nueva; borrador (`status: draft`) sin digest
  aprobado que se revisa; `acotado` reclasificado (directorio con `plan.md` y
  sin `spec.md`); defecto de spec reportado en una evidencia o un veredicto, o
  `FAIL` del readiness con una decisión funcional pendiente; **cambio de
  alcance, comportamiento o interfaz pedido por la persona** sobre una spec
  aprobada que no era defectuosa: la spec incorpora una sección «Impacto del
  cambio» (qué `CA` cambian, qué tareas afecta) y renueva el gate 1; después
  `/feature-plan` replanifica y renueva el gate 2. `features/<id>/` y
  `feat/<id>` se crean aquí si no existen.
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
- Replanificación (reabre el gate 2) por cuatro entradas: defecto de spec;
  reclasificación de un `acotado`; cambio de alcance pedido por la persona (ya
  pasado por `/feature-spec` y el gate 1 si cambia la spec); rondas agotadas en
  una tarea (cambiar su tamaño). El planner clasifica **cada** tarea existente
  en la sección «Replanificación» y, tras la nueva línea `build … authorized`,
  el orchestrator ejecuta la **reconciliación** que la sección fija:
  - **conservada completada** (no cambia y ya está `completed` y `merged`):
    su veredicto cita digests antiguos, así que un verifier elegible para ella
    la **ratifica** contra los digests nuevos con una entrada «Ratificación»
    en su `.verdict.md` (commit `verdict:`) y el orchestrator registra
    `ratified`; una sola sesión puede ratificar todas. Sigue `completed` y
    `merged`;
  - **conservada no terminal** (no cambia y está `pending`, `in_progress`,
    `waiting` o `blocked`): mantiene estado, owner y trabajo válido (S04:
    conservar lo independiente); el orchestrator reconcilia en `tasks.md` sus
    dependencias y la referencia al plan nuevo (evento `reconciled`); no se
    ratifica nada porque aún no hay veredicto: se verificará cuando entregue,
    ya contra los digests nuevos;
  - **cancelada antes de la replanificación**: se conserva tal cual, sin
    ratificación; sólo se recablean sus dependientes si el plan nuevo lo
    requiere;
  - **rehacer** (afectada, mismo `id`): `invalidated` → `pending` → nueva
    asignación, entrega y verificación; si ya estaba `merged`, el orchestrator
    recrea `task/<id>/T<n>` desde `feat/<id>` actual (que contiene el código
    anterior) y la nueva ronda lo corrige ahí;
  - **sustituida** (afectada, la corrección va en otra tarea): `invalidated` y
    `cancelled` con nota `superseded by T<m>`; `T<m>` declara en el plan qué
    sustituye, cómo dispone del código anterior (lo corrige, lo retira, o la
    rama sin merge se borra) y hereda sus dependientes. La autorización
    renovada del gate 2 acepta esa sustitución; no hace falta una línea `scope`.
  Una tarea obligatoria nunca queda `pending` cuando su corrección va en otra.
  Integrar exige que cada tarea `completed` tenga veredicto o ratificación
  con los digests vigentes.

### 4.3 `build`: `/feature-build <task>`

- Precondición mecánica: `control:approvals/<id>.md` contiene la autorización
  de `build` para los digests **actuales** de `plan.md` **y** `spec.md` (ambos
  se recalculan); la tarea está `in_progress` en `tasks.md` con el worker como
  owner (`ready` es la elegibilidad previa: al asignar, el orchestrator la pasa
  a `in_progress`); sus dependencias están `completed` y ya integradas en
  `feat/<id>` (evento `merged`); el orchestrator
  registró `assigned` y `started` juntos en `participations.md` al asignar (el
  worker no espera un relevo); si la tarea tiene un evento `invalidated`,
  existe una asignación posterior.
- El worker recibe un **brief con contexto nuevo**: objetivo, criterio de
  aceptación, archivos permitidos, hasta diez referencias con revisión, ámbito y
  papel, comandos de validación, presupuesto y condiciones de parada, y la base
  (`feat/<id>` en el SHA que contiene las dependencias).
- Trabaja en un worktree de la rama `task/<id>/<task>`, creada desde `feat/<id>`;
  nunca en `main`. El worktree **no es contención de seguridad**: todo lo que el
  worker ejecute (tests, scripts, hooks, dependencias) corre en el host con los
  permisos de la persona. En el v0 esto es **ejecución en host supervisada con
  riesgo residual aceptado**, no aislamiento. Lo que sí se hace:
  - sólo se ejecutan los comandos de validación declarados en el plan (clase
    «ejecución» de §2.1); un comando permitido ejecuta igualmente tests y
    dependencias modificados, y eso no se contiene, sólo se revisa;
  - `package.json` scripts, hooks de Git versionados, `Makefile`, configuración
    de CI, lockfiles, `policy.yaml`, skills y configuración de los agentes son
    `protected_paths`, **más las rutas que declare `policy.yaml`**: tocarlos es
    `high`. El control es una **precondición de cada ejecución**, no un paso
    posterior: antes de correr cualquier comando (o cometer con hooks
    versionados modificados) el worker comprueba que ninguna ruta protegida
    está modificada respecto de la base, o que su `git hash-object` coincide
    con el que un veredicto ya revisó. Si no, «no ejecutado: pendiente de
    revisión de protected_paths» y el verifier ejecuta tras revisar;
  - un efecto `prohibited` nunca se ejecuta, exista o no una aprobación `high`;
  - el entorno del worker no recibe secretos;
  - el runner OCI que contendría esta ejecución está en el backlog.
- Salida: commits en la rama hasta `<sha-trabajo>` y, encima, un commit
  `evidence:` con `evidence/<task>.md` (y `evidence/<task>.findings.md` si hay hallazgos
  ajenos): `actor_id` de la entrada, `<sha-trabajo>`, comandos, resultado,
  entorno (SO, versión de Node, hash del lockfile), fecha, y «no ejecutado:
  motivo» cuando algo no se pudo correr. El SHA de entrega (`<sha-entrega>`)
  es ese commit `evidence:`; lo que se verifica es `<sha-trabajo>` (§2.1).
- Hallazgos durante el build, clasificados:
  - **laguna de intención** → tarea `blocked` (`intent gap`), consulta a la
    persona; el intento se guarda como parche;
  - **defecto de spec** → vuelve a `/feature-spec`; el planner identifica las
    tareas afectadas, el orchestrator registra `invalidated` en
    `participations.md` para cada una (eso **invalida su evidencia** sin que
    nadie edite `evidence/`) y las independientes continúan;
  - **corrección local** → se hace y se anota;
  - **hallazgo ajeno** → `evidence/<task>.findings.md`, sin tocar archivos fuera del alcance.
- Límite de **tres rondas** por tarea; una ronda es un par build → verify que
  termina en `fail`. Regla única de cómputo para `high` con fase de efecto: la
  espera de la aprobación, la ejecución del efecto aprobado y una comprobación
  posterior satisfactoria (`pass`/`concerns`) **no consumen ronda**; un `fail`
  posterior **suma una ronda y bloquea** la tarea hasta resolver la
  recuperación. Al agotarlas, cambiar contexto, tamaño de tarea (replanificar)
  o modelo, o escalar; nunca repetir sin cambios.
- Efectos `high` en ejecución (migración destructiva, push fuera del
  repositorio): el worker entrega **sin** ejecutarlos. El verifier emite una
  **revisión previa al efecto** con veredicto `ready_for_effect`: los criterios
  que no dependen del efecto se cumplen, las validaciones están en verde, el
  efecto y su recuperación están descritos; **no declara cumplimiento** de la
  tarea. Con ella la tarea pasa a `waiting`. Tras `high <digest> approved` en
  `control`, el orchestrator reabre la tarea (`waiting → in_progress`, mismo
  owner); el worker ejecuta el efecto releyendo `control` justo antes, añade la
  entrada «Efecto» a su evidencia (estado observado, total o parcial) y entrega
  de nuevo; el verifier hace la **comprobación posterior** y emite el veredicto
  final (`pass`, `concerns` o `fail`). Espera, ejecución y comprobación con
  `pass` no consumen ronda. Un `fail` posterior sí es una ronda de corrección
  y además deja la tarea `blocked` con el estado observado del efecto hasta
  que la persona decida la recuperación (revertir, completar o aceptar el
  estado); si el efecto a reintentar cambia en algo, su digest cambia y exige
  nueva aprobación `high`. Si el `high` es por tocar `protected_paths`, no hay
  fase de efecto: la aprobación `high` es precondición del gate 3.
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
  inicio, entrega), y que ese historial es coherente con `evidence/<task>.md`
  (cada `delivered` tiene su entrada con el mismo `actor_id` y `<sha-trabajo>`);
  **historial incompleto o incoherente → no elegible**. El orchestrator registra
  el veredicto como evento en `participations.md`. Esto es supervisión humana
  provisional, no enforcement.
- **`actor_id` en bootstrap**: identificador lógico estable que asigna la
  persona al abrir una sesión, independiente del proveedor (`<usuario>-a<n>`,
  p. ej. `camilo-a1`); proveedor y sesión son atributos de cada línea de
  `participations.md`. Una sesión que continúa el trabajo de un actor (su
  propio handoff, una ronda siguiente) reutiliza su `actor_id` aunque cambie de
  proveedor; para verificar, la persona crea un `actor_id` nuevo que no haya
  participado en la tarea.
- Verifier con contexto nuevo, desde el checkout de coordinación, con un
  worktree desechable en `<sha-entrega>` para reejecutar. Comprueba primero que
  `git diff --name-only <sha-trabajo>..<sha-entrega>` sólo lista rutas de
  registro (§2.1) y que la autorización de `build` vigente cubre los digests
  actuales de `plan.md` y `spec.md`. Reejecuta los comandos de validación sobre
  ese árbol. **Vigencia de la evidencia**: la del worker sólo se reutiliza si
  coinciden SHA, comandos y entorno registrado y la ejecución quedó capturada;
  si no, se vuelve a ejecutar. Antes de ejecutar nada, resuelve
  `protected_paths` (`policy.yaml` más la lista de §4.3) y revisa línea a línea
  los modificados, anotando el `git hash-object` de cada uno en el veredicto
  para que el worker pueda reutilizar esa revisión.
- Un informe con dos secciones separadas: **cumplimiento de la spec** (cada
  criterio con evidencia) y **calidad técnica**.
- Veredicto en `evidence/<task>.verdict.md`, cometido en `feat/<id>`
  (`verdict: T<n> ronda k`), nunca en la rama de la tarea: `pass`; `concerns`
  sólo para observaciones no bloqueantes sin incumplimiento de aceptación ni
  riesgo pendiente; `fail` con la clase de hallazgo. Un defecto dentro del
  alcance se corrige o se reclasifica explícitamente fuera de él (S04 l. 101);
  `concerns` no lo elude. `pass` y `concerns` cierran la tarea (`completed`):
  los `concerns` quedan listados para el gate 3 y, si la persona no los acepta
  allí, la tarea se reabre (S04). `fail` devuelve la tarea a `build` y consume
  una ronda.
- `high`: además, aprobación `local` de la persona en `control:approvals/<id>.md`
  con el digest de la solicitud (tarea, SHA, efecto), revalidada justo antes del
  efecto; la solicitud dice si hay fase de efecto (§4.3) o si la aprobación es
  por `protected_paths`. Un efecto `prohibited` es `fail` sin ejecución.
- Una verificación a medias **no se transfiere**: se descarta y otro verifier
  (o el mismo `actor_id` en otra sesión) la rehace con contexto nuevo.

### 4.5 `deploy` (integrar): `/feature-integrate`

- Precondiciones mecánicas: cada tarea del plan está `completed` o
  `cancelled`. Las **`completed`**: veredicto `pass` o `concerns` (los
  `concerns` se listan para el gate 3), `merged` en `feat/<id>`, `actor_id`
  elegible, posterior al último `invalidated` de su tarea y citando los digests
  vigentes (o ratificado contra ellos). Las **`cancelled`** (S04 l. 102) no
  tienen entrega ni veredicto ni merge; exigen evento `cancelled` con razón,
  impacto, cambio de alcance aceptado (línea `scope <digest-plan> cancelled
  T<n> accepted` en `control`, o sustitución aceptada en el gate 2 renovado),
  dependencias reconciliadas (ninguna tarea `completed` o pendiente depende de
  ella sin recableado en el plan) y disposición explícita del código parcial
  (rama sin merge borrada o conservada como referencia; si algo se había
  integrado, la tarea que lo retira). La autorización de `build` cubre los
  digests actuales de `plan.md` y `spec.md`; `high` aprobado donde la tarea lo
  exige.
- La **candidata es `feat/<id>`** actualizada sobre `main` (`git merge main`,
  `<sha-main-base>` = `git rev-parse main` en ese momento). Es **completa**:
  antes de verificarla, el integrador comete en ella el cierre documental
  (consolidación del delta en `specs/`); **`spec.md` y `plan.md` no se tocan**,
  porque su digest está autorizado y una reejecución lo rompería; que la
  feature está implementada lo atestan `specs/` y la línea `integrated
  <sha-merge>` en `control`. En un `acotado` el cierre es sólo
  `evidence/README.md`. Nada se modifica después del merge.
- Se verifica la **candidata integrada exacta**: sobre `<sha-verificado>` (HEAD
  tras el cierre documental) se ejecutan las validaciones globales del
  repositorio; su evidencia va en `evidence/README.md`, cometido encima como
  commit de registro (`evidence: integración`). Ese HEAD es `<sha-candidato>`;
  la skill comprueba que entre `<sha-verificado>` y `<sha-candidato>` sólo
  cambia `evidence/README.md` (§2.1). Lo que se aprueba es el par
  (`<sha-candidato>`, `<sha-main-base>`).
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
  ejecuta el merge (`git merge --no-ff feat/<id>`); la skill sólo comprueba y
  prepara el comando.
- Después del merge:
  - `features/<id>/` queda como historial; la **única** escritura posterior es
    `integrated <sha-merge>` en `control:approvals/<id>.md`, por la persona; no
    hay evento en `participations.md` ni cambio alguno en el árbol integrado;
  - conocimiento: sólo se cura una nota si tiene **fuente y verificación**; los
    criterios de utilidad (reusable, no derivable del código) deciden si vale la
    pena, no si es verdad;
  - si una instrucción se repitió tres veces, se propone skill (cambio `high`).
- El deploy real a un entorno queda fuera del v0; cuando exista será `high`.

### 4.6 Transversal: `/session-handoff` y `/session-resume`

- `evidence/<task>.handoff.md` por feature, sólo cuando hay algo que entregar, con cuatro bloques:
  **Resultado**, **Validación** (o «no ejecutada: motivo»), **Pendiente**,
  **Contexto**. Enlaza artefactos; no los duplica; nunca en temporal.
- Dos tipos: `work` (un worker entrega su rama `task/<id>/T<n>`; si el receptor
  es otro `actor_id`, transfiere ownership) e `integrate` (el integrador entrega
  la candidata `feat/<id>`; no hay ownership de tarea). La verificación no se
  entrega: se rehace (§4.4). Quien vaya a verificar una tarea **no acepta** su
  handoff `work`: lo convertiría en owner y lo haría inelegible.
- **No se entrega trabajo sin commit**: antes del handoff, todo cambio pendiente
  (staged, unstaged y archivos nuevos pertinentes) va en un commit `wip:` en la
  rama entregada, añadido por lista explícita de archivos propios tras
  inspeccionar índice y árbol; un cambio ajeno detiene el handoff. Orden fijo:
  `wip:` → `handoff:` (sólo rutas de registro) → evento `handoff_emitted` con
  `<sha-trabajo>`. Así el handoff vincula proyecto, tarea, SHA base y
  `<sha-trabajo>`, sin hashes parciales que puedan no cambiar aunque cambie el
  entregable.
- `/session-resume`: **aceptación condicional** contra el estado actual. El
  receptor comprueba la rama (`git diff --name-only <sha-trabajo>..HEAD` sólo
  rutas de registro, árbol limpio) y la coordinación actual en `feat/<id>`
  (owner igual al emisor en `tasks.md`; último evento de la tarea
  `handoff_emitted` sobre ese `<sha-trabajo>`); si difieren, rechaza y el
  orchestrator registra `handoff_rejected` con el motivo. El receptor **no
  escribe nada**: la aceptación es el evento `handoff_accepted` y, si cambia el
  owner, `transferred`, ambos registrados por el orchestrator antes de que el
  receptor escriba en la rama. Cualquier cambio posterior exige reconciliar
  antes de continuar.

## 5. Skills

| Skill | Etapa | Rol | Escribe en |
| --- | --- | --- | --- |
| `/feature-spec` | `plan` | planner + persona | `spec.md` en `feat/<id>` |
| `/feature-plan` | `design` | planner | `plan.md` en `feat/<id>`; crea `tasks.md` con todas las tareas en `pending` y `participations.md` sin eventos |
| `/feature-build <task>` | `build` | worker | rama de la tarea: código, `evidence/<task>.md`, `evidence/<task>.findings.md` |
| `/feature-verify <task>` | `verify` | verifier | `evidence/<task>.verdict.md` en `feat/<id>` |
| `/feature-integrate` | `deploy` | integrador + persona | candidata `feat/<id>` (`specs/`, `evidence/README.md`; nunca `spec.md` ni `plan.md`); el merge a `main` lo ejecuta la persona |
| `/session-handoff` | transversal | quien cierra | `evidence/<task>.handoff.md` en la rama entregada |
| `/session-resume` | transversal | quien abre | nada; acepta o rechaza vía eventos del orchestrator |
| `/spike` | `plan` | worker | `spikes/<id>.md` en `feat/<id>` o en la rama de la definición |

Reglas de las skills:
- Formato `SKILL.md` con `name`, `description` y cuerpo breve; `references/` bajo
  demanda.
- Ninguna skill declara permisos; lo que puede tocar lo fijan el plan y el
  `policy.yaml`.
- **Ubicación canónica neutral** `skills/<skill>/SKILL.md`; se proyectan a
  `.claude/skills/`, `.opencode/` y la configuración de Codex **sólo tras
  comprobar** que cada proveedor la ejecuta (E4). Un formato común no garantiza
  ejecución portable (`research-agent-skills.md` l. 33).
- **Referencias fuera del directorio de la skill se escriben como rutas desde la
  raíz del repositorio** (`docs/workflow-construccion.md`, `skills/README.md`),
  sin enlace relativo, para que sobrevivan a la proyección; sólo `references/`
  de la propia skill se enlaza en relativo, porque el directorio se proyecta
  entero. E4 comprueba que cada proveedor resuelve esas rutas desde la raíz.
- **Paquete de proyección a otro repositorio (el piloto).** La proyección copia,
  en las mismas rutas del repositorio destino, `skills/` completo,
  `docs/workflow-construccion.md`, `skills/README.md` y un `policy.yaml`
  provisional con la lista de `protected_paths` de §4.3 (es operativa: build y
  verify la consultan). El `skills/README.md` copiado lleva como primera línea
  `Proyectado desde T800R @ <sha>`; las referencias al canon (`docs/definition/`,
  `docs/research-*`, `ideas/`) **no se copian** y se resuelven en el checkout
  de T800R identificado por ese SHA. E4 comprueba desde el piloto que esos
  archivos existen y que cada proveedor resuelve las rutas de los `SKILL.md`.
- Cambiar una skill es `high`: la skill modificada no aprueba su propia
  activación.
- Evals por skill, desde el v0 como checklist manual con cuatro casos: activación
  correcta, no activación, incumplimiento de una restricción (p. ej. tocar un
  archivo no permitido) y comparación con la revisión anterior.

## 6. Estructura de archivos

```
control                   # rama huérfana; sólo la persona, desde un worktree dedicado
  approvals/<feature-id>.md  # líneas: `spec <digest> approved` · `build <digest-plan> on spec <digest-spec> authorized`
                          #   (acotado: `build <digest-plan> authorized`) · `high <digest> approved` ·
                          #   `scope <digest-plan> cancelled T<n> accepted` · `merge <sha-candidato> onto <sha-main-base> approved` ·
                          #   `integrated <sha-merge>`
  approvals/spikes.md     # `spike <id> approved` (spikes durante la definición)
feat/<id>                 # rama de coordinación y candidata; checkout de coordinación (orchestrator)
  features/<id>/
    spec.md               # problema, aceptación, decisiones, riesgo; planner
    plan.md               # tareas, interfaces, ownership, validaciones, readiness; inmutable tras autorizar build
    tasks.md              # estado operativo mutable: status, owner actual, deps; sólo el orchestrator
    participations.md     # append-only: asignaciones, transferencias, inicios, entregas, veredictos, handoffs, merged; sólo el orchestrator
    evidence/<task>.verdict.md  # sólo el verifier; commit `verdict:`
    evidence/README.md    # integrador; commit `evidence:` encima de <sha-verificado>
  spikes/<id>.md          # informe durable del spike de la feature
task/<id>/T<n>            # rama de la tarea, desde feat/<id>; worktree del worker
  <archivos permitidos>   # hasta <sha-trabajo>
  features/<id>/evidence/<task>.md  # sólo el worker, append-only, actor_id por entrada; commit `evidence:` encima
  features/<id>/evidence/<task>.findings.md         # sólo si hay hallazgos ajenos; mismo commit
  features/<id>/evidence/<task>.handoff.md          # sólo si hay handoff; commit `handoff:`
spike/<id>                # rama desechable del experimento; se borra tras persistir el informe
specs/                    # specs vigentes tras integrar
skills/<skill>/SKILL.md   # canónico; proyectado a cada proveedor
```

Rutas de registro (§2.1): `features/<id>/{tasks,participations}.md`
y `features/<id>/evidence/**`. Los commits de registro sólo las tocan; el SHA del
trabajo es el último commit que toca otra cosa.

## 7. Seguridad: controles efectivos y límites conocidos

| Riesgo | Control en el v0 | Límite aceptado |
| --- | --- | --- |
| El worker se salta al verifier | La persona abre la verificación en una sesión o proveedor distinto del worker; el veredicto declara su `actor_id` y la skill comprueba que no aparece en `participations.md` como worker u owner de la tarea en ningún evento; historial incompleto o incoherente → no elegible | **Supervisión humana provisional**: nada identifica qué actor escribió un archivo; un agente con shell puede escribir el veredicto o `participations.md`. El ledger y el `actor_id` verificable son tareas del roadmap |
| Un agente aprueba como humano | `control:approvals/<id>.md` sólo lo escribe la persona, en la rama `control`, fuera de una sesión de agente, con digests de lo aprobado; se revalida justo antes de actuar | Perfil `local` de S12: no impide criptográficamente la suplantación desde el mismo shell; el perfil `signed` está en el backlog |
| El progreso invalida la autorización | `plan.md` es inmutable tras autorizar; el estado vive en `tasks.md`, que no forma parte del digest autorizado | — |
| Se acepta un handoff con otra base | Todo trabajo va en commit antes del handoff; aceptación condicional contra SHA base, `<sha-trabajo>` (sólo rutas de registro encima) y la coordinación actual de `feat/<id>` (owner y último evento) | — |
| La evidencia mueve lo que atesta | Commits de registro encima del SHA del trabajo, comprobables por ruta (§2.1); veredictos en `feat/<id>`; atestación posterior al merge sólo en `control` | — |
| Código del host peligroso (tests, scripts, hooks, dependencias) | Sólo comandos declarados; `protected_paths` (`policy.yaml` más la lista de §4.3) comprobados **antes de cada ejecución**, incluidos hooks versionados; revisión del verifier con hash por archivo antes de ejecutar sobre ellos modificados; `prohibited` nunca se ejecuta; sin secretos en el entorno | **Ejecución en host supervisada, riesgo residual aceptado**: un comando permitido ejecuta tests y dependencias modificados; los worktrees no aíslan; el runner OCI está en el backlog |
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
