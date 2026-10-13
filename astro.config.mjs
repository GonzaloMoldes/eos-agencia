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
    // CSS en linea en el HTML: sin peticiones bloqueantes de render.
    inlineStylesheets: 'always',
  },
});
