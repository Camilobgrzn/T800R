# Skills del flujo de construcción de T800R

Catálogo de las ocho skills con las que la persona y los agentes construyen
T800R y el repositorio piloto (IDP con Backstage) feature a feature. La fuente
de verdad es [workflow-construccion.md](../docs/workflow-construccion.md) (v4,
aceptado el 2026-09-30 en [S12](../docs/definition/session-12-validation-convergence.md),
fila «Flujo de construcción por feature y skills (v4)»). Este README explica qué
skills existen, cómo encajan en el flujo y de qué referencias se tomó cada
práctica; no sustituye al flujo ni a los `SKILL.md`, aún no escritos.

## 1. Qué es este directorio

- **Ubicación canónica neutral.** Cada skill vive en `skills/<skill>/SKILL.md`,
  con `name`, `description`, cuerpo breve y `references/` bajo demanda
  (workflow §5). Es la única copia con autoridad.
- **Proyección a proveedores.** Se proyecta a `.claude/skills/`, `.opencode/` y
  la configuración de Codex **sólo tras comprobar** que cada proveedor la
  ejecuta (experimento E4). Un formato común no garantiza ejecución portable:
  rutas, activación y metadatos difieren
  ([research-agent-skills.md](../docs/research-agent-skills.md) l. 33-39 y
  tabla l. 58-63).
- **Las skills no conceden permisos.** Orientan y comprueban lo mecánico; lo que
  un actor puede tocar lo fijan el plan autorizado y el `policy.yaml`
  (workflow §5; [S04](../docs/definition/session-04-operating-cycle.md) l. 112;
  [research-ai-native-sdlc-playbook.md](../docs/research-ai-native-sdlc-playbook.md) l. 63).
- **Cambiar una skill es `high`.** Una skill modificada no aprueba su propia
  activación; skills y configuración de agentes son `protected_paths` (workflow
  §5 y §4.3). Son la versión 0 de lo que T800R instalará en otros repositorios.

## 2. El flujo en una página

Antes del diagrama, dos piezas que aparecen en él: la **rama huérfana `control`**
es una rama de Git sin historia común con `main` donde sólo la persona registra
aprobaciones (`control:approvals/<feature-id>.md`); está separada de `main` y de
la rama candidata para que registrar una aprobación no cambie el SHA de nada
aprobado (workflow §2). Un **digest** es un hash del contenido de `spec.md` o
`plan.md` que la aprobación cita para identificar exactamente qué se aprobó. Las
skills lo fijan como `git hash-object <archivo>` sobre el archivo guardado; el
digest nunca se escribe dentro del archivo (cambiaría el hash).

```
idea / issue / problema en una frase
        │
        ▼
┌─ plan ─────────────────────────────────────────────────────────────┐
│ /feature-spec ──► features/<id>/spec.md                            │
│ /spike ──► spikes/<id>.md (sólo si una incertidumbre impide decidir)│
└──────────────┬─────────────────────────────────────────────────────┘
   GATE 1      │ la persona, en la rama `control`, fuera de una sesión de agente:
   spec        │ control:approvals/<id>.md ← «spec <digest-spec> approved»
               ▼
┌─ design ───────────────────────────────────────────────────────────┐
│ /feature-plan ──► plan.md (tareas, interfaces, archivos permitidos, │
│   validaciones, readiness PASS/CONCERNS/FAIL)                      │
│   crea tasks.md (todas en `pending`) y participations.md (vacío)   │
└──────────────┬─────────────────────────────────────────────────────┘
   GATE 2      │ «build <digest-plan> on spec <digest-spec> authorized»
   build       │ (acepta explícitamente los CONCERNS del readiness, si los hay)
               │ desde aquí plan.md es inmutable; el progreso vive en tasks.md
               ▼
┌─ build ────────────────────────────────────────────────────────────┐
│ orchestrator: tarea `ready` en tasks.md + asignación en             │
│   participations.md                                                 │
│ /feature-build <task> ──► rama feat/<id>/<task>,                    │◄─┐
│   evidence/<task>.md (append-only), findings.md si hay hallazgo ajeno│  │ hasta
└──────────────┬─────────────────────────────────────────────────────┘  │ 3 rondas
               ▼                                                         │ por tarea
┌─ verify ───────────────────────────────────────────────────────────┐  │
│ /feature-verify <task> ──► evidence/<task>.verdict.md               │  │
│   pass, concerns o fail ───────────────────────────────── fail ─────┼──┘
│   `high`: además aprobación `local` en control:approvals/<id>.md    │
└──────────────┬─────────────────────────────────────────────────────┘
               ▼ todas las tareas `pass` (o `concerns` aceptados)
┌─ deploy (integrar) ────────────────────────────────────────────────┐
│ /feature-integrate ──► candidata completa en la misma rama:         │
│   spec.md → implemented, specs/, evidence/README.md; validaciones   │
│   globales registradas sobre el par (sha-candidato, sha-main-base)  │
└──────────────┬─────────────────────────────────────────────────────┘
   GATE 3      │ «merge <sha-candidato> onto <sha-main-base> approved»
   merge       ▼ la persona ejecuta el merge sólo si ambos SHA siguen iguales
             main

transversal:  /session-handoff ──► features/<id>/handoff.md ──► /session-resume
              (commit `wip:` antes de entregar; aceptación condicional al retomar)
```

Dónde entra cada archivo: `spec.md` lo escribe `/feature-spec` y lo aprueba el
gate 1; `plan.md` lo escribe `/feature-plan` y lo congela el gate 2; `tasks.md` y
`participations.md` los crea `/feature-plan` y sólo los muta el orchestrator;
`evidence/<task>.md` lo escribe el worker y `evidence/<task>.verdict.md` el
verifier; `control:approvals/<feature-id>.md` lo escribe únicamente la persona en
la rama huérfana `control` (workflow §2 y §6). Es el orchestrator quien convierte
un veredicto en estado: tras leer `evidence/<task>.verdict.md`, actualiza
`tasks.md` y registra el evento en `participations.md`.

Quién acepta los `concerns`: la persona, en el gate 2 para los del readiness y
en el gate 3 para los de los veredictos (workflow §4.2 y §4.5).

**Escrituras indebidas.** Un agente que escriba en `control`, en
`participations.md` sin ser orchestrator o en un `.verdict.md` que no le
corresponde invalida la feature; el integrador registra el incidente y la
feature vuelve a `verify` (workflow §2).

### Tres tamaños de cambio (workflow §3)

