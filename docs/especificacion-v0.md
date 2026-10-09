# Especificación v0 (T800R + piloto IDP)

- Estado: **aprobada** por la persona el 2026-10-09, tras verificación en pareja
  (Fable y Astra `gpt-6-astra`, ambos «SÍ con cambios», cambios aplicados).
  Criterio de salida de [S12](definition/session-12-validation-convergence.md)
  («Criterio de salida» y «Evidencia y resultados») y criterio de cierre de
  [product-definition.md](product-definition.md) («haya pruebas de aceptación
  para T800R y el repositorio piloto»).
- Creado: 2026-10-06, a partir de las decisiones ya `accepted` de S12 (perfil MVP
  mínimo, piloto IDP, E1-E5 y su regla de decisión, aprobación `local`, bootstrap,
  verifier por `actor_id`, flujo v4.1, roadmap v0), del
  [roadmap v0](roadmap-v0.md), del [backlog](backlog-ideas.md) («Qué sí queda en
  el MVP v0»), de [workflow-construccion.md](workflow-construccion.md) v4.1 (§7,
  §8), de [S11](definition/session-11-mvp-architecture.md) (perfiles de
  lanzamiento, Beads, catálogo de schemas, pruebas contract-first) y de
  [ADR-010](adr/ADR-010-arquitectura-tecnica-del-mvp.md).
- Qué es: el conjunto verificable que la implementación debe satisfacer antes de
  cerrar el v0: pruebas de aceptación (`AT`), matriz de conformidad, corpus de
  escenarios (`CS`), reglas de decisión y trazabilidad. **No inventa requisitos**:
  cada `AT` cita la decisión que la origina y la tarea del roadmap que la ejecuta.
- Qué no es: evidencia ejecutada ni certificación. Conforme a S12 l. 56 y 74-79,
  ningún adapter ni tupla deja `target/unverified` por este documento; la
  conformidad se produce en construcción con versiones, entorno y revisión
  registrados y es gate de release.
- Alcance: el perfil MVP mínimo (S12 l. 64). Nada del backlog entra como requisito
  (runner OCI, CAS, perfil `signed`, leases/CAS, DSL `policy/v1` completa, tres
  vías, otras tuplas). Donde el canon exige algo que el perfil difiere, la `AT`
  verifica la versión mínima y §6 registra la disposición.

## 0. Convenciones

| Marca | Significado |
| --- | --- |
| `AT-nn` | Prueba de aceptación. Numeración por bloques de diez según capacidad del MVP. |
| `CS-nn` | Escenario del corpus (§3). |
| `D` | **Verificable sobre el procedimiento del bootstrap**: su oráculo es Git, `control`, `features/<id>/` o la salida de una skill, y se observa al ejecutar el flujo v4.1 sin producto, por primera vez en I1 (CS-22). Hasta entonces es `not_run`: el canon y las skills se pueden leer, pero leerlos no es evidencia. |
| `CF` | **Contract-first sobre la implementación, sin proveedor live**: schemas y fixtures, pruebas puras y basadas en propiedades, integración local de SQLite, Git, worktrees y CLI en directorios temporales (S11 l. 124). Corre en CI. |
| `EXEC` | **Sólo sobre la implementación con proveedores, Beads o el IDP reales**: alimenta la conformidad de §2 y se ejecuta aparte con versiones y entorno registrados (S11 l. 124). No se sustituye por fixtures. |
| Oráculo | Qué se comprueba y **dónde**: ledger (SQLite), Git (`git log`, `git diff`, `git show`), tracker (Beads o `tasks.md`/`participations.md` en bootstrap), salida estructurada de la CLI (`operation-result`/diagnóstico) o informe (`spikes/`, `features/<id>/metrics.md`). |
| Repo | `T800R` (dogfooding), `IDP` (piloto) o `ambos`. |
| «no ejecutado» | Nunca equivale a aprobado (workflow §4.5). Toda `AT` sin ejecutar se registra con motivo. |
| `ineligible` | Estado de una celda de §2 cuyo proveedor o tracker no cumple la condición previa de S11 en la sonda (0.5, 0.6): es `unverified` **con motivo registrado por la persona** y no se construye encima. No es un estado de S08 (que sólo tiene `target`, `candidate`, `compatible` y la verificación `verified`/`unverified`/`stale`): es la etiqueta operativa de ese `unverified` decidido. |

La única evidencia preconstrucción es la de este documento: trazabilidad entre
contratos, riesgos, escenarios, oráculos y criterios, cobertura de la matriz y
ausencia de ambigüedades (S12 l. 74-76). Ninguna `AT` se ejecuta antes de
autorizar. Después, las `D` se observan al correr el bootstrap, las `CF` forman
el gate de CI y las `EXEC` el de conformidad y release (S12 «Especificación
ejecutable como gate»). Una misma `AT` puede tener forma `CF` (fixture o
repositorio temporal) y forma `EXEC` (repositorio real); se anota `CF+EXEC`.

## 1. Pruebas de aceptación

### 1.0 Contratos y base técnica

| AT | Precondición | Estímulo | Oráculo observable | Fuente canónica | Roadmap | Clase | Repo |
| --- | --- | --- | --- | --- | --- | --- | --- |
| AT-01 | Schemas v1 publicados: `work-item`, `evidence-event`, `handoff`, `approval`, `policy`, `proposal`, `config` (F1); `context-packet` (F4); `lock`, `adoption-snapshot`, `managed-unit`, `portable-skill`, `knowledge-bundle`, `knowledge-entry` (F5) | Validar el corpus de fixtures por schema | Por schema, ≥ 1 fixture válido y ≥ 1 inválido por restricción; una propiedad desconocida en el núcleo se rechaza; una extensión `extensions.<ns>` registrada se admite y una requerida no comprendida vuelve inelegible la operación; cada fixture declara schema y revisión exacta. Salida: diagnóstico determinista | S11 l. 69, 72, 115 (JSON Schema 2020-12, núcleo cerrado, catálogo) | 1.2, 4.4, 5.1-5.2 | `CF` | T800R |
| AT-02 | `policy.yaml` y `t800r.yaml` de ejemplo | Parsear YAML con alias, merge key, tag personalizado o claves duplicadas; parsear el equivalente válido | Los cuatro casos inválidos se rechazan con diagnóstico; el válido produce el mismo árbol JSON y el mismo resultado de schema que su versión JSON | S11 l. 78 (YAML 1.2 restringido, modelo común) | 1.2 | `CF` | T800R |
| AT-03 | Dos solicitudes canónicas con igual contenido y distinto whitespace y orden de claves | Calcular el digest de cada una; calcular el de una tercera con un campo cambiado | Digests 1 y 2 iguales; 3 distinto; el digest no incluye referencias Git a los artefactos aprobados (se transportan aparte) | S11 l. 78 (canonicalización JSON); roadmap 1.2 | 1.2 | `CF` | T800R |
| AT-04 | Monorepo con `contracts`, `adapter-api`, `runtime`, `cli` y adapters oficiales | Introducir un import inverso (`contracts` → `runtime`), uno lateral entre adapters y un ciclo; ejecutar la comprobación de fronteras y `pnpm test` | Los tres imports fallan la comprobación (ESLint + dependency-cruiser); sin ellos, `pnpm test` y fronteras en verde | S11 l. 156 (grafo unidireccional); ADR-010 punto 2 | 0.7 | `CF` | T800R |
| AT-05 | Node 24 con patch fijado en el monorepo; línea base del IDP creada | Ejecutar la CLI con otra versión mayor de Node; leer la versión de Node que soporta `@backstage/create-app` | La CLI diagnostica el runtime no soportado y no abre el ledger; en el IDP la versión soportada queda registrada en el commit de línea base si difiere de Node 24 | S11 l. 65 (Node 24 LTS, verificar runtime); roadmap 0.2 | 0.2, 0.7 | `CF`+`D` | ambos |

### 1.1 Adopción (`init`, `apply`, `doctor`, `sync`, `update`, proyección de skills)

