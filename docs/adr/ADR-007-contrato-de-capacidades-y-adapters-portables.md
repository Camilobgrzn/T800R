# ADR-007: Contrato de capacidades y adapters portables

**Fecha:** 2026-09-22
**Estado:** Aceptada

## TL;DR

- **Problema:** Codex, Claude Code y OpenCode ofrecen primitivas distintas y sus señales locales no garantizan los contratos, la identidad ni la continuidad de T800R.
- **Decisión:** adoptar un baseline de capacidades semánticas, perfiles opcionales y adapters con descriptor, snapshot efectivo, proyecciones no autoritativas y conformidad verificable.
- **Por qué importa:** sin esta frontera, cambiar de proveedor podría alterar silenciosamente ownership, contexto, permisos, evidencia o condiciones de parada.

## Glosario rápido

- **Adapter:** integración que traduce entre los contratos T800R y las primitivas de un proveedor sin cambiar su significado.
- **Baseline:** conjunto mínimo de capacidades que toda integración debe demostrar para llamarse compatible.
- **Perfil:** grupo opcional de capacidades que una tarea puede exigir además del baseline.
- **Descriptor:** declaración versionada del soporte potencial de una revisión del adapter.
- **Snapshot efectivo:** observación versionada de las capacidades, límites y restricciones disponibles en una ejecución concreta.
- **Proyección:** representación acotada de un artefacto canónico T800R para que un proveedor pueda ejecutar una acción.

## Contexto

T800R debe operar con Codex, Claude Code y OpenCode. Los tres documentan acceso a
herramientas, sesiones, instrucciones, subagentes y skills en grados distintos,
pero no implementan de forma nativa `handoff/v1`, el context packet, la identidad
portable ni las reglas de autoridad y reconciliación de T800R.

Usar el mínimo común de sus APIs eliminaría garantías ya aceptadas. Exigir una API
idéntica forzaría equivalencias falsas. Delegar toda la semántica a cada adapter
haría imposible comparar resultados o saber si una degradación continúa siendo
segura.

La documentación primaria sólo demuestra primitivas candidatas. En esta fase no
se han construido adapters ni ejecutado pruebas de conformidad, por lo que los
tres proveedores permanecen `target`, no `compatible`.

## Alternativas evaluadas

| Alternativa | Beneficios | Costes y riesgos | Resultado |
| --- | --- | --- | --- |
| Intercambio mínimo de artefactos | Superficie pequeña. | No preserva ejecución, reconciliación, continuidad ni evidencia. | Descartada. |
| API operacional idéntica | Interfaz uniforme. | Acopla el núcleo a primitivas accidentales y oculta diferencias. | Descartada. |
| Estado del proveedor coautoritativo | Aprovecha sesiones y metadatos locales. | Introduce conflictos y transiciones fuera de los contratos comunes. | Descartada. |
| **Capacidades semánticas y proyecciones** | **Exige resultados comparables sin imponer mecanismos idénticos.** | **Requiere descriptor, snapshot, evidencia y pruebas por proveedor.** | **Aceptada.** |

### Por qué descartamos las otras

El intercambio mínimo no permite comprobar las garantías acordadas. Una API
idéntica confunde uniformidad con equivalencia. El estado local de una sesión,
thread o mensaje puede ayudar a ejecutar, pero no demuestra aceptación, permiso,
ownership ni continuidad canónica y por eso no puede compartir autoridad con los
artefactos T800R.

## Por qué la decisión (qué dice la industria)

Agent Skills ofrece un núcleo común de skills que los tres proveedores pueden
consumir, aunque cada uno añade extensiones y reglas de descubrimiento. Las guías
de OpenAI y Anthropic para harnesses de larga duración recomiendan estado
persistente, fuentes explícitas, contexto acotado y recuperación verificable. La
documentación de los proveedores también muestra diferencias en IDs, precedencia
de instrucciones, permisos, compactación, subagentes y aislamiento.

Estas fuentes respaldan separar semántica común de mecanismos locales, pero no
certifican un adapter. T800R exige pruebas propias sobre la integración completa.

## Decisión

1. **Frontera.** El núcleo define precondiciones, invariantes, resultados,
   evidencia y parada. El adapter traduce o emula y no puede inventar
   cumplimiento.
