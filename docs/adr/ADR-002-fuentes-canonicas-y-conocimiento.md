# ADR-002: Fuentes canónicas y conocimiento con procedencia

**Fecha:** 2026-09-14
**Estado:** Aceptada

## TL;DR

- **Problema:** varios agentes pueden actuar sobre copias, recuerdos o estados declarados que no coinciden con los acuerdos y la evidencia del proyecto.
- **Decisión:** asignar autoridad por tipo de información, conectar las fuentes mediante referencias y persistir lo necesario para continuar fuera del contexto de cada ejecución.
- **Por qué importa:** la autonomía necesita distinguir qué se acordó, qué ocurrió y qué sólo se supone, sin depender de una conversación o proveedor.

## Glosario rápido

- **Fuente canónica:** registro autorizado para un tipo de información y ámbito; no implica que una sola fuente resuelva todas las preguntas.
- **Derivado:** índice, resumen o representación producida desde otras fuentes, cuya autoridad no sustituye a la de sus originales.
- **Work tracker:** registro del plan y estado operativo, incluidas tareas, responsables, dependencias y bloqueos.
- **Skill:** procedimiento reutilizable con condiciones de aplicación, pasos, límites, resultado verificable y posibles recursos de apoyo.
- **Open Knowledge Format (OKF):** especificación abierta para representar e intercambiar conocimiento; se evaluará para T800R, sin adopción de formato o versión en este ADR.

## Contexto

T800R conducirá agentes desde una definición funcional y técnica confirmada por
la persona. Debe preservar trabajo entre agentes de una sesión y de sesiones
independientes, y funcionar con Codex, Claude Code y OpenCode.

En la sesión 3, el usuario requirió incorporar fuentes del proyecto tanto durante
la configuración inicial como durante su evolución. El registro debe construirse
colaborativamente mediante preguntas y permitir autonomía dentro de los criterios
de autoridad acordados.

Dos problemas condicionan el modelo:

1. **Confusión entre estado y evidencia.** Un commit registra cambios, pero no
   demuestra su funcionamiento. Marcar una tarea terminada tampoco sustituye
   validaciones pertinentes a la revisión entregada.
2. **Confusión entre persistencia y autoridad.** Conservar una hipótesis, generar
   un resumen o cargar una instrucción en el contexto no modifica los acuerdos
   del proyecto ni convierte esa información en conocimiento confirmado.

La investigación sobre harnesses, conocimiento y skills aporta prácticas de
orientación progresiva, mantenimiento y evaluación. Su uso se decide por práctica;
los relatos externos no reemplazan los límites de autonomía de T800R.

## Alternativas evaluadas

| Alternativa | Continuidad y autoridad | Coste | Resultado |
| --- | --- | --- | --- |
| Depender de conversaciones y notas particulares, como situación de partida. | Obliga a reconstruir contexto y confiar en relatos previos. | Preparación e investigación repetidas. | Insuficiente para el objetivo de continuidad. |
| Concentrar también la definición en el tracker. | Reduce enlaces, pero puede fragmentar acuerdos entre tareas. | Mezcla definición y estado operativo. | No elegida frente a documentos y tracker con responsabilidades separadas. |
| **Fuentes por tipo de información, referencias y comprobación de coherencia.** | **Distingue acuerdos, estado, evidencia y derivados.** | **Mantener referencias, vigencia y comprobaciones.** | **Aceptada por el usuario.** |

### Por qué descartamos las otras

La conversación y las notas no dan por sí solas una base verificable para retomar
entre agentes. Concentrar definición y progreso en tareas dificulta revisar el
entendimiento completo y conservarlo mientras cambia el plan. El modelo elegido
acepta el coste de mantener referencias para evitar autoridades duplicadas.

## Por qué la decisión (qué dice la industria)

W3C, en *Data on the Web Best Practices*, recomienda informar procedencia,
versiones e identificadores que permitan evaluar y reutilizar información.
PROV explica cómo representar fuentes y derivaciones. Son referencias para la
trazabilidad; no obligan a adoptar sus tecnologías ni garantizan veracidad.

OpenAI describe un punto de entrada breve con documentación estructurada y
mantenimiento activo; Anthropic documenta progreso persistente y comprobaciones
entre sesiones. Agent Skills define empaquetado y carga progresiva, y sus guías
recomiendan evaluar activación y resultados. Son evidencia de prácticas útiles,
no una demostración de que el diseño de T800R ya funciona en los tres proveedores.

## Decisión

1. Asignar las siguientes responsabilidades:

   | Fuente o capa | Responsabilidad |
   | --- | --- |
   | Especificaciones | Acuerdos funcionales y técnicos y criterios de aceptación. |
   | ADRs | Decisiones relevantes y sus razones. |
   | Work tracker | Plan ejecutable y estado operativo; enlaces a entrega y evidencia. |
   | Git | Contenido versionado e historial de revisiones. |
   | Evidencia | Comprobaciones, condiciones y resultados vinculados a la revisión examinada. |
   | Registro de fuentes | Origen, ámbito, papel, versión aplicable, acceso y criterios de autoridad. |
   | Conocimiento mantenido | Conexiones, síntesis y aprendizajes con procedencia, respetando originales. |
   | Entrada e índices | Orientación hacia fuentes e instrucciones; descripciones derivadas. |
   | Memoria | Continuidad de investigaciones y recuperación de experiencias, sin autoridad paralela. |
   | Skills | Procedimientos reutilizables dentro de los acuerdos y permisos. |
   | Contexto efímero | Información disponible en una ejecución, sin autoridad adicional por estar cargada. |

