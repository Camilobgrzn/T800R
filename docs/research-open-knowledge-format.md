# Investigación: Open Knowledge Format en agentes y harnesses

Fecha de consulta: 2026-09-14. Insumo para la sesión 3; no implica adopción.

## Corrección y método

El usuario aclaró que OKF se refiere a **Open Knowledge Format**, mediante el
artículo de Google Cloud enlazado abajo. La expansión Operational Knowledge Files
en `ideas/MULTI_AGENT_HARNESS_ARCHITECTURE.md` produjo una interpretación errónea
del asistente. No debe utilizarse como definición de la especificación externa.

Se intentó iniciar cuatro agentes para profundizar la investigación, pero todos
fallaron por límite de uso antes de entregar resultados. El asistente continuó
directamente: leyó el anuncio, la especificación, documentación y código público
de referencia, y casos originales de harnesses y fábricas de software. No se
ejecutó el código ni se hicieron benchmarks; es investigación documental.

## Fuente y versión verificadas

- El anuncio de Google Cloud del 2026-06-12 presenta OKF v0.1.
- El README de `GoogleCloudPlatform/knowledge-catalog/okf` indica que es una copia
  congelada y remite al repositorio canónico `GoogleCloudPlatform/open-knowledge-format`.
- Se consultó la especificación **v0.2**, fijada al commit
  `ad30107c31c06aec8a7d5636e0d1058118604e6f` del repositorio canónico, fechado
  2026-08-21. No se confunde una lectura de `main` con una versión inmutable.

## Qué especifica OKF v0.2

| Aspecto | Evidencia en SPEC.md | Implicación para T800R, pendiente de decisión |
| --- | --- | --- |
| Representación portable | §§1–4: bundle de Markdown con front matter YAML, sin runtime ni SDK obligatorio; identidad por ruta sin `.md`. | Puede representar conocimiento sin obligar a usar servicios o modelos de Google. Mover conceptos exige cuidar sus referencias. |
| Estructura mínima | §11: front matter parseable y `type` no vacío en conceptos; reglas para archivos reservados. | No basta con llamar OKF a cualquier carpeta de Markdown. El esquema genérico tampoco aporta por sí solo todas las reglas del proyecto. |
| Descubrimiento | §8: `index.md` opcional para navegación progresiva; §6: enlaces entre conceptos. | Un agente puede explorar un índice y abrir lo pertinente sin cargar todo el bundle. T800R debe organizar ese uso. |
| Procedencia | §5.1: `sources`, identificadores opcionales y notas al pie para atribuciones por afirmación. | Los aprendizajes sintetizados pueden conservar vínculos con documentación, código y evidencia de origen. |
| Generación y verificación | §§5.2–5.3: `generated` y `verified` son distintos; niveles derivados de verificación humana o automática. | Persistencia y generación no equivalen a confirmación. `human-reviewed` es una señal declarada, no prueba autenticada ni autorización de producto. |
| Ciclo de vida | §§5.4–5.5: `draft`, `stable`, `deprecated`, y `stale_after` opcional. Ausencia de estado implica `stable`; ausencia de verificación implica no verificado. | `stable` no significa acuerdo aceptado. La política de uso debe distinguir ambos e identificar cuándo falta evidencia de vigencia. |
| Tolerancia | §§6 y 11: consumidores toleran enlaces rotos, tipos desconocidos y ausencia de familias opcionales. | Leer un bundle conforme no obliga a tratar todo su contenido como suficiente para construir. T800R puede señalar referencias inutilizables sin confundirlo con rechazo por formato. |
| Cómputos atestados | §10: concepto que enlaza cómputo autorizado, ejecutor y comprobador determinista; evidencias por ejecución externas al bundle. | Es un contrato para valores calculados, no un sistema general de aceptación de código. El formato no ejecuta los cómputos. |

La especificación §13 declara dos cambios incompatibles entre v0.1 y v0.2:
`timestamp` pasa a `generated.at` y la lista corporal `# Citations` a `sources`,
con fallbacks descritos. Esto matiza la regla general de cambios menores
compatibles de §12: una eventual adopción necesita fijar versión y evaluar
migraciones, no asumir compatibilidad por el número menor.

## Qué muestra la implementación de referencia

El README la califica de prueba de concepto, orientada a BigQuery. Describe una
primera pasada desde metadatos y otra de enriquecimiento web desde URLs semilla.
Incluye bundles de ejemplo y un visualizador: demuestra producción y consumo,
no eficacia medida de un harness de codificación con OKF.

La inspección de código y prompts en el commit fijado confirma:

- `bundle_tools.py`: lectura de conceptos existentes, escritura y generación
  automática de metadatos. Durante enriquecimiento web de conceptos BigQuery
  Table, comprueba que no desaparezcan nombres de campos y que no disminuya la
  cantidad de fuentes. Esos controles no prueban que se preserven todas las
  afirmaciones ni la identidad de cada fuente.
- `document.py`: parseo, validación mínima de `type`, derivación del nivel de
  verificación desde actores y evaluación de caducidad. `trust_tier` no comprueba
  autenticidad del actor ni que la verificación sea posterior a la edición;
  `is_stale` devuelve falso si falta una fecha válida. Estas salidas no deben
  confundirse con evidencia positiva de verificación o frescura.
