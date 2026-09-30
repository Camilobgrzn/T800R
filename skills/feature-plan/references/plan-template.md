# Plantilla de `features/<id>/plan.md`

```markdown
---
id: <id>
spec_digest: <git hash-object de spec.md aprobado; «n/a» en un acotado>
size: feature | acotado
readiness: PASS | CONCERNS | FAIL
created: <YYYY-MM-DD>
replans: 0
---

# Plan: <título>

## Spec del acotado

Sólo si `size: acotado`. Tres a cinco líneas: qué cambia, qué no cambia en el
comportamiento, cómo se verifica. En una `feature` esta sección dice «Ver
spec.md».

## Tareas

### T1 — <objetivo en una frase>

- Aceptación: <criterio propio> (cubre CA<n>)
- Interfaces consumidas: …
- Interfaces producidas: …
- Archivos permitidos: `ruta/…`, `glob/**`
- Dependencias: ninguna | T<n>
- Validación: `<comando 1>`; `<comando 2>`
- Riesgo: routine | high (<motivo>)
- Tests primero: sí | no (<motivo>)
- Paralelizable con: ninguna | T<n> (archivos disjuntos, interfaces acordadas)

### T2 — …

## Cobertura spec ↔ plan

| CA | Tareas | Nota |
| --- | --- | --- |
| CA1 | T1 | |
| CA2 | T2, T3 | |

Tareas habilitadoras sin CA directo: <T<n>: motivo> | ninguna.

Ambigüedades detectadas: <lista> | ninguna.
Contradicciones detectadas: <lista> | ninguna.

## Readiness

Pregunta: ¿puede implementarse sin inventar decisiones no registradas?

Comprobaciones mecánicas:
- [ ] Cada tarea tiene aceptación, archivos permitidos y validación.
- [ ] Cada CA está en la tabla de cobertura.
- [ ] Ningún par de tareas paralelas comparte archivos.
- [ ] Ningún comando de validación toca protected_paths sin tarea high.
- [ ] Las tareas high anotan aprobación local y verifier distinto.

Resultado: PASS | CONCERNS | FAIL

CONCERNS (si aplica):
1. <qué debe aceptar o resolver la persona>

FAIL (si aplica): <pregunta concreta que devuelve a /feature-spec>

Revisión del readiness por otro actor: no requerida | requerida por <motivo>.

## Paralelismo

Máximo dos workers. Pares admitidos: <T<a> ∥ T<b>> | ninguno.

## Replanificación

(Sólo tras un defecto de spec; incrementa `replans`.)

- Fecha y hallazgo que la motiva: <enlace a evidence/<task>.md o findings.md>
- Cambio en la spec: <nuevo spec_digest>
- Tareas afectadas (evidencia a invalidar por el orchestrator): T<n>, …
- Tareas independientes que continúan: T<n>, …
- Tareas nuevas: T<n>, …
- Requiere nueva línea `build <digest> on spec <spec_digest> authorized`.

## Línea para control:approvals/<id>.md

`build <digest-plan> on spec <spec_digest> authorized`
(acotado: `build <digest-plan> authorized`)

`<digest-plan>` = `git hash-object features/<id>/plan.md` sobre el archivo
guardado; no se escribe dentro del archivo. Se entrega en el retorno.
```
