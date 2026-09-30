# Anotación de revisión

- ID de anotación: `REV-2026-054`
- Unidad y ubicación: `S06` — [Comprobación de cierre](../definition/session-06-context.md#s06-cierre),
  «La decisión transversal del contrato portable de contexto queda preparada
  para documentarse en [ADR-005]» (`docs/definition/session-06-context.md:203-205`)
  y las tres filas `deferred` de [«Decisiones»](../definition/session-06-context.md#decisiones)
  (l. 56-58), frente a [ADR-005, «Puntos abiertos»](../adr/ADR-005-contrato-portable-de-contexto.md#puntos-abiertos)
  (`docs/adr/ADR-005-contrato-portable-de-contexto.md:116-128`). Bloque
  `B026`.
- Revisión examinada: estado de los archivos al 2026-09-24; repositorio sin
  commits, huella no disponible. S06 «Sesión iniciada el 2026-09-17; cerrada
  el 2026-09-18» (l. 3); ADR-005 fechado 2026-09-18, «Aceptada» (l. 3-4), y
  cita ADR-006 (fechado 2026-09-21) y ADR-007 (fechado 2026-09-22) en
  l. 119, 127 y 136, por lo que fue editado después de su fecha sin nota de
  revisión.
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos textuales; `media` sobre el efecto (S07,
  ADR-006, S08, ADR-007 y S11 sólo por líneas devueltas por búsqueda; no se
  comprobó qué resolvieron)
- Impacto: cuál es el inventario vigente de aplazamientos de S06 —la unidad
  (tres filas con destino) o el ADR (cinco puntos con destinos distintos)—;
  si el «no quedan bloqueos para iniciar la sesión 7» del cierre (l. 202-203)
  puede verificarse desde la unidad cuando lo único que S06 remite a S07
  consta sólo en el ADR; y si la representación física del packet —que S11
  resolvió según ADR-005 l. 122-123 y S11 l. 115/166 (por búsqueda)— tuvo
  alguna vez un aplazamiento con estado en S06. El índice l. 128 exige que
  «Una decisión aplazada incluirá un punto concreto de resolución». Afecta a
  `CT05` (S06/ADR-005), `CT06` (S07/ADR-006 reciben sin acuse de S06) y
  `CT07`. No cambia el contenido de ninguna fila aceptada.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (contradicción y omisión exclusivamente
  internas; no se invoca ninguna fuente externa)
- Fuente primaria: `docs/definition/session-06-context.md` l. 3, 7-10, 41-60,
  102 y 194-206 (leídas) y búsqueda en toda la unidad de «sesión 7» (l. 37,
  203), «sesión 8|sesiones 8» (l. 56-58), «sesión 11» (l. 56, 58), «sesión
  12» (ninguna), «representación física» (l. 9-10, 43, 55: ninguna con
  destino), «knowledge» (l. 45, 102), «deferred» (l. 56, 57, 58: tres
  filas); `docs/adr/ADR-005-contrato-portable-de-contexto.md` l. 3-4,
  116-128 y 130-139 (leídas) y búsqueda de «knowledge|sesión 7|ADR-006»
  (l. 67, 126-128, 136); `docs/adr/ADR-006-modelo-portable-de-conocimiento.md`
  l. 3 y 16; `docs/adr/ADR-007-contrato-de-capacidades-y-adapters-portables.md`
  l. 3 (fecha); `docs/definition/session-07-knowledge.md` l. 3, 11, 58-62 y
  104-107 (por búsqueda); `docs/product-definition.md` l. 128.
- Sección o localizador: «Decisiones» y «Comprobación de cierre» de S06;
  «Puntos abiertos» y «Referencias» de ADR-005; «Contexto» de ADR-006.
- Fecha de consulta/publicación: consulta 2026-09-24; S06 cerrada el
  2026-09-18; ADR-005 fechado 2026-09-18 y editado después.
- Hecho observado:
  1. **La unidad tiene tres aplazamientos con estado; el ADR tiene cinco.**
     S06 registra `deferred` en l. 56 («Seleccionar o adoptar RTK, Context
     Mode o un mecanismo equivalente para el MVP» → «sesiones 8 … y 11»),
     l. 57 («La identidad lógica y los aliases concretos del context packet» →
     «sesión 8») y l. 58 («La sintaxis o representación de las condiciones de
     carga del `manifest`» → «sesiones 8 y 11»). No tiene sección «Detalles
     aplazados» ni inventario fuera de la tabla. ADR-005 «Puntos abiertos»
     (l. 118-128) enumera cinco preguntas.
  2. **Dos puntos del ADR no tienen fila ni prosa en la unidad.** ADR-005
     l. 122-123: «¿Qué representación física, almacenamiento y mecanismos de
     búsqueda se usan? → sesión 11». En S06 «representación física» aparece
     sólo en el objetivo (l. 9-10, «sin seleccionar todavía») y en
     justificaciones de filas `accepted`/`rejected` (l. 43, 55), nunca con
     estado ni destino. ADR-005 l. 126-128: «¿Qué taxonomía, metadatos y
     mantenimiento usa la sección `knowledge`? → resuelto en sesión 7 y
     ADR-006; la representación física continúa diferida a sesión 11». En S06
     la sección `knowledge` se describe en una línea (l. 102: «Requisitos,
     decisiones y conocimiento de dominio») y «sesión 7» aparece sólo en el
     criterio (l. 37) y en el cierre (l. 203). Es el único aplazamiento de
     S06 dirigido a la sesión 7 y consta sólo en el ADR; ADR-006 l. 16 lo
     recibe como hecho («La sesión 6 dejó preparada la sección `knowledge` …
     y exigió preservar referencias, procedencia y reconciliación») sin que
     S06 lo escriba.
  3. **Los tres puntos comunes tienen destinos distintos en el ADR.** l. 57
     dice «sesión 8»; ADR-005 l. 118-119 dice «resuelto en sesión 8 y
     ADR-007; representación física → sesión 11». l. 58 dice «sesiones 8 y
     11»; ADR-005 l. 120-121 reparte «semántica declarativa resuelta en
     sesión 8; sintaxis y evaluador → sesión 11». l. 56 dice «sesiones 8 …
     y 11»; ADR-005 l. 124-125 añade «sesiones 11 y 12» (`REV-2026-045`
     hecho 4, no se duplica). Las marcas «resuelto en sesión 8/7 y
     ADR-007/ADR-006» son posteriores a la fecha del ADR (ADR-006
     2026-09-21, ADR-007 2026-09-22) y no llevan nota de revisión (patrón de
     `REV-2026-015`/`025`/`035`/`036`).
  4. **Ninguno de los dos inventarios recoge las omisiones registradas para
     S06.** Ni las filas l. 56-58 ni ADR-005 l. 118-128 nombran el campo
     handoff → packet (`REV-2026-046`), el destinatario y estado de la
     parada (`REV-2026-047`), `budget_profile` y el caso sin límites
     (`REV-2026-048`), el esquema e identidad de `producer`/`consumer`
     (`REV-2026-049`), el valor esperado de los marcadores, el campo de
     impacto y `check_after` (`REV-2026-050`), las transiciones e inmutables
     (`REV-2026-051`) ni el lugar de la evidencia (`REV-2026-052`)
     (`B025`, pista (k)).
  5. **El cierre no enlaza el ADR como inventario.** l. 203-205 remite a
     ADR-005 como «decisión transversal … preparada para documentarse», en
     futuro; no dice que allí consten los pendientes ni sus destinos. Quien
     lea la unidad sola no encuentra qué recibe la sesión 7 ni qué recibe la
     sesión 11 sobre representación física.
- Inferencia (si aplica): el inventario de aplazamientos de S06 vive en el
  ADR y fue completado después de su fecha; la unidad canónica, que el índice
  y `definition/README.md` declaran fuente de los acuerdos de su sesión, no
  permite verificar el «no bloqueo» para la sesión 7 ni saber que la
  representación física estaba diferida.

## Observación y propuesta

- Observación: es el mismo patrón de `REV-2026-025` (ADR-002 frente a S03),
  `REV-2026-035` (ADR-003 frente a S04) y `REV-2026-036` hecho 5 (ADR-004
  como único inventario de S05), con una diferencia: aquí la unidad sí tiene
  filas `deferred` con destino, pero el ADR añade dos que la unidad no tiene
  —incluida la única remisión a la sesión 7— y amplía los destinos de las
  tres comunes.
- Propuesta concreta: decidir cuál es el inventario vigente de aplazamientos
  de S06 y (a) añadir en la unidad filas `deferred` para la representación
  física del packet (→ sesión 11) y para la taxonomía, metadatos y
  mantenimiento de la sección `knowledge` (→ sesión 7 y ADR-006), con la
  misma convención de l. 56-58; (b) alinear los destinos de l. 57 y l. 58 con
  ADR-005 l. 118-121 o viceversa; (c) que el cierre l. 203-205 enlace
  «Puntos abiertos» como inventario y se redacte en presente; (d) que las
  marcas «resuelto en …» del ADR lleven fecha de edición.
- Contraargumento o coste/riesgo: `AGENTS.md` l. 21-23 hace de la unidad la
  fuente canónica de los acuerdos, no necesariamente de los pendientes, y puede
  aceptarse que el inventario viva en el ADR; los destinos ampliados del ADR
  son compatibles con los de la unidad (los incluyen); S07 y S11 resolvieron
  de hecho lo que el ADR les envía (S07 l. 104-107; ADR-005 l. 119, 121, 127
  marcan «resuelto»). Añadir filas a una sesión cerrada tiene coste editorial
  y de discusión. Nada de esto hace que la unidad registre lo que remite.

## Análisis adicional

- Evidencia interna: [S06, «Decisiones»](../definition/session-06-context.md#decisiones)
  l. 56-58 y [«Comprobación de cierre»](../definition/session-06-context.md#s06-cierre)
  l. 203-205 frente a [ADR-005, «Puntos abiertos»](../adr/ADR-005-contrato-portable-de-contexto.md#puntos-abiertos)
  l. 118-128; [ADR-006, «Contexto»](../adr/ADR-006-modelo-portable-de-conocimiento.md)
  l. 16; [S07](../definition/session-07-knowledge.md) l. 11, 104-107;
  [índice rector](../product-definition.md#revisión-transversal-de-prácticas-de-harnesses)
  l. 128. Anotaciones relacionadas sin duplicar: `REV-2026-045` hecho 4
  (destino de RTK/Context Mode), `REV-2026-025`/`035`/`036` (patrón
  unidad/ADR), `REV-2026-015`/`025` (ediciones posteriores sin nota),
  `REV-2026-046`-`REV-2026-052` (omisiones sin fila), `REV-2026-053` (cierre
  de S06).
- Contraevidencia y límites: la representación física puede considerarse
  excluida del alcance de S06 por el objetivo (l. 9-10) y no un aplazamiento;
  la sección `knowledge` está definida en S06 en lo que a S06 compete (tipo y
  contenido, l. 45, 102) y su taxonomía es materia de la sesión 7 por el plan
  del índice (l. 65), de modo que la remisión podría entenderse implícita; el
  ADR es un documento vivo y sus marcas «resuelto en …» son útiles. No se
  leyeron S07, ADR-006, S08, ADR-007 ni S11 más allá de las líneas devueltas
  por búsqueda: no se afirma que algo quedara sin resolver, sólo que la unidad
  no lo registra.
- Pregunta para resolver: ¿cuál es el inventario vigente de aplazamientos de
  S06 —las filas l. 56-58 o ADR-005 l. 118-128— y deben constar en la unidad,
  con estado y destino, la representación física del packet y la taxonomía de
  la sección `knowledge` que S07/ADR-006 dan por recibidas?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B026](blocks/B026.md); `REV-2026-015`,
  `REV-2026-025`, `REV-2026-035`, `REV-2026-036`, `REV-2026-045`,
  `REV-2026-046`, `REV-2026-047`, `REV-2026-048`, `REV-2026-049`,
  `REV-2026-050`, `REV-2026-051`, `REV-2026-052`, `REV-2026-053`
