// llms.txt: resumen del sitio para asistentes de IA (https://llmstxt.org).
import { SERVICIOS, urlServicio } from '../data/servicios';
import { PAGINAS } from '../data/paginas';
import { SITIO } from '../data/sitio';
import { BASE_URL } from '../lib/seo';
import { EQUIPO, EQUIPO_ANONIMO } from '../data/equipo';
import { entradas } from '../lib/blog';

export async function GET() {
  const blog = await entradas();
  const desc = (slug: string) => PAGINAS.find((p) => p.slug === slug)?.description ?? '';
  const txt = `# ${SITIO.nombre}

> ${SITIO.descripcion}

EOS Studio es una agencia de marketing digital con sede en ${SITIO.ciudad} (España). Contacto: ${SITIO.email} · WhatsApp +${SITIO.whatsapp}

## Fundadores

Fundada por dos compañeros de trabajo que, tras años en distintos departamentos y marcas, crearon un servicio propio:

${EQUIPO.map((p) => EQUIPO_ANONIMO ? `- ${p.perfil} (${p.sede}): ${p.especialidades.join(', ')}` : `- ${p.nombre} (${p.cargo}, ${p.sede}): ${p.linkedin}`).join('\n')}

## Servicios

${SERVICIOS.filter((s) => s.publicado).map((s) => `- [${s.nombre}](${BASE_URL}${urlServicio(s.slug)}): ${desc(s.slug)}`).join('\n')}

## Páginas

- [Sobre nosotros](${BASE_URL}/sobre-nosotros/)
- [Contacto](${BASE_URL}/contacto/)
- [Diagnóstico gratuito](${BASE_URL}/diagnostico/)

## Blog y guías

${blog.map((e) => `- [${e.data.titulo}](${BASE_URL}/blog/${e.id}/): ${e.data.descripcion}`).join('\n')}
`;
  return new Response(txt, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
