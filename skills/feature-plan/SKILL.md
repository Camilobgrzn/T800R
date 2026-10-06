---
name: feature-plan
description: Descompone una spec aprobada (o un acotado) en tareas verticales con interfaces, archivos permitidos, comandos de validación y riesgo; comprueba la coherencia spec↔plan; emite el readiness PASS/CONCERNS/FAIL y deja listo el gate 2 (autorizar build). Inicializa tasks.md y participations.md sólo la primera vez. Úsala con spec aprobada, para un acotado directamente, o para replanificar (defecto de spec, reclasificación de un acotado, cambio de alcance pedido por la persona, rondas agotadas). No la uses para cambiar un plan con build autorizado fuera de esas cuatro entradas, que reabren el gate 2.
---

# /feature-plan

Etapa `design` del flujo de construcción (`docs/workflow-construccion.md` §4.2;
catálogo en `skills/README.md` §4.2; rutas desde la raíz del repositorio). La
ejecuta el planner desde el checkout de coordinación en la rama `feat/<id>`
(workflow §2.1). Orden fijo: **tareas → coherencia → readiness**; nunca
readiness primero.

## Qué produce

- `features/<id>/plan.md` según [references/plan-template.md](references/plan-template.md).
- **Sólo en la primera ejecución**: `features/<id>/tasks.md` con todas las
  tareas en `pending` y `features/<id>/participations.md` sin eventos
  ([references/tasks-template.md](references/tasks-template.md),
  [references/participations-template.md](references/participations-template.md)).
  Es el único momento en que el planner los escribe; después son del
  orchestrator.
- La línea exacta que la persona registrará en `control:approvals/<id>.md` si
  autoriza: `build <digest-plan> on spec <digest-spec> authorized` (para un
  `acotado`, `build <digest-plan> authorized`).

## Qué no hace

- No autoriza `build` ni escribe en `control`.
- No escribe código, rutas de solución ni pseudocódigo en el plan: el brief del
  worker lleva referencias, no soluciones.
- No muta `tasks.md` ni `participations.md` después de inicializarlos.
- No reinicia registros al replanificar.
- No decide incógnitas de comportamiento: un `FAIL` devuelve a `/feature-spec`.

## Precondiciones mecánicas

1. **Spec aprobada** (salvo `acotado`): `git show control:approvals/<id>.md`
   contiene `spec <digest> approved` y `git hash-object features/<id>/spec.md`
   coincide con ese digest. Si no coincide, detente: la spec cambió después de
   aprobarse.
2. **Sin `build` vigente para este plan**, o se está **replanificando** por una
   de estas cuatro entradas, que anotas en «Replanificación»: **defecto de
   spec** (hallazgo en un `evidence/<task>.md` o un `.verdict.md`;
   `evidence/<task>.findings.md` no cuenta, es para hallazgos ajenos); **reclasificación** de
   un `acotado` (ahora existe `spec.md` aprobada); **cambio de alcance** pedido
   por la persona en esta sesión; **rondas agotadas** en una tarea (`blocked`
   con nota «rondas agotadas» en `tasks.md`: se cambia su tamaño). En
   cualquier otro caso, un `plan.md` con `build … authorized` es inmutable:
   detente y dilo.
3. Para un `acotado`: no existe `spec.md`; la descripción cabe en la sección
   «Spec del acotado» del plan. La rama `feat/<id>` se crea aquí desde `main`
   si no existe.
4. Si existe `policy.yaml`, lee `protected_paths` y los niveles declarados
   para el riesgo por tarea.

## Procedimiento

### Paso 1. Tareas verticales

Descompón en tareas que entreguen cada una un comportamiento comprobable de
extremo a extremo (no «modelo», «servicio», «UI» por capas). Cada tarea declara:

- `id` (`T1`, `T2`, …), objetivo en una frase y **criterio de aceptación
  propio** trazado a los `CA` de la spec.
- **Interfaces consumidas y producidas** (módulos, comandos, archivos de
  configuración, endpoints).
- **Archivos permitidos**: rutas o globs que la tarea puede tocar. Ownership de
  rutas: dos tareas sólo pueden ir en paralelo si sus archivos son disjuntos y
  sus interfaces ya están acordadas; máximo dos workers a la vez.
- **Dependencias** (`depends_on`).
- **Comandos de validación** deterministas que debe dejar en verde (tests,
  tipos, lint, build, arranque). Son los únicos comandos que **ejecutan código
  del repositorio** que el worker podrá correr (workflow §2.1, clases de
  comando); la inspección y la coordinación con Git no necesitan declararse.
- **Riesgo**: `routine` o `high` (hereda el de la spec si toca su disparador o
  un `protected_path`).
- **Tests primero**: `sí` cuando el criterio describe comportamiento observable y
  existe harness de pruebas; `no` con el motivo en caso contrario. No es regla
  universal.

Tamaño orientativo: una tarea debe caber en una sesión de worker con hasta tres
rondas. Si no, divídela.

### Paso 2. Coherencia spec ↔ plan

Tabla de cobertura: cada `CA` de la spec cubierto por al menos una tarea; cada
tarea trazada a al menos un `CA` o justificada como habilitadora. Lista
ambigüedades (dos lecturas posibles) y contradicciones (plan que exige lo que la
spec excluye). Una ambigüedad de comportamiento no se resuelve aquí: es
candidata a `FAIL` o `CONCERNS`.