- `web_ingestion_instruction.md`: instrucciones para leer antes de enriquecer,
  conservar contenido, citar sólo URLs recuperadas y evitar referencias huérfanas.
  Son reglas del agente de ejemplo, distintas de obligaciones generales de OKF.

## Aplicación en agentes, harnesses y fábricas

| Caso primario | Práctica documentada | Qué demuestra y qué no |
| --- | --- | --- |
| Karpathy, LLM Wiki | Fuentes originales, wiki derivada y reglas de mantenimiento; ingesta, consulta y revisión de contradicciones. | Patrón conceptual que el anuncio de Google reconoce como antecedente. No es evaluación controlada ni garantiza mantenimiento sin errores. |
| OpenAI, Harness engineering | `AGENTS.md` breve como mapa, documentación estructurada, índices, comprobaciones y agente de mantenimiento documental. | Relato de experiencia interna con codificación autónoma. No declara uso de OKF ni prueba que el formato sea causa de los resultados. |
| Anthropic, Effective harnesses for long-running agents | Inicialización, requisitos, progreso persistente, Git y validación entre sesiones. | Experimento de harness que respalda continuidad explícita; no adopción de OKF ni demostración de superioridad multiagente. |
| StrongDM, The Filesystem y Pyramid Summaries | Directorios e índices, estado en archivos, reorganización y resúmenes a varios niveles. | Prácticas publicadas por su propia fábrica. No se documenta conformidad OKF; resumir conserva recuperabilidad sólo si se puede volver al original. |

No se encontró en los casos consultados evidencia directa de adopción de Open
Knowledge Format por esas fábricas o una comparación de resultados con/sin OKF.
El formato encaja conceptualmente con varias prácticas, pero no corresponde
presentarlo como estándar de facto de las dark factories.

## Alternativas para T800R

| Alternativa | Beneficios | Costes y límites |
| --- | --- | --- |
| Convenciones propias de conocimiento, sin compatibilidad OKF. | Ajuste directo al contrato del proyecto. | Mantener un formato e integraciones propios; menor intercambio con productores existentes. |
| OKF como representación de conocimiento, con políticas explícitas de T800R por encima. | Reutilizar identidad, enlaces, procedencia y navegación; separar productor y consumidor. | Fijar versión, mapear autoridad/aplicabilidad y distinguir conformidad de aptitud para una tarea. |
| Mantener documentos canónicos existentes e importar/exportar vistas OKF. | Adopción gradual en repositorios existentes. | Derivados y sincronización: cada vista debe señalar su original y no competir como autoridad. |

Recomendación para discutir: tratar OKF como candidato a representación e
intercambio del conocimiento mantenido, con autoridad gobernada por los acuerdos
del proyecto. Puede acompañar documentos canónicos o representarlos si se acuerda,
sin crear una segunda autoridad universal. La memoria provisional sigue siendo
un asunto distinto del formato: un documento OKF puede estar no verificado.

La sesión 3 debe resolver esa responsabilidad semántica. Perfil, taxonomía,
campos obligatorios, compatibilidad de versiones y curación corresponden a la
sesión 7. No se adopta tecnología mediante esta investigación.

## Validación futura propuesta

En validación, comparar tareas equivalentes con documentación navegable existente
y con una representación OKF equivalente. Medir localización de evidencia,
interpretaciones erróneas, detección de versiones/contradicciones, coste de
contexto y mantenimiento. Incluir un documento editado después de verificarse y
una referencia rota. Separar efecto del formato de mejoras en contenido o prompts.
Este experimento no se ejecutó ni se autoriza un spike implícitamente.

## Referencias

1. Google Cloud, anuncio: https://cloud.google.com/blog/products/data-analytics/how-the-open-knowledge-format-can-improve-data-sharing
2. Especificación fijada: https://github.com/GoogleCloudPlatform/open-knowledge-format/blob/ad30107c31c06aec8a7d5636e0d1058118604e6f/SPEC.md
3. README e implementación: https://github.com/GoogleCloudPlatform/open-knowledge-format/tree/ad30107c31c06aec8a7d5636e0d1058118604e6f
4. Herramientas de escritura: https://github.com/GoogleCloudPlatform/open-knowledge-format/blob/ad30107c31c06aec8a7d5636e0d1058118604e6f/src/reference_agent/tools/bundle_tools.py
5. Documento y señales: https://github.com/GoogleCloudPlatform/open-knowledge-format/blob/ad30107c31c06aec8a7d5636e0d1058118604e6f/src/reference_agent/bundle/document.py
6. Prompt de enriquecimiento: https://github.com/GoogleCloudPlatform/open-knowledge-format/blob/ad30107c31c06aec8a7d5636e0d1058118604e6f/src/reference_agent/prompts/web_ingestion_instruction.md
7. Karpathy, LLM Wiki: https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f
8. OpenAI, Harness engineering: https://openai.com/index/harness-engineering/
9. Anthropic, agentes de larga duración: https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents
10. StrongDM, sistema de archivos: https://factory.strongdm.ai/techniques/filesystem
11. StrongDM, resúmenes: https://factory.strongdm.ai/techniques/pyramid-summaries
12. Aviso de migración de repositorio: https://github.com/GoogleCloudPlatform/knowledge-catalog/tree/main/okf
