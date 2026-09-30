# Anotación de revisión

- ID de anotación: `REV-2026-076`
- Unidad y ubicación: `ADR-003` — [«Detalles diferidos»](../adr/ADR-003-ciclo-operativo-y-coordinacion.md#detalles-diferidos)
  y [«Referencias»](../adr/ADR-003-ciclo-operativo-y-coordinacion.md#referencias),
  `docs/adr/ADR-003-ciclo-operativo-y-coordinacion.md:112-132`, frente a S04
  (l. 75, 113), S05 (l. 62, 66, 79), ADR-004 (l. 118, 124-125, 130), S09 (l. 40-47,
  68, 80), S11 (l. 112, 147), S12 (l. 9, 30), ADR-005 a ADR-010 («Referencias») y al
  [tracker de definición](../definition-tracker.md) (l. 341-349). Bloque `B037`.
- Revisión examinada: estado de los archivos al 2026-09-25 (repositorio sin
  commits; ADR-003 fechado 2026-09-15 y editado después en l. 117; ADR-004
  2026-09-16, ADR-005 2026-09-18, ADR-006 2026-09-21, ADR-007/008/009 2026-09-22,
  ADR-010 2026-09-24). Citas distintivas: «Portabilidad y contrato de adapters →
  resueltos en sesión 8 y ADR-007; mecanismos concretos → sesiones 11 y 12»
  (l. 117); «Permisos ejecutables, política de riesgo y runbooks concretos →
  sesión 9» (l. 118); «Los runbooks y umbrales concretos se definirán después;
  este acuerdo no autoriza ninguno» (S04 l. 113).
- Tipo: `incompleto`
- Gravedad: `baja`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos textuales y la ausencia de «runbook» (búsqueda
  en todo `docs/` salvo `reviews/`); `media` sobre el alcance de lo resuelto
  (S05-S12 y ADR-004-ADR-010 no se revisaron como bloques: se usan sólo como
  destino, por búsqueda y lecturas de una a veinte líneas)
- Impacto: dónde se decide qué runbooks puede ejecutar `Maintain` y con qué
  umbrales, hoy sin sesión que lo haya recibido; qué destinos de ADR-003 siguen
  abiertos para quien llega al ADR desde el tracker (l. 341) o desde los seis ADR
  posteriores que lo enlazan; y si la política de alto riesgo que la «Decisión»
  omite (`REV-2026-074` hecho 3) es localizable desde ADR-003. No cambia ninguna
  fila aceptada.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión exclusivamente interna; no requiere
  fuente externa según [README](README.md)).
- Fuente primaria: `docs/adr/ADR-003-ciclo-operativo-y-coordinacion.md:3, 94-97,
  112-132`; `docs/definition/session-04-operating-cycle.md:74-75, 109, 113-114,
  246-253, 325-327`; `docs/definition/session-05-handoffs.md:62, 66, 79`;
  `docs/adr/ADR-004-contrato-portable-de-handoffs.md:116-133`;
  `docs/definition/session-09-security-governance.md:40-47, 68, 80`;
  `docs/definition/session-11-mvp-architecture.md:112, 147`;
  `docs/definition/session-12-validation-convergence.md:9, 30`;
  `docs/definition-tracker.md:6-7, 314-349, 357-360`; búsquedas de «runbook»,
  «Maintain», «ADR-003» y de «Fecha» en `docs/` fuera de `reviews/`.
- Sección o localizador: ver «Unidad y ubicación».
- Fecha de consulta/publicación: consulta 2026-09-25.
- Hecho observado:
  1. **Siete de ocho destinos están cerrados y sólo uno lleva marca.** El
     tracker declara completadas las sesiones 5 a 11 (l. 342-348) y la 12
     `in_progress` (l. 349). l. 114 (sesión 5), 115 (6), 116 (7), 118 (9), 119
     (10) y 120 (11) conservan la flecha sin marca; l. 117 es la única marcada
     («resueltos en sesión 8 y ADR-007») y conserva «mecanismos concretos →
     sesiones 11 y 12» sin marcar la 11, ya cerrada (ADR-010). l. 121 (sesión 12)
     es el único destino abierto. Mismo patrón que
     [`REV-2026-066`](2026-09-25-REV-2026-066-adr-001-fuente-de-autonomia-sin-reflejar-s04-ni-s09-puntos-abiertos-con-destinos-cerrados-sin-marca-y-sin-enlace-a-adr-008.md)
     hecho 1 (ADR-001) y
     [`REV-2026-070`](2026-09-25-REV-2026-070-puntos-abiertos-de-adr-002-con-destinos-cerrados-sin-marca-handoffs-reenviados-a-s11-skills-resueltas-en-s08-y-sin-enlaces-a-adr-posteriores.md)
     hecho 1 (ADR-002). Aquí la marca de l. 117 tampoco enlaza ADR-007 (texto
     plano), a diferencia de ADR-001 l. 116 y ADR-002 l. 136, que sí enlazan.
  2. **Los runbooks de `Maintain` se envían a una sesión que no los recibió.**
     l. 118 remite «runbooks concretos → sesión 9». S04 difiere «runbooks y
     umbrales concretos» en dos filas `accepted` (l. 75, 113) y la «Decisión»
     del ADR permite a `Maintain` «ejecutar sólo runbooks reversibles
     explícitamente preautorizados» (l. 95-96). La búsqueda de «runbook» en todo
     `docs/` salvo `reviews/` sólo devuelve ADR-003 (l. 95, 118), S04 (l. 75,
     113) y la investigación del playbook (l. 36, 61, 85); «Maintain» sólo
     aparece en S04 dentro de `docs/definition/`. S09 no nombra runbooks,
     `Maintain` ni diagnóstico: su criterio de salida (l. 42-47) enumera
     invariantes, permisos, secretos, rutas protegidas, aprobaciones, riesgo,
     aislamiento, auditoría, degradación y parada, y deja «los mecanismos
     concretos para arquitectura»; S11, ADR-008, ADR-009 y ADR-010 tampoco los
     nombran; S12 trata «umbrales» sólo como criterios de validación del producto
     (l. 9, 30). S09 sí ofrece un marco general en el que podría caber una
     preautorización (política canónica con autoridad delegable, l. 80; niveles
     de riesgo, l. 68), pero no recoge las condiciones de S04 l. 113 (acotado por
     runtime/policy, observable, con rollback y comprobación posterior).
  3. **La política de riesgo sí se resolvió, pero el ADR no lleva a ella.**
     l. 118 es el único lugar de ADR-003 que remite la autoridad sobre alto
     riesgo que la «Decisión» omite
     ([`REV-2026-074`](2026-09-25-REV-2026-074-decision-de-adr-003-omite-consultas-y-autoridad-humana-de-s04-y-deja-solo-build-aceptacion-y-deploy-como-intervencion.md)
     hecho 3). S09 l. 68 fija los niveles y ADR-008 los recoge (resolución ya
     comprobada en `REV-2026-066` hecho 2); ADR-003 no marca l. 118 ni enlaza
     ADR-008, aunque ADR-008 enlaza ADR-003 (l. 77). ADR-004 repite el mismo
     destino sin marca («¿Qué controles ejecutables harán cumplir permisos y
     riesgo? → sesión 9», l. 124-125), materia de `B040`.
  4. **l. 114 remite a S05 una parte que S05 reenvió.** S05 decide campos,
     aceptación, rechazo, caducidad (`expires_at`/`due_at`, l. 62, 66) y separa
     el transporte (l. 79), pero ADR-004 l. 118 reenvía la representación física
     y la ubicación de `handoff/v1` a la sesión 11 (sin fila en S05:
     `REV-2026-036`). Quien siga «rutas … → sesión 5» llega a una sesión cerrada
     que no las decide; S11 l. 112 declara rutas de configuración y estado sin
     que ADR-003 lo refleje.
  5. **«Referencias» no enlaza ningún ADR posterior, aunque seis lo enlazan a
     él.** l. 125-132 enlaza S04, ADR-001, ADR-002 y cinco investigaciones.
     ADR-004 (l. 130), ADR-005 (l. 134), ADR-007 (l. 130), ADR-008 (l. 77),
     ADR-009 (l. 94) y ADR-010 (l. 202) enlazan ADR-003; ADR-003 no enlaza
     ninguno, y l. 117 nombra ADR-007 sin enlace. Las fuentes externas de
     l. 31-33 sólo son alcanzables a través de la investigación del orchestrator
     (l. 131), a diferencia de ADR-004 (l. 131-133), que lista URL; esto no es
     defecto por sí mismo, pero hace que la atribución corregida por
     [`REV-2026-072`](2026-09-25-REV-2026-072-contexto-de-adr-003-atribuye-a-microsoft-una-advertencia-sobre-coste-multiagente-que-la-investigacion-y-la-fuente-citada-no-contienen.md)
     no tenga ficha propia en el ADR.
- Inferencia (si aplica): ADR-003 funciona como fotografía de 2026-09-15 con una
  edición selectiva (l. 117), igual que ADR-001 y ADR-002. La consecuencia
  práctica nueva respecto de `REV-2026-066`/`070` es el hecho 2: un diferido
  (runbooks y umbrales de `Maintain`) cuyo destino declarado se cerró sin
  recibirlo, y que tampoco aparece en S10-S12. Como S04 l. 113 dice que «este
  acuerdo no autoriza ninguno», el efecto es seguro por defecto (`Maintain` no
  ejecuta runbooks), pero la capacidad aceptada queda sin sesión que la complete
  antes del cierre global.

## Observación y propuesta

- Observación: no falta contenido de producto en los destinos 5-8 y 10-11; falla
  el estado del inventario y su navegabilidad. El hecho 2 sí es una omisión de
  destino: ni S09 ni las sesiones posteriores recogen runbooks ni sus umbrales.
  Complementa, sin duplicar,
  [`REV-2026-028`](2026-09-24-REV-2026-028-aplazamientos-embebidos-en-filas-accepted-de-s04-sin-fila-deferred-ni-destino-en-la-unidad.md)
  (hecho 4 daba por asignados los runbooks en ADR-003 l. 118; aquí se comprueba
  que la sesión 9 no los recibió) y
  [`REV-2026-035`](2026-09-24-REV-2026-035-cierre-s04-afirma-sesion-de-resolucion-asignada-para-diferidos-sin-sesion-en-la-unidad.md)
  (cierre de S04 que afirma sesión asignada: el residuo sin destino se amplía con
  los runbooks).
- Propuesta concreta: que la persona decida, con la convención que adopte para
  `REV-2026-066`/`070`, (a) si ADR-003 es fotografía fechada (y se retira o fecha
  la marca de l. 117) o documento vivo (y se marcan l. 114-120 con su destino
  efectivo y enlace: ADR-004 → sesión 11 para l. 114, ADR-005, ADR-006, ADR-008,
  ADR-009 y ADR-010, y ADR-007 enlazado en l. 117); (b) qué sesión, backlog o
  declaración explícita recibe los runbooks y umbrales de `Maintain` (S12, una
  política de S09 aplicada por delegación, o su exclusión expresa del MVP); (c) si
  «Referencias» enlaza los ADR que cierran sus diferidos, en particular ADR-008
  para el alto riesgo. No editar ADR-003, S04, S09 ni el tracker sin esa decisión.
- Contraargumento o coste/riesgo: los ADR suelen ser inmutables y se superan con
  ADR posteriores que enlazan hacia atrás, como hacen seis de ellos; el tracker
  enlaza cada ADR desde su sesión (l. 341-348). Los runbooks pueden considerarse
  cubiertos por la política canónica de S09 (l. 80) si un runbook es sólo una
  acción preautorizada, y su ausencia en el MVP no crea riesgo porque nada queda
  autorizado. Pero ADR-003 ya se editó una vez para marcar una resolución, y las
  condiciones de S04 l. 113 no están en S09. El coste es una convención para los
  diez ADR y una línea de destino para los runbooks.

## Análisis adicional

- Evidencia interna: hechos 1-5 con sus localizadores.
- Contraevidencia y límites: no se revisaron S05-S12 ni ADR-004-ADR-010 como
  bloques; no se afirma que resuelvan correctamente los diferidos, sólo que
  tienen filas o puntos sobre ellos (o, para los runbooks, que no los tienen por
  búsqueda de términos). Un runbook podría figurar en S09-S12 con otro nombre
  («acción preautorizada», «remediación»): la búsqueda de «preautoriz»,
  «reversib», «remedia» y «Maintain» en S09-S12 y ADR-008-010 sólo devolvió usos
  ajenos a `Maintain` (S09 l. 68-69 sobre reversibilidad del riesgo, S10 l. 107
  sobre `doctor`, S11 l. 151 sobre migraciones). El umbral temporal de abandono
  (S04 l. 109), los subpasos (l. 74, 249) y la revisión transversal (l. 253) ya
  están en `REV-2026-028`/`035`; como hecho adicional, S11 l. 147 introduce
  leases con vigencia, pero «Expirar o perder el lease no cambia task ownership
  ni autoriza reasignación», y S05 l. 62 excluye convertir el tiempo en
  abandono: el umbral sigue sin decisión.
- Pregunta para resolver: ¿qué sesión o artefacto recibe los runbooks y umbrales
  de `Maintain` que ADR-003 l. 118 envió a la sesión 9, y debe ADR-003 marcar y
  enlazar el destino efectivo de sus diferidos o declararse fotografía de
  2026-09-15?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B037](blocks/B037.md), [B036](blocks/B036.md),
  [B018](blocks/B018.md), `REV-2026-028`, `REV-2026-035`, `REV-2026-036`,
  `REV-2026-066`, `REV-2026-070`, `REV-2026-072`, `REV-2026-074`; cruces `CT05` y
  `CT07`; bloque `B040` (ADR-004 l. 124-125).

## Preguntas pendientes

Ver el checkpoint [B037](blocks/B037.md).

## Cobertura y límites

Ver el checkpoint [B037](blocks/B037.md). Fuentes externas: ninguna; el
problema es interno.
