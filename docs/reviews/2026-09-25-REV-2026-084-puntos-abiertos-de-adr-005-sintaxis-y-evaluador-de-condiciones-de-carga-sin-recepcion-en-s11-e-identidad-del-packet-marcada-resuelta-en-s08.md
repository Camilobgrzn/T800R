# Anotación de revisión

- ID de anotación: `REV-2026-084`
- Unidad y ubicación: `ADR-005` — [«Puntos abiertos»](../adr/ADR-005-contrato-portable-de-contexto.md#puntos-abiertos),
  `docs/adr/ADR-005-contrato-portable-de-contexto.md:118-121`, frente a `S06`
  (l. 57-58), `S08` (l. 81, 84, 111, 206-226, 360-374), `ADR-007` (puntos 8, 9
  y 13, l. 86-91, 101-103), `S11` (l. 69, 78, 103, 115, 144, 157, 166, 198-206,
  212-225), `ADR-010` (l. 124-127, 137-140, 190-196) y `S12` (l. 43-50, 63-65,
  70-75). Bloque `B043`.
- Revisión examinada: estado de los archivos al 2026-09-25 (repositorio sin
  commits; ADR-005 fechado 2026-09-18 y editado después en l. 118-128; S08 y
  ADR-007 cerrados el 2026-09-22; S11 y ADR-010 el 2026-09-24; S12
  `in_progress`). Citas distintivas: «¿Qué sintaxis expresa las condiciones de
  carga del manifest? → semántica declarativa resuelta en sesión 8; sintaxis y
  evaluador → sesión 11» (ADR-005 l. 120-121); «la sintaxis y el evaluador se
  decidirán en arquitectura» (S08 l. 111); «¿Cómo se representan identidad
  lógica y aliases del packet? → contrato lógico resuelto en sesión 8 y
  [ADR-007]» (ADR-005 l. 118-119); «La segunda auditoría no encontró decisiones
  humanas de arquitectura pendientes» (S11 l. 223-224).
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos textuales del hecho 1 (búsquedas en todo
  `docs/` salvo `reviews/` de «evaluador», «condiciones de carga|condición de
  carga|trigger|disclosure|sintaxis», «predicad|unknown», «carga|cargar» en S11
  y «carga|predicad|packet» en ADR-010); `media` sobre el hecho 2, que admite
  una lectura alternativa razonable; `media` sobre el efecto (S08, S11, S12 y
  ADR-010 sólo en las líneas citadas; no se revisaron como bloques).
- Impacto: si el schema `context-packet` que S11 compromete (l. 115) y la
  estrategia contract-first (ADR-010 punto 15) pueden escribirse sin decidir
  cómo se expresan y quién evalúa las condiciones de carga del `manifest`; si
  S12, que exige «ausencia de ambigüedades que impidan implementar las pruebas»
  (l. 63-65), recibe esa decisión; y qué documento define la identidad y los
  aliases del context packet que ADR-005 da por resueltos. No cambia ninguna
  fila aceptada.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión exclusivamente interna; no requiere
  fuente externa según el [README](README.md)).
- Fuente primaria: `docs/adr/ADR-005-contrato-portable-de-contexto.md:3, 116-139`;
  `docs/definition/session-06-context.md:56-58`;
  `docs/definition/session-08-portability.md:3, 75, 81, 84, 99, 111-115,
  206-227, 355-394`; `docs/adr/ADR-007-contrato-de-capacidades-y-adapters-portables.md:3,
  84-106, 119-133`; `docs/definition/session-11-mvp-architecture.md:3, 24-40,
  62-69, 78, 84, 91, 103, 115-116, 144, 153, 157, 166-169, 173, 179, 198-235`;
  `docs/adr/ADR-010-arquitectura-tecnica-del-mvp.md:3, 118-209`;
  `docs/definition/session-12-validation-convergence.md:1-76`; búsquedas
  indicadas en «Confianza».
