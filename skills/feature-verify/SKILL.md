---
name: feature-verify
description: Verifica una tarea entregada con un actor_id que no participó en ella: comprueba la elegibilidad contra participations.md, que la autorización de build cubre los digests actuales de plan y spec, que encima del SHA del trabajo sólo hay commits de registro, revisa las rutas protegidas antes de ejecutar nada, reejecuta las validaciones y emite evidence/<task>.verdict.md en feat/<id> con dos secciones (cumplimiento de la spec y calidad técnica) y veredicto pass, concerns o fail. Úsala cuando el worker entregó y el orchestrator registró la entrega, o para la comprobación posterior de un efecto high. No la uses con el mismo actor_id que trabajó la tarea, con historial incompleto ni sobre un SHA distinto del de la evidencia.
---

# /feature-verify <task>

Etapa `verify` (`docs/workflow-construccion.md` §4.4; `skills/README.md` §4.4;
rutas desde la raíz del repositorio). La ejecuta el **verifier** con contexto
nuevo. En bootstrap la persona abre esta sesión en un proveedor o sesión
distinta de la del worker y le asigna un `actor_id` nuevo; esa separación es
supervisión humana, no enforcement. Trabajas desde el **checkout de
coordinación** (rama `feat/<id>`) y abres un **worktree desechable** en
`<sha-entrega>` para reejecutar (workflow §2.1).

## Qué produce

`features/<id>/evidence/<task>.verdict.md` en `feat/<id>`, cometido como
`verdict: T<n> ronda <k>` (sólo ese archivo), según
[references/verdict-template.md](references/verdict-template.md): `actor_id`,
SHA verificado, digests vigentes, rutas protegidas revisadas con su hash,
reejecución de validaciones, cumplimiento criterio a criterio, calidad técnica
y veredicto. Para `high`, además la solicitud de aprobación `local` con su
digest.

## Qué no hace

- No corrige código ni hace commits en la rama de la tarea: su único commit es
  `verdict:` en `feat/<id>`. Así el SHA entregado no se mueve.
- No aprueba efectos `high`: prepara la solicitud; la persona registra la
  aprobación en `control`.
- No escribe `tasks.md` ni `participations.md`: el orchestrator registra el
  veredicto como evento, actualiza el estado e integra la rama en `feat/<id>`.
- No reutiliza la evidencia del worker salvo en las condiciones de vigencia.
- No convierte «no ejecutado» en «pasó».
- No transfiere ni acepta una verificación a medias: si no puedes terminar, se
  descarta y se rehace con contexto nuevo (workflow §4.4).

## Precondiciones mecánicas

Lee `control` y `feat/<id>` con `git show`; la evidencia del worker, de la rama
de la tarea (`git show <sha-entrega>:features/<id>/evidence/<task>.md`).

1. **Elegibilidad.** Tu `actor_id` no aparece en `participations.md` como
   `worker` ni `owner` de esta tarea en **ningún** evento de participación
   (`assigned`, `transferred`, `started`, `delivered`, `handoff_emitted`,
   `handoff_accepted`); un `handoff_rejected` no te excluye, porque rechazar no
   es participar (S12 l. 63). Comprueba también que la línea `delivered`
   existe, es posterior a cualquier `invalidated` de la tarea, que su
   `<sha-entrega>` es el HEAD de `task/<id>/T<n>`, y que su `actor_id` y
   `<sha-trabajo>` coinciden con la **entrada de esa ronda** en
   `evidence/<task>.md` (la entrada no contiene `<sha-entrega>`: sería el
   commit que la contiene; cada entrada lleva su `actor_id`; con varios
   workers sucesivos todos cuentan como excluidos).
   **Historial incompleto o incoherente → no elegible**: **no escribas
   `.verdict.md`** (sería una escritura indebida); detente y reporta al
   orchestrator el motivo, que registrará `ineligible` en `participations.md`;
   no consume ronda. Reanudar, cambiar de proceso o de modelo no devuelve
   independencia: la comparación es por `actor_id`. Tu `actor_id` es el que la
   persona te asignó al abrir esta sesión (`<usuario>-a<n>`, workflow §4.4);
   si no lo tienes, pídelo antes de seguir.
2. **Autorización vigente.** `git show control:approvals/<id>.md` contiene
   `build <digest-plan> on spec <digest-spec> authorized` (o `build
   <digest-plan> authorized` en un `acotado`) y ambos digests coinciden con
   `git hash-object` de `plan.md` y `spec.md` tomados de `feat/<id>`.
3. **Trabajo y registro separados.** `git diff --name-only
   <sha-trabajo>..<sha-entrega>` sólo lista `features/<id>/evidence/<task>.md`
   y, si acaso, `features/<id>/evidence/<task>.findings.md`; `<sha-entrega>` es el HEAD de
   `task/<id>/<task>`. Si lista otra cosa, no es una entrega: detente.
4. Los comandos de validación de la tarea están declarados en el plan.
5. **Rutas protegidas resueltas**: `protected_paths` de `policy.yaml` (si
   existe) más la lista del workflow §4.3. Nada se ejecuta antes del paso 3 del
   procedimiento.

## Procedimiento

1. **Registra la cabecera** del veredicto con tu `actor_id`, proveedor, sesión,
   `<sha-trabajo>`, `<sha-entrega>` y digests; pide al orchestrator que anote
   `verdict` al terminar, no antes.
2. **Lee con contexto nuevo**: la tarea en el plan, los `CA` de la spec, la
   evidencia del worker y el diff del trabajo (`git diff <base>..<sha-trabajo>`).
   No leas la conversación del worker.
