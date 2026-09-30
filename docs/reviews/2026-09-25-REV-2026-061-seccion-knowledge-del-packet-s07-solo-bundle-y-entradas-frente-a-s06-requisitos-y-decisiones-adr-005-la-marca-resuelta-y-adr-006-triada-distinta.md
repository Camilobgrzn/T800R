# Anotación de revisión

- ID de anotación: `REV-2026-061`
- Unidad y ubicación: `S07` — [session-07-knowledge.md, «Taxonomía y límites iniciales»](../definition/session-07-knowledge.md#taxonomía-y-límites-iniciales),
  «La sección `knowledge` de un context packet referencia el bundle, su
  revisión y las entradas seleccionadas por la condición de carga; no
  incorpora por defecto el bundle completo. Un motor semántico puede sugerir
  esas entradas, pero la selección conserva presupuesto, procedencia y
  reconciliación de ADR-005» (l. 104-107) y «Decisiones, requisitos, estado
  operativo, resultados de validación, procedimientos ejecutables e
  investigación inconclusa permanecen respectivamente en especificaciones o
  ADRs, tracker, evidencia, skills y memoria» (l. 73-76), frente a
  [S06, «Tipos mínimos de secciones bajo demanda»](../definition/session-06-context.md#tipos-mínimos-de-secciones-bajo-demanda)
  (`knowledge` l. 102), [S06, «Decisiones»](../definition/session-06-context.md#decisiones)
  (l. 45-46), [ADR-005, «Puntos abiertos»](../adr/ADR-005-contrato-portable-de-contexto.md#puntos-abiertos)
  (l. 126-128) y [ADR-006, «Contexto»](../adr/ADR-006-modelo-portable-de-conocimiento.md#contexto)
  (l. 16-17) y «Consecuencias para el equipo» (l. 88-89). Bloque `B028`.
- Revisión examinada: estado de los archivos al 2026-09-25; repositorio sin
  commits, huella no disponible. S07 cerrada el 2026-09-21 (l. 3); S06 cerrada
  el 2026-09-18; ADR-005 fechado 2026-09-18 y editado después
  (`REV-2026-054`); ADR-006 fechado 2026-09-21. Citas distintivas:
  «`knowledge` | Requisitos, decisiones y conocimiento de dominio» (S06
  l. 102); «Cada sección se referenciará desde `manifest` y sólo se cargará
  cuando aplique su condición» (S06 l. 45); «Cada carga registra la sección,
  la condición activada y la revisión de la fuente» (S06 l. 46); «¿Qué
  taxonomía, metadatos y mantenimiento usa la sección `knowledge`? → resuelto
  en sesión 7 y ADR-006» (ADR-005 l. 126-127); «La sesión 6 dejó preparada la
  sección `knowledge` del context packet y exigió preservar referencias,
  procedencia y reconciliación sin seleccionar tecnología» (ADR-006 l. 16-17).
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos textuales (búsquedas en toda S07 y S06);
  `media` sobre el efecto (S08 sólo por líneas devueltas por búsqueda)
- Impacto: qué contiene la sección `knowledge` del packet —sólo referencias a
  bundles y entradas de conocimiento mantenido (S07) o además requisitos y
  decisiones (S06)— y con qué metadatos entran estos últimos, dado que S07 los
  excluye del conocimiento (l. 73-76) y ADR-005 da por resuelta en S07 la
  taxonomía de la sección; si la «condición de carga» opera por sección (S06) o
  por entrada (S07); y de dónde toma ADR-006 l. 16 lo que S06 «exigió», cuando
  S07 sólo cita ADR-005 con otra tríada. Afecta a `CT05`, `CT06` y a lo que la
  capa `sufficiency` del packet (S06 l. 69) puede exigir a la sección. No
  cambia el contenido de ninguna fila aceptada.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (contradicción y omisión exclusivamente
  internas; no se invoca ninguna fuente externa)
- Fuente primaria: `docs/definition/session-07-knowledge.md` l. 11, 44,
  66-76, 104-107 (leídas) y búsqueda en toda la unidad de «ADR-» (sólo l. 107
  y 123), «sesión 6» (ninguna), «especificaci» (l. 75, 85), «requisito» (l. 68,
  73), «condición de carga» (sólo l. 105), «packet» (l. 11, 104, 117);
  `docs/definition/session-06-context.md` l. 45-46, 58, 89-90, 98-105 (l. 102)
  y búsqueda de «knowledge» (l. 45, 102); `docs/adr/ADR-005-contrato-portable-de-contexto.md`
  l. 126-128; `docs/adr/ADR-006-modelo-portable-de-conocimiento.md` l. 10,
  14-17, 88-89; `docs/definition/session-08-portability.md` l. 90 (por
  búsqueda: referencias `exact`/`current` de conocimiento; fuera del alcance).
- Sección o localizador: «Taxonomía y límites iniciales» de S07; «Decisiones»
  y «Tipos mínimos de secciones bajo demanda» de S06; «Puntos abiertos» de
  ADR-005; «Contexto» y «Consecuencias para el equipo» de ADR-006.
- Fecha de consulta/publicación: consulta 2026-09-25; S07 cerrada el
  2026-09-21; S06 cerrada el 2026-09-18.
- Hecho observado:
  1. **S06 y S07 llenan la sección con contenidos distintos.** S06 l. 102 fija
     la semántica de `knowledge` como «Requisitos, decisiones y conocimiento
     de dominio» (única definición de la sección en S06:
     [`REV-2026-054`](2026-09-24-REV-2026-054-puntos-abiertos-de-adr-005-divergen-de-las-filas-deferred-de-s06-seccion-knowledge-y-representacion-fisica-sin-fila-y-destinos-ampliados.md)
     hecho 2). S07 l. 104-105 dice que la sección «referencia el bundle, su
     revisión y las entradas seleccionadas», y l. 73-76 sitúa «Decisiones,
     requisitos» en «especificaciones o ADRs», fuera del conocimiento: «Una
     entrada de conocimiento puede referenciarlos, pero no asumir sus
     responsabilidades». L. 104-107 no nombra especificaciones, ADRs ni
     requisitos; en toda la unidad «especificaci» aparece en l. 75 y 85 y
     «ADR-» sólo en l. 107 y 123. Así, dos de los tres contenidos que S06
     asigna a la sección no tienen camino escrito hacia ella en S07.
  2. **ADR-005 marca resuelto lo que S07 resuelve en parte.** ADR-005
     l. 126-128 pregunta «¿Qué taxonomía, metadatos y mantenimiento usa la
     sección `knowledge`?» y responde «resuelto en sesión 7 y ADR-006». La
     taxonomía de S07 (l. 66-71: `concept`, `pattern`, `lesson`, `synthesis`)
     cubre «conocimiento de dominio» y excluye expresamente requisitos y
     decisiones (l. 68 «No sustituye … requisitos canónicos», l. 73-76). La
     marca «resuelto» (editada tras la fecha del ADR, `REV-2026-054` hecho 3)
     no distingue qué parte de la sección quedó resuelta.
  3. **ADR-006 atribuye a S06 una exigencia con otra tríada.** ADR-006
     l. 16-17: la sesión 6 «exigió preservar referencias, procedencia y
     reconciliación». La única frase de S07 que puede sostenerlo es l. 106-107:
     «la selección conserva presupuesto, procedencia y reconciliación de
     ADR-005», que es la única mención de ADR-005 en la unidad, no cita punto
     alguno y no nombra la sesión 6 («sesión 6» ausente de S07:
     [`REV-2026-055`](2026-09-24-REV-2026-055-apertura-s07-frente-al-indice-front-matter-y-caducidad-sustituidos-remisiones-de-s03-adr-001-adr-002-adr-003-s06-y-adr-005-recibidas-sin-acuse-y-commit-de-okf-sin-enlace-a-la-investigacion.md)
     hecho 2). S06 l. 102 no «exige» nada de la sección (`REV-2026-054` hecho
     2). «Referencias» (ADR-006) y «presupuesto» (S07) no coinciden; lo que sí
     existe en ADR-005 son reglas generales del packet (procedencia, punto 1;
     presupuesto, puntos 4-5; reconciliación, puntos 6-7) que S07 aplica a la
     sección sin citarlas. La cadena S06 → S07 → ADR-006 cambia el sujeto (S06
     ↔ ADR-005) y el contenido (presupuesto ↔ referencias).
  4. **Granularidad de la condición de carga.** En S06 la condición es por
     sección: «Cada sección … sólo se cargará cuando aplique su condición»
     (l. 45), «Cada carga registra la sección, la condición activada y la
     revisión de la fuente» (l. 46); su sintaxis está `deferred` (l. 58). S07
     l. 105 usa «la condición de carga» para seleccionar entradas dentro de la
     sección, granularidad que S06 no define ni S07 declara como extensión. La
     «revisión» que S07 fija para la sección es la del bundle (l. 104), no la
     de cada entrada (`revision`, l. 88); S08 l. 90 (por búsqueda) resuelve
     después referencias `exact`/`current` por entrada sin marca en S07.
  5. **ADR-006 reduce l. 104-107.** «Consecuencias» l. 88-89: «La sección
     `knowledge` referencia bundle, revisión y entradas seleccionadas; no
     carga por defecto el bundle completo», sin la condición de carga, sin
     «presupuesto, procedencia y reconciliación de ADR-005» y sin el motor
     semántico. Contraste para `B045`.
- Inferencia (si aplica): existe una lectura compatible —la sección contiene
  además referencias a especificaciones y ADRs, que entrarían con la
  procedencia tipada del `sources` del packet (S06 l. 89) o por la sección
  `work` (S06 l. 100 «criterios»)—, pero ninguna unidad la escribe, y ADR-005
  declara resuelta la taxonomía de la sección remitiendo a una taxonomía que
  no la cubre.

## Observación y propuesta

- Observación: el único punto de contacto escrito entre el contrato de
  contexto y el modelo de conocimiento (S07 l. 104-107) describe la mitad de la
  sección que S06 definió, cita ADR-005 sin punto y es a la vez la fuente de una
  atribución a «la sesión 6» que ni S06 ni S07 formulan así.
- Propuesta concreta: (1) decidir si S06 l. 102 se reduce a «conocimiento de
  dominio» o si S07 (o S06 en nueva pasada) fija cómo entran requisitos y
  decisiones en la sección y con qué metadatos (referencia, revisión,
  procedencia); (2) reescribir ADR-005 l. 126-128 para decir qué parte quedó
  resuelta en S07; (3) alinear ADR-006 l. 16-17 con su fuente real (S07
  l. 106-107 y los puntos de ADR-005) o retirar la atribución a la sesión 6;
  (4) declarar en S07 que la condición de carga puede seleccionar entradas
  dentro de la sección, o remitir esa granularidad a S08/S11 con fila.
- Contraargumento o coste/riesgo: puede sostenerse que «conocimiento» en S06
  l. 102 se usaba en sentido amplio antes de que S07 lo precisara y que la
  precisión prevalece; aun así, la fila de S06 sigue vigente sin nota y el ADR
  la da por resuelta. Coste bajo (tres ediciones puntuales); riesgo de no
  hacerlo: un packet cuya sección `knowledge` omite requisitos y decisiones es
  conforme con S07 y no con S06, y viceversa.

## Análisis adicional

- Evidencia interna: [S07 l. 73-76 y 104-107](../definition/session-07-knowledge.md#taxonomía-y-límites-iniciales);
  [S06 l. 45-46 y 102](../definition/session-06-context.md#tipos-mínimos-de-secciones-bajo-demanda);
  [ADR-005 l. 126-128](../adr/ADR-005-contrato-portable-de-contexto.md#puntos-abiertos);
  [ADR-006 l. 16-17 y 88-89](../adr/ADR-006-modelo-portable-de-conocimiento.md#contexto).
  Relacionado con `REV-2026-054` hecho 2 (S06 no remite nada a S07; aquí se
  comprueba el lado de S07), `REV-2026-055` hecho 2 (siete remisiones sin
  acuse; l. 104-107 es el único acuse parcial, a ADR-005) y
  [`REV-2026-049`](2026-09-24-REV-2026-049-nucleo-del-context-packet-frente-a-handoff-v1-homonimos-sin-enlace-schema-sin-identificador-ni-version-y-producer-consumer-sin-modelo-de-identidad-con-capacidad-como-destinatario.md)
  (homónimos `sources`/`revision` entre packet y entrada, sin equivalencia:
  la sección `knowledge` tampoco dice si sus referencias van en el `sources`
  del núcleo).
- Contraevidencia y límites: la mejor lectura opuesta es la del párrafo
  «Inferencia»; no se demostró que ninguna unidad la excluya, sólo que ninguna
  la escribe. No se leyeron S08 ni S11 en contexto; el «Contexto» de ADR-006
  se contrastará completo en `B044`.
- Pregunta para resolver: ¿contiene la sección `knowledge` del packet
  requisitos y decisiones además de entradas de conocimiento, y por qué campo
  y con qué metadatos entran; qué parte de ADR-005 l. 126-128 quedó resuelta
  en S07; de qué texto de S06 toma ADR-006 l. 16 «exigió preservar
  referencias, procedencia y reconciliación»; y la condición de carga
  selecciona secciones (S06) o también entradas (S07)?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: pendiente
