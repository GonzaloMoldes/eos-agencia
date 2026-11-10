import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// Sitio estatico (todo se pre-renderiza a HTML). El adaptador de Vercel queda
// puesto para cuando haga falta una ruta on-demand (p. ej. el formulario de
// contacto): basta con marcarla con `export const prerender = false`.
export default defineConfig({
  site: 'https://www.eosstudio.es',
  trailingSlash: 'always',
  adapter: vercel(),
  build: {
    // El CSS común va en un fichero que el navegador guarda en caché entre páginas
    // (_astro/*.css, caché de un año); solo los trozos pequeños van en línea.
    inlineStylesheets: 'auto',
  },
});
