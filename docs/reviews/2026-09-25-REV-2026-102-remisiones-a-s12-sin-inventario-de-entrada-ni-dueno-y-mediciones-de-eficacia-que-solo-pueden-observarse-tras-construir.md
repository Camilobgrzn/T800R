# Anotación de revisión

- ID de anotación: `REV-2026-102`
- Unidad y ubicación: `S12` — [Preguntas de la sesión](../definition/session-12-validation-convergence.md#preguntas-de-la-sesión)
  (l. 21-41), [Criterio de salida](../definition/session-12-validation-convergence.md#criterio-de-salida)
  (l. 45-50) y [Evidencia y resultados](../definition/session-12-validation-convergence.md#evidencia-y-resultados)
  (l. 63-68). Se contrastan con las remisiones a la sesión 12 del índice
  rector, S03, S04, S07-S11, ADR-001 a ADR-003, ADR-005 a ADR-010 y el tracker de
  definición, y con el [criterio de cierre](../product-definition.md#criterio-de-cierre-de-la-definición)
  (l. 162) y la regla de aplazamiento del índice (l. 128). Cruce `CT07`.
  Citas distintivas: «las incógnitas restantes tengan disposición y no
  bloqueen implementación» (S12 l. 47-48); «Una decisión aplazada incluirá un
  punto concreto de resolución» (índice l. 128); «su eficacia a S12» (S10
  l. 110, 168); «si S12 demuestra que el runtime es una barrera real» (S11
  l. 131).
- Revisión examinada: 2026-09-25; S12 `in_progress` (iniciada el 2026-09-24);
  repositorio sin commits, huella no disponible.
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos; `media` sobre el impacto (S12 puede
  construir el inventario antes de cerrar)
- Impacto: la verificabilidad de la condición «las incógnitas restantes no
  bloqueen la implementación» (índice l. 162; S12 l. 47-48) y del veredicto de
  autorización de S12 (l. 41, 49-50). Sin un inventario de lo que S12 recibe,
  la comprobación sería una declaración del mismo tipo que los cierres de
  S01-S11. Además, varias remisiones piden a S12 resultados que S12 sitúa
  después de construir, sin otro receptor.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión exclusivamente interna, visible sólo
  al agregar las remisiones de varias unidades y ADR)
- Fuente primaria: ubicaciones internas enumeradas en «Hecho observado»; la
  búsqueda de «sesión 12|S12|11 y 12|11–12|4 y 12» en `docs/` sin `reviews/`
  (2026-09-25) y la búsqueda en S12 de
  «skill|regres|eval|activaci|modelo de información|baseline|Hindsight|RTK|OKF|handoff|contexto»,
  que sólo coincide en l. 27 («baseline» del piloto).
- Sección o localizador: ver «Hecho observado».
- Fecha de consulta/publicación: consulta 2026-09-25.
- Hecho observado:
  1. **Hay muchas remisiones a S12, en muchos documentos.** Las remisiones con
     destino S12 (o «11 y 12») aparecen en:
     - índice l. 124 y 134-135;
     - S03 l. 223, 224 y 240;
     - S07 l. 56 y 62;
     - S08 l. 49, 117, 387-388, 406 y 411;
     - S09 l. 47;
     - S10 l. 56, 110, 112, 168 y 173;
     - S11 l. 91, 97, 119, 124, 127, 131, 160, 189-191 y 228-230;
     - ADR-001 l. 121; ADR-002 l. 147; ADR-003 l. 117 y 121; ADR-005
       l. 124-125; ADR-006 l. 99; ADR-007 l. 116-117 y 124; ADR-008 l. 71;
       ADR-009 l. 87-88; ADR-010 l. 162, 174, 187 y 192-196;
     - tracker de definición l. 68, 191, 193, 233, 307, 394, 406, 436 y 448.
     Son más de 45 localizaciones en 17 documentos.
  2. **S12 no tiene inventario de entrada.** Sus diez preguntas (l. 21-41) son
     genéricas: piloto, corpus, métricas, tuplas, experimentos, calidad y
     costes, riesgos, backlog y autorización. No nombra:
     - la evaluación de skills y del modelo de información (S03 l. 240;
       ADR-002 l. 147);
     - los evals regresivos del harness (S03 l. 224);
     - Hindsight, RTK ni Context Mode (S07 l. 56; S08 l. 378-388; S11 l. 91;
       ADR-005 l. 124-125; ADR-006 l. 99);
     - los doce escenarios de validación de S10 (l. 120-148);
     - los binarios autónomos (S11 l. 131).
     Ningún documento enumera «las incógnitas restantes» cuya disposición
     exigen S12 l. 47-48 y el índice l. 162. Hay listas parciales y
     divergentes: índice l. 137-144 (`REV-2026-099`), ADR-010 l. 190-196, S11
     l. 198-206 y tracker de definición l. 15-23.
  3. **Varias remisiones sólo pueden cumplirse después de construir, y no las
     cubren `REV-2026-099` ni `REV-2026-100`.** S12 l. 65-68 establece que la
     evidencia preconstrucción «No otorgará estado `compatible` a ningún
     adapter ni sustituirá resultados observados». Sin embargo:
     - S10 l. 110, 112, 168 y 173 difieren a S12 la «eficacia» de los
       mecanismos de arranque, worktrees, observabilidad y herramientas
       end-to-end, y la «eficacia en T800R y el repositorio piloto»;
     - S11 l. 131 condiciona los binarios autónomos a que «S12 demuestra que el
       runtime es una barrera real»;
     - ADR-001 l. 121 envía a «sesiones 11 y 12» «cómo se demostrará su
       efectividad»;
     - S04 l. 248 difiere «Medir consumo y calidad de la distribución durante
       trabajo real» sin destino alguno.
     Todas exigen un producto construido y en uso. S12 l. 34-35 (pregunta 6)
     prevé clasificar qué experimentos «pertenecen a la fase de
     construcción», pero ninguna remisión designa ese destino y no existe un
     receptor posterior a S12. `AGENTS.md` l. 79-84 sólo dice que se
     actualizará el flujo al cambiar de fase.
  4. **Hay remisiones a sesiones ya cerradas que no se recibieron.** Tampoco
     tienen dueño antes de S12, según los checkpoints y anotaciones:
     - política de caducidad, actor del rechazo y cierre coordinado de
       `handoff/v1` (`REV-2026-081`);
     - sintaxis y evaluador de las condiciones de carga (`REV-2026-084`);
     - runbooks de `Maintain` (`REV-2026-076` hecho 2);
     - campos del registro de fuentes (`REV-2026-056` hecho 3);
     - derivación de la frescura y curator predeterminado (`REV-2026-059`,
       `060`);
     - operador de la migración de OKF (`REV-2026-087`; `CT06` contraste 8);
     - semántica de los aliases de entrada (`REV-2026-093`).
     S12 no nombra ninguno.
- Inferencia (si aplica): la comprobación de S12 l. 47-48 no es verificable tal
  como está escrita, porque el conjunto de incógnitas no está enumerado. Las
  remisiones de tipo «eficacia» o «demuestra» no pueden recibir en S12 más
  disposición que un aplazamiento a la construcción, que ninguna de ellas
  prevé. Si S12 cierra sin distinguirlas, la construcción heredará como
  implícitas mediciones y decisiones sin dueño ni gate.

## Observación y propuesta

- Observación: S12 es el receptor terminal de la definición, pero no tiene
  inventario de entrada. El criterio global de cierre presupone una
  enumeración de incógnitas que nadie mantiene. La frontera que S12 l. 56-57 y
  65-68 traza entre evidencia preconstrucción y resultados observados no se ha
  propagado a las remisiones que le llegan.
- Propuesta concreta (decisión humana; no se edita el canon):
  1. Que S12 registre una tabla de entrada con estas columnas: remisión,
     origen (documento y línea), pregunta de S12 que la recibe, momento
     (preconstrucción, gate de construcción o release, o backlog posterior),
     bloquea sí/no y evidencia que la resolverá. El inventario de
     [CT07](blocks/CT07.md) puede servir de semilla no canónica.
  2. Para las remisiones de «eficacia», «efectividad» y «demuestra» (S10, S11
     l. 131, ADR-001 l. 121, S04 l. 248), que S12 especifique el experimento y
     su umbral y declare explícitamente que su ejecución corresponde a la
     construcción, con un receptor nombrado en la fase siguiente.
  3. Para las remisiones sin dueño del hecho 4, asignar dueño o declararlas no
     bloqueantes con su punto de resolución, como exige el índice l. 128.
- Contraargumento o coste/riesgo:
  - Las preguntas 6 y 8 de S12 (l. 34-35 y 38-39) son receptores genéricos
    pensados precisamente para esa clasificación.
  - S12 está `in_progress` y su criterio ya exige disposición.
  - Una tabla de más de 45 filas añade trabajo editorial y puede duplicar el
    inventario de esta revisión.
  - La lectura más favorable considera suficiente que S12 recorra las
    remisiones al cerrar. El riesgo de esa lectura es que el patrón de cierres
    de S01-S11 (declaraciones sin enumeración: `REV-2026-011`, `016`, `024`,
    `034`, `044`, `053`, `062`, extendido por la pasada 2 de `B003`) se repita
    en la comprobación global.

## Análisis adicional

- Evidencia interna: [S12](../definition/session-12-validation-convergence.md);
  [índice, criterio de cierre](../product-definition.md#criterio-de-cierre-de-la-definición);
  [S10](../definition/session-10-product-experience.md);
  [S11](../definition/session-11-mvp-architecture.md);
  [S04](../definition/session-04-operating-cycle.md);
  [ADR-001](../adr/ADR-001-autonomia-y-responsabilidades.md);
  [tracker de definición](../definition-tracker.md).
- Relación con anotaciones existentes, sin duplicarlas:
  - `REV-2026-099` trata las tres preguntas del índice y la comparación con el
    baseline de S11 l. 91;
  - `REV-2026-100` trata la conformidad asignada a S12;
  - `REV-2026-045` hecho 4 y la pista (e) de `B043` tratan RTK y Context Mode;
  - `REV-2026-006` trata el criterio sin verificador;
  - esta anotación trata la ausencia de agregador y las remisiones de
    eficacia no cubiertas por aquéllas.
- Contraevidencia y límites:
  - S08-S11 y ADR-007 a ADR-010 están fuera del inventario (`REV-2026-101`) y
    se citan sólo en las líneas de la búsqueda.
  - La lista del hecho 4 procede de checkpoints y anotaciones anteriores y no
    se ha recomprobado aquí línea a línea.
  - El recuento de localizaciones es aproximado: algunas líneas repiten la
    misma remisión.
- Pregunta para resolver: ¿registrará S12 un inventario de entrada con momento
  y bloqueo por remisión? ¿Qué receptor recibe, tras autorizar la
  construcción, las mediciones de eficacia que hoy apuntan a S12?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [CT07](blocks/CT07.md),
  [`REV-2026-099`](2026-09-25-REV-2026-099-preguntas-abiertas-del-indice-sin-disposicion-y-dos-sobre-resultados-que-s12-situa-despues-de-autorizar-la-construccion.md),
  [`REV-2026-100`](2026-09-25-REV-2026-100-s08-a-s11-asignan-a-s12-ejecutar-y-certificar-conformidad-tras-autorizar-la-construccion-que-s12-convierte-en-gate-posterior-sin-marca.md),
  [`REV-2026-006`](2026-09-21-REV-2026-006-criterio-de-cierre-sin-autorizacion-ni-verificador.md)

## Preguntas pendientes

- ¿Los doce escenarios de S10 (l. 120-148) forman ya parte del corpus de S12
  (pregunta 3, «adopción») o necesitan una remisión explícita?

## Cobertura y límites

- Leído: S12 completa; S03 l. 208-262; S04 l. 244-255; S08 l. 374-413; S09
  l. 98-123; S10 l. 98-178; S11 l. 86-131 y 150-235; «Puntos abiertos» o
  «Detalles diferidos» de ADR-001 a ADR-010; índice l. 94-168; tracker de
  definición l. 12-41 y 312-451.
- Fuentes externas: no aplican.
- No examinado: S08-S11 y ADR-007 a ADR-010 fuera de esas líneas; los
  documentos `docs/research-*.md` salvo la coincidencia de búsqueda de
  `research-agent-skills.md` l. 89, que es insumo y no canon.
