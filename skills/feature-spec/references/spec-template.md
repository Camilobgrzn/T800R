# Plantilla de `features/<id>/spec.md`

Copia el bloque y rellena todas las secciones; las que no apliquen llevan
«Ninguno» y el motivo, no se borran.

```markdown
---
id: <id>
title: <título corto>
size: feature | acotado | spike
risk: routine | high
risk_reason: <por qué; qué disparador de S09 l. 83 o qué protected_path>
prohibited_effects: none   # si hay alguno, el gate 1 no procede (ver sección)
status: draft            # metadato; la aprobación vive en control:approvals/<id>.md
created: <YYYY-MM-DD>
---

# <título>

## Problema y resultado observable

Qué duele hoy y qué se podrá observar cuando esté hecho (una o dos frases cada
uno). El resultado se describe desde fuera del sistema: qué ve o hace la persona
o el sistema consumidor.

## Criterios de aceptación

Cada criterio, numerado, con cómo se verifica. Given/When/Then cuando ayude.

1. **CA1** — <enunciado>. Verificación: <comando, prueba u observación
   reproducible>.
2. **CA2** — …

## No-alcance

Qué queda explícitamente fuera, aunque parezca cercano.

## Decisiones tomadas

| Decisión | Fuente |
| --- | --- |
| <qué se decidió> | persona (fecha) / S<NN> l. <n> / ADR-<NNN> |

## Decisiones delegadas al worker

Detalles técnicos que el worker resuelve sin cambiar el comportamiento
observable (p. ej. nombre de un módulo interno, librería auxiliar).

## Interfaces públicas que se crean o cambian

| Interfaz | Cambio | Consumidores conocidos |
| --- | --- | --- |

## Efectos prohibidos

«Ninguno», o la lista de criterios que exigen un efecto irreversible fuera del
repositorio (S12 l. 64) o algo `prohibited` en `policy.yaml`. Si hay alguno, el
gate 1 no procede: se reformula el criterio; ninguna aprobación lo habilita.

## Preguntas abiertas

Incógnitas de comportamiento sin resolver. Si hay alguna, el gate 1 no procede.

## Glosario

Sólo términos nuevos que introduce esta feature.
```

Notas:

- `status` **no cambia después del gate 1**: editar el archivo cambiaría el
  digest aprobado. Que la spec está aprobada lo dice `control`; que está
  implementada lo dicen `specs/` y la línea `integrated <sha-merge>` en
  `control`. Un `status: approved` escrito antes del gate 1 es tolerable como
  metadato, pero no autoriza nada.
- El digest **no se escribe dentro del archivo** (insertarlo cambiaría el
  hash). Se calcula con `git hash-object features/<id>/spec.md` sobre el archivo
  guardado y se entrega en el retorno; la línea de aprobación en `control` cita
  ese valor. Cambiar una letra cambia el digest y la aprobación deja de aplicar.
- El archivo vive en la rama `feat/<id>` (workflow §2.1); se comete ahí
  (`coord: spec <id>`) antes de calcular el digest.
