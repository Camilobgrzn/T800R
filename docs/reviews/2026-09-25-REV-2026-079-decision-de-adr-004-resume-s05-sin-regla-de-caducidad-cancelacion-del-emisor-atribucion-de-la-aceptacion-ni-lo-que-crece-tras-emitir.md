# Anotación de revisión

- ID de anotación: `REV-2026-079`
- Unidad y ubicación: `ADR-004` — [«Decisión»](../adr/ADR-004-contrato-portable-de-handoffs.md#decisión),
  `docs/adr/ADR-004-contrato-portable-de-handoffs.md:61-101` (puntos 3, 4, 5, 6,
  7, 8, 9 y 11), frente a `S05` — [«Decisiones»](../definition/session-05-handoffs.md#decisiones)
  (l. 59, 61-64, 66, 70-71, 73-76, 78, 80),
  [«Capas de validación»](../definition/session-05-handoffs.md#capas-de-validación)
  (l. 132), [«Matriz de transiciones»](../definition/session-05-handoffs.md#matriz-de-transiciones)
  (l. 178), [«Integridad, deduplicación y referencias»](../definition/session-05-handoffs.md#integridad-deduplicación-y-referencias)
  (l. 183-188), [«Semántica inicial de los tipos»](../definition/session-05-handoffs.md#semántica-inicial-de-los-tipos)
  (l. 216-217) y [«Resultado mínimo de `completed`»](../definition/session-05-handoffs.md#resultado-mínimo-de-completed)
  (l. 226-229). Bloque `B039`.
- Revisión examinada: estado de los archivos al 2026-09-25 (repositorio sin
  commits; ADR-004 y S05 fechados 2026-09-16). Citas distintivas: «Conserva
  `schema`, `id`, `type`, `status`, tiempos, emisor, receptor» (ADR l. 69-70);
  «Desde `accepted` sólo se permite `completed` o un `cancelled` coordinado»
  (l. 77-78); «Identidad, intención, actores, sujeto, base, autoridad,
  referencias, correlación y payload son inmutables tras emitir» (l. 91-92);
  «reutilizarlo con contenido distinto produce un diagnóstico de integridad»
  (l. 93-94); «`expires_at` limitará únicamente hasta cuándo puede aceptarse un
  handoff `pending`» (S05 l. 62).
- Tipo: `incompleto`
- Gravedad: `baja`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos (lectura completa de ADR-004 l. 61-115 y
  de S05 l. 1-233; búsqueda en todo ADR-004 de «caduc|expires|due_at|vencid|
  unilateral|human|persona|selector|crece|contenido|aplic»); `media` sobre el
  impacto (depende de si el ADR se aplica sin S05)
- Impacto: qué reglas de caducidad, cancelación, sustitución, atribución,
  rechazo, integridad y efecto por tipo aplica quien use la «Decisión» de
  ADR-004 como contrato de `handoff/v1` (por ejemplo, al fijar su
  representación física en S11 o al implementar un adapter). No cambia ninguna
  fila aceptada de S05.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (divergencia exclusivamente interna; no requiere
  fuente externa según [README](README.md)).
- Fuente primaria: `docs/adr/ADR-004-contrato-portable-de-handoffs.md:9, 61-114,
  129`; `docs/definition/session-05-handoffs.md:54, 58-80, 87-89, 93-109,
  129-135, 148-150, 154-164, 174-179, 183-192, 202-208, 214-232`;
  `docs/definition-tracker.md:314-323, 342` (contraevidencia).
- Sección o localizador: ver «Unidad y ubicación».
- Fecha de consulta/publicación: consulta 2026-09-25; ADR-004 y S05 fechados
  2026-09-16.
- Hecho observado:
  1. **La regla de caducidad no figura en la «Decisión».** S05 l. 62
     (`accepted`): «`expires_at` limitará únicamente hasta cuándo puede
     aceptarse un handoff `pending`. Después de `accepted`, una fecha `due_at`
     puede activar aviso, espera o escalación, pero no extingue la obligación ni
     libera ownership automáticamente». En la «Decisión», el punto 3 (l. 69) dice
     «tiempos»; el punto 5 (l. 76-77) enumera `expired` como salida de
     `pending`; el punto 11 (l. 98-99) dice «uno vencido requiere otro handoff».
     Ninguna línea del ADR contiene «caduc», `expires_at` ni `due_at`
     (búsqueda). Se pierde la cláusula protectora «no extingue la obligación ni
     libera ownership». La caducidad es uno de los términos de la fila del
     índice para la sesión 5 y el cierre de S05 tampoco la nombra
     (`REV-2026-044` hecho 2): la regla sólo consta en S05 l. 62 y l. 100-101.
  2. **Cancelación y sustitución sin actor ni condiciones.** S05 l. 61: «Un
     handoff `pending` puede ser cancelado unilateralmente por su emisor. Tras
     `accepted`, … sólo se cancela mediante un cierre coordinado que registre
     razón, actor y trabajo parcial». l. 64: «`superseded` reemplazará
     directamente sólo un handoff `pending` y deberá enlazar el sucesor. Una
     consulta o verificación ya aceptada requiere cierre coordinado antes de
     reemplazarse». l. 80: «se reanuda o cancela coordinadamente antes de
     reemplazarse». El punto 5 no dice quién puede cancelar un `pending` ni que
     `superseded` enlaza al sucesor, y reduce el cierre a «un `cancelled`
     coordinado» sin «razón, actor y trabajo parcial»; el punto 11 (l. 99) omite
     «antes de reemplazarse». El punto 6 (l. 80-81) termina en «el ownership no
     cambia» sin el estado resultante del handoff (S05 l. 59: «pasa a `rejected`
     con `stale_or_conflicting_base`, o a `superseded` si existe un sucesor
     válido»).
  3. **La aceptación y los resultados no se atribuyen a un actor concreto.**
     S05 l. 71: «`sender` identificará siempre un actor concreto y su
     ejecución; `recipient` podrá identificar un actor concreto o un selector de
     rol o autoridad, pero la aceptación deberá resolverse y atribuirse a un
     actor concreto» (y l. 87-89). l. 66: «Cada evento conservará actor, fecha,
     transición, razón y evidencia». El punto 3 conserva sólo que las
     identidades son lógicas y los identificadores del proveedor, aliases; dice
     «emisor, receptor» y «eventos» sin su contenido. El punto 7 (l. 83-86)
     omite en ownership «Actor concreto, ownership y alcance efectivos, revisión
     resultante del tracker» y, para la transferencia, «owner anterior,
     checkpoint y trabajo preservado, y continuidad de pendientes» (l. 74-75,
     226-227); en verificación, los valores del veredicto `passed | failed |
     inconclusive` y «con seguimiento requerido» (l. 76, 228); en consulta,
     «atribuida a la autoridad» y «referencias afectadas» (l. 76, 229).
  4. **Validación y rechazo sin revisión humana ni efectos acotados.** El punto
     4 (l. 73-75) omite «Incluye revisión humana cuando los acuerdos la exijan»
     (S05 l. 132), de modo que el ADR sigue sin nombrar a la persona en ningún
     punto (`REV-2026-078` hecho 3); omite que el artefacto inválido «generará un
     diagnóstico auditable» y que un handoff válido que falla la validación
     «pasará a `rejected` con categoría y explicación» (l. 70). El punto 8
     (l. 87-90) omite «El rechazo no cambia por sí solo el ownership ni el estado
     de la tarea; el orchestrator reconciliará el impacto…» (l. 63) y que
     invalidez, caducidad, cancelación y sustitución «no son categorías de
     rechazo» (l. 73, 148-150). El punto 5 omite que «una transición no
     permitida no alterará el estado» y produce diagnóstico (l. 77, 178).
  5. **La integridad no dice qué crece y cambia el objeto de comparación.** S05
     l. 78 y l. 184-185: «Estado, eventos y resultado sólo crecerán mediante
     operaciones válidas». El punto 9 (l. 91-94) lista lo inmutable (sin
     `schema`, que S05 l. 183 incluye) pero no lo que crece; con el TL;DR
     «inmutable» (l. 9; `REV-2026-078` hecho 2), el ADR no dice en ninguna parte
     que `status`, `events` y el resultado cambian. Además, S05 l. 78 y l. 187
     hablan de reutilizar el `id` con «contenido base distinto»; el punto 9 dice
     «contenido distinto» y omite «no se ingiere» (l. 78, 188). «Base» era la
     única pista textual de que se compara el contenido emitido y no el
     artefacto con su estado avanzado (matiz a `REV-2026-043` hecho 3: sin ese
     calificador, una reentrega que porte `status` o `events` de otro momento
     puede leerse como conflicto).
  6. **Los efectos que no deben inferirse por tipo desaparecen.** S05 l. 216:
     `verification_request` «No transfiere ownership de implementación ni
     autoriza al verifier a modificar el resultado salvo asignación separada»;
     l. 217: `consultation` «No transfiere ownership, permisos ni autoridad». El
     punto 10 (l. 95-97) lo afirma del transporte y del context packet; el punto
     2 sólo enumera los tipos; «Consecuencias» l. 111-112 sólo dice que
     verificadores y consultados completan «sin declarar completada la tarea».
- Inferencia (si aplica): el resumen no contradice S05 (los puntos 2, 8 y 10
  coinciden casi literalmente), pero cada omisión, leída sola, amplía el margen
  de un implementador o de un agente: tratar `due_at` como extinción o
  liberación, sustituir o reemplazar una solicitud aceptada sin cierre previo,
  aceptar mediante un selector sin atribución, completar una consulta sin
  atribuirla a la autoridad, dar efectos de ownership al rechazo o permitir que
  un verifier modifique el resultado. Es el patrón de `REV-2026-065`, `069`,
  `074` y `075`, ahora en ADR-004.

## Observación y propuesta

- Observación: la «Decisión» de ADR-004 es más fiel que las de ADR-001-003 en
  estructura (once puntos que siguen el orden de las filas) y conserva
  categorías, matriz y separación, pero pierde la regla de caducidad completa y
  las cláusulas de atribución y de efectos acotados.
- Propuesta concreta: que la persona decida, con la convención que adopte para
  `REV-2026-074`/`075`, si (a) la «Decisión» declara que resume S05 y que las
  cláusulas no repetidas siguen vigentes (una frase junto a l. 129), o (b)
  recupera en los puntos 3, 5, 7, 9 y 11 la regla de `expires_at`/`due_at` de
  S05 l. 62, la cancelación unilateral del emisor y el enlace al sucesor, la
  atribución de la aceptación a un actor concreto, «atribuida a la autoridad» y
  «referencias afectadas», «seguimiento requerido», lo que «crece» y «contenido
  base». No editar ADR-004 ni S05 sin esa decisión.
- Contraargumento o coste/riesgo: un ADR resume por naturaleza; l. 129 remite a
  S05 como «Acuerdos canónicos»; el tracker de definición no presenta ADR-004
  como fuente de un tema (l. 314-323) y lo enlaza junto al cierre de S05
  (l. 342), a diferencia de ADR-001/002 (`REV-2026-065`/`069`), lo que reduce el
  riesgo de lectura aislada. Por eso la gravedad es `baja`. El coste de (a) es
  una frase.

## Análisis adicional

- Evidencia interna: hechos 1-6 con sus localizadores. Lo que **sí** coincide sin
  pérdida material está en el mapa de [B039](blocks/B039.md): el punto 5 omite
  «no se permite rechazo, caducidad ni sustitución tardíos» (S05 l. 175), pero
  «sólo se permite `completed` o un `cancelled` coordinado» ya lo excluye.
- Contraevidencia y límites: no se leyeron S08, S11, ADR-007 ni ADR-010, que
  pueden fijar la representación con estos campos; no se afirma que algún
  documento posterior haya aplicado la lectura amplia. «Tiempos» puede leerse
  como remisión implícita a S05 l. 99-101.
- Pregunta para resolver: ¿debe la «Decisión» de ADR-004 recuperar la regla de
  caducidad de S05 l. 62, las condiciones de cancelación y sustitución, la
  atribución de la aceptación y de la respuesta, lo que crece tras emitir y el
  «contenido base» de la idempotencia, o basta declarar que resume S05?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B039](blocks/B039.md),
  [`REV-2026-039`](2026-09-24-REV-2026-039-expires-at-y-due-at-condicionales-sin-condicion-ni-politica-de-caducidad-frente-a-la-capa-estructural.md),
  [`REV-2026-042`](2026-09-24-REV-2026-042-accepted-sin-salida-si-el-aceptante-desaparece-cierre-coordinado-sin-partes-y-escalacion-de-due-at-sin-observador-ni-representacion.md),
  [`REV-2026-043`](2026-09-24-REV-2026-043-tiempos-de-la-envoltura-fuera-de-los-inmutables-contenido-de-la-idempotencia-sin-definir-y-resultado-de-completed-sin-campo.md),
  [`REV-2026-044`](2026-09-24-REV-2026-044-cierre-s05-omite-caducidad-fuentes-canonicas-y-evidencia-auditoria-como-relectura-de-filas-y-no-bloqueo-para-s06-sin-enumerar.md),
  [`REV-2026-065`](2026-09-25-REV-2026-065-decision-de-adr-001-omite-la-deteccion-de-riesgo-por-t800r-estrecha-la-no-sustitucion-y-reformula-harness-y-permisos-frente-a-s02.md),
  [`REV-2026-069`](2026-09-25-REV-2026-069-decision-de-adr-002-resume-s03-sin-limite-inequivoco-ni-deteccion-evidencia-sin-revision-humana-y-remisiones-sin-destino.md),
  [`REV-2026-074`](2026-09-25-REV-2026-074-decision-de-adr-003-omite-consultas-y-autoridad-humana-de-s04-y-deja-solo-build-aceptacion-y-deploy-como-intervencion.md),
  [`REV-2026-075`](2026-09-25-REV-2026-075-decision-de-adr-003-resume-s04-sin-carga-de-prueba-del-verifier-condiciones-de-runbook-estado-ante-duda-ni-tipo-de-consulta.md),
  [`REV-2026-078`](2026-09-25-REV-2026-078-glosario-y-contexto-de-adr-004-excluyen-el-handoff-del-mismo-actor-omiten-la-revision-humana-y-alternativa-conversacional-sin-fila-en-s05.md),
  cruces `CT02`, `CT04` y `CT07`.

## Preguntas pendientes

Ver el checkpoint [B039](blocks/B039.md).

## Cobertura y límites

Ver el checkpoint [B039](blocks/B039.md). Fuentes externas: ninguna; el
problema es interno.
