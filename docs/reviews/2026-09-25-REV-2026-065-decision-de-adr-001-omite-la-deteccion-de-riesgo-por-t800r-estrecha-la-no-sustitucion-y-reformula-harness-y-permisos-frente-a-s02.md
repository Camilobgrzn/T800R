# Anotación de revisión

- ID de anotación: `REV-2026-065`
- Unidad y ubicación: `ADR-001` — [«Decisión»](../adr/ADR-001-autonomia-y-responsabilidades.md#decisión),
  `docs/adr/ADR-001-autonomia-y-responsabilidades.md:70-99`, frente a `S02` —
  [«Decisiones»](../definition/session-02-limits.md#decisiones) (l. 29-40),
  [«Modelo inicial de responsabilidades»](../definition/session-02-limits.md#modelo-inicial-de-responsabilidades)
  (l. 44-60) y [«Modelo de interacción acordado para desarrollo de software»](../definition/session-02-limits.md#modelo-de-interacción-acordado-para-desarrollo-de-software)
  (l. 64-98). Bloque `B031`.
- Revisión examinada: estado de los archivos al 2026-09-25 (repositorio sin
  commits; ADR-001 fechado 2026-09-14, S02 comprobada el 2026-09-14). Citas
  distintivas: «Ante un cambio de alto riesgo, T800R explica las consecuencias
  y solicita revisión humana con el cambio y la evidencia de validación» (ADR
  l. 85-86); «Las validaciones de los agentes no sustituyen esa revisión» (l.
  88-89); «T800R prepara y valida su incorporación» (l. 90); «Este registro fija
  el límite transversal del producto» (l. 98).
- Tipo: `incompleto`
- Gravedad: `baja`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos; `media` sobre el impacto (el riesgo sólo
  se materializa si el ADR se lee sin S02; S09 y ADR-008 sólo se leyeron por
  búsqueda y en l. 40-119 de S09)
- Impacto: qué obligaciones `accepted` de S02 aplica quien use ADR-001 como
  «límite transversal del producto» (l. 98) y como fuente de «Autonomía y
  responsabilidades» (tracker de definición l. 318): si T800R debe detectar el
  riesgo, si la validación que T800R coordina puede sustituir la revisión final
  y qué actor aporta y respeta los permisos de ejecución.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (divergencia exclusivamente interna; no
  requiere fuente externa según [README](README.md)).
- Fuente primaria: `docs/adr/ADR-001-autonomia-y-responsabilidades.md:14, 16,
  64, 72-99, 125`; `docs/definition/session-02-limits.md:21, 29, 34, 37, 46-49,
  58-59, 70-77, 93-94`; `docs/definition/session-09-security-governance.md:53,
  56, 58, 68` (contraevidencia); `docs/definition-tracker.md:318`; búsqueda de
  «(detect|señal)… riesgo» en `docs/` fuera de `reviews/` (sólo S02 l. 33, 34,
  93, 96 y ADR-001 l. 64).
- Sección o localizador: ver «Unidad y ubicación».
- Fecha de consulta/publicación: consulta 2026-09-25; ADR y S02 fechados
  2026-09-14.
- Hecho observado:
  1. **La detección del riesgo desaparece de la decisión.** S02 l. 34
     (`accepted`): «T800R detectará y señalará los cambios de alto riesgo,
     explicará sus posibles consecuencias y solicitará revisión humana»; l. 49
     («Detecta y explica el riesgo») y l. 93 («T800R es responsable de detectar
     y señalar el riesgo») lo repiten. El punto 5 del ADR empieza en «Ante un
     cambio de alto riesgo, T800R explica las consecuencias» (l. 85): conserva
     explicar, solicitar y retener la integración, y omite detectar y señalar.
     Sólo l. 64 («ni demuestra que T800R ya pueda detectar correctamente el
     riesgo») presupone esa obligación. «Puntos abiertos» l. 119 pregunta «qué
     determina alto riesgo, quién fija los criterios», no quién detecta.
  2. **La regla de no sustitución cambia de sujeto.** S02 l. 76-77: «La
     validación realizada durante la construcción no sustituye esta revisión»;
     esa validación incluye la que T800R conduce («Incluye planificación,
     ejecución, supervisión y validación», l. 72-73) y los «mecanismos de
     validación» del repositorio consumidor (l. 46). El punto 6 del ADR dice
     «Las validaciones de los agentes no sustituyen esa revisión» (l. 88-89),
     mientras sus puntos 3 y 7 atribuyen a T800R coordinar la validación y
     comprobar «el trabajo realmente realizado» (l. 79, 91) y al repositorio
     consumidor «validaciones particulares» (l. 92). Leída sola, la regla del
     ADR no cubre la validación de T800R ni la del consumidor.
  3. **«Preparar el harness» pasa a «preparar su incorporación».** S02 l. 46:
     T800R «Prepara el harness y comprueba que dispone de lo necesario para
     operar»; el criterio de salida habla de «incorporar el harness» (l. 21).
     El ADR dice «T800R prepara y valida su incorporación» (l. 90) y define el
     repositorio consumidor como el que «incorpora T800R» (l. 16), mientras el
     glosario atribuye al harness «orienta y coordina» (l. 14) y el punto 3 a
     T800R «coordina ejecución y validación» (l. 78-79). El ADR trata T800R y
     harness como intercambiables sin decirlo (pregunta 4 de `B030`;
     [`REV-2026-063`](2026-09-25-REV-2026-063-glosario-de-adr-001-redefine-harness-y-repositorio-consumidor-frente-a-s01-y-contrato-de-trabajo-sin-artefacto.md)
     hecho 1).
  4. **Permisos y controles del proveedor fuera de la decisión.** S02 l. 47:
     el proveedor «Ejecuta los agentes mediante sus capacidades y permisos
     disponibles»; l. 49: «Respeta los controles de ejecución que le
     correspondan». El punto 3 del ADR reduce el papel del proveedor a aportar
     «los mecanismos de ejecución y las capacidades disponibles» (l. 79-80) y
     el punto 4 sitúa los permisos sólo del lado de T800R («fuera de sus
     capacidades o permisos», l. 83-84). Ningún punto recoge la obligación del
     proveedor de respetar controles en la revisión por riesgo.
  5. **Validación de referencias sin sujeto.** S02 l. 37 y 58-59: «T800R
     deberá validar las referencias». Punto 8: «con referencias configurables y
     validadas» (l. 95), en participio sin agente ni momento.
  6. **El ADR se declara límite y a la vez remite a S02 como canon.** l. 98:
     «Este registro fija el límite transversal del producto»; l. 125 llama a
     S02 «fuente canónica». El ADR no dice que su «Decisión» sea un resumen ni
     que el modelo de responsabilidades de S02 (l. 35, `accepted`) siga
     vigente en lo omitido. El tracker de definición remite «Autonomía y
     responsabilidades» a ADR-001, no a S02 (l. 318).
- Inferencia (si aplica): la «Decisión» resume S02 con cinco pérdidas o
  desplazamientos de sujeto; ninguno contradice S02 de frente, pero dos
  (hechos 1 y 2) retiran de la versión que el tracker ofrece como fuente la
  obligación que hace verificable la revisión por riesgo y la que impide que la
  verificación de T800R sustituya la aceptación humana. Es una divergencia
  concreta ADR/unidad del tipo de
  [`REV-2026-001`](2026-09-21-REV-2026-001-precedencia-adr-unidad-canonica.md).

## Observación y propuesta

- Observación: `B008` no halló contradicción de fondo entre S02 l. 29-40 y los
  ocho puntos; la comparación con el modelo de responsabilidades (l. 44-60) y
  con el modelo de interacción (l. 64-98), que `B008` no releyó, muestra
  omisiones y cambios de sujeto que importan si el ADR se aplica como límite.
- Propuesta concreta: que la persona decida (a) si el punto 5 recupera
  «detecta y señala»; (b) si el punto 6 vuelve a «la validación realizada
  durante la construcción» o nombra expresamente la de T800R y la del
  repositorio consumidor; (c) si «Decisión» declara que resume S02 y que el
  modelo de responsabilidades de S02 l. 44-60 sigue vigente en lo no repetido
  (lo que resolvería los hechos 3-5 sin reescribir el ADR); (d) si T800R y el
  harness son la misma cosa (con `REV-2026-063`). No editar ADR-001 ni S02 sin
  esa decisión.
- Contraargumento o coste/riesgo: el ADR remite a S02 como «fuente canónica»
  (l. 125), lo que ya puede leerse como precedencia de la unidad; S09 asigna
  después la evaluación del riesgo al núcleo con la política del repositorio
  como clasificadora (S09 l. 53, 68) y declara que los permisos del proveedor no
  autorizan (l. 56, 58), de modo que los hechos 1 y 4 están resueltos aguas
  abajo en un sentido compatible con S02; «validaciones de los agentes» puede
  leerse como sinécdoque de toda validación automatizada. El coste es una o dos
  frases en el ADR.

## Análisis adicional

- Evidencia interna: hechos 1-6 con sus localizadores. Los puntos 1, 2 y 4
  coinciden con S02 l. 38-40 (el punto 4 añade «acuerdos técnicos», que S02
  l. 86-87 respalda: pregunta 1 de `B008`, sin hallazgo).
- Contraevidencia y límites: no se leyeron S04 l. 89-117 ni S10-S12 salvo por
  búsqueda; S04 l. 86 (aceptación humana tras `verify`) confirma que la
  verificación técnica precede y no sustituye la aceptación, lo que mitiga el
  hecho 2 en la práctica. No se afirma que alguna unidad haya adoptado la
  lectura estrecha.
- Pregunta para resolver: ¿la «Decisión» de ADR-001 es un resumen subordinado
  al modelo de S02, y en ese caso debe recuperar la detección del riesgo y la
  regla general de no sustitución, o es el límite vigente por sí mismo?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B031](blocks/B031.md), [B008](blocks/B008.md),
  [`REV-2026-001`](2026-09-21-REV-2026-001-precedencia-adr-unidad-canonica.md),
  [`REV-2026-015`](2026-09-21-REV-2026-015-aplazamientos-s02-sin-retorno-y-divergentes-de-adr-001.md),
  [`REV-2026-016`](2026-09-21-REV-2026-016-cierre-s02-reformula-quien-ejecuta-y-afirma-no-bloqueo.md),
  [`REV-2026-063`](2026-09-25-REV-2026-063-glosario-de-adr-001-redefine-harness-y-repositorio-consumidor-frente-a-s01-y-contrato-de-trabajo-sin-artefacto.md),
  cruce `CT04`.

## Preguntas pendientes

Ver el checkpoint [B031](blocks/B031.md).

## Cobertura y límites

Ver el checkpoint [B031](blocks/B031.md). Fuentes externas: ninguna; el
problema es interno.
