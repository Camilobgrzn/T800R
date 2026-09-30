# Anotación de revisión

- ID de anotación: `REV-2026-095`
- Unidad y ubicación: `S03` — [Decisiones](../definition/session-03-sources-of-truth.md#decisiones)
  (l. 37) y [Distribución canónica inicial](../definition/session-03-sources-of-truth.md#distribución-canónica-inicial)
  (l. 53-54), [Contexto efímero y persistencia](../definition/session-03-sources-of-truth.md#contexto-efímero-y-persistencia)
  (l. 91-97); frente a `S02` — [Decisiones](../definition/session-02-limits.md#decisiones)
  (l. 38-40) y [Modelo de interacción](../definition/session-02-limits.md#modelo-de-interacción-acordado-para-desarrollo-de-software)
  (l. 64-74, 86-87); [ADR-001, «Decisión»](../adr/ADR-001-autonomia-y-responsabilidades.md#decisión)
  puntos 1, 2 y 4 (l. 72-84); [ADR-002, «Decisión»](../adr/ADR-002-fuentes-canonicas-y-conocimiento.md#decisión)
  puntos 1 y 8 (l. 76-79, 112-116). Cruce `CT04`.
- Revisión examinada: estado de los cuatro archivos al 2026-09-25; repositorio
  sin commits, huella no disponible. S02 y S03 confirmadas el 2026-09-14;
  ADR-001 y ADR-002 fechados 2026-09-14 y editados después (marcas de l. 116 y
  l. 136-144).
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `media` (alta sobre los hechos; media sobre el impacto, porque
  S11/S12 podrían fijar un campo de origen como detalle de construcción; no se
  encontró por búsqueda)
- Impacto: si un agente que retoma el trabajo puede saber, desde lo persistido,
  si una decisión técnica registrada fue **acordada con la persona** —y
  cambiarla exige consultar (S02 l. 86-87; ADR-001 punto 4)— o fue **tomada por
  T800R dentro de lo delegado** —y puede ajustarla autónomamente (S02 l. 40;
  S04 l. 79)—. De esa distinción depende que el límite de autonomía de S02 y
  ADR-001 sea aplicable y auditable a posteriori.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión exclusivamente interna; no requiere
  fuente externa según [README](README.md))
- Fuente primaria: `docs/definition/session-02-limits.md` l. 38-40, 64-74,
  86-87; `docs/adr/ADR-001-autonomia-y-responsabilidades.md` l. 72-84;
  `docs/definition/session-03-sources-of-truth.md` l. 36-37, 53-54, 91-97;
  `docs/adr/ADR-002-fuentes-canonicas-y-conocimiento.md` l. 76-79, 90-94,
  112-116; como destino (fuera del eje del cruce, evidencia de uso):
  `docs/definition/session-04-operating-cycle.md` l. 79, 83-85, 240-242;
  `docs/definition/session-01-vision.md` l. 165
- Sección o localizador: los indicados arriba
- Fecha de consulta/publicación: consulta 2026-09-25
- Hecho observado:
  1. **S02 y ADR-001 crean dos clases de decisión técnica con reglas de cambio
     distintas.** Acordadas: «Los acuerdos técnicos forman parte de los límites
     que T800R debe respetar» (S02 l. 39); «Estos acuerdos técnicos limitan las
     decisiones autónomas posteriores» (l. 69); «modificarlos requiere volver a
     la persona» (l. 86-87); ADR-001 punto 4: «Consulta por cambios de alcance o
     acuerdos técnicos» (l. 82). Delegadas: T800R «resuelve los detalles
     delegados sin aprobación adicional de cada plan técnico» (S02 l. 40, 73);
     ADR-001 punto 1: la persona puede «delegar los detalles que prefiera»
     (l. 73-74) y punto 2 (l. 76-77).
  2. **S03 y ADR-002 asignan capas por tipo de información, no por origen de
     la decisión.** Especificaciones: «Qué construir, restricciones funcionales
     y técnicas y criterios de aceptación acordados» (S03 l. 53); ADRs:
     «Decisiones relevantes y sus razones» (l. 54), sin autor ni condición de
     confirmación; ADR-002 l. 78-79 reproduce ambas filas. La tabla de
     persistencia sólo prevé «Cambio de requisito confirmado → Especificación o
     decisión correspondiente» (S03 l. 93); ADR-002 punto 8: «acuerdos en
     especificaciones o decisiones» (l. 113). Ninguna fila, capa ni atributo
     registra qué se delegó, ni distingue una decisión técnica tomada por T800R
     bajo delegación de un acuerdo técnico de la persona.
  3. **Las decisiones delegadas sí se escriben en esas capas.** S01 define
     «Spec» a escala de tarea o cambio (l. 165); S02 l. 31 hace que T800R
     prepare y descomponga el plan; S04 (destino) sitúa la vinculación de
     «decisiones técnicas y ADRs en design» (l. 241) y exige, para `readiness`,
     «decisiones técnicas indispensables tomadas o explícitamente delegadas»
     (l. 83), con ejecución autónoma posterior de «las decisiones técnicas
     delegadas» (l. 84).
  4. **S04 opera ya con la distinción sin darle registro.** «T800R ajusta
     autónomamente implementación, diseño o tareas dentro de lo delegado; si
     cambia … una decisión técnica acordada, reabre colaboración humana» (l. 79);
     consulta si necesita cambiar «una decisión técnica acordada» (l. 85).
     Búsqueda de «delegad» en `docs/definition/` y `docs/adr/`: sólo S02 l. 40,
     73; S04 l. 79, 83, 84, 147, 218; S07 l. 50 (curación, otro asunto). Ningún
     ADR contiene el término.
- Inferencia (si aplica): un agente que lee una especificación o un ADR
  persistido no puede determinar si la decisión es acordada (consultar antes de
  cambiarla) o delegada (ajustable). Las dos lecturas extremas fallan: tratar
  todo como acordado impide el ajuste autónomo que S02 l. 40 y S04 l. 79
  conceden; tratar como delegado lo que no consta como acordado permite cambiar
  acuerdos sin consulta, que S03 l. 36 («sin … modificar implícitamente las
  reglas del proyecto») y S02 l. 86-87 prohíben. La distinción sólo aparece al
  cruzar S02/ADR-001 (reglas de cambio) con S03/ADR-002 (dónde vive cada cosa).

## Observación y propuesta

- Observación: el defecto no está en ninguno de los cuatro documentos por
  separado: S02/ADR-001 definen bien la frontera de autonomía y S03/ADR-002
  asignan bien la autoridad por tipo. Falta el enlace: el modelo de información
  no conserva el dato del que depende la frontera. Es el mismo tipo de laguna
  de verificabilidad que [`REV-2026-018`](2026-09-21-REV-2026-018-quien-define-criterios-de-autoridad-y-como-se-audita-el-limite.md)
  señala para los criterios de autoridad de fuentes y que
  [`REV-2026-020`](2026-09-21-REV-2026-020-tabla-de-persistencia-sin-destino-para-lo-no-confirmado.md)
  señala para lo no confirmado, aplicado ahora a las decisiones confirmadas y
  delegadas.
- Propuesta concreta: que la persona decida si (a) toda decisión técnica
  registrada en especificaciones o ADRs declara su origen (acordada con la
  persona / delegada a T800R, con referencia a la delegación) y cuál es el
  valor por defecto si falta; (b) la delegación misma («los detalles que
  prefiera», ADR-001 punto 1) se persiste como parte de la definición
  confirmada, en qué capa; (c) una decisión delegada pasa a «acordada» al ser
  presentada en `readiness` y autorizado el incremento (S04 l. 82-84) o conserva
  su carácter delegado. Registrar la respuesta en S03 (o en la sesión que la
  reciba) y reflejarla en ADR-002 punto 1, sin editar el canon antes de esa
  decisión.
- Contraargumento o coste/riesgo: puede entenderse que las especificaciones
  sólo contienen lo acordado (l. 53 «acordados») y que lo delegado vive en el
  diseño o el código, sin autoridad de acuerdo; entonces bastaría declararlo.
  Pero S03 l. 54 no restringe los ADRs a decisiones humanas y S04 l. 241 sitúa
  ADRs en `design`, que T800R conduce. Un campo de origen añade coste de
  registro en cada decisión; la alternativa (a) con valor por defecto
  «acordada» es barata y conservadora. Git no resuelve el caso: registra quién
  hace el commit, no quién tomó la decisión.

## Análisis adicional

- Evidencia interna: S02 l. 38-40, 64-74, 86-87; ADR-001 l. 72-84; S03 l. 36-37,
  53-54, 91-97; ADR-002 l. 76-79, 112-116; S04 l. 79, 83-85, 241 (destino);
  S01 l. 165.
- Contraevidencia y límites: no se leyeron S09-S12 como objeto; la búsqueda
  de «delegad» no encontró recepción, pero un schema de S11 podría incluir un
  campo equivalente con otro nombre («autoridad», «origen»): no se comprobó
  catálogo a catálogo. [`REV-2026-029`](2026-09-24-REV-2026-029-ciclo-colaborativo-de-s04-sin-mapa-a-etapas-y-gates-confirmar-la-definicion-frente-a-autorizacion-por-incremento.md)
  y `B015` ya registran la lectura caritativa «la persona pacta lo delegado»,
  sin tratar su registro. No se afirma que la frontera sea errónea, sólo que no
  es comprobable desde lo persistido.
- Pregunta para resolver: ¿dónde y cómo queda registrado si una decisión
  técnica fue acordada con la persona o tomada por T800R dentro de lo
  delegado, y qué se presume cuando no consta?

## Preguntas pendientes

Ver el checkpoint [CT04](blocks/CT04.md).

## Cobertura y límites

Ver el checkpoint [CT04](blocks/CT04.md). Sin fuentes externas: el conflicto
es interno.

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [CT04](blocks/CT04.md),
  [`REV-2026-018`](2026-09-21-REV-2026-018-quien-define-criterios-de-autoridad-y-como-se-audita-el-limite.md),
  [`REV-2026-020`](2026-09-21-REV-2026-020-tabla-de-persistencia-sin-destino-para-lo-no-confirmado.md),
  [`REV-2026-029`](2026-09-24-REV-2026-029-ciclo-colaborativo-de-s04-sin-mapa-a-etapas-y-gates-confirmar-la-definicion-frente-a-autorizacion-por-incremento.md),
  [`REV-2026-065`](2026-09-25-REV-2026-065-decision-de-adr-001-omite-la-deteccion-de-riesgo-por-t800r-estrecha-la-no-sustitucion-y-reformula-harness-y-permisos-frente-a-s02.md),
  [`REV-2026-069`](2026-09-25-REV-2026-069-decision-de-adr-002-resume-s03-sin-limite-inequivoco-ni-deteccion-evidencia-sin-revision-humana-y-remisiones-sin-destino.md)
