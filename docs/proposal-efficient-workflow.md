# Propuesta: trabajo con contexto acotado y modelos por tarea

Fecha: 2026-09-15. Estado: distribución de roles `accepted`; validación funcional
parcial completada con tareas breves. El acuerdo siguiente prevalece sobre las
propuestas iniciales.
Ámbito: nuestra operación durante la definición de T800R. No selecciona la
arquitectura del producto ni autoriza construcción.

## Distribución aceptada

El usuario confirmó una suscripción de USD 20 y eligió cambiar manualmente a
Sol como interlocutor. No se confirmó cómo se descuenta la cuota por modelo;
los precios API del informe no representan su consumo de suscripción.

| Rol | Modelo acordado |
| --- | --- |
| Interlocutor principal y coordinador; análisis complejo habitual | `openai/gpt-5.6-sol` |
| Investigación acotada y análisis delegado intermedio | `openai/gpt-5.6-terra` |
| Extracción de hechos y transformación documental mecánica | `openai/gpt-5.6-luna` |
| Consulta excepcional para problemas que justifiquen mayor capacidad | `openai/gpt-6-astra` |

Estado: `accepted`. Justificación: el usuario aceptó la distribución y eligió
Sol, en lugar de Terra, para conversar y coordinar. Sol sugerirá cuándo consultar
a Astra y con qué pregunta concreta; la consulta se acordará con el usuario.
La configuración local se aplicó en `opencode.jsonc` y `.opencode/agents/`:
Sol para los agentes principales, Luna como modelo pequeño y explorador, Terra
para `general`, Luna para `t800r-docs` y Astra para `t800r-astra`. La invocación
de Astra requiere aprobación. Esta aceptación no demuestra ahorro de cuota.

## Validación funcional realizada

La validación breve confirmó parcialmente la distribución operativa:

| Rol probado | Modelo efectivo declarado | Resultado |
| --- | --- | --- |
| Coordinador de esta ejecución | `openai/gpt-5.6-sol` | Declarado por esta conversación; no es un benchmark de calidad. |
| `explore` | `openai/gpt-5.6-luna` | Extrajo acuerdos con referencias y no excedió el alcance. |
| `general` | `openai/gpt-5.6-terra` | Comparó dos alternativas y mantuvo la recomendación no vinculante. |

La transformación documental de esta actualización fue realizada por
`t800r-docs`, que declaró `openai/gpt-5.6-luna`. Astra no se invocó porque no
había bloqueo y su uso sigue requiriendo aprobación. Esta evidencia confirma
comportamiento en tareas acotadas, no calidad general, rendimiento,
disponibilidad ni ahorro.

## Diagnóstico comprobado

- `AGENTS.md` exige leer primero el tracker. Antes del ajuste tenía 305 líneas,
  mezclaba continuidad inmediata con historia extensa y repetía acuerdos que ya
  tenían fuente canónica. Se compactó a 90 líneas para reducir el contexto
  inicial sin sustituir el documento rector.
- Antes del ajuste, la configuración global revisada,
  `~/.config/opencode/opencode.jsonc`, sólo configuraba GitHub MCP y no había
  configuración OpenCode en el proyecto ni un directorio global `agents/` en la
  ubicación revisada. La distribución aceptada se aplicó después en el proyecto.
- OpenCode instalado: `1.18.30`. Su documentación indica que los subagentes sin
  modelo explícito heredan el del agente principal. La herramienta Task de esta
  conversación no permite pasar un modelo: la selección debe configurarse por
  agente, no resolverse escribiendo «usa mini» en el encargo.
- `opencode models` lista `openai/gpt-5.4-mini`, `openai/gpt-5.4` y
  `openai/gpt-6-astra`, entre otros. El catálogo no demuestra acceso operativo,
  calidad relativa ni coste efectivo en la cuenta.
- GitHub MCP expone numerosas herramientas en esta conversación. Conviene
  evaluar su activación por necesidad para reducir contexto de herramientas.

No se midió el consumo histórico ni se verificaron tarifas o cuotas del plan.
Las causas anteriores son oportunidades de ahorro, no atribuciones cuantificadas.

## Alternativas

