# Anotación de revisión

- ID de anotación: `REV-2026-053`
- Unidad y ubicación: `S06` — [Comprobación de cierre](../definition/session-06-context.md#s06-cierre),
  «El criterio de salida está cumplido: el contrato cubre núcleo, secciones,
  progressive disclosure, referencias y procedencia, presupuesto,
  reconciliación incremental, impactos, estados, validación, parada, evidencia
  y capacidades opcionales de reducción y externalización. Se confirma la
  separación de [ADR-004] y no quedan bloqueos para iniciar la sesión 7. La
  decisión transversal del contrato portable de contexto queda preparada para
  documentarse en [ADR-005]» (`docs/definition/session-06-context.md:198-205`),
  frente a [Criterio de salida](../definition/session-06-context.md#criterio-de-salida)
  (l. 33-37), a la fila de la sesión 6 del índice rector,
  [«Sesiones de definición»](../product-definition.md#sesiones-de-definición)
  (`docs/product-definition.md:64`), a la tabla de áreas de la
  [revisión transversal](../product-definition.md#revisión-transversal-de-prácticas-de-harnesses)
  (l. 118, 126-130), al
  [«Criterio de cierre de la definición»](../product-definition.md#criterio-de-cierre-de-la-definición)
  (l. 152, 160-162), a `docs/definition-tracker.md` l. 370-380 y a
  [ADR-005](../adr/ADR-005-contrato-portable-de-contexto.md) (l. 3-4, 9,
  116-128). Bloque `B026`.
- Revisión examinada: estado de los archivos al 2026-09-24; repositorio sin
  commits, huella no disponible. S06 declara «Sesión iniciada el 2026-09-17;
  cerrada el 2026-09-18» (l. 3); ADR-005 está fechado 2026-09-18, «Aceptada»
  (l. 3-4).
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos textuales (búsquedas en toda la unidad);
  `media` sobre su efecto (S07, ADR-006, S08, S11 sólo por líneas devueltas por
  búsqueda; no se comprobó si S07 quedó bloqueada de hecho)
- Impacto: si el cierre de S06 sirve como constancia de que se cumplió el
  criterio literal (índice l. 64 y S06 l. 33-37) —en particular la única
  cualidad que el criterio exige, «verificables»— y de que se auditó «frente a
  ADR-003» como afirma el tracker de definición; si el criterio de cierre
  global (índice l. 152: «estén definidos el lifecycle, el context packet y el
  handoff»; l. 160-162: revisión transversal trazable e incógnitas que no
  bloqueen) puede apoyarse en este cierre; y si el patrón de
  `REV-2026-011`/`016`/`024`/`034`/`044` (criterio reformulado, no bloqueo
  afirmado sin enumerar, auditoría invocada sin registro, cobertura de la
  revisión transversal no declarada, ADR enlazado sólo como decisión) se
  acepta también para S06. No cambia el contenido de ninguna fila aceptada.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (contradicción y omisión exclusivamente
  internas; no se invoca ninguna fuente externa)
- Fuente primaria: `docs/definition/session-06-context.md` l. 3, 7-10, 14-17,
  21-29, 33-37, 41-60, 94, 102, 174, 177, 189-192 y 194-206 (leídas) y
  búsqueda en toda la unidad de «verificable» (l. 8, 27, 35, 52; ninguna en
  l. 194-206), «sesión 7» (sólo l. 37 y 203), «RTK|Context Mode» (sólo
  l. 54-56), «auditor» y «práctica» (ninguna), «transversal» (sólo l. 203),
  «ADR-003» (sólo l. 47), «knowledge» (l. 45, 102);
  `docs/product-definition.md` l. 64, 118, 126-135, 146-163;
  `docs/definition-tracker.md` l. 343 y 370-380;
  `docs/adr/ADR-005-contrato-portable-de-contexto.md` l. 3-4, 9, 100-102,
  116-139; `docs/adr/ADR-006-modelo-portable-de-conocimiento.md` l. 3 y 16
  (por búsqueda); `docs/definition/session-07-knowledge.md` l. 3, 11 y
  104-107 (por búsqueda).
- Sección o localizador: anclas `criterio-de-salida` y `s06-cierre` de S06;
  «Decisiones» y «Tipos mínimos de secciones bajo demanda» de S06; «Sesiones
  de definición», «Revisión transversal de prácticas de harnesses» y «Criterio
  de cierre de la definición» del índice rector; «Criterio de salida de la
  sesión 6» del tracker de definición; TL;DR y «Puntos abiertos» de ADR-005.
- Fecha de consulta/publicación: consulta 2026-09-24; sesión cerrada el
  2026-09-18 según l. 3.
- Hecho observado:
  1. **El cierre amplía el criterio, y cada elemento añadido tiene fila.** El
     criterio (l. 33-37) pide núcleo mínimo común, secciones tipadas, sus
     referencias, condiciones para descubrir material progresivamente,
     «presupuestos y condiciones de parada verificables», preservar la
     separación de ADR-004 y «no dejar ambigüedad bloqueante para la sesión
     7». El cierre (l. 198-201) nombra doce elementos: los del criterio más
     «procedencia» (fila l. 44), «reconciliación incremental» (l. 47),
     «impactos» (l. 48), «estados» (l. 49), «validación» (l. 51), «evidencia»
     (l. 46, 52) y «capacidades opcionales de reducción y externalización»
     (l. 53). Como en S05 (`REV-2026-044` hecho 1) y a diferencia de S01-S04,
     el cierre no reduce la lista. No es defecto por sí mismo.
  2. **La única cualidad exigida por el criterio desaparece del cierre, y es
     la que las anotaciones de S06 cuestionan.** «verificables» (l. 35) es el
     único adjetivo del criterio; el cierre dice «presupuesto» y «parada» sin
     él, y «verificable» no aparece en l. 194-206 (en la unidad: l. 8, 27, 35
     y la justificación de l. 52). La sustracción cae donde hay laguna
     registrada: la parada no produce un hecho observable fuera del agente
     (`REV-2026-047`), la parada por presupuesto no es decidible sin límites
     del adapter (`REV-2026-048`), los marcadores no tienen valor esperado
     (`REV-2026-050`), los estados no tienen transiciones ni precedencia
     (`REV-2026-051`) y la evidencia de l. 189-192 no enumera la parada ni
     tiene lugar (`REV-2026-052`). El tracker de definición reformula el
     criterio (l. 372-376) y tampoco conserva «verificables». Ninguna de las
     tres redacciones (índice, unidad, tracker) coincide con las otras.
  3. **Ni criterio ni cierre nombran «RTK y Context Mode», término de la fila
     del índice.** La fila l. 64 exige «Progressive disclosure, context
     packet, referencias, presupuestos, condiciones de parada, RTK y Context
     Mode». `REV-2026-045` hecho 3 registró que el criterio los omite; el
     cierre los omite también: «capacidades opcionales de reducción y
     externalización» corresponde a la fila l. 53 (capacidades semánticas),
     no a las filas l. 54-56 (`accepted`, `rejected`, `deferred` sobre las
     herramientas). El cierre repite el criterio y no la fila del índice
     (patrón de `REV-2026-034` hecho 2).
  4. **«No quedan bloqueos para iniciar la sesión 7» se afirma sin enumerar
     y sin que la unidad diga qué recibe la sesión 7.** El criterio pedía «no
     dejar ambigüedad bloqueante» (l. 36-37); el cierre dice «bloqueos»
     (l. 202). «sesión 7» aparece en S06 sólo en l. 37 y l. 203; ninguna de
     las dieciocho filas (l. 43-60) ni la prosa remite nada a S07; la fila de
     la sección `knowledge` (l. 102: «Requisitos, decisiones y conocimiento
     de dominio») no dice que su taxonomía, metadatos o mantenimiento quedan
     para otra sesión. Lo que S06 entrega a S07 consta sólo fuera de la
     unidad: ADR-005 l. 126-128 («¿Qué taxonomía, metadatos y mantenimiento
     usa la sección `knowledge`? → resuelto en sesión 7 y ADR-006»), ADR-006
     l. 16 («La sesión 6 dejó preparada la sección `knowledge` del context
     packet y exigió preservar referencias, procedencia y reconciliación») y
     S07 l. 11 y 104-107. El cierre tampoco nombra con otras palabras las
     lagunas que sí tocan a S07: `check_after` (l. 162-163) frente a
     `stale_after` de S07 (pregunta 6 de `B025`), ni las de `REV-2026-046`-
     `052` («sucesor», «transición», «límites», «actor», «trigger» ausentes
     de l. 194-206).
  5. **«Se confirma la separación de ADR-004» es la única confirmación con
     contenido y no dice qué se contrastó; la auditoría «frente a ADR-003»
     existe sólo en el tracker.** La separación consta en la letra (l. 14-17,
     44, 49, 94, 174, 177), pero el mecanismo que la realiza —la referencia
     del handoff al packet— no tiene campo en ningún contrato
     (`REV-2026-046`) y el marcador «estado del handoff» no tiene efecto
     declarado (`REV-2026-050` hecho 2); el cierre no lo menciona. El tracker
     de definición l. 379-380 añade «La auditoría no encontró contradicciones
     con ADR-003 o ADR-004 ni bloqueos para la sesión 7»: «auditor» no
     aparece en S06, «ADR-003» sólo en la justificación de l. 47, y ni S06 ni
     ADR-005 registran qué se comprobó frente a ADR-003 (mismo patrón que
     `REV-2026-034` hecho 3 y `REV-2026-044` hecho 3). Además el tracker
     l. 377-379 reproduce la lista del cierre omitiendo «capacidades
     opcionales de reducción y externalización».
  6. **No declara la cobertura del área l. 118 del índice.** El índice asigna
     a la sesión 6 «Selección de contexto, navegación progresiva y
     continuidad entre ventanas» y compromete un registro por práctica
     (l. 126-128). `REV-2026-005` hecho 3 ya registró que S06 sólo contiene
     «transversal» en l. 203; el cierre no declara cobertura ni residuo, y
     los tres artículos que ADR-005 cita en «Referencias» (l. 137-139) no se
     enlazan ni se evalúan en ninguna línea de S06 (`B023`, «Evidencia no
     encontrada»).
  7. **ADR-005 se enlaza en futuro y sólo como decisión.** «queda preparada
     para documentarse en ADR-005» (l. 203-205) describe el ADR como
     pendiente, cuando existe con la misma fecha del cierre (2026-09-18) y
     estado «Aceptada». A diferencia de S05 l. 262-263 («se conserva además
     en ADR-004»), el cierre no afirma que el ADR reproduzca las filas ni lo
     enlaza como inventario de pendientes, aunque «Puntos abiertos»
     (l. 118-128) es el único lugar con destinos para dos diferidos que la
     unidad no registra (`REV-2026-054`).
- Inferencia (si aplica): el cierre funciona como resumen de lo producido y
  no como verificación del criterio; quien lea sólo el cierre entenderá que
  presupuestos y parada son verificables, que la sesión 7 no necesitaba nada
  de S06 que no estuviera resuelto y que hubo una auditoría frente a ADR-003,
  y ninguna de las tres cosas puede comprobarse desde la unidad.

## Observación y propuesta

- Observación: el patrón de `REV-2026-011`/`016`/`024`/`034`/`044` se repite
  en S06 con la variante de S05 (el cierre amplía en vez de reducir) y con una
  sustracción precisa: el único calificador del criterio. Es la sexta sesión
  consecutiva cuyo cierre afirma el no bloqueo de la siguiente sin enumerar
  las ambigüedades consideradas, y la tercera (S04, S05, S06) cuya auditoría
  sólo consta en el tracker de definición.
- Propuesta concreta: (a) que el cierre contraste cada término del criterio y
  de la fila del índice l. 64 con un pasaje, incluidas las filas l. 54-56
  sobre RTK y Context Mode, y conserve «verificables» diciendo qué hecho
  observable (por ejemplo, la evidencia de l. 189-192 con el evento de parada
  que hoy falta) lo satisface; (b) que enumere lo que S07 necesitaba de S06
  (sección `knowledge`, relación `check_after`/`stale_after`) y las
  ambigüedades consideradas, o remita a un inventario en la unidad; (c) que
  la unidad o ADR-005 registren qué se comprobó «frente a ADR-003 o ADR-004»,
  o que el tracker de definición retire esa frase; (d) que declare la
  cobertura o el residuo del área l. 118; (e) que l. 203-205 se redacte en
  presente y enlace ADR-005 también como inventario de pendientes.
- Contraargumento o coste/riesgo: `AGENTS.md` l. 39-40 sólo exige «comprueba
  el criterio de salida», no un acta; el cierre amplía la lista del criterio,
  lo que es más exigente que reducirla; la persona pudo comprobar la
  verificabilidad sin escribirla; el destino a S07 consta en ADR-005 fechado
  el mismo día y S07 l. 11 lo recibe; editar un cierre de sesión cerrada
  tiene coste y puede reabrir discusión. Nada de esto hace comprobable desde
  la unidad lo que el cierre afirma.

## Análisis adicional

- Evidencia interna: [S06, «Criterio de salida»](../definition/session-06-context.md#criterio-de-salida)
  l. 33-37 frente a [«Comprobación de cierre»](../definition/session-06-context.md#s06-cierre)
  l. 198-205; [índice rector, fila 6](../product-definition.md#sesiones-de-definición)
  l. 64; [tracker de definición](../definition-tracker.md) l. 370-380;
  [ADR-005, «Puntos abiertos»](../adr/ADR-005-contrato-portable-de-contexto.md#puntos-abiertos)
  l. 126-128; [ADR-006, «Contexto»](../adr/ADR-006-modelo-portable-de-conocimiento.md)
  l. 16; [S07](../definition/session-07-knowledge.md) l. 11, 104-107.
  Anotaciones relacionadas sin duplicar: `REV-2026-005` (área l. 118),
  `REV-2026-045` (criterio sin RTK/Context Mode; destino divergente),
  `REV-2026-046`-`REV-2026-052` (lagunas que el cierre declara cubiertas),
  `REV-2026-011`/`016`/`024`/`034`/`044` (patrón de cierres S01-S05),
  `REV-2026-054` (inventario de diferidos unidad/ADR).
- Contraevidencia y límites: el cierre no afirma nada falso en la letra —cada
  elemento nombrado tiene fila—; la omisión de «verificables» puede ser
  estilística; la fila l. 53 podría leerse como cobertura suficiente de «RTK
  y Context Mode» si se entiende que el índice nombraba herramientas sólo
  como ejemplo; y S07 cerró sin declarar bloqueo (S07 l. 113-121). No se
  comprobó si S07, S08 o S11 recibieron de hecho algo de S06 que faltara: sólo
  que la unidad S06 no lo escribe.
- Pregunta para resolver: ¿puede el cierre de una sesión declarar cumplido un
  criterio omitiendo su único calificador («verificables») y afirmar el no
  bloqueo de la sesión siguiente sin decir qué le entrega ni qué ambigüedades
  consideró, y dónde debe constar la auditoría frente a ADR-003/ADR-004 que
  hoy sólo afirma el tracker de definición?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B026](blocks/B026.md); `REV-2026-005`,
  `REV-2026-011`, `REV-2026-016`, `REV-2026-024`, `REV-2026-034`,
  `REV-2026-044`, `REV-2026-045`, `REV-2026-046`, `REV-2026-047`,
  `REV-2026-048`, `REV-2026-050`, `REV-2026-051`, `REV-2026-052`,
  `REV-2026-054`
