# Checkpoint de bloque de revisión

Crear como `docs/reviews/blocks/<ID>.md` al iniciar el análisis del bloque. No
usar este archivo para aprobar acuerdos ni para sustituir la discusión humana.

```md
# <ID> — checkpoint de revisión

## Base de revisión

- Fecha: `AAAA-MM-DD`.
- Fuente: `<ruta>`.
- Rango base: líneas `<inicio>-<fin>`.
- Encabezado y citas distintivas: `<localizadores para detectar desplazamientos>`.
- Huella: `<commit, blob SHA o hash disponible; si no existe, indicar no disponible>`.
- Estado del análisis: `in_progress | reviewed | blocked | stale`.

## Lectura y evidencia

- Pasajes leídos: `<citas precisas de ruta:líneas>`.
- Fuentes consultadas: `<rutas, ADRs o bloques selectivamente necesarios>`.
- Hallazgos: `<IDs de hallazgos; ninguno aún si aplica>`.
- Evidencia no encontrada: `<afirmación comprobada y dónde se buscó>`.

## Cursor

- Último punto revisado: `<ruta:líneas o encabezado>`.
- Siguiente paso: `<acción concreta>`.

## Discusión humana independiente

- Estado: `not_ready | pending | in_progress | resolved`.
- Preguntas o propuestas a discutir: `<IDs o ninguna>`.
- Resultado humano: `<enlace a decisión, o pendiente>`.
```

`reviewed` sólo certifica que terminó el análisis adversarial del rango, con
contraste de afirmaciones, evidencia aplicable y límites documentados. No
certifica aprobación humana, modificación del canon ni cierre de un cruce
transversal.
