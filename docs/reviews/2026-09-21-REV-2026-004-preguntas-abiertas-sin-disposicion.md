# Anotación de revisión

- ID de anotación: `REV-2026-004`
- Unidad y ubicación: índice rector (bloque `B002`) —
  [Preguntas de producto aún abiertas](../product-definition.md#preguntas-de-producto-aún-abiertas),
  `docs/product-definition.md:131-147`; cita distintiva: «¿El orchestrator será
  software, un rol operativo o ambos?»
- Revisión examinada: fecha 2026-09-21; repositorio sin commits, huella no disponible
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` para las cuatro preguntas contrastadas; `media` para el resto
- Impacto: el criterio de cierre «las incógnitas restantes no bloqueen la
  implementación» (`docs/product-definition.md:163`) no es comprobable si la lista
  global de incógnitas no refleja qué quedó decidido, diferido o sin tratar, ni
  dónde se resolverá cada una.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (contradicción exclusivamente interna)
- Fuente primaria: sin fuente externa; ubicaciones internas enlazadas abajo
- Sección o localizador: `docs/product-definition.md:131-147` frente a
  `docs/definition/session-04-operating-cycle.md:110`,
  `docs/definition/session-06-context.md:54-57,76`,
  `docs/definition/session-07-knowledge.md:46,55-56,58-62`
- Fecha de consulta/publicación: 2026-09-21
- Hecho observado: la lista se titula «aún abiertas» y enumera diez preguntas sin
  estado, sesión de destino ni enlace. Al menos cuatro tienen ya una disposición
  registrada en unidades canónicas cerradas:
  1. «¿RTK, Context Mode y Hindsight quedarán fuera del MVP?»: S06 acepta RTK y
     Context Mode «como optimizaciones opcionales de los adapters», rechaza
     hacerlos obligatorios y difiere su adopción a las sesiones 8 y 11
     (`session-06-context.md:54-56`); S07 acepta la posición de Hindsight y difiere
     su adopción a las sesiones 11 y 12 (`session-07-knowledge.md:55-56`).
  2. «¿El conocimiento canónico usará `docs/`, `knowledge/` o una ruta
     configurable?»: S07 acepta la ubicación lógica por bundles y declara que «la
     ruta y el almacenamiento físicos se decidirán posteriormente», con destino en
     la sesión 11 (`session-07-knowledge.md:46,60-61`).
  3. «¿El orchestrator será software, un rol operativo o ambos?»: S04 acepta un
     «orchestrator delgado con capacidades bajo demanda» y afirma que «Son
     roles/capacidades bajo demanda, no agentes permanentes»
     (`session-04-operating-cycle.md:110`); queda como mucho un residuo sobre su
     materialización en software.
  4. «¿Cuál es el context packet mínimo que funciona con los tres proveedores?»:
     S06 contiene un «Núcleo obligatorio del context packet»
     (`session-06-context.md:76`) y difiere identidad lógica y aliases a la sesión 8
     (`session-06-context.md:57`); el residuo es la validación con los tres proveedores.
- Inferencia (si aplica): la lista procede del planteamiento inicial y no se
  mantuvo al cerrar sesiones. No se demostró para «¿Dónde vivirán los handoffs?» ni
  para la pregunta sobre límites de autonomía en el ciclo operativo; ver preguntas
  pendientes.

## Observación y propuesta

- Observación: el índice rector presenta como abiertas preguntas que las unidades
  canónicas ya respondieron total o parcialmente, o difirieron con destino. AGENTS.md
  ordena leer el índice para conocer «acuerdos, preguntas y criterios de salida»;
  un agente que lo haga puede reabrir una cuestión cerrada (en contra de
  `AGENTS.md:37-38`) o tratar como indefinido algo con acuerdo `accepted`. Es la
  misma clase de riesgo que `REV-2026-003` (estado duplicado que diverge), aplicada
  a preguntas en lugar de a estado de sesiones.
- Propuesta concreta: que cada pregunta global lleve disposición
  (`abierta`/`parcial`/`deferred`/`resuelta`), sesión de destino y enlace a la
  unidad canónica; o bien sustituir la lista por el residuo realmente abierto y
  remitir a los diferimientos de cada unidad. La decisión de formato es humana.
- Contraargumento o coste/riesgo: la lista puede ser deliberadamente un registro
  histórico de incógnitas iniciales y las unidades ya son canónicas, de modo que
  no hay acuerdo contradicho, sólo un índice desactualizado. Mantener disposición
  por pregunta añade un punto más de sincronización en el cierre de cada sesión.

## Análisis adicional

- Evidencia interna: enlaces del localizador anterior;
  [S04](../definition/session-04-operating-cycle.md),
  [S06](../definition/session-06-context.md),
  [S07](../definition/session-07-knowledge.md);
  criterio de cierre en [product-definition.md](../product-definition.md#criterio-de-cierre-de-la-definición).
- Contraevidencia y límites: el título dice «aún abiertas», lo que descarta la
  lectura de «registro histórico» en su sentido literal. No se leyeron las unidades
  completas: los pasajes de S04, S06 y S07 se localizaron por búsqueda de términos
  y lectura de filas concretas; los bloques de esas sesiones deben confirmar el
  alcance exacto de cada respuesta. No se encontró en el resto de `docs/` (fuera de
  `reviews/`) ninguna otra referencia a esta lista que la mantenga.
- Pregunta para resolver: ¿la lista global debe ser el registro vivo de incógnitas
  que alimenta el criterio de cierre, o se elimina en favor de los diferimientos de
  cada unidad? Si es vivo, ¿quién la actualiza y en qué paso del cierre de sesión?

## Nota de vigencia (2026-09-25, pasada 2 de `B002`)

- Resultado: **atenuada en parte**; no se cierra.
- Base comparada: `docs/product-definition.md` (204 líneas, «Última
  actualización: 2026-09-24»), l. 137-144. La lista de diez preguntas citada
  arriba ya no existe. En su lugar hay tres preguntas: tuplas de conformidad
  (l. 139-140), piloto, corpus, métricas y umbrales (l. 141-142) y backlog de
  componentes diferidos (l. 143-144). La cita distintiva «¿El orchestrator será
  software, un rol operativo o ambos?» no aparece: la búsqueda de «orchestrator»
  en el índice sólo devuelve l. 62. El contenido de arriba se conserva como
  registro de la base de 2026-09-21.
- Qué se corrigió en el canon: la lista ya no presenta como abiertas preguntas
  con disposición registrada. Es la primera mitad de la propuesta («sustituir la
  lista por el residuo realmente abierto»). Disposición localizada de las diez
  preguntas retiradas (por búsqueda y lectura de filas; dos formulaciones
  literales no se recuperaron porque no hay historial):
  1. Beads como dependencia o primer adapter → S11 l. 87 (`accepted`, primer
     adapter oficial) y l. 88 (`rejected`, dependencia universal).
  2. RTK, Context Mode y Hindsight fuera del MVP → S11 l. 91 (`deferred`; S12
     decidirá el backlog). Su residuo pasa a la tercera pregunta nueva.
  3. Ruta del conocimiento canónico → S11 l. 109 (`accepted`, roots
     configurables con `knowledge/` propuesto) y l. 110-111 (`rejected`).
  4. Orchestrator software, rol o ambos → S11 l. 103 (`accepted`, «Orchestrator
     como software determinista y rol de agente acotado») y l. 104-105
     (`rejected`, exclusivamente determinista o exclusivamente dirigido por un
     agente). Resumen coherente en el tracker de definición l. 78-79. **No
     consta en ADR-010**: la búsqueda de «orchestr», «orquest», «planner» y
     «control plane» en ADR-010 no da coincidencias, y su punto 1 enumera
     módulos sin el orchestrator. Tampoco en ningún otro ADR posterior a
     ADR-003.
  5. Context packet mínimo con los tres proveedores → núcleo en S06 l. 76 (ya
     señalado arriba). Validación: S11 l. 97 mantiene los tres adapters como
     `target` hasta S12. El residuo pasa a la primera pregunta nueva.
  6. Dónde vivirán los handoffs → S11 l. 106 (`accepted`, en el work tracker)
     y l. 107-108 (`rejected`).
  7. Límites de autonomía e intervenciones humanas en el ciclo operativo → S09
     (filas l. 70, 81, 85 y 87 y prosa l. 110, por búsqueda de «autonom»). La
     cobertura sólo se localizó, no se contrastó.
  8. Actualización en consumidores sin sobrescribir personalizaciones → S10
     l. 9, 35-37, 70-73 y 131 (por búsqueda).
  9. Agent Skills (formulación literal no recuperada) → S08 l. 93-95.
  10. CLI (formulación literal no recuperada) → S10 l. 111 difiere la sintaxis
      a S11, y S11 l. 100-102 la fija.
- Residuo que mantiene vigente la anotación:
  1. **Retirada sin disposición registrada.** El índice no dice que las
     preguntas se resolvieron ni dónde. El tracker de definición no registra la
     sustitución (búsqueda de «pregunta», «índice rector» y «product-definition»:
     sólo l. 10, 116-117, 138, 316 y 331). Quien lea la base anterior o estas
     anotaciones no puede seguir la cadena desde el índice.
  2. **La lista nueva sigue sin destino, estado ni enlace.** Coincide con los
     «Puntos abiertos» de ADR-010 l. 192-196 y con las preguntas 2-5 y 9 de
     S12, pero quita las flechas de destino del ADR. La «Pregunta para
     resolver» de arriba (registro vivo o no, quién lo actualiza) sigue sin
     respuesta.
  3. Dos de las tres preguntas nuevas piden resultados que S12 l. 56-57 y
     66-68 sitúan después de autorizar la construcción. Es un defecto distinto,
     registrado en [`REV-2026-099`](2026-09-25-REV-2026-099-preguntas-abiertas-del-indice-sin-disposicion-y-dos-sobre-resultados-que-s12-situa-despues-de-autorizar-la-construccion.md).
- Preguntas pendientes de arriba: la de los handoffs y la de los límites de
  autonomía tienen ya disposición (puntos 6 y 7). La de Beads, Agent Skills,
  CLI y actualización también (puntos 1 y 8-10).
- Límite: S12 sigue `in_progress` y puede volver a cambiar la lista. Su
  criterio de salida (l. 47-48) exige disposición para las incógnitas al
  cerrar.

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [REV-2026-003](2026-09-21-REV-2026-003-estado-duplicado-indice-y-tracker.md),
  [REV-2026-005](2026-09-21-REV-2026-005-revision-transversal-sin-rastro-s05-s07.md),
  [checkpoint B002](blocks/B002.md)

## Preguntas pendientes

- «¿Dónde vivirán los handoffs?»: en S05 no se localizó por búsqueda un acuerdo ni
  un diferimiento explícito sobre ubicación física (`deferred`, «ubicación»,
  «almacenamiento» sin coincidencias). No demostrado; comprobar al revisar los
  bloques de S05.
- «¿Cómo se concretarán en el ciclo operativo los límites de autonomía…?»: la
  sesión 4 (ciclo operativo) está cerrada; no se comprobó si lo responde. Comprobar
  en los bloques de S04 y en el cruce `CT07`.
- Beads, Agent Skills, CLI y actualización en consumidores: no se buscó disposición
  más allá de una mención de Agent Skills como no adoptadas en
  `session-04-operating-cycle.md:251`.

## Cobertura y límites

- Leído: `docs/product-definition.md:85-170`; `session-04-operating-cycle.md:104-113`;
  `session-07-knowledge.md:40-62`; coincidencias de búsqueda en `docs/definition/`
  y `docs/definition-tracker.md`.
- Fuentes externas: no aplican a este hallazgo.
- No examinado: texto completo de S01–S07, ADRs e `ideas/`.
