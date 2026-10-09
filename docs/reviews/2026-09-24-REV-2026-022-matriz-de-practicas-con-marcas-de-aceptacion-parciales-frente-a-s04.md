# Anotación de revisión

- ID de anotación: `REV-2026-022`
- Unidad y ubicación: `S03-prácticas-candidatas-de-los-artículos` —
  [session-03-sources-of-truth.md, «Prácticas candidatas de los artículos»](../definition/session-03-sources-of-truth.md#prácticas-candidatas-de-los-artículos)
  (l. 210-228), frente a
  [S04, tabla de conclusiones](../definition/session-04-operating-cycle.md)
  (l. 109, 111 y 112) y al índice rector,
  [«Revisión transversal de prácticas de harnesses»](../product-definition.md#revisión-transversal-de-prácticas-de-harnesses)
  (l. 113-128). Bloque `B011`.
- Revisión examinada: 2026-09-24; repositorio sin commits. Citas distintivas:
  «salvo las prácticas expresamente aceptadas en la tabla de decisiones, sus
  filas siguen siendo propuestas» (l. 213-214); «**`accepted` en sesión 4.**»
  (l. 224); «Reanudar comprobando artefactos y estado real, no sólo notas»
  (l. 221)
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `accepted`
- Confianza: `alta` sobre los hechos; `media` sobre el impacto (no se leyeron
  S06, S07 ni S12 para las filas asignadas a las sesiones 6, 7 y 12)
- Impacto: qué prácticas de la matriz siguen siendo propuestas y cuáles ya son
  acuerdos. La regla de lectura de l. 213 lleva a concluir que dos prácticas
  aceptadas en S04 siguen abiertas. Afecta al criterio de cierre de la revisión
  transversal («decisiones y pendientes trazables», ver
  [`REV-2026-005`](2026-09-21-REV-2026-005-revision-transversal-sin-rastro-s05-s07.md))
  y a la planificación de las sesiones 11 y 12.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (contradicción y omisión exclusivamente
  internas)
- Fuente primaria: `docs/definition/session-03-sources-of-truth.md` l. 210-228;
  `docs/definition/session-04-operating-cycle.md` l. 109, 111 y 112;
  `docs/product-definition.md` l. 113-128
- Sección o localizador: «Prácticas candidatas de los artículos» (S03);
  conclusiones `accepted` sobre reanudación, evaluación regresiva y enforcement
  determinista (S04); «Revisión transversal de prácticas de harnesses» (índice)
- Fecha de consulta/publicación: consulta 2026-09-24; S03 confirmada el
  2026-09-14 y editada después (l. 224 y 234 mencionan S04 y ADR-003)
- Hecho observado:
  1. l. 213-214 fija la regla de lectura: «salvo las prácticas expresamente
     aceptadas en la tabla de decisiones, sus filas siguen siendo propuestas».
     La matriz lleva marca `accepted` en tres filas: l. 219 y 220 («en sesión
     3») y l. 224 («en sesión 4»).
  2. S04 aceptó también el principio de otras dos filas y la matriz no lo
     refleja. l. 221 («Reanudar comprobando artefactos y estado real, no sólo
     notas», sesión de decisión «4») frente a S04 l. 109, `accepted`: «Al
     iniciar o reanudar, el orchestrator verifica la revisión real, los cambios
     presentes, el estado y la evidencia persistidos, el owner declarado y el
     último checkpoint». l. 223 («Convertir restricciones acordadas y
     verificables en comprobaciones automatizadas», sesión «4 y 12») frente a
     S04 l. 112, `accepted`: «Toda regla obligatoria verificable mecánicamente
     debe aplicarse mediante runtime/policy determinista […] Los mecanismos
     concretos se decidirán después». La unidad se editó tras su cierre para
     marcar l. 224 y actualizar l. 234, pero no l. 221 ni l. 223.
  3. Las sesiones de decisión no coinciden con el índice rector. l. 223 asigna
     «4 y 12»; el índice (l. 123) asigna «Arquitectura, restricciones
     comprobables y control de degradación del código» a la sesión 11, que no
     aparece en l. 223. l. 224 asigna «11–12» y coincide con S04 l. 111 y con
     el índice l. 124.
  4. El índice (l. 126-128) compromete registrar para cada práctica «fuente,
     problema que resuelve, beneficios, costes, riesgos, decisión
     `accepted`/`deferred`/`rejected` y justificación» y, si se aplaza, «un
     punto concreto de resolución». La matriz tiene las columnas práctica,
     evidencia, beneficio esperado, coste o riesgo y sesión de decisión: no hay
     «problema que resuelve», ni columna de decisión (la marca va en negrita
     dentro de la práctica), ni justificación; las filas no aceptadas no llevan
     `deferred`, sólo una sesión.
- Inferencia (si aplica): quien aplique l. 213 considera propuestas la
  reanudación comprobando artefactos y las comprobaciones automatizadas de
  restricciones, aunque S04 las aceptó como principio con mecanismos
  diferidos. El registro que el índice exige para cerrar la revisión transversal
  del área 3 (l. 115) no se puede reconstruir desde la matriz ni desde la tabla
  de decisiones de S03.

## Observación y propuesta

- Observación: la matriz es a la vez insumo («organiza parte de la discusión»,
  l. 213) y registro parcial de estado (marcas en negrita mantenidas después
  del cierre). Ese doble papel, sin decir cuál prevalece, produce marcas
  incoherentes entre filas comparables: una de las tres prácticas resueltas en
  S04 está marcada y dos no.
- Propuesta concreta: decidir si la matriz de S03 es el registro vigente de la
  revisión transversal para su área o sólo un insumo. Si es registro: completar
  las marcas de l. 221 y l. 223 con enlace a S04 l. 109 y 112, alinear las
  sesiones con el índice (o corregir el índice), y añadir las columnas
  comprometidas o remitir al registro que las tenga. Si es insumo: declararlo en
  l. 212-215, retirar las marcas cruzadas y enlazar el registro consolidado.
- Contraargumento o coste/riesgo: l. 214-215 ya dice que la revisión «continúa
  en las sesiones posteriores» y mantener marcas cruzadas en una unidad cerrada
  es coste recurrente; puede existir un registro consolidado en S12 o en el
  índice que no se leyó. Las filas asignadas a las sesiones 6 y 7 no se
  contrastaron con S06 y S07 (ya cerradas); si tampoco están marcadas, el
  patrón es general y no específico de S04.

## Análisis adicional

- Evidencia interna: l. 213-214 (regla de lectura) frente a l. 221 y 223 (sin
  marca) y S04 l. 109 y 112 (`accepted`); l. 223 frente a índice l. 123;
  l. 217-218 (columnas) frente a índice l. 126-128. Relación con
  [`REV-2026-005`](2026-09-21-REV-2026-005-revision-transversal-sin-rastro-s05-s07.md)
  (rastro de la revisión transversal en S05-S07) y con
  [`REV-2026-021`](2026-09-24-REV-2026-021-atribuciones-de-evidencia-sin-enlace-y-evals-atribuidos-a-fuente-no-listada.md)
  (columna «Evidencia» sin enlaces).
- Contraevidencia y límites: S04 l. 109 y 112 son conclusiones más amplias que
  las filas de S03 y podría sostenerse que «aceptan el principio» sin agotar la
  práctica; la marca de l. 224 tiene esa misma naturaleza («principio
  aceptado; 11–12: concretar»), por lo que el criterio ya aplicado a l. 224
  aplicaría a l. 221 y 223. No se leyeron S06, S07, S11 ni S12.
- Pregunta para resolver: ¿cuál es el registro vigente de decisiones sobre
  prácticas candidatas del harness y deben las marcas de S03 reflejar S04 en
  las tres filas resueltas o en ninguna?

## Resolución humana

- Decisión y justificación: `accepted` (atendida). Primero `deferred` en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12. El 2026-10-09 la persona aprobó el [cierre de la revisión transversal](../revision-transversal-cierre.md): su §1 registra cada práctica con fuente, problema, beneficios, costes, riesgos, decisión y justificación (el formato que el índice exigía y la matriz de S03 no tenía), y su §2, área 1, deja constancia de que la matriz de S03 es insumo y de que las decisiones vigentes son las de las tablas de S03 y S04 (reanudar comprobando estado real, S04 l. 109; comprobaciones automatizadas de restricciones, S04 l. 112 y S11). La matriz de S03 no se reescribe; ningún acuerdo cambia. La evidencia y la propuesta originales se conservan.
- Responsable y fecha: la persona (Camilo Barreto), 2026-10-09 (resolución); 2026-09-30 (aplazamiento previo).
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Cierre de la revisión transversal de prácticas de harnesses»; [revision-transversal-cierre.md](../revision-transversal-cierre.md) §1 y §2.
- Enlaces relacionados: [B011](blocks/B011.md),
  [`REV-2026-005`](2026-09-21-REV-2026-005-revision-transversal-sin-rastro-s05-s07.md),
  [`REV-2026-021`](2026-09-24-REV-2026-021-atribuciones-de-evidencia-sin-enlace-y-evals-atribuidos-a-fuente-no-listada.md)

## Preguntas pendientes

Ver el checkpoint [B011](blocks/B011.md).

## Cobertura y límites

Ver el checkpoint [B011](blocks/B011.md). Sin fuentes externas necesarias para
este hallazgo; el contraste es interno.
