---
name: feature-integrate
description: Prepara la candidata completa de una feature (cierre documental incluido), la verifica integrada sobre la base exacta de main con las validaciones globales y deja lista la aprobación del gate 3 como par (sha-candidato, sha-main-base); el merge lo ejecuta la persona. Úsala cuando todas las tareas tienen veredicto pass o concerns aceptados y cada veredicto tiene actor_id elegible. No la uses con tareas fail o sin veredicto, con árbol distinto del SHA de la evidencia, ni para desplegar a un entorno.
---

# /feature-integrate

Etapa `deploy` en su forma del v0: integrar en `main`
([workflow-construccion.md](../../docs/workflow-construccion.md) §4.5;
[README](../README.md) §4.5). La ejecuta el **integrador** (en bootstrap, la
persona o la sesión que coordina); el merge lo ejecuta la persona.

## Qué produce

- La **rama candidata** `feat/<id>/integrate` con todas las tareas y el cierre
  documental: `spec.md` con `status: implemented`, consolidación en `specs/`,
  `evidence/README.md` (consolidado de veredictos).
- Evidencia de las **validaciones globales** sobre el par
  (`<sha-candidato>`, `<sha-main-base>`), añadida a `evidence/README.md`.
- El comando de merge preparado y la línea exacta para
  `control:approvals/<id>.md`: `merge <sha-candidato> onto <sha-main-base>
  approved`.

## Qué no hace

- No hace merge. No modifica nada después del merge.
- No aprueba `concerns` pendientes ni efectos `high`.
- No convierte «no ejecutado» en «aprobado».
- No despliega a ningún entorno (fuera del v0; será `high`).
- Si `main` avanzó desde la base verificada, no fuerza: vuelve a actualizar,
  verificar y pedir nueva aprobación.

## Precondiciones mecánicas

1. Todas las tareas del plan en `tasks.md` están `completed` (o `cancelled` con
   cambio de alcance aceptado por la persona).
2. Cada `evidence/<task>.verdict.md` termina en `pass` o en `concerns`; los
   `concerns` figuran en la lista que la persona aceptará en el gate 3.
3. **Elegibilidad de cada veredicto**: el `actor_id` de cada veredicto no
   aparece en `participations.md` como worker u owner de esa tarea; la línea
   `verdict` existe. Si falta o es incoherente, la feature vuelve a `verify`.
4. **Escrituras indebidas**: `git log control -- approvals/<id>.md` sólo tiene
   commits de la persona; `participations.md` y los `.verdict.md` no tienen
   commits de un `actor_id` distinto del que corresponde (comprobación por
   autoría Git, limitada; véase workflow §7). Si detectas una, registra el
   incidente en `evidence/README.md` y devuelve la feature a `verify`.
5. Cada rama `feat/<id>/T<n>` está en el SHA de su última entrega verificada.
6. Tareas `high`: existe `high <digest> approved` en `control` para cada una.

## Procedimiento

1. **Construye la candidata.** Desde `main` actual (`<sha-main-base>` =
   `git rev-parse main`), crea `feat/<id>/integrate` e integra las ramas de las
   tareas en orden de dependencias. Resuelve conflictos; si un conflicto cambia
   el comportamiento de una tarea, esa tarea vuelve a `verify`.
2. **Cierre documental dentro de la candidata** (antes de verificar, nunca
   después del merge): `spec.md` → `status: implemented`; si la feature cambió
   comportamiento vigente, consolida el delta en `specs/` (specs vigentes) y
   deja `features/<id>/` como historial; genera `evidence/README.md` según
   [references/integration-evidence-template.md](references/integration-evidence-template.md).
3. **Validaciones globales sobre la candidata integrada**: dependencias fijadas
   (lockfile sin cambios no justificados); tipos, lint y build disponibles;
   arranque local; comprobación reproducible del comportamiento incorporado
   (para el IDP: catálogo o TechDocs según la feature). Si el repositorio aún no
   tiene suite, regístralo y aporta una **aceptación focalizada**: pasos
   reproducibles que demuestran cada `CA`. «No ejecutado» no es «aprobado».
4. **Registra el par.** `<sha-candidato>` = `git rev-parse feat/<id>/integrate`
   tras el cierre documental y las validaciones; `<sha-main-base>` el de partida.
   Ambos en `evidence/README.md` con los resultados.
5. **Prepara el gate 3.** Entrega a la persona: lista de `concerns` a aceptar,
   tareas `high` y sus aprobaciones, resumen de validaciones globales, el par de
   SHA, y la línea `merge <sha-candidato> onto <sha-main-base> approved`.
6. **Integración condicional** (la ejecuta la persona): antes del merge
   comprueba que `git rev-parse main` == `<sha-main-base>` y `git rev-parse
   feat/<id>/integrate` == `<sha-candidato>`. Si ambos coinciden, merge
   (`git merge --no-ff feat/<id>/integrate`). Si `main` avanzó, vuelve al paso
   1 con la nueva base; la aprobación anterior no aplica.
7. **Después del merge** (la persona): registra el SHA de integración en
   `control:approvals/<id>.md` (`integrated <sha-merge>`); pide al orchestrator
   la línea final en `participations.md`. Sólo entonces se proponen notas de
   conocimiento (con fuente y verificación; la utilidad la deciden dos o más
   criterios) y una skill si una instrucción se repitió tres veces (cambio
   `high`).

## Comprobación antes de pedir el gate 3

- [ ] Candidata contiene todas las tareas y el cierre documental.
- [ ] Validaciones globales ejecutadas sobre `<sha-candidato>`; ausencias
      registradas con aceptación focalizada.
- [ ] Par de SHA anotado en `evidence/README.md`.
- [ ] `concerns` listados; `high` con aprobación.
- [ ] Ninguna escritura indebida detectada.
- [ ] Nada previsto para después del merge salvo registrar el SHA.

## Evals (checklist manual, README §6)

| Caso | Prueba |
| --- | --- |
| Activación | Feature con todas las tareas `pass` → rama `integrate`, cierre documental, validaciones y par de SHA |
| No activación | «¿Cuánto falta para integrar?» → responde desde `tasks.md`, no crea la candidata |
| Restricción | Una tarea `fail` o un veredicto con `actor_id` que fue worker → se detiene; `main` avanzado tras la aprobación → no hace merge y pide nueva verificación |
| Comparación | Misma feature y base: mismo par de SHA y mismas validaciones |

## Referencias

[README](../README.md) §4.5: archivar deltas en specs vigentes y distinguir
implementado de desplegado (OpenSpec), revisión global al cerrar el plan
(Superpowers), reunir informes antes de entregar (Osmani `/ship`), controles
deterministas más gate humano (playbook, S04 l. 86-87), curación con fuente y
verificación (`ideas/MULTI_AGENT_HARNESS_ARCHITECTURE.md` §12), instrucción
repetida → skill (`ideas/propuesta-harness-multiagente.md` l. 323), sin merge
sin aprobación (S12).
