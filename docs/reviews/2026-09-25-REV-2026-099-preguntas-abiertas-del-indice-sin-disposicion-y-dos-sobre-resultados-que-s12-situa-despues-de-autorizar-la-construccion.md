# Anotación de revisión

- ID de anotación: `REV-2026-099`
- Unidad y ubicación: índice rector (bloque `B002`, pasada 2) —
  [Preguntas de producto aún abiertas](../product-definition.md#preguntas-de-producto-aún-abiertas),
  `docs/product-definition.md:137-144`; citas distintivas: «¿Qué tuplas de
  adapter, proveedor, versión, sistema operativo y arquitectura superan
  conformidad para Codex, Claude Code, OpenCode, Beads y Docker?» (l. 139-140) y
  «¿Qué componentes diferidos entran al backlog y en qué orden después de medir
  el baseline del MVP?» (l. 143-144)
- Revisión examinada: 2026-09-25; índice de 204 líneas con «Última
  actualización: 2026-09-24» (l. 6); repositorio sin commits, huella no
  disponible
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos; `media` sobre el impacto (S12 sigue
  `in_progress` y puede resolverlo antes de cerrar)
- Impacto: la comprobación de la condición de cierre «las incógnitas restantes
  no bloqueen la implementación» (índice l. 162) y el veredicto de S12 sobre
  autorizar la construcción. Si la lista global conserva como pendientes de
  definición dos preguntas cuya respuesta, según S12 l. 56-57 y 66-68, sólo
  existe después de construir, el cierre o bien queda bloqueado por diseño, o
  bien invita a responderlas documentalmente, alternativa que S12 l. 57 rechaza.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (contradicción y omisión exclusivamente
  internas)
- Fuente primaria: sin fuente externa; ubicaciones internas:
  `docs/product-definition.md:137-144`, `146-163`;
  `docs/definition/session-12-validation-convergence.md:21-50`, `56-57`,
  `63-68`, `70-75`; `docs/definition/session-11-mvp-architecture.md:91`, `97`;
  `docs/adr/ADR-010-arquitectura-tecnica-del-mvp.md:187-196`
- Sección o localizador: índice «Preguntas de producto aún abiertas» y
  «Criterio de cierre de la definición»; S12 «Preguntas de la sesión»,
  «Criterio de salida», «Decisiones», «Evidencia y resultados» y «Preguntas
  abiertas»; S11 «Decisiones»; ADR-010 «Consecuencias» y «Puntos abiertos»
- Fecha de consulta/publicación: consulta 2026-09-25; S11 y ADR-010 fechados el
  2026-09-24; S12 iniciada el 2026-09-24 (l. 3)
- Hecho observado:
  1. **Sin disposición, destino ni estado de bloqueo.** Las tres preguntas de
     l. 139-144 no llevan sesión de destino, enlace ni indicación de si bloquean
     la construcción. Coinciden casi palabra por palabra con los «Puntos
     abiertos» de ADR-010 (l. 192-196), que sí llevan destino («→ sesión 12» y
     «→ backlog resultante de sesión 12»). El índice añade Beads y Docker a la
     primera y quita las flechas. Las tres corresponden a preguntas de S12
     (l. 26-33 y 40).
  2. **La primera pregunta pide un resultado que S12 sitúa después de
     autorizar.** El índice pregunta qué tuplas «superan conformidad». S12
     acepta que la conformidad ejecutada «será un gate de implementación y
     release: cada adapter y tupla seguirá `target/unverified` hasta superar sus
     pruebas» (l. 56). También rechaza «Exigir conformidad completa antes de
     autorizar construcción» y certificar «por revisión documental una conducta
     que sólo puede observarse en ejecución» (l. 57), y dice que «La evidencia de
     conformidad se producirá durante la construcción» (l. 67-68). La propia S12
     formula la pregunta de otra manera: qué tuplas «deben certificarse»
     (l. 32-33) y qué tuplas «forman el objetivo mínimo de conformidad» (l. 73).
     ADR-010 l. 187-188 también prevé que S12 pueda concluir que una superficie
     «sigue `target/unverified`».
  3. **La tercera pregunta depende de una medición que no tiene receptor antes
     de construir.** El índice condiciona el backlog de componentes diferidos a
     «después de medir el baseline del MVP». S11 l. 91 difiere Hindsight, RTK y
     Context Mode y afirma: «S12 comparará el baseline y decidirá el backlog
     posterior con métricas». ADR-010 l. 195-196 los envía al «backlog
     resultante de sesión 12». S12 no tiene fila ni pregunta sobre medir un
     baseline: su pregunta 9 ordena backlog y roadmap «por dependencia, riesgo y
     aprendizaje» (l. 40) y su evidencia preconstrucción «No otorgará estado
     `compatible` a ningún adapter ni sustituirá resultados observados»
     (l. 65-66). El baseline del MVP no puede medirse antes de que exista el MVP
     (ya lo señaló la pista (e) de [B043](blocks/B043.md) para `CT07`, sin
     anotación).
  4. El criterio de cierre exige que «las incógnitas restantes no bloqueen la
     implementación» (l. 162) y que «el backlog inicial esté ordenado por
     dependencias» (l. 163). S12 exige que las incógnitas «tengan disposición y
     no bloqueen implementación» (l. 47-48). La lista del índice no da esa
     disposición a ninguna de sus tres preguntas.
- Inferencia (si aplica): la lista se sustituyó al cerrar S11 copiando los
  «Puntos abiertos» de ADR-010, escritos antes de la decisión de S12 l. 56. Por
  eso conserva una formulación («superan conformidad», «después de medir») que
  esa decisión volvió irresoluble dentro de la definición. Es una inferencia por
  coincidencia textual y fechas: el tracker de definición no registra la
  sustitución.

## Observación y propuesta

- Observación: dos de las tres «preguntas de producto aún abiertas» sólo pueden
  responderse durante o después de la construcción. Con S12 l. 56-57 ya no son
  incógnitas que la definición pueda cerrar, sino pruebas o mediciones con gate
  propio. El índice no las distingue de la que sí debe cerrarse antes de
  construir (piloto, corpus, métricas y umbrales: l. 141-142) y no dice cuáles
  bloquean. Además, la comparación con el baseline que S11 l. 91 asigna a S12 no
  tiene fila receptora en S12.
- Propuesta concreta (decisión humana; no se edita el canon): (a) reformular
  l. 139-140 como en S12 («qué tuplas deben certificarse» u «objetivo mínimo»)
  y marcarla como no bloqueante, con la ejecución de la conformidad como gate de
  implementación y release; (b) separar en l. 143-144 el orden del backlog
  inicial (l. 163, antes de construir) del backlog de componentes diferidos
  posterior a la medición, y declarar este último incógnita no bloqueante con
  su punto de resolución (qué fase y qué evidencia); (c) dar a cada pregunta
  destino y enlace (por ejemplo, la pregunta de S12 correspondiente) y actualizar
  el destino de S11 l. 91 y ADR-010 l. 192 y 195-196, o registrar en S12 que la
  comparación con el baseline se hará después de construir.
- Contraargumento o coste/riesgo: la lectura más favorable toma «superan
  conformidad» como forma abreviada de la pregunta 5 de S12 y «después de medir
  el baseline» como la mera condición temporal de un backlog posterior. En ese
  caso el defecto es sólo de redacción y S12, aún `in_progress`, puede
  resolverlo al cerrar, puesto que su criterio (l. 47-48) ya exige disposición.
  El coste es editorial y afecta a tres documentos (índice, S11 y ADR-010).

## Análisis adicional

- Evidencia interna: [índice, preguntas abiertas](../product-definition.md#preguntas-de-producto-aún-abiertas);
  [criterio de cierre](../product-definition.md#criterio-de-cierre-de-la-definición);
  [S12](../definition/session-12-validation-convergence.md);
  [S11](../definition/session-11-mvp-architecture.md);
  [ADR-010](../adr/ADR-010-arquitectura-tecnica-del-mvp.md).
- Relación con anotaciones existentes, sin duplicarlas:
  [`REV-2026-004`](2026-09-21-REV-2026-004-preguntas-abiertas-sin-disposicion.md)
  (lista sin disposición ni destino; su nota de vigencia del 2026-09-25 registra
  el residuo de formato; esta anotación se ocupa de la imposibilidad temporal
  de dos preguntas), [`REV-2026-006`](2026-09-21-REV-2026-006-criterio-de-cierre-sin-autorizacion-ni-verificador.md)
  (criterio de cierre sin verificador; bloque `B003`) y
  [`REV-2026-045`](2026-09-24-REV-2026-045-rtk-y-context-mode-decididos-en-s06-sin-identificacion-ni-fuente-omitidos-del-criterio-y-con-destino-divergente-en-adr-005.md)
  hecho 4 (destino de RTK y Context Mode; `B043` lo amplió a «medición
  posterior a la construcción» sin anotación).
- Contraevidencia y límites: S12 está `in_progress` y su criterio de salida
  (l. 47-48) obligará a dar disposición a las incógnitas al cerrar. La
  inclusión de Beads y Docker en las tuplas es coherente con S11 l. 87, 93 y
  106 («La conformidad del adapter Beads deberá probar este requisito») y con
  el tracker de definición l. 64-66: no es defecto. No se leyó S11 más allá de
  l. 1-60 y 85-114, ni ADR-010 más allá de l. 95-114 y 180-199.
- Pregunta para resolver: ¿qué preguntas de la lista global deben cerrarse
  antes de autorizar la construcción y cuáles quedan, por diseño, como
  incógnitas no bloqueantes con un gate posterior? ¿Quién recibe la comparación
  con el baseline que S11 l. 91 asigna a S12?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [checkpoint B002](blocks/B002.md),
  [`REV-2026-004`](2026-09-21-REV-2026-004-preguntas-abiertas-sin-disposicion.md),
  [`REV-2026-006`](2026-09-21-REV-2026-006-criterio-de-cierre-sin-autorizacion-ni-verificador.md),
  [`REV-2026-045`](2026-09-24-REV-2026-045-rtk-y-context-mode-decididos-en-s06-sin-identificacion-ni-fuente-omitidos-del-criterio-y-con-destino-divergente-en-adr-005.md)

## Preguntas pendientes

- ¿La omisión de la pregunta 1 de S12 (l. 23-25) y de su pregunta abierta sobre
  la revisión adversarial (l. 74-75) en la lista del índice es deliberada,
  porque se consideran preguntas de proceso y no de producto? No se trata como
  defecto.

## Cobertura y límites

- Leído: `docs/product-definition.md:86-165`; S12 completa (76 líneas); S11
  l. 1-60 y 85-114; ADR-010 l. 95-114 y 180-199; `docs/definition-tracker.md`
  l. 60-99 y 320-399.
- Fuentes externas: no aplican.
- No examinado: resto de S11 y ADR-010; S08-S10 salvo búsquedas puntuales.
