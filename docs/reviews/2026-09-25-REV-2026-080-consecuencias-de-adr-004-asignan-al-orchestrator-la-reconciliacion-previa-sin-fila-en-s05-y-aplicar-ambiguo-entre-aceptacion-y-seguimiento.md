# Anotación de revisión

- ID de anotación: `REV-2026-080`
- Unidad y ubicación: `ADR-004` — [«Consecuencias para el equipo»](../adr/ADR-004-contrato-portable-de-handoffs.md#consecuencias-para-el-equipo)
  (`docs/adr/ADR-004-contrato-portable-de-handoffs.md:107-108`, con l. 111-112),
  frente a [«Contexto»](../adr/ADR-004-contrato-portable-de-handoffs.md#contexto)
  (l. 25-26), a la «Decisión» puntos 4, 6 y 8 (l. 73-75, 79-81, 87-90), a `S05` —
  [«Decisiones»](../definition/session-05-handoffs.md#decisiones) (l. 59-60, 63,
  69, 76), [«Capas de validación»](../definition/session-05-handoffs.md#capas-de-validación)
  (l. 131-132), [«Lifecycle inicial»](../definition/session-05-handoffs.md#lifecycle-inicial)
  (l. 156, 160), [«Semántica inicial de los tipos»](../definition/session-05-handoffs.md#semántica-inicial-de-los-tipos)
  (l. 217) y [«Resultado mínimo de `completed`»](../definition/session-05-handoffs.md#resultado-mínimo-de-completed)
  (l. 231-232), y a `S04` — [«Acuerdos y orientación de la sesión»](../definition/session-04-operating-cycle.md#acuerdos-y-orientación-de-la-sesión)
  (l. 109, 110, 112). Bloque `B039`.
- Revisión examinada: estado de los archivos al 2026-09-25 (repositorio sin
  commits; ADR-004 y S05 fechados 2026-09-16). Citas distintivas: «El
  orchestrator debe reconciliar base, tracker, repositorio, autoridad y
  conflictos antes de aplicar un handoff» (ADR l. 107-108); «el seguimiento se
  aplica después al estado operativo» (l. 112); «el orchestrator reconciliará el
  impacto y decidirá si corresponde corregir, reasignar, consultar o bloquear»
  (S05 l. 63); «Antes de aceptar se aplicarán cuatro capas de validación» (S05
  l. 69).
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos textuales (búsqueda de «orchestrator» y
  «aplic» en S05 y ADR-004); `media` sobre el efecto (S08, S11, ADR-007 y
  ADR-010 no leídos; pueden asignar el mecanismo)
- Impacto: qué actor reconcilia y juzga la autoridad antes de la operación
  atómica de ownership o antes de aplicar el seguimiento de una verificación o
  consulta; si esa asignación es un acuerdo (y entonces falta en S05) o una
  consecuencia descriptiva; y si responde, en parte, a `REV-2026-037` (b),
  `REV-2026-040` (b) y a la pregunta 1 de `B021`. No cambia ninguna fila
  aceptada.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (divergencia exclusivamente interna; no requiere
  fuente externa).
- Fuente primaria: `docs/adr/ADR-004-contrato-portable-de-handoffs.md:25-26,
  73-81, 87-90, 103-114` y búsqueda de «orchestrator|aplic» en todo el archivo
  (sólo l. 107-108 y 112); `docs/definition/session-05-handoffs.md:59-60, 63, 69,
  76, 131-132, 156, 160, 217, 231-232` y búsqueda de «orchestrator» (sólo l. 63)
  y de «aplica|aplicar|aplicación» (l. 59-60, 69, 76, 106, 132, 134, 217, 231);
  `docs/definition/session-04-operating-cycle.md:109-112`.
- Sección o localizador: ver «Unidad y ubicación».
- Fecha de consulta/publicación: consulta 2026-09-25; ADR-004 y S05 fechados
  2026-09-16; S04 comprobada el 2026-09-15.
- Hecho observado:
  1. **El ADR asigna al orchestrator lo que S05 no asigna.** En S05,
     «orchestrator» aparece una sola vez: l. 63, para reconciliar «el impacto»
     de un rechazo y decidir si «corregir, reasignar, consultar o bloquear». Las
     cuatro capas se aplican «antes de aceptar» sin actor (l. 69); la de
     reconciliación contrasta revisión, owner, alcance y conflictos «con el
     repositorio y tracker reales» (l. 131); la aceptación y el rechazo se
     atribuyen al «receptor» (l. 156, 160). ADR-004 l. 107-108 asigna al
     orchestrator reconciliar «base, tracker, repositorio, autoridad y
     conflictos», en «Consecuencias» y no en la «Decisión».
  2. **Las dos menciones no coinciden.** La «Decisión» no recoge la única
     mención de S05 (el punto 8 omite l. 63: `REV-2026-079` hecho 4) y S05 no
     recoge la del ADR. Cada documento nombra al orchestrator para una función
     distinta.
  3. **«Aplicar un handoff» tiene dos lecturas en los propios textos.** S05 usa
     «aplicar» para la operación atómica de ownership («aplicación atómica»,
     justificación de l. 59; la transferencia «concluye al aplicarse», l. 60) y
     para las consecuencias posteriores a `completed` («aplicar consecuencias
     corresponde después a reconciliación operativa», l. 76; «la respuesta debe
     aplicarse después», l. 217; l. 231-232). ADR l. 112 usa la segunda
     («el seguimiento se aplica después al estado operativo»). Si l. 107-108 se
     refiere a la primera, el orchestrator ejecuta la capa de reconciliación
     previa a la aceptación, aunque S05 atribuye la aceptación al receptor; si
     se refiere a la segunda, es el responsable de la «reconciliación
     operativa» que `REV-2026-037` encontró sin actor. El texto no lo decide.
  4. **Incluye la autoridad, que S05 sitúa en otra capa.** «Autoridad» no es
     parte de la capa de reconciliación de S05 (l. 131), sino de «Semántica y
     autoridad», que «Incluye revisión humana cuando los acuerdos la exijan»
     (l. 132). S04 l. 110 reparte: el orchestrator «reconcilia el estado …
     asigna ownership»; runtime/policy «aplica permisos, límites, transiciones
     y autorizaciones determinísticamente»; la persona conserva autoridad sobre
     acuerdos, `build`, alto riesgo, aceptación y `deploy` sensible (y l. 112:
     los «gates de autorización» son de runtime/policy). l. 107-108 reúne en el
     orchestrator la reconciliación del estado y la de la autoridad sin ese
     reparto.
  5. **El «Contexto» y la «Decisión» no nombran actor.** l. 25-26 exige que el
     contrato se reconcilie «con el tracker y el repositorio reales»; el punto 6
     (l. 79-81) hace atómicos aceptación, cambio del tracker y `completed` sin
     decir quién los ejecuta. l. 107-108 es el único lugar de S05/ADR-004 que
     nombra un actor para la reconciliación previa (ya observado por `B020`,
     `B021` y `B038`, pregunta 3).
- Inferencia (si aplica): l. 107-108 es coherente con S04 l. 109-110 y es la
  lectura más probable de lo que S05 dejó sin escribir, pero introduce en una
  sección de consecuencias una asignación de responsabilidad que ninguna fila
  `accepted` de S05 contiene, con un verbo de dos sentidos y sin el reparto de
  autoridad de S04. No resuelve quién ejecuta la operación atómica, quién
  registra `rejected` sin receptor (`REV-2026-040` hecho 3) ni las partes del
  cierre coordinado (`REV-2026-042`).

## Observación y propuesta

- Observación: B020/B021 describieron las «Consecuencias» como coincidentes «en
  sustancia sin ampliar»; el contraste completo muestra que l. 107-108 sí
  amplía: añade un actor y un alcance («autoridad») que S05 no fija.
- Propuesta concreta: que la persona decida (a) si la reconciliación de l. 107-108
  es un acuerdo (y entonces se registra en S05 con fila o se remite con
  `deferred` a S11/ADR-010) o sólo una consecuencia descriptiva de S04 l. 110;
  (b) qué significa «aplicar un handoff»: la operación atómica del punto 6, el
  seguimiento de l. 112 o ambos; (c) si el orchestrator juzga la autoridad o
  sólo reconcilia el estado, dejando la autoridad a runtime/policy y a la
  persona según S04 l. 110 y 112; (d) si con ello se responden `REV-2026-037`
  (b), `REV-2026-040` (b) y la pregunta 1 de `B021`. No editar ADR-004, S04 ni
  S05 sin esa decisión.
- Contraargumento o coste/riesgo: S04 l. 110 ya da al orchestrator la
  reconciliación del estado y la asignación de ownership, y ADR-003 l. 74-75
  repite ese rol (citado en `REV-2026-074`), así que l. 107-108 puede leerse como
  aplicación directa de un acuerdo previo; «autoridad» puede significar
  comprobar que existen las referencias de `authority`, no juzgarlas. El coste
  es una frase en S05 o en ADR-004.

## Análisis adicional

- Evidencia interna: hechos 1-5 con sus localizadores.
- Contraevidencia y límites: no se leyeron S08, S11, ADR-007 ni ADR-010, que
  pueden asignar la reconciliación y la operación atómica a un componente del
  runtime; `research-orchestrator-responsibilities.md` no se releyó (S04 l. 110
  lo resume). No se afirma que el orchestrator no deba reconciliar: se afirma
  que el acuerdo canónico no lo dice y que el ADR lo dice de forma ambigua.
- Pregunta para resolver: ¿es un acuerdo que el orchestrator reconcilie base,
  tracker, repositorio, autoridad y conflictos, antes de qué acto exactamente
  («aplicar»), y quién juzga la autoridad frente a runtime/policy y la persona?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B039](blocks/B039.md), [B021](blocks/B021.md)
  (pregunta 1), [B038](blocks/B038.md) (pregunta 3),
  [`REV-2026-037`](2026-09-24-REV-2026-037-efecto-de-consultation-y-verification-request-sobre-el-status-de-s04-sin-regla-y-reconciliacion-operativa-sin-definir.md),
  [`REV-2026-040`](2026-09-24-REV-2026-040-actor-que-aplica-las-capas-de-validacion-y-registra-rejected-sin-fijar-y-capas-mecanizables-sin-clasificar.md),
  [`REV-2026-042`](2026-09-24-REV-2026-042-accepted-sin-salida-si-el-aceptante-desaparece-cierre-coordinado-sin-partes-y-escalacion-de-due-at-sin-observador-ni-representacion.md),
  [`REV-2026-074`](2026-09-25-REV-2026-074-decision-de-adr-003-omite-consultas-y-autoridad-humana-de-s04-y-deja-solo-build-aceptacion-y-deploy-como-intervencion.md),
  [`REV-2026-079`](2026-09-25-REV-2026-079-decision-de-adr-004-resume-s05-sin-regla-de-caducidad-cancelacion-del-emisor-atribucion-de-la-aceptacion-ni-lo-que-crece-tras-emitir.md),
  cruces `CT02` y `CT05`.

## Preguntas pendientes

Ver el checkpoint [B039](blocks/B039.md).

## Cobertura y límites

Ver el checkpoint [B039](blocks/B039.md). Fuentes externas: ninguna.
