// Landing pages de captación (/lp/<slug>/). Pensadas para campañas (Google Ads,
// LinkedIn, correo…): sin menú, con un solo objetivo (el formulario) y fuera
// del índice de Google (noindex, sin sitemap) para no competir con las páginas
// de servicio, que son las que posicionan.
//
// Los planes no se copian aquí: se leen de la página del servicio (`servicio`),
// así un cambio de precio se hace en un solo sitio.
//
// Para crear una landing nueva: añadir un objeto a LANDINGS. En los textos se
// admite **negrita**, [enlaces](/ruta/) y, en los títulos, <em>cursiva</em>.
import type { Item } from './tipos';

export interface Landing {
  slug: string;
  servicio: string;            // slug del servicio en servicios.ts (planes y enlace)
  title: string;
  description: string;
  hero: { eyebrow: string; h1: string; intro: string; puntos: string[]; cta: string };
  formulario: { titulo: string; subtitulo: string; boton: string; objetivos: string[] };
  problema: { titulo: string; puntos: string[] };
  trabajo: { titulo: string; intro: string; items: Item[] };
  pasos: { titulo: string; items: Item[] };
  planes: { titulo: string; intro: string };
  garantias: { titulo: string; items: Item[] };
  faq: { titulo: string; preguntas: { p: string; r: string }[] };
  cierre: { titulo: string; texto: string };
}

