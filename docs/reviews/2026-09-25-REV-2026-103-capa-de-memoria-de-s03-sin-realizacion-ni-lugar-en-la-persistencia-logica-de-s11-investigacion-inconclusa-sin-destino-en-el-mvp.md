# Anotación de revisión

- ID de anotación: `REV-2026-103`
- Unidad y ubicación: `S03` — [Detalles aplazados](../definition/session-03-sources-of-truth.md#detalles-aplazados),
  fila «Herramientas y rutas concretas de tracking, memoria y evidencia»
  (`docs/definition/session-03-sources-of-truth.md:239`). Se contrasta con la
  tabla «Información que debe conservarse» (l. 91-97), con
  [Responsabilidad de la memoria](../definition/session-03-sources-of-truth.md#responsabilidad-de-la-memoria)
  (l. 103-116) y con los receptores declarados: S08, S10 y S11. En particular,
  S11 «Persistencia lógica separada por autoridad»
  (`docs/definition/session-11-mvp-architecture.md:62`), S11 l. 91 y 157, y S07
  l. 45 y 78-80. Cruce `CT07`, inventario de diferimientos. Citas distintivas:
  «Investigación inconclusa | Memoria de continuidad que distinga hechos e
  hipótesis» (S03 l. 97); «selección en portabilidad, experiencia y
  arquitectura, sesiones 8, 10 y 11» (S03 l. 239); «Los artefactos versionados
  del repositorio conservan … el work tracker conserva plan y estado operativo
  … Un ledger operacional de T800R conserva propuestas, snapshots efectivos,
  aprobaciones, checkpoints y evidencia» (S11 l. 62).
- Revisión examinada: 2026-09-25; S03 cerrada el 2026-09-14; S11 cerrada el
  2026-09-24; repositorio sin commits, huella no disponible.
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre S03 y S11 l. 62; `media` sobre la ausencia en
  S08-S10 y ADR-007 a ADR-010, comprobada por búsqueda y no por lectura
  completa, porque esos documentos están fuera del inventario
  (`REV-2026-101`).
- Impacto:
  - Descartar contexto depende de que exista un destino. S03 l. 88-89 permite
    reconstruir o descartar el contexto efímero sólo «si persiste lo necesario
    para continuar».
  - Afecta a la condición del índice «cada tipo de información tenga una fuente
    canónica» (l. 151), aunque la memoria no es fuente canónica sino capa de
    continuidad.
  - Afecta también a la promoción desde memoria de S07 l. 45 y 78-80, que
    presupone que la memoria existe.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión exclusivamente interna, visible al
  seguir un diferimiento hasta sus receptores)
- Fuente primaria: `docs/definition/session-03-sources-of-truth.md:44, 61,
  91-97, 103-116, 239`; `docs/definition/session-11-mvp-architecture.md:62, 91,
  157, 198-206`; `docs/definition/session-07-knowledge.md:45, 78-80, 93-94`;
  `docs/adr/ADR-002-fuentes-canonicas-y-conocimiento.md:105, 115`;
  `docs/adr/ADR-006-modelo-portable-de-conocimiento.md:62`. Búsquedas del
  2026-09-25:
  - «memoria» en S08-S12 y ADR-007 a ADR-010: sólo S08 l. 144 («ni promover
    memoria automáticamente») y S11 l. 93, 189 y 193, con otros sentidos
    («CPU/memoria», memoria del proveedor desactivada, streams «en memoria»);
  - «continuidad|hipótesis|inconclus|experiencias|notas|progreso» en S10, S11,
    ADR-009 y ADR-010: sin una realización de la capa.
- Sección o localizador: ver arriba.
- Fecha de consulta/publicación: consulta 2026-09-25.
- Hecho observado:
  1. **S03 acepta la memoria como capa con destino propio.** S03 l. 44
     (`accepted`) la destina a «continuidad del trabajo y recuperación de
     experiencias». La tabla de persistencia envía la «Investigación
     inconclusa» a la «Memoria de continuidad» (l. 97). La sección l. 105-110
     le asigna investigaciones en curso, intentos, hipótesis, próximos pasos y
     referencias a experiencias. l. 115-116: «No se ha elegido ningún motor ni
     mecanismo de almacenamiento».
  2. **Difiere su realización a tres sesiones.** l. 239 envía «Herramientas y
     rutas concretas de tracking, memoria y evidencia» a «sesiones 8, 10 y
     11».
  3. **Las otras dos capas de esa fila se realizaron, la memoria no.** S11 l. 62
     reparte la persistencia lógica entre:
     - los artefactos del repositorio (especificaciones, decisiones,
       configuración, política, registro de fuentes, conocimiento y skills);
     - el work tracker (plan y estado operativo);
     - el ledger (propuestas, snapshots, aprobaciones, checkpoints y
       evidencia);
     - los derivados.
     La memoria no aparece. S11 l. 157 enumera los módulos y sus aggregates,
     entre ellos `context`, `knowledge`, `evidence` y `artifacts`, sin ninguno
     para la memoria. Tracking recibe Beads (S11 l. 87) y evidencia recibe el
     ledger y el CAS (l. 75, 167). El único motor de memoria mencionado,
     Hindsight, que según `REV-2026-057` retiene y sintetiza, queda diferido
     «hasta medir su valor frente al baseline propio» (S11 l. 91, 200).
  4. **Otros acuerdos presuponen la capa.** S07 l. 45 y 78-80 y ADR-006 l. 62
     regulan la «promoción desde memoria». ADR-002 l. 105 y 115 («Usar memoria
     para retomar…»; investigaciones inconclusas «en memoria») la conservan en
     la «Decisión» del ADR.
  5. **Sin marca de retorno.** S03 l. 239 no lleva marca, y ADR-002 l. 146
     reenvía «herramientas, rutas y mecanismos de distribución» a «sesiones 8,
     10 y 11» sin nombrar la memoria.
- Inferencia (si aplica): en la arquitectura aceptada, la «Investigación
  inconclusa» y la función de «Recuperación de experiencias» no tienen lugar de
  persistencia. Un agente del MVP las perdería al descartar contexto o las
  escribiría en un destino con otra autoridad, contra S03 l. 112-115.

## Observación y propuesta

- Observación: la fila de S03 l. 239 difiere a S08, S10 y S11 tres
  realizaciones. Tracking y evidencia tienen receptor en S11, pero la memoria
  no aparece en la persistencia lógica (S11 l. 62) ni en los módulos (l. 157).
  Es el mismo patrón de las omisiones silenciosas de los cruces anteriores: un
  diferimiento que el receptor no recibe ni rechaza.
- Propuesta concreta (decisión humana; no se edita el canon):
  1. Decidir si el MVP realiza la memoria. Opciones: (a) como capa propia, con
     lugar en S11 l. 62, dueño y módulo; (b) sin memoria, declarando qué
     sustituye sus funciones. Por ejemplo, la continuidad en checkpoints del
     ledger o en el tracker, y la investigación inconclusa como entrada `draft`
     de conocimiento, que S07 l. 93-94 admite «si se identifica como
     provisional». En ese caso, anotar en S03 l. 97 y 239 (o en S12) que la
     tabla de persistencia cambia de destino.
  2. En cualquier caso, dar disposición a la fila de S03 l. 239 dentro del
     inventario de entrada de S12 (`REV-2026-102`) y aclarar si «promoción
     desde memoria» (S07 l. 45) se refiere a una capa del MVP o a un adapter
     futuro como Hindsight.
- Contraargumento o coste/riesgo:
  - La memoria es opcional por redacción («puede persistir», S03 l. 105), y
    S11 pudo considerarla cubierta por los checkpoints (l. 62, 75) y por
    entradas `draft`.
  - Hindsight se difiere de forma expresa y S12 decidirá el backlog.
  - Si es así, el defecto es sólo de trazabilidad: falta la disposición
    explícita. Pero la tabla de S03 l. 97 sigue nombrando un destino que el
    MVP no tiene.
  - Registrarlo cuesta una fila en S11 o S12. Decidir la opción (a) tiene
    coste de diseño.

## Análisis adicional

- Evidencia interna: [S03](../definition/session-03-sources-of-truth.md);
  [S11](../definition/session-11-mvp-architecture.md);
  [S07](../definition/session-07-knowledge.md);
  [ADR-002](../adr/ADR-002-fuentes-canonicas-y-conocimiento.md);
  [ADR-006](../adr/ADR-006-modelo-portable-de-conocimiento.md).
- Relación con anotaciones existentes, sin duplicarlas:
  - `REV-2026-020`: tabla de persistencia sin destino para lo no confirmado;
    su hecho 3 observa que la memoria no tenía motor en S03;
  - `REV-2026-057`: Hindsight como memoria que retiene y sintetiza, sin lugar
    para lo que retiene;
  - `REV-2026-023`: detalles aplazados de S03 sin retorno;
  - `REV-2026-025` y `069`: ADR-002 con remisiones divergentes;
  - esta anotación añade el seguimiento hasta S11 y la ausencia del receptor.
- Contraevidencia y límites:
  - S08-S10 y ADR-007 a ADR-010 no se leyeron completos; una realización con
    otro vocabulario no se descarta.
  - S11 l. 62 y 157 sí se leyeron y no la contienen.
  - Los checkpoints de S11 pueden cubrir la «continuidad del trabajo» si su
    contenido incluye hipótesis y próximos pasos, cosa que no se comprobó.
- Pregunta para resolver: ¿tiene el MVP una capa de memoria? Si no, ¿qué
  destino sustituye a la «Memoria de continuidad» de S03 l. 97 y de dónde se
  «promueve» conocimiento según S07 l. 45?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [CT07](blocks/CT07.md),
  [`REV-2026-020`](2026-09-21-REV-2026-020-tabla-de-persistencia-sin-destino-para-lo-no-confirmado.md),
  [`REV-2026-057`](2026-09-24-REV-2026-057-hindsight-decidido-en-s07-sin-identificacion-ni-fuente-la-fuente-primaria-lo-describe-como-memoria-que-retiene-y-sintetiza-creencias-no-solo-recuperacion-y-adapter-y-contrato-comun-antes-de-s08.md),
  [`REV-2026-102`](2026-09-25-REV-2026-102-remisiones-a-s12-sin-inventario-de-entrada-ni-dueno-y-mediciones-de-eficacia-que-solo-pueden-observarse-tras-construir.md)

## Preguntas pendientes

- ¿La «memoria de experiencias» es por proyecto o transversal (pregunta 2 de
  [CT04](blocks/CT04.md))? Sigue abierta: S11 no la ubica.

## Cobertura y límites

- Leído: S03 l. 84-119 y 208-262; S07 l. 44-46 y 78-94; S11 l. 60-77, 86-131
  y 150-235.
- Por búsqueda: S08-S12, ADR-002 y ADR-006 a ADR-010.
- Fuentes externas: no aplican.