2. Incorporar fuentes colaborativamente al inicio o durante el proyecto. T800R
   consulta y gestiona referencias autónomamente dentro de los criterios acordados;
   aclara con la persona una nueva autoridad o la conversión de un ejemplo en regla
   cuando no esté cubierta por esos criterios. RAG y MCP son mecanismos de acceso,
   no autoridades por sí mismos.
3. Corregir derivados que contradigan sus originales. Ante discrepancias entre
   originales, comprobar ámbito y versión y consultar si la resolución cambia un
   acuerdo. Distinguir documentación descriptiva desactualizada de un requisito
   incumplido por la implementación.
4. Comprobar coherencia entre tracker, entrega y evidencia antes de completar
   trabajo. Si la revisión cambia, determinar qué necesita revalidación sin
   repetir automáticamente todas las pruebas.
5. Mantener referencias e índices y revisar aprendizajes cuando cambien sus
   fundamentos, combinando comprobaciones mecánicas y revisión semántica con
   evidencia. Continuar el trabajo independiente mientras se espera una consulta.
6. Usar memoria para retomar o localizar antecedentes, comprobando referencias y
   aplicabilidad cuando una acción dependa de ellos. Una hipótesis persistida no
   equivale a conocimiento confirmado.
7. Crear y mejorar skills desde necesidades reales y evaluar activación correcta,
   calidad y coste frente a una base sin skill o una versión previa. Pueden
   incluir referencias y scripts sin modificar acuerdos ni ampliar permisos por
   sí mismas; la conciliación con controles del proveedor queda por concretar.
8. Persistir lo necesario para continuar y justificar el trabajo antes de
   descartar o reconstruir contexto: acuerdos en especificaciones o decisiones,
   estado en tracker, validaciones en evidencia, aprendizajes en conocimiento e
   investigaciones inconclusas en memoria. No se exige conservar cada mensaje;
   un resumen de sesión no sustituye los registros correspondientes.

Se evalúa OKF como representación e intercambio, no como autoridad independiente.
El esquema y los mecanismos operativos siguen en definición.

## Consecuencias para el equipo

- La persona puede acordar criterios de fuentes y delegar consultas sin aprobar
  cada documento utilizado.
- T800R debe mantener referencias y relacionar resultados con revisiones; guardar
  un resumen o producir un commit no basta para completar una entrega.
- Cambiar de sesión o proveedor exige reconstruir contexto desde artefactos
  persistentes, preservando hechos y diferenciándolos de hipótesis.
- Las skills y el conocimiento necesitan mantenimiento y evaluación. Los costes
  de tiempo y contexto todavía no están cuantificados para T800R.
- Se conserva la revisión transversal de artículos de OpenAI y Anthropic para
  las demás áreas del harness; sólo las prácticas aceptadas son requisitos.

## Puntos abiertos

- ¿Cuándo y cómo se persiste, concilia y reanuda el trabajo concurrente? → lifecycle resuelto en sesión 4 y [ADR-003](ADR-003-ciclo-operativo-y-coordinacion.md); representación de handoffs en sesión 5.
- ¿Qué contexto se carga, con qué presupuesto y referencias? → sesión 6.
- ¿Qué perfil de conocimiento, curación y representación OKF conviene? → modelo
  lógico resuelto en sesión 7 y
  [ADR-006](ADR-006-modelo-portable-de-conocimiento.md); identidad portable en
  sesión 8 y representación física en sesión 11.
- ¿Cómo se concretan esquemas del registro y acceso a fuentes? → el esquema de
  conocimiento quedó resuelto en sesión 7; identidad y acceso portable continúan
  en sesión 8 y la experiencia de incorporación en sesión 10.
- ¿Qué capacidades y extensiones de skills soporta cada proveedor? → sesiones 8 y 9.
- ¿Qué herramientas, rutas y mecanismos de distribución se elegirán? → sesiones 8, 10 y 11.
- ¿Cómo se medirán continuidad, calidad, costes y valor de las skills? → sesión 12.

## Referencias

- Acuerdos canónicos: [sesión 3](../definition/session-03-sources-of-truth.md).
- Límite del producto: [ADR-001](ADR-001-autonomia-y-responsabilidades.md).
- Modelo de conocimiento: [ADR-006](ADR-006-modelo-portable-de-conocimiento.md).
- Investigaciones: [fuentes](../research-fuentes-sesion-3.md), [OKF](../research-open-knowledge-format.md) y [skills](../research-agent-skills.md).
- W3C, Data on the Web Best Practices: https://www.w3.org/TR/dwbp/
- W3C, PROV Overview: https://www.w3.org/TR/prov-overview/
- OpenAI, Harness engineering: https://openai.com/index/harness-engineering/
- Anthropic, Effective harnesses for long-running agents: https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents
- Agent Skills, especificación y evaluación: https://agentskills.io/specification y https://agentskills.io/skill-creation/evaluating-skills
