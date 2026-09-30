# Investigación: capacidades portables de proveedores

Fecha de consulta: 2026-09-21. Insumo documental para la sesión 8; no constituye
conformidad ni selecciona arquitectura o tecnología.

## Alcance y método

Se revisó documentación primaria vigente de Codex, Claude Code y OpenCode contra
las siete capacidades del baseline y los cuatro perfiles opcionales de T800R. La
documentación demuestra primitivas potenciales, no la preservación del contrato
integrado. No se implementaron adapters ni se ejecutaron pruebas estructurales,
conductuales, de integración o resiliencia.

Los tres proveedores se clasifican como `target`. Las menciones a soporte nativo
describen una primitiva documentada; no certifican el resultado semántico completo
de T800R. `Adapter` indica que la garantía común debe componerse y probarse fuera
de la primitiva del proveedor. `Unknown` indica falta de evidencia documental
suficiente.

## Matriz del baseline

| Capacidad | Codex | Claude Code | OpenCode |
| --- | --- | --- | --- |
| Contratos | Salida estructurada y eventos; contratos T800R por adapter. | JSON, streaming y schema; contratos T800R por adapter. | JSON con schema, mensajes y partes; contratos T800R por adapter. |
| Identidad y correlación | Threads, turns, items y sesiones locales; identidad portable por adapter. | Sesiones y correlación de herramientas/subagentes; identidad portable por adapter. | Sesiones, mensajes y sesiones padre/hija; identidad portable por adapter. |
| Referencias y reconciliación | Acceso a repositorio, Git y archivos; reconciliación semántica por adapter. | Archivos, Git y MCP; reconciliación semántica por adapter. | Referencias, archivos y Git; reconciliación semántica por adapter. |
| Contexto y límites | `AGENTS.md`, skills y límites documentados; manifest, presupuesto y parada por adapter. | Skills, herramientas diferidas y compactación; manifest, presupuesto y parada por adapter. | Reglas, compactación y poda; manifest, presupuesto y parada por adapter. |
| Acciones y herramientas | Sandbox, approvals, MCP y eventos nativos; efectos y restricciones efectivas por adapter. | Herramientas, MCP, permisos y sandbox nativos; efectos y restricciones efectivas por adapter. | Herramientas, MCP y permisos nativos; efectos y restricciones efectivas por adapter. |
| Continuidad durable | Reanudación y persistencia de threads, también modos efímeros; estado T800R por adapter. | Sesiones JSONL reanudables con límites de restauración; estado T800R por adapter. | Continuación, fork, exportación e importación; estado T800R por adapter. |
| Evidencia y diagnóstico | JSONL, app-server y telemetría; completitud y retención requieren prueba. | Streaming estructurado y transcripciones internas inestables; captura durable por adapter. | Eventos JSON, mensajes, partes y exportación; completitud y retención requieren prueba. |

La evidencia no identifica un bloqueo documental para construir candidatos al
baseline. Tampoco permite afirmar que alguno lo satisface: identidad portable,
reconciliación, persistencia canónica, evidencia completa y condiciones de parada
dependen del adapter y de pruebas posteriores.

## Matriz de perfiles

| Perfil | Codex | Claude Code | OpenCode |
| --- | --- | --- | --- |
| `delegation` | Subagentes y threads como primitivas nativas; semántica T800R por adapter. | Subagentes nativos y equipos experimentales; semántica T800R por adapter. | Subagentes y sesiones hijas como primitivas nativas; semántica T800R por adapter. |
| `isolated_execution` | Worktrees y contenedores documentados; reconciliación por adapter. | Worktrees documentados; reconciliación por adapter. | `Unknown`: no se encontró garantía documental de aislamiento de escritura. |
| `portable_skills` | Agent Skills, recursos y carga progresiva; perfil T800R por adapter. | Agent Skills con extensiones propias; perfil T800R por adapter. | `SKILL.md` y carga bajo demanda con subconjunto de metadatos; perfil T800R por adapter. |
| `semantic_retrieval` | Sin recuperación semántica nativa documentada; integración externa posible. | Sin recuperación semántica nativa documentada; integración externa posible. | Sin recuperación semántica nativa documentada; integración externa posible. |

