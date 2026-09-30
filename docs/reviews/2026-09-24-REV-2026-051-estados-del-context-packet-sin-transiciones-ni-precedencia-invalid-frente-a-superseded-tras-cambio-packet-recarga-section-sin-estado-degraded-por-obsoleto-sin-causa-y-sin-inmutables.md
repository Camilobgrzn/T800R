# Anotación de revisión

- ID de anotación: `REV-2026-051`
- Unidad y ubicación: `S06` — [session-06-context.md, «Estados observables del context packet»](../definition/session-06-context.md#estados-observables-del-context-packet)
  (tabla l. 167-172, prosa l. 174-178) e [«Impacto de cambios»](../definition/session-06-context.md#impacto-de-cambios)
  (l. 158-159), frente a las filas l. 48, 49 y 51 de
  [«Decisiones»](../definition/session-06-context.md#decisiones), a
  [«Capas de validación del context packet»](../definition/session-06-context.md#capas-de-validación-del-context-packet)
  (l. 71-74), a [«Presupuesto y prioridades»](../definition/session-06-context.md#presupuesto-y-prioridades)
  (l. 129-131, dependencia del bloque `B024`), a
  [S05, «Decisiones»](../definition/session-05-handoffs.md#decisiones)
  (l. 59, 64), [«Lifecycle inicial»](../definition/session-05-handoffs.md#lifecycle-inicial)
  (l. 164) e [«Integridad, deduplicación y referencias»](../definition/session-05-handoffs.md#integridad-deduplicación-y-referencias)
  (l. 183-188), y a [ADR-005, «Decisión», puntos 7-8](../adr/ADR-005-contrato-portable-de-contexto.md#decisión)
  (l. 84-89). Bloque `B025`.
- Revisión examinada: estado de los archivos al 2026-09-24; repositorio sin
  commits, huella no disponible. S06 «iniciada el 2026-09-17; cerrada el
  2026-09-18» (l. 3); S05 cerrada el 2026-09-16; ADR-005 fechado 2026-09-18.
  Citas distintivas: «`packet` | Se invalida el packet y se crea uno nuevo
  correlacionado» (l. 158); «`section` | Sólo se recarga la sección afectada y
  se conserva la revisión anterior en la historia» (l. 159); «`ready` | El
  packet bien formado pasa las cuatro capas y todo lo requerido está vigente y
  disponible» (l. 169); «`degraded` | El packet bien formado sólo tiene
  faltantes `relevant` u `optional` declarados. | Sólo permite trabajo que no
  dependa del material faltante u obsoleto» (l. 170); «`invalid` | … No
  permite actuar; exige reconciliar o reconstruir el packet» (l. 171);
  «`superseded` | Existe un packet sucesor y el anterior queda sólo para
  historia» (l. 172); «hace deterministas los estados» (l. 51); «El primer
  cambio exige un packet sucesor» (ADR-005 l. 84-85); «`superseded`
  reemplazará directamente sólo un handoff `pending` y deberá enlazar el
  sucesor» (S05 l. 64); «Tras emitir, permanecen inmutables …» (S05 l. 183).
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos textuales (búsqueda de «inmutable|
  idempot» en S06: sin coincidencias; «obsoleto» en S06, ADR-005 y tracker de
  definición); `media` sobre el efecto (S11 l. 166 y S08 l. 369-372 sólo por
  búsqueda y fuera del alcance: la representación puede fijar inmutabilidad y
  transiciones, `REV-2026-036`)
- Impacto: si los cuatro estados que la fila l. 49 acepta y la fila l. 51
  declara «deterministas» son decidibles con el contrato escrito: qué estado
  tiene el packet anterior tras un cambio `packet` cuando cumple a la vez la
  semántica de `invalid` y la de `superseded` con acciones opuestas; qué
  estado tiene durante una recarga `section` de material `required`; si un
  packet `ready` puede contener material `relevant` obsoleto sin restricción,
  cuando l. 170 restringe por «obsoleto» sólo en `degraded` y l. 72 sólo
  admite «faltantes» como causa; y qué campos permanecen inmutables cuando
  `section` muta el packet en su lugar y `packet` crea otro. Afecta a la
  verificabilidad (l. 35), a la portabilidad de los estados entre adapters
  (l. 43) y al enlace handoff → packet (`REV-2026-046`). No cambia el
  contenido de ninguna fila aceptada.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión exclusivamente interna; no se
  invoca ninguna fuente externa)
- Fuente primaria: `docs/definition/session-06-context.md` l. 41-60, 62-74,
  121-133 (dependencias, por `B023`/`B024`) y 140-193 (leídas); búsqueda en
  toda la unidad de «inmutable|idempot» (sin coincidencias), «obsoleto»
  (l. 170), «sucesor|predecesor|correlacionad» (l. 48, 158, 172, 192);
  `docs/definition/session-05-handoffs.md` l. 57-66, 158-164, 181-192
  (leídas) y l. 170-176 (matriz, por `B021`);
  `docs/adr/ADR-005-contrato-portable-de-contexto.md` l. 81-128 (leídas);
  `docs/definition-tracker.md` l. 255-280 (sólo líneas devueltas por búsqueda
  de «superseded|degraded|check_after»; l. 279 «faltante u obsoleto»);
  `docs/definition/session-08-portability.md` l. 369-372 y
  `docs/definition/session-11-mvp-architecture.md` l. 166 (sólo líneas
  devueltas por búsqueda; fuera del alcance).
- Sección o localizador: «Decisiones», «Capas de validación del context
  packet», «Presupuesto y prioridades», «Impacto de cambios», «Estados
  observables del context packet» (S06); «Decisiones», «Lifecycle inicial»,
  «Integridad, deduplicación y referencias» (S05); «Decisión» puntos 7-8
  (ADR-005).
- Fecha de consulta/publicación: consulta 2026-09-24; sesión cerrada el
  2026-09-18 según l. 3.
- Hecho observado:
  1. **`invalid` y `superseded` coinciden tras un cambio `packet` sin regla de
     precedencia, y las dos unidades apuntan a estados distintos.** L. 158:
     «Se invalida el packet y se crea uno nuevo correlacionado». El anterior
     cumple entonces la semántica de `invalid` (l. 171: «falla en … 
     restricciones …», acción «exige reconciliar o reconstruir el packet») y la
     de `superseded` (l. 172: «Existe un packet sucesor», acción «Sólo permite
     conservarlo como historia»). Las acciones son opuestas: reconciliar un
     packet que ya tiene sucesor o sólo conservarlo. ADR-005 l. 84-85 dice «El
     primer cambio exige un packet sucesor» (lleva a `superseded`); S06 l. 158
     dice «Se invalida» (lleva a `invalid`). S05 sí resuelve el caso análogo
     para el handoff: «pasa a `rejected` … o a `superseded` si existe un
     sucesor válido» (l. 59), «`superseded` … deberá enlazar el sucesor»
     (l. 64), «otro handoff identificado lo reemplaza y conserva la cadena»
     (l. 164). S06 no fija cuál prevalece ni exige enlace al sucesor (l. 192
     sólo registra «packet predecesor»; `REV-2026-046` hecho 4). La fila l. 51
     justifica que las capas «hace[n] deterministas los estados».
  2. **No hay matriz de transiciones ni estado durante la recarga
     `section`.** S05 tiene matriz (l. 170-176); S06 l. 165-178 sólo lista
     estados y acciones. L. 159: «Sólo se recarga la sección afectada y se
     conserva la revisión anterior en la historia». Mientras una sección
     `required` está desactualizada y sin recargar, l. 169 la excluye de
     `ready` («todo lo requerido está vigente») y l. 171 la incluye en
     `invalid` («falla en … material `required`»), cuya acción «exige
     reconciliar o reconstruir» es la recarga en curso; nada dice si el packet
     vuelve a `ready` con el mismo `id` (`invalid → ready` sin sucesor), ni
     cómo pasa `ready ↔ degraded` al diferir o cargar material por presión
     (l. 129-130). S08 l. 371 (por búsqueda) escribe «una sección `required`
     vuelve el packet `invalid`; una `relevant` lo deja `degraded`» para la
     condición `unknown`, también sin transición de salida.
  3. **`degraded` restringe por material «obsoleto» que no es causa del
     estado.** L. 170, semántica: «sólo tiene faltantes `relevant` u
     `optional` declarados»; acciones: «no dependa del material faltante u
     obsoleto». L. 51 y 72: «únicamente por faltantes `relevant` u `optional`
     declarados». L. 169: `ready` sólo exige que «lo requerido» esté vigente.
     Un packet con material `relevant` obsoleto (marcador cambiado y sección
     no recargada, o recarga diferida por presión) no es `degraded` por l. 72
     y es `ready` por l. 169, «Puede usarse» sin la restricción de l. 170. La
     palabra «obsoleto» de l. 170 no tiene entrada en ninguna causa. ADR-005
     l. 87-88 la omite («trabajo independiente de material faltante»); el
     tracker de definición l. 279 la conserva («faltante u obsoleto»).
  4. **Sin inmutables ni regla de identidad entre mutación y sucesión.**
     `section` muta el packet en su lugar «y conserva la revisión anterior en
     la historia» (l. 159); `packet` crea otro «correlacionado» (l. 158) con
     `id` propio (l. 81). S06 no dice qué campos del núcleo (l. 78-90)
     permanecen inmutables tras ensamblar ni qué ocurre con el mismo `id` y
     núcleo distinto; «inmutable» e «idempot» no aparecen en la unidad. S05
     l. 183-188 fija para el handoff los inmutables, la idempotencia y el
     «conflicto de integridad». S11 l. 166 (por búsqueda, fuera del alcance)
     persiste «el JSON exacto de cada context packet ensamblado … inmutable
     por digest», lo que sugiere que cada recarga produce un artefacto nuevo;
     S06 no lo enlaza ni lo difiere, y en la letra l. 159 describe una
     mutación con historia del mismo packet.
- Inferencia (si aplica): los estados son «observables» (l. 49, 165) pero no
  forman una máquina: sin precedencia, transiciones ni inmutables, dos
  observadores del mismo packet tras un cambio `packet` pueden reportar
  `invalid` y `superseded` con acciones opuestas, y un packet `ready` puede
  apoyarse en material `relevant` obsoleto que l. 170 quiso excluir.

## Observación y propuesta

- Observación: S06 decide cuatro estados y sus acciones, pero no cómo se
  entra y sale de cada uno, cuál prevalece cuando dos se cumplen, qué estado
  tiene el packet mientras se recarga y qué partes del packet no cambian; la
  restricción por material «obsoleto» no corresponde a ninguna causa.
- Propuesta concreta: (a) añadir una matriz de transiciones del packet, como
  S05 l. 170-176, con causas: cambio `packet` → `invalid` mientras no exista
  sucesor y `superseded` cuando exista y esté enlazado; `section` sobre
  `required` → `invalid` hasta recargar y `ready` en el mismo `id`; sobre
  `relevant`/`optional` → `degraded` hasta recargar; (b) exigir en
  `superseded` el enlace al sucesor como S05 l. 64 (resuelve con
  `REV-2026-046`); (c) hacer de «obsoleto» una causa de `degraded` para
  `relevant`/`optional` (y de `invalid` para `required`), o retirarlo de
  l. 170; (d) fijar los inmutables del núcleo tras ensamblar y que una recarga
  `section` conserva `id`, con la regla de conflicto de S05 l. 187-188, o
  remitir la inmutabilidad a S11 con fila `deferred`.
- Contraargumento o coste/riesgo: puede sostenerse que el packet «no
  representa una obligación» (l. 177-178) y no necesita matriz; que «Se
  invalida … y se crea uno nuevo» describe una secuencia (primero `invalid`,
  después `superseded` al existir el sucesor) suficiente en la práctica; que
  «obsoleto» sólo nombra el material `relevant` diferido por presión
  (l. 129-130), ya contado como «faltante declarado»; y que S11 l. 166 fija
  la inmutabilidad por digest. Ninguna de esas lecturas está en S06 ni en
  ADR-005, que además difieren entre sí (l. 158 frente a ADR-005 l. 84-85), y
  l. 51 promete determinismo. El coste de (a)-(d) es una tabla y tres frases.

## Análisis adicional

- Evidencia interna: [`REV-2026-046`](2026-09-24-REV-2026-046-referencia-del-handoff-al-context-packet-sin-campo-en-ningun-contrato-s06-parte-de-adr-004-sin-acuse-de-s05-l66-y-packet-sucesor-inalcanzable-desde-references-inmutable.md)
  hecho 4 (sucesor sin enlace desde el packet anterior; aquí la precedencia
  de estados y el contraste con S05 l. 59/64/164, sin duplicar);
  [`REV-2026-048`](2026-09-24-REV-2026-048-presupuesto-del-context-packet-budget-profile-sin-definicion-no-cabe-sin-limites-del-adapter-y-manifest-del-nucleo-sin-prioridad-ni-granularidad-de-material.md)
  hecho 5 («material» sin unidad: «faltante» y «obsoleto» se aplican a una
  unidad no definida);
  [`REV-2026-027`](2026-09-24-REV-2026-027-enumeracion-de-estados-y-transiciones-de-s04-no-cerrada-draft-y-waiting-blocked-desde-ready.md)
  (enumeración de estados sin transiciones cerradas en S04: mismo patrón);
  [`REV-2026-043`](2026-09-24-REV-2026-043-tiempos-de-la-envoltura-fuera-de-los-inmutables-contenido-de-la-idempotencia-sin-definir-y-resultado-de-completed-sin-campo.md)
  (inmutables e idempotencia del handoff, ausentes para el packet);
  [`REV-2026-040`](2026-09-24-REV-2026-040-actor-que-aplica-las-capas-de-validacion-y-registra-rejected-sin-fijar-y-capas-mecanizables-sin-clasificar.md)
  (quién observa y registra el estado: sin actor);
  [`REV-2026-036`](2026-09-24-REV-2026-036-pregunta-8-de-s05-representacion-y-ubicacion-sin-fila-y-aplazamiento-de-s04-l299-no-recibido.md)
  (representación → S11 sin acuse; aquí S11 l. 166 puede fijar la
  inmutabilidad sin que S06 lo enlace).
- Contraevidencia y límites: ADR-005 l. 87-89 repite los cuatro estados con
  acciones, sin transiciones, y omite «obsoleto» y «exige reconciliar o
  reconstruir»: no resuelve los hechos 1-3 pero tampoco los contradice salvo
  en l. 84-85. La lectura secuencial (`invalid` → `superseded`) es razonable y
  no está escrita. No se leyó S11 fuera de l. 166 ni ADR-010 (l. 137 «CAS para
  packets», por `B024`): la representación puede fijar inmutabilidad y
  transiciones. No se demuestra que existan packets `ready` con material
  obsoleto en la práctica: se demuestra que el texto no lo excluye.
- Pregunta para resolver: tras un cambio `packet`, ¿el packet anterior es
  `invalid` hasta que exista sucesor y `superseded` después, o directamente
  `superseded`, y debe enlazar el sucesor como S05 l. 64? ¿Qué estado tiene el
  packet durante una recarga `section` de material `required`, y vuelve a
  `ready` con el mismo `id`? ¿Es «obsoleto» una causa de `degraded` o debe
  retirarse de l. 170? ¿Qué campos del núcleo son inmutables tras ensamblar y
  qué ocurre con el mismo `id` y contenido distinto?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: pendiente
