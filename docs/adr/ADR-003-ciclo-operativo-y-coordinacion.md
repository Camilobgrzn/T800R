# ADR-003: Ciclo operativo, ownership y coordinación

**Fecha:** 2026-09-15
**Estado:** Aceptada

## TL;DR

- **Problema:** varios agentes y sesiones deben conducir incrementos sin inventar acuerdos, duplicar trabajo, sobrescribir cambios ni declarar resultados sin evidencia.
- **Decisión:** adoptar un ciclo adaptable por incrementos, con gates explícitos, `stage` y `status` separados, orchestrator delgado, ownership único de escritura, verificación proporcional y cierre/reanudación persistentes.
- **Por qué importa:** la autonomía sólo escala si el estado real, la autoridad, la escritura y la evidencia pueden reconciliarse entre agentes, sesiones y proveedores.

## Glosario rápido

- **Incremento:** cambio de producto autorizado que recorre los gates aplicables del SDLC.
- **Tarea:** unidad de trabajo con alcance, owner, dependencias y criterio de cierre.
- **Sesión:** contenedor efímero de ejecución; no es fuente de verdad ni implica cierre del trabajo.
- **Stage:** etapa funcional del trabajo: `plan`, `design`, `build`, `verify` o `deploy`.
- **Status:** estado operativo: `pending`, `ready`, `in_progress`, `waiting`, `blocked`, `completed` o `cancelled`.
- **Owner:** único responsable activo de una tarea, su estado, resultado y evidencia.

## Contexto

T800R debe planificar, ejecutar y supervisar agentes con máxima autonomía dentro
de acuerdos funcionales y técnicos. Debe soportar agentes de una misma sesión y
sesiones independientes sobre el mismo repositorio, preservando trabajo válido y
permitiendo continuar tareas independientes ante consultas o bloqueos.

Las referencias estudiadas muestran prácticas útiles, pero no un contrato común:
Addy Osmani, nWave, Matt Pocock, Superpowers, BMAD, OpenSpec, Spec Kit y el
playbook AI-Native SDLC de Anthropic separan en distinto grado planificación,
ejecución, revisión y gates. Anthropic, OpenAI, Google y Microsoft también
advierten que el multiagente añade coste y coordinación y debe utilizarse donde
aporta independencia o especialidad real.

## Alternativas evaluadas

| Alternativa | Beneficio | Coste o riesgo | Resultado |
| --- | --- | --- | --- |
| Flujo rígido con paquete documental fijo y aprobación por etapa | Uniformidad y gates visibles. | Burocracia, falsa certeza y poca adaptación al aprendizaje. | No elegida. |
| Orchestrator monolítico que investiga, planifica, ejecuta y verifica | Menos handoffs y contexto compartido. | Sobrecarga, menor independencia y punto único de fallo. | No elegida. |
| Equipo fijo de agentes especializados para todo cambio | Roles visibles e independencia constante. | Coste y handoffs incluso cuando no aportan valor. | No elegida como regla universal. |
| **Ciclo adaptable con orchestrator delgado y capacidades bajo demanda** | **Coherencia central, autonomía proporcional y separación cuando el riesgo lo exige.** | **Requiere contratos, evidencia, ownership y recuperación explícitos.** | **Aceptada.** |

## Decisión

1. **Metaflujo por incremento.** El ciclo es `plan → design → build → verify →
   deploy`. `Maintain` es continuo y transversal; una señal que exige cambiar el
   producto origina un nuevo incremento en `plan`, no una etapa interminable.
2. **Frontera y preparación.** `plan` acuerda qué se logrará; `design` decide cómo
   construirlo, descompone y define validaciones. El detalle es evolutivo por
   incremento. `build` requiere readiness demostrado y autorización humana por
   incremento; no exige un paquete fijo de documentos.
3. **Gates e iteración.** El incremento avanza con acuerdos funcionales,
   readiness, revisión candidata, verificación, aceptación humana y deploy
   resuelto. Un hallazgo devuelve sólo el ámbito afectado y obliga a revalidar sus
   dependencias. Las tareas contribuyen a una etapa, pero no recorren todas.
4. **Estado operativo.** `stage` y `status` son dimensiones separadas. El camino
   normal de status es `pending → ready → in_progress → completed`; `waiting`,
   `blocked` y `cancelled` conservan causa e historia. Toda transición registra
   razón, evidencia y responsable. `completed` sólo se reabre si un cambio, fallo
   o evidencia nueva invalida el cierre.
5. **Sesiones.** Una sesión no tiene `stage`. Antes de ejecutar reconcilia contexto
   mínimo, repositorio, estado, evidencia, permisos y ownership. Su cierre persiste
   checkpoint, cambios reales, estados, evidencia, disposición del ownership y
   próxima acción. Reanudar crea otra sesión enlazada y vuelve a reconciliar.