3. **Rutas protegidas primero.** Si el diff toca alguna ruta protegida, revisa
   esos cambios línea a línea **antes** de ejecutar cualquier comando y anota
   en el veredicto el `git hash-object` de cada archivo revisado (el worker
   podrá ejecutar en la ronda siguiente sólo si el hash coincide). Si son
   maliciosos o no justificados por la tarea, veredicto `fail` sin ejecutar
   nada. Si la tarea toca hooks versionados, abre el worktree y ejecuta con
   `git -c core.hooksPath=/dev/null` hasta haberlos revisado.
4. **Reejecuta las validaciones** en un worktree desechable
   (`git worktree add --detach <ruta fuera del checkout> <sha-entrega>`; el
   árbol de código es el de `<sha-trabajo>`) y registra salida y código de
   salida. **Vigencia**: puedes reutilizar un resultado del worker sólo si
   coinciden `<sha-trabajo>`, comando y entorno (SO, Node, hash del lockfile)
   y la salida quedó capturada en la evidencia; anota «reutilizado» cuando lo
   hagas. En cualquier otro caso, ejecuta. Al terminar, `git worktree remove`.
5. **Sección A: cumplimiento de la spec.** Un renglón por criterio de
   aceptación de la tarea y por `CA` cubierto: cumplido / parcial / no, con la
   evidencia concreta (salida, prueba, observación). Comprueba también que el
   diff hasta `<sha-trabajo>` no toca archivos fuera de los permitidos y no
   cambia comportamiento fuera del alcance.
6. **Sección B: calidad técnica.** Estándares del repo, simplicidad, riesgos
   introducidos, pruebas adecuadas, deuda que deja. Separa lo bloqueante de lo
   opinable.
7. **Veredicto.**
   - `pass`: todos los criterios cumplidos, validaciones en verde, nada
     bloqueante en B.
   - `concerns`: sólo observaciones no bloqueantes, **sin incumplimiento de
     aceptación ni riesgo pendiente**. Un defecto dentro del alcance no cabe en
     `concerns`: se corrige (`fail`) o la persona lo reclasifica explícitamente
     fuera del alcance (S04 l. 101). `concerns` cierra la tarea igual que
     `pass`; la persona acepta las observaciones en el gate 3 y, si no las
     acepta, la tarea se reabre.
   - `fail`: con la clase de hallazgo (defecto de implementación, criterio no
     cubierto, archivo fuera de alcance, validación en rojo, protected_path
     injustificado, efecto prohibido, defecto de spec, laguna de intención).
     Devuelve la tarea a `build` y consume una ronda; si es defecto de spec o
     laguna de intención, dilo para que vaya a `/feature-spec` o a `blocked`.
     Un efecto `prohibited` ejecutado o previsto es `fail` sin ejecución.
8. **`high`.** Si la tarea es `high`, añade la solicitud de aprobación con
   digest: `printf '%s' '<id>/T<n> <sha-trabajo> <efecto>' | git hash-object
   --stdin`, indicando si es **fase de efecto** (el worker lo ejecutará tras
   `high <digest> approved`, releyendo `control`; la tarea queda `waiting`) o
   **protected_paths** (la aprobación es precondición del gate 3; no hay fase
   de efecto). Nunca ejecutas el efecto tú. En la **comprobación posterior**
   (entrada «Efecto» en la evidencia) verificas lo observable del efecto y
   emites el veredicto final; no consume ronda.
9. **Entrega**: `git add -- features/<id>/evidence/<task>.verdict.md && git
   commit -m "verdict: T<n> ronda <k>"` en `feat/<id>`; retorno breve al
   orchestrator con el resultado, los hashes de rutas protegidas revisadas y,
   si `fail`, qué información nueva necesita la siguiente ronda.

## Comprobación antes de entregar

- [ ] Elegibilidad comprobada contra `participations.md` completo y contra la
      entrada de la ronda en la evidencia.
- [ ] Autorización de `build` vigente para los digests actuales de plan y spec.
- [ ] Entre `<sha-trabajo>` y `<sha-entrega>` sólo rutas de registro.
- [ ] Rutas protegidas revisadas (con hash) antes de ejecutar.
- [ ] Validaciones reejecutadas (o reutilizadas con vigencia anotada).
- [ ] Sección A criterio a criterio con evidencia; sección B separada.
- [ ] Veredicto con clase de hallazgo si `fail`.
- [ ] Único commit: `verdict:` en `feat/<id>`; nada en la rama de la tarea;
      worktree desechable eliminado.

## Evals (checklist manual, README §6)

| Caso | Prueba |
| --- | --- |
| Activación | «Verifica T2» desde una sesión distinta del worker → `evidence/T2.verdict.md` en `feat/<id>` con A, B y veredicto |
| No activación | «¿Pasó T2?» → lee el veredicto existente, no verifica de nuevo |
| Restricción | Mismo `actor_id` que el worker, o `participations.md` sin `delivered` → se detiene sin escribir veredicto y reporta; `<sha-entrega>` con cambios fuera de rutas de registro, o digest de spec cambiado → se detiene; `package.json` modificado → no ejecuta hasta revisarlo |
| Comparación | Misma tarea y SHA: mismos criterios evaluados, sin reutilizar evidencia fuera de vigencia |

## Referencias

`skills/README.md` §4.4: dos ejes en un informe (Pocock `code-review`),
evidencia recién ejecutada con vigencia (Superpowers
`verification-before-completion`), contexto independiente (playbook),
elegibilidad por `actor_id` (S12 l. 63), campo declarado ≠ evidencia (nWave),
separación generador/revisor (AutoGen), aprobación `local` para `high` (S12).
