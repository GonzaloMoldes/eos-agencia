// Schema compartido: Organization (como ProfessionalService) en todo el sitio y
// BreadcrumbList generado desde la URL. Lo emite BaseLayout.
import { SITIO } from '../data/sitio';
import { SERVICIOS } from '../data/servicios';
import { EQUIPO } from '../data/equipo';

export const BASE_URL = SITIO.url;

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${BASE_URL}/#organization`,
  name: SITIO.nombre,
  url: `${BASE_URL}/`,
  logo: `${BASE_URL}/favicon.svg`,
  description: SITIO.descripcion,
  email: SITIO.email,
  address: [
    { '@type': 'PostalAddress', addressLocality: 'A Coruña', addressRegion: 'Galicia', addressCountry: 'ES' },
    { '@type': 'PostalAddress', addressLocality: 'Valencia', addressRegion: 'Comunidad Valenciana', addressCountry: 'ES' },
  ],
  telephone: '+34671887372',
  areaServed: [{ '@type': 'City', name: 'A Coruña' }, { '@type': 'City', name: 'Valencia' }, { '@type': 'Country', name: 'España' }],
  founder: EQUIPO.map((p) => ({ '@type': 'Person', name: p.nombre, url: p.linkedin, sameAs: [p.linkedin] })),
  knowsAbout: ['SEO', 'GEO (Generative Engine Optimization)', 'SEO local', 'SEO para YouTube', 'Digital PR', 'Link building', 'Marketing automation', 'Consultoría CRM'],
};

// Nombres legibles de cada tramo de URL para las migas de pan.
const NOMBRES: Record<string, string> = {
  servicios: 'Servicios',
  'sobre-nosotros': 'Sobre nosotros',
  contacto: 'Contacto',
  diagnostico: 'Diagnóstico gratuito',
  blog: 'Blog y guías',
  legal: 'Legal',
  'aviso-legal': 'Aviso legal',
  privacidad: 'Privacidad',
  cookies: 'Cookies',
  ...Object.fromEntries(SERVICIOS.map((s) => [s.slug, s.nombre])),
};

export function migas(pathname: string, final?: string) {
  const tramos = pathname.split('/').filter(Boolean);
  const items = [{ nombre: 'Inicio', url: '/' }];
  let acumulado = '';
  for (const t of tramos) {
    acumulado += `/${t}`;
    items.push({ nombre: NOMBRES[t] ?? t.replace(/-/g, ' '), url: `${acumulado}/` });
  }
  // La última miga puede llevar un nombre propio (el título de un artículo).
  if (final && items.length > 1) items[items.length - 1].nombre = final;
  return items;
}

export function breadcrumbSchema(pathname: string, final?: string) {
  const items = migas(pathname, final);
  if (items.length < 2) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.nombre,
      item: `${BASE_URL}${it.url}`,
    })),
  };
}

export function servicioSchema(opts: { nombre: string; descripcion: string; url: string; precioDesde?: number }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.nombre,
    description: opts.descripcion,
    url: `${BASE_URL}${opts.url}`,
    provider: { '@id': `${BASE_URL}/#organization` },
    areaServed: { '@type': 'Country', name: 'España' },
    ...(opts.precioDesde
      ? { offers: { '@type': 'Offer', priceCurrency: 'EUR', price: opts.precioDesde, priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'EUR', minPrice: opts.precioDesde } } }
      : {}),
  };
}

export function faqSchema(preguntas: { p: string; r: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: preguntas.map((q) => ({
      '@type': 'Question',
      name: q.p,
      acceptedAnswer: { '@type': 'Answer', text: q.r },
    })),
  };
}
