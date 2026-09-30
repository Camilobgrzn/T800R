# Anotación de revisión

- ID de anotación: `REV-2026-001`
- Unidad y ubicación: índice rector —
  [product-definition.md, «Definición de producto de T800R»](../product-definition.md#definición-de-producto-de-t800r),
  líneas 11-14 y 29-30 (bloque `B001`)
- Revisión examinada: `docs/product-definition.md` con «Última actualización:
  2026-09-21» (línea 6); sin commit disponible en el repositorio
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `media`
- Impacto: qué texto aplica un agente cuando un ADR aceptado y la unidad canónica
  de su sesión cubren el mismo acuerdo y difieren en un detalle normativo.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (contradicción exclusivamente interna; según
  [reviews/README.md](README.md) no requiere fuente externa)
- Fuente primaria:
  - [`docs/product-definition.md`](../product-definition.md) líneas 11-14 y 29-30.
  - [`docs/definition/README.md`](../definition/README.md) líneas 3-6 y 18-21.
  - [`docs/adr/ADR-004-contrato-portable-de-handoffs.md`](../adr/ADR-004-contrato-portable-de-handoffs.md)
    líneas 1-10 y 25-27.
- Sección o localizador: índice rector, párrafo «Este documento es el índice
  rector…» y acuerdo inicial 6; README de `definition/`, párrafo «No existe un
  registro duplicado…»; ADR-004, cabecera «**Estado:** Aceptada» y TL;DR.
- Fecha de consulta/publicación: consulta 2026-09-21; índice rector fechado
  2026-09-21; ADR-004 fechado 2026-09-16.
- Hecho observado: el índice rector afirma «Cada unidad de `definition/` es la
  fuente canónica de los acuerdos de su sesión. Las decisiones arquitectónicas
  transversales, costosas de revertir o con alternativas relevantes se
  registrarán además como ADRs» (líneas 11-14) y, en el acuerdo 6, «Las
  decisiones se conservarán en la unidad canónica de cada sesión y, cuando
  corresponda, en ADRs» (líneas 29-30). `docs/definition/README.md` añade «No
  existe un registro duplicado: cada acuerdo y su detalle viven en la unidad de
  la sesión correspondiente» (líneas 20-21). Al mismo tiempo, ADR-004 está en
  estado «Aceptada» y enuncia contenido normativo propio («adoptar `handoff/v1`,
  un contrato común tipado, inmutable e idempotente…», «debe preservar el
  ownership único de ADR-003»), que solapa la materia de la unidad S05.
- Inferencia: ninguna regla escrita en el bloque resuelve qué texto prevalece si
  el ADR y la unidad divergen; «además» y «cuando corresponda» describen dónde se
  registra, no la precedencia ni el procedimiento de reconciliación.

## Observación y propuesta

- Observación: el índice rector fija la jerarquía de fuentes de la definición
  (unidad canónica por sesión) pero no fija el estatus normativo de los ADRs
  respecto de esa unidad, aunque ya existen seis ADRs aceptados cuyo contenido
  solapa sesiones cerradas. Un agente que siga `AGENTS.md` y encuentre una
  diferencia de detalle entre ADR-004 y S05 no tiene criterio declarado.
- Propuesta concreta: añadir al índice rector una frase de precedencia explícita,
  por ejemplo: el ADR registra la decisión transversal y su justificación; la
  unidad canónica de la sesión prevalece sobre el ADR en el detalle operativo;
  ante divergencia se actualiza la unidad y se enlaza el ADR, indicando quién
  reconcilia. La formulación exacta la decide la persona.
- Contraargumento o coste/riesgo: lectura alternativa razonable — «además» y «No
  existe un registro duplicado» ya implican que la unidad manda siempre y que el
  ADR sólo conserva el porqué; entonces bastaría una aclaración menor y no un
  cambio de acuerdo. Coste: tocar el índice rector durante la fase de definición
  y arriesgar reabrir una discusión ya cerrada sin necesidad práctica
  demostrada; no se ha observado hoy ninguna divergencia real ADR/unidad.

## Análisis adicional

- Evidencia interna: [índice rector](../product-definition.md) líneas 11-14,
  29-30; [README de definición](../definition/README.md) líneas 18-21;
  [ADR-004](../adr/ADR-004-contrato-portable-de-handoffs.md) líneas 1-10.
- Contraevidencia y límites: no se ha comprobado si S05 y ADR-004 divergen en
  algún detalle concreto; esa comparación corresponde a los bloques de S05 y a
  los cruces transversales, no a `B001`. Tampoco se ha leído el resto de ADRs ni
  la sección de cierre de la definición (líneas 149-191, bloque `B003`), que
  podría contener una regla de precedencia fuera de este rango. Lo demostrado se
  limita a que el rango 1-88 del índice rector no declara precedencia.
- Pregunta para resolver: ¿qué documento prevalece, y quién reconcilia, cuando un
  ADR aceptado y la unidad canónica de su sesión difieren en un detalle
  normativo?

## Preguntas pendientes

- ¿Debe el índice rector declarar también el estado de cada ADR (aceptado,
  superado) o basta con el archivo del ADR?

## Cobertura y límites

- Documentos leídos: `docs/product-definition.md:1-88`;
  `docs/definition/README.md` (completo, 21 líneas);
  `docs/adr/ADR-004-contrato-portable-de-handoffs.md:1-28`;
  `docs/definition-tracker.md:1-12`; `AGENTS.md`.
- Fuentes externas consultadas: ninguna; el problema es exclusivamente interno.
- Partes no examinadas: `docs/product-definition.md:89-191`, unidades S01-S07
  completas, ADR-001, ADR-002, ADR-003, ADR-005 y ADR-006.

## Nota de vigencia (2026-09-25, pasada 2 de `B001`)

- Resultado: **sigue vigente y ampliada**; no se cierra ni se atenúa.
- Base comparada: `docs/product-definition.md` de 204 líneas, «Última
  actualización: 2026-09-24» (l. 6). Las citas de l. 11-14 («Cada unidad de
  `definition/` es la fuente canónica… se registrarán además como ADRs») y
  l. 29-30 (acuerdo 6) siguen literales en las mismas líneas. La cita «No
  existe un registro duplicado» de `docs/definition/README.md` está hoy en
  l. 25-26 (antes l. 20-21), porque la tabla creció con S08-S12.
- Cambio de contexto: ya no hay seis ADRs aceptados, sino diez (`docs/adr/`
  ADR-001 a ADR-010). Ninguna regla nueva de precedencia entre ADR y unidad
  para el proceso de definición: la búsqueda de «prevalec|precedencia» en
  `docs/` fuera de `reviews/` sólo devuelve reglas de producto (S08 l. 96, 98;
  S10 l. 99, 130; ADR-007 l. 94; ADR-008 l. 37; ADR-009 l. 62) o de
  investigación, ninguna sobre la relación ADR/unidad.
- Ampliaciones registradas por los cruces (sin repetirlas aquí): `CT04`
  (enrutado del tracker de definición a ADR-001/ADR-002 y resolución por
  analogía con S03 l. 53-54), `CT05` y
  [`REV-2026-097`](2026-09-25-REV-2026-097-adr-003-a-adr-005-usados-como-invariantes-por-s06-s08-s10-y-las-auditorias-de-cierre-en-lugar-de-s04-s06-remision-de-s05-l66-perdida.md)
  (los consumidores preservan el ADR y no la unidad) y `CT06` (doble
  inversión en S07/ADR-006). La pasada 2 comprueba además que el cierre de S08
  (S08 l. 408-409) audita «frente a ADR-003 a ADR-006», lo que confirma que la
  sesión cuyo aplazamiento motivó esta nota repite el patrón.
- Límite: S12 sigue `in_progress` y podría cambiar el índice rector o declarar
  la precedencia; si lo hace, esta nota deberá revisarse.

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [checkpoint B001](blocks/B001.md), `REV-2026-002`
