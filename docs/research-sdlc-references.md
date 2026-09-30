# Investigación del SDLC: Addy Osmani, nWave y Matt Pocock

Consulta: 2026-09-15. Sesión 4. Recomendaciones pendientes de aceptación.

Ampliación posterior: el usuario añadió **Superpowers y BMAD**, examinados en
[el informe complementario](research-superpowers-bmad.md). Hay cinco referencias.
Después del primer informe se aceptó explorar un ciclo adaptable y se acordó la
investigación colaborativa; etapas concretas y preparación siguen pendientes.

## Alcance y revisiones

Se leyeron árboles, READMEs, skills, comandos y código seleccionado mediante la
API de GitHub. Las instrucciones externas se analizaron como evidencia, no se
ejecutaron. No se instalaron herramientas ni se hicieron benchmarks; no es una
auditoría exhaustiva ni una garantía de comportamiento en los tres proveedores.

| Proyecto | Revisión examinada |
| --- | --- |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills/tree/be4e44a9fbc5e8df0beaefadbb28bd22ee61cc39) | `be4e44a9fbc5e8df0beaefadbb28bd22ee61cc39` |
| [nWave-ai/nWave](https://github.com/nWave-ai/nWave/tree/ab66e995df91eaaaea782324ae4da9d6d7bf0ac9) | `ab66e995df91eaaaea782324ae4da9d6d7bf0ac9` |
| [mattpocock/skills](https://github.com/mattpocock/skills/tree/959a8e9f1edc3adbe2f7e3054bb6fbefa6696260) | `959a8e9f1edc3adbe2f7e3054bb6fbefa6696260` |

## Addy Osmani

Organiza definición, planificación, construcción, verificación, revisión y
entrega mediante skills seleccionadas según la tarea. Para peticiones con varias
capacidades independientes propone un mapa previo a las specs. Las tareas tienen
aceptación, comprobaciones, dependencias y archivos probables; favorece incrementos
verticales y contratos previos al paralelismo. Respeta el tracker configurado y
prohíbe sobrescribir planes pendientes de otro trabajo.

El catálogo general deja la orquestación al usuario o a comandos, pero
**`.claude/commands/build.md` incluye `/build auto`**: requiere spec, comprueba la
base de trabajo, genera plan si falta y ejecuta todas las tareas tras una
aprobación. Consulta por ambigüedad, fallos no resueltos o riesgo, y reanuda al
volver a invocarlo. La implementación incremental verifica y registra cada porción;
indica no repetir comprobaciones exitosas sin cambios relevantes. `/ship` reúne
informes de especialistas, dictamen y plan de recuperación.

Los procedimientos son principalmente instrucciones. El manifiesto de hooks
examinado declara SessionStart, no una máquina de estados de todo el SDLC.
`evals/README.md` distingue estructura, routing léxico y comportamiento: el proxy
léxico no demuestra la selección semántica de un modelo. No se ejecutaron evals.

**Adaptación:** útil para evidencia por tarea y construcción autónoma. Su
aprobación separada de plan, umbrales de líneas/archivos y checkpoints humanos
periódicos no están adoptados. T800R ya autoriza construcción desde la definición
confirmada y debe continuar tareas independientes mientras espera una consulta.

## nWave

El README presenta siete waves: DISCOVER, DIVERGE, DISCUSS, DESIGN, DEVOPS,
DISTILL y DELIVER, con aprobación humana entre ellas. La guía de routing permite
entrar donde falta conocimiento y omitir fases con condiciones; prescribe
DISTILL → DELIVER como par final. DELIVER coordina roadmap, pasos de construcción,
aceptación, refactor, revisión, integridad, finalización y retrospectiva según
configuración. Los perfiles de rigor modifican revisión, fases de pruebas,
modelos y mutación.

El coordinador delega implementación y exige registros de sus ejecutores. Roadmap,
logs y marcadores sustentan reanudación; `nw-continue` detecta artefactos y anomalías.
La capa DES incluye código: `SessionGuardPolicy` usa marcadores y patrones de rutas
para decidir si bloquear escrituras; por sí sola no demuestra exclusión mutua
entre sesiones ni protección de todas las rutas. `PhaseStateValidator` exige
resultado para fases ejecutadas y motivo de omisión; comprueba campos, no que
los tests realmente se ejecutaron. El README advierte que marketplace y CLI
no ofrecen el mismo enforcement.

**Divergencias observadas:** README dice siete waves; `nw-deliver` conserva
«wave 6 of 6». La guía SSOT describe varios archivos en `docs/features/`, mientras
DELIVER utiliza `feature-delta.md` en `docs/feature/` y fallbacks. Hay diferencias
de rutas entre secciones de la propia skill. README y routing tampoco coinciden
completamente en el recorrido de refactor.

**Adaptación:** útiles las fases con criterios, motivos de omisión, rigor
proporcional y recuperación por artefactos. No se adopta aprobación por wave,
TDD universal, Gherkin, cuota de mutación ni su jerarquía completa de agentes.
La presencia de un archivo no basta para declarar completitud bajo nuestro ADR-002.

## Matt Pocock

`grill-with-docs` combina entrevista y modelado del dominio. `grilling` organiza
preguntas según decisiones previas y pide confirmar entendimiento; `domain-modeling`
registra glosario y decisiones. `to-spec` sintetiza conversación, acuerda interfaces
públicas de prueba y publica la spec en el tracker configurado.

`to-tickets` produce incrementos verticales verificables con bloqueos y revisión
humana del desglose. Contempla refactors amplios mediante expand–contract y lotes.
`implement` usa TDD cuando sea posible, comprobaciones frecuentes, revisión al
finalizar y commit. `code-review` separa estándares y cumplimiento de la spec
en informes independientes, evitando que un eje oculte fallos del otro.

`handoff` enlaza artefactos en vez de duplicarlos y recomienda skills, pero guarda
el documento en el directorio temporal del sistema. `wayfinder` mantiene un mapa
de decisiones y una frontera de tickets desbloqueados y sin asignar. Distingue
trabajo humano e investigación autónoma. La asignación expresa una reserva, pero
no demuestra una operación atómica contra carreras. Las skills principales de
orquestación requieren invocación del usuario; no son un supervisor general.

**Divergencia observada:** README describe red–green–refactor; la skill `tdd`
examinada prescribe red–green y sitúa el refactor en revisión.

**Adaptación:** útiles entendimiento compartido, dependencias, excepciones a
incrementos verticales y revisión en dos ejes. Specs sólo en tracker cambiarían
nuestra fuente canónica. Un handoff temporal no puede ser el único soporte entre
máquinas/proveedores. Confirmaciones por desglose y punto de prueba deben
conciliarse con la autonomía delegada.

## Comparación y candidatas

| Área | Addy | nWave | Matt |
| --- | --- | --- | --- |
| Definición | Spec y supuestos, mapa cuando corresponde. | Descubrimiento, opciones, requisitos y diseño. | Entrevista, glosario, decisiones y síntesis. |
| Plan | Tareas verificables con dependencias. | Roadmap enlazado a escenarios. | Tickets verticales con bloqueos y excepciones. |
| Autonomía | Usuario/comandos; build auto recorre plan aprobado. | Gates humanos entre waves; orquestación interna de DELIVER. | Orquestación invocada por usuario, disciplinas componibles. |
| Verificación | Incrementos, revisión y preparación de entrega. | Gates, registros y DES configurable. | Pruebas por interfaces y revisión estándares/spec. |
| Recuperación | Pendientes, commits y nueva invocación. | Marcadores, logs y continuación. | Handoff y mapas, sin supervisor general demostrado. |

Recomendación: combinar prácticas, no adoptar una metodología completa.

| Candidata | Beneficio | Coste o condición |
| --- | --- | --- |
| Definición colaborativa con lenguaje compartido. | Reduce ambigüedades. | Preguntar lo pendiente, con esfuerzo proporcional. |
| Entrada al ciclo según conocimiento y evidencia. | Evita repetir descubrimiento para cada corrección. | Explicitar por qué una etapa está satisfecha. |
| Incrementos verificables con dependencias. | Feedback temprano y paralelismo identificable. | Prever migraciones y cambios transversales. |
| Ejecución autónoma con evidencia por incremento. | Cercana al objetivo de T800R. | Adaptar autorizaciones, espera y recuperación. |
| Revisión de requisitos y calidad técnica separadas. | No confundir buena técnica con producto correcto. | Coste adicional; no siempre exige agentes distintos. |
| Progreso respaldado por artefactos y controles. | Recuperación y trazabilidad. | Campos declarados no sustituyen evidencia real. |

**Primera decisión propuesta:** SDLC adaptable con etapas y criterios de salida
explícitos; T800R determina cuáles ya están satisfechos y cuáles debe ejecutar.
Alternativas: flujo fijo para todo cambio (uniforme pero costoso), o skills
sueltas sin ciclo compartido (flexible pero deja sin resolver la coordinación).
El usuario aceptó posteriormente explorar el SDLC adaptable y acordó investigación
y definición colaborativas. Las etapas concretas siguen pendientes. Se conservan
definición confirmada, revisión selectiva por riesgo y revisión humana final.

La comparación complementa la revisión de OpenAI y Anthropic: evidencia y
reanudación enlazan con agentes de larga duración; documentación y controles,
con Harness engineering. No reemplaza la revisión transversal acordada.

## Rutas examinadas

Consultar estas rutas en los árboles fijados de la tabla inicial:

- **Addy:** `README.md`, `skills/using-agent-skills/SKILL.md`,
  `skills/spec-driven-development/SKILL.md`, `skills/planning-and-task-breakdown/SKILL.md`,
  `skills/incremental-implementation/SKILL.md`, `references/orchestration-patterns.md`,
  `.claude/commands/build.md`, `.claude/commands/ship.md`, `hooks/hooks.json`, `evals/README.md`.
- **nWave:** `README.md`, `nWave/skills/nw-deliver/SKILL.md`,
  `nWave/skills/nw-continue/SKILL.md`, `docs/guides/wave-routing-and-entry-points/README.md`,
  `docs/guides/understanding-ssot-model/README.md`,
  `src/des/domain/phase_state_validator.py`, `src/des/domain/session_guard_policy.py`.
- **Matt:** `README.md`, `skills/engineering/grill-with-docs/SKILL.md`,
  `skills/productivity/grilling/SKILL.md`, `skills/engineering/domain-modeling/SKILL.md`,
  `skills/engineering/to-spec/SKILL.md`, `skills/engineering/to-tickets/SKILL.md`,
  `skills/engineering/implement/SKILL.md`, `skills/engineering/tdd/SKILL.md`,
  `skills/engineering/code-review/SKILL.md`, `skills/engineering/wayfinder/SKILL.md`,
  `skills/productivity/handoff/SKILL.md`.
