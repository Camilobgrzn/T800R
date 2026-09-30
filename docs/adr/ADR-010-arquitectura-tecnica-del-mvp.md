# ADR-010: Arquitectura técnica del MVP

**Fecha:** 2026-09-24  
**Estado:** Aceptada (punto 14 enmendado el 2026-09-29 por S12)

## TL;DR

- **Problema:** T800R necesita realizar sus contratos portables sin convertir una
  CLI, proveedor, base interna o herramienta externa en autoridad del proyecto.
- **Decisión:** construir un monolito modular TypeScript sobre Node 24, con
  contratos JSON Schema, adapters explícitos, ledger SQLite, artefactos
  content-addressed y ejecución de agentes y validaciones bajo mediación.
- **Por qué importa:** una arquitectura menos delimitada permitiría saltar gates,
  exponer credenciales, duplicar fuentes canónicas o declarar compatibilidad sin
  evidencia.

## Glosario rápido

- **Monolito modular:** un solo sistema desplegable dividido en módulos con
  dependencias comprobables y responsabilidades separadas.
- **Puerto:** interfaz que expresa qué necesita un módulo de un mecanismo externo
  sin depender de su implementación.
- **Adapter:** implementación de un puerto para una herramienta o proveedor
  concreto.
- **Ledger:** registro operacional durable de propuestas, decisiones, snapshots y
  evidencia.
- **Content-addressed storage (CAS):** almacenamiento inmutable que identifica cada
  objeto por el digest de su contenido.
- **Fencing token:** número monotónico que impide a un escritor obsoleto confirmar
  resultados después de perder su lease.
- **Runner OCI:** ejecución contenida mediante una imagen compatible con Open
  Container Initiative; el MVP la realiza con Docker.

## Contexto

T800R debe preparar, ejecutar y supervisar agentes de Codex, Claude Code y
OpenCode; preservar fuentes canónicas del repositorio; aplicar política y gates de
seguridad; mantener contexto, handoffs y evidencia; y adoptar o actualizar sus
artefactos sin sobrescribir personalizaciones.

Los contratos aceptados separan semántica y mecanismos. En particular:

1. el work tracker, Git, especificaciones, conocimiento y evidencia tienen
   autoridades distintas;
2. el núcleo decide invariantes y los adapters no inventan garantías;
3. toda acción protegida requiere política, permisos y evidencia efectivos;
4. los secretos no pueden entrar en contexto ni quedar visibles para el modelo;
5. adopción y mantenimiento usan inspección, propuesta, aplicación y
   verificación, con reconciliación de tres vías.

Una arquitectura centrada en scripts, prompts o una CLI de proveedor no puede
preservar esos límites. Tampoco basta con ejecutar las herramientas nativas de los
proveedores: su documentación no demuestra una frontera uniforme entre las
credenciales del cliente y shell, plugins, hooks o tools dirigidos por el modelo.

La arquitectura elegida mantiene este flujo:

```text
CLI / API TypeScript
        |
        v
application + adoption ---------> policy
        |                            |
        +----> core <----------------+
        |
        +----> context / capabilities / coordination
        |
        +----> evidence / artifacts
        |
        v
puertos ------------------------> adapters explícitos
                                  Git, Beads, SQLite, Docker,
                                  Codex, Claude Code, OpenCode
```

## Alternativas evaluadas

| Alternativa | Beneficios | Costes y riesgos | Resultado |
| --- | --- | --- | --- |
| Scripts, archivos y CLIs particulares | Menor construcción inicial. | Duplica semántica, no ofrece transacciones ni enforcement común y dificulta actualización segura. | Rechazada. |
| Servicios y plugins dinámicos desde el MVP | Aislamiento de despliegue y extensión abierta. | Añade red, lifecycle distribuido, autenticación y ejecución implícita de supply chain. | Rechazada para el MVP. |
| Paquete único con estado central | Instalación y consultas simples. | Acopla versiones y crea una autoridad paralela a fuentes del proyecto. | Rechazada. |
| **Monolito modular, paquetes versionados y adapters explícitos** | **Fronteras comprobables, despliegue local y contratos portables sin infraestructura obligatoria.** | **Exige schemas, reconciliación, ledger, suites de contrato y composición controlada.** | **Aceptada.** |

### Por qué descartamos las otras

Los scripts y convenciones no pueden demostrar orden causal, política, evidencia o
recuperación. Los servicios y plugins resolverían problemas que el piloto todavía
no ha demostrado y ampliarían la superficie de seguridad. Un paquete y estado
únicos simplificarían releases, pero impedirían que contratos y adapters evolucionen
con identidad propia y mezclarían persistencia con autoridad.

