# Ivan Garcia — Website (Astro)

Sitio personal de Ivan Garcia, desarrollador web en Mérida. Portado a **Astro** desde el
prototipo HTML/CSS/JS de Claude Design. Estilo Framer: canvas negro, tipografía display
(Mona Sans) con tracking negativo, azul `#0099ff` como acento y *gradient spotlight cards*
animadas como firma.

## Animaciones

- Cursor custom (punto + anillo con inercia que crece sobre enlaces)
- Transiciones entre páginas (cortina negra que solo cubre al salir, sin flashazos)
- Hero con texto que se arma palabra por palabra
- Scroll reveals, parallax suave, botones magnéticos
- Marquee del nombre y de tecnologías, previews de proyecto que siguen el cursor
- Formulario de contacto que arma un mensaje y abre WhatsApp

Todo respeta `prefers-reduced-motion`.

## Estructura

```
src/
  layouts/Base.astro        — <head>, nav, menú móvil, footer, overlays y scripts
  components/
    Nav.astro               — barra superior (marca el enlace activo según la ruta)
    MobileMenu.astro         — menú overlay móvil
    Footer.astro            — pie con marquee y enlaces
  pages/                    — una ruta por página
    index.astro  (/)
    about.astro  (/about)
    work.astro   (/work)
    services.astro (/services)
    blog.astro   (/blog)
    article.astro (/article)
    contact.astro (/contact)
  styles/global.css         — sistema visual completo (tokens, componentes, responsive)
public/
  app.js                    — interacción/animación compartida (cursor, reveals, transiciones…)
```

Las imágenes provienen por URL del Webflow actual; reemplázalas cuando haya fotos reales.
Los iconos usan [Lucide](https://lucide.dev) vía CDN.

## Comandos

| Comando           | Acción                                        |
| ----------------- | --------------------------------------------- |
| `npm install`     | Instala dependencias                          |
| `npm run dev`     | Servidor de desarrollo en `localhost:4321`    |
| `npm run build`   | Compila el sitio de producción a `./dist/`    |
| `npm run preview` | Sirve el build de producción localmente       |

## Notas

- **Fuente:** se usa **Mona Sans** (Google Fonts) como sustituto de GT Walsheim, según
  recomienda el `DESIGN-framer.md` original. Si tienes la licencia de GT Walsheim, se cambia
  en `src/styles/global.css` (`--font-display`) y en el `<link>` de fuentes de `Base.astro`.
- WhatsApp: +52 999 128 4580.
