---
name: feature-verify
description: Verifica una tarea entregada con un actor_id que no participó en ella: comprueba la elegibilidad contra participations.md, reejecuta las validaciones sobre el SHA entregado y emite evidence/<task>.verdict.md con dos secciones (cumplimiento de la spec y calidad técnica) y veredicto pass, concerns o fail. Úsala cuando el worker entregó y el orchestrator registró la entrega. No la uses con el mismo actor_id que trabajó la tarea, con historial incompleto ni sobre un SHA distinto del de la evidencia.
---

# /feature-verify <task>

Etapa `verify` ([workflow-construccion.md](../../docs/workflow-construccion.md)
§4.4; [README](../README.md) §4.4). La ejecuta el **verifier** con contexto
nuevo. En bootstrap la persona abre esta sesión en un proveedor o sesión distinta
de la del worker; esa separación es supervisión humana, no enforcement.

## Qué produce

`features/<id>/evidence/<task>.verdict.md` según
[references/verdict-template.md](references/verdict-template.md): `actor_id`,
SHA verificado, reejecución de validaciones, cumplimiento criterio a criterio,
calidad técnica y veredicto. Para `high`, además la solicitud de aprobación
`local` con su digest.

## Qué no hace

- No corrige código ni hace commits en la rama de la tarea.
- No aprueba efectos `high`: prepara la solicitud; la persona registra la
  aprobación en `control`.
- No escribe `tasks.md` ni `participations.md`: el orchestrator registra el
  veredicto como evento y actualiza el estado.
- No reutiliza la evidencia del worker salvo en las condiciones de vigencia.
- No convierte «no ejecutado» en «pasó».

## Precondiciones mecánicas

1. **Elegibilidad.** Tu `actor_id` no aparece en `participations.md` como
   `worker` ni `owner` de esta tarea en **ningún** evento (`assigned`,
   `transferred`, `started`, `delivered`). Comprueba también que la línea
   `delivered` del worker existe y que su `actor_id` coincide con la cabecera de
   `evidence/<task>.md`. **Historial incompleto o incoherente → no elegible**:
   escribe un veredicto `ineligible` con el motivo y detente. Reanudar, cambiar
   de proceso o de modelo no devuelve independencia: la comparación es por
   `actor_id`.
2. **Base.** `git rev-parse HEAD` en la rama `feat/<id>/<task>` es el SHA
   entregado de la última entrada de `evidence/<task>.md`; árbol limpio.
3. **Plan vigente.** `git hash-object features/<id>/plan.md` coincide con el
   `build … authorized` de `control:approvals/<id>.md`.
4. Los comandos de validación de la tarea están declarados en el plan.

## Procedimiento

1. **Registra la cabecera** del veredicto con tu `actor_id`, proveedor, sesión
   y SHA; pide al orchestrator que anote `verdict` al terminar, no antes.
2. **Lee con contexto nuevo**: la tarea en el plan, los `CA` de la spec, la
   evidencia del worker y el diff (`git diff <base>..HEAD`). No leas la
   conversación del worker.
3. **Rutas protegidas primero.** Si el diff toca `protected_paths`
   (`package.json` scripts, hooks, CI, lockfiles, `policy.yaml`, `skills/`,
   configuración de agentes), revisa esos cambios línea a línea **antes** de
   ejecutar cualquier comando; si son maliciosos o no justificados por la
   tarea, veredicto `fail` sin ejecutar nada.
4. **Reejecuta las validaciones** declaradas sobre el SHA entregado y registra
   salida y código de salida. **Vigencia**: puedes reutilizar un resultado del
   worker sólo si coinciden SHA, comando y entorno (SO, Node, hash del lockfile)
   y la salida quedó capturada en la evidencia; anota «reutilizado» cuando lo
   hagas. En cualquier otro caso, ejecuta.
5. **Sección A: cumplimiento de la spec.** Un renglón por criterio de
   aceptación de la tarea y por `CA` cubierto: cumplido / parcial / no, con la
   evidencia concreta (salida, prueba, observación). Comprueba también que el
   diff no toca archivos fuera de los permitidos y no cambia comportamiento
   fuera del alcance.
6. **Sección B: calidad técnica.** Estándares del repo, simplicidad, riesgos
   introducidos, pruebas adecuadas, deuda que deja. Separa lo bloqueante de lo
   opinable.
7. **Veredicto.**
   - `pass`: todos los criterios cumplidos, validaciones en verde, nada
     bloqueante en B.
   - `concerns`: sólo observaciones no bloqueantes, **sin incumplimiento de
     aceptación ni riesgo pendiente**. Un defecto dentro del alcance no cabe en
     `concerns`: se corrige (`fail`) o la persona lo reclasifica explícitamente
     fuera del alcance (S04 l. 101). Quien acepta los `concerns` es la persona,
     en el gate 3.
   - `fail`: con la clase de hallazgo (defecto de implementación, criterio no
     cubierto, archivo fuera de alcance, validación en rojo, protected_path
     injustificado, defecto de spec, laguna de intención). Devuelve la tarea a
     `build` y consume una ronda; si es defecto de spec o laguna de intención,
     dilo para que vaya a `/feature-spec` o a `blocked`.
   - `ineligible`: no pudiste verificar por elegibilidad; no consume ronda.
8. **`high`.** Si la tarea es `high`, añade la solicitud de aprobación con
   digest (`tarea + SHA + efecto`) para que la persona registre `high <digest>
   approved` en `control:approvals/<id>.md`. El efecto no se ejecuta ni se
   integra sin esa línea, revalidada justo antes del efecto.
9. **Entrega**: veredicto guardado; retorno breve al orchestrator con el
   resultado y, si `fail`, qué información nueva necesita la siguiente ronda.

## Comprobación antes de entregar

- [ ] Elegibilidad comprobada contra `participations.md` completo.
- [ ] Validaciones reejecutadas (o reutilizadas con vigencia anotada).
- [ ] Sección A criterio a criterio con evidencia; sección B separada.
- [ ] Veredicto con clase de hallazgo si `fail`.
- [ ] Sin cambios en la rama de la tarea ni en otros archivos.

## Evals (checklist manual, README §6)

| Caso | Prueba |
| --- | --- |
| Activación | «Verifica T2» desde una sesión distinta del worker → `evidence/T2.verdict.md` con A, B y veredicto |
| No activación | «¿Pasó T2?» → lee el veredicto existente, no verifica de nuevo |
| Restricción | Mismo `actor_id` que el worker, o `participations.md` sin `delivered` → `ineligible`; SHA distinto del entregado → se detiene |
| Comparación | Misma tarea y SHA: mismos criterios evaluados, sin reutilizar evidencia fuera de vigencia |

## Referencias

[README](../README.md) §4.4: dos ejes en un informe (Pocock `code-review`),
evidencia recién ejecutada con vigencia (Superpowers
`verification-before-completion`), contexto independiente (playbook),
elegibilidad por `actor_id` (S12 l. 63), campo declarado ≠ evidencia (nWave),
separación generador/revisor (AutoGen), aprobación `local` para `high` (S12).
