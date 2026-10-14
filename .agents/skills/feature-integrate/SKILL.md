---
name: feature-integrate
description: Prepara la candidata completa de una feature (la rama feat/<id> con cada tarea completed verificada y merged, o cancelled con aceptación, dependencias reconciliadas y disposición del código, más el cierre documental), la verifica integrada sobre la base exacta de main con las validaciones globales y deja lista la aprobación del gate 3 como par (sha-candidato, sha-main-base); el merge lo ejecuta la persona. Úsala cuando cada tarea del plan está completed (veredicto pass o concerns vigente o ratificado, actor_id elegible, merged) o cancelled con esas condiciones. No la uses con tareas en otro estado, con una completed sin veredicto vigente, con una rama de tarea movida tras su entrega, ni para desplegar a un entorno.
---

# /feature-integrate

Etapa `deploy` en su forma del v0: integrar en `main`
(`docs/workflow-construccion.md` §4.5; `skills/README.md` §4.5; rutas desde la
raíz del repositorio). La ejecuta el **integrador** (en bootstrap, la persona o
la sesión que coordina) desde el checkout de coordinación; el merge lo ejecuta
la persona. La candidata es la propia rama **`feat/<id>`** (workflow §2.1): no
se crea otra rama.

## Qué produce

- La **candidata** `feat/<id>` actualizada sobre `main` con el cierre
  documental: consolidación del delta en `specs/`. **`spec.md` y `plan.md` no
  se tocan** (su digest está autorizado; cambiarlos rompería la autorización
  en cualquier reejecución): que la feature está implementada lo atestan
  `specs/` y `integrated <sha-merge>` en `control`. En un `acotado` el cierre
  es sólo `evidence/README.md`.
- `<sha-verificado>`: HEAD tras el cierre documental, sobre el que corren las
  **validaciones globales**.
- `evidence/README.md` (consolidado de veredictos y validaciones) en un commit
  de registro `evidence: integración <id>` encima de `<sha-verificado>`; ese
  HEAD es `<sha-candidato>`.
- El comando de merge preparado y la línea exacta para
  `control:approvals/<id>.md`: `merge <sha-candidato> onto <sha-main-base>
  approved`.

## Qué no hace

- No hace merge. No modifica nada después del merge; la única atestación
  posterior (`integrated <sha-merge>`) la escribe la persona en `control`.
- No aprueba `concerns` pendientes ni efectos `high`.
- No convierte «no ejecutado» en «aprobado».
- No despliega a ningún entorno (fuera del v0; será `high`).
- Si `main` avanzó desde la base verificada, no fuerza: vuelve a actualizar,
  verificar y pedir nueva aprobación.

## Precondiciones mecánicas

1. **Autorización vigente**: `git show control:approvals/<id>.md` contiene
   `build <digest-plan> on spec <digest-spec> authorized` (o `build
   <digest-plan> authorized`) y ambos digests coinciden con los archivos
   actuales de `feat/<id>`.
2. Cada tarea del plan en `tasks.md` está `completed` o `cancelled`; nada en
   otro estado. Las **`completed`** tienen evento `merged` en
   `participations.md`.
3. Para cada **`completed`**, `evidence/<task>.verdict.md` termina en `pass` o
   `concerns` (si hubo fase de efecto, en la comprobación posterior con
   `pass`/`concerns`; un `ready_for_effect` sin comprobación posterior no
   cierra), es **posterior al último `invalidated`** de su tarea y cita los
   digests vigentes **o** termina en una «Ratificación» que los cita (evento
   `ratified`; una conservada no terminal que entregó después de la
   replanificación ya cita los digests nuevos y no necesita ratificación); los
   `concerns` figuran en la lista que la persona aceptará en el gate 3.
3b. Para cada **`cancelled`** (S04 l. 102) no se exige entrega, veredicto ni
   merge; se exige: evento `cancelled` con razón e impacto; cambio de alcance
   aceptado (`scope <digest-plan> cancelled T<n> accepted` en
   `control:approvals/<id>.md`, o `superseded by T<m>` aceptado por la línea
   `build … authorized` renovada); dependencias reconciliadas (ninguna tarea
   del plan vigente depende de ella; sus dependientes fueron recableadas);
   disposición del código parcial anotada (rama `task/<id>/T<n>` sin merge
   borrada o conservada como referencia; si algo suyo se había integrado en
   `feat/<id>`, la tarea `completed` que lo retira o corrige).
