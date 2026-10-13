// llms.txt: resumen del sitio para asistentes de IA (https://llmstxt.org).
import { SERVICIOS, urlServicio } from '../data/servicios';
import { PAGINAS } from '../data/paginas';
import { SITIO } from '../data/sitio';
import { BASE_URL } from '../lib/seo';

export function GET() {
  const desc = (slug: string) => PAGINAS.find((p) => p.slug === slug)?.description ?? '';
  const txt = `# ${SITIO.nombre}

> ${SITIO.descripcion}

EOS Studio es una agencia de marketing digital con sede en ${SITIO.ciudad} (España). Contacto: ${SITIO.email}

## Servicios

${SERVICIOS.filter((s) => s.publicado).map((s) => `- [${s.nombre}](${BASE_URL}${urlServicio(s.slug)}): ${desc(s.slug)}`).join('\n')}

## Próximamente

${SERVICIOS.filter((s) => !s.publicado).map((s) => `- ${s.nombre}: ${s.resumen}`).join('\n')}
`;
  return new Response(txt, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
