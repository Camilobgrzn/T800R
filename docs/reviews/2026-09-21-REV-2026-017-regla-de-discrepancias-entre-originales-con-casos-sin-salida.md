# Anotación de revisión

- ID de anotación: `REV-2026-017`
- Unidad y ubicación: `S03-decisiones` y `S03-distribución-canónica-inicial` —
  [session-03-sources-of-truth.md, fila «Vincular tareas, acuerdos y fuentes mediante referencias»](../definition/session-03-sources-of-truth.md#decisiones)
  (l. 38) y
  [párrafo «Si los originales se contradicen»](../definition/session-03-sources-of-truth.md#distribución-canónica-inicial)
  (l. 65-69)
- Revisión examinada: 2026-09-21; repositorio sin commits. Citas distintivas:
  «ante originales contradictorios, comprobar ámbito y versión y consultar si
  resolverlo exige cambiar un acuerdo» (l. 38); «establezca cómo resolver
  discrepancias sin dejar ambigüedades bloqueantes» (l. 27-28)
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `media`
- Impacto: la regla de discrepancias es el mecanismo con el que S03 da por cumplido
  su criterio de salida; si deja casos sin salida, el reparto de autoridad entre
  capas no decide qué hace un agente ante dos originales vigentes en conflicto, y
  el resultado depende del criterio de cada agente sin rastro auditable.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (contradicción/omisión exclusivamente interna)
- Fuente primaria: `docs/definition/session-03-sources-of-truth.md` (l. 27-28,
  36, 38, 39, 53-63, 65-69); dependencia leída:
  mismo archivo l. 129-132 y 147-151 (rango de `B010`)
- Sección o localizador: «Criterio de salida», «Decisiones», «Distribución
  canónica inicial»
- Fecha de consulta/publicación: consulta 2026-09-21; acuerdos confirmados el
  2026-09-14 según l. 3-4
- Hecho observado:
  1. La regla tiene dos ramas: resumen contra original (se corrige el resumen) y
     originales contradictorios («comprobar ámbito y versión y consultar si
     resolverlo exige cambiar un acuerdo»).
  2. La segunda rama sólo prevé consulta humana cuando la resolución exige
     cambiar un acuerdo. No dice qué ocurre cuando ámbito y versión no deciden y
     ninguno de los originales es un acuerdo: por ejemplo, dos fuentes externas
     registradas con el mismo ámbito y versión aplicable, o estado del work
     tracker frente a evidencia de ejecución, ambos «autoridad» de su capa según
     l. 39.
  3. El texto no indica dónde se registra una discrepancia detectada ni su
     resolución, ni qué puede hacerse con el trabajo dependiente mientras tanto.
     La única mención está fuera del rango (l. 131-132: «continuando el trabajo
     independiente») y se limita al caso de cambio de acuerdo.
  4. La distribución (l. 53-63) asigna autoridad por tipo de información, pero
     no fija un orden entre capas cuando dos capas afirman cosas incompatibles
     sobre el mismo hecho (especificación frente a ADR referenciado; tracker
     frente a evidencia). Sólo el par tracker/evidencia tiene una regla parcial
     (l. 73-75: marcar una tarea como terminada no sustituye sus validaciones).
  5. Una búsqueda de «originales contradictorios», «originales se contradicen»,
     «precedencia» y variantes en `docs/definition/*.md` y `docs/adr/*.md` sólo
     devuelve estas dos líneas de S03.
- Inferencia (si aplica): el criterio de salida pide resolver discrepancias «sin
  dejar ambigüedades bloqueantes» para la sesión 4. Los casos 2 a 4 son
  ambigüedades que el agente resolverá por su cuenta; al no exigirse registro, la
  decisión tomada no es auditable. No se ha comprobado cómo lo tratan S04-S07
  más allá de la búsqueda textual del punto 5.

## Observación y propuesta

- Observación: la regla funciona como procedimiento para derivado/original y para
  acuerdos en conflicto (toda resolución cambia un acuerdo, luego se consulta),
  pero deja sin salida declarada los conflictos entre originales que no son
  acuerdos y los conflictos entre capas, y no exige rastro de la discrepancia.
- Propuesta concreta: que la persona decida si se completa la regla con (a) una
  salida por defecto cuando ámbito y versión no deciden (consultar, o aplicar el
  criterio de autoridad registrado para esa fuente y, si no existe, consultar);
  (b) dónde se registra la discrepancia y su resolución (¿work tracker como
  bloqueo, evidencia, registro de fuentes?); (c) qué trabajo puede continuar
  mientras está abierta, llevando a la tabla de decisiones lo que hoy sólo figura
  en l. 131-132; o bien que lo registre como detalle `deferred` con sesión de
  destino en «Detalles aplazados».
- Contraargumento o coste/riesgo: una lectura razonable es que «consultar» es la
  salida implícita para todo lo que ámbito y versión no resuelvan, y que el
  criterio de autoridad por fuente (registro, esquema aplazado a las sesiones 7,
  8 y 10) cubrirá el desempate entre fuentes externas. Fijar precedencias entre
  capas demasiado pronto puede contradecir el agnosticismo de l. 34. Aun así, esa
  lectura no está escrita y la decisión de l. 36 busca evitar precisamente
  consultas innecesarias, por lo que el límite importa en ambos sentidos.

## Análisis adicional

- Evidencia interna: l. 36 reserva a la persona los criterios de autoridad; l. 56
  sitúa «ámbitos y criterios de autoridad, versiones aplicables» en el registro de
  fuentes, cuyo esquema está aplazado (l. 237). Hasta que exista, «comprobar
  ámbito y versión» no tiene dato contra el que comprobarse para fuentes del
  proyecto. Relación con [`REV-2026-001`](2026-09-21-REV-2026-001-precedencia-adr-unidad-canonica.md):
  la precedencia ADR/unidad en el propio repositorio de T800R es un caso concreto
  del punto 4; aquí no se duplica, sólo se enlaza.
- Contraevidencia y límites: S04-S07 y ADR-002 a ADR-006 no se leyeron; sólo se
  buscó texto. S06 define estados `degraded`/`invalid` para context packets que
  pueden cubrir parte de la conducta «mientras tanto». El cruce de autoridad es
  `CT01` y no se cierra con esta anotación.
- Pregunta para resolver: cuando dos originales vigentes se contradicen, ámbito y
  versión no deciden y ninguno es un acuerdo, ¿qué hace T800R, dónde queda
  registrado y quién puede cerrarlo?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B009](blocks/B009.md),
  [`REV-2026-001`](2026-09-21-REV-2026-001-precedencia-adr-unidad-canonica.md)

## Preguntas pendientes

Ver el checkpoint [B009](blocks/B009.md).

## Cobertura y límites

Ver el checkpoint [B009](blocks/B009.md). Sin fuentes externas: el problema es
interno.
