---
name: feature-build
description: Ejecuta una tarea autorizada del plan dentro de su brief, en su propia rama task/<id>/<task>, tocando sólo los archivos permitidos y corriendo sólo los comandos de validación declarados; deja evidencia append-only en evidence/<task>.md (commit `evidence:` encima del SHA del trabajo) y clasifica cualquier hallazgo. Úsala con una tarea asignada a tu actor_id (`in_progress` en tasks.md; `ready` es sólo la elegibilidad previa) de un incremento con build autorizado, al volver de un fail mientras queden rondas, o para la fase de efecto de un high ya aprobado. No la uses sin autorización en control, con dependencias pendientes, agotadas las tres rondas ni en main.
---

# /feature-build <task>

Etapa `build` (`docs/workflow-construccion.md` §4.3; `skills/README.md` §4.3;
rutas desde la raíz del repositorio). La ejecuta el **worker**, un actor con
`actor_id` propio que recibe un brief con contexto nuevo. El orchestrator asigna
la tarea antes; el worker no se autoasigna. Trabajas en un **worktree** de la
rama `task/<id>/<task>`; los registros de coordinación se leen de sus
referencias, no de tu worktree (workflow §2.1).

## Qué produce

- Commits en la rama `task/<id>/<task>` (nunca en `main`) hasta el **SHA del
  trabajo** (`<sha-trabajo>`).
- Encima, un commit `evidence: T<n> ronda <k>` que sólo toca
  `features/<id>/evidence/<task>.md` (append-only, según
  [references/evidence-template.md](references/evidence-template.md): una
  entrada por ronda con `actor_id`, `<sha-trabajo>`, comandos, resultados,
  entorno y «no ejecutado: motivo») y, si hay hallazgos ajenos,
  `features/<id>/evidence/<task>.findings.md`. Ese commit es el **SHA de entrega**
  (`<sha-entrega>`); lo que se verifica es `<sha-trabajo>`.

## Qué no hace

- No escribe veredictos, `control`, `tasks.md` ni `participations.md`.
- No ejecuta integración ni merge.
- No toca archivos fuera de los permitidos del plan más tus rutas de registro
  (`evidence/<task>.md`, `evidence/<task>.findings.md`): si lo necesita, **bloquea la tarea** y
  lo reporta; no amplía el alcance por su cuenta.
- No ejecuta código del repositorio fuera de los comandos de «Validación» del
  plan. Inspección (`git show`, `git diff`, `git hash-object`, `node
  --version`, `uname`) y coordinación (crear tu rama, commits en ella) no
  necesitan declararse (workflow §2.1, clases de comando).
- No ejecuta un efecto `prohibited`, exista o no una aprobación `high`.
- No lanza otros workers ni subagentes que escriban.
- No recibe ni busca secretos; si un comando los necesita, «no ejecutado: motivo».
- No repite una ronda sin cambios.

## Precondiciones mecánicas

Compruébalas y anótalas en la primera entrada de evidencia. Lee `control` y
`feat/<id>` con `git show`, nunca desde tu worktree.

1. `git show control:approvals/<id>.md` contiene `build <digest-plan> on spec
   <digest-spec> authorized` (o `build <digest-plan> authorized` en un
   `acotado`) **y** ambos digests coinciden con los actuales:
   `git hash-object` de `features/<id>/plan.md` y de `features/<id>/spec.md`
   tomados de `feat/<id>` (`git show feat/<id>:features/<id>/plan.md |
   git hash-object --stdin`). Si alguno no coincide, el plan o la spec
   cambiaron tras autorizarse: detente.
2. En `tasks.md` (`git show feat/<id>:features/<id>/tasks.md`) la tarea está
   `in_progress` con tu `actor_id` como owner; sus `depends_on` están
   `completed` y tienen evento `merged`; `Ronda` < 3. Para la fase de efecto, la
   nota dice `efecto <digest> autorizado`.
3. En `participations.md` existen las líneas `assigned` y `started` (o
   `transferred`) de esta tarea con tu `actor_id`, posteriores a cualquier
   `invalidated` de la tarea.
4. El brief ([references/brief-template.md](references/brief-template.md))
   está completo: objetivo, aceptación, archivos permitidos, referencias con
   revisión y papel, comandos de validación, presupuesto, condiciones de parada
   y base.
5. Rama `task/<id>/<task>` creada desde la base del brief (el SHA de
   `feat/<id>` que contiene las dependencias `merged`), en un worktree propio;
   árbol limpio.
6. **Rutas protegidas resueltas**: la lista es `protected_paths` de
   `policy.yaml` (si existe) más la del workflow §4.3 (`package.json` scripts,
   hooks de Git versionados, `Makefile`, CI, lockfiles, `policy.yaml`,
   `skills/`, configuración de agentes). Anota en la evidencia el
   `git hash-object` de cada una en la base.

## Procedimiento

