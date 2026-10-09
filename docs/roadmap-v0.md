# Roadmap del v0 (T800R + piloto IDP)

- Estado: **aprobado** por la persona el 2026-10-06 (v2.1). Paso 5 de
  [S12](definition/session-12-validation-convergence.md).
- **Enmienda v2.2 (2026-10-09):** la persona aprobó el
  [cierre de la revisión transversal](revision-transversal-cierre.md) y sus
  enmiendas P08, P10, P14, P20 y P27. En este documento cambian sólo las tareas
  0.7 (remediación en las reglas propias de lint, comprobación de enlaces
  internos como validación declarada) y 0.8 (`metrics.md` con la línea de
  capacidad ausente, primera eval de las skills con declaración de cobertura,
  regla de validaciones no deterministas y decisión pendiente P12). El resto
  de las enmiendas vive en [workflow-construccion.md](workflow-construccion.md)
  v4.2. Fases, dependencias y camino crítico no cambian.
- Creado: 2026-10-05. v2 y v2.1 integran la verificación en pareja de la v1 (Fable:
  «SÍ con cambios»; Astra `gpt-6-astra`: «NO» por orden de migraciones y
  bootstrap; ronda 2: «NO» por persistencia prebootstrap y métrica global, resueltos en v2.1) y la revisión Codex de `skills/` del mismo día.
