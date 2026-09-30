# ADR-005: Contrato portable de contexto

**Fecha:** 2026-09-18
**Estado:** Aceptada

## TL;DR

- **Problema:** los agentes necesitan contexto suficiente y vigente sin copiar todas las fuentes, saturar la ventana de trabajo ni depender de capacidades particulares de un proveedor.
- **Decisión:** adoptar un context packet portable con núcleo común, secciones semánticas bajo demanda, presupuesto híbrido, reconciliación incremental y parada verificable.
- **Por qué importa:** sin este contrato, cada ejecución puede usar información irrelevante, obsoleta o insuficiente y actuar sobre una base, permisos u ownership incorrectos.

## Glosario rápido

- **Context packet:** artefacto separado del handoff que reúne una síntesis operativa y referencias al material necesario para una tarea o capacidad.
- **Progressive disclosure:** carga gradual de información sólo cuando una condición declarada la vuelve necesaria.
- **Manifest:** índice de secciones incluidas o disponibles, con resumen, referencia, prioridad y condición de carga.
- **Marcador:** revisión compacta usada para detectar si cambió una fuente sin releerla completa.
- **Adapter:** integración que traduce capacidades de un proveedor sin cambiar la semántica común.

## Contexto

T800R debe operar con Codex, Claude Code y OpenCode y continuar trabajo entre
sesiones sin depender del historial conversacional. Precargar repositorio,
decisiones, skills, evidencia y coordinación desperdicia contexto y reduce señal;
cargar demasiado poco obliga al agente a inferir o actuar con información
incompleta.

El context packet no puede convertirse en otra fuente canónica ni conceder
permisos. ADR-004 establece que el handoff conserva intención, autoridad,
lifecycle y ownership, mientras el packet sólo aporta material de trabajo
acotado. ADR-003 exige reconciliar estado real, permisos y ownership antes de
ejecutar, pero esa reconciliación debe ser incremental para no releer todo en cada
sesión.

## Alternativas evaluadas

| Alternativa | Beneficios | Costes y riesgos | Resultado |
| --- | --- | --- | --- |
| Paquete exhaustivo único | Todo queda disponible desde el inicio. | Sobrecarga, obsolescencia, pérdida de señal y mayor coste. | Descartada. |
| Contratos separados por tipo de trabajo | Cada flujo puede especializar su contexto. | Duplica identidad, procedencia, presupuesto y validación. | Descartada. |
| Contexto libre decidido por cada adapter | Implementación inmediata por proveedor. | Semántica incompatible y continuidad no verificable. | Descartada. |
| **Núcleo común y secciones bajo demanda** | **Portabilidad, validación común y carga proporcional.** | **Exige manifest, prioridades, marcadores y evidencia de carga.** | **Aceptada.** |

### Por qué descartamos las otras

El paquete exhaustivo no escala con repositorios ni salidas grandes. Los contratos
separados repiten conceptos y dificultan la continuidad. Delegar toda la decisión
al adapter impide comprobar que proveedores distintos recibieron un contexto
equivalente. El núcleo común conserva las garantías y deja la representación
física para arquitectura.

## Por qué la decisión (qué dice la industria)

Las prácticas revisadas de OpenAI y Anthropic para harnesses de agentes favorecen
contexto inicial breve, fuentes de verdad explícitas, progreso persistente y
recuperación entre ventanas de ejecución. También recomiendan mantener accesible
la evidencia detallada sin inyectarla completa en el prompt activo. T800R adopta
esas propiedades como semántica portable, sin convertir nombres de herramientas
o mecanismos de un proveedor en dependencias del núcleo.

## Decisión

1. **Estructura.** El packet contiene `schema`, `id`, `created_at`, `producer`,
   `consumer`, `subject`, `purpose`, `base`, `constraints`, `sources` y `manifest`.
   Conserva una síntesis y referencias; objetivo, criterios y autoridad completos
   permanecen en sus fuentes canónicas.
2. **Secciones.** Los tipos bajo demanda son `work`, `environment`, `knowledge`,
   `capabilities`, `evidence` y `coordination`. Son categorías semánticas, no
   etapas del ciclo ni extensiones de proveedor.
3. **Carga progresiva.** El packet inicia con núcleo, manifest y material esencial.
   Se amplía por exigencia de tarea o capacidad, ambigüedad relevante, comprobación
   de vigencia o evidencia, dependencia o solicitud de un actor autorizado. Cada
   carga registra causa y revisión.
