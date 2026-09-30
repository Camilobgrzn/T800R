# S07 — Sesión 7: conocimiento

Estado: `completed`. Sesión iniciada y cerrada el 2026-09-21.

### Objetivo

Definir el modelo lógico del conocimiento mantenido: perfil y taxonomía
compatibles con Open Knowledge Format (OKF), ubicación lógica, metadatos,
curación, vigencia, indexación y relación con memoria y Hindsight. El modelo debe
preservar la autoridad y procedencia de las fuentes originales y alimentar la
sección `knowledge` bajo demanda del context packet.

No corresponde todavía elegir representación física, rutas concretas, motor de
memoria, herramientas de búsqueda ni tecnología de almacenamiento.

### Preguntas de la sesión

1. ¿T800R adopta un perfil compatible con OKF, define un contrato propio inspirado
   en OKF o conserva OKF sólo como vista de importación y exportación?
2. ¿Qué tipos de conocimiento mantenido necesita el modelo y cómo se distinguen de
   acuerdos, evidencia, estado operativo, memoria provisional y skills?
3. ¿Qué identidad lógica, metadatos y referencias son obligatorios?
4. ¿Cómo se asignan curación, revisión, deprecación y vigencia sin usar una
   caducidad universal?
5. ¿Qué índices y niveles de síntesis permiten descubrimiento progresivo?
6. ¿Qué función puede cumplir Hindsight sin convertirse en autoridad paralela?

### Criterio de salida

La sesión termina cuando exista un modelo de conocimiento con perfil, taxonomía,
metadatos, autoridad, procedencia, lifecycle, reglas de vigencia, curación e
indexación explícitos; además, debe quedar delimitada la relación entre
conocimiento, memoria y Hindsight y preparado el contrato lógico para
portabilidad, sin seleccionar tecnología ni duplicar fuentes canónicas.

### Decisiones

