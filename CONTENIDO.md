# Inventario de contenido — qué reemplazar con información real

Este documento lista **todo el contenido genérico, de marcador (placeholder) y las imágenes de
stock** que hay hoy en el sitio, para que lo cambies por información real. Está ordenado por página.

Convenciones:
- 🟥 **CRÍTICO** — es lo que más resta credibilidad mientras siga genérico (métricas inventadas, retos vacíos, fotos de stock en tu portafolio).
- 🟧 **Importante** — copy genérico que conviene volver específico.
- 🖼️ **Imagen de stock** — foto de Unsplash temática; reemplazar por material real cuando lo tengas.
- 🟦 **Pendiente técnico** — falta un asset (p. ej. imagen social `og:image`).

> Todas las imágenes de stock vienen de Unsplash (`images.unsplash.com`). Son libres de hotlink,
> pero **no son tu trabajo** — el objetivo es sustituirlas por capturas reales, fotos de producto
> o mockups propios. Mientras tanto dan presencia visual sin afirmar nada falso.

---

## 0. Global (afecta a todo el sitio)

Archivo: `src/layouts/Base.astro`, `src/components/Footer.astro`

| Elemento | Estado actual | Reemplazar con |
|---|---|---|
| 🟦 `og:image` / `twitter:image` | **No existe.** Hay un `TODO` en `Base.astro`. | Una imagen social 1200×630 px en `/public` (p. ej. `/og.jpg`). Luego enlázala como `og:image` y `twitter:image`, y cambia `twitter:card` a `summary_large_image`. |
| Favicon | `public/favicon.svg` = estrella azul genérica de la marca. | Opcional: un logotipo propio si tienes uno. |
| Footer — tagline | "Transformando marcas con soluciones digitales." | 🟧 Una frase tuya, más específica de tu propuesta. |
| Redes (footer, menú móvil, contacto) | WhatsApp `+52 999 128 4580`, Instagram `@ivangarcia10`, LinkedIn `ivanalexisgarcia`. | ✅ Verifica que sean correctos y estén activos. |

---

## 1. Inicio — `src/pages/index.astro`

| Elemento | Estado actual | Reemplazar con |
|---|---|---|
| Titular hero | "Ideas que se vuelven producto digital." | 🟧 Opcional: tu frase de posicionamiento si tienes una más tuya. |
| Bloque "Quién soy" | "De la pasión por la tecnología a una carrera construyendo producto." + párrafo. | 🟧 Tu historia real en 1–2 frases. |
| 🖼️ Imagen intro | `photo-1498050108023-...` (escritorio con código). | Foto tuya trabajando, de tu setup real, o una captura de un proyecto. |
| Spotlight "Disponible" | "Abierto a nuevos proyectos para 2026." | Mantener al día según disponibilidad. |
| 3 pilares | "Código limpio", "Rendimiento real", "Diseño que convierte" + textos. | 🟧 Opcional: ajusta a cómo describes tú tu trabajo. |
| Marquee tech | Shopify · Liquid · React · Node · Figma · Astro · Mobile · APIs. | ✅ Confirma que son las tecnologías que realmente usas. |
| Trabajo seleccionado | Pure Over, CEMEX Supply (ver §4). | Ver sección de Portafolio. |
| 🖼️ Peek de proyectos | Café (Pure Over) / construcción (CEMEX) de Unsplash. | Captura real de cada proyecto. |

---

## 2. Sobre mí — `src/pages/about.astro`

| Elemento | Estado actual | Reemplazar con |
|---|---|---|
| 🟥 Bio | "De la pasión por la tecnología a una carrera en desarrollo web — he crecido a través de proyectos reales…" (genérico). | Tu biografía real: años de experiencia, formación, en qué te especializas, qué te diferencia. |
| Lead hero | "Ayudo a las marcas a transformar visiones en productos digitales de alto rendimiento que conectan." | 🟧 Algo más concreto y menos publicitario. |
| Proceso (4 pasos) | Descubrir / Definir / Desarrollar / Entregar + descripciones. | 🟧 Ajusta a cómo trabajas realmente. |
| ✅ Foto de perfil | Foto real tuya (`...581242616...n.jpg`). | Ya es real — mantener. |
| 🖼️ Galería (6 imágenes) | Stock antiguo del CDN de Webflow (compras, código, diseño). | Fotos reales: tu trabajo, tu proceso, capturas de proyectos, fotos tuyas. |

---

