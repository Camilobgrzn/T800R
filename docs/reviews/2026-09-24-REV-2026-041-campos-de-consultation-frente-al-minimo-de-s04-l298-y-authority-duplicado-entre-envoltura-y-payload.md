# Anotación de revisión

- ID de anotación: `REV-2026-041`
- Unidad y ubicación: `S05` — [session-05-handoffs.md, «Payloads de verificación y consulta»](../definition/session-05-handoffs.md#payloads-de-verificación-y-consulta)
  (`consultation`, l. 123) y [«Envoltura común mínima»](../definition/session-05-handoffs.md#envoltura-común-mínima)
  (`recipient` l. 103, `subject` l. 104, `base` l. 105, `authority` l. 106,
  `references` l. 107), frente a las filas l. 65 y l. 68 de
  [«Decisiones»](../definition/session-05-handoffs.md#decisiones) y a
  [S04, «Persistencia mínima de consultas y esperas»](../definition/session-04-operating-cycle.md#persistencia-mínima-de-consultas-y-esperas)
  (l. 298-299). Bloque `B020`.
- Revisión examinada: estado de los archivos al 2026-09-24; repositorio sin
  commits, huella no disponible. S05 cerrada el 2026-09-16 (l. 3). Citas
  distintivas: «`consultation` | `request`, `authority`, `reason`,
  `consequences`, `stopped_work`, `independent_work`, `options`,
  `recommendation`, `resolution_condition`» (l. 123); «`authority` |
  Referencias que justifican solicitar o aplicar la acción y autoridad
  requerida del receptor» (l. 106); «cada payload exigirá sólo los datos
  propios de su intención» (l. 65); «El usuario aceptó reutilizar los acuerdos
  de verificación, consultas y esperas de la sesión 4» (l. 68); «Toda consulta
  o espera persistirá como mínimo: tipo (`waiting`, `bloqueo`, `decisión`,
  `revisión` o `permiso`); pregunta o acción exacta y autoridad destinataria;
  motivo y consecuencias; ámbito y dependencias afectadas; checkpoint,
  revisión base y evidencia; trabajo detenido y trabajo independiente que
  continúa; opciones y recomendación cuando existan; condición de resolución
  y próxima acción» (S04 l. 298).
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos textuales; `media` sobre el efecto (S05
  l. 210-232 sólo por búsqueda; S11 no leída)
- Impacto: si una `consultation` conforme a l. 123 cumple el mínimo que S04
  l. 298 (`accepted`, «fija el contenido mínimo» según l. 299) exige a «toda
  consulta o espera», o si tres elementos —tipo, ámbito y dependencias
  afectadas, próxima acción— quedan sin campo ni regla de dónde viven; y qué
  significa `authority` en el payload frente a `recipient` y al `authority`
  de la envoltura, que la capa estructural (l. 129) y la de reconciliación
  (l. 131) no pueden contrastar sin una relación escrita. Responde a la pista
  de `B018`/`B019` sobre l. 123 frente a S04 l. 298. No cambia el contenido de
  ninguna fila aceptada.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión exclusivamente interna; no se invoca
  ninguna fuente externa)
- Fuente primaria: `docs/definition/session-05-handoffs.md` l. 54, 58, 65-68,
  76 (dependencia), 91-109, 111-123, 129, 148 (leídas), l. 217 y 229
  (dependencia, por búsqueda) y búsqueda en toda la unidad de «authority»
  (l. 66, 106, 123, 184 y por «autoridad» l. 144, 217, 229);
  `docs/definition/session-04-operating-cycle.md` l. 298-299
- Sección o localizador: «Decisiones», «Envoltura común mínima», «Payloads
  de ownership», «Payloads de verificación y consulta», «Categorías de
  rechazo», «Semántica inicial de los tipos», «Resultado mínimo de
  `completed`» (S05); «Persistencia mínima de consultas y esperas» (S04)
- Fecha de consulta/publicación: consulta 2026-09-24; S05 cerrada el
  2026-09-16 según l. 3
- Hecho observado:
  1. **S04 fija nueve elementos mínimos; S05 declara reutilizarlos.** S04
     l. 298 enumera: tipo (cinco valores); pregunta o acción exacta y
     autoridad destinataria; motivo y consecuencias; ámbito y dependencias
     afectadas; checkpoint, revisión base y evidencia; trabajo detenido e
     independiente; opciones y recomendación; condición de resolución y
     próxima acción. l. 299 aclara que ese acuerdo «fija el contenido mínimo,
     no su representación». S05 l. 68 justifica el payload de `consultation`
     como reutilización de «los acuerdos de verificación, consultas y esperas
     de la sesión 4».
  2. **Correspondencia elemento a elemento.** Con la envoltura (l. 93-109) y
     el payload (l. 123): pregunta/acción → `request`; motivo → `reason`;
     consecuencias → `consequences`; checkpoint y revisión base → `base`
     (l. 105: «Revisión, checkpoint, estado y owner esperados»); evidencia →
     `references` (l. 107); trabajo detenido/independiente → `stopped_work`/
     `independent_work`; opciones/recomendación → `options`/`recommendation`;
     condición de resolución → `resolution_condition`. Sin correspondencia:
     (i) **tipo**: el `type` de la envoltura (l. 97) es la intención
     (`consultation`), no la clase; l. 217 (por búsqueda) enumera
     «información, decisión, revisión humana o permiso» en prosa, sin campo y
     sin `waiting` ni `bloqueo`; (ii) **ámbito y dependencias afectadas**:
     `subject` (l. 104) es «Referencia tipada a la tarea, incremento,
     decisión, revisión u objeto afectado», una referencia, no el conjunto de
     dependencias; `dependencies` existe sólo en los payloads de ownership
     (l. 115); (iii) **próxima acción**: la envoltura no la tiene;
     `resolution_condition` es una condición, no una acción; la «acción de
     seguimiento» (l. 76, 229) forma parte de `completed`, es decir, se
     registra al responder, mientras S04 l. 298 la exige al persistir la
     consulta; la «próxima acción» de l. 148 es la del rechazo.
  3. **`authority` con dos semánticas y un tercer campo solapado.** La
     envoltura define `authority` en l. 106 como «Referencias que justifican
     solicitar o aplicar la acción y autoridad requerida del receptor». El
     payload de `consultation` (l. 123) vuelve a exigir `authority` sin
     semántica (la tabla l. 120-123 sólo anota una salvedad sobre `options` y
     `recommendation`); por l. 68 y S04 l. 298 debería ser la «autoridad
     destinataria», que l. 103 ya sitúa en `recipient` («Actor o autoridad
     destinataria identificable»). l. 65 exige que «cada payload exigirá sólo
     los datos propios de su intención». Ninguna línea relaciona los tres
     campos (deben coincidir, cuál prevalece, qué ocurre si `recipient` es un
     selector y `authority` del payload nombra a otra autoridad); l. 76/229
     («respuesta o decisión atribuida a la autoridad») no dice a cuál de
     ellos. Por búsqueda, «authority» aparece en l. 66, 106, 123 y 184 (lista
     de campos inmutables): una vez emitido, el campo no puede corregirse.
  4. **Ninguna unidad dice que el tracker complete lo que el handoff omite.**
     S04 l. 298 aplica a «toda consulta o espera», incluidas las que S05 l. 58
     obliga a persistir como handoff; S05 l. 54 deja «sólo en el tracker» las
     actualizaciones sin receptor, pero no dice que una `consultation`
     persistida como handoff tenga además una entrada en el tracker con tipo,
     dependencias afectadas y próxima acción (`REV-2026-036` hecho 4:
     ausencia de mapa; `REV-2026-037` hecho 4: «al responder» frente a
     «después»).
- Inferencia (si aplica): «reutilizar» no exige copiar y la envoltura absorbe
  legítimamente checkpoint, base y evidencia; pero tres elementos del mínimo
  aceptado en S04 no tienen campo ni regla de ubicación, y el campo que sí se
  repite (`authority`) lo hace con semántica distinta. No se afirma que el
  payload deba crecer: se afirma que la unidad no dice si l. 123 cumple S04
  l. 298 ni cómo.

## Observación y propuesta

- Observación: S05 l. 68 responde a la pregunta 3 de la sesión (l. 30-31)
  remitiendo a S04; la comprobación elemento a elemento muestra que la
  remisión es parcial. Es la salida concreta de la pista (j) de `B019` y de la
  pregunta 3 de `B017`; se relaciona con `REV-2026-038` (a quién nombra la
  «autoridad destinataria» cuando es la persona) sin repetirla.
- Propuesta concreta: que la persona decida (a) si l. 123 debe añadir tipo o
  clase de consulta, ámbito y dependencias afectadas y próxima acción, o
  declarar en S05 que `subject`/`references`/`resolution_condition` los
  cubren y el tracker aporta el resto; (b) la semántica del `authority` del
  payload y su relación con `recipient` y con el `authority` de la envoltura
  (renombrar, definir o suprimir); (c) si S04 l. 298 debe llevar marca de
  retorno indicando que la representación de una consulta dirigida es
  `consultation` de `handoff/v1` (propuesta (c) de `REV-2026-036`). No editar
  S04 ni S05 sin esa decisión.
- Contraargumento o coste/riesgo: la «próxima acción» de S04 puede leerse
  como lo que sigue a la resolución, es decir, `resolution_condition` más la
  «acción de seguimiento» de `completed`; «ámbito» puede leerse como
  `subject`; el tipo puede inferirse de `request` y `authority`; el
  `authority` del payload puede nombrar deliberadamente a la autoridad que
  decide cuando `recipient` es un selector o un intermediario, lo que
  resolvería la pregunta 1 de `B019` (T800R recibe, la persona decide) si se
  escribiera. El coste de la propuesta es hasta tres campos y una definición.

## Análisis adicional

- Evidencia interna: hechos 1-4. Enlaces: S05 l. 65, 68
  ([Decisiones](../definition/session-05-handoffs.md#decisiones)), l. 93-109
  ([Envoltura](../definition/session-05-handoffs.md#envoltura-común-mínima)),
  l. 113-116 ([Payloads de ownership](../definition/session-05-handoffs.md#payloads-de-ownership)),
  l. 120-123 ([Payloads de verificación y consulta](../definition/session-05-handoffs.md#payloads-de-verificación-y-consulta)),
  l. 217 ([Semántica inicial de los tipos](../definition/session-05-handoffs.md#semántica-inicial-de-los-tipos)),
  l. 229 ([Resultado mínimo de `completed`](../definition/session-05-handoffs.md#resultado-mínimo-de-completed));
  S04 l. 298-299 ([Persistencia mínima](../definition/session-04-operating-cycle.md#persistencia-mínima-de-consultas-y-esperas));
  anotaciones relacionadas: [`REV-2026-036`](2026-09-24-REV-2026-036-pregunta-8-de-s05-representacion-y-ubicacion-sin-fila-y-aplazamiento-de-s04-l299-no-recibido.md),
  [`REV-2026-037`](2026-09-24-REV-2026-037-efecto-de-consultation-y-verification-request-sobre-el-status-de-s04-sin-regla-y-reconciliacion-operativa-sin-definir.md),
  [`REV-2026-038`](2026-09-24-REV-2026-038-tipo-de-actor-sin-enumeracion-y-persona-sin-lugar-en-handoff-v1-como-actor-receptor-o-aceptante.md),
  [`REV-2026-020`](2026-09-21-REV-2026-020-tabla-de-persistencia-sin-destino-para-lo-no-confirmado.md)
  (salida parcial: la consulta dirigida tiene contrato; su lugar y lo no
  dirigido, no).
- Contraevidencia y límites: S05 l. 210-232 no se analizaron (bloque
  `B021`); l. 217 y 229 sólo por búsqueda; ADR-004 «Decisión» punto 7
  (l. 82-86) resume `completed` sin listar campos de emisión; S11 no se leyó
  y podría fijar el schema físico con campos adicionales. La correspondencia
  del hecho 2 es una lectura del revisor: la persona puede considerar que
  `subject` cubre «ámbito» y que la próxima acción es de `completed`; en ese
  caso subsisten «tipo» y «dependencias afectadas» y la doble `authority`.
- Pregunta para resolver: ¿cumple una `consultation` conforme a l. 123 el
  mínimo de S04 l. 298 —y dónde quedan tipo, dependencias afectadas y próxima
  acción si no—, y qué significa `authority` en el payload frente a
  `recipient` y al `authority` de la envoltura?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: pendiente
