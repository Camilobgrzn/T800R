# ADR-008: Baseline de seguridad y gobernanza

**Fecha:** 2026-09-22  
**Estado:** Aceptada

## TL;DR

- **Problema:** T800R necesita límites portables para autorización, riesgo,
  aislamiento, evidencia y autonomía sin delegar su significado a un adapter.
- **Decisión:** adoptar el baseline lógico de seguridad y gobernanza de S09,
  incluida una matriz mínima de controles por riesgo y el principio de no ejecución
  para `prohibited`.
- **Por qué importa:** fija controles transversales difíciles de revertir sin
  seleccionar todavía runtime, schemas, rutas ni tecnología.

## Contexto

Los contratos de autonomía, ciclo operativo y capacidades requieren que una acción
se detenga cuando no puede demostrarse autorización, base, aislamiento, evidencia o
estado real. S09 completa esos límites para que el núcleo decida y audite, la
política declare restricciones y el adapter aplique o demuestre enforcement, sin
inventar permisos ni garantías.

## Alternativas evaluadas

| Alternativa | Beneficios | Costes y riesgos | Resultado |
| --- | --- | --- | --- |
| Política universal fijada en el núcleo | Uniformidad inmediata. | Confunde invariantes con restricciones del repositorio y reduce adaptación. | Rechazada. |
| Delegar autorización, riesgo y auditoría a cada adapter | Menor contrato central. | Hace variar garantías, autoridad y condiciones de parada por proveedor. | Rechazada. |
| Un control común para todos los riesgos | Simplicidad operativa. | No ajusta evidencia, contención, recuperación ni revisión al impacto efectivo. | Rechazada. |
| **Baseline portable con controles proporcionales por riesgo** | **Preserva invariantes comparables y autonomía graduada.** | **Exige política explícita, evidencia y enforcement demostrable.** | **Aceptada.** |

## Decisión

1. El núcleo fija invariantes portables, valida precondiciones, determina permisos
   efectivos, detiene ante ambigüedad y exige evidencia. La política declara
   autoridad, restricciones, riesgos, aprobaciones, aislamiento y precedencia. El
   adapter traduce y aplica la política o declara la capacidad ausente y detiene la
   acción afectada.
2. Los secretos se manejan mediante referencias opacas e inyección controlada; no
   entran en contexto, artefactos canónicos ni auditoría.
3. Las rutas y acciones protegidas se resuelven contra el destino efectivo. Las
   aprobaciones son acotadas, persistentes, revalidadas y no superan prohibiciones.
4. Cada acción se clasifica como `routine`, `elevated`, `high` o `prohibited` por
   impacto, reversibilidad, alcance, sensibilidad, exposición e incertidumbre.
5. `routine` requiere autorización efectiva, validación normal y auditoría
   aplicable. `elevated` añade recuperación o reversión definida, evidencia
   reforzada y contención proporcional. `high` añade verifier independiente
   obligatorio y aprobación humana antes del efecto protegido o de su integración.
   `prohibited` no se ejecuta y requiere cambio de política por la autoridad
   aplicable, no una excepción operativa.
6. La política puede endurecer los controles, pero no rebajar los mínimos del
   núcleo. Los fallos se contienen por alcance, se reconcilian antes de continuar y
   no se reintentan efectos inciertos sin comprobar su estado real.

## Consecuencias

- La autonomía se mantiene para trabajo autorizado y proporcional al riesgo.
- Las acciones de alto riesgo requieren verificación independiente y revisión
  humana en el punto protegido, sin bloquear preparación contenida.
- Los adapters deben demostrar controles y evidencia; sus capacidades locales no
  conceden autoridad por sí mismas.
- La arquitectura deberá materializar estas obligaciones sin convertir mecanismos
  concretos en la semántica del baseline.

## Puntos abiertos

- ¿Cómo se distribuyen, configuran y actualizan los controles en la experiencia de
  adopción? → sesión 10.
- ¿Qué runtime, schemas, rutas y mecanismos implementan el baseline? → sesión 11.
- ¿Qué pruebas, métricas y adapters demuestran conformidad? → sesión 12.

## Referencias

- [S09: Seguridad y gobernanza](../definition/session-09-security-governance.md#s09-cierre).
- [ADR-001: Autonomía y responsabilidades](ADR-001-autonomia-y-responsabilidades.md).
- [ADR-003: Ciclo operativo, ownership y coordinación](ADR-003-ciclo-operativo-y-coordinacion.md).
- [ADR-004: Contrato portable de handoffs](ADR-004-contrato-portable-de-handoffs.md).
- [ADR-005: Contrato portable de contexto](ADR-005-contrato-portable-de-contexto.md).
- [ADR-006: Modelo portable de conocimiento](ADR-006-modelo-portable-de-conocimiento.md).
- [ADR-007: Contrato de capacidades y adapters portables](ADR-007-contrato-de-capacidades-y-adapters-portables.md).