| AT | Precondición | Estímulo | Oráculo observable | Fuente canónica | Roadmap | Clase | Repo |
| --- | --- | --- | --- | --- | --- | --- | --- |
| AT-10 | Repositorio sin adopción: checkout limpio de la línea base del IDP con estado de usuario de T800R aislado, o T800R con su historial | `t800r init` | `git status --porcelain` vacío; ningún archivo del repo ni de proveedores modificado; una `proposal/v1` válida persistida (hechos descubiertos, decisiones pendientes, unidades con clase de propiedad, conflictos, efectos previstos); ledger: la propuesta existe y no habilita ningún efecto (AT-73) | S10 l. 65, 92 y escenario 1; S11 l. 100; S12 l. 62 | 1.4, 5.1, 5.3 | `CF`+`EXEC` | ambos |
| AT-11 | AT-10 superada | `t800r apply <proposal-id>` ejecutado por la persona fuera de una sesión de agente | Cada unidad propuesta existe en su destino con el digest previsto (`t800r.yaml`, `t800r.lock.json`, `t800r/policy.yaml`, skills proyectadas, hook `pre-push`); nada fuera de lo propuesto cambió (`git diff --name-only` ⊆ unidades propuestas); `doctor` `ready` para las operaciones requeridas; ledger: eventos de aplicación correlacionados con la propuesta | S10 l. 65, 92 y escenario 2; S11 l. 100, 112 | 1.4, 5.1 | `CF`+`EXEC` | ambos |
| AT-12 | Adopción aplicada | `t800r doctor` sobre una adopción íntegra y sobre otra con una unidad `generated` alterada | No modifica archivos ni ledger; cada hallazgo trae código estable, capa, sujeto, esperado/observado y efecto `advisory`, `degrades` o `blocks`; el resultado indica por operación `ready`, `degraded` o `blocked` con la dependencia que lo justifica; la unidad alterada aparece como hallazgo que degrada o bloquea sólo las operaciones dependientes | S10 l. 74 y escenarios 3, 10 | 5.1 | `CF`+`EXEC` | ambos |
| AT-13 | Adopción aplicada sin drift | `t800r sync`; `t800r update`; repetir `sync` | Ninguno modifica el árbol ni el snapshot; cada uno persiste una propuesta (vacía o con diferencias); `sync` repetido produce el mismo resultado observable; `update` propone revisiones explícitas (versión exacta de cada componente, nunca un tag mutable como `latest`) y no aplica nada implícitamente. La resolución por manifiestos curados de la meta-distribución (S11 l. 176) está en el backlog y no se exige | S10 l. 80 y escenario 6; S11 l. 130 | 5.1 | `CF`+`EXEC` | ambos |
| AT-14 | Adopción aplicada; una unidad `generated` o `managed` editada a mano | `t800r sync` y `apply` de su propuesta | La unidad se preserva o la operación se bloquea para esa unidad con conflicto identificado; nunca se sobrescribe; las demás unidades se aplican; `doctor` lo refleja | S10 l. 71 y escenario 5 (versión simple: conflicto bloquea; la combinación de tres vías está en el backlog) | 5.1 | `CF`+`EXEC` | ambos |
| AT-15 | Skills proyectadas a `.claude/skills/`, `.opencode/` y configuración de Codex en ambos repos (0.4 manual; 5.1 por propuesta) | Activar `/feature-spec` y `/spike` en cada proveedor desde el repo | Cada proveedor activa la skill y resuelve las rutas escritas desde la raíz (`docs/workflow-construccion.md`, `skills/README.md`) y los `references/` relativos; en el piloto, `skills/README.md` comienza con `Proyectado desde T800R @ <sha>` y el `policy.yaml` provisional existe; en 0.4 la copia registra el SHA de origen | Workflow §5 (ubicación neutral, rutas desde la raíz, paquete de proyección); S12 l. 68 | 0.4, 5.1 | `D`+`EXEC` | ambos |
| AT-16 | Skills canónicas en `skills/` | Checklist de evals por skill: activación correcta, no activación, incumplimiento de una restricción (p. ej. tocar un archivo no permitido), comparación con la revisión anterior | Las cuatro filas registradas por skill y proveedor; un incumplimiento es detectado por la skill (se detiene y lo anota), no ignorado | Workflow §5 (evals por skill) | 0.4, 0.8 | `D`+`EXEC` | ambos |
| AT-17 | **E1**: checkout limpio de la línea base del IDP con estado de usuario de T800R aislado y ausencia comprobada de adopción previa; T800R sobre su historial | `init` → `apply` → `doctor` en cada repo, cronometrando el trabajo humano | ≤ 30 min de trabajo humano por repo; registro de intervenciones humanas durante el recorrido (comando, archivo, motivo) sin ninguna edición de archivos `generated`/`managed` fuera de `apply`; al final, `doctor` en verde y sin drift, con digests iguales a los de `t800r.lock.json` (integridad final, no sustituye al registro); informe en S12 | S12 l. 70 (E1); roadmap 5.3 | 5.3 | `EXEC` | ambos |

### 1.2 Orchestrator, roles y gates

| AT | Precondición | Estímulo | Oráculo observable | Fuente canónica | Roadmap | Clase | Repo |
| --- | --- | --- | --- | --- | --- | --- | --- |
| AT-20 | `core` con transiciones de tarea | Pruebas puras y de propiedades sobre la máquina de estados | Admite `pending → ready → in_progress → completed`, `in_progress → waiting \| blocked`, retorno a `ready` (reasignación) o `in_progress` (mismo owner), `cancelled` desde cualquier no terminal; rechaza saltos sin razón, evidencia y responsable; `completed` sólo se reabre con causa registrada | S04 l. 91, 95-101 | 1.3 | `CF` | T800R |
| AT-21 | Tarea con owner activo | Asignar la misma tarea a otro actor; transferir ownership con razón y estado | La segunda asignación se rechaza (`assignment` exige ausencia de owner); la transferencia registra razón, estado real y trabajo preservado; nunca hay dos owners | S04 l. 108; S05 l. 59, 67 | 1.3, 4.1 | `CF` | T800R |
| AT-22 | Plan con dos tareas cuyos archivos permitidos se solapan (p. ej. `app-config.yaml`) y otras dos disjuntas | Pedir al orchestrator ejecutar en paralelo | Las disjuntas corren en paralelo (máximo dos workers); las solapadas se serializan o bloquean **antes** de integrar, con evento de colisión; no se pierde trabajo de ninguna | S04 l. 108; workflow §4.2; S12 l. 70 (E3) | 4.1, 4.6 | `CF`+`EXEC` | T800R, IDP |
| AT-23 | Gates del flujo v4.1 en bootstrap (`control`) y, desde F2, en el ledger | Invocar `/feature-build` sin `build <digest-plan> on spec <digest-spec> authorized` vigente; `/feature-integrate` sin `merge <sha-candidato> onto <sha-main-base> approved`; cambiar `plan.md` tras autorizar | Ninguna skill de build arranca; no se integra; el cambio de `plan.md` invalida la autorización (digest distinto) y exige una nueva línea; el progreso en `tasks.md` no altera el digest autorizado | S04 l. 81, 275; workflow §4.2-4.5, §7 | 0.1, 0.8, 2.2 | `D`+`CF` | ambos |
| AT-24 | Ejecución interrumpida con checkpoint; revisión real distinta de la persistida | `work resume` / `/session-resume` | El orchestrator compara revisión real, cambios presentes, estado, owner y checkpoint antes de escribir; con coincidencia continúa desde el checkpoint; ante divergencia reconcilia primero (sólo las referencias afectadas) y continúa si la resuelve; sólo una discrepancia que no puede resolverse deja `waiting` o `blocked` sin escribir | S04 l. 109; S06 l. 47 (reconciliación incremental) | 1.7, 4.1 | `CF`+`EXEC` | ambos |
| AT-25 | Salida de un agente `planner` (descomposición) válida y otra inválida | Someterlas al orchestrator | Ninguna crea tareas por sí misma: la válida pasa schema, invariantes y `apply` y entonces existen los work items; la inválida produce diagnóstico y ningún cambio en tracker ni ledger | S11 l. 103, 179 (`work plan` produce propuesta; crear tareas pasa por `apply`); ADR-010 punto 10 | 4.1 | `CF` | T800R |
| AT-26 | Feature con tareas `completed` y `merged`; defecto de spec detectado | Replanificar: `/feature-spec` → `/feature-plan` → nueva línea `build … authorized` | Las afectadas reciben `invalidated` en `participations.md` sin editar `evidence/`; las conservadas completadas se ratifican (entrada «Ratificación» en su `.verdict.md`, evento `ratified`); las no terminales se reconcilian (`reconciled`); integrar exige veredicto o ratificación con los digests vigentes | Workflow §4.2 (replanificación), §4.3 | 0.8 | `D` | ambos |
| AT-27 | Tarea `high` con veredicto del propio worker o sin veredicto | Intentar `completed` | Rechazado: `completed` exige validación enlazada y verificación independiente cuando el riesgo la exige | S04 l. 101; S09 l. 86 | 1.3 | `CF` | T800R |

### 1.3 Verifier independiente

| AT | Precondición | Estímulo | Oráculo observable | Fuente canónica | Roadmap | Clase | Repo |
| --- | --- | --- | --- | --- | --- | --- | --- |
| AT-30 | Ledger con participaciones de una tarea: worker A (dos ejecuciones, reanudación con otro `execution_id`), owner transferido a B, planner P | `verification_request` con candidatos A, B, P y C (sin participación); A desde otro proveedor | A y B no elegibles (por `actor_id`, aunque cambien `execution_id`, proveedor o contexto); P y C elegibles; para A y B el handoff queda `rejected` con `recipient_unavailable_or_ineligible`, explicación y próxima acción | S12 l. 63 (REV-105); S05 l. 72 | 1.3, 1.6 | `CF` | T800R |
| AT-31 | Tarea cuya participación no consta (línea del worker ausente) o es incoherente con `evidence/<task>.md` | Verificar con cualquier candidato | No elegible (`default deny`); en bootstrap la skill `/feature-verify` se detiene; en el ledger el `verification_request` se rechaza | S12 l. 63; workflow §2 (reglas), §4.4 | 1.6 | `D`+`CF` | ambos |
| AT-32 | `verification_request` aceptado por C | Antes del veredicto, C adquiere participación (acepta un handoff `work` de la tarea) | El veredicto se rechaza al revalidar; el ledger persiste candidato, participaciones comprobadas, fuentes consultadas y resultado de ambas evaluaciones | S12 l. 63 (evaluar al aceptar y revalidar antes del veredicto) | 1.6 | `CF` | T800R |
| AT-33 | **E3**: I4 bajo el orchestrator | Listar las tareas `high` integradas | En el 100 % el `actor_id` del verifier es distinto de todo worker u owner histórico de la tarea (consulta al ledger) | S12 l. 70 (E3) | 4.6 | `EXEC` | IDP |
| AT-34 | `participations.md` de ambos repos con el historial del bootstrap | Migración 1: importar y cotejar | Cotejo sin diferencias; `participations.md` se regenera como vista desde el ledger e idéntica; owners y workers antiguos excluyen al verifier igual que antes | Roadmap 1.6; workflow §10 | 1.6 | `EXEC` | ambos |
| AT-35 | Tarea con handoff `work` emitido; sesión que va a verificarla | `/session-resume` por el futuro verifier | La skill no acepta el handoff (lo volvería owner e inelegible); una verificación a medias no se transfiere: se descarta y se rehace con contexto nuevo | Workflow §4.4, §4.6 | 0.8 | `D` | ambos |