### Paso 3. Readiness

Pregunta única: **«¿puede implementarse sin inventar decisiones no
registradas?»** Evalúa cobertura, dependencias, permisos, incógnitas y
`protected_paths`. Lo mecánico lo comprueba la skill (lista abajo); el juicio
sobre incógnitas lo redacta el planner con la evidencia.

- `PASS`: todo cubierto, sin incógnitas de comportamiento.
- `CONCERNS`: lista numerada de lo que la persona debe aceptar o resolver en el
  gate 2 (p. ej. dependencia externa no fijada, riesgo `high` sin plan de
  reversión definido).
- `FAIL`: falta una decisión de comportamiento; devuelve a `/feature-spec` con
  la pregunta concreta. No escribas `tasks.md` en este caso.

Comprobaciones mecánicas obligatorias (marca cada una en el plan):

- [ ] Cada tarea tiene criterio de aceptación, archivos permitidos y al menos
      un comando de validación.
- [ ] Cada `CA` aparece en la tabla de cobertura.
- [ ] Ningún par de tareas paralelas comparte archivos.
- [ ] Ningún comando de validación toca `protected_paths` sin que la tarea sea
      `high`.
- [ ] Las tareas `high` tienen anotado que exigen aprobación `local` antes del
      efecto, y si el `high` es un efecto en ejecución (fase de efecto,
      workflow §4.3) o un cambio en `protected_paths`. (El verifier con
      `actor_id` distinto es universal, no sólo para `high`.)
- [ ] Ninguna tarea exige un efecto `prohibited` (S12 l. 64 o `policy.yaml`);
      si la spec lo pide, `FAIL` y vuelve a `/feature-spec`.

Un actor distinto del planner revisa el readiness **sólo** si el riesgo o la
incertidumbre lo justifican; no es un gate rutinario.

### Paso 4. Inicialización o replanificación

- **Primera ejecución**: crea `tasks.md` (todas en `pending`, `owner` vacío) y
  `participations.md` (cabecera y sin eventos).
- **Replanificación** (cualquiera de las cuatro entradas): no toques
  `participations.md` ni `evidence/`. En `plan.md` añade la sección
  «Replanificación» con: la entrada y qué cambió, qué tareas quedan
  **afectadas** (tú las identificas; el orchestrator registra el evento
  `invalidated` de cada una en `participations.md`, que es lo que invalida su
  evidencia y sus veredictos, y las devuelve a `pending`), qué tareas
  **independientes** continúan sin interrupción y qué tareas nuevas aparecen.
  Una tarea ya `merged` en `feat/<id>` que quede afectada se corrige con una
  tarea nueva sobre esa base, no borrando historia. Conserva los `id`
  existentes; los nuevos siguen la numeración. Pide al orchestrator que añada
  las tareas nuevas a `tasks.md` en `pending`. Esto **reabre el gate 2**: la
  persona debe registrar una nueva línea `build … authorized` con el nuevo
  digest.

### Paso 5. Digest y entrega

Comete `plan.md` (y, la primera vez, `tasks.md` y `participations.md`) en
`feat/<id>` (`coord: plan <id>`). `git hash-object features/<id>/plan.md` sobre
el archivo guardado; **no lo escribas dentro del archivo** (cambiaría el hash).
Entrega a la persona: ruta, digest del plan, digest de la spec,
readiness con sus `CONCERNS` si los hay, número de tareas y cuáles pueden ir en
paralelo, tareas `high`, y la línea exacta para `control:approvals/<id>.md`.
Recuerda: desde que se registre esa línea, `plan.md` es inmutable; el progreso
vive en `tasks.md`.

## Comprobación antes de entregar

- [ ] Ninguna tarea sin aceptación, archivos permitidos o validación.
- [ ] Tabla de cobertura completa; ambigüedades y contradicciones listadas.
- [ ] Readiness con resultado y evidencia; `CONCERNS` numerados.
- [ ] Sin código ni soluciones en el plan.
- [ ] `tasks.md` y `participations.md` creados sólo si no existían.
- [ ] Digest calculado sobre el archivo final y no escrito dentro de él.

## Evals (checklist manual, README §6)

| Caso | Prueba |
| --- | --- |
| Activación | Spec aprobada del catálogo del IDP → `plan.md` con tareas, cobertura y readiness; `tasks.md` y `participations.md` creados |
| No activación | «¿Qué tareas quedan?» → responde leyendo `tasks.md`, no genera un plan nuevo |
| Restricción | Con `build … authorized` vigente y sin ninguna de las cuatro entradas de replanificación, pedir «añade una tarea» → se niega y explica que exige replanificación (cambio de alcance declarado por la persona) y nueva autorización |
| Comparación | Misma spec, misma base: cobertura igual o mejor, sin tareas por capas ni código en el plan |

## Referencias

Prácticas y su origen en `skills/README.md` §4.2: tareas con interfaces
(Superpowers `writing-plans`), incrementos verticales (Pocock `to-tickets`),
aceptación y archivos por tarea (Osmani), `analyze` (Spec Kit), readiness (BMAD
`readiness-gate`, S04 l. 82-83 y 275), profundidad proporcional (BMAD),
comprobaciones mecánicas (nWave), un escritor por archivo y dos workers
(`proposal-efficient-workflow.md`), tests primero cuando procede (Pocock).
