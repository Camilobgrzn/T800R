# Especificaciones evolutivas: OpenSpec y Spec Kit

Consulta: 2026-09-15. Sesión 4. Investigación documental; no se ejecutaron herramientas.

Actualización posterior: el usuario aceptó dirección general con detalle por
cambio/incremento, evolución con trazabilidad y adaptación de las herramientas
de referencia. Los acuerdos vigentes están en la sesión 4 del documento rector;
este informe conserva las alternativas y propuestas que los fundamentaron.

## Pregunta y fuentes

El usuario quiere desarrollo guiado por especificaciones (SDD; escribió «SSD» en
la conversación), sin detallar todos los features anticipadamente. Le preocupa
que hipótesis refutadas durante construcción requieran cambios en el producto y
el diseño. Se investiga cómo conservar acuerdos y permitir aprendizaje.

| Proyecto | Revisión examinada |
| --- | --- |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec/tree/9d4e5974e5c0d9a09b9c6c1e1eb0975e80ec4461) | `9d4e5974e5c0d9a09b9c6c1e1eb0975e80ec4461` |
| [github/spec-kit](https://github.com/github/spec-kit/tree/319fb84f5a6dc8db1cd8558e0a5504948b6ca2ea) | `319fb84f5a6dc8db1cd8558e0a5504948b6ca2ea` |

## OpenSpec

`docs/concepts.md` distingue specs vigentes por capacidad de carpetas de cambios
propuestos, con propuesta, deltas de requisitos, diseño y tareas. Los deltas
expresan adiciones, modificaciones, eliminaciones y, en el schema, renombrados.
Archivar puede integrar deltas en las specs conservando el cambio histórico.

`docs/editing-changes.md` admite editar artefactos durante implementación. Propone
actualizar el mismo cambio si se refina el objetivo y abrir otro si la intención
cambia fundamentalmente. Las tareas pueden evolucionar. Distingue documentación
desactualizada de implementación desviada, pero deja la autoridad de esas
modificaciones al flujo del equipo.

El schema `schemas/spec-driven/schema.yaml` separa comportamiento, diseño técnico
y tareas. Specs y diseño dependen de la propuesta; tareas de ambos y apply de
tareas. La filosofía de ausencia de fases rígidas no significa ausencia de
dependencias. Permite `skip_specs` para cambios sin comportamiento nuevo, como
ciertos refactors o documentación; no inventa requisitos para llenar una plantilla.

El contrato de agente documenta salida estructurada y distingue planificación
completa de implementación terminada: `isPlanningComplete` y su alias `isComplete`
no prueban entrega. El formato de deltas tampoco garantiza independencia semántica
entre cambios concurrentes. Editar partes diferentes no evita incompatibilidades
de requisitos compartidos.

**Aporte:** separar estado de referencia, cambio propuesto e historia; especificar
el cambio que se construye. **Adaptación:** T800R debe distinguir propuestas de
acuerdos autorizados, conservar restricciones técnicas y evaluar impacto antes
de permitir que otros agentes continúen. Archivar no equivale a desplegar.

## Spec Kit

`docs/concepts/spec-persistence.md` define tres convenciones, ninguna obligatoria:

| Modelo | Regla | Coste o riesgo |
| --- | --- | --- |
| Flow-forward | Crear un nuevo directorio de feature para cambios posteriores; preservar el anterior. | Historia clara, pero contexto fragmentado y duplicación. |
| Living spec | Modificar el contrato y revisar o regenerar derivados. | Coherencia; se puede perder razonamiento si se descartan planes sin conservarlo. |
| Flow-back | Capturar hallazgos en cualquier artefacto y reconciliar el conjunto. | Flexibilidad; divergencia silenciosa si la reconciliación no ocurre. |

`docs/guides/evolving-specs.md` distingue evolución de features de actualización
de las herramientas. Ante un hallazgo propone clasificar si cambia comportamiento,
estrategia, tareas o sólo código; reconciliar antes de continuar. La plantilla de
spec organiza historias priorizadas verificables independientemente y supuestos.
`complex-features.md` propone acotar cada ejecución y, si hace falta, dividir
features en sub-specs; no exige describir todo el producto de una vez.

`templates/commands/analyze.md` compara requisitos, plan y tareas, incluyendo
cobertura, ambigüedades y contradicciones. `converge.md` inspecciona implementación
frente a artefactos y agrega trabajo pendiente sin reescribir el contrato. Sus
plantillas son procedimientos para agentes, no evidencia de ejecución satisfactoria.
Una conclusión por inspección no sustituye pruebas sobre una revisión concreta.

**Aporte:** separar duración de la spec de su política de modificación y comprobar
coherencia entre artefactos. **Adaptación:** T800R ya mantiene el tracker como
autoridad operativa, y las decisiones relevantes deben sobrevivir a regeneraciones.
Flow-back no puede dar a código o tareas autoridad para cambiar acuerdos humanos.

## Relación con las referencias anteriores

BMAD produce contratos por unidad/epic y bloquea lagunas de intención; Superpowers
relaciona spec y plan; Addy usa spec → plan → tareas y permite sistemas externos
de especificación. Matt sintetiza especificaciones y las divide en tickets;
nWave transforma requisitos en escenarios y roadmap. Comparten prácticas de SDD,
pero difieren en autoridad, granularidad, aprobación y mantenimiento. No se debe
atribuirles una única metodología ni afirmar que usan OpenSpec o Spec Kit sin
evidencia de esa integración concreta.

## Propuesta para T800R, pendiente de aceptación

1. Mantener dirección de producto, restricciones y mapa de capacidades a alto nivel;
   el backlog futuro puede conservar preguntas e hipótesis sin fingir definición.
2. Detallar specs por cambio o incremento coherente antes de construirlo, con
   requisitos, aceptación y diseño técnico/ADRs enlazados. Reutilizar contratos
   compartidos y resolver interfaces necesarias para trabajo paralelo.
3. Ubicar elaboración funcional en plan y decisiones técnicas en design; ambas
   iteran. Las specs se consultan y evolucionan durante todo el metaflujo aceptado.
4. Al caer una hipótesis, registrar evidencia y clasificar impacto: código o plan
   dentro de acuerdos permite ajuste autónomo; cambio de comportamiento, alcance
   o decisión técnica acordada reabre colaboración en el ámbito afectado.
5. Relacionar revisión de spec con tareas, código y evidencia. Antes de continuar
   trabajo afectado, reconciliar derivados y determinar qué debe revalidarse.
   Conservar trabajo válido e historial; continuar tareas independientes.
6. Distinguir lo propuesto, aprobado, implementado/verificado y desplegado. Una
   spec aprobada no demuestra que producción ya tenga ese comportamiento.

Las rutas, formatos, herramientas, estados exactos y momento de consolidar deltas
siguen pendientes. OpenSpec aporta un modelo especialmente pertinente; Spec Kit
también ofrece evolución explícita. No se selecciona ninguno por esta lectura.

## Rutas examinadas en los commits fijados

- OpenSpec: `docs/concepts.md`, `docs/editing-changes.md`, `docs/agent-contract.md`,
  `schemas/spec-driven/schema.yaml`.
- Spec Kit: `docs/guides/evolving-specs.md`, `docs/concepts/spec-persistence.md`,
  `docs/concepts/complex-features.md`, `templates/spec-template.md`,
  `templates/commands/analyze.md`, `templates/commands/converge.md`.
