# Propuesta: harness multiagente para desarrollo

## Propósito

Construir un entorno de trabajo ligero para coordinar agentes de codificación —Codex, Claude Code y OpenCode— sin depender de transcripciones largas ni de prompts globales cada vez más grandes.

El harness debe permitir que varios agentes y sesiones trabajen sobre el mismo proyecto con contexto suficiente, responsabilidades claras y conocimiento durable. La prioridad es la simplicidad operacional: empezar con archivos y herramientas ya disponibles, y añadir automatización solo cuando resuelva un problema observado.

## Principios de diseño

1. **Git es la fuente de verdad del código.** El estado verificable de la implementación vive en archivos versionados, historial, ramas y pruebas.
2. **El estado de trabajo no es documentación.** Tareas activas, responsables y bloqueos viven en Beads; no deben dispersarse entre chats, commits o documentos narrativos.
3. **El conocimiento durable debe ser explícito y revisable.** Decisiones, convenciones y aprendizajes relevantes se guardan en Markdown con metadatos mínimos (OKF), versionado junto al proyecto.
4. **La memoria semántica recupera; no gobierna.** Hindsight —u otro motor equivalente— ayuda a encontrar conocimiento relacionado, pero nunca sustituye a Git, Beads ni a la documentación canónica.
5. **Los procedimientos reutilizables son habilidades.** Las Agent Skills describen cómo ejecutar tareas repetibles y deben poder ser consumidas por cualquiera de los agentes.
6. **Divulgación progresiva de contexto.** Cada agente carga primero un índice y el mínimo contexto necesario; abre detalles únicamente cuando la tarea lo exige.
7. **Resultado primero, comunicación breve.** Los agentes informan qué cambió, qué validaron y qué bloquea; evitan explicar su razonamiento interno, repetir contexto conocido o generar resúmenes extensos por defecto.
8. **Los handoffs transfieren estado estructurado, no transcripciones.** Una sesión nueva debe poder continuar desde una tarea de Beads, el diff y unos pocos enlaces de conocimiento.
9. **Automatización con evidencia.** Ningún componente se incorpora por moda: debe reducir fricción, errores o consumo de contexto de una necesidad repetida.

## Modelo de información

La separación siguiente evita que varios mecanismos compitan por ser la verdad del proyecto.

| Capa | Pregunta que responde | Sistema canónico | Ejemplos |
| --- | --- | --- | --- |
| Código y artefactos | ¿Qué existe y funciona? | Git | código, pruebas, configuración, migraciones, commits |
| Estado de trabajo | ¿Qué se está haciendo ahora y quién lo lleva? | Beads | tareas, prioridades, dependencias, owner, bloqueos |
| Conocimiento durable | ¿Qué decisiones y reglas siguen vigentes? | OKF / Markdown + YAML | ADR, arquitectura, convenciones, pitfalls, runbooks breves |
| Memoria recuperable | ¿Qué contenido pasado podría ser relevante? | Hindsight / memory engine | notas indexadas, decisiones relacionadas, incidentes similares |
| Conocimiento procedimental | ¿Cómo se realiza una operación repetible? | Agent Skills | revisar PR, ejecutar una migración, añadir un endpoint, desplegar |
| Contexto efímero | ¿Qué hace falta para esta interacción puntual? | contexto de la sesión | diff actual, archivos abiertos, salida reciente de herramientas |

Regla de duración:

- **Segundos u horas:** Beads.
- **Días, meses o años:** OKF/Markdown versionado.
- **Recuperación por significado:** Hindsight.
- **Métodos repetibles:** Agent Skills.

## Arquitectura propuesta