La ausencia documental de `isolated_execution` en OpenCode no afecta el baseline,
pero vuelve ese perfil `unverified` y hace inelegible un candidato para tareas que
lo marquen `required` hasta demostrar una emulación conforme. Hindsight, MCP u
otro recuperador podrían realizar `semantic_retrieval`; esta posibilidad no
certifica el perfil ni selecciona un mecanismo.

## Riesgos transversales

- Las reglas de descubrimiento y precedencia de instrucciones difieren. El adapter
  debe proyectar el conjunto lógico ya resuelto y registrar orden, transformación
  y omisiones.
- Los IDs de sesión, thread, mensaje o proceso no son `actor_id` ni
  `execution_id`; sólo pueden registrarse como aliases acotados.
- Reanudar una conversación no restaura necesariamente configuración, permisos,
  directorios, flags, historial completo ni estado canónico T800R.
- Las primitivas de subagentes no implementan `handoff/v1`, aceptación, ownership
  ni cierre de obligaciones.
- Las instrucciones y metadatos de skills no conceden permisos. Cada proveedor
  interpreta extensiones distintas y el snapshot debe reflejar su efecto real.
- Compactación, poda, resúmenes de subagentes y salidas finales pueden ocultar
  contenido bruto. El adapter debe capturarlo o conservar una referencia durable
  según el baseline.

## Fuentes primarias

### Codex

- [Codex SDK](https://developers.openai.com/codex/codex-sdk.md)
- [Codex App Server](https://developers.openai.com/codex/app-server.md)
- [Modo no interactivo](https://developers.openai.com/codex/non-interactive-mode.md)
- [AGENTS.md](https://developers.openai.com/codex/agent-configuration/agents-md.md)
- [Subagents](https://developers.openai.com/codex/agent-configuration/subagents.md)
- [Build skills](https://developers.openai.com/codex/build-skills.md)
- [Permisos](https://developers.openai.com/codex/permissions.md)
- [Agent approvals and security](https://developers.openai.com/codex/agent-approvals-security.md)
- [MCP](https://developers.openai.com/codex/extend/mcp.md)
- [Cloud environments](https://developers.openai.com/codex/environments/cloud-environment.md)
- [Git worktrees](https://developers.openai.com/codex/environments/git-worktrees.md)

### Claude Code

- [Headless mode](https://code.claude.com/docs/en/headless.md)
- [CLI reference](https://code.claude.com/docs/en/cli-reference.md)
- [Sessions](https://code.claude.com/docs/en/sessions.md)
- [Context window](https://code.claude.com/docs/en/context-window.md)
- [Tools reference](https://code.claude.com/docs/en/tools-reference.md)
- [Permissions](https://code.claude.com/docs/en/permissions.md)
- [MCP](https://code.claude.com/docs/en/mcp.md)
- [Subagents](https://code.claude.com/docs/en/sub-agents.md)
- [Agent teams](https://code.claude.com/docs/en/agent-teams.md)
- [Worktrees](https://code.claude.com/docs/en/worktrees.md)
- [Skills](https://code.claude.com/docs/en/skills.md)
- [Memory](https://code.claude.com/docs/en/memory.md)

### OpenCode

- [SDK](https://opencode.ai/docs/sdk/)
- [Server](https://opencode.ai/docs/server/)
- [CLI](https://opencode.ai/docs/cli/)
- [Agents](https://opencode.ai/docs/agents/)
- [Agent Skills](https://opencode.ai/docs/skills/)
- [Rules](https://opencode.ai/docs/rules/)
- [Tools](https://opencode.ai/docs/tools/)
- [Permissions](https://opencode.ai/docs/permissions/)
- [References](https://opencode.ai/docs/references/)
- [MCP servers](https://opencode.ai/docs/mcp-servers/)
- [Custom tools](https://opencode.ai/docs/custom-tools/)
- [Plugins](https://opencode.ai/docs/plugins/)
- [Configuration](https://opencode.ai/docs/config/)
