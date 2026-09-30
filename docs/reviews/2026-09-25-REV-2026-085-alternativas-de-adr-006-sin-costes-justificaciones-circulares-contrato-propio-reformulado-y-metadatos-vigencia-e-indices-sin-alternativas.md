# Anotación de revisión

- ID de anotación: `REV-2026-085`
- Unidad y ubicación: `ADR-006` — [«Alternativas evaluadas»](../adr/ADR-006-modelo-portable-de-conocimiento.md#alternativas-evaluadas),
  «Formas de taxonomía» y «Posición de Hindsight»
  (`docs/adr/ADR-006-modelo-portable-de-conocimiento.md:19-44`), frente a
  [S07](../definition/session-07-knowledge.md) l. 18-19, 40-41, 45, 47, 51 y 54,
  a la [investigación de OKF](../research-open-knowledge-format.md) l. 20-25,
  40-44, 48, 78-81 y 85-89, a [S08](../definition/session-08-portability.md)
  l. 87-88, a [S06](../definition/session-06-context.md) l. 108 y a
  `AGENTS.md` l. 33-35. Bloque `B044`.
- Revisión examinada: estado de los archivos al 2026-09-25 (repositorio sin
  commits; ADR-006 fechado 2026-09-21, «Aceptada»; S07 cerrada el 2026-09-21;
  S08 cerrada el 2026-09-22). Citas distintivas: «| Alternativa | Resultado |»
  (l. 21, 29, 40); «Contrato propio mapeable a OKF. | **Rechazada.** Crearía un
  contrato aislado en lugar de usar OKF como base lógica.» (l. 24); «OKF sólo
  como vista de importación y exportación. | **Rechazada.** La vista derivada no
  sería el modelo principal aceptado.» (l. 25).
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos textuales; `media` sobre el impacto
- Impacto: qué costes y riesgos aceptó T800R al adoptar como base lógica una
  especificación externa en versión 0.2 y cuáles descartó con las otras dos
  opciones. Afecta también a qué alternativas de metadatos, vigencia e
  indexación constan como descartadas y dónde. Es la decisión transversal más
  dependiente de un tercero entre ADR-001 y ADR-006, y la única cuyas tablas no
  registran criterio alguno. No cambia ningún acuerdo.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión y tensión exclusivamente internas;
  los hechos externos sobre OKF proceden de la investigación interna y de la
  especificación ya comprobada en `B027`, y no se usan como fuente nueva).
