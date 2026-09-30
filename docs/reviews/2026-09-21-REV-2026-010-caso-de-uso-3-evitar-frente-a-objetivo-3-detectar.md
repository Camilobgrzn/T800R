# Anotación de revisión

- ID de anotación: `REV-2026-010`
- Unidad y ubicación: `S01` — [Casos de uso prioritarios iniciales](../definition/session-01-vision.md#casos-de-uso-prioritarios-iniciales),
  caso 3 (líneas 99-101), frente a [Síntesis aceptada](../definition/session-01-vision.md#síntesis-aceptada),
  objetivo observable 3 (líneas 149-152). Bloque `B005`.
- Revisión examinada: estado del archivo al 2026-09-21; repositorio sin commits,
  huella no disponible.
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `media`
- Impacto: qué compromiso de coordinación hereda el MVP: prevenir los conflictos
  (los agentes conocen de antemano el trabajo en curso) o detectarlos y resolverlos
  antes de validar el trabajo afectado. Cambia el coste y el criterio de aceptación
  de las sesiones de coordinación y de cualquier escenario de prueba.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (diferencia exclusivamente interna entre dos
  textos aceptados de la misma unidad; sin fuente externa aplicable).
- Fuente primaria: `docs/definition/session-01-vision.md`.
- Sección o localizador: líneas 99-101, 149-152, 86 y 88.
- Fecha de consulta/publicación: 2026-09-21; la unidad no declara fecha propia.
- Hecho observado:
  - Caso de uso 3 (99-101): «los agentes conocen el trabajo en curso y sus
    dependencias, coordinan sus cambios y comprueban la coherencia de los
    entregables para evitar duplicación, sobrescrituras y trabajo desactualizado».
  - Objetivo 3 (149-152): «ante tareas coincidentes, cambios incompatibles,
    contexto desactualizado o entregables desalineados, el flujo permite detectar
    el conflicto y resolverlo antes de dar el trabajo afectado por válido,
    preservando el trabajo propio y ajeno».
  - Ambos están aceptados por filas distintas: la línea 86 acepta la propuesta
    «junto con los tres casos de uso» y la línea 88 acepta la síntesis con «los
    objetivos observables». La unidad no declara cuál prevalece ni que la síntesis
    sustituya a los casos de uso.
- Inferencia (si aplica): el caso de uso promete una capacidad previa y preventiva
  («conocen», «para evitar»); el objetivo sólo exige una capacidad posterior
  («permite detectar... y resolverlo antes de dar... por válido»). El objetivo es
  la forma más débil y más verificable, pero «permite detectar» se satisface con
  cualquier comprobación manual, de modo que tampoco fija qué se observará. Además,
  el caso de uso nombra tres daños y el objetivo cuatro disparadores; el cuarto
  (entregables desalineados) sólo aparece en el caso de uso como medio
  («comprueban la coherencia»), no como resultado.

## Observación y propuesta

- Observación: quien diseñe la coordinación puede apoyarse en cualquiera de los dos
  textos aceptados y llegar a alcances distintos: conocimiento compartido del
  trabajo en curso entre sesiones independientes (coste alto, viabilidad no
  establecida en S01) o detección tardía antes de validar. «Preservando el trabajo
  propio y ajeno» añade una garantía que el caso de uso no menciona y que no tiene
  condición observable.
- Propuesta concreta: en la segunda pasada, que la persona declare (a) si el
  objetivo 3 es la forma vinculante del caso de uso 3 para el MVP y el caso de uso
  queda como intención, o (b) si la prevención es también compromiso del MVP. En
  ambos casos, indicar en qué sesión se fija la observación mínima que prueba
  «detectar» y «preservar». No reescribir S01 sin esa decisión.
- Contraargumento o coste/riesgo: la lectura más razonable es que el caso de uso
  expresa la intención y la síntesis, posterior, su forma verificable; las líneas
  154-155 difieren «escenarios y métricas de aceptación detallados» a «las sesiones
  correspondientes», por lo que parte de la imprecisión ya está diferida y sesiones
  posteriores (no leídas en esta pasada) pueden haberla resuelto. Si fue así, el
  coste de aclararlo en S01 es bajo y el valor también; el riesgo sólo persiste si
  alguien vuelve a S01 como fuente del alcance de coordinación.

## Análisis adicional

- Evidencia interna: [S01, casos de uso](../definition/session-01-vision.md#casos-de-uso-prioritarios-iniciales)
  y [S01, síntesis](../definition/session-01-vision.md#síntesis-aceptada). Relacionadas:
  [REV-2026-008](2026-09-21-REV-2026-008-conflictos-aceptados-sin-experiencia-registrada.md)
  (los cuatro conflictos se aceptan sin distinguir vividos de anticipados; este
  rango los repite en las líneas 127-130 y 149-150, no se duplica aquí) y
  [REV-2026-009](2026-09-21-REV-2026-009-residuo-conflictos-prioritarios.md)
  (mismo patrón de filas acumuladas sin declarar cuál queda superada).
- Contraevidencia y límites: no se leyeron las sesiones de coordinación ni sus
  ADRs; el cruce correspondiente debe comprobar si alguna adopta explícitamente la
  lectura «detectar y resolver». La diferencia está demostrada en el texto; que
  sea material depende de si S01 se usa como fuente de alcance.
- Pregunta para resolver: ¿el MVP se compromete a que los agentes conozcan de
  antemano el trabajo en curso para evitar conflictos, o sólo a detectarlos y
  resolverlos antes de validar? ¿Qué observación mínima demuestra lo segundo?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: <pendiente>
