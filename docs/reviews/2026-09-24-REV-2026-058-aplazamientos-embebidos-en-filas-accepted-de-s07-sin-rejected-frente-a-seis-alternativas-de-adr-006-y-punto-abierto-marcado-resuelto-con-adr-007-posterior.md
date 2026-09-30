# Anotación de revisión

- ID de anotación: `REV-2026-058`
- Unidad y ubicación: `S07` — [session-07-knowledge.md, «Decisiones»](../definition/session-07-knowledge.md#decisiones),
  filas «Perfil de representación» (l. 40), «Ubicación lógica» (l. 46),
  «Metadatos comunes» (l. 48) y «Hindsight en el MVP» (l. 56) y prosa l. 58-62,
  frente a la pregunta 1 (l. 18-19), a
  [ADR-006, «Alternativas evaluadas»](../adr/ADR-006-modelo-portable-de-conocimiento.md)
  (l. 21-25, 29-33, 40-44) y
  [ADR-006, «Puntos abiertos»](../adr/ADR-006-modelo-portable-de-conocimiento.md)
  (l. 93-99), y a `docs/product-definition.md` l. 128. Bloque `B027`.
- Revisión examinada: estado de los archivos al 2026-09-24; repositorio sin
  commits, huella no disponible. S07 cerrada el 2026-09-21 (l. 3); ADR-006
  fechado 2026-09-21, «Aceptada» (l. 3-4), y cita ADR-007 (fechado
  2026-09-22) en l. 97, por lo que fue editado después de su fecha sin nota.
  Citas distintivas: «la ruta y el almacenamiento físicos se decidirán
  posteriormente» (l. 46); «La identidad portable y su mapeo a la identidad
  por ruta de OKF se completarán en la sesión 8» (l. 48); «La compatibilidad
  lógica no impone todavía Markdown, rutas, almacenamiento ni servicios de
  Google» (l. 40); «Identidad portable y mapeo de identidad a la ruta de OKF →
  resueltos mediante identidad dual y referencias `exact`/`current` en sesión
  8 y [ADR-007]» (ADR-006 l. 95-97).
- Tipo: `incompleto`
- Gravedad: `baja`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos textuales; `media` sobre el efecto (S08 y
  ADR-007 sólo por fecha y líneas devueltas por búsqueda)
- Impacto: cuál es el inventario de aplazamientos de S07 —una fila `deferred`
  (l. 56), tres aplazamientos embebidos en filas `accepted` (l. 40, 46, 48) o
  la prosa l. 58-62 que el ADR reproduce—; si la convención
  `accepted`/`rejected`/`deferred` es uniforme entre sesiones cuando S07 no
  registra ninguna alternativa `rejected` mientras ADR-006 evalúa seis no
  adoptadas; y si el retorno de la identidad portable (S08/ADR-007) debe
  constar en la unidad, que hoy sólo lo tiene en el ADR editado tras su fecha
  y en el tracker de definición (l. 392). El índice l. 128 exige que «Una
  decisión aplazada incluirá un punto concreto de resolución». Afecta a `CT06`
  y `CT07`. No cambia el contenido de ninguna fila aceptada.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión exclusivamente interna; no se invoca
  ninguna fuente externa)
- Fuente primaria: `docs/definition/session-07-knowledge.md` l. 18-19, 38-56
  (recuento: 17 filas; 16 `accepted` l. 40-55; 1 `deferred` l. 56; 0
  `rejected`) y 58-62 (leídas); búsqueda en toda la unidad de «rejected»
  (ninguna), «deferred» (sólo l. 56), «posteriormente» (sólo l. 46), «sesión
  8» (l. 48, 59, 118), «sesión 11» (l. 56, 61, 119), «sesión 12|sesiones 11 y
  12» (l. 56, 62, 120); `docs/adr/ADR-006-modelo-portable-de-conocimiento.md`
  l. 3-4, 21-25, 29-33, 40-44, 93-99; `docs/adr/ADR-007-contrato-de-capacidades-y-adapters-portables.md`
  l. 3 (fecha, por `B026`); `docs/definition-tracker.md` l. 184-187 y 392 (por
  búsqueda); `docs/product-definition.md` l. 128; `docs/definition/session-06-context.md`
  l. 55, 59, 60 (filas `rejected`, por `B023`) y `docs/definition/session-05-handoffs.md`
  l. 55-56 (por `B019`).
- Sección o localizador: «Decisiones» de S07; «Alternativas evaluadas»,
  «Formas de taxonomía», «Posición de Hindsight» y «Puntos abiertos» de
  ADR-006; «Revisión transversal» del índice (l. 128).
- Fecha de consulta/publicación: consulta 2026-09-24; S07 cerrada el
  2026-09-21; ADR-006 fechado 2026-09-21 y editado después.
