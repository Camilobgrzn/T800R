# Anotación de revisión

- ID de anotación: `REV-2026-075`
- Unidad y ubicación: `ADR-003` — [«Decisión»](../adr/ADR-003-ciclo-operativo-y-coordinacion.md#decisión),
  `docs/adr/ADR-003-ciclo-operativo-y-coordinacion.md:44-98` (puntos 4, 7, 9, 11
  y 12), frente a `S04` — [«Acuerdos y orientación de la sesión»](../definition/session-04-operating-cycle.md#acuerdos-y-orientación-de-la-sesión)
  (l. 92-93, 96-97, 104, 106-107, 109, 113) y
  [«Persistencia mínima de consultas y esperas»](../definition/session-04-operating-cycle.md#persistencia-mínima-de-consultas-y-esperas)
  (l. 298). Bloque `B036`.
- Revisión examinada: estado de los archivos al 2026-09-25 (repositorio sin
  commits; ADR-003 fechado 2026-09-15, S04 con criterio comprobado el
  2026-09-15). Citas distintivas: «Un verifier independiente es obligatorio,
  proporcional o innecesario según consecuencias, alcance y verificabilidad»
  (ADR l. 79-81); «ejecutar sólo runbooks reversibles explícitamente
  preautorizados» (l. 95-96); «Ante duda, no se autoriza escritura.» (l. 72-73);
  «Ante la duda se empieza en `proporcional`» (S04 l. 107).
- Tipo: `incompleto`
- Gravedad: `baja`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos (lectura completa de l. 44-98, S04
  l. 69-116 y l. 270-305); `media` sobre el impacto (depende de si el ADR se
  aplica sin S04)
- Impacto: qué carga de prueba tiene declarar innecesario un verifier, si el
  implementador puede contarse como verificador, qué condiciones debe cumplir
  un runbook de `Maintain`, qué estado registra el tracker ante una duda de
  recuperación y qué campos mínimos tiene una consulta, para quien aplique la
  «Decisión» sin la unidad. No cambia ninguna fila aceptada de S04.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión exclusivamente interna; no requiere
  fuente externa según [README](README.md)).
- Fuente primaria: `docs/adr/ADR-003-ciclo-operativo-y-coordinacion.md:18,
  46-48, 55-61, 70-73, 79-82, 88-98, 108, 125`;
  `docs/definition/session-04-operating-cycle.md:75, 92-93, 96-97, 104, 106-107,
  109, 113, 279, 298`.
- Sección o localizador: ver «Unidad y ubicación».
- Fecha de consulta/publicación: consulta 2026-09-25; ADR-003 y S04 fechados
  2026-09-15.
- Hecho observado:
  1. **Verificación sin carga de prueba ni exclusión del implementador.** El
     punto 9 (l. 79-81) resume las filas l. 103-107 en «obligatorio,
     proporcional o innecesario según consecuencias, alcance y
     verificabilidad». Omite la regla por defecto de l. 107 («Ante la duda se
     empieza en `proporcional`; si no se demuestra impacto bajo y cobertura
     determinista suficiente, se exige verificador independiente») y su
     exclusión («El implementador puede … auto-revisar, corregir y entregar a
     `stage verify`, pero no cuenta como verificador independiente»), además de
     las condiciones de l. 104 (obligatorio) y l. 106 («sólo cuando el alcance
     es aislado, el comportamiento está completamente especificado…»).
  2. **Runbooks de `Maintain` con menos condiciones.** El punto 12 (l. 94-96)
     permite «ejecutar sólo runbooks reversibles explícitamente
     preautorizados». S04 l. 113 exige además que el runbook «está acotado por
     runtime/policy, es observable y tiene rollback y comprobación posterior», y
     añade que el `draft` lleva «señal, evidencia, impacto y deduplicación»,
     que «no autoriza `build`» y que «una acción irreversible o una salida de
     límites vuelve a `plan` y a los gates acordados». El punto 1 (l. 47-48)
     sólo conserva el retorno por cambio de producto.
  3. **Duda de recuperación sin estado.** El punto 7 (l. 72-73) termina en «Ante
     duda, no se autoriza escritura». S04 l. 109: «Una duda no resoluble queda
     en `waiting` o `blocked` y no autoriza escritura. Toda nueva asignación
     registra base, alcance y estado heredado»; también «El owner activo
     coordina o espera; la liberación o transferencia explícita asigna un
     sucesor». El ADR no dice en qué estado queda el trabajo ni qué registra la
     reasignación.
  4. **`waiting` y `blocked` sin semántica ni salida.** El punto 4 (l. 58-59)
     dice que «`waiting`, `blocked` y `cancelled` conservan causa e historia».
     No recoge la distinción de l. 92-93 (`waiting`: «respuesta o dependencia
     externa identificada; T800R conserva la espera y continúa el trabajo
     independiente»; `blocked`: «no existe una vía autorizada»), el retorno de
     l. 96 (a `ready` si se reasigna, a `in_progress` si conserva ownership)
     ni l. 97 («Cualquier estado no terminal puede pasar a `cancelled` con una
     razón registrada»). El glosario (l. 18) sólo enumera los valores. Es
     distinto de `REV-2026-027` hecho 8 (el punto 4 no restringe el origen de
     `waiting`/`blocked`).
  5. **Consulta sin tipo y respuesta sin registro.** El punto 11 (l. 88-91)
     reproduce casi toda la lista de S04 l. 298, pero omite «tipo (`waiting`,
     `bloqueo`, `decisión`, `revisión` o `permiso`)», «exacta», «destinataria»,
     «base» (de «revisión base») y «recomendación», y sustituye «Al responder,
     se registrarán la decisión y la evidencia y se recalcularán…» por «La
     respuesta recalcula estado, dependencias y validaciones».
  6. **Retorno por hallazgo sin destino.** El punto 3 (l. 55-56) dice «Un
     hallazgo devuelve sólo el ámbito afectado y obliga a revalidar sus
     dependencias»; S04 l. 279 dice «a `build`, `design` o `plan`; conserva la
     historia». Matiza `REV-2026-033` hecho 1, que describió el punto como
     reproducción «sin más detalle»: el ADR además retira los destinos y la
     conservación de la historia.
- Inferencia (si aplica): cada omisión, leída sola, amplía el margen del agente
  (declarar un verifier innecesario sin carga de prueba, verificar con el
  implementador, ejecutar un runbook sin rollback ni observabilidad, dejar una
  duda sin estado, responder una consulta sin registrar la decisión). Es el
  patrón de `REV-2026-065` y `REV-2026-069`, ahora en ADR-003; `REV-2026-074`
  recoge la parte de intervención humana.

## Observación y propuesta

- Observación: el resumen es fiel en estructura (mapa fila a punto en
  [B036](blocks/B036.md)) y no contradice S04, pero pierde las cláusulas que
  acotan decisiones del agente.
- Propuesta concreta: que la persona decida, junto con `REV-2026-074`, si la
  «Decisión» declara que resume S04 y que las cláusulas no repetidas siguen
  vigentes (una frase), o si recupera en los puntos 3, 4, 7, 9, 11 y 12 la regla
  por defecto y la exclusión del implementador, las condiciones del runbook, el
  estado ante duda, la semántica de `waiting`/`blocked`, el tipo de consulta y
  el registro de la respuesta, y los destinos del retorno. No editar ADR-003 ni
  S04 sin esa decisión.
- Contraargumento o coste/riesgo: un ADR resume por naturaleza; l. 125 remite a
  S04 como «Acuerdos canónicos»; «proporcional» y «reversibles explícitamente
  preautorizados» pueden leerse como abreviaturas de las condiciones completas;
  «Consecuencias» l. 108 («La recuperación puede detener escrituras dudosas»)
  es coherente con el punto 7. La gravedad es `baja` porque la unidad está
  completa y el ADR no la contradice.

## Análisis adicional

- Evidencia interna: hechos 1-6 con sus localizadores.
- Contraevidencia y límites: no se leyeron S05 «Lifecycle inicial», S09 ni S11,
  que pueden concretar runbooks, estados o campos de consulta (S05 ya fue
  contrastada con l. 298 en `REV-2026-041`). No se afirma que algún documento
  posterior haya aplicado la lectura amplia.
- Pregunta para resolver: ¿debe la «Decisión» de ADR-003 recuperar la regla por
  defecto del verifier y la exclusión del implementador, las condiciones de los
  runbooks, el estado ante duda de recuperación, la semántica de
  `waiting`/`blocked` y el tipo y registro de las consultas, o basta declarar
  que resume S04?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B036](blocks/B036.md),
  [`REV-2026-027`](2026-09-24-REV-2026-027-enumeracion-de-estados-y-transiciones-de-s04-no-cerrada-draft-y-waiting-blocked-desde-ready.md),
  [`REV-2026-033`](2026-09-24-REV-2026-033-retorno-parcial-de-un-hallazgo-en-s04-sin-stage-del-incremento-ni-regla-de-reentrada-a-build.md),
  [`REV-2026-041`](2026-09-24-REV-2026-041-campos-de-consultation-frente-al-minimo-de-s04-l298-y-authority-duplicado-entre-envoltura-y-payload.md),
  [`REV-2026-065`](2026-09-25-REV-2026-065-decision-de-adr-001-omite-la-deteccion-de-riesgo-por-t800r-estrecha-la-no-sustitucion-y-reformula-harness-y-permisos-frente-a-s02.md),
  [`REV-2026-069`](2026-09-25-REV-2026-069-decision-de-adr-002-resume-s03-sin-limite-inequivoco-ni-deteccion-evidencia-sin-revision-humana-y-remisiones-sin-destino.md),
  [`REV-2026-074`](2026-09-25-REV-2026-074-decision-de-adr-003-omite-consultas-y-autoridad-humana-de-s04-y-deja-solo-build-aceptacion-y-deploy-como-intervencion.md),
  cruces `CT02` y `CT05`.

## Preguntas pendientes

Ver el checkpoint [B036](blocks/B036.md).

## Cobertura y límites

Ver el checkpoint [B036](blocks/B036.md). Fuentes externas: ninguna; el
problema es interno.
