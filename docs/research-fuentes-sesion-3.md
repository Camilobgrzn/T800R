# Investigación: fuentes configurables para agentes

Fecha: 2026-09-14.

Insumo para la sesión 3, obtenido mediante tres agentes de investigación
autorizados por el usuario. No constituye una decisión aceptada. La fuente
canónica de acuerdos sigue siendo el [índice rector](product-definition.md) y la
[unidad de sesión 3](definition/session-03-sources-of-truth.md).

## Alcance y método

Se investigaron en paralelo registro y mantenimiento de fuentes, acceso mediante
RAG o MCP, y autoridad y resolución de discrepancias. Los agentes consultaron
documentación primaria mediante lectura web y devolvieron referencias y límites
de sus conclusiones. Esta síntesis distingue estándares, comportamientos de
productos concretos y recomendaciones propias para T800R.

## Hallazgos contrastados

| Hallazgo | Evidencia publicada | Inferencia para T800R |
| --- | --- | --- |
| Separar identidad y acceso. | DCAT distingue recursos catalogados, distribuciones, servicios y registros del catálogo. MCP distingue recursos y herramientas. | Una fuente puede tener varios accesos sin convertirse en varias autoridades. El índice o servidor no sustituye la identidad del original. |
| Conservar procedencia. | PROV describe entidades, actividades, responsables y derivaciones; DWBP recomienda informar el origen y los cambios. | Una conclusión relevante debe poder rastrearse hasta el documento y fragmento usados, distinguiendo originales de resúmenes e inferencias. |
| Evaluar aplicabilidad antes que novedad. | DWBP recomienda versiones, historial e identificadores estables; GitHub documenta enlaces a archivos fijados a commits. | La versión más reciente de una documentación no necesariamente corresponde a la dependencia del proyecto. Registrar consulta reciente no demuestra aplicabilidad. |
| La autoridad necesita contexto. | Las instrucciones por rutas de Codex y Copilot muestran ámbitos explícitos; DWBP considera idoneidad para un propósito. | Declarar para qué preguntas aplica una fuente. No existe en estas referencias una jerarquía universal que resuelva toda contradicción entre acuerdos, documentación y código. |
| Los ejemplos no trasladan automáticamente todas sus decisiones al proyecto. | DWBP distingue resultados normativos de enfoques ilustrativos de implementación. | Identificar qué patrón ilustra el ejemplo y sus supuestos; una convención obligatoria necesita quedar reconocida como tal. |
| El catálogo puede crecer sin cargar todo su contenido. | MCP permite descubrir y leer recursos por separado; Anthropic describe recuperación bajo demanda con referencias ligeras. | Mantener un mapa compacto y recuperar contenido según la tarea, con el coste de latencia y posibles omisiones. |
| Descubrir cambios no equivale a aceptar su contenido. | MCP documenta capacidades opcionales de notificación; HTTP ofrece revalidación mediante validadores. | Distinguir cambios de catálogo, cambios del original y actualización de derivados. La disponibilidad no demuestra frescura ni la modificación de una fuente autoriza cambios de acuerdos. |

## Ejemplo documentado: Microsoft Learn

Microsoft documenta búsqueda, lectura de páginas y búsqueda de ejemplos mediante
su servidor MCP. Esto muestra cómo una fuente oficial puede ofrecer varios modos
de consulta. Para T800R, el patrón propuesto es buscar, abrir el original relevante
y conservar la referencia que respalda la conclusión. No implica adoptar Microsoft
ni imponer sus herramientas a los proyectos.

## Recomendación para discutir

Definir un registro de fuentes ampliable en cualquier momento, separando:

1. **Declaración de la fuente:** identidad, propósito, origen, ámbito, papel
   (acuerdo, referencia, ejemplo), versión aplicable cuando corresponda y acceso.
2. **Evidencia de uso:** documento o fragmento utilizado, revisión o fecha de
   recuperación relevante y distinción entre cita, resumen e inferencia.
3. **Mantenimiento:** estado, última comprobación y sustitución o retiro cuando
   corresponda, sin exigir que la persona complete manualmente todos los datos.

Los campos anteriores son candidatos, no un esquema aprobado. Conviene admitir
valores desconocidos explícitos y graduar la trazabilidad según la importancia
de la decisión; un catálogo excesivamente detallado aumenta el coste de adopción.

Ante discrepancias, se propone comprobar primero ámbito, versión y papel de las
fuentes. El código actual y el acuerdo pueden revelar un incumplimiento, en vez
de competir por cuál debe creerse. Si resolverlo requiere modificar acuerdos,
aplican las consultas humanas ya aceptadas en la sesión 2.

## Límites y pendientes

- RAG y MCP no garantizan verdad, exhaustividad, disponibilidad ni vigencia.
- Una cita facilita comprobar una afirmación, pero no garantiza que la respalde.
- Las precedencias de un proveedor no son un contrato portable de T800R.
- Los informes consultaron distintas revisiones de MCP. Suscripciones,
  notificaciones y descubrimiento deben comprobarse frente a la versión y
  capacidades reales del servidor; no se selecciona aquí una versión.
- No se ha aprobado el registro propuesto, su esquema, una política de actualización
  ni quién puede incorporar fuentes de forma autónoma.
- No se evaluaron servidores ni índices en ejecución. La validación técnica
  corresponde a sesiones posteriores y, si hiciera falta, a un spike autorizado.

## Referencias primarias

- W3C, DCAT 3: https://www.w3.org/TR/vocab-dcat-3/
- W3C, Data on the Web Best Practices: https://www.w3.org/TR/dwbp/
- W3C, PROV Overview (nota explicativa): https://www.w3.org/TR/prov-overview/
- MCP, recursos, revisión 2025-06-18: https://modelcontextprotocol.io/specification/2025-06-18/server/resources
- Microsoft Learn MCP: https://learn.microsoft.com/en-us/training/support/mcp
- Microsoft Learn MCP, referencia: https://learn.microsoft.com/en-us/training/support/mcp-developer-reference
- Microsoft Learn MCP, prácticas recomendadas: https://learn.microsoft.com/en-us/training/support/mcp-best-practices
- Microsoft, visión general de RAG: https://learn.microsoft.com/en-us/azure/search/retrieval-augmented-generation-overview
- GitHub, instrucciones del repositorio: https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot
- Codex, instrucciones AGENTS.md: https://developers.openai.com/codex/guides/agents-md
- GitHub, enlaces permanentes: https://docs.github.com/en/repositories/working-with-files/using-files/getting-permanent-links-to-files
- Anthropic, ingeniería de contexto: https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents
- IETF, semántica HTTP y validadores: https://www.rfc-editor.org/rfc/rfc9110.html#section-8.8
