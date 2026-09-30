# Anotación de revisión

- ID de anotación: `REV-2026-070`
- Unidad y ubicación: `ADR-002` — [«Puntos abiertos»](../adr/ADR-002-fuentes-canonicas-y-conocimiento.md#puntos-abiertos)
  y [«Referencias»](../adr/ADR-002-fuentes-canonicas-y-conocimiento.md#referencias),
  `docs/adr/ADR-002-fuentes-canonicas-y-conocimiento.md:111, 134-159`, frente a
  S05/ADR-004 (l. 118), S08 (l. 87-99, 143, 251-268), S09 (l. 58), S10 (l. 83),
  S11 (l. 62, 170) y al [tracker de definición](../definition-tracker.md)
  (l. 6-7, 319). Bloque `B034`.
- Revisión examinada: estado de los archivos al 2026-09-25 (repositorio sin
  commits; ADR-002 fechado 2026-09-14 y editado después en l. 136 y l. 138-144;
  ADR-004 fechado 2026-09-16; ADR-007/008/009 2026-09-22; ADR-010 2026-09-24).
  Citas distintivas: «representación de handoffs en sesión 5» (l. 136);
  «¿Qué capacidades y extensiones de skills soporta cada proveedor? → sesiones
  8 y 9» (l. 145); «la conciliación con controles del proveedor queda por
  concretar» (l. 111); «¿Qué representación física y ubicación tendrá
  `handoff/v1`? → sesión 11» (ADR-004 l. 118); «Ninguna extensión concede
  permisos, autoridad ni cambia silenciosamente el contrato común» (S08 l. 93).
- Tipo: `incompleto`
- Gravedad: `baja`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos textuales; `media` sobre el alcance de lo
  resuelto (S04-S11 y ADR-003-ADR-010 no se revisaron como bloques: se usan sólo
  como destino, por búsqueda y lecturas de una a treinta líneas)
- Impacto: qué puntos de ADR-002 siguen realmente abiertos y dónde encuentra su
  resolución un agente que, siguiendo `AGENTS.md`, llega a ADR-002 por la fila
  «Fuentes canónicas y conocimiento» del tracker de definición (l. 319). En
  particular, si la conciliación de skills con permisos y controles del
  proveedor sigue pendiente (l. 111, 145) cuando S08 y S09 ya la decidieron.
  No cambia ninguna fila aceptada.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión exclusivamente interna; no requiere
  fuente externa según [README](README.md)).
- Fuente primaria: `docs/adr/ADR-002-fuentes-canonicas-y-conocimiento.md:3-4,
  111, 134-159`; `docs/adr/ADR-004-contrato-portable-de-handoffs.md:3, 118`;
  `docs/definition/session-08-portability.md:65, 87-99, 143, 251-268, 338`;
  `docs/definition/session-09-security-governance.md:58` (y ausencia de
  «skill»); `docs/definition/session-10-product-experience.md:36, 83`;
  `docs/definition/session-11-mvp-architecture.md:62, 170`;
  `docs/definition/session-12-validation-convergence.md:3, 21-41`;
  `docs/definition/session-03-sources-of-truth.md:234-240`;
  `docs/definition-tracker.md:6-7, 36-42, 319`; búsqueda de «ADR-002» en `docs/`
  fuera de `reviews/` y de encabezados «Fecha» en `docs/adr/`.
- Sección o localizador: ver «Unidad y ubicación».
- Fecha de consulta/publicación: consulta 2026-09-25.
- Hecho observado:
  1. **Seis de siete puntos tienen todos sus destinos cerrados y ninguno lleva
     marca completa.** El tracker declara 11 de 12 sesiones completadas y la 12
     `in_progress` (l. 6-7). Sólo l. 147 (sesión 12) apunta a una sesión
     abierta. l. 136 y l. 138-144 llevan marcas parciales («resuelto en sesión 4
     y ADR-003»; «modelo lógico resuelto en sesión 7 y ADR-006»; «el esquema de
     conocimiento quedó resuelto en sesión 7») y conservan en futuro o sin marca
     los destinos restantes (sesiones 5, 8, 10 y 11); l. 137, 145 y 146 no tienen
     marca. Es el patrón de
     [`REV-2026-066`](2026-09-25-REV-2026-066-adr-001-fuente-de-autonomia-sin-reflejar-s04-ni-s09-puntos-abiertos-con-destinos-cerrados-sin-marca-y-sin-enlace-a-adr-008.md)
     hecho 1 para ADR-001; aquí se añade que la edición parcial ya ocurrió dos
     veces (tras S04 y tras S07) y no se repitió tras S05, S06 ni S08-S11.
  2. **l. 136 remite a una sesión que reenvió el tema.** «representación de
     handoffs en sesión 5»: S05 cerró el contrato lógico, pero ADR-004 l. 118
     difiere «¿Qué representación física y ubicación tendrá `handoff/v1`? →
     sesión 11» (sin fila en S05:
     [`REV-2026-036`](2026-09-24-REV-2026-036-pregunta-8-de-s05-representacion-y-ubicacion-sin-fila-y-aplazamiento-de-s04-l299-no-recibido.md)).
     Quien siga l. 136 llega a una sesión cerrada que no decide la
     representación física.
  3. **l. 145 y el aplazamiento de l. 111 están decididos en S08 y S09 sin
     reflejo.** S08 acepta un «Perfil T800R compatible con Agent Skills»: «Las
     extensiones de Codex, Claude Code u OpenCode se mantienen namespaced; el
     adapter declara cuáles interpreta, ignora o emula. Ninguna extensión
     concede permisos, autoridad ni cambia silenciosamente el contrato común»
     (l. 93); `portable_skills` no debe «Trasladar ciegamente extensiones o
     permisos de un proveedor ni conceder autoridad a la skill» (l. 143); «Un
     campo como `allowed-tools` … no prueba autorización efectiva ni sustituye
     la política de la sesión 9» (l. 264-265). S09 rechaza «Adoptar los
     permisos expuestos por el proveedor como autorización» (l. 58). La matriz
     de S08 l. 338 deja por proveedor «perfil no verificado», que es
     verificación pendiente (S12 l. 56), no decisión. ADR-002 sigue diciendo
     «queda por concretar» (l. 111) y «→ sesiones 8 y 9» (l. 145) sin marca;
     S09 no menciona skills, de modo que su aportación es la regla general de
     l. 58. Responde la pregunta 6 de [B033](blocks/B033.md).
  4. **l. 145 y l. 146 redistribuyen el aplazamiento de S03 l. 238 y pierden a
     S10 para la actualización de skills.** S03 l. 238 difiere «Formato,
     adapters, permisos, distribución y actualización de skills» a las sesiones
     8, 9 y 10. ADR-002 l. 145 pregunta por «capacidades y extensiones» (8 y 9)
     y l. 146 por «mecanismos de distribución» (8, 10 y 11); la «actualización»
     de skills no figura en ningún punto, aunque S10 l. 83 la decidió (snapshot
     de adopción que incluye skills y `update` verificado). Amplía el hecho 2 de
     [`REV-2026-025`](2026-09-24-REV-2026-025-puntos-abiertos-de-adr-002-divergen-de-detalles-aplazados-s03.md)
     («Contenido y destinos distintos») con el destino efectivo.
  5. **l. 142-144 omite a S11, la sesión que ubicó el registro de fuentes.**
     S11 l. 170 (`accepted`): «`init` propone `t800r/policy.yaml` y
     `t800r/sources.yaml` como política y registro de fuentes versionados,
     ambos referenciados con schema y revisión desde `t800r.yaml`»; S11 l. 62
     incluye el registro entre los artefactos versionados. S11 fija ruta y la
     existencia de un schema referenciado, no sus campos: no resuelve la
     procedencia ni la confirmación que piden `REV-2026-019` y
     [`REV-2026-056`](2026-09-24-REV-2026-056-frecuencia-y-mecanismos-de-validacion-de-referencias-y-esquema-del-registro-de-fuentes-remitidos-a-s07-sin-fila-y-adr-002-declara-resuelto-el-esquema-de-conocimiento-en-su-lugar.md)
     hecho 3 (cuyo límite dejaba sin comprobar si S11 fija el esquema). ADR-002
     l. 142-144 no nombra a S11 ni dice que los campos del registro sigan sin
     sesión.
  6. **Las referencias no llevan a los ADR que resolvieron los puntos.** ADR-002
     enlaza ADR-001 (l. 152), ADR-003 (l. 136) y ADR-006 (l. 140, 153). No
     enlaza ADR-004 (handoffs, l. 136), ADR-005 (contexto, l. 137), ADR-007
     (capacidades y skills, l. 145), ADR-008 (permisos, l. 111/145), ADR-009
     (incorporación, l. 144) ni ADR-010 (arquitectura, l. 141, 146). A la
     inversa, ADR-003 l. 127, ADR-005 l. 133, ADR-006 l. 104 y ADR-010 l. 201
     enlazan ADR-002. El tracker presenta ADR-002 como fuente de «Fuentes
     canónicas y conocimiento» (l. 319) y lista aparte ADR-006, 008, 009 y 010
     (l. 320-323), sin ADR-004, 005 ni 007.
- Inferencia (si aplica): ADR-002 funciona como fotografía de 2026-09-14 con
  dos ediciones selectivas, pero el tracker lo ofrece como fuente vigente. Un
  agente que lo lea tendría por pendientes la conciliación de skills con
  controles del proveedor, la representación de handoffs «en sesión 5» y la
  distribución y rutas, ya decididas o reenviadas, y no tendría enlace a los ADR
  que las fijan.

## Observación y propuesta

- Observación: no falta contenido de producto (S08-S11 decidieron casi todo lo
  que l. 136-146 difiere); falla el estado del inventario que el tracker ofrece
  como fuente y su navegabilidad. Es distinto de `REV-2026-025` (divergencia
  entre el inventario de S03 y el del ADR): aquí el ADR ha quedado desfasado
  respecto de sus propios destinos.
- Propuesta concreta: que la persona decida, con la misma convención que pida
  para `REV-2026-066`, (a) si ADR-002 es fotografía fechada (y entonces se
  retiran o fechan las marcas de l. 136 y 138-144 y el tracker l. 319 remite a
  S03 y a los ADR posteriores) o documento vivo (y entonces se marcan l. 136-146
  con su destino efectivo: ADR-004 → sesión 11 para l. 136, ADR-005 para
  l. 137, S08/ADR-007 y S09/ADR-008 para l. 111 y l. 145, S10/ADR-009 y
  S11/ADR-010 para l. 144 y l. 146); (b) si l. 142-144 debe decir que los campos
  del registro de fuentes siguen sin sesión o nombrar la que los recibe; (c) si
  «Referencias» enlaza los ADR que cierran sus puntos. No editar ADR-002 ni el
  tracker sin esa decisión.
- Contraargumento o coste/riesgo: los ADR suelen ser inmutables y se superan
  con ADR posteriores que enlazan hacia atrás, como hacen ADR-005, 006 y 010; un
  lector cuidadoso llega a ellos desde el tracker (l. 320-323). Mantener marcas
  en ADR añade otra fuente de divergencia (`REV-2026-025`, `058` hecho 2). Pero
  ADR-002 ya se editó dos veces para marcar resoluciones, así que la lectura
  «fotografía» no explica el texto actual. El coste es fijar una sola
  convención para los diez ADR.

## Análisis adicional

- Evidencia interna: hechos 1-6 con sus localizadores.
- Contraevidencia y límites: no se revisaron S04-S11 ni ADR-003-ADR-010 como
  bloques; no se afirma que resuelvan correctamente los puntos, sólo que tienen
  filas o puntos sobre ellos. l. 147 (sesión 12, abierta) no forma parte de este
  hallazgo; su omisión de la «efectividad del modelo de información» de S03
  l. 240 se registra como matiz a `REV-2026-025` hecho 2 en [B034](blocks/B034.md).
  La identidad portable (l. 141, 143) se comprobó sólo por las filas de S08
  l. 87-90 y 124.
- Pregunta para resolver: ¿ADR-002 es la fuente vigente de «Fuentes canónicas y
  conocimiento» (tracker l. 319) y debe marcar y enlazar el destino efectivo de
  sus puntos abiertos, o es una fotografía de 2026-09-14 y el tracker debe
  remitir a S03 y a los ADR posteriores?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B034](blocks/B034.md), [B033](blocks/B033.md)
  (pregunta 6), [B031](blocks/B031.md),
  [`REV-2026-001`](2026-09-21-REV-2026-001-precedencia-adr-unidad-canonica.md),
  [`REV-2026-023`](2026-09-24-REV-2026-023-detalles-aplazados-s03-sin-retorno-y-sin-fila-para-validacion-de-referencias.md),
  [`REV-2026-025`](2026-09-24-REV-2026-025-puntos-abiertos-de-adr-002-divergen-de-detalles-aplazados-s03.md),
  [`REV-2026-036`](2026-09-24-REV-2026-036-pregunta-8-de-s05-representacion-y-ubicacion-sin-fila-y-aplazamiento-de-s04-l299-no-recibido.md),
  [`REV-2026-056`](2026-09-24-REV-2026-056-frecuencia-y-mecanismos-de-validacion-de-referencias-y-esquema-del-registro-de-fuentes-remitidos-a-s07-sin-fila-y-adr-002-declara-resuelto-el-esquema-de-conocimiento-en-su-lugar.md),
  [`REV-2026-066`](2026-09-25-REV-2026-066-adr-001-fuente-de-autonomia-sin-reflejar-s04-ni-s09-puntos-abiertos-con-destinos-cerrados-sin-marca-y-sin-enlace-a-adr-008.md),
  [`REV-2026-069`](2026-09-25-REV-2026-069-decision-de-adr-002-resume-s03-sin-limite-inequivoco-ni-deteccion-evidencia-sin-revision-humana-y-remisiones-sin-destino.md);
  cruces `CT04` y `CT07`.

## Preguntas pendientes

Ver el checkpoint [B034](blocks/B034.md).

## Cobertura y límites

Ver el checkpoint [B034](blocks/B034.md). Fuentes externas: ninguna; el
problema es interno.
