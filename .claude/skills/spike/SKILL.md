---
name: spike
description: Responde una pregunta bloqueante con un experimento en una rama desechable y registra pregunta, qué se probó, respuesta y evidencia en spikes/<id>.md, persistido fuera de esa rama antes de borrarla; el código no se conserva como solución. Úsala cuando una incertidumbre impide decidir en plan o design, o durante la construcción si el incremento autorizado lo contempla. No la uses para construir producto, para evitar una spec, ni sin pregunta concreta y alcance acotado.
---

# /spike

Etapa `plan` (`docs/workflow-construccion.md` §3; `skills/README.md` §4.8;
rutas desde la raíz del repositorio). La ejecuta un worker. Un spike
**aprende**, no construye.

## Qué produce

`spikes/<id>.md` según [references/spike-template.md](references/spike-template.md):
pregunta, alcance, qué se probó, respuesta, evidencia (comandos, SHA de la rama
desechable, entorno) y qué decisión desbloquea. Su copia durable vive en la
**rama de destino**: `feat/<id>` si el spike sirve a una feature, o la rama de
trabajo de la definición (la persona la comete) si sirve a una sesión de
definición. La rama del experimento se descarta sólo después.

## Qué no hace

- No autoriza conservar código: si algo del spike sirve, se reimplementa dentro
  de una tarea con su spec, plan y verificación.
- No decide por la persona: entrega evidencia para decidir.
- No sustituye a `/feature-spec` ni a `/feature-plan`.
- No produce efectos externos ni instala dependencias fuera del worktree
  desechable.
- Un efecto `high` dentro del spike requiere su propia aprobación `local`;
  nunca ejecuta `prohibited`.
- No borra la rama ni el worktree mientras el informe no esté cometido en la
  rama de destino.

## Precondiciones mecánicas

1. Pregunta concreta y alcance escritos en `spikes/<id>.md` **antes** de tocar
   código; la pregunta debe nombrar la decisión que bloquea (de una spec, un
   plan o una sesión de definición).
2. Autorización:
   - durante la **definición** (S12 en curso): aprobación explícita y separada
     de la persona, registrada en `control:approvals/spikes.md` como `spike
     <id> approved` (S12 «Especificación ejecutable», l. 56), con el
     procedimiento de `control` del workflow §2.1 (escribir, cometer,
     comprobar con `git show control:approvals/spikes.md`);
   - durante la **construcción**: basta con que el incremento autorizado lo
     contemple (el plan lo nombra) o con la aprobación anterior.
3. Rama de destino identificada (`feat/<id>` o la rama de la definición) y
   rama `spike/<id>` creada desde ella, en worktree propio si es posible.
4. Presupuesto declarado (turnos o tiempo). Un spike sin límite es un prototipo.

## Procedimiento

1. **Escribe la pregunta** y las hipótesis en `spikes/<id>.md`; define qué
   observación la respondería (criterio de parada).
2. **Experimenta** en la rama desechable, con el mínimo código para observar.
   Separa lo que orienta (contexto, documentación) de lo que sustenta (lo que
   ejecutaste y viste): sólo lo segundo es evidencia. Las rutas protegidas
   (workflow §4.3) rigen también aquí: no ejecutes con ellas modificadas.
3. **Registra** cada comando y resultado relevante, con SHA de la rama y
   entorno; «no ejecutado: motivo» para lo que no pudiste probar.
4. **Responde** la pregunta en una o dos frases, con el grado de confianza y
   los límites (qué no se probó). Si la respuesta es «depende», di de qué.
5. **Persiste el informe fuera de la rama desechable.** Anota en el archivo el
   último SHA de `spike/<id>` y comételo en esa rama (`spike: <id> informe`).
   Después, desde el checkout de la rama de destino:
   `git show spike/<id>:spikes/<id>.md > spikes/<id>.md && git add --
   spikes/<id>.md && git commit -m "spike: <id>"` (si la rama de destino es la
   de la definición, lo comete la persona). Comprueba `git log -1 --format=%H
   -- spikes/<id>.md` en la rama de destino antes de seguir.
6. **Descarta** el experimento, sólo tras el paso 5: si usaste worktree,
   `git worktree remove <ruta>`; después `git branch -D spike/<id>`. El SHA
   anotado permite recuperar la rama del reflog un tiempo, pero eso no es una
   entrega: la entrega es el informe en la rama de destino.
7. **Entrega**: ruta de `spikes/<id>.md` en la rama de destino, respuesta,
   decisión que desbloquea y a qué skill vuelve el flujo (`/feature-spec`,
   `/feature-plan` o la sesión de definición).

## Comprobación antes de entregar

- [ ] Pregunta, alcance y criterio de parada escritos antes del código.
- [ ] Evidencia con comandos, SHA y entorno; «no ejecutado» explícito.
- [ ] Respuesta con confianza y límites.
- [ ] Informe cometido en la rama de destino **antes** de borrar la rama.
- [ ] Rama descartada; nada mezclado en `main` ni en ramas de tareas.
- [ ] Sin efectos externos ni dependencias fuera del worktree.

## Evals (checklist manual, README §6)

| Caso | Prueba |
| --- | --- |
| Activación | «No sabemos si Backstage arranca con SQLite en local; pruébalo» con aprobación → `spikes/<id>.md` en la rama de destino, con respuesta, y rama descartada |
| No activación | «Implementa el catálogo» → remite a `/feature-spec`; «prototipa el portal completo» → lo rechaza como prototipo general |
| Restricción | Sin pregunta concreta, sin aprobación en definición, pidiendo conservar el código, o pidiendo borrar la rama antes de persistir el informe → se detiene y lo dice |
| Comparación | Misma pregunta: misma respuesta o límites explicados |

## Referencias

`skills/README.md` §4.8: spike = pregunta → prueba → respuesta, sin conservar
código (Superpowers `brainstorming`); aprobación separada y alcance acotado en
definición (S12 l. 56 y 58, S04 l. 131-134); explorar ≠ elegir, contexto ≠
evidencia (BMAD `research-a-decision`); rama desechable sin efectos externos
(workflow §3, S12 l. 64).
