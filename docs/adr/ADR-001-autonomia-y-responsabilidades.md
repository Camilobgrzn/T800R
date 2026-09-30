# ADR-001: Construcción autónoma con acuerdos humanos y responsabilidades explícitas

**Fecha:** 2026-09-14
**Estado:** Aceptada

## TL;DR

- **Problema:** preparar contexto y contratos no basta para conducir de forma autónoma el trabajo de varios agentes.
- **Decisión:** T800R planificará, ejecutará y supervisará agentes desde una definición funcional y técnica confirmada por la persona, con revisión final y consultas selectivas durante la construcción.
- **Por qué importa:** limitar el producto a documentación dejaría en la persona la coordinación operativa que busca delegar.

## Glosario rápido

- **Harness:** conjunto de reglas, contexto y mecanismos que orienta y coordina el trabajo de los agentes.
- **Proveedor:** herramienta que aporta las capacidades de ejecución del agente; inicialmente Codex, Claude Code u OpenCode.
- **Repositorio consumidor:** proyecto que incorpora T800R y aporta código, reglas, documentación y validaciones particulares.
- **Contrato de trabajo:** acuerdos explícitos que orientan una tarea y permiten comprobar su entrega; sus formatos aún están por definir.

## Contexto

T800R está en definición. Su autor prepara actualmente un **harness** en cada
repositorio: especificaciones, seguimiento de tareas, instrucciones para cerrar
y retomar sesiones y scripts de validación. Necesita continuidad y coordinación
tanto entre agentes de una sesión como entre sesiones independientes, evitando
duplicación de tareas, sobrescrituras y entregables desalineados.

La sesión 2 confirmó dos límites fundamentales:

1. **La autonomía incluye preparar y conducir el trabajo.** La persona quiere
   acordar un objetivo con los agentes, incluyendo tecnologías, lenguajes y
   estrategias cuando corresponda, y delegar planificación y construcción.
2. **La intervención humana tiene puntos definidos.** Se concentra en la
   definición inicial, la revisión final y revisiones o consultas necesarias
   durante la construcción, especialmente ante cambios de alto riesgo.

El producto debe funcionar con tres proveedores y ser incorporable en otros
repositorios. El usuario acepta el mayor esfuerzo de integración y manejo de
fallos que implica ejecutar y supervisar agentes. No hay tecnología de
implementación seleccionada ni autorización para construir T800R todavía.

## Alternativas evaluadas

| Opción | Autonomía y continuidad | Adopción y portabilidad | Resultado |
| --- | --- | --- | --- |
| Situación actual: preparación particular y coordinación manual por repositorio. | Depende de la intervención de la persona. | Repite el esfuerzo de preparación. | Antecedente que motiva el producto. |
| Preparar y validar contratos, dejando siempre a otras herramientas la conducción de la ejecución. | Mejora orientación y validación, pero no asume la conducción buscada. | Menor integración con proveedores. | `rejected`: insuficiente para el objetivo confirmado. |
| Ejecutar únicamente tareas previamente delimitadas por la persona. | Automatiza ejecución, pero deja la preparación del plan en la persona. | Reduce la complejidad de planificación. | No elegida como límite: el alcance aceptado incluye descomponer objetivos. |
| **Definir colaborativamente y luego planificar, ejecutar y supervisar agentes.** | **Asume la conducción dentro de acuerdos funcionales y técnicos.** | **Exige integrar capacidades de cada proveedor y manejar fallos.** | **`accepted`: corresponde al objetivo real de autonomía.** |

### Por qué descartamos las otras

La preparación particular mantiene el esfuerzo repetido que origina T800R.
Limitarse a contratos no satisface la autonomía buscada, aunque preparar y validar
esos contratos sigue siendo responsabilidad del producto. Limitar la entrada a
tareas ya preparadas tampoco cubre el alcance confirmado: T800R debe poder
construir el plan a partir del entendimiento compartido con la persona.

## Por qué la decisión (qué dice la industria)

