# Anotación de revisión

- ID de anotación: `REV-2026-011`
- Unidad y ubicación: `S01` — [Comprobación de cierre](../definition/session-01-vision.md#s01-cierre),
  «Los seis criterios de salida están cumplidos» (líneas 176-180), frente a
  [Criterio de salida](../definition/session-01-vision.md#criterio-de-salida)
  (líneas 20-27). Bloque `B006`.
- Revisión examinada: estado del archivo al 2026-09-21; repositorio sin commits,
  huella no disponible.
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre el hecho textual; `media` sobre su efecto
- Impacto: si el cierre de S01 sirve como constancia de que se cumplió el criterio
  de salida, y si el patrón «criterio reformulado y declarado cumplido» es
  aceptable en los cierres `sNN-cierre` de las demás sesiones.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (contradicción exclusivamente interna; no se
  invoca ninguna fuente externa)
- Fuente primaria: `docs/definition/session-01-vision.md`, dos ubicaciones:
  criterio de salida (20-27) y comprobación de cierre (176-180)
- Sección o localizador: anclas `criterio-de-salida` y `s01-cierre`; apoyo en el
  glosario (159-170) y en el checkpoint [B005](blocks/B005.md), pregunta heredada (a)
- Fecha de consulta/publicación: consulta 2026-09-21; cierre aprobado el
  2026-09-14 según la línea 3-4 de la unidad
- Hecho observado: el cierre no contrasta cada criterio con un pasaje; enumera los
  seis con otra redacción y los declara cumplidos. En dos casos la redacción
  cambia el contenido del criterio:
  1. Criterio 6: «Un glosario inicial **sin términos críticos ambiguos**» (27)
     pasa a ser «glosario inicial **aceptado**» (180). La aceptación es un acto de
     la persona; la ausencia de ambigüedad es una propiedad del glosario. El
     cierre no dice qué términos se consideraron críticos ni cómo se comprobó.
  2. Criterio 1: «basada en **experiencias reales**» (22) pasa a ser «basada en
     **la experiencia del usuario y el ejemplo de AprovisionamientoProd**»
     (176-177). Esa base cubre la preparación repetida; no cubre la mitad de la
     declaración dedicada a coordinación (127-130).
  Un tercer caso es más débil: el criterio 4, «propuesta de valor comprobable»
  (25), se declara «comprobable mediante los objetivos observables» (178-179),
  mientras la propia síntesis dice que «los escenarios y métricas de aceptación
  detallados se definirán en las sesiones correspondientes» (154-155).
- Inferencia (si aplica): el cierre funciona como resumen de lo producido, no como
  verificación. Quien lea sólo el cierre entenderá que el glosario está libre de
  ambigüedad crítica y que todo el problema procede de experiencia real, y ninguna
  de las dos cosas está demostrada en la unidad.

## Observación y propuesta

- Observación: los otros cuatro criterios sí se pueden contrastar con el contenido
  y se cumplen en su literalidad: usuario primario y actores secundarios
  (135-139), tres casos de uso (93-101), objetivos (143-155) y no objetivos
  (110-118). El defecto se limita a los criterios 1 y 6, y en menor grado al 4.
  Para el criterio 6 hay contraste concreto: «instalable» es un requisito aceptado
  (línea 80) y repetido en el caso de uso 1 (93), pero el glosario no lo define ni
  define «base común» (144); `B005` lo registró sin elevarlo a hallazgo. «Contexto
  vigente» (167) exige una comprobación sin decir quién ni cómo. Si esos términos
  son «críticos» es justo lo que el cierre no decide.
- Propuesta concreta: en la segunda pasada, que la persona elija por criterio
  entre (a) confirmar que la reformulación expresa lo que quiso aprobar (el
  glosario basta como «aceptado» y la experiencia del usuario basta como base), o
  (b) registrar como residuo lo que el cierre no comprueba: términos críticos sin
  definir y parte del problema sin experiencia registrada. No reescribir el cierre
  sin esa decisión; S01 no se reabre por esta anotación.
- Contraargumento o coste/riesgo: el usuario aprobó el cierre de forma explícita
  (líneas 3-4 y 88), y en fase de visión un glosario «inicial» admite términos
  que se precisan después; de hecho el mecanismo de instalación está diferido
  (89). Exigir una comprobación formal por criterio en una sesión ya cerrada tiene
  poco valor por sí mismo. El valor está en decidir si el mismo patrón se acepta
  en los cierres de S02-S07, que el criterio de cierre global usa como entrada
  (relacionado con `REV-2026-006`).

## Análisis adicional

- Evidencia interna:
  [criterio de salida](../definition/session-01-vision.md#criterio-de-salida)
  (20-27); [cierre](../definition/session-01-vision.md#s01-cierre) (176-180);
  glosario (159-170); fila `accepted` de la línea 88, que dice que la síntesis
  «completa la visión» sin mencionar el criterio de salida; `AGENTS.md`, forma de
  trabajo, punto 7: «Antes de cerrar, comprueba el criterio de salida definido en
  el documento rector».
- Contraevidencia y límites: la mejor lectura opuesta es que «aceptado» incluye
  implícitamente que la persona no vio ambigüedad crítica; es plausible y no se
  puede refutar desde el texto. No se comprobó si sesiones posteriores definieron
  «instalable» o «base común» (posible en S02 o en la sesión 10, aún no iniciada).
  La parte del criterio 1 ya está cubierta por
  [REV-2026-008](2026-09-21-REV-2026-008-conflictos-aceptados-sin-experiencia-registrada.md);
  aquí sólo se añade que el cierre la da por satisfecha estrechando la redacción.
- Pregunta para resolver: ¿«glosario inicial aceptado» significa que la persona
  comprobó que no quedaban términos críticos ambiguos, o sólo que aprobó la tabla?
  ¿Se acepta que un cierre reformule un criterio de salida en lugar de
  contrastarlo?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [REV-2026-008](2026-09-21-REV-2026-008-conflictos-aceptados-sin-experiencia-registrada.md),
  [REV-2026-006](2026-09-21-REV-2026-006-criterio-de-cierre-sin-autorizacion-ni-verificador.md),
  checkpoint [B006](blocks/B006.md)
