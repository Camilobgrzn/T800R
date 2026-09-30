# Revisiones de la definición

## Revisión integral por bloques

Empieza en [review-tracker.md](review-tracker.md): muestra progreso adversarial y
discusión humana por separado. [blocks.md](blocks.md) permite localizar sólo el
fragmento a revisar. Cada ejecución procesa un bloque y guarda su checkpoint con
[BLOCK-TEMPLATE.md](BLOCK-TEMPLATE.md). Podemos discutir lo ya revisado sin esperar
al resto ni cargar el PRD completo. El protocolo está en
[la guía del editor](../adversarial-editor.md).

Este directorio separa anotaciones de los acuerdos canónicos. Las observaciones
no cambian una decisión por existir: sólo una resolución humana registrada en la
unidad canónica o en un ADR puede modificar un acuerdo.

## Cómo anotar

1. Asigna un ID `REV-YYYY-NNN`, donde `YYYY` es el año de creación y `NNN` es el
   siguiente número decimal de tres cifras no usado para ese año. Busca primero
   todos los IDs `REV-YYYY-NNN` de este directorio, usa un valor estrictamente
   mayor que el máximo existente y nunca reutilices uno, incluso si fue
   `rejected` o `deferred`.
2. Copia [TEMPLATE.md](TEMPLATE.md) a un archivo con nombre
   `YYYY-MM-DD-REV-YYYY-NNN-<tema>.md`.
3. Apunta a la unidad `S01`–`S07` en `../definition/` y a la sección precisa con
   su ancla y una cita distintiva. Los cierres tienen anclas estables `sNN-cierre`.
4. Identifica la revisión examinada (commit, fecha o revisión declarada).
5. Diferencia observación de inferencia y enlaza propuesta, contraargumento y
   cambio/resolución cuando existan.

## Preguntas y hallazgos

Una pregunta humana usa tipo `pregunta`, puede declarar `sin fuente aún` y no es
un hallazgo ni una corrección demostrada. Debe expresar la incertidumbre y la
decisión o investigación que permitiría resolverla.

Un hallazgo de tipo `error`, `incompleto` o `mejora` requiere fundamento
verificable: URL de fuente primaria, sección o localizador y fecha. Debe separar
el hecho observado de cualquier inferencia. Si falta fundamento, se registra como
`pendiente de investigación`, no como hallazgo probado ni corrección demostrada.

Una contradicción exclusivamente interna se fundamenta con enlaces a ambos
acuerdos y sus revisiones; no necesita un artículo externo ajeno al conflicto.
Para revisión asistida, consulta el [editor adversarial](../adversarial-editor.md).
Los IDs devueltos en paralelo son provisionales hasta que el coordinador comprueba
su unicidad al guardar las anotaciones.

Estados permitidos: `propuesto`, `en_discusion`, `accepted`, `rejected`,
`deferred`. Sólo una persona puede completar la resolución humana.
