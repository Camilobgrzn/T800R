# Tracker de revisión adversarial

Este tracker controla una revisión adversarial de **todo lo ya decidido** sin
alterar el canon. El inventario, localizadores y cola transversal consultable
están en [blocks.md](blocks.md); este archivo no duplica los textos revisados.

Los rangos son localizadores de base. Antes de retomar un bloque, comparar su
huella y rangos con la fuente: si cambió, recalcular el localizador y marcar el
análisis como `stale`, sin perder el historial de revisión previa. `reviewed`
significa que el análisis adversarial terminó, no que una persona aprobó ni que
se modificó un acuerdo. La discusión humana se controla independientemente.

## Segunda pasada total con Astra

La persona autorizó el 2026-09-25 una segunda pasada total e independiente sobre
S01-S12, ADR-001-010, índice, tracker y cruces. El análisis coordinado está
registrado en [second-pass-astra-2026-09-25.md](second-pass-astra-2026-09-25.md):
produjo `REV-2026-104` a `REV-2026-111`, todos `propuesto`, y deduplicó sus demás
resultados contra `REV-2026-001` a `REV-2026-103`.

- Análisis de la segunda pasada: `reviewed` sobre la base local del 2026-09-25.
- Discusión humana: en curso desde el 2026-09-29. `REV-2026-110` `accepted`
  (registro en S12 «Decisiones»; enmiendas en S11 l. 133-137 y ADR-010 punto 14:
  el MVP usa el perfil de aprobación `local` y SSHSIG/FIDO pasa a perfil `signed`).
  `REV-2026-105` `accepted` el 2026-09-30 (predicado de elegibilidad del verifier
  en S12; precisiones en S04 l. 107 y ADR-003 punto 9). Pendientes: `104`,
  `106`-`109` y `111`.
- Efecto sobre el inventario: S11 y ADR-010 cambiaron el 2026-09-29 sin bloque
  que los cubra (`REV-2026-101`). El 2026-09-30 cambiaron S04 l. 107 (`B014`,
  rango 69-117: nota añadida en la misma fila, sin desplazamiento de líneas) y
  ADR-003 punto 9 (`B035`; tres líneas añadidas,
  desplazan lo posterior). Ambos bloques quedan `stale` en la letra: la huella
  cambió, pero el contenido revisado no se alteró; recomprobar localizadores al
  retomar. `CT07` cita S11 l. 212-231, no las filas enmendadas.
