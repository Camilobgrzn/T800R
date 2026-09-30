# S09 — Sesión 9: seguridad y gobernanza

Estado: `completed`. Sesión iniciada y completada el 2026-09-22.

### Objetivo

Definir el baseline portable de seguridad y gobernanza para secretos, permisos,
rutas protegidas, aprobaciones, aislamiento y auditoría. Debe concretar los límites
de autonomía y alto riesgo ya acordados, y aplicar el contrato de capacidades de
ADR-007 sin seleccionar todavía runtime, schemas ni tecnología de enforcement.

### Punto de entrada

Delimitar primero qué controles son invariantes semánticos del núcleo y cuáles
dependen de una política del repositorio o de la realización de cada adapter. El
núcleo debe poder decidir, detener y auditar de forma comparable; la política debe
declarar las restricciones del proyecto; y el adapter debe aplicar o demostrar
esas restricciones sin inventar permisos ni garantías.

### Preguntas de la sesión

1. ¿Qué invariantes de seguridad pertenecen al núcleo y qué decisiones pertenecen
   a la política del repositorio o al adapter?
2. ¿Cómo se representan y verifican permisos efectivos sin confundir capacidad,
   autorización, identidad o credencial?
3. ¿Qué reglas impiden que secretos entren en contexto, artefactos, conocimiento,
   logs o resultados persistentes?
4. ¿Cómo se declaran rutas y acciones protegidas, y qué sucede ante solapamientos,
   ambigüedad o cambios de política?
5. ¿Qué acciones requieren aprobación humana previa y cómo se vinculan solicitud,
   decisión, alcance, vigencia y evidencia?
6. ¿Cómo se clasifica el riesgo y quién tiene autoridad para fijar o modificar sus
   límites?
7. ¿Cuándo es obligatorio el aislamiento y qué propiedades debe demostrar una
   realización para satisfacer `isolated_execution`?
8. ¿Qué eventos y evidencias exige la auditoría sin persistir contenido sensible?
9. ¿Qué degradaciones permiten trabajo independiente y qué fallos obligan a
   detener, consultar o bloquear?

### Criterio de salida

La sesión termina cuando exista un baseline lógico y portable que defina
invariantes, autoridad de política, permisos efectivos, manejo de secretos, rutas
protegidas, aprobaciones, niveles de riesgo, aislamiento, auditoría, degradación y
condiciones de parada. Debe preservar ADR-001 y ADR-003 a ADR-007, dejar los
mecanismos concretos para arquitectura y aportar requisitos verificables para la
conformidad de la sesión 12.

### Decisiones

