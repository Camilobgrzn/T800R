# Instrucciones para agentes

## Fase actual

T800R está en **fase de construcción del v0**, autorizada por la persona el
2026-10-13 al cerrar S12. La definición está cerrada: sus acuerdos son canon y
cambiarlos exige registrar la enmienda en la unidad o ADR correspondiente.

Construye siguiendo el [roadmap v0](docs/roadmap-v0.md) (fase por fase, en su
orden de dependencias), el flujo por feature de
[workflow-construccion.md](docs/workflow-construccion.md) v4.2 con las skills de
`skills/`, y las pruebas de aceptación de
[especificacion-v0.md](docs/especificacion-v0.md). Respeta los tres gates
humanos (spec, autorizar `build`, merge), las aprobaciones en la rama `control`
que sólo escribe la persona y las redes de seguridad: sin push a `main` ni
efectos `high` sin aprobación, y nunca efectos `prohibited`. Lo que está en
[backlog-ideas.md](docs/backlog-ideas.md) no se construye en el v0. Los spikes
requieren aprobación explícita en `control:approvals/spikes.md`.

## Fuentes de contexto

Lee en este orden:

1. `docs/definition-tracker.md` para conocer el estado y la próxima acción.
2. `docs/product-definition.md` y la unidad aplicable de `docs/definition/` para
   conocer acuerdos, preguntas y criterios de salida.
3. Los documentos de `ideas/` sólo cuando aporten a la discusión actual.

`docs/product-definition.md` es el índice rector; cada unidad de
`docs/definition/` es la fuente canónica de los acuerdos de su sesión. Los
documentos de `ideas/` son insumos y no representan decisiones aceptadas.

Para construir, lee además `docs/roadmap-v0.md`, `docs/workflow-construccion.md`
(v4.2), `skills/README.md` y `docs/especificacion-v0.md`. Las skills se proyectan
a `.claude/`, `.opencode/` y Codex según la tarea 0.4 del roadmap y el paquete
de proyección de workflow §5. Lo diferido del MVP está en `docs/backlog-ideas.md`.

## Forma de trabajo en la definición

Aplica sólo si la persona reabre una sesión de definición o pide una enmienda
al canon; la construcción sigue el flujo por feature.

1. Trabaja únicamente en la sesión marcada como `ready`, `in_progress` o
   `blocked` en el tracker.
2. Al iniciar una sesión `ready`, cambia su estado a `in_progress` y actualiza
   la próxima acción.
3. Presenta preguntas y alternativas de forma gradual. No presupongas una
   decisión por aparecer en los documentos de ideas.
4. Evalúa alternativas mediante criterios explícitos, beneficios, costes y
   riesgos.
5. Registra cada conclusión como `accepted`, `deferred` o `rejected`, con una
   justificación breve.
6. No amplíes la discusión a sesiones posteriores salvo que sea necesario para
   resolver un bloqueo de la sesión actual.
7. Antes de cerrar, comprueba el criterio de salida definido en el documento
   rector.

## Revisión editorial

Cuando el usuario solicite mantenimiento documental o una revisión adversarial,
puede examinarse el alcance indicado, incluidas sesiones cerradas, sin iniciar ni
reabrir sesiones automáticamente. Conserva los acuerdos durante la revisión y
registra las propuestas con fundamento en `docs/reviews/`, siguiendo su README y
plantilla. La segunda pasada con la persona decide qué correcciones se incorporan.
El agente preparado y sus instrucciones de uso están en
`docs/adversarial-editor.md`; se recomienda ejecutarlo con Astra o Fable.

## Modelos y delegación

- Sol es el interlocutor y coordinador principal.
- Usa `explore` con Luna para localizar y extraer información mecánica.
- Usa `general` con Terra para investigación y análisis delegado acotado.
- Usa `t800r-docs` con Luna sólo para reflejar acuerdos explícitos y mantener
  documentación; las decisiones ambiguas vuelven al coordinador.
- Propón `t800r-astra` únicamente ante un bloqueo o una decisión compleja que
  justifique mayor capacidad. Explica primero la pregunta y el motivo; su
  invocación requiere aprobación.
- No delegues una tarea puntual si preparar y revisar el encargo cuesta más que
  resolverla directamente. No encadenes subdelegaciones.

## Cierre de una sesión

Al terminar:

1. Incorpora los acuerdos en la unidad de sesión aplicable y actualiza el índice
   rector si cambian el plan o los enlaces globales.
2. Crea un ADR sólo para una decisión transversal, difícil de revertir o con
   alternativas relevantes.
3. Actualiza `docs/definition-tracker.md`: resultado, estado, avance, próxima
   sesión y contexto para retomar.
4. Si falta una decisión, conserva la sesión como `in_progress` o `blocked` y
   registra una acción concreta para continuar.
5. Informa de forma concisa los acuerdos, pendientes y próxima acción.

## Cambio de fase

Estas instrucciones siguen vigentes hasta completar los criterios de cierre de
la definición y obtener aprobación explícita para comenzar la construcción.
Cuando eso ocurra, actualiza este archivo para reflejar el flujo de desarrollo,
validación y entrega del MVP.
