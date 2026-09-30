# Anotación de revisión

- ID de anotación: `REV-2026-082`
- Unidad y ubicación: `ADR-005` — [«Glosario rápido»](../adr/ADR-005-contrato-portable-de-contexto.md#glosario-rápido)
  (l. 14, 18), [«Contexto»](../adr/ADR-005-contrato-portable-de-contexto.md#contexto)
  (l. 28-31) y [«Alternativas evaluadas»](../adr/ADR-005-contrato-portable-de-contexto.md#alternativas-evaluadas)
  (l. 39-41), frente a [S06](../definition/session-06-context.md) l. 15, 43,
  47, 50, 54-55, 59-60, a [ADR-004](../adr/ADR-004-contrato-portable-de-handoffs.md)
  l. 14, 16, 18 y 95-97, a [ADR-003](../adr/ADR-003-ciclo-operativo-y-coordinacion.md)
  l. 66, a [ADR-007](../adr/ADR-007-contrato-de-capacidades-y-adapters-portables.md)
  l. 14, a [ADR-010](../adr/ADR-010-arquitectura-tecnica-del-mvp.md) l. 23-24 y a
  [S11](../definition/session-11-mvp-architecture.md) l. 106 y 166. Bloque `B041`.
- Revisión examinada: estado de los archivos al 2026-09-25 (repositorio sin
  commits; ADR-005 fechado 2026-09-18, «Aceptada»; S06 cerrada el
  2026-09-18). Citas distintivas: «artefacto separado del handoff que reúne una
  síntesis operativa y referencias al material necesario para una tarea o
  capacidad» (l. 14); «integración que traduce capacidades de un proveedor sin
  cambiar la semántica común» (l. 18); «ADR-004 establece que el handoff conserva
  intención, autoridad, lifecycle y ownership» (l. 29-30); «Contexto libre
  decidido por cada adapter | … | Descartada.» (l. 41).
- Tipo: `incompleto`
- Gravedad: `baja`
- Estado: `deferred`
- Confianza: `alta` sobre los hechos textuales; `media` sobre el impacto (ADR-007
  y ADR-010 sólo por su glosario; S11 sólo l. 106 y 166)
- Impacto: qué entiende un lector por «context packet» y «adapter» cuando cuatro
  ADR los definen de forma distinta; dónde cree que vive el ownership (en el
  handoff o en la tarea del work tracker); y el registro con estado de una
  alternativa descartada. No cambia ningún acuerdo.

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (divergencias internas; no se invoca fuente
  externa).
- Fuente primaria: `docs/adr/ADR-005-contrato-portable-de-contexto.md` l. 1-64
  (bloque y frontera); `docs/definition/session-06-context.md` l. 1-95
  (leídas); `docs/adr/ADR-004-contrato-portable-de-handoffs.md` l. 14-18
  (búsqueda) y l. 90-109 (leídas); `docs/adr/ADR-003-ciclo-operativo-y-coordinacion.md`
  l. 58-79 (leídas); `docs/definition/session-11-mvp-architecture.md` l. 106 y
  166 (leídas); búsqueda de definiciones de glosario «\*\*Adapter|\*\*Context
  packet|\*\*Manifest|\*\*Marcador|\*\*Progressive» en `docs/` salvo `reviews/`
  (ADR-004 l. 16, 18; ADR-005 l. 14-18; ADR-007 l. 14; ADR-010 l. 23);
  `docs/adr/ADR-010-arquitectura-tecnica-del-mvp.md` l. 12-27 (leídas); búsqueda
  de «adapter» en S06 (l. 50, 54, 57 y 125).
- Sección o localizador: ver arriba.
- Fecha de consulta/publicación: consulta 2026-09-25; ADR-005 y S06 fechados
  2026-09-18; ADR-004 2026-09-16.
- Hecho observado:
  1. **«Context packet» tiene dos definiciones de glosario con alcance
     distinto.** ADR-004 l. 16: «conjunto acotado de material de trabajo
     preparado para una ejecución». ADR-005 l. 14: material «necesario para una
     tarea o capacidad», como S06 l. 8. S06 l. 47 hace reutilizable el packet
     entre sesiones («Si coinciden, se reutilizará el packet sin releer
     secciones»), lo que contradice «preparado para una ejecución». Ninguno de
     los dos glosarios remite al otro. ADR-005 es el que coincide con la unidad;
     la divergencia está en ADR-004 (cerrado por análisis en `B038`-`B040`, sin
     que se registrara este punto).
  2. **«Adapter» tiene cuatro definiciones, y la de ADR-005 es más estrecha que
     lo que S06 le asigna.** ADR-004 l. 18: «traduce identidad, entrega o
     capacidades de un proveedor sin cambiar la semántica canónica»; ADR-005
     l. 18: «traduce capacidades de un proveedor sin cambiar la semántica
     común»; ADR-007 l. 14: «traduce entre los contratos T800R y las primitivas
     de un proveedor sin cambiar su significado»; ADR-010 l. 23-24:
     «implementación de un puerto para una herramienta o proveedor concreto».
     En S06 el adapter no sólo traduce: «añadirá los límites y las estimaciones
     cuantitativas disponibles y reservará capacidad» (l. 50), y puede alojar
     optimizaciones que reducen la salida (l. 54). En S11 l. 166 «recibe una
     proyección temporal identificada y registra transformación y omisiones».
     Con los límites que aporta, el adapter decide si lo obligatorio «cabe» y,
     por tanto, si el packet es `ready` o `invalid` (`REV-2026-048` hecho 3).
     Eso cambia el resultado observable, no sólo la forma, lo que la definición
     de l. 18 («sin cambiar la semántica común») no recoge.
  3. **El «Contexto» atribuye a ADR-004 que el handoff «conserva» ownership y
     lifecycle, y ADR-004 no lo dice así.** ADR-005 l. 29-30: «ADR-004 establece
     que el handoff conserva intención, autoridad, lifecycle y ownership».
     ADR-004 punto 10 (l. 95-97) sólo establece que transporte y packet no
     conceden «autoridad, permisos u ownership» ni cambian «el lifecycle». Su
     glosario (l. 14) dice que el handoff conserva «su lifecycle y resultado»,
     es decir, el del propio handoff. El ownership pertenece a la tarea: «Cada
     tarea tiene un owner activo» (ADR-003 l. 66). En la arquitectura, el cambio
     de owner es una operación condicional del work tracker, y el ledger «no
     [conserva] otra versión autoritativa» (S11 l. 106). S06 l. 16-17 formula la
     separación en negativo: el packet «no cambia la intención, autoridad,
     lifecycle, permisos ni ownership», sin decir quién los conserva. La
     paráfrasis de l. 29-30 convierte una prohibición en una atribución de
     custodia.
  4. **Dos de las tres alternativas descartadas tienen fila `rejected` en S06;
     la tercera no, y un rechazo de S06 no figura como alternativa.** «Paquete
     exhaustivo único» (l. 39) corresponde a S06 l. 60 (`rejected`), y
     «Contratos separados por tipo de trabajo» (l. 40) a S06 l. 59
     (`rejected`). «Contexto libre decidido por cada adapter» (l. 41) no tiene
     fila: S06 sólo lo excluye de forma implícita en la justificación de l. 43
     («Mantiene portabilidad entre proveedores»). A la inversa, S06 l. 55
     rechaza «Hacer obligatorias RTK, Context Mode o herramientas concretas
     equivalentes», y la tabla del ADR no incluye esa opción. Es el patrón de
     `REV-2026-078` hecho 4 (ADR-004: dos de tres con fila). Mejora respecto de
     ADR-001-003 (`REV-2026-064`, `067`, `071`).
- Inferencia (si aplica): quien lea sólo los glosarios puede suponer que un
  packet no sobrevive a su ejecución y que un adapter no influye en el estado del
  packet. Quien lea sólo el «Contexto» puede buscar el owner vigente en el
  handoff en lugar de en la tarea del work tracker. Ninguna de las tres lecturas
  coincide con S06 ni con S11.

## Observación y propuesta

- Observación: son divergencias de resumen, como en `REV-2026-063`, `073` y
  `078`. Aquí se añaden dos rasgos: los homónimos cruzan cuatro ADR, y el
  «Contexto» atribuye a otro ADR una frase que éste no contiene.
- Propuesta concreta: que la persona decida si (a) se fija una única definición
  de «context packet» y otra de «adapter» y los demás glosarios remiten a ella
  (por ejemplo, ADR-005 para el packet y ADR-007 para el adapter), o si cada ADR
  declara que su glosario es local; (b) ADR-005 l. 18 reconoce que el adapter
  aporta límites que afectan a la suficiencia, o remite a S06 l. 50;
  (c) l. 29-31 se reescribe en los términos de ADR-004 punto 10 («ni el
  transporte ni el packet conceden autoridad, permisos u ownership ni cambian el
  lifecycle; el ownership pertenece a la tarea, ADR-003 punto 6»); y (d) la
  alternativa «Contexto libre decidido por cada adapter» se registra como
  `rejected` en S06, o se acepta que basta la justificación de l. 43. No editar
  ADR-004, ADR-005 ni S06 sin esa decisión.
- Contraargumento o coste/riesgo: los glosarios son ayudas de lectura y cada ADR
  define el término en su ámbito. «Conserva» puede leerse como «es el
  artefacto donde se expresan». S11 persiste el handoff en el mismo work
  tracker que el owner, de modo que en la práctica no hay dos fuentes. El
  descarte del contexto libre por adapter está en la «Decisión» de S06 (l. 43)
  y en el objetivo. El coste de corregirlo es de unas pocas palabras.

## Análisis adicional

- Evidencia interna: hechos 1-4 con sus localizadores. l. 31-33 («ADR-003 exige
  reconciliar estado real, permisos y ownership antes de ejecutar») sí tiene
  respaldo en ADR-003 punto 5 (l. 62-63: la sesión, «Antes de ejecutar
  reconcilia contexto mínimo, repositorio, estado, evidencia, permisos y
  ownership»). No atribuye la reconciliación al orchestrator, de modo que no
  hereda `REV-2026-080`, y queda fuera del hallazgo.
- Contraevidencia y límites: no se leyeron ADR-007 ni ADR-010 fuera de sus
  glosarios; pueden declarar que sus definiciones prevalecen. No se comprobó
  cómo usan el término «adapter» S08 ni ADR-008. La reutilización del packet
  (hecho 1) debe conciliarse además con S11 l. 166, que persiste «cada context
  packet ensamblado» inmutable por digest (pregunta 1 de `B041`).
- Pregunta para resolver: ¿qué glosario prevalece para «context packet» y
  «adapter»? ¿Debe el glosario de ADR-005 recoger que el adapter aporta límites
  que deciden la suficiencia? ¿Debe l. 29-31 reproducir ADR-004 punto 10 en
  lugar de atribuir al handoff la custodia del ownership? ¿Se registra como
  `rejected` en S06 la alternativa del contexto libre por adapter?

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: [B041](blocks/B041.md), [B038](blocks/B038.md),
  [B024](blocks/B024.md),
  [`REV-2026-046`](2026-09-24-REV-2026-046-referencia-del-handoff-al-context-packet-sin-campo-en-ningun-contrato-s06-parte-de-adr-004-sin-acuse-de-s05-l66-y-packet-sucesor-inalcanzable-desde-references-inmutable.md),
  [`REV-2026-048`](2026-09-24-REV-2026-048-presupuesto-del-context-packet-budget-profile-sin-definicion-no-cabe-sin-limites-del-adapter-y-manifest-del-nucleo-sin-prioridad-ni-granularidad-de-material.md),
  [`REV-2026-049`](2026-09-24-REV-2026-049-nucleo-del-context-packet-frente-a-handoff-v1-homonimos-sin-enlace-schema-sin-identificador-ni-version-y-producer-consumer-sin-modelo-de-identidad-con-capacidad-como-destinatario.md),
  [`REV-2026-063`](2026-09-25-REV-2026-063-glosario-de-adr-001-redefine-harness-y-repositorio-consumidor-frente-a-s01-y-contrato-de-trabajo-sin-artefacto.md),
  [`REV-2026-073`](2026-09-25-REV-2026-073-glosario-de-adr-003-define-incremento-como-autorizado-frente-a-incrementos-en-plan-y-drafts-de-maintain-y-ciclo-con-stage-y-status-sin-definir.md),
  [`REV-2026-078`](2026-09-25-REV-2026-078-glosario-y-contexto-de-adr-004-excluyen-el-handoff-del-mismo-actor-omiten-la-revision-humana-y-alternativa-conversacional-sin-fila-en-s05.md),
  [`REV-2026-080`](2026-09-25-REV-2026-080-consecuencias-de-adr-004-asignan-al-orchestrator-la-reconciliacion-previa-sin-fila-en-s05-y-aplicar-ambiguo-entre-aceptacion-y-seguimiento.md),
  cruces `CT03` y `CT05`.

## Preguntas pendientes

Ver el checkpoint [B041](blocks/B041.md).

## Cobertura y límites

Ver el checkpoint [B041](blocks/B041.md). Sin fuentes externas en esta anotación.
