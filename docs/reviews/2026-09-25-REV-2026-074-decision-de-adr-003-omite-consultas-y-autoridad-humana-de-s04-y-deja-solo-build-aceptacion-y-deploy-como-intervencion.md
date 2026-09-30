# Anotación de revisión

- ID de anotación: `REV-2026-074`
- Unidad y ubicación: `ADR-003` — [«Decisión»](../adr/ADR-003-ciclo-operativo-y-coordinacion.md#decisión),
  `docs/adr/ADR-003-ciclo-operativo-y-coordinacion.md:44-98` (puntos 2, 3, 8, 10,
  11 y 12), frente a `S04` — [«Acuerdos y orientación de la sesión»](../definition/session-04-operating-cycle.md#acuerdos-y-orientación-de-la-sesión)
  (l. 76, 79, 84-88, 104, 110, 112) y a `ADR-001` —
  [«Decisión»](../adr/ADR-001-autonomia-y-responsabilidades.md#decisión)
  (l. 75-87). Bloque `B036`.
- Revisión examinada: estado de los archivos al 2026-09-25 (repositorio sin
  commits; ADR-003 fechado 2026-09-15, S04 con criterio comprobado el
  2026-09-15). Citas distintivas: «**Roles bajo demanda.** El orchestrator
  reconcilia, selecciona trabajo, asigna ownership, coordina dependencias y
  aplica gates» (ADR l. 74-75); «producción, efectos externos o acciones
  irreversibles requieren autorización explícita» (l. 85-86); «las semánticas
  usan evidencia y revisión proporcional» (l. 94); «T800R consultará a la persona
  para continuar si necesita cambiar comportamiento, alcance, interfaz, criterio
  de aceptación, una decisión técnica acordada, permisos o un riesgo» (S04 l. 85).
- Tipo: `incompleto`
- Gravedad: `baja`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos (lectura completa de l. 44-98 y de S04
  l. 69-116; búsqueda de «persona», «human», «consult», «riesgo», «alcance» e
  «interfaz» en todo ADR-003); `media` sobre el impacto (depende de si el ADR se
  aplica sin S04)
- Impacto: qué supuestos obligan a T800R a detenerse y consultar durante un
  incremento ya autorizado, y qué decisiones quedan reservadas a la persona,
  para quien use la «Decisión» de ADR-003 como contrato del ciclo (por ejemplo,
  al materializar en runtime/policy los «gates de autorización» de S04 l. 112).
  No cambia ninguna fila aceptada de S04.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión exclusivamente interna; no requiere
  fuente externa según [README](README.md)).
- Fuente primaria: `docs/adr/ADR-003-ciclo-operativo-y-coordinacion.md:49-56,
  74-78, 83-98, 105, 125-126`; `docs/definition/session-04-operating-cycle.md:76,
  79, 81, 84-88, 104, 110, 112`; `docs/adr/ADR-001-autonomia-y-responsabilidades.md:75-87`;
  `docs/definition-tracker.md:314-321, 341`.
- Sección o localizador: ver «Unidad y ubicación».
- Fecha de consulta/publicación: consulta 2026-09-25; ADR-003 y S04 fechados
  2026-09-15; ADR-001 fechado 2026-09-14.
- Hecho observado:
  1. **La «Decisión» sólo nombra tres intervenciones humanas.** «human» aparece
     en l. 51 (autorización de `build` por incremento), l. 54 («aceptación
     humana» como gate) y l. 83 (aceptación final tras `verify`); fuera del
     rango, en «Consecuencias» l. 105. «persona» no aparece en ningún punto del
     ADR (búsqueda en todo el archivo).
  2. **Faltan los supuestos de consulta durante la construcción.** S04 fija,
     en filas `accepted`, cuándo T800R debe volver a la persona: l. 85 (cambiar
     «comportamiento, alcance, interfaz, criterio de aceptación, una decisión
     técnica acordada, permisos o un riesgo que requiera revisión»); l. 79 (si
     una hipótesis refutada cambia «comportamiento, alcance o una decisión
     técnica acordada, reabre colaboración humana sobre el ámbito afectado»);
     l. 76 (cambiar «una interfaz o criterio de aceptación ya acordado obliga a
     volver a `plan`, aunque la implementación técnica sea pequeña»); l. 88
     («si falta un acuerdo funcional, debe consultar»). El punto 2 (l. 49-52)
     conserva la frontera `plan`/`design` sin la regla de retorno de l. 76; el
     punto 3 (l. 55-56) dice que «Un hallazgo devuelve sólo el ámbito afectado»
     sin decir cuándo ese retorno exige a la persona; el punto 11 (l. 88-91)
     regula qué se persiste de una consulta, no cuándo procede. Ningún punto
     recoge l. 85, l. 79, la regla de retorno de l. 76 ni l. 88.
  3. **Falta la autoridad reservada a la persona.** S04 l. 110 termina el
     reparto de roles con «La persona conserva autoridad sobre acuerdos,
     autorización de `build` por incremento, alto riesgo, aceptación y `deploy`
     sensible». El punto 8 (l. 74-78), que resume esa fila, omite la frase; los
     puntos 2 y 10 recogen `build`, aceptación y `deploy`, pero «acuerdos» y
     «alto riesgo» no tienen punto («riesgo» sólo aparece en el ADR en l. 37, 42
     y 110, fuera de la «Decisión»).
  4. **«Humana» desaparece donde S04 la exige.** S04 l. 112: las reglas
     semánticas «se comprueban con evidencia, verifier y revisión humana según
     riesgo»; punto 12 (l. 94): «las semánticas usan evidencia y revisión
     proporcional». S04 l. 104: el agente «no sustituye la revisión humana
     cuando corresponda»; punto 9 (l. 79-82) no lo recoge. S04 l. 87: los
     despliegues sensibles «requieren autorización humana explícita, presentando
     revisión, destino, comprobaciones y recuperación. La aceptación funcional
     previa no autoriza por sí sola esos despliegues»; punto 10 (l. 85-86):
     «requieren autorización explícita», sin «humana», sin el contenido
     presentado y sin la separación entre aceptación y autorización de efectos.
  5. **ADR-001 cubre una parte y contradice otra sin conciliación.** ADR-003
     enlaza ADR-001 (l. 126). ADR-001 punto 4 (l. 81-84) manda consultar «por
     cambios de alcance o acuerdos técnicos, ambigüedades que afecten al
     comportamiento y bloqueos fuera de sus capacidades o permisos» y el punto 5
     (l. 85-87), revisión humana ante alto riesgo; no nombra interfaz, criterio
     de aceptación, cambio de permisos, el retorno a `plan` ni la falta de un
     acuerdo funcional. ADR-001 punto 2 (l. 75-77) dice que «La confirmación
     humana de que esa definición está lista para construir autoriza la
     construcción», mientras S04 l. 81 excluye expresamente la autorización
     «una sola vez para toda la iniciativa» y ADR-003 punto 2 la exige «por
     incremento» (l. 51-52) sin declarar que refina o sustituye ADR-001 punto 2.
  6. **Posición del ADR como fuente.** A diferencia de ADR-001 y ADR-002
     (tracker de definición l. 318-319), ADR-003 no figura en la tabla de
     fuentes por tema (l. 314-321); se enlaza en la fila de la sesión 4 junto al
     cierre de S04 (l. 341) y su «Referencias» llama a S04 «Acuerdos canónicos»
     (l. 125).
- Inferencia (si aplica): leída sin S04, la «Decisión» describe un ciclo cuyo
  único freno humano entre la autorización de `build` y la aceptación final es
  la consulta genérica de ADR-001 punto 4, más estrecha que S04 l. 85; la
  reserva de autoridad sobre acuerdos y alto riesgo y la exigencia de revisión
  humana según riesgo en reglas semánticas no se leen en ADR-003. Es el mismo
  patrón que [`REV-2026-065`](2026-09-25-REV-2026-065-decision-de-adr-001-omite-la-deteccion-de-riesgo-por-t800r-estrecha-la-no-sustitucion-y-reformula-harness-y-permisos-frente-a-s02.md)
  y [`REV-2026-069`](2026-09-25-REV-2026-069-decision-de-adr-002-resume-s03-sin-limite-inequivoco-ni-deteccion-evidencia-sin-revision-humana-y-remisiones-sin-destino.md):
  el resumen amplía el margen del agente respecto de la unidad.

## Observación y propuesta

- Observación: ninguna omisión contradice S04 de frente; todas se resuelven
  leyendo la unidad. El riesgo es que los puntos 2, 3, 8, 10 y 12 se tomen como
  el contrato del ciclo y que la única lista de consultas visible en los ADR
  sea la de ADR-001, que además autoriza la construcción una sola vez.
- Propuesta concreta: que la persona decida (a) si la «Decisión» de ADR-003
  declara que resume S04 y que l. 76, 79, 85, 88, 104, 110 y 112 siguen
  vigentes en lo no repetido; o (b) si añade un punto «Límites de autonomía e
  intervención humana» que recoja los supuestos de consulta de S04 l. 85 y 88,
  el retorno a `plan` de l. 76, la reserva de autoridad de l. 110 y «humana» en
  los puntos 10 y 12; y (c) en ambos casos, si ADR-003 punto 2 debe declarar que
  la autorización por incremento sustituye la confirmación única de ADR-001
  punto 2. Conviene decidirlo junto con `REV-2026-065`, `066`, `069`, `029` y
  `014`. No editar ADR-003, ADR-001 ni S04 sin esa decisión.
- Contraargumento o coste/riesgo: ADR-003 l. 125 remite a S04 como «Acuerdos
  canónicos» y el tracker de definición lo enlaza junto al cierre, lo que ya
  sugiere subordinación; ADR-001 (enlazado en l. 126) cubre la mayor parte de
  los supuestos de consulta y el alto riesgo; «revisión proporcional» puede
  incluir la humana; «aplica gates» (punto 8) puede entenderse como aplicar los
  gates humanos de S04. El coste de la opción (a) es una frase; la de (b), un
  punto. La gravedad es `baja` porque la unidad canónica está completa.

## Análisis adicional

- Evidencia interna: hechos 1-6 con sus localizadores. Coinciden en sustancia
  y no se anotan: punto 2 con S04 l. 76-78, 81-83 (salvo hecho 2); punto 10 con
  l. 86-87, 102 (salvo hecho 4); «Consecuencias» l. 105 con l. 84.
- Contraevidencia y límites: no se leyeron S09/ADR-008, que pueden haber
  concretado la política de riesgo (ADR-003 l. 118 la envía a la sesión 9) ni
  la prosa de S04 l. 150-223. No se afirma que algún documento posterior haya
  aplicado la lectura amplia. La relación ADR-001 punto 2 frente a S04 l. 81 ya
  consta desde el lado de ADR-001 (`REV-2026-066`) y desde S02/S04
  (`REV-2026-029`); aquí sólo se registra que ADR-003 no la concilia.
- Pregunta para resolver: ¿la «Decisión» de ADR-003 es un resumen subordinado a
  S04 —y debe declararlo— o debe recoger los supuestos de consulta, el retorno a
  `plan`, la autoridad reservada a la persona y la revisión humana según riesgo,
  y declarar su relación con la confirmación única de ADR-001 punto 2?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B036](blocks/B036.md),
  [`REV-2026-014`](2026-09-21-REV-2026-014-modelo-de-interaccion-frente-a-puntos-de-intervencion-del-proyecto.md),
  [`REV-2026-029`](2026-09-24-REV-2026-029-ciclo-colaborativo-de-s04-sin-mapa-a-etapas-y-gates-confirmar-la-definicion-frente-a-autorizacion-por-incremento.md),
  [`REV-2026-065`](2026-09-25-REV-2026-065-decision-de-adr-001-omite-la-deteccion-de-riesgo-por-t800r-estrecha-la-no-sustitucion-y-reformula-harness-y-permisos-frente-a-s02.md),
  [`REV-2026-066`](2026-09-25-REV-2026-066-adr-001-fuente-de-autonomia-sin-reflejar-s04-ni-s09-puntos-abiertos-con-destinos-cerrados-sin-marca-y-sin-enlace-a-adr-008.md),
  [`REV-2026-069`](2026-09-25-REV-2026-069-decision-de-adr-002-resume-s03-sin-limite-inequivoco-ni-deteccion-evidencia-sin-revision-humana-y-remisiones-sin-destino.md),
  cruces `CT02` y `CT05`.

## Preguntas pendientes

Ver el checkpoint [B036](blocks/B036.md).

## Cobertura y límites

Ver el checkpoint [B036](blocks/B036.md). Fuentes externas: ninguna; el
problema es interno.