- Sección o localizador: ver «Unidad y ubicación».
- Fecha de consulta/publicación: consulta 2026-09-25.
- Hecho observado:
  1. **La sintaxis y el evaluador de las condiciones de carga se envían tres
     veces a arquitectura y S11 no los recibe.** S06 l. 58 (`deferred`): «La
     sintaxis o representación de las condiciones de carga del `manifest`» → «las
     sesiones 8 y 11». S08 l. 111 (`accepted`) fija la semántica («predicados sin
     efectos sobre hechos portables y verificables … Evalúan `true`, `false` o
     `unknown`») y remite: «la sintaxis y el evaluador se decidirán en
     arquitectura»; S08 l. 360-374 añade que «Una condición sólo consulta hechos
     tipados y referenciados» y que su evaluación registra «condición, hechos y
     revisiones consultados, actor, resultado y sección afectada». ADR-005
     l. 120-121 repite el destino («sintaxis y evaluador → sesión 11»), y ADR-007
     punto 13 (l. 102-103) recoge la semántica. S11, cerrada el 2026-09-24, no
     contiene «condición de carga», «predicado», «trigger», «disclosure» ni
     «manifest» salvo el schema `distribution-manifest` (l. 115); su único
     «evaluador» es el de política (l. 144), y «carga» sólo aparece en
     l. 119-120, sobre descargas. ADR-010 no contiene «carga» ni «predicad», y
     sus «Puntos abiertos» (l. 190-196) tratan tuplas, corpus y mecanismos
     diferidos. S11 sí fija el contenedor, pero no el lenguaje: schema
     `context-packet` (l. 115), JSON Schema para estructura con «suficiencia» en
     `core` (l. 69), el runtime «ensambla contexto» (l. 103) y el módulo
     `context` «posee ensamblajes y estados de packets» (l. 157). Para la
     política, en cambio, S11 decidió una DSL con selectores tipados,
     prohibición de «código, comandos ni expresiones generales», un «evaluador
     puro» y `default deny` ante condición desconocida (l. 144). Nada equivalente
     fija qué hechos tipados admite una condición, cómo se combinan los cinco
     triggers de S08 l. 362-365, cómo se escribe la condición en el `manifest`
     ni dónde se persiste el registro de su evaluación. S11 declara que su
     segunda auditoría «no encontró decisiones humanas de arquitectura
     pendientes» (l. 223-224), y S12 no contiene «packet», «carga» ni
     «manifest» (lectura completa, l. 1-76).
  2. **La identidad y los aliases del packet se marcan resueltos en S08/ADR-007,
     que no los tratan.** S06 l. 57 (`deferred`): «La identidad lógica y los
     aliases concretos del context packet» → «sesión 8». ADR-005 l. 118-119:
     «contrato lógico resuelto en sesión 8 y [ADR-007]». S08 «Identidad
     portable» (l. 206-226) define `actor_id`, `actor_type`, `execution_id` y
     aliases cuyo objetivo es «`actor_id` o `execution_id`» (l. 84, 222-226).
     ADR-007 punto 8 (l. 86-88) resume lo mismo y el punto 9 (l. 89-91) define
     `knowledge_id`. Ninguno de los dos define la identidad de un packet ni sus
     aliases. S11 l. 166 dice que el ledger «conserva identidad» del packet junto
     al digest y que el adapter recibe «una proyección temporal identificada»,
     pero no define aliases. «aliases del packet» sólo aparece en ADR-005 l. 118
     (búsqueda en `docs/` salvo `reviews/`).
  3. **Contexto: ningún destino de S11 lleva marca.** Los cinco puntos nombran
     la sesión 11 (l. 119, 121, 123, 125, 128) y ninguno se marca, aunque S11
     cerró el 2026-09-24. Cuatro sí llevan marcas de S07 u S08 (2026-09-21/22),
     posteriores a la fecha del ADR (`REV-2026-054` hecho 3). Es el patrón de
     `REV-2026-066`/`070`/`076` hecho 1; aquí sólo sirve para ubicar el hecho 1:
     un destino marcado sin recepción, como los runbooks de `REV-2026-076`
     hecho 2.
- Inferencia (si aplica): quien use «Puntos abiertos» de ADR-005 como
  inventario verá la sintaxis y el evaluador asignados a una sesión cerrada que
  no los decidió. S11 y ADR-010 tampoco los listan como diferidos, y S12 no los
  recibe. Sin decisión, el lenguaje de condiciones del `manifest` llegaría a
  construcción como detalle de implementación, contra la frontera de fase de
  `AGENTS.md` (l. 5-10), aunque condiciona la carga bajo demanda, la parada por
  `unknown` persistente (S08 l. 369-372) y el schema `context-packet`.

## Observación y propuesta

- Observación: lo distinto respecto de `REV-2026-054` (inventario de S06 frente
  al ADR) y del patrón `REV-2026-066`/`070`/`076` (destinos cerrados sin marca)
  es la comprobación en el destino: el único punto de ADR-005 cuyo destino
  declarado es exclusivamente una decisión de arquitectura sobre el contrato no
  fue recibido por S11 ni por ADR-010. Además, el punto marcado como resuelto en
  S08/ADR-007 trata identidades de actor, ejecución y conocimiento, no de packet.
