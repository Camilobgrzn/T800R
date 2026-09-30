# Anotación de revisión

- ID de anotación: `REV-2026-018`
- Unidad y ubicación: `S03-decisiones` —
  [session-03-sources-of-truth.md, fila «La colaboración humana definirá los criterios de autoridad»](../definition/session-03-sources-of-truth.md#decisiones)
  (l. 36)
- Revisión examinada: 2026-09-21; repositorio sin commits. Cita distintiva:
  «Incorporar una nueva fuente como autoridad o convertir un ejemplo en regla
  requiere aclaración humana cuando no esté cubierto por los acuerdos»
- Tipo: `pregunta`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `media`
- Impacto: determina si el reparto «la persona fija criterios, T800R opera
  autónomamente dentro de ellos» puede comprobarse a posteriori o depende de que
  el propio agente juzgue correctamente su límite.

## Clasificación de evidencia

- Clase: `pregunta humana sin fuente`
- Fuente primaria: sin fuente aún (cuestión interna); pasajes:
  `docs/definition/session-03-sources-of-truth.md` l. 34-36, 56 y, como
  dependencia, l. 162-176 y 237
- Sección o localizador: «Decisiones»; «Registro asistido de fuentes»; «Detalles
  aplazados»
- Fecha de consulta/publicación: consulta 2026-09-21
- Hecho observado:
  1. La designación de autoridad corresponde a «la colaboración humana» o «la
     persona» (l. 36, 169). El rango no dice qué persona o rol puede hacerlo
     cuando un proyecto tiene varias, ni cómo se acredita que una designación
     procede de quien puede darla.
  2. La condición que obliga a consultar es «cuando no esté cubierto por los
     acuerdos». Quien evalúa esa cobertura es el mismo agente cuya autonomía se
     limita.
  3. El rastro previsto es «conservar evidencia al utilizar la fuente» (l. 163,
     fuera del rango); el esquema del registro y sus campos obligatorios están
     `deferred` a las sesiones 7, 8 y 10 (l. 237). En «Detalles aplazados» no
     figura la identidad o el rol de quien designa autoridad.
- Inferencia (si aplica): sin un mínimo de contenido para un «criterio de
  autoridad» y sin identidad de quien lo fija, no puede distinguirse a posteriori
  una fuente usada «dentro de los criterios» de una promovida implícitamente a
  autoridad. No está demostrado que sesiones posteriores no lo resuelvan.

## Observación y propuesta

- Observación: la regla es razonable como reparto, pero su verificabilidad
  descansa en piezas aplazadas y en un juicio propio del agente. La ausencia de
  identidad y permisos como aplazamiento ya está señalada para S02 en
  [`REV-2026-015`](2026-09-21-REV-2026-015-aplazamientos-s02-sin-retorno-y-divergentes-de-adr-001.md);
  aquí aparece la misma omisión del lado humano.
- Propuesta concreta: decidir si (a) se añade a «Detalles aplazados» quién puede
  designar o retirar autoridad y con qué rastro; (b) se exige que cada uso de una
  fuente como fundamento de una decisión cite el criterio del registro que lo
  ampara, de modo que la cobertura sea comprobable por un tercero.
- Contraargumento o coste/riesgo: si T800R se concibe para una sola persona por
  proyecto, la pregunta de identidad es prematura; y el esquema del registro ya
  está diferido, de modo que (b) puede pertenecer a esas sesiones. Exigir cita de
  criterio en cada uso aumenta el coste de operación.

## Análisis adicional

- Evidencia interna: l. 36 frente a l. 237; l. 173-176 admiten autorización por
  categoría, lo que amplía el margen de interpretación del agente.
- Contraevidencia y límites: no se leyó S02 completo para comprobar si define «la
  persona» como única; no se leyeron S07, S08 ni ADR-002. Corresponde a `CT01`
  contrastarlo con handoffs, contexto y conocimiento.
- Pregunta para resolver: ¿quién puede designar o retirar una fuente como
  autoridad, y qué registro permite a un tercero comprobar que un uso estaba
  cubierto por los criterios acordados?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B009](blocks/B009.md),
  [`REV-2026-015`](2026-09-21-REV-2026-015-aplazamientos-s02-sin-retorno-y-divergentes-de-adr-001.md)

## Preguntas pendientes

Ver el checkpoint [B009](blocks/B009.md).

## Cobertura y límites

Ver el checkpoint [B009](blocks/B009.md). Sin fuentes externas consultadas.