### 1.4 Handoffs y Beads

| AT | Precondición | Estímulo | Oráculo observable | Fuente canónica | Roadmap | Clase | Repo |
| --- | --- | --- | --- | --- | --- | --- | --- |
| AT-40 | Schema `handoff/v1` | Fixtures: envoltura mínima (`schema, id, type, status, created_at, sender, recipient, subject, base, authority, references, correlation, events`), payload por `type` (`assignment`, `ownership_transfer`, `verification_request`, `consultation`), `expires_at`/`due_at` condicionales | Válidos admitidos; falta de un campo de envoltura o de payload, `type` desconocido o propiedad extra en el núcleo → rechazo con diagnóstico | S05 l. 57, 65-68 | 1.2 | `CF` | T800R |
| AT-41 | Handoff persistido | Transiciones: `pending → accepted → completed`; `rejected`, `cancelled`, `expired`, `superseded`; aceptar un `pending` tras `expires_at`; cancelar un `accepted` de verificación sin cierre coordinado; `superseded` sobre un `accepted` | Sólo las transiciones del lifecycle; `expired` sólo afecta a `pending`; `due_at` no libera ownership; `superseded` sólo reemplaza `pending` y enlaza sucesor; cada evento conserva actor, fecha, transición, razón y evidencia | S05 l. 60-64 | 1.3, 3.2 | `CF` | T800R |
| AT-42 | **Sonda 0.6** (spike aprobado en `control:approvals/spikes.md`): Beads local | Intentar una transición condicionada a base, owner y estado vigentes; repetirla con base cambiada | Informe `spikes/0.6.md` con la respuesta observada (atómica o no), versión de Beads y comandos; decisión de la persona registrada antes de F3 | S11 l. 106 (probar, no inferir); roadmap 0.6 | 0.6 | `EXEC` | T800R |
| AT-43 | Adapter de Beads; handoff `assignment` u `ownership_transfer` `pending` | Aceptar con base, owner y alcance vigentes; aceptar con `feat/<id>` avanzado o owner cambiado | Caso 1: aceptación, `completed` y cambio de owner en una sola operación condicional (tracker y ledger coherentes); caso 2: ownership intacto, handoff `rejected` con `stale_or_conflicting_base` | S05 l. 59; S11 l. 106 | 3.1, 3.2 | `EXEC` | T800R |
| AT-44 | Beads sin operación condicional demostrable (si 0.6 resulta negativa) | Pedir una transferencia de escritura | El adapter declara la capacidad ausente; la operación queda `blocked`; diagnóstico y trabajo demostrablemente independiente continúan; no existe tracker interno de fallback | S11 l. 87, 106; S08 l. 75, 78 | 3.1 | `EXEC` | T800R |
| AT-45 | Aprobación `local` en el ledger | Enlazarla desde el work item | El work item referencia el id de la aprobación; Beads no almacena copia autoritativa (contenido, digest o estado) | S11 l. 106; roadmap 3.1 | 3.1 | `CF`+`EXEC` | T800R |
| AT-46 | Worker con cambios pendientes en `task/<id>/T<n>` | `/session-handoff` | Orden fijo `wip:` → `handoff:` (sólo rutas de registro) → evento `handoff_emitted` con `<sha-trabajo>`; `evidence/<task>.handoff.md` con Resultado, Validación, Pendiente, Contexto; un cambio ajeno en el índice detiene el handoff | Workflow §2.1 (pto. 5, 7), §4.6 | 0.8, 1.7 | `D` | ambos |
| AT-47 | Handoff emitido; receptor en otro proveedor | `/session-resume` en tres situaciones: (1) sin cambios; (2) tras un commit `coord:` ajeno en `feat/<id>` (otra tarea integrada) que conserva owner, último evento y `<sha-trabajo>` de esta tarea; (3) tras alterar una precondición de la tarea: owner cambiado en `tasks.md`, un evento posterior a `handoff_emitted`, o un commit encima de `<sha-trabajo>` fuera de rutas de registro | Casos 1 y 2: `git diff --name-only <sha-trabajo>..HEAD` ⊆ rutas de registro, owner igual al emisor, último evento de la tarea `handoff_emitted` sobre ese `<sha-trabajo>` → el orchestrator registra `handoff_accepted` (y `transferred` si cambia el owner) antes de que el receptor escriba; que `feat/<id>` haya avanzado por otras tareas no es motivo de rechazo. Caso 3: `handoff_rejected` con el motivo concreto | Workflow §2.1 (pto. 5), §4.6; S05 l. 63 | 1.7, 3.2 | `D`+`EXEC` | ambos |
| AT-48 | **E2**: agente completa 3+ tareas del IDP; sesión cerrada | Un agente de otro proveedor retoma (1.7 manual; 3.2 con Beads; 4.6 bajo el orchestrator) | Identifica estado, próxima acción y bloqueos desde lo persistido; continúa sin explicación humana; 0 tareas rehechas (cotejo de `tasks.md`/Beads antes y después) | S12 l. 70 (E2); S01 objetivo 2 | 1.7, 3.2, 4.6 | `EXEC` | IDP |
| AT-49 | Features en curso con `tasks.md` | Migración 3: `tasks.md` → Beads | Las features continúan sin rehacer tareas; `tasks.md` pasa a vista generada idéntica; aprobaciones enlazadas sin duplicar | Roadmap 3.3; workflow §10 | 3.3 | `EXEC` | ambos |

### 1.5 Context packets y conocimiento OKF

| AT | Precondición | Estímulo | Oráculo observable | Fuente canónica | Roadmap | Clase | Repo |
| --- | --- | --- | --- | --- | --- | --- | --- |
| AT-50 | Schema `context-packet` | Fixtures: núcleo (`schema, id, created_at, producer, consumer, subject, purpose, base, constraints, sources, manifest`), secciones `work, environment, knowledge, capabilities, evidence, coordination`, `manifest` con `required`/`relevant`/`optional` y `budget_profile` | Núcleo incompleto o sección fuera de la taxonomía → rechazo; válidos admitidos | S06 l. 44-45, 50 | 4.4 | `CF` | T800R |
| AT-51 | Brief de una tarea con ≤ 10 referencias (revisión, ámbito, papel) | Ensamblar y entregar el packet al worker | El worker recibe núcleo, `manifest` y sólo las secciones esenciales referenciadas por el brief; cada carga adicional registra sección, condición activada y revisión de la fuente; `constraints` sintetiza permisos sin concederlos | S06 l. 46, 88; workflow §4.3 (brief) | 4.4 | `CF`+`EXEC` | ambos |
| AT-52 | Packet cuyo material `required` excede el presupuesto; otro con faltantes sólo `relevant`/`optional` | Validar; sobre el `degraded`, intentar dos acciones: una que no depende del material faltante y otra que sí | El primero queda `invalid` y el agente se detiene antes de actuar; el segundo queda `degraded`: la acción independiente del faltante continúa y la que depende de él se detiene (`degraded` no autoriza por sí solo a continuar); nunca se omite silenciosamente núcleo, `base`, `constraints` ni `required` | S06 l. 50-52, 170 | 4.4 | `CF` | T800R |
| AT-53 | Fuente permitida que contiene una cadena señuelo marcada como secreto | Ensamblar un packet que la referencia | El señuelo no aparece en el packet persistido ni en eventos del ledger; si la política exige un control no disponible, el packet no se materializa | S09 l. 59; S11 l. 124 (secretos señuelo en la estrategia de pruebas) | 4.4 | `CF` | T800R |
| AT-54 | Bundle OKF con curator básico | Proponer una nota con `sources` y `review` verificado; otra sin `sources`; otra sin verificación | La primera se admite (`draft → stable` tras curación) y se consume en la sección `knowledge` de un packet; las otras dos se rechazan con diagnóstico | S07 l. 45, 48, 50, 53; roadmap 5.2 | 5.2 | `CF`+`EXEC` | T800R |
| AT-55 | Schemas `knowledge-bundle` y `knowledge-entry` | Fixtures: metadatos comunes (`type, title, sources, status, applicability, revision, review`, `curator` efectivo); tipos `concept`, `pattern`, `lesson`, `synthesis` con sus requisitos (`domain`; evidencia; ≥ 2 fuentes) | Válidos admitidos; `synthesis` con una sola fuente o `lesson` sin evidencia → rechazo | S07 l. 44, 48-49 | 5.2 | `CF` | T800R |
| AT-56 | Repo con conocimiento existente en `docs/` y repo sin bundles | `init` | Para el bundle nuevo propone `knowledge/` sin aplicarlo; el existente se propone registrar sin moverlo; `knowledge_id` depende del bundle y ruta lógica | S11 l. 109 | 5.1-5.2 | `CF` | ambos |

### 1.6 Adapters headless (Claude Code, Codex, OpenCode)

