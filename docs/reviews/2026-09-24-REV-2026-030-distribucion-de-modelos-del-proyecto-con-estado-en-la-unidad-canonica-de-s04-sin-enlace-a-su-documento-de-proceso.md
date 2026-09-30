# Anotación de revisión

- ID de anotación: `REV-2026-030`
- Unidad y ubicación: `S04` — [session-04-operating-cycle.md, «Próxima acción»](../definition/session-04-operating-cycle.md#próxima-acción),
  tabla de distribución de modelos (l. 144-148: fila `rejected` l. 146 y filas
  `accepted` l. 147-148), frente a
  [proposal-efficient-workflow.md](../proposal-efficient-workflow.md) (l. 1-28,
  41-42, 56, 145, 194), a `AGENTS.md` (l. 21-23, 35-36, 50, 52-63), al índice
  rector [«Protocolo de las sesiones»](../product-definition.md#protocolo-de-las-sesiones)
  (l. 43-44) y [«Sesiones de definición»](../product-definition.md#sesiones-de-definición)
  (l. 62), a `docs/definition-tracker.md` (l. 9, 109-113), a `opencode.jsonc` y
  `.opencode/agents/`, y a [«Detalles diferidos después del cierre»](../definition/session-04-operating-cycle.md#detalles-diferidos-después-del-cierre)
  (l. 248). Bloque `B016`.
- Revisión examinada: 2026-09-24; repositorio sin commits, huella no
  disponible. Citas distintivas: «No constituye una decisión de arquitectura
  del producto» (l. 146); «Es un acuerdo operativo local, no una selección
  tecnológica de T800R» (l. 147); «Se configuraron modelos explícitos para
  agentes principales y subagentes en `opencode.jsonc` y `.opencode/agents/`;
  OpenCode 1.18.30 reconoció la configuración» (l. 148); «Ámbito: nuestra
  operación durante la definición de T800R. No selecciona la arquitectura del
  producto ni autoriza construcción» (`proposal-efficient-workflow.md` l. 6-7).
- Tipo: `mejora`
- Gravedad: `baja`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos; `media` sobre el impacto (l. 248 y el
  cierre l. 319-327 pertenecen a `B017`/`B018`; `proposal-efficient-workflow.md`
  se leyó sólo en l. 1-45 y por búsqueda)
- Impacto: si la unidad canónica de S04 (producto, `completed`) es el registro
  vigente de la distribución de modelos del propio proyecto o una instantánea
  de una decisión de proceso cuyo hogar es `proposal-efficient-workflow.md` y
  `AGENTS.md`; qué debe actualizarse cuando esa distribución cambie (ya cambió:
  `AGENTS.md` l. 50 añade Fable y el tracker l. 111-113 registra que Astra sí
  se invocó en S11, mientras l. 148 dice que «no se invocó»); cómo se cuentan
  las conclusiones de S04 frente a la convención de `AGENTS.md` l. 35-36 (la
  única fila `rejected` de la unidad es una alternativa de proceso, de modo que
  ninguna alternativa de producto de S04 consta como `rejected`: pregunta 5 de
  `B014`); y si l. 248 (medición de esa distribución) pertenece a la lista de
  diferidos del producto. No cambia ningún acuerdo del ciclo operativo.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (duplicación y falta de enlace exclusivamente
  internas; las fuentes externas sólo confirman la exactitud de l. 148 a su
  fecha, no fundamentan el hallazgo)
- Fuente primaria: `docs/definition/session-04-operating-cycle.md` l. 3-4,
  139-148 y 248; `docs/proposal-efficient-workflow.md` l. 1-45 (lectura) y
  l. 53-56, 145, 194 (búsqueda); `AGENTS.md` l. 21-23, 35-36, 50, 52-63;
  `docs/product-definition.md` l. 43-44 y 62; `docs/definition-tracker.md`
  l. 9 y 109-113; `opencode.jsonc` completo; `.opencode/agents/t800r-astra.md`
  y `t800r-docs.md` (cabeceras); listado de `.opencode/agents/`; búsqueda de
  enlaces en S04 y de «Sol|Terra|Luna|Astra|opencode» en ADR-003 (sin
  coincidencias). Fuentes externas (consulta 2026-09-24), sólo para l. 148:
  1. <https://github.com/anomalyco/opencode/releases/tag/v1.18.30> — «v1.18.30»,
     publicada el 9 de septiembre (el extracto no muestra el año; es
     compatible con la fecha 2026-09-15 de l. 3-4 y de la propuesta l. 3);
     primera nota: «Added the Astra system prompt for GPT-6 models». Fuerza
     `alta` para la existencia de la versión; no demuestra que «reconoció la
     configuración» de este repositorio.
  2. <https://opencode.ai/docs/agents/> («Last updated: Sep 24, 2026») — «Per-project:
     `.opencode/agents/`»; claves de frontmatter `mode: subagent`, `model` y
     `permission` documentadas. Fuerza `alta`; límite: documentación vigente
     hoy, no la de la versión 1.18.30.
  3. <https://opencode.ai/docs/config/> (Sep 24, 2026) — `model`, `small_model`,
     `agent` y `"$schema": "https://opencode.ai/config.json"` documentados; el
     mapa `permission.task` por subagente no aparece en esa página.
  4. <https://opencode.ai/docs/permissions/> (Sep 24, 2026) — «"task" — launching
     subagents (matches the subagent type)»; «Agent permissions are merged
     with the global config, and agent rules take precedence». Fuerza `media`
     para la forma de mapa con `"*"` usada en `opencode.jsonc` (no se muestra
     un ejemplo con nombres de subagentes).
- Sección o localizador: «Próxima acción» y «Detalles diferidos después del
  cierre» (S04); «Distribución aceptada» y «Validación funcional realizada»
  (propuesta); «Modelos y delegación» y «Forma de trabajo» (`AGENTS.md`);
  «Protocolo de las sesiones» y «Sesiones de definición» (índice)
- Fecha de consulta/publicación: consulta 2026-09-24; S04 declara criterio
  comprobado el 2026-09-15 (l. 3-4); la propuesta está fechada 2026-09-15
  (l. 3)
- Hecho observado:
  1. Bajo «Próxima acción» (l. 139) hay una tabla de tres filas con estado
     (l. 144-148): l. 146 `rejected` (coordinador intermedio Terra), l. 147
     `accepted` (Sol/Terra/Luna/Astra) y l. 148 `accepted` (configuración de
     OpenCode). Las dos primeras se declaran a sí mismas ajenas al producto:
     «No constituye una decisión de arquitectura del producto» (l. 146); «Es un
     acuerdo operativo local, no una selección tecnológica de T800R» (l. 147).
  2. La misma decisión está documentada con su propio estado en
     `docs/proposal-efficient-workflow.md`: «Estado: distribución de roles
     `accepted`» (l. 3), «Ámbito: nuestra operación durante la definición de
     T800R. No selecciona la arquitectura del producto» (l. 6-7), tabla de roles
     y modelos (l. 15-20), «Estado: `accepted`. Justificación: el usuario aceptó
     la distribución y eligió Sol, en lugar de Terra» (l. 22-23), «La
     configuración local se aplicó en `opencode.jsonc` y `.opencode/agents/`»
     (l. 25), «Astra no se invocó porque no había bloqueo» (l. 41-42),
     «OpenCode instalado: `1.18.30`» (l. 56) y una «Recomendación `deferred`»
     (l. 194). S04 no enlaza ese documento: los únicos enlaces de la unidad
     están en l. 4, 35, 47, 54, 61, 110, 233 y 327 y el bloque l. 139-223 no
     contiene ninguno. El tracker de definición sí lo enlaza (l. 109-110: «La
     distribución operativa probada queda documentada en
     proposal-efficient-workflow.md»).
  3. `AGENTS.md` «Modelos y delegación» (l. 52-63) es el texto normativo para
     los agentes y repite la distribución (Sol coordinador; `explore` con Luna;
     `general` con Terra; `t800r-docs` con Luna; `t800r-astra` con aprobación)
     sin estado y sin remitir a S04 ni a la propuesta. `AGENTS.md` l. 50
     recomienda ejecutar el editor adversarial «con Astra o Fable»: Fable no
     figura en l. 147, en la propuesta ni en `opencode.jsonc`. El tracker l. 9
     declara «Coordinador declarado: `openai/gpt-5.6-sol`» y l. 111-113
     registra que «Astra se invocó con aprobación para resolver la frontera de
     credenciales» en S11, lo que l. 148 («Astra no se invocó») ya no refleja;
     S04 está `completed` (l. 3).
  4. La configuración real coincide con l. 147-148 a su fecha: `opencode.jsonc`
     fija `model` y los agentes `build`/`plan` en `openai/gpt-5.6-sol`,
     `small_model` y `explore` en `openai/gpt-5.6-luna`, `general` en
     `openai/gpt-5.6-terra`, y `permission.task` con `"t800r-astra": "ask"` y
     `explore`/`general`/`t800r-docs` en `allow`; `.opencode/agents/` contiene
     `t800r-astra.md` (`model: openai/gpt-6-astra`, `mode: subagent`) y
     `t800r-docs.md` (`model: openai/gpt-5.6-luna`), además de
     `t800r-adversarial-editor.md` (posterior a S04). Las fichas externas 1-4
     confirman que la versión 1.18.30 existe y que el directorio y las claves
     usadas están documentados.
  5. `AGENTS.md` l. 35-36 y el índice l. 43-44 ordenan clasificar «cada
     conclusión» de una sesión como `accepted`, `deferred` o `rejected`;
     `AGENTS.md` l. 21-23 declara que «cada unidad de `docs/definition/` es la
     fuente canónica de los acuerdos de su sesión»; el índice l. 62 define las
     decisiones de la sesión 4 como «Bootstrap, ejecución, cierre, tareas,
     ownership, bloqueos, concurrencia y orchestrator». ADR-003 no menciona la
     distribución (búsqueda sin coincidencias), coherente con su carácter de
     proceso.
  6. S04 tiene 58 filas con estado (`B014`); tres son de proceso (l. 146-148).
     La única fila `rejected` de la unidad (l. 146) descarta una alternativa de
     proceso; ninguna alternativa de producto de S04 consta como `rejected`
     (por ejemplo la «propuesta previa de responsabilidades amplias del
     orchestrator no aceptada», l. 110; pregunta 5 de `B014`).
  7. «Detalles diferidos después del cierre» (l. 248, `B017`) difiere «Medir
     consumo y calidad de la distribución durante trabajo real», es decir, un
     asunto de la misma decisión de proceso, dentro de la lista de diferidos
     de la unidad de producto; la propuesta tiene su propia recomendación
     `deferred` (l. 194).
- Inferencia (si aplica): la unidad mezcla dos registros. La convención
  escrita para conclusiones de producto (`AGENTS.md` l. 35-36) se aplica a una
  instantánea de proceso que ya tiene documento y estado propios, que la unidad
  no enlaza y que, por estar `completed`, no seguirá su evolución (Fable en
  `AGENTS.md` l. 50; Astra invocado según el tracker l. 111-113). Quien siga
  `AGENTS.md` l. 21-23 puede tomar l. 147-148 como registro canónico de la
  operación del proyecto cuando el hogar real (propuesta, `AGENTS.md`,
  `opencode.jsonc`) ha cambiado; y el recuento de estados de S04 sugiere que la
  sesión registra alternativas rechazadas cuando sólo lo hace para el proceso.

## Observación y propuesta

- Observación: es legítimo que la crónica de la sesión recuerde qué
  distribución operativa se acordó ese día; las filas lo dicen con claridad
  («no una selección tecnológica de T800R»). El defecto es de registro: tienen
  estado como si fueran conclusiones de producto, no remiten al documento que
  las posee ni a `AGENTS.md`, y quedan congeladas en una unidad cerrada
  mientras la operación real evoluciona. Es un patrón distinto del de
  `REV-2026-028` (aplazamientos sin fila): aquí sobra estado, no falta.
- Propuesta concreta: que la persona (1) decida si las conclusiones de proceso
  del proyecto deben constar con estado en las unidades canónicas o sólo en su
  documento de proceso (`proposal-efficient-workflow.md`) y en `AGENTS.md`;
  (2) si se conservan en S04, añadir en l. 144 una nota «operación del
  proyecto, fuera de las conclusiones de producto» y el enlace a la propuesta,
  y decidir si l. 248 sigue en la lista de diferidos del producto; (3) declarar
  cuál es la fuente vigente de la distribución cuando cambie (hoy `AGENTS.md`
  l. 50 y el tracker l. 111-113 ya divergen de l. 147-148 sin que ninguna
  nota lo diga). No editar S04 sin esa decisión.
- Contraargumento o coste/riesgo: las dos filas ya dicen que no son producto,
  de modo que un lector atento no las confunde; la propuesta tiene estado
  propio y el tracker la enlaza; registrar la distribución en la sesión donde
  se decidió es coherente con la crónica; `AGENTS.md` es el texto que los
  agentes leen realmente (l. 14-19), por lo que la divergencia no afecta a la
  operación. El coste de la propuesta es una nota y un enlace en una unidad
  cerrada; sólo la persona puede hacerlo. La gravedad es `baja` porque ningún
  acuerdo de producto depende de estas filas.

## Análisis adicional

- Evidencia interna: hechos 1-7. l. 144-148 (estado en unidad de producto)
  frente a `proposal-efficient-workflow.md` l. 3-7 y 22 (mismo estado en
  documento de proceso, no enlazado); `AGENTS.md` l. 50 y tracker l. 111-113
  (evolución no reflejada); `AGENTS.md` l. 35-36 e índice l. 43-44
  (convención) frente al índice l. 62 (materia de S04); l. 248 (diferido de
  proceso en lista de producto). Relación con
  [`REV-2026-028`](2026-09-24-REV-2026-028-aplazamientos-embebidos-en-filas-accepted-de-s04-sin-fila-deferred-ni-destino-en-la-unidad.md)
  (inventario de diferidos de S04, al que pertenece l. 248) y con la pregunta 5
  de [B014](blocks/B014.md) (convención de filas `rejected`: la única de S04 es
  de proceso).
- Contraevidencia y límites: no se leyó `proposal-efficient-workflow.md` más
  allá de l. 1-45 y las líneas devueltas por búsqueda, ni el cierre de S04
  (l. 319-327, `B018`), de modo que no se afirma que el cierre cuente estas
  filas entre lo decidido; las fuentes externas confirman la exactitud técnica
  de l. 148 a su fecha y no se usan para fundamentar el hallazgo; los IDs de
  modelo (`openai/gpt-5.6-sol`, etc.) no se comprobaron contra el proveedor.
  Si la persona considera que la crónica de sesión puede contener decisiones
  de proceso con estado, queda sólo la falta de enlace y de nota de vigencia.
- Pregunta para resolver: ¿deben las conclusiones de proceso del proyecto
  (distribución de modelos, l. 144-148) constar con estado en la unidad
  canónica de S04 o remitir a `proposal-efficient-workflow.md` y `AGENTS.md`
  como fuente vigente; y, para la convención de `AGENTS.md` l. 35-36, cuenta
  la fila `rejected` de l. 146 como registro de alternativas de S04 cuando
  ninguna alternativa de producto tiene fila?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B016](blocks/B016.md), `REV-2026-028`, pregunta 5 de
  [B014](blocks/B014.md), cruce `CT07`

## Preguntas pendientes

Ver el checkpoint [B016](blocks/B016.md).

## Cobertura y límites

Ver el checkpoint [B016](blocks/B016.md). Cuatro fuentes externas consultadas
por pregunta concreta sobre l. 148 (fichas 1-4); todas confirman lo que la
fila afirma a su fecha. El hallazgo es interno.