| Tamaño | Cuándo | Skills que usa | Artefactos |
| --- | --- | --- | --- |
| `spike` | Una incertidumbre impide decidir | `/spike` | `spikes/<id>.md`; el código no se conserva |
| `acotado` | Bugfix, refactor sin cambio de comportamiento, tarea única (`skip_specs`) | `/feature-plan` (spec y readiness caben en `plan.md`; la persona aprueba spec y `build` en un acto) → `/feature-build` → `/feature-verify` → `/feature-integrate` | `plan.md`, `tasks.md`, `participations.md`, `evidence/<task>.md`, `control:approvals/<id>.md` |
| `feature` | Comportamiento nuevo o cambio arquitectónico | Las cinco de etapa (`/feature-spec` → `/feature-plan` → `/feature-build` → `/feature-verify` → `/feature-integrate`); `/spike`, `/session-handoff` y `/session-resume` sólo si hacen falta | Todo lo anterior más `spec.md`; `findings.md` y `handoff.md` sólo si existen |

Si en un `acotado` aparece comportamiento nuevo o una decisión no registrada, se
reclasifica a `feature` y vuelve a `plan`.

## 3. Catálogo

| Skill | Etapa | Quién la ejecuta | Entrada | Escribe en | Gate que abre o cierra |
| --- | --- | --- | --- | --- | --- |
| `/feature-spec` | `plan` | planner + persona | Idea, issue o problema en una frase | `features/<id>/spec.md` | Prepara el gate 1 (aprobar spec) |
| `/feature-plan` | `design` | planner | `spec.md` aprobada (o descripción del `acotado`) | `plan.md`; inicializa `tasks.md` y `participations.md` | Prepara el gate 2 (autorizar `build`, aceptando los `CONCERNS`); `FAIL` cierra y devuelve a `/feature-spec` |
| `/feature-build <task>` | `build` | worker | Autorización de `build`, tarea `ready`, brief | Rama `feat/<id>/<task>`, `evidence/<task>.md`, `findings.md` | Ninguno; se detiene por `intent gap`, defecto de spec, `high` o ronda 3 |
| `/feature-verify <task>` | `verify` | verifier | SHA entregado y `evidence/<task>.md` | `evidence/<task>.verdict.md` | Cierra la tarea (`pass`) o la devuelve a `build` (`fail`); `high` exige aprobación `local` |
| `/feature-integrate` | `deploy` | integrador + persona | Todas las tareas `pass` o `concerns` aceptados | Rama candidata (`specs/`, `spec.md`, `evidence/README.md`) | Prepara el gate 3 (aprobar merge); el merge lo ejecuta la persona |
| `/session-handoff` | transversal | quien cierra la sesión | Estado real de la rama y de la tarea | `handoff.md` y commit `wip:` | Ninguno |
| `/session-resume` | transversal | quien abre la sesión | `handoff.md`, `tasks.md`, `participations.md`, árbol | Nada hasta validar; luego el orchestrator registra la transferencia | Ninguno; puede rechazar el handoff |
| `/spike` | `plan` | worker | Pregunta bloqueante aprobada | `spikes/<id>.md`, rama desechable | Ninguno; responde una pregunta, no autoriza construir |

## 4. Las ocho skills

### 4.1 `/feature-spec`

**Propósito.** Convertir una idea en `spec.md` con criterios de aceptación
verificables, decisiones tomadas y delegadas, y riesgo declarado, para que la
persona pueda aprobarla en el gate 1 (workflow §4.1).

**Cuándo invocarla.** Al abrir una `feature`; cuando un `acotado` se reclasifica;
cuando `/feature-build` o `/feature-verify` reportan un **defecto de spec**.
**Cuándo no.** Para un `acotado` (la spec cabe en `plan.md`), para un `spike`, o
cuando ya existe spec aprobada sin defecto conocido.

**Precondiciones mecánicas.** `features/<id>/` con `id` único; si `spec.md` ya
tiene digest aprobado en `control:approvals/<id>.md`, advierte que cambiarla
exige nueva aprobación y, si había `build` autorizado, nueva autorización
(workflow §4.1-4.2). Para declarar el riesgo consulta `protected_paths` del
`policy.yaml` cuando exista.

**Produce.** `spec.md` con problema y resultado observable, aceptación
(Given/When/Then cuando ayude), no-alcance, decisiones tomadas y delegadas,
interfaces públicas, riesgo `routine`/`high`, glosario si hace falta; propone el
tamaño del cambio.

**Qué no hace.** No aprueba: `status: approved` es metadato. No escribe en
`control`. No descompone tareas. No inventa decisiones que la persona no tomó.

| Práctica | Referencia | Por qué se adoptó | Qué se descartó de esa referencia y por qué |
| --- | --- | --- | --- |
| Entrevista breve ordenada por las decisiones que faltan; confirmar el entendimiento antes de escribir | Matt Pocock `grilling` — [research-sdlc-references.md](../docs/research-sdlc-references.md) l. 82-84 | Reduce ambigüedad con esfuerzo proporcional a lo pendiente (l. 123) | `to-spec` publica la spec en el tracker (l. 84-85, 104-105): el repositorio es la fuente canónica |
| Glosario y decisiones registradas en la spec | Pocock `domain-modeling` — [research-sdlc-references.md](../docs/research-sdlc-references.md) l. 83-84 | Lenguaje compartido entre persona y agentes (l. 103-104) | Modelado de dominio completo como paso obligatorio: glosario sólo si se introducen términos |
| Tres tamaños de cambio y aprobación humana antes de implementar | Superpowers `brainstorming` — [research-superpowers-bmad.md](../docs/research-superpowers-bmad.md) l. 21-25 | La preparación escala con el riesgo (workflow §3) | Diseño sólo en chat para el cambio acotado (l. 59-60): los acuerdos persisten aunque sean breves |
| Decisiones tomadas separadas de las delegadas al worker | BMAD `build-auto`, bloque de intención — [research-superpowers-bmad.md](../docs/research-superpowers-bmad.md) l. 97-99; [S04](../docs/definition/session-04-operating-cycle.md) l. 83 | Permite detectar una laguna de intención en vez de improvisar | Mezclar spec y estado en un mismo registro (l. 110): aquí el estado vive en `tasks.md` |
| `skip_specs`: un cambio sin comportamiento nuevo no exige `spec.md`; no se inventan requisitos para llenar una plantilla | OpenSpec — [research-evolutionary-specs.md](../docs/research-evolutionary-specs.md) l. 38-39 | Sostiene el tamaño `acotado` | `isPlanningComplete` como señal de entrega (l. 41-43): una spec aprobada no demuestra nada implementado (l. 105-106) |
| Spec del cambio separada de las specs vigentes en `specs/` | OpenSpec deltas por cambio — [research-evolutionary-specs.md](../docs/research-evolutionary-specs.md) l. 24-27 | Conserva historia y acuerdos vigentes sin mezclarlos | Independencia semántica entre deltas concurrentes (l. 43-45): no se asume; el análisis de coherencia la comprueba |
| Aprobación registrada con el digest de lo aprobado, desde fuera de una sesión de agente | [S12](../docs/definition/session-12-validation-convergence.md) «Perfil de aprobación humana», l. 60; Anthropic playbook, intent revisado por el product owner — [research-ai-native-sdlc-playbook.md](../docs/research-ai-native-sdlc-playbook.md) l. 31 | Sin digest, el gate no sabe qué aprobó | `intent.md`, `spec.md` y `plan.md` obligatorios siempre (playbook l. 69-71): preparación proporcional |
| Given/When/Then sólo cuando ayuda | BMAD gate completo — [research-superpowers-bmad.md](../docs/research-superpowers-bmad.md) l. 117-118 | Útil para comportamiento observable | Exigirlo universalmente: no es requisito de T800R |

