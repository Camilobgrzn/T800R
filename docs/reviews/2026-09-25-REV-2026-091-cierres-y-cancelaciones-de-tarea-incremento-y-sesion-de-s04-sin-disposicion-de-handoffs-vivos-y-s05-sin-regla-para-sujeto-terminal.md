# Anotación de revisión

- ID de anotación: `REV-2026-091`
- Unidad y ubicación: cruce `CT02` — `S04` [«Acuerdos y orientación de la sesión»](../definition/session-04-operating-cycle.md#acuerdos-y-orientación-de-la-sesión)
  (filas l. 97, 101, 102, 115, 116) frente a `S05`
  [«Decisiones»](../definition/session-05-handoffs.md#decisiones) (l. 58, 60,
  61, 64, 80), [«Envoltura común mínima»](../definition/session-05-handoffs.md#envoltura-común-mínima)
  (l. 102, 104), [«Matriz de transiciones»](../definition/session-05-handoffs.md#matriz-de-transiciones)
  (l. 174-176), [«Capas de validación»](../definition/session-05-handoffs.md#capas-de-validación)
  (l. 131, 134-135) y [«Separación y recuperación»](../definition/session-05-handoffs.md#separación-y-recuperación)
  (l. 202-205); ADR-003 puntos 5 y 9 (l. 62-65, 79-82); ADR-004 puntos 5 y 11
  (l. 76-78, 98-101). Bloques `B014`, `B019`, `B021`, `B036`, `B039`.
- Revisión examinada: estado de los archivos al 2026-09-25; repositorio sin
  commits, huella no disponible. Citas distintivas: «Cualquier estado no
  terminal puede pasar a `cancelled` con una razón registrada» (S04 l. 97);
  «Una sesión sólo pasa a `completed` tras persistir checkpoint, … la
  disposición de cada ownership … y la próxima acción» (S04 l. 116); «Una
  verificación o consulta `accepted` sobrevive a la sesión» (S05 l. 204);
  «`accepted` | `completed`, `cancelled` | … no se permite rechazo, caducidad
  ni sustitución tardíos» (S05 l. 175).
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos textuales; `media` sobre el efecto
  («continuidad» de S04 l. 102 y «actualizó dependencias» de l. 101 podrían
  leerse como inclusivas; S08 l. 141 y S11 no se analizaron más allá de la
  búsqueda)
- Impacto: qué ocurre con los handoffs vivos (`pending` emitidos, `accepted`
  recibidos) cuando se cancela o completa su tarea o incremento, o cuando
  completa la sesión que los emitió o aceptó; si una `verification_request` o
  `consultation` aceptada sobre una tarea `cancelled` sigue siendo una
  obligación viva sin salida, y si un cierre de sesión puede declararse
  verificable sin inventariarlas.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión exclusivamente interna, visible sólo
  al juntar ambas máquinas; sin fuente externa)
- Fuente primaria: `docs/definition/session-04-operating-cycle.md` l. 97,
  101-102, 115-116; `docs/definition/session-05-handoffs.md` l. 58, 60-61, 64,
  74, 80, 102, 104, 131, 134-135, 174-176, 202-205;
  `docs/adr/ADR-003-ciclo-operativo-y-coordinacion.md` l. 62-65, 79-82;
  `docs/adr/ADR-004-contrato-portable-de-handoffs.md` l. 76-78, 98-101;
  búsqueda de «handoff» en S04 (sólo l. 175, 250, 255, 312, 323: ninguna en las
  filas de cierre o cancelación)
- Sección o localizador: los indicados en «Unidad y ubicación»
- Fecha de consulta/publicación: consulta 2026-09-25; S04 comprobada el
  2026-09-15; S05 y ADR-004 del 2026-09-16
- Hecho observado:
  1. **Los cuatro cierres de S04 no nombran los handoffs.** Cancelación de
     cualquier estado no terminal: sólo «una razón registrada» (l. 97). Tarea
     `completed`: resultado, criterios, validaciones, verificación,
     «actualizó dependencias y hallazgos que afecten otros trabajos» y sin
     defectos conocidos (l. 101). Incremento `completed`: tareas completadas o
     canceladas, `verify`, aceptación, `deploy` y «estado, evidencia y
     continuidad quedaron persistidos» (l. 102). Sesión `completed`:
     checkpoint, revisión, cambios, estados, evidencia, «la disposición de cada
     ownership» y próxima acción (l. 116). En S04, «handoff» sólo aparece en
     l. 175 («listo para handoff»), l. 250, 255, 312 y 323 (búsqueda).
  2. **S05 dice que las obligaciones aceptadas sobreviven a la sesión.** «Una
     verificación o consulta `accepted` sobrevive a la sesión: se reanuda o se
     cancela coordinadamente antes de crear un reemplazo» (l. 204-205; l. 80;
     ADR-004 punto 11). S04 l. 116 no incluye la disposición de esas
     obligaciones entre lo que la sesión debe persistir: exige disponer del
     ownership, y S05 l. 216-217 dice que verificación y consulta no son
     ownership.
  3. **S05 no tiene regla para un sujeto terminal.** `subject` referencia «la
     tarea, incremento, decisión, revisión u objeto afectado» (l. 104). Desde
     `accepted` sólo caben `completed` o `cancelled` coordinado, sin «rechazo,
     caducidad ni sustitución tardíos» (l. 175; l. 60-61, 64). Ninguna línea de
     S05 ni de ADR-004 dice qué ocurre si el `subject` pasa a `cancelled` o
     `completed` en S04 mientras el handoff sigue `accepted`: la obligación
     sigue viva y sólo puede terminar por la vía cuyo procedimiento no tiene
     partes (`REV-2026-042`).
  4. **Para `pending` existe una salida, no una regla.** El emisor puede
     cancelar unilateralmente (l. 61), y si no lo hace, la capa de
     reconciliación, que contrasta «estado» con el tracker real al aceptar
     (l. 131, 134-135), permite rechazar con `stale_or_conflicting_base`. Pero
     nada obliga a cancelar al cerrar el sujeto, y `sender` identifica «su
     ejecución o sesión cuando corresponda» (l. 102): si esa sesión ya completó
     (S04 l. 116), quién ejerce la cancelación «del emisor» depende de la
     identidad del actor (pregunta 6 de `B021`).
  5. **Los ADR repiten la omisión.** ADR-003 punto 5 enumera lo que persiste el
     cierre de sesión sin handoffs (l. 63-65) y el punto 9 separa cierres de
     tarea, incremento y sesión sin mencionarlos (l. 81-82); ADR-004 puntos 5 y
     11 no vinculan el lifecycle del handoff con el de su sujeto.
- Inferencia (si aplica): cada unidad cierra bien su propia máquina, pero
  ninguna propaga el cierre de una a la otra. Una sesión puede completar
  conforme a S04 dejando `pending` sin emisor activo y `accepted` sin
  aceptante activo; una tarea o incremento pueden cancelarse o completarse con
  una verificación o consulta aceptada que S05 mantiene viva sin plazo
  (`due_at` «no extingue la obligación», l. 62). Es la vía ordinaria —no sólo
  la pérdida de sesión— por la que se produce el caso sin salida de
  `REV-2026-042`, y añade un caso que aquélla no cubre: el aceptante sigue
  disponible, pero su obligación ya no tiene objeto.

## Observación y propuesta

- Observación: `REV-2026-042` registró la obligación aceptada sin aceptante
  desde el lado de S05. Este hallazgo parte de S04: sus criterios de cierre y
  cancelación, que se presentan como verificables (l. 101, 116), no exigen
  inventariar ni disponer los handoffs vivos, y S05 no reacciona al cierre del
  sujeto.
- Propuesta concreta: que la persona decida (a) si el cierre de sesión (S04
  l. 116) debe persistir también la disposición de cada handoff vivo emitido o
  aceptado por la sesión (reanudable por quién, cancelado, transferido); (b) si
  cancelar o completar una tarea o incremento (l. 97, 101, 102) obliga a
  cancelar sus handoffs `pending` y a iniciar el cierre coordinado de los
  `accepted`, y quién lo registra; (c) si S05 admite una salida para un
  `accepted` cuyo sujeto es terminal (por ejemplo, un `cancelled` coordinado con
  la cancelación del sujeto como evidencia) o si esa salida se difiere con
  destino (S11/ADR-010). No editar S04, S05 ni los ADR sin esa decisión.
- Contraargumento o coste/riesgo: «continuidad» (l. 102), «actualizó
  dependencias» (l. 101) y «próxima acción» (l. 116) pueden cubrir los handoffs
  sin nombrarlos; la reconciliación al aceptar (S05 l. 131) ya neutraliza los
  `pending` obsoletos; el orchestrator «coordina dependencias» (S04 l. 110) y
  podría asumirlo; S08 l. 141 (fuera del alcance, por búsqueda) exige a la
  capacidad `delegation` «reanudar o cerrar obligaciones sin perder
  correlación». Ninguna de esas lecturas fija regla, actor ni evidencia. Coste:
  una cláusula por cierre en S04 y una fila en S05.

## Análisis adicional

- Evidencia interna: hechos 1-5 y los enlaces de «Unidad y ubicación».
  Anotaciones relacionadas:
  [`REV-2026-042`](2026-09-24-REV-2026-042-accepted-sin-salida-si-el-aceptante-desaparece-cierre-coordinado-sin-partes-y-escalacion-de-due-at-sin-observador-ni-representacion.md),
  [`REV-2026-037`](2026-09-24-REV-2026-037-efecto-de-consultation-y-verification-request-sobre-el-status-de-s04-sin-regla-y-reconciliacion-operativa-sin-definir.md),
  [`REV-2026-081`](2026-09-25-REV-2026-081-puntos-abiertos-de-adr-004-sin-reglas-residuales-de-handoff-no-recibidas-por-s11-ni-s12-y-s11-adr-010-sin-acuse-de-adr-004.md)
  (cierre coordinado sin receptor en S08-S12),
  [`REV-2026-090`](2026-09-25-REV-2026-090-liberacion-de-ownership-de-s04-sin-vehiculo-en-handoff-v1-y-fin-del-ownership-al-completar-o-cancelar-la-tarea-sin-regla.md)
  (fin del ownership al cerrar la tarea); pregunta 6 de `B021`.
- Contraevidencia y límites: no se leyeron S08 más allá de la búsqueda, S11
  salvo l. 106 y 147, ADR-007 ni ADR-010; el work tracker (S11 l. 106) podría
  imponer la propagación como detalle de adapter. No se afirma que una
  obligación sobre un sujeto cancelado deba cancelarse siempre: una
  verificación puede seguir siendo útil como evidencia.
- Pregunta para resolver: ¿qué debe ocurrir con los handoffs `pending` y
  `accepted` cuando su tarea o incremento se cancela o completa, o cuando
  completa la sesión que los emitió o aceptó, quién lo registra y con qué
  evidencia?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [CT02](blocks/CT02.md)