| Tema | Estado | Decisión y justificación |
| --- | --- | --- |
| Frontera entre núcleo, política y adapter | `accepted` | El baseline se divide en tres capas. El núcleo fija invariantes portables, valida precondiciones, detiene ante ambigüedad y exige evidencia sin inventar permisos; la política del repositorio clasifica riesgos, secretos, rutas y acciones protegidas, autoridades, aprobaciones y requisitos de aislamiento; el adapter traduce y aplica esa política mediante mecanismos efectivos y, si no puede demostrar enforcement equivalente, declara la capacidad ausente y detiene la acción afectada. Esta separación mantiene garantías comparables sin imponer una política universal ni delegar su significado a cada proveedor. |
| Fijar toda la política de seguridad en el núcleo | `rejected` | Confundiría invariantes del producto con restricciones particulares de cada repositorio y reduciría la reutilización y adaptación legítima del toolkit. |
| Delegar política y garantías al adapter | `rejected` | Haría variar autorización, riesgo y condiciones de parada por proveedor, y permitiría afirmar seguridad sin una semántica portable ni una fuente de política autoritativa. |
| Permisos efectivos por intersección explícita | `accepted` | Antes de cada acción con efectos, el núcleo determina autorización para la acción, recurso y efecto solicitados mediante la intersección de la tarea y ownership autorizados, identidad y autoridad del actor, política vigente, aprobaciones aplicables y capacidad observada en el snapshot efectivo. La decisión conserva alcance, restricciones, fuentes y revisiones, vigencia y evidencia. Rige mínimo privilegio y `default deny`: una ausencia, conflicto o ambigüedad impide sólo la acción y trabajo dependiente afectados; el trabajo independiente puede continuar. Credenciales, roles, disponibilidad de herramientas y capacidades del proveedor son entradas verificables, pero no conceden autorización por sí mismos. |
| Autorizar principalmente mediante roles portables | `rejected` | Un rol no expresa por sí solo recurso, efecto, vigencia, restricciones ni aprobación aplicable, y puede conservar privilegios más amplios que los necesarios para una acción concreta. Puede participar como atributo de política, pero no sustituye la decisión efectiva. |
| Adoptar los permisos expuestos por el proveedor como autorización | `rejected` | Demuestran como máximo disponibilidad técnica o alcance de una credencial; no prueban autoridad de proyecto, ownership, aprobación ni conformidad con la política vigente. |
| Secretos mediante referencias opacas e inyección controlada | `accepted` | Los valores secretos no entran en prompts, context packets, handoffs, conocimiento, artefactos canónicos ni registros de auditoría. Estos componentes sólo pueden conservar una referencia opaca y metadatos no sensibles. La política autoriza el propósito, actor, herramienta y alcance de uso; el adapter resuelve e inyecta el valor justo al ejecutar la herramienta autorizada, con mínimo alcance y sin hacerlo visible al modelo, y sanitiza resultados antes de devolverlos o persistirlos. Si no puede impedir la exposición o demostrar el control, detiene la acción afectada. La inspección, creación o rotación de valores usa un flujo privilegiado separado sujeto a política y aprobación, sin convertir el valor en contexto del agente. |
| Permitir secretos en contexto mediante excepciones de política | `rejected` | Una vez incorporado al contexto, el valor puede propagarse a salidas, compactaciones, sesiones o servicios fuera del control portable. Una política particular no puede rebajar este invariante del núcleo. |
| Confiar en redacción posterior a la exposición | `rejected` | La redacción reduce persistencia accidental, pero no revierte la exposición al modelo o proveedor ni demuestra que no existan copias. Se conserva sólo como defensa adicional de salida. |
| Protección por recurso, acción y efecto | `accepted` | La política identifica ámbitos protegidos mediante selectores lógicos resolubles y requisitos asociados a acciones y efectos. Antes de actuar se resuelve el destino efectivo contra una base y revisión conocidas, incluidas redirecciones, enlaces, renombres y salidas generadas. Cada regla aplicable añade requisitos y ninguna de menor autoridad puede eliminar los impuestos por una fuente superior; toda excepción debe ser explícita, acotada y autorizada. Un destino dinámico no resoluble, una coincidencia conflictiva o una resolución ambigua deniega la acción afectada. Modificar la política, las rutas protegidas o sus mecanismos de enforcement también es una acción protegida. |
| Proteger sólo mediante patrones textuales de rutas | `rejected` | No cubre recursos no representados como archivo ni efectos que alcanzan un destino distinto mediante enlaces, renombres, generación o redirección. Los patrones pueden ser selectores de política, pero deben resolverse al recurso efectivo. |
| Considerar ownership suficiente para modificar un recurso | `rejected` | Ownership coordina responsabilidad y concurrencia, pero no concede autoridad de seguridad ni elimina requisitos de riesgo, aprobación o protección del recurso. |
| Aprobación como autorización persistente y acotada | `accepted` | Una aprobación previa identifica la autoridad aprobadora, el actor o clase autorizada, acción, recursos, efectos, propósito, tarea, base y revisión de política, restricciones, vigencia y número de usos. Se revalida inmediatamente antes de actuar; cambios materiales, consumo, vencimiento o evidencia de revocación la invalidan en el alcance afectado. No amplía la autoridad del aprobador, no evita prohibiciones superiores y no se infiere de una conversación, del silencio, de la recepción de un handoff ni de la autorización general de `build`. La solicitud, decisión, uso y resultado conservan correlación y evidencia auditable sin datos sensibles. |
| Usar la aprobación de una etapa para todas sus acciones sensibles | `rejected` | La autorización de `build` permite ejecutar el incremento acordado, pero no contiene necesariamente recursos, efectos, vigencia ni restricciones suficientes para autorizar operaciones sensibles concretas. |
| Tratar una confirmación efímera como aprobación suficiente | `rejected` | Sin una decisión persistente y correlacionada no puede comprobarse autoridad, alcance, vigencia, consumo ni correspondencia con la acción finalmente ejecutada. |
| Riesgo multidimensional con mínimos del núcleo | `accepted` | Cada acción efectiva se evalúa por impacto, reversibilidad, alcance, sensibilidad, exposición externa e incertidumbre y obtiene `routine`, `elevated`, `high` o `prohibited`. El núcleo fija como mínimo `high` los casos ya acordados: posible pérdida o corrupción de datos, brecha de seguridad o permisos, efecto externo irreversible, incumplimiento contractual o regulatorio, ruptura amplia de una interfaz o contrato compartido y aceptación semántica no cubierta por validación determinista. La política puede elevar niveles, añadir casos y asociar controles, pero no rebajar estos mínimos; el adapter aporta hechos y evidencia, no el veredicto final. Si falta evidencia suficiente para clasificar, se detiene la acción afectada y se consulta. |
| Clasificar mediante una lista universal de acciones o comandos | `rejected` | El mismo comando puede tener efectos, destinos y reversibilidad distintos; un catálogo fijo no representa el riesgo efectivo y queda obsoleto ante nuevos mecanismos. Puede aportar señales, pero no sustituye la evaluación. |
| Delegar la clasificación final de riesgo al adapter | `rejected` | Haría variar los límites de autonomía y revisión por proveedor y permitiría que disponibilidad o nombres locales sustituyeran el análisis portable del efecto. |
| Aislamiento como contención por propiedades | `accepted` | La política declara por acción las dimensiones de contención necesarias, entre ellas escritura, proceso, red, credenciales, datos y efectos externos. `isolated_execution` es obligatorio cuando los efectos posibles exceden el alcance autorizado y la mediación directa no puede demostrar que los impide. Una realización conforme demuestra límites efectivos, identidad y base aisladas, ausencia de credenciales no autorizadas, captura de efectos y reconciliación antes de integrar. Si falta una dimensión requerida o se detecta escape, se detiene el trabajo dependiente, se preserva el estado para diagnóstico y se invalida la evidencia afectada. Worktrees, contenedores y mecanismos de proveedor son realizaciones candidatas, no la semántica del contrato. |
| Exigir un sandbox universal para toda acción | `rejected` | Impone coste y capacidades innecesarias cuando la mediación ya limita todos los efectos autorizados, y confunde un mecanismo concreto con la garantía observable requerida. |
| Usar aislamiento sólo como mejor esfuerzo del adapter | `rejected` | Permitiría ejecutar aun cuando falte una dimensión requerida y haría depender la contención del proveedor en lugar de la política y el riesgo efectivos. |
| Auditoría mediante eventos estructurados y minimizados | `accepted` | Las evaluaciones de política, autorizaciones y denegaciones, aprobaciones, uso de referencias secretas, aislamiento, acciones protegidas, efectos, excepciones y cambios de política producen eventos correlacionados y resistentes a alteración. Registran identidades, revisiones, reglas aplicadas, alcance, decisión, evidencia y relaciones causales, pero no valores secretos, prompts ni salidas completas por defecto. Antes de una acción protegida debe persistirse su decisión; después, su resultado y efectos observados. Si falla el registro previo, no se actúa; si falla el posterior, se bloquea el trabajo dependiente y se reconcilia el efecto real antes de reintentar o recuperar evidencia. Retención, acceso y mecanismo de integridad se definirán por política y arquitectura sin rebajar este mínimo. |
| Persistir transcripciones completas como auditoría por defecto | `rejected` | Aumenta innecesariamente la exposición de secretos, datos sensibles e información de contexto y mezcla evidencia de decisiones con contenido bruto. Sólo una evidencia concreta autorizada puede conservar contenido adicional bajo clasificación y acceso explícitos. |
| Dejar la auditoría como capacidad opcional del adapter | `rejected` | Impediría demostrar decisiones y efectos de seguridad de forma portable. Un adapter que no pueda producir la evidencia obligatoria no puede ejecutar la acción protegida correspondiente. |
| `Fail closed` por alcance y recuperación reconciliada | `accepted` | Un permiso desconocido o denegado, política obsoleta, aprobación inválida, posible exposición de secreto, aislamiento insuficiente, recurso ambiguo o falta de auditoría detiene la acción y sus dependencias, no necesariamente toda la sesión. Se invalida sólo la evidencia afectada, se preserva diagnóstico y se reconcilia el estado real antes de usar política vigente, seleccionar otro adapter o continuar trabajo verificablemente independiente. Ante un posible incidente se contiene el ámbito y se notifica a la autoridad aplicable. Una acción con efecto incierto no se reintenta hasta comprobar qué ocurrió, para evitar duplicar efectos. |
| Detener globalmente ante cualquier fallo de seguridad | `rejected` | Sacrifica trabajo independiente sin reducir el riesgo del ámbito ya contenido y contradice la continuidad selectiva acordada en el ciclo operativo. Una parada global sigue siendo válida cuando no puede delimitarse el alcance afectado. |
| Continuar hasta confirmar daño | `rejected` | Trata la ausencia de evidencia como seguridad y permite acumular efectos precisamente cuando autorización, contención o estado real son inciertos. |
| Política canónica versionada con autoridad delegable | `accepted` | La política de seguridad es una fuente canónica registrada que declara ámbito, revisión, vigencia, precedencia y autoridades explícitas. La persona define o delega quién puede aprobar cambios; los agentes pueden proponerlos y aplicar cambios ya autorizados, pero no autoautorizar una ampliación de sus permisos. Cada revisión se valida y audita, entra en vigor desde un marcador identificado e invalida sólo decisiones, snapshots y evidencia impactados. Ante un incidente, T800R puede imponer contención temporal más estricta y notificarla, pero no relajar la política sin decisión de la autoridad aplicable. |
| Exigir siempre aprobación directa de la persona para cada cambio de política | `rejected` | Impediría delegar gobierno dentro de criterios explícitos y reduciría autonomía incluso para ámbitos cuya autoridad ya fue transferida de forma trazable. La persona conserva la definición inicial y las delegaciones. |
| Permitir que los agentes adapten autónomamente la política | `rejected` | Mezclaría observación de riesgo con autoridad normativa y permitiría que un actor alterara las reglas que limitan su propia acción. Sólo puede endurecer temporalmente la contención ante un incidente. |
| Baseline extensible de aprobación humana previa | `accepted` | Requieren aprobación humana previa: desplegar a producción; causar pérdida, corrupción o transformación irreversible de datos; producir efectos externos irreversibles o compromisos financieros; crear, rotar, revocar o ampliar identidades, credenciales o permisos; relajar política o enforcement; e integrar cambios clasificados `high` después de verificación independiente. Preparar, implementar o probar el cambio puede continuar sin esa aprobación cuando la contención evita el efecto protegido. La política puede añadir casos, pero no retirar estos mínimos. Una aprobación no vuelve autorizable una acción `prohibited`. |
| Exigir aprobación antes de toda actividad clasificada `high` | `rejected` | Bloquearía investigación, preparación y pruebas cuyo efecto sensible está contenido, sin aportar protección adicional. La aprobación se exige antes de ejecutar o integrar el efecto protegido. |
| Dejar todas las aprobaciones humanas a la política del repositorio | `rejected` | Permitiría que una política particular eliminara intervenciones humanas ya acordadas como límite transversal de autonomía. |
| Matriz mínima por nivel de riesgo | `accepted` | `routine` requiere autorización efectiva, validación normal y auditoría aplicable; `elevated` añade recuperación o reversión definida, evidencia reforzada y contención proporcional; `high` añade verifier independiente obligatorio y aprobación humana antes del efecto protegido o de su integración; `prohibited` no se ejecuta y requiere cambio de política por la autoridad aplicable, nunca una excepción operativa. La política puede endurecer estos controles, pero no rebajarlos. |
| Un único control común para todos los niveles | `rejected` | No ajustaría verificación, evidencia, recuperación, contención ni autoridad al riesgo efectivo y permitiría autonomía excesiva en acciones de mayor impacto. |
| Tratar `prohibited` como una denegación evitable mediante aprobación o excepción | `rejected` | Confundiría una prohibición normativa con una falta operativa y permitiría eludir la política sin el cambio de autoridad requerido. |