4. **Elegibilidad de cada veredicto**: el `actor_id` de cada veredicto no
   aparece en `participations.md` como worker u owner de esa tarea; la línea
   `verdict` existe. Si falta o es incoherente, la feature vuelve a `verify`.
5. **Escrituras indebidas**: es una **revisión manual de la persona**, no una
   comprobación automática. La autoría Git no distingue actores (los tres
   proveedores cometen con el mismo `user.name`; workflow §7). La persona repasa
   `git log -p control -- approvals/<id>.md` y, en `feat/<id>`, los commits
   `coord:` y `verdict:` (`participations.md`, `tasks.md`, `.verdict.md`)
   buscando líneas que no reconozca haber escrito o que no correspondan al
   actor declarado. Si encuentra una, registra el incidente en
   `evidence/README.md` y la feature vuelve a `verify`.
6. Cada rama `task/<id>/T<n>` de una tarea `completed` sigue en el
   `<sha-entrega>` que se integró (`merged`); nadie la movió después.
7. Tareas `high`: existe `high <digest> approved` en `control` para cada una.
8. **Checkout de coordinación limpio** (protocolo de commit, workflow §2.1):
   `git status --porcelain` vacío antes de empezar; cambios o staged ajenos →
   no los toques y escala.

## Procedimiento

1. **Actualiza la candidata sobre `main`.** En `feat/<id>`:
   `<sha-main-base>` = `git rev-parse main`; `git merge main`. Resuelve
   conflictos; si un conflicto cambia el comportamiento de una tarea, esa tarea
   vuelve a `verify` (nueva ronda sobre la base actualizada).
2. **Cierre documental dentro de la candidata** (antes de verificar, nunca
   después del merge): si la feature cambió comportamiento vigente, consolida
   el delta en `specs/` (specs vigentes) y deja `features/<id>/` como
   historial; commit `coord: cierre <id>` con el protocolo de commit (lista
   explícita; `--cached` igual a la lista; toca `specs/`, así que no es un
   commit de registro). **No toques `spec.md` ni `plan.md`**: sus digests
   están autorizados y la precondición 1 volvería a fallar. En el mismo commit
   escribe `features/<id>/metrics.md` con las métricas del workflow §8 hasta
   la candidata (tiempo hasta primera evidencia, rondas por tarea, reaperturas
   de spec, rechazos de handoff, `intent gap`, tokens si el proveedor los
   expone, reejecuciones por validación no determinista) y la línea
   «capacidad ausente detectada → destino (`lesson`, tarea o regla)» o
   «ninguna»; el tiempo del gate 3 no se escribe aquí, se deriva de los
   commits de `control`. En un `acotado` no hay `spec.md` ni cambio de
   comportamiento: este paso comete sólo `metrics.md`.
   `<sha-verificado>` = `git rev-parse HEAD`.
3. **Validaciones globales sobre `<sha-verificado>`**: dependencias fijadas
   (lockfile sin cambios no justificados); tipos, lint y build disponibles;
   arranque local; comprobación reproducible del comportamiento incorporado
   (para el IDP: catálogo o TechDocs según la feature). Son los comandos
   declarados para la integración en el plan o en el repositorio. Si el
   repositorio aún no tiene suite, regístralo y aporta una **aceptación
   focalizada**: pasos reproducibles que demuestran cada `CA`. «No ejecutado»
   no es «aprobado». Antes de ejecutar aplica la regla de rutas protegidas del
   workflow §4.3 sobre `git diff --name-only <sha-main-base>..<sha-verificado>`.
4. **Registra el par.** Escribe `evidence/README.md` según
   [references/integration-evidence-template.md](references/integration-evidence-template.md)
   con `<sha-verificado>`, `<sha-main-base>` y los resultados; comete sólo ese
   archivo con el protocolo de commit: `git add --
   features/<id>/evidence/README.md`; `git diff --cached --name-only` lista
   sólo ese archivo (si no, `git reset -q` y escala); `git commit -m
   "evidence: integración <id>"`. `<sha-candidato>` = `git rev-parse HEAD`.
   Comprueba `git diff --name-only <sha-verificado>..<sha-candidato>` ⊆
   conjunto «Integrador, candidata» de la tabla de rutas por operación
   (workflow §2.1: sólo `features/<id>/evidence/README.md`) y `git merge-base
   --is-ancestor <sha-main-base> <sha-candidato>`.
