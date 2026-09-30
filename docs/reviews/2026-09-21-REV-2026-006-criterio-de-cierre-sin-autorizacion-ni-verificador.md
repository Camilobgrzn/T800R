# Anotación de revisión

- ID de anotación: `REV-2026-006`
- Unidad y ubicación: índice rector (bloque `B003`) —
  [Criterio de cierre de la definición](../product-definition.md#criterio-de-cierre-de-la-definición),
  cita distintiva: «La construcción puede comenzar cuando:»
  (`docs/product-definition.md:152`)
- Revisión examinada: estado del archivo al 2026-09-21 («Última actualización:
  2026-09-21», línea 6); repositorio sin commits, sin SHA disponible
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `media`
- Impacto: decide quién puede declarar cumplido el cierre y si el cumplimiento de
  la lista autoriza por sí mismo la construcción; afecta al veredicto de la
  sesión 12 y a la regla de cambio de fase de `AGENTS.md`

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (contradicción y omisión exclusivamente internas)
- Fuente primaria: fuentes internas; no aplica fuente externa
  - `docs/product-definition.md:150-165` (criterio de cierre)
  - `AGENTS.md:79-84` («Cambio de fase»)
  - `docs/product-definition.md:70` (fila de la sesión 12)
  - `docs/definition-tracker.md:5` (estado inicial)
- Sección o localizador: ver arriba
- Fecha de consulta/publicación: consultado el 2026-09-21
- Hecho observado:
  1. El índice rector formula el cierre como una lista de condiciones de estado:
     «La construcción puede comenzar cuando:» seguido de once condiciones
     (152-165). Ninguna menciona aprobación, autorización ni decisión de una
     persona.
  2. `AGENTS.md:81-82` exige dos cosas distintas: «completar los criterios de
     cierre de la definición **y** obtener aprobación explícita para comenzar la
     construcción».
  3. La sesión 12 tiene como resultado esperado «Especificación v0 y decisión de
     construir» (línea 70), y el tracker declara «construcción aún no autorizada»
     (`definition-tracker.md:5`).
  4. El criterio no indica quién comprueba cada condición, con qué evidencia ni
     dónde se registra el resultado. Varias condiciones son juicios sin artefacto
     ni umbral: objetivo y límite «inequívocos» (154), arquitectura
     «implementable» (160). Las sesiones cerradas sí registran su comprobación
     («El criterio de salida está cumplido…» en los anclajes `sNN-cierre`); el
     criterio global no tiene un equivalente previsto.
- Inferencia (si aplica): leído literalmente, el índice rector presenta la lista
  como condición suficiente, mientras que `AGENTS.md`, la sesión 12 y el tracker
  tratan la autorización como un acto separado. Un agente que aplique sólo el
  documento rector (que `AGENTS.md:21` llama «índice rector») podría concluir que
  la construcción queda habilitada al marcar las once condiciones, sin decisión
  humana registrada.

## Observación y propuesta

- Observación: el criterio de cierre omite la autoridad que lo verifica, la
  evidencia que lo acredita y la aprobación explícita que otros documentos exigen.
  No se duplica aquí lo ya anotado sobre dos condiciones concretas:
  [REV-2026-004](2026-09-21-REV-2026-004-preguntas-abiertas-sin-disposicion.md)
  (condición de la línea 164, incógnitas sin estado ni destino) y
  [REV-2026-005](2026-09-21-REV-2026-005-revision-transversal-sin-rastro-s05-s07.md)
  (condición de las líneas 162-163, revisión transversal). Este hallazgo se
  refiere al criterio en su conjunto.
- Propuesta concreta (para decisión humana, sin editar el canon):
  1. Añadir como condición, o como frase de cierre de la sección, que la
     construcción requiere aprobación explícita de la persona registrada en la
     sesión 12, alineando el índice con `AGENTS.md:81-82`.
  2. Indicar dónde se registra la comprobación global (por ejemplo, una tabla
     condición → sesión/artefacto que la acredita → estado en el cierre de la
     sesión 12), análoga a los `sNN-cierre`.
  3. Para las condiciones de juicio («inequívocos», «implementable»), señalar el
     artefacto que sirve de evidencia (product charter y modelo de
     responsabilidades; arquitectura técnica y ADRs de la sesión 11).
- Contraargumento o coste/riesgo: «puede comenzar cuando» admite lectura como
  condición necesaria y no suficiente; con un único usuario-autor, la aprobación
  es implícita en su participación y una tabla de acreditación añade ceremonia. La
  sesión 12 puede definir por sí misma esa comprobación cuando llegue. El coste de
  la propuesta es bajo (una frase y una tabla), pero adelanta contenido de S12.

## Análisis adicional

- Evidencia interna:
  [criterio de cierre](../product-definition.md#criterio-de-cierre-de-la-definición);
  [AGENTS.md, «Cambio de fase»](../../AGENTS.md);
  [plan de sesiones, fila 12](../product-definition.md#sesiones-de-definición);
  [estado del tracker](../definition-tracker.md).
- Contraevidencia y límites: no hay contradicción lógica estricta si la lista se
  lee como necesaria; la anotación demuestra una omisión y una divergencia de
  formulación entre dos documentos normativos, no un fallo ya ocurrido. No se
  examinó si la unidad S12 existe (no existe aún en `docs/definition/`) ni el
  resto de `definition-tracker.md`, que queda fuera de la lectura autorizada.
- Pregunta para resolver: ¿el cumplimiento de las once condiciones autoriza la
  construcción, o hace falta además una aprobación explícita registrada? En ese
  caso, ¿quién comprueba cada condición y dónde queda la evidencia?

## Nota de vigencia (2026-09-25, pasada 2 de `B003`)

- Resultado: **vigente, atenuada en parte**; no se cierra. El estado sigue
  `propuesto` hasta la disposición humana.
- Base comparada: `docs/product-definition.md` de 204 líneas («Última
  actualización: 2026-09-24», l. 6). Citas recalculadas, con el contenido
  arriba conservado: criterio en l. 146-163 (antes 150-165); «La construcción
  puede comenzar cuando:» en l. 148 (antes 152); «inequívocos» en l. 150
  (antes 154); «implementable» en l. 158 (antes 160); revisión transversal en
  l. 160-161 (antes 162-163); incógnitas en l. 162 (antes 164). La fila 12 del
  plan sigue en l. 70 con el mismo texto. `AGENTS.md:79-84` y
  `docs/definition-tracker.md:5` no cambiaron. El criterio tiene hoy **doce**
  condiciones, no once: se añadió la de adopción (l. 155-156; ver la nota de
  `REV-2026-007`). Sigue sin mencionar aprobación, verificador ni evidencia.
- Atenuaciones (hechos nuevos):
  1. **Lugar y forma de la autorización.** S12, `in_progress`, pregunta «¿Se
     cumplen todos los criterios para autorizar explícitamente la
     construcción?» (l. 41) y exige que su cierre registre «de forma explícita
     si la construcción queda autorizada o continúa prohibida» (l. 49-50). S11
     l. 50 dice que «no se autorizará construcción hasta completar la sesión
     12», y el tracker de definición l. 22-23, que la construcción «sólo puede
     aprobarse explícitamente al cerrar S12». Ya existe, pues, un lugar de
     registro para la decisión global. Esto cubre en parte la propuesta 2 y la
     pregunta «dónde queda la evidencia».
  2. S12 exige además «reglas de decisión explícitos» (l. 45-46) y rechaza
     certificar por revisión documental conductas observables sólo en ejecución
     (l. 57), lo que limita la lectura de «implementable» como juicio libre.
- Residuo vigente:
  1. El índice sigue formulando la lista como suficiente (l. 148) y no remite a
     la aprobación ni a S12. La alineación con `AGENTS.md:81-82` existe sólo
     fuera del índice rector.
  2. Nadie dice **quién** aprueba. S12 l. 49-50 y el tracker l. 22-23 usan la
     voz pasiva («queda autorizada», «aprobarse»), igual que `AGENTS.md:81-82`.
  3. No hay correspondencia condición → artefacto → verificador. El patrón de
     cierre de S01-S11 indica cómo se haría hoy esa comprobación: cada sesión se
     declara cumplida con «El criterio de salida está cumplido», una
     reformulación del criterio y, en S04-S11, una afirmación de no bloqueo o
     de coherencia sin enumerar (`REV-2026-011`, `016`, `024`, `034`, `044`,
     `053`, `062`; confirmado en S08 l. 400-412, S09 l. 106-119, S10 l. 154-174
     y S11 l. 212-231, que auditan contra ADRs y no contra las unidades, como
     documentó `REV-2026-097`). S12 l. 41 pregunta si «se cumplen todos los
     criterios», pero no dice si son los doce del índice, los de su propio
     criterio de salida (l. 45-50) o ambos.
- Hecho relacionado, registrado aparte: la condición de pruebas (l. 159) no
  distingue entre pruebas especificadas y superadas, y S08-S11 asignan a S12
  una ejecución que S12 l. 56-57 aplaza a un gate posterior:
  [`REV-2026-100`](2026-09-25-REV-2026-100-s08-a-s11-asignan-a-s12-ejecutar-y-certificar-conformidad-tras-autorizar-la-construccion-que-s12-convierte-en-gate-posterior-sin-marca.md).
- Límite: S12 sigue `in_progress` y su cierre puede resolver el residuo. Si
  modifica el índice, `B003` vuelve a `stale`.

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: <pendiente>
