# Anotación de revisión

- ID de anotación: `REV-2026-025`
- Unidad y ubicación: `S03` — [Comprobación de cierre](../definition/session-03-sources-of-truth.md#s03-cierre),
  «La decisión transversal queda recogida en [ADR-002]»
  (`docs/definition/session-03-sources-of-truth.md:258-259`) y
  [Detalles aplazados](../definition/session-03-sources-of-truth.md#detalles-aplazados)
  (l. 234-240), frente a [ADR-002, «Puntos abiertos»](../adr/ADR-002-fuentes-canonicas-y-conocimiento.md#puntos-abiertos)
  (`docs/adr/ADR-002-fuentes-canonicas-y-conocimiento.md:134-147`). Bloque `B012`.
- Revisión examinada: estado de ambos archivos al 2026-09-24; repositorio sin
  commits, huella no disponible. ADR-002 está fechado 2026-09-14 con estado
  «Aceptada» (l. 3-4) y cita resultados de las sesiones 7, 8 y 11 y los ADR-003
  y ADR-006 (l. 136-144, 153), por lo que fue editado después de esa fecha sin
  nota de revisión.
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos; `media` sobre el impacto (no se leyeron
  S07, S08 ni ADR-006 para comprobar qué resolvieron)
- Impacto: saber cuál es el inventario vigente de aplazamientos de S03 (la
  unidad o el ADR), qué se dio por resuelto y dónde, y en particular si el
  esquema del registro de fuentes —del que dependen `REV-2026-018` y
  `REV-2026-019`— quedó fijado en la sesión 7 o fue sustituido por el esquema
  del conocimiento. Afecta a `CT04` (S03/ADR-002), `CT01` y `CT07`.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (contradicción y omisión exclusivamente
  internas; no se invoca ninguna fuente externa)
- Fuente primaria: `docs/definition/session-03-sources-of-truth.md` l. 3-4,
  38, 53-63, 129-130, 234-240 y 258-259;
  `docs/adr/ADR-002-fuentes-canonicas-y-conocimiento.md` l. 3-4, 74-119,
  134-147 y 151-154; `docs/definition-tracker.md` l. 6-7
- Sección o localizador: «Comprobación de cierre» y «Detalles aplazados» de
  S03; «Decisión» y «Puntos abiertos» de ADR-002
- Fecha de consulta/publicación: consulta 2026-09-24; S03 confirmada el
  2026-09-14 y editada después; ADR-002 fechado 2026-09-14 y editado después
- Hecho observado:
  1. **El enlace resuelve y la decisión sí está recogida.** El archivo
     `docs/adr/ADR-002-fuentes-canonicas-y-conocimiento.md` existe, el enlace
     de l. 259 no usa ancla y el ADR enlaza de vuelta a S03 (ADR-002 l. 151).
     La tabla de «Decisión» (ADR-002 l. 76-88) tiene las mismas once capas que
     la distribución canónica de S03 (l. 53-63), y el punto 3 (l. 95-98)
     reproduce en sustancia la regla de discrepancias de S03 l. 38 y 129-130:
     «Ante discrepancias entre originales, comprobar ámbito y versión y
     consultar si la resolución cambia un acuerdo». No hay divergencia de
     literalidad entre unidad y ADR en esa regla (pregunta 5 de
     [B009](blocks/B009.md)); ambos comparten la laguna de
     [`REV-2026-017`](2026-09-21-REV-2026-017-regla-de-discrepancias-entre-originales-con-casos-sin-salida.md).
  2. **Los inventarios de aplazamientos divergen.** S03 tiene siete filas
     `deferred` (l. 234-240) y ADR-002 siete puntos abiertos (l. 136-147),
     pero no coinciden:
     - Perfil de conocimiento y OKF: S03 l. 236 sigue `deferred` con destino
       «sesión 7»; ADR-002 l. 138-141 dice «modelo lógico resuelto en sesión 7
       y ADR-006; identidad portable en sesión 8 y representación física en
       sesión 11». El ADR registra una resolución y dos destinos nuevos que la
       unidad no tiene.
     - Esquema del registro de fuentes: S03 l. 237 aplaza «Esquema del
       registro, campos obligatorios y mecanismos de consulta de fuentes» a
       las sesiones 7, 8 y 10; ADR-002 l. 142-144 pregunta «¿Cómo se concretan
       esquemas del registro y acceso a fuentes?» y responde «el esquema de
       conocimiento quedó resuelto en sesión 7». El registro de fuentes
       (ADR-002 l. 83) y el conocimiento mantenido (l. 84) son capas distintas
       en la propia tabla del ADR; la respuesta cambia de objeto. Ninguno de
       los dos textos dice dónde quedaron los campos del registro, en especial
       procedencia y confirmación
       ([`REV-2026-019`](2026-09-21-REV-2026-019-registro-de-fuentes-autoridad-canonica-con-escritura-del-agente-sin-procedencia.md),
       [`REV-2026-018`](2026-09-21-REV-2026-018-quien-define-criterios-de-autoridad-y-como-se-audita-el-limite.md)).
       A la vez, ADR-002 l. 118-119 afirma en presente que «El esquema y los
       mecanismos operativos siguen en definición».
     - Skills: S03 l. 238 aplaza «Formato, adapters, permisos, distribución y
       actualización de skills» a las sesiones 8, 9 y 10; ADR-002 l. 145
       pregunta «¿Qué capacidades y extensiones de skills soporta cada
       proveedor?» con destino «sesiones 8 y 9». Contenido y destinos
       distintos.
     - Los puntos 1, 2, 6 y 7 (l. 136-137, 146-147) coinciden en sustancia con
       l. 234, 235, 239 y 240. El punto 1 y l. 234 fueron actualizados tras
       S04 con la misma redacción («resuelto en sesión 4 y ADR-003»; «continúa
       en la sesión 5») y ambos siguen sin marcar la sesión 5, ya cerrada
       (tracker l. 6-7).
  3. **Sin regla de precedencia ni control de revisión.** Ninguno de los dos
     documentos declara cuál inventario prevalece ni registra sus ediciones
     posteriores a 2026-09-14. Es el mismo patrón que
     [`REV-2026-015`](2026-09-21-REV-2026-015-aplazamientos-s02-sin-retorno-y-divergentes-de-adr-001.md)
     documentó para S02 y ADR-001, y un caso concreto de la falta de
     precedencia entre ADR y unidad de
     [`REV-2026-001`](2026-09-21-REV-2026-001-precedencia-adr-unidad-canonica.md).
- Inferencia (si aplica): quien lea el cierre de S03 («La decisión transversal
  queda recogida en ADR-002») y siga el enlace encontrará un inventario de
  pendientes distinto del de la unidad, con resoluciones que la unidad no
  refleja y con el esquema del registro de fuentes dado por resuelto mediante
  otro objeto. El punto más sensible es ese último: si el registro no tiene
  esquema propio, las preguntas de `REV-2026-018` y `REV-2026-019` no tienen
  hoy sesión que las reciba.

## Observación y propuesta

- Observación: la afirmación del cierre es correcta para la «Decisión» del ADR
  y no se sostiene para sus «Puntos abiertos». La divergencia no demuestra que
  algo esté sin resolver: es posible que S07 y ADR-006 hayan fijado el modelo
  de conocimiento y que S08 haya tratado la identidad portable como dice el
  ADR; lo que no existe es un rastro coherente entre unidad y ADR, ni una
  afirmación explícita sobre el esquema del registro de fuentes.
  [`REV-2026-023`](2026-09-24-REV-2026-023-detalles-aplazados-s03-sin-retorno-y-sin-fila-para-validacion-de-referencias.md)
  ya pide marcas de retorno para las filas de S03; aquí se añade el lado del
  ADR y el cambio de objeto en el punto 4.
- Propuesta concreta: que la persona decida (a) cuál de los dos inventarios es
  el vigente para S03 y que el otro remita a él (la misma decisión que pide
  `REV-2026-015` para S02/ADR-001); (b) si el esquema del registro de fuentes
  quedó resuelto en la sesión 7 o sigue abierto, y registrarlo con enlace en la
  fila de l. 237 y en ADR-002 l. 142-144; (c) si los ADR llevan nota de
  revisión cuando se editan después de su fecha. No modificar S03 ni ADR-002
  sin esa decisión.
- Contraargumento o coste/riesgo: un ADR puede legítimamente evolucionar como
  registro vivo de sus puntos abiertos mientras la unidad conserva la
  fotografía del cierre; en esa lectura el ADR es el inventario vigente y la
  divergencia es esperada. Sin embargo, S03 sí fue editada tras el cierre
  (l. 224, 234), así que la lectura «fotografía» no explica por qué se
  actualizó una fila y no las demás. El coste de conciliar es bajo; el riesgo
  de no hacerlo es perder el esquema del registro entre dos documentos que se
  remiten mutuamente.

## Análisis adicional

- Evidencia interna: S03 l. 258-259 (remisión al ADR) y l. 234-240 (filas);
  ADR-002 l. 76-88 (tabla de capas, incluidas «Registro de fuentes» y
  «Conocimiento mantenido» como filas separadas), l. 95-98 (regla de
  discrepancias), l. 118-119 («siguen en definición»), l. 134-147 (puntos
  abiertos) y l. 151-154 (referencias a S03 y a las tres investigaciones).
  Matiz para
  [`REV-2026-021`](2026-09-24-REV-2026-021-atribuciones-de-evidencia-sin-enlace-y-evals-atribuidos-a-fuente-no-listada.md):
  ADR-002 l. 154 y 159 sí enlazan la investigación de skills y la guía de
  evaluación de Agent Skills; S03 sigue sin hacerlo.
- Contraevidencia y límites: no se leyeron S07, S08, S10 ni ADR-006, de modo
  que no se afirma que ningún punto esté sin resolver, sólo que los rastros
  divergen. El bloque de ADR-002 y `CT04` deben comprobar el resto del ADR
  (contexto, alternativas, evidencia de industria), que aquí no se analizó.
- Pregunta para resolver: ¿cuál es el inventario vigente de aplazamientos de
  S03, y el esquema del registro de fuentes (campos, procedencia, quién
  confirma) quedó resuelto en la sesión 7 o sigue sin sesión que lo reciba?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B012](blocks/B012.md), [B009](blocks/B009.md),
  [B011](blocks/B011.md),
  [`REV-2026-001`](2026-09-21-REV-2026-001-precedencia-adr-unidad-canonica.md),
  [`REV-2026-015`](2026-09-21-REV-2026-015-aplazamientos-s02-sin-retorno-y-divergentes-de-adr-001.md),
  [`REV-2026-017`](2026-09-21-REV-2026-017-regla-de-discrepancias-entre-originales-con-casos-sin-salida.md),
  [`REV-2026-018`](2026-09-21-REV-2026-018-quien-define-criterios-de-autoridad-y-como-se-audita-el-limite.md),
  [`REV-2026-019`](2026-09-21-REV-2026-019-registro-de-fuentes-autoridad-canonica-con-escritura-del-agente-sin-procedencia.md),
  [`REV-2026-021`](2026-09-24-REV-2026-021-atribuciones-de-evidencia-sin-enlace-y-evals-atribuidos-a-fuente-no-listada.md),
  [`REV-2026-023`](2026-09-24-REV-2026-023-detalles-aplazados-s03-sin-retorno-y-sin-fila-para-validacion-de-referencias.md)

## Preguntas pendientes

Ver el checkpoint [B012](blocks/B012.md).

## Cobertura y límites

Ver el checkpoint [B012](blocks/B012.md). Sin fuentes externas necesarias para
este hallazgo; el contraste es interno. Las referencias externas de ADR-002
(l. 155-159) no se consultaron: corresponden al bloque del ADR.
