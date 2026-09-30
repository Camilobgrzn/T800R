# Anotación de revisión

- ID de anotación: `REV-2026-019`
- Unidad y ubicación: `S03-registro-asistido-de-fuentes` —
  [session-03-sources-of-truth.md, «Registro asistido de fuentes»](../definition/session-03-sources-of-truth.md#registro-asistido-de-fuentes)
  (l. 154-176) y
  [«Fuentes incorporables por proyecto»](../definition/session-03-sources-of-truth.md#fuentes-incorporables-por-proyecto)
  (l. 145-152)
- Revisión examinada: 2026-09-21; repositorio sin commits. Citas distintivas: «El
  registro se construye y mantiene de forma colaborativa» (l. 156); «no se exige
  a la persona completar manualmente todos los metadatos» (l. 164-165); «T800R
  puede consultar y conservar referencias concretas autónomamente» (l. 170-171)
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `media`
- Impacto: el registro de fuentes es una capa canónica con autoridad sobre
  «ámbitos y criterios de autoridad». Si el agente puede escribir en él sin que
  conste qué parte fijó la persona y qué parte completó el agente, el límite «la
  persona fija criterios, T800R opera dentro de ellos» deja de ser comprobable en
  el propio registro y una inferencia del agente puede adquirir autoridad por el
  hecho de estar registrada.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión exclusivamente interna)
- Fuente primaria: `docs/definition/session-03-sources-of-truth.md` l. 35, 56,
  145-152, 154-176 y, como dependencia, l. 237
- Sección o localizador: «Decisiones» (fila del registro asistido),
  «Distribución canónica inicial» (fila «Registro de fuentes»), «Fuentes
  incorporables por proyecto», «Registro asistido de fuentes», «Detalles
  aplazados»
- Fecha de consulta/publicación: consulta 2026-09-21; acuerdos confirmados el
  2026-09-14 según la cabecera de la unidad
- Hecho observado:
  1. El registro es capa canónica: tiene autoridad sobre «Referencias
     disponibles, ámbitos y criterios de autoridad, versiones aplicables y formas
     de acceso» (l. 56) y «declara el ámbito y los criterios de autoridad
     acordados con la persona» (l. 147-148).
  2. Escriben en él las dos partes. La persona «puede aportar una fuente o
     expresar la necesidad de una referencia» (l. 156-157); T800R «ayuda a
     completar la información necesaria» (l. 157-158), no se exige a la persona
     «completar manualmente todos los metadatos» (l. 164-165) y T800R «puede
     consultar y conservar referencias concretas autónomamente» dentro de lo
     autorizado (l. 170-171). Entre lo que se completa figuran «ámbito y papel» y
     «versión aplicable» (l. 162-163), que son precisamente los datos con los que
     se resuelven las discrepancias (l. 150-151).
  3. El rango no indica qué acto de la persona hace efectiva una entrada o un
     campo completado por el agente, ni que el registro distinga lo propuesto de
     lo confirmado, ni quién aportó cada dato. El único rastro previsto es
     «conservar evidencia al utilizar la fuente» (l. 163-164), que documenta el
     uso, no la incorporación.
  4. Cuando la persona sólo «expresa la necesidad de una referencia», es el
     agente quien localiza la fuente. La autorización por categoría («documentación
     oficial de dependencias en sus versiones aplicables», l. 173-174) deja en el
     agente decidir qué documento pertenece a la categoría y cuál es su origen
     «oficial»; el rango no pide comprobar la identidad del origen ni del canal
     de acceso (RAG o MCP, l. 140-141), aunque separa autoridad y forma de acceso
     (l. 148).
  5. «Detalles aplazados» difiere «Esquema del registro, campos obligatorios y
     mecanismos de consulta de fuentes» y afirma que «Ámbitos, criterios de
     autoridad y distinción frente al acceso están acordados» (l. 237). No figura
     como aplazado quién puede escribir cada parte del registro ni la procedencia
     de sus entradas.
- Inferencia (si aplica): con los textos leídos, una entrada cuyo ámbito o papel
  redactó el agente y nadie confirmó es indistinguible de un criterio acordado
  con la persona. No está demostrado que S07, S08 o S10 no lo resuelvan al
  concretar el esquema.

## Observación y propuesta

- Observación: «asistido» describe bien el diálogo (el agente pregunta, la
  persona aclara para qué sirve la fuente), pero no el resultado: no fija qué
  aprueba la persona ni cuándo una entrada empieza a valer. El problema es propio
  de este bloque y distinto de
  [`REV-2026-018`](2026-09-21-REV-2026-018-quien-define-criterios-de-autoridad-y-como-se-audita-el-limite.md),
  que pregunta qué persona designa autoridad y cómo se audita la cobertura de un
  uso; aquí se trata de los permisos de escritura y la procedencia dentro del
  propio registro.
- Propuesta concreta: decidir si S03 (o la sesión que concrete el esquema) debe
  recoger como invariante, no como campo opcional: (a) que ámbito, papel y
  criterio de autoridad sólo valen tras confirmación de la persona, mientras que
  origen, acceso y referencias concretas puede completarlos el agente; (b) que
  cada entrada conserve quién aportó o confirmó cada dato y cuándo; (c) que una
  entrada por categoría registre qué documentos concretos se usaron bajo ella,
  con su origen comprobado. Si se prefiere no tocar S03, añadir la cuestión a
  «Detalles aplazados» con punto de resolución.
- Contraargumento o coste/riesgo: el esquema está diferido (l. 237) y la
  procedencia puede resolverse allí; si el registro es un archivo versionado, el
  historial de Git ya aporta autoría (no comprobado: S03 no presupone rutas ni
  herramientas). Exigir confirmación por campo aumenta la fricción que el
  registro asistido quería evitar (l. 35, 164-165).

## Análisis adicional

- Evidencia interna: l. 56 frente a l. 156-158 y 170-171 (capa con autoridad
  frente a escritura compartida); l. 169 («La colaboración humana establece los
  criterios de autoridad») frente a l. 162-165 (el agente completa «ámbito y
  papel»); l. 237 (lo aplazado no incluye permisos de escritura ni procedencia).
- Contraevidencia y límites: l. 171-172 obliga a aclarar con la persona cuando
  «incorporar una fuente como autoridad» no está cubierto, lo que puede leerse
  como confirmación implícita de toda entrada con autoridad; esa lectura no
  cubre los campos que el agente completa en una entrada ya aportada por la
  persona, ni la pertenencia a una categoría. No se leyeron S07, S08, S10 ni
  ADR-002 salvo una coincidencia textual (ADR-002 l. 83 enumera «Origen, ámbito,
  papel, versión aplicable, acceso y criterios de autoridad», sin procedencia de
  la entrada). Corresponde a `CT01` contrastarlo con handoffs, contexto y
  conocimiento.
- Pregunta para resolver: ¿qué datos del registro puede escribir T800R por sí
  solo, cuáles requieren confirmación de la persona para surtir efecto, y cómo
  queda constancia de quién aportó cada uno?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B010](blocks/B010.md),
  [`REV-2026-018`](2026-09-21-REV-2026-018-quien-define-criterios-de-autoridad-y-como-se-audita-el-limite.md),
  [`REV-2026-015`](2026-09-21-REV-2026-015-aplazamientos-s02-sin-retorno-y-divergentes-de-adr-001.md)

## Preguntas pendientes

Ver el checkpoint [B010](blocks/B010.md).

## Cobertura y límites

Ver el checkpoint [B010](blocks/B010.md). Sin fuentes externas consultadas: el
rango menciona Microsoft Learn, RAG y MCP como ejemplos, no como evidencia.
