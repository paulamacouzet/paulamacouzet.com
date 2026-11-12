---
artifact_contract: ce-unified-plan/v1
artifact_readiness: implementation-ready
product_contract_source: ce-brainstorm
execution: code
---

# Reconfiguración Editorial de Offerings & Experiencia (Dossier de Atelier)

## Goal Capsule

**Objective:** Transformar la página de colecciones, inversión y experiencia (`/weddings/collections/`) de Paula Macouzet Weddings de un esquema convencional estilo tabla de precios SaaS a un Dossier Editorial de Alta Gama que transmita el rigor, exclusividad y dignidad de un atelier de alta costura y diseño de autor.  
**Means:** Reemplazar las tarjetas apretadas de precios, la tabla comparativa de funciones y el acordeón de soporte por una narrativa estructurada en pliegos editoriales de gran formato, una línea procesual continua de co-creación artística para el proceso, una galería curatorial de objetos de autor ("Gabinete de Curiosidades"), y un compendio de protocolos de estudio.  
**Product Authority:** Definido y validado colaborativamente con Paula Macouzet en sesión de `ce-brainstorm`.  
**Open Blockers:** Ninguno.

---

## Product Contract

*(Product Contract preservation: Product Contract unchanged from ce-brainstorm baseline)*

### 1. Scope Boundaries

#### In-Scope
- **Página de Ofertas & Inversión (`weddings/collections/index.html` y sus estilos en `weddings/style.css`)**:
  - **Prólogo del Atelier**: Declaración de intenciones, cupo estrictamente limitado de comisiones por temporada y la filosofía de la boda de destino como una obra irrepetible.
  - **Capítulo I — El Ritual de Creación (La Experiencia)**: Reestructuración de las 3 etapas (01 Raíces & Diálogo, 02 La Revelación del Atelier, 03 Lanzamiento & Alineación de Producción) presentadas como una línea continua de co-creación conectada por filamentos dorados.
  - **Capítulo II — Las Tres Suites de Comisión**: Presentación de las 3 colecciones en formato de **Pliegos Editoriales Consecutivos (Lookbook de Lujo)**:
    - *Suite I: The Editorial Digital Suite* ($1,800 USD | ~3 Semanas)
    - *Suite II: The Signature Illustrated Atelier* ($2,800 USD | 4–6 Semanas — Pieza central y recomendada del Atelier)
    - *Suite III: The Full Atelier Heirloom* ($3,800 USD | 6–8 Semanas — De la pantalla a la mesa física)
    - Cada pliego cuenta con layout alternado: arte/ilustración a gran formato, narrativa poética, a quién está destinada, entregables de autor, tiempos de entrega e inversión transparente pero sobria.
  - **Capítulo III — Gabinete de Curiosidades & Objetos de Autor**: Galería editorial con estética de objetos tangibles (El Mercadito artesanal, botellas de mezcal/tequila pintadas a mano, arte original enmarcado en papel de algodón con bordes rasgados).
  - **Capítulo IV — Protocolos del Estudio & Savoir-Faire**: Sustitución del acordeón de soporte por bloques temáticos editoriales que resuelven dudas clave (Tiempos de Reserva y Temporadas, Preservación y Dominio Digital, Colaboración y Archivos con Planners, Propiedad y Derechos de Reproducción).
  - **Epílogo y Llamado a la Acción**: Transición sobria hacia el formulario de reservación de fecha (`/weddings/inquire/`).

#### Out-of-Scope
- Modificaciones al Landing Page principal (`weddings/index.html`).
- Pasarelas de pago transaccionales automáticas (el estudio opera mediante propuesta interactiva privada y anticipo del 50%).
- Nuevas páginas fuera de la ruta `/weddings/collections/`.

---

### 2. Key Decisions