| AT | Precondición | Estímulo | Oráculo observable | Fuente canónica | Roadmap | Clase | Repo |
| --- | --- | --- | --- | --- | --- | --- | --- |
| AT-60 | **Sonda 0.5** (spike aprobado en `control:approvals/spikes.md`); proveedor instalado en versión exacta | Un turno por proveedor sobre su superficie S11 con configuración cerrada: Claude Code `--restricted -p --tools ""`; Codex app-server por stdio con `CODEX_HOME` efímero; OpenCode server en loopback con `--pure` y `deny`; una operación permitida y otra denegada; cancelación | `spikes/0.5.md` registra por proveedor: catálogo de tools vacío demostrado en preflight y primer evento; ausencia de MCP, hooks, plugins, skills, memoria y configuración heredada; cancelación con evento terminal (`SIGINT`, `turn/interrupt`, abort); versión exacta, entorno y tokens si se exponen; decisión de la persona sobre proveedores no elegibles antes de F4 | S11 l. 97, 189-191; ADR-010 punto 12; roadmap 0.5 | 0.5 | `EXEC` | T800R |
| AT-61 | Adapter construido; fixtures de streams sanitizados de 0.5 (replay) y proveedor live | Inyectar: evento desconocido, stream truncado, herramienta habilitada en la configuración efectiva, versión no compatible | En cada caso la evidencia del turno se invalida, la transición dependiente se bloquea y la tupla queda `unverified` con diagnóstico; nada se persiste como admitido | S11 l. 97; ADR-010 punto 12 | 4.2 | `CF`+`EXEC` | T800R |
| AT-62 | Adapter con `adapter-descriptor`; ejecución real | Ejecutar un turno y leer el snapshot | Cada ejecución produce un `capability-snapshot` correlacionado con el descriptor, con configuración, límites y entorno observados; la asignación se decide por el snapshot, no por el descriptor; las siete capacidades del baseline declaran realización (`native`/`emulated`/`absent`) y verificación (`verified`/`unverified`/`stale`) por separado | S08 l. 64, 66, 69; ADR-010 «Consecuencias» | 4.2 (véase §6: schemas a añadir) | `CF`+`EXEC` | T800R |
| AT-63 | Turno en curso | Cancelar (`SIGINT` → espera → escalada tras timeout; `turn/interrupt`; abort de sesión) | Evento terminal recibido; proceso y directorios dedicados reconciliados; ningún evento ni escritura admitidos después de la cancelación | S11 l. 97, 189-191 | 4.2 | `EXEC` | T800R |
| AT-64 | **E4**: adapters elegibles tras 0.5; I3 del IDP | Repetir una tarea de extremo a extremo rotando Claude Code, Codex y OpenCode como worker con el **mismo** `handoff/v1` | Cada proveedor elegible completa al menos una tarea (entrega, veredicto `pass`/`concerns`, `merged`) sin cambios en el repositorio entre rotaciones; cada proveedor resuelve las rutas desde la raíz de los `SKILL.md` | S12 l. 70 (E4); S01 objetivo 4; workflow §5 | 4.2, 4.6 | `EXEC` | IDP |
| AT-65 | Adapter en ejecución | Inspeccionar lo persistido durante y después del turno | Sólo eventos admitidos y sanitizados en el ledger; el stream bruto del proveedor no se persiste; el entorno del proceso del adapter se construye por allowlist y una variable señuelo del entorno padre no llega al proceso ni a los eventos | S11 l. 124 (secretos señuelo), 140, 193-196; la **certificación** de fuga señuelo por tupla sigue en el backlog: aquí sólo allowlist y no persistencia | 4.2 | `CF`+`EXEC` | T800R |
| AT-66 | Proveedor declarado no elegible en 0.5 | Intentar habilitarlo para trabajo real | La composición lo mantiene `target/unverified`; `work run` con restricción a ese proveedor no selecciona nada y lo diagnostica; E4 se documenta como parcial (§4) | Roadmap «Camino crítico y riesgos»; S11 l. 84 | 4.2 | `CF` | T800R |

### 1.7 Política, bootstrap y aprobación `local`

| AT | Precondición | Estímulo | Oráculo observable | Fuente canónica | Roadmap | Clase | Repo |
| --- | --- | --- | --- | --- | --- | --- | --- |
| AT-70 | Schema `policy` simple | Fixtures: `protected_paths`, niveles `routine`/`high`/`prohibited`, perfil de aprobación `local`; una regla con código o expresión; una clave desconocida | Válidos admitidos; código, expresiones y claves desconocidas rechazados | S12 l. 64 (`policy.yaml` simple); S11 l. 78 | 1.2, 2.1 | `CF` | T800R |
| AT-71 | Política con `protected_paths` y una acción `prohibited` | Evaluar: tocar una ruta protegida; acción `prohibited` con y sin `high approved`; condición desconocida | Ruta protegida → `high`; `prohibited` se evalúa **primero** y ninguna aprobación lo vuelve ejecutable; condición desconocida → `default deny` en el alcance afectado; la salida explica regla, hechos y decisión | S09 l. 86 (matriz), 83; S12 l. 64; workflow §4.1, §4.3 | 2.1 | `CF` | T800R |
| AT-72 | `policy.yaml` que intenta reclasificar un efecto irreversible fuera del repositorio (prohibición del canon) como `high` | Cargar y evaluar | La política no retira los mínimos del core: la acción sigue `prohibited` y el diagnóstico lo indica; una prohibición adicional declarada por la política sí puede cambiar mediante cambio de política `high` separado | S09 l. 83 («no retirar estos mínimos»); S12 l. 64; workflow §4.1 | 2.1 | `CF` | T800R |
| AT-73 | **Bootstrap**: adopción sin política aplicada | Pedir un efecto (p. ej. aplicar una unidad); `apply` de la primera propuesta desde una sesión de agente; `apply` desde fuera; segundo `apply` de bootstrap | Antes del bootstrap sólo inspección, propuesta y `doctor`: todo efecto se rechaza; la propuesta persistida no concede autoridad; el `apply` desde agente se rechaza y se registra; el `apply` humano registra al aprobador inicial y un evento `bootstrap` con origen; el segundo bootstrap se rechaza | S12 l. 62; roadmap criterio 5 y 1.4 | 1.4 | `CF` | T800R |
| AT-74 | Solicitud canónica `high` con digest `d` | `t800r approve <id>` desde el shell de la persona; el mismo comando con marcadores de sesión de agente gestionada por T800R | Caso 1: decisión persistente correlacionada con `d` con origen (usuario del sistema, identidad Git, sesión, marcadores); caso 2: rechazado y registrado en el ledger | S12 l. 60; roadmap 2.2 | 2.2 | `CF` | T800R |
| AT-75 | Aprobación válida para `d`, emitida con **un solo uso autorizado** y vigencia acotada | Ejecutar el efecto tras cambiar la solicitud (digest `d'`); ejecutarlo dos veces con la misma aprobación; ejecutarlo vencida | `d' ≠ d` → bloqueado; segundo uso → bloqueado (el número de usos autorizado se respeta y aquí se agota con el primero); vencida → bloqueado; en todos los casos evento en el ledger; el efecto sólo ocurre con revalidación inmediata satisfactoria | S09 l. 65 (aprobación persistente y acotada: vigencia, usos, revalidación), 83; S12 l. 60; workflow §4.4 | 2.2 | `CF` | T800R |
| AT-76 | Schema `approval/v1` y prueba de `core` | (a) Fixtures para los cuatro gates: spec, `build`, merge del par (candidata, base), `high`, con el digest como campo propio separado de las referencias Git; (b) prueba de runtime/core que recalcula el digest de la solicitud canónica y lo compara con el de la aprobación | (a) Los cuatro validan; una aprobación sin digest o con formato de digest inválido se rechaza por schema; (b) una aprobación cuyo digest no coincide con el recalculado (AT-03) se rechaza por `core`, no por schema: el schema sólo comprueba presencia y formato | Roadmap 1.2; S11 l. 69 (invariantes relacionales en `core`); workflow §4.1-4.5 | 1.2, 1.3 | `CF` | T800R |
| AT-77 | Rama `control` con aprobaciones históricas | Migración 2: importar al ledger | Cada línea tiene un evento importado trazable a su commit en `control`, conservando aprobación original, algoritmo de digest (`git hash-object`), contenido referenciado y procedencia, sin presumir equivalencia con el digest canónico; `control` queda de solo lectura; procedimiento escrito | Roadmap 2.4 (mejora 3 de Astra); workflow §10 | 2.4 | `EXEC` | ambos |
| AT-78 | Línea `high <digest> approved` en `control` (bootstrap) para una tarea con fase de efecto | Worker ejecuta el efecto releyendo `control` justo antes; se altera el efecto y se reintenta | Sin la línea, la tarea queda `waiting` tras `ready_for_effect`; con la línea, el efecto se ejecuta y la evidencia recibe la entrada «Efecto»; el efecto alterado tiene otro digest y exige nueva aprobación | Workflow §4.3 (efectos `high`), §4.4 | 0.8 | `D` | ambos |

### 1.8 Redes de seguridad: Git y `prohibited`

