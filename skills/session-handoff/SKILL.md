---
name: session-handoff
description: Cierra una sesión de trabajo dejando todo en commit (wip: si hace falta) y un features/<id>/evidence/<task>.handoff.md de tipo work (worker, rama de tarea) o integrate (integrador, candidata feat/<id>) con Resultado, Validación, Pendiente y Contexto que enlaza artefactos y el SHA del trabajo, para que otra sesión u otro proveedor continúe sin leer el chat. Úsala al cerrar con trabajo pendiente, al transferir ownership o antes de agotar el presupuesto. No la uses cuando no hay nada que entregar, cuando el trabajo aún no está en la rama entregada, ni para una verificación a medias (se descarta y se rehace).
---

# /session-handoff

Transversal (`docs/workflow-construccion.md` §4.6; `skills/README.md` §4.6;
rutas desde la raíz del repositorio). La ejecuta quien cierra la sesión:
un **worker** (tipo `work`, rama `task/<id>/T<n>`) o el **integrador** (tipo
`integrate`, candidata `feat/<id>`). Un verifier no hace handoff: una
verificación a medias se descarta y se rehace con contexto nuevo (workflow
§4.4).

## Qué produce

- Un commit `wip: <tarea> <qué queda>` con **todo** lo pendiente propio
  (staged, unstaged y archivos nuevos pertinentes) en la rama entregada. Sin
  commit no hay handoff. Su SHA es el **SHA del trabajo** (`<sha-trabajo>`); si
  no había nada pendiente, `<sha-trabajo>` es el último commit de trabajo.
- `features/<id>/evidence/<task>.handoff.md` según
  [references/handoff-template.md](references/handoff-template.md): tipo,
  Resultado, Validación (o «no ejecutada: motivo»), Pendiente, Contexto;
  enlaza, no copia. Va en un commit `handoff:` que sólo toca rutas de registro.
- La petición al orchestrator del evento `handoff_emitted` (tipo y
  `<sha-trabajo>`) en `participations.md`, **después** de los commits.

## Qué no hace

- No transfiere ownership: eso lo registra el orchestrator en
  `participations.md` cuando el receptor acepte (`handoff_accepted` y, si
  cambia el owner, `transferred`).
- No cambia el estado de la tarea en `tasks.md`.
- No duplica spec, plan ni evidencia: los enlaza con su SHA.
- No escribe en un directorio temporal ni fuera de la rama entregada.
- No entrega trabajo sin commit ni con árbol sucio.
- No comete cambios ajenos: si el índice o el árbol contienen algo que no es
  tuyo, se detiene.

## Precondiciones mecánicas

1. Rama activa: `task/<id>/T<n>` (tipo `work`) o `feat/<id>` (tipo
   `integrate`).
2. `tasks.md` y `participations.md` legibles (`git show feat/<id>:…`). Si eres
   worker, la tarea tiene tu `actor_id` como owner en `tasks.md` (si no, no es
   tu handoff). El integrador no necesita ser owner de ninguna tarea.
3. Si eres worker, `evidence/<task>.md` tiene al menos la entrada de la ronda en
   curso.
4. Lista de archivos propios: los archivos permitidos de la tarea más tus rutas
   de registro (`evidence/<task>.md`, `evidence/<task>.findings.md`,
   `evidence/<task>.handoff.md`); para `integrate`, el cierre documental más
   `evidence/README.md` y `evidence/integrate.handoff.md`.

## Procedimiento

1. **Inspecciona antes de tocar.** `git status --porcelain` y `git diff
   --cached --name-only`. Cada ruta listada (modificada, nueva o ya staged)
   debe estar en tu lista de archivos propios. Si hay una ruta ajena: si es
   tuya por error, restáurala (`git restore --staged -- <ruta>` y `git
   checkout -- <ruta>`) y repórtalo en «Pendiente»; si no sabes de dónde
   viene, **no la toques, no emitas handoff y escala** (árbol o índice sucio de
   origen desconocido = posible escritura indebida).
2. **Commit del trabajo por lista explícita.** `git add -- <ruta propia 1>
   <ruta propia 2> …` (nunca `-A`, nunca un directorio entero); comprueba que
   `git diff --cached --name-only` es exactamente tu lista; `git commit -m
   "wip: T<n> <estado en cinco palabras>"`. `<sha-trabajo>` = `git rev-parse
   HEAD`. Si no había nada pendiente, `<sha-trabajo>` es el último commit que
   toca algo fuera de las rutas de registro:
   `git log -1 --format=%H -- . ':!features/<id>/tasks.md'
   ':!features/<id>/participations.md' ':!features/<id>/evidence'`.
