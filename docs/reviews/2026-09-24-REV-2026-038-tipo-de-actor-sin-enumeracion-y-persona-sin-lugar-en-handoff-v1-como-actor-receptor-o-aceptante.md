# Anotación de revisión

- ID de anotación: `REV-2026-038`
- Unidad y ubicación: `S05` — [session-05-handoffs.md, «Identidad de actores»](../definition/session-05-handoffs.md#identidad-de-actores)
  (l. 82-89), [«Envoltura común mínima»](../definition/session-05-handoffs.md#envoltura-común-mínima)
  (`sender` l. 102, `recipient` l. 103, `expires_at` l. 100) y
  [«Capas de validación»](../definition/session-05-handoffs.md#capas-de-validación)
  (l. 132), frente a la fila de identidad de
  [«Decisiones»](../definition/session-05-handoffs.md#decisiones) (l. 71) y a
  [S04, «Acuerdos y orientación de la sesión»](../definition/session-04-operating-cycle.md#acuerdos-y-orientación-de-la-sesión)
  (l. 85, 104, 110, 112, 115-116). Bloque `B020`.
- Revisión examinada: estado de los archivos al 2026-09-24; repositorio sin
  commits, huella no disponible. S05 declara «Sesión iniciada y cerrada el
  2026-09-16» (l. 3). Citas distintivas: «Una referencia de actor distingue
  identidad lógica, tipo de actor y ejecución o sesión aplicable» (l. 84);
  «`sender` identificará siempre un actor concreto y su ejecución» (l. 71);
  «`sender` | Referencia estable al actor emisor y a su ejecución o sesión
  cuando corresponda» (l. 102); «Incluye revisión humana cuando los acuerdos la
  exijan» (l. 132); «T800R consultará a la persona para continuar si necesita
  cambiar comportamiento, alcance, interfaz, criterio de aceptación, una
  decisión técnica acordada, permisos o un riesgo» (S04 l. 85).
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos textuales; `media` sobre el efecto (S05
  l. 152-266 sólo por líneas devueltas por búsqueda; S08 fuera del alcance de
  esta revisión, consultada sólo por búsqueda; S11 no leída)
- Impacto: si la persona —autoridad de las consultas más consecuentes según
  S04 l. 85 y l. 110— es un actor de `handoff/v1` con identidad lógica,
  aceptación, eventos y caducidad propios, o si T800R recibe y acepta en su
  nombre; de ello dependen a quién se atribuye la aceptación (l. 71, 87-89),
  quién registra los eventos (l. 109), si una `consultation` a la persona
  puede pasar a `expired` (l. 62, 77, 100) con trabajo detenido (l. 123) y qué
  enumeración debe validar la capa estructural (l. 129) para «tipo de actor».
  No cambia el contenido de ninguna fila aceptada.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión exclusivamente interna; no se invoca
  ninguna fuente externa)
- Fuente primaria: `docs/definition/session-05-handoffs.md` l. 52-80
  (dependencia), 82-150 (leídas) y búsqueda en toda la unidad de «persona»,
  «human», «tipo de actor», «orchestrator», «runtime», «adapter»;
  `docs/definition/session-04-operating-cycle.md` l. 85, 100-116 y búsqueda
  de «persona»; `docs/adr/ADR-004-contrato-portable-de-handoffs.md` l. 61-101,
  116-125 y búsqueda de «persona|human|tipo de actor»; búsqueda de «tipo de
  actor|tipos de actor|identidad lógica» en `docs/` fuera de `reviews/`;
  `docs/definition/session-08-portability.md` sólo por búsqueda de
  «persona|human|tipo de actor|actor_type» (l. 211)
- Sección o localizador: «Identidad de actores», «Envoltura común mínima»,
  «Capas de validación» y fila l. 71 (S05); filas l. 85, 104, 110, 112, 115-116
  (S04); «Decisión» y «Puntos abiertos» (ADR-004)
- Fecha de consulta/publicación: consulta 2026-09-24; S05 cerrada el
  2026-09-16 según l. 3
- Hecho observado:
  1. **«Tipo de actor» se introduce sin enumeración.** l. 84 hace del «tipo de
     actor» un componente de toda referencia de actor. En `docs/` (fuera de
     `reviews/`) la expresión «tipo de actor» aparece únicamente en S05 l. 84;
     S05 no la define ni la enumera en ninguna otra línea; ADR-004 no la
     contiene; S08 l. 211 (fuera del alcance de esta revisión) define
     `actor_type` como «clase declarada del actor, sin conceder autoridad por
     sí misma», sin enumeración, y S05 no remite a la sesión 8 (`B019`: «sesión
     8» ausente de S05; el único destino para identidad está en ADR-004
     l. 120-121, «resuelto en sesión 8 y ADR-007», no enlazado desde S05).
  2. **La persona no existe en S05 como actor, emisor ni receptor.** «persona»
     no aparece en S05 ni en ADR-004 (búsqueda); «human» sólo en l. 33
     (pregunta 4), l. 132 («Incluye revisión humana cuando los acuerdos la
     exijan») y l. 217 («revisión humana o permiso a una autoridad
     identificada»). En S04, la persona es la autoridad habitual de una
     consulta: l. 85 («T800R consultará a la persona para continuar si necesita
     cambiar … permisos o un riesgo»), l. 104 («no sustituye la revisión
     humana cuando corresponda»), l. 110 («La persona conserva autoridad sobre
     acuerdos, autorización de `build` por incremento, alto riesgo, aceptación
     y `deploy` sensible») y l. 112 («revisión humana según riesgo»).
  3. **El contrato presupone actores con ejecución que aceptan, validan y
     registran.** l. 71: «la aceptación deberá resolverse y atribuirse a un
     actor concreto»; l. 87-89: «el evento de aceptación registra su resolución
     al actor concreto y la evidencia de que satisface el rol o la autoridad
     requeridos»; l. 69 y l. 134: cuatro capas «antes de aceptar» que «se
     repiten al aceptar»; l. 109: cada evento conserva «actor, fecha,
     transición, razón y evidencia»; l. 60: en `consultation`, `accepted`
     «mantiene activa la obligación hasta persistir su resultado»; l. 100:
     `expires_at` limita la aceptación de la oferta `pending`. Ninguna línea
     dice si esas obligaciones recaen en la persona, en T800R en su nombre o
     en nadie cuando la autoridad destinataria es humana.
  4. **`sender` «siempre» con ejecución (l. 71) frente a «cuando corresponda»
     (l. 102).** La fila aceptada exige que `sender` identifique «siempre un
     actor concreto y su ejecución»; la envoltura lo reduce a «su ejecución o
     sesión cuando corresponda». El único actor previsto por S04 sin sesión
     propia (S04 l. 115: la sesión es el contenedor de ejecución del agente)
     sería la persona, pero la unidad no lo dice ni resuelve la diferencia.
  5. **Consecuencias no decididas.** Si una `consultation` a la persona queda
     `pending` hasta que responda, puede alcanzar `expired` (l. 62, 77, 100) con
     `stopped_work` (l. 123) detenido y sin regla de qué ocurre; si T800R la
     acepta en su nombre, la atribución de l. 71/87-89 recae en un agente y no
     en la autoridad que decide (l. 76: «respuesta o decisión atribuida a la
     autoridad»); si la persona es un tipo de actor, su identidad lógica, quien
     la asigna y cómo registra eventos no están en l. 82-150.
- Inferencia (si aplica): el contrato modela actores como agentes con
  ejecución y deja sin lugar a la autoridad que S04 sitúa en el centro de las
  consultas. No se afirma que la persona deba ser un actor del contrato: se
  afirma que la unidad no decide ninguna de las dos lecturas y que ambas tienen
  efectos distintos sobre aceptación, atribución, caducidad y validación.

## Observación y propuesta

- Observación: la pregunta 1 de `B019` (¿acepta la persona una `consultation`
  con las cuatro capas de l. 69, o T800R en su nombre?; ¿puede expirar antes
  de que responda?) no encuentra respuesta en «Identidad de actores» ni en la
  envoltura; l. 102 introduce además una laxitud («cuando corresponda») que la
  fila l. 71 no tiene. Se relaciona con `REV-2026-018` (quién es «la persona»
  cuando hay varias y cómo se acredita) y con `REV-2026-041` (`authority` de
  la envoltura y del payload de `consultation`), sin repetirlas.
- Propuesta concreta: que la persona decida (a) si «tipo de actor» es una
  enumeración de `handoff/v1` (y si `persona` es uno de sus valores) o se
  remite a S08 `actor_type` con una fila o enlace desde S05; (b) cómo entra al
  lifecycle una `consultation` dirigida a la persona: quién registra
  `accepted` (la persona, T800R en su nombre, o permanece `pending` hasta la
  respuesta), si `expires_at` aplica y qué ocurre con `stopped_work` si
  expira; (c) si `sender` exige ejecución «siempre» (l. 71) o «cuando
  corresponda» (l. 102), y en qué caso no corresponde. No editar S05 sin esa
  decisión.
- Contraargumento o coste/riesgo: l. 103 (`recipient`: «Actor o autoridad
  destinataria») y l. 217 («a una autoridad identificada») permiten leer a la
  persona como «autoridad» destinataria resuelta por selector (l. 71) a un
  actor concreto —por ejemplo, la interfaz de T800R que la representa—, lo
  que haría coherente l. 102; S08 (fuera de alcance) puede haber definido
  `actor_type` con esa clase, y la identidad de la persona puede corresponder
  al runtime o al adapter (S11). El coste de la propuesta es una fila o una
  frase en una unidad cerrada.

## Análisis adicional

- Evidencia interna: hechos 1-5. Enlaces: S05 l. 71
  ([Decisiones](../definition/session-05-handoffs.md#decisiones)), l. 82-89
  ([Identidad de actores](../definition/session-05-handoffs.md#identidad-de-actores)),
  l. 100-103 ([Envoltura](../definition/session-05-handoffs.md#envoltura-común-mínima)),
  l. 132 ([Capas](../definition/session-05-handoffs.md#capas-de-validación));
  S04 l. 85, 104, 110, 112, 115-116
  ([tabla de conclusiones](../definition/session-04-operating-cycle.md#acuerdos-y-orientación-de-la-sesión));
  ADR-004 l. 120-121 ([Puntos abiertos](../adr/ADR-004-contrato-portable-de-handoffs.md#puntos-abiertos));
  anotaciones relacionadas: [`REV-2026-018`](2026-09-21-REV-2026-018-quien-define-criterios-de-autoridad-y-como-se-audita-el-limite.md),
  [`REV-2026-037`](2026-09-24-REV-2026-037-efecto-de-consultation-y-verification-request-sobre-el-status-de-s04-sin-regla-y-reconciliacion-operativa-sin-definir.md)
  (hecho 4: «reconciliación operativa» sin responsable),
  [`REV-2026-041`](2026-09-24-REV-2026-041-campos-de-consultation-frente-al-minimo-de-s04-l298-y-authority-duplicado-entre-envoltura-y-payload.md).
- Contraevidencia y límites: S05 l. 194-218 («Separación y recuperación»,
  «Semántica inicial de los tipos») no se analizaron (bloque `B021`; por
  búsqueda sólo l. 217 nombra la revisión humana); S08 no forma parte del
  alcance de esta revisión y sólo se consultó por búsqueda: puede enumerar
  tipos de actor sin usar «persona» (por ejemplo, «usuario» u «operador»), lo
  que no se habría detectado; S11 y ADR-007 no se leyeron. No se demuestra que
  la persona carezca de identidad en el sistema; se demuestra que S05 no la
  sitúa en el contrato que exige atribuir la aceptación a un actor concreto.
- Pregunta para resolver: ¿es la persona un «tipo de actor» de `handoff/v1`
  con identidad lógica, aceptación, eventos y caducidad propios, o T800R
  recibe y acepta en su nombre las `consultation` dirigidas a ella; y, en ese
  caso, a quién se atribuye la aceptación de l. 71/87-89 y puede la consulta
  expirar antes de la respuesta?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: pendiente
