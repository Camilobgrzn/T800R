# Definición de producto de T800R

## Estado

- Fase: definición
- Última actualización: 2026-09-30
- Última sesión completada: 11 — arquitectura del MVP
- Sesión actual: 12 — validación y convergencia (`in_progress`)
- Seguimiento: [definition-tracker.md](definition-tracker.md)

Este documento es el índice rector de la definición. Cada unidad de
`definition/` es la fuente canónica de los acuerdos de su sesión. Las decisiones
arquitectónicas transversales, costosas de revertir o con alternativas relevantes
se registrarán además como ADRs.

Los documentos de `ideas/` son insumos para la discusión, no decisiones
aceptadas.

## Acuerdos iniciales

1. T800R será un toolkit reusable para incorporar un harness multiagente en
   otros repositorios.
2. El primer usuario será su autor, mediante tareas reales en sus propios
   repositorios.
3. El MVP debe demostrar compatibilidad con Codex, Claude Code y OpenCode.
4. La validación inicial combinará dogfooding en T800R con la adopción en otro
   repositorio real.
5. Las sesiones se delimitan por criterios de salida, no por duración fija.
6. Las decisiones se conservarán en la unidad canónica de cada sesión y, cuando
   corresponda, en ADRs.
7. Durante la definición no se escribirá código de producto. Sólo se realizará
   un spike técnico si una decisión no puede tomarse con evidencia suficiente
   y se aprueba explícitamente.

## Protocolo de las sesiones

Cada sesión seguirá este flujo:

1. Revisar su objetivo, las decisiones previas relevantes y las preguntas que
   debe resolver.
2. Comparar alternativas mediante criterios explícitos, beneficios, costes y
   riesgos.
3. Clasificar cada conclusión como `accepted`, `deferred` o `rejected` y
   registrar una justificación breve.
4. Actualizar la unidad canónica de la sesión con los acuerdos y las preguntas
   pendientes, y este índice si cambian el plan o los enlaces globales.
5. Crear un ADR sólo cuando la decisión sea transversal, difícil de revertir o
   necesite preservar por qué se descartaron otras alternativas.
6. Cerrar con el contexto mínimo requerido por la siguiente sesión.

Una sesión no termina si conserva una ambigüedad que bloquea la siguiente. Un
asunto puede aplazarse si se indica qué evidencia o decisión permitirá
resolverlo.

## Sesiones de definición

| Sesión | Tema | Decisiones obligatorias | Resultado esperado |
| --- | --- | --- | --- |
| 1 | Visión y problema | Problema, usuario, casos de uso, propuesta de valor, objetivos y no objetivos | Product charter y glosario inicial |
| 2 | Límites del producto | Responsabilidades del harness, del repositorio consumidor y del proveedor | Modelo de responsabilidades |
| 3 | Fuentes de verdad | Responsabilidades de Git, work tracker, OKF, memoria, skills y contexto efímero | Modelo de información canónico |
| 4 | Ciclo operativo | Bootstrap, ejecución, cierre, tareas, ownership, bloqueos, concurrencia y orchestrator | Lifecycle de sesión y tarea |
| 5 | Handoffs y coordinación | Campos, validación, caducidad, aceptación, rechazo y transferencia | Contrato `handoff/v1` |
| 6 | Contexto | Progressive disclosure, context packet, referencias, presupuestos, condiciones de parada, RTK y Context Mode | Contrato de contexto |
| 7 | Conocimiento | Taxonomía OKF, ubicación, front matter, curator, caducidad, indexación y Hindsight | Modelo de conocimiento |
| 8 | Portabilidad | Contrato común, capacidades mínimas, adapters y degradación entre proveedores | Especificación de adapters |
| 9 | Seguridad y gobernanza | Secretos, permisos, rutas protegidas, aprobaciones, aislamiento y auditoría | Baseline de seguridad |
| 10 | Experiencia del producto | Instalación, configuración, CLI, `init`, `doctor`, sincronización y actualización | Flujo de adopción |
| 11 | Arquitectura del MVP | Tecnología, estructura, módulos, schemas, extensibilidad, pruebas y componentes aplazados | Arquitectura técnica y ADRs |
| 12 | Validación y convergencia | Experimentos, repositorio piloto, métricas, criterios de éxito, backlog y roadmap | Especificación v0 y decisión de construir |

### Unidades canónicas y compatibilidad