1. **Registra el inicio** en `evidence/<task>.md` (nueva entrada de ronda con
   tu `actor_id`, SHA base, entorno: SO, `node --version`, hash del lockfile).
   La línea `started` ya la registró el orchestrator junto con `assigned`; no
   esperes un relevo.
2. **Lee sólo lo del brief**: spec (los `CA` de la tarea), la tarea en el plan,
   las referencias listadas; si vuelves de un `fail`, el veredicto
   (`git show feat/<id>:features/<id>/evidence/<task>.verdict.md`). No cargues
   la conversación anterior ni otras tareas.
3. **Regla de ejecución (antes de cada comando y de cada commit).** No ejecutes
   ningún comando de validación, ni cometas con hooks versionados modificados,
   mientras alguna ruta protegida esté modificada respecto de la base
   (`git diff --name-only <base>..HEAD` y `git status` contra la lista) salvo
   que su `git hash-object` actual coincida con el que un veredicto anterior
   anotó como revisado. Si lo está: «no ejecutado: pendiente de revisión de
   protected_paths»; el verifier revisa y ejecuta él. Para cometer con hooks
   versionados modificados usa `git -c core.hooksPath=/dev/null commit …` y
   anótalo.
4. **Tests primero** si la tarea lo marca: escribe la prueba que falla contra el
   criterio de aceptación y confírmalo ejecutando el comando de validación
   (sujeto al paso 3).
5. **Implementa** dentro de los archivos permitidos, en commits pequeños con
   mensajes que citen la tarea (`T3: …`).
6. **Valida**: ejecuta exactamente los comandos declarados (sujeto al paso 3);
   copia salida resumida y código de salida a la evidencia. Lo que no puedas
   ejecutar va como «no ejecutado: motivo» (falta herramienta, requiere
   secreto, requiere red, protected_paths). Nunca lo marques como pasado. Si
   un comando falla y al reejecutarlo sin cambios pasa, registra **ambas**
   ejecuciones (salida, código de salida, motivo presunto) bajo «validación no
   determinista»; no anotes sólo la que pasó ni decidas tú que fue un flake:
   el verifier reejecuta y decide (workflow §4.3).
7. **Clasifica cada hallazgo** que aparezca:
   - **Laguna de intención** (dos lecturas de la spec dan resultados distintos y
     nada registrado permite elegir): guarda el intento como commit `wip:`,
     escribe la pregunta concreta en la evidencia y pide al orchestrator pasar
     la tarea a `blocked` (`intent gap`). No elijas por la persona.
   - **Defecto de spec** (la spec exige algo imposible, contradictorio o
     incorrecto): anótalo en la evidencia y detén la tarea; el planner
     replanifica con `/feature-plan` y las tareas independientes continúan.
   - **Corrección local** (dentro del alcance y sin cambiar comportamiento
     acordado): hazla y anótala.
   - **Hallazgo ajeno** (fuera de tus archivos o de tu tarea): una línea en
     `evidence/<task>.findings.md` con ruta y descripción; no lo toques.
8. **Efectos `high` y `prohibited`.** Clasifica cada efecto antes de tocarlo.
   `prohibited`: **nunca**, aunque exista una aprobación `high`; anótalo y
   detente. Dos clases: las del canon (irreversible fuera del repositorio, S12
   l. 64) no se aflojan en el v0 aunque cambie `policy.yaml`; las adicionales
   de `policy.yaml` sólo las cambia un cambio de política `high` separado, no
   tu tarea. `high` en ejecución (migración destructiva, push fuera del
   repositorio): en la ronda de build **no lo ejecutes**; entrega el resto y
   anota «efecto pendiente de aprobación» (el verifier emitirá
   `ready_for_effect`, no `pass`). Lo ejecutas sólo en la **fase de efecto**:
   `tasks.md` dice `efecto <digest> autorizado`, y `git show
   control:approvals/<id>.md`, releído justo antes, contiene `high <digest>
   approved` para el digest que preparó el verifier (`<id>/T<n> <sha-trabajo>
   <efecto>`). Después añade la entrada «Efecto» a la evidencia con el
   **estado observado** (ejecutado total, parcial o no, y qué quedó) y entrega
   de nuevo para la comprobación posterior. Si algo falla a medias, no
   reintentes ni repares por tu cuenta: anota el estado y detente; la persona
   decide la recuperación y un efecto distinto exige nueva aprobación. Si el
   `high` es por `protected_paths` no hay fase de efecto. Si el efecto es
   integrar, lo hace la persona con `/feature-integrate`.