- Propuesta concreta: que la persona decida (a) si la sintaxis y el evaluador de
  las condiciones de carga (vocabulario de hechos tipados, combinación de
  triggers, representación en el `manifest`, ubicación del registro de
  evaluación) se deciden en S12 como incógnita con disposición (S12 l. 47-48),
  se declaran detalle de construcción acotado por S08 l. 111 y 360-374 y se
  registran así en S11 o ADR-010, o se consideran ya cubiertos por S11 l. 69, 115
  y 157; (b) si ADR-005 l. 120-121 marca el destino efectivo resultante; (c) si
  la identidad lógica del packet es su `id` más el digest y la identidad del
  ledger (S11 l. 166), si un packet tiene aliases o sólo proyecciones
  identificadas, y si la marca de l. 118-119 cita S11 l. 166 en lugar de
  S08/ADR-007. No editar ADR-005, S06, S08, S11, ADR-010 ni S12 sin esa decisión.
- Contraargumento o coste/riesgo: S08 ya limita el lenguaje (sin código, sin
  estado privado del proveedor, hechos tipados, resultado ternario), de modo que
  la sintaxis puede considerarse un detalle de implementación. S11 fija JSON y
  JSON Schema para los contratos entre procesos (l. 69, 78) y asigna el
  ensamblaje al módulo `context` (l. 157), lo que da contenedor y responsable. La
  omisión en S11 puede ser deliberada. Para el hecho 2, «identidad lógica y
  aliases» puede referirse a las identidades que el packet contiene
  (`producer`/`consumer`, `REV-2026-049`), que S08 sí resuelve, y la
  «proyección temporal identificada» puede hacer de alias del proveedor. Aun
  así, ningún documento dice que la sintaxis y el evaluador se difieren a
  construcción, y S11 hizo explícita la decisión equivalente para la política. El
  coste es una fila o una pregunta abierta en S12 y una línea en ADR-005.

## Análisis adicional

- Evidencia interna: hechos 1-3 con sus localizadores; mapa de «Puntos
  abiertos» en [B043](blocks/B043.md).
  [`REV-2026-054`](2026-09-24-REV-2026-054-puntos-abiertos-de-adr-005-divergen-de-las-filas-deferred-de-s06-seccion-knowledge-y-representacion-fisica-sin-fila-y-destinos-ampliados.md)
  hecho 3 (destinos ampliados y marcas posteriores; no se duplica),
  [`REV-2026-049`](2026-09-24-REV-2026-049-nucleo-del-context-packet-frente-a-handoff-v1-homonimos-sin-enlace-schema-sin-identificador-ni-version-y-producer-consumer-sin-modelo-de-identidad-con-capacidad-como-destinatario.md)
  (identidad de `producer`/`consumer` e `id` del packet),
  [`REV-2026-076`](2026-09-25-REV-2026-076-detalles-diferidos-de-adr-003-con-destinos-cerrados-sin-marca-runbooks-de-maintain-sin-recepcion-en-s09-y-referencias-sin-adr-posteriores.md)
  hecho 2 (destino cerrado sin recepción),
  [`REV-2026-081`](2026-09-25-REV-2026-081-puntos-abiertos-de-adr-004-sin-reglas-residuales-de-handoff-no-recibidas-por-s11-ni-s12-y-s11-adr-010-sin-acuse-de-adr-004.md)
  (reglas de `handoff/v1` sin receptor antes de construir; mismo efecto sobre
  S12),
  [`REV-2026-083`](2026-09-25-REV-2026-083-decision-de-adr-005-resume-s06-sin-regla-capa-estado-limites-del-adapter-ni-exclusividad-de-carga-y-s08-la-cita-como-fuente.md)
  hecho 3 (condiciones de carga sin «únicamente» en la «Decisión»).
- Contraevidencia y límites: S08, S11, S12 y ADR-010 no se revisaron como
  bloques; una decisión podría figurar con otra redacción («regla de
  activación», «selector de sección»). La búsqueda de «sección» en S11 sólo
  devolvió usos sobre reconciliadores, artefactos y skills (l. 153, 166, 168,
  173). No se afirma que la ausencia bloquee la construcción; se afirma que
  nadie ha decidido si la bloquea. El hecho 2 queda con confianza media por la
  lectura alternativa indicada.
- Pregunta para resolver: ¿qué sesión o artefacto decide, antes de autorizar la
  construcción, la sintaxis y el evaluador de las condiciones de carga que S06,
  S08 y ADR-005 enviaron a la sesión 11, y qué define la identidad y los
  aliases del context packet que ADR-005 l. 118-119 da por resueltos en
  S08/ADR-007?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B043](blocks/B043.md), [B042](blocks/B042.md),
  [B040](blocks/B040.md), [B026](blocks/B026.md); cruces `CT03`, `CT05` y
  `CT07`.

## Preguntas pendientes

Ver el checkpoint [B043](blocks/B043.md).

## Cobertura y límites

Ver el checkpoint [B043](blocks/B043.md). Fuentes externas: ninguna; el
problema es interno.
