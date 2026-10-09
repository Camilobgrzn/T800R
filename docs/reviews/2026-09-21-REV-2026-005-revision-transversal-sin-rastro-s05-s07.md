# Anotación de revisión

- ID de anotación: `REV-2026-005`
- Unidad y ubicación: índice rector (bloque `B002`) —
  [Revisión transversal de prácticas de harnesses](../product-definition.md#revisión-transversal-de-prácticas-de-harnesses),
  `docs/product-definition.md:91-129`; cita distintiva: «La revisión se realizará
  gradualmente en la sesión correspondiente»
- Revisión examinada: fecha 2026-09-21; repositorio sin commits, huella no disponible
- Tipo: `incompleto`
- Gravedad: `alta`
- Estado: `accepted`
- Confianza: `media`
- Impacto: el criterio de cierre exige que «se haya completado la revisión
  transversal de prácticas de OpenAI y Anthropic, con decisiones y pendientes
  trazables para las áreas del harness» (`docs/product-definition.md:161-162`). Si
  las sesiones 5, 6 y 7 se cerraron sin el registro comprometido, ese criterio no se
  puede cumplir sin un trabajo retroactivo que hoy no tiene sesión, responsable ni
  punto de resolución.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (contradicción exclusivamente interna), con el
  límite de método declarado abajo
- Fuente primaria: sin fuente externa para el hallazgo; ubicaciones internas abajo
- Sección o localizador: `docs/product-definition.md:104-129` frente a
  `docs/definition/session-05-handoffs.md`, `session-06-context.md` y
  `session-07-knowledge.md` (búsqueda de términos) y `docs/definition-tracker.md:6-7,188-191`
- Fecha de consulta/publicación: 2026-09-21
- Hecho observado:
  1. El bloque asigna áreas a sesiones: coordinación y transferencia a «4 y 5»;
     selección de contexto y continuidad entre ventanas a «6»; memoria,
     aprendizaje y vigencia de documentación a «7» (líneas 112-114). Compromete
     que «Para cada práctica revisada se registrarán fuente, problema que resuelve,
     beneficios, costes, riesgos, decisión `accepted`/`deferred`/`rejected` y
     justificación» (121-123).
  2. `docs/definition-tracker.md:6-7` declara 7 de 12 sesiones completadas; las
     sesiones 5, 6 y 7 están cerradas.
  3. Una búsqueda insensible a mayúsculas de `harness`, `OpenAI`, `Anthropic`,
     `transversal` y `práctica` en las unidades S05, S06 y S07 devuelve una sola
     coincidencia por archivo, y las tres son la frase «La decisión transversal…»
     que remite a un ADR (`session-05-handoffs.md:262`, `session-06-context.md:203`,
     `session-07-knowledge.md:123`). Ninguna unidad enlaza una investigación
     `research-*`. En contraste, S03 y S04 sí devuelven 12 y 10 coincidencias.
  4. El único estado declarado es «pendiente de completar. La investigación y la
     matriz de candidatas de la sesión 3 son un avance parcial» (127-129), repetido
     en `docs/definition-tracker.md:188-191`. No hay estado por área ni por sesión.
- Inferencia (si aplica): las sesiones 5–7 se cerraron sin ejecutar, o sin dejar
  rastro localizable, la parte de la revisión transversal que el índice les asignó.

## Observación y propuesta

- Observación: el compromiso es «gradual en la sesión correspondiente», pero el
  índice no tiene mecanismo que impida cerrar una sesión sin su parte: el criterio
  de salida por sesión no se leyó en este bloque, y el estado es un único literal
  global. Tres de las diez áreas ya corresponden a sesiones cerradas sin rastro
  localizable, y la cobertura sólo se comprobará «Antes de cerrar la definición»
  (124), cuando corregir implicará reexaminar acuerdos `accepted` de S05–S07 y sus
  ADR. Además, el artículo de Anthropic sobre context engineering trata
  directamente compactación, notas estructuradas y recuperación just-in-time, que
  son materia de S06 y S07; la ausencia de contraste allí no es un caso de «los
  artículos no aportan evidencia».
- Propuesta concreta: que la persona decida entre (a) registrar una pasada
  retroactiva acotada para las áreas de las sesiones 5, 6 y 7 con el formato
  comprometido, indicando si algún acuerdo queda afectado; (b) añadir a la tabla
  una columna de estado por área con enlace al registro; o (c) reformular el
  compromiso y el criterio de cierre si se decide no hacerlo por sesión.
- Contraargumento o coste/riesgo: los acuerdos de S05–S07 pueden haber incorporado
  las prácticas de forma implícita (por ejemplo, progressive disclosure y contexto
  bajo demanda en S06) sin citarlas; el compromiso es de trazabilidad, no invalida
  esos acuerdos. Una pasada retroactiva consume sesiones y puede reabrir discusión
  sobre contenido ya cerrado sin cambiar ninguna decisión.

## Análisis adicional

- Evidencia interna: [tabla de áreas](../product-definition.md#revisión-transversal-de-prácticas-de-harnesses);
  [criterio de cierre](../product-definition.md#criterio-de-cierre-de-la-definición);
  [S05](../definition/session-05-handoffs.md), [S06](../definition/session-06-context.md),
  [S07](../definition/session-07-knowledge.md);
  [definition-tracker](../definition-tracker.md).
- Contraevidencia y límites: la evidencia es una búsqueda por términos, no una
  lectura completa de S05–S07; el registro podría existir con otro vocabulario, en
  los ADR-004 a ADR-006, en `docs/research-*.md` o en la parte del
  `definition-tracker` no leída. Por eso la confianza es `media`. Los bloques de
  S05–S07 y el cruce `CT07` deben confirmarlo o refutarlo. El propio bloque reconoce
  que la revisión está «pendiente de completar», así que no afirma algo falso: el
  defecto es la falta de estado por área y de un punto de resolución para las áreas
  de sesiones ya cerradas, que el mismo bloque exige a toda decisión aplazada
  («Una decisión aplazada incluirá un punto concreto de resolución», 123).
- Fuentes externas consultadas sólo para comprobar existencia y pertinencia
  temática de las «Fuentes de partida» (no imponen nada a T800R):
  - <https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents>,
    «Effective context engineering for AI agents», publicado el 2025-09-29,
    consultado el 2026-09-21. Paráfrasis: trata contexto como recurso finito,
    recuperación just-in-time, compactación, toma de notas estructurada y
    arquitecturas multiagente. Fuerza `media` (resumen obtenido con herramienta de
    lectura, no cita literal); pertinencia: cubre las áreas asignadas a S06 y S07.
  - <https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents>,
    «Effective harnesses for long-running agents», publicado el 2025-11-26,
    consultado el 2026-09-21. Paráfrasis: agente inicializador, progreso
    incremental, archivo de progreso, pruebas de extremo a extremo. Fuerza `media`;
    pertinencia: áreas de S04, 11 y 12.
  - <https://openai.com/index/harness-engineering/>: **no leída** (HTTP 403 el
    2026-09-21). No se usa como evidencia.
- Pregunta para resolver: ¿se hizo la revisión de prácticas en las sesiones 5, 6 y
  7 y dónde consta? Si no consta, ¿se hará una pasada retroactiva, en qué sesión y
  con qué responsable, o se cambia el compromiso?

## Nota de vigencia (2026-09-25, pasada 2 de `B002`)

- Resultado: **sigue vigente y ampliada**, con dos atenuaciones parciales; no
  se cierra.
- Base comparada: `docs/product-definition.md` l. 96-135 (204 líneas). El
  compromiso, las fuentes, la tabla de áreas y el formato por práctica
  (l. 98-130) conservan el texto citado arriba, desplazado unas cinco líneas
  (tabla en l. 113-124; formato en l. 126-128). El párrafo de estado cambió. Ya
  no dice «La investigación y la matriz de candidatas de la sesión 3 son un
  avance parcial», sino: «Estado de la revisión transversal: pendiente de
  completar. S11 incorporó las decisiones aplicables de arquitectura,
  restricciones ejecutables, seguridad de credenciales, aislamiento y
  estrategia de pruebas. S12 debe completar validación, calidad, costes, ciclos
  de mejora y la comprobación final de cobertura» (l. 132-135). El tracker de
  definición l. 329-331 repite «pendiente de completar».
- Confirmaciones posteriores, sin releerlas: el límite de método de arriba
  quedó cerrado en positivo para S05 ([B022](blocks/B022.md)), S06
  ([B026](blocks/B026.md)) y S07 ([B029](blocks/B029.md)), por lectura completa
  de cada unidad. Para S04, [`REV-2026-032`](2026-09-24-REV-2026-032-revision-transversal-asignada-a-s04-diferida-sin-punto-de-resolucion-y-conservada-como-accion-por-hacer.md)
  documenta el diferimiento sin punto de resolución.
- Ampliación (hechos nuevos, 2026-09-25):
  1. **Áreas de S08, S09 y S11 sin registro por práctica.** La búsqueda
     insensible a mayúsculas de `harness|OpenAI|Anthropic|revisión
     transversal|prácticas?` en `docs/definition/` no da coincidencias en S08,
     S09 ni S11; sí en S01-S04, S10 y S12. En sus ADR sólo hay un párrafo
     genérico, sin fuente, problema, beneficios, costes, riesgos ni decisión por
     práctica: ADR-007 l. 56-64 («Las guías de OpenAI y Anthropic para
     harnesses de larga duración recomiendan estado persistente…») y ADR-010
     l. 101-106 («recomiendan entornos legibles, validaciones mecánicas,
     contexto acotado y estado durable»). ADR-008 (S09, «Aislamiento, permisos,
     límites de autonomía e intervención humana», índice l. 121) no los menciona.
  2. **El nuevo estado atribuye a S11 una incorporación sin rastro.** La
     afirmación de l. 132-134 no tiene soporte en el formato comprometido
     (l. 126-128) dentro de S11. Además, incluye «seguridad de credenciales» y
     «aislamiento», que la tabla asigna a S09 (l. 121) y no a S11 (l. 123). El
     estado sigue siendo un literal global sin estado por área. No menciona S10
     (la única unidad con registro) ni el avance parcial de S03 que antes
     reconocía.
  3. **Diferimientos de S10 sin retorno.** S10 l. 110 y l. 112 difieren a S11 y
     S12 prácticas concretas (arranque con `init.sh` y archivo de progreso;
     worktrees, observabilidad y herramientas end-to-end). S11 l. 90 acepta
     worktrees sin nombrar la práctica ni S10.
- Atenuaciones:
  1. S10 l. 102-116 («Revisión transversal aplicable») es el primer registro por
     práctica con fuente, problema, estado y evaluación. Declara además los
     límites de las fuentes (l. 114-117), como pide el índice l. 129-130. No
     tiene columnas separadas de beneficios, costes y riesgos. Área de S10
     (l. 122): cubierta en lo esencial.
  2. S12 recibe la comprobación final: su objetivo (l. 9), su pregunta 7
     (l. 36-37) y su criterio de salida («la revisión transversal esté
     completa», l. 47). Ya existe un punto de resolución para la cobertura
     global. No existe para una pasada retroactiva de las áreas de S04-S09 y
     S11: S12 sólo nombra «calidad, costes, ciclos de mejora y cobertura final».
- Balance por área (índice l. 115-124): S03, con rastro (formato no confirmado
  aquí); S04, diferida sin punto de resolución (`REV-2026-032`); S04-S05, S06 y
  S07, sin rastro (confirmado); S08, sólo un párrafo genérico en ADR-007; S09,
  sin rastro; S10, registrada; S11, sólo un párrafo genérico en ADR-010,
  aunque el índice afirma que la incorporó; S11-S12, pendiente en S12
  (`in_progress`).
- Límite: búsqueda por términos en S08, S09 y S11, no lectura completa. Un
  registro con otro vocabulario no puede descartarse, pero S10 muestra que el
  vocabulario esperado es el de las fuentes. S12 puede completar la cobertura
  antes de cerrar.

## Resolución humana

- Decisión y justificación: `accepted` (atendida). Primero `deferred` en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12. El 2026-10-09 la persona aprobó el [cierre de la revisión transversal](../revision-transversal-cierre.md), que atiende la propuesta en su variante (b): la §2 del cierre da estado por área con enlace a las decisiones de cada unidad o ADR, y la §4.1 (aplicada en el índice rector) explicita que S05-S09 no registraron prácticas por unidad y que el contraste quedó en los «Por qué la decisión» de ADR-004, 005, 007 y 010 y en esa tabla. No se hizo pasada retroactiva en S05-S07; ningún acuerdo de esas unidades cambia. La evidencia y la propuesta originales se conservan.
- Responsable y fecha: la persona (Camilo Barreto), 2026-10-09 (resolución); 2026-09-30 (aplazamiento previo).
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Cierre de la revisión transversal de prácticas de harnesses»; [revision-transversal-cierre.md](../revision-transversal-cierre.md) §2 y §4; [índice rector, «Estado de la revisión transversal»](../product-definition.md#revisión-transversal-de-prácticas-de-harnesses).
- Enlaces relacionados: [REV-2026-004](2026-09-21-REV-2026-004-preguntas-abiertas-sin-disposicion.md),
  [checkpoint B002](blocks/B002.md)

## Preguntas pendientes

- ¿Las áreas sin cobertura evidente en las tres fuentes (aislamiento y permisos,
  experiencia de adopción, costes) tienen otra fuente de partida prevista? El bloque
  ya prevé explicitar «los casos en que los artículos no aporten evidencia
  suficiente», por lo que no es un hallazgo; queda para `CT07`.
- ¿Las sesiones 3 y 4 dejaron el registro con el formato completo comprometido
  (fuente, problema, beneficios, costes, riesgos, decisión)? No comprobado aquí;
  corresponde a sus bloques.

## Cobertura y límites

- Leído: `docs/product-definition.md:85-170`; `docs/definition-tracker.md:1-12,184-193`;
  coincidencias de búsqueda en `docs/definition/session-0[1-7]*.md`.
- Fuentes externas efectivamente consultadas: los dos artículos de Anthropic
  (resumen por herramienta). El de OpenAI devolvió 403.
- No examinado: texto completo de S01–S07, ADR-001 a ADR-006, `docs/research-*.md`,
  resto del `definition-tracker`.
