# Anotación de revisión

- ID de anotación: `REV-2026-060`
- Unidad y ubicación: `S07` — [session-07-knowledge.md, «Taxonomía y límites iniciales»](../definition/session-07-knowledge.md#taxonomía-y-límites-iniciales),
  «Un bundle de proyecto conserva conocimiento cuya aplicabilidad y
  mantenimiento pertenecen al repositorio consumidor» (l. 82-86) y «El índice
  raíz expone como mínimo identidad de bundle, ámbito, temas y descriptores
  compactos de las entradas con referencia, `type`, título, resumen,
  aplicabilidad, estado editorial y frescura. Puede orientar índices
  secundarios, pero una discrepancia se resuelve desde las entradas y fuentes,
  no desde el índice derivado» (l. 99-102), frente a las filas «Ubicación
  lógica» (l. 46), «Metadatos comunes» (l. 48), «Responsabilidad de curación»
  (l. 50) e «Indexación» (l. 54) de
  [«Decisiones»](../definition/session-07-knowledge.md#decisiones), a
  [S03, «Distribución canónica inicial»](../definition/session-03-sources-of-truth.md#distribución-canónica-inicial)
  (l. 60) y a [ADR-006, «Decisión», puntos 2, 3, 5 y 8](../adr/ADR-006-modelo-portable-de-conocimiento.md#decisión)
  (l. 51-57, 61-64, 74-76). Bloque `B028`.
- Revisión examinada: estado de los archivos al 2026-09-25; repositorio sin
  commits, huella no disponible. S07 cerrada el 2026-09-21 (l. 3). Citas
  distintivas: «Owner, curator predeterminado y `scope` corresponden al bundle»
  (l. 48); «resuelve un `curator` efectivo por herencia o delegación» (l. 48);
  «Cada bundle tiene un curator responsable … Las entradas heredan ese curator
  salvo override delegado» (l. 50); «Cada bundle mantiene un índice raíz
  compacto y portable … Índices temáticos, de texto completo, vectoriales o
  propios de herramientas son derivados reconstruibles» (l. 54).
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos textuales (búsquedas en toda S07 y en
  `docs/definition/session-08-portability.md`, `session-1*.md`); `media`
  sobre el efecto (S08 sólo por líneas devueltas por búsqueda; OKF leída
  mediante extracción)
- Impacto: si el `curator` efectivo de una entrada (l. 48) y el owner que
  «gobierna el ámbito» (l. 50) pueden resolverse y auditarse desde los
  artefactos que el perfil declara; si el índice raíz es un artefacto
  derivado (sin autoridad, S03 l. 60) o el lugar que declara el bundle (con
  autoridad sobre membresía, ámbito y responsables); y de dónde salen «temas»,
  «resumen» y «frescura» que el índice «expone» y ninguna entrada declara.
  Afecta a la trazabilidad de la delegación «con alcance y trazabilidad
  explícitos» (l. 50), a la línea base de comparación con Hindsight (l. 56) y
  a `CT01` y `CT03`. No cambia el contenido de ninguna fila aceptada.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión exclusivamente interna; la fuente
  externa se consultó para comprobar si OKF aporta el artefacto que S07 no
  nombra)
- Fuente primaria:
  1. `docs/definition/session-07-knowledge.md` l. 46, 48, 50, 54, 56, 82-86,
     99-102 (leídas) y búsqueda en toda la unidad de «owner» (l. 46, 48, 50;
     ninguna en l. 64-108), «curator» (l. 48, 50, 115; ninguna en l. 64-108),
     «temas» (sólo l. 99), «resumen» (sólo l. 100), «identidad» (l. 22, 40,
     41, 48, 59, 60, 99, 118), «derivad» (l. 40, 52, 54, 102).
  2. `docs/definition/session-03-sources-of-truth.md` l. 60 («Los índices y
     sus descripciones son derivados de las fuentes canónicas, sin autoridad
     independiente sobre su contenido»).
  3. `docs/adr/ADR-006-modelo-portable-de-conocimiento.md` l. 51-57, 61-64,
     74-76 (puntos 2, 3, 5 y 8: repiten l. 46, 48, 50 y 54 sin nombrar el
     artefacto ni los campos del índice).
  4. `docs/definition/session-08-portability.md` por búsqueda de «bundle|
     curator|índice raíz»: l. 90, 232-234 («Cada revisión registra su
     `bundle_id`»), 238 («El curator puede conservar `knowledge_id`»), 244-245
     (fuera del alcance; no leídas en contexto). `docs/definition/session-1*.md`
     por búsqueda de «índice raíz|curator|bundle_id»: sin coincidencias.
  5. OKF, `SPEC.md` en el commit fijado por S07 l. 58-59,
     <https://github.com/GoogleCloudPlatform/open-knowledge-format/blob/ad30107c31c06aec8a7d5636e0d1058118604e6f/SPEC.md>,
     versión declarada 0.2 (§12), consultado 2026-09-25. Pregunta: ¿qué es un
     bundle, qué archivos o metadatos exige o recomienda en su raíz, declara
     owner, nombre o ámbito, define un índice y con qué campos, y qué campos de
     resumen o etiquetas tiene un concept? Resultado (texto devuelto): §3 «a
     directory tree of markdown files», distribuible como repositorio git,
     archivo o subdirectorio; ningún manifiesto, README ni metadato de bundle
     obligatorio; §8 «An `index.md` file MAY appear in any directory, including
     the bundle root», con secciones que agrupan enlaces a conceptos con
     descripción; §12 el `index.md` raíz «MAY carry an `okf_version` key»;
     §4.1 recomienda `title`, `description` («a single sentence summarizing the
     concept») y `tags` («a YAML list of short strings for cross-cutting
     categorization») que «support index.md generators, search snippets, and
     previews». Paráfrasis fiel: OKF no tiene metadatos de bundle (owner,
     nombre, ámbito) y su índice es una lista de enlaces con descripciones
     generable desde los conceptos. Fuerza `alta` (especificación en el commit
     fijado); pertinencia directa a l. 46, 48, 54 y 99-102. Límite: lectura
     mediada por extracción; OKF no obliga a T800R a declarar nada, sólo
     demuestra que no aporta el artefacto.
- Sección o localizador: «Decisiones» (l. 46, 48, 50, 54) y «Taxonomía y
  límites iniciales» (l. 82-86, 99-102) de S07; «Distribución canónica
  inicial» de S03; «Decisión» de ADR-006; §§3, 4.1, 8 y 12 de OKF.
- Fecha de consulta/publicación: consulta 2026-09-25; S07 cerrada el
  2026-09-21; OKF v0.2 en el commit fijado.
- Hecho observado:
  1. **Tres metadatos del bundle sin artefacto.** L. 48 asigna al bundle
     «Owner, curator predeterminado y `scope`» y l. 46 exige «`scope` y owner
     explícitos»; l. 50 hace depender de ese curator la herencia y la
     delegación de todas las entradas. La única prosa sobre bundles (l. 82-86)
     describe los tres ámbitos y no dice dónde se declaran owner, curator ni
     `scope`; «owner» y «curator» no aparecen en l. 64-108. El mínimo del
     índice raíz (l. 99-100) incluye «identidad de bundle, ámbito, temas» y
     omite owner y curator. OKF (§3) no define metadatos de bundle. Resultado:
     «resuelve un `curator` efectivo por herencia» (l. 48) no puede
     comprobarse desde ningún artefacto que el perfil nombre, y «alcance y
     trazabilidad explícitos» de la delegación (l. 50) no tienen lugar.
  2. **Campos del índice sin origen en la entrada.** El índice «expone …
     temas» y «resumen» (l. 99-100); l. 48 no incluye ningún campo de temas,
     etiquetas ni resumen (obligatorios: `type`, `title`, `sources`, `status`,
     `applicability`, `revision`, `review`; condicionales: `generated`,
     `verified`, `stale_after`, relaciones, aliases). OKF §4.1 recomienda
     `description` y `tags` precisamente para generar índices; el perfil no los
     adopta ni los sustituye. «Frescura» tampoco es campo
     ([`REV-2026-059`](2026-09-25-REV-2026-059-frescura-derivada-de-las-entradas-sin-regla-de-derivacion-campo-actor-ni-deteccion-de-cambio-de-fuente-e-indice-raiz-la-expone-como-valor.md)
     hecho 2) y «referencia» depende de la identidad diferida a S08 (l. 48,
     59-60; S08 l. 232-234 por búsqueda, sin marca en S07). Por tanto, al menos
     tres de los datos mínimos del índice o bien los escribe alguien en el
     índice (que deja de ser derivado) o bien los deriva del cuerpo un actor
     que no se nombra.
  3. **«Índice derivado» ambiguo.** L. 54 llama «derivados reconstruibles» a
     los índices temáticos, de texto completo, vectoriales o de herramientas,
     y al índice raíz «compacto y portable» que «cada bundle mantiene».
     L. 101-102 dice que el índice raíz «puede orientar índices secundarios»
     y que «una discrepancia se resuelve desde las entradas y fuentes, no
     desde el índice derivado», sin que se sepa si «derivado» nombra al raíz o
     a los secundarios. Si el raíz es derivado y reconstruible, no puede ser
     el lugar que declara owner, curator y `scope` (hecho 1) y S03 l. 60 le
     niega autoridad; si es autorizado sobre membresía y ámbito, S07 no lo
     dice y OKF §8 lo trata como navegación opcional.
  4. **ADR-006 repite sin resolver.** Punto 2 (l. 51-53) «bundles con `scope`
     y owner explícitos»; punto 3 (l. 57) «owner, curator predeterminado y
     `scope` corresponden al bundle»; punto 8 (l. 74-76) «índice raíz compacto
     y portable» sin campos. Contrastes para `B045`.
- Inferencia (si aplica): S07 declina la representación física (l. 13-14, 40,
  60-61), pero «qué artefacto lógico declara el bundle» es una pregunta del
  modelo lógico, no de la representación: sin ella, la herencia de curator y
  la regla de ámbito (l. 85) no tienen sujeto verificable. No está demostrado
  que S11 no lo resuelva; por búsqueda no contiene «bundle», «curator» ni
  «índice raíz».

## Observación y propuesta

- Observación: el perfil atribuye al bundle responsabilidades (owner, curator,
  ámbito, índice raíz) que en OKF no existen y no nombra el artefacto que las
  declara; el índice raíz expone datos que ninguna entrada contiene y se llama
  «derivado» sin que se sepa de qué.
- Propuesta concreta: (1) declarar en S07 el artefacto lógico del bundle (por
  ejemplo, un descriptor de bundle o el propio índice raíz) con `scope`, owner,
  curator predeterminado e identidad de bundle, y su relación con el registro
  de fuentes de S03 l. 56 si el owner es una fuente de autoridad; (2) añadir a
  l. 48 los campos de origen de «temas» y «resumen» (adoptando `tags` y
  `description` de OKF §4.1 o definiendo los propios) o retirar esos datos del
  mínimo del índice; (3) decir si el índice raíz es reconstruible desde las
  entradas y el descriptor (y entonces qué actor lo reconstruye y cuándo) o si
  es autorizado sobre membresía y ámbito; (4) desambiguar «índice derivado» en
  l. 102.
- Contraargumento o coste/riesgo: puede alegarse que estos datos vivirán en
  el «front matter» o en un archivo del bundle cuando S11 fije la
  representación; aun así el modelo lógico debería nombrar el artefacto y sus
  campos, como hace con las entradas (l. 48). Coste bajo; riesgo de no
  hacerlo: bundles conformes con S07 sin owner ni curator resolubles.

## Análisis adicional

- Evidencia interna: [S07 l. 46-54](../definition/session-07-knowledge.md#decisiones)
  frente a [l. 82-86 y 99-102](../definition/session-07-knowledge.md#taxonomía-y-límites-iniciales);
  [S03 l. 60](../definition/session-03-sources-of-truth.md#distribución-canónica-inicial);
  [ADR-006 puntos 2, 3, 5 y 8](../adr/ADR-006-modelo-portable-de-conocimiento.md#decisión).
  Relacionado con [`REV-2026-018`](2026-09-21-REV-2026-018-quien-define-criterios-de-autoridad-y-como-se-audita-el-limite.md)
  (quién designa autoridad y cómo se acredita: el owner del bundle es otra
  designación sin lugar), [`REV-2026-019`](2026-09-21-REV-2026-019-registro-de-fuentes-autoridad-canonica-con-escritura-del-agente-sin-procedencia.md)
  (si el índice lo escribe el agente, adquiere lo que declara) y
  [`REV-2026-049`](2026-09-24-REV-2026-049-nucleo-del-context-packet-frente-a-handoff-v1-homonimos-sin-enlace-schema-sin-identificador-ni-version-y-producer-consumer-sin-modelo-de-identidad-con-capacidad-como-destinatario.md)
  (owner sin la referencia de actor de S05 l. 84; patrón). Hereda la pregunta
  5 de `B027` (ámbitos) y la pregunta 2 de `B027` (¿puede el agente ser
  curator?: sigue sin respuesta porque no hay artefacto que lo diga).
- Contraevidencia y límites: la lectura más favorable es que «identidad de
  bundle» y «ámbito» del índice (l. 99) son el descriptor del bundle y que
  owner y curator se añadirán al fijar la representación; S07 no lo escribe.
  «Temas» podría derivarse de `domain` de `concept` (l. 49), pero `domain` no
  existe para `pattern`, `lesson` ni `synthesis`. No se leyó S08 en contexto:
  sólo consta por búsqueda que registra `bundle_id` por revisión y que el
  curator puede conservar `knowledge_id`.
- Pregunta para resolver: ¿qué artefacto lógico declara owner, curator
  predeterminado, `scope` e identidad de bundle; de qué campo de la entrada
  salen «temas» y «resumen» del índice raíz; es el índice raíz derivado y
  reconstruible (por quién) o autorizado sobre membresía y ámbito; y a cuál se
  refiere «índice derivado» en l. 102?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: pendiente
