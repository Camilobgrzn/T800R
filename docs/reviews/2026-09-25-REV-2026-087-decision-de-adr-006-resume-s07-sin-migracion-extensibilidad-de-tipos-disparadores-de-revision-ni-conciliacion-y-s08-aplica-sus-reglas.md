# Anotación de revisión

- ID de anotación: `REV-2026-087`
- Unidad y ubicación: `ADR-006` — [«Decisión»](../adr/ADR-006-modelo-portable-de-conocimiento.md#decisión)
  (puntos 1-9, `docs/adr/ADR-006-modelo-portable-de-conocimiento.md:46-80`),
  frente a `S07` — [«Decisiones»](../definition/session-07-knowledge.md#decisiones)
  (l. 40-56) y [«Taxonomía y límites iniciales»](../definition/session-07-knowledge.md#taxonomía-y-límites-iniciales)
  (l. 82-102); y a los lugares que citan ADR-006 como fuente:
  [S08](../definition/session-08-portability.md) l. 249 y 381-382 y el
  [tracker de definición](../definition-tracker.md) l. 320. Bloque `B045`.
- Revisión examinada: estado de los archivos al 2026-09-25 (repositorio sin
  commits; ADR-006 fechado 2026-09-21, «Aceptada»; S07 cerrada el 2026-09-21;
  S08 cerrada el 2026-09-22). Citas distintivas: «T800R usa un perfil lógico
  compatible con OKF v0.2, fijado a la base
  `ad30107c31c06aec8a7d5636e0d1058118604e6f`. Las señales OKF, incluidas `stable`
  y `verified`, no conceden autoridad al contenido.» (l. 48-50); «No hay
  caducidad universal: `check_after` programa comprobación y `stale_after` sólo
  se usa con una razón temporal concreta.» (l. 66-68); «En ambos modos se
  aplican las reglas de autoridad y vigencia de ADR-006.» (S08 l. 248-249).
- Tipo: `incompleto`
- Gravedad: `baja`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos textuales (lectura completa de ADR-006 y
  S07; búsqueda en ADR-006 de «extensib|desconocid|migra|marcador|riesgo|
  invalid|sesión 3|conformidad|permisos|copias|trazabilidad|autorizad|contrato
  común»; búsqueda de «ADR-006» y de «migraci» en `docs/` salvo `reviews/`);
  `media` sobre el impacto (S08 sólo l. 84-117, 226-253 y 374-385)
- Impacto: qué reglas de autoridad, vigencia, versión y taxonomía aplica quien
  use la «Decisión» de ADR-006 como contrato del conocimiento. S08 l. 249 remite
  expresamente a «las reglas de autoridad y vigencia de ADR-006» para resolver
  referencias `exact`/`current`, y el tracker de definición presenta ADR-006
  como fuente del tema «Modelo portable de conocimiento» (l. 320), no S07. No
  cambia ninguna fila aceptada de S07.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (divergencia exclusivamente interna; no
  requiere fuente externa según el [README](README.md)).
- Fuente primaria: `docs/adr/ADR-006-modelo-portable-de-conocimiento.md:1-106`;
  `docs/definition/session-07-knowledge.md:1-123`;
  `docs/definition/session-08-portability.md:87-90, 144, 230-249, 381-382`;
  `docs/definition-tracker.md:312-323`.
- Sección o localizador: ver «Unidad y ubicación».
- Fecha de consulta/publicación: consulta 2026-09-25; ADR-006 y S07 fechados
  2026-09-21.
- Hecho observado:
  1. **Tres filas `accepted` de S07 no tienen punto en la «Decisión».** Los
     nueve puntos siguen el orden de las filas l. 40-55, pero:
     - «Versionado de OKF» (l. 41): «no presupone compatibilidad automática con
       versiones futuras. Toda migración debe comprobar cambios incompatibles y
       preservar identidad, referencias, procedencia y semántica de T800R». El
       punto 1 sólo fija el commit. «migra» y «versiones futuras» no aparecen en
       ADR-006, y la regla no tiene otro lugar en `docs/` (búsqueda de
       «migraci»: sólo S07 l. 41 y la investigación de OKF l. 44).
     - «Forma de la taxonomía» (l. 43): núcleo «extensible por cada proyecto»,
       tipos adicionales que «deben preservar los campos y límites del perfil;
       no adquieren autoridad por su nombre» y consumidores que «deben tolerar
       tipos desconocidos según OKF». Nada de esto está en l. 46-106:
       «extensib» sólo aparece en el TL;DR (l. 9) y en la tabla de
       alternativas (l. 31-32); «desconocid», en ninguna línea.
     - «Tipos del núcleo» (l. 44): el punto 4 fija requisitos para los cuatro
       tipos, pero no dice qué son. Las definiciones sólo están en S07.
  2. **Las reglas de vigencia pierden los disparadores y la conciliación.**
     S07 l. 51: «La revisión se activa por cambios en fuentes, evidencia o
     aplicabilidad y por riesgo»; «`check_after` programa una comprobación sin
     invalidar por sí mismo»; «Antes de reutilizar conocimiento se concilian los
     marcadores de las dependencias relevantes». S07 l. 52: «`review_due` exige
     una comprobación proporcional al riesgo, pero no invalida
     automáticamente». El punto 6 (l. 65-69) conserva los valores y la
     prohibición de depender de `stale`, pero omite los disparadores, «sin
     invalidar por sí mismo», la conciliación de marcadores y el efecto de
     `review_due`. «marcador», «riesgo» e «invalid» no aparecen en ADR-006. Así,
     el ADR no dice qué vuelve revisable una entrada salvo el tiempo
     (`check_after`, `stale_after`), justo la base que `REV-2026-059` echa en
     falta en S07.
  3. **Las reglas de autoridad se estrechan.** Faltan:
     - S07 l. 42: «Conformidad OKF» (no sólo las señales) no convierte un
       contenido en «acuerdo, evidencia suficiente ni autoridad», y «La
       autoridad continúa determinada por las fuentes y criterios acordados en
       la sesión 3». El punto 1 sólo niega autoridad a «las señales OKF», y
       «sesión 3» y «conformidad» no aparecen en ADR-006.
     - S07 l. 86: «El ámbito no concede autoridad sobre especificaciones de otro
       ámbito, y toda reutilización debe comprobar versión y aplicabilidad». El
       punto 2 sólo dice «sin copiar sus fuentes como autoridad».
     - S07 l. 89-91: `sources` «no incorpora copias que compitan» con los
       originales, y `applicability` expresa «condiciones y exclusiones de uso,
       no permisos de ejecución». El punto 3 enumera los campos sin esa
       semántica.
     - S07 l. 55: el motor semántico opera «sobre fuentes autorizadas», el
       resultado se reconcilia «antes de usarse» y su ausencia degrada «sin
       romper el contrato común». El punto 9 omite las tres cláusulas.
     - S07 l. 50: la delegación del curator es «con alcance y trazabilidad
       explícitos» y «El owner gobierna el ámbito». El punto 5 omite ambas.
  4. **Otras reducciones menores.** El punto 4 omite que «Sólo `domain`, las
     referencias de evidencia y el asunto exigen estructura adicional; el resto
     puede expresarse en el cuerpo» (S07 l. 49). Esa regla limita lo que el
     schema `knowledge-entry` (S11 l. 115) puede exigir. El punto 5 omite qué
     comprueba la curación («fuentes, evidencia y condiciones de
     aplicabilidad») y que la revisión humana «no se exige para toda promoción»
     (l. 45). El punto 7 omite «sujeta a nueva revisión» para la reactivación y
     la condición de la corrección mecánica («no cambia significado, fuentes ni
     aplicabilidad», l. 53).
  5. **Otros documentos citan el ADR, no la unidad.** S08 l. 248-249: «En
     ambos modos se aplican las reglas de autoridad y vigencia de ADR-006».
     S08 l. 381-382 compara Hindsight «conforme a ADR-006». El tracker de
     definición l. 320 pone ADR-006 como fuente de «Modelo portable de
     conocimiento». S07 sólo figura ahí de forma genérica («unidades por
     sesión», l. 316). A diferencia de ADR-003 (`B037`, balance) y ADR-004
     (`B040`, balance), el tracker presenta el ADR como fuente por tema, como a
     ADR-001 y ADR-002 (l. 318-319). Como ADR-005 (`REV-2026-083`), una sesión
     posterior lo cita como fuente normativa.
- Inferencia (si aplica): quien aplique las «reglas de autoridad y vigencia de
  ADR-006» a una referencia `current` (S08 l. 245-249) no encuentra en el ADR
  qué cambio vuelve revisable la entrada resuelta, que la conformidad OKF
  tampoco da autoridad, que la autoridad sigue en S03 ni que la reutilización
  entre ámbitos comprueba versión y aplicabilidad. Un cambio a una OKF
  posterior tampoco tiene regla en el ADR. La regla de tolerancia de tipos
  desconocidos, que `REV-2026-086` señala como ambigua, no está en la
  «Decisión».

## Observación y propuesta

- Observación: es el patrón de `REV-2026-065`, `069`, `074`, `075`, `079` y
  `083` (la «Decisión» resume la unidad con pérdidas). Lo distinto es el
  contenido perdido: las reglas de versión, extensibilidad y vigencia, y las
  cláusulas que anclan la autoridad en S03. Además, una sesión posterior
  invoca precisamente las «reglas de autoridad y vigencia» del ADR.
- Propuesta concreta: que la persona decida, con la convención que adopte para
  `REV-2026-074`/`075`/`079`/`083`, entre dos opciones.
  - (a) La «Decisión» declara que resume S07 y que las cláusulas no repetidas
    siguen vigentes. S08 l. 249 y el tracker de definición l. 320 enlazan S07.
  - (b) La «Decisión» recupera en el punto 1 la regla de migración de l. 41,
    la conformidad OKF y el ancla en S03 de l. 42; añade un punto para l. 43
    (extensibilidad, tipos adicionales, tolerancia, con la precisión que decida
    `REV-2026-086`); recupera en el punto 6 los disparadores, «sin invalidar»,
    la conciliación de marcadores y el efecto de `review_due`; y recupera en el
    punto 9 «sobre fuentes autorizadas» y «antes de usarse».
  No editar ADR-006, S07, S08 ni el tracker de definición sin esa decisión.
- Contraargumento o coste/riesgo: un ADR resume por naturaleza, y «Referencias»
  l. 103 nombra S07 como «Acuerdos canónicos». S08 recupera por su cuenta
  parte de lo perdido: l. 90 exige que ninguna modalidad omita «la
  reconciliación de fuentes, frescura y aplicabilidad», y l. 144 restituye
  «sobre fuentes autorizadas» y «antes de usarlo» para `semantic_retrieval`.
  Por eso la gravedad es `baja`. La regla de migración y los disparadores de
  revisión no se recuperan en ningún lugar leído. El coste de (a) es una frase
  y dos enlaces.

## Análisis adicional

- Evidencia interna: hechos 1-5 con sus localizadores; mapa punto a fila en
  [B045](blocks/B045.md). Enlazadas sin duplicar:
  [`REV-2026-083`](2026-09-25-REV-2026-083-decision-de-adr-005-resume-s06-sin-regla-capa-estado-limites-del-adapter-ni-exclusividad-de-carga-y-s08-la-cita-como-fuente.md)
  (mismo patrón en ADR-005, también citado por S08);
  [`REV-2026-059`](2026-09-25-REV-2026-059-frescura-derivada-de-las-entradas-sin-regla-de-derivacion-campo-actor-ni-deteccion-de-cambio-de-fuente-e-indice-raiz-la-expone-como-valor.md)
  (la derivación de la frescura, ya ausente en S07, pierde en el ADR incluso
  los disparadores);
  [`REV-2026-085`](2026-09-25-REV-2026-085-alternativas-de-adr-006-sin-costes-justificaciones-circulares-contrato-propio-reformulado-y-metadatos-vigencia-e-indices-sin-alternativas.md)
  hecho 3 (el riesgo de versión no se pondera en las alternativas y tampoco
  queda como regla en la «Decisión»);
  [`REV-2026-086`](2026-09-25-REV-2026-086-homonimo-concept-de-okf-y-tipo-concept-del-nucleo-sin-nota-tolerancia-de-tipos-desconocidos-como-generic-concepts-y-adr-006-sin-glosario.md)
  (la regla de tolerancia no está en el ADR).
- Contraevidencia y límites: no se leyó S08 fuera de las líneas indicadas ni
  S11 salvo l. 88-115. No se comprobó si ADR-007 repite estas omisiones (su
  punto 9, l. 89-91, sólo trata identidad y referencias). No se afirma que
  ningún documento haya aplicado la lectura reducida. «Una acción no depende de
  contenido `stale` sin revisar lo afectado» (l. 68-69) conserva la regla
  central de S07 l. 52.
- Pregunta para resolver: ¿debe la «Decisión» de ADR-006 recuperar la regla de
  migración, la forma extensible de la taxonomía con la tolerancia de tipos,
  los disparadores y la conciliación de la vigencia y las cláusulas de
  autoridad de S07, o declararse resumen subordinado a S07 y hacer que S08
  l. 249 y el tracker de definición l. 320 remitan a la unidad?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B045](blocks/B045.md), [B044](blocks/B044.md),
  [B042](blocks/B042.md); `REV-2026-065`, `069`, `074`, `075`, `079`, `083`;
  cruces `CT01`, `CT03`, `CT06` y `CT07`.

## Preguntas pendientes

Ver el checkpoint [B045](blocks/B045.md).

## Cobertura y límites

Ver el checkpoint [B045](blocks/B045.md). Fuentes externas: ninguna; el
problema es interno.