| Tema | Estado | Decisión y justificación |
| --- | --- | --- |
| Perfil de representación | `accepted` | T800R define un perfil lógico compatible con OKF v0.2 y añade reglas propias de autoridad, aplicabilidad, revisión y vigencia. Reutiliza identidad, enlaces, procedencia y navegación sin crear un contrato aislado ni vistas derivadas como modelo principal. La compatibilidad lógica no impone todavía Markdown, rutas, almacenamiento ni servicios de Google. |
| Versionado de OKF | `accepted` | El perfil fija OKF v0.2 como base y no presupone compatibilidad automática con versiones futuras. Toda migración debe comprobar cambios incompatibles y preservar identidad, referencias, procedencia y semántica de T800R. |
| Autoridad de señales OKF | `accepted` | Conformidad OKF y señales como `stable` o `verified` no convierten un contenido en acuerdo, evidencia suficiente ni autoridad del proyecto. La autoridad continúa determinada por las fuentes y criterios acordados en la sesión 3. |
| Forma de la taxonomía | `accepted` | El perfil usa un núcleo pequeño de tipos semánticos con significado y requisitos comunes, extensible por cada proyecto. Los tipos adicionales deben preservar los campos y límites del perfil; no adquieren autoridad por su nombre y los consumidores deben tolerar tipos desconocidos según OKF. |
| Tipos del núcleo | `accepted` | El núcleo contiene `concept` (definición o modelo explicativo), `pattern` (solución reutilizable con contexto y tradeoffs), `lesson` (aprendizaje derivado de resultados observados) y `synthesis` (conexión o comparación trazable entre varias fuentes). |
| Promoción desde memoria | `accepted` | Una candidata puede persistirse como `draft`, pero sólo se vuelve reutilizable como conocimiento mantenido tras una curación proporcional que compruebe fuentes, evidencia y condiciones de aplicabilidad. La revisión humana es obligatoria si la promoción cambiaría un acuerdo o si el riesgo excede la autonomía concedida; no se exige para toda promoción. |
| Ubicación lógica | `accepted` | El conocimiento se agrupa en bundles con `scope` y owner explícitos para proyecto, organización o T800R. Los bundles pueden referenciar conocimiento y fuentes de otros ámbitos sin copiarlos como autoridad; la ruta y el almacenamiento físicos se decidirán posteriormente. |
| Estructura de metadatos | `accepted` | El perfil combina metadatos comunes obligatorios con campos específicos por tipo. Evita tanto un esquema universal lleno de campos inaplicables como el mínimo de OKF, insuficiente para gobernar autoridad, aplicabilidad y curación. |
| Metadatos comunes | `accepted` | Toda entrada declara `type`, `title`, `sources`, `status`, `applicability`, `revision` y `review`, y resuelve un `curator` efectivo por herencia o delegación. `generated`, `verified`, `stale_after`, relaciones y aliases son condicionales. Owner, curator predeterminado y `scope` corresponden al bundle. La identidad portable y su mapeo a la identidad por ruta de OKF se completarán en la sesión 8. |
| Requisitos por tipo | `accepted` | `concept` declara `domain` y contiene una definición; `pattern` expone problema, solución y tradeoffs; `lesson` referencia evidencia y separa observación de interpretación; `synthesis` declara el asunto, usa al menos dos fuentes y expone discrepancias relevantes. Sólo `domain`, las referencias de evidencia y el asunto exigen estructura adicional; el resto puede expresarse en el cuerpo. |
| Responsabilidad de curación | `accepted` | Cada bundle tiene un curator responsable que puede delegar entradas o revisiones a actores autorizados, con alcance y trazabilidad explícitos. Las entradas heredan ese curator salvo override delegado. El owner gobierna el ámbito; el curator mantiene estructura, referencias, aplicabilidad y vigencia, sin poder cambiar acuerdos por esa función. |
| Modelo de vigencia | `accepted` | La revisión se activa por cambios en fuentes, evidencia o aplicabilidad y por riesgo. No existe una caducidad universal: `check_after` programa una comprobación sin invalidar por sí mismo y `stale_after` sólo se declara cuando el contenido tiene una razón temporal concreta para dejar de ser confiable. Antes de reutilizar conocimiento se concilian los marcadores de las dependencias relevantes. |
| Lifecycle y frescura | `accepted` | `status` expresa lifecycle editorial mediante `draft`, `stable` y `deprecated`; la frescura derivada se informa como `current`, `review_due` o `stale`. `review_due` exige una comprobación proporcional al riesgo, pero no invalida automáticamente. Una acción no puede depender de contenido `stale` hasta revisar lo afectado. `deprecated` señala retiro deliberado y debe orientar a un reemplazo o una razón cuando exista. |
| Transiciones editoriales | `accepted` | `draft → stable` requiere la curación aplicable; `stable → deprecated` registra reemplazo o pérdida deliberada de aplicabilidad; `deprecated → draft` permite reactivación sujeta a nueva revisión. Una modificación que altera afirmaciones produce una revisión `draft`; una corrección mecánica puede conservar `stable` si queda auditada y no cambia significado, fuentes ni aplicabilidad. |
| Indexación | `accepted` | Cada bundle mantiene un índice raíz compacto y portable que permite descubrir y referenciar entradas sin cargarlas completas. Índices temáticos, de texto completo, vectoriales o propios de herramientas son derivados reconstruibles: facilitan recuperación, pero no sustituyen las entradas ni sus fuentes. |
| Posición de Hindsight | `accepted` | Hindsight, o un motor equivalente, puede actuar como adapter opcional de recuperación semántica sobre fuentes autorizadas. Cada resultado es una pista que conserva referencia y revisión y debe reconciliarse con la fuente vigente antes de usarse. Su ausencia degrada al índice portable y búsqueda textual sin romper el contrato común. No promueve memoria a conocimiento ni cambia entradas por sí mismo. |
| Hindsight en el MVP | `deferred` | La adopción de Hindsight concreto se resolverá en las sesiones 11 y 12 mediante compatibilidad y comparación con el índice raíz y búsqueda textual. La sesión 7 sólo acepta su posición semántica opcional. |

