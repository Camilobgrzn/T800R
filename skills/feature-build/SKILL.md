---
name: feature-build
description: Ejecuta una tarea autorizada del plan dentro de su brief, en su propia rama feat/<id>/<task>, tocando sólo los archivos permitidos y corriendo sólo los comandos de validación declarados; deja evidencia append-only en evidence/<task>.md y clasifica cualquier hallazgo. Úsala con una tarea `ready` de un incremento con build autorizado, o al volver de un fail mientras queden rondas. No la uses sin autorización en control, con dependencias pendientes, agotadas las tres rondas ni en main.
---

# /feature-build <task>

Etapa `build` ([workflow-construccion.md](../../docs/workflow-construccion.md)
§4.3; [README](../README.md) §4.3). La ejecuta el **worker**, un actor con
`actor_id` propio que recibe un brief con contexto nuevo. El orchestrator asigna
la tarea antes; el worker no se autoasigna.

## Qué produce

- Commits en la rama `feat/<id>/<task>` (nunca en `main`).
- `features/<id>/evidence/<task>.md`, append-only, según
  [references/evidence-template.md](references/evidence-template.md): cabecera
  con `actor_id`, y una entrada por ronda con SHA, comandos, resultados, entorno
  y «no ejecutado: motivo».
- Hallazgos clasificados; los ajenos al alcance en `features/<id>/findings.md`.

## Qué no hace

- No escribe veredictos, `control`, `tasks.md` ni `participations.md`.
- No ejecuta integración ni merge.
- No toca archivos fuera de los permitidos: si lo necesita, **bloquea la tarea**
  y lo reporta; no amplía el alcance por su cuenta.
- No ejecuta comandos que no estén en «Validación» del plan.
- No lanza otros workers ni subagentes que escriban.
- No recibe ni busca secretos; si un comando los necesita, «no ejecutado: motivo».
- No repite una ronda sin cambios.

## Precondiciones mecánicas

Compruébalas y anótalas en la primera entrada de evidencia.

1. `git show control:approvals/<id>.md` contiene `build <digest-plan> on spec
   <digest-spec> authorized` (o `build <digest-plan> authorized` en un
   `acotado`) y `git hash-object features/<id>/plan.md` coincide con
   `<digest-plan>`. Si no coincide, el plan cambió tras autorizarse: detente.
2. En `tasks.md` la tarea está `ready` o `in_progress` con tu `actor_id` como
   owner; sus `depends_on` están `completed`; `Ronda` < 3.
3. En `participations.md` existe la línea `assigned` (o `transferred`) de esta
   tarea con tu `actor_id`.
4. El brief ([references/brief-template.md](references/brief-template.md))
   está completo: objetivo, aceptación, archivos permitidos, referencias con
   revisión y papel, comandos de validación, presupuesto, condiciones de parada.
5. Rama `feat/<id>/<task>` creada desde la base indicada en el brief (por
   defecto `main` actual); árbol limpio.

## Procedimiento

1. **Registra el inicio** en `evidence/<task>.md` (nueva entrada de ronda con
   SHA base, entorno: SO, `node --version`, hash del lockfile) y pide al
   orchestrator la línea `started` en `participations.md`.
2. **Lee sólo lo del brief**: spec (los `CA` de la tarea), la tarea en el plan,
   las referencias listadas. No cargues la conversación anterior ni otras
   tareas.
3. **Tests primero** si la tarea lo marca: escribe la prueba que falla contra el
   criterio de aceptación y confírmalo ejecutando el comando de validación.
4. **Implementa** dentro de los archivos permitidos, en commits pequeños con
   mensajes que citen la tarea (`T3: …`).
5. **Valida**: ejecuta exactamente los comandos declarados; copia salida
   resumida y código de salida a la evidencia. Lo que no puedas ejecutar va
   como «no ejecutado: motivo» (falta herramienta, requiere secreto, requiere
   red). Nunca lo marques como pasado.
6. **Clasifica cada hallazgo** que aparezca:
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
     `findings.md` con ruta y descripción; no lo toques.
