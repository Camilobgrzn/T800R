# Investigación: aprobación humana de acciones peligrosas en harnesses de agentes

- Fecha de consulta: 2026-09-29.
- Motivo: la persona cuestionó, al discutir `REV-2026-110`, si exigir una
  aprobación humana firmada criptográficamente (S11 l. 133-137, ADR-010 punto 14)
  es una práctica común o sobreingeniería para el MVP.
- Pregunta: ¿los harnesses de referencia exigen aprobación firmada antes de que un
  agente ejecute acciones de alto riesgo, o la norma es prompt interactivo, listas
  de permisos y sandbox?

## Harnesses de agentes de código

| Harness | Mecanismo de aprobación | Firma criptográfica | Fuente |
| --- | --- | --- | --- |
| Claude Code | Modos `default`, `acceptEdits`, `plan`, `auto`, `dontAsk`, `bypassPermissions`; reglas allow/ask/deny (deny > ask > allow), aplicadas por la CLI, no por el modelo. Aprobación = prompt en terminal. En `auto` un clasificador aprueba en lugar del humano. Hooks `PreToolUse`/`PermissionRequest` pueden devolver `allow`. Sandbox Seatbelt/bubblewrap. | No | [Permissions](https://code.claude.com/docs/en/permissions), [Permission modes](https://code.claude.com/docs/en/permission-modes), [Hooks](https://code.claude.com/docs/en/hooks), [Sandboxing](https://code.claude.com/docs/en/sandboxing) |
| OpenAI Codex | Modos Auto (default), Read-only, Full access; perfiles `:read-only`, `:workspace`, `:danger-full-access`; sandbox Seatbelt/bwrap+seccomp; red apagada por defecto; «Auto-review» con agente revisor. Aprobación = prompt. | No | [Agent approvals and security](https://developers.openai.com/codex/agent-approvals-security), [Permissions](https://learn.chatgpt.com/docs/permissions.md) |
| OpenCode | allow/ask/deny por herramienta con patrones («last matching rule wins»); prompt once/always/reject. | No | [Permissions](https://opencode.ai/docs/permissions/) |
| Cursor | Auto-review (clasificador), Allowlist o Run Everything; declara que no es una frontera de seguridad. | No | [Run modes](https://cursor.com/docs/agent/security/run-modes) |
| GitHub Copilot coding agent | Botón «Approve and run workflows»; desde 2026-03 el administrador puede desactivarlo. | No | [Changelog 2026-03-13](https://github.blog/changelog/2026-03-13-optionally-skip-approval-for-copilot-coding-agent-actions-workflows/) |
| Google Jules | Aprobación de plan en la UI, con auto-aprobación por temporizador. | No | [Review plan](https://jules.google/docs/review-plan/) |
| Devin CLI | Read/Write/Exec/Fetch allow/ask/deny; modos Smart (modelo rápido juzga), Bypass, Autonomous + sandbox. | No | [Permissions](https://docs.devin.ai/cli/reference/permissions) |
| OpenHands | AlwaysConfirm / NeverConfirm / ConfirmRisky con `LLMSecurityAnalyzer`; issue abierta porque el analizador confía en el riesgo autodeclarado por el modelo. | No | [Security](https://docs.openhands.dev/sdk/guides/security), [issue #4157](https://github.com/OpenHands/software-agent-sdk/issues/4157) |
| Aider | Confirmación en terminal; `--yes-always` no ejecuta comandos sugeridos por el modelo. | No | [Options](https://aider.chat/docs/config/options.html), [issue #3903](https://github.com/Aider-AI/aider/issues/3903) |

## Precedentes con firma o regla de dos personas fuera de agentes

| Mecanismo | Qué se firma o autentica | Fuente |
| --- | --- | --- |
| GitHub Environments: required reviewers, prevent self-review | Identidad autenticada de plataforma (clic en la UI); sin firma. | [Deployments and environments](https://docs.github.com/en/actions/reference/workflows-and-actions/deployments-and-environments), [Reviewing deployments](https://docs.github.com/actions/managing-workflow-runs/reviewing-deployments) |
| Commits y tags firmados en Git | Firma real GPG/SSH/S-MIME del artefacto; exigible por rama. | [About commit signature verification](https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification), [Git signing](https://git-scm.com/book/en/v2/Git-Tools-Signing-Your-Work) |
| Sigstore policy-controller / Kyverno `verifyImages` | Firma cosign y atestaciones del artefacto en admisión Kubernetes; no una aprobación humana. | [policy-controller](https://docs.sigstore.dev/policy-controller/overview/), [Kyverno](https://kyverno.io/docs/policy-types/cluster-policy/verify-images/overview/) |
| SLSA | Provenance firmada por la plataforma de build; «two trusted persons» sólo en Source Track L4, sin exigir formato firmado. | [Requirements v1.0](https://slsa.dev/spec/v1.0/requirements), [Source requirements](https://slsa.dev/spec/draft/source-requirements) |
| Vault Control Groups, HCP Terraform | Multiautorizador y «Needs Confirmation» por usuarios autenticados; sin firma. | [Control groups](https://developer.hashicorp.com/vault/docs/enterprise/control-groups), [Run states](https://developer.hashicorp.com/terraform/cloud-docs/run/states) |

## Propuestas de aprobación firmada para agentes (2024-2026)

- *Loopjacking* (arXiv, sep-2026): ataques a human-in-the-loop por sustitución
  posterior a la aprobación; la defensa propuesta es render canónico y comparación
  exacta en el momento de uso, no una firma.
  [arxiv.org/abs/2609.21081](https://arxiv.org/abs/2609.21081)
- Project-mAIstro #329 (ago-2026, abierta): aprobación firmada con passkey/WebAuthn
  sobre digest canónico más Rekor.
  [issue #329](https://github.com/Agent-StrongHold/Project-mAIstro/issues/329)
- OpenShomer #102 (sep-2026): gate HITL con HMAC-SHA256.
  [issue #102](https://github.com/kavix/OpenShomer/issues/102)
- Ecosistema de «action receipts» firmados (AgentLock, Nobulex, Etch, HumanLayer,
  Entra Agent ID):
  [awesome-ai-agent-governance](https://github.com/systempromptio/awesome-ai-agent-governance)
- Identidad de agente SPIFFE/SVID: autentica al agente, no la aprobación humana.
  [HashiCorp blog](https://www.hashicorp.com/en/blog/spiffe-securing-the-identity-of-agentic-ai-and-non-human-actors)
- MCP authorization (2026-07-28): OAuth 2.1 con consentimiento en el authorization
  server; los tool calls llevan bearer token, no firma del usuario.
  [MCP authorization](https://modelcontextprotocol.io/docs/2026-07-28/tutorials/security/authorization)

## Veredicto

- Lo común: prompt interactivo, listas allow/ask/deny, sandbox del sistema
  operativo y, desde 2026, un clasificador que aprueba por sí solo.
- Lo raro: aprobación humana firmada. No existe en ningún harness comercial;
  aparece sólo en issues, papers y productos nicho de «receipts».
- Donde hay firma (commits, imágenes, provenance) se firma el artefacto para
  verificación offline entre partes que no se confían. La regla de dos personas
  real se resuelve con identidad autenticada de plataforma.
- Para un solo humano en repositorios propios, la firma de un digest es
  sobreingeniería como ceremonia: el atacante relevante es la inyección de prompt
  sobre el mismo agente, y una firma no impide que la persona firme lo que le
  muestran (*Loopjacking*). Sí conserva una propiedad que ningún prompt tiene: el
  agente no puede fabricarla, porque la clave privada no está a su alcance.
- La firma aporta valor real en organizaciones: no repudio, separación
  agente/aprobador, aprobación asíncrona fuera de la terminal y evidencia
  auditable. Si se usa, lo defendible es firmar un digest canónico y verificarlo
  en el momento de ejecución, no sólo en el de aprobación.

## Efecto en el canon

La persona decidió el 2026-09-29 el «camino 2»: la aprobación del MVP es una
decisión persistente en el ledger creada por un comando humano explícito
(perfil `local`), y SSHSIG/FIDO pasa a ser el perfil `signed`, activable por
política. El registro canónico está en
[S12](definition/session-12-validation-convergence.md#decisiones); las enmiendas
en [S11](definition/session-11-mvp-architecture.md#decisiones) l. 133-137 y
[ADR-010](adr/ADR-010-arquitectura-tecnica-del-mvp.md) punto 14; la resolución de
`REV-2026-110` en
[reviews](reviews/2026-09-25-REV-2026-110-raiz-de-confianza-inicial-de-politica-y-aprobadores-sin-bootstrap.md).