## 3. Servicios — `src/pages/services.astro` y subpáginas

### Página índice (`services.astro`)
| Elemento | Estado actual | Reemplazar con |
|---|---|---|
| 🖼️ Imagen hero | `photo-1486312338219-...` (escritorio dev). | Opcional: imagen propia. |
| 4 tarjetas | Web Design, Ecommerce — Shopify, Mobile Apps, Web Apps. | ✅ Confirma que son los servicios que ofreces. |
| 🖼️ Imágenes de tarjeta | Stock temático de Unsplash. | Capturas/imágenes propias por servicio. |

### Subpáginas (nuevas) — `src/pages/services/*.astro`
Cada subpágina (`web-design`, `ecommerce-shopify`, `mobile-apps`, `web-apps`) tiene la misma estructura:
**hero · qué incluye · proceso · entregables · FAQ · CTA.** Todo el copy es **borrador genérico real** (sin precios, tiempos ni casos, según lo pediste).

| Elemento | Estado actual | Reemplazar con |
|---|---|---|
| 🟧 "Qué incluye" (listas) | Puntos genéricos correctos pero estándar. | Ajusta a lo que tú realmente entregas en cada servicio. |
| 🟧 "Proceso" (4 pasos) | Pasos genéricos por servicio. | Tu proceso real, con tus nombres de etapa. |
| 🟧 "Entregables" | Lista genérica. | Lo que entregas tú concretamente. |
| 🟥 FAQ (4 por página) | Respuestas genéricas plausibles. | Revisa cada respuesta y ajústala a tu forma de trabajar / tu realidad (especialmente las de Shopify vs a la medida, migración, mantenimiento, publicación en tiendas). |
| 🖼️ Imágenes (3 por página) | Stock temático de Unsplash (café, ecommerce, móvil, dashboards, código). | Capturas de proyectos reales de ese tipo. |
| ➕ Precios / tiempos | **No incluidos a propósito.** | Si más adelante quieres mostrarlos, se pueden añadir como bloque nuevo. |

---

## 4. Trabajo / Portafolio — `src/pages/work.astro` + casos

> 🟥 Esta es la sección de mayor impacto. Un portafolio con 2 proyectos de 2023 ilustrados con
> stock es el punto más débil del sitio. Prioridad: **3–6 proyectos reales** o, si solo hay dos,
> ir a profundidad con **capturas reales + una métrica concreta por proyecto.**

### Listado (`work.astro`)
| Elemento | Estado actual | Reemplazar con |
|---|---|---|
| Proyectos | Pure Over (Ecommerce · Shopify · 2023), CEMEX Supply (Ecommerce · Web App · 2023). | Más proyectos y/o años más recientes. Para añadir uno: duplica un archivo en `src/pages/work/` y agrega su fila aquí. |
| Lead | "Dos proyectos a profundidad." | Actualiza el número si agregas proyectos. |
| 🖼️ Peek (hover) | Café / construcción de Unsplash. | Captura real de cada proyecto. |

### Caso Pure Over — `src/pages/work/pure-over.astro`
| Elemento | Estado actual | Reemplazar con |
|---|---|---|
| Specs | Cliente: Pure Over · Rol: Diseño y desarrollo · Año: 2023 · Stack: Shopify · Tema custom · Liquid. | ✅ Confirma/corrige cada dato. |
| 🟥 "El reto" | Marcador (`note-ph`): "Pendiente: describir el problema de negocio…". | El reto real del proyecto, 1–2 párrafos. |
| "Lo que construí" | 3 puntos genéricos (tema Liquid, flujo de compra, rendimiento). | Lo que realmente hiciste. |
| 🟥 "Resultado" | Marcador: "Pendiente: una métrica concreta…". | **Una métrica real y verificable** (conversión, velocidad, ventas). Esto es lo que más convence. |
| 🖼️ Imagen principal | Pour over de Unsplash. | Captura real de la tienda (home / página de producto). |
| 🖼️ Galería (2) | Bolsa de café + taza (Unsplash). | Capturas reales de pantallas clave. |

