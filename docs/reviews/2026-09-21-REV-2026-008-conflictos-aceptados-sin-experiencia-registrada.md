# Anotación de revisión

- ID de anotación: `REV-2026-008`
- Unidad y ubicación: `S01` — [Evidencia recogida](../definition/session-01-vision.md#evidencia-recogida)
  y [Conclusiones](../definition/session-01-vision.md#conclusiones), fila «La
  coordinación debe abordar tareas duplicadas, sobrescrituras, estado
  desactualizado y desalineación entre entregables» (bloque `B004`)
- Revisión examinada: estado del archivo al 2026-09-21 (sin commits; sin huella)
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `media`
- Impacto: la prioridad y el coste de los mecanismos de coordinación de sesiones
  posteriores, y la validez del criterio de salida «declaración del problema
  basada en experiencias reales».

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (contradicción exclusivamente interna, más una
  comprobación de la fuente primaria local citada por el bloque)
- Fuente primaria:
  - interna: `docs/definition/session-01-vision.md` líneas 13-14, 22, 40-44,
    67-73 y 83;
  - local citada por el bloque:
    `/Users/camilo-dev/src/AprovisionamientoProd/docs/evidencias/pieza-13b-projections-especificacion.md`,
    cabecera, líneas 21-28 (entradas «Ronda 2 (101ª)» y «Alineación (102ª)»).
- Sección o localizador: «Preguntas de la sesión» (pregunta 1), «Criterio de
  salida» (primer punto), «Evidencia recogida», «Ejemplo revisado:
  AprovisionamientoProd» y «Conclusiones».
- Fecha de consulta/publicación: consultado el 2026-09-21; la spec 13b declara
  haberse escrito en la «100ª sesión (2026-09-07)»; S01 declara su revisión
  documental el 2026-09-14.
- Hecho observado:
  1. La pregunta 1 pide «experiencias concretas» de «pérdida de contexto, trabajo
     duplicado o dificultad para cambiar de agente o sesión», y el criterio de
     salida exige «una declaración del problema basada en experiencias reales».
  2. La evidencia registra dos experiencias: la preparación repetida de harnesses
     (líneas 31-39) y un único incidente, el de la pieza 13b (líneas 67-70).
  3. Sobre coordinación, el texto dice que el usuario «confirmó que le preocupan
     todos los conflictos planteados» (líneas 40-43): la lista fue planteada en
     la conversación y confirmada como preocupación, no relatada como incidentes.
  4. La cabecera de la spec 13b confirma el incidente citado: «los dos lotes
     dejaron spec y payload coherentes **por separado pero no entre sí**»
     (fuerza `alta` para ese incidente; pertinencia: es la única experiencia de
     conflicto documentada en el bloque). Esa cabecera habla de «dos lotes de
     archivos disjuntos»; no afirma que fueran agentes concurrentes ni sesiones
     independientes.
  5. La fila `accepted` de la línea 83 da el mismo rango a los cuatro conflictos,
     y la línea 72-73 precisa «sin priorizar uno sobre los demás».
- Inferencia (si aplica): de los cuatro conflictos aceptados, sólo la
  desalineación entre entregables tiene una experiencia registrada. Tareas
  duplicadas, sobrescrituras y estado desactualizado, así como la pérdida de
  contexto misma, descansan en la confirmación de una lista propuesta. El bloque
  no distingue problema vivido de riesgo anticipado, y ambos quedan con igual peso.

## Observación y propuesta

- Observación: el criterio de salida habla de experiencias reales, pero la
  conclusión aceptada mezcla un problema observado con tres anticipados sin
  señalarlo. Al no haber prioridad, las sesiones posteriores heredan la obligación
  de cubrir los cuatro por igual, incluido el más caro de detectar (la
  desalineación semántica) y tres sin caso real que sirva de escenario de
  aceptación.
- Propuesta concreta: en la segunda pasada, pedir a la persona que marque cada
  conflicto como «vivido» (con referencia a un caso) o «anticipado», y anotarlo
  junto a la fila de la línea 83 sin cambiar su estado `accepted`. Si alguno es
  sólo anticipado, decidir si conserva el mismo rango en el MVP.
- Contraargumento o coste/riesgo: la confirmación del usuario primario es
  evidencia legítima de necesidad, y el usuario ya construye harnesses «para
  prevenir la pérdida de contexto», lo que sugiere experiencia previa aunque no
  se haya transcrito. Exigir un incidente por conflicto puede ser excesivo para
  una sesión de visión. El repositorio de ejemplo podría contener más incidentes
  no recogidos en S01.

## Análisis adicional

- Evidencia interna: [pregunta 1](../definition/session-01-vision.md#preguntas-de-la-sesión),
  [criterio de salida](../definition/session-01-vision.md#criterio-de-salida),
  [evidencia recogida](../definition/session-01-vision.md#evidencia-recogida) y
  [conclusiones](../definition/session-01-vision.md#conclusiones). La fila de la
  línea 83 ya acota que «no se ha elegido un mecanismo ni establecido una garantía
  absoluta», pero no acota el origen de cada conflicto.
- Contraevidencia y límites: no se demuestra que los tres conflictos restantes no
  hayan ocurrido; sólo que S01 no registra un caso. No se buscó en
  AprovisionamientoProd más allá de la cabecera de la spec 13b. La «Comprobación
  de cierre» (fuera del rango, bloque `B005` o posterior) declara cumplido el
  criterio; su contraste corresponde a ese bloque.
- Pregunta para resolver: ¿cuáles de los cuatro conflictos, y de la pérdida de
  contexto, ha vivido el usuario con un caso citable, y cuáles son riesgos
  anticipados? ¿Deben tener el mismo rango en el MVP?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [REV-2026-009](2026-09-21-REV-2026-009-residuo-conflictos-prioritarios.md),
  [checkpoint B004](blocks/B004.md)

## Preguntas pendientes

- Ver el checkpoint [B004](blocks/B004.md), que reúne las preguntas no
  demostradas del bloque.

## Cobertura y límites

- Documentos leídos: `docs/definition/session-01-vision.md:1-90`; cabecera
  (líneas 1-40) de la spec 13b de AprovisionamientoProd.
- Fuentes externas efectivamente consultadas: ninguna web; sólo la fuente local
  citada por el bloque.
- Partes no examinadas: el resto de AprovisionamientoProd, las sesiones 2-7 y los
  ADR.