- `session-settled: 2026-09-29` **Enfoque 'Dossier Editorial de Alta Gama'**: Se descarta la estética SaaS de agencias de marketing digital (cajas apretadas, viñetas de checklist, botones de compra rápida). Se adopta una arquitectura de libro de arte / catálogo de alta costura dividido en capítulos narrativos.
- `session-settled: 2026-09-29` **Eliminación Total de la Tabla Comparativa de Software**: La tabla con marcas de verificación (`⟡`) y guiones (`—`) queda 100% eliminada, ya que mercantiliza el arte de autor y lo reduce a una lista de verificación de software.
- `session-settled: 2026-09-29` **Pliegos Editoriales Consecutivos (Lookbook de Lujo)**: Cada una de las 3 Suites tendrá su propio pliego visual a pantalla completa o gran formato con layout alternado (imagen a un lado, narrativa y especificaciones al otro), dándole a cada comisión el peso de una obra mayor.
- `session-settled: 2026-09-29` **Proceso como Ritual Continuo con Filamentos Dorados**: Las 3 etapas de la experiencia dejan de ser tarjetas estáticas y pasan a formar una línea procesual conectada visualmente con la estética de filamentos y nodos dorados introducida en el Home.
- `session-settled: 2026-09-29` **Transformación de FAQs a 'Protocolos & Savoir-Faire'**: Las preguntas frecuentes dejan de presentarse como un acordeón de soporte técnico; se articulan como estándares editoriales y de producción del estudio.
- `session-settled: 2026-09-29` **Gabinete de Curiosidades para Extensiones**: Los add-ons se presentan como objetos artesanales físicos coleccionables que extienden el universo visual a la boda presencial.

---

### 3. Requirements (R-IDs)

#### R-1: Prólogo y Manifiesto de Atelier
- **R-1.1**: La cabecera de la página debe abrir con la insignia de atelier, tipografía Cinzel y un texto curatorial sobre la escasez estricta (número limitado de comisiones por temporada) y el concepto de que la identidad visual es la primera reliquia del matrimonio.

#### R-2: Capítulo I — El Ritual de Creación (La Experiencia)
- **R-2.1**: Debe estructurar las 3 fases del viaje del cliente (01 Raíces & Diálogo, 02 La Revelación del Atelier, 03 Lanzamiento & Alineación de Producción).
- **R-2.2**: Visualmente debe usar una línea continua con nodos dorados y micro-detalles que reflejen la co-creación artística íntima 1:1 con Paula.

#### R-3: Capítulo II — Las Tres Suites de Comisión
- **R-3.1**: Cada una de las 3 suites debe ocupar su propio pliego editorial generoso con alternancia visual (izquierda/derecha).
- **R-3.2**: La narrativa de cada suite debe articular:
  - Título poético y número de colección.
  - Manifiesto: A qué tipo de pareja y celebración de destino está destinada.
  - Entregables cardinales redactados con lenguaje de atelier (no listas de viñetas genéricas).
  - Tiempo de entrega estimado.
  - Inversión transparente pero digna (*$1,800 USD*, *$2,800 USD*, *$3,800 USD*).
  - Botón sobrio a la consulta (*"Inquire for Suite I/II/III"*).
- **R-3.3**: La *Suite II (The Signature Illustrated Atelier)* debe llevar el distintivo de pieza central y recomendada del estudio.

#### R-4: Capítulo III — Gabinete de Curiosidades & Objetos de Autor
- **R-4.1**: Bloque editorial con tarjetas de proporciones nobles que presenten:
  - *El Mercadito*: Branding integral y packaging para el mercado de bienvenida mexicano.
  - *Botellas de Autor*: Tequila, mezcal o vino pintadas a mano con la identidad botánica para mesa de novios o regalos.
  - *Fine Art Enmarcado*: La acuarela / tinta original de la cresta enmarcada en papel de algodón con bordes deckled.
  - *Monograma & Crest Standalone*.

#### R-5: Capítulo IV — Protocolos del Estudio & Savoir-Faire
- **R-5.1**: Se reemplaza el acordeón colapsable por una cuadrícula o disposición editorial de 4 pilares:
  1. *Temporada & Anticipación*: Tiempos de reserva (4 a 8 meses antes).
  2. *Dominio & Preservación Digital*: Alojamiento privado, SSL y permanencia en el tiempo.
  3. *Sinergia con Wedding Planners*: Guía de producción con códigos Pantone y vectores para floristas y montaje.
  4. *Propiedad Intelectual & Derechos*: Derechos de reproducción perpetuos para uso personal de la pareja.

---

### 4. User Experience & Flows

1. **Entrada al Dossier**:
   - La pareja llega desde el menú superior (*Offerings & Pricing*) o desde el botón de llamada a la acción del Home (*"View The Experience / Collections"*).
   - Son recibidos por el prólogo que establece de inmediato un tono de exclusividad, serenidad y alta cultura visual.