### 4.2 `/feature-plan`

**Propósito.** Descomponer la spec en tareas verticales con ownership de rutas,
validaciones y readiness, y dejar listo el gate 2 (workflow §4.2). Orden: primero
tareas y coherencia, después readiness.

**Cuándo invocarla.** Con spec aprobada; para un `acotado`, directamente (la spec
va dentro de `plan.md` y la persona autoriza con una sola línea `build
<digest-plan> authorized`, sin digest de spec); tras un **defecto de spec**, para
reescribir el plan. **Cuándo no.** Tras autorizar `build` salvo en ese caso de
replanificación, que **reabre el gate 2**: el plan es inmutable y cualquier
cambio exige nueva autorización.

**Precondiciones mecánicas.** `control:approvals/<id>.md` contiene `spec
<digest-spec> approved` para el digest actual (salvo `acotado`); no existe
autorización de `build` vigente para el `plan.md` que se va a escribir, o se
está replanificando por defecto de spec.

**Produce.** `plan.md` (tareas con `id`, aceptación propia, interfaces, archivos
permitidos, dependencias, comandos de validación, riesgo, «tests primero» cuando
procede; análisis de coherencia; readiness `PASS`/`CONCERNS`/`FAIL`). **Sólo en
la primera ejecución** inicializa `tasks.md` con todo en `pending` y
`participations.md` sin eventos; esa inicialización es el único momento en que
el planner los escribe, después son del orchestrator. **Al replanificar** no
reinicia registros: conserva `participations.md`, identifica las tareas
afectadas, invalida su evidencia y deja que las independientes continúen
(workflow §4.3; conservación histórica de S04 l. 94-99). La skill comprueba lo
mecánico del readiness (aceptación y archivos por tarea, IDs, comandos,
criterios cubiertos); el juicio sobre incógnitas lo prepara el planner.

**Qué no hace.** No autoriza `build`. No escribe código ni soluciones en el plan.
No muta `tasks.md` ni `participations.md` después de inicializarlos. `FAIL`
devuelve a `/feature-spec`.

| Práctica | Referencia | Por qué se adoptó | Qué se descartó de esa referencia y por qué |
| --- | --- | --- | --- |
| Tareas con interfaces consumidas y producidas y resultado comprobable; cada tarea justifica su propio ciclo de prueba y revisión | Superpowers `writing-plans` — [research-superpowers-bmad.md](../docs/research-superpowers-bmad.md) l. 27-31 | Hace verificable cada tarea y explícita la dependencia | Rutas y código detallado por adelantado (l. 30-31): el brief lleva referencias, no soluciones (workflow §9) |
| Incrementos verticales verificables con bloqueos; excepciones para refactors amplios | Pocock `to-tickets` — [research-sdlc-references.md](../docs/research-sdlc-references.md) l. 87-88 | Feedback temprano y paralelismo identificable (l. 125) | Confirmación humana por desglose (l. 106-107): el gate 2 cubre el plan completo, no cada tarea |
| Aceptación, comprobaciones, dependencias y archivos probables por tarea; contratos antes de paralelizar | Addy Osmani `planning-and-task-breakdown` — [research-sdlc-references.md](../docs/research-sdlc-references.md) l. 27-30 | Base del ownership de rutas y del paralelismo seguro | Umbrales de líneas/archivos y checkpoints humanos periódicos (l. 46-47) |
| Análisis de coherencia spec ↔ plan: cobertura, ambigüedades, contradicciones | Spec Kit `analyze` — [research-evolutionary-specs.md](../docs/research-evolutionary-specs.md) l. 69-70 | Detecta criterios sin tarea antes de construir | `converge` por inspección como evidencia de implementación (l. 70-73) |
| Readiness: «¿puede implementarse sin inventar decisiones no registradas?», `PASS`/`CONCERNS`/`FAIL` | BMAD `readiness-gate` — [research-superpowers-bmad.md](../docs/research-superpowers-bmad.md) l. 83-86; condiciones de [S04](../docs/definition/session-04-operating-cycle.md) l. 82-83 y gate l. 275 | Un documento ausente sólo importa si faltan decisiones | Acciones por archivo y Given/When/Then obligatorios (l. 117-118); readiness antes de las tareas (orden corregido en v2) |
| Profundidad proporcional al riesgo y la incertidumbre | BMAD `choose-a-planning-path` — [research-superpowers-bmad.md](../docs/research-superpowers-bmad.md) l. 78-81, 130-131 | Evita un paquete documental fijo | Paquete completo para cada cambio (l. 135-138) |
| Las condiciones mecánicas las comprueba la skill, no el modelo; un campo declarado no es evidencia | nWave `PhaseStateValidator` — [research-sdlc-references.md](../docs/research-sdlc-references.md) l. 64-66 y 78 | Separa lo verificable por archivo de lo que exige juicio | Presencia de un archivo como completitud (l. 78, ADR-002) |
| Archivos permitidos disjuntos y máximo dos workers en paralelo | [proposal-efficient-workflow.md](../docs/proposal-efficient-workflow.md) l. 123-126; [propuesta-harness-multiagente.md](../ideas/propuesta-harness-multiagente.md) l. 325; [S04](../docs/definition/session-04-operating-cycle.md) l. 108 | Un escritor por superficie evita sobrescrituras | Paralelismo por defecto: sólo con interfaces ya acordadas |
| Tests primero cuando el criterio describe comportamiento observable y hay harness | Pocock `implement`, TDD «cuando sea posible» — [research-sdlc-references.md](../docs/research-sdlc-references.md) l. 89 | Proporcional, no ritual (workflow §9) | TDD universal, Gherkin y cuota de mutación de nWave (l. 76-77) |
| Revisión del readiness por otro actor sólo si el riesgo lo justifica | [S04](../docs/definition/session-04-operating-cycle.md) l. 103-107 | Independencia proporcional | Gate rutinario de revisión para planes triviales |