| AT | Precondición | Estímulo | Oráculo observable | Fuente canónica | Roadmap | Clase | Repo |
| --- | --- | --- | --- | --- | --- | --- | --- |
| AT-80 | Hook `pre-push` instalado; `main` como ruta protegida | `git push origin main` sin aprobación `local`; con aprobación válida; push a `feat/<id>` | Caso 1: push bloqueado y evento registrado; caso 2: permitido tras revalidar y evento registrado; caso 3: no interviene | S12 l. 64 (redes de seguridad); roadmap 2.3 | 2.3 | `CF`+`EXEC` | ambos |
| AT-81 | Política con acción `prohibited` | Solicitud simulada de esa acción, con y sin `high approved` | Rechazada por `policy` antes de cualquier efecto; nunca ejecutada; evento registrado | S09 l. 86; S12 l. 64; roadmap 2.3 | 2.3 | `CF` | T800R |
| AT-82 | **E5 completo**: adapter elegible, 2.3 superada | El agente pide, vía adapter, un push a `main` y una acción `prohibited` | Push bloqueado hasta aprobación `local`; `prohibited` rechazada por `policy` antes del efecto; ambos eventos en el ledger con la solicitud del agente | S12 l. 70 (E5); roadmap 4.5 | 4.5 | `EXEC` | IDP |
| AT-83 | Tarea asignada | Worker intenta escribir en `main` o en el checkout de coordinación; toca un archivo fuera de los permitidos | Trabaja sólo en el worktree de `task/<id>/T<n>`; la escritura fuera de alcance bloquea la tarea (bootstrap: la skill lo detecta y registra; F4: el orchestrator) | Workflow §4.3; S04 l. 108 | 0.8, 4.1 | `D`+`CF` | ambos |
| AT-84 | Candidata verificada; línea `merge <sha-candidato> onto <sha-main-base> approved` | `main` avanza antes del merge | La skill `/feature-integrate` no prepara el merge: exige actualizar, verificar y aprobar de nuevo; con `main` intacto prepara `git merge --no-ff feat/<id>` para la persona | Workflow §4.5, §7 | 0.8 | `D` | ambos |
| AT-85 | Candidata y `main` en SHAs conocidos | La persona escribe cualquier línea en `control:approvals/<id>.md` | `git rev-parse` de candidata y `main` no cambian; la aprobación se lee con `git show control:approvals/<id>.md`; una línea sin commit no abre gate | Workflow §2 (pto. 9), §7 | 0.1 | `D` | ambos |
| AT-86 | Rama de tarea con `<sha-trabajo>` y commits de registro encima | `git diff --name-only <sha-trabajo>..HEAD` | Sólo rutas de registro (`features/<id>/{tasks,participations}.md`, `features/<id>/evidence/**`); el SHA del trabajo no se mueve al registrar evidencia, handoff o veredicto; cualquier otra ruta invalida la entrega | Workflow §2.1 (pto. 3, 8), §7 | 0.8 | `D` | ambos |

### 1.9 Ledger y evidencia

| AT | Precondición | Estímulo | Oráculo observable | Fuente canónica | Roadmap | Clase | Repo |
| --- | --- | --- | --- | --- | --- | --- | --- |
| AT-90 | Ledger SQLite con eventos | `UPDATE`/`DELETE` sobre eventos, propuestas, decisiones aceptadas; insertar un evento nuevo | Modificación y borrado rechazados (trigger o constraint); el insert se admite; los cambios posteriores se representan con nuevos registros | S11 l. 75; roadmap 1.5 | 1.5 | `CF` | T800R |
| AT-91 | Schema `evidence-event` | Fixtures incluyendo participaciones (`assigned`, `started`, `delivered`, `verdict`, `transferred`, `handoff_*`, `merged`, `invalidated`, `bootstrap`) con `actor_id`, proveedor y sesión como atributos | Todo registro persistido usa un schema publicado con revisión exacta; un evento sin `actor_id` o con schema desconocido se rechaza | S11 l. 115; S12 l. 68 (`actor_id` lógico); roadmap 1.2 | 1.2, 1.5 | `CF` | T800R |
| AT-92 | Efecto `high` aprobado | Ejecutar con fallo inyectado entre el registro previo y el efecto; reanudar | Orden observable: validación → decisión → `effect_pending` → efecto → registro posterior → reconciliación; tras el fallo, `effect_pending` queda visible y el efecto **no** se reintenta hasta comprobar su estado real | S11 l. 59, 157; ADR-010 punto 6; S09 l. 77 (`fail closed`) | 1.5, 2.2 | `CF` | T800R |
| AT-93 | Adopción con dos worktrees | Abrir el ledger desde cada uno; ejecutar `doctor` | Un único SQLite en el directorio de estado de la plataforma bajo `project_id`, compartido; no existe bajo el repositorio; `doctor` muestra la ruta efectiva | S11 l. 112; ADR-010 punto 6 | 1.5 | `CF` | T800R |
| AT-94 | Feature del IDP integrada (I3-I5) | Reconstruir, **sólo** desde ledger, Git y tracker: tareas, owners, participaciones, veredictos, aprobaciones, efectos `high`, handoffs | La persona responde «qué pasó y por qué» sin consultar transcripciones ni a los agentes; cada afirmación enlaza un evento o commit | S12 l. 70 (métrica global); S01 objetivo 2 | 5.4 | `EXEC` | IDP |
| AT-95 | Feature cerrada | Calcular las métricas de workflow §8 (tiempo spec aprobada → primera evidencia; rondas por tarea; reaperturas de spec; rechazos de handoff; `intent gap`; tokens si se exponen) más tiempo de registros y gates (1.1) | En bootstrap, `features/<id>/metrics.md` por feature, escrito en el cierre documental (`coord: cierre <id>`) con la línea «capacidad ausente → destino» (P27) y las reejecuciones de validaciones no deterministas (P10); el tiempo del gate 3 se deriva de los commits de `control` (workflow v4.2 §4.5, §8); desde F1, las mismas métricas derivadas localmente de eventos y resultados, sin telemetría remota | Workflow §8; S11 l. 160; roadmap 0.8, 1.1 | 0.8, 1.1, 5.4 | `D`+`CF` | ambos |
| AT-96 | Actor lógico `camilo-a1` con dos ejecuciones en proveedores distintos | Registrar participaciones | Ambas comparten `actor_id`; proveedor y sesión son atributos; el predicado del verifier las trata como un mismo actor | S12 l. 68; roadmap 1.6 | 1.6 | `CF` | T800R |
| AT-97 | **Métrica global**: I1-I5 integradas en `main` del IDP | Derivar la tabla de la métrica desde ledger y Git | Tabla con: denominador = tareas de cada `plan.md` que llegaron a `main`; numerador = las asignadas por el orchestrator, ejecutadas por un agente vía adapter y con evidencia en el ledger; exclusiones listadas aparte (línea base de `create-app`, ediciones humanas fuera de tarea); modo por tarea (manual, con skills, bajo T800R) y líneas cambiadas por modo; resultado numerador/denominador ≥ 75 %. Los gates humanos no restan | S12 l. 69-70 (métrica global, umbral 75 %); roadmap «Dos carriles» | 5.4 | `EXEC` | IDP |

### 1.10 Validaciones declaradas en el host

| AT | Precondición | Estímulo | Oráculo observable | Fuente canónica | Roadmap | Clase | Repo |
| --- | --- | --- | --- | --- | --- | --- | --- |
| AT-100 | Plan con comandos de validación declarados | El agente solicita una validación no declarada; aporta un comando literal | Rechazada con evento; el modelo nunca aporta comando, flags ni entorno: sólo un identificador de validación declarada | S11 l. 92 (mediación; la realización OCI está en el backlog); workflow §2.1 pto. 10, §4.3 | 4.3 | `CF`+`EXEC` | T800R |
| AT-101 | Validación declarada | Ejecutarla | Corre en el worktree de la tarea, nunca en el checkout de coordinación ni en `main`; la evidencia la declara «ejecución en host supervisada, riesgo residual aceptado», no aislamiento | Workflow §4.3, §7; roadmap 4.3 | 4.3 | `CF` | T800R |
| AT-102 | Worker modificó una ruta protegida (`package.json` scripts, hook versionado, `policy.yaml`, skill…) | Pedir una validación antes y después de la revisión del verifier | Antes: «no ejecutado: pendiente de revisión de protected_paths», sin ejecutar; el verifier revisa línea a línea y anota `git hash-object` por archivo; con hash coincidente la ejecución procede; si el `high` es por `protected_paths`, la aprobación es precondición del gate 3 | Workflow §4.3-4.4, §7; roadmap 4.3 | 0.8, 4.3 | `D`+`CF` | ambos |
| AT-103 | Entorno padre con variable señuelo | Ejecutar una validación | El entorno del proceso se construye por allowlist; el señuelo no aparece en el proceso, su salida capturada ni el ledger | S09 l. 59; S11 l. 124 (secretos señuelo); workflow §4.3 («sin secretos») | 4.3 | `CF` | T800R |
| AT-104 | IDP día 1 (I1) | Validaciones globales de la candidata | Dependencias fijadas; tipos, lint y build; arranque local; comprobación reproducible del catálogo (I1-I2) o TechDocs (I3); lo no disponible se registra como «no ejecutado» con aceptación focalizada, nunca como aprobado; evidencia en `evidence/README.md` encima de `<sha-verificado>` | Workflow §4.5; roadmap 0.8 | 0.8 | `D`+`EXEC` | IDP |

Recuento: 80 `AT` (5 base técnica, 8 adopción, 8 orchestrator, 6 verifier, 10
handoffs/Beads, 7 contexto/OKF, 7 adapters, 9 política, 7 redes de seguridad, 8
ledger, 5 validaciones). Por clase, solas o combinadas: 17 `D`, 54 `CF`, 34
`EXEC`; 15 `AT` son exclusivamente `EXEC` y no pueden ejecutarse sin producto,
proveedor, Beads o IDP reales: AT-17, 33, 34, 42, 43, 44, 48, 49, 60, 63, 64, 77,
82, 94 y 97 (incluidas las dos sondas, AT-42 y AT-60).

## 2. Matriz de conformidad

Superficie de S11 l. 189-191 (proveedores) y l. 87, 106 (Beads). Tupla objetivo
mínima provisional: **macOS arm64, Node 24 con patch fijado en 0.7** (S12
«Preguntas abiertas»). La conformidad live de adapters fuera de esa tupla queda
`deferred` al backlog («Perfiles de conformidad por tupla»), junto con los
prebuilds de SQLite para Linux glibc arm64/x64 y Windows x64 (S11 l. 119,
backlog «Bindings SQLite precompilados»). La matriz de CI del core en
Linux y Windows que exige S11 l. 127 queda `deferred` al backlog por decisión de
la persona del 2026-10-09 (§7); el core conserva el diseño multiplataforma de
S11 (puertos, sin supuestos POSIX) y su CI corre en macOS arm64 durante el v0.