El marco de gestión de riesgos de inteligencia artificial de NIST, **AI RMF 1.0**,
propone explicitar responsabilidades y supervisión humana según el contexto de
uso y gestionar riesgos durante el ciclo de vida. Sirve como referencia para
hacer visibles los límites y las intervenciones acordadas; no prescribe esta
arquitectura ni demuestra que T800R ya pueda detectar correctamente el riesgo.

La razón decisiva para elegir ejecución y supervisión es el objetivo confirmado
por el usuario. Su viabilidad y efectividad deberán validarse en las sesiones
posteriores y en los experimentos del producto.

## Decisión

1. La persona y los agentes construyen una definición funcional y técnica
   compartida. La persona puede establecer tecnologías, lenguajes y estrategias,
   y delegar los detalles que prefiera.
2. La confirmación humana de que esa definición está lista para construir
   autoriza la construcción. No se requiere una aprobación adicional de cada
   plan técnico que respete los acuerdos.
3. T800R prepara el plan, descompone tareas, identifica dependencias, inicia y
   supervisa agentes y coordina ejecución y validación. El **proveedor** aporta
   los mecanismos de ejecución y las capacidades disponibles.
4. T800R resuelve problemas técnicos, corrige fallos y ajusta el plan dentro de
   lo acordado. Consulta por cambios de alcance o acuerdos técnicos,
   ambigüedades que afecten al comportamiento y bloqueos fuera de sus capacidades
   o permisos. Continúa el trabajo independiente mientras espera.
5. Ante un cambio de alto riesgo, T800R explica las consecuencias y solicita
   revisión humana con el cambio y la evidencia de validación. El cambio queda
   pendiente de revisión antes de integrarse, sin detener tareas independientes.
6. La persona revisa al final que el resultado funcione como se pidió. Las
   validaciones de los agentes no sustituyen esa revisión.
7. T800R prepara y valida su incorporación, conserva el estado necesario para
   retomar y comprueba el trabajo realmente realizado. El **repositorio
   consumidor** aporta código, reglas, documentación y validaciones particulares,
   y conserva los cambios y la información persistente del proyecto.
8. T800R define una estructura base estándar y un punto de entrada conocido para
   los agentes, con referencias configurables y validadas a documentos existentes.
   Las rutas concretas y fuentes canónicas se acordarán posteriormente.

Este registro fija el límite transversal del producto. Los contratos operativos
y la arquitectura necesarios para implementarlo siguen en definición.

## Consecuencias para el equipo

- La persona participa al acordar el producto y las decisiones técnicas, en las
  revisiones necesarias y en la aceptación final; delega la conducción cotidiana.
- T800R deberá integrar ejecución y supervisión, además de distribuir documentos
  o instrucciones. El esfuerzo adicional fue aceptado; aún no está cuantificado.
- La coordinación deberá distinguir el trabajo pendiente de consulta o revisión
  del trabajo independiente que puede continuar.
- Los agentes tendrán una orientación estándar sin exigir duplicar documentación
  existente en el repositorio consumidor.
- La portabilidad deberá validarse sobre capacidades reales de cada proveedor.

## Puntos abiertos

- ¿Qué información es canónica y dónde reside? → sesión 3, fuentes de verdad.
- ¿Cómo se representan arranque, replanificación, espera y reanudación? → resuelto en sesión 4 y [ADR-003](ADR-003-ciclo-operativo-y-coordinacion.md).
- ¿Cómo se materializan los contratos y la transferencia de trabajo? → sesión 5, coordinación.
- ¿Cómo se ejecuta y supervisa cada proveedor? → sesión 8, portabilidad.
- ¿Qué determina alto riesgo, quién fija los criterios y cómo se controla la integración? → sesión 9, seguridad y gobernanza.
- ¿Cuáles son las rutas y mecanismos de adopción y validación de referencias? → sesiones 3, 7 y 10.
- ¿Qué tecnología implementará estos límites y cómo se demostrará su efectividad? → sesiones 11 y 12.

## Referencias

- Definición de producto: *Sesión 2: límites del producto* — [fuente canónica](../definition/session-02-limits.md).
- Seguimiento de la definición — [tracker](../definition-tracker.md).
- NIST: *Artificial Intelligence Risk Management Framework (AI RMF 1.0)* — https://doi.org/10.6028/NIST.AI.100-1.
