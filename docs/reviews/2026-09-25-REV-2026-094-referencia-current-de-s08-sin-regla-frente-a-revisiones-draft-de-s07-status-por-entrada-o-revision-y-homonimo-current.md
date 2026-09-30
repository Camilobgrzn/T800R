# Anotación de revisión

- ID de anotación: `REV-2026-094`
- Unidad y ubicación: `S07` — [«Decisiones»](../definition/session-07-knowledge.md#decisiones)
  (filas «Metadatos comunes» l. 48, «Lifecycle y frescura» l. 52,
  «Transiciones editoriales» l. 53) y prosa l. 78-80, 93-97 y 104-105;
  [ADR-006 «Decisión» puntos 6 y 7](../adr/ADR-006-modelo-portable-de-conocimiento.md#decisión)
  (l. 65-73) y «Puntos abiertos» l. 95-97. Destino fuera del alcance usado como
  evidencia: S08 l. 87, 90, 243-249; ADR-007 l. 89-91. Cruce `CT03`.
- Revisión examinada: estado de los archivos al 2026-09-25 (repositorio sin
  commits; S07 y ADR-006 fechados 2026-09-21; S08 cerrada 2026-09-22). Citas
  distintivas: «Una modificación que altera afirmaciones produce una revisión
  `draft`» (S07 l. 53); «Cambios semánticos vuelven la revisión a `draft`»
  (ADR-006 l. 72); «`current` resuelve el `knowledge_id` hasta su revisión
  vigente» (S08 l. 90); «En ambos modos se aplican las reglas de autoridad y
  vigencia de ADR-006» (S08 l. 248-249).
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos textuales (búsquedas de «vigente»,
  «draft», «current» y «provisional» en S07, ADR-006, S08 y ADR-007); `media`
  sobre el efecto, que depende de cómo se lea «revisión vigente».
- Impacto: qué revisión entrega una referencia `current` cuando la entrada
  tiene una revisión `draft` posterior a una `stable`; si el `status` editorial
  es de la entrada o de cada revisión; y si el consumidor recibe la regla de
  S07 l. 93-94 («`draft` puede apoyar investigación si se identifica como
  provisional») por la vía que S08 l. 249 le señala (ADR-006), que no la
  contiene. Afecta a si una acción puede apoyarse sin saberlo en conocimiento
  no curado. No cambia ninguna fila aceptada.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión exclusivamente interna).
- Fuente primaria: `docs/definition/session-07-knowledge.md:48-53, 78-80,
  93-97, 104-107`; `docs/adr/ADR-006-modelo-portable-de-conocimiento.md:46-99`;
  `docs/definition/session-08-portability.md:87-92, 230-249`;
  `docs/adr/ADR-007-contrato-de-capacidades-y-adapters-portables.md:89-91`.
- Sección o localizador: ver «Unidad y ubicación».
- Fecha de consulta/publicación: consulta 2026-09-25.
- Hecho observado:
  1. **`status` por entrada y `draft` por revisión.** S07 l. 48 enumera
     `status` y `revision` entre los metadatos que «Toda entrada declara». S07
     l. 53 dice que una modificación semántica «produce una revisión `draft`»,
     y ADR-006 l. 72 que «vuelven la revisión a `draft`». Ninguna línea dice si
     la revisión `stable` anterior conserva su estado ni si la entrada queda
     `draft` en conjunto (pregunta 4 de [B028](blocks/B028.md), sin respuesta
     en el destino).
  2. **`current` resuelve a una «revisión vigente» sin definirla.** S08 l. 90
     y l. 245-246: `current` resuelve el `knowledge_id` «hasta su revisión
     vigente» y registra la revisión resultante. «Vigente» no se define frente
     al lifecycle editorial: puede ser la última revisión (incluida una
     `draft`) o la última `stable`. ADR-007 punto 9 (l. 89-91) no lo precisa.
  3. **La regla de uso de `draft` no llega por la vía que S08 indica.** S07
     l. 80 («no puede presentarse como conocimiento reutilizable confirmado»)
     y l. 93-94 («puede apoyar investigación si se identifica como
     provisional») sólo están en la unidad. ADR-006 conserva la prohibición de
     depender de contenido `stale` (punto 6, l. 68-69) pero no la condición de
     uso de `draft`; S08 l. 248-249 remite a «las reglas de autoridad y
     vigencia de ADR-006». Un resolvedor que siga S08 puede entregar una
     revisión `draft` sin la obligación de marcarla provisional.
  4. **`current` es homónimo en el mismo objeto.** S07 l. 52 y ADR-006 l. 66
     usan `current` como valor de frescura derivada (`current`, `review_due`,
     `stale`); S08 l. 90 lo usa como modo de resolución (`exact`, `current`).
     Una referencia `current` puede resolver a una entrada con frescura
     `stale`. S08 exige reconciliar la frescura en ambos modos (l. 90), lo que
     evita la contradicción, pero ninguna nota distingue los términos.
  5. **El packet agrava la ambigüedad.** S07 l. 104-105: la sección
     `knowledge` referencia «el bundle, su revisión y las entradas
     seleccionadas». No dice si esas entradas se referencian en modo `exact` o
     `current`, de modo que un packet reutilizado tras reconciliar marcadores
     (S06 l. 47) puede pasar a apuntar a una revisión `draft` nueva.
- Inferencia (si aplica): con la lectura «última revisión», `current` entrega
  contenido no curado como vigente; con la lectura «última `stable`», una
  revisión `draft` en curso queda invisible para `current` y el consumidor no
  sabe que la entrada está en revisión. Ninguna de las dos está escrita.

## Observación y propuesta

- Observación: la resolución `current` del destino y el lifecycle editorial de
  S07 no se conectan: falta qué revisión es «vigente» y qué regla de uso de
  `draft` acompaña a la resolución.
- Propuesta concreta: que la persona decida (a) si `status` es por revisión
  (y entonces la revisión `stable` anterior sigue siéndolo) o por entrada;
  (b) si `current` resuelve a la última revisión `stable` no `deprecated`, a
  la última revisión con su `status` expuesto, o a una elección declarada por
  el consumidor; (c) que la regla de S07 l. 80 y l. 93-94 se aplique en la
  resolución, llevándola a ADR-006 o haciendo que S08 l. 249 remita a S07;
  (d) si la sección `knowledge` del packet referencia entradas en modo `exact`;
  (e) una nota que distinga `current` como frescura y como modo de resolución.
- Contraargumento o coste/riesgo: puede leerse que «vigente» significa
  «curada y no `deprecated`» y que la reconciliación de S08 l. 90 ya obliga a
  mirar el `status`. Pero ni S08 ni ADR-006 lo dicen, y ADR-006, citado como
  fuente por S08, omite la regla de `draft`. El coste son dos frases; el riesgo
  es que cada resolvedor elija una lectura distinta.

## Análisis adicional

- Evidencia interna: hechos 1-5; pregunta 2 de [CT01](blocks/CT01.md), que
  esta anotación eleva;
  [`REV-2026-087`](2026-09-25-REV-2026-087-decision-de-adr-006-resume-s07-sin-migracion-extensibilidad-de-tipos-disparadores-de-revision-ni-conciliacion-y-s08-aplica-sus-reglas.md)
  hecho 5 (S08 l. 249 aplica ADR-006; aquí se añade la regla de `draft`, no
  listada allí);
  [`REV-2026-059`](2026-09-25-REV-2026-059-frescura-derivada-de-las-entradas-sin-regla-de-derivacion-campo-actor-ni-deteccion-de-cambio-de-fuente-e-indice-raiz-la-expone-como-valor.md)
  (frescura sin regla de derivación);
  [`REV-2026-061`](2026-09-25-REV-2026-061-seccion-knowledge-del-packet-s07-solo-bundle-y-entradas-frente-a-s06-requisitos-y-decisiones-adr-005-la-marca-resuelta-y-adr-006-triada-distinta.md)
  (sección `knowledge`).
- Contraevidencia y límites: S08 l. 247-248 declara no resuelta una referencia
  si «cambia la aplicabilidad requerida», lo que no cubre un cambio de
  `status`. S08 y ADR-007 están fuera del alcance autorizado y se usan como
  destino; si S08 cambia (en curso según la decisión de la persona sobre
  `B001`), los hechos 2 y 3 deben recomprobarse.
- Pregunta para resolver: ¿a qué revisión resuelve una referencia `current`
  cuando existe una revisión `draft` posterior a una `stable`, y cómo recibe el
  consumidor la condición de uso provisional de `draft`?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [CT03](blocks/CT03.md), [CT01](blocks/CT01.md),
  [B028](blocks/B028.md)
