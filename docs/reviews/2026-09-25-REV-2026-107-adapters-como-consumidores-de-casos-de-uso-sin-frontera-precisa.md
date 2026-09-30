# Anotacion de revision

- ID de anotacion: `REV-2026-107`
- Unidad y ubicacion: [S11](../definition/session-11-mvp-architecture.md#decisiones)
  (l. 156 y 163), frente a [ADR-010](../adr/ADR-010-arquitectura-tecnica-del-mvp.md#decisión)
  (puntos 1 y 2, l. 110-118).
- Revision examinada: 2026-09-25; base local sin commit disponible.
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre la ambiguedad; `media` sobre el impacto.
- Impacto: implementaciones razonables pueden asignar distinta autoridad a los
  adapters para iniciar casos de uso o devolver callbacks al runtime.

## Clasificacion de evidencia

- Clase: `hallazgo fundamentado` exclusivamente interno.
- Fuente primaria: S11 y ADR-010 citados arriba.
- Seccion o localizador: lineas y puntos citados.
- Fecha de consulta/publicacion: consulta 2026-09-25.
- Hecho observado: los adapters dependen de `adapter-api` y contratos, mientras la
  API publica dice que «Adapters y automatizaciones TypeScript invocan casos de uso
  o puertos autorizados» sin distinguir adapters de entrada de realizaciones de
  puertos externos.
- Inferencia: no queda demostrado un ciclo de imports; una interfaz publica o
  inyectada puede conservar el grafo. Falta delimitar quien inicia efectos.

## Observacion y propuesta

- Observacion: la expresion «adapters» mezcla posibles papeles arquitectonicos que
  requieren direcciones de dependencia y autoridad diferentes.
- Propuesta concreta: identificar la clase de adapter que puede invocar casos de
  uso y la interfaz permitida para llamadas de retorno, manteniendo coordinacion de
  efectos en `application`. No introducir una capa adicional por defecto.
- Contraargumento o coste/riesgo: «puertos autorizados» puede contener ya la
  intencion correcta, pero los checks del grafo no pueden comprobar una distincion
  que no esta declarada.

## Analisis adicional

- Evidencia interna: ADR-010 conserva la CLI como frontend y composition root y
  prohibe imports de internals, pero no clasifica los adapters mencionados por la
  API publica.
- Contraevidencia y limites: una API publica o dependencia inyectada puede respetar
  el grafo; no se demostro un ciclo ni una llamada con autoridad indebida.
- Pregunta para resolver: ¿que adapters son entradas, cuales realizan puertos y
  cuales pueden iniciar un caso de uso?

## Resolucion humana

- Decision y justificacion: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canonico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [informe de segunda pasada](second-pass-astra-2026-09-25.md).