5. **Prepara el gate 3.** Entrega a la persona: lista de `concerns` a aceptar,
   tareas `high` y sus aprobaciones, tareas canceladas con su base de
   aceptación, observaciones de calidad marcadas «repetida» y validaciones no
   deterministas repetidas (ambas como candidatas a `acotado`; la persona
   decide si lo abre), resumen de validaciones globales, el par de SHA, y la línea
   `merge <sha-candidato> onto <sha-main-base> approved` (procedimiento de
   `control` del workflow §2.1: escribir, cometer, comprobar con `git show`).
6. **Integración condicional** (la ejecuta la persona): antes del merge
   comprueba que `git rev-parse main` == `<sha-main-base>` y `git rev-parse
   feat/<id>` == `<sha-candidato>`. Si ambos coinciden: `git checkout main &&
   git merge --no-ff feat/<id>`. Si `main` avanzó, vuelve al paso 1 con la
   nueva base; la aprobación anterior no aplica.
7. **Después del merge** (la persona): registra `integrated <sha-merge>` en
   `control:approvals/<id>.md`. **Nada más se escribe**: ni evento en
   `participations.md` ni cambio en el árbol integrado. Sólo entonces se
   proponen notas de conocimiento (con fuente y verificación; la utilidad la
   deciden dos o más criterios) y una skill si una instrucción se repitió tres
   veces (cambio `high`), como features o acotados nuevos.

## Comprobación antes de pedir el gate 3

- [ ] Cada tarea del plan está `completed` (verificada y `merged` en la
      candidata `feat/<id>`) o `cancelled` (aceptación, dependencias
      reconciliadas y disposición del código anotadas); cierre documental
      incluido; candidata actualizada sobre `<sha-main-base>`.
- [ ] Validaciones globales ejecutadas sobre `<sha-verificado>`; ausencias
      registradas con aceptación focalizada.
- [ ] `evidence/README.md` en commit de registro; entre `<sha-verificado>` y
      `<sha-candidato>` sólo ese archivo.
- [ ] `concerns` listados; `high` con aprobación; ningún veredicto anterior a
      un `invalidated`.
- [ ] `features/<id>/metrics.md` en el cierre documental, con la línea de
      capacidad ausente; «repetidas» y no deterministas repetidas listadas.
- [ ] Ninguna escritura indebida detectada.
- [ ] Nada previsto para después del merge salvo `integrated <sha-merge>` en
      `control`.

## Evals (checklist manual, README §6)

| Caso | Prueba |
| --- | --- |
| Activación | Feature con cada tarea `completed` y `merged`, o `cancelled` aceptada → `feat/<id>` actualizada, cierre documental, validaciones y par de SHA |
| No activación | «¿Cuánto falta para integrar?» → responde desde `tasks.md`, no toca la candidata |
| Restricción | Una tarea `fail`, un veredicto con `actor_id` que fue worker, un veredicto anterior a un `invalidated` sin ratificación, o una `cancelled` sin cambio de alcance aceptado → se detiene; `main` avanzado tras la aprobación → no hace merge y pide nueva verificación; `tasks.md` staged ajeno en el checkout → no comete y escala |
| Continuidad | Tarea `cancelled` con `scope … accepted` y dependientes recableadas → integra sin exigirle veredicto ni merge; tarea conservada con «Ratificación» contra los digests nuevos → aceptada |
| Comparación | Misma feature y base: mismo par de SHA y mismas validaciones |

## Referencias

`skills/README.md` §4.5: archivar deltas en specs vigentes y distinguir
implementado de desplegado (OpenSpec), revisión global al cerrar el plan
(Superpowers), reunir informes antes de entregar (Osmani `/ship`), controles
deterministas más gate humano (playbook, S04 l. 86-87), curación con fuente y
verificación (`ideas/MULTI_AGENT_HARNESS_ARCHITECTURE.md` §12), instrucción
repetida → skill (`ideas/propuesta-harness-multiagente.md` l. 323), sin merge
sin aprobación (S12).