6. **Ownership y concurrencia.** Cada tarea tiene un owner activo. La asignación
   declara base, escritura y dependencias. Sólo hay escritura paralela disjunta o
   integración/secuenciación explícita; una superficie compartida tiene un único
   escritor o integrador. Lectores y verificadores pueden operar en paralelo.
7. **Recuperación.** No se toma ownership silenciosamente ni se interpreta el fin
   de una conversación como abandono. Antes de reasignar se preserva el trabajo,
   se comprueba el estado real y se confirma que no existe otro escritor. Ante
   duda, no se autoriza escritura.
8. **Roles bajo demanda.** El orchestrator reconcilia, selecciona trabajo, asigna
   ownership, coordina dependencias y aplica gates. Planner, worker y verifier
   realizan planificación/descomposición, ejecución y verificación cuando hacen
   falta. Runtime/policy aplica controles deterministas. Son capacidades, no
   agentes permanentes.
9. **Validación y cierre.** Toda tarea se valida. Un verifier independiente es
   obligatorio, proporcional o innecesario según consecuencias, alcance y
   verificabilidad. Tarea, incremento y sesión tienen cierres distintos y
   verificables; finalizar una ejecución no completa el trabajo. *Precisión
   2026-09-30 (S12, `REV-2026-105`): independiente significa que el `actor_id`
   no fue worker ni owner de la tarea en ninguna ejecución; sin historial
   suficiente, no elegible.*
10. **Aceptación y deploy.** La aceptación humana final ocurre después de
    `verify` y antes de `deploy`. Entornos reversibles preautorizados admiten
    despliegue autónomo; producción, efectos externos o acciones irreversibles
    requieren autorización explícita. El incremento sólo completa con deploy
    resuelto y comprobaciones posteriores, o constancia de que no aplica.
11. **Consultas y espera.** Se persisten pregunta o acción, autoridad, motivo,
    consecuencias, ámbito, dependencias, checkpoint, revisión, evidencia, trabajo
    detenido e independiente, alternativas, condición de resolución y próxima
    acción. La respuesta recalcula estado, dependencias y validaciones.
12. **Política, maintain y evaluación.** Las instrucciones y skills orientan, no
    conceden permisos. Las obligaciones mecanizables pertenecen a runtime/policy;
    las semánticas usan evidencia y revisión proporcional. `Maintain` puede
    diagnosticar en lectura, crear drafts y ejecutar sólo runbooks reversibles
    explícitamente preautorizados. Cambios del harness que puedan alterar su
    comportamiento requieren evals regresivos proporcionales.

## Consecuencias

- T800R conserva accountability de extremo a extremo sin exigir que un único
  agente haga todo ni crear un agente por cada rol.
- El paralelismo queda limitado por escritura, dependencias, integración y
  capacidad de revisión, no sólo por disponibilidad de agentes o worktrees.
- Cada incremento necesita autorización humana para construir; cada tarea no.
- Los estados declarados no sustituyen la comprobación del repositorio ni la
  evidencia vinculada a una revisión.
- La recuperación puede detener escrituras dudosas para preservar trabajo ajeno.
- Evals, verificadores y controles deterministas añaden coste proporcional al
  riesgo; su configuración concreta deberá medirse.

## Detalles diferidos

- Campos, schema, rutas, timeout, canal, aceptación y rechazo de `handoff/v1` → sesión 5.
- Presupuesto y carga de contexto → sesión 6.
- Representación del conocimiento y OKF → sesión 7.
- Portabilidad y contrato de adapters → resueltos en sesión 8 y ADR-007; mecanismos concretos → sesiones 11 y 12.
- Permisos ejecutables, política de riesgo y runbooks concretos → sesión 9.
- Experiencia y configuración del producto → sesión 10.
- Arquitectura del runtime, enforcement y evals → sesión 11.
- Corpus, baseline, umbrales, métricas y validación → sesión 12.

## Referencias

- Acuerdos canónicos: [sesión 4](../definition/session-04-operating-cycle.md).
- [ADR-001: Autonomía y responsabilidades](ADR-001-autonomia-y-responsabilidades.md).
- [ADR-002: Fuentes canónicas y conocimiento](ADR-002-fuentes-canonicas-y-conocimiento.md).
- [Referencias del SDLC](../research-sdlc-references.md).
- [Superpowers y BMAD](../research-superpowers-bmad.md).
- [Especificaciones evolutivas](../research-evolutionary-specs.md).
- [Responsabilidades del orchestrator](../research-orchestrator-responsibilities.md).
- [AI-Native SDLC playbook](../research-ai-native-sdlc-playbook.md).
