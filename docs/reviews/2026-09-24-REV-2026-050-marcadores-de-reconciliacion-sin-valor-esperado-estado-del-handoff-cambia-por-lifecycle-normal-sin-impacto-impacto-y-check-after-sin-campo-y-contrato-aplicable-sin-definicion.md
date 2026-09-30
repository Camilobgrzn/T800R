# Anotación de revisión

- ID de anotación: `REV-2026-050`
- Unidad y ubicación: `S06` — [session-06-context.md, «Reconciliación incremental»](../definition/session-06-context.md#reconciliación-incremental)
  (l. 142-152) e [«Impacto de cambios»](../definition/session-06-context.md#impacto-de-cambios)
  (l. 156-163), frente a las filas l. 47 y 48 de
  [«Decisiones»](../definition/session-06-context.md#decisiones), a
  [«Capas de validación del context packet»](../definition/session-06-context.md#capas-de-validación-del-context-packet)
  (`freshness`, l. 68; `structural`, l. 66), a
  [«Núcleo obligatorio del context packet»](../definition/session-06-context.md#núcleo-obligatorio-del-context-packet)
  (`base` l. 87, `constraints` l. 88, `sources` l. 89, `manifest` l. 90;
  dependencia del bloque `B024`), a
  [S05, «Decisiones»](../definition/session-05-handoffs.md#decisiones)
  (l. 60, lifecycle) y [«Envoltura común mínima»](../definition/session-05-handoffs.md#envoltura-común-mínima)
  (`base`, l. 105), y a [ADR-005, «Decisión», puntos 6-7](../adr/ADR-005-contrato-portable-de-contexto.md#decisión)
  (l. 81-86) y glosario (l. 16). Bloque `B025`.
- Revisión examinada: estado de los archivos al 2026-09-24; repositorio sin
  commits, huella no disponible. S06 «iniciada el 2026-09-17; cerrada el
  2026-09-18» (l. 3); S05 cerrada el 2026-09-16; ADR-005 fechado 2026-09-18.
  Citas distintivas: «T800R compara sólo los marcadores compactos aplicables,
  como la revisión del repositorio, la revisión del tracker, el estado del
  handoff y la versión de políticas o permisos» (l. 142-144); «Si cambia un
  marcador, revisa únicamente las referencias afectadas» (l. 145-146); «El
  packet completo se reconstruye únicamente cuando cambia una referencia con
  impacto `packet`» (l. 149-150); «`packet` | Se invalida el packet y se crea
  uno nuevo correlacionado. Aplica a cambios en base, ownership, permisos o
  contrato aplicable» (l. 158); «Un `check_after` opcional puede programar una
  comprobación de marcador» (l. 162-163); «`base` | Referencia la revisión, el
  tracker y el handoff aplicables» (l. 87); «`sources` | Contiene referencias
  tipadas, con revisión y procedencia» (l. 89); «`base` | Revisión,
  checkpoint, estado y owner esperados sobre los que se emitió» (S05 l. 105);
  «El lifecycle común será `pending → accepted → completed`» (S05 l. 60).
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos textuales (búsquedas de «impacto»,
  `check_after`, «contrato aplicable», «estado del handoff» en S06 y en
  `docs/`); `media` sobre el efecto (S11 l. 166 sólo por búsqueda y fuera del
  alcance: el ledger puede alojar marcadores; la representación puede añadir
  campos, `REV-2026-036`)
- Impacto: si la reconciliación incremental que la fila l. 47 acepta y ADR-003
  exige puede ejecutarse con el contrato escrito: contra qué valor esperado se
  compara cada marcador de l. 142-144 cuando el núcleo sólo «referencia» (l. 87)
  y no guarda estado ni versión esperados; qué efecto tiene el cambio del
  marcador «estado del handoff», que cambia por el lifecycle normal de S05
  mientras el packet se usa; dónde declara una referencia su impacto
  `packet`/`section`/`advisory` y su `check_after` si ni `sources` (l. 89) ni
  `manifest` (l. 90) los nombran, y qué comprueba entonces `structural`
  (l. 66) o reconcilia `freshness` (l. 68); y qué es «contrato aplicable»
  (l. 158). Afecta a la verificabilidad de la reconciliación (l. 35) y a la
  portabilidad de la invalidación entre adapters. No cambia el contenido de
  ninguna fila aceptada.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión exclusivamente interna; no se
  invoca ninguna fuente externa)
- Fuente primaria: `docs/definition/session-06-context.md` l. 41-60, 62-74,
  78-90 (dependencias, por `B023`/`B024`) y 140-193 (leídas); búsqueda en toda
  la unidad de «impacto» (l. 48, 68, 150, 156, 200), `check_after` (l. 48,
  162), «inmutable|idempot» (sin coincidencias), «estado del handoff|handoff
  aplicable» (l. 47, 87, 143-144); búsqueda de «contrato aplicable» en `docs/`
  fuera de `reviews/` (única coincidencia: S06 l. 158); búsqueda de «estado
  del handoff|handoff aplicable» en `docs/` (S06 l. 47, 87; S08 l. 219 «exige
  el handoff aplicable», por búsqueda); `docs/definition/session-05-handoffs.md`
  l. 57-66, 100-109, 158-164, 181-192 (leídas);
  `docs/adr/ADR-005-contrato-portable-de-contexto.md` l. 16 (por `B024`) y
  81-128 (leídas); `docs/definition/session-11-mvp-architecture.md` l. 166
  (sólo la línea devuelta por búsqueda; fuera del alcance).
- Sección o localizador: «Decisiones», «Capas de validación del context
  packet», «Núcleo obligatorio del context packet», «Reconciliación
  incremental», «Impacto de cambios» (S06); «Decisiones», «Envoltura común
  mínima» (S05); glosario y «Decisión» puntos 6-7 (ADR-005).
- Fecha de consulta/publicación: consulta 2026-09-24; sesión cerrada el
  2026-09-18 según l. 3.
- Hecho observado:
  1. **Los marcadores se comparan contra un valor esperado que el núcleo no
     aloja.** L. 142-144 nombra cuatro marcadores; `freshness` (l. 68) exige
     «Marcadores e impactos reconciliados incrementalmente». El único campo del
     núcleo que los toca es `base`, que «Referencia la revisión, el tracker y
     el handoff aplicables» (l. 87): una referencia, no el estado ni la versión
     esperados. «Estado del handoff» y «versión de políticas o permisos» no
     tienen campo (`constraints` l. 88 sintetiza «las políticas referenciadas»,
     no su versión). S05 sí guarda en `base` «Revisión, checkpoint, estado y
     owner esperados» (l. 105). `REV-2026-049` hecho 1 registró que los
     marcadores no están en el núcleo; aquí se añade que la capa que los
     reconcilia (l. 68) no tiene contra qué hacerlo en el propio packet.
  2. **«Estado del handoff» cambia por el lifecycle normal de S05 y no tiene
     efecto declarado.** El packet se ensambla para un handoff (`base`, l. 87)
     cuyo `status` recorre `pending → accepted → completed` (S05 l. 60)
     precisamente mientras el receptor usa el packet. L. 145-146 dice que al
     cambiar un marcador se revisan «únicamente las referencias afectadas»,
     pero el impacto se declara por referencia (l. 48, 149, 156) y el handoff
     no es una referencia de `sources` (l. 89) ni de `manifest` (l. 90). L. 158
     hace `packet` los «cambios en base»: si el estado del handoff forma parte
     de `base` (como en S05 l. 105, no en S06 l. 87), aceptar el handoff
     invalida el packet y exige «uno nuevo correlacionado» en cada transición;
     si no forma parte, el cambio del marcador no afecta ninguna referencia y
     l. 145-146 no produce efecto. Ninguna de las dos lecturas está escrita en
     S06 ni en ADR-005 l. 81-86 (que no enumera marcadores).
  3. **El impacto por referencia y `check_after` no tienen campo.** L. 48
     («Cada referencia declarará impacto»), l. 149 («una referencia con impacto
     `packet`») y l. 156 («Impacto declarado») presuponen una declaración por
     referencia; l. 162-163 añade «Un `check_after` opcional». `sources`
     (l. 89) contiene «referencias tipadas, con revisión y procedencia»;
     `manifest` (l. 90) «resumen, condición de carga y referencia»; ADR-005
     l. 16 «resumen, referencia, prioridad y condición de carga». Ni «impacto»
     ni `check_after` aparecen en l. 78-90 ni en el glosario del ADR: en S06
     «impacto» sólo está en l. 48, 68, 150, 156 y 200, y `check_after` en l. 48
     y 162. `structural` (l. 66: «Schema, campos, tipos y coherencia de
     `manifest`») no puede comprobar una declaración sin campo. Además, l. 158
     fija el impacto `packet` por categoría de cambio («Aplica a cambios en
     base, ownership, permisos o contrato aplicable») y no por referencia: si
     el productor declara `section` para una referencia al tracker y el cambio
     del tracker altera el ownership, S06 no dice si prevalece la declaración
     o la categoría.
  4. **«Contrato aplicable» no se define.** Es la única aparición de la
     expresión en `docs/` fuera de `reviews/`. Puede leerse como el handoff
     (S05 llama contrato a `handoff/v1`), como el esquema del packet (`schema`,
     l. 80), como la política versionada (l. 144) o como el contrato de
     capacidades del adapter (S08). La fila l. 47 decía «cambios críticos» sin
     enumerar; l. 158 enumera cuatro categorías y deja la cuarta sin
     definición. `consumer` (l. 84) no está en la lista: un cambio de
     destinatario no es `packet` según l. 158, sin que la unidad diga qué es.
- Inferencia (si aplica): la reconciliación incremental se apoya en dos datos
  —el valor esperado de cada marcador y el impacto declarado de cada
  referencia— que el núcleo aceptado no contiene, y el marcador que con más
  seguridad cambia durante el trabajo (el estado del handoff) no tiene regla
  de efecto. Con el contrato escrito, cada adapter decide si aceptar un handoff
  invalida el packet, que es lo que l. 43 («validación y continuidad comunes»)
  quería evitar.

## Observación y propuesta

- Observación: S06 describe con precisión cómo se reconcilia (comparar
  marcadores, revisar referencias afectadas, reconstruir por impacto
  `packet`) pero no dónde vive el valor esperado de los marcadores, dónde se
  declara el impacto y `check_after` de cada referencia, ni qué efecto tiene
  el cambio de estado del handoff.
- Propuesta concreta: (a) añadir a `base` (l. 87) los valores esperados de los
  cuatro marcadores, como S05 l. 105, o un campo propio; (b) escribir el
  efecto de cada transición del handoff sobre el packet (por ejemplo:
  `pending → accepted` no invalida; `rejected`, `cancelled`, `expired`,
  `superseded` → `packet`; `completed` → `advisory` o sucesión); (c) añadir
  «impacto» y `check_after` a la semántica de `sources` (l. 89) o de
  `manifest` (l. 90) y al glosario de ADR-005 (l. 16), y fijar la precedencia
  entre la declaración por referencia y las categorías de l. 158; (d) definir
  «contrato aplicable» o sustituirlo por el término que corresponda, y decidir
  si un cambio de `consumer` es `packet`.
- Contraargumento o coste/riesgo: puede sostenerse que «referencia la
  revisión» (l. 87) incluye el valor de la revisión (dos de los cuatro
  marcadores quedarían cubiertos); que el estado esperado del handoff es el
  que tenía al ensamblar y consta en la evidencia (l. 190 «base»), lo que hace
  innecesario un campo; y que S11 l. 166 (por búsqueda, fuera del alcance)
  fija que el ledger conserva «marcadores de fuente» y «referencias», donde
  cabrían impacto y `check_after`. Ninguna de esas lecturas está en S06 ni en
  ADR-005, S06 no enlaza S11 y el ledger es representación, que l. 43 excluye
  del contrato. El coste de (a)-(d) es cuatro frases; el riesgo de no hacerlo
  es que la invalidación del packet dependa de cada adapter.

## Análisis adicional

- Evidencia interna: [`REV-2026-049`](2026-09-24-REV-2026-049-nucleo-del-context-packet-frente-a-handoff-v1-homonimos-sin-enlace-schema-sin-identificador-ni-version-y-producer-consumer-sin-modelo-de-identidad-con-capacidad-como-destinatario.md)
  hecho 1 (`base` del packet sin estado ni owner esperados; aquí su efecto
  sobre `freshness` y el marcador del handoff; no se duplica);
  [`REV-2026-046`](2026-09-24-REV-2026-046-referencia-del-handoff-al-context-packet-sin-campo-en-ningun-contrato-s06-parte-de-adr-004-sin-acuse-de-s05-l66-y-packet-sucesor-inalcanzable-desde-references-inmutable.md)
  (`base` como único enlace packet → handoff; aquí, qué ocurre en ese enlace
  cuando el handoff cambia de estado);
  [`REV-2026-037`](2026-09-24-REV-2026-037-efecto-de-consultation-y-verification-request-sobre-el-status-de-s04-sin-regla-y-reconciliacion-operativa-sin-definir.md)
  (mapa handoff → `status` de tarea sin regla; aquí el mapa `status` del
  handoff → estado del packet, también sin regla);
  [`REV-2026-048`](2026-09-24-REV-2026-048-presupuesto-del-context-packet-budget-profile-sin-definicion-no-cabe-sin-limites-del-adapter-y-manifest-del-nucleo-sin-prioridad-ni-granularidad-de-material.md)
  hecho 4 (`manifest` l. 90 omite lo que otras secciones le atribuyen: mismo
  patrón para impacto y `check_after`);
  [`REV-2026-039`](2026-09-24-REV-2026-039-expires-at-y-due-at-condicionales-sin-condicion-ni-politica-de-caducidad-frente-a-la-capa-estructural.md)
  y [`REV-2026-043`](2026-09-24-REV-2026-043-tiempos-de-la-envoltura-fuera-de-los-inmutables-contenido-de-la-idempotencia-sin-definir-y-resultado-de-completed-sin-campo.md)
  («dato que el contrato promete y ningún campo aloja»);
  [`REV-2026-040`](2026-09-24-REV-2026-040-actor-que-aplica-las-capas-de-validacion-y-registra-rejected-sin-fijar-y-capas-mecanizables-sin-clasificar.md)
  (quién compara los marcadores: sin actor, como las capas de S05 y S06).
- Contraevidencia y límites: ADR-005 l. 108 («Reanudar una sesión compara
  primero marcadores; sólo relee material afectado») confirma el mecanismo sin
  añadir campos. S11 l. 166 (por búsqueda) persiste el packet «inmutable por
  digest» con un ledger que conserva «marcadores de fuente … predecesor»: la
  representación puede resolver el hecho 1 y el 3 sin que S06 lo diga ni lo
  difiera (`REV-2026-036` patrón); no se leyó S11 fuera de esa línea ni
  ADR-010. La pregunta 4 de `B023` (políticas versionadas, S09 l. 80 por
  búsqueda) sigue abierta y condiciona el cuarto marcador. No se demuestra que
  la aceptación del handoff invalide el packet: se demuestra que S06 no dice
  si lo hace.
- Pregunta para resolver: ¿contra qué valor esperado, alojado en qué campo,
  compara `freshness` cada marcador de l. 142-144? ¿Qué transiciones del
  handoff (S05 l. 60) cuentan como cambio del marcador «estado del handoff» y
  con qué impacto? ¿Dónde declara cada referencia su impacto y `check_after`,
  y qué prevalece entre esa declaración y las categorías de l. 158? ¿Qué es
  «contrato aplicable» y es `packet` un cambio de `consumer`?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: pendiente