2. **Inmersión en el Ritual**:
   - Recorren las 3 etapas del proceso de co-creación, entendiendo exactamente qué sucede desde la primera videollamada de raíces hasta el lanzamiento.
3. **Exploración de las Suites**:
   - Se deslizan por los pliegos editoriales de las 3 Suites. Cada una tiene suficiente espacio para respirar y apreciarse como una obra acabada.
   - Entienden la diferencia fundamental de valor entre el diseño tipográfico digital, la ilustración artística original hecha a mano, y la producción completa de papelería física día-de-boda.
4. **Descubrimiento de Objetos de Autor**:
   - Se inspiran con el Gabinete de Curiosidades que muestra cómo el arte vive en botellas, recuerdos y mercados de bienvenida.
5. **Claridad en los Protocolos**:
   - Resuelven sus inquietudes en los Protocolos del Estudio sin fricción ni sensaciones de soporte técnico.
6. **Conversación Privada**:
   - El botón final los conduce a `/weddings/inquire/` con el contexto claro de la colección que mejor resuena con su celebración.

---

### 5. Acceptance Criteria

- [ ] La página `/weddings/collections/` no contiene ninguna tabla comparativa de software ni listas de viñetas genéricas con cheques (`⟡` vs `—`).
- [ ] La sección de *La Experiencia* fluye como una línea procesual conectada y elegante con filamentos dorados.
- [ ] Las 3 Colecciones se presentan como pliegos editoriales individuales y holgados con alternancia visual.
- [ ] Las preguntas frecuentes se presentan como *Protocolos del Estudio & Savoir-Faire*.
- [ ] La tipografía, paleta de colores y espaciado mantienen 100% de coherencia con el sistema de diseño del Atelier (Cinzel, Poppins, dorados `#b89d74`, fondos crema `#fdfbf7` y papel de algodón).

---

## Planning Contract

### 1. Key Technical Decisions (KTDs)

- **KTD-1: Modularidad en `style.css` y Limpieza de Código Muerto**: La página de Collections comparte `weddings/style.css`. Las reglas obsoletas de tablas de comparación (`.comparison-section`, `.comparison-table`, `.pricing-cards-grid`) se refactorizarán para dar paso a las clases del Dossier (`.dossier-prologue`, `.dossier-ritual`, `.suite-lookbook-spread`, `.curiosity-cabinet`, `.studio-protocols-grid`), evitando duplicación y manteniendo un bundle optimizado.
- **KTD-2: Layout Alternado para las Suites (`.suite-lookbook-spread`)**: Implementar un layout CSS Grid bidireccional (`grid-template-columns: 1fr 1fr;` en desktop con flexbox o grid inverso para la Suite II usando `direction` o `order: 2`), con marcos sutiles de papel de algodón y sombras orgánicas suaves.
- **KTD-3: Línea Procesual Continua con Filamentos (`.ritual-timeline`)**: Adaptar la técnica de filamentos dorados y nodos (`.match-node`, `.ritual-node`) validada en el Home para conectar las 3 fases del proceso en desktop, con adaptación fluida a una sola columna en pantallas móviles (`@media (max-width: 850px)`).
- **KTD-4: Cuadrícula Arquitectónica de Protocolos**: Usar un grid 2x2 elegante para los 4 pilares de protocolos del estudio, con borde sutil dorado (`rgba(184, 157, 116, 0.25)`), fondo `#ffffff` sobre canvas `#fdfbf7`, y encabezados en Cinzel.

### 2. File Mapping

| Archivo | Rol en la Implementación |
|---|---|
| `weddings/collections/index.html` | Archivo principal de contenido y estructura semántica HTML5 del Dossier Editorial. |
| `weddings/style.css` | Sistema de tokens, tipografía, espaciados y componentes visuales para el Dossier. |

---

## Implementation Units