## Por qué la decisión (qué dice la industria)

JSON Schema 2020-12 ofrece una representación neutral al lenguaje para contratos
estructurados. SQLite aporta transacciones locales y control de concurrencia sin
exigir un servicio externo. Open Container Initiative permite describir imágenes
reproducibles y Docker ofrece una realización disponible en las tres plataformas
objetivo.

Las guías de OpenAI y Anthropic sobre harnesses recomiendan entornos legibles,
validaciones mecánicas, contexto acotado y estado durable. La documentación de
Codex, Claude Code y OpenCode también confirma que sus primitivas y reglas de
configuración difieren. Estas referencias respaldan separar contratos de
realizaciones; no certifican ningún adapter, que deberá superar las pruebas de
conformidad de T800R.

## Decisión

1. **Topología y módulos.** El MVP es un monolito modular. `core` mantiene tipos,
   invariantes y transiciones puras. `application` coordina efectos;
   `adoption`, `policy`, `capabilities`, `context`, `coordination`, `knowledge`,
   `artifacts` y `evidence` poseen sus agregados. La CLI es una composition root y
   frontend de una API TypeScript pública de casos de uso.
2. **Dependencias.** `contracts` no depende del runtime; `adapter-api` depende sólo
   de contratos; adapters no importan internals ni se llaman entre sí. Tiempo,
   filesystem, procesos, Git, red y persistencia entran por puertos. ESLint,
   project references y dependency-cruiser hacen cumplir el grafo.
3. **Tecnología.** El runtime usa TypeScript estricto, ESM y Node 24 LTS; pnpm
   organiza el monorepo y `tsc` compila packages. Ajv valida JSON Schema 2020-12,
   `yaml` procesa YAML 1.2 restringido, Commander implementa la CLI, Vitest prueba
   y `better-sqlite3` realiza el ledger. No se usan ORM, service locator ni
   framework de monorepo.
4. **Contratos y formatos.** JSON Schema es la autoridad estructural. El núcleo de
   cada objeto es cerrado y sólo admite extensiones namespaced registradas. YAML
   restringido sirve a configuración y política; Markdown con front matter, a OKF
   y Agent Skills; JSON canonicalizable, a intercambio, snapshots y evidencia.
5. **Layout.** `t800r.yaml` y `t800r.lock.json` viven en la raíz. Para proyectos
   nuevos, `t800r/policy.yaml` y `t800r/sources.yaml` son defaults propuestos. Los
   bundles de conocimiento tienen roots configurables y `knowledge/` es sólo el
   default para uno nuevo.
6. **Persistencia.** Un SQLite por adopción vive en el directorio de estado de la
   plataforma, identificado por `project_id` y compartido entre worktrees. Cada
   módulo posee sus repositorios y `application` coordina una UnitOfWork. Los
   efectos externos usan estado previo `effect_pending` y reconciliación posterior;
   no se incluyen ficticiamente en una transacción local.
7. **Artefactos.** Context packets y salidas admitidas se guardan en un CAS de
   filesystem con SHA-256, publicación atómica, permisos mínimos, metadata SQLite,
   verificación de integridad y recolección recuperable. Política decide retención
   y controles adicionales.
8. **Concurrencia y migración.** Leases acotados con fencing complementan, pero no
   reemplazan, ownership. Cambios globales toman exclusión de adopción. Las
   migraciones son forward-only, numeradas, verificables y con backup o checkpoint
   y recuperación explícita.
9. **Distribución.** Un monorepo multipaquete publica contratos, API de adapters,
   runtime, CLI y adapters oficiales con versiones independientes. Una
   meta-distribución npm y su manifiesto fijan conjuntos exactos compatibles.
   Updates sólo eligen manifiestos curados. Los bindings SQLite se publican como
   prebuilds de T800R por OS/arquitectura, sin scripts o compilación en el
   consumidor.
10. **Adopción y CLI.** `init`, `sync`, `update` y `remove` producen `proposal/v1`;
    `apply` ejecuta únicamente una propuesta. Handoffs, approvals, tasks y
    operaciones mediadas usan su lifecycle propio con los mismos gates. La CLI se
    agrupa en `work`, `handoff`, `approval` y `evidence` y no ofrece bypass `force`.
