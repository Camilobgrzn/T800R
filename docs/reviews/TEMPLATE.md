# Anotación de revisión

- ID de anotación: `REV-YYYY-NNN` (siguiente número no usado del año)
- Unidad y ubicación: `SNN-...` — URL/ancla relativa
- Revisión examinada: commit, fecha o revisión declarada
- Tipo: `error` | `incompleto` | `mejora` | `pregunta`
- Gravedad: `crítica` | `alta` | `media` | `baja` | `no aplica`
- Estado: `propuesto` | `en_discusion` | `accepted` | `rejected` | `deferred`

## Clasificación de evidencia

- Clase: `pregunta humana sin fuente` | `hallazgo fundamentado` | `pendiente de investigación`
- Fuente primaria: URL (obligatoria para un hallazgo fundamentado)
- Sección o localizador:
- Fecha de consulta/publicación:
- Hecho observado:
- Inferencia (si aplica):

Para tipo `pregunta`, usa `sin fuente aún` cuando corresponda y describe qué
decisión o investigación la resolvería. Para `error`, `incompleto` o `mejora`,
fuente primaria, localizador y fecha son obligatorios. Si falta alguno, la clase
debe ser `pendiente de investigación`: no es una corrección demostrada.

## Observación y propuesta

- Observación:
- Propuesta concreta:
- Contraargumento o coste/riesgo:

## Resolución humana

- Decisión y justificación:
- Responsable y fecha:
- Enlace al cambio canónico o ADR:
- Enlaces relacionados (anotaciones, evidencia, issue):
