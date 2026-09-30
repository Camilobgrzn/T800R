# Anotación de revisión

- ID de anotación: `REV-2026-090`
- Unidad y ubicación: cruce `CT02` — `S04` [«Acuerdos y orientación de la sesión»](../definition/session-04-operating-cycle.md#acuerdos-y-orientación-de-la-sesión)
  (filas l. 96, 97, 98, 101, 108, 109, 116; prosa l. 161-164 y 180-187) frente a
  `S05` [«Decisiones»](../definition/session-05-handoffs.md#decisiones) (l. 54,
  59, 67, 80), [«Payloads de ownership»](../definition/session-05-handoffs.md#payloads-de-ownership)
  (l. 115-116), [«Separación y recuperación»](../definition/session-05-handoffs.md#separación-y-recuperación)
  (l. 206-208), [«Semántica inicial de los tipos»](../definition/session-05-handoffs.md#semántica-inicial-de-los-tipos)
  (l. 214-215) y [«Comprobación de cierre»](../definition/session-05-handoffs.md#s05-cierre)
  (l. 252-253); ADR-003 puntos 5 y 7 (l. 62-65, 70-73); ADR-004 puntos 6 y 11
  (l. 79-81, 98-101). Bloques `B014`, `B016`, `B019`-`B022`, `B036`, `B039`.
- Revisión examinada: estado de los archivos al 2026-09-25; repositorio sin
  commits, huella no disponible. Citas distintivas: «la disposición de cada
  ownership (liberado, transferido o retenido con intención de reanudar)» (S04
  l. 116); «el trabajo vuelve a `ready` si debe reasignarse, o a `in_progress` si
  conserva el ownership» (S04 l. 96); «la liberación o transferencia explícita
  asigna un sucesor» (S04 l. 182-183); «Sólo otro `ownership_transfer` puede
  cambiarlo» (S05 l. 207); «el ownership permanece único y sólo cambia mediante
  una operación atómica y reconciliada con tracker y repositorio» (S05
  l. 252-253).
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos textuales; `media` sobre el efecto (S08,
  S11 y ADR-007/010 sólo por búsqueda y lectura puntual; un mecanismo del work
  tracker podría cubrir la liberación sin nombrarla)
- Impacto: cómo termina un ownership. De ello depende qué evento registra una
  sesión que cierra con ownership «liberado», qué tipo de handoff reasigna una
  tarea que vuelve a `ready`, si completar o cancelar una tarea deja owner, si
  reabrir una tarea `completed` exige `assignment` u `ownership_transfer`, y si
  el tracker y el último handoff `completed` pueden divergir por diseño, que es
  precisamente el caso sin fuente prevalente de la pregunta 5 de `B021`.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (contradicción y omisión exclusivamente
  internas entre unidades; sin fuente externa)
- Fuente primaria: `docs/definition/session-04-operating-cycle.md` l. 96-98,
  101, 108-110, 115-116, 161-164, 180-187;
  `docs/definition/session-05-handoffs.md` l. 54, 57-61, 67, 80, 115-116,
  206-208, 214-215, 226-227, 252-253;
  `docs/adr/ADR-003-ciclo-operativo-y-coordinacion.md` l. 62-73;
  `docs/adr/ADR-004-contrato-portable-de-handoffs.md` l. 79-81, 98-101;
  búsqueda de «liber» en `docs/` fuera de `reviews/` (S04 l. 109, 111, 116, 182;
  S05 l. 62, 63, 80, 215; ninguna en ADR-003, ADR-004 ni S08); lectura puntual
  de `docs/definition/session-11-mvp-architecture.md` l. 106 y 147 (fuera del
  alcance, como contraevidencia)
- Sección o localizador: los indicados en «Unidad y ubicación»
- Fecha de consulta/publicación: consulta 2026-09-25; S04 comprobada el
  2026-09-15; S05 y ADR-004 del 2026-09-16
- Hecho observado:
  1. **S04 prevé tres disposiciones del ownership, una sin sucesor.** Una sesión
     sólo completa tras persistir «la disposición de cada ownership (liberado,
     transferido o retenido con intención de reanudar)» (l. 116). «Liberado» se
     distingue de «transferido», es decir, un ownership que termina sin sucesor.
  2. **S04 liga `ready` a la reasignación.** Al resolverse `waiting`/`blocked`,
     «el trabajo vuelve a `ready` si debe reasignarse, o a `in_progress` si
     conserva el ownership» (l. 96; prosa l. 163-164). La oposición «reasignarse»
     / «conserva el ownership» presenta `ready` como estado de una tarea que ya
     no conserva su owner.
  3. **S04 hace que la liberación asigne sucesor, en contra del hecho 1.** «El
     owner activo coordina o espera; la liberación o transferencia explícita
     asigna un sucesor» (l. 109; l. 182-183). Leída literalmente, no hay
     liberación sin sucesor, lo que contradice «liberado» frente a
     «transferido» en l. 116.
  4. **S05 sólo tiene vehículos de inicio y de sustitución.** `assignment`
     «exigirá ausencia de owner activo» (l. 67; l. 115; l. 214: «tarea sin owner
     activo»). `ownership_transfer` sustituye «el owner activo por un sucesor
     explícito» (l. 215) y exige `current_owner` (l. 116). «Un ownership ya
     completado se recupera reconciliando handoff, tracker y repositorio. Sólo
     otro `ownership_transfer` puede cambiarlo» (l. 206-207; l. 80; ADR-004
     punto 11, l. 100). Ningún tipo termina un ownership sin sucesor; «liber»
     aparece en S05 sólo en negativo (l. 62: `due_at` no «libera ownership»;
     l. 63; l. 80; l. 215: «No libera al owner actual»).
  5. **Una liberación sin receptor quedaría fuera del contrato.** «Una
     actualización de estado sin receptor ni acción esperada permanece sólo en
     el tracker» (S05 l. 54). Una liberación no tiene receptor, luego sería una
     actualización del tracker sin handoff y sin la «operación condicional» de
     l. 59, que sólo se define para `assignment` y `ownership_transfer`.
  6. **El cierre de S05 afirma lo contrario.** «el ownership permanece único y
     sólo cambia mediante una operación atómica y reconciliada con tracker y
     repositorio» (l. 252-253). Si liberar es cambiar el ownership, o bien la
     liberación está prohibida (y l. 116 no es cumplible), o bien existe un
     cambio de ownership no atómico fuera del contrato (y l. 252-253 no es
     cierto).
  7. **Ninguna unidad dice si completar o cancelar la tarea termina el
     ownership.** S04 l. 97 (cancelación), l. 101 (cierre de tarea) y l. 108
     («un único owner activo, responsable de su estado, resultado y
     evidencia») no dicen si el owner sigue «activo» tras `completed` o
     `cancelled`. Si sigue, reabrir una tarea `completed` (l. 98) para otro
     actor exige un `ownership_transfer` con un `current_owner` cuya ejecución
     puede no existir ya; si no sigue, el fin del ownership es un cambio sin
     vehículo (hechos 4-6). S05 l. 74 («`completed` … no implica necesariamente
     completar una tarea») cubre sólo el sentido inverso.
  8. **Los ADR no lo resuelven.** ADR-003 punto 5 reduce l. 116 a «disposición
     del ownership» sin enumerar «liberado» (l. 64) y el punto 7 habla sólo de
     reasignar (l. 70-73); ADR-004 punto 6 define la operación atómica sólo
     para asignación y transferencia (l. 79-81).
  9. **Contraevidencia fuera del alcance (lectura puntual).** S11 l. 106 hace
     del work tracker la fuente autoritativa de handoffs y owner y exige la
     operación condicional «para `assignment` y `ownership_transfer`»; tampoco
     nombra la liberación. S11 l. 147 añade que perder un lease técnico «no
     cambia task ownership ni autoriza reasignación». Ninguna de las dos líneas
     añade un vehículo de fin de ownership.
- Inferencia (si aplica): S04 modela el ownership con principio, sustitución y
  fin (liberación, vuelta a `ready`); S05 modela sólo principio y sustitución.
  Al juntarlas, el fin del ownership ocurre, si ocurre, como actualización del
  tracker sin handoff, lo que hace divergir por diseño el tracker (sin owner)
  del último handoff `completed` (owner X). S05 l. 206-208 recupera el
  ownership «reconciliando handoff, tracker y repositorio» sin decir qué fuente
  prevalece (pregunta 5 de `B021`): ante esa divergencia la única salida escrita
  es no escribir, de modo que una liberación legítima podría bloquear la
  reasignación posterior.

## Observación y propuesta

- Observación: ninguna de las dos unidades es incoherente por separado. S04
  necesita liberar (fin de sesión, reasignación, cierre de tarea); S05 protege
  el ownership contra cambios silenciosos y por eso sólo admite cambios
  atómicos hacia un receptor. El hueco aparece al juntarlas y lo agrava que el
  cierre de S05 declare que el ownership «sólo cambia» por esa vía.
- Propuesta concreta: que la persona decida (a) si existe la liberación sin
  sucesor; si existe, cómo se registra con garantías equivalentes a S05 l. 59
  (operación condicional contra base, owner y alcance, con razón, trabajo
  preservado y evento atribuido), por ejemplo como transición del tracker con
  evento correlacionado al último handoff de ownership, o como
  `ownership_transfer` hacia un «sin owner» explícito; si no existe, corregir
  S04 l. 116 («liberado») y l. 96 («si debe reasignarse»); (b) si completar o
  cancelar una tarea termina su ownership, y con qué evento; (c) qué fuente
  prevalece cuando tracker y último handoff `completed` discrepan sobre el
  owner (pregunta 5 de `B021`), a la vista de S11 l. 106; (d) si el cierre de
  S05 l. 252-253 debe matizarse. No editar S04, S05 ni los ADR sin esa decisión.
- Contraargumento o coste/riesgo: «liberado» puede leerse como la primera mitad
  de una transferencia (l. 109: «asigna un sucesor»), de modo que no existiría
  liberación sin sucesor; el fin del ownership al cerrar la tarea puede
  considerarse implícito o detalle del work tracker (S11); una liberación puede
  entenderse como «actualización del tracker» legítima por S05 l. 54. Ninguna
  de esas lecturas está escrita y la primera contradice l. 96 y l. 116. Coste:
  una fila o una frase en S04 y S05.

## Análisis adicional

- Evidencia interna: hechos 1-9 y los enlaces de «Unidad y ubicación».
  Anotaciones relacionadas:
  [`REV-2026-027`](2026-09-24-REV-2026-027-enumeracion-de-estados-y-transiciones-de-s04-no-cerrada-draft-y-waiting-blocked-desde-ready.md)
  (máquina de estados de S04), [`REV-2026-037`](2026-09-24-REV-2026-037-efecto-de-consultation-y-verification-request-sobre-el-status-de-s04-sin-regla-y-reconciliacion-operativa-sin-definir.md)
  (efecto de los handoffs sobre el `status`),
  [`REV-2026-042`](2026-09-24-REV-2026-042-accepted-sin-salida-si-el-aceptante-desaparece-cierre-coordinado-sin-partes-y-escalacion-de-due-at-sin-observador-ni-representacion.md)
  (salidas de `accepted`),
  [`REV-2026-044`](2026-09-24-REV-2026-044-cierre-s05-omite-caducidad-fuentes-canonicas-y-evidencia-auditoria-como-relectura-de-filas-y-no-bloqueo-para-s06-sin-enumerar.md)
  (hecho 3: auditoría del cierre sin contraste con S04),
  [`REV-2026-075`](2026-09-25-REV-2026-075-decision-de-adr-003-resume-s04-sin-carga-de-prueba-del-verifier-condiciones-de-runbook-estado-ante-duda-ni-tipo-de-consulta.md)
  (la «Decisión» de ADR-003 sin el estado ante duda); preguntas 4 de `B014`,
  5 y 6 de `B021`, 6 de `B022`.
- Contraevidencia y límites: S08 no contiene «liber» (búsqueda); S11 sólo se leyó
  en l. 106 y 147. No se leyeron ADR-007 ni ADR-010. Una regla de fin de
  ownership formulada sin la raíz «liber» ni «ownership» no se habría detectado.
- Pregunta para resolver: ¿cómo termina un ownership sin sucesor (sesión que
  libera, tarea que vuelve a `ready`, tarea completada o cancelada), con qué
  evento y garantías, y qué prevalece si el tracker y el último handoff de
  ownership discrepan?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [CT02](blocks/CT02.md)
