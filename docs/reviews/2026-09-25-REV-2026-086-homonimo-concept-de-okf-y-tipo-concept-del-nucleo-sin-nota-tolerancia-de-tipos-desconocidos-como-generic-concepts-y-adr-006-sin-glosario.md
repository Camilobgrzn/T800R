# Anotación de revisión

- ID de anotación: `REV-2026-086`
- Unidad y ubicación: `ADR-006` — [«Formas de taxonomía»](../adr/ADR-006-modelo-portable-de-conocimiento.md#formas-de-taxonomía)
  (`docs/adr/ADR-006-modelo-portable-de-conocimiento.md:27-36`) y ausencia de
  «Glosario rápido» entre «TL;DR» (l. 6) y «Contexto» (l. 12), frente a
  [S07](../definition/session-07-knowledge.md) l. 43-44, 49 y 68 y a la
  especificación OKF v0.2 (§2, §4.1, §11). Bloque `B044`; recoge la pregunta 3
  de [B027](blocks/B027.md), que `B028` (g) dejó para este bloque.
- Revisión examinada: estado de los archivos al 2026-09-25 (repositorio sin
  commits; ADR-006 fechado 2026-09-21, «Aceptada»). Citas distintivas: «El
  núcleo aceptado es `concept`, `pattern`, `lesson` y `synthesis`» (l. 35);
  «Los tipos adicionales preservan el perfil y no obtienen autoridad por su
  nombre» (l. 31).
- Tipo: `incompleto`
- Gravedad: `baja`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos textuales y la cita de OKF; `media` sobre
  el efecto (depende de cómo lea un implementador la regla de tolerancia)
- Impacto: cómo se aplican al perfil las reglas de OKF redactadas sobre
  «concept» y qué hace un consumidor T800R con un tipo desconocido. OKF lo
  trata «como concept genérico», mientras T800R reserva `concept` para un tipo
  con requisitos propios (`domain` y definición). Afecta a la verificabilidad
  de la conformidad OKF que declara el TL;DR (l. 9). No cambia ningún acuerdo.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado`.
- Fuente primaria:
  1. OKF, `SPEC.md` en el commit fijado por ADR-006 l. 48-49,
     <https://github.com/GoogleCloudPlatform/open-knowledge-format/blob/ad30107c31c06aec8a7d5636e0d1058118604e6f/SPEC.md>,
     «Spec Version: Version 0.2», consultado 2026-09-25 (y antes por `B027`
     el 2026-09-24). Citas del contenido devuelto: §2 «Concept: A single unit
     of knowledge within a bundle, represented as one markdown document»;
     §2 «Concept ID: The path of the concept's file within the bundle, with the
     `.md` suffix removed»; §4.1 «`type` is the only always-required key; a
     concept carrying just `type` is fully conformant»; §4.1 «consumers MUST
     tolerate unknown types gracefully, typically by treating them as generic
     concepts»; §11 «Every frontmatter block contains a non-empty `type`
     field». Fuerza `alta` (especificación en el commit fijado); pertinencia
     directa a l. 9, 31 y 35. Límite: lectura mediada por extracción, no del
     archivo bruto.
  2. Internas: `docs/adr/ADR-006-modelo-portable-de-conocimiento.md:1-106`
     (leído completo); `docs/definition/session-07-knowledge.md:43-44, 49, 68`;
     cabeceras de ADR-001 a ADR-010 por búsqueda de «^## » («Glosario rápido»
     en ADR-001, 002, 003, 004, 005, 007 y 010; no en ADR-006, 008 ni 009);
     `docs/definition/session-08-portability.md:87` («identidad OKF formada por
     `bundle_id` y ruta lógica»).
- Sección o localizador: ver arriba.
- Fecha de consulta/publicación: consulta 2026-09-25; ADR-006 2026-09-21; commit
  de OKF fechado 2026-08-21 según la investigación (l. 23-24).
- Hecho observado:
  1. **Homónimo sin nota.** En OKF, «concept» es toda unidad de conocimiento
     (§2). ADR-006 l. 35 y S07 l. 44 hacen de `concept` uno de cuatro valores de
     `type` («definición o modelo explicativo»), con `domain` y definición
     obligatorios (ADR-006 punto 4, l. 58; S07 l. 49). Así, en el perfil una
     entrada de tipo `pattern` es un «concept» OKF de `type: pattern`. Ni el
     ADR ni S07 lo anotan (`B027` pregunta 3; `B028` (g)).
  2. **La regla de tolerancia de OKF usa el término homónimo.** S07 l. 43 exige
     que «los consumidores deben tolerar tipos desconocidos según OKF». OKF
     §4.1 lo concreta como «treating them as generic concepts». Leído con el
     vocabulario del perfil, un tipo desconocido podría tratarse como
     `concept`: se le exigiría `domain` y una definición, o se presentaría como
     conocimiento definitorio. ADR-006 l. 31 sólo dice que los tipos
     adicionales «preservan el perfil y no obtienen autoridad por su nombre»,
     y la regla de tolerancia no aparece en l. 1-45 (`B027`: tampoco en la
     «Decisión»).
  3. **Sin glosario en el ADR.** ADR-006 no tiene «Glosario rápido»; ADR-001 a
     005, 007 y 010 sí. l. 1-45 usan sin definir «perfil», «bundle»,
     «curator», «frescura», «indexación portable» y los cuatro tipos. «Adapter»
     (l. 43) aparece antes del glosario de ADR-007, fechado el 2026-09-22
     (`REV-2026-057` hecho 3). No hay divergencia de glosario como en
     `REV-2026-063`/`073`/`078`/`082`, porque no hay glosario; lo que falta es
     el lugar donde separar «concept (OKF)» de «`concept` (tipo T800R)».
- Inferencia (si aplica): quien implemente la conformidad OKF desde ADR-006
  puede leer las reglas de OKF sobre «concepts» (§5.5 `stale_after`, §11) como
  si aplicaran sólo al tipo `concept`, o la tolerancia de §4.1 como una
  reclasificación a `concept`.

## Observación y propuesta

- Observación: el perfil adopta como valor de tipo la palabra que la
  especificación base usa para toda unidad y para su regla de degradación, sin
  anotarlo en ningún documento canónico.
- Propuesta concreta: que la persona decida si (a) ADR-006 añade un glosario
  breve que distinga «concept (OKF, toda entrada)» de «`concept` (tipo del
  núcleo)» y defina bundle, curator, perfil y frescura; (b) S07 l. 43 o el ADR
  precisan que un tipo desconocido se trata como entrada genérica del perfil,
  sin requisitos de `concept`; o (c) se renombra el tipo (por ejemplo,
  `definition`), con el coste de reabrir S07. No editar sin esa decisión.
- Contraargumento o coste/riesgo: el formato de código (`concept`) ya separa
  el valor de tipo del término; OKF deja libres los valores de `type` (§4.1) y
  «typically» no es normativo. El coste de (a) o (b) es una o dos líneas; (c)
  es más caro y probablemente innecesario.

## Análisis adicional

- Evidencia interna: hechos 1-3 con sus localizadores. S08 l. 87 evita el
  término al hablar de «identidad OKF» en vez de «Concept ID», lo que muestra
  que la ambigüedad es evitable.
- Contraevidencia y límites: no se examinó si S11 o ADR-010 fijan el
  tratamiento de tipos desconocidos en la representación física (fuera del
  alcance; `CT03`). No se leyó el archivo bruto de la especificación.
- Pregunta para resolver: ¿cómo trata un consumidor T800R un tipo desconocido
  (entrada genérica o `concept`), y debe ADR-006 distinguir el «concept» de OKF
  del tipo `concept` del núcleo?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B044](blocks/B044.md), [B027](blocks/B027.md),
  [B028](blocks/B028.md);
  [`REV-2026-057`](2026-09-24-REV-2026-057-hindsight-decidido-en-s07-sin-identificacion-ni-fuente-la-fuente-primaria-lo-describe-como-memoria-que-retiene-y-sintetiza-creencias-no-solo-recuperacion-y-adapter-y-contrato-comun-antes-de-s08.md),
  [`REV-2026-082`](2026-09-25-REV-2026-082-glosario-y-contexto-de-adr-005-homonimos-packet-y-adapter-handoff-custodio-de-ownership-y-alternativa-adapter-libre-sin-rejected.md);
  cruces `CT03` y `CT06`.

## Preguntas pendientes

Ver el checkpoint [B044](blocks/B044.md).

## Cobertura y límites

Ver el checkpoint [B044](blocks/B044.md).