| Adapter / proveedor | Superficie y perfil (S11) | Tupla | Versión a fijar | Estructural | Conductual | Integración | Resiliencia | Estado inicial |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Claude Code | Headless `--restricted -p`, `--tools ""`, MCP denegado, slash commands deshabilitados, `dontAsk`, `stream-json`, schema de salida, directorio de configuración efímero; cancelación `SIGINT` → evento terminal → escalada tras timeout | macOS arm64 / Node 24.x | `>= 2.1.248`, exacta por manifiesto; se fija en 0.5 con la versión sondeada | AT-01, 62 (descriptor, snapshot, fixtures de eventos) | AT-51, 61, 63, 65, 100 | AT-60 (sonda), AT-64, 82 | AT-61 (desconocido, truncado, tool habilitada, versión), AT-63, 24 | `target/unverified` |
| Codex | `codex app-server` por stdio, `CODEX_HOME` efímero; updates, web, hooks, multi-agent, shell, plugins y apps desactivados; `thread/start`/`turn/start` con directorio vacío y `outputSchema`; cancelación `turn/interrupt`; schemas JSON-RPC generados y fijados para la versión instalada | macOS arm64 / Node 24.x | Versión instalada en 0.5, exacta; los schemas JSON-RPC se regeneran y fijan por versión | AT-01, 62 | AT-51, 61, 63, 65, 100 | AT-60, 64, 82 | AT-61, 63, 24 | `target/unverified` (app-server experimental; sin `tools: []` documentado) |
| OpenCode | Server local efímero, loopback controlado por T800R, `--pure`, permisos globales `deny`, catálogo vacío; plugins, MCP, instrucciones, subagentes, snapshots, share, LSP, formatters, autoupdate y fetches desactivados; abort de sesión | macOS arm64 / Node 24.x | Versión instalada en 0.5, exacta | AT-01, 62 | AT-51, 61, 63, 65, 100 | AT-60, 64, 82 | AT-61, 63, 24 | `target/unverified` |
| Beads (work tracker) | Puerto semántico de tareas, ownership, dependencias, bloqueos, transiciones y referencias; `handoff/v1` autoritativo; aceptación y cambio de owner como **una operación condicional** contra base, owner y estado | macOS arm64 / Node 24.x | Versión sondeada en 0.6, exacta | AT-40, 41, 45 | AT-21, 43, 44 | AT-42 (sonda), 43, 48 (con Beads), 49 | AT-43 caso 2, 44, 47 | `target/unverified` |

Las cuatro columnas de capas son las de S08 l. 306-310. Una celda no se
extrapola a otra tupla ni de un proveedor a otro (S11 l. 127; S08 l. 105).

### 2.1 Cómo una celda pasa a `compatible`

1. **Elegibilidad previa** (`target` → `candidate`): la sonda (0.5 para proveedores,
   0.6 para Beads) demuestra la condición de S11 (catálogo vacío y cancelación
   terminal; operación condicional atómica) y la persona lo registra en
   `spikes/0.5.md` / `spikes/0.6.md`. Un proveedor que no la cumple queda
   `ineligible` con motivo y punto de resolución (§6); no se construye encima.
2. **Capas estructural y conductual** en CI (`CF`): descriptor y snapshot válidos,
   fixtures válidos e inválidos, replay de streams; las siete capacidades del
   baseline con realización y verificación declaradas (S08 l. 64, 69).
3. **Capas de integración y resiliencia** live (`EXEC`), con versión exacta,
   configuración efectiva, entorno (SO, arquitectura, Node, hash del lockfile) y
   revisión del adapter registrados: AT-60/61/63/65 y, para Beads, AT-42/43/44.
4. **Tarea de extremo a extremo**: AT-64 (proveedores) o AT-48 con Beads (3.2).
5. **Registro**: la evidencia se enlaza desde S12 («Evidencia y resultados») con
   veredictos y faltantes; la celda pasa a `compatible` para esa tupla y versión.
   Un cambio de contrato, adapter, versión del proveedor, configuración o
   política vuelve `stale` sólo la evidencia afectada y repite sus capas (S08 l.
   108); no hay TTL.

Documentación, una tarea exitosa aislada o este documento no bastan (S08 l.
102-105). No existe estado `partial`: los límites se expresan como restricciones
del snapshot (S08 l. 69).

### 2.2 Regla de éxito parcial de E4 sobre la matriz

E4 es un experimento, no la certificación: se declara **superado** cuando los
tres proveedores completan AT-64 (una tarea de extremo a extremo con el mismo
handoff, sin cambios en el repositorio; S12 l. 70); **parcial documentado**
cuando lo hacen dos y el tercero queda `ineligible` o `unverified` con motivo,
versión probada y punto de resolución en el backlog. Ese mínimo de dos lo
**ratificó la persona el 2026-10-09** (§7.1); S12 l. 70 lo daba sólo como ejemplo
(«p. ej. dos de tres proveedores»). Con uno o ninguno, E4 es `fail`: la regla de decisión de S12 no lo hace obligatorio,
pero incumple el acuerdo inicial 3 de
[product-definition.md](product-definition.md) («compatibilidad con Codex, Claude
Code y OpenCode») y el v0 no cierra hasta una decisión explícita de la persona
(§4.3, §7). El estado `compatible` de la celda (§2.1) es una condición de
**release**, separada de E4: un proveedor puede superar AT-64 y seguir
`candidate` hasta completar las cuatro capas. Beads no admite parcial: sin
operación condicional demostrada, F3 no habilita transferencias de escritura y
la persona decide antes de F3 (roadmap «Camino crítico y riesgos»).

## 3. Corpus de escenarios

Seis clases (S12 pregunta 3) sobre los incrementos I1-I5 del IDP y el dogfooding
de T800R. Cada escenario cita las `AT` que ejecuta y el experimento al que
alimenta.

| CS | Clase | Repo | Escenario | AT | E | Roadmap |
| --- | --- | --- | --- | --- | --- | --- |
| CS-01 | Contratos | T800R | Corpus de fixtures válidos e inválidos para los siete schemas de F1 y los de F4-F5; YAML restringido; digest canónico | 01-03, 40, 50, 55, 70, 76, 91 | — | 1.2, 4.4, 5.2 |
| CS-02 | Contratos | T800R | Máquinas de estado de tarea y handoff con propiedades; owner único; planner sin autoridad; predicado del verifier; estados, presupuesto y ausencia de secretos del context packet | 20-21, 25, 27, 30, 32, 41, 52, 53, 96 | — | 1.3, 1.6, 4.4 |
| CS-03 | Contratos | T800R | Replay determinista de streams sanitizados capturados en 0.5: evento desconocido, truncado, tool habilitada, versión no compatible | 61, 62, 65 | — | 4.2 |
| CS-04 | Adopción | IDP | Línea base `@backstage/create-app` en versión fijada; rama `control`; `policy.yaml` provisional; proyección manual de skills con SHA de origen | 05, 15, 16, 85 | — | 0.2-0.4 |
| CS-05 | Adopción | IDP | **E1 piloto**: checkout limpio de la línea base con estado de usuario aislado → `init`, `apply`, `doctor` ≤ 30 min sin editar generados | 10-13, 17, 56, 73 | E1 | 5.3 |
| CS-06 | Adopción | T800R | **E1 dogfooding**: `init` sobre el historial de T800R (ya con `control`, `skills/`, `features/`): registra lo existente sin moverlo; detecta colisión con skills ya proyectadas | 10-12, 15, 17, 56 | E1 | 5.3 |
| CS-07 | Adopción | ambos | `sync` y `update` sólo proponen; unidad editada a mano preservada o bloqueada; `sync` sin drift idempotente | 12-14 | — | 5.1 |
| CS-08 | Seguridad | T800R | Bootstrap de la raíz de confianza: efecto antes de bootstrap, `apply` desde agente, segundo bootstrap | 73, 10 | — | 1.4 |
| CS-09 | Seguridad | T800R | Aprobación `local`: con y sin marcadores de sesión; digest alterado; consumo; vencimiento; orden causal con fallo inyectado | 74-76, 92 | — | 2.2 |
| CS-10 | Seguridad | T800R | **E5 parcial**: hook `pre-push` sobre `main`; solicitudes simuladas de push y de acción `prohibited` contra `policy` | 71, 72, 80, 81 | E5 (parcial) | 2.3 |
| CS-11 | Seguridad | IDP | **E5 completo**: agente vía adapter pide push a `main` y una acción `prohibited` | 82, 80, 81 | E5 | 4.5 |
| CS-12 | Seguridad | IDP | En I3 el worker modifica `package.json` scripts: validación no ejecutada hasta revisión con hash; `high` por `protected_paths` como precondición del gate 3; entorno sin señuelo | 102, 103, 100, 101 | — | 4.3 |
| CS-13 | Seguridad | T800R | Verifier inelegible: el `actor_id` del worker reanuda en otra sesión y otro proveedor e intenta verificar; historial incompleto; adquisición de participación tras aceptar | 30-32, 35, 96 | — | 1.6 |
| CS-14 | Recuperación | IDP | Handoff con precondiciones alteradas: tras `handoff_emitted`, se cambia el owner, se registra un evento posterior o aparece un commit encima de `<sha-trabajo>` fuera de rutas de registro → `/session-resume` rechaza con motivo; un commit `coord:` ajeno que conserva esas precondiciones se acepta; en F3, Beads rechaza con `stale_or_conflicting_base` | 46, 47, 43 | E2 | 1.7, 3.2 |
| CS-15 | Recuperación | T800R | Proceso interrumpido entre `effect_pending` y efecto; reanudación reconcilia sin duplicar; ledger inmutable | 92, 24, 90, 93 | — | 1.5, 4.1 |
| CS-16 | Recuperación | ambos | Migraciones 1-3 sobre datos reales: cotejo de `participations.md`, importación de `control`, `tasks.md` a Beads; features en curso continúan | 34, 77, 49, 45 | — | 1.6, 2.4, 3.3 |
| CS-17 | Recuperación | IDP | Replanificación de I3 por defecto de spec: `invalidated`, ratificación de conservadas, reconciliación de no terminales | 26, 23 | — | 0.8 |
| CS-18 | Portabilidad | T800R | **Sonda 0.5**: un turno cerrado por proveedor, operación permitida y denegada, cancelación; decisión de elegibilidad | 60, 63 | E4 (elegibilidad) | 0.5 |
| CS-19 | Portabilidad | IDP | **E4**: una tarea de I3 repetida rotando Claude Code, Codex y OpenCode como worker con el mismo `handoff/v1`; sin cambios en el repo | 64, 62, 66, 15 | E4 | 4.6 |
| CS-20 | Portabilidad | ambos | Skills proyectadas: cada proveedor activa `/feature-spec` y `/spike` y resuelve rutas desde la raíz; evals por skill | 15, 16 | E4 | 0.4 |
| CS-21 | Portabilidad | T800R | **Sonda 0.6** de Beads y, si es elegible, adapter con operación condicional probada; si no, capacidad ausente y bloqueo por alcance | 42-45 | — | 0.6, 3.1 |
| CS-22 | Extremo a extremo | IDP | **I1** catálogo mínimo con skills y procedimiento manual: tres gates en `control`, evidencia, veredicto, candidata completa, merge condicional; medición del coste manual (1.1) | 23, 26, 35, 46, 78, 83-86, 95, 104 | — | 0.8, 1.1 |
| CS-23 | Extremo a extremo | IDP | **I2 + E2 manual**: 3+ tareas; `/session-handoff`; `/session-resume` en otro proveedor reconstruye estado, ownership, participaciones y evidencia | 48, 46, 47, 24 | E2 | 1.7 |
| CS-24 | Extremo a extremo | IDP | **I4 + E3**: dos tareas sobre `app-config.yaml` a dos workers en paralelo bajo el orchestrator; colisión detectada antes de integrar; verifier distinto en el 100 % de las `high` | 22, 33, 21 | E3 | 4.6 |
| CS-25 | Extremo a extremo | IDP | **I3 + E2 bajo el orchestrator**: TechDocs generado y visualizado en local; cierre de sesión y reanudación con otro proveedor desde Beads y ledger | 48, 24, 51, 104 | E2 | 4.6 |
| CS-26 | Extremo a extremo | IDP | **I5 + métrica global**: ampliaciones de catálogo y TechDocs con documentación propia curada como nota OKF y consumida en un packet; ≥ 75 % de las tareas integradas bajo el orchestrator; reconstrucción desde lo persistido; informe de cierre | 94, 95, 97, 17, 54 | métrica global | 5.2, 5.4 |
| CS-27 | Extremo a extremo | T800R | **Dogfooding**: 0.7 (esqueleto del monorepo) y cada fase posterior construidas con el flujo v4.1; fronteras y `pnpm test` en verde; cada migración actualiza las skills como cambio `high` | 04, 23, 86, 95 | — | 0.7, F1-F5 |

