# Anotación de revisión

- ID de anotación: `REV-2026-042`
- Unidad y ubicación: `S05` — [session-05-handoffs.md, «Matriz de transiciones»](../definition/session-05-handoffs.md#matriz-de-transiciones)
  (l. 175) y [«Separación y recuperación»](../definition/session-05-handoffs.md#separación-y-recuperación)
  (l. 204-205), frente a las filas l. 61, 62, 64 y 80 de
  [«Decisiones»](../definition/session-05-handoffs.md#decisiones), a l. 101
  de [«Envoltura común mínima»](../definition/session-05-handoffs.md#envoltura-común-mínima),
  a l. 162 de [«Lifecycle inicial»](../definition/session-05-handoffs.md#lifecycle-inicial),
  al criterio de salida (l. 238, «recuperación») y a
  [S04, filas l. 108, 109 y 116](../definition/session-04-operating-cycle.md#acuerdos-y-orientación-de-la-sesión).
  Bloque `B021`.
- Revisión examinada: estado de los archivos al 2026-09-24; repositorio sin
  commits, huella no disponible. S05 cerrada el 2026-09-16 (l. 3). Citas
  distintivas: «`accepted` | `completed`, `cancelled` | `cancelled` exige
  cierre coordinado; no se permite rechazo, caducidad ni sustitución tardíos»
  (l. 175); «Una verificación o consulta `accepted` sobrevive a la sesión: se
  reanuda o se cancela coordinadamente antes de crear un reemplazo»
  (l. 204-205); «Tras `accepted`, una verificación o consulta sólo se cancela
  mediante un cierre coordinado que registre razón, actor y trabajo parcial»
  (l. 61); «una fecha `due_at` puede activar aviso, espera o escalación, pero
  no extingue la obligación ni libera ownership automáticamente» (l. 62);
  «Una interrupción queda `cancelled` o se recupera preservando lo encontrado.
  Reanudar crea una nueva sesión enlazada al checkpoint» (S04 l. 116).
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos textuales; `media` sobre el efecto (S11,
  ADR-007 y ADR-010 no leídos; el mecanismo puede estar asignado allí)
- Impacto: qué puede hacer el emisor —o el orchestrator— con una
  `verification_request` o `consultation` `accepted` cuyo aceptante no
  responde ni reaparece (sesión perdida, S04 l. 116); quién registra el
  evento `cancelled` coordinado y con qué evidencia (l. 109 exige actor por
  evento; l. 80/208 prohíben escribir ante ambigüedad); quién observa `due_at`
  y con qué artefacto se «escala»; y si el criterio de salida puede declarar
  definida la «recuperación» (l. 238) sin ese caso. Responde a las preguntas 4
  y 6 de `B019` y a la pregunta 6 de `B020`: el rango no las resuelve. No
  cambia el contenido de ninguna fila aceptada.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión exclusivamente interna; no se invoca
  ninguna fuente externa)
- Fuente primaria: `docs/definition/session-05-handoffs.md` l. 54, 57, 61, 62,
  64, 77, 80 (dependencia), 101, 109 (dependencia), 152-179, 194-209, 228-229
  (leídas), l. 238 y 257 (por búsqueda) y búsqueda en toda la unidad de
  «coordinad» (l. 61, 64, 77, 80, 162, 175, 205), «escalaci» (sólo l. 62),
  «abandono» (l. 62, 257), «sobrevive» (sólo l. 204), «orchestrator» (sólo
  l. 63), «runtime» (sólo l. 122); `docs/definition/session-04-operating-cycle.md`
  l. 108, 109, 116; `docs/adr/ADR-004-contrato-portable-de-handoffs.md`
  l. 76-78, 98-101 (leídas) y búsqueda de «coordinad|abandono|escalaci»
  (l. 78, 99; «abandono» y «escalaci» ausentes)
- Sección o localizador: «Decisiones», «Envoltura común mínima», «Lifecycle
  inicial», «Matriz de transiciones», «Separación y recuperación», «Criterio
  de salida» (S05); filas l. 108, 109, 116 (S04); «Decisión» puntos 5 y 11
  (ADR-004)
- Fecha de consulta/publicación: consulta 2026-09-24; S05 cerrada el
  2026-09-16 según l. 3
- Hecho observado:
  1. **Desde `accepted` sólo hay dos salidas y ambas dependen del
     aceptante.** l. 175: desde `accepted` sólo `completed` o `cancelled`;
     «no se permite rechazo, caducidad ni sustitución tardíos». `completed`
     exige que el aceptante persista el resultado (l. 157-158, 228-229).
     `cancelled` tras `accepted` es «coordinadamente» (l. 162) y «mediante un
     cierre coordinado que registre razón, actor y trabajo parcial» (l. 61);
     l. 64 exige ese cierre también antes de reemplazar. En toda S05
     «coordinad» aparece en l. 61, 64, 77, 80, 162, 175 y 205, y en ADR-004
     en l. 78 y 99; ninguna de esas líneas dice entre quiénes se coordina,
     quién puede registrar el evento ni qué evidencia basta.
  2. **La sección de recuperación repite la regla sin partes ni
     registrador.** l. 204-205: «Una verificación o consulta `accepted`
     sobrevive a la sesión: se reanuda o se cancela coordinadamente antes de
     crear un reemplazo». No dice qué sesión (la del aceptante o la del
     emisor), quién puede «reanudar» (otra ejecución del mismo actor lógico u
     otro actor), con quién se coordina si el aceptante no responde, ni quién
     escribe el evento `cancelled` (l. 109: cada evento conserva actor). l. 80
     y l. 208: «ante ambigüedad no se autoriza escritura». «sobrevive» aparece
     sólo en l. 204.
  3. **El emisor no tiene salida unilateral.** l. 61: la cancelación
     unilateral sólo mientras está `pending`; l. 64: `superseded` sólo
     reemplaza un `pending`; l. 175: sin caducidad desde `accepted`; l. 62 y
     l. 101: `due_at` «no extingue la obligación ni libera ownership». Si la
     sesión del aceptante se pierde (S04 l. 116: «Una interrupción queda
     `cancelled` o se recupera»), el emisor no puede cancelar, sustituir ni
     dejar caducar; l. 190 permite corregir con un identificador nuevo, pero
     l. 64 y l. 205 exigen el cierre coordinado antes del reemplazo.
  4. **La escalación de `due_at` no tiene observador ni representación.**
     l. 62: `due_at` «puede activar aviso, espera o escalación»; l. 101:
     «Expectativa condicional de respuesta tras aceptar». «escalaci» aparece
     sólo en l. 62 de S05 y no aparece en ADR-004. No es una transición
     (l. 175), no es un tipo de intención (l. 57) y, si no tiene receptor,
     «permanece sólo en el tracker» (l. 54). Quién observa `due_at` (emisor,
     orchestrator, runtime) no consta: «orchestrator» sólo en l. 63,
     «runtime» sólo en l. 122.
  5. **S04 no cubre este caso y S05 rechaza el criterio temporal sin dar
     otro.** S04 l. 109 («Ante aparente abandono, primero preserva y registra
     el trabajo recuperable y confirma que no existe otro escritor activo»)
     trata del owner que escribe; los verificadores «pueden operar en
     paralelo sin adquirir escritura» (S04 l. 108) y `consultation` «No
     transfiere ownership» (l. 217). El «umbral temporal concreto» de S04
     l. 109 sigue sin destino (`REV-2026-028`/`035`). S05 l. 62
     (justificación) evita «convertir el paso del tiempo en abandono» y l. 257
     (cierre, por búsqueda) afirma que la recuperación «no infiere abandono
     por pérdida de sesión o paso del tiempo», sin escribir el criterio
     alternativo.
  6. **ADR-004 repite el hueco.** Punto 5 (l. 77-78): «un `cancelled`
     coordinado»; punto 11 (l. 98-99): «Una solicitud aceptada se reanuda o
     cancela coordinadamente». Sin partes, registrador ni evidencia.
- Inferencia (si aplica): el contrato protege deliberadamente las obligaciones
  aceptadas frente a la pérdida silenciosa (l. 61, 62, 64, 80), pero la única
  salida que ofrece cuando el aceptante desaparece depende de ese mismo
  aceptante; el emisor queda sin acción conforme al contrato y el orchestrator
  sin regla escrita. No se afirma que el orchestrator no pueda ser la
  contraparte del cierre: se afirma que ninguna de las dos unidades lo dice y
  que el criterio de salida (l. 238) da por definida la recuperación.

## Observación y propuesta

- Observación: `REV-2026-037` registró que la «reconciliación operativa»
  posterior a `completed` no tiene responsable ni evento; `REV-2026-040`, que
  el rechazo anterior a `accepted` carece de actor en algunos casos. Aquí el
  hueco está dentro de `accepted`: la obligación viva sin aceptante. Se
  relaciona con `REV-2026-039` (política de caducidad sin dueño) sin
  repetirla: no se trata de la oferta `pending` sino de la obligación
  aceptada, que por diseño no caduca.
- Propuesta concreta: que la persona decida (a) quiénes son las partes del
  «cierre coordinado» (emisor y aceptante; o emisor y orchestrator cuando el
  aceptante no está localizable), quién registra el evento `cancelled` y qué
  evidencia basta (por ejemplo, la sesión `cancelled` de S04 l. 116 sin
  ejecución sucesora enlazada); (b) quién puede «reanudar» una obligación
  `accepted`: sólo el mismo actor lógico en una nueva sesión, o un sucesor
  mediante un handoff correlacionado tras el cierre; (c) quién observa
  `due_at` y qué artefacto es la «escalación»: una `consultation` correlacionada
  a una autoridad, una entrada del tracker (`waiting`, S04 l. 92) o un acto de
  la «reconciliación operativa»; (d) si el umbral de abandono de S04 l. 109
  alcanza a las obligaciones aceptadas de verificación y consulta y dónde
  consta. Si no se decide ahora, registrar `deferred` con destino (S11 o
  ADR-010). No editar S04, S05 ni ADR-004 sin esa decisión.
- Contraargumento o coste/riesgo: S04 l. 110 asigna al orchestrator
  reconciliar el estado y coordinar dependencias, de modo que «coordinado»
  puede leerse como «con el orchestrator»; S04 l. 116 ya permite dejar
  `cancelled` la sesión interrumpida y recuperar lo encontrado, lo que puede
  servir de evidencia; un verifier todavía activo puede completar con
  `inconclusive` (l. 228); una `consultation` correlacionada puede ser la
  escalación sin nombrarla; y el mecanismo puede corresponder legítimamente a
  la arquitectura (S11). El coste de la propuesta es una frase por regla en
  una unidad cerrada.

## Análisis adicional

- Evidencia interna: hechos 1-6. Enlaces: S05 l. 61, 62, 64, 80
  ([Decisiones](../definition/session-05-handoffs.md#decisiones)), l. 101
  ([Envoltura](../definition/session-05-handoffs.md#envoltura-común-mínima)),
  l. 162 ([Lifecycle inicial](../definition/session-05-handoffs.md#lifecycle-inicial)),
  l. 175 ([Matriz](../definition/session-05-handoffs.md#matriz-de-transiciones)),
  l. 204-208 ([Separación y recuperación](../definition/session-05-handoffs.md#separación-y-recuperación)),
  l. 238 ([Criterio de salida](../definition/session-05-handoffs.md#criterio-de-salida));
  S04 l. 108, 109, 116 ([tabla de conclusiones](../definition/session-04-operating-cycle.md#acuerdos-y-orientación-de-la-sesión));
  ADR-004 l. 76-78, 98-101 ([Decisión](../adr/ADR-004-contrato-portable-de-handoffs.md#decisión));
  anotaciones relacionadas: [`REV-2026-037`](2026-09-24-REV-2026-037-efecto-de-consultation-y-verification-request-sobre-el-status-de-s04-sin-regla-y-reconciliacion-operativa-sin-definir.md),
  [`REV-2026-039`](2026-09-24-REV-2026-039-expires-at-y-due-at-condicionales-sin-condicion-ni-politica-de-caducidad-frente-a-la-capa-estructural.md),
  [`REV-2026-040`](2026-09-24-REV-2026-040-actor-que-aplica-las-capas-de-validacion-y-registra-rejected-sin-fijar-y-capas-mecanizables-sin-clasificar.md),
  [`REV-2026-028`](2026-09-24-REV-2026-028-aplazamientos-embebidos-en-filas-accepted-de-s04-sin-fila-deferred-ni-destino-en-la-unidad.md),
  [`REV-2026-035`](2026-09-24-REV-2026-035-cierre-s04-afirma-sesion-de-resolucion-asignada-para-diferidos-sin-sesion-en-la-unidad.md)
  (umbral temporal sin destino), [`REV-2026-038`](2026-09-24-REV-2026-038-tipo-de-actor-sin-enumeracion-y-persona-sin-lugar-en-handoff-v1-como-actor-receptor-o-aceptante.md)
  (si el aceptante es la persona, el caso es una consulta sin respuesta).
- Contraevidencia y límites: S11, ADR-007 y ADR-010 no se leyeron: pueden
  asignar al runtime o al orchestrator la detección de sesiones perdidas y
  el cierre; S08 l. 311 (por búsqueda) menciona «reanudación, cambio de
  ejecución y recuperación según el orden aceptado» sin que se haya leído su
  contenido. No se demuestra que ningún documento fije las partes del cierre;
  se demuestra que S05 y ADR-004 no lo hacen y que el emisor carece de salida
  unilateral por el propio contrato.
- Pregunta para resolver: ¿quién puede cerrar o reanudar una
  `verification_request` o `consultation` `accepted` cuando el aceptante no
  responde ni reaparece, quién registra ese evento y con qué evidencia, y
  quién observa `due_at` y con qué artefacto escala?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: pendiente