Sin referencia externa: la inmutabilidad de `plan.md` tras el gate 2 con el
estado separado en `tasks.md` es una corrección de la ronda 3 de Astra
(workflow §11), no una práctica tomada de las fuentes.

### 4.3 `/feature-build <task>`

**Propósito.** Ejecutar una tarea autorizada dentro de su brief, en su rama, y
dejar evidencia append-only de lo que se ejecutó (workflow §4.3).

**Cuándo invocarla.** Tarea `ready` de un incremento con `build` autorizado; al
volver de un `fail` mientras queden rondas. **Cuándo no.** Sin autorización en
`control`; con dependencias no `completed`; agotadas las tres rondas (cambiar
contexto, tamaño de tarea o modelo, o escalar); en `main`.

**Precondiciones mecánicas.** `control:approvals/<id>.md` contiene `build
<digest-plan> on spec <digest-spec> authorized` para los digests actuales; la
tarea está `ready` en `tasks.md`; sus dependencias están `completed`; el
orchestrator registró la asignación en `participations.md`; los archivos
permitidos existen en el plan.

**Produce.** Commits en `feat/<id>/<task>`; `evidence/<task>.md` con `actor_id`,
SHA, comandos, resultado, entorno (SO, Node, hash del lockfile), fecha y «no
ejecutado: motivo»; hallazgos clasificados (laguna de intención → `blocked`
`intent gap` con el intento como parche; defecto de spec → `/feature-spec`;
corrección local → se hace y se anota; hallazgo ajeno → `findings.md`).

**Qué no hace.** No escribe veredictos, aprobaciones ni `participations.md`. No
ejecuta integración. No toca archivos fuera de los permitidos (bloquea la tarea).
No lanza workers. No ejecuta comandos no declarados. No recibe secretos.

| Práctica | Referencia | Por qué se adoptó | Qué se descartó de esa referencia y por qué |
| --- | --- | --- | --- |
| Brief con contexto nuevo por tarea; informe en archivo; límite de rondas; ante dificultad cambiar contexto, tamaño o modelo, nunca repetir sin cambios | Superpowers `subagent-driven-development` — [research-superpowers-bmad.md](../docs/research-superpowers-bmad.md) l. 34-40 | Contexto limpio y evidencia persistente por tarea | El coordinador resuelve ambigüedades por decisión propia (l. 49-52): aquí una laguna de intención consulta a la persona; `sdd-workspace` fuera de Git (l. 42-45): la evidencia va al repositorio |
| Ejecutar tras una aprobación; evidencia por porción; no repetir comprobaciones exitosas sin cambios; consultar por ambigüedad o riesgo | Addy Osmani `/build auto` e `incremental-implementation` — [research-sdlc-references.md](../docs/research-sdlc-references.md) l. 32-37 | Cercano a la autonomía por incremento de S04 l. 84-85 | Aprobación separada del plan, umbrales de líneas y checkpoints periódicos (l. 46-47) |
| Clasificar cada hallazgo: laguna de intención, defecto de spec, corrección local, hallazgo ajeno; la laguna guarda el intento como parche | BMAD `build-auto` `step-02-plan` / `step-04-review` — [research-superpowers-bmad.md](../docs/research-superpowers-bmad.md) l. 97-105; [research-evolutionary-specs.md](../docs/research-evolutionary-specs.md) l. 99-106 | Evita que el worker improvise acuerdos; permite continuar lo independiente | Borrar la historia bloqueada para reintentar (superpowers-bmad l. 111-112); revertir y reconstruir como respuesta universal (superpowers-bmad l. 115-116) |
| Brief con objetivo, aceptación, rutas permitidas, hasta diez referencias, presupuesto y condición de parada | Context packet — [MULTI_AGENT_HARNESS_ARCHITECTURE.md](../ideas/MULTI_AGENT_HARNESS_ARCHITECTURE.md) §7 l. 263-272 | Reproducible y con enlaces, no una transcripción | Presupuestos numéricos por tipo de trabajo (l. 278-286): se miden antes de fijarlos |
| Cada referencia del brief declara revisión, ámbito y papel (acuerdo, referencia o ejemplo) | [research-fuentes-sesion-3.md](../docs/research-fuentes-sesion-3.md) l. 22-28 y 40-44 | La versión más reciente no es necesariamente la aplicable | Registro completo de fuentes con esquema aprobado (l. 66-67): pendiente |
| Un escritor por archivo; sin subdelegación; exceder el alcance devuelve bloqueo | [proposal-efficient-workflow.md](../docs/proposal-efficient-workflow.md) l. 123-126 | Impide colisiones y cascadas de delegación | El retorno de unas 300 palabras (l. 110-112) es orientativo y la fuente permite excederlo; aquí la evidencia completa va a `evidence/<task>.md` y el retorno breve la enlaza |
| «No ejecutado: motivo» explícito en la evidencia | nWave motivos de omisión — [research-sdlc-references.md](../docs/research-sdlc-references.md) l. 65-66; [MULTI_AGENT_HARNESS_ARCHITECTURE.md](../ideas/MULTI_AGENT_HARNESS_ARCHITECTURE.md) l. 440; [propuesta-harness-multiagente.md](../ideas/propuesta-harness-multiagente.md) l. 186 | «No ejecutado» no es «aprobado» | Validar sólo campos sin comprobar que los tests corrieron (l. 65-66) |
| `protected_paths` para todo lo ejecutable por configuración; contenido no confiable como dato | [MULTI_AGENT_HARNESS_ARCHITECTURE.md](../ideas/MULTI_AGENT_HARNESS_ARCHITECTURE.md) §17 l. 804-810; [S09](../docs/definition/session-09-security-governance.md) l. 62 (rutas protegidas) | Un comando permitido ejecuta tests y dependencias modificados; se revisa antes | Presentar worktrees como aislamiento (l. 808; playbook l. 79-80): en el v0 es ejecución en host supervisada |
| Sin secretos en el entorno del worker | Workflow §4.3; [S09](../docs/definition/session-09-security-governance.md) l. 59 (secretos por referencia opaca) | Un worker no necesita el valor de un secreto para construir | Variables inyectadas al agente (arquitectura l. 805): el broker de secretos está en el backlog |
| Commit al finalizar cada porción de trabajo | Pocock `implement` — [research-sdlc-references.md](../docs/research-sdlc-references.md) l. 89-90 | Git como red de seguridad (S12 l. 64) | Revisión al finalizar por el propio implementador como verificación: no cuenta como verifier (S04 l. 107) |