### Caso CEMEX Supply — `src/pages/work/cemex-supply.astro`
| Elemento | Estado actual | Reemplazar con |
|---|---|---|
| Specs | Cliente: CEMEX Supply · Rol: Desarrollo web · Año: 2023 · Stack: Web App · Ecommerce · Integraciones. | ✅ Confirma/corrige. ¿Fue CEMEX directo o vía agencia? Aclara el rol. |
| 🟥 "El reto" | Marcador `note-ph`. | El reto real de la operación. |
| "Lo que construí" | 3 puntos genéricos. | Lo que realmente construiste. |
| 🟥 "Resultado" | Marcador. | Una métrica real (volumen de pedidos, escala, tiempo de operación). |
| 🖼️ Imagen principal | Construcción (Unsplash). | Captura real de la plataforma. |
| 🖼️ Galería (2) | Almacén + logística (Unsplash). | Capturas reales. |

---

## 5. Blog — `src/pages/blog.astro` y `src/pages/article.astro`

> 🟥 Hoy el blog tiene **1 artículo real** (`article.astro`) y **6 tarjetas** que apuntan todas a
> ese mismo artículo. Las fechas y tiempos de lectura son inventados.

### Listado (`blog.astro`)
| Elemento | Estado actual | Reemplazar con |
|---|---|---|
| Destacado | "Shopify o tienda a la medida: cómo decidir" · 12 May 2026 · 6 min. | ✅ Este sí enlaza al artículo real. |
| 🟥 6 tarjetas | Títulos plausibles pero los artículos **no existen**; todas enlazan a `/article`. | Escribe cada artículo (crea su archivo) o quita las tarjetas que no tengan contenido. |
| 🟥 Fechas | 28 Abr, 15 Abr, 02 Abr, 20 Mar, 08 Mar, 24 Feb 2026 (inventadas). | Fechas reales de publicación. |
| 🟥 Tiempos de lectura | 4–8 min (inventados). | Tiempo real. |
| 🖼️ Imágenes (7) | Stock del CDN de Webflow. | Imágenes propias o ilustraciones por artículo. |

### Artículo (`article.astro`)
| Elemento | Estado actual | Reemplazar con |
|---|---|---|
| Cuerpo | Artículo real "Shopify o tienda a la medida". | ✅ Es contenido real y decente — puedes mantenerlo o pulirlo. |
| Autor / fecha | Ivan Garcia · 12 May 2026. | ✅ Ajusta la fecha real. |
| 🖼️ Imagen | Stock (pago con tarjeta). | Imagen propia del tema. |
| Plantilla | Solo existe **una** plantilla de artículo. | Para más posts, duplica este archivo con ruta propia (p. ej. `/blog/mi-articulo`) y actualiza los enlaces del listado. |

---

## 6. Contacto — `src/pages/contact.astro`

| Elemento | Estado actual | Reemplazar con |
|---|---|---|
| ✅ Formulario | Envía a WhatsApp `+52 999 128 4580` con validación y mensaje de error inline. | Verifica el número. |
| ✅ Enlaces directos | WhatsApp, Instagram, LinkedIn. | Verifica que sean correctos. |
| Ubicación | "Mérida, México — trabajo con clientes en todas partes." | ✅ Correcto si aplica. |

---

## Resumen de prioridades

1. 🟥 **Portafolio** — capturas reales + 1 métrica por caso; rellenar "El reto" y "Resultado". Idealmente más proyectos.
2. 🟥 **Blog** — escribir los artículos que faltan o reducir las tarjetas a las que existen; fechas reales.
3. 🟥 **Bio (Sobre mí)** y **FAQ de servicios** — volverlas tuyas y específicas.
4. 🖼️ **Imágenes de stock** — ir sustituyendo Unsplash por material propio conforme lo tengas.
5. 🟦 **`og:image`** — crear la imagen social 1200×630 para los previews al compartir.

### Dónde están las imágenes de stock (todas Unsplash, `images.unsplash.com/<id>`)
- Inicio: `photo-1498050108023-c5249f4df085`
- Servicios (índice): `photo-1486312338219-ce68d2c6f44d` + 4 de tarjeta (`...1581291518857`, `...1563013544`, `...1556656793`, `...1555066931`)
- Web Design: `...1561070791`, `...1559028012`, `...1507238691740`
- Ecommerce: `...1556742049`, `...1559056199`, `...1563013544`
- Mobile Apps: `...1512941937669`, `...1551650975`, `...1601784551446`
- Web Apps: `...1551288049`, `...1517180102446`, `...1460925895917`
- Pure Over: `...1461023058943`, `...1559056199`, `...1495474472287`
- CEMEX Supply: `...1503387762`, `...1586528116311`, `...1553413077`
- Blog / Artículo / Sobre mí: aún usan el CDN antiguo de Webflow (`cdn.prod.website-files.com/...`).
