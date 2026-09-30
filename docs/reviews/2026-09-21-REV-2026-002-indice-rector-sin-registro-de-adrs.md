# Anotación de revisión

- ID de anotación: `REV-2026-002`
- Unidad y ubicación: índice rector —
  [product-definition.md, «Unidades canónicas y compatibilidad»](../product-definition.md#unidades-canónicas-y-compatibilidad),
  líneas 72-88, con contexto en líneas 12-14 y 47-48 (bloque `B001`)
- Revisión examinada: `docs/product-definition.md` con «Última actualización:
  2026-09-21» (línea 6); sin commit disponible en el repositorio
- Tipo: `mejora`
- Gravedad: `baja`
- Estado: `deferred`
- Confianza: `alta`
- Impacto: descubribilidad de seis decisiones transversales ya aceptadas desde el
  documento declarado como punto de entrada del plan.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión interna comprobada por búsqueda)
- Fuente primaria:
  - [`docs/product-definition.md`](../product-definition.md), archivo completo
    (búsqueda de la cadena `ADR`: coincidencias sólo en líneas 14, 30, 47 y 69,
    ninguna con identificador `ADR-0NN` ni enlace a `adr/`).
  - Directorio [`docs/adr/`](../adr): `ADR-001-autonomia-y-responsabilidades.md`,
    `ADR-002-fuentes-canonicas-y-conocimiento.md`,
    `ADR-003-ciclo-operativo-y-coordinacion.md`,
    `ADR-004-contrato-portable-de-handoffs.md`,
    `ADR-005-contrato-portable-de-contexto.md`,
    `ADR-006-modelo-portable-de-conocimiento.md`.
- Sección o localizador: tabla «Unidades canónicas y compatibilidad»
  (líneas 79-87), que enlaza S01-S07 y sus cierres pero ninguna decisión
  arquitectónica; paso 5 del protocolo de sesiones (líneas 47-48).
- Fecha de consulta/publicación: consulta 2026-09-21; índice rector fechado
  2026-09-21; ADR-004 fechado 2026-09-16.
- Hecho observado: el índice rector menciona los ADRs cuatro veces y siempre en
  futuro o condicional («se registrarán además como ADRs», «Crear un ADR sólo
  cuando…») y, en la tabla de sesiones, sitúa «Arquitectura técnica y ADRs» como
  resultado esperado de la sesión 11 (línea 69). No contiene ningún enlace al
  directorio `docs/adr/` ni ningún identificador `ADR-001`…`ADR-006`, pese a que
  esos seis archivos existen y ADR-004 figura como «Aceptada».
- Inferencia: un lector que entre por el índice rector puede concluir que aún no
  hay ADRs vigentes o que llegarán en la sesión 11.

## Observación y propuesta

- Observación: la tabla de unidades canónicas es el mapa de navegación de lo ya
  decidido y omite el registro de decisiones transversales aceptadas; el índice
  tampoco corrige el tiempo verbal («se registrarán») pese a que ya existen seis.
- Propuesta concreta: añadir a la sección «Unidades canónicas y compatibilidad»
  una columna o una tabla breve con los ADRs vigentes y su sesión de origen, o
  al menos un enlace a `adr/` con un índice propio; y ajustar el tiempo verbal de
  la línea 14 para reflejar que ya existen ADRs aceptados.
- Contraargumento o coste/riesgo: la navegabilidad no está rota en la práctica.
  `docs/definition-tracker.md` menciona ADRs 15 veces y seis de las siete
  unidades canónicas (S02-S07) los enlazan, por lo que el flujo de lectura
  prescrito en `AGENTS.md` (tracker → índice → unidad) sí llega a ellos. Coste:
  una tabla adicional que debe mantenerse sincronizada, creando otro punto de
  desincronización como el señalado en `REV-2026-003`.

## Análisis adicional

- Evidencia interna: [índice rector](../product-definition.md) líneas 12-14,
  47-48 y 72-88; [ADR-004](../adr/ADR-004-contrato-portable-de-handoffs.md)
  líneas 1-4.
- Contraevidencia y límites: sólo se ha comprobado la ausencia de referencias a
  ADRs en `docs/product-definition.md` mediante búsqueda de la cadena `ADR`, y la
  presencia de referencias en el tracker de definición y en las unidades
  S02-S07 mediante recuento de coincidencias `ADR-00N`, sin abrir esos pasajes.
  No se ha verificado el contenido, estado ni vigencia de cada ADR; tampoco si
  `docs/adr/` tiene índice propio (no se observó ningún `README.md` en ese
  directorio al listar sus archivos).
- Pregunta para resolver: ¿el índice rector debe enumerar los ADRs vigentes o se
  prefiere mantener un único punto de enumeración (tracker o `docs/adr/`) para
  evitar duplicar estado?

## Preguntas pendientes

- ¿Por qué S01 no enlaza ningún ADR mientras S02-S07 sí lo hacen? Puede ser
  correcto (ADR-001 nace en S02) o indicar una referencia faltante; no se ha
  examinado S01 en este bloque.

## Cobertura y límites

- Documentos leídos: `docs/product-definition.md:1-88` más búsqueda de `ADR` en
  el archivo completo; listado de `docs/adr/`;
  `docs/adr/ADR-004-contrato-portable-de-handoffs.md:1-28`;
  `docs/definition/README.md`; `docs/definition-tracker.md:1-12`; `AGENTS.md`.
- Fuentes externas consultadas: ninguna; el problema es exclusivamente interno.
- Partes no examinadas: `docs/product-definition.md:89-191`, contenido de
  ADR-001, ADR-002, ADR-003, ADR-005 y ADR-006, y las unidades S01-S07.

## Nota de vigencia (2026-09-25, pasada 2 de `B001`)

- Resultado: **sigue vigente y ampliada**; no se cierra.
- Base comparada: `docs/product-definition.md` de 204 líneas, «Última
  actualización: 2026-09-24» (l. 6). La búsqueda de `ADR` en el archivo
  completo sigue devolviendo sólo l. 14, 30, 47 y 69, sin ningún `ADR-0NN` ni
  enlace a `adr/`. La l. 14 conserva el futuro («se registrarán además como
  ADRs») y la fila de S11 (l. 69) sigue situando «Arquitectura técnica y ADRs»
  como resultado de esa sesión.
- Cambio de contexto: `docs/adr/` contiene ahora diez ADRs (ADR-001 a
  ADR-010), y la tabla «Unidades canónicas y compatibilidad» (l. 79-92) enlaza
  ya las unidades y cierres de S01-S11 más S12, pero ninguno de ellos. La
  brecha de descubribilidad ha crecido de seis a diez decisiones. Sigue sin
  existir `docs/adr/README.md`.
- Pregunta pendiente de la anotación («¿Por qué S01 no enlaza ningún ADR?»):
  respondida por `CT04` (disposición de `REV-2026-011`): S01 no tiene ADR y
  ningún ADR enlaza S01. No es un enlace faltante.
- Límite: S12 sigue `in_progress` y su resultado esperado incluye la
  «Especificación v0» (l. 70); podría reorganizar el índice.

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [checkpoint B001](blocks/B001.md), `REV-2026-001`,
  `REV-2026-003`