2. **Baseline.** Toda integración demuestra contratos; identidad y correlación;
   referencias y reconciliación; contexto y límites; acciones y herramientas;
   continuidad durable; y evidencia y diagnóstico.
3. **Perfiles.** `delegation`, `isolated_execution`, `portable_skills` y
   `semantic_retrieval` son opcionales y se exigen por tarea.
4. **Declaración.** Cada revisión publica descriptor de soporte potencial y cada
   ejecución produce snapshot efectivo. La selección usa el snapshot vigente.
5. **Estados.** La realización es `native`, `emulated` o `absent`; la verificación
   es `verified`, `unverified` o `stale`; los límites son restricciones separadas.
6. **Elegibilidad.** Realizaciones nativas y emuladas conformes son equivalentes.
   Los requisitos son `required`, `relevant` u `optional`; el baseline siempre es
   `required`.
7. **Recuperación.** Ante un faltante obligatorio se reconcilia, se busca otro
   adapter, se descompone sólo si se preservan contratos y, finalmente, se
   consulta o bloquea. Nunca se rebaja el requisito.
8. **Identidad.** `actor_id` persiste y `execution_id` identifica cada ejecución.
   IDs locales son aliases acotados, vigentes y verificables. Roles y modelos no
   son identidad.
9. **Conocimiento.** `knowledge_id` permanece estable y cada revisión registra su
   identidad Open Knowledge Format por bundle y ruta lógica. Las referencias son
   `exact` o `current`; no hay redirección silenciosa.
10. **Skills e instrucciones.** Agent Skills es la base del perfil T800R. Las
    instrucciones se resuelven desde fuentes registradas y luego se proyectan;
    extensiones y precedencia de proveedor no cambian autoridad ni permisos.
11. **Estado canónico.** El proveedor recibe una proyección y devuelve resultados
    candidatos. Sólo la validación y reconciliación comunes persisten eventos o
    transiciones canónicas.
12. **Conformidad.** El baseline requiere pruebas estructurales, conductuales, de
    integración y resiliencia. `compatible` se reserva a una revisión que las
    supera; durante definición los proveedores son `target`.
13. **Vigencia.** La evidencia se invalida por impacto de marcadores, sin TTL
    universal. Las condiciones de carga son predicados declarativos con resultado
    `true`, `false` o `unknown`.
14. **Diferimientos.** RTK, Context Mode, Hindsight, worktrees y equivalentes son
    candidatos opcionales. Arquitectura seleccionará mecanismos y validación
    ejecutará la conformidad y las comparaciones.

## Consecuencias para el equipo

- Un adapter no se considera compatible por listar APIs o completar una tarea.
- Cada asignación compara requisitos con un snapshot efectivo y verificable.
- Cambiar de proveedor no cambia los contratos, el ownership ni la autoridad.
- Las proyecciones pueden aprovechar funciones nativas sin convertirlas en fuente
  canónica.
- La construcción deberá incluir fixtures y pruebas por capacidad y proveedor.
- La sesión 12 deberá demostrar el baseline para Codex, Claude Code y OpenCode y
  certificar por separado los perfiles incluidos en el MVP.

## Puntos abiertos

- ¿Qué controles ejecutables aplican permisos, secretos, aprobaciones y rutas protegidas? → sesión 9.
- ¿Cómo se distribuyen y actualizan adapters, instrucciones y skills? → sesión 10.
- ¿Qué schemas, almacenamiento, runtime y mecanismos concretos implementan el contrato? → sesión 11.
- ¿Qué adapters y perfiles superan conformidad y con qué métricas? → sesión 12.

## Referencias

- Acuerdos canónicos: [sesión 8](../definition/session-08-portability.md).
- [Investigación comparativa de proveedores](../research-portability-providers.md).
- [ADR-003: Ciclo operativo, ownership y coordinación](ADR-003-ciclo-operativo-y-coordinacion.md).
- [ADR-004: Contrato portable de handoffs](ADR-004-contrato-portable-de-handoffs.md).
- [ADR-005: Contrato portable de contexto](ADR-005-contrato-portable-de-contexto.md).
- [ADR-006: Modelo portable de conocimiento](ADR-006-modelo-portable-de-conocimiento.md).
- Agent Skills: *Specification* — https://agentskills.io/specification
- OpenAI: *Harness engineering* — https://openai.com/index/harness-engineering/
- Anthropic: *Effective harnesses for long-running agents* — https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents
