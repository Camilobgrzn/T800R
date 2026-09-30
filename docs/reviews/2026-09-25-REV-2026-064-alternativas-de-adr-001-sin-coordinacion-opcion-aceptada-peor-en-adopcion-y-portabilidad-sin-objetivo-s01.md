# Anotación de revisión

- ID de anotación: `REV-2026-064`
- Unidad y ubicación: `ADR-001` — [«Alternativas evaluadas»](../adr/ADR-001-autonomia-y-responsabilidades.md#alternativas-evaluadas)
  y [«Por qué la decisión (qué dice la industria)»](../adr/ADR-001-autonomia-y-responsabilidades.md#por-qué-la-decisión-qué-dice-la-industria),
  `docs/adr/ADR-001-autonomia-y-responsabilidades.md:6-10, 41-68`, frente a
  `S02` — [«Punto de entrada utilizado»](../definition/session-02-limits.md#punto-de-entrada-utilizado)
  y [«Decisiones»](../definition/session-02-limits.md#decisiones) (l. 13-16,
  29-31), y a `S01` — [«Objetivos observables»](../definition/session-01-vision.md#objetivos-observables)
  (l. 141-155). Bloque `B030`.
- Revisión examinada: estado de los archivos al 2026-09-25 (repositorio sin
  commits; ADR-001 fechado 2026-09-14). Citas distintivas: encabezado de tabla
  «| Opción | Autonomía y continuidad | Adopción y portabilidad | Resultado |»
  (l. 43); «**Exige integrar capacidades de cada proveedor y manejar fallos.**»
  (l. 48); «La razón decisiva para elegir ejecución y supervisión es el objetivo
  confirmado por el usuario» (l. 66-67).
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos; `media` sobre el impacto
- Impacto: cómo se juzgará en S12 si la decisión de mayor coste del producto
  cumplió su propósito; si la evaluación de alternativas que S02 no registra y
  el ADR sí es la vigente; y qué estado tienen las alternativas no elegidas.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión y divergencia internas). La única
  afirmación externa del rango (l. 60-64) se comprobó y se confirma; no
  fundamenta el hallazgo.
- Fuente primaria: interna, `docs/adr/ADR-001-autonomia-y-responsabilidades.md:6-10,
  21-39, 43-56, 58-68`; `docs/definition/session-02-limits.md:13-16, 29-31`;
  `docs/definition/session-01-vision.md:85-86, 116-118, 124-131, 141-155`;
  `AGENTS.md:35-36`. Búsqueda de «alcance [123]» en todo el repositorio.
  Externa (sólo para l. 60-64): NIST, *Artificial Intelligence Risk Management
  Framework (AI RMF 1.0)*, NIST AI 100-1, enero de 2023,
  <https://doi.org/10.6028/NIST.AI.100-1> (redirige a
  <https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf>), y
  <https://www.nist.gov/itl/ai-risk-management-framework>.
- Sección o localizador: externo, AI RMF 1.0 tabla 1 (GOVERN 2.1, 3.2, p. 23) y
  tabla 2 (MAP 1.1, 3.5, p. 26-27).
- Fecha de consulta/publicación: consulta 2026-09-25; AI RMF 1.0 publicado en
  enero de 2023 (portada interior, p. ii; la página de NIST indica «released on
  January 26, 2023»).
- Hecho observado:
  1. **Criterios de la tabla frente al punto de entrada de S02.** S02 l. 13-16
     pide comparar las alternativas «por su contribución a la continuidad y
     coordinación, el esfuerzo de adopción y la portabilidad». La tabla del ADR
     (l. 43) usa «Autonomía y continuidad» y «Adopción y portabilidad»:
     «coordinación» desaparece como criterio y se añade «autonomía», que no es
     criterio del punto de entrada ni objetivo observable de S01 (l. 141-155:
     adopción reusable, continuidad, coordinación, portabilidad); S01 l. 117-118
     dice que «La autonomía total no es una condición de éxito del MVP».
  2. **La opción aceptada es la peor en la columna que mide dos objetivos de
     S01.** En «Adopción y portabilidad», la alternativa `rejected` obtiene
     «Menor integración con proveedores» (l. 46), la opción 3 «Reduce la
     complejidad de planificación» (l. 47) y la aceptada «Exige integrar
     capacidades de cada proveedor y manejar fallos» (l. 48). El resultado se
     decide en la otra columna («corresponde al objetivo real de autonomía»,
     l. 48) y l. 37-38 registra que el usuario acepta ese esfuerzo. S02 no
     registra esta comparación: su justificación (l. 29-30) sólo menciona
     autonomía y esfuerzo de integración. El ADR contiene, por tanto, la
     evaluación que [`REV-2026-013`](2026-09-21-REV-2026-013-alcance-autonomo-sin-caso-de-uso-ni-objetivo-observable.md)
     echaba en falta en S02, y muestra un coste contra los objetivos 1 y 4 de
     S01 sin vincularlo a ellos.
  3. **El problema y la razón decisiva no se anclan en S01.** El TL;DR plantea
     como problema que «preparar contexto y contratos no basta para conducir de
     forma autónoma el trabajo de varios agentes» (l. 8); el «Contexto» l. 21-25
     reproduce el problema de S01 (l. 124-131: preparación repetida y
     coordinación) y l. 27-31 añade la autonomía como límite confirmado por S02.
     La razón decisiva es «el objetivo confirmado por el usuario» (l. 66-67;
     también l. 48 y 55-56). En l. 1-69 no aparecen «caso de uso», «objetivo
     observable», «propuesta de valor», «sesión 1» ni «S01». Esto responde la
     parte que `REV-2026-013` dejó sin comprobar («No se ha revisado si … ADR-001
     declaran la relación con los casos de uso»): el ADR tampoco la declara.
  4. **Validación sin criterio de fracaso.** l. 67-68: «Su viabilidad y
     efectividad deberán validarse en las sesiones posteriores y en los
     experimentos del producto». El rango no dice qué resultado invalidaría la
     opción aceptada ni si las opciones 2 y 3 quedan como repliegue; el destino
     numerado está en «Puntos abiertos» l. 121 (sesiones 11 y 12, bloque `B031`).
  5. **Alternativas no elegidas sin estado uniforme.** La opción 2 es
     `rejected` en el ADR (l. 46) y en S02 (l. 30). La opción 3 («Ejecutar
     únicamente tareas previamente delimitadas por la persona», l. 47) tiene
     como resultado «No elegida como límite», que no es `accepted`, `deferred`
     ni `rejected` (`AGENTS.md` l. 35-36), y no tiene fila en S02; S02 l. 31 la
     alude sólo como contraste de «el alcance 2», expresión que no tiene
     enumeración en ningún archivo del repositorio (búsqueda de «alcance [123]»:
     sólo S02 l. 31). La fila 1 («Situación actual», l. 45) es un antecedente,
     no una alternativa.
  6. **Base externa (l. 60-64), comprobada.** AI RMF 1.0 contiene: «GOVERN 2.1:
     Roles and responsibilities and lines of communication related to mapping,
     measuring, and managing AI risks are documented and are clear to
     individuals and teams throughout the organization»; «GOVERN 3.2: Policies
     and procedures are in place to define and differentiate roles and
     responsibilities for human-AI configurations and oversight of AI systems»;
     «MAP 3.5: Processes for human oversight are defined, assessed, and
     documented in accordance with organizational policies from the GOVERN
     function»; MAP 1.1 trata usos y contexto «across the development or product
     AI lifecycle». La paráfrasis del ADR es fiel. El ADR declara con acierto
     que el marco «no prescribe esta arquitectura ni demuestra que T800R ya pueda
     detectar correctamente el riesgo» (l. 63-64). La página de NIST indica que
     «The AI RMF 1.0 is being revised as part of the White House AI Action
     Plan»; 1.0 sigue siendo la versión publicada. Fuerza `alta`; pertinencia:
     sólo respalda hacer visibles responsabilidades y supervisión, no elegir
     entre las opciones 2-4, que el marco admitiría por igual.
- Inferencia (si aplica): la evaluación registrada en el ADR elige la opción más
  costosa para dos objetivos observables de S01 por un criterio (autonomía) que
  no figura entre ellos ni en el punto de entrada de S02, y omite el criterio
  (coordinación) que sí figura en ambos. La elección puede ser correcta, pero el
  canon no permite comprobar después si se cumplió.

## Observación y propuesta

- Observación: el ADR es transparente sobre el coste y sobre los límites de su
  base externa; el problema es de verificabilidad. Sin enlazar la decisión a
  un objetivo observable (el de S01 o uno nuevo), la validación anunciada en
  l. 67-68 no tiene contra qué medirse, y la pérdida en adopción y portabilidad
  aceptada en l. 37-38 no tiene un umbral. Además, la única evaluación de
  alternativas por los criterios del punto de entrada vive en el ADR y no en la
  unidad canónica.
- Propuesta concreta: que la persona decida (a) si la conducción autónoma se
  evalúa contra un objetivo observable (nuevo o existente) y cuál es la
  condición que haría revisar la decisión, registrándolo donde se resuelva
  `REV-2026-013`; (b) si la tabla del ADR debe incluir la columna
  «coordinación» del punto de entrada o explicar por qué se sustituyó por
  «autonomía»; (c) si la opción 3 queda como `rejected` (como límite) o como
  capacidad incluida, y qué fue «el alcance 2» de S02 l. 31. No editar S02 ni
  ADR-001 sin esa decisión.
- Contraargumento o coste/riesgo: los acuerdos de S01 son «iniciales» y S02
  puede refinarlos; la autonomía que el ADR elige no es «total», así que no
  contradice S01 l. 117-118; «No elegida como límite» es una lectura precisa si
  el alcance aceptado incluye ejecutar tareas ya delimitadas (S02 l. 31: «no
  sólo ejecutar tareas ya definidas»), y entonces la opción 3 no está
  rechazada como comportamiento; las métricas se difieren a S12 (S01 l.
  154-155). El coste es añadir una columna o una frase y decidir el objetivo.

## Análisis adicional

- Evidencia interna: hechos 1-5 con sus localizadores.
- Contraevidencia y límites: no se leyó S12 (en curso) ni S11; es posible que
  la validación de la conducción autónoma tenga allí criterios. La coordinación
  puede considerarse incluida en «autonomía» si se entiende que conducir es
  coordinar, pero la tabla no lo dice. No se consultaron las «Fuentes de
  partida» del índice (OpenAI, Anthropic) porque el ADR no las cita y el área
  «límites de autonomía e intervención humana» está asignada a la sesión 9
  (`docs/product-definition.md` l. 121). La página de OpenAI no se intentó
  (HTTP 403 en `B011`/`B017`).
- Pregunta para resolver: ¿contra qué objetivo observable y con qué condición de
  revisión se comprobará que conducir, ejecutar y supervisar agentes compensa el
  coste en adopción y portabilidad que el propio ADR registra, y qué estado
  tiene la opción 3?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B030](blocks/B030.md),
  [`REV-2026-013`](2026-09-21-REV-2026-013-alcance-autonomo-sin-caso-de-uso-ni-objetivo-observable.md),
  [`REV-2026-014`](2026-09-21-REV-2026-014-modelo-de-interaccion-frente-a-puntos-de-intervencion-del-proyecto.md),
  [`REV-2026-001`](2026-09-21-REV-2026-001-precedencia-adr-unidad-canonica.md),
  [`REV-2026-058`](2026-09-24-REV-2026-058-aplazamientos-embebidos-en-filas-accepted-de-s07-sin-rejected-frente-a-seis-alternativas-de-adr-006-y-punto-abierto-marcado-resuelto-con-adr-007-posterior.md)
  (hecho 3, mismo patrón en S07/ADR-006), cruces `CT04` y `CT07`.

## Preguntas pendientes

Ver el checkpoint [B030](blocks/B030.md).

## Cobertura y límites

Ver el checkpoint [B030](blocks/B030.md). Fuentes externas efectivamente
consultadas: NIST AI 100-1 (PDF, p. i-ii y 22-27) y la página del AI RMF en
nist.gov (estado de la versión).
