# Anotacion de revision

- ID de anotacion: `REV-2026-111`
- Unidad y ubicacion: [S11](../definition/session-11-mvp-architecture.md#decisiones)
  (l. 136-137) y [ADR-010](../adr/ADR-010-arquitectura-tecnica-del-mvp.md#decisión)
  (l. 169-171).
- Revision examinada: 2026-09-25; base local sin commit disponible.
- Tipo: `pregunta`
- Gravedad: `no aplica`
- Estado: `deferred`
- Confianza: `media`.
- Impacto: la realizacion de aprobaciones `high` necesita demostrar por separado
  firma y autoridad, presencia humana y procedencia hardware.

## Clasificacion de evidencia

- Clase: `pendiente de investigacion`.
- Fuente primaria: [OpenBSD `ssh-keygen(1)`](https://man.openbsd.org/ssh-keygen),
  secciones `-Y verify`, `FIDO AUTHENTICATOR` y `ALLOWED SIGNERS`.
- Seccion o localizador: S11 y ADR-010 citados arriba; manual OpenBSD-current.
- Fecha de consulta/publicacion: pagina fechada 2026-09-15; consulta por Astra
  2026-09-25.
- Hecho observado: `-Y verify` documenta el exito de una firma por un firmante
  autorizado; la explicacion de `no-touch-required` describe controles de presencia
  y menciona comportamiento de `sshd(8)`. La fuente consultada no basta para
  equiparar un exit code SSHSIG con todas las propiedades exigidas por T800R.
- Inferencia: no se demuestra que OpenSSH sea incapaz de aportar la evidencia ni
  que una firma valida omita necesariamente presencia.

## Observacion y propuesta

- Observacion: el contrato exige propiedades distintas, pero aun no identifica el
  oraculo y evidencia de cada una para una version concreta.
- Propuesta concreta: documentar como se comprueban firma/autoridad, presencia y
  elegibilidad hardware, con pruebas negativas. Si la documentacion no resuelve la
  incertidumbre bloqueante, proponer un spike acotado para aprobacion separada.
- Contraargumento o coste/riesgo: el adapter puede combinar OpenSSH con
  comprobaciones adicionales y S11 ya bloquea si no puede verificar. La pregunta
  no justifica sustituir SSHSIG ni ejecutar un spike sin autorizacion.

## Analisis adicional

- Evidencia interna: S11 y ADR-010 exigen tres propiedades acumulativas y bloqueo
  si no pueden verificarse.
- Contraevidencia y limites: el manual consultado no cubre necesariamente todas las
  versiones ni mecanismos complementarios del adapter. No prueba imposibilidad.
- Pregunta para resolver: ¿que version, comando y evidencia verifican cada
  propiedad, y hace falta un spike aprobado para cerrar alguna de ellas?

## Resolucion humana

- Decision y justificacion: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canonico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [informe de segunda pasada](second-pass-astra-2026-09-25.md).
