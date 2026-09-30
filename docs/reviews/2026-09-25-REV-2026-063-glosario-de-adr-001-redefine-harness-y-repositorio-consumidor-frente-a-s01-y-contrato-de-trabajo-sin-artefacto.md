# Anotación de revisión

- ID de anotación: `REV-2026-063`
- Unidad y ubicación: `ADR-001` — [«Glosario rápido»](../adr/ADR-001-autonomia-y-responsabilidades.md#glosario-rápido),
  `docs/adr/ADR-001-autonomia-y-responsabilidades.md:12-17`, frente a `S01` —
  [«Glosario inicial»](../definition/session-01-vision.md#glosario-inicial),
  `docs/definition/session-01-vision.md:157-170`, y a `S02` —
  [«Decisiones»](../definition/session-02-limits.md#decisiones), l. 29. Bloque `B030`.
- Revisión examinada: estado de los archivos al 2026-09-25 (repositorio sin
  commits; ADR-001 fechado 2026-09-14, S02 comprobada el 2026-09-14). Citas
  distintivas: «**Harness:** conjunto de reglas, contexto y mecanismos que orienta
  y coordina el trabajo de los agentes» (ADR-001 l. 14); «**Contrato de
  trabajo:** acuerdos explícitos que orientan una tarea y permiten comprobar su
  entrega; sus formatos aún están por definir» (l. 17).
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos; `media` sobre el impacto
- Impacto: qué definición de «harness» y de «repositorio consumidor» aplica un
  agente o un revisor (la del glosario aceptado de S01 o la del ADR aceptado), y
  qué artefacto cumple la obligación `accepted` de S02 l. 29 de «preparar y
  validar sus contratos de trabajo», que sólo tiene definición en el ADR.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (divergencia exclusivamente interna; no requiere
  fuente externa según [README](README.md)).
- Fuente primaria: `docs/adr/ADR-001-autonomia-y-responsabilidades.md:8, 12-17,
  46, 53-54`; `docs/definition/session-01-vision.md:161, 165, 170`;
  `docs/definition/session-02-limits.md:13-14, 29, 46-48`;
  `docs/definition/session-05-handoffs.md:7, 54` (por búsqueda); búsqueda de
  «contratos? de trabajo» y de las entradas del glosario en `docs/` fuera de
  `reviews/`.
- Sección o localizador: ver «Unidad y ubicación».
- Fecha de consulta/publicación: consulta 2026-09-25; ADR y S02 fechados
  2026-09-14.
- Hecho observado:
  1. **«Harness» con dos definiciones.** S01 l. 161 (glosario «Significado
     acordado»): «Conjunto de instrucciones, convenciones y herramientas que
     guía cómo los agentes obtienen contexto, ejecutan, coordinan y dejan
     constancia del trabajo». ADR-001 l. 14: «conjunto de reglas, contexto y
     mecanismos que orienta y coordina el trabajo de los agentes». En S01 los
     agentes coordinan guiados por el harness; en el ADR el harness coordina
     el trabajo de los agentes. El ADR omite además «dejan constancia del
     trabajo», el componente que sostiene el caso de uso 2 (cerrar y retomar).
     Son las dos únicas definiciones del término en `docs/` fuera de
     `reviews/`.
  2. **«Repositorio consumidor» con dos definiciones.** S01 l. 170:
     «Repositorio que incorpora T800R y aporta sus reglas, conocimiento y
     validaciones particulares». ADR-001 l. 16: «proyecto que incorpora T800R y
     aporta código, reglas, documentación y validaciones particulares». El ADR
     sigue la tabla de S02 l. 46-48 («reglas, documentación, restricciones y
     mecanismos de validación»; «el código»), no el glosario de S01, y cambia
     «conocimiento» por «documentación».
  3. **«Contrato de trabajo» sólo se define en el ADR y no llega a ningún
     artefacto.** La expresión aparece en S02 l. 14 (punto de entrada) y l. 29
     (decisión `accepted`: «T800R ejecutará y supervisará agentes, además de
     preparar y validar sus contratos de trabajo») y en el ADR l. 8, 17, 46 y
     53-54. Ninguna unidad de S03 a S12 usa la expresión (búsqueda en
     `docs/definition/`); el único otro uso es
     `docs/research-orchestrator-responsibilities.md` l. 50. S05 llama
     «contrato» a `handoff/v1` (l. 7, 54) sin decir que sea el contrato de
     trabajo, y la definición del ADR («orientan una tarea y permiten comprobar
     su entrega») coincide más con «Spec» de S01 l. 165 («describe el resultado
     esperado y los criterios que debe cumplir una tarea») que con un handoff.
     El ADR mantiene «sus formatos aún están por definir» (l. 17).
  4. Ni el ADR ni S01 dicen cuál de los dos glosarios prevalece. El ADR no
     remite a S01 en l. 1-69 (no aparecen «sesión 1», «S01» ni «glosario
     inicial»).
- Inferencia (si aplica): el ADR fija, como glosario de una decisión
  «Aceptada», el significado ampliado de «harness» que la decisión de S02
  requiere, mientras el glosario canónico de S01 conserva el anterior; es la
  misma ampliación de [`REV-2026-013`](2026-09-21-REV-2026-013-alcance-autonomo-sin-caso-de-uso-ni-objetivo-observable.md)
  (hecho 5, lado S01) registrada ahora en el ADR como definición. Es además una
  divergencia concreta ADR/unidad del tipo que
  [`REV-2026-001`](2026-09-21-REV-2026-001-precedencia-adr-unidad-canonica.md)
  no había observado.

## Observación y propuesta

- Observación: la diferencia en «harness» no es de estilo: decide si la
  coordinación es una propiedad de los agentes guiados (S01, caso de uso 3 l.
  99-101: «los agentes … coordinan sus cambios») o una función del harness/T800R
  (ADR). La obligación de S02 l. 29 de preparar y validar «contratos de trabajo»
  no es comprobable mientras no se sepa qué artefacto la cumple.
- Propuesta concreta: que la persona decida (a) si el «Glosario rápido» de los
  ADR es una ayuda de lectura subordinada al glosario de S01 (y lo diga una
  frase) o si el glosario de S01 debe recoger la ampliación de S02 con nota de
  fecha; (b) a qué artefacto o artefactos corresponde «contrato de trabajo»
  (spec, `handoff/v1`, context packet o un término paraguas) y dónde consta ese
  mapeo, o si la expresión se retira de S02 l. 29 a favor de los términos
  posteriores. No editar S01, S02 ni ADR-001 sin esa decisión.
- Contraargumento o coste/riesgo: un glosario «rápido» se lee razonablemente
  como explicativo y no normativo; la ampliación de «harness» se deriva de una
  decisión `accepted` de S02, así que el ADR podría ser el más fiel de los dos;
  «contrato de trabajo» puede ser un término paraguas deliberado cuya
  materialización el propio ADR remite a la sesión 5 (l. 117, bloque `B031`).
  El coste es una frase por glosario y una decisión de mapeo.

## Análisis adicional

- Evidencia interna: hechos 1-4 con sus localizadores.
- Contraevidencia y límites: no se leyeron S03-S12 más allá de la búsqueda de la
  expresión; alguna unidad podría mapear el concepto con otra redacción
  («contrato» aparece 139 veces en `docs/definition/`, casi siempre para
  `handoff/v1`, el contrato de contexto o el contrato común de adapters). Si
  «Proveedor» y «Contrato de trabajo» sólo existen en el ADR, el glosario de S01
  queda incompleto, pero eso sólo es defecto si se decide que el de S01 es el
  vigente. «Proveedor» (l. 15) es coherente con S01 l. 162 y S02 l. 44.
- Pregunta para resolver: ¿qué glosario prevalece para «harness» y «repositorio
  consumidor», y qué artefacto cumple la obligación de preparar y validar
  «contratos de trabajo» de S02 l. 29?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B030](blocks/B030.md),
  [`REV-2026-001`](2026-09-21-REV-2026-001-precedencia-adr-unidad-canonica.md),
  [`REV-2026-013`](2026-09-21-REV-2026-013-alcance-autonomo-sin-caso-de-uso-ni-objetivo-observable.md),
  [`REV-2026-016`](2026-09-21-REV-2026-016-cierre-s02-reformula-quien-ejecuta-y-afirma-no-bloqueo.md),
  cruce `CT04`.

## Preguntas pendientes

Ver el checkpoint [B030](blocks/B030.md).

## Cobertura y límites

Ver el checkpoint [B030](blocks/B030.md). Fuentes externas: ninguna; el
problema es interno.
