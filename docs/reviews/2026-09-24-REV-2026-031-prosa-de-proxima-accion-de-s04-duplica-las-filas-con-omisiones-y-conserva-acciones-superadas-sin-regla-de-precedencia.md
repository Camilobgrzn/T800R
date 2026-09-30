# Anotación de revisión

- ID de anotación: `REV-2026-031`
- Unidad y ubicación: `S04` — [session-04-operating-cycle.md, «Próxima acción»](../definition/session-04-operating-cycle.md#próxima-acción)
  (encabezado l. 139; prosa l. 141-142, 150-153, 155-193 y 194-222), frente a
  la tabla de conclusiones de [«Acuerdos y orientación de la sesión»](../definition/session-04-operating-cycle.md#acuerdos-y-orientación-de-la-sesión)
  (l. 76, 79, 81-88, 90-110, 115-116), a la cabecera de la unidad (l. 3-4), a
  la segunda «Próxima acción» de [«Detalles diferidos después del cierre»](../definition/session-04-operating-cycle.md#detalles-diferidos-después-del-cierre)
  (l. 255) y al [«Criterio de salida»](../definition/session-04-operating-cycle.md#criterio-de-salida)
  y la [«Comprobación de cierre»](../definition/session-04-operating-cycle.md#s04-cierre)
  (l. 309-313, 319-323). Bloque `B016`.
- Revisión examinada: 2026-09-24; repositorio sin commits, huella no
  disponible. Citas distintivas: «Auditar integralmente el criterio de salida
  de la sesión 4 sin declararla completada hasta comprobar cada obligación»
  (l. 141-142); «corresponde comprobar el criterio de salida e identificar
  cualquier obligación operativa aún faltante» (l. 192-193); «El criterio de
  salida quedó cumplido tras acordar las transiciones de etapa y el contenido
  mínimo de consultas y esperas» (l. 220-222); «el despliegue sigue la política
  de autorización por entorno y mantiene comprobaciones posteriores»
  (l. 177-178); «La entrada a `design` no tiene un gate humano separado cuando
  los acuerdos funcionales de `plan` están confirmados» (l. 219-220);
  «Próxima acción: iniciar la sesión 5 y definir el contrato `handoff/v1`»
  (l. 255).
- Tipo: `incompleto`
- Gravedad: `baja`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos; `media` sobre el impacto (l. 255,
  270-306 y 319-327 pertenecen a `B017`/`B018` y sólo se leyeron como
  frontera)
- Impacto: qué texto es el acuerdo cuando la prosa de l. 150-222 y la tabla
  l. 69-116 dicen cosas de distinta fuerza (autorización humana explícita para
  producción y acciones irreversibles; obligación de consultar si falta un
  acuerdo funcional); si el cierre de S04 es verificable frente al estándar
  que la propia sección fija (l. 141-142: «comprobar cada obligación») o sólo
  frente a la declaración de l. 220-222; y qué «próxima acción» encuentra un
  lector de la unidad (dos, ninguna vigente). No cambia el contenido de las
  filas aceptadas.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (duplicación con omisiones y contradicción
  cronológica exclusivamente internas; no se invoca ninguna fuente externa)
- Fuente primaria: `docs/definition/session-04-operating-cycle.md` l. 3-4,
  76, 79, 81-88, 89-110, 115-116, 139-142, 150-222, 255, 309-313 y 319-323;
  `AGENTS.md` l. 16 y 73-77; `docs/definition-tracker.md` l. 7
- Sección o localizador: «Próxima acción», «Acuerdos y orientación de la
  sesión», «Detalles diferidos después del cierre», «Criterio de salida» y
  «Comprobación de cierre» (S04)
- Fecha de consulta/publicación: consulta 2026-09-24; S04 declara criterio
  comprobado el 2026-09-15 (l. 3-4)
- Hecho observado:
  1. La unidad está `completed` (l. 3-4). Bajo el encabezado «Próxima acción»
     (l. 139), l. 141-142 ordena en futuro «Auditar integralmente el criterio
     de salida de la sesión 4 sin declararla completada hasta comprobar cada
     obligación»; l. 190-193 vuelve a decir que «corresponde comprobar el
     criterio de salida e identificar cualquier obligación operativa aún
     faltante»; l. 220-222, en la misma sección, declara que «El criterio de
     salida quedó cumplido tras acordar las transiciones de etapa y el
     contenido mínimo de consultas y esperas». La unidad contiene una segunda
     «Próxima acción» en l. 255 («iniciar la sesión 5»). El tracker de
     definición sitúa la sesión actual en la 12 (l. 7) y `AGENTS.md` l. 16 hace
     del tracker la fuente de la próxima acción, de modo que no hay conflicto
     de autoridad, pero ninguna de las dos «próximas acciones» de S04 está
     vigente y el encabezado no describe el contenido de la sección.
  2. l. 150-222 vuelve a enunciar, sin estado, veinte filas de la tabla:
     l. 150-153 ↔ l. 76; l. 155-167 ↔ l. 89-99; l. 167-175 ↔ l. 100-101
     (casi literal); l. 176-178 ↔ l. 86-87; l. 179 («Ownership y concurrencia
     están acordados») ↔ l. 108, sólo por referencia; l. 179-189 ↔ l. 109
     (literal, incluida la justificación); l. 189-190 ↔ l. 110, sólo por
     referencia; l. 194-203 ↔ l. 103-107; l. 203-214 ↔ l. 102 (literal);
     l. 214-219 ↔ l. 81-84; l. 219-220 ↔ l. 88. No repite l. 79 ni l. 85 (los
     supuestos de consulta), l. 89 (la sesión no tiene `stage`) ni l. 111-116.
  3. Las copias abreviadas dicen menos que las filas: (a) l. 177-178 («el
     despliegue sigue la política de autorización por entorno y mantiene
     comprobaciones posteriores») omite de l. 87 que «Producción, efectos
     externos o acciones irreversibles requieren autorización humana
     explícita, presentando revisión, destino, comprobaciones y recuperación»
     y que «La aceptación funcional previa no autoriza por sí sola esos
     despliegues»; (b) l. 219-220 omite de l. 88 «si falta un acuerdo
     funcional, debe consultar»; (c) l. 194-195 («`obligatorio` ante riesgos
     altos o aceptación semántica no cubierta determinísticamente») sustituye
     la lista cerrada de l. 104 por «riesgos altos»; (d) l. 165-166 omite de
     l. 98 «vuelve a la etapa y estado apropiados»; (e) l. 155-158 presenta la
     separación `stage`/`status` «para ciclo, incrementos y tareas» sin la
     sesión (l. 89, 115-116), aunque l. 190-191 afirma «aceptar el lifecycle de
     sesión».
  4. Las copias literales repiten sin cerrar las lagunas ya registradas:
     l. 161-162 repite l. 95 (entrada a `waiting`/`blocked` sólo desde
     `in_progress`) y l. 185 repite l. 109 (duda no resoluble en
     `waiting`/`blocked` antes de tomar trabajo), l. 167 repite l. 99, l. 171
     repite «catálogo aceptado» de l. 101 sin definirlo (`REV-2026-027`);
     l. 187 repite «El umbral temporal concreto podrá configurarse después» de
     l. 109 sin estado ni destino (`REV-2026-028`). `draft` (l. 113) no aparece
     en la prosa.
  5. Ninguna frase de S04 dice qué prevalece entre la tabla y la prosa cuando
     difieren; la prosa se presenta como «La conclusión aceptada …» (l. 155,
     194, 203), lo que sugiere recapitulación, pero (a)-(e) no son
     recapitulaciones fieles.
  6. l. 141-142 fija el estándar del cierre («comprobar cada obligación»);
     l. 220-222 lo declara cumplido «tras acordar» dos secciones (l. 270-293 y
     294-306) sin enumerar obligaciones comprobadas; el cierre (l. 322-323,
     `B018`) dice que «La auditoría final no encontró ambigüedades operativas»
     sin enumerarlas (patrón de `REV-2026-011`/`016`/`024`).
- Inferencia (si aplica): la sección es un registro cronológico de la sesión
  (próxima acción de entonces → distribución operativa → recapitulación de lo
  aceptado → declaración de cumplimiento) conservado en una unidad cerrada bajo
  un encabezado que ya no lo describe. La recapitulación funciona como segunda
  copia normativa, más débil en (a) y (b), sin regla de precedencia; un lector
  que use esta sección para saber cuándo hace falta autorización humana en
  `deploy` o si T800R debe consultar cuando falta un acuerdo funcional obtiene
  una regla distinta de la de la tabla.

## Observación y propuesta

- Observación: no hay contradicción de fondo: la tabla es la fuente evidente y
  la prosa la resume. El defecto es que la unidad conserva dos enunciados de
  las mismas reglas con distinta fuerza y dos «próximas acciones» ya superadas,
  y que la sección que exige «comprobar cada obligación» no deja rastro de esa
  comprobación. Completa desde la prosa lo que `REV-2026-027`/`REV-2026-028`
  registraron desde la tabla (las copias repiten las lagunas) y prepara la
  comprobación del cierre que corresponde a `B018`.
- Propuesta concreta: que la persona (1) declare si l. 150-222 es registro
  histórico (marcarlo así o remitir a la tabla como única fuente de las reglas)
  o texto normativo (y entonces completar (a) y (b) o declarar que la tabla
  prevalece); (2) retire o renombre «Próxima acción» (l. 139) y l. 255 tras el
  cierre, o les añada una nota de fecha; (3) haga constar, en esta sección o en
  el cierre, las obligaciones comprobadas que l. 141-142 exigía. No editar S04
  sin esa decisión.
- Contraargumento o coste/riesgo: «La conclusión aceptada …» (l. 155, 194,
  203) señala que la prosa recapitula y no decide; las omisiones (a)-(e) son
  abreviaturas, no negaciones, y l. 207-208 («destino autorizado») y l. 214-217
  (autonomía «dentro de los acuerdos del incremento») remiten implícitamente a
  la tabla; `AGENTS.md` l. 16 evita que la «próxima acción» de S04 gobierne a
  un agente. El coste de la propuesta es editorial en una unidad cerrada; sólo
  la persona puede hacerlo. La gravedad es `baja` porque la tabla existe,
  tiene estado y es completa.

## Análisis adicional

- Evidencia interna: hechos 1-6. l. 177-178 frente a l. 87 y l. 219-220
  frente a l. 88 (omisiones que debilitan); l. 141-142 y 190-193 frente a
  l. 220-222 y 255 (cronología); l. 161-162, 167, 171, 185, 187 frente a
  `REV-2026-027` y `REV-2026-028` (lagunas repetidas). Relación con
  [`REV-2026-027`](2026-09-24-REV-2026-027-enumeracion-de-estados-y-transiciones-de-s04-no-cerrada-draft-y-waiting-blocked-desde-ready.md)
  (la prosa repite la máquina de estados con la misma enumeración; su hecho 9
  queda comprobado aquí),
  [`REV-2026-028`](2026-09-24-REV-2026-028-aplazamientos-embebidos-en-filas-accepted-de-s04-sin-fila-deferred-ni-destino-en-la-unidad.md)
  (l. 187 repite el umbral temporal sin destino),
  [`REV-2026-024`](2026-09-24-REV-2026-024-cierre-s03-reformula-okf-afirma-no-bloqueo-y-no-declara-cobertura-del-area-3.md)
  y [`REV-2026-026`](2026-09-24-REV-2026-026-objetivo-s04-incorporar-repositorio-y-bootstrap-del-indice-sin-decision-ni-aplazamiento.md)
  (verificabilidad del cierre de S04) y
  [`REV-2026-029`](2026-09-24-REV-2026-029-ciclo-colaborativo-de-s04-sin-mapa-a-etapas-y-gates-confirmar-la-definicion-frente-a-autorizacion-por-incremento.md)
  (l. 150-153 ata a `plan` sólo el cambio de interfaz o criterio de
  aceptación, no la reapertura de l. 135-137 ni los demás supuestos de l. 85).
- Contraevidencia y límites: no se analizaron l. 270-306 (`B017`), donde
  l. 220-222 dice que se acordó lo último que faltaba, ni el cierre l. 319-327
  (`B018`), que puede enumerar la auditoría con otras palabras; ADR-003 punto 4
  (l. 57-61) se leyó sólo para comprobar que tampoco fija precedencia
  tabla/prosa. Si la persona confirma que la tabla prevalece y que la sección
  es crónica, queda sólo la nota de vigencia y el rastro de la auditoría.
- Pregunta para resolver: ¿prevalece la tabla l. 69-116 sobre la prosa
  l. 150-222 cuando difieren (l. 177-178 frente a l. 87; l. 219-220 frente a
  l. 88), y debe «Próxima acción» conservarse como registro cronológico o
  retirarse tras el cierre, dejando constancia de las obligaciones que
  l. 141-142 exigía comprobar?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B016](blocks/B016.md), `REV-2026-024`,
  `REV-2026-026`, `REV-2026-027`, `REV-2026-028`, `REV-2026-029`, cruces
  `CT05` y `CT07`

## Preguntas pendientes

Ver el checkpoint [B016](blocks/B016.md).

## Cobertura y límites

Ver el checkpoint [B016](blocks/B016.md). Sin fuentes externas necesarias para
este hallazgo; el contraste es interno.
