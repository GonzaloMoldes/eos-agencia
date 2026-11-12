// Copy: «SEO y GEO para Ecommerce» (texto facilitado por el equipo).
// Palabra clave: SEO para ecommerce / SEO tiendas online / GEO ecommerce.
// Los planes y la auditoría se leen de la página de SEO y GEO (un solo sitio para los precios).
import type { Bloque, PaginaServicio } from '../tipos';
import { pagina as seoGeo } from './seo-geo-valencia';

const planes = seoGeo.bloques.find((b) => b.tipo === 'planes') as Extract<Bloque, { tipo: 'planes' }>;
const extras = seoGeo.bloques.find((b) => b.tipo === 'extras') as Extract<Bloque, { tipo: 'extras' }>;

export const pagina: PaginaServicio = {
  slug: 'seo-ecommerce',
  title: 'SEO y GEO para Ecommerce | Más ventas en tu tienda online',
  description: 'Servicio de SEO y GEO para tiendas online: posiciona tus productos en Google y en respuestas IA de ChatGPT y Gemini. Pide tu diagnóstico gratuito.',
  escena: 'seo-ecommerce',
  precioDesde: 690,
  hero: {
    h1: 'SEO y GEO para ecommerce. <em>Tu tienda online en Google y en las respuestas de la IA</em>',
    intro: [
      'Los compradores descubren productos en Google, pero también preguntando a la IA. Si tu tienda online no aparece en ninguno de los dos sitios, estás perdiendo ventas todos los días.',
      'Combinamos SEO tradicional y GEO (Generative Engine Optimization) para que tu marca, tus categorías y tus productos sean visibles, citados y recomendados donde tus clientes buscan.',
    ],
    cta: 'Solicita tu diagnóstico gratuito',
  },
  bloques: [
    {
      tipo: 'zona',
      etiqueta: 'Por qué SEO',
      titulo: 'SEO que <em>aumenta tus ventas</em>',
      parrafos: [
        'La publicidad de pago da resultados rápidos, pero depende de tu presupuesto: cuando dejas de invertir, el tráfico desaparece. El SEO es un juego a medio y largo plazo, pero construye un canal que sigue generando ventas mes tras mes sin depender del coste por clic.',
        'Con nuestra estrategia conseguirás **más visibilidad para tus categorías y productos** en Google y en la IA, llegarás a **compradores que buscan lo que vendes** y harás crecer de forma sostenible **un activo que se fortalece con el tiempo**.',
      ],
    },
    {
      tipo: 'problema',
      titulo: '¿Te suenan <em>estas situaciones</em>?',
      puntos: [
        '**Tu tienda apenas aparece en las búsquedas que importan.** Tus competidores se posicionan para las categorías y productos que tú vendes, y tú no.',
        '**Recibes visitas, pero no se traducen en pedidos.** El tráfico llega, pero los carritos se quedan a medias o los usuarios se van sin comprar.',
        '**No sabes qué páginas ni qué acciones generan ventas.** Inviertes en marketing, pero no tienes claro qué categorías, fichas de producto o contenidos aportan ingresos reales.',
        '**Quieres mejorar tu presencia en Google y aparecer también en la búsqueda con IA.** Necesitas una estrategia clara para que ChatGPT, Gemini y Perplexity conozcan y recomienden tu tienda.',
      ],
    },
    {
      tipo: 'proceso',
      titulo: 'Cómo trabajamos: <em>nuestro proceso en 4 pasos</em>',
      pasos: [
        { t: 'Diagnóstico y auditoría', d: 'Analizamos tu situación actual, tu competencia y las oportunidades de mayor impacto.' },
        { t: 'Estrategia y priorización', d: 'Definimos un plan con acciones ordenadas por impacto y esfuerzo, alineado con tus objetivos de ventas.' },
        { t: 'Implementación y optimización', d: 'Ejecutamos las mejoras técnicas, de contenido y de autoridad, coordinándonos con tu equipo o tu desarrollador.' },
        { t: 'Seguimiento y mejora continua', d: 'Medimos, ajustamos y escalamos lo que funciona, con reuniones periódicas y total transparencia.' },
      ],
      cta: 'Solicita un diagnóstico gratuito',
    },
    {
      tipo: 'beneficios',
      titulo: 'Lo que tu tienda ganará con <em>una estrategia SEO que vende</em>',
      items: [
        { t: 'Más tráfico que compra', d: 'Posiciona tus categorías y fichas de producto en las búsquedas con intención de compra. Atrae a clientes que ya saben lo que quieren y están listos para pedir.' },
        { t: 'Visibilidad también en la IA', d: 'Haz que ChatGPT, Gemini y Perplexity conozcan tu tienda y la mencionen cuando alguien pregunta por lo que vendes. Estarás donde tus clientes empiezan a buscar.' },
        { t: 'Ventas sostenibles, menos dependencia de ads', d: 'Construye un canal orgánico que sigue generando ingresos mes tras mes, sin pagar por cada clic y con un coste por venta cada vez menor.' },
      ],
    },
    { ...planes, titulo: 'Planes de SEO y GEO <em>para tu tienda online</em>' },
    { ...extras, titulo: '¿Prefieres empezar por <em>una auditoría</em>?', items: extras.items.filter((x) => /auditor/i.test(x.nombre)) },
    {
      tipo: 'garantias',
      etiqueta: 'En qué te ayudamos',
      titulo: '¿En qué podemos ayudar <em>a tu tienda online</em>?',
      puntos: [
        { t: 'Auditoría SEO de ecommerce', d: 'diagnóstico profundo de la salud de tu tienda, desde el rastreo y la indexación hasta las categorías, fichas y filtros que frenan tus ventas.' },
        { t: 'SEO de categorías y fichas de producto', d: 'optimización de títulos, descripciones, imágenes y datos estructurados para posicionar en búsquedas con intención de compra y mejorar la conversión.' },
        { t: 'Arquitectura e intención de búsqueda', d: 'estructura de categorías, enlazado interno y contenido alineados con lo que tus clientes buscan en cada fase de la compra.' },
        { t: 'SEO técnico para ecommerce', d: 'solución de problemas de indexación, rastreo, facetas, paginaciones, contenido duplicado, velocidad y Core Web Vitals.' },
        { t: 'Estrategia y creación de contenidos', d: 'guías de compra, comparativas y contenidos de blog pensados para atraer tráfico cualificado hacia tus productos.' },
        { t: 'Revisión de tu estrategia SEO actual', d: 'análisis detallado de lo que funciona en tu tienda, lo que no y las acciones prioritarias para corregirlo.' },
      ],
    },
    {
      tipo: 'cta',
      titulo: 'Solicita tu <em>diagnóstico SEO gratuito</em>',
      texto: 'Descubre en qué punto está tu tienda, qué te frena y qué oportunidades tienes en Google y en la IA generativa. Sin compromiso.',
      boton: 'Solicitar mi diagnóstico',
    },
  ],
  faq: {
    titulo: 'Preguntas frecuentes',
    preguntas: [
      { p: '¿Cuánto tarda en notarse el SEO en una tienda online?', r: 'Normalmente los primeros avances aparecen entre los 3 y los 6 meses, aunque depende de la competencia, el estado técnico y la autoridad de tu dominio. Las mejoras técnicas y de fichas suelen notarse antes.' },
      { p: '¿Qué diferencia hay entre SEO y GEO?', r: 'El SEO busca posicionar tus páginas en los resultados de los buscadores. El GEO busca que los motores de IA generativa comprendan, citen y recomienden tu marca y tus productos en sus respuestas. Se complementan.' },
      { p: '¿Se puede garantizar que ChatGPT o Gemini recomienden mi tienda?', r: 'No. Ninguna agencia puede garantizarlo, porque estos sistemas no son controlables. Lo que sí hacemos es aumentar de forma medible las probabilidades de que tu marca sea mencionada, trabajando contenido, autoridad y datos estructurados.' },
      { p: '¿Funciona para cualquier plataforma de ecommerce?', r: 'Sí. Trabajamos con Shopify, WooCommerce y PrestaShop, adaptando las acciones a cada plataforma.' },
      { p: '¿Qué inversión necesito?', r: 'Depende del tamaño del catálogo, la competencia y los objetivos. Tras la auditoría te presentamos una propuesta a medida.' },
      { p: '¿Cómo mediré los resultados?', r: 'Con informes periódicos de tráfico orgánico, ingresos atribuidos, posiciones y visibilidad en los buscadores de IA.' },
    ],
  },
};