### U1: Estructura HTML y Contenidos Editoriales del Dossier
- **Owner File:** `weddings/collections/index.html`
- **Covers Requirements:** R-1.1, R-2.1, R-3.1, R-3.2, R-3.3, R-4.1, R-5.1
- **Tasks:**
  1. Reemplazar el hero actual con el **Prólogo del Atelier**: Insignia `⟡`, `h1` poético y manifiesto de comisiones limitadas.
  2. Reestructurar la sección de experiencia como **Capítulo I: El Ritual de Creación** con las 3 etapas (01 Raíces & Diálogo, 02 La Revelación del Atelier, 03 Lanzamiento & Alineación).
  3. Reemplazar la grilla de tarjetas de precios y la tabla de comparación con el **Capítulo II: Las Tres Suites de Comisión (Lookbook de Lujo)**:
     - Pliego 1: *Suite I: The Editorial Digital Suite* ($1,800 USD)
     - Pliego 2: *Suite II: The Signature Illustrated Atelier* ($2,800 USD — Flagship)
     - Pliego 3: *Suite III: The Full Atelier Heirloom* ($3,800 USD)
  4. Implementar el **Capítulo III: Gabinete de Curiosidades & Objetos de Autor** (El Mercadito, Botellas de Autor, Fine Art Enmarcado, Monograma).
  5. Implementar el **Capítulo IV: Protocolos del Estudio & Savoir-Faire** con los 4 bloques temáticos.
  6. Actualizar el epílogo y botón de consulta a `/weddings/inquire/`.

### U2: Sistema de Estilos y Maquetación de Pliegos Editoriales
- **Owner File:** `weddings/style.css`
- **Covers Requirements:** R-1.1, R-2.2, R-3.1, R-3.3, R-4.1, R-5.1
- **Tasks:**
  1. Definir los estilos para `.dossier-prologue`: tipografía, márgenes generosos y línea divisoria dorada.
  2. Implementar los estilos para `.ritual-timeline` y `.ritual-step`: filamentos dorados, nodos con núcleo de brillo, tipografía de autores y cards con fondo algodón.
  3. Implementar `.suite-lookbook-spread`:
     - Grid 50/50 alternado (Suite I: Visual Izquierda, Texto Derecha; Suite II: Texto Izquierda, Visual Derecha; Suite III: Visual Izquierda, Texto Derecha).
     - Ribbon o insignia de "Flagship / Pieza Central" para Suite II.
     - Bloques de entregables editoriales y precio sobrio.
  4. Implementar `.curiosity-cabinet`: grid de objetos de autor con aspecto de catálogo privado.
  5. Implementar `.studio-protocols-grid`: cuadrícula sobria de 4 columnas/bloques sin iconos de acordeón.
  6. Asegurar adaptabilidad responsive completa (`@media (max-width: 850px)` y `@media (max-width: 600px)`).

### U3: Micro-interacciones, Verificación y Enlaces Cruzados
- **Owner Files:** `weddings/collections/index.html`, `weddings/style.css`
- **Covers Requirements:** R-2.2, R-3.2
- **Tasks:**
  1. Enlazar cada botón de consulta con el parámetro correspondiente (`/weddings/inquire/?tier=digital`, `?tier=signature`, `?tier=atelier`).
  2. Verificar que el script de scroll illumination o fade-in opere suavemente en cada pliego.
  3. Validar consistencia de enlaces con el Home y menú drawer.

---

## Verification Contract

### Verification Commands & Checks
- **Sintaxis y lectura de archivos:**
  ```bash
  node -e "const fs = require('fs'); fs.readFileSync('weddings/collections/index.html'); fs.readFileSync('weddings/style.css'); console.log('Syntax OK');"
  ```
- **Disponibilidad en servidor dev local:**
  ```bash
  curl -s -I http://localhost:5173/weddings/collections/ | grep "HTTP/1.1 200 OK"
  ```
- **Comprobación de eliminación de tabla SaaS:**
  ```bash
  curl -s http://localhost:5173/weddings/collections/ | grep "comparison-table" || echo "Table successfully eliminated"
  ```

---

## Definition of Done

- [x] Plan de requerimientos y arquitectura técnica completado y aprobado en `docs/plans/2026-09-29-2105-feat-weddings-collections-editorial-dossier-plan.md`.
- [ ] La tabla de comparación y tarjetas apretadas de precios quedan sustituidas por los pliegos editoriales tipo lookbook.
- [ ] La experiencia se presenta como una línea continua de co-creación artística.
- [ ] Las preguntas frecuentes quedan reemplazadas por Protocolos del Estudio.
- [ ] La página responde con código 200 en `http://localhost:5173/weddings/collections/` y se verifica libre de errores de consola.