- Fuente primaria: `docs/adr/ADR-006-modelo-portable-de-conocimiento.md:1-106`
  (leído completo); `docs/definition/session-07-knowledge.md:1-123` (leída
  completa); `docs/research-open-knowledge-format.md:1-124` (leída completa);
  `docs/definition/session-08-portability.md:3, 86-88, 112-115`;
  `docs/definition/session-06-context.md:108` (por búsqueda de «SDLC»);
  cabeceras de tabla de alternativas de ADR-001 a ADR-010 (por búsqueda de
  «^## |^\| Alternativa» y lectura de ADR-001 l. 41-46); `AGENTS.md:33-36`.
- Sección o localizador: ver «Unidad y ubicación».
- Fecha de consulta/publicación: consulta 2026-09-25; ADR-006 y S07 fechados
  2026-09-21; investigación de OKF con consulta del 2026-09-14.
- Hecho observado:
  1. **Tablas sin criterios ni costes.** Las tres tablas de l. 19-44 tienen sólo
     las columnas «Alternativa | Resultado» (l. 21, 29, 40). ADR-006 es el único
     de los diez ADR con esa forma. ADR-001 (l. 43) usa «Autonomía y
     continuidad | Adopción y portabilidad»; ADR-002 (l. 46), «Continuidad y
     autoridad | Coste»; ADR-003 (l. 37), «Beneficio | Coste o riesgo»; y
     ADR-004, 005, 007, 008, 009 y 010, «Beneficios | Costes y riesgos».
     `AGENTS.md` l. 33-34 pide evaluar alternativas «mediante criterios
     explícitos, beneficios, costes y riesgos». La opción aceptada no declara
     ningún coste en l. 23, 31 ni 43.
  2. **Las razones del rechazo repiten la decisión.** l. 24: «Crearía un
     contrato aislado en lugar de usar OKF como base lógica»; l. 25: «La vista
     derivada no sería el modelo principal aceptado»; l. 32: «El perfil
     aceptado debe ser extensible por proyecto»; l. 33: «La clasificación es
     semántica y portable»; l. 44: «Puede utilizarse sin convertirse en
     autoridad paralela». Cada razón enuncia lo que la opción aceptada es, no
     un coste o riesgo de la rechazada. La de l. 44 dice por qué excluir no es
     necesario, no por qué es peor.
  3. **Los costes que la base interna sí registra no aparecen.** La
     investigación enlazada por el propio ADR (l. 106) atribuye a la opción OKF
     el coste «Fijar versión, mapear autoridad/aplicabilidad y distinguir
     conformidad de aptitud para una tarea» (l. 88). También registra dos
     cambios incompatibles entre v0.1 y v0.2 («no asumir compatibilidad por el
     número menor», l. 40-44); v0.1 anunciada el 2026-06-12 y el commit v0.2
     fechado el 2026-08-21 (l. 20-25); una implementación de referencia que es
     «prueba de concepto» (l. 48); y ninguna evidencia de adopción en los casos
     consultados (l. 78-81). S07 l. 41 convierte ese riesgo en regla de
     migración. Para las opciones rechazadas, la investigación anota
     «Ajuste directo al contrato del proyecto» (l. 87) y «Adopción gradual en
     repositorios existentes» (l. 89). Nada de esto consta en l. 19-44.
  4. **Un beneficio de la opción aceptada quedó matizado al día siguiente.**
     l. 23 (y S07 l. 40) dice que el perfil «Reutiliza identidad». S08, cerrada
     el 2026-09-22, rechaza «Usar la ruta OKF como única identidad portable»
     porque «una reorganización editorial rompería toda continuidad» (l. 88) y
     añade un `knowledge_id` propio junto a la identidad OKF (l. 87). La
     identidad OKF se reutiliza como un componente, no como identidad portable.
     El ADR no registra ese coste (identidad dual). El punto abierto l. 95-97,
     marcado resuelto, queda para `B045`.
  5. **La alternativa rechazada no es la de la pregunta ni la de la
     investigación.** S07 l. 18-19 pregunta por «un contrato propio inspirado
     en OKF». La investigación compara «Convenciones propias de conocimiento,
     sin compatibilidad OKF» (l. 87). ADR-006 l. 24 rechaza «Contrato propio
     mapeable a OKF». La razón «Crearía un contrato aislado» se ajusta a la
     opción sin compatibilidad, pero no se sigue para una opción «mapeable»,
     cuyo rasgo definitorio es no quedar aislada. Son tres formulaciones de la
     misma opción.
  6. **Las preguntas 3-5 de S07 no tienen alternativas; una de las que sí
     figuran viene de S06.** Las tablas cubren perfil (pregunta 1), forma de
     taxonomía (pregunta 2) y Hindsight (pregunta 6). S07 descarta opciones en
     filas `accepted` que el ADR no recoge: el «esquema universal» y «el mínimo
     de OKF» (l. 47), la «caducidad universal» (l. 51), la revisión humana
     «para toda promoción» (l. 45) y los índices derivados como sustitutos
     (l. 54). En cambio, «Taxonomía ligada a etapas SDLC o a un proveedor»
     (l. 33) no tiene texto en S07: «SDLC» no aparece en la unidad. Su
     correlato es S06 l. 108 («Los tipos describen semántica, no etapas SDLC
     ni proveedores»), que trata de las secciones del packet.
- Inferencia (si aplica): la tabla documenta qué se eligió, no por qué ni a qué
  precio. El riesgo principal, depender de un formato externo en 0.2 con
  cambios incompatibles recientes, sólo aparece en S07 l. 41 como regla y en la
  investigación como coste. El ADR que debe justificar la decisión «difícil de
  revertir» (`AGENTS.md` l. 71-72) no lo pondera.

## Observación y propuesta

- Observación: es el patrón de alternativas débiles de `REV-2026-064`, `067`,
  `071`, `078` y `082`, en su forma más extrema: sin columnas de criterio, con
  razones circulares y con un coste documentado por la propia base enlazada que
  no se transcribe.
- Propuesta concreta: que la persona decida si (a) las tablas de l. 21-44
  añaden «Beneficios» y «Costes y riesgos» como ADR-004/005/007-010,
  trasladando como mínimo los de la investigación (l. 87-89) y el riesgo de
  versión de S07 l. 41; (b) la alternativa l. 24 se alinea con la pregunta de
  S07 («inspirado en OKF») o con la investigación («sin compatibilidad»), o se
  justifica por qué un contrato «mapeable» queda aislado; (c) el beneficio
  «Reutiliza identidad» se matiza con la identidad dual de S08; y (d) las
  alternativas de metadatos, vigencia e indexación de S07 l. 45, 47, 51 y 54 se
  registran en el ADR o se declara que viven sólo en la unidad. No editar
  ADR-006 ni S07 sin esa decisión.
- Contraargumento o coste/riesgo: S07 es la fuente canónica y la investigación
  está enlazada desde «Referencias» (l. 106), de modo que los costes son
  recuperables. El ADR es breve por diseño. La regla de migración de S07 l. 41
  mitiga el riesgo de versión aunque el ADR no la pondere (su ausencia en la
  «Decisión» es contraste de `B045`). Añadir las columnas cuesta unas líneas.
  El riesgo de no hacerlo es que una revisión posterior de OKF (por ejemplo,
  una v0.3 o la migración de repositorio que la investigación l. 123 menciona)
  se enfrente a un ADR sin coste aceptado registrado contra el que comparar.

## Análisis adicional

- Evidencia interna: hechos 1-6 con sus localizadores. `REV-2026-058` hecho 3
  (seis alternativas sin fila `rejected` en S07) se enlaza sin duplicar: aquí
  se examina el contenido de las filas, no su estado. `REV-2026-055` hecho 3
  (S07 no enlaza la investigación) se atenúa desde el ADR: éste sí la enlaza
  (l. 106), pero no la usa en las alternativas.
- Contraevidencia y límites: no se comprobó el estado actual del repositorio de
  OKF (versión vigente o migración). La afirmación sobre la migración procede
  de la investigación l. 21-22 y 123, no de una consulta de esta pasada. Que
  v0.2 tenga cambios incompatibles lo confirmó `B027` en la especificación
  fijada (§13.1). La lectura de «mapeable» como no aislada es inferencia; el
  ADR puede entender «aislado» como «semántica propia no compartida».
- Pregunta para resolver: ¿qué costes y riesgos aceptó T800R al adoptar OKF
  v0.2 como base lógica, y deben constar en ADR-006 junto con los beneficios de
  las opciones rechazadas y las alternativas de metadatos, vigencia e
  indexación que S07 descarta?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B044](blocks/B044.md), [B027](blocks/B027.md);
  [`REV-2026-055`](2026-09-24-REV-2026-055-apertura-s07-frente-al-indice-front-matter-y-caducidad-sustituidos-remisiones-de-s03-adr-001-adr-002-adr-003-s06-y-adr-005-recibidas-sin-acuse-y-commit-de-okf-sin-enlace-a-la-investigacion.md),
  [`REV-2026-058`](2026-09-24-REV-2026-058-aplazamientos-embebidos-en-filas-accepted-de-s07-sin-rejected-frente-a-seis-alternativas-de-adr-006-y-punto-abierto-marcado-resuelto-con-adr-007-posterior.md),
  [`REV-2026-064`](2026-09-25-REV-2026-064-alternativas-de-adr-001-sin-coordinacion-opcion-aceptada-peor-en-adopcion-y-portabilidad-sin-objetivo-s01.md),
  [`REV-2026-067`](2026-09-25-REV-2026-067-alternativas-de-adr-002-sin-estado-sin-fila-en-s03-y-disjuntas-de-las-opciones-descartadas-en-las-justificaciones-de-s03.md),
  [`REV-2026-071`](2026-09-25-REV-2026-071-alternativas-de-adr-003-sin-estado-sin-fila-rejected-en-s04-sin-opciones-de-ownership-y-aprobacion-por-etapa-frente-a-gates-del-proyecto.md),
  [`REV-2026-078`](2026-09-25-REV-2026-078-glosario-y-contexto-de-adr-004-excluyen-el-handoff-del-mismo-actor-omiten-la-revision-humana-y-alternativa-conversacional-sin-fila-en-s05.md),
  [`REV-2026-082`](2026-09-25-REV-2026-082-glosario-y-contexto-de-adr-005-homonimos-packet-y-adapter-handoff-custodio-de-ownership-y-alternativa-adapter-libre-sin-rejected.md);
  cruces `CT03`, `CT06` y `CT07`.

## Preguntas pendientes

Ver el checkpoint [B044](blocks/B044.md).

## Cobertura y límites

Ver el checkpoint [B044](blocks/B044.md). Sin fuentes externas nuevas en esta
anotación.