```text
                    ┌─────────────────────────┐
                    │      Git / repositorio   │
                    │  código, tests, config   │
                    └───────────┬─────────────┘
                                │
               ┌────────────────┼────────────────┐
               │                │                │
       ┌───────▼──────┐ ┌───────▼────────┐ ┌────▼─────────────┐
       │    Beads     │ │  OKF / Markdown │ │ Agent Skills     │
       │ work state   │ │ durable knowledge│ │ procedures       │
       └───────┬──────┘ └───────┬────────┘ └────┬─────────────┘
               │                │               │
               └──────────┬─────┴─────┬─────────┘
                          │           │
                 ┌────────▼───────────▼───────┐
                 │ Harness de contexto mínimo  │
                 │ índice, reglas, handoff     │
                 └──────┬─────────┬───────────┘
                        │         │
          ┌─────────────▼───┐ ┌───▼─────────────┐
          │ Hindsight /     │ │ RTK + Context    │
          │ semantic recall │ │ Mode             │
          └─────────────────┘ └─────────────────┘
                        │         │
              ┌─────────▼─────────▼──────────┐
              │ Codex · Claude Code · OpenCode│
              └───────────────────────────────┘
```

El harness no tiene que ser un servicio central. En el MVP puede consistir en una estructura de archivos, reglas de descubrimiento y comandos comunes. Los agentes son clientes intercambiables de esas convenciones.

## Componentes y responsabilidades

### Agentes: Codex, Claude Code y OpenCode

Los tres deben operar sobre las mismas convenciones del repositorio. No se les asigna conocimiento privado imprescindible; cada uno puede descubrir la tarea, la documentación y el procedimiento desde el árbol de archivos.

- **Codex:** implementación, inspección del workspace, edición y validación local; también puede coordinar subtareas cuando resulte útil.
- **Claude Code:** implementación y análisis alternativos, especialmente cuando se necesite una segunda revisión o una sesión independiente.
- **OpenCode:** cliente adicional para usar el mismo harness desde otro flujo de trabajo o proveedor.

El harness no debe intentar uniformar sus capacidades internas. Solo debe estandarizar las entradas y salidas compartidas: identificador de tarea, archivos modificados, validación, riesgos, bloqueos y enlaces de contexto.

### Git

Git contiene el producto y su historia. Todo cambio de código, configuración, skill o conocimiento durable debe poder revisarse en un diff. Los commits deben referenciar la tarea de Beads cuando corresponda. No usar Git para expresar coordinación volátil como “estoy investigando X”.

### Beads

Beads es el tablero operativo de agentes y personas. Cada unidad de trabajo debe tener, como mínimo:

- identificador estable;
- objetivo y criterio de terminado;
- prioridad;
- owner actual o estado de disponibilidad;
- dependencias y bloqueos;
- enlaces a archivos, decisiones o skills pertinentes.

Una tarea bien definida es el contrato de un handoff. Al finalizar una sesión, actualizar Beads es más útil que redactar un relato largo del trabajo realizado.

### OKF: Markdown + YAML

OKF representa el conocimiento durable del proyecto mediante archivos fáciles de leer y versionar. Puede implementarse sin un producto específico: Markdown con front matter YAML y una taxonomía pequeña.

Tipos iniciales recomendados:

- `decision`: decisión arquitectónica y sus consecuencias;
- `architecture`: visión de componentes e interfaces;
- `convention`: reglas de código, pruebas o nombres;
- `pitfall`: fallo recurrente, causa y prevención;
- `runbook`: operación breve y comprobable;
- `learning`: hallazgo reutilizable que no encaja en los anteriores.

Ejemplo de front matter:

```yaml
---
id: decision-auth-session
kind: decision
status: accepted
tags: [auth, sessions]
updated: 2026-09-10
related: [docs/architecture/auth.md]
---
```

La documentación debe mantener un índice por dominio. Se crea o modifica únicamente cuando la información seguirá siendo útil después de cerrar la tarea.

### Hindsight o motor de memoria semántica

Se usa como índice de recuperación sobre el conocimiento durable y, opcionalmente, sobre notas seleccionadas de sesiones. Su función es sugerir documentos, decisiones o incidentes relevantes a partir de una consulta semántica.

