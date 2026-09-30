# ADR-004: Contrato portable de handoffs

**Fecha:** 2026-09-16
**Estado:** Aceptada

## TL;DR

- **Problema:** agentes, sesiones y proveedores necesitan transferir trabajo y solicitudes sin depender de una conversación ni crear ownership, autoridad o estados contradictorios.
- **Decisión:** adoptar `handoff/v1`, un contrato común tipado, inmutable e idempotente para asignación, transferencia de ownership, verificación y consulta.
- **Por qué importa:** sin un contrato semántico común, la entrega de un mensaje podría confundirse con aceptación o permiso y causar pérdida de continuidad, doble escritura o resultados sin evidencia.

## Glosario rápido

- **Handoff:** artefacto persistente que dirige trabajo, responsabilidad o una solicitud a otro actor y conserva su lifecycle y resultado.
- **Ownership:** responsabilidad activa y única sobre una tarea, su estado, resultado y evidencia.
- **Context packet:** conjunto acotado de material de trabajo preparado para una ejecución; informa, pero no concede autoridad ni sustituye fuentes canónicas.
- **Idempotencia:** propiedad por la que repetir la misma entrega no crea otro handoff ni duplica sus efectos.
- **Adapter:** integración que traduce identidad, entrega o capacidades de un proveedor sin cambiar la semántica canónica.

## Contexto

T800R debe coordinar actores que pueden operar en sesiones y proveedores distintos.
Una conversación, un identificador local o un acuse de entrega no sobreviven de
forma portable ni demuestran que el receptor validó y asumió una solicitud. El
contrato también debe preservar el ownership único de ADR-003, reconciliarse con
el tracker y el repositorio reales y enlazar evidencia sin copiar las fuentes
canónicas.

El mismo mecanismo debe cubrir cuatro intenciones relacionadas, pero con efectos
distintos: proponer un owner inicial, sustituir un owner, solicitar verificación y
solicitar información, decisión o permiso. La solución no puede convertir toda
actualización ordinaria en un handoff ni incorporar por defecto todo el contexto
de trabajo.

## Alternativas evaluadas

| Alternativa | Beneficios | Costes y riesgos | Resultado |
| --- | --- | --- | --- |
| Coordinación conversacional o específica del proveedor | No exige un contrato adicional. | Pierde continuidad, dificulta auditoría y confunde entrega con aceptación. | Descartada. |
| Handoff sólo para cambios de ownership | Contrato pequeño. | Deja verificaciones y consultas dirigidas sin trazabilidad portable. | Descartada. |
| Contratos independientes por intención | Cada flujo puede especializarse. | Duplica identidad, referencias, lifecycle y lógica de adapters. | Descartada. |
| **Contrato común con payload tipado** | **Unifica identidad, correlación, validación y auditoría sin igualar los efectos de cada intención.** | **Exige campos condicionales y una matriz de transiciones estricta.** | **Aceptada.** |

### Por qué descartamos las otras

La coordinación conversacional y los contratos del proveedor no constituyen una
fuente durable ni portable. Limitar el artefacto al ownership dejaría fuera otras
solicitudes que condicionan trabajo o autorización. Separar los cuatro contratos
repetiría los mismos conceptos y haría más difícil seguir una cadena entre
sesiones y proveedores.

## Por qué la decisión (qué dice la industria)

Las prácticas revisadas de OpenAI y Anthropic para harnesses de agentes enfatizan
progreso persistente, estado verificable, contexto explícito y recuperación entre
ventanas de ejecución. Esas prácticas no definen `handoff/v1`, pero respaldan que
la continuidad no dependa del historial conversacional y que el estado declarado
se contraste con evidencia y fuentes reales. T800R adapta esa orientación a un
contrato propio sin adoptar automáticamente formatos o herramientas externas.

## Decisión

1. **Ámbito.** `handoff/v1` es obligatorio cuando una solicitud dirigida cruza
   actor, sesión o proveedor y su respuesta condiciona trabajo, ownership,
   validación o autorización. También se persiste dentro del mismo actor si debe
   sobrevivir a la ejecución o conservarse para auditoría.
2. **Tipos.** El contrato usa una envoltura común y un payload discriminado por
   `assignment`, `ownership_transfer`, `verification_request` o `consultation`.
