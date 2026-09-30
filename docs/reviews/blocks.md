# Inventario de bloques de revisión

Inventario exhaustivo y consultable por rango de las decisiones ya registradas:
el [índice rector](../product-definition.md), las siete unidades canónicas y los
ADRs 001 a 006. Los rangos son inclusivos, cubren cada archivo sin huecos ni
solapes y funcionan como localizadores de base; no resumen ni sustituye el canon.
Para lectura selectiva, abrir el enlace del bloque y consultar el rango indicado
con `grep` o una lectura por líneas. Cada bloque tiene unas 100 líneas o menos.

## Índice rector

Fuente: [product-definition.md](../product-definition.md).

| ID | Sección existente | Rango inclusivo |
| --- | --- | --- |
| B001 | [Definición de producto de T800R](../product-definition.md#definición-de-producto-de-t800r) a [Unidades canónicas y compatibilidad](../product-definition.md#unidades-canónicas-y-compatibilidad) | 1-93 |
| B002 | [Preguntas pendientes globales](../product-definition.md#preguntas-pendientes-globales) | 94-145 |
| B003 | [Criterio de cierre de la definición](../product-definition.md#criterio-de-cierre-de-la-definición) a [Enlaces de compatibilidad](../product-definition.md#enlaces-de-compatibilidad) | 146-204 |

Localizadores del índice rector recalculados el 2026-09-25 (pasada 2 de
[B001](blocks/B001.md)) sobre la base de 204 líneas: fila de S12 en l. 92 y
l. 93 en blanco; «Preguntas pendientes globales» en l. 94 y l. 145 en blanco;
«Criterio de cierre de la definición» en l. 146; última línea del archivo en
l. 204. Valores anteriores: `1-89`, `90-149` y `150-192`. Sin huecos ni
solapes. Sólo `B001` se reanalizó; `B002` y `B003` siguen `stale`.
Actualización del 2026-09-25 (pasada 2 de [B002](blocks/B002.md)): el rango
`94-145` de `B002` se comprobó exacto (sin corrección) y `B002` se reanalizó;
`B003` sigue `stale`.
Actualización del 2026-09-25 (pasada 2 de [B003](blocks/B003.md)): el rango
`146-204` de `B003` se comprobó exacto («Criterio de cierre de la definición»
en l. 146, «Enlaces de compatibilidad» en l. 165, fin del archivo en l. 204;
sin corrección) y `B003` se reanalizó. Los tres bloques del índice rector están
vigentes; S12 sigue `in_progress` y podría volver a cambiar el índice.

## S01: visión y problema

Fuente: [session-01-vision.md](../definition/session-01-vision.md).

| ID | Sección existente | Rango inclusivo |
| --- | --- | --- |
| B004 | [S01 — Sesión 1: visión y problema](../definition/session-01-vision.md#s01--sesión-1-visión-y-problema) a [Conclusiones](../definition/session-01-vision.md#conclusiones) | 1-90 |
| B005 | [Casos de uso prioritarios iniciales](../definition/session-01-vision.md#casos-de-uso-prioritarios-iniciales) a [Síntesis aceptada](../definition/session-01-vision.md#síntesis-aceptada) | 91-171 |
| B006 | [Comprobación de cierre](../definition/session-01-vision.md#s01-cierre) | 172-185 |

## S02: límites del producto

Fuente: [session-02-limits.md](../definition/session-02-limits.md).

| ID | Sección existente | Rango inclusivo |
| --- | --- | --- |
| B007 | [S02 — Sesión 2: límites del producto](../definition/session-02-limits.md#s02--sesión-2-límites-del-producto) a [Modelo de interacción acordado para desarrollo de software](../definition/session-02-limits.md#modelo-de-interacción-acordado-para-desarrollo-de-software) | 1-99 |
| B008 | [Detalles aplazados](../definition/session-02-limits.md#detalles-aplazados) a [Comprobación de cierre](../definition/session-02-limits.md#s02-cierre) | 100-126 |

## S03: fuentes de verdad

Fuente: [session-03-sources-of-truth.md](../definition/session-03-sources-of-truth.md).

| ID | Sección existente | Rango inclusivo |
| --- | --- | --- |
| B009 | [S03 — Sesión 3: fuentes de verdad](../definition/session-03-sources-of-truth.md#s03--sesión-3-fuentes-de-verdad) a [Contexto efímero y persistencia](../definition/session-03-sources-of-truth.md#contexto-efímero-y-persistencia) | 1-80 |
| B010 | [Contexto efímero y persistencia](../definition/session-03-sources-of-truth.md#contexto-efímero-y-persistencia) a [Registro asistido de fuentes](../definition/session-03-sources-of-truth.md#registro-asistido-de-fuentes) | 81-177 |
| B011 | [Evidencia investigada](../definition/session-03-sources-of-truth.md#evidencia-investigada) a [Detalles aplazados](../definition/session-03-sources-of-truth.md#detalles-aplazados) | 178-241 |
| B012 | [Comprobación de cierre](../definition/session-03-sources-of-truth.md#s03-cierre) | 242-262 |

## S04: ciclo operativo

Fuente: [session-04-operating-cycle.md](../definition/session-04-operating-cycle.md).

| ID | Sección existente | Rango inclusivo |
| --- | --- | --- |
| B013 | [S04 — Sesión 4: ciclo operativo](../definition/session-04-operating-cycle.md#s04--sesión-4-ciclo-operativo) a [Acuerdos y orientación de la sesión](../definition/session-04-operating-cycle.md#acuerdos-y-orientación-de-la-sesión) (encabezado en l. 45 y prosa l. 47-67 incluidos) | 1-68 |
| B014 | [Acuerdos y orientación de la sesión](../definition/session-04-operating-cycle.md#acuerdos-y-orientación-de-la-sesión) (tabla de conclusiones, l. 69-116) | 69-117 |
| B015 | Prosa final de [Acuerdos y orientación de la sesión](../definition/session-04-operating-cycle.md#acuerdos-y-orientación-de-la-sesión) (l. 118-121) y [Ciclo colaborativo de investigación y definición](../definition/session-04-operating-cycle.md#ciclo-colaborativo-de-investigación-y-definición) (encabezado en l. 123) hasta antes de «Próxima acción» | 118-138 |
| B016 | [Próxima acción](../definition/session-04-operating-cycle.md#próxima-acción) (encabezado en l. 139; tabla de distribución de modelos l. 144-148 y prosa l. 150-223) hasta antes de [Especificaciones evolutivas](../definition/session-04-operating-cycle.md#especificaciones-evolutivas) (l. 224) | 139-223 |
| B017 | [Especificaciones evolutivas](../definition/session-04-operating-cycle.md#especificaciones-evolutivas) a [Persistencia mínima de consultas y esperas](../definition/session-04-operating-cycle.md#persistencia-mínima-de-consultas-y-esperas) | 224-306 |
| B018 | [Criterio de salida](../definition/session-04-operating-cycle.md#criterio-de-salida) a [Comprobación de cierre](../definition/session-04-operating-cycle.md#s04-cierre) | 307-328 |

## S05: handoffs y coordinación

Fuente: [session-05-handoffs.md](../definition/session-05-handoffs.md).

| ID | Sección existente | Rango inclusivo |
| --- | --- | --- |
| B019 | [S05 — Sesión 5: handoffs y coordinación](../definition/session-05-handoffs.md#s05--sesión-5-handoffs-y-coordinación) a [Decisiones](../definition/session-05-handoffs.md#decisiones), tabla de decisiones incluida (l. 50-80) | 1-81 |
| B020 | [Identidad de actores](../definition/session-05-handoffs.md#identidad-de-actores) a [Categorías de rechazo](../definition/session-05-handoffs.md#categorías-de-rechazo) | 82-150 |
| B021 | [Lifecycle inicial](../definition/session-05-handoffs.md#lifecycle-inicial) (encabezado en l. 152; l. 151 en blanco) a [Resultado mínimo de `completed`](../definition/session-05-handoffs.md#resultado-mínimo-de-completed) (l. 219-232; l. 233 en blanco) | 152-233 |
| B022 | [Criterio de salida](../definition/session-05-handoffs.md#criterio-de-salida) (encabezado en l. 234) a [Comprobación de cierre](../definition/session-05-handoffs.md#s05-cierre) (ancla en l. 243; fin del archivo l. 266) | 234-266 |

## S06: contexto

Fuente: [session-06-context.md](../definition/session-06-context.md).

| ID | Sección existente | Rango inclusivo |
| --- | --- | --- |
| B023 | [S06 — Sesión 6: contexto](../definition/session-06-context.md#s06--sesión-6-contexto) a [Capas de validación del context packet](../definition/session-06-context.md#capas-de-validación-del-context-packet) | 1-75 |
| B024 | [Núcleo obligatorio del context packet](../definition/session-06-context.md#núcleo-obligatorio-del-context-packet) a [Presupuesto y prioridades](../definition/session-06-context.md#presupuesto-y-prioridades) | 76-139 |
| B025 | [Reconciliación incremental](../definition/session-06-context.md#reconciliación-incremental) a [Condiciones de parada y evidencia](../definition/session-06-context.md#condiciones-de-parada-y-evidencia) | 140-193 |
| B026 | [Comprobación de cierre](../definition/session-06-context.md#s06-cierre) | 194-206 |

## S07: conocimiento

Fuente: [session-07-knowledge.md](../definition/session-07-knowledge.md).

| ID | Sección existente | Rango inclusivo |
| --- | --- | --- |
| B027 | [S07 — Sesión 7: conocimiento](../definition/session-07-knowledge.md#s07--sesión-7-conocimiento) a [Decisiones](../definition/session-07-knowledge.md#decisiones) | 1-63 |
| B028 | [Taxonomía y límites iniciales](../definition/session-07-knowledge.md#taxonomía-y-límites-iniciales) | 64-108 |
| B029 | [Comprobación de cierre](../definition/session-07-knowledge.md#s07-cierre) | 109-123 |

## ADR-001

Fuente: [ADR-001-autonomia-y-responsabilidades.md](../adr/ADR-001-autonomia-y-responsabilidades.md).

| ID | Sección existente | Rango inclusivo |
| --- | --- | --- |
| B030 | [ADR-001: Construcción autónoma con acuerdos humanos y responsabilidades explícitas](../adr/ADR-001-autonomia-y-responsabilidades.md#adr-001-construcción-autónoma-con-acuerdos-humanos-y-responsabilidades-explícitas) a [Por qué la decisión (qué dice la industria)](../adr/ADR-001-autonomia-y-responsabilidades.md#por-qué-la-decisión-qué-dice-la-industria) | 1-69 |
| B031 | [Decisión](../adr/ADR-001-autonomia-y-responsabilidades.md#decisión) a [Referencias](../adr/ADR-001-autonomia-y-responsabilidades.md#referencias) | 70-127 |

## ADR-002

Fuente: [ADR-002-fuentes-canonicas-y-conocimiento.md](../adr/ADR-002-fuentes-canonicas-y-conocimiento.md).

| ID | Sección existente | Rango inclusivo |
| --- | --- | --- |
| B032 | [ADR-002: Fuentes canónicas y conocimiento con procedencia](../adr/ADR-002-fuentes-canonicas-y-conocimiento.md#adr-002-fuentes-canónicas-y-conocimiento-con-procedencia) a [Por qué la decisión (qué dice la industria)](../adr/ADR-002-fuentes-canonicas-y-conocimiento.md#por-qué-la-decisión-qué-dice-la-industria) | 1-71 |
| B033 | [Decisión](../adr/ADR-002-fuentes-canonicas-y-conocimiento.md#decisión) a [Consecuencias para el equipo](../adr/ADR-002-fuentes-canonicas-y-conocimiento.md#consecuencias-para-el-equipo) | 72-133 |
| B034 | [Puntos abiertos](../adr/ADR-002-fuentes-canonicas-y-conocimiento.md#puntos-abiertos) a [Referencias](../adr/ADR-002-fuentes-canonicas-y-conocimiento.md#referencias) | 134-159 |

## ADR-003

Fuente: [ADR-003-ciclo-operativo-y-coordinacion.md](../adr/ADR-003-ciclo-operativo-y-coordinacion.md).

| ID | Sección existente | Rango inclusivo |
| --- | --- | --- |
| B035 | [ADR-003: Ciclo operativo, ownership y coordinación](../adr/ADR-003-ciclo-operativo-y-coordinacion.md#adr-003-ciclo-operativo-ownership-y-coordinación) a [Alternativas evaluadas](../adr/ADR-003-ciclo-operativo-y-coordinacion.md#alternativas-evaluadas) | 1-43 |
| B036 | [Decisión](../adr/ADR-003-ciclo-operativo-y-coordinacion.md#decisión) | 44-98 |
| B037 | [Consecuencias](../adr/ADR-003-ciclo-operativo-y-coordinacion.md#consecuencias) a [Referencias](../adr/ADR-003-ciclo-operativo-y-coordinacion.md#referencias) | 99-132 |

## ADR-004

Fuente: [ADR-004-contrato-portable-de-handoffs.md](../adr/ADR-004-contrato-portable-de-handoffs.md).

| ID | Sección existente | Rango inclusivo |
| --- | --- | --- |
| B038 | [ADR-004: Contrato portable de handoffs](../adr/ADR-004-contrato-portable-de-handoffs.md#adr-004-contrato-portable-de-handoffs) a [Por qué la decisión (qué dice la industria)](../adr/ADR-004-contrato-portable-de-handoffs.md#por-qué-la-decisión-qué-dice-la-industria) | 1-60 |
| B039 | [Decisión](../adr/ADR-004-contrato-portable-de-handoffs.md#decisión) a [Consecuencias para el equipo](../adr/ADR-004-contrato-portable-de-handoffs.md#consecuencias-para-el-equipo) | 61-115 |
| B040 | [Puntos abiertos](../adr/ADR-004-contrato-portable-de-handoffs.md#puntos-abiertos) a [Referencias](../adr/ADR-004-contrato-portable-de-handoffs.md#referencias) | 116-133 |

## ADR-005

Fuente: [ADR-005-contrato-portable-de-contexto.md](../adr/ADR-005-contrato-portable-de-contexto.md).

| ID | Sección existente | Rango inclusivo |
| --- | --- | --- |
| B041 | [ADR-005: Contrato portable de contexto](../adr/ADR-005-contrato-portable-de-contexto.md#adr-005-contrato-portable-de-contexto) a [Por qué la decisión (qué dice la industria)](../adr/ADR-005-contrato-portable-de-contexto.md#por-qué-la-decisión-qué-dice-la-industria) | 1-60 |
| B042 | [Decisión](../adr/ADR-005-contrato-portable-de-contexto.md#decisión) a [Consecuencias para el equipo](../adr/ADR-005-contrato-portable-de-contexto.md#consecuencias-para-el-equipo) | 61-115 |
| B043 | [Puntos abiertos](../adr/ADR-005-contrato-portable-de-contexto.md#puntos-abiertos) a [Referencias](../adr/ADR-005-contrato-portable-de-contexto.md#referencias) | 116-139 |

## ADR-006

Fuente: [ADR-006-modelo-portable-de-conocimiento.md](../adr/ADR-006-modelo-portable-de-conocimiento.md).

| ID | Sección existente | Rango inclusivo |
| --- | --- | --- |
| B044 | [ADR-006: Modelo portable de conocimiento](../adr/ADR-006-modelo-portable-de-conocimiento.md#adr-006-modelo-portable-de-conocimiento) a [Posición de Hindsight](../adr/ADR-006-modelo-portable-de-conocimiento.md#posición-de-hindsight) | 1-45 |
| B045 | [Decisión](../adr/ADR-006-modelo-portable-de-conocimiento.md#decisión) a [Referencias](../adr/ADR-006-modelo-portable-de-conocimiento.md#referencias) | 46-106 |

## Cola de cruces transversales

Los cruces no se cierran por leer un bloque aislado: requieren contrastar las
referencias selectivas indicadas, conservar citas de ambas partes y una discusión
humana independiente cuando cuestionen un acuerdo. No duplican el inventario ni
marcan sus bloques como revisados.

| ID | Cruce a contrastar | Referencias selectivas |
| --- | --- | --- |
| CT01 | Autoridad de S03 frente a handoffs, contexto y conocimiento: ninguna copia, resumen, packet, alias o curator obtiene autoridad por sí mismo. | B009-B010, B019-B021, B023-B025, B027-B028, B032-B033, B038-B039, B041-B042, B045 |
| CT02 | Lifecycle, ownership, recuperación y handoffs entre S04 y S05. | B014, B016-B018, B019-B022, B036, B038-B039 |
| CT03 | Portabilidad e identidad lógica frente al perfil OKF y sus rutas/aliases diferidos. | B019-B020, B023-B024, B027-B029, B039-B040, B042-B043, B045 |
| CT04 | Consistencia entre las unidades canónicas S01-S03 y ADR-001/ADR-002. | B004-B012, B030-B034 |
| CT05 | Consistencia entre las unidades canónicas S04-S06 y ADR-003/ADR-005. | B013-B026, B035-B037, B041-B043 |
| CT06 | Consistencia entre la unidad canónica S07 y ADR-006. | B027-B029, B044-B045 |
| CT07 | Criterios globales de cierre, diferimientos y cobertura transversal de prácticas. | B001-B003, B008, B011-B012, B017-B018, B022, B026, B029, B031, B034, B037, B040, B043, B045 |
