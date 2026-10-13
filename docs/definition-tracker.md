# Seguimiento de la definición de T800R

## Estado actual

- Fase: **construcción del v0 autorizada** (2026-10-13); definición cerrada.
- Avance: 12 de 12 sesiones completadas.
- Sesión actual: ninguna de definición; construcción por el
  [roadmap v0](roadmap-v0.md), empezando por F0.
- Última actualización: 2026-10-13.
- Coordinador declarado: `openai/gpt-5.6-sol`.
- Documento rector: [product-definition.md](product-definition.md); unidades
  canónicas por sesión: [definition/README.md](definition/README.md).

## Próxima acción

**Estado al 2026-10-13.** S12 cerrada con la construcción del v0 autorizada
explícitamente por la persona ([cierre](definition/session-12-validation-convergence.md#s12-cierre)).
Artefactos que gobiernan la construcción: [roadmap-v0.md](roadmap-v0.md) v2.2,
[especificacion-v0.md](especificacion-v0.md),
[workflow-construccion.md](workflow-construccion.md) v4.2, `skills/` y
[backlog-ideas.md](backlog-ideas.md). La persona pidió arrancar en una sesión
nueva.

**Siguiente sesión: F0 del roadmap, en orden.**

1. 0.1: **en curso (2026-10-13).** `policy.yaml` provisional en la raíz,
   verificado por Astra (`gpt-6-astra`, «SÍ con cambios», aplicados). Node
   fijado en 24.21.0 con nvm (`.nvmrc`); la persona reafirmó Node 24 frente a
   26 (Backstage recomienda 22/24; 26 entra en LTS el 2026-10-28). Falta la
   rama huérfana `control`, que crea la persona fuera de una sesión de agente
   (workflow §2.1 punto 9) con `approvals/.keep` y un `README.md` con la
   plantilla de líneas de §6. Dev containers para el IDP: sin decidir; si se
   adoptan, como `acotado` de entorno reproducible en I1, nunca como runner, y
   `.devcontainer/**` entra en `protected_paths`.
2. 0.2 y 0.3: repo del IDP con `@backstage/create-app` en versión fijada (fijar
   nombre y versión; comprobar la versión de Node que soporta), línea base
   referenciada desde S12, y su rama `control` y `policy.yaml`.
3. 0.4: proyectar el paquete de skills (workflow §5) a Claude Code, OpenCode y
   Codex en ambos repos y comprobar que cada proveedor activa `/feature-spec` y
   `/spike` y resuelve sus referencias.
4. 0.5 y 0.6: sondas de superficies headless y de Beads, cada una con su línea
   `spike <id> approved` en `control:approvals/spikes.md`, que escribe la
   persona.
5. 0.7 (esqueleto del monorepo de T800R) y 0.8 (I1 del IDP), las dos con
   `/feature-spec`. Al cerrar 0.8, la persona decide P12.

Método acordado: un resumen sencillo antes de cada pregunta de decisión; pareja
Fable + Astra para diseñar y verificar; Codex vía codex-companion con
`gpt-6-astra` `medium` y respaldo `gpt-5.6-sol` `xhigh`.

Historial: el 2026-09-29 se resolvió `REV-2026-110` (perfil de aprobación `local`;
SSHSIG/FIDO pasa a perfil `signed`; enmiendas en S11 l. 133-137 y ADR-010 punto
14). El 2026-09-30 se resolvió `REV-2026-105` (predicado de elegibilidad del
verifier), se decidió el perfil MVP mínimo (109 REV `deferred` a
[backlog-ideas.md](backlog-ideas.md)), el piloto, el flujo v4 y E1-E5. El
2026-10-05 se aceptaron las ocho skills. El 2026-10-06 se ratificó el flujo v4.1
y se aprobó el roadmap v0; el 2026-10-09, la especificación v0 y el cierre de
la revisión transversal; el 2026-10-13 se cerró S12 y se autorizó construir.

## Registro de cierre de la sesión 11

Docker Engine/Desktop será el primer adapter OCI; Podman queda diferido. SQLite se distribuirá mediante paquetes precompilados por tupla publicados por
T800R, sin scripts ni compilación en el consumidor. `apply` ejecutará sólo `proposal/v1`; handoffs, approvals, tasks y operaciones
mediadas usarán sus propios lifecycles explícitos con los mismos gates. El artifact store usará CAS SHA-256 en filesystem con publicación atómica,
permisos restrictivos, metadata SQLite y GC recuperable. Las superficies de proveedor actuarán sólo como inferencia sin herramientas: Claude
headless restringido, Codex app-server y OpenCode server local. T800R mediará
solicitudes tipadas y ejecutará validaciones declaradas en un runner OCI sin
credenciales ni red por defecto. Los efectos `high` requerirán SSHSIG con clave
FIDO y presencia física verificable; sin esa realización quedan bloqueados. La CLI operativa
se agrupará en `work`, `handoff`, `approval` y `evidence`, sin comandos por proveedor
ni bypasses. `update` sólo propondrá conjuntos exactos de
manifiestos curados con evidencia; no resolverá rangos independientes ni una versión
global. Instrucciones y skills serán proyecciones compiladas, mínimas y
reconciliables desde fuentes registradas; no copias autoritativas ni symlinks
universales. Para proyectos nuevos,
`t800r/policy.yaml` y `t800r/sources.yaml` serán declaraciones versionadas
referenciadas desde el entrypoint; otras rutas siguen configurables. Cada context packet será un artefacto JSON local
content-addressed con metadata, estado y retención en el ledger; proveedores reciben
sólo proyecciones identificadas. El runtime publicará una API TypeScript de casos de uso; la CLI es
frontend y el daemon/JSON-RPC queda diferido. La observabilidad será local, estructurada y derivada; evidencia, diagnósticos,
logs y artefactos conservan responsabilidades separadas, sin telemetría remota por
defecto. El grafo de dependencias será
unidireccional hacia contracts; application coordina efectos, CLI compone y los
adapters no importan runtime interno ni se llaman entre sí. La reconciliación usará estrategias tipadas por formato y clase;
`referenced` y `local` no se mezclan y cualquier incertidumbre conserva contenido y
genera conflicto. Las migraciones serán forward-only,
numeradas, verificables y con recuperación explícita; no habrá reset ni `down`
universal. La concurrencia usará leases acotados con fencing y CAS,
acumulativos con ownership; sólo cambios globales tomarán exclusión de adopción.
La política usará una DSL YAML tipada, cerrada y sin código;
acumulará requisitos, hará prevalecer prohibiciones y aplicará `default deny` con
traza causal. El MVP sólo admitirá auth de control plane del proveedor cuando el adapter demuestre
no exposición; el entorno será allowlisted y la inyección general de secretos queda
ausente, sin fallback a variables. SSHSIG/OpenSSH será el primer adapter de firma, sin
fallback TTY y sin acceso del runtime a claves privadas. Las aprobaciones serán decisiones canónicas firmadas fuera
de la frontera del agente y revalidadas antes de cada efecto; TTY y prompts de
proveedor no serán autoridad. El MVP se publicará como paquetes
npm con provenance, versiones independientes y una meta-distribución con manifiesto
exacto; `npm exec` será el bootstrap y los binarios quedan diferidos. Core y CLI soportarán macOS, Linux y Windows;
cada adapter se certificará por revisión, versión de proveedor y OS/arquitectura,
sin extrapolar conformidad. Las pruebas seguirán una estrategia contract-first por
capas, con suites reutilizables, integraciones reales, replay y E2E con fallos;
S12 fijará corpus, métricas y umbrales. El toolchain usará Node 24 LTS, ESM, pnpm, TypeScript/tsc, Ajv,
`yaml`, Commander, `better-sqlite3`, Vitest y checks automáticos de límites, sin
ORM, DI ni framework de monorepo. El catálogo usará un schema top-level por contrato y
definiciones compartidas, sin envelopes universales ni forks por adapter.
`t800r.yaml` y `t800r.lock.json` serán el entry point y lock generado
versionados; ledger y artefactos vivirán en el directorio de estado de usuario por
`project_id`, compartido entre worktrees. Los bundles de conocimiento tendrán roots
configurables; `init` propondrá `knowledge/` sólo para bundles nuevos y confirmados.
Los handoffs autoritativos vivirán en el work tracker; el
adapter deberá vincular sus transiciones de ownership condicionalmente y el ledger
sólo conservará evidencia correlacionada. El orchestrator combinará runtime determinista como control plane
y un rol `planner` cuyas salidas son candidatas sin autoridad directa. La CLI usará propuesta persistente
y `apply <proposal-id>` para ejecutar exclusivamente `proposal/v1`; no fusionará propuesta y
aplicación mediante flags. Los adapters de Codex, Claude Code y OpenCode ejecutarán
CLIs no interactivas con eventos estructurados, versiones verificadas y captura
íntegra, sin una API operacional idéntica. El MVP usará búsqueda textual, captura bruta
content-addressed con consulta bajo demanda y worktrees limitados al workspace;
Hindsight, RTK, Context Mode y sandbox completo quedan diferidos. Beads será el primer
adapter oficial del puerto de work tracking, sin dependencia semántica del core ni
fallback que duplique autoridad. Los adapters oficiales se compondrán explícitamente
en la distribución; los plugins terceros quedan diferidos y el descubrimiento
dinámico, rechazado. El monorepo multipaquete separará contratos, API de adapters, runtime, CLI y cada
adapter oficial; una distribución recomendada fijará un conjunto compatible
exacto. YAML 1.2 restringido servirá para autoría
declarativa, Markdown con front matter para OKF y Agent Skills, y JSON
canonicalizable para intercambio, snapshots y evidencia exportada. SQLite embebido quedó aceptado para el ledger
operacional, con registros inmutables, eventos append-only encadenados y un puerto
para controles de evidencia más fuertes cuando la política los exija. Los
contratos estructurados ya
quedaron cerrados en su núcleo, con extensiones namespaced registradas, versión
contractual y revisión exacta. JSON Schema 2020-12 es la autoridad estructural
portable y TypeScript deriva sus tipos y validadores. TypeScript estricto sobre
Node 24 LTS quedó aceptado como base del MVP. La persistencia lógica ya quedó separada por autoridad:
artefactos versionados del proyecto, estado del work tracker, ledger operacional
durable y derivados reconstruibles. `core`, `application`, `policy`, `evidence` y
`adoption` son fronteras explícitas; la CLI es transporte y los puertos pertenecen
al módulo consumidor, con adapters sin autoridad. S11 concretó representación
física, schemas, empaquetado, extensibilidad y estrategia de pruebas, y difirió las
realizaciones no necesarias. El cierre
está en [S11](definition/session-11-mvp-architecture.md#s11-cierre) y la decisión
transversal en [ADR-010](adr/ADR-010-arquitectura-tecnica-del-mvp.md).
La distribución operativa probada queda documentada en
[proposal-efficient-workflow.md](proposal-efficient-workflow.md). No hay métricas
disponibles de tokens, caché, coste o cuota; no se atribuye ahorro. Astra se invocó
con aprobación para resolver la frontera de credenciales; su recomendación de
inferencia sin tools y operaciones mediadas quedó incorporada en S11.

Mantenimiento documental 2026-09-21: los acuerdos de las sesiones 1 a 7 se
organizaron en unidades canónicas bajo `docs/definition/`; el índice rector y
los enlaces de compatibilidad permanecen en `product-definition.md`. Este cambio
no inicia la sesión 8 ni altera sus condiciones de inicio.
Quedaron preparados la [guía y plantilla de anotaciones](reviews/README.md) y el
[editor adversarial](adversarial-editor.md) para OpenCode y Claude Code, recomendado
con Astra o Fable. Su alcance es todo lo decidido, mediante 45 bloques y siete
cruces. El [tracker independiente de revisión](reviews/review-tracker.md) conserva
avance y discusión humana por separado. Para retomarlo se carga sólo el siguiente
bloque y su checkpoint; sus propuestas se discuten antes de modificar acuerdos.

Cierre histórico del mantenimiento: la revisión adversarial se ejecuta en otra
terminal con su propio tracker. No es requisito esperar su finalización para
continuar decisiones. Los
hallazgos se discutirán por bloque; si un acuerdo cambia durante la revisión, el
revisor debe conservar la base examinada y marcar lo afectado para revalidación.
La persona informó que está lanzando el agente revisor en otra terminal. Su
progreso efectivo se consulta en `docs/reviews/review-tracker.md`; no se presume
ningún bloque revisado. La indicación original de retomar la sesión 8 quedó
superada por los cierres posteriores; la próxima sesión es la 12.

## Estado mínimo para retomar

- Leer `AGENTS.md`, este tracker, [índice rector](product-definition.md),
  [S11](definition/session-11-mvp-architecture.md#s11-cierre),
  [ADR-010](adr/ADR-010-arquitectura-tecnica-del-mvp.md) y los contratos
  anteriores que requiera cada experimento.
- Mantener la sesión 11 como `completed` y continuar la sesión 12 como
  `in_progress`. No implementar producto durante la fase de definición.
- La experiencia común se expresa como operaciones independientes del transporte;
  la CLI es la interfaz humana de referencia. `init` propone sin cambios por
  defecto y toda aplicación sigue inspección, propuesta, aplicación y verificación.
- La configuración es declarada y confirmada. Los artefactos o secciones son
  `managed`, `generated`, `referenced` o `local`, con origen y base explícitos; no
  existe sobrescritura ni precedencia implícita.
- `doctor` diagnostica por capas y elegibilidad de operación. `sync` reconcilia
  revisiones fijadas mediante tres vías; `update` cambia revisiones sólo tras
  compatibilidad, migración, autorización y verificación.
- Cada adopción conserva un snapshot exacto y compatible. Las migraciones declaran
  recuperación sin prometer reversión universal; el retiro es selectivo y preserva
  fuentes canónicas, personalizaciones y evidencia residual.
- Las colisiones requieren resolución explícita y los gates de seguridad explican
  riesgo y controles por efecto sin exponer secretos.
- El baseline de seguridad separa núcleo, política y adapter. Los permisos
  efectivos se obtienen por intersección explícita con mínimo privilegio y
  `default deny`; capacidad, credencial, rol u ownership no autorizan por sí solos.
- Los secretos usan referencias opacas e inyección controlada fuera del contexto
  del modelo. Los recursos protegidos se evalúan por destino, acción y efecto
  reales, y las aprobaciones son persistentes, acotadas y revalidables.
- El riesgo usa `routine`, `elevated`, `high` y `prohibited`, con controles
  acumulativos. `high` exige verifier independiente y aprobación humana antes del
  efecto protegido o integración; `prohibited` requiere cambiar la política.
- El aislamiento se exige por propiedades cuando la mediación no contiene todos
  los efectos. La auditoría usa eventos minimizados y resistentes a alteración; los
  fallos aplican `fail closed` por alcance y reconciliación antes de reintentar.
- La política es canónica, versionada y delegable; los agentes pueden proponerla o
  endurecer temporalmente la contención, pero no autoelevar permisos ni relajarla.
- La frontera portable usa un contrato de capacidades semánticas: el núcleo fija
  invariantes y resultados; los adapters traducen, emulan o declaran ausencia sin
  inventar garantías.
- El baseline obligatorio cubre contratos, identidad, reconciliación, contexto,
  acciones, continuidad y evidencia. Los perfiles opcionales son `delegation`,
  `isolated_execution`, `portable_skills` y `semantic_retrieval`.
- Cada adapter tiene descriptor versionado y cada ejecución un snapshot efectivo.
  Realización (`native`, `emulated`, `absent`) y verificación (`verified`,
  `unverified`, `stale`) permanecen separadas.
- Los requisitos son `required`, `relevant` u `optional`. Ante un faltante
  obligatorio se reconcilia, reasigna, descompone si preserva contratos y, si no,
  se consulta o bloquea; nunca se rebaja el requisito.
- `actor_id` persiste, `execution_id` identifica una ejecución y los IDs de
  proveedor son aliases acotados y verificables. Conocimiento usa `knowledge_id`
  estable e identidad OKF por bundle y ruta lógica, con referencias `exact` o
  `current`.
- Los artefactos T800R son canónicos; las vistas de proveedor son proyecciones y
  sus resultados sólo se aplican tras validación y reconciliación.
- Codex, Claude Code y OpenCode permanecen `target`. `compatible` exige pruebas
  estructurales, conductuales, de integración y resiliencia en la sesión 12.
- Worktrees limitados al workspace forman parte del MVP. Hindsight, RTK y Context
  Mode quedan diferidos hasta medir en S12 su valor frente al baseline propio.
- Perfil aceptado: T800R adopta un perfil lógico compatible con OKF v0.2, fijado al
  commit investigado, y añade reglas propias de autoridad, aplicabilidad, revisión
  y vigencia. La compatibilidad no impone aún representación física ni convierte
  `stable` o `verified` en autoridad del proyecto.
- Taxonomía aceptada: núcleo pequeño de tipos semánticos extensible por proyecto;
  los tipos adicionales preservan el perfil común y no obtienen autoridad por su
  nombre. El núcleo contiene `concept`, `pattern`, `lesson` y `synthesis`, con
  límites explícitos frente a acuerdos, evidencia, tracker, memoria y skills.
- La promoción desde memoria usa curación proporcional: una candidata puede ser
  `draft`, pero sólo es reutilizable tras comprobar fuentes, evidencia y
  aplicabilidad. Requiere revisión humana si cambia acuerdos o excede la autonomía.
- La ubicación lógica usa bundles con owner y ámbito de proyecto, organización o
  T800R. Pueden referenciarse sin copiar autoridad; rutas y almacenamiento siguen
  diferidos.
- Los metadatos tendrán una capa común obligatoria y otra específica por tipo.
- Campos comunes aceptados: `type`, `title`, `sources`, `status`, `applicability`,
  `revision` y `review`, más un `curator` efectivo por herencia o delegación; los
  metadatos generativos, de verificación, caducidad, relaciones y aliases son
  condicionales.
- Requisitos por tipo aceptados: dominio y definición para `concept`; problema,
  solución y tradeoffs para `pattern`; evidencia, observación e interpretación
  para `lesson`; asunto, dos o más fuentes y discrepancias para `synthesis`.
- Cada bundle tiene un curator responsable; puede delegar entradas o revisiones
  con trazabilidad. El owner gobierna el ámbito y el curator mantiene el
  conocimiento sin autoridad para cambiar acuerdos.
- La vigencia se revisa por cambios de fuentes, evidencia o aplicabilidad y según
  riesgo. No hay TTL universal: `check_after` agenda revisión y `stale_after` sólo
  aplica cuando existe caducidad temporal justificada.
- Lifecycle y frescura están separados: `draft`, `stable`, `deprecated` expresan
  estado editorial; `current`, `review_due`, `stale` expresan vigencia derivada.
  No se depende de una entrada `stale` sin revisar lo afectado.
- Las transiciones son `draft → stable` tras curación, `stable → deprecated` con
  razón y `deprecated → draft` para reactivación. Cambios semánticos vuelven la
  nueva revisión a `draft`; correcciones mecánicas auditadas pueden conservar
  `stable`.
- Cada bundle tiene un índice raíz compacto y portable. Los índices temáticos, de
  búsqueda o de herramientas son derivados reconstruibles y no tienen autoridad
  sobre las entradas ni sus fuentes.
- Hindsight es un adapter opcional de recuperación semántica, con resultados que
  deben verificarse contra fuente y revisión. S11 lo difirió del MVP; S12 medirá si
  justifica incorporarlo al backlog frente al índice y búsqueda textual propios.
- El acuerdo explícito de la sesión 6 es un núcleo mínimo común con seis tipos de
  secciones bajo demanda (`work`, `environment`, `knowledge`, `capabilities`,
  `evidence` y `coordination`); cada sección se referencia desde `manifest` y
  sólo se carga cuando su condición aplica. El packet inicia con núcleo,
  `manifest` y las secciones esenciales; las cargas adicionales deben activar
  una condición aceptada y registrar sección, condición y revisión de la fuente.
  No se carga por mera disponibilidad, no se amplían permisos y no se sustituye
  la reconciliación con fuentes canónicas. La taxonomía es semántica y no depende
  de etapa SDLC ni proveedor; S11 seleccionó su representación y realizaciones del MVP.
- El presupuesto es híbrido: `manifest` clasifica material como `required`,
  `relevant` u `optional` y declara `budget_profile`; cada adapter añade las
  métricas cuantitativas disponibles y reserva capacidad para respuesta y
  herramientas. Ante presión se difiere primero lo opcional y luego lo relevante;
  si lo obligatorio no cabe, el agente se detiene antes de actuar.
- La reconciliación del context packet es incremental: al iniciar o reanudar se
  comparan sólo marcadores compactos aplicables; si coinciden, se reutiliza el
  packet; si cambia uno, se revisan sólo las referencias afectadas; antes de una
  acción con efectos se validan sólo sus precondiciones relacionadas. El packet
  completo se reconstruye sólo ante cambios críticos. Caché y señales de
  invalidación son optimizaciones, no fuentes de verdad.
- Cada referencia declara impacto `packet`, `section` o `advisory`. El primero
  invalida el packet y exige otro correlacionado; el segundo recarga sólo la
  sección afectada; el tercero se consulta si pasa a ser relevante. No existe TTL
  universal y `check_after` sólo programa una comprobación.
- La validación del context packet tiene cuatro capas: `structural` (schema,
  campos, tipos y coherencia de `manifest`), `referential` (fuentes resolubles,
  tipadas, revisión y procedencia), `freshness` (marcadores e impactos
  reconciliados incrementalmente) y `sufficiency` (núcleo y material `required`
  suficientes, restricciones y contradicciones resueltas y presupuesto viable
  para la acción). Un artefacto estructuralmente inválido no entra en los estados
  y genera diagnóstico auditable; un packet bien formado es `ready` si pasa todo
  lo requerido, `degraded` sólo por faltantes `relevant`/`optional` declarados e
  `invalid` si falla núcleo, `required`, restricciones, contradicciones o
  presupuesto obligatorio.
- La carga termina cuando el material `required` está validado y no queda
  incertidumbre capaz de cambiar la acción o el veredicto. Sólo continúa si
  existe una fuente candidata autorizada y cabe en presupuesto. El trabajo se
  detiene si falta `required`, existe contradicción crítica, base/ownership/
  permisos son ambiguos, el presupuesto obligatorio no cabe o ninguna fuente
  permitida resuelve incertidumbre relevante. Cada ensamblaje, carga,
  reconciliación, degradación, invalidación o reconstrucción registra actor,
  fecha, base, trigger, referencias/revisiones, material incluido u omitido con
  razón, presupuesto aplicado, resultado y packet predecesor cuando exista.
- Los estados del packet son `ready`, `degraded`, `invalid` y `superseded`.
  `degraded` permite sólo trabajo independiente del material faltante u obsoleto;
  `invalid` no permite actuar; `superseded` conserva historia. No existe
  `completed` y ningún estado concede permisos.
- Conservar `handoff/v1` como contrato común con envelope y payload tipado para
  `assignment`, `ownership_transfer`, `verification_request` y `consultation`.
- Mantener la obligatoriedad por frontera y efecto, la identidad lógica portable,
  las cuatro capas de validación y la separación entre entrega, validación y
  aceptación.
- Mantener el lifecycle `pending → accepted → completed`, con `rejected`,
  `cancelled`, `expired` y `superseded`; ownership se transfiere atómica y
  condicionalmente, nunca por recepción ni por el paso del tiempo.
- Mantener el metaflujo aceptado `plan → design → build → verify → deploy`, con la
  frontera explícita entre `plan` y `design`.
- Mantener el SDD evolutivo: dirección general y contratos compartidos, con
  detalle por cambio o incremento próximo.
- La investigación de producto, técnica y definición puede alternarse hasta
  alcanzar claridad; cambiar acuerdos requiere volver a la persona y continuar
  el trabajo independiente.
- T800R prepara, ejecuta y supervisa agentes con autonomía dentro de los
  acuerdos; la revisión humana sigue concentrada en definición, riesgos y
  aceptación final según lo ya acordado.
- Las fuentes canónicas, responsabilidades y reglas de discrepancia son las de
  la sesión 3 y [ADR-002](adr/ADR-002-fuentes-canonicas-y-conocimiento.md).
- S11 seleccionó rutas configurables, Markdown con front matter compatible con OKF,
  adapters oficiales y búsqueda textual como baseline; no seleccionó un motor de
  memoria semántica.
- RTK y Context Mode quedan aceptados sólo como optimizaciones opcionales de
  adapters; hacer obligatorias esas herramientas concretas en el núcleo actual es
  `rejected`. S11 los difirió del MVP y S12 medirá si justifican backlog. El contrato sí exige las
  capacidades semánticas de reducción de salida preservando errores, estado,
  procedencia y acceso al contenido bruto, y de externalización de contenido
  grande con búsqueda, paginación o expansión bajo demanda.

## Fuentes aplicables

| Tema | Fuente |
| --- | --- |
| Definición y acuerdos | [índice rector](product-definition.md) y [unidades por sesión](definition/README.md) |
| Responsabilidades del orchestrator | [research-orchestrator-responsibilities.md](research-orchestrator-responsibilities.md) |
| Autonomía y responsabilidades | [ADR-001](adr/ADR-001-autonomia-y-responsabilidades.md) |
| Fuentes canónicas y conocimiento | [ADR-002](adr/ADR-002-fuentes-canonicas-y-conocimiento.md) |
| Modelo portable de conocimiento | [ADR-006](adr/ADR-006-modelo-portable-de-conocimiento.md) |
| Seguridad y gobernanza | [ADR-008](adr/ADR-008-baseline-de-seguridad-y-gobernanza.md) |
| Adopción y mantenimiento | [ADR-009](adr/ADR-009-experiencia-portable-de-adopcion-y-mantenimiento.md) |
| Arquitectura técnica del MVP | [ADR-010](adr/ADR-010-arquitectura-tecnica-del-mvp.md) |
| Referencias SDLC y playbook Anthropic | [comparación](research-sdlc-references.md) · [playbook](research-ai-native-sdlc-playbook.md) |
| Superpowers y BMAD | [research-superpowers-bmad.md](research-superpowers-bmad.md) |
| Especificaciones evolutivas | [research-evolutionary-specs.md](research-evolutionary-specs.md) |

Las investigaciones son evidencia o recomendaciones; sólo los acuerdos
explícitos del documento rector tienen autoridad. La revisión transversal de
OpenAI y Anthropic quedó completada y aprobada el 2026-10-09 según
[su alcance y matriz](product-definition.md#revisión-transversal-de-prácticas-de-harnesses);
el registro está en
[revision-transversal-cierre.md](revision-transversal-cierre.md) y la decisión
en [S12](definition/session-12-validation-convergence.md#decisiones).

## Sesiones

| Sesión | Tema | Estado | Resultado / próxima acción |
| --- | --- | --- | --- |
| Preparación | Plan de definición | `completed` | Plan acordado; iniciar sesión 1 |
| 1 | Visión y problema | `completed` | [Cierre](definition/session-01-vision.md#s01-cierre); continuar con 2 |
| 2 | Límites del producto | `completed` | [Cierre](definition/session-02-limits.md#s02-cierre); continuar con 3 |
| 3 | Fuentes de verdad | `completed` | [Cierre](definition/session-03-sources-of-truth.md#s03-cierre); continuar con 4 |
| 4 | Ciclo operativo | `completed` | [Cierre](definition/session-04-operating-cycle.md#s04-cierre) y [ADR-003](adr/ADR-003-ciclo-operativo-y-coordinacion.md) |
| 5 | Handoffs y coordinación | `completed` | [Cierre](definition/session-05-handoffs.md#s05-cierre) y [ADR-004](adr/ADR-004-contrato-portable-de-handoffs.md) |
| 6 | Contexto | `completed` | [Cierre](definition/session-06-context.md#s06-cierre) y [ADR-005](adr/ADR-005-contrato-portable-de-contexto.md) |
| 7 | Conocimiento | `completed` | [Cierre](definition/session-07-knowledge.md#s07-cierre) y [ADR-006](adr/ADR-006-modelo-portable-de-conocimiento.md) |
| 8 | Portabilidad | `completed` | [Cierre](definition/session-08-portability.md#s08-cierre) y [ADR-007](adr/ADR-007-contrato-de-capacidades-y-adapters-portables.md) |
| 9 | Seguridad y gobernanza | `completed` | [Cierre](definition/session-09-security-governance.md#s09-cierre) y [ADR-008](adr/ADR-008-baseline-de-seguridad-y-gobernanza.md) |
| 10 | Experiencia del producto | `completed` | [Cierre](definition/session-10-product-experience.md#s10-cierre) y [ADR-009](adr/ADR-009-experiencia-portable-de-adopcion-y-mantenimiento.md) |
| 11 | Arquitectura del MVP | `completed` | [Cierre](definition/session-11-mvp-architecture.md#s11-cierre) y [ADR-010](adr/ADR-010-arquitectura-tecnica-del-mvp.md) |
| 12 | Validación y convergencia | `completed` | [Cierre](definition/session-12-validation-convergence.md#s12-cierre): construcción del v0 autorizada; continuar con F0 del [roadmap](roadmap-v0.md) |

## Criterio de salida de la sesión 5

Definir ámbito, variantes, campos mínimos, referencias, identidad, autoridad,
estados, transiciones, validación, caducidad, aceptación, rechazo, cancelación,
transferencia y recuperación de `handoff/v1`, preservando ownership, estado real,
fuentes canónicas y evidencia. El contrato debe distinguirse del transporte y
del context packet sin dejar bloqueos para la sesión 6. El criterio está cumplido:
las categorías de rechazo, resultados por tipo, matriz de transiciones,
deduplicación, recuperación y fronteras quedaron aceptados y auditados frente a
ADR-003.

## Estados

Camino normal: `pending → ready → in_progress → completed`; `waiting` conserva
una espera identificada y `blocked` no tiene vía autorizada. También existe
`cancelled`. La recuperación y reapertura preservan historia; toda transición
registra razón, evidencia y responsable. Toda tarea se valida; el verificador es
proporcional al riesgo. Tarea, incremento y sesión tienen cierres verificables.

## Criterio de salida de la sesión 6

Delimitar los campos obligatorios del núcleo común y las secciones tipadas bajo
demanda del contrato de contexto, junto con progressive disclosure, referencias,
presupuestos y condiciones de parada. Debe conservar la separación de ADR-004 y
dejar preparado el contexto para iniciar la sesión 7, sin seleccionar todavía
representación física, herramientas ni tecnología.
El criterio está cumplido: el contrato cubre núcleo, secciones, progressive
disclosure, referencias y procedencia, presupuesto, reconciliación incremental,
impactos, estados, validación, parada y evidencia. La auditoría no encontró
contradicciones con ADR-003 o ADR-004 ni bloqueos para la sesión 7.

## Criterio de salida de la sesión 7

Definir un modelo de conocimiento con perfil, taxonomía, metadatos, autoridad,
procedencia, lifecycle, reglas de vigencia, curación e indexación explícitos;
delimitar su relación con memoria, Hindsight y la sección `knowledge` del context
packet; y preparar el contrato lógico para portabilidad sin seleccionar tecnología
ni duplicar fuentes canónicas.
El criterio está cumplido: se aceptó el perfil T800R compatible con OKF v0.2, el
núcleo semántico extensible, los bundles por ámbito, la curación proporcional, el
lifecycle separado de frescura, el índice portable y Hindsight como adapter
opcional. La identidad portable quedó resuelta en la sesión 8; S11 seleccionó
representación física, almacenamiento y búsqueda textual, y difirió Hindsight para
medición en S12. La decisión transversal está en
[ADR-006](adr/ADR-006-modelo-portable-de-conocimiento.md).

## Criterio de salida de la sesión 8

Definir la especificación lógica de adapters: frontera núcleo/proveedor,
capacidades mínimas, descriptor y snapshot, identidad y aliases, traducción,
degradación, parada y contrato de evidencia para Codex, Claude Code y OpenCode,
sin seleccionar representación física ni tecnología. El criterio está cumplido:
se aceptaron siete capacidades del baseline, cuatro perfiles, identidad portable
de actores y conocimiento, proyecciones no autoritativas, condiciones declarativas
y cuatro capas de conformidad. La matriz documental conserva a los proveedores
como `target`; la conformidad real se ejecutará en sesión 12 sobre adapters
construidos tras autorizar la fase. La auditoría no encontró contradicciones con
ADR-003 a ADR-006 ni bloqueos para la sesión 9. La decisión transversal está en
[ADR-007](adr/ADR-007-contrato-de-capacidades-y-adapters-portables.md).

## Criterio de salida de la sesión 9

Definir un baseline lógico y portable con invariantes, autoridad de política,
permisos efectivos, manejo de secretos, recursos protegidos, aprobaciones, niveles
de riesgo, aislamiento, auditoría, degradación y condiciones de parada, sin elegir
mecanismos de arquitectura. El criterio está cumplido: se aceptaron la frontera de
tres capas, permisos por intersección, referencias opacas, protección por
recurso/acción/efecto, aprobaciones acotadas, riesgo y controles proporcionales,
aislamiento por propiedades, auditoría minimizada, `fail closed` por alcance y
política versionada delegable. La auditoría no encontró contradicciones con
ADR-001 ni ADR-003 a ADR-007. La decisión transversal está en
[ADR-008](adr/ADR-008-baseline-de-seguridad-y-gobernanza.md).

## Criterio de salida de la sesión 10

Definir un flujo lógico de adopción que cubra la frontera entre experiencia común
y mecanismos particulares; instalación, configuración, diagnóstico,
sincronización, actualización y retiro; propiedad de artefactos y
personalizaciones; conflictos; versionado, migración y recuperación; validación,
evidencia, degradación y parada, sin elegir tecnología. El criterio está cumplido:
se aceptaron operaciones comunes con CLI de referencia, adopción escalonada,
configuración declarada, ownership explícito, `doctor` por operación,
reconciliación de tres vías, snapshots exactos, migraciones verificables, retiro
selectivo, gates de seguridad y resolución explícita de colisiones. La revisión
transversal no encontró un mecanismo externo que sustituya estos contratos y dejó
las realizaciones para S11 y su validación para S12. La decisión transversal está
en [ADR-009](adr/ADR-009-experiencia-portable-de-adopcion-y-mantenimiento.md).

## Criterio de salida de la sesión 11

Seleccionar una arquitectura implementable del MVP con componentes, fronteras,
ownership de datos, runtime, formatos, persistencia, empaquetado, adapters,
seguridad, extensibilidad y estrategia de pruebas explícitos, sin iniciar la
construcción. El criterio está cumplido: S11 cerró el monolito modular sobre
TypeScript y Node 24, JSON Schema, SQLite y CAS, distribución npm, API y CLI,
adapters de proveedor y Beads, runner Docker, aprobaciones FIDO y pruebas
contract-first. La segunda auditoría no encontró decisiones humanas pendientes.
Los proveedores siguen `target` hasta conformidad en S12 y la construcción continúa
sin autorización. La decisión transversal está en
[ADR-010](adr/ADR-010-arquitectura-tecnica-del-mvp.md).
