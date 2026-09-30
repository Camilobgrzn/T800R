---
name: spike
description: Responde una pregunta bloqueante con un experimento en una rama desechable y registra pregunta, qué se probó, respuesta y evidencia en spikes/<id>.md; el código no se conserva como solución. Úsala cuando una incertidumbre impide decidir en plan o design, o durante la construcción si el incremento autorizado lo contempla. No la uses para construir producto, para evitar una spec, ni sin pregunta concreta y alcance acotado.
---

# /spike

Etapa `plan` ([workflow-construccion.md](../../docs/workflow-construccion.md)
§3; [README](../README.md) §4.8). La ejecuta un worker. Un spike **aprende**,
no construye.

## Qué produce

`spikes/<id>.md` según [references/spike-template.md](references/spike-template.md):
pregunta, alcance, qué se probó, respuesta, evidencia (comandos, SHA de la rama
desechable, entorno) y qué decisión desbloquea. La rama se descarta.

## Qué no hace

- No autoriza conservar código: si algo del spike sirve, se reimplementa dentro
  de una tarea con su spec, plan y verificación.
- No decide por la persona: entrega evidencia para decidir.
- No sustituye a `/feature-spec` ni a `/feature-plan`.
- No produce efectos externos ni instala dependencias fuera del worktree
  desechable.
- Un efecto `high` dentro del spike requiere su propia aprobación `local`;
  nunca ejecuta `prohibited`.

## Precondiciones mecánicas

1. Pregunta concreta y alcance escritos en `spikes/<id>.md` **antes** de tocar
   código; la pregunta debe nombrar la decisión que bloquea (de una spec, un
   plan o una sesión de definición).
2. Autorización:
   - durante la **definición** (S12 en curso): aprobación explícita y separada
     de la persona, registrada en `control:approvals/spikes.md` como `spike
     <id> approved` (S12 «Especificación ejecutable», l. 56);
   - durante la **construcción**: basta con que el incremento autorizado lo
     contemple (el plan lo nombra) o con la aprobación anterior.
3. Rama `spike/<id>` creada fuera de `main`, en worktree propio si es posible.
4. Presupuesto declarado (turnos o tiempo). Un spike sin límite es un prototipo.

## Procedimiento

1. **Escribe la pregunta** y las hipótesis en `spikes/<id>.md`; define qué
   observación la respondería (criterio de parada).
2. **Experimenta** en la rama desechable, con el mínimo código para observar.
   Separa lo que orienta (contexto, documentación) de lo que sustenta (lo que
   ejecutaste y viste): sólo lo segundo es evidencia.
3. **Registra** cada comando y resultado relevante, con SHA de la rama y
   entorno; «no ejecutado: motivo» para lo que no pudiste probar.
4. **Responde** la pregunta en una o dos frases, con el grado de confianza y
   los límites (qué no se probó). Si la respuesta es «depende», di de qué.
5. **Descarta** la rama (`git branch -D spike/<id>` tras anotar su último SHA en
   el archivo; el SHA permite recuperarla del reflog un tiempo si hiciera falta,
   pero no es una entrega).
6. **Entrega**: ruta de `spikes/<id>.md`, respuesta, decisión que desbloquea y
   a qué skill vuelve el flujo (`/feature-spec`, `/feature-plan` o la sesión de
   definición).

## Comprobación antes de entregar

- [ ] Pregunta, alcance y criterio de parada escritos antes del código.
- [ ] Evidencia con comandos, SHA y entorno; «no ejecutado» explícito.
- [ ] Respuesta con confianza y límites.
- [ ] Rama descartada; nada mezclado en `main` ni en ramas de tareas.
- [ ] Sin efectos externos ni dependencias fuera del worktree.

## Evals (checklist manual, README §6)

| Caso | Prueba |
| --- | --- |
| Activación | «No sabemos si Backstage arranca con SQLite en local; pruébalo» con aprobación → `spikes/<id>.md` con respuesta y rama descartada |
| No activación | «Implementa el catálogo» → remite a `/feature-spec`; «prototipa el portal completo» → lo rechaza como prototipo general |
| Restricción | Sin pregunta concreta, sin aprobación en definición, o pidiendo conservar el código → se detiene y lo dice |
| Comparación | Misma pregunta: misma respuesta o límites explicados |

## Referencias

[README](../README.md) §4.8: spike = pregunta → prueba → respuesta, sin
conservar código (Superpowers `brainstorming`); aprobación separada y alcance
acotado en definición (S12 l. 56 y 58, S04 l. 131-134); explorar ≠ elegir,
contexto ≠ evidencia (BMAD `research-a-decision`); rama desechable sin efectos
externos (workflow §3, S12 l. 64).
