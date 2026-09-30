# Anotación de revisión

- ID de anotación: `REV-2026-007`
- Unidad y ubicación: índice rector (bloque `B003`) —
  [Criterio de cierre de la definición](../product-definition.md#criterio-de-cierre-de-la-definición),
  cita distintiva: «exista una arquitectura técnica implementable;»
  (`docs/product-definition.md:160`)
- Revisión examinada: estado del archivo al 2026-09-21 («Última actualización:
  2026-09-21», línea 6); repositorio sin commits, sin SHA disponible
- Tipo: `incompleto`
- Gravedad: `media`
- Estado: `deferred`
- Confianza: `media`
- Impacto: determina si la definición puede declararse cerrada sin un flujo de
  adopción y actualización acordado, y si las once condiciones equivalen o no a
  «las doce sesiones completadas»

## Clasificación de evidencia

- Clase: `hallazgo fundamentado` (omisión exclusivamente interna)
- Fuente primaria: fuentes internas; no aplica fuente externa
  - `docs/product-definition.md:150-165` (criterio de cierre)
  - `docs/product-definition.md:57-70` (plan de sesiones y resultados esperados)
  - `docs/product-definition.md:21-27` (acuerdos iniciales 1, 2 y 4)
  - `docs/product-definition.md:147-148` (pregunta abierta sobre actualización)
- Sección o localizador: ver arriba
- Fecha de consulta/publicación: consultado el 2026-09-21
- Hecho observado: correspondencia entre las once condiciones y los resultados
  esperados de las doce sesiones:

  | Condición (línea) | Sesión cuyo resultado la acredita |
  | --- | --- |
  | objetivo y límite inequívocos (154) | 1 y 2 |
  | fuente canónica por tipo de información (155) | 3 (y 7 de forma indirecta) |
  | lifecycle, context packet y handoff (156) | 4, 6 y 5 |
  | contrato portable para los tres agentes (157) | 8 |
  | baseline de seguridad (158) | 9 |
  | MVP separado de capacidades futuras (159) | 11 («componentes aplazados») |
  | arquitectura técnica implementable (160) | 11 |
  | pruebas de aceptación de T800R y del piloto (161) | 12 |
  | revisión transversal de prácticas (162-163) | transversal |
  | incógnitas no bloqueantes (164) | transversal |
  | backlog ordenado por dependencias (165) | 12 |

  Ninguna condición corresponde al resultado de la sesión 10, «Flujo de adopción»
  (instalación, configuración, CLI, `init`, `doctor`, sincronización y
  actualización; línea 68). Tampoco hay una condición que exija haber completado
  las doce sesiones, ni que nombre el «Modelo de conocimiento» de la sesión 7.
- Inferencia (si aplica): el producto se define como «toolkit reusable para
  incorporar un harness multiagente en otros repositorios» (acuerdo 1) y su
  validación exige «la adopción en otro repositorio real» (acuerdo 4). El riesgo
  propio de ese objetivo es la adopción y la actualización en repositorios
  consumidores, que además figura como pregunta abierta («¿Cómo se actualizará
  T800R en repositorios consumidores sin sobrescribir sus personalizaciones?»,
  147-148). Con la redacción actual, las once condiciones podrían darse por
  cumplidas sin ningún acuerdo sobre ese flujo: el criterio no cubre un riesgo
  central del objetivo declarado.

## Observación y propuesta

- Observación: el criterio de cierre es un subconjunto de los resultados del plan
  de sesiones y deja fuera el de la sesión 10; la relación entre «criterio
  cumplido» y «sesiones completadas» no está declarada.
- Propuesta concreta (para decisión humana, sin editar el canon): elegir una de
  estas opciones y registrarla:
  1. añadir una condición del tipo «exista un flujo de adopción y actualización
     para repositorios consumidores»; o
  2. declarar que el criterio incluye la finalización de las doce sesiones con su
     criterio de salida cumplido, de modo que la lista sea un resumen y no la
     definición completa; o
  3. declarar de forma explícita que el flujo de adopción puede quedar diferido
     tras el inicio de la construcción, con la evidencia que permitiría resolverlo
     (según la regla de aplazamiento de las líneas 51-53).
- Contraargumento o coste/riesgo: la condición de las pruebas de aceptación «para
  T800R y el repositorio piloto» (161) presupone de forma implícita un modo de
  adoptar el piloto, y «arquitectura técnica implementable» puede leerse como
  inclusiva de la CLI. El plan de sesiones ya obliga a pasar por la sesión 10
  antes de la 12, por lo que el riesgo práctico es bajo mientras el orden se
  respete. La omisión importa sobre todo si se reordena, fusiona o difiere la
  sesión 10, o si el criterio se usa como lista de verificación autónoma.

## Análisis adicional

- Evidencia interna:
  [criterio de cierre](../product-definition.md#criterio-de-cierre-de-la-definición);
  [plan de sesiones](../product-definition.md#sesiones-de-definición);
  [acuerdos iniciales](../product-definition.md#acuerdos-iniciales);
  [preguntas de producto aún abiertas](../product-definition.md#preguntas-de-producto-aún-abiertas).
- Contraevidencia y límites: la correspondencia de la tabla es una lectura del
  revisor; «MVP separado de capacidades futuras» también podría acreditarse en la
  sesión 2. No se leyeron las unidades S01–S08 para comprobar si alguna ya trata la
  adopción; la anotación se limita a lo que el criterio exige, no a lo que las
  sesiones producirán. Relacionada, sin duplicarla, con
  [REV-2026-004](2026-09-21-REV-2026-004-preguntas-abiertas-sin-disposicion.md)
  (la pregunta de actualización carece de destino) y con
  [REV-2026-006](2026-09-21-REV-2026-006-criterio-de-cierre-sin-autorizacion-ni-verificador.md).
- Pregunta para resolver: ¿puede comenzar la construcción sin un flujo de adopción
  y actualización acordado? Si no, ¿se añade como condición o se declara que el
  criterio presupone las doce sesiones completadas?

## Nota de vigencia (2026-09-25, pasada 2 de `B003`)

- Resultado: **cerrada en su núcleo por cambio del canon**, con un residuo
  menor que se traslada a `REV-2026-006` y a `CT07`. Es una valoración del
  análisis. El campo «Estado» sigue `propuesto` porque sólo una persona
  registra la disposición. El contenido de arriba se conserva como constancia de
  la base del 2026-09-21.
- Base comparada: `docs/product-definition.md` de 204 líneas («Última
  actualización: 2026-09-24», l. 6); criterio en l. 146-163. La cita
  distintiva «exista una arquitectura técnica implementable;» está hoy en
  l. 158 (antes 160).
- Evidencia del cierre:
  1. El criterio incluye hoy la condición «exista un flujo verificable de
     adopción, actualización y retiro que preserve fuentes canónicas y
     personalizaciones del repositorio consumidor» (l. 155-156). Coincide con la
     propuesta 1 de arriba y además recoge la preocupación de la antigua
     pregunta abierta sobre personalizaciones y el retiro que trata S10.
  2. La sesión 10, cuyo resultado era el que faltaba, está cerrada. Su cierre
     declara cubiertos «adopción escalonada», «sincronización, actualización y
     reconciliación», «retiro» y «colisiones», con doce escenarios de
     validación (S10 l. 154-160). No se comprobó aquí la calidad de esa
     cobertura, que corresponde a su propio análisis.
  3. La relación entre «criterio cumplido» y «doce sesiones completadas» queda
     acotada fuera del índice: S11 l. 50 y el tracker de definición l. 22-23
     condicionan la autorización al cierre de S12, que es la última sesión.
- Residuo, sin anotación nueva:
  1. El índice sigue sin declarar esa relación. Existen dos criterios
     solapados, el global (l. 146-163) y el de salida de S12 (l. 45-50), sin
     regla que diga cuál comprueba S12 l. 41. Se incorpora al residuo de
     `REV-2026-006`.
  2. Ninguna condición nombra el «Modelo de conocimiento» de S07. La l. 151
     («cada tipo de información tenga una fuente canónica») lo cubre de forma
     indirecta. No se considera defecto.
  3. La fila 10 del plan (l. 68) no enumera «retiro», aunque el criterio lo
     exige: es la pregunta 1 de la pasada 2 de `B001`, no se duplica aquí.
- Límite: S12 sigue `in_progress` y puede volver a cambiar el criterio.

## Resolución humana

- Decisión y justificación: `deferred`. Cerrada en bloque el 2026-09-30 por la decisión «Perfil MVP mínimo» de S12: el área afectada pasa al backlog de arquitectura objetivo ([backlog-ideas.md](../backlog-ideas.md)) y la anotación se retomará cuando el uso del MVP muestre el problema o el área salga del backlog. La evidencia y la propuesta se conservan sin cambios.
- Responsable y fecha: la persona (Camilo Barreto), 2026-09-30.
- Enlace al cambio canónico o ADR: [S12 «Decisiones»](../definition/session-12-validation-convergence.md#decisiones), fila «Perfil MVP mínimo»; [backlog-ideas.md](../backlog-ideas.md).
- Enlaces relacionados: <pendiente>
