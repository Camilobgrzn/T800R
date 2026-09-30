# Anotación de revisión

- ID de anotación: `REV-2026-024`
- Unidad y ubicación: `S03` — [Comprobación de cierre](../definition/session-03-sources-of-truth.md#s03-cierre),
  «El criterio de salida está cumplido:» (`docs/definition/session-03-sources-of-truth.md:246-261`),
  frente a [Criterio de salida](../definition/session-03-sources-of-truth.md#criterio-de-salida)
  (l. 23-28) y al índice rector,
  [Revisión transversal de prácticas de harnesses](../product-definition.md#revisión-transversal-de-prácticas-de-harnesses)
  (`docs/product-definition.md:113-130`). Bloque `B012`.
- Revisión examinada: estado de los archivos al 2026-09-24; repositorio sin
  commits, huella no disponible. S03 declara «criterio de salida comprobado el
  2026-09-14» (l. 3-4) y fue editada después (l. 224, 234).
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos textuales; `media` sobre su efecto
- Impacto: si el cierre de S03 sirve como constancia de que se cumplió el
  criterio literal; si «OKF» del criterio y del plan se considera satisfecho por
  «conocimiento mantenido» con OKF sólo evaluado; y quién declara cubierta el
  área 3 de la revisión transversal, que el índice asigna únicamente a la
  sesión 3 y cuya cobertura debe comprobarse antes de cerrar la definición.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (contradicción y omisión exclusivamente
  internas; no se invoca ninguna fuente externa)
- Fuente primaria: `docs/definition/session-03-sources-of-truth.md` l. 15,
  23-28, 34-36, 38, 40, 47, 56, 219-224 y 246-261;
  `docs/product-definition.md` l. 61, 113-124 y 126-130
- Sección o localizador: anclas `criterio-de-salida` y `s03-cierre` de S03;
  «Revisión transversal de prácticas de harnesses» del índice rector
- Fecha de consulta/publicación: consulta 2026-09-24; cierre comprobado el
  2026-09-14 según l. 3-4
- Hecho observado: el criterio de salida (l. 25-28) tiene tres cláusulas:
  (a) «asigne responsabilidades a Git, work tracker, OKF, memoria, skills y
  contexto efímero»; (b) «distinga datos canónicos de referencias o
  derivados»; (c) «establezca cómo resolver discrepancias sin dejar
  ambigüedades bloqueantes para definir el ciclo operativo en la sesión 4». El
  cierre (l. 246-256) enumera seis puntos con otra redacción y los declara
  cumplidos sin contrastarlos con pasajes.
  1. **OKF reformulado.** La cláusula (a) y el plan del índice rector (l. 61:
     «Responsabilidades de Git, work tracker, OKF, memoria, skills y contexto
     efímero») tratan OKF como una capa a la que asignar responsabilidades. El
     cierre asigna la responsabilidad a «El conocimiento mantenido» y dice que
     «OKF se evalúa como representación y no como autoridad propia»
     (l. 250-251); la decisión de l. 40 añade que la evaluación «no constituye
     adopción del formato, perfil o versión» y l. 236 aplaza la adopción a la
     sesión 7. El criterio y el plan no se actualizaron: lo que se declara
     cumplido no es lo que el criterio pedía en su literalidad.
  2. **No bloqueo afirmado sin enumerar.** La cláusula (c) exige «sin dejar
     ambigüedades bloqueantes». El cierre reproduce la regla de discrepancias
     (l. 254-255) y afirma sólo que «Los detalles aplazados no bloquean el
     ciclo operativo» (l. 259-260): la negativa se limita a la tabla de
     l. 234-240 y no dice qué ambigüedades se consideraron. Dos anotaciones
     previas identifican ambigüedades en lo que S04 necesitaba:
     [`REV-2026-017`](2026-09-21-REV-2026-017-regla-de-discrepancias-entre-originales-con-casos-sin-salida.md)
     (la regla no tiene salida cuando ámbito y versión no deciden y no hay
     acuerdo que cambiar) y
     [`REV-2026-020`](2026-09-21-REV-2026-020-tabla-de-persistencia-sin-destino-para-lo-no-confirmado.md)
     (la tabla de persistencia no da destino a lo no confirmado ni dice quién
     confirma). El punto 6 del cierre, «La información necesaria para
     continuar debe persistirse en su fuente apropiada» (l. 256), declara
     cumplido justo lo que `REV-2026-020` cuestiona. El cierre no se apoya en
     l. 235 («La obligación de persistir y los límites de autoridad están
     definidos»); esa frase no se cita.
  3. **Cobertura del área 3 no declarada.** El índice rector asigna a la
     sesión 3, y sólo a ella, el área «Organización del repositorio,
     instrucciones y fuentes de verdad» (l. 115) y exige que «Antes de cerrar
     la definición se comprobará la cobertura de estas áreas» (l. 129-130). El
     cierre dice que «La revisión de artículos avanzó en orientación,
     mantenimiento y skills; su cobertura transversal continúa en las demás
     sesiones» (l. 260-261). «Mantenimiento» pertenece al área asignada a la
     sesión 7 (l. 119); «skills» no es un área de la tabla y no tiene fila en
     la matriz de l. 217-224 (procede de las decisiones de l. 45-46); ninguna
     de las tres subáreas de l. 115 se nombra, y ninguna otra sesión tiene
     asignada el área 3 a la que «continuar».
  4. **Elemento fuera del criterio y elemento ausente.** El punto 6 (persistir)
     no figura en el criterio, como ocurrió en
     [`REV-2026-016`](2026-09-21-REV-2026-016-cierre-s02-reformula-quien-ejecuta-y-afirma-no-bloqueo.md).
     A la inversa, el registro de fuentes y los criterios de autoridad
     (decisiones l. 34-36, capa l. 56), la adición más extensa de la sesión y
     objeto de
     [`REV-2026-018`](2026-09-21-REV-2026-018-quien-define-criterios-de-autoridad-y-como-se-audita-el-limite.md)
     y
     [`REV-2026-019`](2026-09-21-REV-2026-019-registro-de-fuentes-autoridad-canonica-con-escritura-del-agente-sin-procedencia.md),
     no aparecen ni en el criterio ni en el cierre.
- Inferencia (si aplica): el cierre funciona como resumen de lo producido, no
  como verificación, y repite el patrón de
  [`REV-2026-011`](2026-09-21-REV-2026-011-cierre-s01-reformula-criterios-de-salida.md)
  (criterio reformulado y declarado cumplido) y de `REV-2026-016` (no bloqueo
  afirmado sin enumerar). Quien compruebe la cobertura del área 3 antes de
  cerrar la definición no encontrará en S03 una declaración de que está
  cubierta ni de qué falta.

## Observación y propuesta

- Observación: los puntos 1, 3, 4 y 5 del cierre sí se pueden contrastar y se
  sostienen en la unidad: l. 248-249 con l. 39 y 71-78; l. 252 con l. 44-47 y
  61-63; l. 253 con l. 60-63 y 66; l. 254-255 con l. 38 y 66-68. La lectura
  alternativa del hecho 1 es que «OKF» en el criterio y en el plan era el
  nombre provisional de la capa de conocimiento (l. 15 ya decía «evaluando
  Open Knowledge Format, OKF, como representación»); es plausible, pero
  entonces l. 61 del índice rector sigue prometiendo una asignación a OKF que
  no existe. El hecho 3 no afirma que el área 3 esté sin cubrir: l. 219 y 220
  (orientación y mantenimiento, `accepted`) tocan «instrucciones» y
  «fuentes de verdad»; lo que falta es la declaración y el residuo
  («organización del repositorio» no tiene fila).
- Propuesta concreta: en la segunda pasada, que la persona decida (a) si «OKF»
  en el criterio y en el índice rector l. 61 debe leerse como «conocimiento
  mantenido» y registrar esa lectura o corregir l. 61; (b) si el cierre debe
  dejar constancia de las ambigüedades consideradas o remitir explícitamente a
  las filas de S04 que las recibieron; (c) dónde se declara la cobertura del
  área 3 y su residuo antes del cierre de la definición (S03 por adenda, S12 o
  el índice rector). No reescribir el cierre sin esa decisión; S03 no se
  reabre por esta anotación.
- Contraargumento o coste/riesgo: el usuario comprobó el cierre (l. 3-4); la
  sesión 4 se celebró y cerró, y l. 234 registra que el lifecycle quedó
  aceptado en S04 y ADR-003, contraevidencia práctica de que nada bloqueó el
  ciclo operativo. No adoptar OKF es una decisión legítima de la sesión y no
  un defecto. Editar una sesión cerrada tiene coste; el valor de la anotación
  está en decidir el patrón para todos los cierres (`REV-2026-011`,
  `REV-2026-016`) y en no perder el área 3 en el cierre global.

## Análisis adicional

- Evidencia interna: criterio (l. 23-28) frente a cierre (l. 246-261); l. 15,
  40 y 236 (OKF evaluado, no adoptado); índice rector l. 61 (plan de la
  sesión 3), l. 113-124 (tabla de áreas) y l. 126-130 (registro y comprobación
  de cobertura); matriz l. 217-224 (sin fila de skills ni de organización del
  repositorio); `AGENTS.md`, forma de trabajo, punto 7 («Antes de cerrar,
  comprueba el criterio de salida»).
  [`REV-2026-005`](2026-09-21-REV-2026-005-revision-transversal-sin-rastro-s05-s07.md)
  documenta la falta de rastro de la revisión transversal en S05-S07;
  [`REV-2026-022`](2026-09-24-REV-2026-022-matriz-de-practicas-con-marcas-de-aceptacion-parciales-frente-a-s04.md),
  que la matriz no sigue el formato comprometido en l. 126-128.
- Contraevidencia y límites: no se leyeron S04, S07 ni S12 para comprobar si
  alguna recogió las ambigüedades de S03 o declaró cubierta el área 3; el
  hallazgo es sobre el rastro en S03 y en el índice rector. La cláusula (c) es
  una negativa que sólo puede comprobarse a posteriori, y S04 cerró. El hecho 4
  no es incumplimiento del criterio: el criterio no pedía el registro de
  fuentes.
- Pregunta para resolver: ¿se acepta que un cierre reformule un criterio de
  salida y afirme la ausencia de ambigüedades bloqueantes sin enumerarlas, y
  dónde se declarará la cobertura del área 3 antes de cerrar la definición?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B012](blocks/B012.md), [B006](blocks/B006.md),
  [B008](blocks/B008.md),
  [`REV-2026-011`](2026-09-21-REV-2026-011-cierre-s01-reformula-criterios-de-salida.md),
  [`REV-2026-016`](2026-09-21-REV-2026-016-cierre-s02-reformula-quien-ejecuta-y-afirma-no-bloqueo.md),
  [`REV-2026-005`](2026-09-21-REV-2026-005-revision-transversal-sin-rastro-s05-s07.md),
  [`REV-2026-017`](2026-09-21-REV-2026-017-regla-de-discrepancias-entre-originales-con-casos-sin-salida.md),
  [`REV-2026-020`](2026-09-21-REV-2026-020-tabla-de-persistencia-sin-destino-para-lo-no-confirmado.md),
  [`REV-2026-022`](2026-09-24-REV-2026-022-matriz-de-practicas-con-marcas-de-aceptacion-parciales-frente-a-s04.md)

## Preguntas pendientes

Ver el checkpoint [B012](blocks/B012.md).

## Cobertura y límites

Ver el checkpoint [B012](blocks/B012.md). Sin fuentes externas necesarias para
este hallazgo; el contraste es interno.
