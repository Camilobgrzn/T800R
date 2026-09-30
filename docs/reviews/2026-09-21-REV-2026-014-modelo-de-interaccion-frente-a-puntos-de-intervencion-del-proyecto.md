# Anotación de revisión

- ID de anotación: `REV-2026-014`
- Unidad y ubicación: `S02` — [session-02-limits.md, «Modelo de interacción acordado para desarrollo de software»](../definition/session-02-limits.md#modelo-de-interacción-acordado-para-desarrollo-de-software) y filas 4, 5 y 12 de [«Decisiones»](../definition/session-02-limits.md#decisiones), frente a `S01` — [«No objetivos iniciales — aceptados»](../definition/session-01-vision.md#no-objetivos-iniciales--aceptados), puntos 2 y 3
- Revisión examinada: 2026-09-21 (repositorio sin commits; bloque `B007`, líneas 1-99)
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `media`
- Impacto: qué prevalece cuando el repositorio consumidor establece puntos de intervención humana distintos de los del modelo de S02 (por ejemplo, aprobación de planes o revisión de todo cambio); condiciona los contratos de S04 y S09 y la adopción en repositorios con ciclo propio.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (tensión exclusivamente interna; no se invoca fuente externa)
- Fuente primaria: `docs/definition/session-02-limits.md:32-33, 40, 46-49, 70-74, 79-84, 90-92`; `docs/definition/session-01-vision.md:87, 113-118`
- Sección o localizador: ver enlaces de «Unidad y ubicación»
- Fecha de consulta/publicación: consulta 2026-09-21; S02 declara cierre el 2026-09-14
- Hecho observado:
  1. S01 acepta como no objetivo «Imponer una metodología única. La forma de trabajo se define para el repositorio» y «Eliminar toda intervención humana. Se conservan las decisiones y los puntos de intervención establecidos por el proyecto» (l. 113-118); su justificación dice que la base reusable «debe admitir el conocimiento, la forma de trabajo y los puntos de intervención propios del repositorio» (l. 87).
  2. S02 acuerda un único modelo de tres fases para desarrollo de software y enumera de forma cerrada cuándo interviene la persona durante la construcción: cambio de alcance, ambigüedad que afecte al comportamiento, bloqueo fuera de capacidades o permisos (l. 79-84) y revisiones de código «cuando sean realmente necesarias» por riesgo (l. 33, 90-92). Añade que T800R resuelve los detalles «sin aprobación adicional de cada plan técnico que respete los acuerdos» (l. 40, 73-74) y que «No se ha establecido una revisión humana obligatoria para cada cambio» (l. 92).
  3. La tabla de responsabilidades asigna al repositorio consumidor aportar «sus reglas, documentación, restricciones y mecanismos de validación» (l. 46) y «las restricciones y particularidades relevantes para evaluar el riesgo» (l. 49), pero ninguna celda ni párrafo dice que los puntos de intervención definidos por el proyecto se añadan a los del modelo o prevalezcan sobre él.
- Inferencia (si aplica): el bloque no declara la relación entre el modelo de interacción de T800R y los puntos de intervención «establecidos por el proyecto» que S01 obliga a conservar. Si un repositorio exige aprobar cada plan o revisar cada cambio, el texto de S02 admite dos lecturas: esas exigencias son «restricciones» del consumidor que T800R debe respetar, o quedan fuera porque el modelo acordado no prevé aprobaciones rutinarias.

## Observación y propuesta

- Observación: S02 no contradice literalmente a S01 —la justificación de l. 32 admite «intervenciones excepcionales» y la tabla obliga a respetar reglas del consumidor—, pero deja sin regla de precedencia el caso previsible en que el proyecto define más gates que el modelo. Además, quién decide que una revisión es «realmente necesaria» queda implícitamente en T800R (l. 93-94), mientras que S01 sitúa esa autoridad en el proyecto.
- Propuesta concreta: añadir a S02 (o confirmar en la sesión que corresponda) una frase de precedencia: los puntos de intervención y decisiones reservadas que establezca el repositorio consumidor forman parte de los acuerdos que limitan la autonomía y se suman a los mínimos del modelo; el modelo de tres fases es el valor por defecto, no una metodología obligatoria. Si la persona prefiere lo contrario, registrar que S02 acota el no objetivo 2 de S01.
- Contraargumento o coste/riesgo: la lectura caritativa ya está disponible: «restricciones» (l. 46) y «acuerdos técnicos… estrategias de construcción» (l. 67-69) permiten a la persona pactar gates adicionales durante la definición colaborativa. S04 desarrolla un «ciclo adaptable» con autorización por incremento y una lista de consultas más amplia (`session-04-operating-cycle.md:84-85`, visto sólo por búsqueda), lo que puede haber resuelto la cuestión aguas abajo; la política de riesgo está diferida a S09. El coste de la propuesta es bajo (una frase), pero toca una sesión cerrada.

## Análisis adicional

- Evidencia interna: hechos 1-3. El índice mantiene abierta la pregunta «¿Cómo se concretarán en el ciclo operativo los límites de autonomía y las intervenciones humanas acordados en la sesión 2?» (`docs/product-definition.md:136-137`), lo que confirma que la concreción no está en S02, pero esa pregunta no menciona los puntos de intervención del proyecto.
- Contraevidencia y límites: no se leyó S04 ni ADR-001/ADR-003 más allá de líneas sueltas devueltas por búsqueda; la comprobación de si S04 cierra la precedencia corresponde a los bloques de S04 y al cruce de autonomía. Por ello la confianza es `media` y el tipo es `incompleto`, no `error`.
- Pregunta para resolver: cuando el proyecto define gates humanos que el modelo de S02 no prevé (aprobación de plan, revisión de todo cambio, pasos manuales), ¿T800R los trata como acuerdos vinculantes que se suman al modelo, o el modelo de S02 los sustituye?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B007](blocks/B007.md), `REV-2026-013`