Cobertura por clase: contratos 3, adopción 4, seguridad 6, recuperación 4,
portabilidad 4, extremo a extremo 6. Las 80 `AT` aparecen en al menos un
escenario; las puramente `CF` (schemas, `core`, packet) lo hacen en CS-01 a
CS-03 como fixtures y pruebas puras, sin repositorio real.

## 4. Reglas de decisión y agregación

### 4.1 Resultado de una `AT`

| Resultado | Significado |
| --- | --- |
| `pass` | Oráculo satisfecho sobre revisión, versión y entorno registrados. |
| `fail` | Oráculo no satisfecho; se registra evidencia, no se repite sin cambios (workflow §4.3). |
| `not_run` | No ejecutada, con motivo (p. ej. proveedor `ineligible`, fase no alcanzada). Nunca cuenta como `pass`. |
| `n/a` | Requisito `deferred` al backlog para esta tupla o perfil; se cita la fila del backlog. |

### 4.2 Resultado de un experimento

| E | Obligatorio | `pass` | Parcial documentado | `fail` |
| --- | --- | --- | --- | --- |
| E1 | Sí | AT-17 `pass` en ambos repos (≤ 30 min, sin editar generados, `doctor` verde). AT-10-12 son prerrequisitos de la fase 5.1, no parte del veredicto | No admite | Cualquier repo > 30 min o con edición manual de generados |
| E2 | Sí | AT-48 `pass` bajo el orchestrator (4.6): estado, próxima acción y bloqueos desde lo persistido, sin explicación humana, 0 tareas rehechas. Las ejecuciones de 1.7 (manual) y 3.2 (con Beads) son evidencia intermedia; AT-47 cuenta para la celda de Beads (§2) | No admite | Tareas rehechas > 0 o explicación humana necesaria |
| E3 | No | AT-22 (detección antes de integrar, sin pérdida) y AT-33 (100 % verifier distinto) `pass` | S12 l. 70 sólo dice «éxito parcial documentado» sin fijar límites. **Ratificado por la persona el 2026-10-09 (§7.1)**: detección antes de integrar y preservación del trabajo cumplidas (objetivo 3 de S01), pero la serialización o el bloqueo requirió intervención humana, o se observó en menos tareas de las planeadas en I4; AT-33 sin parcial (obligación de S09 l. 86 y S12) | Colisión no detectada antes de integrar, o pérdida de trabajo, o AT-33 `fail` |
| E4 | No | AT-64 `pass` en los tres proveedores (el estado `compatible` es condición de release, §2.1, no de E4) | S12 l. 70 da «p. ej. dos de tres proveedores» como ejemplo. **Ratificado por la persona el 2026-10-09 (§7.1)**: dos de tres como umbral del parcial (§2.2) | Uno o ninguno (§2.2: el v0 no cierra sin decisión de la persona) |
| E5 | Sí | AT-82 `pass` (completo) tras AT-80-81 `pass` (parcial, 2.3) | No admite | Un push a `main` sin aprobación `local`, o una acción `prohibited` ejecutada, o un evento sin registrar |

Regla de S12 l. 70: E1, E2 y E5 obligatorios; E3 y E4 admiten parcial sin
bloquear el v0.

### 4.3 Agregación del v0 (tarea 5.4)

| Veredicto | Condición |
| --- | --- |
| **Éxito** | E1, E2 y E5 `pass`; E3 y E4 `pass`; métrica global AT-97 `pass` (≥ 75 % de las tareas integradas de I1-I5 bajo el orchestrator, con numerador, denominador y exclusiones listadas); AT-94 `pass`; el IDP con catálogo y TechDocs funciona en local (AT-104 en I3-I5). |
| **Degradación** | Como «éxito» pero con E3 y/o E4 parciales documentados, o con una celda de la matriz `ineligible`/`unverified` con punto de resolución en el backlog. El v0 cierra; el informe de cierre lo distingue del éxito pleno. |
| **Incompatibilidad** | Una celda de §2 falla una capa: esa tupla queda `unverified` o `ineligible`, se retira de la selección (AT-66) y no se extrapola. Sólo escala a bloqueo si deja E4 con menos de dos proveedores (decisión de la persona) o si es Beads sin operación condicional (decisión antes de F3). |
| **Bloqueo** | Cualquier `fail` en E1, E2 o E5; cualquier `fail` en AT-71, 72, 73, 75, 80, 81 o 82 (controles de S09/S12 que no se aflojan) detiene la fase que habilita trabajo real vía adapters (2.3 es gate de F4); AT-97 `fail` (métrica global < 75 %); AT-94 `fail`. **E3 o E4 `fail`** (no parcial): el v0 no cierra hasta decisión explícita de la persona (§2.2, §7.1), porque la regla de S12 los hace no obligatorios pero no autoriza cerrar incumpliendo el objetivo 3 o el acuerdo inicial 3. El v0 no cierra hasta resolverlo; «no ejecutado» no desbloquea. |

Las métricas de workflow §8 (AT-95) se registran en el v0 como observación sin
umbral: el canon no fija ninguno y 1.1 las usa para ordenar qué automatizar.
Fijar umbrales queda para el informe de cierre (§6).

## 5. Trazabilidad

