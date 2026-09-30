# Anotación de revisión

- ID de anotación: `REV-2026-083`
- Unidad y ubicación: `ADR-005` — [«Decisión»](../adr/ADR-005-contrato-portable-de-contexto.md#decisión)
  (puntos 3, 4, 5, 6, 7, 8, 9 y 10, l. 70-96) y
  [«Consecuencias para el equipo»](../adr/ADR-005-contrato-portable-de-contexto.md#consecuencias-para-el-equipo)
  (l. 111-112), frente a `S06` — [«Decisiones»](../definition/session-06-context.md#decisiones)
  (l. 46-52), [«Capas de validación del context packet»](../definition/session-06-context.md#capas-de-validación-del-context-packet)
  (l. 64-74), [«Reglas de progressive disclosure»](../definition/session-06-context.md#reglas-de-progressive-disclosure)
  (l. 112-119), [«Presupuesto y prioridades»](../definition/session-06-context.md#presupuesto-y-prioridades)
  (l. 123-133), [«Reconciliación incremental»](../definition/session-06-context.md#reconciliación-incremental)
  (l. 149-152), [«Impacto de cambios»](../definition/session-06-context.md#impacto-de-cambios)
  (l. 158-163), [«Estados observables del context packet»](../definition/session-06-context.md#estados-observables-del-context-packet)
  (l. 169-171) y [«Condiciones de parada y evidencia»](../definition/session-06-context.md#condiciones-de-parada-y-evidencia)
  (l. 183-184); y a `S08` l. 126, 277, 363-364 y 393, y `S07` l. 107, que citan
  ADR-005 como fuente. Bloque `B042`.
- Revisión examinada: estado de los archivos al 2026-09-25 (repositorio sin
  commits; ADR-005 fechado 2026-09-18, «Aceptada»; S06 cerrada el 2026-09-18).
  Citas distintivas: «Se amplía por exigencia de tarea o capacidad, ambigüedad
  relevante, comprobación de vigencia o evidencia, dependencia o solicitud de un
  actor autorizado» (ADR l. 71-72); «Los adapters añaden métricas disponibles y
  reservan capacidad» (l. 75-76); «Si no caben, no se actúa» (l. 80); «Las capas
  son `structural`, `referential`, `freshness` y `sufficiency`» (l. 90);
  «Los adapters pueden usar métricas y herramientas propias» (l. 111); «Puede
  combinar los triggers ya aceptados por ADR-005» (S08 l. 363).
- Tipo: `incompleto`
- Gravedad: `baja`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos textuales (lectura completa de ADR-005
  l. 56-121 y de S06 l. 39-206; búsqueda de «límite|caché|agente|explícit|
  disponibilidad» en ADR-005 y de «ADR-005» en `docs/` salvo `reviews/`); `media`
  sobre el impacto (S08 sólo l. 126, 272-279 y 358-394)
- Impacto: qué reglas de carga, presupuesto, estado y parada aplica quien use la
  «Decisión» de ADR-005 como contrato del context packet. A diferencia de ADR-004
  (`REV-2026-079`), sesiones posteriores citan ADR-005 como fuente normativa.
  No cambia ninguna fila aceptada de S06.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (divergencia exclusivamente interna; no requiere
  fuente externa según el [README](README.md)).
- Fuente primaria: `docs/adr/ADR-005-contrato-portable-de-contexto.md:61-114`;
  `docs/definition/session-06-context.md:46-52, 64-74, 112-133, 142-192`;
  `docs/definition/session-08-portability.md:126, 272-277, 360-374, 392-394`;
  `docs/definition/session-07-knowledge.md:107` (por búsqueda).
- Sección o localizador: ver «Unidad y ubicación».
- Fecha de consulta/publicación: consulta 2026-09-25; ADR-005 y S06 fechados
  2026-09-18.
- Hecho observado:
  1. **La «Decisión» nombra capas y estados sin la regla que los une.** S06 l. 51
     (`accepted`) y l. 71-74: «Un packet bien formado queda `ready` si pasa todo lo
     requerido; queda `degraded` únicamente por faltantes `relevant` u `optional`
     declarados; queda `invalid` si falla el núcleo, material `required`,
     restricciones, contradicciones o presupuesto obligatorio». La tabla l. 64-69
     fija qué comprueba cada capa. ADR-005 punto 9 (l. 90-92) sólo enumera las
     cuatro capas y el caso estructural. El punto 8 (l. 87-89) describe cada estado
     sólo por lo que permite hacer. Ningún punto dice cuándo un packet es `ready`
     o `degraded`. El punto 10 (l. 94-96) enumera causas de parada que se
     aproximan a las de `invalid`, sin vincularlas a ese estado. Es un matiz al
     contraste 5 de [B025](blocks/B025.md), que declaró que el punto 9
     «coincide» sólo en el diagnóstico estructural.
  2. **Los límites del adapter desaparecen, y el adapter pasa a ser
     opcional.** S06 l. 50 y 125: el adapter «añadirá/incorpora los límites y las
     estimaciones cuantitativas disponibles». Esos límites deciden si lo
     obligatorio «cabe» y, por tanto, `invalid` y la parada (`REV-2026-048`
     hecho 3). ADR-005 punto 4 (l. 75) dice «Los adapters añaden métricas
     disponibles», y «Consecuencias» l. 111-112 dice que «pueden usar métricas y
     herramientas propias». La palabra «límite» no aparece en ADR-005 (búsqueda).
     Los puntos 5 («Si no caben», l. 80) y 10 («presupuesto insuficiente», l. 96)
     juzgan contra una capacidad cuyo aportante el ADR no nombra. El glosario
     l. 18 tiene la misma omisión (`REV-2026-082` hecho 2).
  3. **Las condiciones de carga pierden su carácter exclusivo.** S06 l. 113:
     «se carga únicamente si…»; l. 117-119: «La disponibilidad por sí sola no
     justifica una carga; cargar una sección … no sustituye la reconciliación con
     las fuentes canónicas»; l. 115-116: «la solicita explícitamente un actor
     autorizado»; l. 116-117: «registra la sección, la condición activada y la
     revisión de la fuente». ADR-005 punto 3 (l. 71-73) dice «Se amplía por …»,
     sin «únicamente» ni la exclusión de la disponibilidad. También omite
     «explícitamente» y cambia «ambigüedad que afecta la corrección» por
     «ambigüedad relevante», y el registro por «causa y revisión», sin la sección
     (`B024` contraste 8). S08 l. 363-364 cita «los triggers ya aceptados por
     ADR-005» con una tercera redacción («una ambigüedad capaz de cambiar acción
     o veredicto»), que es la de la parada de S06 l. 52.
  4. **La parada pierde actor, salida y condición de continuación.** S06 l. 50 y
     132-133: «el agente se detiene antes de actuar y solicita reducir el
     alcance, ampliar la capacidad o dividir el trabajo». S06 l. 183-184: «Sólo
     continúa si existe una fuente candidata autorizada y cabe en presupuesto».
     ADR-005 punto 5 dice «Si no caben, no se actúa» y el punto 10 dice «falta de
     una fuente autorizada» (`B024` contraste 12; `B025` contraste 6). Además, el
     punto 11 (l. 97-99) no incluye la parada entre los eventos con evidencia
     (`REV-2026-052` hechos 1 y 4). En la «Decisión», la parada no tiene actor ni
     solicitud ni registro.
  5. **Otras cláusulas protectoras omitidas.** Punto 6 (l. 81-83): no incluye «la
     caché y las señales de invalidación … no son fuentes de verdad» (S06 l. 47,
     150-152) ni la lista de marcadores (`B025` contraste 11). Punto 7
     (l. 84-86): no incluye las categorías que hacen `packet` un cambio («base,
     ownership, permisos o contrato aplicable», l. 158), `check_after` (l. 162),
     «se registra» para `advisory` (l. 160) ni que la recarga `section` conserva
     la revisión anterior (l. 159). Punto 8: no incluye «u obsoleto» (l. 170) ni
     «exige reconciliar o reconstruir» (l. 171) (`REV-2026-051` hecho 3).
- Inferencia (si aplica): el resumen no contradice S06. Los puntos 1, 2 y 12 y
  las «Consecuencias» l. 106-110 coinciden, y l. 110 formula bien la frontera de
  ownership. Pero quien aplique sólo la «Decisión» no puede derivar el estado del
  packet a partir de sus capas. Tampoco sabe quién aporta los límites que deciden
  la suficiencia, y puede cargar material por mera disponibilidad o tratar la
  caché como vigente. Es el patrón de `REV-2026-065`, `069`, `074`, `075` y `079`.
  Aquí el riesgo es mayor porque S08 l. 126, 277, 363 y 393 y S07 l. 107
  remiten a «ADR-005», no a S06.

## Observación y propuesta

- Observación: la «Decisión» de ADR-005 sigue el orden de las filas de S06 y
  conserva núcleo, taxonomía, orden de degradación, impactos y estados. En
  cambio, pierde la regla capa → estado, el papel obligatorio del adapter en los
  límites, la exclusividad de las condiciones de carga y la salida de la parada.
- Propuesta concreta: que la persona decida, con la convención que adopte para
  `REV-2026-074`/`075`/`079`, entre dos opciones. (a) La «Decisión» declara que
  resume S06 y que las cláusulas no repetidas siguen vigentes, y las sesiones que
  citan «ADR-005» enlazan S06. (b) La «Decisión» recupera en el punto 9 la regla
  `ready`/`degraded`/`invalid` de S06 l. 51; en el punto 4, «límites y
  estimaciones» del adapter; en el punto 3, «únicamente» y la exclusión de la
  disponibilidad; en el punto 5, la solicitud de l. 132-133; y en el punto 6, la
  cláusula de la caché. No editar ADR-005, S06 ni S08 sin esa decisión.
- Contraargumento o coste/riesgo: un ADR resume por naturaleza, y «Referencias»
  (bloque `B043`) remite a S06 como acuerdo canónico. Además, S08 l. 126 recupera
  por su cuenta que el adapter debe «declarar los límites cuantitativos
  disponibles», y S08 l. 369-372 aplica `invalid`/`degraded` con la semántica de
  S06. Así, las omisiones 1 y 2 no se propagaron a S08. La gravedad es `baja`. El
  coste de (a) es una frase y enlaces.

## Análisis adicional

- Evidencia interna: hechos 1-5 con sus localizadores. El mapa punto a fila y lo
  que coincide sin pérdida están en [B042](blocks/B042.md).
- Contraevidencia y límites: no se leyó S08 fuera de las líneas indicadas ni S11
  salvo l. 166. No se comprobó si ADR-007 o ADR-010 repiten estas omisiones. No se
  afirma que ningún documento haya aplicado la lectura amplia. La tercera
  redacción de S08 l. 363-364 es compatible en sustancia con S06 l. 46 y 52.
- Pregunta para resolver: ¿debe la «Decisión» de ADR-005 recuperar la regla capa
  → estado, los límites del adapter, la exclusividad de las condiciones de carga,
  la solicitud de la parada y la cláusula de la caché, o basta declarar que
  resume S06? ¿Deben las sesiones que citan «ADR-005» como fuente (S07, S08)
  enlazar S06?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B042](blocks/B042.md), [B024](blocks/B024.md),
  [B025](blocks/B025.md),
  [`REV-2026-047`](2026-09-24-REV-2026-047-parada-del-agente-y-diagnostico-auditable-en-s06-sin-actor-canal-ni-estado-actor-autorizado-y-fuente-autorizada-sin-criterio.md),
  [`REV-2026-048`](2026-09-24-REV-2026-048-presupuesto-del-context-packet-budget-profile-sin-definicion-no-cabe-sin-limites-del-adapter-y-manifest-del-nucleo-sin-prioridad-ni-granularidad-de-material.md),
  [`REV-2026-051`](2026-09-24-REV-2026-051-estados-del-context-packet-sin-transiciones-ni-precedencia-invalid-frente-a-superseded-tras-cambio-packet-recarga-section-sin-estado-degraded-por-obsoleto-sin-causa-y-sin-inmutables.md),
  [`REV-2026-052`](2026-09-24-REV-2026-052-evidencia-auditable-del-context-packet-sin-lugar-ni-esquema-sin-evento-de-parada-ni-sustitucion-presupuesto-aplicado-sin-regla-y-trigger-sin-definicion.md),
  [`REV-2026-065`](2026-09-25-REV-2026-065-decision-de-adr-001-omite-la-deteccion-de-riesgo-por-t800r-estrecha-la-no-sustitucion-y-reformula-harness-y-permisos-frente-a-s02.md),
  [`REV-2026-069`](2026-09-25-REV-2026-069-decision-de-adr-002-resume-s03-sin-limite-inequivoco-ni-deteccion-evidencia-sin-revision-humana-y-remisiones-sin-destino.md),
  [`REV-2026-074`](2026-09-25-REV-2026-074-decision-de-adr-003-omite-consultas-y-autoridad-humana-de-s04-y-deja-solo-build-aceptacion-y-deploy-como-intervencion.md),
  [`REV-2026-075`](2026-09-25-REV-2026-075-decision-de-adr-003-resume-s04-sin-carga-de-prueba-del-verifier-condiciones-de-runbook-estado-ante-duda-ni-tipo-de-consulta.md),
  [`REV-2026-079`](2026-09-25-REV-2026-079-decision-de-adr-004-resume-s05-sin-regla-de-caducidad-cancelacion-del-emisor-atribucion-de-la-aceptacion-ni-lo-que-crece-tras-emitir.md),
  [`REV-2026-082`](2026-09-25-REV-2026-082-glosario-y-contexto-de-adr-005-homonimos-packet-y-adapter-handoff-custodio-de-ownership-y-alternativa-adapter-libre-sin-rejected.md),
  cruces `CT03`, `CT05` y `CT07`.

## Preguntas pendientes

Ver el checkpoint [B042](blocks/B042.md).

## Cobertura y límites

Ver el checkpoint [B042](blocks/B042.md). Sin fuentes externas en esta anotación.
