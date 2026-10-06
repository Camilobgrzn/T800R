---
name: session-resume
description: Retoma una tarea o una candidata con aceptación condicional: comprueba que la rama entregada (sólo rutas de registro encima del SHA del trabajo, árbol limpio) y la coordinación actual en feat/<id> (owner y último evento handoff_emitted) coinciden con evidence/<task>.handoff.md antes de escribir nada; acepta o rechaza vía eventos del orchestrator. Úsala al abrir una sesión sobre una feature con evidence/<task>.handoff.md, al recibir una transferencia o al reanudar tras una interrupción. No la uses sin handoff ni para verificar (quien va a verificar no acepta un handoff work).
---

# /session-resume

Transversal (`docs/workflow-construccion.md` §4.6; `skills/README.md` §4.7;
rutas desde la raíz del repositorio). La ejecuta quien abre la sesión. Su regla
es una: **no escribas nada hasta que el orchestrator haya registrado la
aceptación y, si aplica, la transferencia**.

## Qué produce

- Nada en el repositorio: el receptor no escribe.
- Tras validar: el reporte al orchestrator para que registre
  `handoff_accepted` (o `handoff_rejected` con motivo) y, si cambia el owner,
  `transferred` en `participations.md` y el owner en `tasks.md`, **antes** de
  que escribas en la rama.
- La sesión queda posicionada: rama correcta, tarea identificada, próxima acción
  del handoff cargada, y la skill de etapa que toca a continuación.

## Qué no hace

- No toma ownership en silencio ni edita `tasks.md`, `participations.md` ni
  `evidence/<task>.handoff.md`.
- No repara un handoff inconsistente por su cuenta.
- No lee la conversación anterior: sólo `evidence/<task>.handoff.md` y lo que enlaza.
- No ejecuta la tarea: la deja lista para `/feature-build` o
  `/feature-integrate`.
- No acepta un handoff `work` si vas a verificar esa tarea: aceptarlo te haría
  owner e inelegible (S12). La verificación no se transfiere; empieza por
  `/feature-verify`.

## Precondiciones mecánicas

1. Existe `features/<id>/evidence/<task>.handoff.md` en la rama declarada, con tipo, los cuatro
   bloques, SHA base y `<sha-trabajo>`.
2. La rama declarada existe. Para `work`, `git worktree list` dice dónde está
   checkeada: el emisor conserva su worktree salvo que el handoff diga que lo
   eliminó (una rama sólo puede estar checkeada en un worktree). Para
   `integrate`, es el checkout de coordinación.
3. Tienes un `actor_id` asignado por la persona (`<usuario>-a<n>`); si eres el
   mismo actor que emitió, es una continuación y no hay transferencia.

## Procedimiento

1. **Sitúate y comprueba limpieza.** `git worktree list`: si la rama ya está
   checkeada en un worktree, trabaja en ese directorio (no intentes `git
   checkout` desde otro: Git lo rechaza con «already used by worktree»); si el
   emisor lo eliminó, `git worktree add <ruta> <rama>`. `git status
   --porcelain` debe estar vacío. Si hay cambios sin commit, **no los
   toques**: rechazo por «árbol sucio».
2. **Comprueba la rama.** `git diff --name-only <sha-trabajo>..HEAD` sólo lista
   rutas de registro (`features/<id>/evidence/<task>.handoff.md` y, si aplica,
   `features/<id>/evidence/<task>.md`; en `feat/<id>` también `tasks.md` y
   `participations.md` por los `coord:` del orchestrator), y `<sha-trabajo>`
   es ancestro de HEAD (`git merge-base --is-ancestor`). No importa cuál sea
   el último commit ni su mensaje. Si HEAD contiene cambios fuera de las rutas
   de registro encima de `<sha-trabajo>`: rechazo por «árbol distinto»
   (alguien trabajó después del handoff); reconciliar antes de continuar.