### 4.4 `/feature-verify <task>`

**Propósito.** Reejecutar las validaciones sobre el SHA entregado con un
`actor_id` elegible y emitir un veredicto con dos secciones: cumplimiento de la
spec y calidad técnica (workflow §4.4).

**Cuándo invocarla.** Cuando el worker entregó y el orchestrator registró la
entrega en `participations.md`; la persona abre la sesión en un proveedor o
sesión distinta de la del worker. **Cuándo no.** Con el mismo `actor_id` que
trabajó la tarea; con historial incompleto o incoherente (no elegible); sobre
un SHA distinto del de la evidencia.

**Precondiciones mecánicas.** El `actor_id` declarado en la cabecera no aparece
en `participations.md` como worker u owner de la tarea en ningún evento
(asignación, transferencia, inicio, entrega); el historial es coherente con
`evidence/<task>.md`; el árbol está en el SHA entregado; los comandos de
validación del plan están declarados.

**Produce.** `evidence/<task>.verdict.md` con `actor_id`, SHA, reejecución (o
reutilización sólo si coinciden SHA, comandos y entorno y la ejecución quedó
capturada), cumplimiento criterio a criterio, calidad técnica y veredicto
`pass`, `concerns` o `fail` con clase de hallazgo. `concerns` sólo admite
observaciones no bloqueantes: sin incumplimiento de aceptación **ni riesgo
pendiente**. Para `high`, la solicitud de aprobación `local` con el digest
(tarea, SHA, efecto).

**Qué no hace.** No corrige código. No aprueba efectos `high` (lo hace la persona
en `control`). No escribe `participations.md` ni `tasks.md` (el orchestrator
registra el veredicto como evento y actualiza el estado). `concerns` no elude un
defecto dentro del alcance: se corrige o se reclasifica explícitamente (S04
l. 101); `pass` tampoco sustituye por sí solo las condiciones de `completed` de
esa línea.

| Práctica | Referencia | Por qué se adoptó | Qué se descartó de esa referencia y por qué |
| --- | --- | --- | --- |
| Informe con cumplimiento de la spec y calidad técnica como secciones separadas | Pocock `code-review` en dos ejes — [research-sdlc-references.md](../docs/research-sdlc-references.md) l. 90-91 y 127 | Evita que buena técnica oculte producto incorrecto | Dos informes independientes (l. 90-91): aquí un informe con dos secciones; la fuente misma admite que no siempre hacen falta agentes distintos (l. 127) |
| Evidencia recién ejecutada para cada afirmación; vigencia por SHA, comandos y entorno idénticos | Superpowers `verification-before-completion` — [research-superpowers-bmad.md](../docs/research-superpowers-bmad.md) l. 55-58 | Un veredicto sobre otro SHA no vale | Reejecutar siempre sin información nueva: se define vigencia (workflow §9) |
| Verificación final con contexto independiente | Anthropic playbook — [research-ai-native-sdlc-playbook.md](../docs/research-ai-native-sdlc-playbook.md) l. 34 y 44-45 | Independencia real, no auto-revisión | Revisión IA idéntica para todos los cambios (l. 74-75): independencia proporcional al riesgo |
| Elegibilidad por `actor_id`: excluidos todos los workers y owners históricos; sin historial → no elegible | [S12](../docs/definition/session-12-validation-convergence.md) «Predicado de elegibilidad del verifier», l. 63; [S04](../docs/definition/session-04-operating-cycle.md) l. 103-107 | Reanudar o cambiar de proceso no devuelve independencia | Nada: S12 l. 63 ya dice que cambiar de modelo o proveedor no es requisito. En bootstrap la persona abre otra sesión o proveedor como supervisión, no como enforcement (workflow §4.4) |
| Un campo declarado no es evidencia: se reejecuta sobre la revisión identificada | nWave `PhaseStateValidator` — [research-sdlc-references.md](../docs/research-sdlc-references.md) l. 64-66; ADR-002 | Sólo cuenta lo ejecutado sobre revisión y entorno identificados | Comprobar sólo que los campos existen (l. 65-66) |
| Separar generador y revisor con condición de terminación explícita (límite de rondas) | Microsoft AutoGen reflection — [research-orchestrator-responsibilities.md](../docs/research-orchestrator-responsibilities.md) l. 33 | Ilustra separación de ejecución y verificación | Tratar esa separación como autoridad de seguridad automática (l. 33) |
| `high`: aprobación `local` con el digest de la solicitud, revalidada justo antes del efecto | [S12](../docs/definition/session-12-validation-convergence.md) «Perfil de aprobación humana», l. 60 | El verifier prepara, la persona autoriza | Perfil `signed` obligatorio (l. 61): queda en el backlog |
| `done` que vuelve a revisión al reinvocar; `blocked` detiene | BMAD `build-auto` estados — [research-superpowers-bmad.md](../docs/research-superpowers-bmad.md) l. 95-97 | Inspira que `fail` consume ronda y devuelve a `build` | Sus estados propios: T800R usa los de S04 l. 91 |

### 4.5 `/feature-integrate`

**Propósito.** Preparar la candidata completa, verificarla integrada sobre la
base exacta de `main` y dejar listo el gate 3; el merge lo ejecuta la persona
(workflow §4.5).

**Cuándo invocarla.** Cuando todas las tareas están `pass` (o `concerns`
aceptados) y cada veredicto tiene `actor_id` elegible. **Cuándo no.** Con tareas
`fail` o sin veredicto; con árbol distinto del SHA de la evidencia; para
desplegar a un entorno (fuera del v0; será `high`).

**Precondiciones mecánicas.** Todos los `.verdict.md` presentes y `pass` o
`concerns` aceptados; `actor_id` de cada veredicto ausente de
`participations.md` como worker u owner de esa tarea; árbol de la rama igual al
SHA de la evidencia; rama actualizada sobre `main`.

**Produce.** En la misma rama, antes de verificar: `spec.md` → `implemented`,
consolidación en `specs/`, `evidence/README.md`. Validaciones globales
(dependencias fijadas; tipos, lint y build disponibles; arranque local;
comprobación reproducible del comportamiento incorporado) registradas con
`<sha-candidato>` y `<sha-main-base>`; si el repositorio aún no tiene suite, se
registra la ausencia y se aporta una **aceptación focalizada** (workflow §4.5).
Comando de merge preparado.

