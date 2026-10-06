# Plantilla de `features/<id>/tasks.md`

Estado operativo mutable. Vive en la rama `feat/<id>` (workflow §2.1). Lo
inicializa `/feature-plan` una sola vez; después **sólo el orchestrator** lo
edita desde el checkout de coordinación (commits `coord:`). No forma parte del
digest autorizado. Los demás actores lo leen con
`git show feat/<id>:features/<id>/tasks.md`, nunca desde su worktree.

```markdown
# Tareas: <id>

plan_digest_autorizado: <lo rellena el orchestrator al registrarse build … authorized>

| Tarea | Estado | Owner (actor_id) | Depende de | Ronda | Última actualización | Nota |
| --- | --- | --- | --- | --- | --- | --- |
| T1 | pending | | | 0 | <YYYY-MM-DD> | |
| T2 | pending | | T1 | 0 | <YYYY-MM-DD> | |
```

Estados (S04): `pending`, `ready`, `in_progress`, `waiting`, `blocked`,
`completed`, `cancelled`.

Reglas del orchestrator:
- `pending → ready` cuando las dependencias están `completed` **y** ya
  integradas en `feat/<id>` (evento `merged`), y `build` está autorizado para
  el digest vigente.
- Al asignar: se rellena `Owner`, la tarea pasa `ready → in_progress` y se
  registran **`assigned` y `started` juntos** en `participations.md` (el
  worker no espera un relevo del orchestrator para empezar). El brief cita
  como base el SHA actual de `feat/<id>`.
- `fail` del verifier: la tarea **sigue `in_progress`** con el mismo owner,
  `Ronda` + 1 y nota con la clase del hallazgo (S04 l. 99: un hallazgo
  devuelve sólo el ámbito afectado); el orchestrator registra el `verdict`.
- `in_progress → blocked` por `intent gap` (nota: la pregunta a la persona) o
  por rondas agotadas.
- `in_progress → completed` con veredicto `pass` **o `concerns`** del verifier:
  los `concerns` son por definición observaciones sin incumplimiento ni riesgo
  pendiente, de modo que la tarea cumple las condiciones de `completed` de S04;
  se anotan en `Nota` («concerns: ver veredicto») y la persona los acepta en el
  gate 3. Si allí no los acepta, la tarea se reabre (`ready`, nueva ronda).
  El orchestrator registra el veredicto en `participations.md`, cambia el
  estado, integra la rama de la tarea en `feat/<id>` (`git merge --no-ff
  <sha-entrega>`) y registra `merged`. Sólo entonces las dependientes pasan a
  `ready`.
- `Ronda` cuenta rondas de corrección: se incrementa al registrar un `fail`.
  Esperar una aprobación `high`, ejecutar el efecto aprobado y su comprobación
  posterior **no** incrementan `Ronda`. Al registrar el tercer `fail`, la tarea
  pasa a `blocked` con nota «rondas agotadas: cambiar contexto, tamaño
  (replanificar) o modelo».
- Efecto `high` en ejecución: con veredicto previo `ready_for_effect` (no es
  `pass`: no declara cumplimiento) la tarea pasa a `waiting` (nota: `high
  <digest> pendiente`); cuando la persona registra `high <digest> approved` en
  `control`, vuelve a `in_progress` con el mismo owner (nota: `efecto <digest>
  autorizado`) para la fase de efecto; tras la comprobación posterior con
  `pass`/`concerns`, `completed`. Un `fail` posterior cuenta como ronda de
  corrección (`Ronda` + 1) **y** deja la tarea `blocked` con nota «efecto
  fallido: <estado observado>» hasta que la persona decida la recuperación;
  si el efecto a reintentar cambia, su digest cambia y exige nueva aprobación.
- `invalidated` (replanificación): según la disposición del plan, la tarea
  vuelve a `pending` con `Ronda` 0 y nota «rehacer: <motivo>», o pasa a
  `cancelled` con nota «superseded by T<m>»; su evidencia y veredictos
  anteriores no cuentan para integrar. Las conservadas reciben `ratified` y
  no cambian de estado.
- `cancelled` (cualquier estado no terminal, S04): nota con razón e impacto;
  exige cambio de alcance aceptado (`scope … cancelled T<n> accepted` en
  `control`, o sustitución aceptada en el gate 2 renovado), dependientes
  recableadas en el plan y disposición del código parcial (rama sin merge
  borrada o conservada como referencia).
- Todo cambio en este archivo sigue el protocolo de commit del workflow §2.1
  (`coord:`; índice limpio al empezar, lista explícita, `--cached` igual a la
  lista).
