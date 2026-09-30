---
name: session-resume
description: Retoma una feature o tarea con aceptación condicional: comprueba que el árbol, el owner, tasks.md y participations.md coinciden con lo declarado en handoff.md antes de escribir nada; si difieren, rechaza el handoff y lo anota. Úsala al abrir una sesión sobre una feature con handoff.md, al recibir una transferencia o al reanudar tras una interrupción. No la uses sin handoff ni para verificar.
---

# /session-resume

Transversal ([workflow-construccion.md](../../docs/workflow-construccion.md)
§4.6; [README](../README.md) §4.7). La ejecuta quien abre la sesión. Su regla
es una: **no escribas nada hasta validar**.

## Qué produce

- Nada hasta validar.
- Tras validar: la aceptación (o el rechazo con motivo) al final de
  `features/<id>/handoff.md`; la petición al orchestrator de registrar
  `handoff_accepted` / `handoff_rejected` y, si cambia el owner, `transferred`
  en `participations.md` **antes** de que escribas en la rama.
- La sesión queda posicionada: rama correcta, tarea identificada, próxima acción
  del handoff cargada, y la skill de etapa que toca a continuación.

## Qué no hace

- No toma ownership en silencio ni edita `tasks.md`.
- No repara un handoff inconsistente por su cuenta.
- No lee la conversación anterior: sólo `handoff.md` y lo que enlaza.
- No ejecuta la tarea: la deja lista para `/feature-build`, `/feature-verify` o
  `/feature-integrate`.
- No verifica: si el receptor va a verificar, la elegibilidad la comprueba
  `/feature-verify`.

## Precondiciones mecánicas

1. Existe `features/<id>/handoff.md` con los cuatro bloques y los SHA.
2. La rama declarada existe y puedes hacer checkout.

## Procedimiento

1. **Checkout y limpieza.** `git checkout <rama>`; `git status --porcelain`
   debe estar vacío. Si hay cambios sin commit que no son tuyos, **no los
   toques**: rechazo por «árbol sucio».
2. **Comprueba el árbol.** `git rev-parse HEAD` == SHA último commit del
   handoff. Si `HEAD` avanzó: rechazo por «árbol distinto» (alguien trabajó
   después del handoff); reconciliar antes de continuar.
3. **Comprueba los registros.** `git hash-object features/<id>/tasks.md` y
   `… participations.md` == los del handoff. El owner de la tarea en `tasks.md`
   es el emisor del handoff, y el último evento de la tarea en
   `participations.md` es `handoff_emitted` o `transferred` hacia ti. Si no:
   rechazo por «owner distinto» o «historial incoherente».
4. **Comprueba la coherencia** entre `handoff.md` y la última entrada de
   `evidence/<task>.md` (mismo SHA, misma ronda). Si no: rechazo por
   «evidencia distinta».
5. **Acepta o rechaza.** Escribe la línea en la sección «Aceptación» de
   `handoff.md` y haz commit de ese único cambio. Si rechazas, detente ahí y
   reporta: el rechazo no es un fallo, es el mecanismo funcionando.
6. **Ownership.** Si el receptor eres tú y el owner era otro, pide al
   orchestrator la línea `transferred` en `participations.md` y el cambio de
   owner en `tasks.md`; **no escribas en la rama hasta que exista esa línea**.
7. **Carga la próxima acción** del handoff y anuncia qué skill sigue. Cualquier
   cambio que descubras después (nuevo commit en `main`, spec cambiada) exige
   reconciliar antes de continuar.

## Comprobación antes de continuar

- [ ] Árbol limpio y en el SHA declarado.
- [ ] `tasks.md` y `participations.md` coinciden; owner y último evento
      coherentes.
- [ ] Aceptación (o rechazo) escrita y en commit.
- [ ] Transferencia registrada antes de escribir, si aplica.
- [ ] Ninguna otra escritura.

## Evals (checklist manual, README §6)

| Caso | Prueba |
| --- | --- |
| Activación | Abrir sesión sobre una feature con `handoff.md` válido → aceptación escrita y próxima acción anunciada |
| No activación | Feature sin `handoff.md` → indica empezar por la skill de la etapa, sin escribir |
| Restricción | `HEAD` distinto del declarado, o `participations.md` con otro hash → rechazo anotado, sin tocar la rama |
| Comparación | Mismo handoff: misma decisión de aceptar/rechazar y mismo motivo |

## Referencias

[README](../README.md) §4.7: receptor que valida y puede rechazar
(`ideas/MULTI_AGENT_HARNESS_ARCHITECTURE.md` §8.2 y §9;
`ideas/propuesta-harness-multiagente.md` l. 241), reconciliación al reanudar y
nunca toma silenciosa (S04 l. 108-109 y 115), continuación por artefactos
(nWave `nw-continue`), reanudar según estado persistido (Osmani, BMAD),
reserva no atómica (Pocock `wayfinder`), experimento E2 (S12).
