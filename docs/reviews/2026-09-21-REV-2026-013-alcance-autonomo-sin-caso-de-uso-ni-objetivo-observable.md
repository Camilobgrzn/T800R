# Anotación de revisión

- ID de anotación: `REV-2026-013`
- Unidad y ubicación: `S02` — [session-02-limits.md, «Decisiones»](../definition/session-02-limits.md#decisiones), filas 1 y 3 (l. 29 y 31), frente a `S01` — [«Casos de uso prioritarios iniciales»](../definition/session-01-vision.md#casos-de-uso-prioritarios-iniciales), [«Objetivos observables»](../definition/session-01-vision.md#objetivos-observables) y el acuerdo inicial 1 de [product-definition.md](../product-definition.md#acuerdos-iniciales)
- Revisión examinada: 2026-09-21 (repositorio sin commits; bloque `B007`, líneas 1-99)
- Tipo: `incompleto`
- Gravedad: `alta`
- Estado: `deferred`
- Confianza: `media`
- Impacto: qué debe demostrar el MVP y el criterio de cierre; si la capacidad mayor y más cara del producto (planificar, iniciar y supervisar agentes) tiene o no un caso de uso, un objetivo observable y una propuesta de valor que permitan aceptarla o rechazarla.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (contradicción/omisión exclusivamente interna; no se invoca fuente externa)
- Fuente primaria: `docs/definition/session-02-limits.md:8-9, 29-31`; `docs/definition/session-01-vision.md:85-86, 91-106, 141-155, 161`; `docs/product-definition.md:21-22`
- Sección o localizador: ver enlaces de «Unidad y ubicación»
- Fecha de consulta/publicación: consulta 2026-09-21; S02 declara cierre el 2026-09-14
- Hecho observado:
  1. S02 declara como objetivo delimitar responsabilidades «partiendo de los tres casos de uso aceptados» (l. 8-9).
  2. S02 acepta que «T800R ejecutará y supervisará agentes» (l. 29) y que «recibirá un objetivo y sus restricciones, preparará el plan, lo descompondrá en tareas, identificará dependencias y coordinará su ejecución y validación» (l. 31), con la justificación «La ejecución forma parte del objetivo real del producto».
  3. Los tres casos de uso de S01 son incorporar, cerrar/retomar y trabajar con múltiples agentes; en el tercero el sujeto son los agentes («los agentes conocen el trabajo en curso… coordinan sus cambios»), no T800R planificando ni lanzando agentes (S01 l. 91-101).
  4. Los cuatro objetivos observables de S01 (adopción reusable, continuidad, coordinación, portabilidad; l. 141-155) no contienen ninguna condición sobre recibir un objetivo, planificar, descomponer, iniciar o supervisar agentes ni sobre construcción autónoma entre definición y revisión final.
  5. La propuesta de valor aceptada sigue siendo «Preparar una vez la forma de trabajo del repositorio y mantener su continuidad…» (S01 l. 105-106), el glosario define harness como algo que «guía cómo los agentes obtienen contexto, ejecutan, coordinan» (l. 161), y el acuerdo inicial 1 del índice dice que T800R «será un toolkit reusable para incorporar un harness multiagente» (índice l. 21-22).
- Inferencia (si aplica): S02 amplía el producto de «harness que guía» a «conductor que planifica, inicia y supervisa», pero el cambio queda registrado sólo como decisión de límites. Ni el índice ni S01 (caso de uso, objetivo observable, propuesta de valor, glosario) recogen esa capacidad, de modo que el «objetivo real del producto» invocado en l. 29 no figura entre los objetivos aceptados contra los que se medirá el MVP.

## Observación y propuesta

- Observación: la decisión de mayor alcance y coste de S02 no deriva de los tres casos de uso de los que la sesión dice partir y no tiene objetivo observable. Un MVP podría cumplir los cuatro objetivos de S01 sin ejecutar ni supervisar un solo agente, o fallar en la conducción autónoma sin incumplir ningún objetivo. Además, el punto de entrada pedía comparar las alternativas por continuidad/coordinación, esfuerzo de adopción y portabilidad (l. 13-16); la justificación registrada de l. 29-30 sólo menciona autonomía y esfuerzo de integración, sin resultado para adopción ni portabilidad.
- Propuesta concreta: que la persona decida si (a) se añade un caso de uso y un objetivo observable de «conducción autónoma» (de objetivo confirmado a resultado revisable, con consultas sólo en los supuestos acordados) y se ajustan acuerdo inicial 1, propuesta de valor y glosario; o (b) se declara explícitamente que la ejecución/supervisión es un medio para los tres casos de uso y se indica en cuál de los objetivos existentes se observa. En ambos casos, registrar cómo puntuaron las alternativas en adopción y portabilidad, o declarar que no se evaluaron.
- Contraargumento o coste/riesgo: S01 titula sus casos de uso y no objetivos como «iniciales», y el índice llama «iniciales» a sus acuerdos, de modo que S02 puede refinarlos legítimamente; el protocolo no obliga a reescribir sesiones cerradas. S04 y ADR-003 desarrollan después el ciclo autónomo, y las métricas de aceptación están diferidas a sesiones posteriores (S01 l. 154-155). El coste de la propuesta es tocar una sesión cerrada o el índice, lo que sólo puede hacer la persona.

## Análisis adicional

- Evidencia interna: véanse los cinco hechos observados. La búsqueda de «autónom/toolkit» en `docs/product-definition.md` y `docs/definition/*.md` no encontró ninguna actualización del acuerdo inicial 1 ni de los objetivos de S01 posterior a S02; el índice sólo recoge la pregunta abierta «¿Cómo se concretarán en el ciclo operativo los límites de autonomía y las intervenciones humanas acordados en la sesión 2?» (índice l. 136-137) y «¿El orchestrator será software, un rol operativo o ambos?» (l. 138).
- Contraevidencia y límites: no se leyeron S10-S12 ni la definición del MVP; es posible que el objetivo de conducción autónoma se fije allí. No se ha revisado si el cierre de S02 (`B008`) o ADR-001 declaran la relación con los casos de uso. La confianza es `media` por eso. Relación con anotaciones previas: [REV-2026-010](2026-09-21-REV-2026-010-caso-de-uso-3-evitar-frente-a-objetivo-3-detectar.md) trata el desajuste caso de uso 3/objetivo 3 dentro de S01; [REV-2026-007](2026-09-21-REV-2026-007-criterio-de-cierre-no-cubre-adopcion.md) trata la cobertura del criterio de cierre global. Ninguna cubre la ampliación de alcance de S02.
- Pregunta para resolver: ¿la conducción autónoma (planificar, iniciar y supervisar agentes) es un objetivo del producto que el MVP debe demostrar por sí mismo, o un medio al servicio de los tres casos de uso? Según la respuesta, ¿dónde se registra y cómo se observa?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B007](blocks/B007.md), `REV-2026-007`, `REV-2026-010`
