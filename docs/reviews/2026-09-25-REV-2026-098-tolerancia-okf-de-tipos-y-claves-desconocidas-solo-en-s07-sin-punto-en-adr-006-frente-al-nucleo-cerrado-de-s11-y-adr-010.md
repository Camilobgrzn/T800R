# Anotación de revisión

- ID de anotación: `REV-2026-098`
- Unidad y ubicación: `S07` — [«Decisiones»](../definition/session-07-knowledge.md#decisiones)
  (filas «Perfil de representación» l. 40, «Versionado de OKF» l. 41, «Forma
  de la taxonomía» l. 43, «Estructura de metadatos» l. 47 y «Requisitos por
  tipo» l. 49), frente a [ADR-006 «Decisión»](../adr/ADR-006-modelo-portable-de-conocimiento.md#decisión)
  (puntos 1, 3 y 4, l. 48-60) y «Puntos abiertos» l. 98. Destino usado como
  evidencia (fuera del alcance autorizado, como consumidor):
  [S11](../definition/session-11-mvp-architecture.md) l. 69, 72-73, 109 y 115, y
  [ADR-010](../adr/ADR-010-arquitectura-tecnica-del-mvp.md) punto 4 (l. 124-127)
  y «Referencias» (l. 198-209). Cruce `CT06`.
- Revisión examinada: estado de los archivos al 2026-09-25 (repositorio sin
  commits; S07 y ADR-006 fechados 2026-09-21; S11 cerrada según el tracker de
  definición l. 348). Citas distintivas: «los consumidores deben tolerar tipos
  desconocidos según OKF» (S07 l. 43); «Los objetos contractuales rechazan
  propiedades desconocidas en su núcleo» (S11 l. 72); «El núcleo de cada objeto
  es cerrado y sólo admite extensiones namespaced registradas» (ADR-010 l. 124-125).
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos textuales y la cita de OKF; `media` sobre
  el efecto, porque el schema `knowledge-entry` aún no existe y un mapeo de
  front matter podría conservar las claves desconocidas fuera del núcleo.
- Impacto: si un consumidor T800R conforme a S11/ADR-010 rechaza entradas OKF
  con tipos o claves de front matter que no reconoce. OKF v0.2, la base que S07
  y ADR-006 declaran, prohíbe ese rechazo. El resultado decide si la
  compatibilidad con OKF que afirman S07 l. 40 y ADR-006 punto 1 incluye el
  papel de consumidor, cómo se representan en el schema los tipos que añade un
  proyecto (S07 l. 43) y si puede registrarse un bundle con esos tipos. No
  cambia ninguna fila aceptada.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado`.
- Fuente primaria:
  1. OKF, `SPEC.md` en el commit fijado por S07 l. 58-59 y ADR-006 l. 48-49,
     <https://raw.githubusercontent.com/GoogleCloudPlatform/open-knowledge-format/ad30107c31c06aec8a7d5636e0d1058118604e6f/SPEC.md>
     (Version 0.2), consultado el 2026-09-25 con una pregunta distinta de la de
     `B027`/`B044`: el trato de las claves desconocidas. Citas del contenido
     devuelto:
     - §4.1: «Producers MAY include any additional keys. Consumers SHOULD
       preserve unknown keys when round-tripping and MUST NOT reject documents
       with unrecognized fields».
     - §4.1: «consumers MUST tolerate unknown types gracefully, typically by
       treating them as generic concepts». Ya la había citado `B044` en
       `REV-2026-086`.
     - §11 (Conformance): «Consumers MUST NOT reject a bundle because of: -
       Unknown `type` values», «- Unknown additional frontmatter keys» y «-
       Missing optional frontmatter fields».

     Fuerza `alta`: es la especificación en el commit fijado. Pertinencia
     directa a S07 l. 40-43. Límite: lectura mediada por extracción, no el
     archivo bruto.
  2. Internas: `docs/definition/session-07-knowledge.md:40-49, 58-62` (lectura
     completa de la unidad); `docs/adr/ADR-006-modelo-portable-de-conocimiento.md:1-106`
     (completo); `docs/definition/session-11-mvp-architecture.md:69-74, 105-119`;
     `docs/adr/ADR-010-arquitectura-tecnica-del-mvp.md:120-135, 180-209`;
     `docs/definition-tracker.md:194-201`. Búsquedas: «ADR-006|sesión 7|S07» en
     `docs/definition/` (S11 sin coincidencias) y
     «conocimiento|knowledge|OKF|Hindsight|front matter» en ADR-010 (l. 43, 112,
     126, 130, 185, 201; sin ADR-006 ni S07).
- Sección o localizador: ver «Unidad y ubicación».
- Fecha de consulta/publicación: consulta el 2026-09-25; OKF fechado el
  2026-08-21 según la investigación de OKF (l. 23-24).
- Hecho observado:
  1. **La regla de consumo de OKF está sólo en S07.** S07 l. 43 hace
     extensible el núcleo «por cada proyecto» y exige que «los consumidores
     deb[a]n tolerar tipos desconocidos según OKF». S07 l. 47 prevé «campos
     específicos por tipo», y l. 49 limita la estructura adicional a `domain`,
     las referencias de evidencia y el asunto. Ninguna de las tres reglas
     figura en la «Decisión» de ADR-006 (`REV-2026-087` hechos 1 y 4). El
     resumen del tracker de definición (l. 198-201) conserva la
     extensibilidad, pero no la tolerancia.
  2. **El receptor de la representación física no cita ni S07 ni ADR-006.**
     ADR-006 l. 98 envía la «Representación física» a la sesión 11. S11 no
     menciona «sesión 7», S07 ni ADR-006. La lista de «Referencias» de ADR-010
     (l. 200-206) enlaza ADR-002, 003, 005, 007, 008 y 009, pero no ADR-006.
  3. **El destino adopta la regla contraria para todos los objetos
     contractuales.** S11 l. 72: «Los objetos contractuales rechazan
     propiedades desconocidas en su núcleo». La extensibilidad pasa por un
     contenedor `extensions` «con claves namespaced, propietario, aplicabilidad
     y schema registrado». S11 l. 73 rechaza los objetos abiertos porque
     «confundirían evolución con tolerancia silenciosa». S11 l. 69 hace que el
     front matter pase «el mismo schema». S11 l. 115 incluye `knowledge-entry`
     y `knowledge-bundle` en el catálogo, y ADR-010 punto 4 asigna «Markdown
     con front matter, a OKF» bajo un «núcleo … cerrado».
  4. **OKF prohíbe a los consumidores ese rechazo.** OKF §4.1 y §11 (fuente 1)
     prohíben rechazar un documento o un bundle por un `type` desconocido, por
     claves de front matter no reconocidas o por campos opcionales ausentes, y
     piden preservar las claves desconocidas al reescribir. Un consumidor que
     valide el front matter contra un núcleo cerrado rechaza lo que OKF manda
     aceptar.
  5. **Nada fija la dirección de la compatibilidad ni la forma de un tipo de
     proyecto.** S07 l. 40 y ADR-006 punto 1 dicen «perfil lógico compatible con
     OKF v0.2», pero no dicen si T800R es compatible como productor (sus
     bundles son OKF válido), como consumidor, o como ambos. S07 l. 43 impone
     al menos una obligación de consumidor. Ningún texto leído dice si `type`
     es un valor abierto o una enumeración en `knowledge-entry`, ni si los
     campos de un tipo añadido por un proyecto viven en `extensions` con schema
     registrado. Tampoco dice qué hace el consumidor con una clave OKF ajena
     que no esté en ese espacio de nombres.
- Inferencia (si aplica): la regla de S07 que protege la compatibilidad de
  consumo no llegó al ADR, y el receptor técnico, que no cita la unidad ni el
  ADR, fijó una política general de núcleo cerrado sin excepción para OKF. Si
  se aplica al pie de la letra, un tipo de proyecto o un bundle OKF con claves
  adicionales se rechaza o exige un schema registrado. Eso contradice S07 l. 43
  y la compatibilidad declarada con OKF v0.2 en el papel de consumidor.

## Observación y propuesta

- Observación: es un defecto que sólo aparece al cruzar. En S07 la regla
  existe, en ADR-006 no, y el destino que recibió la representación desde el
  ADR (l. 98) adoptó la regla contraria sin citar ninguno de los dos.
- Propuesta concreta: que la persona decida:
  - (a) si la compatibilidad con OKF v0.2 incluye el papel de consumidor y
    para qué objetos: entradas del propio proyecto, bundles registrados de
    otros ámbitos, bundles OKF ajenos;
  - (b) si el schema `knowledge-entry` trata `type` como valor abierto y
    separa las claves OKF desconocidas del núcleo cerrado, preservándolas
    según OKF §4.1, o si T800R declara que no es consumidor OKF conforme y lo
    dice en S07/ADR-006;
  - (c) cómo declaran sus campos específicos los tipos añadidos por un
    proyecto, dentro de `extensions` o de otro modo, respetando S07 l. 49;
  - (d) si la «Decisión» de ADR-006 debe recoger la regla de S07 l. 43 (véase
    `REV-2026-087`) y si S11/ADR-010 deben enlazar S07 o ADR-006.

  No editar S07, ADR-006, S11 ni ADR-010 sin esa decisión.
- Contraargumento o coste/riesgo:
  - «Propiedad desconocida» puede referirse al objeto contractual tras el
    parseo y no a la sintaxis OKF. Un adaptador de lectura podría mover las
    claves desconocidas a una zona tolerada.
  - `type` puede definirse como cadena abierta, sin conflicto con S07 l. 43.
  - S11 l. 109 exige que la inspección «resuelva … perfil» antes de registrar
    conocimiento existente, lo que sugiere que T800R conforma primero lo
    ajeno.

  Ninguna de esas lecturas está escrita. El coste es fijarlo antes de
  construir el schema: una o dos frases en S07/ADR-006 y una excepción o regla
  de mapeo en S11. El riesgo de no hacerlo es declarar compatibilidad OKF sin
  poder demostrarla en las pruebas de conformidad de S12.

## Análisis adicional

- Evidencia interna: hechos 1-5 con sus localizadores. Enlazadas sin duplicar:
  - [`REV-2026-087`](2026-09-25-REV-2026-087-decision-de-adr-006-resume-s07-sin-migracion-extensibilidad-de-tipos-disparadores-de-revision-ni-conciliacion-y-s08-aplica-sus-reglas.md):
    la regla no está en la «Decisión». Aquí se añade el efecto en el destino.
  - [`REV-2026-086`](2026-09-25-REV-2026-086-homonimo-concept-de-okf-y-tipo-concept-del-nucleo-sin-nota-tolerancia-de-tipos-desconocidos-como-generic-concepts-y-adr-006-sin-glosario.md):
    homónimo `concept` y tolerancia de tipos. Su límite, «no se examinó si S11
    o ADR-010 fijan el tratamiento de tipos desconocidos», queda contestado
    aquí.
  - [`REV-2026-085`](2026-09-25-REV-2026-085-alternativas-de-adr-006-sin-costes-justificaciones-circulares-contrato-propio-reformulado-y-metadatos-vigencia-e-indices-sin-alternativas.md)
    hecho 3: el riesgo de versión y de compatibilidad no se ponderó.
  - Pregunta 3 de [CT03](blocks/CT03.md): bundles OKF ajenos.
- Contraevidencia y límites:
  - S11 y ADR-010 están fuera del alcance autorizado y se usan como receptores
    de ADR-006 l. 98. No se leyó S11 completa: sólo l. 69-74, 105-119 y las
    búsquedas indicadas. S12 sigue `in_progress` y podría fijar la
    conformidad OKF.
  - No se afirma que el schema `knowledge-entry` exista ni cómo está escrito.
  - La especificación se leyó mediante extracción del contenido devuelto.
- Pregunta para resolver: ¿T800R es consumidor conforme de OKF v0.2 para sus
  bundles y los ajenos? Si lo es, ¿cómo concilia el schema `knowledge-entry`
  el núcleo cerrado de S11 l. 72 con OKF §4.1/§11 y con la extensibilidad de
  tipos de S07 l. 43?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [CT06](blocks/CT06.md), [CT03](blocks/CT03.md),
  [B044](blocks/B044.md), [B045](blocks/B045.md)

## Preguntas pendientes

Ver el checkpoint [CT06](blocks/CT06.md).

## Cobertura y límites

Ver el checkpoint [CT06](blocks/CT06.md). Fuentes externas: OKF `SPEC.md` en
el commit fijado, consultada el 2026-09-25.