| Alternativa | Beneficio | Coste o riesgo | Recomendación |
| --- | --- | --- | --- |
| Astra principal con workers menores | Conserva máxima capacidad conversacional | Cada vuelta del coordinador sigue usando Astra | Reservar para una discusión compleja concreta |
| Coordinador intermedio, workers pequeños y especialista Astra | Ajusta capacidad al trabajo y reduce uso rutinario de Astra | Requiere encargos precisos y escalamiento | Base propuesta |
| Delegar toda acción a muchos workers | Más paralelismo | Repite instrucciones, contexto y revisiones; puede costar más | Evitar como regla general |

## Asignación inicial propuesta

**Revisión posterior:** la selección de GPT-5.4 fue prematura al no comparar
GPT-5.5 y la familia GPT-5.6. La tabla siguiente conserva la propuesta inicial,
no una elección validada. Véase la investigación al final para los nuevos
candidatos Luna/Terra/Sol. El usuario expresó conformidad con la idea general;
la asignación concreta y su configuración están reflejadas en la sección
aceptada anterior.

Este bloque conserva la asignación inicial como trazabilidad histórica; quedó
superado por la distribución aceptada. No es un ranking de calidad ni de
precios comprobado.

| Rol | Modelo explícito | Tareas y límites |
| --- | --- | --- |
| Coordinador principal | `openai/gpt-5.4` | Conversar, delimitar la pregunta, elegir ejecución directa o delegación, integrar evidencia y registrar acuerdos confirmados. |
| Explorador | `openai/gpt-5.4-mini` | Localizar archivos, extraer hechos y referencias, comparar listas. Sólo lectura; sin interpretación de acuerdos ambiguos. |
| Documentador | `openai/gpt-5.4-mini` | Aplicar acuerdos ya explícitos a archivos asignados, mantener enlaces y preparar continuidad. Escalar ambigüedades semánticas. |
| Investigador/revisor | `openai/gpt-5.4` | Contrastar fuentes y alternativas, comprobar coherencia y detectar contradicciones. No convertir recomendaciones en acuerdos. |
| Especialista | `openai/gpt-6-astra` | Decisiones transversales difíciles, restricciones en conflicto o bloqueos que el nivel intermedio no pueda resolver con evidencia. |

No crear un agente adicional por cada documento ni mantener todos activos.
En la fase actual bastan coordinador, explorador/documentador cuando aporten y
especialista bajo demanda. Los roles de construcción se definirán cuando proceda.

## Flujo operativo

1. El coordinador carga estado mínimo y la sección canónica pertinente.
2. Clasifica por ambigüedad, consecuencias del error y facilidad de verificación.
   Una lectura puntual o corrección mínima se hace directamente; una exploración
   extensa o un lote documental acotado puede justificar un worker.
3. Delega con objetivo, fuentes/rutas, alcance, archivos permitidos, criterio de
   aceptación y formato de retorno. No copia toda la conversación.
4. El worker devuelve resultado breve, evidencia con rutas/líneas o enlaces,
   cambios realizados, comprobaciones y bloqueos. Objetivo orientativo: hasta
   300 palabras; conservar la evidencia necesaria aunque requiera más espacio.
5. El coordinador verifica criterios y evidencia decisiva, sin repetir toda la
   búsqueda. Añade revisión independiente sólo por riesgo o incertidumbre real.
6. Integra una vez y plantea a la persona la siguiente decisión concreta.

Escalamiento: mini → intermedio → Astra. Escalar ante interpretación de acuerdos,
contradicciones sin resolver o un intento fallido por capacidad; los fallos de
herramientas o acceso se resuelven como tales. Se puede iniciar en un nivel mayor
si la dificultad es evidente. Astra recibe un resumen del bloqueo y evidencia,
no reconstruye toda la investigación por defecto.

Límites iniciales propuestos: un worker por defecto, hasta dos en paralelo si son
independientes; sin subdelegación en cascada. Un único escritor por archivo;
tracker y registro canónico se actualizan secuencialmente. Un encargo que exceda
su alcance devuelve un bloqueo en lugar de ampliar la investigación por su cuenta.

## Contexto y persistencia

- Convertir el tracker en un punto de entrada de unas 60–90 líneas: estado,
  próxima acción, tabla de sesiones y enlaces a acuerdos. Mover historia útil a
  un archivo enlazado y preservar fuentes canónicas y trazabilidad.
- Cargar sólo la sección relevante del documento rector y las investigaciones
  necesarias para la pregunta actual.
