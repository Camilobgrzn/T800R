# Anotación de revisión

- ID de anotación: `REV-2026-043`
- Unidad y ubicación: `S05` — [session-05-handoffs.md, «Integridad, deduplicación y referencias»](../definition/session-05-handoffs.md#integridad-deduplicación-y-referencias)
  (l. 183-192) y [«Resultado mínimo de `completed`»](../definition/session-05-handoffs.md#resultado-mínimo-de-completed)
  (l. 224-229), frente a [«Envoltura común mínima»](../definition/session-05-handoffs.md#envoltura-común-mínima)
  (l. 93-109, en particular `created_at` l. 99, `expires_at` l. 100, `due_at`
  l. 101, `events` l. 109), a las filas l. 62, 65, 66 y 78 de
  [«Decisiones»](../definition/session-05-handoffs.md#decisiones), a la capa
  estructural (l. 129) y a
  [ADR-004, «Decisión», punto 9](../adr/ADR-004-contrato-portable-de-handoffs.md#decisión)
  (l. 91-94). Bloque `B021`.
- Revisión examinada: estado de los archivos al 2026-09-24; repositorio sin
  commits, huella no disponible. S05 cerrada el 2026-09-16 (l. 3). Citas
  distintivas: «Tras emitir, permanecen inmutables `schema`, `id`, `type`,
  `sender`, `recipient`, `subject`, `base`, `authority`, `references`,
  `correlation` y `payload`. El estado, los eventos y el resultado sólo crecen
  mediante transiciones válidas» (l. 183-185); «Una entrega repetida con el
  mismo `id` y contenido es idempotente … El mismo `id` con contenido base
  distinto es un conflicto de integridad» (l. 185-188); «Corregir, renovar o
  reintentar una solicitud exige un identificador nuevo» (l. 190); «Si
  expiró, renovarlo requiere otro handoff correlacionado» (l. 202-203); «La
  envoltura mantendrá identidad, actores, correlación, sujeto, base, tiempos,
  estado y referencias» (l. 65).
- Tipo: `incompleto`
- Gravedad: `baja`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos textuales; `media` sobre el efecto (S11
  no leída; la representación física puede añadir campos, `REV-2026-036`)
- Impacto: si `expires_at` y `due_at` pueden editarse en el mismo handoff
  (prolongar la oferta o la expectativa sin nuevo handoff ni evento) o sólo
  mediante «otro handoff correlacionado» (l. 190, 203); qué compara la capa
  estructural (l. 129, «tiempos») y la regla de idempotencia (l. 186-188,
  «contenido») en una reentrega; y en qué campo se persiste el «resultado» de
  `completed` (l. 224-229) si `payload` y `references` son inmutables y la
  envoltura no tiene campo de resultado. No cambia el contenido de ninguna
  fila aceptada.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión exclusivamente interna; no se invoca
  ninguna fuente externa)
- Fuente primaria: `docs/definition/session-05-handoffs.md` l. 62, 65, 66, 78
  (dependencia), 93-109, 129 (dependencia), 181-192, 202-203, 219-232
  (leídas) y búsqueda en toda la unidad de «resultado» (l. 31, 57, 60-62, 67,
  68, 74, 76-78, 80, 158, 185, 216, 219, 224, 231, 249: ningún campo de la
  envoltura) e «inmutable» (l. 78, 179, 183, 255);
  `docs/adr/ADR-004-contrato-portable-de-handoffs.md` l. 82-86, 91-94
- Sección o localizador: «Decisiones», «Envoltura común mínima», «Capas de
  validación», «Integridad, deduplicación y referencias», «Separación y
  recuperación», «Resultado mínimo de `completed`» (S05); «Decisión» puntos
  7 y 9 (ADR-004)
- Fecha de consulta/publicación: consulta 2026-09-24; S05 cerrada el
  2026-09-16 según l. 3
- Hecho observado:
  1. **Tres campos de la envoltura no están ni entre lo inmutable ni entre lo
     que crece.** l. 183-184 enumeran once campos inmutables; l. 184-185 dicen
     que «el estado, los eventos y el resultado sólo crecen». La envoltura
     (l. 93-109) tiene quince campos: los once inmutables, `status` y `events`
     (que crecen) y `created_at` (l. 99, «Momento de emisión»), `expires_at`
     (l. 100) y `due_at` (l. 101), que no aparecen en ninguna de las dos
     listas. La fila l. 78 («La identidad, intención y contenido emitido de un
     handoff serán inmutables») es genérica; l. 65 incluye «tiempos» en la
     envoltura; la lista explícita de l. 183-184 los omite. ADR-004 punto 9
     (l. 91-92) repite la lista sin tiempos: «Identidad, intención, actores,
     sujeto, base, autoridad, referencias, correlación y payload».
  2. **La renovación exige un handoff nuevo, pero nada impide editar el
     plazo.** l. 190: «Corregir, renovar o reintentar una solicitud exige un
     identificador nuevo»; l. 202-203: «Si expiró, renovarlo requiere otro
     handoff correlacionado»; l. 62 justifica `expires_at` para evitar
     «aceptar contexto viejo». Si `expires_at` no es inmutable, la oferta puede
     prolongarse en el mismo handoff sin nuevo `id`, sin evento (l. 109
     registra transiciones, no cambios de campo) y sin que la capa estructural
     («tiempos», l. 129) tenga un valor de referencia. Lo mismo vale para
     `due_at` tras `accepted`: una prórroga no es ninguna de las dos
     transiciones permitidas (l. 175) ni exige el cierre coordinado.
  3. **«Contenido» de la idempotencia sin definir.** l. 186-188 hacen
     depender la idempotencia y el conflicto de integridad de «el mismo `id`
     y contenido» y de «contenido base distinto», sin decir qué campos forman
     el contenido comparado. Si son los once inmutables, una reentrega con
     `expires_at` distinto no es idempotente ni conflicto; si es todo el
     artefacto, una reentrega por el transporte —que porta el `status` y los
     `events` del momento de emisión— sería conflicto con el original ya
     avanzado. ADR-004 punto 9 (l. 92-94) repite la regla con la misma
     indefinición.
  4. **El resultado de `completed` no tiene campo.** l. 224-229 fijan el
     «Resultado mínimo persistido» por tipo (revisión evaluada, cobertura,
     evidencia producida, hallazgos, veredicto; respuesta o decisión,
     justificación, condiciones, referencias afectadas, acción de
     seguimiento). La envoltura (l. 93-109) no tiene campo de resultado
     («resultado» no nombra ningún campo en toda la unidad); `payload` y
     `references` son inmutables (l. 184); el único contenedor que crece con
     «evidencia» es `events` (l. 109: «actor, fecha, transición, razón y
     evidencia»). La unidad no dice si el resultado vive en el evento
     `completed`, en un campo no enumerado o fuera del handoff. ADR-004 punto
     7 (l. 82-86) enumera lo que se persiste sin ubicarlo.
- Inferencia (si aplica): la omisión de los tiempos parece un descuido de
  enumeración (la lectura natural de l. 78 los incluye), pero la lista
  explícita es la regla que la capa estructural puede aplicar y el ADR la
  repite; la ausencia de campo para el resultado puede ser deliberada
  (representación física en S11), pero el criterio de salida (l. 236) declara
  definidos los «campos mínimos».

## Observación y propuesta

- Observación: `REV-2026-039` trata la presencia condicional de `expires_at`/
  `due_at`; aquí se trata su mutabilidad tras emitir y qué compara la
  deduplicación, además de la ubicación del resultado. `REV-2026-036` trata
  la representación física; aquí se señala que el contrato semántico deja un
  elemento obligatorio (l. 224-229) sin campo lógico. No se duplican.
- Propuesta concreta: que la persona decida (a) si `created_at`, `expires_at`
  y `due_at` son inmutables tras emitir —y entonces prolongar un plazo exige
  otro handoff correlacionado, coherente con l. 190/203— o mutables mediante
  un evento registrado con actor y razón; (b) qué campos forman el
  «contenido» de l. 186-188 (por ejemplo, todos salvo `status`, `events` y el
  resultado); (c) dónde se persiste el resultado de `completed` (evidencia del
  evento `completed`, campo `result` de la envoltura o referencia externa) y
  si ese campo entra en la lista de lo que «crece». No editar S05 ni ADR-004
  sin esa decisión.
- Contraargumento o coste/riesgo: la fila l. 78 y el cierre l. 255
  («identidad y contenido emitido son inmutables») pueden leerse como
  cubriendo los tiempos; el resultado puede vivir legítimamente en la
  evidencia del evento `completed` (l. 109) o en la representación física de
  S11 sin ampliar la envoltura; la capa de reconciliación (l. 131) sigue
  protegiendo frente a bases viejas aunque el plazo se prolongue. El coste de
  la propuesta es añadir tres nombres a una lista y una frase sobre el
  resultado.

## Análisis adicional

- Evidencia interna: hechos 1-4. Enlaces: S05 l. 62, 65, 66, 78
  ([Decisiones](../definition/session-05-handoffs.md#decisiones)), l. 93-109
  ([Envoltura](../definition/session-05-handoffs.md#envoltura-común-mínima)),
  l. 129 ([Capas](../definition/session-05-handoffs.md#capas-de-validación)),
  l. 183-192 ([Integridad](../definition/session-05-handoffs.md#integridad-deduplicación-y-referencias)),
  l. 202-203 ([Separación y recuperación](../definition/session-05-handoffs.md#separación-y-recuperación)),
  l. 224-229 ([Resultado mínimo](../definition/session-05-handoffs.md#resultado-mínimo-de-completed));
  ADR-004 l. 82-86, 91-94 ([Decisión](../adr/ADR-004-contrato-portable-de-handoffs.md#decisión));
  anotaciones relacionadas: [`REV-2026-039`](2026-09-24-REV-2026-039-expires-at-y-due-at-condicionales-sin-condicion-ni-politica-de-caducidad-frente-a-la-capa-estructural.md),
  [`REV-2026-036`](2026-09-24-REV-2026-036-pregunta-8-de-s05-representacion-y-ubicacion-sin-fila-y-aplazamiento-de-s04-l299-no-recibido.md),
  [`REV-2026-041`](2026-09-24-REV-2026-041-campos-de-consultation-frente-al-minimo-de-s04-l298-y-authority-duplicado-entre-envoltura-y-payload.md)
  (`authority` inmutable sin semántica única).
- Contraevidencia y límites: S11 y ADR-010 no se leyeron: el schema físico
  puede fijar la mutabilidad de los tiempos y un campo de resultado; el
  cierre de S05 (l. 247-263, bloque `B022`) se consultó sólo por búsqueda
  (l. 255). No se demuestra que los tiempos sean mutables; se demuestra que
  la unidad no lo dice en el único lugar donde enumera lo inmutable y lo que
  crece.
- Pregunta para resolver: ¿son inmutables `created_at`, `expires_at` y
  `due_at` tras emitir, qué campos compara la regla de idempotencia y en qué
  campo se persiste el resultado mínimo de `completed`?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: pendiente