7. **Rutas protegidas**: si la tarea es `high` porque toca `protected_paths`
   (`package.json` scripts, hooks, CI, lockfiles, `policy.yaml`, `skills/`,
   configuración de agentes), **no ejecutes ningún comando** sobre esos archivos
   modificados hasta que un veredicto haya revisado **esa versión** de los
   archivos (mismo `git hash-object` de cada uno); anótalo como «no ejecutado:
   pendiente de revisión de protected_paths». El verifier los revisa y, si son
   justificados, ejecuta él las validaciones en su veredicto. En una ronda
   posterior puedes ejecutarlas tú sólo si no volviste a cambiar esos archivos.
8. **Efectos `high`**: el efecto protegido (p. ej. una migración destructiva
   o un push fuera del repositorio) lo ejecutas tú, y sólo después de comprobar
   que existe `high <digest> approved` en `control:approvals/<id>.md` para el
   digest que preparó el verifier (`<id>/T<n> <sha> <efecto>`), releyendo la
   rama `control` justo antes de ejecutarlo. Si el efecto es integrar, lo hace la
   persona con `/feature-integrate`.
9. **Entrega**: último commit, entrada final en la evidencia con el SHA
   entregado y el resumen de criterios cubiertos; pide al orchestrator la línea
   `delivered`. Retorno breve a quien coordina (≈300 palabras orientativas):
   SHA, qué se validó, qué no y por qué, hallazgos clasificados.

## Rondas y parada

- Una ronda es un par build → verify. Al volver de un `fail`, nueva entrada en
  la evidencia con el motivo del `fail` y qué cambia esta vez. **Nunca repitas
  lo mismo**: si no hay información nueva, dilo y pide cambio de contexto,
  tamaño de tarea o modelo.
- Al agotar la tercera ronda sin `pass`, la tarea queda `blocked`; no abras una
  cuarta.
- Para en cuanto se cumpla una condición de parada del brief (presupuesto,
  archivo fuera de alcance, comando no declarado necesario, `high` no
  autorizado).

## Seguridad: lo que debes saber

La rama y el worktree **no te aíslan**: todo lo que ejecutes corre en la máquina
de la persona con sus permisos. Por eso sólo corres los comandos declarados, no
instalas dependencias fuera de lo que el plan indique, no tocas nada fuera de tus
archivos y no buscas credenciales. Es ejecución supervisada con riesgo residual
aceptado (workflow §7).

## Comprobación antes de entregar

- [ ] Todos los commits en `feat/<id>/<task>`; ninguno en `main`.
- [ ] Sólo archivos permitidos modificados (`git diff --name-only <base>..HEAD`
      contra la lista del plan).
- [ ] Cada comando de validación con resultado o «no ejecutado: motivo».
- [ ] Evidencia con `actor_id`, SHA entregado y entorno.
- [ ] Hallazgos clasificados; ajenos en `findings.md`.
- [ ] Sin escrituras en veredictos, `control`, `tasks.md`, `participations.md`.

## Evals (checklist manual, README §6)

| Caso | Prueba |
| --- | --- |
| Activación | «Construye T2» con T2 `ready` y `build` autorizado → rama, commits y `evidence/T2.md` |
| No activación | «¿Qué hace T2?» → responde leyendo el plan, no crea rama ni evidencia |
| Restricción | Sin línea `build … authorized`, o con tarea `pending`, o pidiendo tocar un archivo fuera de la lista → se detiene y lo dice |
| Comparación | Misma tarea, misma base: evidencia equivalente o mejor, sin comandos no declarados ni rondas repetidas |

## Referencias

[README](../README.md) §4.3: brief con contexto nuevo, informe en archivo,
límite de rondas y cambiar contexto en vez de repetir (Superpowers
`subagent-driven-development`); ejecutar tras aprobación y no repetir
comprobaciones sin cambios (Osmani `/build auto`); clasificación de hallazgos
(BMAD `step-04-review`); context packet (`ideas/MULTI_AGENT_HARNESS_ARCHITECTURE.md`
§7); referencias con revisión y papel (`research-fuentes-sesion-3.md`); un
escritor por archivo y sin subdelegación (`proposal-efficient-workflow.md`);
«no ejecutado: motivo» (nWave, ideas); `protected_paths` (S09).