3. **Envoltura.** Conserva `schema`, `id`, `type`, `status`, tiempos, emisor,
   receptor, sujeto, base, autoridad, referencias, correlación y eventos. Las
   identidades canónicas son lógicas; los identificadores del proveedor son
   aliases del adapter.
4. **Validación.** Antes de aceptar se comprueban estructura, referencias,
   precondiciones frente al estado real y semántica, autoridad y permisos. Un
   artefacto estructuralmente inválido no entra al lifecycle.
5. **Lifecycle.** Desde `pending` se permite `accepted`, `rejected`, `cancelled`,
   `expired` o `superseded`. Desde `accepted` sólo se permite `completed` o un
   `cancelled` coordinado. Los estados terminales son inmutables.
6. **Ownership.** En asignación y transferencia, aceptación, cambio del tracker y
   `completed` forman una operación condicional y atómica. Si base, owner, alcance
   o ausencia de conflicto dejaron de cumplirse, el ownership no cambia.
7. **Resultados.** `completed` satisface la intención del handoff, no
   necesariamente la tarea o el incremento. Ownership registra el cambio y su
   evidencia; verificación persiste revisión, cobertura, evidencia, hallazgos y
   veredicto; consulta persiste respuesta o decisión, justificación, condiciones
   y seguimiento.
8. **Rechazo.** Las categorías son `unresolved_reference`,
   `stale_or_conflicting_base`, `insufficient_request`,
   `insufficient_authority`, `recipient_unavailable_or_ineligible` y
   `policy_denied`. Cada rechazo incluye explicación y próxima acción.
9. **Integridad.** Identidad, intención, actores, sujeto, base, autoridad,
   referencias, correlación y payload son inmutables tras emitir. Reentregar el
   mismo identificador y contenido es idempotente; reutilizarlo con contenido
   distinto produce un diagnóstico de integridad y no altera el original.
10. **Separación.** El transporte sólo entrega, reintenta y aporta diagnóstico. El
    context packet aporta material acotado mediante una referencia separada.
    Ninguno concede autoridad, permisos u ownership ni cambia el lifecycle.
11. **Recuperación.** Un `pending` vigente puede reentregarse; uno vencido requiere
    otro handoff. Una solicitud aceptada se reanuda o cancela coordinadamente. El
    ownership completado sólo cambia con otro `ownership_transfer`; ante
    ambigüedad no se autoriza escritura.

## Consecuencias para el equipo

- Los adapters deben preservar identidad y semántica, no inferir aceptación desde
  señales del transporte.
- El orchestrator debe reconciliar base, tracker, repositorio, autoridad y
  conflictos antes de aplicar un handoff.
- Corregir, renovar, reasignar o revertir crea otro handoff correlacionado en vez
  de reescribir historia.
- Verificadores y consultados pueden completar su solicitud sin declarar
  completada la tarea; el seguimiento se aplica después al estado operativo.
- El contrato añade persistencia y validación, pero evita duplicar schemas y
  reduce el riesgo de doble escritura o pérdida silenciosa de obligaciones.

## Puntos abiertos

- ¿Qué representación física y ubicación tendrá `handoff/v1`? → sesión 11,
  arquitectura del MVP.
- ¿Cómo traducirá cada proveedor identidad, entrega y capacidades? → resuelto en
  sesión 8 y [ADR-007](ADR-007-contrato-de-capacidades-y-adapters-portables.md).
- ¿Cuál es la estructura y presupuesto del context packet referenciado? → resuelto
  en sesión 6 y [ADR-005](ADR-005-contrato-portable-de-contexto.md).
- ¿Qué controles ejecutables harán cumplir permisos y riesgo? → sesión 9,
  seguridad y gobernanza.

## Referencias

- Acuerdos canónicos: [sesión 5](../definition/session-05-handoffs.md).
- [ADR-003: Ciclo operativo, ownership y coordinación](ADR-003-ciclo-operativo-y-coordinacion.md).
- OpenAI: *Harness engineering* — https://openai.com/index/harness-engineering/
- Anthropic: *Effective harnesses for long-running agents* — https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents
- Anthropic: *Effective context engineering for AI agents* — https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents
