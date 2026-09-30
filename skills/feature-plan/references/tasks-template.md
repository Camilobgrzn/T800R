# Plantilla de `features/<id>/tasks.md`

Estado operativo mutable. Lo inicializa `/feature-plan` una sola vez; después
**sólo el orchestrator** lo edita. No forma parte del digest autorizado.

```markdown
# Tareas: <id>

plan_digest_autorizado: <se rellena al registrarse build … authorized>

| Tarea | Estado | Owner (actor_id) | Depende de | Ronda | Última actualización | Nota |
| --- | --- | --- | --- | --- | --- | --- |
| T1 | pending | | | 0 | <YYYY-MM-DD> | |
| T2 | pending | | T1 | 0 | <YYYY-MM-DD> | |
```

Estados (S04): `pending`, `ready`, `in_progress`, `waiting`, `blocked`,
`completed`, `cancelled`.

Reglas del orchestrator:
- `pending → ready` cuando las dependencias están `completed` y `build` está
  autorizado para el digest vigente.
- `ready → in_progress` al asignar; el evento va también a `participations.md`.
- `in_progress → blocked` por `intent gap` (nota: la pregunta a la persona).
- `in_progress → completed` sólo con veredicto `pass` (o `concerns` aceptados)
  del verifier; el orchestrator registra el veredicto en `participations.md` y
  entonces cambia el estado.
- `Ronda` cuenta pares build+verify; al llegar a 3 sin `pass`, la tarea pasa a
  `blocked` con nota «rondas agotadas: cambiar contexto, tamaño o modelo».
