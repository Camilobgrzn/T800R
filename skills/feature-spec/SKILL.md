---
name: feature-spec
description: Convierte una idea, issue o problema en features/<id>/spec.md con criterios de aceptación verificables, decisiones tomadas y delegadas y riesgo declarado, listo para que la persona lo apruebe en el gate 1. Úsala al abrir una feature, al reclasificar un acotado o cuando build/verify reportan un defecto de spec. No la uses para un acotado, un spike ni cuando ya existe spec aprobada sin defecto conocido.
---

# /feature-spec

Etapa `plan` del flujo de construcción
([workflow-construccion.md](../../docs/workflow-construccion.md) §4.1; catálogo en
[README](../README.md) §4.1). La ejecuta el planner junto con la persona.

## Qué produce

`features/<id>/spec.md` según [references/spec-template.md](references/spec-template.md),
y una propuesta de tamaño del cambio (`spike`, `acotado`, `feature`). Nada más.

## Qué no hace

- No aprueba. `status: approved` dentro del spec es metadato; la aprobación es
  la línea `spec <digest> approved` que sólo la persona escribe en
  `control:approvals/<id>.md`.
- No escribe en la rama `control`, en `tasks.md`, en `participations.md` ni en
  `evidence/`.
- No descompone tareas ni propone soluciones técnicas: eso es `/feature-plan`.
- No inventa decisiones que la persona no tomó: lo que no se resolvió queda en
  «Decisiones delegadas» o en «Preguntas abiertas», nunca como hecho.

## Precondiciones mecánicas

Compruébalas antes de escribir; si alguna falla, detente y dilo.

1. `id` propuesto único: `features/<id>/` no existe, o existe y contiene un
   `spec.md` con defecto reportado en `evidence/` o `findings.md`.
2. Si `features/<id>/spec.md` ya tiene una línea `spec <digest> approved` en
   `control:approvals/<id>.md` (`git show control:approvals/<id>.md`), advierte
   que cambiarla exige nueva aprobación y, si además hay `build … authorized`,
   nueva autorización con replanificación (`/feature-plan`).
3. Si existe `policy.yaml`, lee `protected_paths` para declarar el riesgo. Si no
   existe, usa los disparadores de S09 (sección «Riesgo» de la plantilla).

## Procedimiento

1. **Entrevista breve** (Pocock `grilling`). Antes de escribir, pregunta sólo por
   las decisiones que faltan, en orden de dependencia: primero el resultado
   observable, después alcance y no-alcance, después interfaces y riesgo. Una
   pregunta por turno; no preguntes lo que la spec, el código o el canon ya
   responden. Confirma el entendimiento en dos o tres frases y espera el «sí».
2. **Escribe `spec.md`** con la plantilla. Cada criterio de aceptación debe
   poder comprobarse con un comando, una prueba o una observación reproducible;
   si no encuentras cómo, no es un criterio, es una intención: reformúlalo o
   pregúntalo.
3. **Separa decisiones.** «Decisiones tomadas»: lo que la persona dijo o el
   canon fija, con la fuente. «Decisiones delegadas»: detalles técnicos que el
   worker puede resolver sin cambiar el comportamiento. Una incógnita de
   comportamiento no se delega: va a «Preguntas abiertas» y bloquea el gate 1.
4. **Declara el riesgo.** `high` si algún criterio implica pérdida o
   transformación irreversible de datos, credenciales o permisos, efectos
   externos irreversibles, contratos compartidos, o toca `protected_paths`
   (`package.json` scripts, hooks, CI, lockfiles, `policy.yaml`, `skills/`,
   configuración de agentes). Si dudas, `high`; la persona puede rebajarlo.
5. **Propón el tamaño.** `feature` si hay comportamiento nuevo o cambio
   arquitectónico; `acotado` si no hay comportamiento nuevo (entonces esta skill
   sobra: dilo y propón ir a `/feature-plan`); `spike` si una incertidumbre
   impide decidir (propón `/spike` con la pregunta concreta).
6. **Calcula el digest** y déjalo en la cabecera: `git hash-object
   features/<id>/spec.md` sobre el archivo guardado. Es el valor que la persona
   citará en `control:approvals/<id>.md`. Si después cambias una letra, el digest
   cambia y la aprobación deja de aplicar: recalcúlalo y avísalo.
7. **Entrega.** Responde a la persona con: ruta del archivo, digest, tamaño
   propuesto, riesgo, lista de preguntas abiertas (si hay, el gate 1 no procede)
   y la línea exacta que debe registrar si aprueba:
   `spec <digest> approved`.

## Hallazgos durante la spec

- Si la idea contradice un acuerdo del canon (`docs/definition/`, `docs/adr/`),
  dilo con la referencia y no sigas hasta que la persona decida.
- Si descubres que el cambio es realmente un `acotado`, no fuerces una spec.
- Si aparecen términos nuevos, añádelos al glosario de la spec.

## Comprobación antes de entregar

- [ ] Cada criterio de aceptación tiene cómo verificarse.
- [ ] No hay decisión inventada: todo lo tomado tiene fuente (persona o canon).
- [ ] Riesgo declarado con su motivo.
- [ ] No-alcance escrito.
- [ ] Digest calculado sobre el archivo final.
- [ ] No se escribió en ningún otro archivo.

## Evals (checklist manual, README §6)

| Caso | Prueba |
| --- | --- |
| Activación | «Quiero que el IDP registre los servicios de la organización en el catálogo» → produce `features/<id>/spec.md` y digest |
| No activación | «Arregla el typo del README» → responde que es un `acotado` y remite a `/feature-plan` sin crear spec |
| Restricción | Con `spec … approved` ya registrado, intentar reescribir → advierte que exige nueva aprobación |
| Comparación | Misma idea, misma base: criterios equivalentes o mejores que la revisión anterior de la skill, sin preguntas redundantes |

## Referencias

Prácticas y su origen en [README](../README.md) §4.1: entrevista y glosario
(Pocock), tamaños de cambio (Superpowers `brainstorming`), decisiones tomadas y
delegadas (BMAD, S04 l. 83), `skip_specs` y deltas (OpenSpec), aprobación por
digest (S12).
