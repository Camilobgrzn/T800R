# Anotación de revisión

- ID de anotación: `REV-2026-056`
- Unidad y ubicación: `S07` — [session-07-knowledge.md, «Decisiones»](../definition/session-07-knowledge.md#decisiones),
  filas «Metadatos comunes» (l. 48), «Responsabilidad de curación» (l. 50) y
  «Modelo de vigencia» (l. 51), frente a
  [S03, «Mantenimiento del conocimiento»](../definition/session-03-sources-of-truth.md#mantenimiento-del-conocimiento)
  (l. 134-135), [S03, «Detalles aplazados»](../definition/session-03-sources-of-truth.md#detalles-aplazados)
  (l. 237), [ADR-001, «Puntos abiertos»](../adr/ADR-001-autonomia-y-responsabilidades.md)
  (l. 120) y [ADR-002, «Puntos abiertos»](../adr/ADR-002-fuentes-canonicas-y-conocimiento.md#puntos-abiertos)
  (l. 142-144). Bloque `B027`.
- Revisión examinada: estado de los archivos al 2026-09-24; repositorio sin
  commits, huella no disponible. S07 cerrada el 2026-09-21 (l. 3); S03
  confirmada el 2026-09-14 y editada después (`REV-2026-023`); ADR-002 fechado
  2026-09-14 y editado después (`REV-2026-025`). Citas distintivas: «Se
  combinarán comprobaciones mecánicas y revisión semántica apoyada en
  evidencia. La frecuencia y los mecanismos se concretarán en la sesión 7»
  (S03 l. 134-135); «Esquema del registro, campos obligatorios y mecanismos de
  consulta de fuentes … se concretarán en conocimiento, portabilidad y
  adopción, sesiones 7, 8 y 10» (S03 l. 237); «¿Cómo se concretan esquemas del
  registro y acceso a fuentes? → el esquema de conocimiento quedó resuelto en
  sesión 7» (ADR-002 l. 142-143); «La revisión se activa por cambios en
  fuentes, evidencia o aplicabilidad y por riesgo» (S07 l. 51); «Toda entrada
  declara `type`, `title`, `sources`, `status`, `applicability`, `revision` y
  `review`» (S07 l. 48).
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos textuales (búsquedas en toda S07 y en
  `docs/` fuera de `reviews/`); `media` sobre el efecto (S08, S10 y S11 sólo
  por líneas devueltas por búsqueda; no se comprobó si S11 fija el esquema del
  registro)
- Impacto: si la cadena de aplazamientos S02 l. 104 → S03 (sin fila,
  `REV-2026-023` hecho 3) → S07 (sin fila) deja sin dueño las «reglas de
  validación de referencias» y la «frecuencia y mecanismos» del mantenimiento
  del conocimiento; si el esquema del registro de fuentes —del que dependen
  [`REV-2026-018`](2026-09-21-REV-2026-018-quien-define-criterios-de-autoridad-y-como-se-audita-el-limite.md)
  y [`REV-2026-019`](2026-09-21-REV-2026-019-registro-de-fuentes-autoridad-canonica-con-escritura-del-agente-sin-procedencia.md)—
  quedó fijado en alguna sesión o fue sustituido en ADR-002 por el esquema de
  las entradas de conocimiento; y qué fuerza tiene S07 l. 48 (`sources`
  obligatorio) cuando el registro al que apunta (l. 89-90, `B028`) no tiene
  esquema acordado. Afecta a `CT01`, `CT04` y `CT07`. No cambia el contenido
  de ninguna fila aceptada.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión exclusivamente interna; no se invoca
  ninguna fuente externa)
- Fuente primaria: `docs/definition/session-07-knowledge.md` l. 45, 48, 50-53
  (leídas) y l. 88-91 (dependencia mínima de `B028`, leída para el destino de
  `sources`), y búsqueda en toda la unidad de «frecuencia» (ninguna),
  «mecanismo» (ninguna), «mecánic» (sólo l. 53: «corrección mecánica»),
  «roto|rota» (ninguna), «validación» (sólo l. 73: «resultados de validación»
  como contenido que no es conocimiento), «registro» (sólo l. 90: «registro
  autorizado»), «enlace» (sólo l. 40); `docs/definition/session-03-sources-of-truth.md`
  l. 35, 37, 56, 134-135, 220, 236-237; `docs/definition/session-02-limits.md`
  l. 104; `docs/adr/ADR-001-autonomia-y-responsabilidades.md` l. 120;
  `docs/adr/ADR-002-fuentes-canonicas-y-conocimiento.md` l. 142-144; búsqueda
  de «registro de fuentes|registro autorizado|validación de referencias» en
  `docs/` fuera de `reviews/`: S03 l. 35, 37; S08 l. 96 («sólo tienen la
  autoridad que declare el registro de fuentes»); S11 l. 62 y 170 (el registro
  como artefacto versionado del repositorio); ninguna en S10; «frecuencia» en
  S03 l. 135, 236 y en S11 l. 171 («frecuencia de cambio», otro sentido);
  `docs/definition/session-06-context.md` l. 51 y 64-69 (capa `referential`
  del packet, por `B023`) y `docs/definition/session-08-portability.md` l. 311
  («referencias rotas» como categoría de resiliencia, por búsqueda).
- Sección o localizador: «Decisiones» de S07 y prosa l. 88-91; «Mantenimiento
  del conocimiento» y «Detalles aplazados» de S03; «Detalles aplazados» de
  S02; «Puntos abiertos» de ADR-001 y ADR-002.
- Fecha de consulta/publicación: consulta 2026-09-24.
- Hecho observado:
  1. **«Frecuencia y mecanismos» del mantenimiento no tienen fila.** S03
     l. 134-135 promete que S07 concretará la frecuencia y los mecanismos de
     las «comprobaciones mecánicas y revisión semántica». S07 fija qué activa
     la revisión (l. 51: cambios en fuentes, evidencia o aplicabilidad y
     riesgo; `check_after` como comprobación programada), qué exige la
     curación (l. 45, 52-53: «proporcional», que compruebe fuentes, evidencia
     y aplicabilidad) y quién la mantiene (l. 50). No dice con qué frecuencia
     ni con qué mecanismos se comprueban estructura, enlaces y vigencia (S03
     l. 220: «comprobaciones de estructura, enlaces y vigencia»); «frecuencia»
     y «mecanismo» no aparecen en la unidad y «mecánica» sólo califica una
     corrección editorial (l. 53). S07 tampoco declara que sustituye la
     frecuencia por activación por eventos.
  2. **La «validación de referencias» sigue sin fila en su tercer destino.**
     S02 l. 104 la aplazó a la sesión 3; S03 no tiene fila (`REV-2026-023`
     hecho 3); ADR-001 l. 120 la remite a «sesiones 3, 7 y 10». S07 no nombra
     validación de referencias ni enlaces rotos; S10 tampoco (por búsqueda).
     Lo más próximo está fuera de las unidades de conocimiento: la capa
     `referential` del context packet (S06 l. 51, 64-69) y «referencias rotas»
     como categoría de pruebas de resiliencia (S08 l. 311). Ninguna fila de S07
     enlaza la revisión del conocimiento con esas capas.
  3. **El esquema del registro de fuentes no se fija en S07, y ADR-002 declara
     resuelto otro esquema.** S03 l. 237 aplaza «Esquema del registro, campos
     obligatorios y mecanismos de consulta de fuentes» a las sesiones 7, 8 y
     10. S07 fija los campos de las *entradas de conocimiento* (l. 48) y, en
     l. 89-90, hace que `sources` «referencia originales o el registro
     autorizado», es decir, presupone el registro sin definir su esquema
     («registro» sólo aparece en l. 90). ADR-002 l. 142-143 responde a la
     pregunta «¿Cómo se concretan esquemas del registro y acceso a fuentes?»
     con «el esquema de conocimiento quedó resuelto en sesión 7»: sustituye el
     objeto de la pregunta. Es lo que `REV-2026-025` dejó como pregunta
     («si el esquema del registro … quedó fijado en la sesión 7 o fue
     sustituido por el esquema del conocimiento»): comprobado desde S07, fue
     sustituido. Por búsqueda, S08 l. 96 y S11 l. 62/170 presuponen el
     registro como artefacto con autoridad; no se comprobó si alguna de ellas
     fija sus campos.
  4. **`sources` obligatorio sin esquema del destino.** L. 48 exige `sources`
     en toda entrada y l. 42 mantiene la autoridad «determinada por las fuentes
     y criterios acordados en la sesión 3». Con el registro sin esquema ni
     campos de procedencia por entrada (`REV-2026-019`), la obligación de
     l. 48 es comprobable en forma (hay un campo) pero no en fondo (a qué
     apunta y quién confirmó esa autoridad).
- Inferencia (si aplica): S07 recibió tres remisiones de mantenimiento y
  registro y resolvió la parte «qué» (disparadores, curación, campos de las
  entradas) sin la parte «cómo y cuándo» ni el esquema del registro; los
  inventarios de S03 y ADR-002 no reflejan ese residuo.

## Observación y propuesta

- Observación: los aplazamientos de S03 l. 135 y 237 y ADR-001 l. 120 llegan a
  S07 sin fila; ADR-002 los marca resueltos cambiando el objeto.
- Propuesta concreta: (a) añadir a S07 filas con estado para «frecuencia y
  mecanismos de comprobación» (aunque sea `deferred` con destino o `accepted`
  con la regla de que la activación por eventos y `check_after` sustituyen a
  la frecuencia) y para «validación de referencias» (o remitirla con acuse a
  la capa `referential` de S06 y a S08 l. 311); (b) corregir ADR-002
  l. 142-144 para decir qué sesión fijó el esquema del registro de fuentes o
  dejarlo abierto; (c) decidir si `sources` de l. 48 exige una entrada del
  registro con los campos que `REV-2026-019` reclama.
- Contraargumento o coste/riesgo: puede sostenerse que l. 51 decide
  implícitamente «sin frecuencia fija» y que los mecanismos son detalle de
  S11; y que el registro de fuentes puede definirse en S11 como artefacto del
  repositorio. Aun así, ninguna unidad lo escribe con estado y ADR-002 lo da
  por resuelto. El coste de anotarlo es bajo; el riesgo de no hacerlo es que
  el mantenimiento del conocimiento (S03 l. 43, 123-135) carezca de regla
  operativa verificable.

## Análisis adicional

- Evidencia interna: S03 l. 134-135, 220, 237 y ADR-001 l. 120 frente a las
  búsquedas en S07; ADR-002 l. 142-144 frente a S03 l. 237 y S07 l. 48, 89-90;
  S06 l. 51/64-69 y S08 l. 311 como lugares vecinos sin enlace desde S07.
- Contraevidencia y límites: S07 l. 51-53 sí fija disparadores, curación
  proporcional y transiciones, lo que cubre «curación y caducidad» de S03
  l. 220; S11 puede haber definido el registro como archivo (l. 62, 170) y no
  se leyó; `B028` revisará l. 88-91 y podrá matizar el hecho 3.
- Pregunta para resolver: ¿qué sesión posee hoy la frecuencia y los mecanismos
  de comprobación del conocimiento y el esquema del registro de fuentes, y
  debe ADR-002 l. 142-144 decirlo?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B027](blocks/B027.md); `REV-2026-018`,
  `REV-2026-019`, `REV-2026-023`, `REV-2026-025`, `REV-2026-055`
