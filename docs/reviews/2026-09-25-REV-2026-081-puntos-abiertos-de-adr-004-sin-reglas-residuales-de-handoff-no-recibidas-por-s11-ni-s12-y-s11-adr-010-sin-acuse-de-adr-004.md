# Anotación de revisión

- ID de anotación: `REV-2026-081`
- Unidad y ubicación: `ADR-004` — [«Puntos abiertos»](../adr/ADR-004-contrato-portable-de-handoffs.md#puntos-abiertos)
  y [«Referencias»](../adr/ADR-004-contrato-portable-de-handoffs.md#referencias),
  `docs/adr/ADR-004-contrato-portable-de-handoffs.md:116-133`, frente a `S05`
  (l. 62, 66, 80, 100-101, 163), `S09` (l. 45-46), `S11` (l. 28-29, 39-40, 103,
  106, 108, 115, 180, 223-225), `ADR-010` (l. 151-158, 190-209), `S12` (l. 59,
  63-65, 70-75) y al [tracker de definición](../definition-tracker.md)
  (l. 6-7, 342-349). Bloque `B040`.
- Revisión examinada: estado de los archivos al 2026-09-25 (repositorio sin
  commits; ADR-004 fechado 2026-09-16 y editado después en l. 120-123; S08/ADR-007
  cerrados el 2026-09-22; S11 y ADR-010 el 2026-09-24; S12 `in_progress`). Citas
  distintivas: «¿Qué representación física y ubicación tendrá `handoff/v1`? →
  sesión 11, arquitectura del MVP» (ADR-004 l. 118-119); «¿Qué controles
  ejecutables harán cumplir permisos y riesgo? → sesión 9» (l. 124-125);
  «`expired`: venció antes del punto permitido por la política de caducidad»
  (S05 l. 163); «Handoffs autoritativos en el work tracker | `accepted`» (S11
  l. 106); «La segunda auditoría no encontró … contradicciones con ADR-001 a
  ADR-009» (S11 l. 223-225).
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos textuales (búsquedas en todo `docs/` salvo
  `reviews/` de «expires_at|due_at|caducidad|vencid|política de caducidad|
  ADR-004|handoff»); `media` sobre el efecto (S08, S09, S11, S12 y ADR-010 se
  leyeron sólo en las líneas citadas; no se revisaron como bloques)
- Impacto: si la sesión 12, que debe comprobar la «ausencia de ambigüedades que
  impidan implementar las pruebas» (S12 l. 65) y dar disposición a las
  incógnitas restantes (l. 47-48), recibe algún inventario de las reglas de
  `handoff/v1` que ningún documento posee; si el schema `handoff` que S11
  compromete (l. 115) puede escribirse sin decidir cuándo son obligatorios
  `expires_at`/`due_at` y qué es la «política de caducidad»; y qué puntos de
  ADR-004 siguen abiertos. No cambia ninguna fila aceptada.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión exclusivamente interna; no requiere
  fuente externa según [README](README.md)).
- Fuente primaria: `docs/adr/ADR-004-contrato-portable-de-handoffs.md:3, 98,
  116-133`; `docs/definition/session-05-handoffs.md:58-80, 96-103, 152-179`;
  `docs/definition/session-08-portability.md:1-14, 86-100, 212-226`;
  `docs/definition/session-09-security-governance.md:38-67`;
  `docs/definition/session-11-mvp-architecture.md:1-60, 100-119, 144-183,
  215-235`; `docs/adr/ADR-010-arquitectura-tecnica-del-mvp.md:150-209`;
  `docs/definition/session-12-validation-convergence.md:5-76`;
  `docs/definition-tracker.md:1-12, 340-360`; búsquedas indicadas en
  «Confianza».
- Sección o localizador: ver «Unidad y ubicación».
- Fecha de consulta/publicación: consulta 2026-09-25.
- Hecho observado:
  1. **Los cuatro destinos de «Puntos abiertos» están cerrados; dos llevan marca
     y dos no.** El tracker declara completadas las sesiones 5 a 11 y la 12
     `in_progress` (l. 342-349). l. 120-121 y 122-123 llevan «resuelto en sesión
     8/6» con enlace (ediciones posteriores a la fecha 2026-09-16 del ADR, sin
     nota de edición). l. 118-119 sigue «→ sesión 11» aunque S11 recibió la
     pregunta (l. 28-29: «¿Qué representación física y schemas usan … handoffs
     …?») y la decidió: `handoff/v1` «se persiste como estado estructurado de
     coordinación mediante el puerto de work tracking» (l. 106), con schema
     top-level `handoff` (l. 115) y lifecycle propio en la CLI (l. 179-180;
     ADR-010 puntos 10-11, l. 151-158). l. 124-125 sigue «→ sesión 9», pero S09
     fijó el baseline lógico y dejó «los mecanismos concretos para arquitectura»
     (l. 45-46); S11 los recibe (pregunta 10, l. 39-40; política como DSL
     tipada, l. 144; ADR-010 puntos 13-14). Es el patrón de `REV-2026-066`/`070`/
     `076` hecho 1 y, para l. 124-125, el de `REV-2026-070` hecho 2 (destino que
     reenvía). Con ello **ningún punto de ADR-004 queda abierto**.
  2. **Las reglas residuales de `handoff/v1` no aparecen en ningún destino.**
     S05 declara `expires_at` y `due_at` «condicionales» (l. 66, 100-101) sin
     condición y define `expired` por una «política de caducidad» (l. 163). La
     búsqueda en todo `docs/` salvo `reviews/` devuelve «expires_at» y «due_at»
     sólo en S05, y «política de caducidad» sólo en S05 l. 163; en S08-S12 y
     ADR-007-010, «caduc» sólo aparece en S11 l. 108 como argumento para
     rechazar handoffs en archivos versionados. Tampoco reciben destino el actor
     que registra `rejected` por `recipient_unavailable_or_ineligible` ni las
     partes del cierre coordinado de una solicitud `accepted`: S11 enumera los
     comandos `handoff accept|reject|complete|cancel` (l. 179-180) sin decir
     quién puede invocarlos en esos casos, y no contiene «receptor»,
     «recipient» ni «cierre coordinado» (búsqueda). Son las lagunas de
     `REV-2026-039`, `040` y `042`, cuyas limitaciones decían que S11 y
     ADR-010 «no se leyeron»; `REV-2026-044` hecho 6 constató que ADR-004
     l. 118-125 no las lista, sin afirmar que siguieran sin resolver.
  3. **La sesión abierta no las recibe.** S12 no contiene «handoff» ni «ADR-004»
     (búsqueda); sus «Preguntas abiertas» (l. 70-75) son piloto, tuplas y el
     alcance de esta revisión. S12 l. 59 remite a una «revisión adversarial del
     canon vigente» y l. 63-65 exige «ausencia de ambigüedades que impidan
     implementar las pruebas»: la cadena S05 → ADR-004 → S11 → S12 no lleva
     hasta ella ninguna de las reglas del hecho 2.
  4. **S11 y ADR-010 resuelven el punto de ADR-004 sin citarlo.** Ninguno
     contiene «ADR-004» (búsqueda). ADR-010 «Referencias» (l. 198-209) enlaza
     ADR-002, 003, 005, 007, 008 y 009, no ADR-004, aunque su punto 11 decide
     lo que ADR-004 l. 118-119 le envía. S11 afirma que su segunda auditoría no
     encontró contradicciones «con ADR-001 a ADR-009» (l. 223-225) sin decir qué
     recibió de ADR-004. A la inversa, ADR-004 «Referencias» (l. 129-133) enlaza
     sólo S05, ADR-003 y tres fuentes externas; ADR-005 (l. 135), ADR-007
     (l. 131) y ADR-008 (l. 78) enlazan ADR-004. De los cuatro ADR que
     resuelven sus puntos (005, 007, 008 y 010), ADR-010 es el único sin enlace
     en ninguna dirección, precisamente el que cierra el último punto con
     destino (ADR-006 y ADR-009 tampoco enlazan ADR-004, pero no reciben
     ninguno de sus puntos).
- Inferencia (si aplica): quien use «Puntos abiertos» como inventario de
  `handoff/v1` concluirá que no queda nada pendiente —tres puntos resueltos y uno
  enviado a una sesión cerrada—, mientras al menos la condición de
  `expires_at`/`due_at` y la política de caducidad condicionan el schema
  `handoff` que S11 promete publicar y que la estrategia contract-first (ADR-010
  punto 15) prueba primero. Sin inventario, esas reglas llegarán a construcción
  como decisiones de implementación, contra la frontera de fase de `AGENTS.md`
  (l. 5-10).

## Observación y propuesta

- Observación: lo nuevo respecto de `REV-2026-039`/`040`/`042`/`044` es la
  comprobación de que ninguna sesión posterior, incluida la que fijó la
  representación física, recogió esas reglas, y de que el único inventario las
  omite mientras todos sus destinos ya están cerrados. No se afirma que S11
  debiera decidir semántica de S05: se afirma que nadie la tiene asignada.
- Propuesta concreta: que la persona decida (a) si las reglas residuales de
  `handoff/v1` —condición de `expires_at`/`due_at`, «política de caducidad»,
  actor del rechazo sin receptor y partes del cierre coordinado; opcionalmente,
  el campo del resultado de `REV-2026-043`— se resuelven en S12, se registran
  como incógnitas con disposición (S12 l. 47-48) o se decide que no bloquean el
  schema `handoff`; (b) con la convención que se adopte para
  `REV-2026-066`/`070`/`076`, si ADR-004 marca l. 118-119 como resuelto en S11 y
  ADR-010 y l. 124-125 como resuelto en S09/ADR-008 con mecanismos en S11/ADR-010;
  (c) si ADR-010 enlaza ADR-004 y S11 deja constancia de lo recibido. No editar
  ADR-004, S05, S11, ADR-010 ni S12 sin esa decisión.
- Contraargumento o coste/riesgo: un schema puede declarar ambos campos
  opcionales sin regla adicional y una oferta sin `expires_at` no caduca, lo que
  es seguro por defecto (sólo el emisor la cancela, S05 l. 61); el actor del
  rechazo puede entenderse cubierto por S08 l. 99 («Sólo la validación y
  reconciliación comunes pueden aplicar una transición canónica») y por el
  runtime de S11 l. 103, que «aplica estados y gates». Pero l. 163 introduce una
  política distinta de `expires_at` que nadie posee, y el cierre coordinado sigue
  sin partes. El coste es una fila o una pregunta abierta en S12 y una línea por
  punto en ADR-004.

## Análisis adicional

- Evidencia interna: hechos 1-4 con sus localizadores.
  [`REV-2026-036`](2026-09-24-REV-2026-036-pregunta-8-de-s05-representacion-y-ubicacion-sin-fila-y-aplazamiento-de-s04-l299-no-recibido.md)
  hecho 5 (destino sólo en ADR-004; aquí se confirma la recepción en S11 l. 106),
  [`REV-2026-039`](2026-09-24-REV-2026-039-expires-at-y-due-at-condicionales-sin-condicion-ni-politica-de-caducidad-frente-a-la-capa-estructural.md),
  [`REV-2026-040`](2026-09-24-REV-2026-040-actor-que-aplica-las-capas-de-validacion-y-registra-rejected-sin-fijar-y-capas-mecanizables-sin-clasificar.md),
  [`REV-2026-042`](2026-09-24-REV-2026-042-accepted-sin-salida-si-el-aceptante-desaparece-cierre-coordinado-sin-partes-y-escalacion-de-due-at-sin-observador-ni-representacion.md),
  [`REV-2026-043`](2026-09-24-REV-2026-043-tiempos-de-la-envoltura-fuera-de-los-inmutables-contenido-de-la-idempotencia-sin-definir-y-resultado-de-completed-sin-campo.md),
  [`REV-2026-044`](2026-09-24-REV-2026-044-cierre-s05-omite-caducidad-fuentes-canonicas-y-evidencia-auditoria-como-relectura-de-filas-y-no-bloqueo-para-s06-sin-enumerar.md)
  hecho 6,
  [`REV-2026-066`](2026-09-25-REV-2026-066-adr-001-fuente-de-autonomia-sin-reflejar-s04-ni-s09-puntos-abiertos-con-destinos-cerrados-sin-marca-y-sin-enlace-a-adr-008.md),
  [`REV-2026-070`](2026-09-25-REV-2026-070-puntos-abiertos-de-adr-002-con-destinos-cerrados-sin-marca-handoffs-reenviados-a-s11-skills-resueltas-en-s08-y-sin-enlaces-a-adr-posteriores.md),
  [`REV-2026-076`](2026-09-25-REV-2026-076-detalles-diferidos-de-adr-003-con-destinos-cerrados-sin-marca-runbooks-de-maintain-sin-recepcion-en-s09-y-referencias-sin-adr-posteriores.md)
  hecho 3,
  [`REV-2026-080`](2026-09-25-REV-2026-080-consecuencias-de-adr-004-asignan-al-orchestrator-la-reconciliacion-previa-sin-fila-en-s05-y-aplicar-ambiguo-entre-aceptacion-y-seguimiento.md)
  (matiz en [B040](blocks/B040.md): S11 l. 103 y 106 reparten lo que l. 107-108
  atribuye al orchestrator).
- Contraevidencia y límites: S08, S09, S11, S12 y ADR-010 no se revisaron como
  bloques; una regla podría figurar con otra redacción («vigencia», «plazo»).
  La búsqueda de «venc» en S08-S12 y ADR-007-010 sólo devolvió usos ajenos
  (vencimiento de aprobaciones en S09 l. 65, 85; aliases en S08 l. 224;
  «convención»). S11 l. 115 dice que los schemas compartirán definiciones de
  «tiempo» y «resultados», lo que puede alojar los campos pero no la condición.
  No se afirma que la ausencia bloquee la construcción: se afirma que nadie ha
  decidido si la bloquea.
- Pregunta para resolver: ¿qué sesión o artefacto recibe, antes de autorizar la
  construcción, la condición de `expires_at`/`due_at`, la «política de
  caducidad» de S05 l. 163, el actor del rechazo sin receptor y las partes del
  cierre coordinado, y debe ADR-004 marcar sus dos puntos con destino cerrado y
  ADR-010 enlazar ADR-004?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B040](blocks/B040.md), [B039](blocks/B039.md)
  (pregunta 1), [B022](blocks/B022.md); cruces `CT02`, `CT05` y `CT07`.

## Preguntas pendientes

Ver el checkpoint [B040](blocks/B040.md).

## Cobertura y límites

Ver el checkpoint [B040](blocks/B040.md). Fuentes externas: ninguna; el
problema es interno.
