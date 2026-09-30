# Anotacion de revision

- ID de anotacion: `REV-2026-108`
- Unidad y ubicacion: [S10](../definition/session-10-product-experience.md#decisiones)
  (l. 89-92), [ADR-009](../adr/ADR-009-experiencia-portable-de-adopcion-y-mantenimiento.md#decisión)
  (l. 44-46 y 65-67) y [S11](../definition/session-11-mvp-architecture.md#decisiones)
  (l. 100).
- Revision examinada: 2026-09-25; base local sin commit disponible.
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre la ambiguedad textual.
- Impacto: solicitar una propuesta de retiro podria detener trabajo antes de
  autorizacion o, en otra implementacion, omitir una fase que S10 presenta primero.

## Clasificacion de evidencia

- Clase: `hallazgo fundamentado` exclusivamente interno.
- Fuente primaria: S10, ADR-009 y S11 citados arriba.
- Seccion o localizador: lineas citadas.
- Fecha de consulta/publicacion: consulta 2026-09-25.
- Hecho observado: S10 enumera desactivar nuevas operaciones antes de inspeccionar
  y proponer; S11 exige que `remove` inspeccione y proponga sin efectos por defecto.
- Inferencia: no se identifica que operacion produce la desactivacion ni que gate
  la autoriza.

## Observacion y propuesta

- Observacion: puede leerse S10 como el procedimiento ya autorizado, pero esa
  lectura deja el orden de inspeccion/propuesta sin correspondencia explicita.
- Propuesta concreta: ubicar la desactivacion ordinaria como primer efecto de la
  aplicacion autorizada. Si debe ocurrir antes, definir una operacion separada de
  suspension, su autoridad, recuperacion y tratamiento del trabajo en vuelo.
- Contraargumento o coste/riesgo: una contencion inmediata puede ser necesaria ante
  incidente; ese caso pertenece a S09 y no debe convertir todo `remove` en un
  efecto previo implicito.

## Analisis adicional

- Evidencia interna: ADR-009 exige inspeccion y propuesta antes de todo efecto;
  S10 permite desactivacion temporal, pero no identifica su operacion.
- Contraevidencia y limites: leer «retiro» como procedimiento ya autorizado evita
  que `remove` tenga efectos, aunque deja el orden sin correspondencia explicita.
- Pregunta para resolver: ¿la desactivacion comienza al aplicar la propuesta de
  retiro o existe una suspension previa con lifecycle propio?

## Resolucion humana

- Decision y justificacion: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canonico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: `REV-2026-091` e
  [informe de segunda pasada](second-pass-astra-2026-09-25.md).
