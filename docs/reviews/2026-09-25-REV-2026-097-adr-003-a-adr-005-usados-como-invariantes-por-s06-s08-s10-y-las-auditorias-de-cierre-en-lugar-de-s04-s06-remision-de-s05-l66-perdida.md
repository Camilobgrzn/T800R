# Anotación de revisión

- ID de anotación: `REV-2026-097`
- Unidad y ubicación: `S04`-`S06` y sus ADR como fuente de sesiones
  posteriores. Se contrastan [ADR-003 «Referencias»](../adr/ADR-003-ciclo-operativo-y-coordinacion.md#referencias)
  (l. 125), [ADR-004 «Referencias»](../adr/ADR-004-contrato-portable-de-handoffs.md#referencias)
  (l. 129) y [ADR-005 «Referencias»](../adr/ADR-005-contrato-portable-de-contexto.md#referencias)
  (l. 132) con estos consumidores: [S06](../definition/session-06-context.md)
  (l. 14, 36, 47, 135, 202), [S08](../definition/session-08-portability.md)
  (l. 78, 317, 393, 408-409), [S09](../definition/session-09-security-governance.md)
  (l. 45, 114-115), [S10](../definition/session-10-product-experience.md)
  (l. 54, 162-163), [S03](../definition/session-03-sources-of-truth.md) (l. 234)
  y el [tracker de definición](../definition-tracker.md) (l. 341-343, 357-360,
  379-380). Cruce `CT05`.
- Revisión examinada: estado de los archivos al 2026-09-25; repositorio sin
  commits, huella no disponible. ADR-003 fechado 2026-09-15; ADR-004,
  2026-09-16; ADR-005, 2026-09-18. Citas distintivas: «Acuerdos canónicos:
  [sesión 4]» (ADR-003 l. 125); «Debe preservar ADR-001 y ADR-003 a ADR-007»
  (S09 l. 45); «no se alteran lifecycle, ownership, autoridad, presupuestos,
  procedencia ni vigencia definidos en ADR-003 a ADR-006» (S08 l. 408-409);
  «Concreta de forma eficiente la reconciliación mínima ya exigida por
  ADR-003» (S06 l. 47); «auditados frente a ADR-003» (tracker l. 359-360).
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos textuales (lectura de S04-S06 y de los
  tres ADR; búsqueda de «ADR-00[345]» en `docs/definition/`; lectura de las
  líneas citadas de S08-S10 y del tracker); `media` sobre el efecto (S08-S10
  no se leyeron completas, y no se demostró que una cláusula perdida esté
  contradicha allí)
- Impacto: qué documento es el invariante que las sesiones posteriores deben
  preservar y contra el que se auditan. Los tres ADR remiten los acuerdos a su
  unidad, pero S06, S08, S09, S10 y el tracker los usan como la definición que
  hay que preservar. Como sus «Decisión» resumen las unidades con pérdidas
  (`REV-2026-074`, `075`, `079`, `083`), las afirmaciones de preservación y de
  «sin contradicciones» no alcanzan a las cláusulas perdidas. Esto condiciona
  la decisión de precedencia (a) de `CT04`: declarar subordinado el ADR no basta
  si los criterios y cierres posteriores siguen apuntando a él.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (divergencia exclusivamente interna; no se
  invoca ninguna fuente externa)
- Fuente primaria: `docs/adr/ADR-003-ciclo-operativo-y-coordinacion.md`,
  `ADR-004-contrato-portable-de-handoffs.md` y
  `ADR-005-contrato-portable-de-contexto.md` (completos);
  `docs/definition/session-04-operating-cycle.md` l. 1-140 y 240-328;
  `session-05-handoffs.md` (completa); `session-06-context.md` (completa);
  búsqueda de «ADR-00[345]» en `docs/definition/` (coincidencias: S03 l. 234;
  S04 l. 4, 327; S05 l. 22, 263; S06 l. 14, 36, 47, 135, 202, 205; S07 l. 107;
  S08 l. 78, 126, 277, 317, 363, 393, 409; S09 l. 45, 115; S10 l. 54, 163);
  lectura de S08 l. 388-411, S09 l. 42-47 y 111-118, S10 l. 51-56 y 159-165;
  `docs/definition-tracker.md` l. 312-380; búsqueda en S06 de «sesión 4|sesión
  5|S04|S05|handoff/v1» (sin coincidencias).
- Sección o localizador: «Referencias» de los tres ADR; «Punto de entrada»,
  «Criterio de salida», «Decisiones», «Presupuesto y prioridades» y cierre de
  S06; criterios de salida y comprobaciones de cierre de S08-S10; «Fuentes
  aplicables», «Sesiones» y criterios de salida de las sesiones 5 y 6 del
  tracker de definición.
- Fecha de consulta/publicación: consulta 2026-09-25.
- Hecho observado:
  1. **En S04-S06 los ADR y el tracker remiten a la unidad.** Cada ADR
     encabeza «Referencias» con «Acuerdos canónicos: sesión N» (ADR-003 l. 125;
     ADR-004 l. 129; ADR-005 l. 132). La tabla «Fuentes aplicables» del tracker
     (l. 314-326) no tiene filas para ciclo, handoffs ni contexto, y las filas
     de las sesiones 4-6 enlazan primero el cierre de la unidad y después el ADR
     (l. 341-343). A diferencia de S01-S03 (`CT04`, contraste 1), aquí el
     enrutado del tracker no invierte la precedencia.
  2. **S06 hereda de los ADR, no de las unidades.** Su punto de entrada parte
     de «la separación establecida en ADR-004» (l. 14-17). Su criterio exige
     «preservar la separación de ADR-004» (l. 36), la fila l. 47 concreta «la
     reconciliación mínima ya exigida por ADR-003», y l. 135 y l. 202 vuelven a
     ADR-004. S06 no nombra S04, S05, «sesión 4», «sesión 5» ni `handoff/v1`.
     En cambio, S05 l. 22 cita «la sesión 4 y ADR-003».
  3. **Criterios y cierres posteriores preservan los ADR.** S08 aplica reglas
     «conforme a ADR-003» (l. 78, 317) y «según ADR-003 y ADR-005» (l. 393), y
     su cierre afirma que «no se alteran lifecycle, ownership, autoridad,
     presupuestos, procedencia ni vigencia definidos en ADR-003 a ADR-006»
     (l. 408-409). El criterio de S09 dice «Debe preservar ADR-001 y ADR-003 a
     ADR-007» (l. 45), y su cierre, que no hubo contradicciones «con ADR-001 ni
     con ADR-003 a ADR-007» (l. 114-115). S10 repite ambas fórmulas hasta
     ADR-008 (l. 54, 162-163). El tracker registra la auditoría de S05 «frente
     a ADR-003» (l. 359-360) y la de S06 frente a «ADR-003 o ADR-004»
     (l. 379-380). S03 l. 234 da por aceptados el lifecycle y sus invariantes
     «en la sesión 4 y ADR-003».
  4. **Lo que esos invariantes no contienen.** Según los mapas de `B036`,
     `B039` y `B042`: ADR-003 punto 4 no recoge las transiciones de S04
     l. 95-97 (a `waiting`/`blocked`, retorno, cancelación desde cualquier estado
     no terminal) ni los estados de sesión de l. 115-116. Tampoco recoge los
     disparadores de consulta de l. 85 y l. 88 (`REV-2026-074`) ni el estado
     ante duda de l. 109 (`REV-2026-075`). ADR-004 no recoge la regla de
     caducidad de S05 l. 62 ni la cancelación del emisor de l. 61
     (`REV-2026-079`). ADR-005 no recoge la regla capa → estado de S06 l. 51 ni
     la exclusividad de carga de l. 113 (`REV-2026-083`). Decir «no se alteran
     lifecycle … definidos en ADR-003» no demuestra que se preserven esas
     cláusulas.
  5. **Un caso observado de remisión perdida por esta vía.** S05 l. 66 remite
     el packet a la sesión 6: «se referenciará y su contrato se definirá en la
     sesión 6». ADR-004 no recoge esa remisión: su punto 3 no tiene campo para
     el packet y su punto 10 sólo habla de «una referencia separada». S06 partió
     de ADR-004 (l. 14-17) y no fijó el campo de referencia (`REV-2026-046`),
     mientras ADR-004 l. 122-123 marca el punto como «resuelto en sesión 6».
- Inferencia: la precedencia declarada (unidad canónica, ADR como registro)
  está bien escrita en los tres ADR y en el tracker. Sin embargo, el uso
  posterior convierte a los ADR en la interfaz entre sesiones. Las auditorías
  de coherencia de S05, S06 y S08-S10 se formulan contra esa interfaz, que es
  un resumen con pérdidas. `REV-2026-083` documentó el caso de ADR-005 citado
  por S07/S08; el patrón alcanza a ADR-003 y ADR-004, a los criterios de salida
  y a las afirmaciones de auditoría.

## Observación y propuesta

- Observación: la subordinación del ADR a la unidad es coherente en la letra
  de S04-S06 y de sus ADR. Se rompe en los consumidores: la unidad siguiente y
  los criterios y cierres de S08-S10 preservan el ADR, no la unidad.
- Propuesta concreta: que la persona decida (a) si «preservar ADR-00N» en
  criterios y cierres significa preservar la unidad canónica que el ADR
  enlaza, y lo declare una sola vez (por ejemplo, en
  `docs/definition/README.md` o `AGENTS.md`); (b) si las auditorías ya
  registradas «frente a ADR-00N» (tracker l. 359-360, 379-380; S08 l. 408-409;
  S09 l. 114-115; S10 l. 162-163) bastan o deben repetirse contra las unidades
  antes de cerrar la definición (S12), junto con `REV-2026-034`, `044` y `053`;
  y (c) si S06 debe citar S04 y S05 junto a ADR-003 y ADR-004 y recibir con
  acuse S05 l. 66. No editar el canon sin esa decisión.
- Contraargumento o coste/riesgo: «preservar ADR-00N» puede leerse como
  preservar el acuerdo que el ADR registra y enlaza. Las auditorías pudieron
  hacerse contra las unidades sin dejar constancia (`REV-2026-034`, `044`,
  `053`). Las citas comprobadas de S08 (l. 126, 363) son compatibles en
  sustancia con S06 (`REV-2026-083`). Esta revisión no demuestra que una
  sesión posterior contradiga una cláusula perdida: demuestra que su
  comprobación declarada no la cubre. Declarar la regla cuesta una frase;
  repetir las auditorías, más.

## Análisis adicional

- Evidencia interna: hechos 1-5 con sus localizadores. `REV-2026-001` (análisis
  `stale`) plantea la precedencia entre índice, unidad y ADR. `CT04` la resolvió
  por analogía con S03 l. 53-54 y encontró la inversión en el tracker (l. 318-319).
  En S04-S06 el tracker está bien y la inversión aparece en los consumidores.
- Contraevidencia y límites: no se leyeron S07-S10 completas, ni S11 l. 223-225
  («con ADR-001 a ADR-009», por `B040`/`B043`). Puede existir un registro de las
  auditorías fuera de `docs/` (conversaciones), que esta revisión no puede ver.
- Pregunta para resolver: cuando un criterio o cierre dice «preservar ADR-00N»
  o «sin contradicciones con ADR-00N», ¿se refiere a la unidad canónica? Si es
  así, ¿qué auditorías hay que repetir contra las unidades antes de autorizar la
  construcción?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [CT05](blocks/CT05.md), [CT04](blocks/CT04.md),
  [`REV-2026-046`](2026-09-24-REV-2026-046-referencia-del-handoff-al-context-packet-sin-campo-en-ningun-contrato-s06-parte-de-adr-004-sin-acuse-de-s05-l66-y-packet-sucesor-inalcanzable-desde-references-inmutable.md),
  [`REV-2026-053`](2026-09-24-REV-2026-053-cierre-s06-omite-verificables-y-rtk-context-mode-no-bloqueo-para-s07-sin-enumerar-auditoria-frente-a-adr-003-solo-en-el-tracker-y-adr-005-en-futuro.md),
  [`REV-2026-074`](2026-09-25-REV-2026-074-decision-de-adr-003-omite-consultas-y-autoridad-humana-de-s04-y-deja-solo-build-aceptacion-y-deploy-como-intervencion.md),
  [`REV-2026-075`](2026-09-25-REV-2026-075-decision-de-adr-003-resume-s04-sin-carga-de-prueba-del-verifier-condiciones-de-runbook-estado-ante-duda-ni-tipo-de-consulta.md),
  [`REV-2026-079`](2026-09-25-REV-2026-079-decision-de-adr-004-resume-s05-sin-regla-de-caducidad-cancelacion-del-emisor-atribucion-de-la-aceptacion-ni-lo-que-crece-tras-emitir.md),
  [`REV-2026-083`](2026-09-25-REV-2026-083-decision-de-adr-005-resume-s06-sin-regla-capa-estado-limites-del-adapter-ni-exclusividad-de-carga-y-s08-la-cita-como-fuente.md).

## Preguntas pendientes

- ¿S11 l. 223-225 y S12 repiten el patrón de los hechos 3 y 4? Pista para
  `CT07`.

## Cobertura y límites

- Leídos: los localizadores de «Fuente primaria». Sin fuentes externas.
- No examinados: S07-S12 fuera de las líneas citadas; ADR-006 a ADR-010.
