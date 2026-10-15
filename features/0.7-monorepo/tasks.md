# Tareas: 0.7-monorepo

plan_digest_autorizado: cbc188d9c81e76bb0ec32c7fef21f1ba42d63860 (spec f0ea9d14cae7471b311c3fdad38611079e619f6d; control 321e6d7)

| Tarea | Estado | Owner (actor_id) | Depende de | Ronda | Última actualización | Nota |
| --- | --- | --- | --- | --- | --- | --- |
| T1 | completed | camilo-a1 | | 1 | 2026-10-15 | pass ronda 2 (veredicto 2e19d70); high: protected_paths, solicitud 38fcbd67… pendiente de `high … approved` antes del gate 3 |
| T2 | completed | camilo-a1 | T1 | 1 | 2026-10-15 | concerns: ver veredicto 886b3f9 (B.2-B.5, no bloqueantes) |
| T3 | pending | | T1, T2 | 0 | 2026-10-14 | paralelizable con T4, T5 |
| T4 | pending | | T1, T2 | 0 | 2026-10-14 | paralelizable con T3, T5 |
| T5 | pending | | T1, T2 | 0 | 2026-10-14 | paralelizable con T3, T4 |
