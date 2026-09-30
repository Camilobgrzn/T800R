---
name: session-handoff
description: Cierra una sesión de trabajo dejando todo en commit (wip: si hace falta) y un features/<id>/handoff.md con Resultado, Validación, Pendiente y Contexto que enlaza artefactos y SHA, para que otra sesión u otro proveedor continúe sin leer el chat. Úsala al cerrar con trabajo pendiente, al transferir ownership o antes de agotar el presupuesto. No la uses cuando no hay nada que entregar o el trabajo aún no está en la rama de la tarea.
---

# /session-handoff

Transversal ([workflow-construccion.md](../../docs/workflow-construccion.md)
§4.6; [README](../README.md) §4.6). La ejecuta quien cierra la sesión (worker,
verifier o integrador).

## Qué produce

- Un commit `wip: <tarea> <qué queda>` con **todo** lo pendiente (staged,
  unstaged y archivos nuevos pertinentes) en la rama de la tarea. Sin commit no
  hay handoff.
- `features/<id>/handoff.md` según
  [references/handoff-template.md](references/handoff-template.md): Resultado,
  Validación (o «no ejecutada: motivo»), Pendiente, Contexto; enlaza, no copia.

## Qué no hace

- No transfiere ownership: eso lo registra el orchestrator en
  `participations.md` cuando el receptor acepte.
- No cambia el estado de la tarea en `tasks.md`.
- No duplica spec, plan ni evidencia: los enlaza con su SHA.
- No escribe en un directorio temporal ni fuera de `features/<id>/`.
- No entrega trabajo sin commit ni con árbol sucio.

## Precondiciones mecánicas

1. Rama de la tarea activa (`feat/<id>/T<n>` o `feat/<id>/integrate`).
2. Tras el commit `wip:`, `git status --porcelain` vacío.
3. `tasks.md` y `participations.md` legibles; la tarea tiene owner en
   `tasks.md` y ese owner es tu `actor_id` (si no, no es tu handoff).
4. `evidence/<task>.md` tiene al menos la entrada de la ronda en curso.

## Procedimiento

1. **Commit de cierre.** `git add -A` limitado a los archivos permitidos de la
   tarea más `features/<id>/`; `git commit -m "wip: T<n> <estado en cinco
   palabras>"`. Si hay archivos fuera de los permitidos modificados, no los
   incluyas: anótalos en «Pendiente» como hallazgo y déjalos fuera del commit
   sólo si son tuyos por error; si son de otra tarea, es una escritura indebida
   y debe constar.
2. **Toma los SHA.** `git rev-parse HEAD` (último commit), SHA base de la rama
   (del brief), `git hash-object features/<id>/tasks.md` y `git hash-object
   features/<id>/participations.md`.
3. **Escribe `handoff.md`** con la plantilla. En «Validación», cada comando
   declarado con resultado o «no ejecutada: motivo»; nunca «pendiente» a secas.
   En «Pendiente», la **próxima acción concreta** (un verbo y un objeto), no una
   lista de deseos. En «Contexto», sólo decisiones tomadas durante la sesión
   que no estén ya en spec, plan o evidencia, con su fuente.
4. **Añade la entrada a la evidencia**: una línea en `evidence/<task>.md`
   («handoff emitido, sha …») y commit.
5. **Pide al orchestrator** la línea `handoff_emitted` (o `transferred` si hay
   receptor designado) en `participations.md`. Tú no la escribes.
6. **Retorno breve**: ruta del handoff, SHA, próxima acción, y si el receptor
   debe ser un `actor_id` concreto (p. ej. para verificar, uno distinto del
   worker).

## Comprobación antes de cerrar

- [ ] Árbol limpio tras el commit `wip:`.
- [ ] `handoff.md` con los cuatro bloques y todos los SHA.
- [ ] Ningún artefacto duplicado; todo enlazado.
- [ ] Próxima acción concreta y una sola.
- [ ] Nada escrito fuera de la rama de la tarea y `features/<id>/`.

## Evals (checklist manual, README §6)

| Caso | Prueba |
| --- | --- |
| Activación | «Cierro por hoy» con T2 a medias → commit `wip:` y `handoff.md` |
| No activación | «Cierro» con T2 ya entregada y sin cambios → responde que no hay nada que entregar |
| Restricción | Árbol con cambios en archivos fuera de los permitidos → los excluye y los reporta; sin commit → no escribe handoff |
| Comparación | Misma situación: mismo contenido esencial, sin copiar spec ni plan |

## Referencias

[README](../README.md) §4.6: cuatro bloques
(`ideas/propuesta-harness-multiagente.md` l. 184-189), enlazar en vez de
duplicar y no usar temporal (Pocock `handoff`, límite), campos verificables y
caducidad (`ideas/MULTI_AGENT_HARNESS_ARCHITECTURE.md` §9), cierre con commit
verificable (§11), informes en archivo (Superpowers).
