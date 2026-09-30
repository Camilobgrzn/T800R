# Anotacion de revision

- ID de anotacion: `REV-2026-110`
- Unidad y ubicacion: [S09](../definition/session-09-security-governance.md#decisiones)
  (l. 56, 80-83), [S10](../definition/session-10-product-experience.md#decisiones)
  (l. 65 y 92) y [S11](../definition/session-11-mvp-architecture.md#decisiones)
  (l. 133, 136, 144 y 170).
- Revision examinada: 2026-09-25; base local sin commit disponible.
- Tipo: `incompleto`
- Gravedad: `alta`
- Estado: `accepted`
- Confianza: `media-alta` sobre la omision; no se afirma circularidad inevitable.
- Impacto: una adopcion limpia puede bloquearse o introducir confianza implicita en
  quien ejecuta la CLI para establecer la politica que define a sus aprobadores.

## Clasificacion de evidencia

- Clase: `hallazgo fundamentado` exclusivamente interno.
- Fuente primaria: S09, S10 y S11 citados arriba.
- Seccion o localizador: lineas citadas.
- Fecha de consulta/publicacion: consulta 2026-09-25.
- Hecho observado: la persona conserva la definicion inicial; `apply` revalida
  politica y autorizaciones; las identidades y claves aprobadoras se declaran en
  esa politica; `init` propone la politica nueva. No se identifica el acto que
  establece y acredita por primera vez esa raiz de confianza.
- Inferencia: una ceremonia humana externa puede resolverlo, pero no esta conectada
  al flujo de adopcion ni a la evidencia esperada.

## Observacion y propuesta

- Observacion: los gates ordinarios presuponen la fuente que debe crearse en la
  primera adopcion.
- Propuesta concreta: definir el limite de bootstrap: quien establece primera
  politica, principals y claves, mediante que acto verificable y que operaciones
  puede realizar T800R antes de ello. No introducir una excepcion general a
  `default deny`.
- Contraargumento o coste/riesgo: si la politica inicial siempre llega prefirmada o
  se establece fuera de T800R, no hay ciclo operacional. Esa precondicion debe
  declararse para que `init` y `apply` no inventen confianza.

## Analisis adicional

- Evidencia interna: S09 asigna la definicion inicial a la persona; S11 define la
  verificacion ordinaria y la politica propuesta, pero no su ceremonia inicial.
- Contraevidencia y limites: `REV-2026-018` ya pregunta quien acredita autoridad de
  fuentes. Este hallazgo se limita a la raiz criptografica y de politica del
  bootstrap, no repite aquella pregunta general.
- Pregunta para resolver: ¿quien establece el primer principal aprobador, como se
  autentica ese acto y que puede hacer T800R antes de verificarlo?

## Resolucion humana

- Decision y justificacion: `accepted`. La discusión amplió el alcance: la persona
  cuestionó si la aprobación firmada (S11 l. 133-137) era una práctica común y una
  [investigación](../research-approval-practices-harnesses.md) mostró que ningún
  harness de referencia la exige. Se decidió el «camino 2»: el MVP usa el perfil de
  aprobación `local` (decisión persistente creada por un comando humano fuera de
  una sesión de agente, con origen registrado) y SSHSIG/FIDO pasa a ser el perfil
  `signed`, seleccionable por política. El bootstrap queda definido para ambos
  perfiles: antes de la primera política aplicada T800R sólo inspecciona, propone y
  ejecuta `doctor`; en `local`, quien aplica la primera propuesta de `init` desde
  fuera de una sesión de agente es el aprobador inicial y el ledger registra un
  evento `bootstrap`; en `signed`, la primera política debe llegar firmada con una
  de las claves que declara. Sin excepción general a `default deny`. Riesgo
  aceptado: `local` no separa criptográficamente humano y agente en el mismo shell.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-29.
- Enlace al cambio canonico o ADR:
  [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones)
  (tres filas nuevas), enmiendas en
  [S11](../definition/session-11-mvp-architecture.md#decisiones) l. 133-137 y
  [ADR-010](../adr/ADR-010-arquitectura-tecnica-del-mvp.md) punto 14.
- Enlaces relacionados: `REV-2026-018` e
  [informe de segunda pasada](second-pass-astra-2026-09-25.md).
