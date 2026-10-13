// Todas las páginas de servicio con copy. Para publicar una nueva: crear su
// fichero aquí, añadirla a esta lista y poner `publicado: true` en servicios.ts.
import { pagina as seoLocal } from './seo-local';
import { pagina as seoYoutube } from './seo-youtube';
import { pagina as autoridadDigital } from './autoridad-digital';
import { pagina as marketingAutomation } from './marketing-automation';
import { pagina as consultoriaCrm } from './consultoria-crm';
import { SERVICIOS } from '../servicios';

export const PAGINAS = [seoLocal, seoYoutube, autoridadDigital, marketingAutomation, consultoriaCrm];

// Guarda: cada página debe estar en el catálogo y marcada como publicada, y al
// revés. Así el menú, el hub y el sitemap no pueden desincronizarse.
for (const p of PAGINAS) {
  const s = SERVICIOS.find((x) => x.slug === p.slug);
  if (!s?.publicado) throw new Error(`La página ${p.slug} existe pero el servicio no está publicado en servicios.ts`);
}
for (const s of SERVICIOS.filter((x) => x.publicado)) {
  if (!PAGINAS.some((p) => p.slug === s.slug)) throw new Error(`El servicio ${s.slug} está publicado pero no tiene página`);
}
