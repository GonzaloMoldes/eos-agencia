// Sitemap curado: solo URLs indexables. Se genera desde el catálogo, así que
// un servicio entra solo cuando se publica. <lastmod> solo donde la fecha es
// fiable (artículos del blog: fecha o «actualizado»); Google ignora las inexactas.
import { SERVICIOS, urlServicio } from '../data/servicios';
import { BASE_URL } from '../lib/seo';
import { entradas } from '../lib/blog';

export async function GET() {
  const posts = await entradas();
  const blog = posts.map((e) => `/blog/${e.id}/`);
  const fechas: Record<string, string> = Object.fromEntries(posts.map((e) => [`/blog/${e.id}/`, (e.data.actualizado ?? e.data.fecha).toISOString().slice(0, 10)]));
  if (posts[0]) fechas['/blog/'] = fechas[`/blog/${posts[0].id}/`];
  const urls = ['/', '/servicios/', ...SERVICIOS.filter((s) => s.publicado).map((s) => urlServicio(s.slug)), '/sobre-nosotros/', '/contacto/', '/diagnostico/', '/blog/', ...blog];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${BASE_URL}${u}</loc>${fechas[u] ? `<lastmod>${fechas[u]}</lastmod>` : ''}</url>`).join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
