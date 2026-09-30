# Anotación de revisión

- ID de anotación: `REV-2026-073`
- Unidad y ubicación: `ADR-003` — [«Glosario rápido»](../adr/ADR-003-ciclo-operativo-y-coordinacion.md#glosario-rápido)
  y [«TL;DR»](../adr/ADR-003-ciclo-operativo-y-coordinacion.md#tldr),
  `docs/adr/ADR-003-ciclo-operativo-y-coordinacion.md:9, 14, 17-18`, frente a
  `S04` — [«Acuerdos y orientación de la sesión»](../definition/session-04-operating-cycle.md#acuerdos-y-orientación-de-la-sesión)
  (l. 18, 75, 81-83, 89, 91, 113) y «Transiciones de etapa» (l. 274-275), y a
  `S01` — [«Glosario inicial»](../definition/session-01-vision.md#glosario-inicial)
  (l. 157-170). Bloque `B035`.
- Revisión examinada: estado de los archivos al 2026-09-25 (repositorio sin
  commits; ADR-003 fechado 2026-09-15). Citas distintivas: «**Incremento:**
  cambio de producto autorizado que recorre los gates aplicables del SDLC»
  (l. 14); «**Stage:** etapa funcional del trabajo» (l. 17); «Separar `stage` y
  `status` para el ciclo, los incrementos y las tareas» (S04 l. 89).
- Tipo: `incompleto`
- Gravedad: `baja`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos; `media` sobre el impacto
- Impacto: si un incremento en `plan` o `design`, o un `draft` creado por
  `Maintain`, es un incremento con `stage` y `status` en el tracker; qué acto
  humano «autoriza» un incremento antes de la autorización de `build`; y a qué
  entidad corresponde el `stage`/`status` «del ciclo».

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (divergencia exclusivamente interna; no
  requiere fuente externa según [README](README.md)).
- Fuente primaria: `docs/adr/ADR-003-ciclo-operativo-y-coordinacion.md:9, 14-19,
  46-52, 81, 95` (l. 44-98 sólo por búsqueda de «incremento|autoriz|draft|
  ciclo»); `docs/definition/session-04-operating-cycle.md:18, 75, 81-83, 89, 91,
  113, 155, 274-275`; `docs/definition/session-01-vision.md:157-170`; búsqueda de
  «incremento» en S04.
- Sección o localizador: ver «Unidad y ubicación».
- Fecha de consulta/publicación: consulta 2026-09-25; ADR-003 y S04 fechados
  2026-09-15.
- Hecho observado:
  1. **«Autorizado» como rasgo definitorio sin acto que lo cumpla antes de
     `build`.** El glosario define el incremento como «cambio de producto
     autorizado» (l. 14). En S04 la única autorización humana de un incremento
     anterior a `deploy` es la de entrar en `build` (l. 81: «se concede por
     incremento»; l. 82: T800R presenta el readiness y «la persona autorizará
     entonces iniciar `build`»; l. 275: `design → build` «sólo con `readiness`
     demostrado y autorización humana explícita por incremento»). Pero el
     incremento existe antes: «origina un nuevo incremento que vuelve a `plan`»
     (S04 l. 75; ADR-003 l. 48, «origina un nuevo incremento en `plan`»), pasa
     de `plan` a `design` sin gate humano separado (l. 88, 274) y T800R evalúa
     si «el incremento cumple el criterio de preparación» (l. 82). `Maintain`
     puede crear «una propuesta o incremento `draft`» que «no autoriza `build`»
     (l. 113; ADR-003 l. 95, «crear drafts»). Ninguna fila de S04 define la
     autorización para abrir un incremento.
  2. **«Ciclo» con `stage` y `status` sin definición.** S04 aplica `stage` y
     `status` a tres entidades: «el ciclo, los incrementos y las tareas» (l. 89;
     también l. 91, «enumeración común para ciclo, incrementos y tareas», y
     l. 155), y l. 18 habla de «ciclo/incremento». El glosario del ADR define
     `Stage` como «etapa funcional del trabajo» y `Status` como «estado
     operativo» (l. 17-18) sin decir a qué entidades se aplican, no define
     «ciclo» y usa la palabra como nombre del metaflujo (l. 9, «ciclo adaptable
     por incrementos»; l. 46, «El ciclo es `plan → design → build → verify →`»).
     La «Decisión», por búsqueda, sólo nombra cierres distintos para «Tarea,
     incremento y sesión» (l. 81).
  3. **Frente a S01.** S01 no define «incremento» ni «ciclo»; «Tarea» (S01
     l. 164: «alcance, estado y criterio de finalización explícitos») y
     «Sesión» (l. 163: «Instancia de trabajo con su propio contexto
     conversacional; puede incluir varios agentes y coexistir con otras
     sesiones») se refinan en ADR-003 l. 15-16 de forma compatible con S04
     l. 108, 115-116 y con S01 l. 168 («Cierre de sesión … no implica
     necesariamente que la tarea esté terminada»). No se registra divergencia
     en esas dos entradas.
- Inferencia (si aplica): leída literalmente, la definición excluye del
  concepto de incremento a los que están en `plan` o `design` antes de la
  autorización de `build` y a los `draft` de `Maintain`, que sin embargo tienen
  `stage` (S04 l. 274-275) y requieren estado. Si «autorizado» remite a otro
  acto (la confirmación de «la definición» de S02 l. 40 o del ciclo
  colaborativo), ese acto no está fijado por incremento: es la ambigüedad de
  `REV-2026-029`. Y el `stage`/`status` «del ciclo» no tiene portador definido,
  lo que añade una entidad sin contrato a la máquina de estados que
  `REV-2026-027` ya encuentra no cerrada.

## Observación y propuesta

- Observación: el glosario es la única definición de «incremento» en el canon
  (S01 no lo define, S04 lo usa sin definirlo) y la que un implementador del
  tracker o de `handoff/v1` consultaría. Tal como está, fija una precondición
  («autorizado») que S04 no define y omite el portador del `stage` «del ciclo».
- Propuesta concreta: que la persona decida (a) si «incremento» es un cambio de
  producto propuesto o acordado que recorre los gates aplicables —y la
  autorización de `build` es un gate, no un rasgo definitorio— o si existe una
  autorización previa para abrir un incremento, y entonces quién la da y dónde
  consta (en relación con `REV-2026-029`); (b) si el `draft` de `Maintain` es un
  incremento (con `stage plan` y algún `status`) o una propuesta fuera del
  lifecycle (en relación con `REV-2026-027`); (c) qué es «el ciclo» como
  portador de `stage` y `status` en S04 l. 89 y 91 —el conjunto de incrementos
  de una iniciativa, un sinónimo de incremento o una errata— y reflejarlo en el
  glosario. No editar S04 ni ADR-003 sin esa decisión.
- Contraargumento o coste/riesgo: un «glosario rápido» se lee como ayuda de
  lectura, no como norma (contraargumento de `REV-2026-063`); «autorizado»
  puede entenderse de forma laxa como «dentro de los acuerdos vigentes», y S04
  l. 75 dice que reabrir `plan` «conserva … autorización», lo que sugiere que el
  incremento conserva la autorización de `build` ya concedida. «Ciclo» puede
  ser sinónimo de «incremento» (S04 l. 18, «ciclo/incremento»). El coste es
  retocar dos entradas del glosario y quizá una fila de S04.

## Análisis adicional

- Evidencia interna: hechos 1-3 con sus localizadores.
- Contraevidencia y límites: la «Decisión» de ADR-003 (l. 44-98) sólo se
  consultó por búsqueda; su análisis corresponde a `B036`. No se leyeron S05
  («Lifecycle inicial») ni S11, que pueden definir el portador de estado de un
  incremento o del ciclo con otras palabras. No se afirma que la ausencia de
  una autorización de apertura sea un defecto de S04: puede ser deliberada
  (autonomía de T800R en `plan` dentro de lo acordado); el defecto es que el
  glosario la presupone.
- Pregunta para resolver: ¿qué autorización convierte un cambio en
  «incremento», es un `draft` de `Maintain` ya un incremento, y qué entidad es
  «el ciclo» que tiene `stage` y `status` según S04 l. 89 y 91?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B035](blocks/B035.md),
  [`REV-2026-027`](2026-09-24-REV-2026-027-enumeracion-de-estados-y-transiciones-de-s04-no-cerrada-draft-y-waiting-blocked-desde-ready.md),
  [`REV-2026-029`](2026-09-24-REV-2026-029-ciclo-colaborativo-de-s04-sin-mapa-a-etapas-y-gates-confirmar-la-definicion-frente-a-autorizacion-por-incremento.md),
  [`REV-2026-033`](2026-09-24-REV-2026-033-retorno-parcial-de-un-hallazgo-en-s04-sin-stage-del-incremento-ni-regla-de-reentrada-a-build.md)
  (hecho 3, `stage` «para el ciclo»),
  [`REV-2026-063`](2026-09-25-REV-2026-063-glosario-de-adr-001-redefine-harness-y-repositorio-consumidor-frente-a-s01-y-contrato-de-trabajo-sin-artefacto.md)
  (patrón de glosario), cruces `CT02` y `CT05`.

## Preguntas pendientes

Ver el checkpoint [B035](blocks/B035.md).

## Cobertura y límites

Ver el checkpoint [B035](blocks/B035.md). Fuentes externas: ninguna; el
problema es interno.