Normas:

- Indexar principalmente Markdown canónico y skills; no todos los transcripts.
- Conservar enlaces al archivo y a la revisión de Git de origen.
- Tratar cada resultado como una pista: confirmar siempre contra el archivo vigente.
- No guardar secretos, tokens, datos personales ni salidas sensibles.

En el MVP puede omitirse. La búsqueda textual (`rg`) y un buen índice de Markdown suelen resolver primero la mayoría de las necesidades.

### Agent Skills

Una skill es una receta operativa versionada: qué comprobar, qué entradas necesita, qué pasos son seguros, cómo validar y qué salida dejar. Deben ser cortas y específicas, no manuales generales.

Ejemplos adecuados:

- añadir una migración de base de datos;
- ejecutar la suite de pruebas relevante;
- revisar cambios de seguridad;
- publicar un paquete;
- investigar una regresión de rendimiento.

Cada skill debe incluir criterios de uso, precondiciones, validación y enlaces a documentación. Si el procedimiento cambia con frecuencia, mantenerlo en la skill en vez de copiarlo a instrucciones globales de cada agente.

### RTK

RTK reduce el ruido de las salidas de shell. Debe ofrecer filtros o envoltorios para comandos frecuentes —tests, builds, linters y Git— que conserven errores, resúmenes y rutas relevantes sin llenar el contexto con logs normales.

La regla es preservar la capacidad de depurar: una salida resumida debe indicar cómo pedir el detalle completo. No ocultar avisos ni fallos importantes.

### Context Mode

Context Mode gestiona resultados grandes, adjuntos y exploraciones extensas. Se utiliza para almacenar o referenciar contenido voluminoso fuera del prompt activo y recuperar solo rangos o resúmenes necesarios.

Ejemplos: resultados de pruebas largas, logs de compilación, documentación de proveedores o análisis de dependencias. Complementa a RTK: RTK reduce el volumen emitido; Context Mode evita retener el resto cuando puede recuperarse bajo demanda.

### concise-agent

`concise-agent` es la política transversal de comunicación. Puede residir en una instruction file compartida y aplicarse a todos los clientes:

- empezar por el resultado o la decisión;
- incluir solo cambios, validación, riesgo y bloqueo relevantes;
- evitar explicar pasos rutinarios o razonamiento interno;
- no repetir requisitos ya presentes en la tarea;
- enlazar a artefactos en lugar de pegarlos;
- ampliar el detalle únicamente si se solicita o si existe un riesgo real.

Formato recomendado de cierre de una tarea:

```text
Resultado: <cambio o conclusión en una frase>
Validación: <prueba/comando o “no ejecutada: motivo”>
Pendiente/bloqueo: <solo si existe>
Contexto: <IDs de Beads y enlaces relevantes>
```

## Flujo de una sesión

### Inicio

1. Elegir o crear una tarea de Beads.
2. Leer el archivo de instrucciones raíz y el índice de conocimiento, no toda la documentación.
3. Cargar los documentos enlazados desde la tarea y las skills aplicables.
4. Consultar búsqueda textual o Hindsight si faltan antecedentes concretos.
5. Declarar o actualizar el ownership de la tarea antes de modificar archivos compartidos.

### Ejecución

1. Inspeccionar solo las áreas necesarias del repositorio.
2. Realizar cambios pequeños y verificables.
3. Usar RTK para pruebas, builds y linters; conservar el detalle recuperable mediante Context Mode cuando sea necesario.
4. Registrar una decisión o un pitfall en OKF solo si será útil de nuevo. No documentar lo obvio ni duplicar comentarios de código.
5. Mantener Beads actualizado si cambian el alcance, las dependencias o el bloqueo.

### Cierre

1. Verificar el cambio en proporción al riesgo.
2. Actualizar la tarea: resultado, estado, enlaces y bloqueos restantes.
3. Añadir o ajustar conocimiento durable solo si corresponde.
4. Dejar un cierre conciso con los archivos, validación y siguiente acción.