**Después del merge** (lo ejecuta la persona): la persona registra el SHA de
integración en `control:approvals/<id>.md`; `features/<id>/` queda como
historial; sólo entonces se proponen notas de conocimiento (con fuente y
verificación) y una skill si una instrucción se repitió tres veces (workflow
§4.5).

**Qué no hace.** No hace merge ni modifica nada después de él. No aprueba
`concerns` pendientes. No convierte «no ejecutado» en «aprobado». Si `main`
avanzó, vuelve a actualizar, verificar y pedir nueva aprobación.

| Práctica | Referencia | Por qué se adoptó | Qué se descartó de esa referencia y por qué |
| --- | --- | --- | --- |
| Archivar los deltas del cambio en las specs vigentes conservando la historia; distinguir propuesto, aprobado, implementado y desplegado | OpenSpec — [research-evolutionary-specs.md](../docs/research-evolutionary-specs.md) l. 26-27 y 105-106 | `specs/` refleja lo integrado; `spec.md` pasa a `implemented` sólo en la candidata | Archivar como equivalente a desplegar (l. 50); el deploy real queda fuera del v0 |
| Revisión global al cerrar el plan, además de la revisión por tarea | Superpowers `subagent-driven-development` — [research-superpowers-bmad.md](../docs/research-superpowers-bmad.md) l. 36 | Las validaciones globales detectan lo que ninguna tarea vio | Ledger propio por plan (l. 38): la evidencia vive en `evidence/` y, después, en el ledger de T800R |
| Reunir informes y dictamen antes de entregar | Addy Osmani `/ship` — [research-sdlc-references.md](../docs/research-sdlc-references.md) l. 37-38 | `evidence/README.md` consolida los veredictos | Plan de recuperación de despliegue (l. 38): sin deploy en el v0 |
| Controles deterministas más gates humanos por riesgo; rollback y evidencia | Anthropic playbook, Deploy — [research-ai-native-sdlc-playbook.md](../docs/research-ai-native-sdlc-playbook.md) l. 35; [S04](../docs/definition/session-04-operating-cycle.md) l. 86-87 | La aceptación humana final precede a `deploy` y no autoriza efectos por sí sola | Recorrer mantenimiento y despliegue por una métrica (l. 76-78) |
| Curar conocimiento sólo con fuente y verificación; utilidad decidida por dos o más criterios | Knowledge Curator — [MULTI_AGENT_HARNESS_ARCHITECTURE.md](../ideas/MULTI_AGENT_HARNESS_ARCHITECTURE.md) §12 l. 520-548 | Evita notas sin respaldo o derivables del código | OKF automático desde el resumen de cierre (arquitectura l. 511); memoria semántica como verdad ([propuesta-harness-multiagente.md](../ideas/propuesta-harness-multiagente.md) l. 334) |
| Instrucción repetida tres veces → proponer skill (cambio `high`) | [propuesta-harness-multiagente.md](../ideas/propuesta-harness-multiagente.md) l. 323 | Antes de eso es sobreingeniería | Publicación autónoma de la skill: la activación exige aprobación `high` (workflow §5) |
| Sin push a `main` ni merge sin aprobación de la persona | Redes de seguridad — [S12](../docs/definition/session-12-validation-convergence.md) «Perfil MVP mínimo», l. 64; E5 l. 68 | Git como colchón | — |

Sin referencia externa: la **candidata completa** (documentación del cierre antes
de verificar) y la **integración condicional del par** (`sha-candidato`,
`sha-main-base`) con aprobaciones en la rama huérfana `control` provienen de las
rondas 2 y 3 de Astra (workflow §11), no de las fuentes de investigación.

### 4.6 `/session-handoff`

**Propósito.** Cerrar una sesión dejando trabajo en commit y un `handoff.md` que
enlaza artefactos, para que otra sesión u otro proveedor continúe sin leer el
chat (workflow §4.6).

**Cuándo invocarla.** Al cerrar una sesión con trabajo pendiente; al transferir
ownership; antes de agotar el presupuesto. **Cuándo no.** Cuando no hay nada que
entregar o cuando el trabajo aún no está en la rama de la tarea.

**Precondiciones mecánicas.** Rama `feat/<id>/<task>` activa; tras el commit
`wip:`, árbol limpio; `tasks.md` y `participations.md` legibles para tomar sus
SHA; la tarea tiene owner en `tasks.md`.

**Produce.** Commit `wip:` con todo lo pendiente (staged, unstaged y archivos
nuevos pertinentes); `handoff.md` con cuatro bloques: **Resultado**,
**Validación** (o «no ejecutada: motivo»), **Pendiente**, **Contexto**; vincula
proyecto, tarea, SHA base, SHA del último commit y SHA de `tasks.md` y
`participations.md`.

**Qué no hace.** No transfiere ownership (lo registra el orchestrator en
`participations.md`). No duplica artefactos. No escribe en un directorio
temporal. No cambia el estado de la tarea. No entrega trabajo sin commit.

| Práctica | Referencia | Por qué se adoptó | Qué se descartó de esa referencia y por qué |
| --- | --- | --- | --- |
| Cuatro bloques: Resultado, Validación (o «no ejecutada: motivo»), Pendiente, Contexto | [propuesta-harness-multiagente.md](../ideas/propuesta-harness-multiagente.md) l. 184-189 | Formato mínimo que cabe en el presupuesto de un handoff ([MULTI_AGENT_HARNESS_ARCHITECTURE.md](../ideas/MULTI_AGENT_HARNESS_ARCHITECTURE.md) l. 283) | Plantilla más larga (l. 222-234): los campos extra se enlazan, no se copian |
| Enlazar artefactos en vez de duplicarlos | Pocock `handoff` — [research-sdlc-references.md](../docs/research-sdlc-references.md) l. 93-94 | Un handoff no traslada el «pensamiento» completo ([MULTI_AGENT_HARNESS_ARCHITECTURE.md](../ideas/MULTI_AGENT_HARNESS_ARCHITECTURE.md) l. 342) | Guardar el documento en el directorio temporal del sistema (l. 94, 105-106): único soporte entre máquinas y proveedores |
| Campos verificables; si no se hizo validación se declara con motivo; los handoffs caducan al cambiar Git o la tarea | Protocolo agent-to-agent — [MULTI_AGENT_HARNESS_ARCHITECTURE.md](../ideas/MULTI_AGENT_HARNESS_ARCHITECTURE.md) §9 l. 385-441 | La caducidad justifica la aceptación condicional del receptor | `.agent/handoffs/` efímero (l. 387) y YAML completo: en bootstrap, Markdown en `features/<id>/` con SHA |
| Cierre de sesión con commit verificable, estado real y evidencia, incluidas verificaciones no ejecutadas | Cierre de sesión — [MULTI_AGENT_HARNESS_ARCHITECTURE.md](../ideas/MULTI_AGENT_HARNESS_ARCHITECTURE.md) §11 l. 503-512; [propuesta-harness-multiagente.md](../ideas/propuesta-harness-multiagente.md) l. 242 | Endurecido en v3: sin commit no hay handoff, así los SHA identifican el entregable | «Declarar cambios sin commit» como alternativa aceptable (l. 242): un hash parcial puede no cambiar aunque cambie el entregable |
| Informes en archivos, no en chat | Superpowers `subagent-driven-development` — [research-superpowers-bmad.md](../docs/research-superpowers-bmad.md) l. 35-38 | Persistencia según ADR-002 | Espacio de trabajo excluido de Git que el cierre puede borrar (l. 42-45) |

