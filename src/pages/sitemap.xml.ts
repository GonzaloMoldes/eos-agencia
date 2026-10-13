// Sitemap curado: solo URLs indexables. Se genera desde el catálogo, así que
// un servicio entra solo cuando se publica.
import { SERVICIOS, urlServicio } from '../data/servicios';
import { BASE_URL } from '../lib/seo';

export function GET() {
  const urls = ['/', '/servicios/', ...SERVICIOS.filter((s) => s.publicado).map((s) => urlServicio(s.slug))];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${BASE_URL}${u}</loc></url>`).join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
