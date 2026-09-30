# Anotacion de revision

- ID de anotacion: `REV-2026-109`
- Unidad y ubicacion: [S10](../definition/session-10-product-experience.md#decisiones)
  (l. 74), [ADR-009](../adr/ADR-009-experiencia-portable-de-adopcion-y-mantenimiento.md#decisión)
  (l. 53-54) y [S11](../definition/session-11-mvp-architecture.md#decisiones)
  (l. 100 y 167).
- Revision examinada: 2026-09-25; base local sin commit disponible.
- Tipo: `error`
- Gravedad: `alta`
- Estado: `deferred`
- Confianza: `alta` sobre la divergencia textual.
- Impacto: ejecutar diagnostico podria cambiar disponibilidad, metadata o contenido
  almacenado, incluida evidencia, sin propuesta ni aplicacion explicitas.

## Clasificacion de evidencia

- Clase: `hallazgo fundamentado` exclusivamente interno.
- Fuente primaria: S10, ADR-009 y S11 citados arriba.
- Seccion o localizador: lineas citadas.
- Fecha de consulta/publicacion: consulta 2026-09-25.
- Hecho observado: S10 y S11 declaran `doctor` de solo lectura y devuelven toda
  reparacion al flujo de propuesta, pero S11 tambien le atribuye cuarentena de
  corrupcion, recuperacion y recoleccion de huerfanos.
- Inferencia: verificar hashes es diagnostico; mover, reconstruir o borrar objetos
  son efectos aunque usen grace period, lease y transaccion.

## Observacion y propuesta

- Observacion: concurrencia y elegibilidad de GC no conceden autorizacion ni
  resuelven la contradiccion de interfaz.
- Propuesta concreta: mantener comprobacion, diagnostico y elegibilidad en
  `doctor`; ejecutar cuarentena mutante, recuperacion y GC mediante un lifecycle
  explicito con gates y evidencia. Si existe contencion automatica, delimitarla y
  distinguirla de reparacion o borrado.
- Contraargumento o coste/riesgo: una cuarentena logica podria ser solo un veredicto
  derivado. Esa lectura no cubre «recupera o recolecta» y debe explicitarse para no
  autorizar efectos por abreviacion.

## Analisis adicional

- Evidencia interna: ADR-009 devuelve expresamente cualquier reparacion al flujo de
  propuesta; S11 conserva esa regla en l. 100 antes de atribuir efectos en l. 167.
- Contraevidencia y limites: marcar inelegibilidad sin mutar el CAS puede seguir
  siendo diagnostico. No se afirma que todo huerfano sea evidencia irremplazable.
- Pregunta para resolver: ¿que operacion, autoridad y lifecycle ejecutan
  cuarentena mutante, recuperacion y GC?

## Resolucion humana

- Decision y justificacion: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canonico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [informe de segunda pasada](second-pass-astra-2026-09-25.md).
