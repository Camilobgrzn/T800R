# Plantilla de `features/<id>/spec.md`

Copia el bloque y rellena todas las secciones; las que no apliquen llevan
«Ninguno» y el motivo, no se borran.

```markdown
---
id: <id>
title: <título corto>
size: feature | acotado | spike
risk: routine | high
risk_reason: <por qué; qué disparador de S09 o qué protected_path>
status: draft            # metadato; la aprobación vive en control:approvals/<id>.md
digest: <git hash-object de este archivo al entregar>
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

## Preguntas abiertas

Incógnitas de comportamiento sin resolver. Si hay alguna, el gate 1 no procede.

## Glosario

Sólo términos nuevos que introduce esta feature.
```

Notas:

- `status` cambia a `implemented` únicamente en la candidata que prepara
  `/feature-integrate`; nunca a `approved`.
- El `digest` se recalcula cada vez que el archivo cambia; la línea de
  aprobación en `control` cita el digest del contenido que la persona leyó.
