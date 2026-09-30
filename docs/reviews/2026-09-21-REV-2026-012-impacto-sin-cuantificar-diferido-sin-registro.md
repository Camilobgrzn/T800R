# Anotación de revisión

- ID de anotación: `REV-2026-012`
- Unidad y ubicación: `S01` — [Comprobación de cierre](../definition/session-01-vision.md#s01-cierre),
  «El impacto todavía no está cuantificado. Esa medición no bloquea la sesión 2»
  (líneas 182-184). Bloque `B006`.
- Revisión examinada: estado del archivo al 2026-09-21; repositorio sin commits,
  huella no disponible.
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre la ausencia de registro; `media` sobre el riesgo de
  perder la línea base
- Impacto: si la medición del coste actual de preparación y recuperación es un
  compromiso con destino y responsable, o una observación que nadie está obligado
  a retomar. De ello depende poder comprobar la propuesta de valor («preparar una
  vez») contra una línea base.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (exclusivamente interno; sin fuente externa)
- Fuente primaria: `docs/definition/session-01-vision.md:182-184`, frente a la
  tabla de [Conclusiones](../definition/session-01-vision.md#conclusiones)
  (77-89) y `AGENTS.md`, forma de trabajo, punto 5
- Sección o localizador: ancla `s01-cierre`; líneas 40, 130-131 y 182 de la unidad;
  `docs/product-definition.md:70` (fila de la sesión 12)
- Fecha de consulta/publicación: consulta 2026-09-21
- Hecho observado:
  1. La falta de cuantificación aparece tres veces en S01 con alcance creciente:
     «falta precisar el impacto de esa preparación» (40), «el coste de preparación
     y recuperación aún no está cuantificado» (130-131) y «el impacto todavía no
     está cuantificado» (182).
  2. Sólo el cierre le da tratamiento: «Esa medición no bloquea la sesión 2; las
     métricas y los experimentos detallados se concretarán en validación y
     convergencia» (182-184). «Validación y convergencia» es el nombre de la
     sesión 12 del plan (`product-definition.md:70`: «Experimentos, repositorio
     piloto, métricas, criterios de éxito, backlog y roadmap»), de modo que hay un
     destino identificable, aunque sin número de sesión ni enlace.
  3. La tabla de conclusiones tiene una única fila `deferred` (89), sobre
     mecanismos. No hay fila `deferred` para la cuantificación, aunque `AGENTS.md`
     pide registrar cada conclusión como `accepted`, `deferred` o `rejected`.
  4. No se nombra responsable ni qué se medirá (tiempo de preparación por
     repositorio, tiempo de recuperación por sesión, frecuencia). Una búsqueda de
     «cuantific», «línea base» y «coste de preparación» en `docs/` fuera de
     `reviews/` no encuentra ningún otro lugar que recoja este pendiente de S01.
- Inferencia (si aplica): la segunda frase habla de «métricas y experimentos
  detallados», que se lee con naturalidad como métricas de validación del
  producto. Que incluya medir el coste **actual**, previo a T800R, es una
  interpretación, no algo que el texto afirme. Si la sesión 12 se prepara desde
  su fila del índice, nada la obliga a recuperar esta línea base.

## Observación y propuesta

- Observación: el diferimiento es razonable en sí; una visión no necesita cifras y
  el cierre es honesto al decirlo. El defecto es de trazabilidad y de momento: el
  destino es la última sesión, posterior a experiencia de producto (10) y
  arquitectura (11). Una línea base del coste de preparación sólo se puede
  observar mientras el usuario sigue preparando harnesses a mano; cuanto más
  avance la adopción de T800R en sus repositorios, menos casos «antes» quedarán
  para comparar. El objetivo 1 (143-145) es binario y no necesita la cifra; la
  propuesta de valor, en cambio, promete un ahorro que sin línea base sólo se
  puede afirmar, no medir.
- Propuesta concreta: en la segunda pasada, que la persona decida entre (a)
  registrar el pendiente como `deferred` con destino explícito (sesión 12) y una
  nota mínima de qué se medirá y quién aporta los datos, (b) adelantar una
  estimación gruesa del coste actual con los repositorios ya existentes (por
  ejemplo, AprovisionamientoProd) antes de que se pierda la referencia, o (c)
  declarar que la cuantificación no es necesaria para la decisión de construir y
  retirar el pendiente. No editar S01 sin esa decisión.
- Contraargumento o coste/riesgo: el usuario primario es el autor y único
  evaluador inicial (135-136); su juicio cualitativo puede bastar para decidir, y
  medir tiene coste. La sesión 12 incluye «métricas» y «criterios de éxito», así
  que un lector diligente puede reencontrar el pendiente. Además, el acuerdo
  inicial del índice llama a esto «validación inicial», no demostración de ahorro.

## Análisis adicional

- Evidencia interna: [cierre](../definition/session-01-vision.md#s01-cierre)
  (182-184); [evidencia recogida](../definition/session-01-vision.md#evidencia-recogida)
  (40); [síntesis](../definition/session-01-vision.md#síntesis-aceptada)
  (130-131); [conclusiones](../definition/session-01-vision.md#conclusiones)
  (89, única fila `deferred`); plan de sesiones en
  `docs/product-definition.md:70`. Responde a la pregunta 4 de
  [B004](blocks/B004.md) y a la heredada (b) de [B005](blocks/B005.md).
- Contraevidencia y límites: existe destino por nombre, de modo que no es un
  diferimiento «sin destino»; lo que falta es registro, responsable y objeto de la
  medición. No se leyó la fila completa de la sesión 12 más allá de la línea 70 ni
  el tracker de definición más allá de su estado inicial, por lo que podría haber
  una nota de contexto para retomar que lo recoja. ADR-001:106 y ADR-002:130
  repiten el patrón «aún no está cuantificado» para otros costes; no se
  analizaron aquí y son candidatos para un cruce.
- Pregunta para resolver: ¿se quiere medir el coste actual de preparación y
  recuperación antes de decidir construir? Si es así, ¿quién, cuándo y con qué
  repositorios, teniendo en cuenta que la referencia «antes de T800R» se agota?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [REV-2026-004](2026-09-21-REV-2026-004-preguntas-abiertas-sin-disposicion.md),
  [REV-2026-007](2026-09-21-REV-2026-007-criterio-de-cierre-no-cubre-adopcion.md),
  checkpoint [B006](blocks/B006.md)