## Handoffs entre sesiones o agentes

Un handoff debe permitir que otro agente continúe sin leer el chat anterior. Se basa en referencias, no en copiar el contexto entero.

Plantilla mínima:

```md
## Handoff

- Tarea: `bd-123`
- Estado: en progreso / bloqueada / lista para revisión
- Objetivo inmediato: …
- Hecho: …
- Próximo paso: …
- Archivos o diff relevantes: …
- Validación: …
- Riesgos o bloqueos: …
- Contexto durable: `docs/knowledge/...`, `skills/...`
```

Reglas de handoff:

- El ID de Beads es obligatorio; es la entrada principal del sucesor.
- Incluir enlaces a documentos y paths precisos, no resúmenes de su contenido.
- Adjuntar salida bruta solo cuando resulte imprescindible; de otro modo, guardarla como artefacto recuperable.
- El agente receptor debe validar el estado actual del árbol y de Beads antes de continuar; un handoff puede haber quedado obsoleto.
- Si existen cambios sin commit, declararlo expresamente y señalar el alcance.

## Divulgación progresiva

La ventana de contexto se trata como un recurso escaso. La lectura ocurre por niveles:

1. **Nivel 0 — orientación:** `AGENTS.md`, índice de documentación y descripción de la tarea.
2. **Nivel 1 — relevancia directa:** archivos afectados, dependencias inmediatas, decisiones y skills enlazadas.
3. **Nivel 2 — investigación:** búsqueda textual, Hindsight, historial de Git y documentación del subsistema.
4. **Nivel 3 — evidencia bruta:** logs completos, resultados masivos o transcripciones; solo cuando no haya otra forma de resolver la incertidumbre.

Esto implica que los archivos cargados siempre no deben convertirse en una enciclopedia. El archivo raíz de instrucciones debe ser breve y apuntar a índices especializados.

## Estructura de repositorio recomendada

```text
.
├── AGENTS.md                    # reglas cortas comunes para cualquier agente
├── README.md                    # entrada para personas y arquitectura de alto nivel
├── docs/
│   ├── index.md                 # mapa de conocimiento por dominio
│   ├── architecture/
│   ├── decisions/
│   ├── conventions/
│   ├── pitfalls/
│   └── runbooks/
├── skills/
│   └── <skill>/SKILL.md
├── scripts/
│   ├── test-summary             # envoltorios RTK, si hacen falta
│   └── build-summary
├── .codex/                      # adaptador del cliente; sin duplicar la verdad
├── .claude/                     # adaptador del cliente; sin duplicar la verdad
├── .opencode/                   # adaptador del cliente; sin duplicar la verdad
└── .beads/                      # estado gestionado por Beads, según su configuración
```

`AGENTS.md` contiene normas comunes y enlaces; `CLAUDE.md` y archivos específicos de cliente, si se requieren, deben limitarse a diferencias de integración. No copiar la misma arquitectura, convenciones o runbooks en tres lugares.

## Roadmap

### MVP: convenciones compartidas y cero infraestructura nueva

Objetivo: poder cambiar de agente o sesión sin perder el hilo.

1. Crear un `AGENTS.md` breve y neutral al proveedor.
2. Inicializar Beads y acordar campos/estados mínimos.
3. Crear `docs/index.md` y las carpetas de decisiones, convenciones y pitfalls.
4. Escribir dos o tres skills de alta frecuencia.
5. Añadir la plantilla de handoff y la política `concise-agent`.
6. Identificar comandos ruidosos y crear, solo si hace falta, uno o dos resúmenes RTK.

Criterio de éxito: un agente nuevo puede tomar una tarea abierta, encontrar el contexto correcto y cerrar el trabajo con menos de cinco archivos de orientación inicial.

### V1: consistencia y automatización ligera

Objetivo: reducir errores de coordinación sin introducir una plataforma compleja.

