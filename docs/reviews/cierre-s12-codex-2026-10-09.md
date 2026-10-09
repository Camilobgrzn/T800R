# Revisión Codex de la especificación v0 y del cierre transversal (2026-10-09)

- Modelo: `gpt-6-astra`, esfuerzo `medium`. Intentos previos del 2026-10-06 (`gpt-6-astra` y respaldo `gpt-5.6-sol` `xhigh`) fallaron por cuota. Base: `fa816ba`. Solo lectura. Hallazgos aplicados después.

**A — `docs/especificacion-v0.md`: SÍ con cambios.**

Encontré estos defectos que deben corregirse antes de aprobarla:

1. **Alta — AT-13 reintroduce una pieza diferida.** [especificacion-v0.md:70](docs/especificacion-v0.md:70) exige que `update` proponga conjuntos exactos de manifiestos, apoyándose en S11 l. 176. Sin embargo, la meta-distribución npm con manifiesto está diferida explícitamente en [backlog-ideas.md:66](docs/backlog-ideas.md:66); roadmap 5.1 sólo exige `update` simple mediante propuesta.
   **Corrección:** limitar el oráculo a propuesta persistente, revisiones explícitas y ausencia de aplicación implícita. Si se quieren exigir manifiestos curados en v0, registrar su reincorporación como decisión de alcance.

2. **Alta — AT-52 permite continuar con contexto insuficiente.** [especificacion-v0.md:121](docs/especificacion-v0.md:121) dice que el packet con faltantes `relevant`/`optional` queda `degraded` «y continúa». [S06:170](docs/definition/session-06-context.md:170) sólo permite trabajo independiente del material faltante; S06 l. 52 también obliga a detenerse ante incertidumbre relevante no resuelta.
   **Corrección:** probar dos acciones: la independiente continúa y la dependiente se detiene. El estado `degraded` por sí solo no autoriza continuación.

3. **Alta — AT-47 rechaza avances legítimos de coordinación.** [especificacion-v0.md:111](docs/especificacion-v0.md:111), repetido en CS-14, exige rechazo al avanzar `feat/<id>`. El flujo §2.1 y §4.6 comprueba las precondiciones de **esa tarea**: owner, último evento y SHA del trabajo; la coordinación puede avanzar legítimamente por otras tareas.
   **Corrección:** sustituir «avanzar `feat/<id>`» por alterar una precondición pertinente. Añadir un caso positivo con un commit de coordinación ajeno que conserve dichas precondiciones. Aplicar la misma precisión a AT-24: divergencia exige reconciliar; sólo la discrepancia no resoluble obliga a bloquear.

4. **Media — AT-75 convierte todas las aprobaciones en monouso.** [especificacion-v0.md:148](docs/especificacion-v0.md:148) exige bloquear el segundo uso sin fijar el número autorizado. [S09:65](docs/definition/session-09-security-governance.md:65) exige respetar un **número de usos**, no que siempre sea uno.
   **Corrección:** declarar en la precondición una aprobación de un solo uso y comprobar su agotamiento; no establecer monouso universal.

5. **Media — AT-76 atribuye al schema una comprobación semántica del digest.** [especificacion-v0.md:149](docs/especificacion-v0.md:149) pretende rechazar mediante fixtures de `approval/v1` un digest calculado incluyendo referencias Git. Un hash con ese origen puede ser estructuralmente válido. S11 l. 69 separa validación estructural e invariantes relacionales.
   **Corrección:** conservar en el schema la obligatoriedad y formato del digest; comprobar su correspondencia recalculándolo sobre la solicitud canónica en una prueba `CF` de runtime/core, vinculada a AT-03.

6. **Media — AT-17 no demuestra ausencia de edición manual.** [especificacion-v0.md:74](docs/especificacion-v0.md:74) presenta la igualdad final de digests como prueba de que nada generado se editó a mano. Una edición manual posteriormente restaurada pasa ese oráculo, pero incumple E1.
   **Corrección:** registrar las intervenciones humanas durante el recorrido. Usar los digests finales para demostrar integridad final, y el registro observado para comprobar «sin editar archivos generados».

La distinción `D`/`CF`/`EXEC` **no certifica conducta por lectura documental**: `D` exige ejecutar el procedimiento. El 75 %, su denominador, numerador y exclusiones reproducen correctamente el roadmap. La regla obligatorios/parciales también está recogida, pero **los límites concretos del parcial de E3 y del mínimo de dos proveedores para E4 siguen siendo propuestas pendientes de ratificación** (§7); no deben presentarse como literalidad ya aceptada de S12.

**B — `docs/revision-transversal-cierre.md`: SÍ con cambios.**

1. **Alta — P12 declara una equivalencia que el procedimiento no cumple.** [revision-transversal-cierre.md:79](docs/revision-transversal-cierre.md:79) da por realizada la captura íntegra recuperable mediante `evidence/<task>.md`. Sin embargo, [feature-build/SKILL.md:100](skills/feature-build/SKILL.md:100) exige copiar **salida resumida** y código de salida. SHA, comandos y entorno tampoco permiten recuperar el contenido omitido.
   **Corrección:** separar trazabilidad de ejecución —ya cubierta— de conservación íntegra bajo demanda —no demostrada por esa referencia—. Dar a esta última una disposición y punto de resolución, o proponer explícitamente su realización mínima en archivos, sin introducir el CAS diferido.

2. **Media — el `deferred` de P20 carece de decisión concreta de resolución.** [revision-transversal-cierre.md:92](docs/revision-transversal-cierre.md:92) dice que el agente de jardinería espera a «F5 5.2 y después a `maintain`». Eso enumera dependencias, pero no fija cuándo se decide incorporarlo o descartarlo; `maintain` no tiene tarea en el roadmap.
   **Corrección:** fijar, por ejemplo, una decisión en 5.4 basada en obsolescencia observada: mantener curación manual o abrir una propuesta posterior de automatización. No convertir 5.2 en autorización implícita del agente recurrente.

Las diez áreas están cubiertas y los casos sin evidencia se explicitan. P08, P10, P14, P20 y P27 están identificadas como propuestas sujetas a decisión y enmienda; no encontré otro defecto bloqueante que introduzca silenciosamente un gate humano o una capacidad del backlog.

No modifiqué archivos. Estos veredictos permiten aprobar los borradores **tras las correcciones y decisiones indicadas**; no constituyen autorización de construcción.
