# Anotación de revisión

- ID de anotación: `REV-2026-067`
- Unidad y ubicación: `ADR-002` — [«Alternativas evaluadas»](../adr/ADR-002-fuentes-canonicas-y-conocimiento.md#alternativas-evaluadas)
  y [«Por qué descartamos las otras»](../adr/ADR-002-fuentes-canonicas-y-conocimiento.md#por-qué-descartamos-las-otras),
  `docs/adr/ADR-002-fuentes-canonicas-y-conocimiento.md:44-57`, frente a `S03` —
  [«Punto de entrada utilizado»](../definition/session-03-sources-of-truth.md#punto-de-entrada-utilizado)
  y [«Decisiones»](../definition/session-03-sources-of-truth.md#decisiones)
  (l. 11-18, 32-47). Bloque `B032`.
- Revisión examinada: estado de los archivos al 2026-09-25 (repositorio sin
  commits; ADR-002 fechado 2026-09-14, S03 confirmada el 2026-09-14). Citas
  distintivas: «| Alternativa | Continuidad y autoridad | Coste | Resultado |»
  (ADR-002 l. 46); «No elegida frente a documentos y tracker con
  responsabilidades separadas.» (l. 49); «Insuficiente para el objetivo de
  continuidad.» (l. 48).
- Tipo: `incompleto`
- Gravedad: `baja`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos; `media` sobre el impacto
- Impacto: qué alternativas quedaron descartadas por S03/ADR-002 y con qué
  estado y criterio, cuando una sesión posterior quiera revisar, por ejemplo, un
  catálogo fijo de fuentes, la autorización por documento o la memoria como
  autoridad; y cuál es el registro vigente de la única alternativa que el ADR
  sí evalúa.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión y divergencia exclusivamente internas;
  no requiere fuente externa según [README](README.md)).
- Fuente primaria: `docs/adr/ADR-002-fuentes-canonicas-y-conocimiento.md:1, 44-57`;
  `docs/definition/session-03-sources-of-truth.md:11-18, 32-47`; `AGENTS.md:33-36`;
  `docs/adr/ADR-001-autonomia-y-responsabilidades.md:46-47` y
  `docs/adr/ADR-003-ciclo-operativo-y-coordinacion.md:39-41` (por búsqueda de
  «rejected|No elegida|Insuficiente» en ADR-001 a ADR-006); búsqueda de
  «tracker» y «rejected» en S03.
- Sección o localizador: ver «Unidad y ubicación».
- Fecha de consulta/publicación: consulta 2026-09-25; ADR-002 y S03 fechados
  2026-09-14.
- Hecho observado:
  1. **Resultados fuera del vocabulario de estados.** La tabla (l. 46-50) tiene
     tres filas. La fila 1 («Depender de conversaciones y notas particulares,
     como situación de partida») concluye «Insuficiente para el objetivo de
     continuidad»; la fila 2 («Concentrar también la definición en el
     tracker») concluye «No elegida frente a documentos y tracker con
     responsabilidades separadas»; la fila 3 «Aceptada por el usuario».
     `AGENTS.md` l. 35-36 exige registrar cada conclusión como `accepted`,
     `deferred` o `rejected`. ADR-001 sí usa `rejected` en su fila 2 (l. 46);
     ADR-002 no lo usa en ninguna, igual que ADR-003 (l. 39-41, «No elegida»).
  2. **La alternativa evaluada no tiene fila en la unidad.** Las catorce filas
     de «Decisiones» de S03 (l. 34-47) son `accepted`; no hay filas
     `rejected` ni `deferred` en esa tabla. Ninguna fila ni el punto de
     entrada (l. 11-18) mencionan concentrar la definición en el tracker ni la
     situación de partida de conversaciones y notas (búsqueda de «tracker»:
     l. 14, 26, 37, 39, 55, 72, 94, 109, 248, siempre como capa asignada). La
     evaluación de l. 46-57 existe sólo en el ADR, como la que `REV-2026-064`
     hecho 2 observó en ADR-001.
  3. **Las opciones que S03 sí descarta no están en ninguna tabla.** Las
     justificaciones de filas `accepted` de S03 descartan expresamente: un
     «catálogo fijo impuesto por T800R» (l. 34); «exigir que la persona aporte
     de entrada todos los datos» (l. 35); «pedir autorización por cada
     documento consultado» (l. 36); la adopción de OKF («no constituye
     adopción del formato, perfil o versión», l. 40); convertir «hipótesis o
     recuerdos en una autoridad paralela» (l. 44); «conservar cada mensaje o
     resultado intermedio» (l. 47). Son las alternativas de la mitad del ADR
     que da nombre a su título («conocimiento con procedencia», l. 1: registro,
     autoridad, memoria, OKF, contexto), y la tabla del ADR no recoge ninguna:
     sólo compara dónde vive la definición frente al estado operativo.
  4. **Coste aceptado sin medida.** La opción aceptada tiene como coste
     «Mantener referencias, vigencia y comprobaciones» (l. 50) y l. 57 dice
     que «El modelo elegido acepta el coste de mantener referencias»; el rango
     no fija magnitud, umbral ni destino (l. 129-130, en `B033`, reconoce que
     «todavía no están cuantificados»; pregunta 3 de `B006`).
- Inferencia (si aplica): unidad y ADR registran conjuntos de alternativas
  disjuntos: el ADR evalúa una opción (fila 2) que la unidad canónica no
  menciona y le da un resultado fuera del vocabulario, mientras las seis
  opciones que la unidad descarta en sus justificaciones no constan como
  `rejected` en ninguno de los dos documentos. Es el mismo patrón de
  `REV-2026-064` hecho 5 (S02/ADR-001) y `REV-2026-058` hecho 3 (S07/ADR-006),
  ahora en S03/ADR-002.

## Observación y propuesta

- Observación: la decisión aceptada no está en duda; lo incompleto es el
  registro de lo descartado. Quien quiera reabrir, por ejemplo, la
  autorización por documento o un catálogo fijo, sólo encontrará una cláusula
  «sin…» dentro de la justificación de una fila `accepted`, sin estado, sin
  criterio ni coste comparado. Y quien quiera saber si concentrar la definición
  en el tracker fue rechazado por la persona sólo tiene la tabla del ADR.
- Propuesta concreta: que la persona decida (a) si las alternativas de un ADR
  deben usar el vocabulario `accepted`/`deferred`/`rejected` (y entonces «No
  elegida» e «Insuficiente» pasan a `rejected`, o se explica por qué no), (b)
  si las opciones descartadas en las justificaciones de S03 l. 34-47 deben
  constar como filas `rejected` en la unidad o como alternativas en el ADR, y
  (c) si la fila 2 del ADR debe tener fila en S03. No editar S03 ni ADR-002 sin
  esa decisión; es una convención común a `CT07`.
- Contraargumento o coste/riesgo: las cláusulas «sin…» de las justificaciones
  ya registran la conclusión dentro de una fila `accepted`, lo que puede
  bastar para `AGENTS.md` l. 35-36; «No elegida» se entiende sin ambigüedad;
  la fila 1 es un antecedente y no una alternativa real; y un ADR no necesita
  evaluar alternativas para cada componente, sólo para la decisión
  transversal. El coste es añadir filas o cambiar dos palabras, pero conviene
  decidirlo una vez para todos los ADR (ADR-001, ADR-002, ADR-003 y ADR-006).

## Análisis adicional

- Evidencia interna: hechos 1-4 con sus localizadores; el punto de entrada de
  S03 (l. 16-18: «evitando que varias copias compitan como fuente de verdad»)
  es coherente con la columna «Continuidad y autoridad» y no se registra como
  defecto.
- Contraevidencia y límites: no se buscó en `ideas/` ni en
  `docs/research-fuentes-sesion-3.md` si la alternativa de la fila 2 se
  discutió con la persona; la investigación de fuentes no la menciona en sus
  hallazgos (l. 20-28). ADR-002 l. 93-94 («RAG y MCP son mecanismos de acceso,
  no autoridades por sí mismos») es otra exclusión embebida, pero cae en
  `B033`. No se afirma que alguna opción descartada deba reabrirse.
- Pregunta para resolver: ¿deben las alternativas de los ADR y las opciones
  descartadas en las justificaciones de las unidades constar con estado
  `rejected` en la unidad, en el ADR o en ambos, y qué registro prevalece para
  la fila 2 de ADR-002, que S03 no menciona?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B032](blocks/B032.md),
  [`REV-2026-064`](2026-09-25-REV-2026-064-alternativas-de-adr-001-sin-coordinacion-opcion-aceptada-peor-en-adopcion-y-portabilidad-sin-objetivo-s01.md)
  (hechos 2 y 5),
  [`REV-2026-058`](2026-09-24-REV-2026-058-aplazamientos-embebidos-en-filas-accepted-de-s07-sin-rejected-frente-a-seis-alternativas-de-adr-006-y-punto-abierto-marcado-resuelto-con-adr-007-posterior.md)
  (hecho 3),
  [`REV-2026-001`](2026-09-21-REV-2026-001-precedencia-adr-unidad-canonica.md),
  cruces `CT04` y `CT07`.

## Preguntas pendientes

Ver el checkpoint [B032](blocks/B032.md).

## Cobertura y límites

Ver el checkpoint [B032](blocks/B032.md). Fuentes externas: ninguna; el
problema es interno.