1. Validar formato de front matter e índices de conocimiento en CI.
2. Enlazar tareas de Beads desde PRs/commits y decisiones relevantes desde tareas.
3. Añadir revisiones periódicas de documentación obsoleta y skills duplicadas.
4. Incorporar Context Mode para logs y artefactos grandes.
5. Establecer métricas simples: handoffs bloqueados, documentación duplicada, fallos por contexto ausente y tamaño habitual de instrucciones cargadas.

### V2: memoria semántica y coordinación avanzada

Objetivo: mejorar la recuperación de conocimiento cuando el volumen ya justifique el coste.

1. Indexar el contenido OKF en Hindsight o un motor equivalente.
2. Exponer consultas de memoria desde los flujos de Codex, Claude Code y OpenCode.
3. Añadir automatizaciones para sugerir documentos relacionados, detectar enlaces rotos y proponer consolidaciones.
4. Formalizar políticas de concurrencia para rutas compartidas y trabajos de larga duración.

No avanzar a V2 si la búsqueda textual, índices y enlaces explícitos continúan siendo suficientes. Una memoria semántica mal curada amplifica ruido en lugar de ahorrar contexto.

## Recomendaciones prácticas

- Empezar con una sola convención de tareas y un solo índice de documentación; no construir un servidor de coordinación propio.
- Mantener `AGENTS.md` por debajo de una página cuando sea posible. Su trabajo es orientar y enlazar.
- Preferir documentación próxima al código cuando su alcance sea local; usar `docs/` para reglas transversales y decisiones durables.
- Crear una decisión cuando haya alternativas reales, consecuencias relevantes o necesidad de explicar por qué no se eligió otra opción.
- Convertir instrucciones repetidas tres o más veces en una skill o script. Antes de eso, probablemente sea sobreingeniería.
- Añadir referencias desde Beads hacia docs/skills; evitar que Beads contenga copias largas de conocimiento.
- Definir ownership por tarea o por conjunto de rutas cuando existan varios agentes. Si dos agentes necesitan tocar el mismo archivo, coordinar explícitamente o secuenciar el trabajo.
- Tratar los resultados de Hindsight como sugerencias y verificar siempre la versión vigente en Git.
- Usar los adaptadores `.codex/`, `.claude/` y `.opencode/` para configuración específica, nunca como silos de conocimiento común.
- Revisar cada trimestre (o tras cambios grandes) qué documentación nadie consulta, qué skills no se usan y qué instrucciones globales han crecido demasiado.

## Antipatrones a evitar

- Un prompt maestro enorme que se carga en todas las sesiones.
- Transcribir conversaciones completas como mecanismo de handoff.
- Usar la memoria semántica como verdad sobre decisiones vigentes.
- Duplicar reglas entre `AGENTS.md`, `CLAUDE.md`, configuraciones de Codex y OpenCode.
- Documentar cada cambio menor, hasta convertir la búsqueda en ruido.
- Crear servicios, bases de datos o MCPs propios antes de validar el MVP basado en archivos.
- Ocultar por completo los logs: el detalle debe ser recuperable cuando la depuración lo requiera.

## Decisiones iniciales propuestas

1. Git, Beads y OKF/Markdown son los tres sistemas obligatorios desde el comienzo.
2. Hindsight es opcional hasta que se demuestre que índice + búsqueda textual no bastan.
3. Toda documentación duradera se versiona con el repositorio y posee un propietario o área responsable.
4. El conocimiento común es neutral al proveedor; las configuraciones por agente son adaptadores finos.
5. Los handoffs se cierran sobre Beads y referencias a artefactos, no sobre conversaciones.
6. La concisión y la divulgación progresiva son requisitos de calidad del harness, no preferencias cosméticas.

Con estas decisiones, el harness empieza siendo comprensible y operativo. Puede crecer hacia memoria semántica y automatización solo cuando el trabajo real muestre dónde está la fricción.
