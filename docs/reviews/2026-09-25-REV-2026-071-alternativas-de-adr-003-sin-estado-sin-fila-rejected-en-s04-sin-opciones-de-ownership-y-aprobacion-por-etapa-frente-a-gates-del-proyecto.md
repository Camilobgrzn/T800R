# Anotación de revisión

- ID de anotación: `REV-2026-071`
- Unidad y ubicación: `ADR-003` — [«Alternativas evaluadas»](../adr/ADR-003-ciclo-operativo-y-coordinacion.md#alternativas-evaluadas),
  `docs/adr/ADR-003-ciclo-operativo-y-coordinacion.md:35-42`, frente a `S04` —
  [«Acuerdos y orientación de la sesión»](../definition/session-04-operating-cycle.md#acuerdos-y-orientación-de-la-sesión)
  (tabla l. 69-116 y tabla de proceso l. 144-148), a
  [`research-orchestrator-responsibilities.md`](../research-orchestrator-responsibilities.md#alternativas-para-t800r)
  (l. 45-51) y a `S01` — [«No objetivos iniciales — aceptados»](../definition/session-01-vision.md#no-objetivos-iniciales--aceptados)
  (l. 113-118). Bloque `B035`.
- Revisión examinada: estado de los archivos al 2026-09-25 (repositorio sin
  commits; ADR-003 fechado 2026-09-15, S04 con criterio comprobado el
  2026-09-15). Citas distintivas: «| Alternativa | Beneficio | Coste o riesgo |
  Resultado |» (ADR-003 l. 37); «Flujo rígido con paquete documental fijo y
  aprobación por etapa» (l. 39); «No elegida como regla universal.» (l. 41).
- Tipo: `incompleto`
- Gravedad: `baja`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos; `media` sobre el impacto
- Impacto: qué opciones de diseño del ciclo quedaron descartadas, con qué estado
  y dónde, cuando una sesión posterior o un repositorio consumidor quiera
  reintroducir, por ejemplo, una aprobación por etapa, `Maintain` como etapa o
  worktrees como contrato; y si la aprobación por etapa que el ADR descarta
  puede exigirla un proyecto como punto de intervención propio.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión y tensión exclusivamente internas; no
  requiere fuente externa según [README](README.md)).
- Fuente primaria: `docs/adr/ADR-003-ciclo-operativo-y-coordinacion.md:35-42`;
  `docs/definition/session-04-operating-cycle.md:73, 75, 81, 83-84, 88, 89, 108,
  110, 112, 114, 146`; `docs/research-orchestrator-responsibilities.md:45-51`;
  `docs/definition/session-01-vision.md:113-118`; `AGENTS.md:35-36`; búsqueda de
  «rejected» en S04 (única coincidencia: l. 146).
- Sección o localizador: ver «Unidad y ubicación».
- Fecha de consulta/publicación: consulta 2026-09-25; ADR-003 y S04 fechados
  2026-09-15; la investigación del orchestrator, consulta 2026-09-15.
- Hecho observado:
  1. **Resultados fuera del vocabulario de estados.** Las tres alternativas no
     elegidas concluyen «No elegida.» (l. 39, 40) y «No elegida como regla
     universal.» (l. 41); la aceptada, «**Aceptada.**» (l. 42). `AGENTS.md`
     l. 35-36 exige `accepted`, `deferred` o `rejected`. Es el mismo patrón que
     `REV-2026-067` hecho 1 ya anticipó para ADR-003 (l. 39-41) y que
     `REV-2026-064` hecho 5 registró en ADR-001 («No elegida como límite»).
  2. **Las alternativas tienen apoyo en S04, pero ninguna fila `rejected`.** A
     diferencia de ADR-002 (`REV-2026-067` hecho 2), las tres alternativas se
     anclan en justificaciones de filas `accepted` de S04: la 1 en l. 73 («en
     vez de etapas rígidas de una sola pasada»), l. 83 («no se exige un paquete
     documental fijo»), l. 84 («evita gates rutinarios por tarea») y l. 88
     («eliminar una aprobación separada para `design`»); la 2 en l. 110
     («evita sobrecarga y punto único de fallo»; «Sustituye la propuesta previa
     de responsabilidades amplias del orchestrator no aceptada»); la 3 en l. 110
     («no agentes permanentes»). Las alternativas 2-4 reproducen casi literal la
     tabla de la investigación (l. 49-51). La única fila `rejected` de S04 es de
     proceso (l. 146: coordinador intermedio del proyecto, «No constituye una
     decisión de arquitectura del producto»; `REV-2026-030`). La «propuesta
     previa … no aceptada» de l. 110 no consta en ninguna tabla (pregunta 3 de
     `B013`, pista (i) de `B014`).
  3. **Opciones que S04 descarta y que la tabla no recoge.** La tabla compara
     sólo la forma del ciclo y la distribución del orchestrator. Aunque el
     título del ADR incluye «ownership y coordinación», no hay alternativa sobre
     ownership o concurrencia, y S04 descarta en filas `accepted`, sin estado
     `rejected`: `Maintain` como etapa (l. 75, «no se añade como etapa»); la
     autorización de `build` «por tarea» o «una sola vez para toda la
     iniciativa» (l. 81); combinar etapa y estado («Evita proliferar estados
     combinados», l. 89); los hooks de Claude como contrato núcleo (l. 112); y
     los worktrees como contrato de aislamiento (l. 114, «no se adopta un
     mecanismo de aislamiento por asociación»).
  4. **La aprobación por etapa descartada frente a los puntos de intervención
     del proyecto.** La alternativa 1 descarta la «aprobación por etapa» por
     «Burocracia, falsa certeza y poca adaptación» (l. 39). S01 acepta como no
     objetivos «Imponer una metodología única. La forma de trabajo se define
     para el repositorio» y «Eliminar toda intervención humana. Se conservan las
     decisiones y los puntos de intervención establecidos por el proyecto»
     (l. 113-118). El rango no dice si un repositorio consumidor que exija
     aprobar cada etapa (el caso que plantea `REV-2026-014`) queda fuera del
     ciclo adoptado o se admite como acuerdo del proyecto que añade gates.
  5. **Coste aceptado sin medida.** La opción aceptada «Requiere contratos,
     evidencia, ownership y recuperación explícitos» (l. 42), sin magnitud,
     umbral ni destino en el rango (patrón de `REV-2026-067` hecho 4 y de la
     pregunta 3 de `B006`).
- Inferencia (si aplica): ADR-003 registra alternativas mejor ancladas en su
  unidad que ADR-002, pero repite los dos defectos comunes: resultados fuera del
  vocabulario y opciones descartadas por la unidad que sólo constan como
  cláusulas dentro de filas `accepted`. Además, la alternativa 1 se formula como
  rechazo universal de una práctica (aprobación por etapa) que S01 obliga a
  conservar cuando la establece el proyecto.

## Observación y propuesta

- Observación: la decisión aceptada no está en duda. Lo incompleto es el
  registro de lo descartado y el alcance del descarte: quien quiera reabrir
  `Maintain` como etapa o worktrees como contrato no encontrará estado ni
  criterio comparado; y quien incorpore T800R en un proyecto con aprobación por
  etapa no sabe si el ADR la prohíbe como diseño o sólo como valor por defecto.
- Propuesta concreta: que la persona decida (a) aplicar a ADR-003 la convención
  que resuelva `REV-2026-067` (vocabulario de resultados y lugar de las opciones
  descartadas); (b) si las opciones de S04 l. 75, 81, 89, 112 y 114 constan como
  `rejected` en la unidad o como alternativas en el ADR, y si la «propuesta
  previa» de l. 110 se registra; (c) si la alternativa 1 descarta la aprobación
  por etapa como ciclo por defecto de T800R, sin impedir que un repositorio la
  establezca como punto de intervención propio, y dónde se dice (enlazar con la
  respuesta a `REV-2026-014`). No editar S04 ni ADR-003 sin esa decisión.
- Contraargumento o coste/riesgo: las cláusulas de las justificaciones ya
  registran lo descartado; «No elegida como regla universal» es más precisa que
  `rejected`, porque S04 l. 110 admite separar agentes cuando se justifique; un
  ADR no necesita evaluar alternativas para cada componente; y S04 l. 85
  («un riesgo que requiera revisión según los acuerdos vigentes») puede leerse
  como si incluyera los gates del proyecto. El coste es una frase y una
  convención común a ADR-001, 002, 003 y 006.

## Análisis adicional

- Evidencia interna: hechos 1-5 con sus localizadores.
- Contraevidencia y límites: no se leyó la «Decisión» de ADR-003 (l. 44-98,
  bloque `B036`), que puede aclarar el alcance de la alternativa 1 respecto de
  los gates del proyecto; tampoco S09/ADR-008, que tratan la intervención
  humana (fuera del rango). No se afirma que ninguna opción descartada deba
  reabrirse. El hecho 1 no es nuevo: `REV-2026-067` ya lo anticipó; se registra
  aquí con el contraste completo de ADR-003.
- Pregunta para resolver: ¿con qué estado y en qué documento constan las
  opciones de ciclo, ownership y concurrencia que S04 descarta, y la aprobación
  por etapa de la alternativa 1 se descarta como ciclo por defecto o también
  cuando la exige un repositorio consumidor?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B035](blocks/B035.md),
  [`REV-2026-067`](2026-09-25-REV-2026-067-alternativas-de-adr-002-sin-estado-sin-fila-en-s03-y-disjuntas-de-las-opciones-descartadas-en-las-justificaciones-de-s03.md),
  [`REV-2026-064`](2026-09-25-REV-2026-064-alternativas-de-adr-001-sin-coordinacion-opcion-aceptada-peor-en-adopcion-y-portabilidad-sin-objetivo-s01.md),
  [`REV-2026-014`](2026-09-21-REV-2026-014-modelo-de-interaccion-frente-a-puntos-de-intervencion-del-proyecto.md),
  [`REV-2026-030`](2026-09-24-REV-2026-030-distribucion-de-modelos-del-proyecto-con-estado-en-la-unidad-canonica-de-s04-sin-enlace-a-su-documento-de-proceso.md),
  cruces `CT05` y `CT07`.

## Preguntas pendientes

Ver el checkpoint [B035](blocks/B035.md).

## Cobertura y límites

Ver el checkpoint [B035](blocks/B035.md). Fuentes externas: ninguna; el
problema es interno.
