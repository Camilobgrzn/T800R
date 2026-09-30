# Anotación de revisión

- ID de anotación: `REV-2026-093`
- Unidad y ubicación: `S07` — [«Decisiones», fila «Metadatos comunes»](../definition/session-07-knowledge.md#decisiones)
  (l. 48) y [ADR-006 «Decisión» punto 3](../adr/ADR-006-modelo-portable-de-conocimiento.md#decisión)
  (l. 54-57), frente a [S05 l. 71](../definition/session-05-handoffs.md#decisiones),
  [S06 l. 57](../definition/session-06-context.md#decisiones) y
  [ADR-005 l. 118-119](../adr/ADR-005-contrato-portable-de-contexto.md#puntos-abiertos).
  Destino fuera del alcance usado como evidencia: S08 l. 81, 84-86, 90,
  214, 222-228, 243-249; ADR-007 l. 86-91. Cruce `CT03`.
- Revisión examinada: estado de los archivos al 2026-09-25 (repositorio sin
  commits; S07 y ADR-006 fechados 2026-09-21; S08 cerrada 2026-09-22). Citas
  distintivas: «`generated`, `verified`, `stale_after`, relaciones y aliases son
  condicionales … La identidad portable y su mapeo a la identidad por ruta de
  OKF se completarán en la sesión 8» (S07 l. 48); «Un alias declara proveedor,
  adapter y revisión, … objetivo `actor_id` o `execution_id`» (S08 l. 84).
- Tipo: `incompleto`
- Gravedad: `baja`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos textuales (búsqueda de «alias» en
  `docs/definition/` y `docs/adr/`); `media` sobre el efecto, porque los aliases
  de entrada pueden ser sólo sinónimos de búsqueda sin valor de resolución.
- Impacto: si el campo condicional «aliases» de una entrada de conocimiento es
  un sinónimo para descubrimiento o un nombre resoluble, y en el segundo caso
  con qué reglas (unicidad, vigencia, ámbito, conflicto). S08 prohíbe resolver
  identidades de actor por nombre (l. 86) y exige mapeo único y vigente (l. 84),
  pero no extiende esas reglas al conocimiento, cuyas referencias sólo resuelven
  por `knowledge_id` e identidad OKF (l. 90, 243-248). Afecta a lo que el schema
  `knowledge-entry` (S11 l. 115) debe tipar y a si un resolvedor puede aceptar un
  alias en lugar de `knowledge_id`. No cambia ninguna fila aceptada.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión exclusivamente interna).
- Fuente primaria: `docs/definition/session-07-knowledge.md:40-62`;
  `docs/adr/ADR-006-modelo-portable-de-conocimiento.md:46-99`;
  `docs/definition/session-05-handoffs.md:71, 84-89`;
  `docs/definition/session-06-context.md:57`;
  `docs/adr/ADR-005-contrato-portable-de-contexto.md:118-119` (por
  `REV-2026-084`); `docs/definition/session-08-portability.md:81-92, 206-249`;
  `docs/adr/ADR-007-contrato-de-capacidades-y-adapters-portables.md:86-91`.
- Sección o localizador: ver «Unidad y ubicación».
- Fecha de consulta/publicación: consulta 2026-09-25.
- Hecho observado:
  1. **«Aliases» nombra tres cosas distintas en el alcance.** S05 l. 71: «Los
     identificadores locales de proveedor serán aliases del adapter, no
     identidad canónica» (actores). S06 l. 57: «La identidad lógica y los
     aliases concretos del context packet» (`deferred` → sesión 8). S07 l. 48 y
     ADR-006 l. 56-57: «aliases» como metadato condicional de una entrada de
     conocimiento, sin definición, ejemplo ni regla.
  2. **El destino sólo define aliases de actor y ejecución.** S08 l. 84 y
     l. 222-228 fijan el contenido de un alias (proveedor, adapter, ámbito,
     identificador local, identidad de destino, vigencia, evidencia) con
     objetivo «`actor_id` o `execution_id`»; ADR-007 punto 8 (l. 86-88) lo
     resume igual. La sección de conocimiento de S08 (l. 230-249) y ADR-007
     punto 9 (l. 89-91) resuelven referencias sólo por `knowledge_id`,
     revisión e identidad OKF, con relaciones de sucesión; no mencionan
     aliases. La búsqueda de «alias» en S08 devuelve l. 10, 33, 46, 64, 81,
     84, 85, 124, 214, 222, 224 y 403: todas tratan aliases de proveedor,
     actor o ejecución, o los nombran de forma genérica (el cierre de l. 403
     enumera «identidad de actores y conocimiento, aliases» como cubiertos).
  3. **La remisión de S07 se recibió sin este campo.** S07 l. 48 envía «la
     identidad portable y su mapeo» a la sesión 8 en la misma fila que declara
     los aliases; ADR-006 l. 95-97 marca ese punto resuelto «mediante identidad
     dual y referencias `exact`/`current`». Ni S07, ni ADR-006, ni S08 dicen si
     los aliases de entrada forman parte de la identidad, de la navegación o de
     ninguna de las dos. Para el packet, `REV-2026-084` hecho 2 ya registra que
     sus aliases se marcan resueltos sin tratamiento; aquí se trata sólo la
     entrada.
  4. **OKF no aporta el significado.** Según la comprobación de `B027` sobre
     OKF `SPEC.md` §2 en el commit fijado, OKF identifica por ruta, sin campo
     de identificador ni de aliases; el campo es una adición de T800R (pista
     del tracker, entrada de `B027`). No se reconsultó la fuente.
- Inferencia (si aplica): sin semántica, un adapter o un motor de recuperación
  puede tratar un alias como nombre resoluble y dirigir una referencia a otra
  entrada. Las garantías que S08 construyó contra la resolución por nombre para
  actores (l. 84, 86) no cubrirían ese caso. Si los aliases son sólo sinónimos
  de búsqueda, falta decirlo para que el schema no los trate como identidad.

## Observación y propuesta

- Observación: el perfil de conocimiento declara un metadato «aliases» cuyo
  significado no fija ninguna unidad. La única definición de alias del canon,
  en el destino de la remisión, se limita a actores y ejecuciones.
- Propuesta concreta: que la persona decida (a) si los aliases de entrada son
  sinónimos de descubrimiento sin valor de resolución (y lo diga S07 l. 48 o una
  nota de S08 l. 230-249), o nombres resolubles sujetos a las reglas de S08
  l. 84 (único, vigente, con ámbito y diagnóstico ante conflicto); (b) si el
  término se reserva para identificadores locales de proveedor (S05 l. 71,
  S08 l. 84) y el metadato de la entrada se renombra; (c) enlazar la
  resolución con `REV-2026-084` hecho 2 para el packet.
- Contraargumento o coste/riesgo: puede sostenerse que un metadato condicional
  sin semántica es inocuo mientras las referencias usen `knowledge_id` (S08
  l. 90), y que su detalle corresponde al schema `knowledge-entry` de S11. Pero
  S11 no fija campos del schema y la regla de no resolver por nombre es de
  producto, no de arquitectura. El coste es una frase.

## Análisis adicional

- Evidencia interna: hechos 1-4; pregunta 1 de [CT01](blocks/CT01.md), que
  esta anotación eleva con la evidencia de S08;
  [`REV-2026-084`](2026-09-25-REV-2026-084-puntos-abiertos-de-adr-005-sintaxis-y-evaluador-de-condiciones-de-carga-sin-recepcion-en-s11-e-identidad-del-packet-marcada-resuelta-en-s08.md)
  hecho 2 (aliases del packet);
  [`REV-2026-062`](2026-09-25-REV-2026-062-cierre-s07-omite-contrato-logico-de-portabilidad-declara-explicito-lo-que-rev-059-061-cuestionan-e-identidad-como-diferimiento-tecnologico.md)
  (identidad y aliases en el cierre de S07).
- Contraevidencia y límites: S08 l. 214 incluye «aliases locales necesarios
  para entrega, reanudación o diagnóstico» en la referencia portable general,
  que podría leerse como aplicable a cualquier objeto; pero l. 222-228 fijan
  como objetivo sólo actores y ejecuciones. S08 y S11 están fuera del alcance
  autorizado y se usan como destino; si S08 cambia (en curso según la decisión
  de la persona sobre `B001`), el hecho 2 debe recomprobarse.
- Pregunta para resolver: ¿qué son los aliases de una entrada de conocimiento,
  se pueden resolver, y con qué reglas?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [CT03](blocks/CT03.md), [CT01](blocks/CT01.md)