Para anotar mejoras o preguntas, usa la [guía de revisiones](reviews/README.md)
y su [plantilla](reviews/TEMPLATE.md). El
[editor adversarial](adversarial-editor.md) prepara hallazgos fundamentados para
una segunda pasada; las anotaciones no modifican los acuerdos por sí mismas.

| Sesión | Unidad canónica | Cierre |
| --- | --- | --- |
| 1 | [S01: visión](definition/session-01-vision.md) | [S01-CIERRE](definition/session-01-vision.md#s01-cierre) |
| 2 | [S02: límites](definition/session-02-limits.md) | [S02-CIERRE](definition/session-02-limits.md#s02-cierre) |
| 3 | [S03: fuentes](definition/session-03-sources-of-truth.md) | [S03-CIERRE](definition/session-03-sources-of-truth.md#s03-cierre) |
| 4 | [S04: ciclo](definition/session-04-operating-cycle.md) | [S04-CIERRE](definition/session-04-operating-cycle.md#s04-cierre) |
| 5 | [S05: handoffs](definition/session-05-handoffs.md) | [S05-CIERRE](definition/session-05-handoffs.md#s05-cierre) |
| 6 | [S06: contexto](definition/session-06-context.md) | [S06-CIERRE](definition/session-06-context.md#s06-cierre) |
| 7 | [S07: conocimiento](definition/session-07-knowledge.md) | [S07-CIERRE](definition/session-07-knowledge.md#s07-cierre) |
| 8 | [S08: portabilidad](definition/session-08-portability.md) | [S08-CIERRE](definition/session-08-portability.md#s08-cierre) |
| 9 | [S09: seguridad y gobernanza](definition/session-09-security-governance.md) | [S09-CIERRE](definition/session-09-security-governance.md#s09-cierre) |
| 10 | [S10: experiencia del producto](definition/session-10-product-experience.md) | [S10-CIERRE](definition/session-10-product-experience.md#s10-cierre) |
| 11 | [S11: arquitectura del MVP](definition/session-11-mvp-architecture.md) | [S11-CIERRE](definition/session-11-mvp-architecture.md#s11-cierre) |
| 12 | [S12: validación y convergencia](definition/session-12-validation-convergence.md) | Cerrada; construcción autorizada (2026-10-13) |

## Preguntas pendientes globales

### Revisión transversal de prácticas de harnesses

**Compromiso aceptado:** revisar los artículos de OpenAI y Anthropic para
fortalecer T800R en todos los aspectos del harness, no sólo en conocimiento,
fuentes de verdad u OKF. El usuario explicitó este alcance transversal el
2026-09-14.

Fuentes de partida:

- [OpenAI — Harness engineering](https://openai.com/index/harness-engineering/).
- [Anthropic — Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents).
- [Anthropic — Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents).

La revisión se realizará gradualmente en la sesión correspondiente, contrastando
cada práctica con los objetivos y acuerdos de T800R. Los artículos son evidencia
y experiencias de sus autores, no decisiones adoptadas automáticamente.

| Área a revisar | Sesiones donde se evaluará |
| --- | --- |
| Organización del repositorio, instrucciones y fuentes de verdad | 3 |
| Inicialización, planificación, progreso incremental, ejecución prolongada, recuperación y cierre | 4 |
| Coordinación, delegación, revisión entre agentes y transferencia de trabajo | 4 y 5 |
| Selección de contexto, navegación progresiva y continuidad entre ventanas | 6 |
| Memoria, aprendizaje, mantenimiento y vigencia de documentación | 7 |
| Herramientas, capacidades de proveedores y acceso de los agentes al entorno | 8 |
| Aislamiento, permisos, límites de autonomía e intervención humana | 9 |
| Preparación del entorno, diagnóstico y experiencia de adopción | 10 |
| Arquitectura, restricciones comprobables y control de degradación del código | 11 |
| Pruebas, observabilidad, validación de extremo a extremo, calidad, costes y ciclos de mejora | 11 y 12 |

Para cada práctica revisada se registrarán fuente, problema que resuelve,
beneficios, costes, riesgos, decisión `accepted`/`deferred`/`rejected` y
justificación. Una decisión aplazada incluirá un punto concreto de resolución.
Antes de cerrar la definición se comprobará la cobertura de estas áreas y se
explicitarán los casos en que los artículos no aporten evidencia suficiente.

Estado de la revisión transversal: **completada el 2026-10-06 y aprobada el
2026-10-09**; cierre en
[revision-transversal-cierre.md](revision-transversal-cierre.md), registrado
en [S12](definition/session-12-validation-convergence.md#decisiones). S03, S04
y S10 registraron las prácticas de sus áreas en sus unidades; S05-S09 no
registraron prácticas por unidad y el contraste quedó en los «Por qué la
decisión» de ADR-004, ADR-005, ADR-007 y ADR-010 y en la tabla de cobertura de
la §2 del cierre. S12 completó validación de extremo a extremo, observabilidad
del piloto, calidad, costes y ciclos de mejora (31 prácticas: 18 `accepted`, 8
`deferred` con punto de resolución en el roadmap v0 o el backlog, 5 `rejected`)
y la comprobación de cobertura: las diez áreas tienen decisiones y pendientes
trazables. Los artículos no aportan evidencia suficiente en costes económicos,
umbrales, permisos y aprobación humana, portabilidad entre proveedores,
adopción sobre repositorios existentes ni arquitectura multiagente; esas
decisiones se sustentan en acuerdos propios e investigación complementaria y
se validan con E1-E5.

### Preguntas de producto aún abiertas

- ¿Qué tuplas de adapter, proveedor, versión, sistema operativo y arquitectura
  superan conformidad para Codex, Claude Code, OpenCode, Beads y Docker?
- ¿Qué repositorio piloto, corpus, métricas y umbrales determinan el éxito de la
  especificación v0?
- ¿Qué componentes diferidos entran al backlog y en qué orden después de medir el
  baseline del MVP?

## Criterio de cierre de la definición

La construcción puede comenzar cuando:

- exista un objetivo y un límite de producto inequívocos;
- cada tipo de información tenga una fuente canónica;
- estén definidos el lifecycle, el context packet y el handoff;
- exista un contrato portable para los tres agentes;
- se haya acordado el baseline de seguridad;
- exista un flujo verificable de adopción, actualización y retiro que preserve
  fuentes canónicas y personalizaciones del repositorio consumidor;
- estén separados el MVP y las capacidades futuras;
- exista una arquitectura técnica implementable;
- haya pruebas de aceptación para T800R y el repositorio piloto;
- se haya completado la revisión transversal de prácticas de OpenAI y Anthropic,
  con decisiones y pendientes trazables para las áreas del harness;
- las incógnitas restantes no bloqueen la implementación; y
- el backlog inicial esté ordenado por dependencias.

## Enlaces de compatibilidad

<a id="sesión-1-visión-y-problema"></a>
Sesión 1: [S01](definition/session-01-vision.md#s01-cierre).

<a id="sesión-2-límites-del-producto"></a>
Sesión 2: [S02](definition/session-02-limits.md#s02-cierre).

<a id="sesión-3-fuentes-de-verdad"></a>
Sesión 3: [S03](definition/session-03-sources-of-truth.md#s03-cierre).

<a id="sesión-4-ciclo-operativo"></a>
<a id="comprobación-de-cierre-3"></a>
Sesión 4: [S04](definition/session-04-operating-cycle.md#s04-cierre).

<a id="sesión-5-handoffs-y-coordinación"></a>
<a id="comprobación-de-cierre-4"></a>
Sesión 5: [S05](definition/session-05-handoffs.md#s05-cierre).

<a id="sesión-6-contexto"></a>
<a id="comprobación-de-cierre-5"></a>
Sesión 6: [S06](definition/session-06-context.md#s06-cierre).

<a id="sesión-7-conocimiento"></a>
<a id="comprobación-de-cierre-6"></a>
Sesión 7: [S07](definition/session-07-knowledge.md#s07-cierre).

<a id="sesión-8-portabilidad"></a>
<a id="comprobación-de-cierre-7"></a>
Sesión 8: [S08](definition/session-08-portability.md#s08-cierre).

<a id="sesión-9-seguridad-y-gobernanza"></a>
<a id="comprobación-de-cierre-8"></a>
Sesión 9: [S09](definition/session-09-security-governance.md#s09-cierre).

<a id="sesión-10-experiencia-del-producto"></a>
Sesión 10: [S10](definition/session-10-product-experience.md#s10-cierre).

<a id="sesión-11-arquitectura-del-mvp"></a>
Sesión 11: [S11](definition/session-11-mvp-architecture.md#s11-cierre).