- Alcance: el «Perfil MVP mínimo» de S12 (lista en
  [backlog-ideas.md](backlog-ideas.md#qué-sí-queda-en-el-mvp-v0)), las tres
  tareas de migración del bootstrap
  ([workflow-construccion.md](workflow-construccion.md) §10) y las tres mejoras
  no bloqueantes de la ronda 4 de Astra (§11).
- No autoriza construir: eso es el paso 6 de S12.

## Criterios de orden

1. **Dependencia**: nada se construye sobre un contrato que no exista; cada
   fase lista los schemas que consume.
2. **Riesgo primero**: lo que puede invalidar el v0 (superficies headless de
   S11, operación condicional de Beads, defectos de las skills) se sondea o
   corrige antes de construir encima.
3. **Medir antes de automatizar** (mejora 1 de Astra): ninguna migración cambia
   la autoridad operativa antes de medir el coste manual de al menos una feature
   completa.
4. **Orden de migración fijado** (§10): ledger con `actor_id` → aprobación
   `local` → Beads. Se puede desarrollar en paralelo; **el cambio de autoridad**
   sigue ese orden sin excepción.
5. **Bootstrap según S12**: antes de una política aplicada, T800R sólo
   inspecciona, propone y ejecuta `doctor`. La primera autoridad nace al aplicar
   la primera propuesta de `init` fuera de una sesión de agente. Antes de ese
   acto sólo se persisten propuestas, que no conceden autoridad ni habilitan
   efectos.
6. Cada fase cierra con un experimento de S12 (E1-E5) o una parte medible de él.
7. Cada migración incluye actualizar las skills que leen el dato migrado; es un
   cambio `high` y las skills no aprueban su propia activación (§5).

## Dos carriles

- **Carril IDP (piloto).** Incrementos reales con alcance reservado por fase,
  para que haya trabajo del IDP bajo el procedimiento manual (medición, E2
  manual) y bajo el orchestrator (E2-E4).
- **Carril T800R (producto).** Construye el harness con el mismo flujo
  (dogfooding). Cada fase sustituye una parte del procedimiento manual.

| Incremento IDP | Fase | Cómo se construye | Uso como evidencia |
| --- | --- | --- | --- |
| I1. Catálogo mínimo (entidades propias, carga local) | F0 | Skills + procedimiento manual | Primera eval de las skills; medición 1.1 |
| I2. Catálogo ampliado (3+ tareas) | F1 | Skills + procedimiento manual | E2 manual y mejora 2 de Astra (1.7) |
| I3. TechDocs (generación y visualización local) | F4 | Bajo el orchestrator | E2, E4 |
| I4. Cambios concurrentes en `app-config.yaml` | F4 | Bajo el orchestrator | E3 |
| I5. Ampliaciones de catálogo y TechDocs (búsqueda, plantillas de entidades, documentación propia) | F4-F5 | Bajo el orchestrator | Métrica global |

La métrica global de S12 se evalúa sobre **el piloto completo (I1-I5)**: se
cumple «mayoritariamente por agentes bajo T800R» cuando **al menos el 75 %
de las tareas integradas del IDP** se ejecutaron bajo el orchestrator
(umbral fijado por la persona el 2026-10-05). Una tarea es cada tarea de un
`plan.md` que llega a `main`; cuenta como «bajo T800R» si la asignó el
orchestrator, la ejecutó un agente vía adapter y su evidencia está en el
ledger. No cuentan la línea base de `@backstage/create-app` ni las ediciones
humanas fuera de una tarea (se listan aparte); los gates humanos no restan.
Para alcanzar el umbral, I1-I2 se mantienen pequeños a propósito e I5 reserva
trabajo real suficiente. El informe de cierre distingue trabajo manual, con
skills y bajo T800R, y añade como dato las líneas cambiadas por modo.

## Fases

### Prerrequisito de la autorización: corrección de skills

Decidido por la persona el 2026-10-05 y **cumplido el 2026-10-06** (flujo
v4.1, ratificado en S12): las skills y el flujo v4 se corrigen **antes** del paso 6, dentro de la fase de definición (son Markdown), para
autorizar sobre skills sanas.

- Corregir skills y flujo v4 con los hallazgos altos y medios de la revisión
  Codex del 2026-10-05: circularidad SHA/evidencia y handoff, coordinación
  entre ramas y worktrees, digests de spec y plan, `prohibited` antes de
  `high`, rutas protegidas como precondición, `git add` explícito, informe del
  spike persistente, identidad de actor estable, rutas relativas tras proyectar.
  Salida: verificación en pareja Fable + Astra con veredicto SÍ.

### F0. Arranque y sondas

Depende de: autorización (paso 6).

| # | Tarea | Carril | Salida verificable |
| --- | --- | --- | --- |
| 0.1 | Rama huérfana `control` en T800R; `policy.yaml` provisional escrito a mano con la lista de §4.3 (procedimiento humano, sin enforcement) | T800R | Rama y plantilla `approvals/<id>.md`; política provisional versionada |
| 0.2 | Crear el repo IDP con `@backstage/create-app` en versión fijada; comprobar la versión de Node que soporta y registrarla si difiere de Node 24 | IDP | Commit de línea base referenciado desde S12 |
| 0.3 | En el IDP: rama `control` y `policy.yaml` provisional | IDP | Igual que 0.1 |
| 0.4 | Proyectar `skills/` a `.claude/skills/`, `.opencode/` y Codex en ambos repos (copia manual con SHA de origen registrado hasta que exista `sync`) | ambos | Cada proveedor activa `/feature-spec` y `/spike` y resuelve sus referencias |
| 0.5 | **Sonda de superficies headless (spike aprobado en `control:approvals/spikes.md`)**: un turno por proveedor sobre su superficie S11 (Claude Code `--restricted -p --tools ""`, Codex app-server por stdio, OpenCode server en loopback) con configuración cerrada; demostrar catálogo de tools vacío, sin MCP/hooks/skills heredados, cancelación terminal; una operación permitida y otra denegada; versión exacta, entorno y tokens si se exponen | T800R | `spikes/0.5.md`; decisión de la persona sobre proveedores no elegibles antes de F4 |
| 0.6 | **Sonda de Beads (spike aprobado)**: ¿admite una transición condicional atómica contra base, owner y estado (S11)? | T800R | `spikes/0.6.md`; decisión de la persona antes de F3 |
| 0.7 | Primera feature de T800R con las skills: esqueleto del monorepo (Node 24 con patch fijado, TypeScript estricto, pnpm, JSON Schema 2020-12 con validador, comprobación de fronteras con ESLint + dependency-cruiser). **v2.2:** toda regla propia de lint o de fronteras lleva en su mensaje de error la remediación (cierre P14); se añade una comprobación de enlaces internos de `docs/` y `skills/` como validación declarada del repositorio (cierre P20) | T800R | `pnpm test`, comprobación de fronteras y comprobación de enlaces en verde; una regla propia violada a propósito muestra su remediación |
| 0.8 | Incremento IDP I1 con `/feature-spec` → `/feature-integrate`; validaciones del día 1: tipos, lint, build, arranque y aceptación reproducible del catálogo. **v2.2:** es la primera eval de las skills: cualquier cambio `high` a `skills/` o `policy.yaml` durante I1 declara qué experimento o métrica lo cubre (workflow §7, cierre P08); si aparece una validación no determinista se aplica la regla del workflow §4.3-4.4 (cierre P10); al cerrar I1 la persona **decide P12** (salida íntegra de las validaciones en `evidence/<task>.out/` referenciada por hash, o dejarla al CAS del backlog) | IDP | Feature integrada; `features/<id>/metrics.md` con las métricas del workflow §8 (incluida la línea «capacidad ausente detectada → destino», cierre P27) más tiempo de registros y gates por separado; decisión P12 registrada en S12 |

### F1. Contratos, bootstrap y ledger (migración 1)

Depende de: 0.7. 1.1-1.3 pueden solaparse con 0.8.

| # | Tarea | Salida verificable |
| --- | --- | --- |
| 1.1 | **Medición del coste manual** (mejora 1) con I1 completo | Tabla de tiempos por registro y gate; ordena qué automatizar primero |
| 1.2 | Schemas v1 alineados con el catálogo de S11: `work-item`, `evidence-event` (incluye participaciones), `handoff/v1`, `approval/v1` (los cuatro gates: spec, build, merge del par, `high`; digest de la solicitud canónica con la canonicalización JSON de S11, separado de las referencias Git a los artefactos aprobados), `policy` simple, `proposal`, `config` | Corpus válido e inválido por schema |
| 1.3 | `core`: transiciones de tarea, owner único, predicado de elegibilidad del verifier por `actor_id` (S12, REV-105) | Pruebas puras |
| 1.4 | **Bootstrap mínimo**: `t800r init` persiste una propuesta con la política provisional (persistencia preparatoria, sin autoridad); `t800r apply <proposal-id>` la aplica la persona fuera de una sesión de agente, registra al aprobador inicial y el evento `bootstrap` único por adopción; schemas que añade: `operation-result` y `diagnostic` (S08 l. 66, S11 l. 115) | Pruebas: persistir una propuesta no habilita efectos; todo efecto antes del bootstrap se rechaza; origen humano comprobado; un segundo bootstrap se rechaza |
| 1.5 | Ledger SQLite append-only | Prueba que rechaza modificar o borrar eventos |
| 1.6 | **Migración 1** (tras 1.1 y 1.4): importar y cotejar el historial completo de `participations.md` de ambos repos; `actor_id` estable entre ejecuciones; comprobación del verifier al aceptar `verification_request` y antes de persistir el veredicto, con owners y workers antiguos; historial incompleto → no elegible; actualizar skills (cambio `high`) | Cotejo sin diferencias; `participations.md` pasa a vista generada |
| 1.7 | **E2 manual y mejora 2**: tras las 3+ tareas de I2, `/session-handoff` → `/session-resume` en otro proveedor | El receptor reconstruye estado, ownership, participaciones y evidencia sin explicación humana y sin rehacer tareas |

### F2. Política y aprobación `local` (migración 2)

Depende de: F1.

| # | Tarea | Salida verificable |
| --- | --- | --- |
| 2.1 | `policy`: `protected_paths` y niveles `routine` / `high` / `prohibited`; `prohibited` se evalúa primero y ninguna aprobación lo vuelve ejecutable | Pruebas de evaluación |
| 2.2 | `t800r approve <id>`: aprobación `local` con origen registrado; rechazo desde sesión de agente; revalidación de digest justo antes del efecto | Pruebas con y sin marcadores de sesión |
| 2.3 | Hook `pre-push` (ruta protegida) que bloquea push a `main` sin aprobación `local` y registra el evento; solicitudes simuladas de push y de acción `prohibited` contra `policy` | **E5 parcial**; gate de seguridad previo a habilitar trabajo real mediante adapters en F4 |
| 2.4 | **Migración 2 + mejora 3**: importar las aprobaciones históricas de `control` al ledger conservando aprobación original, algoritmo de digest, contenido referenciado y procedencia, sin presumir equivalencia con el digest canónico; `control` queda como archivo de solo lectura; actualizar skills (`high`) | Cada aprobación histórica tiene evento importado trazable a su commit en `control`; procedimiento escrito |

### F3. Work tracker con Beads (migración 3)

Depende de: F1 y la decisión de 0.6. 3.1-3.2 pueden empezar tras F1; 3.1
enlaza aprobaciones sólo cuando existe 2.2; **3.3 sólo tras 2.4**.

| # | Tarea | Salida verificable |
| --- | --- | --- |
| 3.1 | Adapter de Beads: crear, asignar, transferir y cerrar; operación condicional probada, no inferida (S11); enlazar aprobaciones sin duplicarlas | Pruebas contract-first contra Beads local |
| 3.2 | `handoff/v1` autoritativo en el tracker; aceptación condicional por SHA base, candidato y estado | Rechazo de handoff con base distinta; E2 repetido con Beads |
| 3.3 | **Migración 3**: `tasks.md` a Beads; `tasks.md` pasa a vista; actualizar skills (`high`) | Features en curso continúan sin rehacer tareas |

### F4. Orchestrator y adapters headless

Depende de: F1-F3 y de la decisión de 0.5. Schemas que añade: `context-packet`;
`adapter-descriptor`, `capability-snapshot` y `agent-turn` en 4.2;
`mediated-operation` en 4.3 (S08 l. 66, S11 l. 115; nota editorial de la
especificación v0 §7).

| # | Tarea | Salida verificable |
| --- | --- | --- |
| 4.1 | Orchestrator determinista con roles `planner`, `worker`, `verifier`; máximo dos workers con archivos disjuntos | Pruebas de asignación y de detección de colisión |
| 4.2 | Adapters headless sobre las superficies de S11 validadas en 0.5; sólo se habilitan para trabajo real tras 2.3 | Cada adapter elegible completa una tarea de prueba |
| 4.3 | Validaciones declaradas en el host sobre worktree separado (no es aislamiento), con allowlist; revisión del verifier antes de ejecutar sobre rutas protegidas modificadas; entorno sin secretos | Comando no declarado rechazado; ruta protegida modificada no se ejecuta sin revisión |
| 4.4 | Context packets con progressive disclosure | El worker recibe sólo lo referenciado en el brief |
| 4.5 | **E5 completo**: el agente pide, vía adapter, un push a `main` y una acción `prohibited` | Push bloqueado hasta aprobación `local`; `prohibited` rechazada por `policy` antes del efecto; ambos eventos registrados |
| 4.6 | I3 e I4 del IDP bajo el orchestrator: **E2** (continuidad), **E3** (coordinación sobre `app-config.yaml`) y **E4** (portabilidad, rotando proveedores elegibles) | Resultados en S12 con la regla de decisión de E3/E4 |

### F5. Adopción y conocimiento

Depende de: F2-F4. Schemas que añade: `lock`, `adoption-snapshot`,
`managed-unit`, `portable-skill`, `knowledge-bundle`, `knowledge-entry`.

| # | Tarea | Salida verificable |
| --- | --- | --- |
| 5.1 | Experiencia completa de adopción sobre el mismo caso de uso de bootstrap de 1.4: `init` propone, `apply` aplica, `doctor` básico, `sync` y `update` simples; instala skills y hook `pre-push` por propuesta | `sync` y `update` producen una propuesta sin aplicarla; tras `apply` el resultado coincide con lo propuesto; ante contenido inesperado en una unidad gestionada se preserva o se bloquea, sin sobrescribir; `doctor` en verde |
| 5.2 | Bundles OKF con curator básico | Una nota con fuente y verificación se admite y se consume en un context packet; una nota sin fuente o sin verificación se rechaza |
| 5.3 | **E1**: IDP sobre un checkout limpio de la línea base con estado de usuario de T800R aislado y ausencia comprobada de adopción previa (adopción nueva, sin tocar el estado del piloto real) y T800R sobre su historial | ≤ 30 min de trabajo humano por repo, sin editar archivos generados |
| 5.4 | Cierre del v0: E1, E2 y E5 superados; E3/E4 con éxito total o parcial documentado; métrica global de S12 | Informe de cierre en S12 |

## Camino crítico y riesgos

- Camino crítico: corrección de skills → autorización → 0.7 → F1 → {F2 ∥ F3.1-3.2} → 3.3 → F4 → F5.
- **Skills**: la revisión Codex encontró ocho defectos altos; se corrigen antes
  de autorizar porque usarlas así invalidaría la medición y E2.
- **Superficies headless (0.5)**: si un proveedor no es elegible, E4 admite éxito
  parcial; se decide en 0.5, no en F4.
- **Beads (0.6)**: sin operación condicional no es elegible para transferencias
  de escritura (S11); la persona decide antes de F3.
- **Coste manual (1.1)**: si es alto, adelanta F2 completa o el bloque 3.1+3.3,
  respetando el orden de migración.

## Fuera del v0

Dirección posterior (2026-10-05): la persona quiere acercarse a una factory
donde intervenga sólo en dos momentos por feature, definición (spec y dudas) y
verificación contra producto, con la revisión de código a cargo de agentes.
Durante el v0 se mantienen los tres gates de v4 y S04 mientras se afina el
flujo; retirar la autorización humana de `build` requiere enmendar S04.

Los ítems de «Ítems diferidos por área» y las anotaciones diferidas de
[backlog-ideas.md](backlog-ideas.md): DSL de política, matriz de riesgo, runner
OCI, CAS, cadena criptográfica, perfil `signed`, tuplas distintas de macOS
arm64, Hindsight/RTK/Context Mode, plugins de terceros, etc.
