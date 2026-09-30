# SDLC: ampliación con Superpowers y BMAD

Consulta: 2026-09-15. Sesión 4. Evidencia para discutir, no adopción automática.

## Alcance y revisiones

Se leyeron procedimientos, documentación y un script de soporte de Superpowers
mediante GitHub. No se instalaron herramientas ni ejecutaron workflows. La
popularidad no se utilizó como prueba de eficacia. Complementa
[las tres primeras referencias](research-sdlc-references.md).

| Proyecto | Revisión fijada |
| --- | --- |
| [obra/superpowers](https://github.com/obra/superpowers/tree/b36e0829c6d0140e93cfef2ca599b1b07d4a7797) | `b36e0829c6d0140e93cfef2ca599b1b07d4a7797`, 2026-08-12 |
| [bmad-code-org/bmad-method](https://github.com/bmad-code-org/bmad-method/tree/94b6727b00c8316557828c8a8ff2a48ff60d60cc) | `94b6727b00c8316557828c8a8ff2a48ff60d60cc`, 2026-09-11 |

## Superpowers

### Definición y preparación

`brainstorming` distingue spike, cambio acotado y cambio arquitectónico. Escala
la documentación desde una pregunta y prueba exploratoria hasta diseño escrito
con alternativas y plan, siempre con aprobación humana antes de implementar.
Un spike produce una respuesta y no autoriza conservar su código como solución
definitiva. Complejidad descubierta puede ampliar el proceso.

`writing-plans` exige referencia a spec, restricciones globales y tareas con
interfaces consumidas/producidas y resultado comprobable. Una tarea debe justificar
su propio ciclo de prueba y revisión; un paso es una acción pequeña. Su plan
incluye rutas y código detallado por adelantado: coste a evaluar para T800R.

### Ejecución y recuperación

`subagent-driven-development` conduce todo el plan sin preguntar si debe continuar
entre tareas. Entrega briefs a implementadores con contexto nuevo, recibe informes
en archivos, revisa cumplimiento y calidad por tarea y realiza revisión global.
Prohíbe implementadores paralelos dentro de ese flujo; no demuestra coordinación
concurrente general. Mantiene un ledger por plan con commits y rondas de corrección.
Ante dificultades cambia contexto, tamaño o modelo en vez de repetir sin cambios.
Limita rondas y permite adjudicar hallazgos pendientes al alcanzar el límite.

El script `scripts/sdd-workspace` deriva el directorio del basename del plan y
lo excluye de Git. Separa nombres distintos, pero planes con el mismo basename
pueden colisionar. El cierre puede borrar ese espacio. T800R necesita persistir
antes decisiones y evidencia según ADR-002, sin depender sólo de scratch o chat.

### Tensiones con los acuerdos de T800R

- El modo de subagentes pide resolver ambigüedades y defectos del plan mediante
  decisiones registradas del coordinador, y limita las clases de parada. T800R
  debe restringir esas decisiones a lo delegado y consultar cambios de acuerdos
  o ambigüedades que afecten al comportamiento esperado.
- `executing-plans` sí ordena consultar por instrucciones ambiguas y bloqueos:
  la política no es idéntica entre modos.
- `verification-before-completion` exige evidencia recién ejecutada para cada
  afirmación; el flujo de revisión por tarea permite reutilizar la del implementador
  sobre el mismo código. T800R debe definir vigencia por revisión y condiciones,
  evitando repeticiones sin información nueva.
- El cambio acotado admite diseño sólo en chat. Para T800R los acuerdos relevantes
  deben persistir aunque sean breves.

## BMAD

### Investigación orientada a decisiones

`research-a-decision` y `bmad-deep-recon` cubren investigación de mercado, dominio,
técnica, competencia, voz del usuario y literatura. Distinguen explorar de elegir.
Permiten preparar una consulta para otra herramienta, procesar un informe o
investigar en la sesión, y actualizar afirmaciones o profundizar sin repetir todo.

Su regla epistemológica separa contexto que orienta preguntas de evidencia que
sustenta conclusiones. Es útil para no convertir nuestros supuestos en pruebas;
una exclusión absoluta de información interna no se trasladaría a hechos
verificables del repositorio.

### Preparación proporcional

`choose-a-planning-path` presenta herramientas independientes para resolver
carencias, no etapas obligatorias de una sola pasada. Tamaño, riesgo e
incertidumbre determinan profundidad. El trabajo extenso comparte decisiones y
se divide en unidades ejecutables.

`bmad-sprint-planning/references/readiness-gate.md` pregunta si se puede implementar
sin inventar decisiones no registradas. Comprueba trazabilidad intención/historias,
dependencias, decisiones técnicas/UX y conflictos. Un documento ausente sólo importa
si faltan decisiones necesarias. Emite PASS, CONCERNS o FAIL.

### Worker y coordinador

`bmad-build-auto` ejecuta una unidad por invocación; no selecciona la siguiente ni
administra backlog. Publica estado y resultado persistente para un coordinador.
La documentación enlaza bmad-loop como opción de coordinación lineal; no se
inspeccionó ese repositorio ni se verificó su implementación.

Estados documentados: `draft`, `ready-for-dev`, `in-progress`, `in-review`, `done`
y `blocked`. Reanuda según estado; `done` vuelve a revisión al reinvocarlo y
`blocked` detiene. Conserva intención en un bloque separado del plan. Si varias
lecturas producen resultados observables distintos y la intención no permite
elegir, `step-02-plan` devuelve `blocked / intent gap`.

La revisión distingue laguna de intención, defecto de spec, corrección local y
hallazgo ajeno al trabajo. Un defecto de spec puede provocar reversión y nueva
implementación; una laguna de intención guarda el intento como parche antes de
revertir. Registra evidencia y limita iteraciones. Son procedimientos leídos,
no ejecución observada ni garantías mecánicas demostradas.

### Límites para T800R

- Requiere subagentes: verificar capacidades de delegación del proveedor.
- Mezcla spec y estado en su registro: mapear a nuestras fuentes separadas.
- Para reintentar por ID, documenta borrar la historia bloqueada: diseñar en
  T800R recuperación que preserve historia y evidencia.
- Proteger también decisiones técnicas humanas aunque estén fuera del bloque
  de intención utilizado por el workflow externo.
- Revertir y reconstruir requiere una política propia para trabajo compartido
  y efectos externos, no copiarlo como respuesta universal.
- Su gate completo prescribe acciones por archivo y Given/When/Then: no están
  adoptados como requisitos universales de T800R.

## Síntesis de las cinco referencias

| Referencia | Aporte a evaluar |
| --- | --- |
| Matt Pocock | Entrevista, lenguaje compartido y dependencias. |
| Addy Osmani | Incrementos, evidencia y build auto por plan. |
| nWave | Fases, condiciones de entrada y controles operativos. |
| Superpowers | Briefs por tarea, revisión enfocada y recuperación por plan. |
| BMAD | Investigación para decidir, preparación según carencias y resultado del worker. |

Recomendación para la próxima decisión: preparación basada en **decisiones
necesarias, trazabilidad y evidencia**, no en una lista obligatoria de documentos.
Una incógnita de comportamiento no resuelta es distinta de un detalle técnico
explícitamente delegado. Las aprobaciones inicial y final y revisión selectiva
por riesgo siguen vigentes.

Alternativas: paquete completo para cada cambio (uniforme, mayor coste), partir
de intención vaga (menor preparación, más decisiones implícitas) o preparación
proporcional con criterios explícitos (recomendada, requiere evaluar carencias).
El criterio de preparación sigue pendiente de aceptación. No se adoptan umbrales,
estados, formatos ni políticas de los proyectos por asociación.

## Rutas examinadas en los árboles fijados

- **Superpowers:** `skills/brainstorming/SKILL.md`, `skills/writing-plans/SKILL.md`,
  `skills/subagent-driven-development/SKILL.md`,
  `skills/subagent-driven-development/scripts/sdd-workspace`,
  `skills/executing-plans/SKILL.md`, `skills/verification-before-completion/SKILL.md`.
- **BMAD:** `README.md`, `docs/plan/choose-a-planning-path.md`,
  `docs/plan/research-a-decision.md`, `docs/build/autonomous-development-loops.md`,
  `skills/bmad-deep-recon/SKILL.md`,
  `skills/bmad-sprint-planning/references/readiness-gate.md`,
  `skills/bmad-build-auto/workflow.md`, `skills/bmad-build-auto/step-02-plan.md`,
  `skills/bmad-build-auto/step-04-review.md`.
