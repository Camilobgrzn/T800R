# Anotación de revisión

- ID de anotación: `REV-2026-020`
- Unidad y ubicación: `S03-contexto-efímero-y-persistencia` —
  [session-03-sources-of-truth.md, tabla «Información que debe conservarse»](../definition/session-03-sources-of-truth.md#contexto-efímero-y-persistencia)
  (l. 88-101)
- Revisión examinada: 2026-09-21; repositorio sin commits. Citas distintivas:
  «T800R puede reconstruirlo o descartarlo si persiste lo necesario para
  continuar y justificar el trabajo en la fuente correspondiente» (l. 88-89);
  «Cambio de requisito confirmado» (l. 93); «Aprendizaje reutilizable
  confirmado» (l. 96)
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `media`
- Impacto: la tabla es la condición que autoriza a descartar el contexto. Si no
  da destino a lo que todavía no está confirmado, lo que se pierde cuando una
  ejecución termina antes de tiempo es justamente lo que aún nadie ha decidido:
  cambios de requisito planteados y sin confirmar, consultas en curso y
  discrepancias detectadas.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión exclusivamente interna)
- Fuente primaria: `docs/definition/session-03-sources-of-truth.md` l. 83-101,
  105-116, 129-132 y, como dependencia, l. 234-235
- Sección o localizador: «Contexto efímero y persistencia», «Responsabilidad de
  la memoria», «Mantenimiento del conocimiento», «Detalles aplazados»
- Fecha de consulta/publicación: consulta 2026-09-21; acuerdos confirmados el
  2026-09-14 según la cabecera de la unidad
- Hecho observado:
  1. Descartar el contexto se condiciona a haber persistido «lo necesario para
     continuar y justificar el trabajo» (l. 88-89). La tabla concreta cinco
     clases; tres llevan calificador: requisito «confirmado» (l. 93), validación
     «relevante» (l. 95) y aprendizaje «reutilizable confirmado» (l. 96).
  2. Lo no confirmado sólo tiene destino si es «Investigación inconclusa»
     (l. 97), que va a la memoria de continuidad. No hay fila para un cambio de
     requisito planteado y aún no confirmado, para una consulta abierta a la
     persona que no bloquea (l. 131-132 prevé consultar «continuando el trabajo
     independiente») ni para una discrepancia detectada y no resuelta. «Bloqueo»
     (l. 94) sólo cubre el caso en que la consulta detiene el trabajo.
  3. El rango no dice quién confirma ni quién juzga la relevancia. La memoria,
     único destino de lo inconcluso, «puede persistir entre sesiones» (l. 105),
     no es autoridad (l. 114-115) y no tiene motor ni almacenamiento elegido
     (l. 115-116).
  4. Están aplazados expresamente los mecanismos y momentos de persistencia
     (l. 100-101; l. 234), y l. 235 afirma que «La obligación de persistir y los
     límites de autoridad están definidos». Las clases de información y sus
     destinos no figuran como aplazados.
- Inferencia (si aplica): la omisión no es de mecanismo (diferido), sino de
  reparto de responsabilidades entre fuentes, que es el objeto de S03. Es posible
  que S04 o S05 lo cubran con estados de tarea (una coincidencia textual en
  `session-05-handoffs.md` l. 157 menciona «consulta pendiente»); no se comprobó.

## Observación y propuesta

- Observación: tal como está escrita, la condición de descarte es indecidible
  desde fuera: nadie puede comprobar después que lo descartado no contenía algo
  «necesario», y los calificadores dejan la decisión al agente en el momento de
  persistir. La tabla protege bien lo decidido y mal lo pendiente. Coincide con
  el hecho 3 de
  [`REV-2026-017`](2026-09-21-REV-2026-017-regla-de-discrepancias-entre-originales-con-casos-sin-salida.md)
  (no se indica dónde se registra una discrepancia detectada), visto ahora desde
  la tabla de destinos.
- Propuesta concreta: decidir si la tabla debe (a) declararse no exhaustiva y
  remitir a la sesión que la complete, o (b) añadir destino para las decisiones
  pendientes de la persona (consulta abierta, cambio de requisito sin confirmar,
  discrepancia detectada), por ejemplo el work tracker como estado operativo, e
  indicar quién confirma un requisito o un aprendizaje.
- Contraargumento o coste/riesgo: «No se exige conservar cada mensaje» (l. 99) es
  un límite deliberado y razonable; una lectura amplia de «Bloqueo» o de
  «Investigación inconclusa» puede absorber estos casos, y el lifecycle aceptado
  en S04/ADR-003 (l. 234) puede haber resuelto ya dónde vive una consulta
  pendiente. Añadir filas sin ese contraste duplicaría S04.

## Análisis adicional

- Evidencia interna: l. 88-89 frente a l. 93-97 (condición general frente a
  clases calificadas); l. 131-132 (consulta sin bloqueo) frente a l. 94 (sólo
  «Bloqueo» tiene destino); l. 235 (la obligación «está definida»).
- Contraevidencia y límites: l. 109 exige contrastar la memoria con tracker y
  artefactos al retomar, lo que limita el daño de una memoria errónea pero no el
  de una memoria vacía. No se leyeron S04, S05, S06 ni ADR-003; el contraste
  corresponde a los bloques de esas unidades y a `CT01`.
- Pregunta para resolver: cuando una ejecución termina con una consulta abierta,
  un cambio de requisito sin confirmar o una discrepancia detectada, ¿en qué
  fuente debe haber quedado, y quién decide que algo ya está «confirmado»?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B010](blocks/B010.md),
  [`REV-2026-017`](2026-09-21-REV-2026-017-regla-de-discrepancias-entre-originales-con-casos-sin-salida.md)

## Preguntas pendientes

Ver el checkpoint [B010](blocks/B010.md).

## Cobertura y límites

Ver el checkpoint [B010](blocks/B010.md). Sin fuentes externas consultadas.
