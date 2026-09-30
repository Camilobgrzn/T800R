# Anotación de revisión

- ID de anotación: `REV-2026-069`
- Unidad y ubicación: `ADR-002` — [«Decisión»](../adr/ADR-002-fuentes-canonicas-y-conocimiento.md#decisión),
  `docs/adr/ADR-002-fuentes-canonicas-y-conocimiento.md:72-119`, frente a `S03` —
  [«Decisiones»](../definition/session-03-sources-of-truth.md#decisiones) (l. 43),
  [«Distribución canónica inicial»](../definition/session-03-sources-of-truth.md#distribución-canónica-inicial)
  (l. 53-58, 71-79), [«Contexto efímero y persistencia»](../definition/session-03-sources-of-truth.md#contexto-efímero-y-persistencia)
  (l. 91-101), [«Mantenimiento del conocimiento»](../definition/session-03-sources-of-truth.md#mantenimiento-del-conocimiento)
  (l. 120-135) y [«Detalles aplazados»](../definition/session-03-sources-of-truth.md#detalles-aplazados)
  (l. 238). Bloque `B033`.
- Revisión examinada: estado de los archivos al 2026-09-25 (repositorio sin
  commits; ADR-002 fechado 2026-09-14, S03 confirmada el 2026-09-14). Citas
  distintivas: «Corregir derivados que contradigan sus originales» (ADR l. 95);
  «Mantener referencias e índices y revisar aprendizajes cuando cambien sus
  fundamentos» (l. 102-103); «| Evidencia | Comprobaciones, condiciones y
  resultados vinculados a la revisión examinada. |» (l. 82); «la conciliación
  con controles del proveedor queda por concretar» (l. 111); «El esquema y los
  mecanismos operativos siguen en definición» (l. 119).
- Tipo: `incompleto`
- Gravedad: `baja`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos (lectura completa de ambos textos y
  búsquedas en ADR-002 de «inequívoc», «detect», «rota», «human», «código»);
  `media` sobre el impacto (depende de si el ADR se aplica sin S03)
- Impacto: qué límites de la autonomía de T800R sobre referencias y derivados,
  qué contenido de la evidencia y qué destinos de lo diferido aplica quien use
  ADR-002 como fuente de «Fuentes canónicas y conocimiento», que es como lo
  presenta el tracker de definición (`docs/definition-tracker.md:319`). No
  cambia ninguna fila aceptada de S03.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (divergencia exclusivamente interna; no requiere
  fuente externa según [README](README.md)).
- Fuente primaria: `docs/adr/ADR-002-fuentes-canonicas-y-conocimiento.md:15,
  28-29, 76-119, 123-128, 151`; `docs/definition/session-03-sources-of-truth.md:36,
  43, 53-58, 71-79, 91-101, 109, 120-135, 238`; `docs/definition-tracker.md:319`;
  por búsqueda, como contraevidencia de destino:
  `docs/definition/session-08-portability.md:143`,
  `docs/research-agent-skills.md:87` y ausencia de «skill» en
  `docs/definition/session-09-security-governance.md`.
- Sección o localizador: ver «Unidad y ubicación».
- Fecha de consulta/publicación: consulta 2026-09-25; ADR-002 y S03 fechados
  2026-09-14.
- Hecho observado:
  1. **El límite «inequívoco» y la detección desaparecen de los puntos 3 y 5.**
     S03 l. 43 (`accepted`): T800R «detectará referencias rotas,
     desactualización y contradicciones; corregirá referencias inequívocas y
     resúmenes derivados autónomamente»; l. 123-126 lo acota: «Actualizar
     referencias e índices cuando un documento se mueve y el destino es
     inequívoco» y «Corregir resúmenes desactualizados respecto de sus
     originales, conservando la referencia a éstos». El punto 5 dice «Mantener
     referencias e índices» (l. 102) y el punto 3 «Corregir derivados que
     contradigan sus originales» (l. 95), sin sujeto, sin «inequívoco», sin
     «conservando la referencia» y generalizando «resumen» a «derivado», que el
     glosario define como «índice, resumen o representación» (l. 15) y que
     incluye las síntesis del conocimiento mantenido (S03 l. 59), sujetas en S07
     a curación y transiciones propias. «inequívoc», «detect» y «rota» no
     aparecen en ADR-002. Tampoco figura la regla de S03 l. 120-121 («no
     modifica los acuerdos para hacerlos coincidir con el código»); el punto 3
     conserva la distinción (l. 97-98) pero no su consecuencia.
  2. **La evidencia pierde las revisiones humanas.** S03 l. 58: la evidencia de
     ejecución y revisión registra «Qué se comprobó, sobre qué revisión, en qué
     condiciones y con qué resultado, incluidas las revisiones humanas
     correspondientes». La fila de ADR-002 l. 82 conserva comprobaciones,
     condiciones y resultados y omite la cláusula final; «human» no aparece en
     todo ADR-002. El punto 8 (l. 114) sólo destina a la evidencia
     «validaciones».
  3. **Los ADR pierden su relación con las especificaciones.** S03 l. 54: «ADRs,
     cuando correspondan | Decisiones relevantes y sus razones, referenciadas
     desde las especificaciones». ADR-002 l. 79: «ADRs | Decisiones relevantes y
     sus razones.» Se omiten «cuando correspondan» y «referenciadas desde las
     especificaciones», la única indicación de la distribución sobre la
     dirección entre ambas capas (relevante para
     [`REV-2026-001`](2026-09-21-REV-2026-001-precedencia-adr-unidad-canonica.md)).
  4. **La persistencia pierde los calificadores y cambia de alcance.** S03
     l. 93-97 destina «Cambio de requisito confirmado», «Bloqueo o cambio de
     responsable», «Validación relevante», «Aprendizaje reutilizable
     confirmado» e «Investigación inconclusa». El punto 8 (l. 113-115) dice
     «acuerdos en especificaciones o decisiones, estado en tracker,
     validaciones en evidencia, aprendizajes en conocimiento e investigaciones
     inconclusas en memoria»: retira «confirmado» y «relevante» y amplía
     «Bloqueo o cambio de responsable» a «estado». La ampliación podría alojar
     las consultas abiertas y discrepancias que
     [`REV-2026-020`](2026-09-21-REV-2026-020-tabla-de-persistencia-sin-destino-para-lo-no-confirmado.md)
     echa en falta; el cambio de requisito sin confirmar sigue sin destino.
  5. **Las remisiones de S03 se funden en una frase sin destino.** S03 remite la
     revalidación a «ciclo operativo y validación» (l. 78-79), los mecanismos y
     momentos de persistencia a «ciclo operativo y contexto» (l. 100-101) y la
     frecuencia y mecanismos del mantenimiento a «la sesión 7» (l. 135). ADR-002
     los reduce a «El esquema y los mecanismos operativos siguen en
     definición» (l. 119), sin sesión. El punto 7 añade un aplazamiento
     embebido, «la conciliación con controles del proveedor queda por
     concretar» (l. 111), sin destino en el punto; S03 l. 238 difiere
     «permisos» de skills a las sesiones 8, 9 y 10; por búsqueda, S08 l. 143
     (`portable_skills`: no «Trasladar ciegamente extensiones o permisos de un
     proveedor») lo trata en parte, S09 no menciona skills y
     `research-agent-skills.md` l. 87 lo asignaba a S09 («permisos y
     autorización efectiva frente a metadatos de skills»).
  6. **Fuente presentada como vigente.** El tracker de definición remite «Fuentes
     canónicas y conocimiento» a ADR-002 (l. 319), no a S03; ADR-002 l. 151
     llama a S03 «Acuerdos canónicos».
- Inferencia (si aplica): la «Decisión» resume S03 de forma fiel en su
  estructura (once capas y regla de discrepancias, `REV-2026-025` hecho 1), pero
  retira los calificadores que acotan la corrección autónoma (hecho 1), el
  registro de la revisión humana como evidencia (hecho 2), la dirección
  especificación → ADR (hecho 3) y la condición de confirmación (hecho 4). Es el
  mismo patrón que [`REV-2026-065`](2026-09-25-REV-2026-065-decision-de-adr-001-omite-la-deteccion-de-riesgo-por-t800r-estrecha-la-no-sustitucion-y-reformula-harness-y-permisos-frente-a-s02.md)
  documentó para ADR-001/S02.

## Observación y propuesta

- Observación: ninguna omisión contradice S03 de frente; todas amplían el
  margen del agente o reducen lo que debe registrarse si se lee el ADR solo,
  que es lo que sugiere el tracker de definición (l. 319).
- Propuesta concreta: que la persona decida (a) si la «Decisión» de ADR-002
  declara que resume S03 y que las condiciones de S03 l. 43, 58, 93-97 y
  123-126 siguen vigentes en lo no repetido (resolvería los hechos 1-4 sin
  reescribir el ADR); o (b) si recupera en el texto «inequívoco», «conservando
  la referencia», «incluidas las revisiones humanas», «referenciadas desde las
  especificaciones» y «confirmado»; y (c) si l. 111 y l. 119 indican destino o
  remiten a «Puntos abiertos» (l. 134-147, bloque `B034`). Conviene decidirlo
  junto con `REV-2026-065` y `REV-2026-001`. No editar ADR-002 ni S03 sin esa
  decisión.
- Contraargumento o coste/riesgo: ADR-002 l. 151 remite a S03 como «Acuerdos
  canónicos», lo que puede leerse como subordinación del ADR (más explícita que
  en ADR-001); «derivado» ya lleva en el glosario la cláusula «cuya autoridad no
  sustituye a la de sus originales» (l. 15); «Comprobaciones» puede incluir
  revisiones humanas; «acuerdos» y «aprendizajes» implican confirmación por
  definición; y S07 (l. 50, 53) y S04 regulan después curación y aceptación
  humana. El coste de la opción (a) es una frase.

## Análisis adicional

- Evidencia interna: hechos 1-6 con sus localizadores. Coinciden en sustancia:
  punto 1 y la tabla (salvo hechos 2 y 3) con S03 l. 53-63 (`REV-2026-025`
  hecho 1); punto 2 con S03 l. 36 y l. 140-149; punto 3, segunda frase, con S03
  l. 38 (laguna compartida de
  [`REV-2026-017`](2026-09-21-REV-2026-017-regla-de-discrepancias-entre-originales-con-casos-sin-salida.md));
  punto 4 con S03 l. 39 y 71-79; punto 6 con S03 l. 44 y 105-116 (reduce la
  condición de continuidad de S03 l. 109 a «cuando una acción dependa de
  ellos», mitigado por «Consecuencias» l. 127-128); punto 7 con S03 l. 45-46 (el
  contenido de la skill está en el glosario, l. 17).
- Contraevidencia y límites: no se leyeron S04, S07 fuera de l. 36-62, S08 ni
  S09 salvo búsquedas; no se afirma que alguna unidad haya aplicado la lectura
  amplia. S04 y S07 pueden cubrir en la práctica los hechos 2 y 4 (aceptación
  humana, promoción desde memoria).
- Pregunta para resolver: ¿la «Decisión» de ADR-002 es un resumen subordinado a
  S03 —y entonces debe declararlo— o es la fuente vigente de «Fuentes canónicas
  y conocimiento» que el tracker de definición enlaza, y en ese caso debe
  recuperar los límites de corrección autónoma, las revisiones humanas como
  evidencia y los destinos de lo diferido?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B033](blocks/B033.md),
  [`REV-2026-001`](2026-09-21-REV-2026-001-precedencia-adr-unidad-canonica.md),
  [`REV-2026-017`](2026-09-21-REV-2026-017-regla-de-discrepancias-entre-originales-con-casos-sin-salida.md),
  [`REV-2026-020`](2026-09-21-REV-2026-020-tabla-de-persistencia-sin-destino-para-lo-no-confirmado.md),
  [`REV-2026-025`](2026-09-24-REV-2026-025-puntos-abiertos-de-adr-002-divergen-de-detalles-aplazados-s03.md),
  [`REV-2026-056`](2026-09-24-REV-2026-056-frecuencia-y-mecanismos-de-validacion-de-referencias-y-esquema-del-registro-de-fuentes-remitidos-a-s07-sin-fila-y-adr-002-declara-resuelto-el-esquema-de-conocimiento-en-su-lugar.md),
  [`REV-2026-065`](2026-09-25-REV-2026-065-decision-de-adr-001-omite-la-deteccion-de-riesgo-por-t800r-estrecha-la-no-sustitucion-y-reformula-harness-y-permisos-frente-a-s02.md),
  cruces `CT01` y `CT04`.

## Preguntas pendientes

Ver el checkpoint [B033](blocks/B033.md).

## Cobertura y límites

Ver el checkpoint [B033](blocks/B033.md). Fuentes externas: ninguna; el
problema es interno.