11. **Work tracking y handoffs.** Beads es el primer adapter oficial, no una
    dependencia del core. El work tracker es autoridad de handoffs y ownership y
    debe aplicar sus transiciones condicionalmente; SQLite conserva evidencia, no
    otra versión viva.
12. **Proveedores.** T800R controla el agent loop y desactiva tools, hooks, plugins,
    Model Context Protocol, subagentes y configuración no admitida. Claude Code usa
    headless restringido; Codex usa app-server por stdio; OpenCode usa server local.
    Los tres continúan `target` hasta las pruebas de S12; cualquier tool o evento
    inesperado bloquea la tupla.
13. **Ejecución mediada.** Lecturas, patches y validaciones pasan por operaciones
    tipadas. Los comandos sólo provienen de validaciones declaradas y se ejecutan
    con Docker en una imagen fijada por digest, sin credenciales ni red por defecto,
    con filesystem y recursos acotados. Herramientas nativas y secretos de
    aplicación quedan fuera del MVP.
14. **Aprobaciones.** Una decisión humana es un registro persistente del ledger,
    correlacionado con el digest de la solicitud canónica y revalidado antes del
    efecto. Su atestación la fija el perfil de aprobación declarado en política:
    `local` (default del MVP), creado por un comando humano explícito fuera de una
    sesión de agente, con origen registrado; o `signed`, un artefacto SSHSIG firmado
    fuera del agente, con clave SSH FIDO y presencia física para `high`. Efectos
    `high` requieren en ambos perfiles aprobación humana previa y verifier
    independiente. Sin la capacidad requerida por el perfil vigente, el efecto
    permanece bloqueado. *Enmendado el 2026-09-29 por S12 (`REV-2026-110`); el
    texto original exigía SSHSIG/FIDO como único mecanismo.*
15. **Pruebas.** La estrategia es contract-first: schemas, propiedades y máquinas
    de estado; suites comunes por puerto; integración real de SQLite, Git, Docker y
    CLI; replay de eventos; y E2E con fallos. S12 define corpus, métricas, umbrales
    y certifica cada combinación de adapter, proveedor, versión, OS y arquitectura.

## Consecuencias para el equipo

- Implementar un adapter exige descriptor, snapshot y la suite de contrato común;
  listar APIs no basta para llamarlo compatible.
- La primera distribución requiere Node 24, Docker para validaciones contenidas y
  un binding SQLite publicado para la plataforma efectiva.
- Los agentes no reciben shell ni filesystem nativos del proveedor; proponen
  operaciones que T800R valida y media.
- Hindsight, RTK, Context Mode, Podman, plugins terceros, broker general de secretos,
  sandbox de efectos externos y binarios autónomos quedan diferidos.
- S12 puede concluir que una superficie de proveedor sigue `target/unverified`;
  arquitectura no convierte esa incertidumbre en compatibilidad.

## Puntos abiertos

- ¿Qué tuplas de proveedor, versión y OS superan conformidad? → sesión 12.
- ¿Qué corpus, repositorio piloto, métricas y umbrales determinan éxito? → sesión
  12.
- ¿Qué mecanismos diferidos demuestran valor sobre el baseline propio? → backlog
  resultante de sesión 12.

## Referencias

- [S11: Arquitectura del MVP](../definition/session-11-mvp-architecture.md#s11-cierre).
- [ADR-002: Fuentes canónicas y conocimiento](ADR-002-fuentes-canonicas-y-conocimiento.md).
- [ADR-003: Ciclo operativo, ownership y coordinación](ADR-003-ciclo-operativo-y-coordinacion.md).
- [ADR-005: Contrato portable de contexto](ADR-005-contrato-portable-de-contexto.md).
- [ADR-007: Contrato de capacidades y adapters portables](ADR-007-contrato-de-capacidades-y-adapters-portables.md).
- [ADR-008: Baseline de seguridad y gobernanza](ADR-008-baseline-de-seguridad-y-gobernanza.md).
- [ADR-009: Experiencia portable de adopción](ADR-009-experiencia-portable-de-adopcion-y-mantenimiento.md).
- JSON Schema: *Draft 2020-12* — https://json-schema.org/draft/2020-12
- Node.js: *SQLite* — https://nodejs.org/docs/latest-v24.x/api/sqlite.html
- Docker: *Engine security* — https://docs.docker.com/engine/security/
- OpenAI: *Codex App Server* — https://developers.openai.com/codex/app-server
- Anthropic: *Run Claude Code programmatically* — https://code.claude.com/docs/en/headless
- OpenCode: *Server* — https://opencode.ai/docs/server/
