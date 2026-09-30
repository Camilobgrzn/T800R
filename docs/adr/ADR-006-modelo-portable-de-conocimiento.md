# ADR-006: Modelo portable de conocimiento

**Fecha:** 2026-09-21
**Estado:** Aceptada

## TL;DR

- **Problema:** T800R necesita conocimiento mantenido descubrible y reutilizable sin convertirlo en una autoridad paralela ni fijar todavía su representación física.
- **Decisión:** adoptar un perfil lógico compatible con OKF v0.2, con taxonomía semántica extensible, bundles con ámbito y curator, metadatos comunes y específicos, lifecycle editorial separado de frescura e indexación portable.
- **Por qué importa:** permite alimentar la sección `knowledge` del context packet preservando autoridad, procedencia, aplicabilidad y revisión.

## Contexto

El conocimiento mantenido conecta y sintetiza fuentes del proyecto, pero no
sustituye acuerdos, estado operativo, evidencia, memoria provisional ni skills.
La sesión 6 dejó preparada la sección `knowledge` del context packet y exigió
preservar referencias, procedencia y reconciliación sin seleccionar tecnología.

## Alternativas evaluadas

| Alternativa | Resultado |
| --- | --- |
| Perfil T800R compatible con OKF v0.2, con reglas propias de autoridad, aplicabilidad, revisión y vigencia. | **Aceptada.** Reutiliza identidad, enlaces, procedencia y navegación sin crear un contrato aislado. |
| Contrato propio mapeable a OKF. | **Rechazada.** Crearía un contrato aislado en lugar de usar OKF como base lógica. |
| OKF sólo como vista de importación y exportación. | **Rechazada.** La vista derivada no sería el modelo principal aceptado. |

### Formas de taxonomía

| Alternativa | Resultado |
| --- | --- |
| Núcleo pequeño de tipos semánticos, extensible por proyecto. | **Aceptada.** Los tipos adicionales preservan el perfil y no obtienen autoridad por su nombre. |
| Taxonomía cerrada. | **No adoptada.** El perfil aceptado debe ser extensible por proyecto. |
| Taxonomía ligada a etapas SDLC o a un proveedor. | **No adoptada.** La clasificación es semántica y portable. |

El núcleo aceptado es `concept`, `pattern`, `lesson` y `synthesis`, con límites
frente a acuerdos, evidencia, tracker, memoria y skills.

### Posición de Hindsight

| Alternativa | Resultado |
| --- | --- |
| Hindsight obligatorio en el modelo o en el MVP. | **No adoptado.** La posición semántica aceptada es opcional y su adopción concreta se difiere. |
| Hindsight opcional como adapter de recuperación semántica. | **Aceptada.** Sus resultados son pistas que deben verificarse contra fuente y revisión. |
| Hindsight excluido. | **No adoptado.** Puede utilizarse sin convertirse en autoridad paralela. |

## Decisión

1. T800R usa un perfil lógico compatible con OKF v0.2, fijado a la base
   `ad30107c31c06aec8a7d5636e0d1058118604e6f`. Las señales OKF, incluidas
   `stable` y `verified`, no conceden autoridad al contenido.
2. El conocimiento se organiza en bundles con `scope` y owner explícitos para
   proyecto, organización o T800R. Puede referenciar otros ámbitos sin copiar
   sus fuentes como autoridad.
3. Toda entrada declara `type`, `title`, `sources`, `status`, `applicability`,
   `revision` y `review`, y resuelve un `curator` efectivo por herencia o
   delegación. `generated`, `verified`, `stale_after`, relaciones y aliases son
   condicionales; owner, curator predeterminado y `scope` corresponden al bundle.
4. Los requisitos específicos son: `domain` y definición para `concept`; problema,
   solución y tradeoffs para `pattern`; evidencia, observación e interpretación
   para `lesson`; y asunto, al menos dos fuentes y discrepancias para `synthesis`.
5. El curator mantiene estructura, referencias, aplicabilidad y vigencia dentro
   de su ámbito, sin poder cambiar acuerdos. La promoción desde memoria puede
   quedar en `draft` y exige curación proporcional antes de reutilizarse; requiere
   revisión humana si cambia acuerdos o excede la autonomía concedida.
6. `status` expresa lifecycle editorial (`draft`, `stable`, `deprecated`) y la
   frescura derivada expresa `current`, `review_due` o `stale`. No hay caducidad
   universal: `check_after` programa comprobación y `stale_after` sólo se usa con
   una razón temporal concreta. Una acción no depende de contenido `stale` sin
   revisar lo afectado.
7. Las transiciones son `draft → stable` tras curación, `stable → deprecated`
   con razón o reemplazo y `deprecated → draft` para reactivación. Cambios
   semánticos vuelven la revisión a `draft`; correcciones mecánicas auditadas
   pueden conservar `stable`.
8. Cada bundle mantiene un índice raíz compacto y portable. Índices temáticos,
   de texto completo, vectoriales o de herramientas son derivados reconstruibles
   y no sustituyen entradas ni fuentes.
9. Hindsight o un motor equivalente es un adapter opcional de recuperación
   semántica. Sus resultados conservan referencia y revisión y se reconcilian con
   la fuente vigente; sin él, se degrada a índice portable y búsqueda textual.
   No promueve memoria ni cambia entradas por sí mismo.

## Consecuencias para el equipo

- El modelo lógico es portable sin seleccionar Markdown, rutas, almacenamiento,
  servicios ni motor de búsqueda.
- La curación mantiene procedencia y aplicabilidad, pero no convierte conocimiento
  estable en acuerdo del proyecto.
- La sección `knowledge` referencia bundle, revisión y entradas seleccionadas; no
  carga por defecto el bundle completo.
- Los índices y la recuperación semántica facilitan descubrimiento, pero la fuente
  vigente y sus revisiones siguen gobernando el uso.

## Puntos abiertos

- Identidad portable y mapeo de identidad a la ruta de OKF → resueltos mediante
  identidad dual y referencias `exact`/`current` en sesión 8 y
  [ADR-007](ADR-007-contrato-de-capacidades-y-adapters-portables.md).
- Representación física, rutas, almacenamiento y mecanismos de búsqueda → sesión 11.
- Adopción concreta de Hindsight en el MVP → sesiones 11 y 12.

## Referencias

- Acuerdos canónicos: [sesión 7](../definition/session-07-knowledge.md).
- [ADR-002: Fuentes canónicas y conocimiento](ADR-002-fuentes-canonicas-y-conocimiento.md).
- [ADR-005: Contrato portable de contexto](ADR-005-contrato-portable-de-contexto.md).
- [Investigación de OKF](../research-open-knowledge-format.md).
