# Anotación de revisión

- ID de anotación: `REV-2026-066`
- Unidad y ubicación: `ADR-001` — [«Consecuencias para el equipo»](../adr/ADR-001-autonomia-y-responsabilidades.md#consecuencias-para-el-equipo)
  y [«Puntos abiertos»](../adr/ADR-001-autonomia-y-responsabilidades.md#puntos-abiertos),
  `docs/adr/ADR-001-autonomia-y-responsabilidades.md:98-121`, frente a `S04`
  (l. 81, 85-87), `S09` (l. 45, 56, 68, 83-86, 114), `ADR-008` (l. 49, 59-60,
  76) y al [tracker de definición](../definition-tracker.md) (l. 6-7, 318).
  Bloque `B031`.
- Revisión examinada: estado de los archivos al 2026-09-25 (repositorio sin
  commits; ADR-001 fechado 2026-09-14 y editado después en l. 116; ADR-008
  fechado 2026-09-22). Citas distintivas: «¿Qué determina alto riesgo, quién
  fija los criterios y cómo se controla la integración? → sesión 9, seguridad y
  gobernanza» (ADR-001 l. 119); «¿Cómo se representan arranque, replanificación,
  espera y reanudación? → resuelto en sesión 4 y [ADR-003]» (l. 116); «| Autonomía
  y responsabilidades | [ADR-001] |» (tracker l. 318).
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos; `media` sobre el impacto (S04, S09 y
  ADR-008 están fuera del alcance autorizado de la revisión y se usan sólo como
  destino de los puntos abiertos; S09 leída en l. 40-119, S04 en l. 81-87,
  ADR-008 completo)
- Impacto: qué puntos de intervención humana y qué política de riesgo aplica
  un agente que, siguiendo `AGENTS.md`, consulta el tracker de definición y
  llega a ADR-001 como fuente de «Autonomía y responsabilidades»; y qué puntos
  abiertos de ADR-001 siguen realmente abiertos.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión exclusivamente interna).
- Fuente primaria: `docs/adr/ADR-001-autonomia-y-responsabilidades.md:27-34,
  75-89, 98-99, 103-106, 113-127`; `docs/definition/session-04-operating-cycle.md:81,
  85-87`; `docs/definition/session-09-security-governance.md:45, 56, 68, 83-86,
  114`; `docs/adr/ADR-008-baseline-de-seguridad-y-gobernanza.md:1-82`;
  `docs/definition/session-12-validation-convergence.md:30` (por búsqueda);
  `docs/definition-tracker.md:6-7, 318`; búsqueda de «ADR-001» en `docs/` fuera
  de `reviews/`.
- Sección o localizador: ver «Unidad y ubicación».
- Fecha de consulta/publicación: consulta 2026-09-25.
- Hecho observado:
  1. **Seis de siete destinos cerrados, uno marcado.** El tracker declara 11 de
     12 sesiones completadas y la 12 `in_progress` (l. 6-7). Los destinos de
     l. 115 (sesión 3), l. 117 (5), l. 118 (8), l. 119 (9) y l. 120 (3, 7 y 10)
     están cerrados y sólo l. 116 lleva marca («resuelto en sesión 4 y
     ADR-003»). l. 121 (11 y 12) tiene un destino cerrado y otro en curso.
     [`REV-2026-015`](2026-09-21-REV-2026-015-aplazamientos-s02-sin-retorno-y-divergentes-de-adr-001.md)
     hecho 2 registró la falta de uniformidad con 7 de 12 sesiones; ahora
     alcanza a todos los destinos menos S12.
  2. **l. 119 está resuelto en S09 y ADR-008 sin marca ni enlace.** S09 fija qué
     determina el riesgo («Cada acción efectiva se evalúa por impacto,
     reversibilidad, alcance, sensibilidad, exposición externa e incertidumbre y
     obtiene `routine`, `elevated`, `high` o `prohibited`», l. 68), quién fija
     los criterios («La política puede elevar niveles … pero no rebajar estos
     mínimos», l. 68; «La persona define o delega quién puede aprobar cambios»,
     l. 80) y cómo se controla la integración (`high` exige «verifier
     independiente obligatorio y aprobación humana antes del efecto protegido o
     de su integración», l. 86; ADR-008 l. 49). ADR-008 enlaza ADR-001 (l. 76) y
     S09 declara preservarlo (l. 45, 114); ADR-001 no enlaza ADR-008 ni marca
     l. 119. La búsqueda de «ADR-001» devuelve enlaces entrantes desde ADR-002,
     ADR-003, ADR-008, ADR-009 y S02, y menciones en S09 (l. 45, 114), S10
     (l. 54, 162) y S11 (l. 225); ADR-001 sólo enlaza S02, el
     tracker, NIST (l. 125-127) y ADR-003 (l. 116).
  3. **Los puntos de intervención humana de ADR-001 quedaron ampliados aguas
     abajo.** ADR-001 enumera la participación de la persona como acordar el
     producto, «las revisiones necesarias» y «la aceptación final» (l. 103-104;
     l. 32-34; puntos 2, 4-6). Después: S04 fija autorización de `build` y
     aceptación final por incremento (l. 81, 86; granularidad ya observada en
     [`REV-2026-029`](2026-09-24-REV-2026-029-ciclo-colaborativo-de-s04-sin-mapa-a-etapas-y-gates-confirmar-la-definicion-frente-a-autorizacion-por-incremento.md)),
     amplía las consultas a «comportamiento, alcance, interfaz, criterio de
     aceptación, una decisión técnica acordada, permisos o un riesgo» (l. 85) y
     exige «autorización humana explícita» para producción, efectos externos o
     acciones irreversibles (l. 87); S09 añade un baseline de aprobación humana
     previa que incluye «desplegar a producción», pérdida irreversible de datos,
     compromisos financieros, crear o ampliar identidades, credenciales o
     permisos y «relajar política» (l. 83), y lo protege como «intervenciones
     humanas ya acordadas como límite transversal de autonomía» (l. 85). Nada de
     esto contradice ADR-001 (S02 l. 32 admite «intervenciones excepcionales»),
     pero ADR-001 sigue diciendo «Este registro fija el límite transversal del
     producto» (l. 98) y «Los contratos operativos y la arquitectura … siguen en
     definición» (l. 99), y es la fuente que el tracker asigna a «Autonomía y
     responsabilidades» (l. 318); la tabla de fuentes lista ADR-008 aparte
     (l. 321) pero no ADR-003.
  4. **Identidad y permisos, ausentes en ambos inventarios
     (`REV-2026-015` hecho 4), tienen hoy decisión en S09 sin retorno.** S09
     l. 56 decide «Permisos efectivos por intersección explícita», con
     «identidad y autoridad del actor» como entrada; ni ADR-001 ni S02 lo
     reflejan, aunque el punto 4 depende de «sus capacidades o permisos»
     (l. 83-84).
  5. **l. 121 sin criterio todavía.** «¿… cómo se demostrará su efectividad? →
     sesiones 11 y 12»: S12 mantiene abierta «¿Qué métricas, umbrales y reglas
     de agregación determinan éxito…?» (pregunta 4, l. 30; por búsqueda); S11
     sólo usa «la autonomía aceptada» para rechazar un orchestrator
     exclusivamente determinista (l. 104). El coste «aún no está cuantificado»
     de l. 106 no tiene punto abierto ni destino.
- Inferencia (si aplica): ADR-001 funciona como fotografía del 2026-09-14
  salvo una edición selectiva (l. 116), pero el tracker lo ofrece como fuente
  vigente del límite de autonomía. Un agente que lo lea no encuentra la
  granularidad por incremento, la autorización de despliegue, el baseline de
  aprobaciones ni la clasificación de riesgo, y no tiene enlace que lo lleve a
  ellos.

## Observación y propuesta

- Observación: el problema no es que falte contenido (S04 y S09 lo decidieron)
  sino la navegabilidad y el estado del documento que se presenta como límite
  transversal: puntos abiertos con destinos vencidos sin marca, un punto
  resuelto por un ADR posterior sin enlace y una enumeración de intervenciones
  humanas superada.
- Propuesta concreta: que la persona decida (a) si los ADR son fotografías
  fechadas (y entonces se retira la marca de l. 116 o se añade una nota de
  revisión con fecha) o documentos vivos (y entonces se marcan l. 115, 117-120
  con su destino efectivo y se enlaza ADR-008 desde l. 119); (b) si
  «Consecuencias» o una nota remiten a S04 y S09/ADR-008 como concreción de
  los puntos de intervención humana; (c) si la fila de l. 318 del tracker debe
  listar también S04/ADR-003 y S09/ADR-008 para autonomía; (d) dónde se fija el
  criterio de efectividad y el coste de l. 106 (S12). No editar ADR-001 ni el
  tracker sin esa decisión.
- Contraargumento o coste/riesgo: los ADR suelen ser inmutables y superarse
  por ADR posteriores; S09 y ADR-008 enlazan hacia ADR-001, y la tabla del
  tracker lista ADR-008, de modo que un lector cuidadoso llega a ellos; la
  marca de l. 116 puede tratarse como excepción. Mantener marcas en ADR
  cerrados añade otra fuente de divergencia (`REV-2026-025`, `058` hecho 2).
  El coste es decidir una convención única para todos los ADR.

## Análisis adicional

- Evidencia interna: hechos 1-5 con sus localizadores.
- Contraevidencia y límites: no se revisaron S04, S08-S12 ni ADR-007/008 como
  bloques; no se afirma que resuelvan correctamente los puntos, sólo que
  existen decisiones posteriores sobre ellos. l. 117 y l. 120 se analizan en el
  checkpoint (`REV-2026-063` hecho 3; `REV-2026-056` hecho 2): allí el destino
  no produjo fila, así que marcarlos resueltos no sería exacto.
- Pregunta para resolver: ¿ADR-001 es la fuente vigente del límite de
  autonomía (y entonces debe reflejar o enlazar S04 y S09/ADR-008) o una
  fotografía de 2026-09-14 (y entonces el tracker debe señalar dónde está el
  límite vigente)?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B031](blocks/B031.md), [B030](blocks/B030.md)
  (pregunta 1), [`REV-2026-015`](2026-09-21-REV-2026-015-aplazamientos-s02-sin-retorno-y-divergentes-de-adr-001.md),
  [`REV-2026-001`](2026-09-21-REV-2026-001-precedencia-adr-unidad-canonica.md),
  [`REV-2026-014`](2026-09-21-REV-2026-014-modelo-de-interaccion-frente-a-puntos-de-intervencion-del-proyecto.md),
  [`REV-2026-029`](2026-09-24-REV-2026-029-ciclo-colaborativo-de-s04-sin-mapa-a-etapas-y-gates-confirmar-la-definicion-frente-a-autorizacion-por-incremento.md),
  [`REV-2026-064`](2026-09-25-REV-2026-064-alternativas-de-adr-001-sin-coordinacion-opcion-aceptada-peor-en-adopcion-y-portabilidad-sin-objetivo-s01.md)
  (hecho 4), cruces `CT04` y `CT07`.

## Preguntas pendientes

Ver el checkpoint [B031](blocks/B031.md).

## Cobertura y límites

Ver el checkpoint [B031](blocks/B031.md). Fuentes externas: ninguna; el
problema es interno.