- **Cierre en bloque (2026-09-30):** la persona decidió el «Perfil MVP mínimo»
  ([S12](../definition/session-12-validation-convergence.md#decisiones)). Todas
  las anotaciones que seguían `propuesto` (`REV-2026-001`-`104`, `106`-`109`,
  `111`) pasaron a `deferred` con destino
  [backlog-ideas.md](../backlog-ideas.md); `105` y `110` siguen `accepted`. La
  columna «Discusión» de los 45 bloques y 7 cruces pasa a `deferred`: no hubo
  discusión individual; se retomará por área cuando salga del backlog.
- Próxima acción: ninguna en este tracker. La revisión adversarial queda cerrada
  para la fase de definición; S12 continúa con el piloto y la especificación del
  MVP v0.

| ID | Análisis | Discusión | Resultado |
| --- | --- | --- | --- |
| B001 | `reviewed` | `deferred` | [B001](blocks/B001.md): pasada 2 (2026-09-25; condición del aplazamiento cumplida: S08 `completed`, igual que S09-S11; S12 sigue `in_progress` y podría volver a cambiar el índice). Rango recalculado a 1-93 (índice de 204 líneas; filas S08-S12 en l. 88-92) y localizadores de `B002` (94-145) y `B003` (146-204) corregidos en [blocks.md](blocks.md) sin analizarlos. Tabla de unidades contrastada con S08-S12: enlaces y anclas `s08`-`s11-cierre` resuelven, estados coherentes con `definition/README.md` y las cabeceras. `REV-2026-001`, `REV-2026-002` y `REV-2026-003` siguen vigentes y ampliadas (notas fechadas en cada anotación: diez ADRs sin regla de precedencia ni registro en el índice; estado de avance en cuatro registros); ninguna cerrada; sin hallazgos nuevos; tres preguntas pendientes. Texto de la pasada anterior: Base cambiada tras la pasada 1: fila nueva de S08 en la línea 88; rango recalculado a 1-89 (detalle en [B003](blocks/B003.md)) |
| B002 | `reviewed` | `deferred` | [B002](blocks/B002.md): pasada 2 (2026-09-25; S12 sigue `in_progress` y podría volver a cambiar el índice). Rango 94-145 comprobado sin corregir `blocks.md` (encabezados en l. 94, 96, 137 y 146; citas de la pasada 1 desplazadas +5; párrafo de estado l. 132-135 reescrito; lista de preguntas sustituida, de diez a tres). La pregunta del orchestrator se resolvió en S11 l. 103-105 (`accepted` software determinista más rol `planner`) y se retiró del índice sin disposición; no consta en ADR-010. Las diez preguntas antiguas tienen disposición en S06 y S08-S11 (mapa en la nota de `REV-2026-004`). `REV-2026-004` atenuada en parte (residuo: retirada sin rastro y lista nueva sin destino); `REV-2026-005` vigente y ampliada (S08, S09 y S11 sin registro por práctica; el estado l. 132-134 atribuye a S11 una incorporación sin rastro; S10 registra su área y S12 recibe la cobertura final). Notas fechadas en ambas; ninguna cerrada. Nueva: `REV-2026-099` (preguntas abiertas sin disposición; dos piden resultados que S12 l. 56-57 y 66-68 sitúa después de autorizar la construcción). Tres preguntas pendientes. Sin fuentes externas nuevas. Texto de la pasada anterior: `REV-2026-004`, `REV-2026-005`. Rango desplazado +1 a 90-149; citas distintivas comprobadas sin cambios (detalle en [B003](blocks/B003.md)). Base cambiada después (detectado por `B014`, 2026-09-24): la lista «Preguntas de producto aún abiertas» fue sustituida (hoy l. 137-144, tres preguntas; la cita distintiva de `REV-2026-004` «¿El orchestrator será software…?» ya no existe) y los encabezados se desplazaron («Preguntas pendientes globales» en l. 94, «Criterio de cierre» en l. 146). Recalcular localizador y añadir pasada nueva sin sobrescribir |
| B003 | `reviewed` | `deferred` | [B003](blocks/B003.md): pasada 2 (2026-09-25; S12 sigue `in_progress` y podría volver a cambiar el índice). Rango 146-204 comprobado sin corregir `blocks.md` (encabezados en l. 146 y 165, fin del archivo en l. 204; citas de la pasada 1 desplazadas −4; el criterio pasa de once a doce condiciones con l. 155-156, adopción, actualización y retiro; enlaces de compatibilidad para S08-S11). Once anclas `s01`-`s11-cierre` resuelven; sin enlaces entrantes a las anclas heredadas. `REV-2026-007` cerrada en su núcleo por cambio del canon (l. 155-156; residuo menor trasladado a `006`/`CT07`; estado formal `propuesto`); `REV-2026-006` vigente y atenuada en parte (S12 l. 41 y 49-50, S11 l. 50 y el tracker de definición l. 22-23 fijan dónde se registra la autorización; residuo: índice sin aprobación, sin actor, sin evidencia por condición y dos criterios solapados). Notas fechadas en ambas. Patrón de cierre de S01-S07 confirmado en S08-S11. Nueva: `REV-2026-100` (S08-S11, ADR-007/008/010 y el tracker de definición l. 406/448 asignan a S12 ejecutar o certificar conformidad; S12 l. 56-57 la convierte en gate posterior sin marca; l. 159 no distingue entre pruebas especificadas y superadas). Tres preguntas pendientes. Sin fuentes externas. Texto de la pasada anterior: `REV-2026-006`, `REV-2026-007`. Localizador desplazado (detectado por `B014`, 2026-09-24): «Criterio de cierre de la definición» está en l. 146 y «Enlaces de compatibilidad» en l. 165, no en 150-192; contenido no recomprobado. Recalcular localizador y comprobar citas al retomar |
| B004 | `reviewed` | `deferred` | [B004](blocks/B004.md): `REV-2026-008`, `REV-2026-009` y cuatro preguntas pendientes. Rango 1-90 sin desplazamiento |
| B005 | `reviewed` | `deferred` | [B005](blocks/B005.md): `REV-2026-010`, respuestas a las preguntas 3 y 4 de `B004` y cinco preguntas pendientes. Rango 91-171 sin desplazamiento |
| B006 | `reviewed` | `deferred` | [B006](blocks/B006.md): `REV-2026-011`, `REV-2026-012`, respuestas a las pistas heredadas (a)-(c) de `B004`/`B005` y cuatro preguntas pendientes. Rango 172-185 sin desplazamiento |
| B007 | `reviewed` | `deferred` | [B007](blocks/B007.md): `REV-2026-013`, `REV-2026-014` y seis preguntas pendientes. Rango 1-99 sin desplazamiento; sin enlace a ADR dentro del bloque (`REV-2026-001` se comprueba en `B008`) |
| B008 | `reviewed` | `deferred` | [B008](blocks/B008.md): `REV-2026-015`, `REV-2026-016` y cuatro preguntas pendientes. Rango 100-126 sin desplazamiento; enlace a ADR-001 (l. 122) resuelve; `REV-2026-001` y `REV-2026-011` enlazadas, sin duplicar |
| B009 | `reviewed` | `deferred` | [B009](blocks/B009.md): `REV-2026-017`, `REV-2026-018` y seis preguntas pendientes. Rango 1-79 sin desplazamiento; el encabezado límite cae en la l. 81 (l. 80 en blanco). `REV-2026-001` y `REV-2026-015` enlazadas, sin duplicar; sin fuentes externas en el rango |
| B010 | `reviewed` | `deferred` | [B010](blocks/B010.md): `REV-2026-019`, `REV-2026-020` y siete preguntas pendientes. Localizador corregido en [blocks.md](blocks.md): `B009` 1-80 y `B010` 81-177 (l. 80 en blanco, encabezado en l. 81, fin en l. 177; contenido sin desplazamiento). `REV-2026-015`, `REV-2026-017` y `REV-2026-018` enlazadas, sin duplicar; sin fuentes externas usadas como evidencia en el rango |
| B011 | `reviewed` | `deferred` | [B011](blocks/B011.md): `REV-2026-021`, `REV-2026-022`, `REV-2026-023` y siete preguntas pendientes. Rango 178-240 sin desplazamiento (encabezado en l. 178, última fila en l. 240; `blocks.md` sin corregir). Cinco fuentes externas comprobadas por pregunta concreta; `REV-2026-005`, `REV-2026-015`, `REV-2026-017`-`REV-2026-020` enlazadas, sin duplicar |
| B012 | `reviewed` | `deferred` | [B012](blocks/B012.md): `REV-2026-024`, `REV-2026-025` y siete preguntas pendientes. Localizador corregido en [blocks.md](blocks.md): `B011` 178-241 y `B012` 242-262 (l. 241 en blanco, ancla `s03-cierre` en l. 242, encabezado en l. 244, fin del archivo en l. 262; contenido sin desplazamiento). Enlace a ADR-002 (l. 259) resuelve; sin fuentes externas necesarias; `REV-2026-001`, `REV-2026-005`, `REV-2026-011`, `REV-2026-015`-`REV-2026-023` enlazadas, sin duplicar |
| B013 | `reviewed` | `deferred` | [B013](blocks/B013.md): `REV-2026-026`, respuestas (a)-(g) a las pistas heredadas y siete preguntas pendientes. Localizador corregido en [blocks.md](blocks.md): `B013` 1-68 y `B014` 69-117 (el encabezado «Acuerdos y orientación de la sesión» está en l. 45, dentro del bloque; l. 68 en blanco; tabla en l. 69-116; contenido sin desplazamiento). Enlace a ADR-003 (l. 4) y a las cuatro investigaciones resuelven; dos fuentes externas comprobadas por pregunta concreta (ambas confirman); `REV-2026-005`, `REV-2026-013`, `REV-2026-015`, `REV-2026-017`, `REV-2026-020`-`REV-2026-024` enlazadas, sin duplicar |
| B014 | `reviewed` | `deferred` | [B014](blocks/B014.md): `REV-2026-027`, `REV-2026-028`, respuestas (a)-(q) a las pistas heredadas y ocho preguntas pendientes. Rango 69-117 comprobado sin desplazamiento (tabla en l. 69-116, 46 filas todas `accepted`; l. 117 en blanco; `blocks.md` sin corregir). Enlace a la investigación del orchestrator (l. 110) resuelve; sin fuentes externas nuevas (las dos referencias externas de la tabla ya fueron confirmadas por `B011`/`B013`); `REV-2026-004`, `REV-2026-013`-`REV-2026-015`, `REV-2026-017`-`REV-2026-020`, `REV-2026-022`, `REV-2026-023`, `REV-2026-025`, `REV-2026-026` enlazadas, sin duplicar. Detectó el cambio del índice que deja `stale` a `B002`/`B003` |
| B015 | `reviewed` | `deferred` | [B015](blocks/B015.md): `REV-2026-029`, respuestas (a)-(d) a las pistas heredadas y seis preguntas pendientes. Localizador corregido en [blocks.md](blocks.md): `B015` 118-138 y `B016` 139-223 («Ciclo colaborativo…» en l. 123, «Próxima acción» en l. 139, «Especificaciones evolutivas» en l. 224; l. 138 en blanco; contenido sin desplazamiento; la tabla l. 144-148 con la fila `rejected` l. 146 queda en `B016`). Sin enlaces ni fuentes externas en el rango; `REV-2026-013`, `REV-2026-014`, `REV-2026-017`-`REV-2026-020`, `REV-2026-026`-`REV-2026-028` enlazadas, sin duplicar |
| B016 | `reviewed` | `deferred` | [B016](blocks/B016.md): `REV-2026-030`, `REV-2026-031`, respuestas (a)-(l) a las pistas heredadas y seis preguntas pendientes. Rango 139-223 comprobado sin desplazamiento (encabezado en l. 139, tabla l. 144-148, prosa l. 150-222, l. 223 en blanco, sin subencabezados intermedios; `blocks.md` sin corregir). Sin enlaces en el rango; `opencode.jsonc` y `.opencode/agents/` (l. 148) coinciden con la fila; cuatro fuentes externas comprobadas por pregunta concreta sobre l. 148 (todas confirman); `REV-2026-013`, `REV-2026-014`, `REV-2026-017`-`REV-2026-020`, `REV-2026-024`, `REV-2026-026`-`REV-2026-029` enlazadas, sin duplicar |
| B017 | `reviewed` | `deferred` | [B017](blocks/B017.md): `REV-2026-032`, `REV-2026-033`, respuestas (a)-(i) a las pistas heredadas y seis preguntas pendientes. Rango 224-306 comprobado sin desplazamiento (encabezados en l. 224, 246, 257, 270 y 294; «Próxima acción» en l. 255; tablas l. 274-280 y 298-299; l. 306 en blanco; `blocks.md` sin corregir). Enlace a `research-evolutionary-specs.md` (l. 233) resuelve; dos fuentes externas por pregunta concreta (Spec Kit en el commit fijado confirma l. 233-235; OpenAI «Harness engineering» HTTP 403, no leída); `REV-2026-005`, `REV-2026-015`, `REV-2026-017`-`REV-2026-020`, `REV-2026-022`, `REV-2026-023`, `REV-2026-026`-`REV-2026-031` enlazadas, sin duplicar |
| B018 | `reviewed` | `deferred` | [B018](blocks/B018.md): `REV-2026-034`, `REV-2026-035`, respuestas (a)-(j) a las pistas heredadas, balance de S04 y seis preguntas pendientes. Rango 307-328 comprobado sin desplazamiento («Criterio de salida» l. 307, ancla `s04-cierre` l. 315, «Comprobación de cierre» l. 317, fin del archivo l. 328; `blocks.md` sin corregir). Enlace a ADR-003 (l. 327) resuelve y su «Decisión» coincide; los enlaces entrantes al ancla (índice l. 84 y 178, tracker l. 341, `definition/README.md` l. 13) resuelven; sin fuentes externas en el rango; `REV-2026-005`, `REV-2026-011`, `REV-2026-015`-`REV-2026-020`, `REV-2026-022`-`REV-2026-033` enlazadas, sin duplicar. Cierra S04 (`B013`-`B018`) |
| B019 | `reviewed` | `deferred` | [B019](blocks/B019.md): `REV-2026-036`, `REV-2026-037`, respuestas (a)-(j) a las pistas heredadas y seis preguntas pendientes. Localizador corregido en [blocks.md](blocks.md): `B019` 1-81 y `B020` 82-150 (encabezado «Decisiones» en l. 50 y tabla de decisiones l. 52-80 dentro del bloque, 27 filas: 25 `accepted`, 2 `rejected`, ninguna `deferred`; l. 81 en blanco; «Identidad de actores» en l. 82; contenido sin desplazamiento; `B021`/`B022` deberán pasar a 152-233 y 234-266 al abrirse). Sin enlaces, fuentes externas ni investigaciones en el rango (única URL de S05: l. 263 → ADR-004, resuelve); lo que l. 22 y l. 68 atribuyen a S04/ADR-003 existe (S04 l. 103-110, 298; ADR-004 l. 25); `REV-2026-005`, `REV-2026-013`, `REV-2026-014`, `REV-2026-017`-`REV-2026-021`, `REV-2026-023`, `REV-2026-025`-`REV-2026-028`, `REV-2026-033`-`REV-2026-035` enlazadas, sin duplicar. Abre S05 |
| B020 | `reviewed` | `deferred` | [B020](blocks/B020.md): `REV-2026-038`, `REV-2026-039`, `REV-2026-040`, `REV-2026-041`, respuestas (a)-(i) a las pistas heredadas y seis preguntas pendientes. Rango 82-150 comprobado sin desplazamiento («Identidad de actores» l. 82, «Envoltura común mínima» l. 91, «Payloads de ownership» l. 111, «Payloads de verificación y consulta» l. 118, «Capas de validación» l. 125, «Categorías de rechazo» l. 137; l. 151 en blanco). Localizadores corregidos en [blocks.md](blocks.md) por encargo de `B019`: `B021` 152-233 y `B022` 234-266 («Lifecycle inicial» en l. 152, «Criterio de salida» en l. 234, l. 151 y 233 en blanco, fin del archivo l. 266; contenido sin desplazamiento). Sin enlaces ni fuentes externas en el rango; ADR-004 «Decisión» puntos 3, 4 y 8 coinciden en sustancia sin ampliar; `REV-2026-005`, `REV-2026-013`, `REV-2026-014`, `REV-2026-017`-`REV-2026-020`, `REV-2026-027`, `REV-2026-028`, `REV-2026-033`, `REV-2026-035`-`REV-2026-037` enlazadas, sin duplicar |
| B021 | `reviewed` | `deferred` | [B021](blocks/B021.md): `REV-2026-042`, `REV-2026-043`, respuestas (a)-(i) a las pistas heredadas y seis preguntas pendientes. Rango 152-233 comprobado sin desplazamiento («Lifecycle inicial» l. 152, «Matriz de transiciones» l. 170, «Integridad, deduplicación y referencias» l. 181, «Separación y recuperación» l. 194, «Semántica inicial de los tipos» l. 210, «Resultado mínimo de `completed`» l. 219; l. 233 en blanco; `blocks.md` sin corregir). Sin enlaces ni fuentes externas en el rango; ADR-004 «Decisión» puntos 5-11 y «Consecuencias» coinciden en sustancia sin ampliar (l. 107-108 nombra al orchestrator para reconciliar antes de aplicar); `REV-2026-005`, `REV-2026-013`, `REV-2026-014`, `REV-2026-017`-`REV-2026-020`, `REV-2026-027`, `REV-2026-028`, `REV-2026-033`, `REV-2026-035`-`REV-2026-041` enlazadas, sin duplicar |
| B022 | `reviewed` | `deferred` | [B022](blocks/B022.md): `REV-2026-044`, respuestas (a)-(l) a las pistas heredadas, balance de S05 y seis preguntas pendientes. Rango 234-266 comprobado sin desplazamiento («Criterio de salida» l. 234, ancla `s05-cierre` l. 243, «Comprobación de cierre» l. 245, fin del archivo l. 266; `blocks.md` sin corregir). Enlace a ADR-004 (l. 263) resuelve, fecha coincide (2026-09-16) y «Puntos abiertos» es el único inventario de pendientes (S05 no tiene ninguno); los enlaces entrantes al ancla (índice l. 85 y 182, tracker l. 342, `definition/README.md` l. 14) resuelven; sin fuentes externas en el rango; `REV-2026-005`, `REV-2026-011`, `REV-2026-016`-`REV-2026-020`, `REV-2026-024`, `REV-2026-027`, `REV-2026-032`-`REV-2026-043` enlazadas, sin duplicar. Cierra S05 (`B019`-`B022`) |
| B023 | `reviewed` | `deferred` | [B023](blocks/B023.md): `REV-2026-045`, `REV-2026-046`, `REV-2026-047`, respuestas (a)-(g) a las pistas heredadas y seis preguntas pendientes. Rango 1-75 comprobado sin desplazamiento (encabezados en l. 1, 5, 12, 19, 31, 39 y 62; tabla de decisiones completa en l. 41-60, 18 filas: 12 `accepted`, 3 `rejected`, 3 `deferred`; «Capas de validación» l. 62-74; l. 75 en blanco; «Núcleo obligatorio» en l. 76; fronteras de `B024`-`B026` comprobadas por encabezados: l. 76, 121, 140, 180, 194, fin l. 206; `blocks.md` sin corregir). Enlaces a ADR-004 (l. 14) y ADR-003 (l. 47) resuelven y lo atribuido coincide; ADR-005 fechado 2026-09-18 como el cierre; sin investigaciones ni URL en el rango; dos fuentes externas por pregunta concreta (README de RTK y de Context Mode: confirman l. 53-54 con matices); `REV-2026-004`, `REV-2026-005`, `REV-2026-015`, `REV-2026-017`-`REV-2026-021`, `REV-2026-023`, `REV-2026-025`-`REV-2026-028`, `REV-2026-034`-`REV-2026-037`, `REV-2026-039`-`REV-2026-041`, `REV-2026-043`, `REV-2026-044` enlazadas, sin duplicar. Abre S06 |
| B024 | `reviewed` | `deferred` | [B024](blocks/B024.md): `REV-2026-048`, `REV-2026-049`, respuestas (a)-(n) a las pistas heredadas y seis preguntas pendientes. Rango 76-139 comprobado sin desplazamiento («Núcleo obligatorio del context packet» l. 76 con tabla de once campos l. 78-90, «Tipos mínimos de secciones bajo demanda» l. 96 con tabla l. 98-105, «Reglas de progressive disclosure» l. 110, «Presupuesto y prioridades» l. 121; l. 139 en blanco; «Reconciliación incremental» en l. 140; `blocks.md` sin corregir). Un enlace en el rango (l. 135 → ADR-004) resuelve y lo atribuido coincide en sustancia; sin URL, investigaciones ni fuentes externas; ADR-005 «Decisión» puntos 1-5 coinciden en sustancia (glosario l. 16 amplía `manifest` con «prioridad»; punto 3 más laxo; punto 5 omite la solicitud de l. 132-133); `REV-2026-005`, `REV-2026-017`-`REV-2026-020`, `REV-2026-028`, `REV-2026-036`-`REV-2026-041`, `REV-2026-043`, `REV-2026-045`-`REV-2026-047` enlazadas, sin duplicar |
| B025 | `reviewed` | `deferred` | [B025](blocks/B025.md): `REV-2026-050`, `REV-2026-051`, `REV-2026-052`, respuestas (a)-(r) a las pistas heredadas y seis preguntas pendientes. Rango 140-193 comprobado sin desplazamiento («Reconciliación incremental» l. 140, «Impacto de cambios» l. 154 con tabla l. 156-160, «Estados observables del context packet» l. 165 con tabla l. 167-172, «Condiciones de parada y evidencia» l. 180 con prosa l. 182-192; l. 193 en blanco; ancla `s06-cierre` en l. 194; `blocks.md` sin corregir). Sin enlaces, URL, investigaciones ni fuentes externas en el rango; ADR-005 «Decisión» puntos 6-11 coinciden en sustancia y reducen (punto 7 «exige un packet sucesor» frente a l. 158 «Se invalida»; punto 8 sin «obsoleto»; punto 10 reduce l. 182-187; punto 11 reformula l. 189-192); matiz a `REV-2026-049` hecho 2: S11 l. 115 nombra `context-packet` como schema top-level sin versión (no enlazado desde S06; base de `B024` sin cambios); `REV-2026-005`, `REV-2026-017`-`REV-2026-020`, `REV-2026-027`, `REV-2026-036`, `REV-2026-037`, `REV-2026-039`, `REV-2026-040`, `REV-2026-043`, `REV-2026-045`-`REV-2026-049` enlazadas, sin duplicar |
| B026 | `reviewed` | `deferred` | [B026](blocks/B026.md): `REV-2026-053`, `REV-2026-054`, respuestas (a)-(n) a las pistas heredadas, balance de S06 y seis preguntas pendientes. Rango 194-206 comprobado sin desplazamiento (ancla `s06-cierre` l. 194, «Comprobación de cierre» l. 196, prosa l. 198-205, l. 206 en blanco y fin del archivo; `blocks.md` sin corregir; S06 no tiene «Criterio de salida» separado: l. 31-37, cubierto por `B023`). Enlaces a ADR-004 (l. 202) y ADR-005 (l. 205) resuelven; ADR-005 fechado 2026-09-18 como el cierre; «Puntos abiertos» (cinco puntos, l. 118-128) diverge de las tres filas `deferred` (l. 56-58) y cita ADR-006/ADR-007 posteriores; los enlaces entrantes al ancla (índice l. 86 y 186, tracker l. 343, `definition/README.md` l. 15) resuelven; sin fuentes externas en el rango; `REV-2026-005`, `REV-2026-011`, `REV-2026-015`-`REV-2026-020`, `REV-2026-023`-`REV-2026-025`, `REV-2026-032`, `REV-2026-034`-`REV-2026-036`, `REV-2026-040`, `REV-2026-044`-`REV-2026-052` enlazadas, sin duplicar. Cierra S06 (`B023`-`B026`) |
| B027 | `reviewed` | `deferred` | [B027](blocks/B027.md): `REV-2026-055`, `REV-2026-056`, `REV-2026-057`, `REV-2026-058`, respuestas (a)-(u) a las pistas heredadas y seis preguntas pendientes. Rango 1-63 comprobado sin desplazamiento (encabezados en l. 1, 5, 16, 28 y 36; tabla de decisiones completa en l. 38-56, 17 filas: 16 `accepted`, 1 `deferred`, 0 `rejected`; prosa l. 58-62; l. 63 en blanco; «Taxonomía y límites iniciales» en l. 64; fronteras de `B028`/`B029` comprobadas: tabla l. 66-71, prosa hasta l. 107, l. 108 en blanco, ancla l. 109, encabezado l. 111, fin l. 123; S07 no tiene «Punto de entrada»; `blocks.md` sin corregir). Sin enlaces ni URL en el rango (único enlace de la unidad: l. 123 → ADR-006); el commit de l. 58-59 coincide con la investigación de OKF (no enlazada desde S07) y con ADR-006 l. 48-49; S07 l. 3 y ADR-006 fechados 2026-09-21 (coinciden; ADR-006 l. 97 cita ADR-007 posterior); dos fuentes externas por pregunta concreta (OKF `SPEC.md` en el commit fijado confirma l. 41-43 y 48 con el matiz de que «concept» es toda unidad en OKF; README de Hindsight confirma el producto y lo describe como memoria que retiene y sintetiza, no sólo recuperación); `REV-2026-005`, `REV-2026-015`, `REV-2026-017`-`REV-2026-021`, `REV-2026-023`-`REV-2026-026`, `REV-2026-028`, `REV-2026-036`, `REV-2026-045`, `REV-2026-049`, `REV-2026-053`, `REV-2026-054` enlazadas, sin duplicar. Abre S07 |
| B028 | `reviewed` | `deferred` | [B028](blocks/B028.md): `REV-2026-059`, `REV-2026-060`, `REV-2026-061`, respuestas (a)-(t) a las pistas heredadas y seis preguntas pendientes. Rango 64-108 comprobado sin desplazamiento («Taxonomía y límites iniciales» l. 64, tabla l. 66-71, prosa en siete párrafos l. 73-107, l. 108 en blanco; ancla `s07-cierre` en l. 109; sin subencabezados; `blocks.md` sin corregir). Sin enlaces ni URL en el rango («ADR-005» en l. 107 es la única mención de ese ADR en la unidad, sin enlace ni punto); ADR-006 «Decisión» puntos 2, 3, 4, 6, 8 y «Consecuencias» l. 88-89 coinciden en sustancia y reducen; una fuente externa por pregunta concreta (OKF `SPEC.md` en el commit fijado: §3 sin metadatos de bundle, §8 `index.md` opcional, §4.1 `description`/`tags`, §5.5 `stale` calculado al consumir); `REV-2026-005`, `REV-2026-017`-`REV-2026-020`, `REV-2026-023`, `REV-2026-025`, `REV-2026-049`, `REV-2026-050`, `REV-2026-054`-`REV-2026-058` enlazadas, sin duplicar |
| B029 | `reviewed` | `deferred` | [B029](blocks/B029.md): `REV-2026-062`, respuestas (a)-(r) a las pistas heredadas, balance de S07 y seis preguntas pendientes. Rango 109-123 comprobado sin desplazamiento (ancla `s07-cierre` l. 109, «Comprobación de cierre» l. 111, prosa l. 113-121, l. 123 enlace a ADR-006 y fin del archivo; el criterio de salida está en l. 28-34, cubierto por `B027`; `blocks.md` sin corregir). Enlace a ADR-006 (l. 123) resuelve, fecha coincide (2026-09-21), en presente y sólo como decisión; «Puntos abiertos» (l. 95-99) = los tres diferimientos de l. 118-121, uno marcado resuelto con ADR-007 y dos sin marca frente al tracker de definición l. 392-394; enlaces entrantes al ancla (índice l. 87 y 190, tracker l. 344, `definition/README.md` l. 16) resuelven; sin fuentes externas necesarias; `REV-2026-005`, `REV-2026-011`, `REV-2026-016`, `REV-2026-017`-`REV-2026-020`, `REV-2026-024`, `REV-2026-034`, `REV-2026-044`, `REV-2026-053`, `REV-2026-055`-`REV-2026-061` enlazadas, sin duplicar. Cierra S07 (`B027`-`B029`) y los bloques de sesiones |
| B030 | `reviewed` | `deferred` | [B030](blocks/B030.md): `REV-2026-063`, `REV-2026-064`, respuestas (a)-(h) a las pistas heredadas y seis preguntas pendientes. Rango 1-69 comprobado sin desplazamiento (título l. 1, fecha 2026-09-14 l. 3, TL;DR l. 6, «Glosario rápido» l. 12, «Contexto» l. 19, «Alternativas evaluadas» l. 41 con tabla l. 43-48, «Por qué descartamos las otras» l. 50, «Por qué la decisión» l. 58, l. 69 en blanco; «Decisión» l. 70; fin del archivo l. 127, igual que el localizador de `B031`; `blocks.md` sin corregir). Sin enlaces ni URL en el rango; fechas de ADR-001 y S02 coinciden y l. 1-69 no muestran ediciones posteriores; dos fuentes externas por pregunta concreta sobre l. 60-64 (NIST AI RMF 1.0, GOVERN 2.1/3.2 y MAP 1.1/3.5: confirma; página del AI RMF: 1.0 vigente, revisión anunciada); `REV-2026-001`, `REV-2026-005`, `REV-2026-013`-`REV-2026-016`, `REV-2026-021`, `REV-2026-058` enlazadas, sin duplicar. Abre ADR-001 |
| B031 | `reviewed` | `deferred` | [B031](blocks/B031.md): `REV-2026-065`, `REV-2026-066`, respuestas (a)-(m) a las pistas heredadas, balance de ADR-001 y seis preguntas pendientes. Rango 70-127 comprobado sin desplazamiento («Decisión» l. 70, «Consecuencias para el equipo» l. 101, «Puntos abiertos» l. 113, «Referencias» l. 123, fin del archivo l. 127; `blocks.md` sin corregir). Enlaces l. 116 (ADR-003), l. 125 (S02, «fuente canónica») y l. 126 (tracker) resuelven; DOI de l. 127 comprobado por `B030`; sin fuentes externas nuevas. «Decisión» contrastada con S02 l. 29-98 (puntos 1, 2, 4, 7 y 8 coinciden en sustancia; el 4 añade «acuerdos técnicos», respaldado por S02 l. 86-87); «Puntos abiertos» contrastados fila a fila con S02 l. 104-107 y con los destinos (S04 l. 81-87, S09 l. 40-119 y ADR-008 como evidencia fuera del alcance; S12 por búsqueda). `REV-2026-001`, `REV-2026-014`-`016`, `REV-2026-023`, `REV-2026-029`, `REV-2026-056`, `REV-2026-063`, `REV-2026-064` enlazadas, sin duplicar. Cierra ADR-001 (`B030`-`B031`) |
| B032 | `reviewed` | `deferred` | [B032](blocks/B032.md): `REV-2026-067`, `REV-2026-068`, respuestas (a)-(h) a las pistas heredadas y seis preguntas pendientes. Rango 1-71 comprobado sin desplazamiento (título l. 1, fecha 2026-09-14 l. 3, TL;DR l. 6, «Glosario rápido» l. 12 con cinco entradas, «Contexto» l. 20, «Alternativas evaluadas» l. 44 con tabla l. 46-50, «Por qué descartamos las otras» l. 52, «Por qué la decisión» l. 59, l. 71 en blanco; «Decisión» l. 72; última línea l. 159; `blocks.md` sin corregir). Sin enlaces ni URL en el rango; fechas de ADR-002, S03 y la investigación de fuentes coinciden y l. 1-71 no muestran ediciones posteriores (l. 18 y 22 como fotografía frente a S07 l. 40-41: pregunta 1). Glosario sin divergencia frente a S01/S03/ADR-001. Cuatro afirmaciones externas comprobadas por pregunta concreta (W3C DWBP, W3C PROV-Overview, especificación de Agent Skills y sus guías de activación y de evaluación: todas confirman; OpenAI y Anthropic apoyados en `B011`). `REV-2026-001`, `017`, `018`, `021`, `025`, `056`, `058`, `063`, `064`, `066` enlazadas, sin duplicar. Abre ADR-002 |
| B033 | `reviewed` | `deferred` | [B033](blocks/B033.md): `REV-2026-069`, respuestas (a)-(l) a las pistas heredadas y seis preguntas pendientes. Rango 72-133 comprobado sin desplazamiento («Decisión» l. 72 con tabla l. 76-88 y ocho puntos l. 74-116, párrafo l. 118-119, «Consecuencias para el equipo» l. 121 con viñetas l. 123-132, l. 133 en blanco, «Puntos abiertos» l. 134; `blocks.md` sin corregir). Sin enlaces ni URL en el rango; tabla y puntos contrastados con S03 completa (once capas coinciden; regla de discrepancias idéntica en sustancia: pregunta 5 de `B009` respondida; revalidación selectiva elevada a «Decisión»: pregunta 2 de `B009` respondida); sin fuentes externas nuevas (l. 108-109 apoyada en `B032`). `REV-2026-001`, `005`, `017`-`020`, `022`, `025`, `056`, `065`, `067`, `068` enlazadas, sin duplicar |
| B034 | `reviewed` | `deferred` | [B034](blocks/B034.md): `REV-2026-070`, matiz a `REV-2026-025` hecho 2 (l. 147 no coincide con S03 l. 240: pierde activación y «efectividad del modelo de información»), respuestas (a)-(i) a las pistas heredadas, balance de ADR-002 y seis preguntas pendientes. Rango 134-159 comprobado sin desplazamiento («Puntos abiertos» l. 134 con siete viñetas l. 136-147, «Referencias» l. 149 con nueve viñetas l. 151-159, fin del archivo l. 159; `blocks.md` sin corregir). Enlaces internos de l. 136, 140, 151-154 resuelven; sin fuentes externas nuevas (W3C y Agent Skills comprobadas por `B032`, Anthropic por `B011`; OpenAI HTTP 403, no intentada). Destinos contrastados por lecturas parciales y búsquedas en S05-S12, ADR-004 y ADR-007: pregunta 6 de `B033` respondida (S08 l. 93, 143, 264-268 y S09 l. 58 deciden la conciliación de skills con el proveedor); límite de `REV-2026-056` hecho 3 resuelto (S11 l. 170 ubica el registro de fuentes sin fijar campos). `REV-2026-001`, `019`, `021`, `023`, `025`, `036`, `055`, `056`, `066`, `069` enlazadas, sin duplicar. Cierra ADR-002 (`B032`-`B034`) |
| B035 | `reviewed` | `deferred` | [B035](blocks/B035.md): `REV-2026-071`, `REV-2026-072`, `REV-2026-073`, respuestas (a)-(i) a las pistas heredadas y seis preguntas pendientes. Rango 1-43 comprobado sin desplazamiento (título l. 1, fecha 2026-09-15 l. 3, TL;DR l. 6, «Glosario rápido» l. 12 con seis entradas, «Contexto» l. 21, «Alternativas evaluadas» l. 35 con tabla l. 37-42, l. 43 en blanco; «Decisión» l. 44; `blocks.md` sin corregir). Sin enlaces ni URL en el rango; fechas de ADR-003, S04 y las investigaciones coinciden y l. 1-43 no muestran ediciones posteriores. Tres fuentes externas por pregunta concreta sobre l. 31-33 (Google Cloud confirma; AutoGen «Reflection» no contiene la advertencia atribuida a Microsoft; OpenAI Agents SDK sin cuerpo devuelto, no verificada; Anthropic y el playbook apoyados en `B013`). `REV-2026-001`, `013`, `014`, `021`, `022`, `026`, `027`, `029`, `030`, `033`, `063`, `064`, `067` enlazadas, sin duplicar. Abre ADR-003 |
| B036 | `reviewed` | `deferred` | [B036](blocks/B036.md): `REV-2026-074`, `REV-2026-075`, mapa fila a punto, respuestas (a)-(m) a las pistas heredadas y seis preguntas pendientes. Rango 44-98 comprobado sin desplazamiento («Decisión» l. 44 con doce puntos l. 46-97, l. 98 en blanco, «Consecuencias» l. 99; `blocks.md` sin corregir). Sin enlaces, URL ni afirmaciones externas en el rango; sin fuentes externas. Puntos contrastados con S04 l. 69-116, 118-137, 274-280 y 298 y con ADR-001 «Decisión»; la «Decisión» resume S04 con pérdidas (patrón de `REV-2026-065`/`069`), aunque el tracker de definición no la presenta como fuente por tema (l. 314-321, 341). `REV-2026-014`, `022`, `027`, `029`, `030`, `033`, `041`, `065`, `066`, `069`, `071`, `073` enlazadas, sin duplicar |
| B037 | `reviewed` | `deferred` | [B037](blocks/B037.md): `REV-2026-076`, contrastes de «Consecuencias», mapa de «Detalles diferidos», respuestas (a)-(j) a las pistas heredadas, balance de ADR-003 y seis preguntas pendientes. Rango 99-132 comprobado sin desplazamiento («Consecuencias» l. 99 con seis viñetas, «Detalles diferidos» l. 112 con ocho viñetas l. 114-121, «Referencias» l. 123 con ocho viñetas l. 125-132, fin del archivo l. 132; `blocks.md` sin corregir). Los ocho enlaces de «Referencias» resuelven; l. 117 nombra ADR-007 sin enlace; ADR-001, 002, 004, 005, 007, 008, 009 y 010 enlazan ADR-003 y éste no enlaza ninguno posterior. Destinos contrastados por búsqueda y lecturas parciales de S05, S09, S11, S12, ADR-004 y el tracker de definición; sin fuentes externas. `REV-2026-028`, `032`, `034`, `035`, `036`, `055`, `066`, `070`-`072`, `074`, `075` enlazadas, sin duplicar. Cierra ADR-003 (`B035`-`B037`) |
| B038 | `reviewed` | `deferred` | [B038](blocks/B038.md): `REV-2026-077`, `REV-2026-078`, contrastes con S05, respuestas (a)-(h) a las pistas heredadas y seis preguntas pendientes. Rango 1-60 comprobado sin desplazamiento (título l. 1, fecha 2026-09-16 l. 3, TL;DR l. 6, «Glosario rápido» l. 12 con cinco entradas, «Contexto» l. 20, «Alternativas evaluadas» l. 35 con tabla l. 37-42, «Por qué descartamos las otras» l. 44, «Por qué la decisión» l. 52, l. 60 en blanco; «Decisión» l. 61; `blocks.md` sin corregir). Sin enlaces ni URL en el rango; l. 1-60 son fotografía coherente con la fecha; l. 25 respaldado por ADR-003 l. 9, 19, 66. Fuentes externas por pregunta concreta: las dos de Anthropic (l. 132-133) confirman lo atribuido, pero sólo continuidad de un mismo harness; OpenAI «Harness engineering» no consultada (HTTP 403); Agents SDK «Handoffs» (conversacional por defecto) y A2A 1.0.0 (2026-03-12) leídos como referentes omitidos. `REV-2026-005`, `036`, `038`, `039`, `043`, `063`, `064`, `067`, `068`, `071`-`074` enlazadas, sin duplicar. Abre ADR-004 |
| B039 | `reviewed` | `deferred` | [B039](blocks/B039.md): `REV-2026-079`, `REV-2026-080`, mapa punto a fila, respuestas (a)-(k) a las pistas heredadas y seis preguntas pendientes. Rango 61-115 comprobado sin desplazamiento («Decisión» l. 61 con once puntos l. 63-101, «Consecuencias para el equipo» l. 103 con cinco viñetas l. 105-114, l. 115 en blanco, «Puntos abiertos» l. 116; `blocks.md` sin corregir). Sin enlaces, URL ni afirmaciones externas en el rango; sin fuentes externas. Puntos contrastados fila a fila con S05 l. 52-80 y l. 82-232, con S04 l. 108-112 y con el tracker de definición l. 312-323 y 342: la «Decisión» resume S05 con pérdidas (sin la regla de caducidad de l. 62, la cancelación del emisor, la atribución de la aceptación ni lo que crece; patrón de `REV-2026-065`/`069`/`074`/`075`) y «Consecuencias» l. 107-108 amplía S05 al asignar al orchestrator la reconciliación previa con «aplicar» ambiguo; el punto 5 no pierde la regla de l. 175. `REV-2026-037`, `039`-`044`, `046`, `065`, `069`, `074`, `075`, `078` enlazadas, sin duplicar |
| B040 | `reviewed` | `deferred` | [B040](blocks/B040.md): `REV-2026-081`, mapa de «Puntos abiertos», hechos adicionales a `REV-2026-036`, `046`, `048`, `066`/`070`/`076`, `079` y `080`, respuestas (a)-(i) a las pistas heredadas, balance de ADR-004 y seis preguntas pendientes. Rango 116-133 comprobado sin desplazamiento («Puntos abiertos» l. 116 con cuatro viñetas l. 118-125, «Referencias» l. 127 con cinco viñetas l. 129-133, fin del archivo l. 133). Localizador de `B043` corregido en [blocks.md](blocks.md) a 116-139 (última viñeta de «Referencias» de ADR-005 en l. 139). Enlaces l. 121, 123, 129 y 130 resuelven; sin fuentes externas (l. 131-133 contrastadas por `B038`). Destinos contrastados por lectura parcial y búsqueda en S08, S09, S11, S12 y ADR-010: l. 118-119 recibido por S11 l. 106/115 y ADR-010 punto 11 sin marca ni acuse (S11 y ADR-010 no citan ADR-004); l. 124-125 reenviado por S09 l. 45-46 a S11; marcas de l. 120-123 posteriores a la fecha; condición de `expires_at`/`due_at`, «política de caducidad», actor del rechazo sin receptor y cierre coordinado sin receptor en S08-S12. Pregunta 1 de `B039` respondida («vencido» = `expired`, sujeto a una política sin dueño). Cierra ADR-004 (`B038`-`B040`) |
| B041 | `reviewed` | `deferred` | [B041](blocks/B041.md): `REV-2026-082`, contrastes con S06, hechos adicionales a `REV-2026-045`, `046`, `048`, `050`, `053` y `077`, respuestas (a)-(k) a las pistas heredadas y seis preguntas pendientes. Rango 1-60 comprobado sin desplazamiento (título l. 1, fecha 2026-09-18 l. 3, TL;DR l. 6, «Glosario rápido» l. 12 con cinco entradas, «Contexto» l. 20, «Alternativas evaluadas» l. 35 con tabla l. 37-42, «Por qué descartamos las otras» l. 44, «Por qué la decisión» l. 52, l. 60 en blanco; «Decisión» l. 61; `blocks.md` sin corregir). Sin enlaces ni URL en el rango; l. 1-60 es fotografía coherente con la fecha. Una fuente externa por pregunta concreta (Anthropic «Effective context engineering»: confirma «contexto inicial breve» e identificadores «just in time»; advierte latencia y estrategia híbrida); las demás, apoyadas en `B011`/`B023`/`B038` (OpenAI HTTP 403). l. 31-33 respaldado por ADR-003 punto 5, sin heredar `REV-2026-080`; de las alternativas, dos de tres tienen fila `rejected` en S06 (premisa de la pista corregida). `REV-2026-005`, `045`-`050`, `053`, `054`, `063`, `073`, `077`, `078`, `080` enlazadas, sin duplicar. Abre ADR-005 |
| B042 | `reviewed` | `deferred` | [B042](blocks/B042.md): `REV-2026-083`, mapa punto a fila, hechos adicionales a `REV-2026-048`, `049`, `051`, `052` y `082`, respuestas (a)-(o) a las pistas heredadas y seis preguntas pendientes. Rango 61-115 comprobado sin desplazamiento («Decisión» l. 61 con doce puntos l. 63-102, «Consecuencias para el equipo» l. 104 con seis viñetas l. 106-114, l. 115 en blanco, «Puntos abiertos» l. 116; `blocks.md` sin corregir). Sin enlaces, URL ni afirmaciones externas en el rango; sin fuentes externas nuevas (latencia apoyada en la consulta de `B041`). Puntos contrastados fila a fila con S06 l. 43-60 y prosa l. 62-192, con S11 l. 166 y S08 l. 126, 272-279 y 358-394: la «Decisión» resume S06 con pérdidas (sin regla capa → estado, «límites» del adapter convertidos en «métricas», condiciones de carga sin «únicamente», parada sin agente ni solicitud, sin la cláusula de la caché; patrón de `REV-2026-065`/`069`/`074`/`075`/`079`, con más riesgo porque S07 l. 107 y S08 l. 126, 277, 363, 393 citan ADR-005 como fuente); «Consecuencias» l. 110 formula bien la frontera de ownership (atenúa `REV-2026-082` hecho 3) y no hereda `REV-2026-080`. `REV-2026-046`-`053`, `065`, `069`, `074`, `075`, `079`, `080`, `082` enlazadas, sin duplicar |
| B043 | `reviewed` | `deferred` | [B043](blocks/B043.md): `REV-2026-084`, mapa de «Puntos abiertos», contrastes de «Referencias», hechos adicionales a `REV-2026-045`, `046`, `054`, `061`, `070`/`076` y `083`, respuestas (a)-(m) a las pistas heredadas, balance de ADR-005 y seis preguntas pendientes. Rango 116-139 comprobado sin desplazamiento («Puntos abiertos» l. 116 con cinco viñetas l. 118-128, «Referencias» l. 130 con ocho viñetas l. 132-139, fin del archivo l. 139). Localizador de `B045` corregido en [blocks.md](blocks.md) a 46-106 (ADR-006 «Referencias» l. 101, última viñeta l. 106). Enlaces l. 119, 127 y 132-136 resuelven; sin fuentes externas (l. 137-139 contrastadas por `B038`/`B041`). Destinos contrastados por lectura parcial y búsqueda en S07, S08, ADR-007, S11, ADR-010 y S12 (completa): la sintaxis y el evaluador de las condiciones de carga (S06 l. 58, S08 l. 111, l. 120-121) no fueron recibidos por S11, ADR-010 ni S12, y la identidad y los aliases del packet se marcan resueltos en S08/ADR-007, que sólo definen actor, ejecución y conocimiento; cuatro marcas posteriores a la fecha (S07/S08) y ninguna de S11, aunque los cinco puntos la nombran; RTK/Context Mode diferidos al backlog de S12 con medición posterior a la construcción (pregunta 5 de `B042`); l. 132 nombra S06 «Acuerdos canónicos» sin prevalencia (atenúa en parte `REV-2026-083`); l. 134-135 responden la pregunta 6 de `B041`. Cierra ADR-005 (`B041`-`B043`) |
| B044 | `reviewed` | `deferred` | [B044](blocks/B044.md): `REV-2026-085`, `REV-2026-086`, contrastes con S07, hechos adicionales a `REV-2026-025`/`056`, `054`, `055`, `057`, `058`, `061` y `062`, respuestas (a)-(j) a las pistas heredadas y seis preguntas pendientes. Rango 1-45 comprobado sin desplazamiento (título l. 1, fecha 2026-09-21 l. 3, TL;DR l. 6, «Contexto» l. 12, «Alternativas evaluadas» l. 19 con tabla l. 21-25, «Formas de taxonomía» l. 27, «Posición de Hindsight» l. 38, l. 45 en blanco; «Decisión» l. 46; `B045` 46-106 también coincide; `blocks.md` sin corregir). ADR-006 no tiene «Glosario rápido». Sin enlaces ni URL en el rango; l. 1-45 son fotografía coherente con la fecha. Una fuente externa por pregunta concreta (OKF `SPEC.md` en el commit fijado: §2 «concept» es toda unidad; §4.1 tipos desconocidos «as generic concepts»). Tablas de alternativas sin criterios ni costes, razones circulares y cobertura parcial (`REV-2026-085`); homónimo `concept` y tolerancia de tipos sin nota ni glosario (`REV-2026-086`); «Posición de Hindsight» coherente con S08 l. 114-115/381-382 y S11 l. 90-91/200, sin receptor en S12. Abre ADR-006 |
| B045 | `reviewed` | `deferred` | [B045](blocks/B045.md): `REV-2026-087`, mapa punto a fila, mapas de «Consecuencias», «Puntos abiertos» y «Referencias», hechos adicionales a `REV-2026-045`, `055`, `057`, `058`, `060`, `061`, `062`, `085` y `086`, respuestas (a)-(k) a las pistas heredadas, balance de ADR-006, balance global de los ADR (`B030`-`B045`), estado global y seis preguntas pendientes. Rango 46-106 comprobado sin desplazamiento («Decisión» l. 46 con nueve puntos l. 48-80, «Consecuencias para el equipo» l. 82 con viñetas l. 84-91, «Puntos abiertos» l. 93 con viñetas l. 95-99, «Referencias» l. 101 con viñetas l. 103-106, fin del archivo; `blocks.md` sin corregir). Enlaces l. 97 y 103-106 resuelven; sin fuentes externas nuevas (OKF y Hindsight comprobados por `B027`/`B044`). La «Decisión» resume S07 sin la regla de migración (l. 41, sin receptor en `docs/`), sin la taxonomía extensible ni la tolerancia de tipos (l. 43), sin disparadores de revisión ni conciliación de marcadores (l. 51-52) y sin las anclas de autoridad de l. 42, 50, 55, 86 y 89-91, mientras S08 l. 249 aplica «las reglas de autoridad y vigencia de ADR-006» y el tracker de definición l. 320 lo presenta como fuente del tema (`REV-2026-087`; patrón de `065`/`069`/`074`/`075`/`079`/`083`); la marca de l. 95-97 tiene cobertura real en S08 l. 87/90 y ADR-007 punto 9 (a diferencia de `REV-2026-084` hecho 2), pero no llega a la «Decisión»; l. 98-99 recibidos por S11 (l. 90-91, 109-111, 115, 200) y ADR-010 (backlog de S12) sin marca; S11 l. 109 da artefacto a owner y `scope`, no al curator predeterminado (matiz a `REV-2026-060`); ningún punto trata la sección `knowledge` (quinta formulación en l. 88-89). Cierra ADR-006 (`B044`-`B045`) y el inventario de bloques |

**Totales:** 45 bloques reales; análisis: 45 `reviewed`, 0 `stale`, 0
`pending`, 0 `in_progress`, 0 `blocked`; discusión: 45 `deferred` desde el
2026-09-30 (antes 45 `pending`). Cruces: 7 `reviewed` (`CT01`-`CT07`),
discusión 7 `deferred`. Anotaciones: `REV-2026-001` a `REV-2026-111`: 2
`accepted` (`105`, `110`), 109 `deferred` al backlog. Texto anterior al
2026-09-30: discusión 45 `pending`; anotaciones `001`-`103` todas `propuesto`.
**Condición de terminación del análisis («Uso persistente»): se cumple en la
letra el 2026-09-25**: los 45 bloques y los siete cruces están `reviewed`
sobre bases vigentes, sin filas `pending`, `in_progress`, `blocked` ni
`stale`. La discusión sigue abierta y se cierra aparte. Dos salvedades
registradas en [CT07](blocks/CT07.md):
1. La terminación se refiere al inventario vigente (índice, S01-S07 y
   ADR-001 a ADR-006). No equivale a la revisión «del canon vigente» que S12
   l. 59 exige antes del piloto, porque S08-S12 y ADR-007 a ADR-010 no se
   revisaron como objeto. Su alcance es la decisión (h) (`REV-2026-101`; S12
   l. 74-75; tracker de definición l. 15-17).
2. S12 sigue `in_progress`. Si cambia el índice rector, `B001`-`B003` vuelven
   a `stale` y `CT07` debe recomprobar sus secciones 1 y 2.3.

Próxima acción: **discusión humana** en el orden recomendado por `CT07`, más
abajo en «Para discutir ahora». No queda ninguna unidad de análisis
pendiente; una ampliación del inventario (bloques desde `B046`) sólo procede
si la persona la decide en (h). Texto de la pasada anterior (antes de `CT07`):
45 bloques `reviewed` y vigentes; próxima lectura `CT07`. `B003` quedó `reviewed` en su pasada 2 (2026-09-25; ver
[B003](blocks/B003.md)): `REV-2026-007` cerrada en su núcleo por cambio del
canon, `REV-2026-006` atenuada en parte y `REV-2026-100` nueva. Límite: S12
sigue `in_progress`; si cambia el índice rector, `B001`-`B003` vuelven a
`stale`. Próxima lectura: **`CT07`** (único cruce `pending`; alcance en
[blocks.md](blocks.md): «Criterios globales de cierre, diferimientos y
cobertura transversal de prácticas»; referencias selectivas `B001`-`B003`,
`B008`, `B011`-`B012`, `B017`-`B018`, `B022`, `B026`, `B029`, `B031`, `B034`,
`B037`, `B040`, `B043`, `B045`). Crear `blocks/CT07.md` desde
[BLOCK-TEMPLATE.md](BLOCK-TEMPLATE.md) y usar pasajes concretos de esos
checkpoints sin releerlos completos. `B001`-`B003` ya no son límite por
`stale`: el índice rector está vigente sobre la base del 2026-09-25. Pistas:
las del índice consolidado (entrada `CT07`: patrón de cierres, aperturas,
inventarios unidad/ADR/tracker, omisiones silenciosas y balance global de los
ADR) y las listadas más abajo desde `CT01`-`CT06`. Desde `B003` (pasada 2):
el patrón de cierre se extiende a S08-S11 (S08 l. 400-412, S09 l. 106-119, S10
l. 154-174, S11 l. 212-231); `REV-2026-100` como omisión silenciosa que toca la
frontera de fase; dos criterios de cierre solapados (índice l. 146-163 y S12
l. 45-50; pregunta 1 de la pasada 2); `REV-2026-005` y `REV-2026-099` para
l. 160-162. Desde `B002` (pasada 2): la pregunta 1 (ADR-010 sin la decisión
del orchestrator) y la revisión transversal, que ningún cruce trató aún.
Texto de la pasada anterior (antes de la pasada 2 de `B003`): 44 `reviewed`, 1 `stale`, 0
`pending`; discusión: 45 `pending`. `B002` `reviewed` en su pasada 2
(2026-09-25; ver [B002](blocks/B002.md): `REV-2026-004` atenuada en parte,
`REV-2026-005` ampliada y `REV-2026-099` nueva; límite: S12 `in_progress`).
Próxima lectura: **`B003`** (`stale`, l. 146-204): pasada nueva sin
sobrescribir, con las pistas del cursor de la pasada 2 de `B002`
(`REV-2026-007` posiblemente atenuada por l. 155-156; l. 159-163 frente a S12
l. 56 y `REV-2026-099`). Después, `CT07`. Texto de la pasada anterior (antes
de la pasada 2 de `B002`): 43 `reviewed`, 2 `stale`, 0
`pending`; discusión: 45 `pending`. `B001` `reviewed` en su pasada 2
(2026-09-25; aplazamiento agotado al cumplirse su condición; ver
[B001](blocks/B001.md)); `B002` y `B003` siguen `stale` por cambio del índice
rector, con localizadores ya corregidos (94-145 y 146-204). Próxima lectura:
**`B002`** (`stale`; el orden por defecto pone `stale` antes que el cruce
`pending` `CT07`): pasada nueva sin sobrescribir la anterior, que compruebe si
las diez preguntas de `REV-2026-004` recibieron disposición y considere las
pistas de la pregunta 3 de la pasada 2 de `B001`. Después, `B003` y `CT07`.
Texto de la pasada anterior (antes de la pasada 2 de `B001`): 42 `reviewed`,
3 `stale`, 0 `pending`; discusión: 45 `pending`. **Inventario de bloques completo**: no queda
ningún bloque `pending`, `in_progress` ni `blocked`. `B001` sigue `stale` y
aplazado por decisión de la persona mientras S08 esté en curso; `B002` y `B003`
siguen `stale` por cambio del índice rector. **Fase de cruces
`CT01`-`CT07`**: `CT01` `reviewed` (2026-09-25; discusión `pending`; detalle
en [CT01](blocks/CT01.md): `REV-2026-088`, `REV-2026-089`, ninguna anotación
cerrada); `CT02` `reviewed` (2026-09-25; discusión `pending`; detalle en
[CT02](blocks/CT02.md): `REV-2026-090`, `REV-2026-091`, ninguna anotación
cerrada); `CT03` `reviewed` (2026-09-25; discusión `pending`; detalle en
[CT03](blocks/CT03.md): `REV-2026-092`, `REV-2026-093`, `REV-2026-094`,
ninguna anotación cerrada); `CT04` `reviewed` (2026-09-25; discusión
`pending`; detalle en [CT04](blocks/CT04.md): `REV-2026-095`, ninguna
anotación cerrada); `CT05` `reviewed` (2026-09-25; discusión `pending`;
detalle en [CT05](blocks/CT05.md): `REV-2026-096`, `REV-2026-097`, ninguna
anotación cerrada); `CT06` `reviewed` (2026-09-25; discusión `pending`;
detalle en [CT06](blocks/CT06.md): `REV-2026-098`, ninguna anotación
cerrada). Próxima lectura: **`CT07`** (alcance en [blocks.md](blocks.md):
«Criterios globales de cierre, diferimientos y cobertura transversal de
prácticas»; referencias selectivas `B001`-`B003`, `B008`, `B011`-`B012`,
`B017`-`B018`, `B022`, `B026`, `B029`, `B031`, `B034`, `B037`, `B040`,
`B043`, `B045`). Usar resultados y pasajes concretos de esos checkpoints, no
releerlos completos; crear `blocks/CT07.md` desde
[BLOCK-TEMPLATE.md](BLOCK-TEMPLATE.md) al abrir. `B001`-`B003` siguen `stale`:
lo que dependa del índice rector debe declararse como límite, salvo que la
persona levante antes el aplazamiento de `B001` (el tracker de definición
l. 345 y `definition/README.md` l. 17 ya muestran S08 `completed`; ver
[CT06](blocks/CT06.md), «Cobertura y límites»). Pistas para `CT07`: las del
índice consolidado (entrada `CT07`: patrón de cierres, aperturas, inventarios
unidad/ADR/tracker, omisiones silenciosas, balance global de los ADR); desde
`CT01`-`CT05`, las ya listadas allí (preguntas 1-4 de `CT04`, `REV-2026-090`/
`091`/`081`/`092`, pregunta 2 de `CT03`, preguntas 1 y 4 y decisión (c) de
`CT05`, `REV-2026-097`); desde `CT06`, la constancia de tres estados de los
diferimientos de S07 (contraste 11) y `definition/README.md` l. 23-24 como
restricción de la convención de marcas, Hindsight y la migración de OKF sin
receptor en S12 (contrastes 8 y 10), la pregunta 5 (auditoría de cierre de
S08 frente a ADR-006) y la decisión (d) de su síntesis (dirección de la
compatibilidad OKF, que S12 debería poder probar). Texto de la pasada
anterior sobre la próxima lectura (tras `CT05`): Próxima lectura: **`CT06`** (alcance en
[blocks.md](blocks.md): «Consistencia entre la unidad canónica S07 y
ADR-006»; referencias selectivas `B027`-`B029`, `B044`-`B045`). Usar
resultados y pasajes concretos de esos checkpoints, no releerlos completos;
crear `blocks/CT06.md` desde [BLOCK-TEMPLATE.md](BLOCK-TEMPLATE.md) al abrir.
Pistas para `CT06`: las del índice consolidado (entrada `CT06`: en particular
`REV-2026-054` hecho 2, `055` hecho 2, `057`, `058`, `059`-`061` frente a
ADR-006 puntos 3, 6 y 8, `062`, `085`, `087` y su mapa punto a fila en
[B045](blocks/B045.md)); desde `CT03`, su pregunta 4 (migración de OKF sin
operador) y `REV-2026-094` (regla de uso provisional de `draft` ausente de
ADR-006, que S08 l. 249 invoca); desde `CT04`, su contraste 12 (síntesis
corregida autónomamente en S03/ADR-002 frente a la revisión `draft` de S07
l. 53), la frecuencia de S03 l. 236 perdida en ADR-002 (pregunta 6 de
`B027`) y la resolución de precedencia por analogía con S03 l. 53-54; desde
`CT05`, `REV-2026-097` (comprobar si S07 hereda de ADR-005 en vez de S06
—S07 l. 107— y si S08 l. 249 y el tracker de definición l. 320 usan ADR-006
como invariante: a diferencia de S04-S06, aquí el tracker sí presenta el ADR
como fuente del tema) y su pregunta 5 (dónde viven las marcas: S07 frente a
ADR-006 «Puntos abiertos» l. 95-99). Texto de la pasada anterior sobre la
próxima lectura (tras `CT04`): Próxima lectura: **`CT05`** (alcance en
[blocks.md](blocks.md): «Consistencia entre las unidades canónicas S04-S06 y
ADR-003/ADR-005»; referencias selectivas `B013`-`B026`, `B035`-`B037`,
`B041`-`B043`). Usar resultados y pasajes concretos de esos checkpoints, no
releerlos completos; crear `blocks/CT05.md` desde
[BLOCK-TEMPLATE.md](BLOCK-TEMPLATE.md) al abrir. Pistas para `CT05`: las del
índice consolidado (entrada `CT05`: S04/ADR-003 y S06/ADR-005, `REV-2026-071`-`076`,
`080` hecho 4, el patrón de «Decisión» con pérdidas de `074`/`075`/`083`);
desde `CT02`, su pregunta 5 (umbral temporal de abandono frente a la exclusión
del tiempo en S05) y su contraste 12 (ADR-003 y ADR-004 pierden juntos el
estado ante duda, las disposiciones de S04 l. 116 y la cancelación del
emisor); desde `CT03`, su pregunta 5 (packet emitido para un selector de
«capacidad») y `REV-2026-092` (sesión sin identidad frente a ADR-003 punto 5);
desde `CT04`, `REV-2026-095` (S04 l. 79, 83-85, 241 operan con la distinción
acordado/delegado sin registrarla; ADR-003 no la recoge) y su pregunta 5
(decisión delegada presentada en `readiness` y autorizada: ¿pasa a
«acordada»?), además de la aplicación a ADR-003/ADR-005 de la decisión de
precedencia de la síntesis de `CT04`. Texto de la pasada anterior sobre la
próxima lectura (tras `CT03`): Próxima lectura: **`CT04`** (alcance en
[blocks.md](blocks.md): «Consistencia entre las unidades canónicas S01-S03 y
ADR-001/ADR-002»; referencias selectivas `B004`-`B012`, `B030`-`B034`). Usar
resultados y pasajes concretos de esos checkpoints, no releerlos completos;
crear `blocks/CT04.md` desde [BLOCK-TEMPLATE.md](BLOCK-TEMPLATE.md) al abrir.
Pistas para `CT04`: las del índice consolidado (entrada `CT04`: en particular
`REV-2026-063`-`070`, el patrón de «Decisión» con pérdidas de `065`/`069` y
`079`, y la pregunta 5 de `B039` sobre la convención de subordinación) y,
desde `CT01`, su pregunta 4 (`synthesis` `stable` corregida autónomamente o
como `draft`) y su contraste 12 (pérdidas de las «Decisión» concentradas en
las garantías de autoridad). `CT03` no deja pistas nuevas para `CT04`. S01-S03
no dependen de S08, por lo que el aplazamiento de `B001` no limita el cruce
salvo por `REV-2026-001`-`003`, cuyo análisis sigue `stale`. Texto de la
pasada anterior sobre la próxima lectura (tras `CT02`): Próxima lectura: **`CT03`** (alcance en [blocks.md](blocks.md):
«Portabilidad e identidad lógica frente al perfil OKF y sus rutas/aliases
diferidos»; referencias selectivas `B019`-`B020`, `B023`-`B024`,
`B027`-`B029`, `B039`-`B040`, `B042`-`B043`, `B045`). Usar resultados y
pasajes concretos de esos checkpoints, no releerlos completos; crear
`blocks/CT03.md` desde [BLOCK-TEMPLATE.md](BLOCK-TEMPLATE.md) al abrir.
Pistas para `CT03`: las del índice consolidado (entrada `CT03`) y, desde
`CT01`, sus preguntas 1 (aliases de entradas de conocimiento sin semántica)
y 2 (`current` frente a revisión `draft`); desde `CT02`, su pregunta 2
(identidad que posee el ownership y las obligaciones aceptadas al reanudar
en otra sesión: identidad lógica o ejecución, S05 l. 84 y S04 l. 116) y las
preguntas 4 de `B014` y 6 de `B021` que la originan. Texto de la pasada
anterior sobre la próxima lectura (tras `CT01`): Próxima lectura: **`CT02`** (alcance en [blocks.md](blocks.md):
«Lifecycle, ownership, recuperación y handoffs entre S04 y S05»; referencias
selectivas `B014`, `B016`-`B018`, `B019`-`B022`, `B036`, `B038`-`B039`). Usar
resultados y pasajes concretos de esos checkpoints, no releerlos completos;
crear `blocks/CT02.md` desde [BLOCK-TEMPLATE.md](BLOCK-TEMPLATE.md) al abrir.
Pistas para `CT02`: las del índice consolidado (entrada `CT02`) y, desde
`CT01`: `REV-2026-089` (resultado de `consultation` sin capa ni aplicación con
actor; corrección sólo mediante sucesor inmutable, con `REV-2026-037`) y el
contraste 5 de [CT01](blocks/CT01.md) (sin categoría de rechazo para
originales contradictorios). Texto de la pasada anterior sobre la próxima
lectura: **Siguiente fase: cruces `CT01`-`CT07`** (ninguno analizado).
Próxima lectura: **`CT01`** (alcance en
[blocks.md](blocks.md): «Autoridad de S03 frente a handoffs, contexto y
conocimiento: ninguna copia, resumen, packet, alias o curator obtiene
autoridad por sí mismo»; referencias selectivas `B009`-`B010`, `B019`-`B021`,
`B023`-`B025`, `B027`-`B028`, `B032`-`B033`, `B038`-`B039`, `B041`-`B042`,
`B045`). Pistas para `CT01`: las del índice consolidado (entrada `CT01`,
ampliada por `B045`): `REV-2026-017`-`020` sin salida tras S03-S07;
`REV-2026-019`; «actor autorizado» sin criterio (`REV-2026-040`, `047`, `049`
hecho 4); `REV-2026-052` hecho 2; `REV-2026-059`/`060`; `REV-2026-068` hecho
3; `REV-2026-069` hechos 1 y 4; registro de fuentes sin campos ni
procedencia (pregunta 4 de `B034`). Desde `B041`-`B045`: el handoff como
custodio del ownership en ADR-005 l. 29-31 (`REV-2026-082` hecho 3); la
«Decisión» de ADR-005 sin la exclusión de la mera disponibilidad ni la
cláusula de la caché como no fuente de verdad (`REV-2026-083` hechos 3 y 5);
la «Decisión» de ADR-006 sin las anclas de autoridad de S07 l. 42, 50, 55, 86
y 89-91, invocada por S08 l. 249 (`REV-2026-087` hecho 3); curator
predeterminado sin artefacto tras S11 l. 109 (pregunta 4 de `B045`); lo que
Hindsight retiene sin lugar en la taxonomía (`REV-2026-057`). Contrastes
útiles fuera de los bloques: S08 l. 90, 96 y 99. Detalle en
[B045](blocks/B045.md). **ADR-006 queda cerrado por análisis**
(`B044`-`B045`; balance de ADR-006 y balance global de los ADR en
[B045](blocks/B045.md)). `B045` comprobó que el rango 46-106 es exacto; que
los nueve puntos siguen el orden de las filas de S07 sin contradecirlas, pero
que no hay punto para la regla de migración (l. 41, sin otro lugar en
`docs/`), la taxonomía extensible con tolerancia de tipos (l. 43) ni las
definiciones de los tipos (l. 44), que el punto 6 pierde disparadores,
«sin invalidar», conciliación de marcadores y efecto de `review_due`, y que
los puntos 1, 2, 3, 5 y 9 pierden las anclas de autoridad, mientras S08 l. 249
aplica «las reglas de autoridad y vigencia de ADR-006» y el tracker de
definición l. 320 lo presenta como fuente del tema (`REV-2026-087`); que la
marca de l. 95-97 está cubierta por S08 l. 87/90 y ADR-007 punto 9, sin
propagarse a la «Decisión»; que l. 98-99 fueron recibidos por S11 y ADR-010
sin marca y la comparación de Hindsight queda en el backlog de S12
(`in_progress`, sin mención); que S11 l. 109 declara owner y `scope` pero no
curator; que ningún punto trata la sección `knowledge`; y que el criterio de
«motor equivalente» llega de S08 l. 65/144 sin enlace. Balance global de los
ADR (`B030`-`B045`): 25 anotaciones (`REV-2026-063`-`087`); patrones
repetidos: «Decisión» que resume la unidad con pérdidas en los seis ADR,
alternativas sin criterio ni estado, glosarios divergentes u homónimos,
inventarios de pendientes desfasados, base externa periférica en tres casos;
sin dueño antes de construir: caducidad y cierre de `handoff/v1`, sintaxis y
evaluador de condiciones de carga, runbooks de `Maintain`, campos del registro
de fuentes, derivación de frescura y curator, regla de migración de OKF y las
mediciones de mecanismos diferidos. Texto de la pasada anterior: 45 bloques
reales; análisis: 41 `reviewed`, 3 `stale`, 1 `pending`;
discusión: 44 `pending`, 1 `not_ready`; próxima lectura: `B045`
(`docs/adr/ADR-006-modelo-portable-de-conocimiento.md`, líneas 46-106 según
[blocks.md](blocks.md): «Decisión» l. 46 con nueve puntos l. 48-80,
«Consecuencias para el equipo» l. 82 con viñetas l. 84-91, «Puntos abiertos»
l. 93 con viñetas l. 95-99, «Referencias» l. 101 con viñetas l. 103-106, fin
del archivo l. 106; comprobado por lectura en `B044` el 2026-09-25, comprobar
al abrir). Pistas para `B045`: las del índice consolidado (sección
`B044`-`B045`: puntos 1-9 frente a S07, `REV-2026-059`/`060`/`061` hecho 5;
«Consecuencias» l. 84-85 y 88-89; «Puntos abiertos» l. 95-99,
`REV-2026-058` hecho 2 y `REV-2026-062` hecho 5; «Referencias» l. 103-106) y,
desde `B044`: punto 1 sin la regla de migración de S07 l. 41, riesgo que
`REV-2026-085` hecho 3 echa en falta también en las alternativas; punto 4
frente al homónimo `concept` (`REV-2026-086`); punto 9 como única fila que
dice «o un motor equivalente» (l. 43 no; pregunta 1 de `B044`);
«Consecuencias» l. 88-89 frente a las dos listas de l. 10 y 16-17 (pregunta
4); l. 95-97 como única edición posterior visible y receptor de la identidad
dual que matiza «Reutiliza identidad» (`REV-2026-085` hecho 4); l. 99 frente a
S11 l. 91/200 y S12 sin Hindsight (pregunta 3); l. 104-106 enlazan lo que el
«Contexto» no nombra. Detalle en [B044](blocks/B044.md). `B044` comprobó que
el rango 1-45 es exacto y fotografía coherente con 2026-09-21, sin glosario;
que las tres tablas de alternativas sólo tienen «Resultado» (único de los diez
ADR), con razones que repiten la decisión, sin los costes que la
investigación de OKF enlazada registra (fijar versión, cambios incompatibles
v0.1 → v0.2, implementación de prueba de concepto, ninguna adopción
documentada) y con la alternativa «Contrato propio mapeable» distinta de la
pregunta de S07 y de la investigación; que las preguntas 3-5 de S07 no tienen
alternativas y l. 33 procede de S06 l. 108 (`REV-2026-085`); que el homónimo
`concept` y la tolerancia de tipos desconocidos de OKF §4.1 («as generic
concepts») no tienen nota (`REV-2026-086`); que l. 10 y l. 16-17 dan dos
listas distintas y «presupuesto» no aparece en el ADR (`REV-2026-061` hecho
3, ampliado); que el «Contexto» sólo acusa la sesión 6 (`REV-2026-055` hecho
2, ampliado al ADR); que ADR-006 no contiene «registro», de modo que no
respalda lo que ADR-002 l. 142-143 le atribuye (`REV-2026-025`/`056`); que el
vocabulario de resultados es mixto y S08 l. 115 añade después la única fila
`rejected` (`REV-2026-058` hecho 3, ampliado); y que la «Posición de
Hindsight» es coherente con S08 y S11, sin realización en el MVP (S11 l. 90) y
sin receptor en S12, aunque el tracker de definición l. 233-234 lo anuncia.
Texto de la pasada anterior: la próxima lectura era `B044`
(`docs/adr/ADR-006-modelo-portable-de-conocimiento.md`, líneas 1-45 según
[blocks.md](blocks.md): título l. 1, fecha 2026-09-21 l. 3, «TL;DR» l. 6,
«Contexto» l. 12, «Alternativas evaluadas» l. 19, «Formas de taxonomía» l. 27,
«Posición de Hindsight» l. 38; «Decisión» l. 46; `B045` corregido a 46-106;
encabezados comprobados por búsqueda en `B043` el 2026-09-25, comprobar al
abrir). Pistas para `B044`: las del índice consolidado (sección
`B044`-`B045`: TL;DR l. 8-10 y «Contexto» l. 16-17, `REV-2026-054` hecho 2 y
`REV-2026-061` hecho 3; alternativas sin `rejected` en S07, `REV-2026-058`
hecho 3; Hindsight sin identificar, `REV-2026-057`; homónimo `concept`,
pregunta 3 de `B027`) y, desde `B043`: «Posición de Hindsight» frente a S08
l. 114/381-382 y S11 l. 91/200 (diferido hasta medir; medición posterior a la
construcción, como RTK/Context Mode); fecha 2026-09-21 frente a lo que ADR-005
l. 127 y 136 le atribuye. Detalle en [B043](blocks/B043.md). **ADR-005 queda
cerrado por análisis** (`B041`-`B043`; balance en [B043](blocks/B043.md)).
`B043` comprobó que el rango 116-139 es exacto; que la sintaxis y el
evaluador de las condiciones de carga, enviados a arquitectura por S06 l. 58,
S08 l. 111 y ADR-005 l. 120-121, no aparecen en S11, ADR-010 ni S12 (el único
evaluador de S11 es el de política, l. 144; S11 l. 223-224 no declara
decisiones pendientes), y que l. 118-119 marca resueltos en S08/ADR-007 la
identidad y los aliases del packet, cuando ésos sólo definen actor, ejecución
y conocimiento (S11 l. 166 da identidad y digest en el ledger)
(`REV-2026-084`); que cuatro de cinco puntos llevan marcas de S07/S08
posteriores a la fecha y ninguno de S11, aunque los cinco la nombran; que
l. 122-123 y la parte física de l. 126-128 fueron recibidos por S11/ADR-010 sin
marca; que RTK/Context Mode pasan al backlog de S12 con medición posterior a la
construcción (pregunta 5 de `B042`; `REV-2026-045` hecho 4 ampliado); que
l. 132 nombra S06 «Acuerdos canónicos» sin prevalencia (atenúa en parte
`REV-2026-083`); que l. 134-135 enlazan ADR-003/ADR-004 (pregunta 6 de `B041`);
que el campo handoff → packet no es pendiente de ADR-004 ni de ADR-005
(`REV-2026-046`); y que ADR-010 enlaza ADR-005, a diferencia de ADR-004. Texto
de la pasada anterior: la próxima lectura era `B043`
(`docs/adr/ADR-005-contrato-portable-de-contexto.md`, líneas 116-139 según
[blocks.md](blocks.md): «Puntos abiertos» l. 116, corregido en `B040`;
comprobar «Referencias» y fin del archivo al abrir; l. 116-121 leídas en
`B042` el 2026-09-25). Pistas para `B043`: las del índice consolidado (sección
`B041`-`B043`: «Puntos abiertos» l. 118-128 como inventario divergente y
editado, `REV-2026-045` hecho 4, `REV-2026-054`, `REV-2026-061` hecho 2;
«Referencias» l. 130-139 sin RTK/Context Mode; l. 137-139 ya contrastadas por
`B038`/`B041`, no repetir; campo handoff → packet frente a ADR-004 l. 122-123,
`REV-2026-046`) y, desde `B042`: si «Referencias» declara S06 como acuerdo
canónico (atenúa `REV-2026-083`); destino de las mediciones que
«Consecuencias» l. 113-114 espera (pregunta 5 de `B042`); pregunta 6 de `B041`
(enlazar ADR-003/ADR-004 en el «Contexto»); omisiones de la «Decisión» sin
punto abierto (`REV-2026-083` hecho 5: categorías de impacto, `check_after`,
regla capa → estado). Detalle en [B042](blocks/B042.md). `B042` comprobó que el
rango 61-115 es exacto; que los doce puntos siguen el orden de las filas de
S06 y coinciden en núcleo, taxonomía, orden de degradación, impactos, estados y
herramientas, pero que la «Decisión» no contiene la regla capa → estado de S06
l. 51/71-74, convierte los «límites y estimaciones» del adapter en «métricas»
(«límite» no aparece en ADR-005) y «Consecuencias» l. 111 lo presenta como
opcional, quita «únicamente» y la exclusión de la mera disponibilidad a las
condiciones de carga (S08 l. 363-364 cita «triggers ya aceptados por ADR-005»
con una tercera redacción), deja la parada sin agente, solicitud ni condición
de continuación y omite la cláusula de la caché, las categorías de impacto
`packet`, `check_after`, «u obsoleto» y «exige reconciliar» (`REV-2026-083`,
patrón de `REV-2026-065`/`069`/`074`/`075`/`079`, con más riesgo porque S07 y
S08 citan ADR-005 como fuente); que ningún hecho observable de la «Decisión»
verifica la parada (pregunta 3 de `B041`, en negativo); que la reutilización
del packet y la equivalencia entre proveedores no se resuelven en el rango
(preguntas 1 y 2 de `B041`, a `CT05`/`CT03`); que la latencia no se registra
como coste (pregunta 4 de `B041`, sin defecto demostrado); y que la
reconciliación es impersonal o de «la sesión» (l. 108), sin heredar
`REV-2026-080`, mientras l. 110 formula bien la frontera de ownership
(atenúa `REV-2026-082` hecho 3). Texto de la pasada anterior: la próxima
lectura era `B042`
(`docs/adr/ADR-005-contrato-portable-de-contexto.md`, líneas 61-115 según
[blocks.md](blocks.md): «Decisión» l. 61, «Consecuencias para el equipo»
l. 104, l. 115 en blanco; «Puntos abiertos» l. 116; encabezados comprobados
por búsqueda en `B040` y l. 61-64 leídas en `B041` el 2026-09-25, comprobar al
abrir). Pistas para `B042`: las del índice consolidado (sección
`B041`-`B043`: punto 1 sin `schema`, `REV-2026-049`; punto 3 más laxo; punto 4
`budget_profile`; punto 5 omite la solicitud de S06 l. 132-133; punto 6 sin
marcadores; punto 7 «exige un packet sucesor» frente a «Se invalida»,
`REV-2026-051` hecho 1; puntos 8, 10 y 11 reducen, `REV-2026-052` hecho 4;
punto 12 coincide) y, desde `B041`: reutilización del packet entre sesiones
(S06 l. 47) frente al packet inmutable por digest y por ejecución de S11
l. 166 y a ADR-004 l. 16 (pregunta 1); equivalencia entre proveedores que
promete l. 47-49 frente a límites y proyecciones del adapter (S06 l. 50; S11
l. 166; `REV-2026-048` hecho 3, `REV-2026-082` hecho 2; pregunta 2); «parada
verificable» del TL;DR frente al punto 10 (`REV-2026-047`, `052`; pregunta 3);
latencia de la carga bajo demanda en «Consecuencias» (pregunta 4); actor que
reconcilia y aporta límites (`REV-2026-080`, `082`). Detalle en
[B041](blocks/B041.md). `B041` comprobó que el rango 1-60 es exacto y
fotografía coherente con 2026-09-18; que l. 31-33 tiene respaldo en ADR-003
punto 5 (la sesión reconcilia antes de ejecutar) y no hereda `REV-2026-080`;
que l. 49-50 es un enunciado de alcance cierto a la fecha y resuelto por S11
l. 166; que la base externa de l. 54-59 es aquí pertinente y la fuente de
Anthropic confirma «contexto inicial breve» y referencias «just in time»; y
que el glosario y el «Contexto» divergen de otros ADR: «context packet» «para
una ejecución» en ADR-004 l. 16 frente a «tarea o capacidad» y reutilizable,
cuatro definiciones de «adapter» (la de l. 18 omite que aporta límites que
deciden `ready`/`invalid`), l. 29-30 atribuye a ADR-004 que el handoff
«conserva» ownership y lifecycle cuando ADR-004 punto 10 sólo los excluye del
packet y el owner pertenece a la tarea (ADR-003 l. 66; S11 l. 106), y la
alternativa «contexto libre por adapter» no tiene fila `rejected` en S06,
aunque las otras dos sí (l. 59-60) (`REV-2026-082`). Texto de la pasada
anterior: la próxima lectura era `B041`
(`docs/adr/ADR-005-contrato-portable-de-contexto.md`, líneas 1-60 según
[blocks.md](blocks.md): título l. 1, fecha 2026-09-18 l. 3, «TL;DR» l. 6,
«Glosario rápido» l. 12, «Contexto» l. 20, «Alternativas evaluadas» l. 35,
«Por qué descartamos las otras» l. 44, «Por qué la decisión (qué dice la
industria)» l. 52; «Decisión» l. 61; `B042` 61-115 y `B043` 116-139, este
último corregido en `B040`; comprobado por lectura y búsqueda en `B040` el
2026-09-25, comprobar al abrir). Pistas para `B041`: las del índice
consolidado (sección `B041`-`B043`: glosario l. 16 «prioridad»,
`REV-2026-048` hecho 4; l. 3-4 y 9 frente al cierre de S06, `REV-2026-053`
hecho 7; l. 31-32, ADR-003 como fuente; «Referencias» sin RTK/Context Mode,
`REV-2026-045` hecho 1) y, desde `B040`: l. 14 «separado del handoff» sin
campo que lo referencie (`REV-2026-046`); l. 29-31 «el handoff conserva
intención, autoridad, lifecycle y ownership» frente a S11 l. 106 (el work
tracker es autoridad de ownership) y a ADR-004 punto 10; l. 31-33 («ADR-003
exige reconciliar … antes de ejecutar») frente a `REV-2026-080`; alternativas
l. 37-42 «Descartada» sin fila `rejected` en S06 (patrón de
`REV-2026-067`/`071`/`078` hecho 4); l. 49-50 representación física
«para arquitectura», resuelta en S11 l. 166; l. 54-59 frente a l. 137-139,
las mismas tres URL que ADR-004, ya contrastadas por `B038` (no repetir
consultas; OpenAI HTTP 403). Detalle en [B040](blocks/B040.md). **ADR-004
queda cerrado por análisis** (`B038`-`B040`; balance en
[B040](blocks/B040.md)). `B040` comprobó que el rango 116-133 es exacto; que
los cuatro destinos de «Puntos abiertos» están cerrados: l. 120-123 marcados
con enlace después de la fecha 2026-09-16, l. 118-119 («→ sesión 11») recibido
por S11 l. 106/115 y ADR-010 punto 11 sin marca, y l. 124-125 («→ sesión 9»)
reenviado por S09 l. 45-46 a arquitectura y fijado por S11/ADR-010, de modo
que el único inventario de `handoff/v1` no deja nada abierto; que la
condición de `expires_at`/`due_at`, la «política de caducidad» (S05 l. 163,
única mención en `docs/`), el actor del rechazo sin receptor y las partes del
cierre coordinado no tienen receptor en S08-S12 ni en ADR-007-010, S12 no
contiene «handoff» y S11/ADR-010 no citan ADR-004 (ADR-010 enlaza seis ADR,
no éste) (`REV-2026-081`); que S11 l. 103/106/157 y S08 l. 99 reparten en
parte lo que ADR-004 l. 107-108 atribuye al orchestrator (matiz a
`REV-2026-080`); que «vencido» (l. 98) es `expired`, sujeto a una política sin
dueño (pregunta 1 de `B039`); y que l. 129 «Acuerdos canónicos» es la fórmula
común de ADR-002 a ADR-007, sin declarar prevalencia (`REV-2026-079`). Texto
de la pasada anterior: la próxima lectura era `B040`
(`docs/adr/ADR-004-contrato-portable-de-handoffs.md`, líneas 116-133 según
[blocks.md](blocks.md): «Puntos abiertos» l. 116 con cuatro viñetas
l. 118-125, «Referencias» l. 127 con cinco viñetas l. 129-133, fin del archivo
l. 133; comprobado por lectura en `B039` el 2026-09-25, comprobar al abrir).
Pistas para `B040`: las del índice consolidado (sección `B038`-`B040`:
`REV-2026-036` hecho 5 y l. 118-119 como único destino de la representación;
marcas de l. 120-123 posteriores a la fecha 2026-09-16; l. 124-125 «→ sesión
9» sin marca, `REV-2026-076` hecho 3; `REV-2026-044` hechos 3 y 6) y, desde
`B039`: ausencia en «Puntos abiertos» de la condición y la política de
caducidad (`REV-2026-039`), del actor de validación y reconciliación
(`REV-2026-040`, `080`), de las partes del cierre coordinado (`REV-2026-042`)
y del campo del resultado (`REV-2026-043`), omisiones silenciosas sin
destino; l. 129 «Acuerdos canónicos» como única declaración de subordinación
de la «Decisión» (`REV-2026-079`); pregunta 1 de `B039` (l. 98 «vencido» sin
`expires_at`) y pregunta 2 de `B038`; «Referencias» l. 130-133 ya contrastadas
por `B038` (no repetir consultas; OpenAI HTTP 403). Detalle en
[B039](blocks/B039.md). `B039` comprobó que el rango 61-115 es exacto; que los
once puntos siguen el orden de las filas de S05 y coinciden en categorías,
matriz y separación, pero que la «Decisión» no contiene la regla de caducidad
de S05 l. 62 («no extingue la obligación ni libera ownership»; ni
`expires_at`, ni `due_at`, ni «caduc» en el ADR, y el cierre de S05 tampoco
la nombra), omite la cancelación unilateral del emisor, el enlace al sucesor y
«antes de reemplazarse», la atribución de la aceptación a un actor concreto y
el contenido de los eventos, los mínimos de `completed` por tipo («atribuida a
la autoridad», «referencias afectadas», «seguimiento requerido»), la revisión
humana de la capa semántica, los efectos acotados del rechazo y de
verificación/consulta, y lo que «crece» tras emitir, y cambia «contenido
base» por «contenido» (`REV-2026-079`, patrón de `REV-2026-065`/`069`/`074`/
`075`, con riesgo menor porque el tracker de definición no presenta ADR-004
como fuente de un tema); que el punto 5 no pierde la regla de S05 l. 175
porque «sólo» ya la excluye; y que «Consecuencias» l. 107-108 amplía S05 al
asignar al orchestrator reconciliar «base, tracker, repositorio, autoridad y
conflictos antes de aplicar un handoff», con «aplicar» ambiguo entre la
operación atómica y el seguimiento y sin el reparto de autoridad de S04
l. 110/112 (`REV-2026-080`; matiza el «sin ampliar» de `B020`/`B021`). Texto
de la pasada anterior: la próxima lectura era `B039`
(`docs/adr/ADR-004-contrato-portable-de-handoffs.md`, líneas 61-115 según
[blocks.md](blocks.md): «Decisión» l. 61 con once puntos l. 63-101,
«Consecuencias para el equipo» l. 103 con viñetas l. 105-114, l. 115 en
blanco; «Puntos abiertos» l. 116; comprobado por lectura en `B038` el
2026-09-25, comprobar al abrir). Pistas para `B039`: las del índice
consolidado (sección `B038`-`B040`: punto 3 «tiempos» sin
`expires_at`/`due_at`, pregunta 5 de `B020` y `REV-2026-039`; punto 4 sin
actor, `REV-2026-040`; punto 5 frente a S05 l. 175; punto 7 frente a
l. 228-229; punto 9 sin tiempos, `REV-2026-043`, y «autoridad» inmutable,
`REV-2026-041`; punto 11, `REV-2026-042`; «Consecuencias» l. 107-112 frente a
`REV-2026-037` y pregunta 1 de `B021`) y, desde `B038`: punto 1 frente al
glosario l. 14 que excluye el mismo actor (`REV-2026-078` hecho 1); punto 9
frente al TL;DR «inmutable» (`REV-2026-078` hecho 2); preguntas 3 y 4 de
`B038` (quién reconcilia; «campos condicionales» sin condición). Detalle en
[B038](blocks/B038.md). `B038` comprobó que el rango 1-60 es exacto y
fotografía coherente con 2026-09-16; que l. 25 tiene respaldo; que las dos
fuentes de Anthropic confirman progreso persistente, estado verificable,
contexto explícito y recuperación, pero para un mismo harness entre ventanas
(sus «agentes» sólo difieren en el prompt), sin tratar aceptación, ownership
ni idempotencia, mientras la sección omite la primitiva «handoff» de OpenAI
(conversacional por defecto: ejemplo de la alternativa 1) y A2A 1.0.0
(2026-03-12), protocolo abierto con lifecycle, terminales que no se reinician,
seguimiento correlacionado y deduplicación, sin alternativa «adoptar o mapear
un protocolo interoperable» (`REV-2026-077`); y que el glosario limita el
handoff a «otro actor», el TL;DR llama «inmutable» al contrato, l. 31 retira
la «revisión humana» de S05 l. 217 (ADR-004 no contiene «human» ni
«persona») y la alternativa conversacional no tiene fila en S05, aunque las
otras dos sí son `rejected` (`REV-2026-078`). Texto de la pasada anterior: la
próxima lectura era `B038`
(`docs/adr/ADR-004-contrato-portable-de-handoffs.md`, líneas 1-60 según
[blocks.md](blocks.md): título l. 1, «TL;DR» l. 6, «Glosario rápido» l. 12,
«Contexto» l. 20, «Alternativas evaluadas» l. 35, «Por qué descartamos las
otras» l. 44, «Por qué la decisión (qué dice la industria)» l. 52; «Decisión»
l. 61; encabezados comprobados por búsqueda en `B037` el 2026-09-25, comprobar
al abrir). Pistas para `B038`: las del índice consolidado (sección
`B038`-`B040`) y, desde `B037`: fecha 2026-09-16 frente a ediciones
posteriores (l. 120-123 marcados, que caen en `B040`; patrón de
`REV-2026-066`/`070`/`076`); glosario l. 12-19 frente a S05 (patrón de
`REV-2026-063`/`073`); alternativas l. 35-51 sin fila `rejected` en S05 (patrón
de `REV-2026-067`/`071`); l. 25 («preservar el ownership único de ADR-003»);
«Por qué la decisión» l. 52-60 frente a las URL de «Referencias» l. 131-133
(OpenAI HTTP 403: no insistir; Anthropic comprobadas en `B011`/`B013`);
`REV-2026-036` hecho 5 y pregunta 5 de `B020`. Detalle en
[B037](blocks/B037.md). **ADR-003 queda cerrado por análisis**
(`B035`-`B037`; balance en [B037](blocks/B037.md)). `B037` comprobó que el
rango 99-132 es exacto; que las «Consecuencias» son coherentes con S04 salvo
la autorización por incremento sin conciliar con ADR-001 punto 2 (ya en
`REV-2026-074` hecho 5) y el coste sin destino propio (`REV-2026-071` hecho
5); y que siete de los ocho destinos de «Detalles diferidos» están cerrados
con una sola marca sin enlace (l. 117), que «runbooks concretos → sesión 9»
(l. 118) no fue recibido por S09 ni por ninguna sesión o ADR posterior
(«runbook» sólo aparece en ADR-003, S04 y la investigación del playbook), que
la política de riesgo resuelta en S09/ADR-008 no se enlaza, que l. 114 remite a
S05 rutas reenviadas a S11 y que «Referencias» no enlaza ADR-004-ADR-010 aunque
seis de ellos enlazan ADR-003 (`REV-2026-076`, patrón de `REV-2026-066`/`070`).
Texto de la pasada anterior: la próxima lectura era `B037`
(`docs/adr/ADR-003-ciclo-operativo-y-coordinacion.md`, líneas 99-132 según
[blocks.md](blocks.md): «Consecuencias» l. 99, «Detalles diferidos» l. 112,
«Referencias» l. 123, fin del archivo l. 132; comprobado por `B036` el
2026-09-25, comprobar al abrir). Pistas para `B037`: «Consecuencias» l. 104
(worktrees, S04 l. 114), l. 105 (autorización por incremento frente a la
confirmación única de ADR-001 punto 2: `REV-2026-074` hecho 5), l. 106
(pregunta 3 de `B009`), l. 108 (recuperación, `REV-2026-075` hecho 3) y
l. 109-110 (coste sin medida, `REV-2026-071` hecho 5); «Detalles diferidos»
l. 112-121 como inventario divergente (`REV-2026-028`, `035`; l. 117 editado
tras la fecha; S04 l. 248, 249, 253, OpenSpec/Spec Kit, «pasos internos por
concretar» de S04 l. 74 y umbral temporal de l. 109; destinos cerrados sin
marca, patrón de `REV-2026-066`/`070`; l. 118 «política de riesgo → sesión 9»
como único destino de la autoridad sobre alto riesgo que la «Decisión» omite,
`REV-2026-074`); «Referencias» l. 125-132 sin ADR-004 ni posteriores y sin las
fuentes externas de l. 31-33 (`REV-2026-072`); auditoría (`REV-2026-034`).
Detalle en [B036](blocks/B036.md). `B036` comprobó que el rango 44-98 es exacto
(doce puntos) y que la «Decisión» resume S04 con pérdidas que amplían el margen
del agente: sólo nombra como intervención humana la autorización de `build`, la
aceptación y (sin «humana») la autorización de `deploy` sensible, omite los
supuestos de consulta de S04 l. 85 y 88, el retorno a `plan` de l. 76, la
reserva de autoridad de l. 110 y la revisión humana según riesgo de l. 104 y
112 («persona» no aparece en el ADR), y no concilia la autorización por
incremento con la confirmación única de ADR-001 punto 2 (`REV-2026-074`); omite
además la regla por defecto del verifier y la exclusión del implementador, las
condiciones de los runbooks, el estado ante duda de recuperación, la semántica
de `waiting`/`blocked`, el tipo de consulta y el registro de la respuesta, y los
destinos del retorno por hallazgo (`REV-2026-075`; matiz a `REV-2026-033`
hecho 1). Confirmó en la «Decisión» `REV-2026-027` hecho 8, `029`, `073`,
`014` y `071` hecho 4; `REV-2026-022` no afecta al ADR y `030` es coherente.
Texto de la pasada anterior: la próxima lectura era `B036`
(`docs/adr/ADR-003-ciclo-operativo-y-coordinacion.md`, líneas 44-98 según
[blocks.md](blocks.md): «Decisión» l. 44 con doce puntos; «Consecuencias»
l. 99; comprobado por `B035` el 2026-09-25, comprobar al abrir). Pistas para
`B036`: punto 3 (l. 53-56) frente a S04 l. 279-280 y `REV-2026-033`; punto 4
frente a S04 l. 95 (`REV-2026-027`); punto 7 frente a la pregunta 3 de
`B009`; «validación relevante» (pregunta 6 de `B010`); punto 11 (l. 88-91)
sin la enumeración de S04 l. 298; punto 12 (l. 95, «crear drafts») con la
pregunta 7 de `B014`; puntos 1-2 frente a la autorización que presupone el
glosario y al «ciclo» con `stage`/`status` (`REV-2026-073`; preguntas 2 y 3 de
`B035`); ciclo colaborativo ausente (`REV-2026-029`); si la «Decisión» admite
gates del proyecto (`REV-2026-071` hecho 4, `REV-2026-014`, pregunta 1 de
`B035`); lo que S04 aceptó de S03 (l. 109, 112; `REV-2026-022`); distribución
de modelos ausente (`REV-2026-030`). Detalle en [B035](blocks/B035.md). `B035`
comprobó que el rango 1-43 es exacto y fotografía coherente con 2026-09-15;
que las alternativas usan «No elegida» y «No elegida como regla universal»,
se anclan en justificaciones de S04 y en la investigación del orchestrator
pero sin fila `rejected`, no recogen las opciones que S04 descarta
(`Maintain` como etapa, autorización por tarea o única, estados combinados,
hooks, worktrees) ni ninguna de ownership, y descartan la «aprobación por
etapa» sin conciliarla con los puntos de intervención del proyecto de S01
(`REV-2026-071`); que l. 31-33 atribuye a Microsoft (y a OpenAI, sin
verificar) una advertencia sobre coste multiagente que la investigación y la
página citada no contienen, mientras Google y Anthropic la confirman
(`REV-2026-072`; pregunta 5 de `B013` respondida en parte); y que el glosario
define el incremento como «autorizado» aunque en S04 existe en `plan`/`design`
antes de la autorización de `build` y como `draft` de `Maintain`, y no define
«el ciclo» al que S04 da `stage` y `status` (`REV-2026-073`). Texto de la
pasada anterior: la próxima lectura era `B035`
(`docs/adr/ADR-003-ciclo-operativo-y-coordinacion.md`, líneas 1-43 según
[blocks.md](blocks.md): título l. 1, «TL;DR» l. 6, «Glosario rápido» l. 12,
«Contexto» l. 21, «Alternativas evaluadas» l. 35, «Decisión» l. 44;
«Consecuencias» l. 99, «Detalles diferidos» l. 112, «Referencias» l. 123, fin
del archivo l. 132; encabezados comprobados por búsqueda en `B034` el
2026-09-25, comprobar al abrir). Pistas para `B035`: las del índice
consolidado (sección `B035`-`B037`: alternativas l. 39-41 con resultado «No
elegida», patrón de `REV-2026-067` hecho 1; glosario frente a S01/S04, patrón
de `REV-2026-063`; fecha 2026-09-15 frente a ediciones posteriores, patrón de
`REV-2026-066`/`070`; `REV-2026-021`/`022`; preguntas 5 y 7 de `B013`, 7 de
`B014`, 6 de `B010`, 3 de `B009`); para `B037`, además, «Detalles diferidos»
l. 112-121 con destinos cerrados sin marca y «Referencias» l. 125-132 sin
ADR-004 ni posteriores (pregunta 6 de `B034`). Detalle en
[B034](blocks/B034.md). **ADR-002 queda cerrado por análisis**
(`B032`-`B034`; balance en [B034](blocks/B034.md)). `B034` comprobó que el
rango 134-159 es exacto y que seis de los siete puntos abiertos tienen todos
sus destinos cerrados sin marca completa: l. 136 envía la representación de
handoffs a S05, que la reenvió a S11 (ADR-004 l. 118); l. 145 y el «queda por
concretar» de l. 111 están decididos en S08 l. 93, 143, 264-268 y S09 l. 58; la
actualización de skills de S03 l. 238 no figura y S10 l. 83 la decidió;
l. 142-144 omite a S11, que ubicó el registro de fuentes (l. 170) sin fijar sus
campos; «Referencias» no enlaza ADR-004, 005, 007, 008, 009 ni 010
(`REV-2026-070`, patrón de `REV-2026-066`); y que l. 147 no coincide con S03
l. 240 (pierde activación y «efectividad del modelo de información»: matiz a
`REV-2026-025` hecho 2). Texto de la pasada anterior: la próxima lectura era `B034`
(`docs/adr/ADR-002-fuentes-canonicas-y-conocimiento.md`, líneas 134-159 según
[blocks.md](blocks.md): «Puntos abiertos» l. 134 con siete viñetas
l. 136-147, «Referencias» l. 149 con viñetas l. 151-159; comprobado por
`B033` el 2026-09-25, comprobar al abrir). Pistas para `B034`:
`REV-2026-025` completo (inventario frente a S03 l. 234-240); `REV-2026-056`
hecho 3 y pregunta 4 de `B012` (l. 142-144); l. 145 frente a S03 l. 238 y al
punto 7 (l. 111: permisos y controles del proveedor sin destino; S08 l. 143 en
parte; S09 sin mención de skills; pregunta 6 de `B033`); l. 147 sin la
«efectividad del modelo de información» de S03 l. 240 ni el coste del
conocimiento de l. 129-130 (pregunta 2 de `B033`; matiza `REV-2026-025` hecho
2; S12 pregunta 7 como posible destino); guía de activación de Agent Skills
ausente en l. 159 (pregunta 4 de `B032`); l. 151 «Acuerdos canónicos» frente
al tracker de definición l. 319 (pregunta 4 de `B033`, `REV-2026-069` hecho
6); l. 154 enlaza las tres investigaciones (`REV-2026-021`, `REV-2026-055`
hecho 3); marcas de resolución (patrón de `REV-2026-066`); l. 157 OpenAI
(HTTP 403, no insistir). Detalle en [B033](blocks/B033.md). `B033` comprobó
que el rango 72-133 es exacto, que la tabla repite las once capas de S03 y la
regla de discrepancias sin divergencia de literalidad, y que la «Decisión»
resume S03 con pérdidas: los puntos 3 y 5 retiran «inequívoco», la detección
de referencias rotas y «conservando la referencia» y generalizan «resumen» a
«derivado»; la fila «Evidencia» omite las revisiones humanas; la fila «ADRs»
omite «referenciadas desde las especificaciones»; el punto 8 retira
«confirmado»/«relevante» y amplía «Bloqueo» a «estado»; las remisiones de S03
l. 78-79, 100-101 y 135 se funden en l. 119 sin sesión y l. 111 embebe un
aplazamiento sin destino (`REV-2026-069`, mismo patrón que `REV-2026-065`);
que l. 118-119 es fotografía frente a S07 l. 40-41 y a l. 138-144 (pregunta
1), y que l. 93-94 (RAG/MCP) es un principio coherente con S03 l. 140-149.
Texto de la pasada anterior: la próxima lectura era `B033`
(`docs/adr/ADR-002-fuentes-canonicas-y-conocimiento.md`, líneas 72-133 según
[blocks.md](blocks.md): «Decisión» l. 72 con tabla l. 76-88 y ocho puntos
l. 74-116, párrafo l. 118-119, «Consecuencias para el equipo» l. 121 con
viñetas l. 123-132; «Puntos abiertos» l. 134; comprobado por `B032` el
2026-09-25, comprobar al abrir). Pistas para `B033`: tabla frente a la
distribución de S03 l. 51-63 (`REV-2026-025` hecho 1); punto 2 frente a S03
l. 35-36 y `REV-2026-018`/`019`; punto 3 frente a S03 l. 38, 66-68, 129-130 y
`REV-2026-017` (con `REV-2026-068` hecho 3: la investigación reconoce que no
hay jerarquía universal); punto 4 frente a S03 l. 39, 71-79; punto 5 frente a
S03 l. 120-135 (`REV-2026-056` hecho 1); punto 6 frente a S03 l. 105-116;
punto 7 («la conciliación con controles del proveedor queda por concretar»,
sin fila en S03); punto 8 frente a S03 l. 91-101; l. 93-94 RAG/MCP como
exclusión embebida (`REV-2026-067` hecho 3); l. 118-119 frente a S07 l. 40-41
(pregunta 1 de `B032`); «Consecuencias» l. 129-130 (pregunta 3 de `B032` y
de `B006`) y l. 131-132 (pregunta 6 de `B032`; `REV-2026-005`, `022`);
«Fuente canónica» y l. 78-79 frente a `REV-2026-001` (pregunta 2 de `B032`).
Detalle en [B032](blocks/B032.md). `B032` comprobó que el rango 1-71 es
exacto, que el glosario no diverge de S01/S03/ADR-001, que l. 1-71 son
fotografía coherente con 2026-09-14 (l. 18 y 22 frente a S07 l. 40-41), que
las alternativas concluyen «Insuficiente» y «No elegida», evalúan una opción
(concentrar la definición en el tracker) sin fila en S03 —cuyas catorce
decisiones son `accepted`— y omiten las seis opciones que S03 descarta en sus
justificaciones (`REV-2026-067`), y que las cuatro bases externas de l. 61-69
se confirman pero respaldan prácticas periféricas, mientras la investigación
de fuentes que S03 presenta como evidencia no se nombra en l. 40-42 ni
l. 59-70 y su límite «no existe una jerarquía universal» no llega al ADR
(`REV-2026-068`). Texto de la pasada anterior: la próxima lectura era `B032`
(`docs/adr/ADR-002-fuentes-canonicas-y-conocimiento.md`, líneas 1-71 según
[blocks.md](blocks.md): título l. 1, «**Fecha:** 2026-09-14» l. 3, «TL;DR»
l. 6, «Glosario rápido» l. 12, «Contexto» l. 20, «Alternativas evaluadas»
l. 44, «Por qué descartamos las otras» l. 52, «Por qué la decisión (qué dice
la industria)» l. 59, «Decisión» l. 72, fin del archivo l. 159; encabezados
comprobados por búsqueda en `B031` el 2026-09-25, comprobar al abrir).
Pistas para `B032`: glosario l. 12-19 frente a S01, S03 y ADR-001 l. 14-17
(patrón de `REV-2026-063`); alternativas l. 44-58 frente a filas `rejected`
de S03 (patrón de `REV-2026-064` hecho 5 y `REV-2026-058` hecho 3); fotografía
frente a edición posterior (patrón de `REV-2026-066`; `REV-2026-025`); base
externa l. 59-71 frente a «Referencias» l. 155-159 (W3C DWBP, W3C PROV,
Anthropic «Effective harnesses», Agent Skills; consultar por pregunta
concreta; OpenAI «Harness engineering» HTTP 403, no insistir; `REV-2026-021`);
`REV-2026-056` hecho 3; preguntas 4 y 5 de `B012`; pregunta 3 de `B006`.
Detalle en [B031](blocks/B031.md). **ADR-001 queda cerrado por análisis**
(`B030`-`B031`; balance en [B031](blocks/B031.md)). `B031` comprobó que el
rango 70-127 es exacto, que la «Decisión» coincide en sustancia con las
filas `accepted` de S02 pero omite que T800R detecta y señala el riesgo,
estrecha la no sustitución a «Las validaciones de los agentes», sustituye
«Prepara el harness» por «su incorporación», retira permisos y controles del
proveedor y deja en participio la validación de referencias, mientras se
declara «límite transversal» y llama a S02 «fuente canónica»
(`REV-2026-065`); que el tracker de definición asigna la autonomía a ADR-001
(l. 318) aunque el ADR no refleja ni enlaza los gates de S04 (l. 81, 85-87) y
S09/ADR-008 (l. 83-86), marca sólo uno de seis destinos cerrados y deja l. 119
resuelto en S09 sin marca ni enlace (`REV-2026-066`); la pregunta 1 de `B008`
queda respondida sin hallazgo (S02 l. 86-87) y la 3 y la 4 respondidas.
Texto de la pasada anterior: la próxima lectura era `B031`
(`docs/adr/ADR-001-autonomia-y-responsabilidades.md`, líneas 70-127 según
[blocks.md](blocks.md): «Decisión» l. 70, «Consecuencias para el equipo»
l. 101, «Puntos abiertos» l. 113, «Referencias» l. 123, fin del archivo
l. 127; comprobado por `B030` el 2026-09-25). `B030`
comprobó que el rango 1-69 es exacto, que las fechas de ADR-001 y S02
coinciden y l. 1-69 no muestran ediciones posteriores (fotografía en l. 17 y
38-39 frente a l. 116 actualizada: pregunta 1 de `B030`), que el «Glosario
rápido» redefine «harness» y «repositorio consumidor» frente a S01 l. 161/170
y que «contrato de trabajo» (obligación `accepted` de S02 l. 29) sólo se
define en el ADR y no llega a ningún artefacto (`REV-2026-063`), que la tabla
de alternativas sustituye «coordinación» por «autonomía», registra que la
opción aceptada es la más costosa en adopción y portabilidad sin anclaje en
los objetivos de S01, no fija criterio de fracaso y deja la opción 3 «No
elegida como límite» sin fila en S02 («el alcance 2» de S02 l. 31 sin
enumeración) (`REV-2026-064`), y que NIST AI RMF 1.0 confirma l. 60-64 (versión
1.0 vigente, revisión anunciada). Pistas para `B031`: preguntas 1 y 4 de
`B008` (l. 82; l. 88-89 «validaciones de los agentes» frente a S02 l. 76-77);
«Decisión» frente a S02 l. 29-40 y al glosario (punto 3 «coordina»: pregunta
4 de `B030`; punto 8 frente a S02 l. 37, 58-59); «Puntos abiertos» l. 115-121
frente a S02 l. 104-107 (`REV-2026-015`; l. 116 editado tras la fecha; l. 117
«contratos … → sesión 5» frente a `REV-2026-063` hecho 3; l. 119 riesgo → S09,
pregunta 3 de `B008`; l. 120 → «sesiones 3, 7 y 10», `REV-2026-056` hecho 2 y
`REV-2026-023`; l. 121 → 11 y 12 frente a `REV-2026-064` hecho 4, pregunta 6
de `B030`); «Consecuencias» l. 106 «aún no está cuantificado» (pregunta 3 de
`B006`); «Referencias» l. 125-127 (DOI de NIST resuelve). Detalle en
[B030](blocks/B030.md). S07 queda cerrada por análisis
(`B027`-`B029`; balance en [B029](blocks/B029.md)); con ella terminan los
bloques de sesiones del inventario (`B001`-`B029`; `B001`-`B003` siguen
`stale`). Siguen los bloques de ADR (`B030`-`B045`) y después los cruces
`CT01`-`CT07`. `B029` comprobó que el rango 109-123 es exacto y que el
criterio de salida está en l. 28-34 (cubierto por `B027`), que el cierre
amplía el criterio con elementos que tienen fila y omite «preparado el
contrato lógico para portabilidad», que declara «explícitos» frescura,
bundles, curator, indexación, sección `knowledge` y procedencia con
`REV-2026-056` hecho 3 y `REV-2026-059`-`061` abiertas, que rotula la
identidad portable (pregunta 3 de la sesión) como «diferimiento
tecnológico», que no declara la cobertura del área l. 119 (`REV-2026-005`
confirmada para toda S07), que enlaza ADR-006 en presente y sólo como
decisión mientras unidad, ADR y tracker de definición (l. 392-394) dan tres
estados a los mismos diferimientos, que no nombra las remisiones recibidas
ni la validación de referencias, y que es la primera sesión cuyo cierre (y
tracker) no afirma no bloqueo ni auditoría (`REV-2026-062`); la pregunta 4
de `B006` queda respondida para todo el inventario (el patrón se repite en
S01-S07) y `REV-2026-017`-`020` quedan sin salida tras toda S07.

**Pistas reunidas por destino para los bloques de ADR y los cruces** (índice
consolidado al cerrar S07; el detalle y la procedencia siguen en el texto de
«Totales» que se conserva a continuación y en cada checkpoint):

- `B030`-`B031` (ADR-001): preguntas 1 y 4 de `B008`; `REV-2026-001`
  (enlace desde el índice); `REV-2026-015` (inventario de pendientes S02 frente
  a ADR-001; «Puntos abiertos» l. 116 «resuelto en sesión 4 y ADR-003»
  editado tras la fecha 2026-09-14); l. 119 riesgo → S09 (pregunta 3 de
  `B008`; S04 l. 104-106); l. 120 validación de referencias → «sesiones 3, 7
  y 10» sin fila en S03 ni S07 (`REV-2026-023`, `REV-2026-056` hecho 2,
  límite cerrado para S07; S10 por búsqueda sin coincidencia); l. 121 →
  sesiones 11 y 12; alternativas l. 41-57 frente a filas `rejected` de S02
  (pregunta 5 de `B014`); l. 58-69 como base externa (`REV-2026-005`,
  `REV-2026-021`; consultar fuentes por pregunta concreta); detalle en
  `B029` («Pistas para cruces»). **`B030` hecho (2026-09-25):** lo que cae en
  l. 1-69 quedó respondido en [B030](blocks/B030.md), pistas (a)-(h), y en
  `REV-2026-063`/`064`; lo que queda para `B031` está en «Totales» y en
  «Pistas para cruces» de `B030`. **`B031` hecho (2026-09-25):** lo que cae en
  l. 70-127 quedó respondido en [B031](blocks/B031.md), pistas (a)-(m), y en
  `REV-2026-065`/`066`; balance de ADR-001 en el mismo checkpoint.
- `B032`-`B034` (ADR-002): `REV-2026-025` («Puntos abiertos» l. 138-144
  frente a «Detalles aplazados» de S03; esquema del registro de fuentes
  declarado resuelto como «esquema de conocimiento»: `REV-2026-056` hecho 3
  lo confirma desde S07); preguntas 4 y 5 de `B012`; pregunta 3 de `B006`
  (cuantificaciones diferidas); «Decisión» coincide con S03, incluida la
  regla de discrepancias (`B012`); l. 154 enlaza la investigación de OKF que
  S07 no enlaza (`REV-2026-055` hecho 3); `REV-2026-023`. Desde `B031`:
  patrones de `REV-2026-063` (glosario), `064` hecho 5 (alternativas sin
  estado) y `066` (fotografía frente a edición; marcas de resolución).
  **`B032` hecho (2026-09-25):** lo que cae en l. 1-71 quedó respondido en
  [B032](blocks/B032.md), pistas (a)-(h), y en `REV-2026-067`/`068`; lo que
  queda para `B033` y `B034` está en «Totales» y en «Pistas para cruces» de
  `B032` (para `B034`: `REV-2026-025`, `056` hecho 3, pregunta 4 de `B012`,
  guía de activación de Agent Skills ausente en l. 159). **`B033` hecho
  (2026-09-25):** lo que cae en l. 72-133 quedó respondido en
  [B033](blocks/B033.md), pistas (a)-(l), y en `REV-2026-069`; lo que queda
  para `B034` está en «Totales» y en «Pistas para cruces» de `B033` (l. 145
  frente a S03 l. 238 y el punto 7; l. 147 sin coste del conocimiento; l. 151
  frente al tracker de definición l. 319). **`B034` hecho (2026-09-25):** lo
  que cae en l. 134-159 quedó respondido en [B034](blocks/B034.md), pistas
  (a)-(i), y en `REV-2026-070`; balance de ADR-002 en el mismo checkpoint.
- `B035`-`B037` (ADR-003): punto 3 (l. 53-56) repite S04 l. 279-280 sin
  resolver `REV-2026-033`; punto 4 más laxo que S04 l. 95 (`REV-2026-027`);
  punto 11 (l. 88-91) sin la enumeración de tipos de l. 298; «Detalles
  diferidos» l. 112-121 como inventario divergente (`REV-2026-028`,
  `REV-2026-035`; l. 117 editado tras la fecha; no recoge S04 l. 248, 249,
  253 ni OpenSpec/Spec Kit: pregunta 6 de `B017`); l. 116 remisión a S07 sin
  acuse (`REV-2026-055` hecho 2); no recoge el ciclo colaborativo (pregunta 6
  de `B015`) ni la distribución de modelos (`REV-2026-030`) ni la auditoría
  (`REV-2026-034`); `REV-2026-021`/`022`; preguntas 5 y 7 de `B013`, 7 de
  `B014`, 6 de `B010`, 3 de `B009`; l. 118 frente a la pregunta 3 de `B014`;
  alternativas l. 39-41 con resultado «No elegida» (patrón de `REV-2026-067`
  hecho 1, desde `B032`). Desde `B034`: «Detalles diferidos» con destinos
  cerrados sin marca y «Referencias» l. 125-132 sin ADR-004 ni posteriores
  (patrón de `REV-2026-066`/`070`; pregunta 6 de `B034`). **`B035` hecho
  (2026-09-25):** lo que cae en l. 1-43 quedó respondido en
  [B035](blocks/B035.md), pistas (a)-(i), y en `REV-2026-071`/`072`/`073`; lo
  que queda para `B036` y `B037` está en «Totales» y en «Pistas para cruces» de
  `B035` (para `B037`, además: «Referencias» sin las fuentes externas de
  l. 31-33). **`B036` hecho (2026-09-25):** lo que cae en l. 44-98 quedó
  respondido en [B036](blocks/B036.md), pistas (a)-(m) y mapa fila a punto, y
  en `REV-2026-074`/`075`; lo que queda para `B037` está en «Totales» y en
  «Pistas para cruces» de `B036`. **`B037` hecho (2026-09-25):** lo que cae en
  l. 99-132 quedó respondido en [B037](blocks/B037.md), pistas (a)-(j), y en
  `REV-2026-076`; balance de ADR-003 en el mismo checkpoint.
- `B038`-`B040` (ADR-004): «Puntos abiertos» l. 116-125 como único inventario
  con destinos (`REV-2026-036` hecho 5; l. 120-123 editados tras la fecha;
  l. 120-121 identidad → S08 y l. 124-125 permisos → S09 como únicos destinos
  de `REV-2026-038` (a) y de la pregunta 5 de `B020`); «Por qué la decisión»
  l. 52-60 y referencias l. 131 y siguientes no enlazadas desde S05;
  «Consecuencias» l. 107-112 frente a `REV-2026-037` (l. 107-108 orchestrator
  como único actor: pregunta 1 de `B021`); punto 3 «tiempos» sin
  `expires_at`/`due_at`; punto 4 sin actor; punto 5 omite S05 l. 175; punto
  7 omite l. 228-229; punto 9 inmutables sin tiempos (`REV-2026-043`) y
  «autoridad» inmutable; punto 11 (`REV-2026-042`); l. 42 «campos
  condicionales»; `REV-2026-044` hechos 3 y 6. Desde `B037`: l. 124-125
  («controles ejecutables … → sesión 9») repite sin marca el destino de ADR-003
  l. 118 (`REV-2026-076` hecho 3); pistas para `B038` en «Totales».
  **`B038` hecho (2026-09-25):** lo que cae en l. 1-60 quedó respondido en
  [B038](blocks/B038.md), pistas (a)-(h), y en `REV-2026-077`/`078`
  (referencias l. 131-133 ya contrastadas: no repetir consultas en `B040`); lo
  que queda para `B039` y `B040` está en «Totales» y en «Pistas para cruces»
  de `B038`.
  **`B039` hecho (2026-09-25):** lo que cae en l. 61-115 quedó respondido en
  [B039](blocks/B039.md), pistas (a)-(k), y en `REV-2026-079`/`080`; lo que
  queda para `B040` está en «Totales» y en «Pistas para cruces» de `B039`.
  **`B040` hecho (2026-09-25):** lo que cae en l. 116-133 quedó respondido en
  [B040](blocks/B040.md), pistas (a)-(i), y en `REV-2026-081`; balance de
  ADR-004 en el mismo checkpoint.
- `B041`-`B043` (ADR-005): glosario l. 16 («prioridad»: `REV-2026-048` hecho
  4); punto 1 sin `schema` (`REV-2026-049`); punto 3 más laxo; punto 4
  `budget_profile`; punto 5 omite la solicitud de l. 132-133; punto 6 sin
  marcadores; punto 7 «exige un packet sucesor» frente a «Se invalida»
  (`REV-2026-051` hecho 1); puntos 8, 10 y 11 reducen (`REV-2026-052` hecho
  4); punto 12 coincide; l. 96 (`REV-2026-047`); sin campo handoff → packet
  (`REV-2026-046` hecho 5); l. 3-4 y 9 frente al cierre de S06 en futuro
  (`REV-2026-053` hecho 7); l. 31-32 (ADR-003 como fuente); «Puntos
  abiertos» l. 118-128 como inventario divergente y editado
  (`REV-2026-045` hecho 4, `REV-2026-054`; l. 126-128 «resuelto en sesión 7»:
  `REV-2026-061` hecho 2); «Referencias» l. 130-139 sin RTK/Context Mode
  (`REV-2026-045` hecho 1) y l. 137-139 no enlazadas desde S06 (OpenAI HTTP
  403 en `B011`/`B017`). Desde `B040`: localizador de `B043` corregido a
  116-139; l. 29-31 («el handoff conserva … ownership») frente a S11 l. 106;
  l. 49-50 frente a S11 l. 166; l. 137-139 son las mismas URL que ADR-004 ya
  contrastadas por `B038` (no repetir); campo handoff → packet
  (`REV-2026-046`) frente a la marca «resuelto» de ADR-004 l. 122-123.
  **`B041` hecho (2026-09-25):** lo que cae en l. 1-60 quedó respondido en
  [B041](blocks/B041.md), pistas (a)-(k), y en `REV-2026-082`; lo que queda
  para `B042` y `B043` está en «Totales» y en «Pistas para cruces» de `B041`.
  **`B042` hecho (2026-09-25):** lo que cae en l. 61-115 quedó respondido en
  [B042](blocks/B042.md), pistas (a)-(o), y en `REV-2026-083`; lo que queda
  para `B043` está en «Totales» y en «Pistas para cruces» de `B042`.
  **`B043` hecho (2026-09-25):** lo que cae en l. 116-139 quedó respondido en
  [B043](blocks/B043.md), pistas (a)-(m), y en `REV-2026-084`; balance de
  ADR-005 en el mismo checkpoint.
- `B044`-`B045` (ADR-006): TL;DR l. 8-10 y «Contexto» l. 16-17
  (`REV-2026-054` hecho 2; `REV-2026-061` hecho 3: tríada distinta atribuida
  a la sesión 6); alternativas l. 24-25, 32-33, 42, 44 sin `rejected` en S07
  (`REV-2026-058` hecho 3); Hindsight sin identificación (`REV-2026-057`);
  homónimo `concept` (pregunta 3 de `B027`); «Decisión»: punto 1 sin la
  regla de migración (l. 41), sin punto para l. 43 ni 47, punto 2 sin
  «comprobar versión y aplicabilidad», punto 3 sin definiciones de l. 88-91
  ni artefacto del bundle (`REV-2026-060` hecho 4), punto 4 sin «No
  sustituye», punto 5 sin «alcance y trazabilidad», punto 6 sin
  conciliación de marcadores, reemplazo de `deprecated`, «por separado» ni
  derivación (`REV-2026-059`), punto 8 sin campos del índice, punto 9 sin
  «sobre fuentes autorizadas» ni «contrato común»; «Consecuencias» l. 84-85
  (pregunta 4 de `B029`) y l. 88-89 (`REV-2026-061` hecho 5); «Puntos
  abiertos» l. 95-99 (`REV-2026-058` hecho 2; `REV-2026-062` hecho 5: dos
  puntos sin marca frente al tracker l. 392-394); «Referencias» l. 103-106.
  Desde `B043`: localizador de `B045` corregido a 46-106; «Posición de
  Hindsight» (l. 38-45) frente a S08 l. 114/381-382 y S11 l. 91/200 (diferido
  hasta medir, medición posterior a la construcción); l. 98-99 con destino S11
  sin marca, como ADR-005 (`REV-2026-084` hecho 3).
  **`B044` hecho (2026-09-25):** lo que cae en l. 1-45 quedó respondido en
  [B044](blocks/B044.md), pistas (a)-(j), y en `REV-2026-085`/`086`; lo que
  queda para `B045` está en «Totales» y en «Pistas para cruces» de `B044`.
  **`B045` hecho (2026-09-25):** lo que cae en l. 46-106 quedó respondido en
  [B045](blocks/B045.md), pistas (a)-(k), y en `REV-2026-087`; balance de
  ADR-006, balance global de los ADR y estado global en el mismo checkpoint.
  Inventario de bloques completo (salvo `B001`-`B003` `stale`).
- `CT01`: `REV-2026-017`-`REV-2026-020` sin salida tras S03-S07 (`017`
  parcial por S07 l. 49/71; `020` parcial por S04 l. 298 y `consultation` de
  S05); `REV-2026-019`; «actor autorizado»/autorizador sin criterio
  (`REV-2026-040`, `047`, `049` hecho 4; S06 l. 46/52/116/184/186; S07 l. 45,
  50); `REV-2026-052` hecho 2; `REV-2026-059`/`060`; S07 l. 68, 85-86, 89-90,
  101-102; preguntas 1-3 y 6 de `B028`, 2 y 5 de `B027`, 5 de `B025`, 2, 4 y
  6 de `B012`, 2, 5 y 7 de `B010`; indisponibilidad de la fuente canónica
  (`B009`); `REV-2026-068` hecho 3 (límite «sin jerarquía universal» de la
  investigación de fuentes) y pregunta 5 de `B032`; `REV-2026-069` hechos 1 y
  4 (corrección autónoma de derivados sin «inequívoco»; persistencia sin
  «confirmado») y pregunta 5 de `B033`; pregunta 4 de `B034` (campos y
  procedencia del registro de fuentes sin sesión; S11 l. 170 sólo lo ubica).
  Desde `B041`-`B045` (reunidas al cerrar el inventario): `REV-2026-082`
  hecho 3 (handoff como custodio del ownership en ADR-005 l. 29-31 frente a
  S11 l. 106); `REV-2026-083` hechos 3 y 5 (la «Decisión» de ADR-005 sin la
  exclusión de la mera disponibilidad ni la caché como no fuente de verdad);
  `REV-2026-087` hecho 3 (la «Decisión» de ADR-006 sin las anclas de
  autoridad de S07 l. 42, 50, 55, 86 y 89-91, invocada por S08 l. 249);
  pregunta 4 de `B045` (curator predeterminado sin artefacto tras S11
  l. 109; matiz a `REV-2026-060`); `REV-2026-057` (lo que Hindsight retiene
  sin lugar). Contrastes fuera de los bloques: S08 l. 90, 96, 99.
  **`CT01` hecho (2026-09-25):** respondido en [CT01](blocks/CT01.md)
  (contrastes 1-12, disposición de anotaciones, síntesis) y en
  `REV-2026-088`/`089`. Pistas que salen hacia otros cruces: preguntas 1
  (aliases de entradas de conocimiento sin semántica) y 2 (`current` frente a
  revisión `draft`) para `CT03` y `CT06`; pregunta 4 (`synthesis` `stable`
  corregida autónomamente o como `draft`) para `CT04` y `CT06`; contraste 12
  (pérdidas de las «Decisión» concentradas en las garantías de autoridad)
  para `CT04`-`CT06`; `REV-2026-089` para `CT02`.
- `CT02`: `REV-2026-027`, `029`, `033`, `036`, `037`, `038`, `040`, `041`,
  `042`, `044` hecho 3, `047`, `050` hecho 2; preguntas de `B014`-`B022`
  conservadas abajo (en particular 4 de `B014`, 6 de `B016`, 2-4 de `B017`,
  2 y 4 de `B018`, 1, 2, 4 y 6 de `B019`, 1-3 y 6 de `B020`, 1, 5 y 6 de
  `B021`, 1, 3, 5 y 6 de `B022`), 6 de `B024`, 1 de `B025`; pregunta 5 de
  `B034` (representación física de `handoff/v1`: ADR-002 l. 136 → S05,
  ADR-004 l. 118 → S11); `REV-2026-073` y preguntas 2 y 3 de `B035`
  (incremento «autorizado», `draft` de `Maintain`, «ciclo» con `stage` y
  `status`); `REV-2026-075` hechos 3 y 4 y preguntas 3, 4 y 5 de `B036`
  (retorno por hallazgo, `draft` como escritura, estado ante incoherencia);
  preguntas 4 y 6 de `B037` (estado ante incoherencia sin respuesta tras todo
  ADR-003; rutas de `handoff/v1` remitidas a S05 y reenviadas a S11). Desde
  `B039`: `REV-2026-080` (orchestrator y «aplicar» en ADR-004 l. 107-108) con
  `REV-2026-037`, `040`, `042`; preguntas 1, 2, 4 y 6 de `B039`.
  **`CT02` hecho (2026-09-25):** respondido en [CT02](blocks/CT02.md)
  (tabla de correspondencia, contrastes 1-12, disposición de anotaciones,
  respuestas a preguntas heredadas, síntesis) y en `REV-2026-090`/`091`.
  Pistas que salen hacia otros cruces: pregunta 2 (identidad que posee el
  ownership y las obligaciones al reanudar) para `CT03`; pregunta 5 (umbral
  temporal de abandono frente a la exclusión del tiempo en S05) para `CT05` y
  `CT07`; `REV-2026-090`/`091` como reglas residuales sin receptor en S08-S12
  (con `REV-2026-081`) y `REV-2026-044` hecho 3 ampliado (el cierre de S05
  l. 252-253 frente a S04 l. 116) para `CT07`; contraste 12 (ADR-003 y
  ADR-004 pierden juntos el estado ante duda, las disposiciones de l. 116 y la
  cancelación del emisor) para `CT05`.
- `CT03`: `REV-2026-046`, `049` (matiz S11 l. 115), `059` hecho 4, `060`,
  `061` hecho 4; identidad portable y mapeo a OKF → S08 (preguntas 1 y 2 de
  `B029`); homónimos `concept`, `sources`, `status`, `revision`, `stale`;
  bundles OKF ajenos (pregunta 5 de `B028`); adapters sin sesión (pregunta 4
  de `B022`; S06 l. 50; S07 l. 55); S11 l. 115/166; pregunta 2 de `B025`.
  Desde `B044`-`B045`: `REV-2026-086` (homónimo y tolerancia de tipos, con el
  punto 4); `REV-2026-085` hecho 4 (identidad dual sin reflejo en la
  «Decisión»); preguntas 1 y 5 de `B044`; preguntas 1, 3, 4 y 5 de `B045`
  (regla de migración sin operador; S11 l. 109 frente a S08 l. 232 sobre
  `knowledge_id` y ruta; curator; «motor equivalente» y `semantic_retrieval`).
  Desde `B043`: `REV-2026-084` (condiciones de carga; identidad del packet).
  Desde `CT01`: preguntas 1 y 2 de [CT01](blocks/CT01.md). Desde `CT02`:
  pregunta 2 de [CT02](blocks/CT02.md) (identidad lógica o ejecución como
  titular del ownership y de las obligaciones aceptadas; preguntas 4 de
  `B014` y 6 de `B021`).
  **`CT03` hecho (2026-09-25):** respondido en [CT03](blocks/CT03.md) (tabla
  objeto × identidad × portabilidad × destino, contrastes 1-12, disposición
  de anotaciones, respuestas a preguntas heredadas, síntesis) y en
  `REV-2026-092`/`093`/`094`. Pistas que salen hacia otros cruces: pregunta 2
  (S11 l. 109 frente a S08 l. 232 sobre `knowledge_id` y ruta) para `CT07`;
  pregunta 4 (migración de OKF sin operador) para `CT06` y `CT07`; pregunta 5
  (packet emitido para un selector de «capacidad») para `CT05`;
  `REV-2026-094` (regla de uso de `draft` ausente de ADR-006) para `CT06`;
  `REV-2026-092` (sesión sin identidad; titular del ownership) para `CT05`
  (S04/ADR-003 punto 5) y `CT07`.
- `CT04`: `REV-2026-021`, `022`, `023`, `025`, `056`; S03 l. 236 sin retorno;
  pregunta 3 de `B028`, 6 de `B027`; preguntas 4 y 5 de `B012`;
  `REV-2026-063` (glosario S01 frente a ADR-001), `REV-2026-064` (evaluación
  de alternativas sólo en el ADR) con `REV-2026-001`, `013`-`016`; preguntas
  4 y 5 de `B030`; `REV-2026-065` (la «Decisión» de ADR-001 frente a S02);
  T800R/harness (pista (c) de `B031`); preguntas 3, 4 y 6 de `B031`;
  `REV-2026-067` (alternativas disjuntas S03/ADR-002), `REV-2026-068`
  (evidencia de S03 no citada en el razonamiento del ADR); pregunta 2 de
  `B032` («Fuente canónica» frente a `REV-2026-001`); `REV-2026-069` (la
  «Decisión» de ADR-002 resume S03 con pérdidas, mismo patrón que
  `REV-2026-065`); preguntas 4 y 5 de `B033`; `REV-2026-070` (puntos
  abiertos de ADR-002 desfasados respecto de sus destinos) y balance de
  ADR-002 en `B034`. Desde `B039`: `REV-2026-079` (la «Decisión» de ADR-004
  resume S05 con pérdidas; quinto caso del patrón con `REV-2026-065`, `069`,
  `074`, `075`) y pregunta 5 de `B039` (convención común de subordinación).
  **`CT04` hecho (2026-09-25):** respondido en [CT04](blocks/CT04.md) (tabla
  tema × fuente declarada × divergencias, contrastes 1-12, disposición de
  anotaciones, respuestas a preguntas heredadas, síntesis) y en
  `REV-2026-095`. Pistas que salen hacia otros cruces: `REV-2026-095` y
  pregunta 5 (decisión delegada autorizada en `readiness`) para `CT05`;
  preguntas 1 (convención fotografía/documento vivo), 2 (titular de cada capa
  de S03: T800R o repositorio consumidor), 3 (enrutado del tracker de
  definición l. 318-319 y 339-340) y 4 (ADR-001 sin enlace a ADR-002) para
  `CT07`; contraste 12 (síntesis corregida autónomamente en S03/ADR-002 frente
  a la revisión `draft` de S07 l. 53) y la frecuencia de S03 l. 236 perdida en
  ADR-002 l. 138 (pregunta 6 de `B027`) para `CT06`; la resolución de
  precedencia por analogía con S03 l. 53-54 (contraste 2) para `CT05` y `CT06`.
- `CT05`: S04/ADR-003 (`REV-2026-027`-`029`, `031`, `033`, `035`; preguntas
  de `B013`-`B018`) y S06/ADR-005 (`REV-2026-046`-`054` frente a los puntos
  1-12; preguntas 1, 3, 4 de `B023`, 1, 2, 5 de `B024`, 1, 3, 4, 6 de `B025`,
  1, 3, 4, 6 de `B026`); `REV-2026-059` (frescura frente a `freshness`),
  `061` (S06 l. 45-46/102); pregunta 4 de `B028`, 1 de `B027`. Desde
  `B035`: `REV-2026-071`, `072`, `073`; preguntas 1 y 4 de `B035`. Desde
  `B036`: `REV-2026-074`, `075` (la «Decisión» de ADR-003 resume S04 con
  pérdidas; patrón de `REV-2026-065`/`069`); preguntas 1, 2 y 6 de `B036`
  (subordinación del ADR, autorización por incremento frente a ADR-001 punto 2,
  gates del repositorio consumidor). Desde `B037`: `REV-2026-076` hechos 3 y 5
  (ADR-003 no enlaza ADR-008 para el alto riesgo ni ningún ADR posterior);
  pregunta 5 de `B037`. Desde `B039`: `REV-2026-080` hecho 4 (reparto de
  autoridad de S04 l. 110/112 frente a ADR-004 l. 107-108); preguntas 2 y 6
  de `B039`.
  **`CT05` hecho (2026-09-25):** respondido en [CT05](blocks/CT05.md) (tabla
  tema × fuente declarada × divergencias, contrastes 1-12, disposición de
  anotaciones, respuestas a preguntas heredadas —incluidas la 5 de `CT02`,
  la 5 de `CT03` y la 5 de `CT04`, todas en parte—, síntesis) y en
  `REV-2026-096`/`097`. Pistas que salen hacia otros cruces: `REV-2026-097`
  y pregunta 5 (dónde viven las marcas) para `CT06`; `REV-2026-097` (S11
  l. 223-225 y S12 frente al patrón de auditoría contra ADR), preguntas 1
  (principio temporal implícito) y 4 (tabla de correspondencia entre las
  tres máquinas de estados) y la decisión (c) de la síntesis para `CT07`.
- `CT06`: `REV-2026-054` hecho 2, `055` hecho 2, `057`, `058`, `059`-`061`
  frente a ADR-006 puntos 3, 6, 8, `062` hechos 1, 3 y 5; preguntas 1 y 3 de
  `B027`, 4 de `B028`, 1, 4, 5 y 6 de `B029`, 2 de `B026`. Desde
  `B044`-`B045`: `REV-2026-085` (alternativas sin base en S07), `REV-2026-087`
  (mapa punto a fila en [B045](blocks/B045.md)); hechos adicionales a
  `REV-2026-055`, `058`, `061`, `062`; preguntas 1 y 6 de `B044`, 1 y 5 de
  `B045`. Desde `CT05`: `REV-2026-097` (S07 l. 107 hereda de ADR-005;
  S08 l. 249 y tracker l. 320 usan ADR-006 como invariante) y pregunta 5 de
  [CT05](blocks/CT05.md) (marcas en la unidad o en el ADR).
  **`CT06` hecho (2026-09-25):** respondido en [CT06](blocks/CT06.md) (tabla
  tema × fuente declarada × divergencias, contrastes 1-12, disposición de
  anotaciones, respuestas a preguntas heredadas —incluidas la 4 de `CT01`, el
  contraste 12 de `CT04`, la 6 de `B027`, la 4 de `CT03` y la 5 de `CT05`,
  varias en parte—, síntesis) y en `REV-2026-098`. Pistas que salen hacia
  otros cruces: para `CT07`, el contraste 11 (tres estados de los
  diferimientos de S07; `definition/README.md` l. 23-24 declara literales las
  unidades S01-S07, restricción para la convención de marcas), los contrastes
  8 y 10 (migración de OKF y comparación de Hindsight sin receptor en S12),
  la pregunta 5 (auditoría de cierre de S08 frente a ADR-006) y la decisión
  (d) de la síntesis (dirección y alcance de la compatibilidad OKF, que la
  conformidad de S12 debería poder probar); para `B001`, la observación de que
  S08 figura `completed` en el tracker de definición l. 345.
- `CT07`: patrón de cierres S01-S07 (`REV-2026-011`, `016`, `024`, `034`,
  `044`, `053`, `062`; pregunta 4 de `B006` respondida para todo el
  inventario); patrón de aperturas (`REV-2026-024`, `026`, `045`, `055`);
  inventarios unidad/ADR/tracker (`REV-2026-015`, `023`, `025`, `028`, `035`,
  `036`, `054`, `058`); omisiones silenciosas sin fila `deferred`
  (`REV-2026-036`, `038`-`043`, `046`-`052`, `059`-`061`); `REV-2026-005`
  confirmada para S05-S07 y `REV-2026-032` (S04); tracker de definición
  l. 357-360, 379-380, 389-395, 407-408 (auditorías y retornos fuera de las
  unidades); índice l. 128, 132-135, 146-163; preguntas 3, 5 y 6 de `B029`,
  2, 5, 6 de `B028`, 2 y 6 de `B027`, 1, 3, 4, 5 de `B026`, 5 de `B014`;
  `REV-2026-064` hecho 5 (alternativas sin estado en S02/ADR-001); preguntas
  1, 3 y 6 de `B030`; `REV-2026-066` (ADR-001 como fuente de autonomía en el
  tracker de definición l. 318 sin reflejar S04/S09; marcas de resolución);
  preguntas 1, 2 y 5 de `B031`; `REV-2026-067` (resultados «No elegida» e
  «Insuficiente» en ADR-002, también en ADR-003 l. 39-41); preguntas 1, 3, 4 y
  6 de `B032`; `REV-2026-069` hecho 5 (aplazamientos embebidos en la
  «Decisión» de ADR-002 sin destino); preguntas 1, 2, 3 y 6 de `B033`;
  `REV-2026-070` hechos 1 y 6 (marcas y enlaces entre ADR), matiz a
  `REV-2026-025` hecho 2 (l. 147 frente a S03 l. 240) y preguntas 1, 2, 3 y 6
  de `B034`; `REV-2026-071` hecho 1 (vocabulario de resultados en ADR-003) y
  preguntas 5 y 6 de `B035`; `REV-2026-076` hechos 1-2 (tercer ADR con
  diferidos desfasados; runbooks de `Maintain` enviados a S09 sin recepción) y
  preguntas 1-3 de `B037`. Desde `B040`-`B045`: `REV-2026-081`, `084`
  (reglas y decisiones sin receptor antes de construir); balances de ADR-004,
  ADR-005 y ADR-006 y **balance global de los ADR** en [B045](blocks/B045.md)
  (patrones repetidos y lo que queda sin dueño); `REV-2026-085` (alternativas);
  mediciones de RTK, Context Mode y Hindsight posteriores a la construcción
  (`B043` (e), pregunta 2 de `B045`); marcas en ADR-006 l. 98-99; preguntas 2
  de `B044` y 1, 2 y 6 de `B045`. Desde `CT05`: `REV-2026-097` (auditorías
  de cierre y criterios «preservar ADR-00N» en S08-S11 y S12; si hay que
  repetirlas contra las unidades), preguntas 1 y 4 de [CT05](blocks/CT05.md)
  y la decisión (c) de su síntesis (correspondencia entre las tres máquinas
  de estados con `REV-2026-037`, `047`, `051`, `090`, `091`, `096`). Desde
  `CT06`: contraste 11 de [CT06](blocks/CT06.md) (tres estados de los
  diferimientos de S07 en unidad, ADR-006 y tracker l. 392-394;
  `definition/README.md` l. 23-24 como restricción de la convención de
  marcas), contrastes 8 y 10 (migración de OKF y comparación de Hindsight sin
  receptor en S12), pregunta 5 (auditoría de cierre de S08 l. 408-409 frente
  a ADR-006) y la decisión (d) de su síntesis (dirección y alcance de la
  compatibilidad OKF; `REV-2026-098`).
  **`CT07` hecho (2026-09-25):** respondido en [CT07](blocks/CT07.md):
  - tablas de condiciones y del patrón de cierre, inventario único de
    diferimientos, cobertura por área, diez contrastes y disposición de las
    anotaciones asignadas;
  - respuestas a las preguntas heredadas: una selección, y las demás
    agrupadas por decisión;
  - síntesis de la revisión completa; nuevas `REV-2026-101`, `102` y `103`.
  No quedan cruces pendientes. Pistas para una eventual ampliación del
  inventario (decisión (h)):
  - ADR-010 sin la decisión del orchestrator (pregunta 1 de la pasada 2 de
    `B002`);
  - S11 l. 109 frente a S08 l. 232 (pregunta 2 de `CT03`);
  - auditorías de cierre de S08-S11 frente a las unidades (pregunta 2 de
    `CT07`);
  - «Puntos abiertos» de ADR-007 a ADR-009 sin marcas (contraste 6 de
    `CT07`).

S06 queda cerrada por
análisis (`B023`-`B026`; balance en [B026](blocks/B026.md)); S05 queda cerrada
por análisis (`B019`-`B022`; balance en [B022](blocks/B022.md)); S04 queda
cerrada por análisis (`B013`-`B018`; balance en [B018](blocks/B018.md)).
Pistas de `B028` y de `B027` para `B029` quedaron respondidas en el
checkpoint de `B029`, pistas (a)-(r), y en `REV-2026-062`; se conserva su
texto. Pistas de `B028` para `B029` (detalle en [B028](blocks/B028.md)): comprobar
si l. 113-117 declara «explícitos» «el lifecycle y la frescura», «la
indexación» y «la relación entre … la sección `knowledge`» cuando la
derivación de la frescura (`REV-2026-059`), el artefacto del bundle y los
campos del índice (`REV-2026-060`) y el contenido de la sección
(`REV-2026-061`) no están escritos; si el cierre nombra ADR-005 o la sesión 6
(S07 l. 107 es la única mención de ADR-005 en l. 1-108); si «No se seleccionó
tecnología» (l. 121) convive con «motor semántico» (l. 106) y Hindsight
(l. 55-56); si «los bundles y ámbitos» (l. 114) se declaran explícitos sin
owner ni curator declarables; y si el cierre da salida a las preguntas 1-6 de
`B028` (normativo frente a descriptivo en l. 68; precedencia entre ámbitos y
marcadores de dependencias; `sources` → registro o evidencia; `status` por
entrada o por revisión; bundles OKF ajenos al perfil; owner/curator del bundle
y agente como curator). Pistas de `B028` para bloques posteriores: bloques de
ADR-006 (`B044`-`B045`): «Contexto» l. 16-17 (`REV-2026-061` hecho 3: tríada
«referencias, procedencia y reconciliación» atribuida a la sesión 6 frente a
S07 l. 106-107 «presupuesto, procedencia y reconciliación de ADR-005»); punto
2 sin «comprobar versión y aplicabilidad» (l. 86); punto 3 sin las
definiciones de l. 88-91 ni artefacto del bundle (`REV-2026-060` hecho 4);
punto 4 sin la columna «No sustituye» (l. 66-71); punto 6 sin «por separado»
(l. 95-97) ni derivación (`REV-2026-059`); punto 8 sin campos del índice
(l. 99-101); «Consecuencias» l. 88-89 reducen l. 104-107 (`REV-2026-061`
hecho 5); `CT01`: `REV-2026-017`-`020` sin salida tras l. 1-108 (`017`
parcial por l. 49/71), l. 68 (pregunta 1 de `B028`), l. 85-86 (pregunta 2),
l. 89-90 (pregunta 3; `REV-2026-056` hecho 4), owner/curator sin artefacto ni
actor (`REV-2026-060`; `REV-2026-018`; pregunta 6), l. 101-102 (índice sin
autoridad, coherente con S03 l. 60); `CT03`: l. 99-100 → S08 l. 232-234
(`bundle_id`, `knowledge_id`, por búsqueda) sin marca, homónimos
`sources`/`status`/`revision` y `stale` (S07 l. 52, OKF §5.5, S08 l. 69/177:
`REV-2026-059` hecho 4), `concept` (l. 68), bundles ajenos (pregunta 5),
`status` por revisión (pregunta 4), índice raíz frente a OKF §3/§8
(`REV-2026-060`), «condición de carga» por entrada (l. 105) frente a S06
l. 45-46/58 (`REV-2026-061` hecho 4); `CT04`: `REV-2026-056` sin novedad,
l. 71 frente a S03 l. 38, l. 73-76 frente a S03 l. 53-63, pregunta 3; `CT05`:
`REV-2026-059` (frescura de la entrada frente a `freshness` S06 l. 68 y
l. 162-163; patrón `REV-2026-050`), `REV-2026-061` (S06 l. 102 frente a S07
l. 73-76/104-107; ADR-005 l. 126-128), pregunta 4; `CT06`: `REV-2026-061`
hecho 3, `REV-2026-059`/`060` frente a ADR-006 puntos 3, 6 y 8, pregunta 2 de
`B026` (respondida desde S07: la exigencia no está en S06), preguntas 1 y 3
de `B027`; `CT07`: `REV-2026-059`-`061` como omisiones silenciosas sin fila
`deferred` (con `REV-2026-046`-`052`/`056`), `REV-2026-005` confirmada para
l. 64-108, `REV-2026-058` sin novedad (ningún aplazamiento embebido en el
rango), la pregunta 4 de `B006` hasta `B029`, preguntas 2, 5 y 6 de `B028`;
S08/ADR-007: l. 90, 232-234, 238 y 69/168/177 como receptores de l. 99-105 sin
marca; S11/ADR-010: sin coincidencias por búsqueda para «índice raíz»,
«curator», «frescura», `bundle_id` (comprobar si la representación física
fija descriptor de bundle e índice); S09: owner/curator/«actor autorizado» y
riesgo (pregunta 6); S12: comparación de Hindsight «con el índice raíz»
(l. 56) sin contenido fijado (`REV-2026-060`). `B028` comprobó que el rango
64-108 es exacto y sin subencabezados, enlaces ni URL, que la tabla l. 66-71
amplía las filas l. 44/49 sin contradecirlas y cubre los cinco términos de la
pregunta 2 de la sesión, que l. 73-76 coincide con S03 l. 53-63 sin nombrar
registro, Git, punto de entrada ni contexto efímero, que l. 82-91 y 93-95 son
coherentes con las filas l. 42, 45, 46, 48 y con S03 l. 36/38/45 y S06 l. 88,
que el rango no nombra actor alguno («owner», «curator», «agente», «persona»
ausentes; «humana» sólo l. 71) ni frecuencia, mecanismos, marcadores (salvo
l. 51), adapter, contrato común ni aplazamientos, que la frescura de
l. 52/95-97/101 no tiene regla de derivación, campo, actor ni base para
detectar «una fuente cambiada», que owner, curator predeterminado y `scope`
del bundle no tienen artefacto y el índice raíz expone «temas», «resumen» y
«frescura» sin origen (OKF §3 sin metadatos de bundle, §8 `index.md`
opcional, §4.1 `description`/`tags` no adoptados), que S07 l. 104-107 llena la
sección `knowledge` sólo con bundle y entradas mientras S06 l. 102 le asigna
requisitos y decisiones que l. 73-76 excluye, que l. 106-107 es la única
mención de ADR-005 (sin punto) y la única fuente posible de ADR-006 l. 16 con
tríada distinta, que OKF `SPEC.md` en el commit fijado confirma la semántica
temporal de `stale_after` (§5.5), y que l. 64-108 no dan salida a
`REV-2026-017`-`REV-2026-020`. Pistas de `B027` para `B028` quedaron
respondidas en el checkpoint de `B028`, pistas (a)-(t), y en
`REV-2026-059`-`REV-2026-061` (la pregunta 1 de `B027` y la 6 de
`B025`/`B026` pasan a `REV-2026-059`; la 5 de `B027` a la pregunta 2 de
`B028`; la 2 de `B027` a la pregunta 6 de `B028`; las 3, 4 y 6 de `B027`
siguen). Pistas de `B027` para `B029` (l. 109-123):
patrón de cierres (`REV-2026-053`; pregunta 4 de `B006`) con l. 113-121
frente al criterio l. 30-34, a la fila del índice l. 65 («front matter» y
«caducidad» sustituidos por «metadatos» y «vigencia»; «front matter» decidido
en S11/ADR-010 l. 126: `REV-2026-055` hecho 1) y al tracker de definición
l. 384-395 (retornos que la unidad no marca); l. 118-121 frente a la tabla
(una sola fila `deferred`, l. 56) y a la prosa l. 58-62 (`REV-2026-058`);
l. 123 ADR-006 como decisión sin enlazar «Puntos abiertos»; `REV-2026-005`
hecho 3 (l. 123 única aparición de «transversal»; área l. 119); enlaces
entrantes al ancla `s07-cierre` (índice l. 87 y «Enlaces de compatibilidad»,
tracker de definición, `definition/README.md`); si el cierre declara el no
bloqueo para S08 y enumera; si nombra las siete remisiones recibidas (S03
l. 135, 220, 236, 237; ADR-001 l. 120; ADR-002 l. 138-144; ADR-003 l. 116;
S06 l. 36-37; ADR-005 l. 126-128: `REV-2026-055` hecho 2) o la validación de
referencias y la frecuencia/mecanismos (`REV-2026-056`). Pistas de `B027`
para bloques posteriores: bloques de ADR-006 (`B044`-`B045`): TL;DR l. 9-10 y
«Contexto» l. 16 (`REV-2026-054` hecho 2); alternativas l. 24-25, 32-33, 42,
44 sin fila `rejected` en S07 (`REV-2026-058` hecho 3); «Decisión» punto 1 con
commit sin la regla de migración de l. 41, sin punto para l. 43 ni 47, punto
5 sin «alcance y trazabilidad» (l. 50), punto 6 sin la conciliación de
marcadores (l. 51) ni el reemplazo de `deprecated` (l. 52), punto 9 sin «sobre
fuentes autorizadas» ni «contrato común» (l. 55); «Puntos abiertos» l. 95-99
reproducen la prosa y marcan resuelto con ADR-007 (2026-09-22) posterior a
la fecha (`REV-2026-058` hecho 2); «Referencias» l. 103-106 (el ADR sí enlaza
la investigación de OKF que S07 no enlaza: `REV-2026-055` hecho 3);
Hindsight sin identificación (`REV-2026-057`); `CT01`: `REV-2026-017`-`020`
sin salida tras l. 1-63 (`017` parcial por l. 49), l. 42/43/50 (sin autoridad
por criterio, nombre ni función), l. 45 (promoción sin revisión humana bajo
«autonomía concedida»: pregunta 2), l. 48 `sources` → registro sin esquema
(`REV-2026-056` hecho 4), l. 46 (pregunta 5), l. 55; `CT03`: identidad
portable y mapeo a la ruta de OKF diferidos a S08 (l. 48, 59-60; ADR-006
l. 95-97; tracker l. 184-187), OKF §2 (identidad por ruta sin id ni aliases;
aliases de l. 48 como adición T800R), homónimos `sources`/`status`/`revision`
(pregunta 4 de `B027`; `REV-2026-049`), `concept` homónimo (pregunta 3),
«adapter»/«contrato común» en l. 55 antes de S08 (`REV-2026-057` hecho 3; con
S06 l. 50 y la pregunta 4 de `B022`), `scope`/owner de bundles (l. 46) frente
a S05 l. 84; `CT04`: `REV-2026-056` (S03 l. 135/237 y ADR-001 l. 120 sin fila
en S07; ADR-002 l. 142-143 sustituye el objeto: con `REV-2026-023`/`025`),
S03 l. 236 sin retorno tras S07, pregunta 6 de `B027`; `CT05`: pregunta 1 de
`B027`, `REV-2026-054` hecho 2, l. 51 «marcadores» frente a S06 l. 142-144;
`CT06`: `REV-2026-055` hecho 2 (S07 no nombra S06 ni ADR-005 en l. 1-63),
`REV-2026-057`, `REV-2026-058`, los contrastes de «Decisión» de ADR-006
(puntos 1, 5, 6, 9 reducen; sin punto para l. 41, 43), pregunta 2 de `B026`,
preguntas 1 y 3 de `B027`; `CT07`: `REV-2026-055` (patrón de aperturas
S03-S07 con `REV-2026-024`/`026`/`045`/`053`; siete remisiones sin acuse con
`REV-2026-036`/`054`; base externa sin enlace con `REV-2026-021`),
`REV-2026-056` (cadena S02 l. 104 → S03 → S07 sin fila; ADR-002 editado con
objeto sustituido), `REV-2026-057` (herramienta sin identificación con
`REV-2026-045`), `REV-2026-058` (aplazamientos embebidos y `rejected`
ausentes con `REV-2026-028`/`054`; inventario unidad/ADR/tracker con
`REV-2026-015`/`023`/`025`/`035`/`036`; convención no uniforme, pregunta 5 de
`B014`), `REV-2026-005` (l. 1-63 sin práctica ni investigación; área l. 119 →
`B029`), índice l. 65 desactualizado frente a S11/ADR-010, índice l. 128
cumplido por la prosa y no por la tabla, la pregunta 4 de `B006` sigue
abierta para S07 hasta `B029`, preguntas 2 y 6 de `B027`; S08/ADR-007:
identidad portable (ADR-006 l. 95-97; S08 l. 124, 210), `semantic_retrieval`
(S08 l. 144) como receptor de l. 55 sin marca en S07, S08 l. 96 y 311;
S11/ADR-010: «Markdown con front matter, a OKF» (ADR-010 l. 126; tracker
l. 302) como resolución de «front matter» del índice l. 65 y de la prosa
l. 60-61 sin marca en S07, S11 l. 62/170 (registro de fuentes como artefacto:
¿fija su esquema?), S11 l. 91 y 200 (Hindsight → S12); S12: comparación de
Hindsight (l. 56; `REV-2026-057`); S09: «autonomía concedida» y riesgo
(pregunta 2 de `B027`); S10: validación de referencias (ADR-001 l. 120) sin
coincidencia por búsqueda (`REV-2026-056` hecho 2); `B002`/`B003`:
`REV-2026-055` hecho 1 (índice l. 65) junto a la pregunta 5 de `B026`
(l. 64) para su nueva pasada. `B027` comprobó que el rango 1-63 es exacto y
que la tabla de decisiones cae completa dentro (17 filas, ninguna
`rejected`), que el objetivo y el criterio reformulan la fila del índice
l. 65 («front matter» y «caducidad» ausentes de la unidad salvo como lo que
se evita) y añaden autoridad, procedencia, lifecycle y portabilidad, que
l. 1-63 no contienen enlaces, URL ni investigaciones y no nombran «sesión 6»,
ningún ADR ni las remisiones de S03/ADR-001/ADR-002/ADR-003/S06/ADR-005, que
«frecuencia», «mecanismo», «validación de referencias» y el esquema del
registro de fuentes no aparecen en la unidad («registro» sólo l. 90), que
ninguna unidad canónica identifica Hindsight y su fuente primaria lo
describe como memoria que retiene y sintetiza, que tres aplazamientos viven
en filas `accepted` (l. 40, 46, 48) con destino sólo en la prosa l. 58-62 y
que ADR-006 «Puntos abiertos» reproduce esa prosa marcando resuelto un punto
con ADR-007 posterior, que `check_after` de l. 51 conserva la semántica de
S06 l. 162-163 y `stale_after` añade un caso temporal acotado sin relación
escrita con `freshness` del packet, que la especificación de OKF en el commit
fijado confirma l. 41-43 y 48 (con el homónimo `concept` y aliases como
adición), y que l. 1-63 no dan salida a `REV-2026-017`-`REV-2026-020`.
Pistas de [B026](blocks/B026.md) para `B027` quedaron respondidas en el
checkpoint de `B027`, pistas (a)-(u), y en `REV-2026-055`-`REV-2026-058`. Las
pistas que `B026` reunió para S07 se conservan a continuación y siguen
vigentes para `B029` en lo que `B027`/`B028` no resolvieron (de `B009`-`B012` y
`B021`-`B026`; detalle en [B026](blocks/B026.md)): de `B010`, pregunta 1 (S03 l. 129-130: qué
documentos son normativos frente a descriptivos, ¿lo marca la distribución
canónica o el agente?; `REV-2026-017`) y pregunta 3 (S03 l. 127-128/135:
revisar un aprendizaje «cuando cambie una fuente» exige detectar cambios,
incluidas fuentes externas; ¿S07 lo deja como obligación verificable o mejor
esfuerzo?); de `B011`, pregunta 1 (la evaluación de OKF de S03 l. 40/204-208
se apoya en una investigación unipersonal, l. 200-202: ¿base suficiente para
perfil y versión?), pregunta 5 (S03 l. 236 adopción/versionado de OKF → S07:
¿decidió S07 adopción, perfil y versión y lo enlaza S03?; S07 l. 58 nombra
OKF v0.2 y un commit), pregunta 6 (S03 l. 237 esquema del registro de
fuentes → sesiones 7, 8 y 10: ¿existe con procedencia por entrada y quién
confirma?; `REV-2026-018`/`019`) y las reglas de validación de referencias
(S03 l. 134-135 → S07; `REV-2026-023`); de `B012`, pregunta 1 («OKF» del
criterio de S03 y del índice l. 61 como «conocimiento mantenido»: ¿S07
completó la asignación?; `REV-2026-024`) y pregunta 4 (ADR-002 l. 142-144
«esquema de conocimiento resuelto en sesión 7»: ¿S07 fijó los campos del
registro de fuentes o sólo el modelo?; `REV-2026-025`; ADR-002 l. 138-144
frente a S03 l. 236-237); de `B023`, ADR-005 l. 126-127 «resuelto en sesión
7 y ADR-006» como edición posterior a la fecha del ADR; de `B024`, S07
l. 11/104/117 y ADR-006 l. 10/16 nombran el packet, y S06 l. 102 es el único
contenido que S06 fija para la sección `knowledge`; de `B025`, pregunta 6 y
contraste 8 (`stale_after` de S07 l. 48, 51 y ADR-006 l. 56, 67 frente a S06
l. 162-163 «No hay TTL universal») y S07 l. 55 (degradación); de `B026`,
`REV-2026-054` hecho 2 (S06 no remite nada a S07 en ninguna fila; ADR-006
l. 16 afirma que S06 «exigió preservar referencias, procedencia y
reconciliación»: comprobar de dónde lo toma S07 l. 104-107), `REV-2026-053`
hecho 4, preguntas 2 y 6 de `B026`, patrón de aperturas de `REV-2026-026`
(objetivo l. 7-11 y criterio l. 30-34 frente a la fila del índice l. 65:
«front matter» y «caducidad» del índice frente a «metadatos» y «reglas de
vigencia»), S07 l. 3 y ADR-006 fechados el 2026-09-21 (coinciden), la prosa
l. 58-62 con tres diferimientos (identidad y mapeo de ruta → 8;
representación, rutas, almacenamiento y búsqueda → 11; Hindsight → 11 y
12): comprobar si tienen fila `deferred` o son embebidos (`REV-2026-028`) y
si S07 recibe con acuse S06 l. 102 y ADR-005 l. 126-128; `B029`
(l. 109-123: ancla l. 109, «Comprobación de cierre» l. 111, prosa l. 113-123,
fin del archivo l. 123) recibirá el patrón de cierres (`REV-2026-053`),
`REV-2026-005` hecho 3 (S07 l. 123 única aparición de «transversal»; área
l. 119) y la pregunta 4 de `B006`. Pistas de `B026` para bloques
posteriores: bloques de ADR-005 (`B041`-`B043`): l. 3-4 y 9 frente al cierre
l. 203-205 en futuro (`REV-2026-053` hecho 7); «Puntos abiertos» l. 118-128
como inventario divergente y editado tras la fecha (`REV-2026-054`:
l. 122-123 representación física y l. 126-128 sección `knowledge` sin fila
en S06; l. 118-121 con destinos ampliados; ADR-006 2026-09-21 y ADR-007
2026-09-22 citados desde un ADR fechado 2026-09-18); «Referencias»
l. 137-139 no enlazadas desde S06; l. 31-32 (ADR-003 como fuente, no como
contraste); `CT05`: `REV-2026-053` hecho 5 (auditoría «frente a ADR-003 o
ADR-004» sólo en el tracker de definición l. 379-380) y `REV-2026-054`,
preguntas 1, 3, 4 y 6 de `B026`; `CT06`: `REV-2026-054` hecho 2 (S07/ADR-006
reciben de S06 exigencias que S06 no escribe), pregunta 2 de `B026`; `CT07`:
`REV-2026-053` (patrón de cierres S01-S06 con `REV-2026-011`/`016`/`024`/
`034`/`044`; «verificables» omitido; no bloqueo sin enumerar en seis
sesiones; auditoría sólo en el tracker en S04-S06; área l. 118 sin
declaración; ADR en futuro), `REV-2026-054` (inventario unidad/ADR con
`REV-2026-015`/`023`/`025`/`028`/`035`/`036`; índice l. 128), `REV-2026-005`
confirmada para toda S06 (l. 1-206), tracker de definición l. 357-360 y
379-380 (comprobar l. 407, 420, 447 para S08-S12), preguntas 1, 3, 4 y 5 de
`B026`, la pregunta 4 de `B006` cerrada para S06 y abierta para S07; `CT01`:
`REV-2026-017`-`REV-2026-020` siguen sin salida tras toda S06
(`B023`-`B026`); `CT02`/`CT03`: sin novedad (límites de `REV-2026-046`/`047`
cerrados para toda S06); `B002`/`B003`: pregunta 5 de `B026` (índice l. 64
«RTK y Context Mode» frente a criterio y cierre) para su nueva pasada;
S11/ADR-010: ADR-005 l. 122-123 (representación física → 11 sin fila en
S06). `B026` comprobó que el rango 194-206 es exacto, que el cierre amplía el
criterio l. 33-37 con siete elementos que tienen fila, que omite
«verificables» (único calificador del criterio; ausente de l. 194-206 y del
tracker l. 372-376), que ni criterio ni cierre nombran «RTK y Context Mode»
del índice l. 64, que «no quedan bloqueos para iniciar la sesión 7» se
afirma sin enumerar y S06 no remite nada a S07 en ninguna fila («sesión 7»
sólo en l. 37 y 203), que «auditor» no aparece en la unidad y «ADR-003» sólo
en l. 47, que el cierre dice «estados» y no «transiciones», que los enlaces a
ADR-004 (l. 202) y ADR-005 (l. 205) resuelven con fecha coincidente
(2026-09-18) y ADR-005 «Puntos abiertos» tiene cinco puntos frente a tres
filas `deferred`, que los enlaces entrantes al ancla resuelven (índice l. 86
y 186, tracker l. 343, `definition/README.md` l. 15), que el rango no
contiene fuentes externas ni nombra S05, S11, `handoff/v1`, «límites»,
«sucesor», «actor» ni «trigger», y que no da salida a
`REV-2026-017`-`REV-2026-020`. Pistas de [B025](blocks/B025.md) para `B026`
quedaron respondidas en el checkpoint de `B026`, pistas (j)-(m), y en
`REV-2026-053`. Pistas de `B025` para bloques posteriores:
bloques de ADR-005 (`B041`-`B043`): punto 6 (l. 81-83) omite la lista de
marcadores y l. 150-152; punto 7 (l. 84-86) «exige un packet sucesor» frente
a l. 158 «Se invalida» (`REV-2026-051` hecho 1), sin categorías de l. 158 ni
`check_after`; punto 8 (l. 87-89) sin «obsoleto» ni «exige reconciliar o
reconstruir»; punto 10 (l. 93-96) reduce l. 182-187 («presupuesto
insuficiente», «falta de una fuente autorizada», sin la condición de
continuación l. 183-184); punto 11 (l. 97-99) reformula l. 189-192 («causa»
por «trigger», sin «razón» ni «aplicado»; `REV-2026-052` hecho 4); «Puntos
abiertos» l. 118-128 sin transiciones, campo de impacto, `check_after`, lugar
de la evidencia ni inmutables; matiz a `REV-2026-049` hecho 2 (S11 l. 115
nombra `context-packet` como schema top-level sin versión; `B024` había
registrado «sin coincidencias»; no se determinó si S11 cambió después);
`CT01`: `REV-2026-017`-`REV-2026-020` siguen sin salida tras l. 1-193 de S06
(l. 171/185 contradicciones sin lugar ni cierre; l. 184/186 «autorizada»/
«permitida» sin criterio; l. 172 historia y l. 184-187 parada sin destino),
l. 150-152 coherente con S03 l. 56-63 en la letra, la evidencia de l. 189-192
encaja con S03 l. 58 sin que S06 la asigne (`REV-2026-052` hecho 2; pregunta
5 de `B025`; pregunta 4 de `B024`); `CT02`: `REV-2026-050` hecho 2 (el
`status` del handoff, S05 l. 60, como marcador sin efecto sobre el packet:
inverso de `REV-2026-037`; pregunta 1 de `B025`), l. 158 «ownership» →
`packet` frente a S04 l. 96 y S05 l. 215, parada l. 182-187 sin estado de
S04 ni handoff de S05 (`REV-2026-047` límite cerrado para l. 1-193),
pregunta 6 de `B024` sigue; `CT03`: S11 l. 115 (`context-packet`) y l. 166
(packets «inmutable[s] por digest», ledger con estado, marcadores,
presupuesto, material omitido, predecesor) como posible destino sin enlace de
`REV-2026-049` hecho 2, `REV-2026-050` hechos 1 y 3, `REV-2026-051` hecho 4 y
`REV-2026-052` hecho 2; «contrato aplicable» (pregunta 2 de `B025`); S08
l. 219 «exige el handoff aplicable»; `CT05`: `REV-2026-050`/`051`/`052`
frente a ADR-005 puntos 6-11 (pista (q) y contrastes 3, 6, 11 de `B025`),
S08 l. 363 («triggers ya aceptados por ADR-005») y l. 369-372 (`unknown` →
`invalid`/`degraded`/omisión con diagnóstico) como reglas de estado fuera de
S06, S07 l. 51/ADR-006 l. 67 `stale_after` frente a l. 162-163 (pregunta 6 de
`B025`), S11 l. 166 frente a l. 159 (pregunta 4 de `B025`), preguntas 1, 3 y
4 de `B023` y 1, 3 y 5 de `B024` (siguen); `CT07`: `REV-2026-050`/`051`/`052`
como omisiones silenciosas sin fila `deferred` (valor esperado de marcadores,
campo de impacto y `check_after`, «contrato aplicable», efecto del `status`
del handoff, transiciones e inmutables, lugar de la evidencia, «trigger»;
junto a `REV-2026-046`-`049`), `REV-2026-005` confirmada para l. 140-193
(toda S06 l. 1-193 sin práctica ni investigación), ADR-005 «Puntos abiertos»
sin nada del rango, la pregunta 4 de `B006` sigue abierta para S06 hasta
`B026`; S08/ADR-007: l. 219, 363, 369-372; S11/ADR-010: l. 115, 160, 166,
ADR-010 l. 137; S07/ADR-006 (`B027`-`B029`, `B044`-`B045`): `stale_after`
(S07 l. 48, 51; ADR-006 l. 56, 67) frente a S06 l. 162-163; S09: «versión de
políticas o permisos» (l. 144) sigue sin fuente (pregunta 4 de `B023`).
`B025` comprobó que el rango 140-193 es exacto, que la prosa coincide con
las filas l. 47, 48, 49 y 52 (l. 182-187 literal a l. 52) y añade acciones
por estado, categorías de `packet`, `check_after` «opcional» y la lista de
evidencia, que los marcadores de l. 142-144 no tienen valor esperado en el
núcleo (`base` l. 87 «referencia»; S05 l. 105 «esperados»), que el `status`
del handoff cambia por S05 l. 60 sin efecto declarado sobre el packet, que
ni `sources` (l. 89) ni `manifest` (l. 90) ni ADR-005 l. 16 alojan impacto o
`check_after`, que «contrato aplicable» sólo existe en l. 158, que tras un
cambio `packet` l. 171 y l. 172 se cumplen a la vez con acciones opuestas y
ADR-005 l. 84-85 apunta al otro estado mientras S05 l. 59/64/164 resuelve el
caso análogo, que no hay matriz de transiciones, estado de recarga
`section`, inmutables ni idempotencia («inmutable|idempot» ausentes de S06),
que «obsoleto» (l. 170) no es causa de `degraded` (l. 51/72) y `ready`
(l. 169) sólo exige vigencia de lo `required`, que los seis eventos de
l. 189 omiten la parada, la sustitución y el fallo estructural, que la
evidencia no tiene lugar, capa de S03 ni esquema en S06 ni ADR-005 (S11
l. 160/166 por búsqueda), que «trigger» sólo aparece en l. 190 (ADR-005
«causa»; S08 l. 363 lo identifica con las condiciones de carga), que
l. 140-193 no contienen enlaces, URL ni investigaciones, que no nombran
`coordination`, «conflicto», `consumer`, «orchestrator», «runtime»,
«adapter» ni «persona», y que no dan salida a `REV-2026-017`-`REV-2026-020`.
Pistas de [B024](blocks/B024.md) para `B025` quedaron respondidas en su
checkpoint, pistas (a)-(k), y en `REV-2026-050`-`REV-2026-052`. Pistas de
`B024` para `B026` quedaron respondidas en el checkpoint de `B026`, pistas
(h) e (i), y en `REV-2026-053`. Pistas de `B024` para bloques posteriores:
bloques de ADR-005 (`B041`-`B043`): glosario l. 16 («prioridad» en el
manifest, ausente de S06 l. 90; `REV-2026-048` hecho 4); punto 1 (l. 63-66)
sin valor de `schema` ni modelo de identidad (`REV-2026-049`); punto 3
(l. 70-73) «ambigüedad relevante» y «causa y revisión», más laxo y reducido
frente a l. 112-117; punto 4 (l. 74-77) con `budget_profile` sin
definición; punto 5 (l. 78-80) «Si no caben, no se actúa» omite la
solicitud de l. 132-133; «Puntos abiertos» l. 118-128 sin `budget_profile`,
esquema ni caso sin límites; `CT01`: `REV-2026-017`-`REV-2026-020` siguen
sin salida tras l. 1-139 de S06, l. 92-94 ↔ S03 l. 63 (pregunta 4 de
`B024`), `sources` l. 89 sin exigir el registro de S03, `constraints` l. 88
como síntesis de permisos sin fuente ni capa que la contraste con el
original (pregunta 5 de `B024`), «actor autorizado» l. 116 sin campo ni
criterio (`REV-2026-049` hecho 4, `REV-2026-047` hecho 3); `CT02`:
`coordination` l. 105 y `base` l. 87 frente al mapa handoff → `status`
(`REV-2026-037`; pregunta 6 de `B024`), l. 132-133 (reducir alcance, ampliar
capacidad, dividir) frente a S04 l. 85 y a las entradas a `waiting`/`blocked`
(`REV-2026-047`, `REV-2026-027`); `CT03`: `REV-2026-049` (homónimos sin
equivalencia; `schema` sin identificador ni versión cuando S11 nombra ocho
esquemas `*/v1` y ninguno del packet; `producer`/`consumer` sin la
referencia de actor de S05 l. 84; «capacidad» como destinatario que S05 no
admite; S08 l. 45-48 y 124/210 por búsqueda como posible destino sin enlace),
`REV-2026-046` (límite cerrado para l. 76-139), l. 125 «El adapter
incorpora los límites» y S08 l. 126/160 (por búsqueda) como obligaciones del
adapter; `CT05`: `REV-2026-048` (estado por presupuesto dependiente del
adapter frente a l. 43 «validación … comunes» y l. 51 «deterministas»;
`manifest` l. 90 frente a ADR-005 l. 16), `REV-2026-049` (ADR-005 punto 1
repite sin ampliar), contrastes 8, 12 y 15 de `B024`, preguntas 1, 2 y 5 de
`B024`, preguntas 1, 3 y 4 de `B023` (siguen); `CT07`: `REV-2026-048`/`049`
como omisiones silenciosas sin fila `deferred` (`budget_profile`, caso sin
límites, esquema, identidad de `producer`/`consumer`; junto a
`REV-2026-046`/`047`), `REV-2026-005` confirmada para l. 76-139, S08 l. 111
«Condiciones declarativas de carga» como posible retorno de l. 58 sin marca
en S06; S08/ADR-007: l. 111 (¿recibe l. 58 y la solicitud explícita de
l. 116?), l. 75 `required`/`relevant`/`optional` sin granularidad,
l. 126/160 «límites cuantitativos disponibles» sin caso vacío,
`budget_profile`/`producer`/`consumer` ausentes, «capacidad» como
destinatario; S11/ADR-010: ocho esquemas `*/v1` sin el packet (l. 100-181),
`evidence-event/v1` y `diagnostic/v1` (l. 160) como posibles lugares del
registro de carga y del «diagnóstico auditable» no enlazados desde S06,
ADR-010 l. 137 (CAS para packets); S09: l. 80 «política canónica
versionada» como posible fuente de «versión de políticas o permisos»
(pregunta 4 de `B023`) y de `constraints` (pregunta 5 de `B024`), l. 59
(secretos fuera de los packets). `B024` comprobó que el rango 76-139 es
exacto, que los once campos de l. 78-90 coinciden con la fila l. 44 y los
seis tipos de l. 98-105 con la fila l. 45, que l. 112-116 repite las cinco
condiciones de l. 46 y l. 123-133 la fila l. 50 sin ampliar, que cinco
campos comparten nombre con `handoff/v1` sin declaración de equivalencia y
`base` difiere en contenido, que `schema` no tiene valor, que
`producer`/`consumer` no enlazan la identidad de S05 y admiten «capacidad»,
que `budget_profile` no está definido en ningún documento de `docs/`, que
el caso del adapter sin límites no tiene regla, que `manifest` (l. 90) omite
la clasificación y `budget_profile` de l. 123-124, que «material» no tiene
unidad, que `coordination` l. 105 y l. 136 no resuelven el enlace handoff →
packet (`REV-2026-046` límite cerrado para el rango), que l. 116-117 y
l. 132-133 no añaden lugar ni destinatario (`REV-2026-047` sin novedad),
que el único enlace (l. 135 → ADR-004) resuelve, que el rango no contiene
URL ni investigaciones y que no da salida a `REV-2026-017`-`REV-2026-020`.
Pistas de [B023](blocks/B023.md) para `B024` quedaron respondidas en su
checkpoint, pistas (a)-(n), y en `REV-2026-048`/`REV-2026-049`. Pistas de
`B023` para `B025` (l. 140-193) quedaron respondidas en el checkpoint de
`B025`, pistas (l)-(p), y en `REV-2026-050`-`REV-2026-052` (la pregunta 5
de `B023` pasa a `REV-2026-051`; la 3 respondida en negativo para S06 en
`REV-2026-052`; la 1 y la 4 siguen). Pistas de `B023` para `B026`
quedaron respondidas en el checkpoint de `B026`, pistas (b) y (d)-(g), y en
`REV-2026-053`/`REV-2026-054`. Pistas de `B023` para bloques posteriores:
bloques de ADR-005 (`B041`-`B043`): «Referencias» l. 130-139 sin RTK/Context
Mode (`REV-2026-045` hecho 1), «Puntos abiertos» l. 118-128 como único
inventario con marcas «resuelto en…» editadas tras la fecha del ADR y con
destino distinto de l. 56 (`REV-2026-045` hecho 4; pregunta 6 de `B023`),
ausencia del campo handoff → packet (`REV-2026-046` hecho 5), punto 12
(l. 100-102) coincide con l. 53-54, l. 96 «falta de una fuente autorizada»
(`REV-2026-047`); `CT01`: `REV-2026-017`-`REV-2026-020` siguen sin salida
tras l. 1-75 de S06 (`017` parcial por l. 52 «contradicción crítica» sin
lugar ni cierre; `020` con otra parada sin destino), l. 17/44/49/88 (el
packet no obtiene autoridad, en la letra), l. 46/52 «autorizado» sin fuente
de autoridad, pregunta 3 de `B023`; `CT02`: `REV-2026-047` (parada sin
estado de S04 ni handoff de S05; tercera fuente de entradas a
`waiting`/`blocked` sin regla, con `REV-2026-027`/`037`), l. 47 «estado del
handoff» frente al mapa handoff → `status`; `CT03`: `REV-2026-046` (enlace
handoff → packet sin campo; sucesor inalcanzable desde `references`
inmutable), l. 57 identidad/aliases del packet → S08 sin retorno, l. 50 «El
adapter añadirá los límites» como primera obligación de un adapter antes de
S08, pregunta 4 de `B022`; `CT05`: `REV-2026-046` hecho 5 y `REV-2026-047`
frente a ADR-005, preguntas 1, 2 y 4 de `B023`, contraste 11 de `B023`
(capas del packet frente a capas del handoff: `sufficiency` sin par),
contraste 3 (S06 no recibe lagunas de S05), l. 47 ↔ ADR-003 l. 62-65
(atribución exacta); `CT07`: `REV-2026-045` hechos 3-4 (criterio que omite
un término del índice, con `REV-2026-026`/`034`/`044`; `deferred` con
destino nominal y sin retorno, con `REV-2026-015`/`023`/`035`; inventario
divergente unidad/ADR, con `REV-2026-025`/`028`/`035`/`036`),
`REV-2026-005` confirmada para l. 1-75 (ninguna práctica ni investigación),
`REV-2026-046`/`047` como omisiones silenciosas sin fila `deferred`,
pregunta 6 de `B023`, tracker de definición l. 379-380, la pregunta 4 de
`B006` sigue abierta para S06 hasta `B026`; S08/ADR-007: l. 56-58 recibidos
en S08 l. 114-115 y ADR-007 l. 104 (por búsqueda), l. 50 y pregunta 2 de
`B023`; S11/ADR-010: l. 56 y S11 l. 91/200 (RTK/Context Mode → S12),
representación física del packet y campo handoff → packet
(`REV-2026-046`); S12: medición de RTK/Context Mode (tracker l. 307;
ADR-005 l. 125); S09: políticas o permisos versionados (pregunta 4 de
`B023`). `B023` comprobó que el rango 1-75 es exacto y que la tabla de
decisiones cae completa dentro, que el objetivo (l. 7-10) no reformula el
índice l. 64 pero ni él, ni las preguntas 1-5, ni el criterio l. 33-37
nombran «RTK y Context Mode» (sólo las filas l. 54-56, que deciden sobre
herramientas que ningún documento canónico identifica: `REV-2026-045`), que
la convención `accepted`/`rejected`/`deferred` se mantiene en toda la tabla
(3 `deferred` con destino nominal, sin retorno; ADR-005 amplía el destino a
S12), que S06 no nombra S05, «sesión 5», `handoff/v1`, el no bloqueo de S05
l. 259-260 ni las lagunas `REV-2026-036`/`043`, que ninguna fila recibe S05
l. 66 ni fija el campo handoff → packet (`REV-2026-046`; pregunta 3 de
`B022` respondida en negativo), que las fechas de S06 l. 3 y ADR-005
coinciden (2026-09-18), que las remisiones a ADR-004 (l. 14) y ADR-003
(l. 47) son exactas, que el rango no contiene investigaciones ni URL, que la
parada de l. 50/52 y el «diagnóstico auditable» de l. 51/66 no tienen
destinatario, handoff, estado ni productor en toda la unidad
(`REV-2026-047`), que las fuentes primarias de RTK y Context Mode confirman
l. 53-54 con matices que ninguna unidad recoge, y que l. 1-75 no dan salida
a `REV-2026-017`-`REV-2026-020`. Pistas de [B022](blocks/B022.md) para
`B023` quedaron respondidas en su checkpoint, pistas (a)-(g), y en
`REV-2026-045`-`REV-2026-047`. Pistas de `B022`
para `B026` quedaron respondidas en el checkpoint de `B026`, pistas (a)-(d),
y en `REV-2026-053`/`REV-2026-054`. Pistas de `B022` para bloques posteriores:
bloques de ADR-004 (`B038`-`B040`): `REV-2026-044` hechos 3 y 6 (el ADR no
registra la auditoría; «Puntos abiertos» l. 118-125 no recogen las
omisiones de `REV-2026-039`/`040`/`042`/`043`); `CT02`: `REV-2026-044`
hecho 3 (auditoría sin contraste con S04/ADR-003; tracker de definición
l. 357-360 como única afirmación), preguntas 1, 3, 5 y 6 de `B022`, pistas
(f), (g), (i), y las preguntas 2 y 4 de `B018` respondidas en negativo;
`CT05`: preguntas 1 y 3 de `B022`, `REV-2026-044` hecho 2 (caducidad
declarada sin nombrar frente a `REV-2026-039`); `CT01`:
`REV-2026-017`-`REV-2026-020` siguen sin salida tras toda S05 (`020`
parcial por `consultation`), pregunta 6 de `B022`, l. 248 «autoridad» sin
criterio (`REV-2026-018`); `CT03`: pregunta 4 de `B022` (adapters y
transporte diferidos tres veces, l. 40, 79, 265, sin sesión en la unidad);
`CT07`: `REV-2026-044` (patrón de cierres en S01-S05; criterio que amplía
el índice y cierre que lo reduce; auditoría enumerada sin contraste; área
l. 117 sin declaración en S04 ni S05; pendientes sin inventario en la
unidad), `REV-2026-005` confirmada para toda S05 (límite cerrado),
`REV-2026-036`/`038`-`043` como omisiones silenciosas sin fila `deferred`,
tracker de definición l. 357-360 (y l. 379-380, 407, 420, 447 para
S06-S12) como constancia de auditoría fuera de las unidades, preguntas 1, 2
y 4 de `B022`, la pregunta 4 de `B006` abierta para S06-S07; S08/ADR-007:
`REV-2026-038`/`042`, pregunta 6 de `B021`, pregunta 4 de `B022`;
S11/ADR-010: `REV-2026-036`/`043`, l. 59, pregunta 3 de `B022`. `B022`
comprobó que el rango 234-266 es exacto, que el criterio l. 236-241
contiene los seis términos de la fila del índice l. 63 y añade siete
elementos, cuatro preservaciones y el no bloqueo para S06 (invierte el hecho
2 de `REV-2026-034`), que el cierre no nombra caducidad, cancelación,
fuentes canónicas ni evidencia, que las cinco confirmaciones de l. 252-260
releen las filas l. 59-60, 69-70, 78, 79, 80 y 62 sin nombrar S04, ADR-003
ni las ambigüedades `REV-2026-027`/`033`/`020` (S05 nombra ADR-003 y la
sesión 4 sólo en l. 22), que «ingestión» (l. 254) corresponde a l. 70/78
(entrada al lifecycle tras la validación estructural) y que el rango no
nombra actor alguno (`REV-2026-040` límite cerrado para toda S05), que
l. 257-258 y S04 l. 109 son compatibles sólo bajo una lectura que ninguna
unidad escribe, que el cierre no declara resuelta ni diferida la pregunta 8
ni S04 l. 299 con ninguna palabra (`REV-2026-036` límite cerrado), que el
enlace a ADR-004 (l. 263) resuelve con fecha coincidente y «Puntos
abiertos» como único inventario (sin anotación análoga a `REV-2026-025`/
`035` porque S05 no tiene inventario propio), que los enlaces entrantes al
ancla resuelven (índice l. 85 y 182, tracker l. 342, `definition/README.md`
l. 14), que l. 263-265 describe la sesión 6 como subconjunto del índice
l. 64 (sin RTK y Context Mode, que S06 sí trata) y que l. 234-266 no dan
salida a `REV-2026-017`-`REV-2026-020`. Pistas de [B021](blocks/B021.md)
para `B022` quedaron respondidas en su checkpoint, pistas (c), (e), (f),
(g) y (l), y en `REV-2026-044`. Pistas de `B021` para bloques posteriores: bloques
de ADR-004 (`B038`-`B040`): punto 5 (l. 76-78) omite «no se permite rechazo,
caducidad ni sustitución tardíos» (S05 l. 175); punto 7 (l. 82-86) omite
«seguimiento requerido» y «referencias afectadas» (S05 l. 228-229); punto 9
(l. 91-94) repite la lista de inmutables sin tiempos y la idempotencia sin
definir «contenido» (`REV-2026-043`); punto 11 (l. 98-99) repite «se reanuda
o cancela coordinadamente» sin partes (`REV-2026-042`); «Consecuencias»
l. 107-108 nombra al orchestrator para reconciliar «antes de aplicar un
handoff», único actor nombrado en S05/ADR-004 para ese paso (pregunta 1 de
`B021`); `CT02`: `REV-2026-042`, `REV-2026-037` (límite cerrado en negativo:
el contrato entero no escribe el mapa handoff → `status`), `REV-2026-033`
(l. 228 `failed` sin enlace a S04 l. 279 en todo el contrato), preguntas 1,
5 y 6 de `B021`; `CT05`: pregunta 1 (actor de la operación atómica: ADR-004
l. 107-108 frente a S05 l. 156/174 y S04 l. 110), pregunta 2 (`permissions`
l. 122 frente a l. 216 «salvo asignación separada» y S04 l. 108/112),
pregunta 4 de `B020` (`expected_verdict`, no mencionado en l. 210-232),
`REV-2026-043` (capa estructural sin valor de referencia para «tiempos»);
`CT01`: l. 191-192 coherentes con S03; pregunta 5; `REV-2026-018`/`020`
sin cambios; `CT03`: pregunta 3 (tipos de relación de `correlation` sin
enumeración), pregunta 6 (identidad lógica del owner entre sesiones; S08
l. 311 sólo por búsqueda); `CT07`: `REV-2026-042`/`043` como omisiones
silenciosas sin fila `deferred` (junto a `REV-2026-036` hecho 6,
`REV-2026-038`/`039`/`040` y `REV-2026-028`/`035`), umbral de abandono
sin sesión, `REV-2026-005` confirmada para l. 152-233, criterio l. 238 como
declaración de cobertura no enumerada. `B021` comprobó que l. 152-233 son
coherentes con las filas l. 57-80 (contrastes 1-18: estados, matriz,
integridad, recuperación, semántica y resultado mínimo coinciden) y con S04
l. 89-116 y 272-300 en lo que citan, que la matriz es del handoff y no de la
tarea (`REV-2026-027` ni se hereda ni se cierra), que ningún pasaje escribe
el mapa handoff → `status` (`REV-2026-037` límite cerrado) ni nombra un
actor de validación, rechazo u operación atómica (`REV-2026-040` límite
cerrado; «orchestrator», «runtime», «adapter» ausentes del rango), que
l. 156/160 atribuyen aceptación y rechazo al «receptor», que l. 217 y 229
no sitúan a la persona ni resuelven a qué `authority` se atribuye la
decisión (`REV-2026-038`/`041` sin novedad), que `expected_verdict` no
aparece en l. 210-232, que el rango no contiene enlaces, fuentes ni
aplazamientos con marca y que no da salida a `REV-2026-017`/`018`/`019`
(parcial a `020`, sin cambios). Pistas de [B020](blocks/B020.md) para
`B022` quedaron respondidas en su checkpoint, pistas (c) y (d), y en
`REV-2026-044` (las pistas para `B021` quedaron respondidas en su
checkpoint, pistas (a)-(i), y en `REV-2026-042`/`REV-2026-043`).
Pistas de `B020` para bloques posteriores: bloques de ADR-004
(`B038`-`B040`): «Decisión» punto 3 (l. 69-72) dice «tiempos» sin nombrar
`expires_at`/`due_at` ni su condición, punto 4 (l. 73-75) repite las cuatro
comprobaciones sin actor ni clasificación mecanizable/semántica, punto 9
(l. 91-94) declara inmutable «autoridad», l. 42 «campos condicionales» como
coste, «Puntos abiertos» l. 120-121 (identidad → sesión 8/ADR-007) y
l. 124-125 (controles de permisos y riesgo → sesión 9) como únicos destinos
de `REV-2026-038` (a) y de la pregunta 5 de `B020`, no enlazados desde S05;
`CT02`: `REV-2026-038`, `REV-2026-040` (complementaria de `REV-2026-037`:
hueco anterior a `accepted`), `REV-2026-041`, preguntas 1, 2, 3 y 6 de
`B020`, `base` l. 105 «estado … esperados» como único enlace del rango con
el `status` de S04 sin nombrar valores; `CT05`: `REV-2026-040` frente a S04
l. 112, `REV-2026-039` (capa estructural sin condición escrita), preguntas
4 (`expected_verdict`) y 5 (`policy_denied` «por riesgo»: quién clasifica;
S09 l. 32 por búsqueda), contraste 8 de `B020` (l. 122 coherente con S04
l. 103-107 sin enumerar grados); `CT01`: l. 107 coherente con S03; l. 106
`authority` presupone criterios de autoridad del registro de fuentes (S03
l. 36, 56, 237): `REV-2026-018`/`019` sin salida; l. 141-142 frente a
`REV-2026-017` (sin categoría para originales contradictorios);
`REV-2026-020` parcial; `CT03`: l. 84-86 frente a S08 l. 124, 210-211, 216
(`actor_id`, `actor_type`, selectores; fuera del alcance, sólo por
búsqueda; «persona» tampoco aparece en S08) y ADR-004 l. 120-121: si S08
cierra `REV-2026-038` (a) sin que S05 lo enlace; `CT07`:
`REV-2026-038`/`039`/`040` como omisiones silenciosas sin fila `deferred`
(junto a `REV-2026-036` hecho 6 y `REV-2026-028`/`035`), ADR-004 l. 120-125
como único inventario con destinos, `REV-2026-005` confirmada para
l. 82-150. `B020` comprobó que l. 82-150 son coherentes campo a campo con
las filas l. 59-80 (contrastes 1-12: identidad, envoltura, payloads, capas
y categorías coinciden; l. 148 «próxima acción» del rechazo y l. 63
decisión del orchestrator sin regla de precedencia, pregunta 2), con S04
l. 103-108 y 112 (l. 115-116 ↔ l. 108; l. 122 ↔ l. 103-107, 112) y con
ADR-004 «Decisión» (resume sin ampliar), que el rango no contiene enlaces,
fuentes ni aplazamientos con marca (las omisiones halladas son silenciosas),
que no da salida a `REV-2026-017`/`018`/`019` (parcial a `020`) y que
ninguna categoría de rechazo implica por sí misma una transición de S04
(`REV-2026-037` hecho 5 sigue en l. 63). Pistas de
[B019](blocks/B019.md) para `B022` (S05), ya respondidas (las
pistas para `B020` quedaron respondidas en su checkpoint, pistas (a)-(i), y
en `REV-2026-038`-`REV-2026-041`; las pistas para `B021` quedaron
respondidas en su checkpoint, pistas (a)-(h), y en `REV-2026-042`/
`REV-2026-043`: las preguntas 4 y 6 de `B019` siguen sin respuesta en el
contrato y pasan a `REV-2026-042`; la pregunta 2 continúa como pregunta 1
de `B021`; las pistas para `B022` quedaron respondidas en su checkpoint,
pistas (a), (b), (h), (i) y (k), y en `REV-2026-044`). Pistas de `B019` para
bloques posteriores: bloques de ADR-004 (`B038`-`B040`): «Puntos abiertos»
l. 116-125 como único inventario con destinos (`REV-2026-036` hecho 5;
l. 120-123 «resuelto en sesión 8/6» editados tras la fecha del ADR sin
nota, patrón `REV-2026-015`/`025`), «Por qué la decisión (qué dice la
industria)» l. 52-60 y referencias l. 131 y siguientes que S05 no enlaza,
«Consecuencias» l. 107-112 frente a `REV-2026-037`, contraste de «Decisión»
l. 61-101 con la tabla l. 52-80; `CT02`: `REV-2026-036` (esperas sin
receptor fuera del contrato), `REV-2026-037` (mapa handoff → `status`;
«reconciliación operativa» sin definición, responsable ni evento; `bloquear`
de l. 63 exige `ready → blocked`, `REV-2026-027`), pistas (a)-(d), (f), (i)
y preguntas 1, 2, 4 y 6 de `B019`; `CT05`: preguntas 2 (quién ejecuta la
operación atómica de l. 59) y 3 de `B019`, `REV-2026-037` hecho 4 (S04
l. 298 «al responder» frente a S05 l. 76 «después»); `CT01`:
`REV-2026-017`-`REV-2026-020` siguen sin salida tras l. 1-80 de S05 (`020`
parcial: `consultation` persiste la consulta dirigida; la espera sin
receptor, el cambio sin confirmar y la discrepancia siguen «sólo en el
tracker», l. 54), l. 19-22 y 72, pregunta 3; `CT03`: l. 71 (aliases,
identidad canónica), pregunta 1, l. 40/79 (adapters y transporte sin
sesión); `CT07`: `REV-2026-036` (aplazamiento de S04 l. 299 recibido sin
acuse; S05 sin sección de diferidos; junto a `REV-2026-015`/`023`/`025`/
`028`/`035`), `REV-2026-005` confirmada, pregunta 6, y el contraste 4 de
`B019` (S05 sí registra alternativas `rejected`, l. 55-56: la convención no
es uniforme, pregunta 5 de `B014`). `B019` comprobó que S05 l. 22 toma de
S04 el principio (l. 108-110) y no la máquina de estados —los estados de S04
y `draft` no aparecen en S05 ni en ADR-004; la «matriz de transiciones» de
S05 l. 170 es la del handoff, no la de tarea/sesión, así que `REV-2026-027`
ni se hereda ni se cierra—, que l. 63 no contradice S04 l. 96/109, que S05
l. 62 no fija el umbral de abandono, que S05 no recibe S04 l. 299 ni decide
rutas/ubicación (destino sólo en ADR-004 l. 118-119 → sesión 11), que
l. 1-80 no nombran las ambigüedades de S04 ni la auditoría, que la apertura
no reformula el índice l. 63 y no cita investigaciones (no existe
investigación de handoffs en `docs/`), y que l. 71 anticipa la identidad
lógica del owner sin definirla. Pistas de [B018](blocks/B018.md) para
`B019`-`B022`, ya respondidas (las pistas para `B019` quedaron
respondidas en su checkpoint, pistas (a)-(j), y en `REV-2026-036`/
`REV-2026-037`): S05 l. 217 frente a los cinco tipos de S04 l. 298
(respondida por `B021`, pista (e): sin novedad respecto de `REV-2026-041`;
l. 123 respondida en `REV-2026-041`); pregunta 2 de `B018` y quién
comprobó S04 l. 325: respondidas en negativo por `B022`, pistas (f) e (i)
(S05 no nombra S04, ADR-003 ni las ambigüedades; sólo el tracker de
definición l. 357-360 afirma una auditoría «frente a ADR-003», sin
contenido; siguen para `CT02`); el criterio de S05 frente a la fila del
índice l. 63 y su cierre: respondidas por `B022`, pistas (a) y (b), y en
`REV-2026-044`. Pistas de
`B018` para bloques posteriores: bloques de ADR-003: `REV-2026-035`
(l. 112-121 como único inventario con destinos, no enlazado desde S04 para
ese fin; l. 117 «resueltos en sesión 8 y ADR-007» editado tras la fecha del
ADR sin nota, patrón `REV-2026-015`/`025`) y `REV-2026-034` (el ADR no
registra la auditoría ni las ambigüedades consideradas); `CT02`: preguntas 2
y 4 de `B018`, `REV-2026-034` hecho 4; `CT05`: pregunta 4 de `B018`,
`REV-2026-035`; `CT07`: `REV-2026-034` (patrón de cierres en S01-S04 junto a
`REV-2026-011`/`016`/`024`; auditoría sin rastro; cobertura no declarada;
acuerdos fuera del criterio) y `REV-2026-035` (junto a `REV-2026-015`/`023`/
`025`/`028`/`032`; residuo sin sesión: umbral temporal, subpasos, rutas de
specs, herramientas, revisión transversal), preguntas 1, 3, 5 y 6 de `B018`,
índice l. 128 y 146-163 como criterio global que consumirá los cierres;
`CT01`: `REV-2026-017`-`REV-2026-020` siguen sin salida tras toda S04 (`020`
parcial por l. 298). `B018` comprobó que el cierre tiene fila para cada
elemento que declara definido (l. 85, 89-102, 108-110, 115-116, 274-280,
298), que el criterio reformula la fila del índice l. 62 (omite «Bootstrap»
y «ejecución») y el cierre repite el criterio, que la «auditoría final» de
l. 322 no tiene registro en S04, ADR-003 ni el tracker de definición (S05
l. 250-260 sí enumera confirmaciones), que el no bloqueo se afirma sin
enumerar frente a `REV-2026-027`/`033`/`020`, que el cierre no menciona la
cláusula de prácticas (l. 312-313), l. 289-292, «Bootstrap», el ciclo
colaborativo ni las filas de proceso l. 144-148, que l. 325-326 afirma
«sesión de resolución asignada» cuando en la unidad sólo l. 250 y 299 nombran
sesión y «adapters» no está diferido en S04 (única mención: l. 111), y que
l. 307-328 no dan salida a `REV-2026-017`-`REV-2026-020`. Pistas de
[B017](blocks/B017.md) que siguen abiertas para bloques posteriores (las
pistas para `B018` quedaron respondidas en su checkpoint, pistas (c), (d),
(e) y (g), y en `REV-2026-034`/`REV-2026-035`): bloques
de ADR-003: punto 3 (l. 53-56) repite l. 279-280 sin resolver
`REV-2026-033`; punto 11 (l. 88-91) coincide en sustancia con l. 298 pero
omite la enumeración de tipos; «Detalles diferidos» (l. 112-121) no recoge
l. 248, 249, 253 ni OpenSpec/Spec Kit (pregunta 6 de `B017`); `CT02`:
`REV-2026-033` (qué handoff materializa el retorno parcial y la
reautorización; `verification_request` con veredicto `failed`, S05 l. 76, como
«hallazgo»), l. 298 frente a S05 l. 54, 123 y 217 (tipos y campos de
`consultation`; espera sin destinatario sólo en el tracker) y preguntas 2, 3 y
4 de `B017`; `CT05`: `REV-2026-033` frente a ADR-003 punto 3, l. 298 frente al
punto 11, pregunta 2 de `B017`; `CT07`: `REV-2026-032` (junto a
`REV-2026-005`/`022`; índice l. 128-135), l. 299 sin marca de retorno (patrón
`REV-2026-023`) y l. 246-253 sin estado (`REV-2026-028`, pista (b) de
`B017`), preguntas 4, 5 y 6 de `B017`; `CT01`: pregunta 1 de `B017`
(l. 240-242 «se registran hallazgos en `build`»: en la spec, el tracker u otro
registro) y `REV-2026-017`-`REV-2026-020` siguen sin salida tras l. 1-306 de
S04 (`020` parcial: l. 298 fija el contenido mínimo de una consulta abierta o
espera, no su lugar ni el destino de un cambio de requisito sin confirmar o
una discrepancia detectada); pregunta 4 de `B017` y el destino de l. 250/299: respondidas por `B022`,
pista (h) (el cierre de S05 no nombra rutas, persistencia ni S04 l. 299;
`REV-2026-036` límite cerrado; siguen para `CT07`); la pregunta 3 de `B017`
quedó respondida para l. 123 en `REV-2026-041` y para l. 217 en `B021`,
pista (e). `B017` comprobó que l. 270-293 y l. 294-306 contienen
acuerdos con estado, de modo que l. 220-222 se apoya en filas (pista (a));
que la lista l. 246-253 no tiene estado ni marca de retorno, que sólo l. 250
nombra sesión, que l. 248 copia un pendiente de proceso de
`proposal-efficient-workflow.md` l. 152-154 (`REV-2026-030` hecho 7) y que
faltan en ella el umbral temporal, los runbooks de `Maintain`, los worktrees,
la concreción del metaflujo (l. 261-263) y las rutas/formatos de specs (l. 78,
244), confirmando `REV-2026-028` hecho 3 sin duplicarlo (pista (b)); que
l. 270-293 no es un mapa del ciclo colaborativo a etapas (`REV-2026-029`
sigue; l. 274 ↔ l. 88 refuerza su lectura (ii) sin que la unidad lo diga:
pista (e)); que «Especificaciones evolutivas» (l. 224-245) es coherente con
S03 l. 37/53 y con las filas l. 77-80, no menciona estados (`REV-2026-027`
intacta), repite un aplazamiento embebido (l. 243-244, ruta de
almacenamiento, sin destino) y su atribución de l. 233-235 se confirma en
fuente primaria (Spec Kit `evolving-specs.md` en el commit fijado usa
«living», «flow-forward» y «flow-back»); y que el artículo de OpenAI «Harness
engineering» siguió inaccesible (HTTP 403), como en `B011`/`REV-2026-005`.
Pistas de [B016](blocks/B016.md) que siguen abiertas para bloques posteriores
(las pistas para `B017` quedaron respondidas en su checkpoint, pistas
(a)-(i); las pistas para `B018` quedaron respondidas en su checkpoint, pistas
(c), (f) y (g), y en `REV-2026-034`: la pregunta 2 de `B016` pasa a la
pregunta 1 de `B018`): bloques de ADR-003: el ADR no
recoge la distribución de modelos (coherente con `REV-2026-030`); punto 4
sigue más laxo que S04 l. 95 y que la prosa l. 161-162 (`REV-2026-027`);
`CT02`: pregunta 6 de `B016` (persistencia de la presentación de readiness y
la autorización de l. 214-217; estado de las tareas al volver a `plan`) y
l. 185-186 como salida genérica frente a `handoff/v1`; `CT05`: pregunta 1 de
`B016` (precedencia tabla/prosa, `REV-2026-031`), pistas (h), (j) y (k) de
`B016` (catálogo aceptado en l. 171; quién clasifica el verificador en
l. 194-203; `REV-2026-013`/`REV-2026-014` en l. 214-217); `CT07`:
`REV-2026-030` (notas de proceso con estado; única `rejected` de S04 es de
proceso; l. 248), `REV-2026-031` (cierre declarado sin enumerar, junto a
`REV-2026-024`/`026`) y preguntas 2, 4 y 5 de `B016`; `CT01`:
`REV-2026-017`-`REV-2026-020` siguen sin salida tras l. 1-223 de S04. `B016`
comprobó que la tabla l. 144-148 son notas de proceso con estado (lo dicen
l. 146-147, lo posee `proposal-efficient-workflow.md` con su propio `accepted`
sin enlace desde S04, `AGENTS.md` l. 52-63 lo repite sin estado y la operación
real ya divergió: Fable en `AGENTS.md` l. 50, Astra invocado según el tracker
l. 111-113), que l. 148 es exacta a su fecha (`opencode.jsonc`,
`.opencode/agents/` y cuatro fuentes externas), que l. 150-153 ata a `plan`
sólo el cambio de interfaz o criterio de aceptación (parcial; `REV-2026-029`
sigue), que la prosa de l. 155-222 repite la máquina de estados sin cerrar
`REV-2026-027` (l. 161-162, 167, 171, 185) ni `REV-2026-028` (l. 187) y con
omisiones que debilitan l. 87 y l. 88 sin regla de precedencia
(`REV-2026-031`), y que l. 139-223 no dan salida a
`REV-2026-017`-`REV-2026-020` (parcial para `020`: l. 158-159, 209-210 y la
remisión de l. 220-222 a l. 294-306). Pistas de [B015](blocks/B015.md) que
siguen abiertas para bloques posteriores (las de `B017` quedaron respondidas
en su checkpoint, pistas (b), (c) y (e); la de `B018` sobre el ciclo
colaborativo ausente del criterio y del cierre quedó confirmada en su pista
(h) y en `REV-2026-034` hecho 6, y la pregunta 5 de `B015` pasa a la pregunta
6 de `B018`): bloques
de ADR-003: el ADR no recoge el ciclo colaborativo (pregunta 6 de `B015`);
`CT01`: destino de las búsquedas y análisis de los agentes (l. 120, 128;
pregunta 2 de `B015`); `CT02`: pregunta 4 de `B015` y `REV-2026-029` (evento
que inicia el trabajo autónomo); `CT05`: `REV-2026-029`, preguntas 3 y 6 de
`B015` y la extensión de `REV-2026-013`/`REV-2026-014` a l. 118-137 (pista
(d)); `CT07`: pregunta 5 de `B015` y `REV-2026-029` junto a `REV-2026-028`.
`B015` comprobó que el ciclo es decisión de producto (l. 129, 134; filas
l. 72-73; S02 l. 86-88) y no proceso del proyecto, que l. 118-138 no dan
salida a `REV-2026-017`-`REV-2026-020` (parcial e inversa para `020`: l.
135-137 reabre con la persona sin decir dónde queda la incógnita) ni repiten
o cierran `REV-2026-027`/`REV-2026-028`, y que la prosa l. 118-121 y 131-137
es coherente con las filas l. 72-73, 76, 79, 85 y con S02 l. 64-87. Pistas de
[B014](blocks/B014.md) que siguen abiertas para bloques
posteriores (la pista para `B016` sobre la máquina de estados en prosa quedó
respondida en su checkpoint, pista (c): repite sin cerrar; las pistas para
`B017` quedaron respondidas en su checkpoint, pistas (b), (f), (g) y (h), y
en `REV-2026-033`; la pista para `B018` sobre l. 325-326 quedó respondida en
su pista (d) y en `REV-2026-035`, y la de `REV-2026-026` hecho 5 en su pista
(b)): bloques de ADR-003:
punto 4 más laxo que S04 l. 95 (`REV-2026-027`), «Detalles diferidos»
(l. 112-121) como inventario divergente (`REV-2026-028`), las dos frases del
punto 3 sin fila en la tabla, l. 118 frente a la pregunta 3 de `B014`,
preguntas 5 y 7 de `B013` y 7 de `B014`; `CT02`: `REV-2026-027` (estados de
sesión y tarea frente a `handoff/v1`; S05 l. 62 «sin convertir el paso del
tiempo en abandono» frente al umbral de S04 l. 109), pregunta 4 de `B014`
(identidad del owner entre sesiones) y las pistas (c), (f), (g) y (o) de
`B014`; `CT05`: `REV-2026-027`/`028`, preguntas 1, 2 y 7 de `B014`, extensión
de `REV-2026-013`/`REV-2026-014` a S04/ADR-003; `CT07`: `REV-2026-028` junto a
`REV-2026-015`/`023`/`025`/`026`, preguntas 3 y 5 de `B014`, y la lista de
preguntas abiertas del índice sustituida sin disposición visible. `B014`
comprobó que la tabla coincide en sustancia con la «Decisión» de ADR-003
(puntos 1-12), que l. 109 y 115 sostienen la lectura «arranque de sesión» de
`REV-2026-026` sin mencionar la incorporación del repositorio, que l. 109
acepta S03 l. 221 y l. 112 acepta el principio de S03 l. 223 sin sesión de
destino (S03 dice 12, índice y ADR-003 dicen 11: refuerza `REV-2026-022`), que
la revalidación selectiva es `accepted` en l. 79 (pregunta 2 de `B009`
respondida como principio), que S04 fijó criterios operativos de riesgo en
l. 104-106 sin enlazar la fila 3 de S02 ni la sesión 9 (pregunta 3 de `B008`
respondida en parte), que no hay fila `rejected` para la «propuesta previa»
de l. 110 pero S01 y S03 tampoco registran alternativas como filas (pregunta 3
de `B013` → pregunta 5 de `B014`), que «proporcional» en l. 50-52 significa
«sin paquete documental fijo» (pregunta 4 de `B013` → pregunta 8 de `B014`),
y que la tabla no da salida a `REV-2026-017`-`REV-2026-020` (parcial para
`020`: `waiting` como estado de una consulta abierta). Las preguntas 3 de
`B009`, 6 de `B010`, 1, 2 y 5 de `B007` y 5 de `B013` quedan respondidas sólo
en parte (pistas (c), (d), (e), (f), (g) y (k) de `B014`) y siguen para
ADR-003, S05, `CT02` y `CT05`. Pistas de [B013](blocks/B013.md) que siguen
abiertas (la de `B017` sobre l. 289-292 quedó respondida en `REV-2026-032`;
la de `B018` sobre el patrón de `REV-2026-011`/`016`/`024` en l. 319-327
quedó respondida en su pista (a) y en `REV-2026-034`; las preguntas 1 y 2 de
`B013` siguen para los bloques de S10 y `CT07`):
`CT02`: `REV-2026-017` sin rastro en S04 por búsqueda; `CT05`: pregunta 7;
`CT07`: preguntas 1, 2 y 6 y `REV-2026-026`. `B013` comprobó que l. 1-67 no
reciben las ambigüedades de `REV-2026-017`/`REV-2026-020`, que el objetivo
(l. 8-10) no reformula el índice pero el criterio de salida (l. 309-313) omite
«incorporar un repositorio»/«Bootstrap» (`REV-2026-026`), y que las
afirmaciones sobre el playbook (l. 62) y la investigación del orchestrator
(l. 55-58) se confirman en fuente primaria. Pistas de [B012](blocks/B012.md)
dirigidas a S04, ya respondidas: la pregunta 7 (S04 no recibe las
ambigüedades de `REV-2026-017`/`020`; `B013`-`B018`) y el patrón de cierres
(se repite: `REV-2026-034`); la pregunta 4 de `B006` quedó respondida para
S05 en `REV-2026-044` y sigue abierta para S06-S07. `B012` comprobó que el
cierre de S03 repite ese patrón (OKF reformulado, no bloqueo sin enumerar, área
3 sin declaración de cobertura: `REV-2026-024`), que no se apoya en l. 235 ni en
la matriz sino en l. 256 (persistencia, cuestionada por `REV-2026-020`), que el
enlace a ADR-002 resuelve y su «Decisión» coincide con S03 (incluida la regla de
discrepancias, pregunta 5 de `B009` respondida) pero sus «Puntos abiertos»
divergen de «Detalles aplazados» y dan por resuelto el esquema del registro con
el esquema de conocimiento (`REV-2026-025`), y que l. 242-262 no dan salida a
`REV-2026-017` ni `REV-2026-018`, vigentes tras toda S03. Pistas de `B012` para
bloques posteriores: preguntas 1 y 4 para S07/ADR-006 y `CT03`; preguntas 4 y 5
y `REV-2026-025` para los bloques de ADR-001/ADR-002 y `CT04`; preguntas 2, 3 y
`REV-2026-024` para `CT07`; preguntas 2, 4 y 6 para `CT01`. Pistas de
[B011](blocks/B011.md) que siguen abiertas: preguntas 1, 5 y 6 para S07 y
`CT03`/`CT01`; pregunta 7 y `REV-2026-022`/`REV-2026-023` para `CT07`;
`REV-2026-021`/`REV-2026-022` para `CT04` y los bloques de ADR-003.
Pistas heredadas de [B010](blocks/B010.md) que siguen abiertas: preguntas 1 y 3
para S07; preguntas 2, 5 y 7 y el registro como capa escrita por el agente para
`CT01`; pregunta 6 para ADR-003 (S04 respondida en parte por `B014`). Pistas
heredadas de [B009](blocks/B009.md): pregunta 3 para ADR-003 y `CT02`;
pregunta 1 para S08 y `CT07`; la indisponibilidad de la fuente canónica para
`CT01`. Además: las preguntas 1, 2 y 5 de [B007](blocks/B007.md) y la 3 de
[B008](blocks/B008.md) para los bloques de S09, `CT02`, `CT05` y `CT07` (S04
respondida en parte por `B014`); la 6 de `B007` para portabilidad; las
preguntas 1 y 4 de `B008` para el bloque de ADR-001; la 2 de `B008` y
`REV-2026-015` para `CT07`; la 3 de [B006](blocks/B006.md) (cuantificaciones
diferidas) para el bloque de ADR-002. `B001` sigue `stale` y aplazado; `B002`
y `B003` pasan a `stale` en esta pasada porque el índice rector cambió después
de la comprobación de `B003` (lista de preguntas abiertas sustituida y
encabezados desplazados; ver la pista (m) de `B014`): al retomarlos,
recalcular los localizadores (encabezados hoy en l. 94, 137, 146 y 165) y
comprobar si las diez preguntas de `REV-2026-004` recibieron disposición,
añadiendo una pasada nueva sin sobrescribir la anterior.

**Aplazado por decisión de la persona (2026-09-21):** `B001` sigue `stale` y
conserva su historial. No se reanaliza mientras la sesión 8 (S08) esté en curso,
porque `docs/product-definition.md` sigue cambiando. Al estabilizarse S08,
recomprobar las líneas 1-89, la tabla de unidades canónicas con la fila de S08 y
la vigencia de `REV-2026-001` a `REV-2026-003`, añadiendo una pasada nueva sin
sobrescribir la anterior. Esta prioridad prevalece sobre el orden por defecto
(`in_progress`, `stale`, `pending`).

**Condición cumplida (2026-09-25):** S08 figura `completed` en
`docs/definition/README.md` l. 17 y en su cabecera (S08 l. 3, cerrada el
2026-09-22), y también S09-S11; lo detectó `CT06`. Se hizo la pasada 2 de
[B001](blocks/B001.md) sin sobrescribir la primera: rango recalculado a 1-93,
tabla de unidades contrastada con S08-S12 y vigencia de `REV-2026-001` a
`REV-2026-003` recomprobada (las tres siguen vigentes y ampliadas, con nota
fechada). El aplazamiento queda agotado. Límite: S12 sigue `in_progress` y
podría volver a modificar el índice rector; si lo hace, `B001` vuelve a
`stale`.

## Cruces transversales

El alcance de cada cruce figura al final de [blocks.md](blocks.md).

| ID | Análisis | Discusión | Resultado |
| --- | --- | --- | --- |
| CT01 | `reviewed` | `deferred` | [CT01](blocks/CT01.md) (2026-09-25): `REV-2026-088` (síntesis y resúmenes del context packet sin comprobación de fidelidad: la regla de S03 «se corrige el resumen» sin disparador en S06/ADR-005), `REV-2026-089` (decisión de `consultation` completada sólo en un handoff inmutable, no canónico y sin capa en S03; corrección invisible desde el original y el marcador del packet), doce contrastes, disposición de las anotaciones asignadas (`017`-`020` confirmadas y ampliadas, `020` atenuada en parte; `040`, `047`, `049`, `052`, `057`, `059`, `060`, `068`, `069`, `082`, `083`, `087` confirmadas; ninguna cerrada), cinco preguntas pendientes y síntesis. Sin fuentes externas; S08/S09 sólo como contraste parcial |
| CT02 | `reviewed` | `deferred` | [CT02](blocks/CT02.md) (2026-09-25): `REV-2026-090` (liberación de ownership de S04 sin vehículo en `handoff/v1`; fin del ownership al completar o cancelar la tarea sin regla; el cierre de S05 afirma que el ownership sólo cambia por operación atómica), `REV-2026-091` (cierres y cancelaciones de tarea, incremento y sesión de S04 sin disposición de handoffs vivos; S05 sin regla para sujeto terminal), tabla de correspondencia evento de handoff × efecto en S04, doce contrastes, disposición de las anotaciones asignadas (`027`, `037`, `038`, `042`, `044` hecho 3, `081`, `089` confirmadas y ampliadas; `029`, `033`, `036`, `040`, `041`, `043`, `047`, `050` hecho 2, `073`, `074`, `075`, `079`, `080` confirmadas; ninguna cerrada), cinco preguntas pendientes y síntesis. Sin fuentes externas; S08/S11 sólo por búsqueda y lectura puntual (S11 l. 106, 137, 147) |
| CT03 | `reviewed` | `deferred` | [CT03](blocks/CT03.md) (2026-09-25): `REV-2026-092` (sesión de S04 sin identidad portable ni equivalencia con `execution_id` de S08; titular del ownership retenido —actor lógico o ejecución— sin fijar), `REV-2026-093` (metadato «aliases» de las entradas de conocimiento sin semántica ni receptor; S08 sólo define aliases de actor y ejecución), `REV-2026-094` (`current` de S08 resuelve a una «revisión vigente» sin regla frente a revisiones `draft` de S07; la regla de uso provisional de `draft` no está en ADR-006, que S08 l. 249 invoca; homónimo `current`), tabla objeto × identidad × portabilidad × destino, doce contrastes, disposición de las anotaciones asignadas (`059`, `087`, `090` confirmadas y ampliadas; `084` reforzada; `048`, `049`, `055`, `060` confirmadas y atenuadas en destino; `036`, `038`, `045`, `046`, `056`, `057`, `061`, `082`, `085`, `086` confirmadas; ninguna cerrada), cinco preguntas pendientes y síntesis. Sin fuentes externas nuevas (OKF por las comprobaciones de `B027`/`B028`/`B044`); S08, S11 y ADR-007 sólo como destino |
| CT04 | `reviewed` | `deferred` | [CT04](blocks/CT04.md) (2026-09-25): `REV-2026-095` (especificaciones y ADRs de S03/ADR-002 sin distinguir los acuerdos técnicos con la persona de las decisiones delegadas a T800R, distinción de la que dependen la consulta de S02/ADR-001 y el ajuste autónomo de S04 l. 79/85), tabla tema × fuente declarada × divergencias, doce contrastes, disposición de las anotaciones asignadas (`001`, `065`, `066`, `069` confirmadas y ampliadas; `063` con matiz al hecho 2; `021` atenuada en el par; `011`, `013`-`016`, `022`-`025`, `056`, `064`, `067`, `068`, `070`, `079` confirmadas; ninguna cerrada), cinco preguntas pendientes y síntesis (precedencia coherente en la letra y rota en el enrutado del tracker l. 318-319 y ADR-002 l. 152; S03 l. 53-54 sugiere por analogía la resolución de `REV-2026-001`; cuatro estados de edición en cuatro documentos del mismo día). Sin fuentes externas; S04 sólo como destino (l. 79-85, 224-255) |
| CT05 | `reviewed` | `deferred` | [CT05](blocks/CT05.md) (2026-09-25): `REV-2026-096` (reconciliación de S04/ADR-003 al iniciar o reanudar frente a la de S06/ADR-005 por marcadores sin regla de composición; ADR-005 l. 31-33 la convierte en incremental; marcadores sin cambios presentes, checkpoint ni otro escritor; cuatro sujetos; «contexto mínimo» sin relación con el packet ni con sus estados), `REV-2026-097` (S06, criterios y cierres de S08-S10 y auditorías del tracker l. 359-360 y 379-380 preservan ADR-003 a ADR-005 —resúmenes con pérdidas— en lugar de S04-S06; remisión de S05 l. 66 perdida por esa vía), tabla tema × fuente declarada × divergencias, doce contrastes, disposición de las anotaciones asignadas (`001`, `028`, `035`, `040`, `046`, `047`, `050`, `051`, `053`, `054`, `074`, `080`, `083`, `092`, `095` confirmadas y ampliadas; `013`, `014`, `027`, `029`-`034`, `037`, `048`, `049`, `052`, `071`-`073`, `075`, `076`, `079`, `081`, `082`, `084`, `088`-`091` confirmadas; ninguna cerrada), cinco preguntas pendientes y síntesis (las decisiones (a) y (b) de `CT04` no bastan: (a) debe alcanzar a los consumidores y (b) decir dónde viven las marcas; hace falta (c), correspondencia entre las tres máquinas de estados y las dos reconciliaciones). Sin fuentes externas; ADR-004 leído como dependencia; S08-S11 sólo en líneas citadas |
| CT06 | `reviewed` | `deferred` | [CT06](blocks/CT06.md) (2026-09-25): `REV-2026-098` (tolerancia de OKF para tipos desconocidos y extensibilidad por proyecto sólo en S07 l. 43, sin punto en ADR-006; S11 l. 72-73 y ADR-010 punto 4, receptores de la representación sin citar S07 ni ADR-006, fijan un núcleo cerrado que rechaza propiedades desconocidas, contra OKF §4.1/§11; dirección productor/consumidor de la compatibilidad sin fijar), tabla tema × fuente declarada × divergencias, doce contrastes, disposición de las anotaciones asignadas (`058`, `060`, `061`, `086`, `094`, `097` confirmadas y ampliadas; `087` ampliada con matiz —el tracker l. 219-220 conserva los disparadores—; `056` atenuada en el hecho 1; `001`, `025`, `054`, `055`, `057`, `059`, `062`, `085`, `093` confirmadas; ninguna cerrada), cinco preguntas pendientes y síntesis (doble inversión de precedencia —tracker l. 320 y S08 l. 249/382/409—; S07 hereda de ADR-005; ADR-006 punto 5 endurece la regla de `draft`; hace falta una decisión (d) sobre dirección y alcance de la compatibilidad OKF). Una fuente externa (OKF `SPEC.md` en el commit fijado, pregunta nueva sobre claves desconocidas); S08, S10, S11 y ADR-010 sólo como destino |
| CT07 | `reviewed` | `deferred` | [CT07](blocks/CT07.md) (2026-09-25): `REV-2026-101` (la terminación de esta revisión —45 bloques y siete cruces— no cubre S08-S12 ni ADR-007 a ADR-010, unas 1550 líneas, frente a la revisión «del canon vigente» que S12 l. 59 exige antes del piloto y cuyo alcance S12 l. 74-75 y el tracker de definición l. 15-17 dejan por decidir; el prompt l. 15-16 y la guía l. 13 preveían incorporar acuerdos nuevos al inventario), `REV-2026-102` (más de 45 remisiones a S12 en 17 documentos sin inventario de entrada; el criterio S12 l. 47-48 e índice l. 162 presuponen una enumeración que nadie mantiene; remisiones de eficacia de S10 l. 110/112/168/173, S11 l. 131, ADR-001 l. 121 y S04 l. 248 sólo observables tras construir y sin receptor posterior), `REV-2026-103` (capa de memoria de S03 l. 44/97/105-110, diferida a S08/S10/S11 en l. 239, sin lugar en la persistencia lógica de S11 l. 62 ni módulo en l. 157; investigación inconclusa sin destino en el MVP mientras S07 l. 45 regula la promoción desde memoria), tabla de las doce condiciones del índice × evidencia, tabla del patrón de cierre S01-S11, inventario único de 41 grupos de diferimientos (recibidos, sin dueño, destino S12 o posterior, sin destino), cobertura de la revisión transversal por área (seis de diez sin registro), diez contrastes, disposición de las anotaciones asignadas (`005`, `006`, `011`, `016`, `024`, `034`, `044`, `053`, `062`, `066`, `070`, `076`, `097` confirmadas y ampliadas —`066`/`070`/`076` a ADR-007 a ADR-009—; `003` confirmada como riesgo sin divergencia actual; `007` sin cambio; `012`, `015`, `022`, `023`, `025`, `026`, `028`, `032`, `035`, `036`, `038`-`043`, `045`, `046`-`052`, `054`, `055`, `057`-`061`, `064`, `067`, `071`, `081`, `084`, `085`, `087`, `099`, `100` confirmadas; ninguna cerrada), cinco preguntas pendientes y síntesis de la revisión completa (qué está listo para autorizar, decisiones (a)-(i) consolidadas y recomendación de orden). Una fuente externa reintentada (OpenAI «Harness engineering», HTTP 403, no usada); S08-S11 y ADR-007 a ADR-010 sólo como destino |

**Totales transversales:** 0 pendientes, 7 revisados (`CT01`-`CT07`),
discusión: 7 `pending`, 0 `not_ready`, 0 resueltas. Texto de la pasada
anterior (tras `CT06`): 1 pendiente (`CT07`), 6 revisados, discusión 6
`pending`, 1 `not_ready`. Tras `CT05`: 2 pendientes, 5 revisados, discusión 5
`pending`, 2 `not_ready`. Tras `CT04`: 3 pendientes, 4 revisados, discusión 4
`pending`, 3 `not_ready`. Tras `CT03`: 4 pendientes, 3 revisados, discusión 3
`pending`, 4 `not_ready`. Tras `CT02`: 5 pendientes, 2 revisados, discusión 2
`pending`, 5 `not_ready`. Tras `CT01`: 6 pendientes, 1 revisado, discusión 1
`pending`, 6 `not_ready`; antes: 7 pendientes, 0 revisados, 0 discusiones
resueltas.
**Para discutir ahora:** `B001` (`REV-2026-001`, `REV-2026-002`,
`REV-2026-003`, con análisis vigente desde la pasada 2 del 2026-09-25 y notas
de vigencia fechadas en cada anotación: las tres siguen abiertas y ampliadas;
`REV-2026-001` debe discutirse junto con la decisión (a) de `CT04`/`CT05` y
`REV-2026-097`; hay además tres preguntas pendientes en su checkpoint: la
fila 10 de la tabla de sesiones sin «retiro», los estados de sesión sin
definir y pistas para `B002`/`B003`; salvedad: S12 sigue `in_progress`; texto
anterior: análisis `stale`, las anotaciones siguen siendo discutibles con
esa salvedad), `B002` (`REV-2026-004`, `REV-2026-005` y `REV-2026-099`, con
análisis vigente desde la pasada 2 del 2026-09-25 y notas de vigencia
fechadas: `004` atenuada en parte, `005` ampliada a S08, S09 y S11, `099`
nueva sobre preguntas abiertas que S12 sitúa después de autorizar; conviene
discutir `099` junto con `REV-2026-006` y el criterio de salida de S12; tres
preguntas pendientes en su checkpoint; salvedad: S12 sigue `in_progress`;
texto anterior: análisis `stale` desde
2026-09-24 porque la lista de preguntas abiertas del índice que `REV-2026-004`
documenta fue sustituida: la anotación sigue siendo discutible con esa
salvedad, y la nueva pasada debe comprobar si las preguntas retiradas
recibieron disposición), `B003` (`REV-2026-006`, `REV-2026-007` y
`REV-2026-100`, con análisis vigente desde la pasada 2 del 2026-09-25 y notas
de vigencia fechadas: `007` cerrada en su núcleo por cambio del canon —
l. 155-156 incorpora adopción, actualización y retiro— y pendiente sólo de
disposición humana; `006` atenuada en parte —S12 l. 41 y 49-50 fijan dónde se
registra la autorización—, con residuo: índice sin aprobación ni actor, sin
evidencia por condición y dos criterios solapados; `100` nueva: S08-S11,
ADR-007/008/010 y el tracker de definición asignan a S12 ejecutar o certificar
conformidad, que S12 l. 56-57 convierte en gate posterior sin marca; conviene
discutir `006`, `099` y `100` juntas y antes del cierre de S12; tres preguntas
pendientes de la pasada 2 y tres de la pasada 1; salvedad: S12 sigue
`in_progress`; texto anterior: análisis `stale` por desplazamiento del
localizador, contenido no recomprobado), `B004`
(`REV-2026-008`, `REV-2026-009` y cuatro preguntas pendientes en su checkpoint) y
`B005` (`REV-2026-010` y cinco preguntas pendientes en su checkpoint; la pregunta
4 toca la portabilidad, en curso en S08) y `B006` (`REV-2026-011`,
`REV-2026-012` y cuatro preguntas pendientes en su checkpoint; `REV-2026-012`
pide decidir pronto si se mide la línea base del coste de preparación) y `B007`
(`REV-2026-013`, `REV-2026-014` y seis preguntas pendientes en su checkpoint;
`REV-2026-013` pregunta si la conducción autónoma es un objetivo que el MVP debe
demostrar o un medio para los tres casos de uso) y `B008` (`REV-2026-015`,
`REV-2026-016` y cuatro preguntas pendientes en su checkpoint; `REV-2026-015`
pide decidir qué inventario de pendientes de S02 es el vigente, S02 o ADR-001, y
si la identidad y los permisos de T800R deben figurar como aplazamiento) y `B009`
(`REV-2026-017`, `REV-2026-018` y seis preguntas pendientes en su checkpoint;
`REV-2026-017` pide decidir qué hace T800R, dónde lo registra y quién lo cierra
cuando dos originales vigentes se contradicen y ámbito y versión no deciden) y
`B010` (`REV-2026-019`, `REV-2026-020` y siete preguntas pendientes en su
checkpoint; `REV-2026-019` pide decidir qué datos del registro de fuentes puede
escribir T800R por sí solo y cuáles requieren confirmación de la persona, con
constancia de quién aportó cada uno; `REV-2026-020`, dónde queda una consulta
abierta, un cambio de requisito sin confirmar o una discrepancia detectada
cuando la ejecución termina) y `B011` (`REV-2026-021`, `REV-2026-022`,
`REV-2026-023` y siete preguntas pendientes en su checkpoint; `REV-2026-022`
pide decidir cuál es el registro vigente de decisiones sobre prácticas
candidatas y si las marcas de S03 deben reflejar S04 en las tres filas
resueltas o en ninguna; `REV-2026-023` pide una convención de retorno para las
filas `deferred` de S02 y S03 y dónde quedan las reglas de validación de
referencias; `REV-2026-021` pide enlazar la evidencia de la matriz y corregir
la atribución de l. 224 al playbook «AI-Native SDLC» de 2026-08-21) y `B012`
(`REV-2026-024`, `REV-2026-025` y siete preguntas pendientes en su checkpoint;
`REV-2026-024` pide decidir si un cierre puede reformular el criterio de salida
y afirmar el no bloqueo sin enumerar ambigüedades, y dónde se declara la
cobertura del área 3 de la revisión transversal antes de cerrar la definición;
`REV-2026-025` pide decidir cuál es el inventario vigente de aplazamientos de
S03, unidad o ADR-002, y si el esquema del registro de fuentes quedó resuelto
en la sesión 7 o sigue sin sesión que lo reciba) y `B013` (`REV-2026-026` y
siete preguntas pendientes en su checkpoint; `REV-2026-026` pide aclarar si
«Bootstrap» en la fila de la sesión 4 del índice es arranque de sesión o
incorporación del repositorio, y dónde debe constar en S04 que «incorporar un
repositorio» y la preparación del entorno del harness se decidieron en S10/S11)
y `B014` (`REV-2026-027`, `REV-2026-028`, las respuestas (a)-(q) a las pistas
heredadas y ocho preguntas pendientes en su checkpoint; `REV-2026-027` pide
decidir si el conjunto de transiciones de estado de S04 es cerrado —y entonces
faltan las entradas a `waiting`/`blocked` desde `ready`/`pending` que exigen
l. 109 y 115— o abierto, y qué es `draft` en l. 113; `REV-2026-028` pide
decidir cuál es el inventario vigente de aplazamientos de S04, unidad o
ADR-003, y si los aplazamientos embebidos en filas `accepted` —en particular el
umbral temporal de abandono, sin destino en ninguno— deben constar con estado y
destino en la unidad) y `B015` (`REV-2026-029`, las respuestas (a)-(d) a las
pistas heredadas y seis preguntas pendientes en su checkpoint; `REV-2026-029`
pide decidir si «confirmar la definición» (S04 l. 134) es la confirmación de
acuerdos funcionales de `plan` por incremento (l. 88), la autorización de
`build` por incremento (l. 81-82) o una confirmación única de la iniciativa
como en S02, y dónde consta la concreción pendiente que l. 261-263 anuncia)
y `B016` (`REV-2026-030`, `REV-2026-031`, las respuestas (a)-(l) a las
pistas heredadas y seis preguntas pendientes en su checkpoint; `REV-2026-030`
pide decidir si la distribución de modelos del proyecto (S04 l. 144-148) debe
constar con estado en la unidad canónica o remitir a
`proposal-efficient-workflow.md`/`AGENTS.md` como fuente vigente, y cómo cuenta
la única fila `rejected` de S04 frente a `AGENTS.md` l. 35-36; `REV-2026-031`
pide decidir si la tabla prevalece sobre la prosa de «Próxima acción» cuando
difieren (l. 177-178 frente a l. 87; l. 219-220 frente a l. 88) y si esa
sección se conserva como crónica o se retira tras el cierre, dejando rastro de
las obligaciones que l. 141-142 exigía comprobar) y `B017` (`REV-2026-032`,
`REV-2026-033`, las respuestas (a)-(i) a las pistas heredadas y seis
preguntas pendientes en su checkpoint; `REV-2026-032` pide decidir dónde
consta la cobertura de las dos áreas de la revisión transversal asignadas a
la sesión 4 (índice l. 116-117), o en qué sesión y con qué formato se
completará, y si el criterio de salida de S04 debe alcanzar a las prácticas
asignadas y no sólo a «las revisadas»; `REV-2026-033` pide decidir si, cuando
un hallazgo devuelve parte de un incremento autorizado a `plan` o `design`,
cambia el `stage` del incremento y la vuelta a `build` exige de nuevo
readiness y autorización humana (l. 275) o basta la consulta de l. 85 dentro
de la autorización ya concedida (l. 81)) y `B018` (`REV-2026-034`,
`REV-2026-035`, las respuestas (a)-(j) a las pistas heredadas, el balance de
S04 y seis preguntas pendientes en su checkpoint; `REV-2026-034` pide decidir
dónde consta la auditoría final de S04 —obligaciones comprobadas y
ambigüedades consideradas— y si un cierre puede afirmar el no bloqueo sin
enumerarlas y omitir la cláusula de prácticas y lo decidido fuera del
criterio; `REV-2026-035` pide decidir qué documento es el inventario vigente
de lo diferido por S04 con su sesión de resolución y qué recibe el residuo
que ni S04 ni ADR-003 asignan: umbral temporal de abandono, subpasos, rutas y
formatos de specs, elección de herramientas y revisión transversal) y `B019`
(`REV-2026-036`, `REV-2026-037`, las respuestas (a)-(j) a las pistas
heredadas y seis preguntas pendientes en su checkpoint; `REV-2026-036` pide
decidir dónde consta, desde la unidad S05, el destino de la representación y
ubicación de `handoff/v1` (pregunta 8 de la sesión, sin fila; destino sólo
en ADR-004 → sesión 11) y de la persistencia de las esperas sin destinatario
que S04 l. 299 envió a la sesión 5 y que S05 l. 54/58 deja fuera del
contrato; `REV-2026-037` pide decidir si emitir, aceptar y completar una
`consultation` o `verification_request` son transiciones del `status` de
S04 —y quién las registra— o si el `status` sólo lo cambia el orchestrator
en una «reconciliación operativa» que aún no tiene definición, responsable
ni evento, y si el «bloquear» de l. 63 exige enumerar `ready → blocked` en
S04) y `B020` (`REV-2026-038`, `REV-2026-039`, `REV-2026-040`,
`REV-2026-041`, las respuestas (a)-(i) a las pistas heredadas y seis
preguntas pendientes en su checkpoint; `REV-2026-038` pide decidir si la
persona es un «tipo de actor» de `handoff/v1` con identidad lógica,
aceptación, eventos y caducidad propios, o si T800R recibe y acepta en su
nombre las `consultation` dirigidas a ella, y si `sender` exige ejecución
«siempre» (l. 71) o «cuando corresponda» (l. 102); `REV-2026-039` pide fijar
la condición que hace obligatorios `expires_at`/`due_at` y el dueño de la
«política de caducidad» de l. 163; `REV-2026-040` pide decidir qué capas de
validación son mecanizables para runtime/policy y cuáles exigen verifier o
revisión humana, qué actor las aplica y registra `rejected` cuando el
receptor no está disponible o el selector no resuelve, y contra qué fuente
se juzga la autoridad del emisor; `REV-2026-041` pide decidir si
`consultation` (l. 123) cumple el mínimo de S04 l. 298 —dónde quedan tipo,
dependencias afectadas y próxima acción— y qué significa `authority` en el
payload frente a `recipient` y al `authority` de la envoltura) y `B021` (`REV-2026-042`,
`REV-2026-043`, las respuestas (a)-(i) a las pistas heredadas y seis
preguntas pendientes en su checkpoint; `REV-2026-042` pide decidir quién
puede cerrar o reanudar una `verification_request` o `consultation`
`accepted` cuando el aceptante no responde ni reaparece, quién registra ese
evento y con qué evidencia, y quién observa `due_at` y con qué artefacto
escala; `REV-2026-043` pide decidir si `created_at`, `expires_at` y `due_at`
son inmutables tras emitir, qué campos compara la regla de idempotencia y en
qué campo se persiste el resultado mínimo de `completed`) y `B022`
(`REV-2026-044`, las respuestas (a)-(l) a las pistas heredadas, el balance
de S05 y seis preguntas pendientes en su checkpoint; `REV-2026-044` pide
decidir si el cierre de S05 puede declarar cumplido el criterio sin nombrar
la caducidad, las fuentes canónicas ni la evidencia, dónde consta la
auditoría «frente a ADR-003» que sólo el tracker de definición afirma, y si
el no bloqueo para la sesión 6, la cobertura del área de coordinación y los
pendientes que sólo ADR-004 inventaría deben enumerarse en el cierre) y
`B023` (`REV-2026-045`, `REV-2026-046`, `REV-2026-047`, las respuestas
(a)-(g) a las pistas heredadas y seis preguntas pendientes en su checkpoint;
`REV-2026-045` pide decidir si el canon debe identificar las herramientas
concretas sobre las que emite filas con estado (RTK y Context Mode: sin
enlace, versión, fecha ni licencia en ninguna unidad ni ADR), cuál es el
destino vigente de su selección (S06 l. 56, ADR-005 l. 124-125 o S11 l. 91) y
si el criterio de salida de S06 debe nombrar el término del índice l. 64 que
sus filas deciden; `REV-2026-046` pide decidir cómo localiza un receptor el
context packet vigente de un handoff con los contratos escritos —ningún
campo del handoff apunta al packet y `references` es inmutable mientras el
packet se sustituye por «uno nuevo correlacionado»— y si S06 debe recibir
con acuse la remisión de S05 l. 66; `REV-2026-047` pide decidir qué
artefacto emite el agente cuando se detiene por presupuesto, material
`required` ausente, contradicción crítica o ambigüedad (l. 50, 52), a quién,
con qué estado de tarea y dónde queda el «diagnóstico auditable», y quién
autoriza al «actor autorizado» y a la «fuente candidata autorizada») y
`B024` (`REV-2026-048`, `REV-2026-049`, las respuestas (a)-(n) a las pistas
heredadas y seis preguntas pendientes en su checkpoint; `REV-2026-048` pide
decidir qué valores, semántica y dueño tiene `budget_profile`, qué ocurre
con la parada y el estado `invalid` por presupuesto cuando el adapter no
expone límites cuantitativos —que el contrato común no exige—, si la
definición de `manifest` en el núcleo (l. 90) debe incluir la clasificación
`required`/`relevant`/`optional` y `budget_profile`, y qué unidad es
«material»; `REV-2026-049` pide decidir si `schema`, `id`, `subject` y
`base` del packet comparten semántica con `handoff/v1` (`base` no la
comparte), dónde constan el identificador y la versión del esquema del
packet, si `producer`/`consumer` usan la referencia de actor de S05 y qué
identifica a una «capacidad» como destinatario) y `B025` (`REV-2026-050`,
`REV-2026-051`, `REV-2026-052`, las respuestas (a)-(r) a las pistas
heredadas, el matiz a `REV-2026-049` hecho 2 (S11 l. 115 nombra
`context-packet` como schema top-level sin versión) y seis preguntas
pendientes en su checkpoint; `REV-2026-050` pide decidir contra qué valor
esperado, alojado en qué campo, compara `freshness` los marcadores de
l. 142-144, qué transiciones del handoff (S05 l. 60) cuentan como cambio del
marcador «estado del handoff» y con qué impacto, dónde declara cada
referencia su impacto y `check_after` y qué prevalece frente a las
categorías de l. 158, y qué es «contrato aplicable»; `REV-2026-051` pide
decidir si tras un cambio `packet` el packet anterior es `invalid` o
`superseded` y si debe enlazar el sucesor como S05 l. 64, qué estado tiene
durante una recarga `section` y si vuelve a `ready` con el mismo `id`, si
«obsoleto» es causa de `degraded` o debe retirarse de l. 170, y qué campos
del núcleo son inmutables; `REV-2026-052` pide decidir si la parada de
l. 182-187 es un evento de evidencia y quién puede comprobarla, en qué capa
de S03 y en qué esquema se persiste la evidencia de l. 189-192 (S11
l. 160/166), y qué valor tienen «presupuesto aplicado» sin límites, «actor»
y «trigger») y `B026` (`REV-2026-053`, `REV-2026-054`, las respuestas
(a)-(n) a las pistas heredadas, el balance de S06 y seis preguntas
pendientes en su checkpoint; `REV-2026-053` pide decidir si el cierre de
S06 puede declarar cumplido el criterio omitiendo su único calificador
(«verificables») y «RTK y Context Mode» del índice, afirmar el no bloqueo
de la sesión 7 sin decir qué le entrega ni qué ambigüedades consideró, y
dónde consta la auditoría «frente a ADR-003 o ADR-004» que sólo afirma el
tracker de definición; `REV-2026-054` pide decidir cuál es el inventario
vigente de aplazamientos de S06 —las tres filas `deferred` l. 56-58 o los
cinco «Puntos abiertos» de ADR-005— y si la representación física del
packet y la taxonomía de la sección `knowledge`, que S07/ADR-006 dan por
recibidas, deben constar en la unidad con estado y destino) y `B027`
(`REV-2026-055`, `REV-2026-056`, `REV-2026-057`, `REV-2026-058`, las
respuestas (a)-(u) a las pistas heredadas y seis preguntas pendientes en su
checkpoint; `REV-2026-055` pide decidir si la fila del índice l. 65 («front
matter», «caducidad») queda cubierta por un criterio que la reformula y por
una sesión que declina la representación física decidida después en
S11/ADR-010, y si S07 debe registrar con acuse las siete remisiones que
recibió de S03, ADR-001, ADR-002, ADR-003, S06 y ADR-005 y enlazar la
investigación cuyo commit cita; `REV-2026-056` pide decidir qué sesión posee
la frecuencia y los mecanismos de comprobación del conocimiento y el esquema
del registro de fuentes que S03 remitió a S07 sin fila de llegada, y si
ADR-002 l. 142-144 debe dejar de declararlo resuelto como «esquema de
conocimiento»; `REV-2026-057` pide identificar qué producto es «Hindsight»
en las filas l. 55-56 y en qué capa queda lo que ese motor retiene y
sintetiza, dado que su fuente primaria lo describe como memoria y no sólo
como recuperación; `REV-2026-058` pide decidir cuál es el inventario vigente
de aplazamientos de S07 (tabla, prosa o ADR-006) y si las seis alternativas
que ADR-006 rechaza deben constar como `rejected` en la unidad) y `B028`
(`REV-2026-059`, `REV-2026-060`, `REV-2026-061`, las respuestas (a)-(t) a las
pistas heredadas y seis preguntas pendientes en su checkpoint; `REV-2026-059`
pide decidir qué condición produce `current`, `review_due` y `stale`, si la
frescura es un campo o un cálculo en consumo, quién la calcula, qué revisión
de fuente conservan `review`/`sources` para detectar un cambio y cómo se
relaciona con la capa `freshness` del packet y con el `stale` de S08;
`REV-2026-060` pide decidir qué artefacto lógico declara owner, curator
predeterminado, `scope` e identidad del bundle, de qué campo salen «temas» y
«resumen» del índice raíz y si ese índice es derivado y reconstruible o
autorizado sobre membresía y ámbito; `REV-2026-061` pide decidir si la
sección `knowledge` del packet contiene requisitos y decisiones además de
entradas de conocimiento y por qué campo entran, qué parte de ADR-005
l. 126-128 quedó resuelta en S07, de qué texto de S06 toma ADR-006 l. 16 su
«exigió», y si la condición de carga selecciona secciones o también entradas);
y `B029` (`REV-2026-062`, las respuestas (a)-(r) a las pistas heredadas, el
balance de S07 y seis preguntas pendientes en su checkpoint; `REV-2026-062`
pide decidir si el cierre de S07 puede declarar cumplido el criterio sin
afirmar que quedó preparado el contrato lógico para portabilidad, calificar
la identidad portable —pregunta 3 de la sesión— como diferimiento
tecnológico y declarar «explícitos» frescura, bundles, curator, indexación y
sección `knowledge` con `REV-2026-059`-`061` abiertas, y dónde debe constar
la cobertura del área l. 119 del índice);
y `B030` (`REV-2026-063`, `REV-2026-064`, las respuestas (a)-(h) a las
pistas heredadas y seis preguntas pendientes en su checkpoint;
`REV-2026-063` pide decidir qué glosario prevalece para «harness» y
«repositorio consumidor» —S01 l. 161/170 o ADR-001 l. 14/16, que hace del
harness quien coordina— y qué artefacto cumple la obligación de S02 l. 29 de
preparar y validar «contratos de trabajo», término definido sólo en el ADR;
`REV-2026-064` pide decidir contra qué objetivo observable y con qué
condición de revisión se comprobará que conducir y supervisar agentes
compensa el coste en adopción y portabilidad que el propio ADR registra,
por qué la tabla sustituye «coordinación» por «autonomía» y qué estado tiene
la opción 3 «No elegida como límite»);
y `B031` (`REV-2026-065`, `REV-2026-066`, las respuestas (a)-(m) a las
pistas heredadas, el balance de ADR-001 y seis preguntas pendientes en su
checkpoint; `REV-2026-065` pide decidir si la «Decisión» de ADR-001 es un
resumen subordinado a S02 y si debe recuperar que T800R detecta y señala el
riesgo y la regla general «La validación realizada durante la construcción no
sustituye esta revisión»; `REV-2026-066` pide decidir si ADR-001 es fotografía
de 2026-09-14 o fuente vigente del límite de autonomía —el tracker de
definición l. 318 lo presenta así— y, en ese caso, cómo refleja o enlaza los
puntos de intervención humana de S04 y S09/ADR-008 y marca sus puntos abiertos
con destinos cerrados);
y `B032` (`REV-2026-067`, `REV-2026-068`, las respuestas (a)-(h) a las
pistas heredadas y seis preguntas pendientes en su checkpoint;
`REV-2026-067` pide decidir si las alternativas de los ADR y las opciones que
las unidades descartan en sus justificaciones deben constar como `rejected`
—en ADR-002 «Insuficiente» y «No elegida», una alternativa sin fila en S03 y
seis opciones descartadas por S03 sin alternativa en el ADR— y qué registro
prevalece; `REV-2026-068` pide decidir si ADR-002 debe nombrar en su
justificación la investigación de fuentes y su límite «no existe una jerarquía
universal» como antecedente de la regla de discrepancias y de
`REV-2026-017`);
y `B033` (`REV-2026-069`, las respuestas (a)-(l) a las pistas heredadas y
seis preguntas pendientes en su checkpoint; `REV-2026-069` pide decidir si la
«Decisión» de ADR-002 es un resumen subordinado a S03 —y debe declararlo— o
la fuente vigente de «Fuentes canónicas y conocimiento» que enlaza el tracker
de definición (l. 319), y en ese caso si recupera «inequívoco» y la detección
en la corrección autónoma de referencias y derivados, las revisiones humanas
como evidencia, «referenciadas desde las especificaciones», «confirmado» en la
persistencia y los destinos de l. 111 y l. 119);
y `B034` (`REV-2026-070`, el matiz a `REV-2026-025` hecho 2, las respuestas
(a)-(i) a las pistas heredadas, el balance de ADR-002 y seis preguntas
pendientes en su checkpoint; `REV-2026-070` pide decidir si ADR-002 es fuente
vigente —y entonces marca y enlaza el destino efectivo de sus puntos abiertos:
ADR-004 → sesión 11 para l. 136, S08/ADR-007 y S09/ADR-008 para l. 111 y
l. 145, S10/ADR-009 y S11/ADR-010 para l. 144 y l. 146— o fotografía de
2026-09-14 con el tracker de definición remitiendo a S03 y a los ADR
posteriores, y si l. 142-144 debe decir que los campos del registro de fuentes
siguen sin sesión);
y `B035` (`REV-2026-071`, `REV-2026-072`, `REV-2026-073`, las respuestas
(a)-(i) a las pistas heredadas y seis preguntas pendientes en su checkpoint;
`REV-2026-071` pide decidir con qué estado y dónde constan las opciones que S04
descarta y si la «aprobación por etapa» que ADR-003 rechaza puede exigirla un
repositorio consumidor; `REV-2026-072` pide limitar l. 31-33 a Anthropic y
Google o aportar las fuentes de Microsoft y OpenAI; `REV-2026-073` pide decidir
qué autorización convierte un cambio en «incremento», si un `draft` de
`Maintain` lo es y qué entidad es «el ciclo» con `stage` y `status`);
y `B036` (`REV-2026-074`, `REV-2026-075`, el mapa fila a punto, las respuestas
(a)-(m) a las pistas heredadas y seis preguntas pendientes en su checkpoint;
`REV-2026-074` pide decidir si la «Decisión» de ADR-003 es un resumen
subordinado a S04 —y debe declararlo— o debe recoger los supuestos de consulta
de S04 l. 85 y 88, el retorno a `plan` de l. 76, la autoridad reservada a la
persona de l. 110 y la revisión humana según riesgo, y declarar si la
autorización por incremento sustituye la confirmación única de ADR-001 punto 2;
`REV-2026-075` pide decidir si recupera la regla por defecto del verifier y la
exclusión del implementador, las condiciones de los runbooks de `Maintain`, el
estado ante duda de recuperación, la semántica de `waiting`/`blocked`, el tipo
de consulta y el registro de la respuesta, o si basta declarar que resume S04);
y `B037` (`REV-2026-076`, las respuestas (a)-(j) a las pistas heredadas, el
balance de ADR-003 y seis preguntas pendientes en su checkpoint;
`REV-2026-076` pide decidir qué sesión o artefacto recibe los runbooks y
umbrales de `Maintain` que ADR-003 l. 118 envió a la sesión 9 —que no los
recogió, como tampoco S10-S12 ni ADR-008-010— o si se excluyen del MVP, y, con
la convención que se adopte para `REV-2026-066`/`070`, si ADR-003 marca y
enlaza el destino efectivo de sus diferidos y los ADR posteriores, en
particular ADR-008 para el alto riesgo);
y `B038` (`REV-2026-077`, `REV-2026-078`, las respuestas (a)-(h) a las
pistas heredadas y seis preguntas pendientes en su checkpoint;
`REV-2026-077` pide decidir si ADR-004 debe registrar como alternativa
evaluada un protocolo interoperable existente como A2A 1.0 —y con qué
resultado— y si «Por qué la decisión» debe limitarse a lo que sus fuentes
confirman (continuidad de un mismo harness y referencias ligeras);
`REV-2026-078` pide decidir si el glosario y el TL;DR deben coincidir con el
ámbito (handoff dentro del mismo actor) y la inmutabilidad de S05, si el ADR
recupera la «revisión humana» como intención de `consultation` y si la
alternativa conversacional se registra como `rejected` en S05);
y `B039` (`REV-2026-079`, `REV-2026-080`, el mapa punto a fila, las respuestas
(a)-(k) a las pistas heredadas y seis preguntas pendientes en su checkpoint;
`REV-2026-079` pide decidir si la «Decisión» de ADR-004 recupera la regla de
caducidad de S05 l. 62, las condiciones de cancelación y sustitución, la
atribución de la aceptación y de la respuesta, lo que crece tras emitir y el
«contenido base» de la idempotencia, o basta declarar que resume S05;
`REV-2026-080` pide decidir si es un acuerdo que el orchestrator reconcilie
base, tracker, repositorio, autoridad y conflictos, antes de qué acto exacto
(«aplicar»: operación atómica o seguimiento) y quién juzga la autoridad frente
a runtime/policy y la persona);
y `B040` (`REV-2026-081`, el mapa de «Puntos abiertos», los hechos adicionales,
las respuestas (a)-(i) a las pistas heredadas, el balance de ADR-004 y seis
preguntas pendientes en su checkpoint; `REV-2026-081` pide decidir qué sesión o
artefacto recibe, antes de autorizar la construcción, la condición de
`expires_at`/`due_at`, la «política de caducidad» de S05 l. 163, el actor del
rechazo sin receptor y las partes del cierre coordinado —hoy sin receptor en
S08-S12 y ausentes del único inventario de ADR-004—, si ADR-004 marca sus dos
puntos con destino cerrado (S11/ADR-010 y S09/ADR-008 con mecanismos en S11) y
si ADR-010 enlaza ADR-004);
y `B041` (`REV-2026-082`, los contrastes con S06, los hechos adicionales, las
respuestas (a)-(k) a las pistas heredadas y seis preguntas pendientes en su
checkpoint; `REV-2026-082` pide decidir qué glosario prevalece para «context
packet» y «adapter» —ADR-004, ADR-005, ADR-007 y ADR-010 los definen distinto—
y si el de ADR-005 recoge que el adapter aporta límites que deciden la
suficiencia, si l. 29-31 debe reproducir ADR-004 punto 10 en vez de atribuir
al handoff la custodia del ownership, y si la alternativa «contexto libre por
adapter» se registra como `rejected` en S06);
y `B042` (`REV-2026-083`, el mapa punto a fila, los hechos adicionales, las
respuestas (a)-(o) a las pistas heredadas y seis preguntas pendientes en su
checkpoint; `REV-2026-083` pide decidir si la «Decisión» de ADR-005 recupera la
regla capa → estado de S06 l. 51, los «límites» del adapter, el carácter
exclusivo de las condiciones de carga, la solicitud de la parada y la cláusula
de la caché, o basta declarar que resume S06, y si S07 y S08, que citan
«ADR-005» como fuente, deben enlazar S06);
y `B043` (`REV-2026-084`, el mapa de «Puntos abiertos», los contrastes de
«Referencias», los hechos adicionales, las respuestas (a)-(m) a las pistas
heredadas, el balance de ADR-005 y seis preguntas pendientes en su checkpoint;
`REV-2026-084` pide decidir qué sesión o artefacto decide, antes de autorizar
la construcción, la sintaxis y el evaluador de las condiciones de carga que
S06, S08 y ADR-005 enviaron a la sesión 11 —que no los recogió, como tampoco
ADR-010 ni S12— o si son detalle de construcción acotado por S08, y qué define
la identidad y los aliases del context packet que ADR-005 l. 118-119 da por
resueltos en S08/ADR-007);
y `B044` (`REV-2026-085`, `REV-2026-086`, los contrastes con S07, los hechos
adicionales, las respuestas (a)-(j) a las pistas heredadas y seis preguntas
pendientes en su checkpoint; `REV-2026-085` pide decidir qué costes y riesgos
aceptó T800R al adoptar OKF v0.2 como base lógica y si deben constar en
ADR-006, junto con los beneficios de las opciones rechazadas, una alternativa
«contrato propio» alineada con la pregunta de S07 y las alternativas de
metadatos, vigencia e indexación que S07 descarta; `REV-2026-086` pide decidir
cómo trata un consumidor T800R un tipo desconocido —entrada genérica o
`concept`— y si ADR-006 distingue el «concept» de OKF del tipo `concept` del
núcleo);
y `B045` (`REV-2026-087`, el mapa punto a fila, los mapas de «Consecuencias»,
«Puntos abiertos» y «Referencias», los hechos adicionales, las respuestas
(a)-(k), los balances de ADR-006 y de los ADR y seis preguntas pendientes en su
checkpoint; `REV-2026-087` pide decidir si la «Decisión» de ADR-006 recupera la
regla de migración de OKF, la taxonomía extensible con tolerancia de tipos, los
disparadores y la conciliación de la vigencia y las anclas de autoridad de S07,
o se declara resumen subordinado a S07 y S08 l. 249 y el tracker de definición
l. 320 remiten a la unidad; el balance global pide una convención común sobre
subordinación de la «Decisión», fotografía o documento vivo y marcas de
resolución para los diez ADR);
y `CT01` (`REV-2026-088`, `REV-2026-089`, los doce contrastes, la disposición
de las anotaciones asignadas, cinco preguntas pendientes y la síntesis en
[CT01](blocks/CT01.md); `REV-2026-088` pide decidir qué comprobación detecta,
antes de una acción con efectos, que una síntesis del context packet contradice
su original cuando los marcadores no cambian; `REV-2026-089` pide decidir qué
fuente es la autoridad de una decisión obtenida por `consultation` hasta que se
incorpora al canon, quién la incorpora y cuándo, y cómo se ve su corrección
desde el handoff original; la síntesis concluye que la regla «ninguna copia
obtiene autoridad» está bien declarada en todas las unidades y falla en su
aplicación: detecciones, registros y actores sin definir);
y `CT02` (`REV-2026-090`, `REV-2026-091`, la tabla de correspondencia, los
doce contrastes, la disposición de las anotaciones asignadas, cinco preguntas
pendientes y la síntesis en [CT02](blocks/CT02.md); `REV-2026-090` pide
decidir cómo termina un ownership sin sucesor —sesión que libera, tarea que
vuelve a `ready`, tarea completada o cancelada—, con qué evento y garantías, y
qué prevalece si el tracker y el último handoff de ownership discrepan;
`REV-2026-091` pide decidir qué ocurre con los handoffs `pending` y
`accepted` cuando su tarea o incremento se cancela o completa, o cuando
completa la sesión que los emitió o aceptó, y quién lo registra; la síntesis
concluye que ambas máquinas son sólidas en lo que prohíben —ningún efecto
implícito— y débiles en lo que conectan: quién mueve el estado de la otra,
cuándo y con qué evento);
y `CT03` (`REV-2026-092`, `REV-2026-093`, `REV-2026-094`, la tabla objeto ×
identidad × portabilidad × destino, los doce contrastes, la disposición de las
anotaciones asignadas, cinco preguntas pendientes y la síntesis en
[CT03](blocks/CT03.md); `REV-2026-092` pide decidir si la sesión de S04 es una
ejecución de S08 o un objeto con identidad propia, si el owner de una tarea es
un `actor_id` y con qué evidencia una sesión nueva demuestra ser titular del
ownership «retenido con intención de reanudar»; `REV-2026-093` pide decidir
qué son los aliases de una entrada de conocimiento y si se resuelven;
`REV-2026-094` pide decidir a qué revisión resuelve una referencia `current`
cuando hay una `draft` posterior a una `stable` y cómo recibe el consumidor la
condición de uso provisional; la síntesis concluye que la portabilidad está
bien resuelta para actor, ejecución y conocimiento, y débil para sesión,
packet, bundle y aliases que no son de proveedor);
y `CT04` (`REV-2026-095`, la tabla tema × fuente declarada × divergencias, los
doce contrastes, la disposición de las anotaciones asignadas, cinco preguntas
pendientes y la síntesis en [CT04](blocks/CT04.md); `REV-2026-095` pide
decidir dónde y cómo queda registrado si una decisión técnica fue acordada con
la persona o tomada por T800R dentro de lo delegado, y qué se presume cuando no
consta; la síntesis concluye que la precedencia unidad/ADR es coherente en la
letra y se rompe en el enrutado —tracker de definición l. 318-319, ADR-002
l. 152—, que S03 l. 53-54 sugiere por analogía su resolución y que dos
decisiones humanas resolverían la mayor parte: la precedencia de
`REV-2026-001` con la «Decisión» como resumen subordinado, y la convención
fotografía/documento vivo con marcas o nota de revisión);
y `CT05` (`REV-2026-096`, `REV-2026-097`, la tabla tema × fuente declarada ×
divergencias, los doce contrastes, la disposición de las anotaciones
asignadas, cinco preguntas pendientes y la síntesis en
[CT05](blocks/CT05.md); `REV-2026-096` pide decidir si al reanudar la
comparación de marcadores de S06 sustituye o complementa la verificación de
S04 l. 109, qué comprueba cambios presentes, checkpoint y ausencia de otro
escritor antes de `ready`, y qué estado del packet corresponde al «contexto
mínimo» de la sesión; `REV-2026-097` pide decidir si «preservar ADR-00N» en
criterios y cierres significa preservar la unidad canónica y si las
auditorías ya hechas contra los ADR deben repetirse contra S04-S06 antes de
autorizar la construcción; la síntesis concluye que la precedencia se
sostiene en la letra y en el tracker, pero se invierte en los consumidores,
que la cadena ciclo → handoff → contexto conserva sus prohibiciones y le
faltan las reglas de conexión, y que las decisiones (a) y (b) de `CT04` no
bastan: hace falta (c), la correspondencia entre las tres máquinas de
estados y las dos reconciliaciones);
y `CT06` (`REV-2026-098`, la tabla tema × fuente declarada × divergencias,
los doce contrastes, la disposición de las anotaciones asignadas, cinco
preguntas pendientes y la síntesis en [CT06](blocks/CT06.md); `REV-2026-098`
pide decidir si la compatibilidad con OKF v0.2 incluye el papel de
consumidor, cómo concilia el schema `knowledge-entry` el núcleo cerrado de S11
l. 72 con OKF §4.1/§11 y con la extensibilidad de tipos de S07 l. 43, y si
ADR-006 debe recoger esa regla; la síntesis concluye que el par reúne las dos
inversiones de precedencia —enrutado del tracker l. 320 y consumidores S08
l. 249, 382, 409—, que ADR-006 punto 5 endurece la regla de `draft` de S07
l. 93-94, que (a) y (b) siguen siendo necesarias —(b) con la restricción de
`definition/README.md` l. 23-24— y que hace falta (d), dirección y alcance de
la compatibilidad OKF; incluye además la observación de que el aplazamiento
de `B001` puede haber vencido, pues S08 figura `completed` en el tracker de
definición l. 345);
y `CT07` (`REV-2026-101`, `REV-2026-102`, `REV-2026-103`, las tablas de
condiciones × evidencia y del patrón de cierre, el inventario único de
diferimientos, la cobertura de la revisión transversal por área, los diez
contrastes, la disposición de las anotaciones asignadas, cinco preguntas
pendientes y la síntesis de la revisión completa en [CT07](blocks/CT07.md)).
Las anotaciones de `CT07` piden decidir:
- `REV-2026-101`: si la revisión se amplía a S08-S12 y ADR-007 a ADR-010 o
  se hace una pasada focalizada, y cuándo se cumple S12 l. 59;
- `REV-2026-102`: si S12 registra un inventario de entrada con momento,
  bloqueo y dueño por remisión, y quién recibe tras autorizar las mediciones
  de eficacia;
- `REV-2026-103`: si el MVP tiene capa de memoria o qué sustituye a la
  «Memoria de continuidad» de S03 l. 97.

**Recomendación de orden (síntesis de `CT07`; detalle y agrupación completa
en [CT07](blocks/CT07.md)):**
1. **(h) alcance de la revisión**: `101`; pregunta de `099`; pregunta 1 de la
   pasada 2 de `B002`; pregunta 2 de `CT03`.
2. **(a) precedencia**: `001`, `065`, `069`, `074`, `075`, `079`, `080`,
   `083`, `087`, `097` y el enrutado de `066`.
3. **(b) marcas** y **(f) inventario de entrada de S12**, juntas:
   - por (b): `002`, `015`, `023`, `025`, `028`, `035`, `054`, `058`, `062`
     h. 5, `066`, `070`, `076`, `084`;
   - por (f): `099`, `100`, `102`, `103`, `004`, `012`, `036`, `045` h. 4,
     `056`, `057`, `059`, `060`, `076` h. 2, `081`, `087`.
4. **(e) criterio global de cierre**: `006`, `007`, `003`, `011`, `016`,
   `024`, `034`, `044`, `053`, `062`.
5. **(c) máquinas de estados**: `096`, `027`, `033`, `037`, `042`, `043`,
   `047`, `050`, `051`, `090`, `091`, `092`.
6. **(d) compatibilidad OKF**: `098`, `086`, `087`, `093`, `094`.
7. **(g) revisión transversal**: `005`, `022`, `032`.
8. **Decisiones propias**: `095` (con `013`, `014`, `029`); `088`/`089` (con
   `017`-`020`, `040`); `094`.
9. **(i) vocabulario de alternativas**: `064`, `067`, `071`, `078`, `082`,
   `085`. Después, las anotaciones locales por bloque.

`B001`-`B045` y `CT01`-`CT06` siguen discutibles por bloque en cualquier
momento; el orden sólo agrupa las decisiones que resuelven varias a la vez.
Texto de la pasada anterior: el único cruce sin resultados de análisis era
`CT07`, que era el siguiente; antes, el siguiente era `CT06`, y antes `CT05`,
`CT04`, `CT03` y `CT02`.
La cola de discusión son las filas `pending` o `in_progress` de esa columna.

## Uso persistente

1. Cambiar sólo el bloque en curso a `in_progress` y crear su checkpoint en
   `docs/reviews/blocks/<ID>.md` desde [BLOCK-TEMPLATE.md](BLOCK-TEMPLATE.md).
2. Al terminar el análisis, registrar hallazgos con citas precisas y cambiarlo a
   `reviewed`, o a `blocked` si falta una fuente o una decisión para analizarlo.
3. Abrir la discusión humana como `pending` sólo cuando haya material concreto;
   usar `in_progress` y `resolved` sin inferir aceptación del análisis.
4. Si cambia la fuente, comparar la huella de base, recalcular rango y sección,
   y usar `stale` aunque el bloque hubiera sido `reviewed`.

Los checkpoints se crean al iniciar cada bloque o cruce. Se guarda primero el
resultado y después se actualiza esta tabla. Una interrupción conserva el cursor
del último checkpoint; no equivale a completar la revisión. El agente puede abrir
discusión `pending`; sólo la persona o su coordinador registra su resolución.
Para dar por terminada la revisión deben estar vigentes los 45 bloques y los siete
cruces, sin filas pendientes, bloqueadas o desactualizadas. La discusión se cierra
por separado. No hay revisión realizada ni resultados inventados.