3. **Comprueba la coordinación actual** en `feat/<id>` (`git show
   feat/<id>:features/<id>/tasks.md` y `… participations.md`), no un hash
   congelado. Tipo `work`: el **último evento de la tarea** en
   `participations.md` es `handoff_emitted` con ese `<sha-trabajo>` y el owner
   en `tasks.md` es el emisor. Tipo `integrate`: el último evento de la
   feature es `handoff_emitted integrate <sha-trabajo>`. **Continuación tras
   una interrupción**: si el último evento de la tarea es `handoff_accepted` o
   `transferred` con **tu** `actor_id` sobre el mismo `<sha-trabajo>` (y, en
   `work`, el owner ya eres tú), la aceptación ya ocurrió: salta al paso 7 sin
   pedir eventos nuevos. Cualquier otro evento posterior (`assigned`,
   `invalidated`, otro `handoff_emitted`, aceptación por otro actor) u otro
   owner: rechazo por «owner distinto» o «historial incoherente».
   (`transferred` nunca precede a la aceptación: se registra después, paso 6.)
4. **Comprueba la coherencia** entre `evidence/<task>.handoff.md` y la última
   entrada de `evidence/<task>.md` (mismo `<sha-trabajo>`, misma ronda) para
   `work`, o `evidence/integrate.handoff.md` y `evidence/README.md` si existe
   para `integrate`. Si no: rechazo por «evidencia distinta».
5. **Acepta o rechaza, sin escribir.** Reporta al orchestrator el resultado y
   el motivo; él registra `handoff_accepted` o `handoff_rejected` en
   `participations.md`. Si rechazas, detente ahí: el rechazo no es un fallo,
   es el mecanismo funcionando. **Quien reconcilia** tras un rechazo es el
   orchestrator: decide si el trabajo posterior al handoff se conserva (nuevo
   handoff desde el estado real) o se descarta, registra la decisión en
   `participations.md` y se vuelve a ejecutar `/session-resume`.
6. **Ownership (sólo `work`).** Si tu `actor_id` es distinto del emisor, pide
   al orchestrator la línea `transferred` en `participations.md` y el cambio de
   owner en `tasks.md`; **no escribas en la rama hasta ver ambas** (`git show
   feat/<id>:…`). Si eres el mismo actor, basta `handoff_accepted`.
7. **Carga la próxima acción** del handoff y anuncia qué skill sigue. Cualquier
   cambio que descubras después (nuevo commit en `main` o en `feat/<id>`, spec
   cambiada, `invalidated`) exige reconciliar antes de continuar.

## Comprobación antes de continuar

- [ ] Árbol limpio; encima de `<sha-trabajo>` sólo rutas de registro.
- [ ] Coordinación actual coherente: owner y último evento de la tarea.
- [ ] `handoff_accepted` (o `handoff_rejected`) registrado por el orchestrator.
- [ ] `transferred` y owner en `tasks.md` registrados antes de escribir, si
      aplica.
- [ ] Ninguna escritura propia.

## Evals (checklist manual, README §6)

| Caso | Prueba |
| --- | --- |
| Activación | Abrir sesión sobre una feature con `evidence/<task>.handoff.md` válido → reporte de aceptación, evento registrado y próxima acción anunciada |
| No activación | Feature sin `evidence/<task>.handoff.md` → indica empezar por la skill de la etapa, sin escribir; receptor que va a verificar → remite a `/feature-verify` sin aceptar |
| Restricción | Commits fuera de rutas de registro encima de `<sha-trabajo>`, o `participations.md` con un evento posterior de otro actor para la tarea → rechazo reportado, sin tocar la rama; reejecutar tras `handoff_accepted` propio → continuación sin eventos nuevos |
| Comparación | Mismo handoff: misma decisión de aceptar/rechazar y mismo motivo |

## Referencias

`skills/README.md` §4.7: receptor que valida y puede rechazar
(`ideas/MULTI_AGENT_HARNESS_ARCHITECTURE.md` §8.2 y §9;
`ideas/propuesta-harness-multiagente.md` l. 241), reconciliación al reanudar y
nunca toma silenciosa (S04 l. 108-109 y 115), continuación por artefactos
(nWave `nw-continue`), reanudar según estado persistido (Osmani, BMAD),
reserva no atómica (Pocock `wayfinder`), experimento E2 (S12).
