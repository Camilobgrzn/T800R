# Anotación de revisión

- ID de anotación: `REV-2026-059`
- Unidad y ubicación: `S07` — [session-07-knowledge.md, «Taxonomía y límites iniciales»](../definition/session-07-knowledge.md#taxonomía-y-límites-iniciales),
  «Frescura y lifecycle se calculan y registran por separado para no ocultar una
  fuente cambiada detrás de un estado editorial estable» (l. 95-97) y «descriptores
  compactos de las entradas con referencia, `type`, título, resumen, aplicabilidad,
  estado editorial y frescura» (l. 99-101), frente a las filas «Metadatos comunes»
  (l. 48), «Modelo de vigencia» (l. 51) y «Lifecycle y frescura» (l. 52) de
  [«Decisiones»](../definition/session-07-knowledge.md#decisiones), a la prosa
  l. 88-90 (`revision`, `review`, `sources`), a
  [S06, «Capas de validación del context packet»](../definition/session-06-context.md#capas-de-validación-del-context-packet)
  (`freshness`, l. 68), [«Reconciliación incremental»](../definition/session-06-context.md#reconciliación-incremental)
  (l. 142-146) e [«Impacto de cambios»](../definition/session-06-context.md#impacto-de-cambios)
  (l. 162-163), y a [ADR-006, «Decisión», punto 6](../adr/ADR-006-modelo-portable-de-conocimiento.md#decisión)
  (l. 65-69). Bloque `B028`.
- Revisión examinada: estado de los archivos al 2026-09-25; repositorio sin
  commits, huella no disponible. S07 «Sesión iniciada y cerrada el 2026-09-21»
  (l. 3); ADR-006 fechado 2026-09-21. Citas distintivas: «la frescura derivada
  se informa como `current`, `review_due` o `stale`» (l. 52); «`check_after`
  programa una comprobación sin invalidar por sí mismo y `stale_after` sólo se
  declara cuando el contenido tiene una razón temporal concreta» (l. 51);
  «Antes de reutilizar conocimiento se concilian los marcadores de las
  dependencias relevantes» (l. 51); «Una acción no puede depender de contenido
  `stale` hasta revisar lo afectado» (l. 52); «`sources` referencia originales o
  el registro autorizado» (l. 89-90); «No hay TTL universal. Un `check_after`
  opcional puede programar una comprobación de marcador, pero el tiempo por sí
  solo no invalida contenido» (S06 l. 162-163).
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos textuales (búsquedas en toda S07, en S06 y
  en `docs/definition/session-08-portability.md`, `session-1*.md`); `media`
  sobre el efecto (S08 y S11 sólo por líneas devueltas por búsqueda; la
  especificación de OKF leída mediante extracción)
- Impacto: si la promesa de l. 95-97 («no ocultar una fuente cambiada detrás de
  un estado editorial estable») y la regla de l. 52 («no puede depender de
  contenido `stale`») son verificables con lo escrito: qué condición produce
  cada valor de frescura, dónde se registra, quién la calcula y con qué base se
  detecta que una fuente cambió. Afecta a la capa `freshness` del packet (S06
  l. 68) cuando la sección `knowledge` referencia entradas (S07 l. 104-105), a
  la comparación con Hindsight (l. 56, «índice raíz» como línea base) y a los
  cruces `CT01`, `CT03`, `CT05` y `CT06`. No cambia el contenido de ninguna fila
  aceptada.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión exclusivamente interna; la fuente
  externa se consultó sólo para contrastar la semántica de `stale_after` que
  S07 reutiliza)
- Fuente primaria:
  1. `docs/definition/session-07-knowledge.md` l. 48, 51-53, 88-90, 95-97,
     99-102 (leídas) y búsqueda en toda la unidad de «frescura|current|
     review_due|stale» (l. 51, 52, 101, 115), «check_after» (sólo l. 51),
     «marcador» (sólo l. 51), «revisión» (l. 40, 41, 45, 48, 50, 51, 53, 55, 88,
     104).
  2. `docs/definition/session-06-context.md` l. 64-69, 87-90, 142-146, 162-163.
  3. `docs/adr/ADR-006-modelo-portable-de-conocimiento.md` l. 54-57 (punto 3)
     y 65-69 (punto 6).
  4. `docs/definition/session-08-portability.md` por búsqueda de «frescura|
     review_due|stale|check_after|curator»: l. 69, 90, 168, 177, 238, 316,
     351, 356-357 (fuera del alcance; no leídas en contexto).
     `docs/definition/session-1*.md` por búsqueda de «índice raíz|curator|
     frescura|review_due|bundle_id»: sin coincidencias.
  5. OKF, `SPEC.md` en el commit fijado por S07 l. 58-59,
     <https://github.com/GoogleCloudPlatform/open-knowledge-format/blob/ad30107c31c06aec8a7d5636e0d1058118604e6f/SPEC.md>,
     versión declarada 0.2 (§12), consultado 2026-09-25. Pregunta: ¿qué
     semántica tiene `stale_after` y se almacena o se calcula el estado de
     frescura? Cita (§5.5, texto devuelto): «A concept is stale when
     `now >= stale_after`. An absolute instant, not a relative TTL, keeps the
     staleness decision a plain comparison with no reference to when the
     concept was read». Paráfrasis fiel: la condición de `stale` se evalúa al
     consumir; la especificación no define un campo de estado de frescura.
     Fuerza `alta` (especificación en el commit fijado); pertinencia: S07 l. 48
     y 51 reutilizan `stale_after` de OKF. Límite: lectura mediada por
     extracción; la fuente no obliga a T800R a nada más que a esa semántica
     temporal.
- Sección o localizador: «Decisiones» (l. 48, 51, 52) y «Taxonomía y límites
  iniciales» (l. 88-102) de S07; «Capas de validación», «Reconciliación
  incremental» e «Impacto de cambios» de S06; «Decisión» de ADR-006; §5.5 de
  OKF.
- Fecha de consulta/publicación: consulta 2026-09-25; S07 cerrada el
  2026-09-21; S06 cerrada el 2026-09-18; OKF v0.2 en el commit fijado.
- Hecho observado:
  1. **Tres valores sin regla de derivación.** L. 52 fija los valores
     `current`, `review_due` y `stale` y l. 95-97 dice que la frescura «se
     calcula»; ninguna línea de la unidad dice qué condición produce cada
     valor. Lo único definido es temporal y viene de OKF: `stale` cuando
     `now >= stale_after` (§5.5), y `check_after` «programa una comprobación»
     (l. 51) sin decir que produzca `review_due`. L. 51 enumera disparadores de
     revisión («cambios en fuentes, evidencia o aplicabilidad y por riesgo»)
     sin asignarles valor de frescura; l. 96 promete que una «fuente cambiada»
     no quede oculta, sin decir si la vuelve `review_due`, `stale` u otra cosa.
     ADR-006 punto 6 (l. 65-69) repite l. 51-52 sin añadir la regla.
  2. **«Se registran» sin campo.** L. 48 enumera los metadatos obligatorios
     (`type`, `title`, `sources`, `status`, `applicability`, `revision`,
     `review`) y condicionales (`generated`, `verified`, `stale_after`,
     relaciones, aliases): ninguno es la frescura. OKF §5.5 la calcula al
     consumir y no la almacena. Si no hay campo, «registran» (l. 96) no tiene
     lugar; si lo hay, no está en el perfil. El índice raíz «expone …
     frescura» (l. 101) en un artefacto «compacto y portable» (l. 54), es
     decir, materializa un valor que depende del instante y de cambios
     externos; l. 101-102 remite las discrepancias «a las entradas y fuentes»,
     que tampoco la registran.
  3. **Detectar «una fuente cambiada» exige una base que el perfil no
     declara.** Para saber que cambió una fuente hay que comparar la revisión
     de la fuente sobre la que se hizo la última `review` con la revisión
     vigente, como S06 hace con marcadores (l. 142-146) y como el `sources`
     del packet exige («con revisión y procedencia», S06 l. 89). En S07,
     `sources` «referencia originales o el registro autorizado» (l. 89-90) sin
     decir que conserve la revisión referenciada, y `review` es «la
     comprobación de sus fundamentos» (l. 88-89) sin decir que registre sobre
     qué revisiones se comprobó. ADR-006 punto 3 (l. 54-57) tampoco. Sin esa
     base, «fuente cambiada» no es decidible desde la entrada.
  4. **Sin actor ni momento.** Ni l. 95-97, ni l. 50 (el curator «mantiene …
     vigencia»), ni l. 51 («se concilian los marcadores de las dependencias
     relevantes», marcadores sin definición) dicen quién calcula la frescura
     ni cuándo: al construir el índice, al cargar la sección `knowledge` del
     packet (donde S06 l. 68 valida `freshness` con «marcadores e impactos»
     del packet, no de las entradas) o en la revisión del curator. La relación
     entre la frescura de la entrada y la capa `freshness` del packet no se
     escribe en S07 ni en S06 («frescura» ausente de S06; `freshness` ausente
     de S07). S08 l. 90 (por búsqueda) exige «la reconciliación de fuentes,
     frescura y aplicabilidad» sin definir la derivación, y S08 l. 69, 168 y
     177 (por búsqueda) usan `stale` para la verificación de capacidades con el
     significado «un marcador relevante cambió»: tercer sentido de `stale`
     junto al temporal de OKF §5.5 y al de S07 l. 52.
  5. **Consecuencia verificable.** L. 52 («Una acción no puede depender de
     contenido `stale` hasta revisar lo afectado») y l. 96 sólo pueden
     comprobarse si el valor de frescura es reproducible por un tercero a
     partir de datos declarados. Hoy sólo lo es el caso `stale_after` temporal.
- Inferencia (si aplica): S07 separa deliberadamente frescura de lifecycle
  (l. 95-97, criterio l. 30-31 «lifecycle, reglas de vigencia … explícitos»),
  pero escribe la mitad editorial (l. 52-53) y no la mitad derivada. No está
  demostrado que S11 no lo resuelva; por búsqueda, S10-S12 no contienen
  «frescura», «review_due» ni «índice raíz».

## Observación y propuesta

- Observación: la frescura es el mecanismo con el que S07 evita la caducidad
  universal (pregunta 4 de la sesión, l. 23-24) y sostiene la prohibición de
  depender de contenido `stale`; la unidad la nombra, le da tres valores y la
  expone en el índice, pero no escribe cómo se deriva, dónde se registra, quién
  la calcula ni qué revisión de las fuentes se compara para detectar un cambio.
- Propuesta concreta: (1) añadir en S07, o registrar como `deferred` con
  destino, una tabla de derivación: `current` (ninguna condición activa),
  `review_due` (`check_after` alcanzado, o cambio de revisión en una fuente de
  `sources`, o cambio de aplicabilidad, según se decida), `stale`
  (`stale_after` alcanzado, u otra causa si se decide), y la precedencia entre
  ellas; (2) declarar si la frescura es un campo persistido (y cuál) o un valor
  calculado en consumo, y en ese caso qué expone el índice raíz (el valor en el
  instante de construcción, con su marca temporal); (3) fijar que `review` o
  `sources` registran la revisión de cada fuente comprobada, como S06 l. 89;
  (4) nombrar el actor y el momento del cálculo y su relación con la capa
  `freshness` del packet (S06 l. 68) y con el `stale` de S08.
- Contraargumento o coste/riesgo: puede sostenerse que la derivación es un
  detalle de implementación de S11 y que S07 sólo fija la semántica de los
  valores; el coste de fijarla ahora es pequeño y evita que cada adapter derive
  la frescura de forma distinta. Riesgo de no hacerlo: dos consumidores del
  mismo bundle informan frescuras distintas para la misma entrada y ninguno
  incumple el contrato.

## Análisis adicional

- Evidencia interna: [S07 l. 48-53](../definition/session-07-knowledge.md#decisiones)
  frente a [l. 88-102](../definition/session-07-knowledge.md#taxonomía-y-límites-iniciales);
  [S06 l. 64-69 y 142-163](../definition/session-06-context.md#capas-de-validación-del-context-packet);
  [ADR-006 puntos 3 y 6](../adr/ADR-006-modelo-portable-de-conocimiento.md#decisión).
  Relacionado con [`REV-2026-050`](2026-09-24-REV-2026-050-marcadores-de-reconciliacion-sin-valor-esperado-estado-del-handoff-cambia-por-lifecycle-normal-sin-impacto-impacto-y-check-after-sin-campo-y-contrato-aplicable-sin-definicion.md)
  (en S06, `check_after` y el impacto tampoco tienen campo: el patrón se repite
  en la entrada de conocimiento) y con
  [`REV-2026-056`](2026-09-24-REV-2026-056-frecuencia-y-mecanismos-de-validacion-de-referencias-y-esquema-del-registro-de-fuentes-remitidos-a-s07-sin-fila-y-adr-002-declara-resuelto-el-esquema-de-conocimiento-en-su-lugar.md)
  hecho 1 (S03 l. 134-135 prometía «frecuencia y mecanismos» en S07: la
  detección del cambio de fuente es uno de esos mecanismos). Hereda la
  pregunta 1 de `B027` y la pregunta 6 de `B025`/`B026`.
- Contraevidencia y límites: la lectura más favorable es que la frescura es
  puramente temporal (`check_after` → `review_due`, `stale_after` → `stale`,
  como OKF §5.5) y que el cambio de fuente sólo dispara la revisión de l. 51
  sin tocar la frescura; bajo esa lectura l. 96 no se cumple por la frescura
  sino por la revisión, y sigue faltando la base de comparación del hecho 3.
  No se leyó S11 completa; sólo consta por búsqueda que no contiene los
  términos.
- Pregunta para resolver: ¿qué condición produce `current`, `review_due` y
  `stale`, es la frescura un campo o un cálculo en consumo, quién la calcula y
  cuándo, qué revisión de fuente conservan `review`/`sources` para detectar un
  cambio, y cómo se relaciona con la capa `freshness` del packet y con el
  `stale` de S08?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: pendiente
