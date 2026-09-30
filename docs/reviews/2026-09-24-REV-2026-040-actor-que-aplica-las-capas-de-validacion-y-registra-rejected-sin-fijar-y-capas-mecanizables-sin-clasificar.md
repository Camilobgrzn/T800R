# Anotación de revisión

- ID de anotación: `REV-2026-040`
- Unidad y ubicación: `S05` — [session-05-handoffs.md, «Capas de validación»](../definition/session-05-handoffs.md#capas-de-validación)
  (l. 125-135) y [«Categorías de rechazo»](../definition/session-05-handoffs.md#categorías-de-rechazo)
  (l. 137-150, en particular l. 144-145), frente a las filas l. 59, 69, 71, 73
  y 79 de [«Decisiones»](../definition/session-05-handoffs.md#decisiones), a
  la pregunta 4 de la sesión (l. 32-33), a l. 160 de
  [«Lifecycle inicial»](../definition/session-05-handoffs.md#lifecycle-inicial)
  (dependencia, bloque `B021`) y a
  [S04, filas l. 110 y 112](../definition/session-04-operating-cycle.md#acuerdos-y-orientación-de-la-sesión).
  Bloque `B020`.
- Revisión examinada: estado de los archivos al 2026-09-24; repositorio sin
  commits, huella no disponible. S05 cerrada el 2026-09-16 (l. 3). Citas
  distintivas: «Las capas aplicables se repiten al aceptar» (l. 134);
  «Semántica y autoridad | … autoridad y permisos efectivos para solicitar,
  aceptar y ejecutar la acción. Incluye revisión humana cuando los acuerdos
  la exijan» (l. 132); «`recipient_unavailable_or_ineligible` | La capacidad,
  independencia o disponibilidad del receptor es inadecuada» (l. 145); «la
  negativa del receptor a asumir una solicitud válida» (l. 73); «`rejected`:
  el receptor no asume la solicitud y registra una razón accionable» (l. 160);
  «¿Qué validaciones son estructurales y cuáles requieren reconciliación
  semántica o revisión humana?» (l. 32-33).
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `media` (S05 l. 152-232 sólo por dependencia mínima y búsqueda;
  ADR-004 «Decisión» punto 4 leído; S11 y ADR-010 no leídos)
- Impacto: qué componente aplica cada capa y registra `accepted`/`rejected`
  con actor (l. 109); si las capas estructural, referencial y de
  reconciliación son reglas «verificables mecánicamente» que S04 l. 112
  obliga a aplicar con runtime/policy, o juicio del receptor; y quién puede
  registrar un rechazo por `recipient_unavailable_or_ineligible` cuando, por
  definición, el receptor no está disponible o el selector (l. 71) no resuelve.
  Responde a la pregunta 3 de `B019` y toca la 2. No cambia el contenido de
  ninguna fila aceptada.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión exclusivamente interna; no se invoca
  ninguna fuente externa)
- Fuente primaria: `docs/definition/session-05-handoffs.md` l. 32-33, 59, 69,
  71, 73, 79 (dependencia), 82-89, 109, 125-150 (leídas), l. 154-160 y 175
  (dependencia, por búsqueda) y búsqueda en toda la unidad de «orchestrator»
  (sólo l. 63), «runtime» (sólo l. 122), «adapter» (l. 39, 48, 69, 71, 265),
  «receptor», «valida»; `docs/definition/session-04-operating-cycle.md`
  l. 107, 110, 112; `docs/adr/ADR-004-contrato-portable-de-handoffs.md`
  l. 73-75 y 87-90; `docs/definition/session-03-sources-of-truth.md` l. 36,
  56 y 237 (sólo por búsqueda de «autoridad»)
- Sección o localizador: «Preguntas de la sesión», «Decisiones», «Identidad
  de actores», «Capas de validación», «Categorías de rechazo», «Lifecycle
  inicial» (S05); filas l. 107, 110, 112 (S04); «Decisión» puntos 4 y 8
  (ADR-004)
- Fecha de consulta/publicación: consulta 2026-09-24; S05 cerrada el
  2026-09-16 según l. 3
- Hecho observado:
  1. **Ningún actor aplica las capas.** l. 69 fija cuatro capas «antes de
     aceptar» y excluye delegarlas «a cada adapter»; l. 79 excluye al
     transporte; l. 59 remite «la implementación del mecanismo» a
     arquitectura. En l. 125-135 no se nombra quién aplica cada capa. En toda
     S05, «orchestrator» aparece sólo en l. 63 (reconciliar el impacto de un
     rechazo) y «runtime» sólo en l. 122 (los permisos «no sustituyen
     runtime/policy»). l. 134 habla de «las capas aplicables» sin decir cuándo
     una capa no aplica.
  2. **Mecanizable frente a semántico sin clasificar.** La pregunta 4 de la
     sesión (l. 32-33) pide distinguir validaciones estructurales de las que
     requieren «reconciliación semántica o revisión humana». Las filas
     responden con cuatro capas (l. 69) y la tabla l. 127-132 describe sus
     comprobaciones, pero no dice cuáles son reglas mecanizables que S04
     l. 112 obliga a aplicar «mediante runtime/policy determinista —incluidos
     … schemas, límites, gates de autorización—» y cuáles son «reglas
     semánticas no mecanizables» que «se comprueban con evidencia, verifier y
     revisión humana según riesgo». l. 132 admite revisión humana en la capa
     semántica; l. 129-131 (schema, referencias resolubles, contraste con
     «el repositorio y tracker reales») parecen mecanizables, pero la unidad
     no lo declara. ADR-004 punto 4 (l. 73-75) repite las cuatro
     comprobaciones sin actor ni clasificación.
  3. **Una categoría de rechazo no puede emitirla su sujeto.** El rechazo se
     define como acto del receptor: l. 73 («la negativa del receptor a asumir
     una solicitud válida») y l. 160 («el receptor no asume la solicitud y
     registra una razón accionable»). Pero l. 145
     (`recipient_unavailable_or_ineligible`: «disponibilidad del receptor es
     inadecuada») y l. 71 (`recipient` como selector que «deberá resolverse»
     a un actor concreto) describen casos sin receptor capaz de registrar
     nada. l. 109 exige actor en cada evento y l. 80 prohíbe escribir «ante
     estado ambiguo». Quién registra ese `rejected` (orchestrator,
     runtime/policy, el emisor) no consta.
  4. **La autoridad del emisor la juzga el receptor sin fuente declarada.**
     l. 144 (`insufficient_authority`: «El emisor o el receptor no tiene la
     autoridad requerida») y l. 132 («autoridad y permisos efectivos para
     solicitar») ponen en el receptor el juicio sobre la autoridad de quien
     solicita; l. 106 (`authority`) aporta «referencias que justifican»; los
     criterios de autoridad viven, según S03 l. 36 y 56, en el registro de
     fuentes, cuyo esquema está `deferred` (S03 l. 237). Es el patrón de
     `REV-2026-018` (el mismo agente juzga su límite) trasladado al contrato.
- Inferencia (si aplica): el contrato es «portable» y «sin delegar garantías
  críticas a cada adapter» (l. 69), pero no dice a quién se las confía; la
  separación de S04 l. 112 entre enforcement determinista y juicio semántico
  no se proyecta sobre las cuatro capas. No se afirma que deba nombrarse un
  componente concreto (eso puede ser de S11); se afirma que ni el reparto ni
  la clasificación están escritos y que una categoría de rechazo carece de
  emisor posible bajo la definición de l. 73/160.

## Observación y propuesta

- Observación: `REV-2026-037` registró la ausencia de responsable de la
  «reconciliación operativa» posterior a `completed`; aquí el hueco es
  anterior: quién valida y quién rechaza antes de `accepted`. `REV-2026-018`
  preguntó quién fija los criterios de autoridad; aquí se observa que el
  contrato añade quién los aplica (el receptor) sin decir contra qué fuente.
  No se duplican.
- Propuesta concreta: que la persona decida (a) qué capas son mecanizables y
  corresponden a runtime/policy (S04 l. 112) y cuáles a verifier o revisión
  humana, dejando constancia en S05 o remitiendo a S11 con fila `deferred`;
  (b) qué actor aplica las capas y registra `accepted`/`rejected`, en
  particular para l. 145 y para un selector que no resuelve (l. 71, 87-89);
  (c) qué significa «capas aplicables» en l. 134; (d) qué fuente de verdad
  consulta el receptor para juzgar la autoridad del emisor (l. 132, 144). No
  editar S05 sin esa decisión.
- Contraargumento o coste/riesgo: dejar el mecanismo a arquitectura (l. 59)
  es una decisión explícita y razonable; «antes de aceptar» implica que el
  receptor (o su runtime) valida, y l. 145 puede ser emitida por el actor
  resuelto cuando le falta capacidad o independencia —sólo «disponibilidad»
  carece de emisor—; S11/ADR-010 pueden asignar el rechazo en ausencia de
  receptor al runtime. El coste de la propuesta es una columna o una frase por
  capa y una regla para el caso sin receptor.

## Análisis adicional

- Evidencia interna: hechos 1-4. Enlaces: S05 l. 32-33
  ([Preguntas de la sesión](../definition/session-05-handoffs.md#preguntas-de-la-sesión)),
  l. 59, 69, 71, 73, 79 ([Decisiones](../definition/session-05-handoffs.md#decisiones)),
  l. 125-135 ([Capas](../definition/session-05-handoffs.md#capas-de-validación)),
  l. 137-150 ([Categorías](../definition/session-05-handoffs.md#categorías-de-rechazo)),
  l. 160 ([Lifecycle inicial](../definition/session-05-handoffs.md#lifecycle-inicial));
  S04 l. 107, 110, 112 ([tabla de conclusiones](../definition/session-04-operating-cycle.md#acuerdos-y-orientación-de-la-sesión));
  ADR-004 l. 73-75 ([Decisión](../adr/ADR-004-contrato-portable-de-handoffs.md#decisión));
  S03 l. 36, 56, 237 ([Decisiones](../definition/session-03-sources-of-truth.md#decisiones),
  [Detalles aplazados](../definition/session-03-sources-of-truth.md#detalles-aplazados));
  anotaciones relacionadas: [`REV-2026-018`](2026-09-21-REV-2026-018-quien-define-criterios-de-autoridad-y-como-se-audita-el-limite.md),
  [`REV-2026-037`](2026-09-24-REV-2026-037-efecto-de-consultation-y-verification-request-sobre-el-status-de-s04-sin-regla-y-reconciliacion-operativa-sin-definir.md),
  [`REV-2026-027`](2026-09-24-REV-2026-027-enumeracion-de-estados-y-transiciones-de-s04-no-cerrada-draft-y-waiting-blocked-desde-ready.md)
  (transiciones que runtime/policy debe aplicar determinísticamente).
- Contraevidencia y límites: S05 l. 181-209 («Integridad…», «Separación y
  recuperación») no se analizaron (bloque `B021`): por búsqueda no nombran
  orchestrator ni runtime, pero podrían asignar el rechazo sin esos términos;
  S11, ADR-007 y ADR-010 no se leyeron; S09 (controles ejecutables, ADR-004
  l. 124-125) está fuera del alcance. No se demuestra que ningún documento
  asigne el validador; se demuestra que S05 no lo hace y que su definición de
  rechazo (l. 73, 160) no cubre l. 145.
- Pregunta para resolver: ¿qué capas de l. 127-132 son mecanizables y las
  aplica runtime/policy, cuáles exigen verifier o revisión humana, qué actor
  registra `rejected` cuando el receptor no está disponible o el selector no
  resuelve, y contra qué fuente juzga el receptor la autoridad del emisor?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: pendiente
