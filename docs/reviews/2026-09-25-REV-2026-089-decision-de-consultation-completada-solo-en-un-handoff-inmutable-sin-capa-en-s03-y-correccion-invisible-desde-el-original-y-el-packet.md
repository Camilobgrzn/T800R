# Anotación de revisión

- ID de anotación: `REV-2026-089`
- Unidad y ubicación: cruce `CT01` — `S03` [«Decisiones»](../definition/session-03-sources-of-truth.md#decisiones)
  (l. 37-38), [«Distribución canónica inicial»](../definition/session-03-sources-of-truth.md#distribución-canónica-inicial)
  (l. 51-63, 66-68) y [«Contexto efímero y persistencia»](../definition/session-03-sources-of-truth.md#contexto-efímero-y-persistencia)
  (l. 93); `S04` [«Persistencia mínima de consultas y esperas»](../definition/session-04-operating-cycle.md#persistencia-mínima-de-consultas-y-esperas)
  (l. 298); `S05` [«Punto de entrada»](../definition/session-05-handoffs.md)
  (l. 19-20), [«Decisiones»](../definition/session-05-handoffs.md#decisiones)
  (l. 64, 76-78), [«Envoltura común mínima»](../definition/session-05-handoffs.md#envoltura-común-mínima)
  (l. 107-108), [«Integridad, deduplicación y referencias»](../definition/session-05-handoffs.md#integridad-deduplicación-y-referencias)
  (l. 183-192), [«Semántica inicial de los tipos»](../definition/session-05-handoffs.md#semántica-inicial-de-los-tipos)
  (l. 217) y [«Resultado mínimo de `completed`»](../definition/session-05-handoffs.md#resultado-mínimo-de-completed)
  (l. 229-232); `S06` l. 47, 87, 143-145; ADR-004 puntos 7 y 9 y
  «Consecuencias» (l. 82-86, 91-94, 109-112); ADR-005 l. 29-30. Bloques
  `B009`-`B010`, `B019`-`B021`, `B024`-`B025`, `B039`, `B041`.
- Revisión examinada: estado de los archivos al 2026-09-25; repositorio sin
  commits, huella no disponible. Citas distintivas: «El handoff no sustituye las
  fuentes canónicas» (S05 l. 19); «`consultation` | Respuesta o decisión
  atribuida a la autoridad, justificación, condiciones, referencias afectadas y
  acción de seguimiento» (S05 l. 229); «Cambio de requisito confirmado |
  Especificación o decisión correspondiente» (S03 l. 93).
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `media` (hechos textuales de confianza alta; la inferencia sobre el
  packet depende de qué otros marcadores cambien, abajo)
- Impacto: decide dónde reside con autoridad una decisión humana obtenida por
  `consultation` antes de incorporarse a la especificación o al ADR, y cómo se
  corrige. Si la única copia es un handoff que S05 declara no canónico y que es
  inmutable, o bien un artefacto fuera de la distribución de S03 funciona como
  fuente canónica de decisiones, o bien la decisión no tiene registro canónico
  durante ese intervalo; en ambos casos una corrección posterior no es visible
  desde el handoff original ni, necesariamente, desde el packet que lo usa como
  base.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (contradicción/omisión exclusivamente
  interna entre unidades; sin fuente externa)
- Fuente primaria: `docs/definition/session-03-sources-of-truth.md` l. 37-38,
  51-63, 66-68, 93; `docs/definition/session-04-operating-cycle.md` l. 298;
  `docs/definition/session-05-handoffs.md` l. 19-20, 64, 76-78, 107-108,
  183-192, 217, 229-232; `docs/definition/session-06-context.md` l. 47, 87,
  143-145; `docs/adr/ADR-004-contrato-portable-de-handoffs.md` l. 82-86, 91-94,
  109-112; `docs/adr/ADR-005-contrato-portable-de-contexto.md` l. 28-31
- Sección o localizador: los indicados arriba
- Fecha de consulta/publicación: consulta 2026-09-25; S03 acordada el
  2026-09-14, S04 el 2026-09-15, S05 y ADR-004 el 2026-09-16, S06 y ADR-005 el
  2026-09-18
- Hecho observado:
  1. **S03 no tiene capa para el handoff y envía las decisiones a otro
     sitio.** La distribución (l. 51-63) enumera once capas; el handoff no es
     ninguna. Las decisiones van a especificaciones y ADRs (l. 37, 53-54) y
     «Cambio de requisito confirmado» a «Especificación o decisión
     correspondiente» (l. 93).
  2. **S05 persiste la decisión humana en el handoff y difiere su
     aplicación.** `consultation` completa con «Respuesta o decisión atribuida
     a la autoridad» (l. 229; ADR-004 punto 7, l. 85-86); «La aplicación de sus
     consecuencias corresponde después a la reconciliación operativa»
     (l. 231-232; l. 76, 217; ADR-004 l. 111-112). S04 l. 298 exigía que «Al
     responder, se registrarán la decisión y la evidencia», sin decir dónde.
     Ninguna unidad del alcance nombra el artefacto canónico que recibe la
     decisión ni el momento (actor y evento sin fijar:
     [`REV-2026-037`](2026-09-24-REV-2026-037-efecto-de-consultation-y-verification-request-sobre-el-status-de-s04-sin-regla-y-reconciliacion-operativa-sin-definir.md)).
  3. **S05 niega al handoff el carácter canónico.** «El handoff no sustituye
     las fuentes canónicas: referencia tareas, acuerdos, revisiones y
     evidencia» (l. 19-20); `references` son «no copias con autoridad propia»
     (l. 107); las referencias «no convierten sus copias o material
     transportado en autoridad» (l. 192). En cambio ADR-005 l. 29-30 atribuye al
     handoff conservar «intención, autoridad, lifecycle y ownership»
     ([`REV-2026-082`](2026-09-25-REV-2026-082-glosario-y-contexto-de-adr-005-homonimos-packet-y-adapter-handoff-custodio-de-ownership-y-alternativa-adapter-libre-sin-rejected.md)
     hecho 3).
  4. **Entre `completed` y la reconciliación, la decisión sólo está en el
     handoff.** Por 1-3, durante ese intervalo la decisión de la persona no
     existe en ninguna capa de S03, y el único registro es un artefacto que
     S05 declara no canónico. No es una copia de un original: es el original.
  5. **La regla de corrección de S03 no puede aplicarse al handoff.** S03
     corrige el derivado que contradice al original (l. 38, 66). En S05 los
     estados terminales «serán inmutables» (l. 77), `payload`, `references` y
     `correlation` quedan inmutables tras emitir y el resultado «sólo crece»
     (l. 183-185); corregir exige «un identificador nuevo y una relación tipada
     con el handoff anterior» (l. 190-191; l. 77; ADR-004 l. 109-110), y
     `superseded` sólo sustituye un `pending` (l. 64). El nuevo handoff apunta
     al anterior; el anterior, inmutable, no puede apuntar al nuevo y sigue
     `completed` con la respuesta superada.
  6. **El packet puede no ver la corrección.** `base` referencia «el handoff
     aplicable» (S06 l. 87) y la reconciliación compara «el estado del handoff»
     (l. 47, 143-144); si coinciden los marcadores, el packet se reutiliza sin
     releer (l. 144-145). Una corrección mediante otro handoff no cambia el
     estado terminal del original.
  7. **Dos respuestas de la autoridad no tienen precedencia.** Si la persona
     responde de nuevo con otra decisión, hay dos originales atribuidos a la
     misma autoridad; S03 sólo prevé «comprobar ámbito y versión» (l. 38,
     67-68) y el handoff no tiene versión de la decisión más allá de sus
     eventos (S05 l. 109). Es un caso concreto de
     [`REV-2026-017`](2026-09-21-REV-2026-017-regla-de-discrepancias-entre-originales-con-casos-sin-salida.md).
- Inferencia (si aplica): ninguna unidad aislada es incoherente: S03 no conoce
  el handoff, S05 lo declara no canónico y ADR-004 difiere la aplicación. Sólo
  al juntarlas aparece un intervalo en que la autoridad de una decisión humana
  depende de un artefacto sin lugar en la distribución y sin vía de corrección
  visible. La inferencia 6 no se sostiene si la emisión o la respuesta de la
  consulta cambian también la revisión del tracker (otro marcador), lo que las
  unidades no fijan (`REV-2026-037`, `REV-2026-050`).

## Observación y propuesta

- Observación: la garantía «ninguna copia obtiene autoridad» está bien
  escrita para lo que el handoff transporta, pero el resultado de una
  `consultation` no es transporte: es la primera persistencia de una decisión.
  El texto lo trata como si fuera una copia (no canónico, inmutable,
  correlación hacia atrás) y a la vez deja su incorporación al canon sin
  actor ni plazo.
- Propuesta concreta: que la persona decida entre (a) reconocer en S03 (o en
  la unidad que corresponda) que el resultado `completed` de una
  `consultation` es el registro canónico de la decisión hasta su
  incorporación, con qué alcance y cómo se marca su sustitución (por ejemplo,
  un evento de seguimiento en el original, que S05 ya permite porque los
  eventos «sólo crecen»); o (b) exigir que la reconciliación operativa
  incorpore la decisión a la especificación, el ADR o el tracker como parte de
  completar la consulta o en un plazo observable, con el handoff como
  evidencia; y en ambos casos (c) fijar qué prevalece entre dos respuestas
  sucesivas de la misma autoridad.
- Contraargumento o coste/riesgo: (1) una lectura razonable es que el handoff
  es evidencia de la decisión (S03 l. 58: «revisiones humanas
  correspondientes») y que la evidencia sí es capa; pero S03 asigna a la
  evidencia «Qué se comprobó», no las decisiones, y S05 no clasifica así el
  resultado. (2) S05 permite que los eventos crezcan (l. 184-185), lo que
  podría usarse para enlazar el sucesor sin tocar lo inmutable; no está
  escrito. (3) Declarar el handoff canónico para decisiones duplica la función
  del ADR y del tracker; por eso la alternativa (b) puede ser preferible.

## Análisis adicional

- Evidencia interna: S03 l. 51-63/93 frente a S05 l. 229-232 y l. 19-20
  (destino frente a lugar real); S03 l. 38/66 frente a S05 l. 77, 183-191
  (corregir frente a inmutabilidad); S06 l. 87/143-145 frente a S05 l. 77
  (marcador que no cambia). Amplía
  [`REV-2026-020`](2026-09-21-REV-2026-020-tabla-de-persistencia-sin-destino-para-lo-no-confirmado.md)
  (la consulta abierta ya tiene lugar en el handoff; lo que queda sin destino
  canónico es la decisión ya tomada y aún no aplicada) y `REV-2026-037`
  (aquí la cuestión es de autoridad, no de transición de `status`).
- Contraevidencia y límites: no se leyeron S08, S09, S11 ni S12 más allá de
  búsquedas; S09 trata aprobaciones persistentes y correlacionadas
  (S09 l. 67, por búsqueda) y podría ubicar las decisiones de permiso, no las
  de requisito. La misma estructura afecta en menor medida al veredicto de
  `verification_request` (S05 l. 228), cuya autoridad S03 sí sitúa en la
  evidencia (l. 58); no se desarrolla aquí.
- Pregunta para resolver: cuando una `consultation` se completa con una
  decisión de la persona que cambia un requisito, ¿qué fuente es la autoridad
  de esa decisión hasta que se incorpora al canon, quién la incorpora y cuándo,
  y cómo se ve desde el handoff original que fue corregida?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [CT01](blocks/CT01.md), [B010](blocks/B010.md),
  [B021](blocks/B021.md), [B039](blocks/B039.md), [B041](blocks/B041.md)

## Preguntas pendientes

Ver el checkpoint [CT01](blocks/CT01.md).

## Cobertura y límites

Ver el checkpoint [CT01](blocks/CT01.md). Sin fuentes externas: el problema es
interno.