| Capacidad del MVP (S12 l. 64, backlog «Qué sí queda») | AT | CS | Roadmap | E |
| --- | --- | --- | --- | --- |
| TypeScript/Node 24, monorepo, JSON Schema, contract-first | 01-05 | 01, 04, 27 | 0.2, 0.7, 1.2 | — |
| `init`/`apply`/`doctor`/`sync`/`update` simples; proyección de skills | 10-17, 56 | 04-07, 20 | 0.4, 1.4, 5.1, 5.3 | E1 |
| Orchestrator determinista y roles; owner único; escritura disjunta; gates humanos | 20-27 | 02, 17, 22, 24 | 0.1, 0.8, 1.3, 2.2, 4.1, 4.6 | E3 |
| Verifier independiente por `actor_id` | 30-35, 96 | 02, 13, 16, 24 | 1.3, 1.6, 4.6 | E3 |
| `handoff/v1` autoritativo en el tracker; Beads | 40-49 | 01, 02, 14, 16, 21, 23, 25 | 0.6, 1.2, 1.3, 1.7, 3.1-3.3, 4.6 | E2 |
| Context packets, progressive disclosure, OKF con curator básico | 50-56 | 01, 25 | 4.4, 5.1, 5.2 | E2 (brief) |
| Adapters headless Claude Code, Codex, OpenCode | 60-66 | 03, 18, 19 | 0.5, 4.2, 4.6 | E4 |
| `policy.yaml` simple; bootstrap; aprobación `local` para `high` | 70-78 | 08, 09, 10, 16, 22 | 1.2, 1.4, 2.1, 2.2, 2.4 | E5 |
| Git como red de seguridad; `prohibited` real | 80-86 | 10, 11, 22, 27 | 0.1, 0.8, 2.3, 4.1, 4.5 | E5 |
| Ledger SQLite append-only; reconstrucción desde lo persistido; métricas y métrica global | 90-97 | 01, 09, 15, 26 | 1.2, 1.5, 1.6, 2.2, 5.4 | métrica global |
| Validaciones declaradas en el host sobre worktree, allowlist | 100-104 | 12, 22, 25 | 0.8, 4.3 | — |

Cobertura inversa del roadmap: todas las tareas 0.1-5.4 aparecen en al menos una
`AT` o `CS` (0.1: AT-23, 85; 0.2: AT-05; 0.3: CS-04; 0.4: AT-15-16; 0.5: AT-60; 0.6:
AT-42; 0.7: AT-04; 0.8: CS-22; 1.1: AT-95; 1.2: AT-01; 1.3: AT-20; 1.4: AT-73;
1.5: AT-90; 1.6: AT-30-34; 1.7: AT-48; 2.1: AT-71; 2.2: AT-74; 2.3: AT-80; 2.4:
AT-77; 3.1: AT-43; 3.2: AT-43, 47; 3.3: AT-49; 4.1: AT-22; 4.2: AT-61; 4.3:
AT-100; 4.4: AT-50; 4.5: AT-82; 4.6: AT-33, 48, 64; 5.1: AT-11-14; 5.2: AT-54;
5.3: AT-17; 5.4: AT-94, 97). No hay capacidad del perfil mínimo sin `AT`, ni
`AT` sin fuente canónica y tarea del roadmap.

## 6. Disposición de incógnitas

S12 pregunta 8 y «Preguntas abiertas». Ninguna bloquea autorizar la construcción;
las dos marcadas «decisión» pueden bloquear una fase posterior y tienen punto de
resolución anterior a ella.

| Incógnita | Disposición | Punto de resolución | Por qué no bloquea |
| --- | --- | --- | --- |
| Tuplas de plataforma del objetivo mínimo | `deferred`: macOS arm64 / Node 24.x como única tupla live de adapters; otras tuplas de adapters y prebuilds de SQLite al backlog | Al publicar para terceros | El primer usuario es una persona en su máquina (S12 l. 64). **Tensión** (§2): S11 l. 127 exige CI del core en tres SO y el backlog no la difiere; decisión de la persona en §7.3. |
| Snapshot de adopción | Parcialmente v0: `t800r.lock.json` (revisiones, integridad y unidades exactas; S11 l. 112) y la revisión aplicada registrada en el ledger con cada `apply` (AT-11) sí entran. El «snapshot exacto y compatible» con evidencia de compatibilidad por componente y canales de descubrimiento (S10 l. 83) está en el backlog | Con la primera actualización que rompa compatibilidad (backlog) | `doctor` compara distribución ejecutada con el lock (S11 l. 130) y `update` sólo propone conjuntos de manifiesto (AT-13); basta para E1 y para reconstruir qué se aplicó. |
| Versión de `@backstage/create-app` y de Node que soporta | `deferred` a 0.2: fijar al crear el repo, registrar en el commit de línea base y en S12 (AT-05) | Tarea 0.2 | Es un dato del piloto, no una decisión del producto; sólo afecta a CS-04. |
| Nombre del repositorio piloto | `deferred` a 0.2: registrar en S12 «Decisiones» con el SHA de la línea base | Tarea 0.2 | No condiciona ningún contrato; E1 exige sólo un checkout limpio de esa línea base. |
| Versiones exactas de Claude Code, Codex y OpenCode | `deferred` a 0.5: versión instalada en la sonda, fijada por manifiesto (Claude Code `>= 2.1.248`) | Tarea 0.5 | La matriz es por versión; se rellena con la sondeada, no antes. |
| Elegibilidad de cada proveedor (catálogo vacío, cancelación) | **decisión** de la persona tras 0.5 | Antes de F4 | E4 admite parcial; con < 2 proveedores la persona decide (§2.2). |
| Operación condicional de Beads | **decisión** de la persona tras 0.6 | Antes de F3 | F1-F2 no la necesitan; si es negativa, F3 no habilita transferencias de escritura y no existe fallback interno (S11 l. 87): la alternativa (otro adapter de tracker) saldría del backlog por evidencia, no se presupone aquí. |
| Patch exacto de Node 24 y versiones del toolchain | `deferred` a 0.7 (lockfile del monorepo) | Tarea 0.7 | S11 l. 65, 118 ya fijan major y herramientas. |
| Schemas `adapter-descriptor` y `capability-snapshot` (y `agent-turn`, `mediated-operation`, `operation-result`, `diagnostic`) no listados en el roadmap | **tensión detectada**: S08 l. 66 y ADR-010 «Consecuencias» los exigen para conformidad (AT-62), pero 1.2/4.2/4.3 no los nombran. Disposición propuesta: 4.2 añade `adapter-descriptor`, `capability-snapshot` y `agent-turn`; 4.3 añade `mediated-operation`; `operation-result` y `diagnostic` entran con la CLI en 1.4 | Al abrir la feature de 4.2 (nota en el roadmap) | El roadmap ya declara «schemas que añade» por fase; ampliar la lista no cambia dependencias ni orden. |
| Umbrales de las métricas de workflow §8 | `deferred`: observación sin umbral en el v0 | Informe de cierre (5.4), con los datos de 1.1 | El canon no fija umbrales; fijarlos sin medir contradice «medir antes de automatizar». |
| Límites del parcial de E3 y mínimo de dos proveedores en E4 | **ratificados** por la persona el 2026-10-09 (§7.1) | Resuelto | S12 l. 70 no fija límites para E3 y da «dos de tres» sólo como ejemplo para E4; las propuestas no aflojan AT-33 ni el objetivo 3 de S01. |
| Certificación de fuga señuelo de credenciales por tupla | `deferred` al backlog («Auth de proveedor fuera de la frontera de herramientas»); la prueba con secretos señuelo de S11 l. 124 sí entra en el v0 (AT-53, 65, 103) | Al certificar adapters para terceros | El v0 conserva allowlist de entorno, señuelos en CI y no persistencia del stream bruto; lo diferido es certificar la frontera de auth por tupla, no probarla. |
| Perfil `signed` y transición `local` ↔ `signed` | `deferred` al backlog | Más de un aprobador | `approval/v1` no cambia (S12 l. 60); el v0 sólo ejerce `local`. |
| Conciliar «no seleccionar tecnología en la definición» con S11 (`REV-2026-104`) | `deferred` con punto de resolución «al cerrar S12» (backlog «Proceso») | Paso 6 de S12 | Afecta al registro del proceso, no a ninguna `AT`. |
| Modelo de dos momentos (definición y verificación contra producto) | Fuera del v0; exige enmendar S04 | Después del v0 | El v0 conserva los tres gates de v4.1 (roadmap «Fuera del v0»). |
| Revisión transversal: calidad, costes, ciclos de mejora y cobertura final | Cerrada y aprobada por la persona el 2026-10-09 en [revision-transversal-cierre.md](revision-transversal-cierre.md); las enmiendas P08, P10, P14, P20 y P27 entran en el roadmap v2.2 (0.7, 0.8) y en el flujo v4.2; P12 (salida íntegra de validaciones) queda como decisión de la persona en 0.8 | 0.8 para P12 | Las enmiendas se verifican con AT-04, AT-16 y AT-95 en sus tareas; no añaden gates. |

## 7. Decisiones de la persona

Resueltas el 2026-10-09, registradas en
[S12](definition/session-12-validation-convergence.md#decisiones):

1. **Límites del parcial de E3 y E4: ratificados.** E3 es parcial cuando la
   colisión se detecta antes de integrar y sin pérdida de trabajo, pero la
   serialización o el bloqueo requirió intervención humana, o se observó en
   menos tareas de las planeadas (AT-33 no admite parcial). E4 es parcial con
   dos de tres proveedores; con uno o ninguno, el v0 no cierra hasta decisión
   explícita de la persona (§2.2, §4.3).
2. **CI del core en tres SO: `deferred` al backlog.** La CI del core corre en
   macOS arm64 durante el v0; Linux y Windows se retoman al publicar para
   terceros. Se conserva el diseño multiplataforma de S11 l. 127 (puertos, sin
   supuestos POSIX en core), de modo que no se reintroduce lo que S11 rechazó
   al descartar «Limitar el core a macOS y Linux».
3. **Endurecimiento de E1: descartado.** AT-10-12 siguen como prerrequisitos de
   fase; E1 es la literalidad de S12 l. 70.
4. **Endurecimiento de E2: descartado.** La ejecución manual de 1.7 es evidencia
   intermedia, no condición de E2.

Nota editorial aplicada en el roadmap (v2.2): `operation-result` y `diagnostic`
en 1.4; `adapter-descriptor`, `capability-snapshot` y `agent-turn` en 4.2;
`mediated-operation` en 4.3, tal como ya exigen S08 l. 66 y S11 l. 115 (§6).
