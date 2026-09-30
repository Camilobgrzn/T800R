# ADR-009: Experiencia portable de adopción y mantenimiento

**Fecha:** 2026-09-22  
**Estado:** Aceptada

## TL;DR

- **Problema:** T800R debe incorporarse y evolucionar en repositorios existentes
  sin convertir una CLI, rutas o generadores concretos en el producto ni
  sobrescribir personalizaciones.
- **Decisión:** definir operaciones comunes con CLI de referencia, adopción
  escalonada, propiedad explícita, diagnóstico por operación, reconciliación de
  tres vías, snapshots exactos, migraciones verificables y retiro selectivo.
- **Por qué importa:** hace reproducibles y auditables instalación, sincronización
  y actualización mientras preserva autoridad, seguridad y estado local.

## Contexto

Los contratos de ciclo, contexto, conocimiento, portabilidad y seguridad exigen
reconciliar fuentes, capacidades, permisos y efectos antes de actuar. Sin un
contrato de experiencia, cada integración podría interpretar de forma distinta
`init`, diagnóstico y actualización, o tratar los artefactos distribuidos como
archivos reemplazables sin ownership ni procedencia.

La experiencia también debe funcionar para una persona mediante una CLI y para
adapters o automatizaciones sin obligarlos a simular comandos. En esta fase no se
han seleccionado representación física, tecnología, schemas, empaquetado ni
runtime.

## Alternativas evaluadas

| Alternativa | Beneficios | Costes y riesgos | Resultado |
| --- | --- | --- | --- |
| CLI como producto y transporte único | Punto de entrada uniforme y sencillo. | Acopla adapters y automatizaciones a una interfaz concreta y confunde comandos con contratos. | Rechazada. |
| Copia o regeneración de artefactos | Implementación y convergencia simples. | Pierde procedencia o sobrescribe cambios locales; no resuelve repositorios existentes. | Rechazada. |
| Mantenimiento enteramente manual | Minimiza automatización riesgosa. | Traslada reconciliación repetitiva a la persona y carece de resultados comparables. | Rechazada. |
| **Operaciones comunes, propuestas y reconciliación verificable** | **Preserva portabilidad, personalizaciones, seguridad y automatización.** | **Exige ownership, snapshots, evidencia, conflictos y recuperación explícitos.** | **Aceptada.** |

## Decisión

1. T800R define operaciones de adopción y mantenimiento independientes del
   transporte. La CLI es su interfaz humana de referencia, no una fuente de
   autoridad ni la única realización válida.
2. Toda operación con efectos sigue inspección de sólo lectura, propuesta
   persistente, aplicación explícita y verificación reconciliada. `init` produce
   por defecto una propuesta sin cambios.
3. La configuración confirmada declara el estado deseado. Hechos descubiertos,
   sugerencias y defaults permanecen diferenciados y no inventan autoridad,
   permisos ni fuentes canónicas.
4. Cada artefacto o sección se clasifica como `managed`, `generated`, `referenced`
   o `local`, con identidad, origen y base. Ninguna clase autoriza sobrescritura
   silenciosa.
5. `doctor` valida por capas y expresa hallazgos y elegibilidad por operación. Es de
   sólo lectura por defecto y cualquier reparación vuelve al flujo de propuesta.
6. `sync` converge contra revisiones ya fijadas mediante reconciliación de tres
   vías. `update` propone cambios de revisión, compatibilidad y migraciones antes
   de delegar la convergencia a `sync`.
7. Cada adopción conserva un snapshot exacto y compatible de sus componentes. Una
   migración declara precondiciones, efectos, riesgo, verificación y recuperación;
   la reversión sólo se promete cuando está demostrada.
8. Las colisiones requieren resolución explícita y acotada. No se resuelven por
   orden de instalación, nombre coincidente ni precedencia global implícita.
9. Los gates muestran riesgo, recursos, autoridad y controles aplicables por
   efecto, con secretos siempre opacos. Aplicación y recuperación obedecen ADR-008.
10. El retiro es selectivo y verificable: elimina sólo unidades atribuibles y
    autorizadas, preserva fuentes canónicas y personalizaciones y registra el
    estado residual.

## Consecuencias

- Un mismo contrato puede exponerse por CLI, adapters y automatizaciones con
  resultados y condiciones de parada comparables.
- La adopción requiere metadatos de propiedad, base, revisión y procedencia, además
  de diagnósticos y propuestas persistentes.
- Actualizar deja de ser copiar la última distribución: exige compatibilidad,
  reconciliación, autorización y verificación.
- Los conflictos o fallos parciales bloquean sólo unidades y dependencias afectadas
  cuando el alcance puede demostrarse.
- La arquitectura deberá materializar estas obligaciones sin introducir una
  segunda fuente de verdad ni prometer atomicidad o rollback universales.

## Puntos abiertos

- ¿Qué representación, schemas, empaquetado, runtime y sintaxis de CLI implementan
  las operaciones y snapshots? → sesión 11.
- ¿Qué componentes y realizaciones entran en el MVP? → sesión 11.
- ¿Qué pruebas demuestran adopción, actualización, recuperación y equivalencia en
  T800R y el repositorio piloto? → sesión 12.

## Referencias

- [S10: Experiencia del producto](../definition/session-10-product-experience.md#s10-cierre).
- [ADR-001: Autonomía y responsabilidades](ADR-001-autonomia-y-responsabilidades.md).
- [ADR-003: Ciclo operativo, ownership y coordinación](ADR-003-ciclo-operativo-y-coordinacion.md).
- [ADR-005: Contrato portable de contexto](ADR-005-contrato-portable-de-contexto.md).
- [ADR-007: Contrato de capacidades y adapters portables](ADR-007-contrato-de-capacidades-y-adapters-portables.md).
- [ADR-008: Baseline de seguridad y gobernanza](ADR-008-baseline-de-seguridad-y-gobernanza.md).
- OpenAI: *Harness engineering* — https://openai.com/index/harness-engineering/
- Anthropic: *Effective harnesses for long-running agents* — https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents
- Anthropic: *Effective context engineering for AI agents* — https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents
