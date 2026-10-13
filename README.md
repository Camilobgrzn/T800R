# Rama `control` de T800R

Rama huérfana que sólo escribe la persona, desde el worktree dedicado
`../T800R-control`, nunca desde una sesión de agente (workflow §2 y §2.1 punto 9).
Registrar una aprobación aquí no cambia el SHA de nada aprobado.

## Plantilla `approvals/<feature-id>.md`

Una línea por decisión, en este catálogo (workflow §6):

```
spec <digest> approved
build <digest-plan> on spec <digest-spec> authorized
build <digest-plan> authorized                      # sólo acotado
high <digest> approved
scope <digest-plan> cancelled T<n> accepted
merge <sha-candidato> onto <sha-main-base> approved
integrated <sha-merge>
```

Spikes: `approvals/spikes.md`, una línea `spike <id> approved` por spike.

## Procedimiento por aprobación

```
printf '%s\n' '<línea>' >> approvals/<id>.md
git add -- approvals/<id>.md && git commit -m "approve: <id> <tipo>"
git show control:approvals/<id>.md
```

Una línea sin commit no abre ningún gate.
