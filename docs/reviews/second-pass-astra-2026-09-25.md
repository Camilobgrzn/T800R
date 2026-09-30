# Segunda pasada adversarial total con Astra

## Estado

- Fecha: 2026-09-25.
- Alcance autorizado por la persona: segunda pasada total e independiente sobre
  S01-S12, ADR-001-010, indice rector, tracker y cruces aplicables.
- Analisis: `reviewed` sobre la base local observada; no habia commit disponible
  para identificarla por SHA.
- Discusion humana: `en curso` desde el 2026-09-29. Resueltos: `REV-2026-110`
  (`accepted`, con reconsideración del perfil de aprobación del MVP; ver
  [S12](../definition/session-12-validation-convergence.md#decisiones)).
  `REV-2026-105` (`accepted` el 2026-09-30: predicado de elegibilidad del
  verifier en S12). `104`, `106`-`109` y `111`: `deferred` el 2026-09-30 por la
  decisión «Perfil MVP mínimo» de S12, con destino
  [backlog-ideas.md](../backlog-ideas.md). Discusión cerrada.
- Efecto: esta pasada no modifica ni acepta acuerdos. Sus anotaciones permanecen
  `propuesto` hasta que la persona las resuelva.

## Ejecucion

Sol coordino cuatro revisiones primarias no solapadas con `t800r-astra`:

| Ambito primario | Sesion Astra | Resultado |
| --- | --- | --- |
| S01-S03 y ADR-001-002 | `ses_f25a9a35cffetjKq7cyx0yZABh` | Tres candidatos; dos duplicados y uno retirado tras deduplicacion. |
| S04-S07 y ADR-003-006 | `ses_f25a9a29bffexfTUpLXQtDL7vX` | Contratos revisados; los candidatos principales ya estaban cubiertos. |
| S08-S10 y ADR-007-009 | `ses_f25a9a1f0ffei9gT4VpuVkna1w` | Seis candidatos y preguntas; depuracion posterior focalizada. |
| S11-S12, ADR-010, indice y tracker | `ses_f25a9a129ffevccuKohJgSdeBc` | Tres candidatos nuevos, una pregunta y ampliaciones de REV existentes. |

Las instancias que agotaron su ventana antes de deduplicar se sustituyeron por
revisiones focalizadas nuevas. La clasificacion final de `freshness` e
independencia del verifier se completo en `ses_f243c14d3ffdsdvC0QL04WAYLj`;
bootstrap, identidad, retiro y `doctor` se contrastaron en
`ses_f243c14ceffdT4bev0UQiqzegl` y las lecturas anteriores.

## Resultados nuevos

| ID | Gravedad | Resultado |
| --- | --- | --- |
| [REV-2026-104](2026-09-25-REV-2026-104-restriccion-operativa-de-seleccion-tecnologica-sin-conciliacion-con-s11.md) | media | La instruccion operativa prohibe seleccionar tecnologia durante toda la definicion, mientras S11 exige y registra esa seleccion. |
| [REV-2026-105](2026-09-25-REV-2026-105-elegibilidad-del-verifier-sin-criterio-operacional.md) | alta | Existe la obligacion de independencia, pero no el predicado portable que decide elegibilidad. |
| [REV-2026-106](2026-09-25-REV-2026-106-runner-sin-precondicion-explicita-de-admision-del-workspace.md) | alta | El runner excluye credenciales del entorno, pero no concreta la admision del contenido sensible ya presente en el workspace montado. |
| [REV-2026-107](2026-09-25-REV-2026-107-adapters-como-consumidores-de-casos-de-uso-sin-frontera-precisa.md) | media | La API permite invocaciones desde adapters sin distinguir su clase ni su encaje en el grafo. |
| [REV-2026-108](2026-09-25-REV-2026-108-retiro-desactiva-operaciones-antes-de-ubicar-su-gate.md) | media | S10 ubica una desactivacion antes de inspeccionar y proponer, mientras `remove` no produce efectos por defecto. |
| [REV-2026-109](2026-09-25-REV-2026-109-doctor-de-solo-lectura-con-efectos-de-reparacion-y-gc.md) | alta | `doctor` es de solo lectura, pero S11 le atribuye cuarentena, recuperacion y recoleccion. |
| [REV-2026-110](2026-09-25-REV-2026-110-raiz-de-confianza-inicial-de-politica-y-aprobadores-sin-bootstrap.md) | alta | No se identifica como se establece y acredita la primera politica que declara a sus propios aprobadores. |
| [REV-2026-111](2026-09-25-REV-2026-111-oraculo-de-presencia-y-hardware-en-sshsig-fido.md) | no aplica | Pregunta tecnica: separar la prueba de firma, autoridad, presencia humana y procedencia hardware. |

## Deduplicacion

No se abrieron anotaciones nuevas para estos resultados porque ya estaban
cubiertos: memoria de continuidad (`REV-2026-103`), registro de fuentes
(`REV-2026-056`/`070`), liberacion de ownership (`REV-2026-090`), aceptante
desaparecido (`REV-2026-042`/`081`), composicion de reconciliaciones
(`REV-2026-096`), recarga parcial de packets (`REV-2026-051`/`046`), frescura
temporal (`REV-2026-059`), `current` frente a `draft` (`REV-2026-094`),
condiciones de carga (`REV-2026-084`) y conformidad asignada a S12
(`REV-2026-100`/`102`).

La pasada aporta ademas evidencia para discutir, sin crear otro hallazgo:

- `REV-2026-100`: ADR-010, punto 15, conserva la certificacion en S12.
- `REV-2026-102`: los objetivos observables de S01 deben aparecer en el
  inventario de entrada y en los escenarios de valor, no solo seguridad.
- `REV-2026-101`: la persona ya eligio una segunda pasada total, pero su
  resolucion sigue pendiente hasta comprobar y discutir esta cobertura.

## Preguntas no elevadas

- Si crear un `actor_id` logico cae bajo el minimo de aprobacion para crear
  identidades de seguridad. La evidencia admite ambas lecturas.
- Consumo y recuperacion de aprobaciones ante concurrencia o efecto incierto.
- Retiro de componentes con handoffs u obligaciones durables pendientes.
- Recorrido de aceptacion de la incorporacion asistida de fuentes. Los contratos
  permiten realizarlo, pero S12 debe demostrarlo.

## Cobertura y limites

- Los cuatro grupos primarios leyeron completas sus sesiones y ADR asignados; los
  cruces posteriores se limitaron a las dependencias de cada candidato.
- Las fuentes externas solo se usaron cuando un resultado dependia de ellas. La
  unica pregunta externa nueva es `REV-2026-111`; no se reauditaron todas las
  atribuciones historicas ya cubiertas por la primera revision.
- No se ejecuto codigo, no se instalaron dependencias y no se certifico ningun
  adapter.
- S12 sigue `in_progress`; un cambio posterior del canon exige revalidar los
  localizadores afectados antes de resolver estas anotaciones.

## Orden sugerido para discusion

1. `REV-2026-110`, `105` y `106`: raiz de confianza y gates de seguridad.
2. `REV-2026-109` y `108`: efectos de mantenimiento y retiro.
3. `REV-2026-107` y `104`: fronteras arquitectonicas y de proceso.
4. `REV-2026-111`: decidir si basta documentar el oraculo o si requiere un spike
   tecnico aprobado.
