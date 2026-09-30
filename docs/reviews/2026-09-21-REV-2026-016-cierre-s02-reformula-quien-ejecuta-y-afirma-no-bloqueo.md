# Anotación de revisión

- ID de anotación: `REV-2026-016`
- Unidad y ubicación: `S02` — [Comprobación de cierre](../definition/session-02-limits.md#s02-cierre),
  «Está definido quién conduce y quién proporciona la ejecución de agentes»
  (`docs/definition/session-02-limits.md:113-121`), frente a
  [Criterio de salida](../definition/session-02-limits.md#criterio-de-salida)
  (líneas 18-23). Bloque `B008`.
- Revisión examinada: estado del archivo al 2026-09-21; repositorio sin commits,
  huella no disponible.
- Tipo: `incompleto`
- Gravedad: `baja`
- Estado: `deferred`
- Confianza: `media`
- Impacto: a quién se atribuye la ejecución de un agente (y por tanto sus permisos,
  fallos y controles) cuando S08 y S09 asignen responsabilidades; y si el cierre de
  sesión se comprueba contra el criterio literal, como pide `AGENTS.md:39-40`.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (exclusivamente interno).
- Fuente primaria: `docs/definition/session-02-limits.md:18-23`, `:29`, `:47`,
  `:53-54` y `:113-121`.
- Sección o localizador: «Criterio de salida», «Decisiones», «Modelo inicial de
  responsabilidades» y «Comprobación de cierre» de S02.
- Fecha de consulta/publicación: consulta 2026-09-21; cierre comprobado el
  2026-09-14.
- Hecho observado: el criterio tiene tres cláusulas.
  1. «Un modelo de responsabilidades que asigne a T800R, al repositorio consumidor
     y al proveedor sus obligaciones para incorporar el harness, cerrar y retomar
     trabajo y coordinar agentes» (18-22). El cierre lo recoge casi en su
     literalidad (113-115) y la tabla de l. 44-49 lo sustenta. Cumplida.
  2. «que aclare **quién ejecuta los agentes**» (22). El cierre responde otra
     pregunta: «quién **conduce** y quién **proporciona la ejecución**»
     (115-116). En el cuerpo, la pregunta literal tiene dos respuestas: «T800R
     **ejecutará** y supervisará agentes» (decisión `accepted`, l. 29) y, en la
     columna del proveedor, «**Ejecuta los agentes** mediante sus capacidades y
     permisos disponibles» (l. 47), mientras T800R «planifica, inicia y supervisa».
  3. «que no deje ambigüedades bloqueantes para discutir las fuentes de verdad en
     la sesión 3» (22-23). El cierre lo afirma —«Los detalles aplazados no bloquean
     esa discusión» (120-121)— con una razón positiva (la estructura base con
     referencias configurables, 119-120), pero sin decir qué ambigüedades se
     consideraron.
  El cierre añade además elementos que el criterio no pedía: «límites de autonomía,
  las intervenciones humanas y la transición» (116-117).
- Inferencia (si aplica): el patrón de [`REV-2026-011`](2026-09-21-REV-2026-011-cierre-s01-reformula-criterios-de-salida.md)
  se repite en forma más leve: una cláusula de tres se declara cumplida con otra
  redacción, y la reformulación coincide con el punto donde el cuerpo usa el mismo
  verbo para dos sujetos.

## Observación y propuesta

- Observación: la sustancia está razonablemente aclarada en l. 53-54 («T800R
  conduce el trabajo: decide y coordina qué agentes ejecutar; el proveedor aporta
  el mecanismo para ejecutarlos»), así que no se sostiene que el criterio esté
  incumplido. Lo que queda es que la decisión `accepted` de l. 29 y la celda de
  l. 47 atribuyen «ejecutar» a sujetos distintos, y el cierre lo resuelve
  cambiando de verbo en lugar de decir cuál de las dos lecturas vale. La
  distinción importa después: la celda de l. 47 liga la ejecución a los «permisos
  disponibles» del proveedor, y la decisión de l. 38 habla de los permisos de
  T800R (véase la pregunta 3 del checkpoint de [B007](blocks/B007.md) y
  [`REV-2026-015`](2026-09-21-REV-2026-015-aplazamientos-s02-sin-retorno-y-divergentes-de-adr-001.md)).
- Propuesta concreta: que la persona confirme una lectura única —por ejemplo,
  «T800R decide, inicia y supervisa la ejecución; el proveedor la realiza con sus
  capacidades y permisos»— y decida si el uso de «ejecutará» en la decisión de
  l. 29 se mantiene como expresión de alcance de producto. No reescribir el cierre
  ni la decisión sin esa resolución; S02 no se reabre por esta anotación.
- Contraargumento o coste/riesgo: «ejecutar» admite sin violencia el sentido de
  «hacer que se ejecute»; un lector humano entiende ambas frases como capas del
  mismo hecho y el usuario aprobó el cierre. La cláusula 3 es una negativa que sólo
  puede comprobarse a posteriori, y S03 se celebró y cerró, lo que es
  contraevidencia práctica de que nada bloqueó. El coste de aclararlo es bajo,
  pero también lo es el daño actual.

## Análisis adicional

- Evidencia interna: ADR-001 reproduce la misma doble atribución: TL;DR «T800R
  planificará, **ejecutará** y supervisará agentes» (ADR-001:9) y decisión 3
  «inicia y supervisa agentes […] El proveedor aporta los mecanismos de ejecución»
  (ADR-001:78-80). No hay divergencia entre unidad y ADR en este punto: ambos
  comparten la ambigüedad.
- Contraevidencia y límites: no se leyó S08 (en curso), donde la atribución puede
  quedar fijada; tampoco S09. Gravedad `baja` por ello.
- Pregunta para resolver: cuando un agente actúa con los permisos del proveedor,
  ¿el sujeto responsable de esa ejecución es T800R, el proveedor o la persona que
  concedió los permisos?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [`REV-2026-011`](2026-09-21-REV-2026-011-cierre-s01-reformula-criterios-de-salida.md),
  [`REV-2026-015`](2026-09-21-REV-2026-015-aplazamientos-s02-sin-retorno-y-divergentes-de-adr-001.md),
  checkpoint [B008](blocks/B008.md).