### 4.7 `/session-resume`

**Propósito.** Retomar una tarea con aceptación condicional: comprobar que el
estado real coincide con el handoff antes de escribir nada (workflow §4.6).

**Cuándo invocarla.** Al abrir una sesión sobre una feature con `handoff.md`; al
recibir una transferencia de owner; al reanudar tras interrupción. **Cuándo no.**
Sin handoff (se empieza por la skill de la etapa) o para verificar.

**Precondiciones mecánicas.** Existe `handoff.md`; el árbol está limpio y en el
SHA declarado; el owner en `tasks.md` y el último evento en `participations.md`
coinciden con lo declarado; los SHA de `tasks.md` y `participations.md` coinciden.
Si algo difiere, rechaza el handoff y lo anota.

**Produce.** Nada hasta validar. Tras validar: la aceptación (o el rechazo con
motivo) anotada al final de `handoff.md`, y el orchestrator la registra como
evento en `participations.md`; si cambia el owner, registra la transferencia
en `participations.md` **antes** de que el receptor escriba. Cualquier cambio
posterior al handoff exige reconciliar antes de continuar.

**Qué no hace.** No toma ownership silenciosamente. No repara un handoff
inconsistente por su cuenta. No lee el chat anterior: sólo el handoff y sus
enlaces. No ejecuta tareas: sólo deja la sesión en `ready`.

| Práctica | Referencia | Por qué se adoptó | Qué se descartó de esa referencia y por qué |
| --- | --- | --- | --- |
| El receptor valida árbol y tracker antes de continuar y puede rechazar el handoff si no coinciden con la evidencia o falta owner; rechazar no es un fallo | Flujo de handoff — [MULTI_AGENT_HARNESS_ARCHITECTURE.md](../ideas/MULTI_AGENT_HARNESS_ARCHITECTURE.md) §8.2 l. 364 y §9 l. 441; [propuesta-harness-multiagente.md](../ideas/propuesta-harness-multiagente.md) l. 241 | Evita que la ambigüedad se propague; base de la aceptación condicional | Reclamar ownership en Beads antes de validar (l. 358): en bootstrap se valida primero y el orchestrator registra después |
| Al reanudar, reconciliar revisión real, cambios, estado, evidencia, owner y checkpoint; nunca toma silenciosa; la duda no autoriza escritura | [S04](../docs/definition/session-04-operating-cycle.md) l. 108-109 y 115 | Es el acuerdo de recuperación aceptado | Umbral temporal de abandono (l. 109): el fin de una conversación no implica abandono |
| Detectar artefactos y anomalías al continuar | nWave `nw-continue` — [research-sdlc-references.md](../docs/research-sdlc-references.md) l. 61 | Recuperación por artefactos, no por memoria conversacional | Marcadores de sesión como prueba de exclusión mutua (l. 62-64) |
| Reanudar al reinvocar según el estado persistido | Osmani `/build auto` (l. 36) y BMAD `build-auto` (l. 96) — [research-sdlc-references.md](../docs/research-sdlc-references.md), [research-superpowers-bmad.md](../docs/research-superpowers-bmad.md) | El estado vive en `tasks.md`, no en la sesión | Reanudar sin comprobar el árbol: aquí la comprobación es obligatoria |
| La asignación expresa una reserva, no una operación atómica | Pocock `wayfinder` — [research-sdlc-references.md](../docs/research-sdlc-references.md) l. 94-97 | Por eso la transferencia se registra antes de escribir | El mapa de decisiones y la frontera de tickets que `wayfinder` mantiene aparte (l. 94-95): aquí el estado está en `tasks.md` y el handoff sólo lo enlaza |
| Otro proveedor debe reconstruir estado, próxima acción y bloqueos sólo desde lo persistido | Experimento E2 — [S12](../docs/definition/session-12-validation-convergence.md) l. 68 | Es lo que mide la skill | — |

### 4.8 `/spike`

**Propósito.** Responder una pregunta bloqueante con un experimento en rama
desechable y registrar la respuesta con evidencia; el código no se conserva como
solución (workflow §3).

**Cuándo invocarla.** Cuando una incertidumbre impide decidir en `plan` o
`design`; durante la construcción, si el incremento autorizado ya lo contempla.
**Cuándo no.** Para construir producto («prototipo general»), para evitar una
spec, o sin pregunta concreta y alcance acotado.

**Precondiciones mecánicas.** Pregunta y alcance escritos en `spikes/<id>.md`;
durante la definición, aprobación explícita separada de la persona; rama
desechable creada fuera de `main`; sin efectos externos ni instalación de
dependencias fuera del worktree.

**Produce.** `spikes/<id>.md` con pregunta, qué se probó, respuesta y evidencia
(comandos, SHA de la rama desechable, entorno). La rama se descarta.

**Qué no hace.** No autoriza conservar código. No decide por la persona: entrega
evidencia para decidir. No sustituye a `/feature-spec` ni a `/feature-plan`. Un
efecto `high` dentro del spike requiere su propia aprobación `local`; nunca
ejecuta `prohibited`.

