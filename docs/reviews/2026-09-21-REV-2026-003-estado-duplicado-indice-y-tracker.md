# Anotación de revisión

- ID de anotación: `REV-2026-003`
- Unidad y ubicación: índice rector —
  [product-definition.md, «Estado»](../product-definition.md#estado), líneas 3-9
  (bloque `B001`)
- Revisión examinada: `docs/product-definition.md` con «Última actualización:
  2026-09-21» (línea 6); sin commit disponible en el repositorio
- Tipo: `mejora`
- Gravedad: `baja`
- Estado: `deferred`
- Confianza: `media`
- Impacto: qué documento decide la sesión en curso si el índice rector y el
  tracker de definición declaran estados distintos.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (duplicación interna comprobada)
- Fuente primaria:
  - [`docs/product-definition.md`](../product-definition.md) líneas 3-9.
  - [`docs/definition-tracker.md`](../definition-tracker.md) líneas 3-11.
  - [`docs/definition/README.md`](../definition/README.md) líneas 18-21.
  - [`AGENTS.md`](../../AGENTS.md) líneas 14-23.
- Sección o localizador: sección «Estado» del índice rector frente a «Estado
  actual» del tracker de definición.
- Fecha de consulta/publicación: consulta 2026-09-21; ambos documentos declaran
  «Última actualización: 2026-09-21».
- Hecho observado: el índice rector declara «Última sesión completada: 7 —
  conocimiento» y «Próxima sesión: 8 — portabilidad (`ready`)» (líneas 7-8); el
  tracker declara «Avance: 7 de 12 sesiones completadas» y «Próxima sesión: 8 —
  portabilidad (`ready`)» (líneas 6-7). Hoy los valores coinciden. `AGENTS.md`
  ordena leer «`docs/definition-tracker.md` para conocer la sesión y la próxima
  acción» y después el índice rector, pero ninguno de los dos declara cuál
  prevalece si divergen. `docs/definition/README.md` afirma «No existe un
  registro duplicado», enunciado que se cumple para los acuerdos pero no para el
  estado de avance.
- Inferencia: el mismo dato operativo vive en dos archivos que se actualizan por
  separado, sin regla de precedencia escrita; la coincidencia actual no garantiza
  la futura.

## Observación y propuesta

- Observación: la duplicación del estado de avance entre índice rector y tracker
  es un punto de desincronización silenciosa: un agente que aplique el orden de
  lectura de `AGENTS.md` podría trabajar sobre el valor del índice rector si lo
  lee después y difiere.
- Propuesta concreta: declarar en la sección «Estado» del índice rector que el
  tracker es la fuente de verdad del avance y que este bloque es un reflejo
  informativo; alternativamente, sustituir las líneas 7-8 por el enlace al
  tracker y dejar en el índice sólo fase y fecha.
- Contraargumento o coste/riesgo: la redundancia tiene valor de usabilidad —
  quien abre el índice rector ve el estado sin otro salto — y el enlace a
  `definition-tracker.md` de la línea 9 ya sugiere dónde está el seguimiento. El
  riesgo observado es potencial, no actual: hoy ambos coinciden y no se ha
  documentado ningún caso de divergencia.

## Análisis adicional

- Evidencia interna: [índice rector](../product-definition.md) líneas 3-9;
  [tracker de definición](../definition-tracker.md) líneas 3-11;
  [README de definición](../definition/README.md) líneas 18-21.
- Contraevidencia y límites: sólo se leyeron las 12 primeras líneas del tracker
  de definición, conforme a la preparación obligatoria del editor adversarial;
  es posible que el propio tracker declare más abajo su precedencia sobre el
  índice. Ese pasaje no se ha leído y el hallazgo no lo presume resuelto.
- Pregunta para resolver: ¿el tracker de definición es la fuente de verdad única
  del avance y el índice rector sólo lo refleja, o al revés?

## Preguntas pendientes

- ¿Existe una regla ya acordada sobre sincronización de ambos documentos al
  cerrar una sesión, más allá del paso 3 del cierre en `AGENTS.md`?

## Cobertura y límites

- Documentos leídos: `docs/product-definition.md:1-88`;
  `docs/definition-tracker.md:1-12`; `docs/definition/README.md`; `AGENTS.md`.
- Fuentes externas consultadas: ninguna; el problema es exclusivamente interno.
- Partes no examinadas: `docs/definition-tracker.md:13-fin`,
  `docs/product-definition.md:89-191`.

## Nota de vigencia (2026-09-25, pasada 2 de `B001`)

- Resultado: **sigue vigente y ampliada**; no se cierra.
- Base comparada: `docs/product-definition.md` l. 5-9 (204 líneas) frente a
  `docs/definition-tracker.md` l. 5-11. El campo «Próxima sesión» que citaba el
  hecho observado ya no existe: hoy el índice dice «Última sesión completada:
  11 — arquitectura del MVP» y «Sesión actual: 12 — validación y convergencia
  (`in_progress`)» (l. 7-8), y el tracker dice «Avance: 11 de 12 sesiones
  completadas» y «Sesión actual: 12 — validación y convergencia
  (`in_progress`)» (l. 6-7). Ambos fechan la actualización el 2026-09-24. Los
  valores siguen coincidiendo, pero ninguna regla escrita declara cuál
  prevalece.
- Ampliación: el estado de avance se registra hoy en cuatro lugares, no en
  dos: (1) «Estado» del índice (l. 7-8); (2) columna «Cierre» de la tabla de
  unidades del índice, con «En curso» para S12 (l. 92); (3) columna «Estado»
  de `docs/definition/README.md` (l. 10-21, `completed` para S01-S11 e
  `in_progress` para S12, con «Pendiente» como cierre), y (4) el tracker de
  definición. Además, la cabecera de cada unidad declara su estado (por
  ejemplo, S08 l. 3 y S12 l. 3). El mismo README afirma en l. 25-26 «No existe
  un registro duplicado». Todas las fuentes coinciden hoy: el riesgo sigue
  siendo potencial.
- Límite: sólo se leyeron las l. 1-12 del tracker de definición; S12 sigue
  `in_progress` y cambiará al menos tres de esos cuatro registros al cerrar.

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [checkpoint B001](blocks/B001.md), `REV-2026-002`