- Hecho observado:
  1. **Tres aplazamientos viven dentro de filas `accepted`; sólo uno tiene fila
     `deferred`.** L. 40 aplaza «Markdown, rutas, almacenamiento ni servicios
     de Google» sin destino; l. 46 aplaza «la ruta y el almacenamiento
     físicos» «posteriormente», sin sesión; l. 48 aplaza «La identidad
     portable y su mapeo a la identidad por ruta de OKF» a la sesión 8. La
     única fila `deferred` es Hindsight (l. 56). Los destinos completos
     constan sólo en la prosa l. 58-62 (sesión 8; sesión 11; sesiones 11 y
     12). Es el patrón de
     [`REV-2026-028`](2026-09-24-REV-2026-028-aplazamientos-embebidos-en-filas-accepted-de-s04-sin-fila-deferred-ni-destino-en-la-unidad.md)
     (S04) y de
     [`REV-2026-054`](2026-09-24-REV-2026-054-puntos-abiertos-de-adr-005-divergen-de-las-filas-deferred-de-s06-seccion-knowledge-y-representacion-fisica-sin-fila-y-destinos-ampliados.md)
     hecho 2 (S06: representación física sin fila), con la variante de que
     aquí la prosa sí da destinos.
  2. **El inventario del ADR es la prosa, no la tabla, y marca resuelto un
     punto con un ADR posterior.** ADR-006 «Puntos abiertos» (l. 95-99) tiene
     tres puntos que coinciden con l. 59-62 y no con la tabla (una fila
     `deferred`). L. 95-97 añade «resueltos mediante identidad dual y
     referencias `exact`/`current` en sesión 8 y [ADR-007]»; ADR-007 está
     fechado 2026-09-22, un día después del ADR (2026-09-21), sin nota de
     revisión (patrón de
     [`REV-2026-015`](2026-09-21-REV-2026-015-aplazamientos-s02-sin-retorno-y-divergentes-de-adr-001.md),
     [`REV-2026-025`](2026-09-24-REV-2026-025-puntos-abiertos-de-adr-002-divergen-de-detalles-aplazados-s03.md)
     y `REV-2026-054` hecho 3). S07 l. 48 y 59-60 no tienen marca de retorno;
     el tracker de definición l. 392 («La identidad portable quedó resuelta en
     la sesión 8») es la otra constancia, fuera de la unidad (patrón
     [`REV-2026-023`](2026-09-24-REV-2026-023-detalles-aplazados-s03-sin-retorno-y-sin-fila-para-validacion-de-referencias.md)).
  3. **Ninguna alternativa `rejected` en S07 frente a seis no adoptadas en el
     ADR.** La pregunta 1 (l. 18-19) plantea tres opciones (perfil compatible,
     contrato propio, OKF como vista); sólo la aceptada tiene fila (l. 40).
     ADR-006 registra «Rechazada» para «Contrato propio mapeable a OKF» (l. 24)
     y «OKF sólo como vista de importación y exportación» (l. 25), y «No
     adoptada/o» para «Taxonomía cerrada» (l. 32), «Taxonomía ligada a etapas
     SDLC o a un proveedor» (l. 33), «Hindsight obligatorio» (l. 42) y
     «Hindsight excluido» (l. 44). S05 (l. 55-56) y S06 (l. 55, 59, 60) sí
     registran filas `rejected`. La convención no es uniforme entre sesiones
     (pregunta 5 de [B014](blocks/B014.md); contraste 4 de
     [B019](blocks/B019.md)) y las razones del rechazo sólo existen en el ADR,
     que S07 enlaza únicamente en l. 123 como decisión.
- Inferencia (si aplica): quien lea la tabla de S07 verá dieciséis acuerdos y
  un diferido; los otros tres aplazamientos, el retorno de uno de ellos y las
  seis alternativas descartadas están en la prosa, en el ADR o en el tracker.

## Observación y propuesta

- Observación: S07 repite el patrón de aplazamientos embebidos y de
  inventario unidad/ADR divergente, y añade la ausencia total de `rejected`
  cuando el ADR sí evalúa alternativas.
- Propuesta concreta: (a) convertir l. 40/46/48 en filas `deferred` con destino
  (o una sección «Detalles aplazados» como S02/S03) y marcar el retorno de la
  identidad portable tras S08/ADR-007; (b) añadir a ADR-006 una nota de
  revisión por la edición posterior a su fecha; (c) decidir si las
  alternativas de la pregunta 1 y las de taxonomía y Hindsight deben constar
  como `rejected` en la unidad, o si la convención admite que vivan sólo en el
  ADR.
- Contraargumento o coste/riesgo: la prosa l. 58-62 sí da destinos y el ADR
  los reproduce, así que el aplazamiento no está perdido; registrar
  `rejected` en la unidad puede considerarse redundante con el ADR. El coste
  es editorial. El riesgo de no hacerlo es que el criterio global (índice
  l. 128, 160-162) se compruebe contra inventarios que no coinciden entre
  unidad, ADR y tracker.

## Análisis adicional

- Evidencia interna: S07 l. 40, 46, 48, 56, 58-62 frente a ADR-006 l. 95-99 y
  al tracker l. 392; S07 «rejected» ausente frente a ADR-006 l. 24-25, 32-33,
  42, 44 y a S05 l. 55-56 / S06 l. 55, 59, 60.
- Contraevidencia y límites: el índice l. 128 exige «punto concreto de
  resolución», que la prosa l. 58-62 cumple para los tres aplazamientos;
  AGENTS.md l. 35-36 pide registrar conclusiones como `accepted`, `deferred` o
  `rejected` sin exigir que toda alternativa evaluada tenga fila. No se
  comprobó en S08/ADR-007 el contenido de «identidad dual y referencias
  `exact`/`current`» (bloques posteriores y `CT03`).
- Pregunta para resolver: ¿cuál es el inventario vigente de aplazamientos de
  S07 (tabla, prosa o ADR), y deben las alternativas rechazadas constar en la
  unidad como en S05/S06?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B027](blocks/B027.md); `REV-2026-015`,
  `REV-2026-023`, `REV-2026-025`, `REV-2026-028`, `REV-2026-054`,
  `REV-2026-057`