3. **Escribe `evidence/<task>.handoff.md`** (`evidence/integrate.handoff.md`
   para el tipo `integrate`) con la plantilla citando el tipo, el SHA base,
   `<sha-trabajo>` y si **conservas el worktree** de la rama (lo normal: una
   rama sólo puede estar checkeada en un worktree, y el receptor lo reutiliza
   con `git worktree list`) o lo eliminaste (`git worktree remove`, sólo con
   árbol limpio y tras el commit `handoff:`). En «Validación», cada comando
   declarado con resultado o
   «no ejecutada: motivo»; nunca «pendiente» a secas. En «Pendiente», la
   **próxima acción concreta** (un verbo y un objeto), no una lista de deseos.
   En «Contexto», sólo decisiones tomadas durante la sesión que no estén ya en
   spec, plan o evidencia, con su fuente.
4. **Si eres worker**, añade una línea a `evidence/<task>.md` («handoff
   emitido sobre <sha-trabajo>»). El integrador no escribe ahí.
5. **Commit del handoff**, separado del trabajo y por lista explícita: `git add
   -- features/<id>/evidence/<task>.handoff.md [features/<id>/evidence/<task>.md]`; comprueba
   `git diff --cached --name-only`; `git commit -m "handoff: T<n>"` (o
   `handoff: integrate <id>`). Comprueba `git diff --name-only
   <sha-trabajo>..HEAD` ⊆ conjunto de tu operación en la tabla de rutas por
   operación (workflow §2.1): para `work`, evidencia, findings y handoff de
   la tarea; para `integrate`, `evidence/README.md` ya cometido,
   `evidence/integrate.handoff.md` y los `tasks.md`, `participations.md` y
   `*.verdict.md` que otros hayan cometido en `feat/<id>`. El receptor hará la
   misma comprobación con el mismo conjunto. Árbol limpio después.
6. **Pide al orchestrator** la línea `handoff_emitted` (tipo, `<sha-trabajo>`)
   en `participations.md`. Tú no la escribes. La transferencia de owner
   (`transferred`) **no** se registra ahora: sólo después de que el receptor
   acepte.
7. **Retorno breve**: ruta del handoff, tipo, `<sha-trabajo>`, próxima acción,
   y el receptor esperado: para `work`, cualquier `actor_id` o uno concreto
   (**no** quien vaya a verificar la tarea: aceptar lo haría owner e
   inelegible); para `integrate`, otra sesión de integrador.

## Comprobación antes de cerrar

- [ ] Índice y árbol inspeccionados; sólo rutas propias añadidas, por lista.
- [ ] Árbol limpio; commits `wip:` (si hubo trabajo pendiente) y `handoff:`
      (sólo rutas de registro).
- [ ] `evidence/<task>.handoff.md` con tipo, los cuatro bloques, SHA base y `<sha-trabajo>`.
- [ ] Ningún artefacto duplicado; todo enlazado.
- [ ] Próxima acción concreta y una sola.
- [ ] Evento `handoff_emitted` pedido después de los commits.

## Evals (checklist manual, README §6)

| Caso | Prueba |
| --- | --- |
| Activación | «Cierro por hoy» con T2 a medias → commit `wip:`, `evidence/<task>.handoff.md` tipo `work` y petición de `handoff_emitted` |
| No activación | «Cierro» con T2 ya entregada y sin cambios → responde que no hay nada que entregar; verifier a medias → responde que la verificación se descarta y se rehace |
| Restricción | Árbol o índice con cambios de origen desconocido → no emite handoff y escala; sin commit `wip:` → no escribe handoff |
| Continuidad | Integrador con `evidence/README.md` ya cometido y sin código nuevo → handoff `integrate` válido, sin commit artificial |
| Comparación | Misma situación: mismo contenido esencial, sin copiar spec ni plan |

## Referencias

`skills/README.md` §4.6: cuatro bloques
(`ideas/propuesta-harness-multiagente.md` l. 184-189), enlazar en vez de
duplicar y no usar temporal (Pocock `handoff`, límite), campos verificables y
caducidad (`ideas/MULTI_AGENT_HARNESS_ARCHITECTURE.md` §9), cierre con commit
verificable (§11), informes en archivo (Superpowers).
