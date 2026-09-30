# Anotación de revisión

- ID de anotación: `REV-2026-015`
- Unidad y ubicación: `S02` — [Detalles aplazados](../definition/session-02-limits.md#detalles-aplazados),
  `docs/definition/session-02-limits.md:100-107`; cita distintiva: «Las
  responsabilidades están acordadas; los estados y transiciones corresponden a la
  sesión 4». Frente a [ADR-001, «Puntos abiertos»](../adr/ADR-001-autonomia-y-responsabilidades.md#puntos-abiertos),
  `docs/adr/ADR-001-autonomia-y-responsabilidades.md:113-121`. Bloque `B008`.
- Revisión examinada: estado de ambos archivos al 2026-09-21; repositorio sin
  commits, huella no disponible.
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos; `media` sobre el impacto (no se leyeron S03,
  S04 ni ADR-003 para comprobar qué recogieron).
- Impacto: saber qué aplazamientos de S02 siguen realmente abiertos, cuáles se
  resolvieron y dónde, y si alguna precondición de lo aceptado en S02 quedó sin
  destino. Afecta a la planificación de S09 y al cruce `CT07`.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (contradicción y omisión exclusivamente internas).
- Fuente primaria: `docs/definition/session-02-limits.md:100-107` y
  `docs/adr/ADR-001-autonomia-y-responsabilidades.md:113-121`; estado de sesiones
  en `docs/definition-tracker.md:6-7`.
- Sección o localizador: «Detalles aplazados» (S02) y «Puntos abiertos» (ADR-001).
- Fecha de consulta/publicación: consulta 2026-09-21; S02 comprobada el 2026-09-14;
  ADR-001 fechado 2026-09-14 y editado después (menciona ADR-003).
- Hecho observado:
  1. Las cuatro filas de S02 tienen sesión de destino, pero ninguna tiene
     responsable, condición de retomada ni enlace de retorno. El tracker de
     definición declara «7 de 12 sesiones completadas» y S08 en curso, de modo que
     los destinos de las filas 1 y 2 (sesiones 3 y 4) ya están cerrados y las filas
     siguen en `deferred` sin indicar si se resolvieron.
  2. ADR-001 sí registra una resolución que la unidad canónica no registra:
     «¿Cómo se representan arranque, replanificación, espera y reanudación? →
     resuelto en sesión 4 y ADR-003» (ADR-001:116), frente a la fila 2 de S02,
     todavía `deferred` (S02:105). El resto de puntos abiertos del ADR con destino
     en sesiones ya cerradas (sesión 3, l. 115; sesión 5, l. 117) no lleva marca de
     resolución, así que ni siquiera el ADR es uniforme.
  3. Los dos inventarios no coinciden. El ADR tiene siete puntos y S02 cuatro
     filas. Sólo en el ADR: «¿Cómo se materializan los contratos y la
     transferencia de trabajo? → sesión 5» (l. 117) y «cómo se demostrará su
     efectividad → sesiones 11 y 12» (l. 121; la fila 4 de S02 dice «sesiones 8 y
     11»). Sólo en S02: «con requisitos operativos en la sesión 4» para los
     criterios de alto riesgo (S02:106); el ADR remite únicamente a la «sesión 9»
     (l. 119). Para las rutas y la validación de referencias, el ADR dice
     «sesiones 3, 7 y 10» (l. 120) y S02 «sesión 3 y se concreta en conocimiento y
     experiencia del producto», sin números (S02:104).
  4. Ninguno de los dos inventarios recoge la identidad y los permisos con que
     actúa T800R, aunque una decisión `accepted` depende de ellos: consultar ante
     «un bloqueo fuera de sus capacidades o permisos» (S02:38; ADR-001:83-84).
- Inferencia (si aplica): la fila 3 es la única cuyo destino normativo (sesión 9)
  sigue sin celebrarse; si S04 recogió los «requisitos operativos» de la revisión
  por riesgo antes de existir la política, lo hizo sin criterios. Esto no se
  comprobó: queda para los bloques de S04 y S09.

## Observación y propuesta

- Observación: el aplazamiento en sí es legítimo y cada fila tiene destino; no se
  objeta diferir. El defecto es de trazabilidad y de cobertura: (a) el registro
  canónico de S02 no permite saber qué se resolvió, mientras el ADR —que S02
  presenta como documentación de la misma decisión— sí lo dice para un caso;
  (b) los dos inventarios de pendientes de la misma decisión divergen en
  contenido y destinos, y sin regla de precedencia ([`REV-2026-001`](2026-09-21-REV-2026-001-precedencia-adr-unidad-canonica.md))
  no hay criterio para saber cuál manda; (c) una precondición de lo aceptado
  (permisos e identidad de T800R) no figura como aplazada en ninguno. Es la misma
  clase de riesgo que [`REV-2026-004`](2026-09-21-REV-2026-004-preguntas-abiertas-sin-disposicion.md)
  (pendientes sin disposición), aquí en el nivel de la unidad y su ADR.
- Propuesta concreta: que la persona decida (1) cuál de los dos inventarios es el
  de referencia para los pendientes de la decisión de S02; (2) si las filas
  aplazadas llevan enlace de retorno al acuerdo que las resolvió (o una nota de que
  siguen abiertas), sin reescribir el historial de S02; (3) si la identidad y los
  permisos de T800R se registran como aplazamiento con destino (previsiblemente
  sesión 9, quizá 8). No editar S02 ni ADR-001 sin esa decisión.
- Contraargumento o coste/riesgo: una unidad cerrada puede entenderse como
  fotografía de su fecha de cierre; mantener enlaces de retorno en cada sesión
  cerrada añade mantenimiento y otra fuente de divergencia. El tracker de
  definición y las unidades posteriores pueden bastar para un único usuario. La
  cuestión de permisos puede estar ya tratada en S04/S08 sin que S02 lo anuncie.

## Análisis adicional

- Evidencia interna: citada arriba con ruta y línea. La pregunta 3 del checkpoint
  de [B007](blocks/B007.md) plantea quién concede los permisos de T800R; esta
  anotación no la duplica: registra que la cuestión carece de fila de aplazamiento.
- Contraevidencia y límites: no se leyeron S03, S04, S05 ni ADR-003; no se afirma
  que los aplazamientos estén sin resolver, sólo que S02 no lo indica y que el ADR
  lo indica de forma parcial. La fila 1 puede considerarse resuelta por la propia
  existencia de S03.
- Pregunta para resolver: ¿qué documento es el inventario vigente de pendientes de
  la decisión de S02, y deben figurar en él la identidad y los permisos de T800R?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [`REV-2026-001`](2026-09-21-REV-2026-001-precedencia-adr-unidad-canonica.md),
  [`REV-2026-004`](2026-09-21-REV-2026-004-preguntas-abiertas-sin-disposicion.md),
  checkpoint [B008](blocks/B008.md), cruce `CT07`.
