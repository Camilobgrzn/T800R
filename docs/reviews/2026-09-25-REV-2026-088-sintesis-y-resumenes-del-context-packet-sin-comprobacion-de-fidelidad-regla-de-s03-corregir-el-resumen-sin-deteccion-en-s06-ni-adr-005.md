# Anotación de revisión

- ID de anotación: `REV-2026-088`
- Unidad y ubicación: cruce `CT01` — `S03` [«Decisiones»](../definition/session-03-sources-of-truth.md#decisiones)
  (l. 38, 43), [«Distribución canónica inicial»](../definition/session-03-sources-of-truth.md#distribución-canónica-inicial)
  (l. 63, 66) y [«Mantenimiento del conocimiento»](../definition/session-03-sources-of-truth.md#mantenimiento-del-conocimiento)
  (l. 125-126, 134-135), frente a `S06` [«Decisiones»](../definition/session-06-context.md#decisiones)
  (l. 44, 47, 50, 51), [«Capas de validación del context packet»](../definition/session-06-context.md#capas-de-validación-del-context-packet)
  (l. 66-69), [«Núcleo obligatorio del context packet»](../definition/session-06-context.md#núcleo-obligatorio-del-context-packet)
  (l. 86, 88, 90, 92-94), [«Reglas de progressive disclosure»](../definition/session-06-context.md#reglas-de-progressive-disclosure)
  (l. 113-119), [«Presupuesto y prioridades»](../definition/session-06-context.md#presupuesto-y-prioridades)
  (l. 129-131) y [«Reconciliación incremental»](../definition/session-06-context.md#reconciliación-incremental)
  (l. 142-152); [ADR-005 «Decisión»](../adr/ADR-005-contrato-portable-de-contexto.md#decisión)
  puntos 1, 5, 6, 9 y 12 (l. 63-66, 78-83, 90-92, 100-102). Bloques `B009`,
  `B023`-`B025`, `B042`.
- Revisión examinada: estado de los archivos al 2026-09-25; repositorio sin
  commits, huella no disponible. Citas distintivas: «Un resumen es derivado: si
  contradice el original, se corrige el resumen» (S03 l. 66); «Si coinciden, se
  reutilizará el packet sin releer secciones» (S06 l. 47); «Ante presión de
  presupuesto, el material se deduplica, resume y difiere» (S06 l. 129).
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `media` (hechos textuales de confianza alta; la lectura de
  `sufficiency` admite una interpretación alternativa, abajo)
- Impacto: la garantía de S03 «ninguna copia o resumen obtiene autoridad» se
  apoya en que el resumen que contradice su original se detecta y se corrige.
  Si el context packet, que es el vehículo por el que el consumidor recibe el
  material, no tiene ninguna comprobación de fidelidad de sus síntesis frente a
  los originales y se reutiliza sin releer mientras los marcadores coincidan,
  una síntesis infiel desde su ensamblaje guía la acción del consumidor sin que
  ninguna capa lo detecte: autoridad de hecho de un derivado. Afecta a la
  verificabilidad de la regla de discrepancias y a lo que la sesión de
  arquitectura o el backlog deban exigir al ensamblador del packet.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (contradicción/omisión exclusivamente
  interna entre unidades; sin fuente externa)
- Fuente primaria: `docs/definition/session-03-sources-of-truth.md` l. 38,
  43, 63, 66, 125-126, 134-135; `docs/definition/session-06-context.md` l. 44,
  46-47, 50-51, 53, 66-69, 86, 88, 90, 92-94, 113-119, 129-131, 142-152;
  `docs/adr/ADR-005-contrato-portable-de-contexto.md` l. 63-66, 78-83, 90-92,
  100-102; como contraste, `docs/definition/session-07-knowledge.md` l. 45, 51,
  53, 99-102
- Sección o localizador: los indicados arriba
- Fecha de consulta/publicación: consulta 2026-09-25; S03 acordada el
  2026-09-14, S06 y ADR-005 el 2026-09-18, S07 el 2026-09-21
- Hecho observado:
  1. **S03 fija la regla para derivados y la hace depender de detectar.** «Ante
     un resumen que contradiga el original, corregir el resumen» (l. 38, 66);
     T800R «detectará … contradicciones; corregirá … resúmenes derivados
     autónomamente» (l. 43). La lista de responsabilidades la limita a
     «Corregir resúmenes desactualizados respecto de sus originales» (l. 125) y
     remite «la frecuencia y los mecanismos» a la sesión 7 (l. 134-135). El
     contexto efímero, «incluidas copias de otras fuentes», «no adquiere
     autoridad adicional por estar cargado» (l. 63).
  2. **El packet es, por diseño, una síntesis.** «El packet conserva sólo una
     síntesis operativa y referencias» (S06 l. 44, 92-94; ADR-005 l. 65); su
     núcleo incluye `purpose`, que «Resume el propósito operativo» (l. 86),
     `constraints`, que «Sintetiza el alcance, los permisos efectivos y las
     políticas referenciadas» (l. 88), y `manifest`, que describe cada sección
     «con resumen» (l. 90). Ante presión de presupuesto el material
     `optional` y `relevant` «se deduplica, resume y difiere» (l. 129-131;
     ADR-005 punto 5, l. 78-80).
  3. **Ninguna capa de validación compara una síntesis con su original.** Las
     cuatro capas (l. 66-69; ADR-005 punto 9) comprueban: schema y coherencia
     del `manifest`; que las fuentes sean «resolubles, tipadas, con revisión y
     procedencia»; «marcadores e impactos reconciliados»; y suficiencia del
     núcleo y de lo `required`, con «restricciones y contradicciones
     resueltas». Resolubilidad, revisión y marcadores detectan que el original
     cambió o no existe, no que la síntesis lo contradiga desde su creación.
  4. **La reutilización excluye releer.** Si los marcadores coinciden, «se
     reutilizará el packet sin releer secciones» (l. 47, 144-145; ADR-005
     punto 6, l. 81-83; «Consecuencias» l. 108). Cargar una sección exige una
     condición (l. 113-117) y «La disponibilidad por sí sola no justifica una
     carga» (l. 117-118); ninguna condición es «comprobar la fidelidad de una
     síntesis»: «resuelve una ambigüedad que afecta la corrección» y «permite
     comprobar vigencia o evidencia» (l. 114-115) presuponen que el consumidor
     ya percibe la ambigüedad o se pregunta por la vigencia.
  5. **El productor y el consumidor pueden ser actores distintos.** El núcleo
     distingue `producer` y `consumer` (l. 83-84). El consumidor actúa sobre la
     síntesis del productor; el packet `ready` «Puede usarse, sujeto a los
     permisos reales» (l. 169), sin exigir contraste de contenido.
  6. **S07 sí tiene un control en la creación para su derivado principal.** La
     promoción a conocimiento reutilizable exige una curación que «compruebe
     fuentes, evidencia y condiciones de aplicabilidad» (S07 l. 45) y
     `draft → stable` requiere esa curación (l. 53); la discrepancia con el
     índice raíz «se resuelve desde las entradas y fuentes» (l. 101-102). El
     packet, en cambio, no tiene curación ni lifecycle editorial (S06 l. 49:
     sus estados no incluyen revisión de contenido).
- Inferencia (si aplica): al juntar S03 con S06/ADR-005, la regla «se corrige
  el resumen» queda sin disparador para la clase de derivado más usada en la
  ejecución: una síntesis del packet infiel desde su ensamblaje (omisión de un
  criterio, restricción ampliada, propósito desplazado) no cambia ningún
  marcador, pasa las cuatro capas y se reutiliza; sólo se detectaría si el
  consumidor, por otra razón, cargara el original. Es un caso en que un
  resumen obtiene autoridad de hecho, que es lo que `CT01` debe excluir.

## Observación y propuesta

- Observación: cada unidad afirma bien la subordinación del packet
  («no sustituye esas fuentes», S06 l. 94), pero el mecanismo que S03 prevé
  para imponerla —detectar y corregir el derivado— sólo existe para cambios
  del original (marcadores, S06; revisión por cambio de fuentes, S07 l. 51), y
  para el conocimiento en la curación. El packet no tiene equivalente.
- Propuesta concreta: que la persona decida si (a) S06 o la sesión que concrete
  el ensamblaje exige que cada síntesis del núcleo (`purpose`, `constraints`)
  y cada material resumido por presupuesto conserve la referencia exacta al
  fragmento original y quede marcado como síntesis, y que las acciones con
  efectos validen contra el original las restricciones y criterios de las que
  dependen (la regla de «precondiciones relacionadas» de l. 146-147
  extendida a restricciones y criterios); (b) `sufficiency` declare
  explícitamente si «contradicciones resueltas» incluye síntesis frente a
  original y con qué comprobación; o (c) se acepte el riesgo de forma
  explícita y se registre como detalle `deferred` con destino, en vez de
  dejarlo implícito.
- Contraargumento o coste/riesgo: (1) `sufficiency` exige «restricciones y
  contradicciones resueltas» (l. 69): puede leerse como que el validador ya
  contrasta síntesis y original; el texto no lo dice y no nombra el original.
  (2) Las herramientas de reducción deben preservar «acceso al contenido
  bruto» (l. 53; ADR-005 punto 12), lo que hace posible la comprobación, pero
  no la exige. (3) Permisos y políticas se aplican por runtime/policy (S06
  l. 169 «permisos reales»; S09, fuera del alcance), de modo que una
  `constraints` ampliada no concede permisos; el riesgo queda en alcance,
  criterios y propósito. (4) Comprobar fidelidad en cada reutilización anula
  el ahorro de la reconciliación incremental; por eso la propuesta la limita
  a acciones con efectos.

## Análisis adicional

- Evidencia interna: S03 l. 38/66 (regla) frente a S06 l. 47/144-145 (reuso
  sin releer) y l. 66-69 (capas); S03 l. 125 («desactualizados») frente a S06
  l. 129 (resumen por presupuesto, que no es desactualización); S07 l. 45/53
  como control de creación que el packet no tiene. Relación: amplía la
  pregunta 5 de [B024](blocks/B024.md) («qué capa detecta que la síntesis
  diverge del original» para `constraints`) a todo el packet; complementa
  [`REV-2026-083`](2026-09-25-REV-2026-083-decision-de-adr-005-resume-s06-sin-regla-capa-estado-limites-del-adapter-ni-exclusividad-de-carga-y-s08-la-cita-como-fuente.md)
  hecho 3 (la «Decisión» de ADR-005 pierde además el carácter exclusivo de las
  condiciones de carga, que es lo que impide cargar el original por
  disponibilidad) y
  [`REV-2026-069`](2026-09-25-REV-2026-069-decision-de-adr-002-resume-s03-sin-limite-inequivoco-ni-deteccion-evidencia-sin-revision-humana-y-remisiones-sin-destino.md)
  hecho 1 (corrección autónoma de derivados); no duplica
  [`REV-2026-050`](2026-09-24-REV-2026-050-marcadores-de-reconciliacion-sin-valor-esperado-estado-del-handoff-cambia-por-lifecycle-normal-sin-impacto-impacto-y-check-after-sin-campo-y-contrato-aplicable-sin-definicion.md),
  que trata el valor de los marcadores, no la fidelidad del contenido.
- Contraevidencia y límites: no se leyeron S08 (salvo l. 86-100 y 205-250),
  S11 ni S12, que podrían exigir al ensamblador algo equivalente; la búsqueda
  de «fidelidad» y de «resumen» en las anotaciones previas no devolvió otra
  cobertura. No se afirma que el defecto se materialice: sólo que ninguna
  unidad del alcance lo impide ni lo detecta.
- Pregunta para resolver: cuando la síntesis del context packet contradice su
  original desde el ensamblaje y los marcadores no cambian, ¿qué comprobación
  la detecta antes de una acción con efectos, y quién la corrige?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [CT01](blocks/CT01.md), [B024](blocks/B024.md),
  [B025](blocks/B025.md), [B042](blocks/B042.md)

## Preguntas pendientes

Ver el checkpoint [CT01](blocks/CT01.md).

## Cobertura y límites

Ver el checkpoint [CT01](blocks/CT01.md). Sin fuentes externas: el problema es
interno.
