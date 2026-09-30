# Anotación de revisión

- ID de anotación: `REV-2026-039`
- Unidad y ubicación: `S05` — [session-05-handoffs.md, «Envoltura común mínima»](../definition/session-05-handoffs.md#envoltura-común-mínima)
  (`expires_at` l. 100, `due_at` l. 101) y
  [«Capas de validación»](../definition/session-05-handoffs.md#capas-de-validación)
  (capa estructural, l. 129), frente a las filas l. 62 y l. 66 de
  [«Decisiones»](../definition/session-05-handoffs.md#decisiones), a l. 163
  de [«Lifecycle inicial»](../definition/session-05-handoffs.md#lifecycle-inicial)
  (dependencia, bloque `B021`) y a
  [S04, fila de enforcement](../definition/session-04-operating-cycle.md#acuerdos-y-orientación-de-la-sesión)
  (l. 112). Bloque `B020`.
- Revisión examinada: estado de los archivos al 2026-09-24; repositorio sin
  commits, huella no disponible. S05 cerrada el 2026-09-16 (l. 3). Citas
  distintivas: «`expires_at` y `due_at` serán condicionales» (l. 66);
  «`expires_at` | Límite condicional para aceptar una oferta `pending`»
  (l. 100); «`due_at` | Expectativa condicional de respuesta tras aceptar; no
  extingue obligaciones» (l. 101); «Estructural | Versión soportada, tipos,
  enumeraciones, campos condicionales, tiempos y transición permitida»
  (l. 129); «`expired`: venció antes del punto permitido por la política de
  caducidad» (l. 163).
- Tipo: `incompleto`
- Gravedad: `baja`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos textuales; `media` sobre el efecto (S05
  l. 152-180 sólo como dependencia mínima; S11 no leída)
- Impacto: si la capa estructural (l. 129), que S04 l. 112 obliga a aplicar
  «mediante runtime/policy determinista» por tratarse de schema, puede
  comprobar la presencia de `expires_at`/`due_at`; si un `pending` sin
  `expires_at` es válido y, entonces, nunca alcanza `expired` (l. 77, 80); y
  quién fija la «política de caducidad» de l. 163. Responde a la pregunta 5 de
  `B019`. No cambia el contenido de ninguna fila aceptada.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión exclusivamente interna; no se invoca
  ninguna fuente externa)
- Fuente primaria: `docs/definition/session-05-handoffs.md` l. 62, 66, 77, 80
  (dependencia), 100-101, 129 (leídas), l. 163 y 175 (dependencia, por
  búsqueda) y búsqueda en toda la unidad de «condicional», «política»,
  «caducidad»; `docs/adr/ADR-004-contrato-portable-de-handoffs.md` l. 42,
  61-101 y búsqueda de «condicional|caducidad|expira|vigencia|expires_at|
  due_at»; `docs/definition/session-04-operating-cycle.md` l. 112
- Sección o localizador: «Envoltura común mínima», «Capas de validación»,
  «Decisiones», «Lifecycle inicial» (S05); «Alternativas evaluadas» y
  «Decisión» (ADR-004); fila l. 112 (S04)
- Fecha de consulta/publicación: consulta 2026-09-24; S05 cerrada el
  2026-09-16 según l. 3
- Hecho observado:
  1. **«Condicional» sin condición.** En toda S05 «condicional» aparece en
     l. 59 (operación condicional de ownership), l. 66, l. 100, l. 101 y
     l. 129. Ninguna de esas líneas ni otra de la unidad dice bajo qué
     condición `expires_at` o `due_at` son obligatorios (tipo, frontera,
     política). ADR-004 no nombra `expires_at` ni `due_at` (búsqueda; la
     «Decisión» l. 69-70 sólo dice «tiempos») y menciona «campos
     condicionales» sólo como coste de la alternativa aceptada (l. 42).
  2. **La capa estructural debe comprobar lo que no está definido.** l. 129
     incluye «campos condicionales, tiempos» entre las comprobaciones
     estructurales; S04 l. 112 exige que «toda regla obligatoria verificable
     mecánicamente» —incluidos «schemas»— se aplique con runtime/policy
     determinista. Sin condición escrita, la ausencia de `expires_at` no puede
     rechazarse como artefacto inválido (l. 70) ni admitirse como válida con
     fundamento en la unidad.
  3. **«Política de caducidad» sin dueño.** l. 163 (bloque `B021`) hace
     depender `expired` de «la política de caducidad»; la expresión aparece
     sólo ahí; ninguna fila de l. 52-80 ni línea de l. 82-150 dice quién la
     fija ni dónde consta. l. 175 (por búsqueda) añade «no se permite rechazo,
     caducidad ni sustitución tardíos» sin decir desde cuándo es «tardío».
  4. **Efecto sobre la recuperación.** l. 77 permite `expired` sólo desde
     `pending` y l. 80 dice que «un `pending` vigente puede reentregarse»;
     un `pending` sin `expires_at` es vigente indefinidamente y la
     justificación de l. 62 («Evita aceptar contexto viejo») depende de un
     campo cuya presencia ninguna regla exige.
- Inferencia (si aplica): «condicional» puede significar «opcional según el
  tipo» (por ejemplo, `due_at` sólo en `verification_request` y
  `consultation`, porque en ownership `accepted` y `completed` son atómicos,
  l. 60), pero esa lectura no está escrita y la capa estructural no puede
  aplicarla sin ella.

## Observación y propuesta

- Observación: no se cuestiona la decisión de caducar sólo la oferta `pending`
  (l. 62); se señala que la obligatoriedad condicional y la política que
  gobierna `expired` quedan fuera de la unidad sin marca de aplazamiento, en
  un punto que la propia unidad declara mecanizable (l. 129). Patrón de
  aplazamiento silencioso, distinto de los embebidos de `REV-2026-036` hecho
  6 (que sí anuncian «se definirá»).
- Propuesta concreta: que la persona decida (a) si S05 debe escribir la
  condición (por tipo, por frontera o por política) que hace obligatorios
  `expires_at` y `due_at`, y cuál es el valor por omisión cuando faltan; (b)
  quién fija la «política de caducidad» de l. 163 y dónde consta (S05, S11 o
  configuración del runtime), registrándolo como `deferred` con destino si no
  se decide ahora. No editar S05 sin esa decisión.
- Contraargumento o coste/riesgo: la capa de reconciliación (l. 131, `base`
  l. 105) rechaza de todos modos un handoff cuya base ya no está vigente
  (`stale_or_conflicting_base`, l. 142), de modo que un `pending` sin
  `expires_at` no autoriza escritura sobre contexto viejo; la política de
  caducidad puede ser legítimamente un parámetro del runtime (S11) y no del
  contrato semántico; el coste de la propuesta es una frase por campo.

## Análisis adicional

- Evidencia interna: hechos 1-4. Enlaces: S05 l. 62, 66
  ([Decisiones](../definition/session-05-handoffs.md#decisiones)), l. 100-101
  ([Envoltura](../definition/session-05-handoffs.md#envoltura-común-mínima)),
  l. 129 ([Capas](../definition/session-05-handoffs.md#capas-de-validación)),
  l. 163 ([Lifecycle inicial](../definition/session-05-handoffs.md#lifecycle-inicial));
  S04 l. 112 ([tabla de conclusiones](../definition/session-04-operating-cycle.md#acuerdos-y-orientación-de-la-sesión));
  ADR-004 l. 42 ([Alternativas evaluadas](../adr/ADR-004-contrato-portable-de-handoffs.md#alternativas-evaluadas));
  anotaciones relacionadas: [`REV-2026-036`](2026-09-24-REV-2026-036-pregunta-8-de-s05-representacion-y-ubicacion-sin-fila-y-aplazamiento-de-s04-l299-no-recibido.md)
  (hecho 6: aplazamientos embebidos), [`REV-2026-028`](2026-09-24-REV-2026-028-aplazamientos-embebidos-en-filas-accepted-de-s04-sin-fila-deferred-ni-destino-en-la-unidad.md)
  (umbral temporal de S04 sin destino).
- Contraevidencia y límites: S05 l. 152-169 se leyeron sólo como dependencia
  mínima y l. 170-232 por búsqueda: la condición podría estar expresada sin
  la palabra «condicional» (por ejemplo, en «Separación y recuperación»),
  aunque «caducidad» y «política» no aparecen fuera de las líneas citadas;
  S11 y ADR-010 no se leyeron. No se demuestra que la condición no exista en
  ningún documento; se demuestra que S05 la declara y no la escribe.
- Pregunta para resolver: ¿bajo qué condición son obligatorios `expires_at` y
  `due_at`, qué vale su ausencia para la capa estructural, y quién fija la
  «política de caducidad» que decide `expired`?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: pendiente
