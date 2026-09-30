# Anotación de revisión

- ID de anotación: `REV-2026-100`
- Unidad y ubicación: índice rector (bloque `B003`, pasada 2) —
  [Criterio de cierre de la definición](../product-definition.md#criterio-de-cierre-de-la-definición),
  `docs/product-definition.md:146-163`; cita distintiva: «haya pruebas de
  aceptación para T800R y el repositorio piloto;» (l. 159). Frente a `S08` —
  [S08](../definition/session-08-portability.md), fila «Contrato de conformidad
  en sesión 8 y ejecución en sesión 12» (l. 117) y
  [cierre](../definition/session-08-portability.md#s08-cierre) (l. 404-411);
  `S11` — [cierre](../definition/session-11-mvp-architecture.md#s11-cierre)
  (l. 227-230); y `S12` —
  [Decisiones](../definition/session-12-validation-convergence.md) (l. 56-57)
- Revisión examinada: 2026-09-25; índice de 204 líneas con «Última
  actualización: 2026-09-24» (l. 6); S12 `in_progress` iniciada el 2026-09-24;
  repositorio sin commits, huella no disponible
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos textuales; `media` sobre el impacto (S12
  sigue `in_progress` y puede registrar las marcas antes de cerrar)
- Impacto: qué exige el cierre de la definición y, en particular, si S12 puede
  cerrarse y autorizar la construcción sin certificar adapters. Seis documentos
  aceptados siguen asignando a S12 la ejecución o la certificación de la
  conformidad; S12 la convirtió en un gate posterior a la autorización. Quien
  lea esos documentos, o la condición ambigua del índice l. 159, puede exigir
  a S12 una evidencia que S12 l. 57 rechaza por circular.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (contradicción exclusivamente interna; sin
  fuente externa)
- Fuente primaria: ubicaciones internas:
  `docs/product-definition.md:70`, `146-163`;
  `docs/definition/session-08-portability.md:44-50`, `117`, `404-411`;
  `docs/definition/session-09-security-governance.md:44-47`;
  `docs/definition/session-10-product-experience.md:170-174`;
  `docs/definition/session-11-mvp-architecture.md:124`, `127`, `227-231`;
  `docs/definition/session-12-validation-convergence.md:13-19`, `23-25`,
  `43-50`, `56-57`, `63-68`;
  `docs/adr/ADR-007-contrato-de-capacidades-y-adapters-portables.md:124`;
  `docs/adr/ADR-008-baseline-de-seguridad-y-gobernanza.md:71`;
  `docs/adr/ADR-010-arquitectura-tecnica-del-mvp.md:192`;
  `docs/definition-tracker.md:20-23`, `405-407`, `448-449`
- Sección o localizador: ver arriba
- Fecha de consulta/publicación: consulta 2026-09-25; S08-S11 cerradas antes de
  que S12 aceptara su decisión (S12 iniciada el 2026-09-24)
- Hecho observado:
  1. **S08 asigna a S12 la ejecución sobre adapters construidos tras autorizar.**
     El criterio de salida de S08 dice: «la ejecución de conformidad corresponde
     a la sesión 12 sobre adapters construidos tras autorizar la fase»
     (l. 49-50). La fila `accepted` de l. 117 repite: «la sesión 12 ejecutará las
     cuatro capas sobre adapters construidos después de autorizar
     construcción». El cierre mantiene a los proveedores `target` «sin afirmar
     compatibilidad antes de las pruebas de la sesión 12» (l. 405-406) y deja
     «conformidad ejecutada y métricas para la 12» (l. 411). Leído literalmente,
     S12 transcurriría en parte después de autorizar la construcción.
  2. **S09, S10 y S11 heredan la misma asignación.** S09 aporta requisitos «para
     la conformidad de la sesión 12» (l. 47). S10 deja a S12 «La conformidad de
     adapters» (l. 172-173). S11 dice que las pruebas live «alimentan
     conformidad de S12» (l. 124) y que «S12 puede certificar inicialmente menos
     tuplas live» (l. 127). Su cierre afirma: «sólo S12 puede certificar
     adapters, tuplas de plataforma y perfiles», y le asigna también la
     «decisión de comenzar construcción» (l. 227-230). Los «Puntos abiertos» de
     ADR-007 l. 124 («¿Qué adapters y perfiles superan conformidad…? → sesión
     12»), ADR-008 l. 71 y ADR-010 l. 192 envían a S12 la misma pregunta. El
     tracker de definición l. 406 («la conformidad real se ejecutará en sesión
     12») y l. 448 («siguen `target` hasta conformidad en S12») lo repiten.
  3. **S12 lo resolvió de otra manera.** Su punto de entrada identifica la
     circularidad: «El plan vigente exige validar adapters reales, pero la fase
     de definición prohíbe implementar producto» (l. 16-18). Su decisión
     `accepted` de l. 56 es que S12 «definirá y revisará» las pruebas y la
     matriz, y que «La conformidad ejecutada será un gate de implementación y
     release: cada adapter y tupla seguirá `target/unverified` hasta superar sus
     pruebas». La fila `rejected` de l. 57 descarta «Exigir conformidad completa
     antes de autorizar construcción». La l. 67-68 sitúa la evidencia de
     conformidad «durante la construcción». El tracker l. 20-23 ya lo recoge:
     «la conformidad real será un gate posterior de implementación y release».
  4. **Sin marca en los documentos afectados.** Las búsquedas de «sesión 12» y
     «S12» junto a «ejecut» o «conformidad» en S08, S09, S10, S11, ADR-007,
     ADR-008 y ADR-010 no devuelven ninguna nota que remita a S12 l. 56. Las
     l. 406 y 448 del tracker conservan la formulación anterior junto a la nueva
     de l. 20-23.
  5. **El criterio global no lo desambigua.** El índice exige que «haya pruebas
     de aceptación para T800R y el repositorio piloto» (l. 159) sin decir si
     deben estar especificadas o superadas. Lo mismo ocurre con el flujo
     «verificable» de l. 155 y la arquitectura «implementable» de l. 158. La
     fila 12 del plan sigue siendo «Especificación v0 y decisión de construir»
     (l. 70), coherente con S12 l. 56 e incoherente con S08 l. 49-50 y 117.
- Inferencia (si aplica): S08-S11 cerraron con un modelo en el que S12
  ejecutaba la conformidad, lo que exigía construir adapters dentro de la
  definición o prolongar S12 después de autorizar. S12 corrigió ese modelo sin
  propagar la corrección. Hoy conviven dos lecturas de «S12 completada», que es
  la condición de la autorización (S11 l. 50; tracker l. 22-23).

## Observación y propuesta

- Observación: una decisión `accepted` de S12 cambia el alcance que cuatro
  sesiones cerradas y tres ADR le asignaron. Ninguno de esos documentos lo
  refleja, y la condición del índice que debería fijar la frontera (l. 159) es
  ambigua. Es el mismo patrón de omisión silenciosa ya documentado para
  sesiones anteriores (por ejemplo, `REV-2026-059`-`061`). Esta vez afecta,
  además, a la frontera de fase.
- Propuesta concreta (decisión humana; no se edita el canon): (a) precisar
  l. 159 como «pruebas de aceptación y matriz de conformidad especificadas y
  revisadas; su ejecución es un gate de implementación y release», con remisión
  a S12 l. 56; (b) añadir a S08 l. 49-50 y 117, al cierre de S11 l. 227-228 y a
  los «Puntos abiertos» de ADR-007, ADR-008 y ADR-010 una marca que remita a
  S12 l. 56, según la convención de marcas de `definition/README.md` que
  estudió `CT06`; (c) corregir o marcar el tracker de definición l. 406 y 448.
- Contraargumento o coste/riesgo: la lectura más favorable toma «sesión 12» en
  S08-S11 como una referencia genérica a la validación y no a la sesión como
  unidad de la fase de definición. Con esa lectura, la S12 `in_progress`
  prevalece por ser posterior, y el tracker l. 20-23 ya orienta a quien retome.
  El coste es editorial (marcas en siete documentos). El riesgo de no hacerlo es
  que una auditoría de cierre de S12 contra S08 l. 117 o S11 l. 228 declare
  incumplido el criterio o intente cumplirlo con un spike no autorizado.

## Análisis adicional

- Evidencia interna: [criterio de cierre](../product-definition.md#criterio-de-cierre-de-la-definición);
  [plan de sesiones](../product-definition.md#sesiones-de-definición);
  [S08](../definition/session-08-portability.md);
  [S09](../definition/session-09-security-governance.md);
  [S10](../definition/session-10-product-experience.md);
  [S11](../definition/session-11-mvp-architecture.md);
  [S12](../definition/session-12-validation-convergence.md);
  [ADR-007](../adr/ADR-007-contrato-de-capacidades-y-adapters-portables.md);
  [ADR-008](../adr/ADR-008-baseline-de-seguridad-y-gobernanza.md);
  [ADR-010](../adr/ADR-010-arquitectura-tecnica-del-mvp.md);
  [tracker de definición](../definition-tracker.md).
- Relación con anotaciones existentes, sin duplicarlas:
  [`REV-2026-099`](2026-09-25-REV-2026-099-preguntas-abiertas-del-indice-sin-disposicion-y-dos-sobre-resultados-que-s12-situa-despues-de-autorizar-la-construccion.md)
  trata la misma decisión de S12 desde las preguntas abiertas del índice
  (l. 139-144). Esta anotación la trata desde los documentos que la contradicen
  y desde la condición de cierre l. 159.
  [`REV-2026-006`](2026-09-21-REV-2026-006-criterio-de-cierre-sin-autorizacion-ni-verificador.md)
  trata la falta de evidencia por condición del criterio global.
- Contraevidencia y límites: S12 está `in_progress`; su criterio de salida
  (l. 45-50) obliga a registrar la autorización y podría incluir las marcas. S08
  (l. 117) ya decía «después de autorizar construcción», así que nunca exigió
  construir dentro de la definición: la contradicción es de ubicación temporal
  («sesión 12»), no de prohibición de fase. No se leyó S08 más allá de l. 44-51,
  112-119 y 384-413; S09, S10 y S11 sólo en sus cierres y en las líneas citadas;
  ADR-007, ADR-008 y ADR-010 sólo por búsqueda.
- Pregunta para resolver: ¿«S12 completada» incluye ejecutar o certificar
  conformidad, como dicen S08 l. 117 y S11 l. 227-228, o sólo especificarla,
  como decide S12 l. 56? Si es lo segundo, ¿dónde se registran las marcas en
  S08-S11 y en los ADR, y cómo se reformula l. 159?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [checkpoint B003](blocks/B003.md),
  [`REV-2026-099`](2026-09-25-REV-2026-099-preguntas-abiertas-del-indice-sin-disposicion-y-dos-sobre-resultados-que-s12-situa-despues-de-autorizar-la-construccion.md),
  [`REV-2026-006`](2026-09-21-REV-2026-006-criterio-de-cierre-sin-autorizacion-ni-verificador.md)

## Preguntas pendientes

- ¿La condición de l. 153 («contrato portable para los tres agentes») debe
  cubrir también los adapters de Beads y Docker que S11 incluye en el MVP y que
  la pregunta abierta de l. 139-140 enumera? No se trata como defecto: la
  matriz de conformidad del criterio de S12 (l. 46) puede cubrirlos.

## Cobertura y límites

- Leído: `docs/product-definition.md:1-93` y `140-204`; S12 completa; S08
  l. 44-51, 112-119 y 384-413; S09 l. 44-47 y 100-123; S10 l. 148-178; S11
  l. 44-51, 124-127 y 206-235; tracker de definición l. 1-25 y coincidencias
  de búsqueda en l. 405-407 y 447-449.
- Fuentes externas: no aplican.
- No examinado: el resto de S08-S11; ADR-007 a ADR-010 salvo por búsqueda.
