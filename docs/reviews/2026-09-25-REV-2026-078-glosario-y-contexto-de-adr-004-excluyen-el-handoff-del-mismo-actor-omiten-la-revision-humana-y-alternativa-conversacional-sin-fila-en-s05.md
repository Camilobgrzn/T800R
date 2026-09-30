# Anotación de revisión

- ID de anotación: `REV-2026-078`
- Unidad y ubicación: `ADR-004` — [«TL;DR»](../adr/ADR-004-contrato-portable-de-handoffs.md#tldr)
  (l. 9), [«Glosario rápido»](../adr/ADR-004-contrato-portable-de-handoffs.md#glosario-rápido)
  (l. 14, 17), [«Contexto»](../adr/ADR-004-contrato-portable-de-handoffs.md#contexto)
  (l. 22, 29-31) y [«Alternativas evaluadas»](../adr/ADR-004-contrato-portable-de-handoffs.md#alternativas-evaluadas)
  (l. 39), frente a [S05](../definition/session-05-handoffs.md) l. 9, 44-58,
  78, 183-188 y 217 y a ADR-004 l. 63-66 y 91-94 (bloque `B039`). Bloque `B038`.
- Revisión examinada: estado de los archivos al 2026-09-25 (repositorio sin
  commits; ADR-004 y S05 fechados 2026-09-16). Citas distintivas: «artefacto
  persistente que dirige trabajo, responsabilidad o una solicitud a otro actor»
  (l. 14); «un contrato común tipado, inmutable e idempotente» (l. 9);
  «solicitar información, decisión o permiso» (l. 31); «Coordinación
  conversacional o específica del proveedor | … | Descartada.» (l. 39).
- Tipo: `incompleto`
- Gravedad: `baja`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos textuales; `media` sobre el impacto
- Impacto: el ámbito que un lector deduce del glosario (si un handoff dentro del
  mismo actor es un handoff), lo que se entiende por «inmutable», la presencia
  de la persona en las intenciones de consulta y el registro de una alternativa
  descartada. No cambia ningún acuerdo.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (contradicciones y omisiones internas; no se
  invoca fuente externa).
- Fuente primaria: `docs/adr/ADR-004-contrato-portable-de-handoffs.md` l. 1-60
  (bloque) y l. 63-66, 91-94 (dependencia, bloque `B039`); búsqueda de
  «human|persona|actor» en todo ADR-004 (sólo l. 14, 22, 64, 65, 91);
  `docs/definition/session-05-handoffs.md` l. 7-10, 44-58, 78, 183-188, 217.
- Sección o localizador: ver arriba.
- Fecha de consulta/publicación: consulta 2026-09-25; ADR-004 y S05 fechados
  2026-09-16.
- Hecho observado:
  1. **El glosario excluye el handoff dentro del mismo actor que la
     «Decisión» y S05 hacen obligatorio.** l. 14 define el handoff como
     artefacto que dirige algo «a otro actor». S05 l. 58 («Dentro del mismo
     actor también será obligatorio si debe sobrevivir a la ejecución o
     conservarse para auditoría») y ADR-004 l. 65-66 («También se persiste
     dentro del mismo actor…») incluyen ese caso. El objetivo de S05 (l. 7-8)
     habla de transferir «entre agentes, sesiones y capacidades», no sólo entre
     actores.
  2. **El TL;DR llama «inmutable» al contrato, mientras S05 fija qué parte no
     lo es.** l. 9: «contrato común tipado, inmutable e idempotente». S05 l. 78
     y l. 183-185 separan lo inmutable (identidad, intención, contenido emitido)
     de lo que «sólo crece» (estado, eventos y resultado), y ADR-004 l. 91-92
     enumera los inmutables. El TL;DR generaliza; los tiempos, además, no
     figuran en ninguna lista (`REV-2026-043`). La definición de idempotencia
     (l. 17, «repetir la misma entrega») hereda la indefinición de «contenido»
     de `REV-2026-043`; no se duplica.
  3. **El «Contexto» retira la revisión humana de las intenciones de
     consulta.** l. 30-31: «solicitar información, decisión o permiso». S05
     l. 217 define `consultation` como «Solicitar información, decisión,
     revisión humana o permiso a una autoridad identificada». En ADR-004 no
     aparecen «human» ni «persona» (búsqueda en todo el archivo), y el glosario
     no define «actor» (l. 14, 22). Con ello desaparece del ADR la única
     mención de la persona en las intenciones del contrato, lo que agrava para
     el ADR `REV-2026-038` (persona sin lugar como actor) y repite el patrón de
     `REV-2026-074` (ADR-003 sin «persona»).
  4. **La alternativa conversacional no tiene fila en S05.** l. 39 registra
     «Coordinación conversacional o específica del proveedor» como
     «Descartada». S05 l. 44-48 no la evalúa y sus dos filas `rejected`
     (l. 55-56) corresponden a las otras dos descartadas del ADR (l. 40-41). S05
     sólo excluye la dependencia conversacional en su objetivo (l. 9, «sin
     depender del contexto conversacional»). A diferencia de ADR-001-003
     (`REV-2026-064`, `067`, `071`), aquí dos de tres descartes sí constan como
     `rejected` y el resultado usa «Descartada»/«Aceptada».
- Inferencia (si aplica): quien use el glosario o el TL;DR como resumen
  normativo puede excluir del contrato la persistencia dentro del mismo actor,
  tratar estado y eventos como inmutables o no ver que una consulta puede pedir
  revisión humana.

## Observación y propuesta

- Observación: son divergencias de resumen, no de decisión; la «Decisión» del
  ADR (l. 63-66, 91-94) y S05 contienen la regla correcta para los hechos 1 y 2.
  El hecho 3 sí elimina contenido de S05 que no se recupera en el resto del ADR.
- Propuesta concreta: que la persona decida si (a) el glosario dice «a otro
  actor, o al mismo actor cuando debe sobrevivir a la ejecución»; (b) el TL;DR
  sustituye «inmutable» por «con contenido emitido inmutable»; (c) l. 31
  recupera «revisión humana» o el ADR declara que se subordina a S05; y (d) la
  alternativa conversacional se registra como `rejected` en S05 o se acepta que
  el objetivo basta. No editar ADR-004 ni S05 sin esa decisión.
- Contraargumento o coste/riesgo: el glosario y el TL;DR son ayudas de lectura
  y la «Decisión» prevalece en la práctica; «decisión» puede englobar la
  revisión humana; y el objetivo de S05 ya excluye la dependencia
  conversacional. El coste de corregirlo es de unas pocas palabras.

## Análisis adicional

- Evidencia interna: hechos 1-4 con sus localizadores. l. 25 («preservar el
  ownership único de ADR-003») sí tiene respaldo (ADR-003 l. 9, 19, 66; S04
  l. 108) y no forma parte del hallazgo.
- Contraevidencia y límites: no se leyó S08, que define `actor_type`
  (`REV-2026-038` hecho 1) y podría incluir a la persona; ADR-004 l. 61-133 sólo
  por búsqueda y por las líneas citadas (bloques `B039`-`B040`). Es la mejor
  lectura opuesta: un ADR resume y no tiene por qué repetir cada término.
- Pregunta para resolver: ¿el glosario y el TL;DR de ADR-004 deben coincidir
  con el ámbito y la inmutabilidad de S05, y debe el ADR recuperar la revisión
  humana como intención de `consultation`?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B038](blocks/B038.md), [B019](blocks/B019.md),
  [B021](blocks/B021.md),
  [`REV-2026-038`](2026-09-24-REV-2026-038-tipo-de-actor-sin-enumeracion-y-persona-sin-lugar-en-handoff-v1-como-actor-receptor-o-aceptante.md),
  [`REV-2026-043`](2026-09-24-REV-2026-043-tiempos-de-la-envoltura-fuera-de-los-inmutables-contenido-de-la-idempotencia-sin-definir-y-resultado-de-completed-sin-campo.md),
  [`REV-2026-063`](2026-09-25-REV-2026-063-glosario-de-adr-001-redefine-harness-y-repositorio-consumidor-frente-a-s01-y-contrato-de-trabajo-sin-artefacto.md),
  [`REV-2026-073`](2026-09-25-REV-2026-073-glosario-de-adr-003-define-incremento-como-autorizado-frente-a-incrementos-en-plan-y-drafts-de-maintain-y-ciclo-con-stage-y-status-sin-definir.md),
  [`REV-2026-074`](2026-09-25-REV-2026-074-decision-de-adr-003-omite-consultas-y-autoridad-humana-de-s04-y-deja-solo-build-aceptacion-y-deploy-como-intervencion.md),
  [`REV-2026-071`](2026-09-25-REV-2026-071-alternativas-de-adr-003-sin-estado-sin-fila-rejected-en-s04-sin-opciones-de-ownership-y-aprobacion-por-etapa-frente-a-gates-del-proyecto.md),
  cruces `CT02` y `CT07`.

## Preguntas pendientes

Ver el checkpoint [B038](blocks/B038.md).

## Cobertura y límites

Ver el checkpoint [B038](blocks/B038.md). Sin fuentes externas.
