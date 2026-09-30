# Anotación de revisión

- ID de anotación: `REV-2026-101`
- Unidad y ubicación: `S12` — [Decisiones](../definition/session-12-validation-convergence.md#decisiones),
  fila «Revisión adversarial antes de seleccionar el piloto»
  (`docs/definition/session-12-validation-convergence.md:59`) y
  [Preguntas abiertas](../definition/session-12-validation-convergence.md#preguntas-abiertas)
  (l. 74-75), frente al [tracker de definición](../definition-tracker.md)
  «Próxima acción» (l. 15-17) y a los documentos de la propia revisión:
  [adversarial-editor-prompt.md](adversarial-editor-prompt.md) l. 12-16,
  [../adversarial-editor.md](../adversarial-editor.md) l. 5-13 y 98,
  [blocks.md](blocks.md) l. 3-6 y [review-tracker.md](review-tracker.md),
  «Uso persistente» (l. 2401-2402 en la base de esta consulta). Cruce `CT07`.
  Citas distintivas: «S12 hará primero una revisión adversarial del canon
  vigente y resolverá humanamente sus hallazgos; después seleccionará el
  piloto» (S12 l. 59); «Primero decidir si se amplía y completa el inventario
  existente o se hace una pasada final focalizada que incorpore S08-S12 y
  ADR-007–010» (tracker l. 15-17); «Nuevos acuerdos se incorporan al
  inventario con nuevos IDs» (prompt l. 15-16); «Para dar por terminada la
  revisión deben estar vigentes los 45 bloques y los siete cruces» (tracker de
  revisión, «Uso persistente»).
- Revisión examinada: 2026-09-25; S12 `in_progress` (iniciada el 2026-09-24);
  tracker de definición con «Última actualización: 2026-09-24»; repositorio sin
  commits, huella no disponible.
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos; `media` sobre el impacto (el canon ya
  registra la decisión como pendiente, y la persona puede resolverla antes de
  seleccionar el piloto)
- Impacto: si el cierre formal de esta revisión (45 bloques y siete cruces
  `reviewed`) puede leerse como cumplimiento de la revisión adversarial que S12
  l. 59 exige antes de seleccionar el piloto. De ello depende que S12 elija el
  piloto y fije corpus y criterios sobre un canon del que unas 1550 líneas
  (S08-S12 y ADR-007 a ADR-010) nunca se revisaron como objeto.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión y divergencia exclusivamente
  internas; sin fuente externa)
- Fuente primaria: ubicaciones internas citadas arriba; recuento de líneas por
  archivo en `docs/definition/session-*.md` y `docs/adr/ADR-*.md` (búsqueda del
  2026-09-25).
- Sección o localizador: S12 «Decisiones» y «Preguntas abiertas»; tracker de
  definición «Próxima acción»; prompt «Propósito y límites»; guía «Alcance y
  punto de entrada»; `blocks.md` introducción; tracker de revisión «Uso
  persistente».
- Fecha de consulta/publicación: consulta 2026-09-25.
- Hecho observado:
  1. **El alcance de la revisión es fijo.** El prompt (l. 12-13) y la guía
     (l. 5-6) limitan el alcance a «índice rector, sesiones 1–7 y ADR-001 a
     ADR-006». `blocks.md` (l. 3-6) describe el inventario como «el índice
     rector, las siete unidades canónicas y los ADRs 001 a 006». La guía
     (l. 98) y «Uso persistente» cuentan «los 45 bloques y los siete cruces».
  2. **Los mismos documentos prevén ampliarlo, y no se hizo.** El prompt
     (l. 15-16) dice que «Nuevos acuerdos se incorporan al inventario con
     nuevos IDs sin dar por revisado contenido nuevo», y la guía (l. 13), que
     «los nuevos acuerdos se añaden al inventario». S08 a S11 cerraron entre
     el 2026-09-22 y el 2026-09-24 (`definition/README.md` l. 17-20), con
     ADR-007 a ADR-010. `blocks.md` no tiene ningún bloque posterior a `B045`
     (búsqueda de «B046»: sin coincidencias).
  3. **Tamaño de lo no revisado.** Según el recuento de líneas: S08 414, S09
     122, S10 177, S11 234 y S12 75; ADR-007 136, ADR-008 81, ADR-009 100 y
     ADR-010 212. Son unas 1550 líneas, frente a unas 2500 del inventario
     (índice, S01-S07 y ADR-001 a ADR-006). El tracker de definición, que
     enruta temas a los ADR (l. 318-323) y hace de inventario vivo (l. 392-394,
     406, 448), tampoco forma parte del inventario.
  4. **Lo no revisado contiene defectos que los cruces encontraron sólo como
     destino.** S08-S11, ADR-007 a ADR-010 y el tracker de definición se usaron
     «fuera del alcance», como destino o evidencia, en decenas de anotaciones.
     Aun así, varias anotaciones localizan en ellos el defecto:
     - `REV-2026-098`: S11 l. 72 y ADR-010 punto 4 contra OKF §4.1/§11;
     - `REV-2026-097`: auditorías de S08-S10 contra los ADR;
     - `REV-2026-100`: S08-S11 asignan a S12 la conformidad;
     - `REV-2026-092`, `093` y `094`: identidad y referencias en S08;
     - `REV-2026-081`: S11/ADR-010 sin acuse de ADR-004;
     - `REV-2026-099`: la lista del índice copiada de ADR-010.
     La pregunta 1 de la pasada 2 de `B002` (ADR-010 sin la decisión del
     orchestrator) quedó sin comprobar porque ADR-010 está fuera del
     inventario.
  5. **El canon ya reconoce la decisión como pendiente, pero la revisión no la
     refleja.** S12 l. 59 (`accepted`) exige la revisión «del canon vigente»
     antes del piloto. S12 l. 74-75 pregunta si la revisión «ampliará y
     completará el inventario existente o usará una pasada final focalizada».
     El tracker de definición l. 15-17 pide decidirlo «Primero». En cambio, la
     condición de terminación del tracker de revisión sigue contando 45 bloques
     y no remite a esa decisión.
- Inferencia (si aplica): con `CT07` `reviewed`, la condición de «Uso
  persistente» se cumple en la letra. Un lector del tracker de revisión podría
  darla por equivalente a la revisión de S12 l. 59, cuando excluye las cuatro
  sesiones y los cuatro ADR que más remisiones reciben y todo el contenido de
  S12.

## Observación y propuesta

- Observación: la terminación del análisis de esta revisión no equivale a la
  revisión adversarial del canon vigente que S12 l. 59 fija como condición
  previa a seleccionar el piloto. Los documentos de la revisión prevén
  incorporar acuerdos nuevos, pero el inventario y la condición de terminación
  siguen fijados en 45 bloques.
- Propuesta concreta (decisión humana; no se edita el canon ni el prompt):
  1. Resolver S12 l. 74-75 antes de declarar cumplida la condición de S12 l. 59.
     Opción A: ampliar `blocks.md` con bloques nuevos (desde `B046`) para S08-S12,
     ADR-007 a ADR-010 y, si se desea, el tracker de definición l. 312-451,
     con cruces nuevos contra los resultados ya obtenidos. Opción B: una pasada
     final focalizada con alcance, preguntas y criterio de terminación
     explícitos. Por ejemplo, receptores de las remisiones de S01-S07 y ADR-001
     a ADR-006, contradicciones con S01-S07, y las decisiones de S12 l. 56-59.
  2. Hasta entonces, declarar en el tracker de revisión que la terminación del
     análisis se refiere al inventario vigente (S01-S07, ADR-001 a ADR-006 e
     índice) y no satisface por sí sola S12 l. 59.
  3. Si se amplía, actualizar el alcance del prompt (l. 12-13) y de la guía
     (l. 5-6) y la cifra de «Uso persistente», o sustituirla por «todos los
     bloques y cruces del inventario».
- Contraargumento o coste/riesgo: el alcance autorizado de esta revisión fue
  explícitamente S01-S07 y ADR-001 a ADR-006, y el canon ya registra la
  decisión como pendiente (tracker l. 15-17), de modo que nadie ha afirmado
  todavía que S12 l. 59 esté cumplida. El defecto está en que la revisión no
  distingue su terminación de esa condición, no en el canon. Ampliar el
  inventario cuesta del orden de 15-18 bloques y varios cruces, y retrasa la
  selección del piloto. Una pasada focalizada es más barata, pero deja sin
  revisar como objeto partes de S08-S11. El editor no puede ampliar el alcance
  por su cuenta: corresponde a la persona.

## Análisis adicional

- Evidencia interna: [S12](../definition/session-12-validation-convergence.md);
  [tracker de definición](../definition-tracker.md);
  [prompt](adversarial-editor-prompt.md); [guía](../adversarial-editor.md);
  [blocks.md](blocks.md); [review-tracker.md](review-tracker.md);
  [CT07](blocks/CT07.md).
- Relación con anotaciones existentes, sin duplicarlas: `REV-2026-099` (su
  pregunta pendiente sobre la omisión de S12 l. 74-75 en la lista del índice,
  que aquí se trata como decisión de proceso con efecto en el gate) y
  `REV-2026-100` (conformidad asignada a S12).
- Contraevidencia y límites: el recuento de líneas procede de una búsqueda y
  puede diferir en una línea por archivo. No se ha demostrado que S08-S11
  contengan más defectos que los ya localizados. Sólo consta que no se
  revisaron como objeto. S12 está `in_progress` y puede resolver la pregunta
  l. 74-75 en cualquier momento.
- Pregunta para resolver: ¿se amplía el inventario a S08-S12 y ADR-007 a
  ADR-010, o se hace una pasada focalizada? En ese caso, ¿con qué alcance y
  criterio de terminación? ¿Cuándo se considera cumplida la condición de S12
  l. 59?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [CT07](blocks/CT07.md),
  [`REV-2026-099`](2026-09-25-REV-2026-099-preguntas-abiertas-del-indice-sin-disposicion-y-dos-sobre-resultados-que-s12-situa-despues-de-autorizar-la-construccion.md),
  [`REV-2026-100`](2026-09-25-REV-2026-100-s08-a-s11-asignan-a-s12-ejecutar-y-certificar-conformidad-tras-autorizar-la-construccion-que-s12-convierte-en-gate-posterior-sin-marca.md)

## Preguntas pendientes

- ¿La «resolución humana de sus hallazgos» (S12 l. 59) exige resolver las 102
  anotaciones antes de seleccionar el piloto, o basta con resolver las
  decisiones sistémicas que las agrupan? Ver la recomendación de orden en
  [CT07](blocks/CT07.md).

## Cobertura y límites

- Leído: S12 completa; tracker de definición l. 1-41 y 312-451; prompt
  completo; guía l. 1-25 y 92-99; `blocks.md` completo; tracker de revisión
  l. 1-140, 1020-1063, 1860-1920 y 2290-2404.
- Fuentes externas: no aplican.
- No examinado: S08-S11 y ADR-007 a ADR-010 como objeto (sólo las líneas
  citadas en [CT07](blocks/CT07.md)).
