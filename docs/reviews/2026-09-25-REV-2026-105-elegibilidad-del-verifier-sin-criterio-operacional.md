# Anotacion de revision

- ID de anotacion: `REV-2026-105`
- Unidad y ubicacion: [S04](../definition/session-04-operating-cycle.md#acuerdos-y-orientación-de-la-sesión)
  (l. 103-110), [S05](../definition/session-05-handoffs.md#payloads-de-verificación-y-consulta)
  (l. 122 y 145), [S08](../definition/session-08-portability.md#identidad-portable)
  (l. 210-220), [S09](../definition/session-09-security-governance.md#decisiones)
  (l. 68, 83 y 86) y [S11](../definition/session-11-mvp-architecture.md#decisiones)
  (l. 103 y 137).
- Revision examinada: 2026-09-25; base local sin commit disponible.
- Tipo: `incompleto`
- Gravedad: `alta`
- Estado: `accepted`
- Confianza: `alta` sobre la omision contractual.
- Impacto: el rechazo por independencia inadecuada y el gate obligatorio para
  riesgo `high` no tienen un oraculo portable y reproducible.

## Clasificacion de evidencia

- Clase: `hallazgo fundamentado` exclusivamente interno.
- Fuente primaria: unidades canonicas S04, S05, S08, S09 y S11 citadas arriba.
- Seccion o localizador: lineas citadas; contraste con ADR-007, ADR-008 y ADR-010.
- Fecha de consulta/publicacion: consulta 2026-09-25.
- Hecho observado: el canon excluye al implementador, transporta `independence`,
  distingue actor de ejecucion y exige verifier independiente para `high`, pero no
  define como vincular esos hechos para decidir la elegibilidad del receptor.
- Inferencia: cambiar ejecucion, rol, modelo o proceso no demuestra por si mismo
  independencia; tampoco esta definido que participacion previa excluye a otro
  actor.

## Observacion y propuesta

- Observacion: existe la obligacion, pero falta el predicado operacional que la
  aplica y la evidencia que lo demuestra.
- Propuesta concreta: definir el ambito de la revision, participaciones
  incompatibles, separacion exigida entre actor/ejecucion/contexto, momento de
  evaluacion y evidencia persistida. Incluir casos de reanudacion del implementador,
  cambio de rol, multiples implementadores e historial insuficiente.
- Contraargumento o coste/riesgo: S04 ya prohibe autoverificacion y S08 aporta
  identidad. No se justifica imponer modelo distinto ni aislamiento total; la
  correccion minima es hacer comprobable la exclusion ya aceptada.

## Analisis adicional

- Evidencia interna: ADR-007 separa actor y ejecucion; ADR-008 y ADR-010 mantienen
  independencia para `high` sin completar el predicado de elegibilidad.
- Contraevidencia y limites: el requisito y una categoria de rechazo ya existen.
  No se ha observado una autoverificacion concreta.
- Pregunta para resolver: ¿que participacion previa excluye a un verifier y que
  separacion entre actor, ejecucion y contexto satisface cada nivel de riesgo?

## Resolucion humana

- Decision y justificacion: `accepted`. Se define el predicado de elegibilidad:
  independencia = el `actor_id` no participó en la tarea como worker ni como owner
  en ninguna ejecución (comparación por `actor_id`, no por `execution_id`); varios
  implementadores quedan todos excluidos; el planner no queda excluido por
  planificar salvo política; cambiar de modelo o proveedor no es requisito, sólo
  endurecimiento opcional; historial insuficiente implica no elegible (`default
  deny`) y rechazo `recipient_unavailable_or_ineligible`; se evalúa al aceptar el
  `verification_request`, se revalida antes del veredicto y se persiste en el
  ledger. Corrección mínima: hace comprobable la exclusión ya aceptada en S04 sin
  imponer aislamiento total ni modelo distinto.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canonico o ADR:
  [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones)
  (fila nueva); precisiones en
  [S04](../definition/session-04-operating-cycle.md) l. 107 y
  [ADR-003](../adr/ADR-003-ciclo-operativo-y-coordinacion.md) punto 9.
- Enlaces relacionados: `REV-2026-075` e
  [informe de segunda pasada](second-pass-astra-2026-09-25.md).