| Práctica | Referencia | Por qué se adoptó | Qué se descartó de esa referencia y por qué |
| --- | --- | --- | --- |
| Spike = pregunta → prueba exploratoria → respuesta; no autoriza conservar el código como solución | Superpowers `brainstorming` — [research-superpowers-bmad.md](../docs/research-superpowers-bmad.md) l. 21-25 | Separa aprender de construir | Ampliar el proceso automáticamente al descubrir complejidad (l. 25): aquí se reclasifica el tamaño y vuelve a `plan` |
| Aprobación explícita separada, pregunta bloqueante y alcance acotado durante la definición; cada búsqueda sirve a una incertidumbre que afecta una decisión | [S12](../docs/definition/session-12-validation-convergence.md) l. 56 y 58; [S04](../docs/definition/session-04-operating-cycle.md) l. 131-134; [research-fuentes-sesion-3.md](../docs/research-fuentes-sesion-3.md) l. 68-69 | Los prototipos generales fueron rechazados; evita spikes sin pregunta | — |
| Distinguir explorar de elegir; separar contexto que orienta de evidencia que sustenta | BMAD `research-a-decision` — [research-superpowers-bmad.md](../docs/research-superpowers-bmad.md) l. 65-74 | El spike entrega evidencia, no una decisión | Exclusión absoluta de información interna (l. 72-74): los hechos del repositorio son evidencia |
| Rama desechable sin efectos externos ni dependencias fuera del worktree; `prohibited` real para efectos irreversibles | Workflow §3 (l. 84-87); [S12](../docs/definition/session-12-validation-convergence.md) l. 64 | Un worktree no autoriza nada fuera del repositorio | Worktree como contención ([MULTI_AGENT_HARNESS_ARCHITECTURE.md](../ideas/MULTI_AGENT_HARNESS_ARCHITECTURE.md) l. 808): sigue siendo ejecución en host supervisada |

## 5. Límites conocidos del bootstrap

Resumen de workflow §7 y §10. El día 1 existen Git, los tres proveedores, las
skills en Markdown y la persona; no existen el adapter de Beads, el ledger ni el
mecanismo `local` de T800R.

- **Supervisión humana provisional.** Nada identifica qué actor escribió un
  archivo; un agente con shell puede escribir un veredicto o `participations.md`.
  La separación worker/verifier la aplica la persona abriendo sesiones distintas;
  la skill sólo comprueba `participations.md`. El `actor_id` verificable en el
  ledger es la tarea (1) del roadmap.
- **Aprobaciones en la rama `control`.** Sólo la persona escribe
  `control:approvals/<id>.md`, fuera de una sesión de agente y con digests. El
  perfil `local` no impide criptográficamente la suplantación desde el mismo
  shell; `signed` está en el backlog. La migración al mecanismo `local` de T800R
  es la tarea (2), conservando las aprobaciones históricas.
- **Ejecución en host supervisada.** Los worktrees no aíslan: tests, scripts,
  hooks y dependencias corren con los permisos de la persona. Controles: sólo
  comandos declarados, `protected_paths`, revisión del verifier antes de ejecutar
  sobre ellos modificados, sin secretos. Riesgo residual aceptado; el runner OCI
  está en el backlog.
- **Markdown como autoridad provisional.** `tasks.md`, `participations.md` y
  `evidence/` con un escritor cada uno hasta que existan tracker y ledger;
  `tasks.md` migra a Beads en la tarea (3), que enlaza aprobaciones sin duplicar
  autoridad.
- Cada límite se revisa al cerrar cada feature. Tras el piloto: medir el coste
  de registros y gates manuales antes de automatizar, y probar con una
  transferencia real que otro proveedor reconstruye ownership, participaciones y
  evidencia (workflow §11).

## 6. Cómo se prueba una skill

Desde el v0, checklist manual por skill con cuatro casos (workflow §5; origen en
[research-agent-skills.md](../docs/research-agent-skills.md) l. 46-50 y 76-78):

| Caso | Qué se comprueba | Ejemplo |
| --- | --- | --- |
| Activación correcta | La skill se activa ante la petición que le corresponde y produce su salida | «Prepara la tarea T3» activa `/feature-build T3` y escribe `evidence/T3.md` |
| No activación | No se activa ante peticiones vecinas | Una pregunta sobre el plan no lanza `/feature-build`; un `acotado` no lanza `/feature-spec` |
| Incumplimiento de una restricción | La skill detecta y bloquea la violación, dentro de los límites de §5 (comprueba archivos y Git, no identifica actores) | Tocar un archivo fuera de los permitidos bloquea la tarea; un `actor_id` presente en `participations.md` no puede verificar; sin línea `build … authorized` no arranca |
| Comparación con la revisión anterior | El resultado no empeora respecto de la versión previa de la skill, en contexto limpio | Misma tarea, misma base: evidencia equivalente o mejor, sin pasos improductivos |

Toda modificación de una skill es `high` y pasa por estos cuatro casos antes de
proyectarse a los proveedores.

## 7. Glosario mínimo

| Término | Significado en este flujo |
| --- | --- |
| `actor_id` | Identidad declarada de quien ejecuta un rol en una tarea (worker, owner, verifier). La independencia se compara por `actor_id`, no por ejecución o proceso (S12 l. 63). |
| orchestrator | La persona o la sesión que coordina: reconcilia estado, asigna ownership, aplica gates (rol según S04 l. 110). Único escritor de `tasks.md` y `participations.md` tras su inicialización (workflow §2). |
| worker | Actor que ejecuta una tarea dentro de su brief; escribe la rama y `evidence/<task>.md`; nunca veredictos ni aprobaciones. |
| verifier | Actor con `actor_id` elegible que reejecuta las validaciones y escribe `evidence/<task>.verdict.md`. |
| incremento | Unidad que recorre `plan → design → build → verify → deploy`; aquí, una `feature` o un `acotado`. `build` se autoriza por incremento, no por tarea (S04 l. 81, 275). |
| digest | Hash del contenido de `spec.md` o `plan.md` en el momento de aprobar; las líneas de `control:approvals/<id>.md` lo citan para que la aprobación identifique exactamente lo aprobado. Método fijado por las skills: `git hash-object <archivo>`; el digest no se escribe dentro del archivo. |
| candidata | Rama con todas las tareas verificadas y los cambios documentales del cierre, identificada por `<sha-candidato>`. |
| base | SHA de `main` sobre el que se verificó la candidata (`<sha-main-base>`); se aprueba el par y se integra sólo si ambos siguen iguales. |
| `high` | Nivel de riesgo que exige aprobación `local` de la persona en el punto del efecto (disparadores de S09 más `protected_paths`). |
| `prohibited` | Nivel de riesgo que nunca se ejecuta: efectos irreversibles fuera del repositorio (S12 l. 64; E5). |
| readiness | Resultado `PASS` / `CONCERNS` / `FAIL` de «¿puede implementarse sin inventar decisiones no registradas?», con condiciones de S04 l. 83; lo prepara el planner, lo autoriza la persona. |
| intent gap | Laguna de intención: dos lecturas de la spec producen resultados observables distintos y nada registrado permite elegir. La tarea queda `blocked`, el intento se guarda como parche y se consulta a la persona. |