### Matriz mínima de controles por riesgo

| Nivel | Controles mínimos |
| --- | --- |
| `routine` | Autorización efectiva, validación normal y auditoría aplicable. |
| `elevated` | Controles de `routine`, más recuperación o reversión definida, evidencia reforzada y contención proporcional. |
| `high` | Controles de `elevated`, más verifier independiente obligatorio y aprobación humana antes del efecto protegido o de su integración. |
| `prohibited` | No se ejecuta. Requiere cambio de política por la autoridad aplicable; no admite excepción operativa. |

La política puede endurecer los controles de cualquier nivel, pero no rebajar los
mínimos del núcleo.

<a id="s09-cierre"></a>

### Comprobación de cierre

El criterio de salida está cumplido. S09 define un baseline lógico y portable para
la frontera entre núcleo, política y adapter; permisos efectivos; secretos; rutas y
acciones protegidas; aprobaciones; clasificación de riesgo; aislamiento;
auditoría; degradación; recuperación; y condiciones de parada. La matriz mínima
por riesgo distingue autonomía, evidencia, contención, verificación independiente,
aprobación humana y prohibición sin excepción operativa, y conserva la capacidad
de endurecimiento de la política.

La comprobación de coherencia no encontró contradicciones con ADR-001 ni con
ADR-003 a ADR-007. Se preservan la autonomía dentro de acuerdos, el ciclo y sus
gates, ownership y recuperación, handoffs y contexto como contratos separados,
conocimiento como fuente no autoritativa y la frontera de capacidades, snapshots,
degradación y evidencia de los adapters. Los mecanismos concretos, schemas, rutas,
runtime y tecnología permanecen diferidos a las sesiones previstas.

La decisión transversal se conserva en
[ADR-008](../adr/ADR-008-baseline-de-seguridad-y-gobernanza.md).