export const LANDINGS: Landing[] = [
  {
    slug: 'posicionamiento-seo-geo',
    servicio: 'seo-geo-valencia',
    title: 'Posicionamiento SEO y GEO | Diagnóstico de visibilidad gratis · EOS Studio',
    description: 'Más clientes desde Google y desde las respuestas de la IA. Pide un diagnóstico de visibilidad gratuito: te decimos qué frena tu web y por dónde empezar. Sin permanencia.',
    hero: {
      eyebrow: 'Posicionamiento SEO y GEO',
      h1: 'Que tus clientes te encuentren en Google <em>y en las respuestas de la IA</em>',
      intro: 'Revisamos gratis tu web y tu visibilidad en buscadores y en asistentes como ChatGPT, Gemini o Perplexity. Te decimos qué está frenando la llegada de clientes y por dónde conviene empezar.',
      puntos: [
        '**Diagnóstico gratuito** y sin compromiso.',
        '**Sin permanencia:** nos ganamos tu confianza mes a mes.',
        '**Alcance y precio cerrados** antes de empezar.',
      ],
      cta: 'Diagnóstico gratis',
    },
    formulario: {
      titulo: 'Pide tu diagnóstico de visibilidad',
      subtitulo: 'Gratis. Te respondemos por correo con los puntos de mejora más urgentes.',
      boton: 'Quiero mi diagnóstico',
      objetivos: [
        'Conseguir más clientes desde Google',
        'Aparecer en las respuestas de la IA',
        'Recuperar visitas que he perdido',
        'Preparar un rediseño o una migración',
        'Aún no lo sé, decidme vosotros',
      ],
    },
    problema: {
      titulo: '¿Te suena alguna de <em>estas situaciones</em>?',
      puntos: [
        'Tu negocio apenas aparece en las búsquedas importantes de tu sector.',
        'Recibes visitas, pero no se traducen en consultas o ventas.',
        'No sabes qué páginas o acciones te están trayendo clientes.',
        'Ves que la gente pregunta a la IA y no sabes si tu marca aparece.',
      ],
    },
    trabajo: {
      titulo: 'SEO y GEO en una sola estrategia, <em>pensada para vender</em>',
      intro: 'Priorizamos las búsquedas y las páginas que tienen que ver con tus objetivos comerciales, no solo el volumen de visitas.',
      items: [
        { t: 'SEO técnico', d: 'Rastreo, indexación, velocidad y Core Web Vitals: que Google pueda leer y entender bien tu web.' },
        { t: 'Contenidos e intención de búsqueda', d: 'Páginas que responden a lo que busca tu cliente en cada fase, con un enlazado interno que las refuerza.' },
        { t: 'GEO: visibilidad en la IA', d: 'Información clara, coherente y citable para que los asistentes de IA entiendan y puedan mencionar tu marca.' },
        { t: 'Medición que se entiende', d: 'GA4, Search Console y un panel con lo que importa: contactos, ventas y siguientes pasos.' },
      ],
    },
    pasos: {
      titulo: 'Así empezamos',
      items: [
        { t: 'Nos cuentas tu objetivo', d: 'Rellenas el formulario con tu web y lo que quieres conseguir. Dos minutos.' },
        { t: 'Revisamos tu visibilidad', d: 'Analizamos tu web, tu posición en Google y cómo te ven los asistentes de IA, frente a tu competencia.' },
        { t: 'Te proponemos un plan', d: 'Te enviamos los puntos de mejora más urgentes y, si quieres seguir, una propuesta con alcance y precio cerrados.' },
      ],
    },
    planes: {
      titulo: 'Planes claros, <em>sin permanencia</em>',
      intro: 'Elige por dónde empezar o deja que te lo recomendemos tras el diagnóstico.',
    },
    garantias: {
      titulo: 'Resultados transparentes, <em>cero ataduras</em>',
      items: [
        { t: 'Sin letra pequeña', d: 'Estrategias SEO éticas, sostenibles y alineadas con tus objetivos.' },
        { t: 'Transparencia total', d: 'Informes claros con las métricas que de verdad importan: conversiones y retorno de la inversión.' },
        { t: 'Expectativas honestas', d: 'No prometemos posiciones concretas ni apariciones garantizadas en la IA. Sí trabajo constante y medido.' },
        { t: 'Experiencia de gran marca', d: 'Venimos de los equipos de marketing de grandes marcas y llevamos ese método a tu negocio.' },
      ],
    },
    faq: {
      titulo: 'Antes de pedir tu diagnóstico',
      preguntas: [
        { p: '¿El diagnóstico tiene algún coste o compromiso?', r: 'No. Es gratuito y no te obliga a nada. Revisamos tu punto de partida y te decimos qué mejorarías primero; si quieres seguir con nosotros, te enviamos una propuesta aparte.' },
        { p: '¿Qué diferencia hay entre SEO y GEO?', r: 'El SEO trabaja la visibilidad de tu web en buscadores como Google. El GEO busca que tu marca se entienda y aparezca en las respuestas que generan los asistentes de IA. Se trabajan juntos: una web bien posicionada y con autoridad es la base de los dos.' },
        { p: '¿Podéis garantizar que aparezca primero o que me cite ChatGPT?', r: 'No, y desconfía de quien lo haga. Ni Google ni los asistentes de IA permiten garantizar una posición o una mención. Lo que sí hacemos es trabajar lo que aumenta tus opciones y medirlo con indicadores claros.' },
        { p: '¿Cuánto tiempo se tarda en ver resultados?', r: 'Depende del estado de la web, la competencia y lo rápido que se implementen los cambios. Tras el diagnóstico te proponemos prioridades e indicadores para revisar la evolución, sin prometer fechas.' },
        { p: '¿Tengo que rehacer mi web?', r: 'No necesariamente. Primero vemos qué conviene conservar, mejorar o crear. A veces bastan ajustes en páginas concretas.' },
        { p: '¿Trabajáis solo en Valencia y A Coruña?', r: 'Tenemos sede en las dos ciudades, pero el posicionamiento SEO y GEO lo trabajamos en remoto para empresas de toda España.' },
      ],
    },
    cierre: {
      titulo: '¿Vemos dónde estás <em>y por dónde empezar</em>?',
      texto: 'Déjanos tu web y tu objetivo. Te respondemos con un diagnóstico gratuito y sin compromiso.',
    },
  },
];

export const landing = (slug: string) => LANDINGS.find((l) => l.slug === slug);
