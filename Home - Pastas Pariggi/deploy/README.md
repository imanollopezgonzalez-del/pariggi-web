# Pastas Pariggi — Sitio web

Sitio estático listo para subir a GitHub Pages.

## Cómo publicarlo en GitHub Pages

1. Creá un repositorio nuevo en GitHub (ej: `pastas-pariggi`).
2. Subí **todo el contenido de esta carpeta** (no la carpeta `deploy` en sí, sino lo que hay adentro) a la raíz del repo.
3. En el repo: **Settings → Pages**.
4. En "Source" elegí la rama (`main`) y la carpeta `/ (root)`. Guardá.
5. Esperá ~1 minuto. Tu sitio queda en `https://TU-USUARIO.github.io/pastas-pariggi/`.

## Estructura

- `index.html` — página de inicio (= Home). GitHub Pages la sirve por defecto.
- `Home.html`, `productos.html`, `nosotros.html`, `metodo.html`, `contacto.html`,
  `distribuidores.html`, `b2b.html`, y las páginas de producto/receta.
- `assets/` — imágenes de packaging, logos, videos, íconos, `image-slot.js`, `distribuidores.json`.
- `fonts/` — tipografías.
- `brand-loader.js`, `social-float.js` — scripts compartidos.
- `.nojekyll` — **NO borrar.** Hace que GitHub Pages sirva archivos que empiezan con punto
  (como `.image-slots.state.json`, que guarda las fotos/ilustraciones cargadas).
- `.image-slots.state.json` — fotos e ilustraciones cargadas manualmente en las páginas de
  método / producto / receta. Se muestran solo-lectura en el sitio publicado.

## Notas

- Todas las imágenes son **externas** (archivos reales en `assets/`), no embebidas.
  Mantené la estructura de carpetas tal cual.
- El sitio usa rutas **relativas**, así que funciona tanto en la raíz del dominio
  como en un subdirectorio (`usuario.github.io/repo/`).
- Dependencias externas por CDN (necesitan internet): Google Fonts, GSAP (animación del Home),
  y Leaflet (mapa de distribuidores).
