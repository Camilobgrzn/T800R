# Investigación: The AI-Native SDLC playbook

Fecha de consulta: 2026-09-15. Estado: evidencia para la sesión 4; ninguna
práctica queda aceptada por aparecer en esta fuente.

## Fuente y alcance

- Fuente oficial: [The AI-Native SDLC playbook](https://claude.com/blog/the-ai-native-sdlc-playbook), Claude by Anthropic.
- Autor: Louis Claxton. Publicado el 2026-08-21.
- Material ampliado: [curso oficial de Claude Academy](https://academy.claude.com/courses/ai-native-sdlc-playbook), 14 lecciones.
- Audiencia declarada: responsables de ingeniería, plataforma y seguridad en
  organizaciones que ya usan Claude Code, especialmente empresas reguladas.

El artículo presenta prácticas del equipo Applied AI de Anthropic inspiradas en
su trabajo con clientes. Es evidencia primaria de un diseño operativo posible y
de funciones de Claude Code, no un estudio comparativo ni una medición pública de
eficacia general. Sus afirmaciones sobre productividad no incluyen muestra,
benchmark ni resultados reproducibles.

## Ciclo propuesto

`Plan → Design → Build → Test → Deploy → Maintain → Plan`

Cada etapa deja un artefacto versionado que alimenta la siguiente. El artículo
propone `intent.md`, `spec.md`, `plan.md`, diff y pruebas, PR con hallazgos e
incidente como cadena de auditoría. La aceptación de un artefacto puede activar el
siguiente play.

| Etapa | Prácticas destacadas |
| --- | --- |
| Plan | Capturar problema, resultado, afectados, restricciones y preguntas en un intent revisado por product owner. |
| Design | Elaborar requisitos y diseño aplicando políticas como skills; resolver preocupaciones antes de construir. |
| Build | Aceptar un plan antes de editar; mantenerlo alineado con el diff; usar contexto breve, skills, hooks y sesiones aisladas. |
| Test | Dar feedback continuo al implementador y añadir verificación final con contexto independiente; ejecutar evals ante cambios al harness. |
| Deploy | Combinar revisión agente, controles deterministas y gates humanos por entorno/riesgo; conservar rollback y evidencia. |
| Maintain | Detectar desviaciones mediante métricas, diagnosticar, ejecutar sólo runbooks autorizados y devolver incidentes al ciclo como nueva intención/eval. |

## Aportes compatibles con T800R

- Ciclo iterativo, artefactos persistentes y trazabilidad entre intención,
  implementación, evidencia y entrega.
- Definición colaborativa y autoridad humana sobre intención, aceptación, alto
  riesgo y producción.
- Plan antes de construir, validación continua y verificador con contexto nuevo
  cuando haga falta independencia.
- Una fuente de verdad por artefacto y enlaces a sistemas existentes en lugar de
  sustituirlos sin necesidad.
- Contexto inicial breve, conocimiento institucional versionado y skills con
  owner y fuente canónica.
- Paralelismo sólo para tareas realmente independientes y crecimiento limitado
  por la capacidad de revisión.
- Separación entre orientación probabilística y enforcement determinista.

Estas prácticas refuerzan acuerdos existentes de las sesiones 2 a 4; no requieren
adoptar nombres de archivo ni herramientas de Anthropic.

## Evaluación de candidatas

| Práctica | Valor potencial | Riesgo o pregunta |
| --- | --- | --- |
| `Maintain` como capacidad continua y transversal. Observa y diagnostica automáticamente con acceso de sólo lectura; puede crear una propuesta o incremento `draft` con señal, evidencia, impacto y deduplicación, sin autorizar `build`; sólo ejecuta un runbook explícitamente preautorizado, reversible, acotado por runtime/policy, observable y con rollback y comprobación posterior. Un cambio de producto, acción irreversible o salida de límites vuelve a `plan` y a los gates acordados. **`accepted` en sesión 4.** | Observación, diagnóstico y retorno de incidentes al ciclo descritos por el playbook. | Autonomía creciente dentro de políticas verificables. Runbooks y umbrales concretos se definirán después; este acuerdo no autoriza ninguno. |
| Evals regresivos proporcionales del harness ante cambios que puedan alterar su comportamiento. **`accepted` en sesión 4.** | Detectan degradación por cambios de instrucciones, skills, políticas, adapters, herramientas o modelos. | Corpus, baseline, frecuencia, CI/offline y umbrales quedan para sesiones 11–12; no se impone aún alcance al MVP. |
| Política asesora frente a enforcement determinista. Instrucciones, specs, conocimiento y skills orientan o explican; no conceden permisos ni demuestran cumplimiento. Las reglas obligatorias verificables mecánicamente se aplican mediante runtime/policy determinista; las reglas semánticas no mecanizables requieren evidencia, verifier y revisión humana según riesgo. **`accepted` en sesión 4.** | Contrato portable entre orientación probabilística y enforcement, sin tratar instrucciones al modelo como controles de seguridad. | Los mecanismos concretos se decidirán después; los hooks de Claude no son contrato núcleo. |
| Señal determinista → diagnóstico → nueva tarea/intent | Convierte incidentes y métricas en aprendizaje trazable. | La automatización prematura puede amplificar ruido o ejecutar efectos no autorizados. |
| Aislamiento de sesiones de escritura | Reduce colisiones y apoya ownership. | La candidata ya está cubierta por acuerdos de ownership sobre escritura, dependencias, base y estrategia de integración. Los worktrees siguen como mecanismo pendiente, no contrato. |

## Prácticas que requieren adaptación

- No exigir universalmente `intent.md`, `spec.md` y `plan.md`: T800R ya aceptó
  preparación proporcional basada en decisiones y evidencia, con fuentes
  configurables y specs evolutivas.
- No convertir `CLAUDE.md`, `.claude/`, plan mode, auto mode, hooks o MCP de
  Claude en contratos núcleo: son candidatos para adapters portables.
- No sustituir la clasificación proporcional de verificación por revisión IA
  idéntica para todos los cambios.
- No autorizar un agente a recorrer mantenimiento, cambios y despliegue sólo
  porque una métrica cruzó un umbral; debe respetar permisos, riesgo, ownership y
  la política de entorno ya aceptados.
- No asumir que worktrees permiten concurrencia segura por sí solos: sigue siendo
  necesario declarar escritura, dependencias, base e integración.

## Decisiones para discutir

1. La decisión sobre niveles de acción de `maintain` quedó aceptada en la sesión
   4; runbooks y umbrales concretos siguen pendientes y no autorizados.
2. Mantener pendiente el mecanismo concreto de aislamiento paralelo; los
   requisitos de ownership sobre escritura, dependencias, base e integración ya
   están cubiertos y los worktrees no son contrato.

## Relación con las fuentes anteriores

El playbook refuerza la preparación proporcional de BMAD, los planes y revisión
de Superpowers/Addy y la persistencia de los artículos de harnesses. T800R ya es
más explícito en `stage`/`status`, recuperación de ownership, concurrencia entre
sesiones, revisión proporcional y portabilidad entre proveedores. Debe conservar
esas diferencias al adaptar las nuevas candidatas.
