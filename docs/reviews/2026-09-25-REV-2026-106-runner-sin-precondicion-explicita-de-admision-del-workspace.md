# Anotacion de revision

- ID de anotacion: `REV-2026-106`
- Unidad y ubicacion: [S11](../definition/session-11-mvp-architecture.md#decisiones)
  (l. 92-93 y 140), frente a [S09](../definition/session-09-security-governance.md#decisiones)
  (l. 59, 61 y 71) y [ADR-010](../adr/ADR-010-arquitectura-tecnica-del-mvp.md#decisión)
  (punto 13, l. 164-168).
- Revision examinada: 2026-09-25; base local sin commit disponible.
- Tipo: `incompleto`
- Gravedad: `alta`
- Estado: `deferred`
- Confianza: `media`.
- Impacto: una validacion podria acceder a credenciales o datos sensibles ya
  presentes en el arbol montado aunque no reciba secretos por entorno.

## Clasificacion de evidencia

- Clase: `hallazgo fundamentado` interno; no se afirma una fuga observada.
- Fuente primaria: S09, S11 y ADR-010 citados arriba.
- Seccion o localizador: lineas y punto citados.
- Fecha de consulta/publicacion: consulta 2026-09-25.
- Hecho observado: S11 excluye credenciales del entorno, auth del proveedor y
  mounts adicionales, pero no expresa como se admite o excluye contenido sensible
  que ya exista dentro del workspace montado.
- Inferencia: impedir inyeccion por variables no basta para demostrar la propiedad
  amplia «sin credenciales» si el arbol accesible contiene un valor no autorizado.

## Observacion y propuesta

- Observacion: los controles generales pueden cubrir la via, pero la realizacion
  del runner no identifica la precondicion ni su prueba.
- Propuesta concreta: definir si la garantia aplica a toda credencial accesible y,
  si aplica, admitir un arbol materializado permitido, demostrar exclusiones o
  bloquear. Probar un secreto senuelo dentro del workspace y verificar que no llega
  al proceso, al modelo ni a artefactos persistidos.
- Contraargumento o coste/riesgo: limitar la garantia a credenciales inyectadas
  reduce el control requerido, pero debe conciliarse explicitamente con S09. Un
  escaneo general tampoco demostraria ausencia universal por si solo.

## Analisis adicional

- Evidencia interna: S09 exige ausencia de credenciales no autorizadas como
  propiedad del aislamiento; S11 concreta entorno y mounts, no admision del arbol.
- Contraevidencia y limites: politica y rutas protegidas pueden materializar el
  control. No se demostro que el repositorio piloto contenga secretos.
- Pregunta para resolver: ¿«sin credenciales» cubre todo contenido accesible al
  runner o solo valores que T800R inyectaria durante la ejecucion?

## Resolucion humana

- Decision y justificacion: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canonico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [informe de segunda pasada](second-pass-astra-2026-09-25.md).