La base evaluada corresponde a OKF v0.2 en el commit
`ad30107c31c06aec8a7d5636e0d1058118604e6f`. La identidad portable y el mapeo
de identidad a la ruta de OKF quedan para la sesión 8. La representación física,
las rutas, el almacenamiento y la búsqueda quedan para la sesión 11. La adopción
concreta de Hindsight en el MVP queda para las sesiones 11 y 12.

### Taxonomía y límites iniciales

| Tipo | Contenido distintivo | No sustituye |
| --- | --- | --- |
| `concept` | Definición, relaciones y alcance de una idea del dominio. | Glosarios o requisitos canónicos cuando éstos expresan un acuerdo. |
| `pattern` | Problema recurrente, contexto de aplicación, solución, tradeoffs y límites conocidos. | Una skill ejecutable ni una regla obligatoria del proyecto. |
| `lesson` | Resultado observado, interpretación reutilizable, evidencia y condiciones de aplicabilidad. | Evidencia original ni memoria de una hipótesis pendiente. |
| `synthesis` | Relación, comparación o explicación integrada de varias fuentes identificadas. | Las fuentes originales ni la resolución humana de contradicciones entre autoridades. |

Decisiones, requisitos, estado operativo, resultados de validación, procedimientos
ejecutables e investigación inconclusa permanecen respectivamente en
especificaciones o ADRs, tracker, evidencia, skills y memoria. Una entrada de
conocimiento puede referenciarlos, pero no asumir sus responsabilidades.

La promoción desde memoria no borra la evidencia ni convierte una interpretación
en hecho. Mientras no supere la curación aplicable, la candidata permanece
`draft` y no puede presentarse como conocimiento reutilizable confirmado.

Un bundle de proyecto conserva conocimiento cuya aplicabilidad y mantenimiento
pertenecen al repositorio consumidor; uno de organización comparte conocimiento
entre proyectos bajo una curación común; uno de T800R describe conocimiento del
propio producto. El ámbito no concede autoridad sobre especificaciones de otro
ámbito, y toda reutilización debe comprobar versión y aplicabilidad.

Los metadatos comunes distinguen la revisión del contenido (`revision`) de la
comprobación de sus fundamentos (`review`). `sources` referencia originales o el
registro autorizado; no incorpora copias que compitan con ellos. `applicability`
expresa condiciones y exclusiones de uso, no permisos de ejecución.

`draft` puede apoyar investigación si se identifica como provisional, pero no se
presenta como conocimiento confirmado. `stable` indica que superó la curación
aplicable, no que sea un acuerdo del proyecto. Frescura y lifecycle se calculan y
registran por separado para no ocultar una fuente cambiada detrás de un estado
editorial estable.

El índice raíz expone como mínimo identidad de bundle, ámbito, temas y descriptores
compactos de las entradas con referencia, `type`, título, resumen, aplicabilidad,
estado editorial y frescura. Puede orientar índices secundarios, pero una
discrepancia se resuelve desde las entradas y fuentes, no desde el índice derivado.

La sección `knowledge` de un context packet referencia el bundle, su revisión y
las entradas seleccionadas por la condición de carga; no incorpora por defecto el
bundle completo. Un motor semántico puede sugerir esas entradas, pero la selección
conserva presupuesto, procedencia y reconciliación de ADR-005.

<a id="s07-cierre"></a>

### Comprobación de cierre

El criterio de salida está cumplido: el perfil lógico compatible con OKF v0.2,
la taxonomía y sus límites, los bundles y ámbitos, los metadatos, la autoridad y
la procedencia, el lifecycle y la frescura, la responsabilidad de curator, las
reglas de vigencia, la indexación y la relación entre memoria, Hindsight y la
sección `knowledge` del context packet quedaron explícitos. También quedaron
delimitados los diferimientos tecnológicos: identidad portable y mapeo de ruta
OKF para la sesión 8; representación física, rutas, almacenamiento y búsqueda
para la sesión 11; y adopción concreta de Hindsight al MVP para las sesiones 11
y 12. No se seleccionó tecnología ni se duplicaron fuentes canónicas.

La decisión transversal queda documentada en [ADR-006](../adr/ADR-006-modelo-portable-de-conocimiento.md).
