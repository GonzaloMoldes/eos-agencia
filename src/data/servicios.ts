// Catálogo de servicios. Es la fuente de verdad del menú, del hub /servicios/,
// del sitemap y del enlazado interno entre servicios.
//
// `publicado: false` = todavía no hay copy aprobado. Esos servicios aparecen en
// el hub como «próximamente», SIN enlace: publicar páginas vacías o finas resta
// más de lo que suma. Al tener el copy, se crea la página y se pasa a true.

export type Categoria = 'posicionamiento' | 'autoridad' | 'ventas';

export interface Servicio {
  slug: string;
  nombre: string;          // nombre corto (menú, tarjetas)
  resumen: string;         // una frase para la tarjeta del hub
  categoria: Categoria;
  publicado: boolean;
}

export const CATEGORIAS: Record<Categoria, { nombre: string; letra: string; descripcion: string }> = {
  posicionamiento: {
    nombre: 'Posicionamiento',
    letra: 'Α',
    descripcion: 'Que te encuentren en Google, en Maps, en YouTube y en las respuestas de la IA.',
  },
  autoridad: {
    nombre: 'Autoridad y contenido',
    letra: 'Β',
    descripcion: 'Que hablen de tu marca y que la IA la reconozca como referente.',
  },
  ventas: {
    nombre: 'Ventas y automatización',
    letra: 'Γ',
    descripcion: 'Que cada contacto llegue a cliente sin perderse por el camino.',
  },
};

export const SERVICIOS: Servicio[] = [
  { slug: 'seo-geo-valencia', nombre: 'SEO y GEO en Valencia', resumen: 'Posicionamiento en Google y en buscadores de IA para empresas de Valencia.', categoria: 'posicionamiento', publicado: false },
  { slug: 'seo-local', nombre: 'SEO local', resumen: 'Google Business Profile, reseñas y búsquedas «cerca de mí» en tu zona.', categoria: 'posicionamiento', publicado: true },
  { slug: 'seo-ecommerce', nombre: 'SEO para ecommerce', resumen: 'Categorías, fichas de producto y arquitectura que venden.', categoria: 'posicionamiento', publicado: false },
  { slug: 'seo-youtube', nombre: 'SEO para YouTube', resumen: 'Canal y vídeos optimizados para el segundo buscador del mundo.', categoria: 'posicionamiento', publicado: true },
  { slug: 'seo-pinterest', nombre: 'SEO para Pinterest', resumen: 'Pines y tableros que captan tráfico durante meses.', categoria: 'posicionamiento', publicado: false },
  { slug: 'chatgpt-ads', nombre: 'ChatGPT Ads', resumen: 'Publicidad en asistentes de IA, medida desde el primer euro.', categoria: 'posicionamiento', publicado: false },
  { slug: 'seo-marca-blanca', nombre: 'SEO en marca blanca', resumen: 'Ejecutamos el SEO de tus clientes con tu marca, no la nuestra.', categoria: 'posicionamiento', publicado: false },
  { slug: 'autoridad-digital', nombre: 'Autoridad digital', resumen: 'Digital PR, link building y marca para que la IA te reconozca.', categoria: 'autoridad', publicado: true },
  { slug: 'marketing-contenidos', nombre: 'Marketing de contenidos', resumen: 'Ecosistemas de contenido que responden a tu cliente en cada fase.', categoria: 'autoridad', publicado: false },
  { slug: 'marketing-automation', nombre: 'Marketing automation', resumen: 'Email, SMS, push y WhatsApp conectados en flujos que convierten.', categoria: 'ventas', publicado: true },
  { slug: 'consultoria-crm', nombre: 'Consultoría CRM', resumen: 'Pipeline, seguimiento y reporting para vender con método.', categoria: 'ventas', publicado: true },
];

export const urlServicio = (slug: string) => `/servicios/${slug}/`;
export const servicio = (slug: string) => {
  const s = SERVICIOS.find((x) => x.slug === slug);
  if (!s) throw new Error(`Servicio desconocido: ${slug}`);
  return s;
};