4. **Presupuesto.** El manifest clasifica material `required`, `relevant` u
   `optional` y declara `budget_profile`. Los adapters añaden métricas disponibles
   y reservan capacidad para respuesta y herramientas; tokens y coste no son
   requisitos universales.
5. **Degradación.** Ante presión se deduplica, resume y difiere primero lo opcional
   y luego lo relevante. Núcleo, restricciones, base y material requerido nunca se
   omiten silenciosamente. Si no caben, no se actúa.
6. **Reconciliación.** Al iniciar o reanudar se comparan marcadores compactos. Si
   coinciden, no se releen secciones; si cambian, sólo se revisan referencias
   afectadas. Antes de producir efectos se validan las precondiciones relacionadas.
7. **Impacto.** Cada referencia declara `packet`, `section` o `advisory`. El primer
   cambio exige un packet sucesor; el segundo recarga sólo la sección; el tercero
   se consulta cuando pasa a ser relevante. No existe caducidad temporal universal.
8. **Estados.** `ready` permite uso sujeto a permisos reales; `degraded` sólo
   permite trabajo independiente de material faltante; `invalid` no permite
   actuar; `superseded` conserva historia. No existe `completed`.
9. **Validación.** Las capas son `structural`, `referential`, `freshness` y
   `sufficiency`. Un artefacto estructuralmente inválido no entra en los estados y
   genera diagnóstico auditable.
10. **Parada.** La carga termina cuando lo requerido está validado y no queda una
    incertidumbre capaz de cambiar acción o veredicto. Se detiene el trabajo ante
    material obligatorio ausente, contradicción crítica, base, ownership o
    permisos ambiguos, presupuesto insuficiente o falta de una fuente autorizada.
11. **Evidencia.** Ensamblaje, carga, reconciliación, degradación, invalidación y
    reconstrucción registran actor, fecha, base, causa, revisiones, inclusiones y
    omisiones, presupuesto, resultado y predecesor cuando exista.
12. **Herramientas.** Reducir salidas debe preservar errores, estado, procedencia y
    acceso al bruto; externalizar contenido debe permitir búsqueda, paginación o
    expansión. RTK y Context Mode son optimizaciones opcionales, no dependencias.

## Consecuencias para el equipo

- Preparar contexto requiere manifest, referencias versionadas y prioridades
  explícitas, no copiar documentos completos por defecto.
- Reanudar una sesión compara primero marcadores; sólo relee material afectado.
- Un packet degradado permite trabajo independiente, pero no oculta sus omisiones.
- Ningún packet amplía permisos, autoridad u ownership.
- Los adapters pueden usar métricas y herramientas propias, siempre que preserven
  la semántica y la evidencia común.
- La selección de mecanismos físicos y su coste se pospone hasta disponer de
  compatibilidad y mediciones.

## Puntos abiertos

- ¿Cómo se representan identidad lógica y aliases del packet? → contrato lógico
  resuelto en sesión 8 y [ADR-007](ADR-007-contrato-de-capacidades-y-adapters-portables.md); representación física → sesión 11.
- ¿Qué sintaxis expresa las condiciones de carga del manifest? → semántica
  declarativa resuelta en sesión 8; sintaxis y evaluador → sesión 11.
- ¿Qué representación física, almacenamiento y mecanismos de búsqueda se usan? →
  sesión 11, arquitectura del MVP.
- ¿RTK, Context Mode o equivalentes entran al MVP? → conservados como candidatos
  opcionales en sesión 8; selección y medición → sesiones 11 y 12.
- ¿Qué taxonomía, metadatos y mantenimiento usa la sección `knowledge`? → resuelto
  en sesión 7 y [ADR-006](ADR-006-modelo-portable-de-conocimiento.md); la
  representación física continúa diferida a sesión 11.

## Referencias

- Acuerdos canónicos: [sesión 6](../definition/session-06-context.md).
- [ADR-002: Fuentes canónicas y conocimiento](ADR-002-fuentes-canonicas-y-conocimiento.md).
- [ADR-003: Ciclo operativo, ownership y coordinación](ADR-003-ciclo-operativo-y-coordinacion.md).
- [ADR-004: Contrato portable de handoffs](ADR-004-contrato-portable-de-handoffs.md).
- [ADR-006: Modelo portable de conocimiento](ADR-006-modelo-portable-de-conocimiento.md).
- OpenAI: *Harness engineering* — https://openai.com/index/harness-engineering/
- Anthropic: *Effective harnesses for long-running agents* — https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents
- Anthropic: *Effective context engineering for AI agents* — https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents
