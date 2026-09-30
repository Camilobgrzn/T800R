# Backlog de ideas: arquitectura objetivo diferida del MVP v0

- Creado: 2026-09-30, por la decisión «Perfil MVP mínimo» de
  [S12](definition/session-12-validation-convergence.md#decisiones).
- Qué es: el conjunto de decisiones ya `accepted` en S01-S11 y ADR-001-010 que
  **no forman parte del MVP v0**, más las anotaciones de la revisión adversarial
  que quedaron `deferred`. Nada de esto se borra del canon: sigue siendo
  arquitectura objetivo y se retomará cuando el uso real del MVP lo justifique.
- Qué no es: una lista de decisiones rechazadas. Una fila aquí significa «no
  ahora», no «no».
- Cómo se retoma un ítem: se abre como tarea de la fase de construcción con el
  enlace a su origen; si al retomarlo se cambia el acuerdo, se registra en la
  unidad canónica o ADR correspondiente.

## Qué sí queda en el MVP v0

Para leer este backlog hace falta saber qué se conserva. El MVP v0 es un harness
del loop de desarrollo, con memoria y orquestación de agentes, para que su autor
construya software en repositorios propios:

- Orchestrator determinista con roles `planner`, `worker` y `verifier`; tareas con
  owner único y escritura disjunta; verifier independiente por `actor_id` (S04,
  S11, S12).
- Handoffs `handoff/v1` autoritativos en el work tracker; Beads como primer
  adapter (S05, S11).
- Context packets, progressive disclosure y bundles de conocimiento OKF con
  curator básico (S06, S07).
- Adapters headless para Claude Code, Codex y OpenCode (S08, S11).
- CLI: `init` que propone y aplica, `doctor` básico, `sync` y `update` simples
  (S10).
- Seguridad mínima: permisos nativos del proveedor más un `policy.yaml` simple con
  rutas protegidas y acciones `routine` / `high` / `prohibited`; `high` requiere
  aprobación humana con el perfil `local` (S09, S12). Git como red de seguridad:
  worktrees o ramas, sin push a la rama principal ni deploy sin aprobación.
- Validaciones declaradas ejecutadas en el host, en worktree aislado, con
  allowlist de comandos.
- Ledger SQLite append-only con eventos estructurados (S11).
- TypeScript sobre Node 24, monorepo, JSON Schema, pruebas contract-first (S11).

## Ítems diferidos por área

| Área | Ítem | Origen | Cuándo retomarlo |
| --- | --- | --- | --- |
| Orquestación | Leases acotados con fencing tokens y CAS | S11 «Leases acotados con fencing y CAS»; ADR-010 | Cuando haya más de una sesión escribiendo sobre el mismo repositorio de forma habitual |
| Orquestación | Perfiles de conformidad por tupla adapter/OS/arquitectura | S11 «Core y CLI multiplataforma…»; S12 preguntas 2 y 5 | Al publicar para terceros |
| Memoria y contexto | Hindsight, RTK, Context Mode | S11 «Componentes diferidos» | Tras medir el baseline propio |
| CLI y adopción | Sincronización por reconciliación de tres vías | S10 «Sincronización por reconciliación de tres vías» | Cuando `sync` simple produzca conflictos reales |
| CLI y adopción | Snapshot exacto y compatible de adopción | S10 «Snapshot exacto y compatible de adopción» | Con la primera actualización que rompa compatibilidad |
| CLI y adopción | Migraciones verificables con recuperación explícita; forward-only | S10; S11 «Migraciones forward-only…» | Con el primer cambio de schema en un repositorio adoptado |
| CLI y adopción | Retiro selectivo, escalonado y verificable | S10 «Retiro selectivo…»; `REV-2026-108` | Cuando exista un segundo repositorio adoptado |
| CLI y adopción | Resolución explícita de colisiones; propiedad por sección | S10 | Cuando el repositorio consumidor personalice unidades generadas |
| CLI y adopción | `doctor` con reparación, cuarentena y GC | S11; `REV-2026-109` | Cuando `doctor` de solo lectura resulte insuficiente |
| Seguridad | DSL declarativa tipada para política (`policy/v1` completo) | S11 «DSL declarativa tipada para política» | Cuando el `policy.yaml` simple no exprese una regla necesaria |
| Seguridad | Riesgo multidimensional y matriz mínima por nivel (`elevated`) | S09 «Riesgo multidimensional…», «Matriz mínima por nivel de riesgo»; ADR-008 puntos 4-5 | Cuando `routine` / `high` / `prohibited` sea insuficiente |
| Seguridad | Permisos efectivos por intersección explícita | S09 | Con el modelo de riesgo completo |
| Seguridad | Perfil de aprobación `signed`: SSHSIG, FIDO para `high`, bootstrap firmado | S11 l. 133-137; ADR-010 punto 14; S12 «Perfil de aprobación humana…»; `REV-2026-110`, `REV-2026-111` | Cuando haya más de un aprobador o un equipo |
| Seguridad | Secretos por referencias opacas e inyección controlada; secret broker | S09 «Secretos mediante referencias opacas…»; S11 «Componentes diferidos» | Cuando una validación necesite un secreto de aplicación |
| Seguridad | Auth de proveedor fuera de la frontera de herramientas (verificación de fuga señuelo por tupla) | S11 «Auth de proveedor…» | Al certificar adapters para terceros |
| Seguridad | Política canónica con autoridad delegable | S09 | Cuando exista más de una autoridad |
| Validaciones | Runner OCI y adapter Docker; admisión del workspace montado | S11 «Runner OCI…», «Docker como primer adapter…»; ADR-010 punto 13; `REV-2026-106` | Cuando una validación no pueda correr con seguridad en el host |
| Validaciones | Aislamiento como contención por propiedades (`isolated_execution`) | S09 | Junto con el runner OCI |
| Evidencia | Cadena criptográfica del ledger, checkpoints y exportación verificable | S11 «SQLite embebido para el ledger operacional» | Cuando la evidencia deba defenderse ante terceros |
| Evidencia | Artifact store CAS con metadata SQLite; context packets content-addressed | S11 | Cuando el tamaño o la deduplicación de artefactos lo pidan |
| Evidencia | Auditoría minimizada con eventos por política | S09 «Auditoría mediante eventos estructurados y minimizados» | Con el modelo de política completo |
| Base técnica | Binarios autónomos, plugins de terceros, OTel remoto, daemon/JSON-RPC, motores de política externos, Podman | S11 «Componentes diferidos» | Sin cambio |
| Base técnica | Bindings SQLite precompilados publicados por T800R; meta-distribución npm con manifiesto | S11 | Al publicar para terceros; en el MVP basta la instalación de desarrollo |
| Arquitectura | Frontera precisa de adapters como consumidores de casos de uso | S11 «API TypeScript pública de casos de uso»; `REV-2026-107` | Al abrir la API a adapters no oficiales |
| Proceso | Conciliar la restricción «no seleccionar tecnología durante la definición» con S11 | `REV-2026-104` | Al cerrar S12 |

## Anotaciones de la revisión adversarial diferidas

El 2026-09-30 la persona cerró en bloque como `deferred` todas las anotaciones
que seguían `propuesto`: `REV-2026-001` a `REV-2026-104`, `REV-2026-106` a
`REV-2026-109` y `REV-2026-111`. Se conservan íntegras en
[reviews/](reviews/README.md) con su evidencia; su discusión individual se
retomará cuando el área afectada salga del backlog o cuando el uso del MVP
muestre el problema que describen. `REV-2026-105` y `REV-2026-110` quedaron
`accepted` antes de esta decisión y su resolución sigue vigente en S12.

Cómo priorizarlas cuando se retomen: el orden sugerido por
[CT07](reviews/blocks/CT07.md) y por el
[informe de la segunda pasada](reviews/second-pass-astra-2026-09-25.md) sigue
siendo válido dentro de cada área.