- Registrar el acuerdo completo una vez en la fuente canónica; el tracker enlaza.
- Usar herramientas deterministas para verificaciones mecánicas y no encargar
  razonamiento a un modelo para tareas que resuelva una comprobación directa.
- Evaluar herramientas/MCP por rol y necesidad; comprobar el efecto real sobre
  contexto, sin asumir que restringir permisos elimina todo su coste.
- Abrir una conversación nueva tras un bloque cerrado cuando reduzca contexto
  irrelevante; evitar reinicios frecuentes que obliguen a reconstruirlo todo.

## Aplicación y evaluación pendientes

Configuración aplicada y validada estructuralmente con OpenCode 1.18.30. La
validación funcional breve es parcial y sólo cubre los roles y resultados
descritos arriba. No hubo métricas disponibles de tokens, caché, coste o cuota;
por tanto no se atribuye ahorro.

Las tareas piloto cubrieron una extracción de hechos, una actualización
documental acordada y una comparación acotada de alternativas. Sigue pendiente
medir consumo y calidad a lo largo del trabajo real: registrar tokens de
entrada/salida y caché cuando estén disponibles, coste o cuota según la cuenta,
tiempo, correcciones y escalaciones. Evaluar también el efecto de MCP y del
contexto, incluyendo coordinación y revisiones, sin repetir trabajo sólo para
fabricar una comparación ni prometer ahorro.

Aceptar la asignación si conserva fidelidad a acuerdos, evidencia y continuidad
y reduce el consumo efectivo. Si mini exige correcciones frecuentes, subir ese
tipo de tarea al nivel intermedio. No comprometer un porcentaje de ahorro antes
de medir ni asumir que una variante `fast` cuesta menos.

## Fuentes

- Archivos locales: `AGENTS.md`, `docs/definition-tracker.md`,
  `docs/definition/session-04-operating-cycle.md` y configuración global indicada arriba.
- Comandos: `opencode --version`, `opencode models`.
- [OpenCode: agentes, modelos y permisos](https://opencode.ai/docs/agents/),
  consultado el 2026-09-15.

## Investigación delegada: Sol, Terra y Luna

El usuario solicitó investigar estos modelos y sugirió Terra para hacerlo.
Se delegó a un agente general; Task no permite seleccionar modelo y el agente
reportó Astra como modelo declarado por su entorno. No se ejecutó con Terra.
Investigación de sólo lectura; las tres fichas oficiales se comprobaron al
integrar el resultado el 2026-09-15.

| Modelo | Posicionamiento oficial | Entrada / caché / salida, USD por millón de tokens |
| --- | --- | --- |
| GPT-5.6 Luna | Alto volumen sensible al coste; nivel aproximadamente nano | 0,20 / 0,02 / 1,20 |
| GPT-5.6 Terra | Equilibrio inteligencia/coste; nivel aproximadamente mini | 2 / 0,20 / 12 |
| GPT-5.6 Sol | Trabajo profesional complejo; nivel insignia | 4 / 0,40 / 20 |

Precios API Standard con hasta 272.000 tokens de entrada. Por encima, las fichas
indican 2× entrada y 1,5× salida para toda la solicitud. Precio de Sol promocional
al menos hasta el 2026-11-21. No equivale necesariamente al consumo de la cuota
del usuario. Los tres admiten llamadas a funciones y salidas estructuradas.

La ficha de Sol también lista GPT-5.4 a 2,50/0,25/15 y GPT-5.5 a 5/0,50/30;
la de Terra lista GPT-5.4 mini a 0,75/0,075/4,50. Ser más reciente no implica
ser más barato: Terra cuesta más por token que GPT-5.4 mini.

Recomendación `deferred`: probar Luna para extracción/transformación mecánica,
Terra para coordinación e investigación acotada y Sol para análisis complejo;
escalar a Astra sólo si la dificultad lo justifica. Son hipótesis de asignación,
no resultados de un benchmark. Falta confirmar modalidad de cobro/cuota y medir
calidad y consumo total; GPT-5.4/mini y GPT-5.5 siguen siendo comparadores.

Fuentes primarias:
- [GPT-5.6 Luna](https://developers.openai.com/api/docs/models/gpt-5.6-luna.md).
- [GPT-5.6 Terra](https://developers.openai.com/api/docs/models/gpt-5.6-terra.md).
- [GPT-5.6 Sol](https://developers.openai.com/api/docs/models/gpt-5.6-sol.md).