9. **Entrega**: último commit de trabajo = `<sha-trabajo>`; entrada final en la
   evidencia con ese SHA y el resumen de criterios cubiertos; commit
   `evidence: T<n> ronda <k>` añadiendo **sólo** `features/<id>/evidence/<task>.md`
   (y `evidence/<task>.findings.md` si lo tocaste) por lista explícita, con
   `git diff --cached --name-only` igual a la lista; comprueba `git diff
   --name-only <sha-trabajo>..HEAD` ⊆ conjunto «Worker, entrega» de la tabla
   de rutas por operación (workflow §2.1): evidencia, findings y, si retomaste
   la tarea por handoff sin tocar código después, `evidence/<task>.handoff.md`
   (es válido; no hagas un commit de código artificial).
   `<sha-entrega>` = `git rev-parse HEAD` **después** de ese commit; no se
   escribe dentro de la evidencia (sería el commit que la contiene): lo fijan
   el HEAD de la rama y el evento `delivered`. Pide al orchestrator la línea
   `delivered` con `<sha-trabajo>` y `<sha-entrega>`.
   Retorno breve a quien coordina (≈300 palabras orientativas): ambos SHA, qué
   se validó, qué no y por qué, hallazgos clasificados.

## Rondas y parada

- Una ronda es un par build → verify que termina en `fail`. Al volver de un
  `fail`, nueva entrada en la evidencia con el motivo del `fail` y qué cambia
  esta vez; la rama continúa desde tu `<sha-entrega>` anterior. **Nunca repitas
  lo mismo**: si no hay información nueva, dilo y pide cambio de contexto,
  tamaño de tarea o modelo.
- Esperar una aprobación `high`, la fase de efecto y una comprobación posterior
  satisfactoria no consumen ronda; un `fail` posterior sí suma una ronda y deja
  la tarea `blocked` hasta que la persona resuelva la recuperación (misma regla
  en `tasks.md` y workflow §4.3).
- Al agotar la tercera ronda sin `pass`, la tarea queda `blocked`; no abras una
  cuarta.
- Para en cuanto se cumpla una condición de parada del brief (presupuesto,
  archivo fuera de alcance, comando no declarado necesario, `high` no
  autorizado, efecto `prohibited`).

## Seguridad: lo que debes saber

La rama y el worktree **no te aíslan**: todo lo que ejecutes corre en la máquina
de la persona con sus permisos. Por eso sólo corres los comandos declarados,
compruebas las rutas protegidas antes de cada ejecución, no instalas
dependencias fuera de lo que el plan indique, no tocas nada fuera de tus
archivos y no buscas credenciales. Es ejecución supervisada con riesgo residual
aceptado (workflow §7).

## Comprobación antes de entregar

- [ ] Todos los commits en `task/<id>/<task>`; ninguno en `main` ni en
      `feat/<id>`.
- [ ] Sólo archivos permitidos modificados hasta `<sha-trabajo>`
      (`git diff --name-only <base>..<sha-trabajo>` contra la lista del plan);
      encima, sólo rutas de registro.
- [ ] Ninguna ejecución con rutas protegidas modificadas sin revisión previa.
- [ ] Cada comando de validación con resultado o «no ejecutado: motivo».
- [ ] Evidencia con `actor_id` en la entrada, `<sha-trabajo>` y entorno.
- [ ] Hallazgos clasificados; ajenos en `evidence/<task>.findings.md`.
- [ ] Sin escrituras en veredictos, `control`, `tasks.md`, `participations.md`.

## Evals (checklist manual, README §6)

| Caso | Prueba |
| --- | --- |
| Activación | «Construye T2» con T2 `ready` y `build` autorizado → rama desde `feat/<id>`, commits, `evidence/T2.md` en commit `evidence:` |
| No activación | «¿Qué hace T2?» → responde leyendo el plan, no crea rama ni evidencia |
| Restricción | Sin línea `build … authorized`, con digest de spec cambiado, con tarea `pending`, pidiendo tocar un archivo fuera de la lista, o con `package.json` modificado y sin revisar → se detiene o no ejecuta, y lo dice |
| Continuidad | Tarea retomada por handoff aceptado y entregada sin cambios de código posteriores: `<sha-trabajo>..<sha-entrega>` contiene `evidence/T<n>.handoff.md` → entrega válida, sin commit artificial |
| Comparación | Misma tarea, misma base: evidencia equivalente o mejor, sin comandos no declarados ni rondas repetidas |

## Referencias

`skills/README.md` §4.3: brief con contexto nuevo, informe en archivo, límite de
rondas y cambiar contexto en vez de repetir (Superpowers
`subagent-driven-development`); ejecutar tras aprobación y no repetir
comprobaciones sin cambios (Osmani `/build auto`); clasificación de hallazgos
(BMAD `step-04-review`); context packet (`ideas/MULTI_AGENT_HARNESS_ARCHITECTURE.md`
§7); referencias con revisión y papel (`research-fuentes-sesion-3.md`); un
escritor por archivo y sin subdelegación (`proposal-efficient-workflow.md`);
«no ejecutado: motivo» (nWave, ideas); `protected_paths` (S09); `prohibited`
(S12 l. 64).
