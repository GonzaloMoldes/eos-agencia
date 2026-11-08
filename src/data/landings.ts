// Landing pages de captación (/lp/<slug>/). Pensadas para campañas (Google Ads,
// LinkedIn, correo…): sin menú, con un solo objetivo (el formulario) y fuera
// del índice de Google (noindex, sin sitemap) para no competir con las páginas
// de servicio, que son las que posicionan.
//
// Estructura (la de una landing que vende «somos la ayuda»): promesa y tres
// datos concretos junto al formulario → qué te llevas → lo que cuesta →
// garantías → preguntas antes de contratar → cierre con el formulario.
//
// Los planes y los servicios sueltos no se copian aquí: se leen de la página
// del servicio (`servicio`), así un cambio de precio se hace en un solo sitio.
//
// Para crear una landing nueva: añadir un objeto a LANDINGS. En los textos se
// admite **negrita**, [enlaces](/ruta/) y, en los títulos, <em>cursiva</em>.
import type { Item } from './tipos';

export interface Landing {
  slug: string;
  servicio: string;            // slug del servicio en servicios.ts (planes y extras)
  title: string;
  description: string;
  hero: {
    antetitulo: string;
    h1: string;
    entrada: string;
    datos: { t: string; d: string }[];   // tres condiciones bajo el titular
  };
  formulario: {
    titulo: string;
    subtitulo: string;
    boton: string;
    servicio: string;                    // cómo llega el lead en el correo
    necesidades: string[];               // «¿Qué necesitas?»
    inversiones: string[];               // «¿Qué inversión mensual manejas?»
    siguientes: { t: string; d: string }[];  // «¿Qué pasa ahora?» tras enviar
  };
  llevas: { titulo: string; intro: string; items: Item[] };
  cuesta: { titulo: string; intro: string; nota: string };
  garantias: { titulo: string; intro: string; items: Item[] };
  faq: { titulo: string; preguntas: { p: string; r: string }[] };
  cierre: { titulo: string; texto: string };
}

export const LANDINGS: Landing[] = [
  {
    slug: 'posicionamiento-seo-geo',
    servicio: 'seo-geo-valencia',
    title: 'Agencia SEO y GEO | Te decimos qué le pasa a tu web · EOS Studio',
    description: 'Posicionamiento en Google y en las respuestas de la IA con método de gran marca. Precios publicados, informe mensual y sin permanencia. Dinos tu web y te decimos qué le pasa.',
    hero: {
      antetitulo: 'SEO y GEO con método de gran marca',
      h1: 'Agencia SEO y GEO <em>para que te encuentren y te elijan</em>',
      entrada: 'Somos antiguos colegas de los equipos de marketing de grandes marcas. Trabajamos desde A Coruña y Valencia para toda España. Lo que cambia entre una agencia y otra no son las promesas: es qué hacen cada mes con tu web y si te lo cuentan.',
      datos: [
        { t: 'Desde 690 €/mes', d: 'precio publicado y sin permanencia' },
        { t: 'Informe y reunión', d: 'cada mes, con lo hecho y lo que viene' },
        { t: 'Diagnóstico gratis', d: 'por escrito, sin llamada previa' },
      ],
    },
    formulario: {
      titulo: 'Cuéntanos qué pasa con tu web',
      subtitulo: 'Te respondemos con una primera lectura por escrito, no con un folleto.',
      boton: 'Quiero mi diagnóstico',
      servicio: 'Posicionamiento SEO y GEO',
      necesidades: [
        'Posicionar mi web en Google',
        'Aparecer en las respuestas de la IA',
        'He perdido tráfico y no sé por qué',
        'Una auditoría SEO puntual',
        'Aparecer en Google Maps (SEO local)',
        'Otra cosa',
      ],
      inversiones: [
        'Menos de 300 €/mes',
        'Entre 300 y 700 €/mes',
        'Entre 700 y 1.000 €/mes',
        'Más de 1.000 €/mes',
        'Prefiero un pago único (auditoría)',
      ],
      siguientes: [
        { t: 'Revisamos lo que nos cuentas', d: 'Miramos tu web y tu visibilidad antes de contestarte.' },
        { t: 'Te decimos qué le pasa', d: 'Por escrito y por orden, con por dónde empezaríamos.' },
        { t: 'Decides tú', d: 'Si encaja, te pasamos una propuesta cerrada. Si no lo vemos, también te lo decimos.' },
      ],
    },
    llevas: {
      titulo: 'Lo que entra en el plan, <em>escrito antes de empezar</em>',
      intro: 'Sin letra pequeña y sin extras que aparecen por el camino.',
      items: [
        { t: 'Una persona de referencia', d: 'Alguien que conoce tu negocio y coordina a los especialistas del equipo. Sin intermediarios ni cuentas que pasan de mano en mano.' },
        { t: 'Precio publicado', d: '690 € o 990 € al mes según el plan, y desde 1.490 € en proyectos grandes. Está escrito más abajo, no detrás de una llamada.' },
        { t: 'Sabes en qué se va tu inversión', d: 'Cada mes, un informe detallado y una reunión: lo que se ha hecho, por qué y lo que viene después.' },
        { t: 'SEO y GEO a la vez', d: 'Una sola estrategia para que te encuentren en Google y para que los asistentes de IA entiendan y puedan citar tu marca.' },
        { t: 'Medición montada', d: 'Configuramos GA4 y Search Console y te dejamos un panel con lo que importa: visitas que acaban en contacto o en venta.' },
        { t: 'Contenidos que trabajan', d: 'Proponemos y redactamos los contenidos, y ordenamos el enlazado interno para que las páginas clave ganen fuerza.' },
        { t: 'Tus cuentas, a tu nombre', d: 'Datos, accesos y herramientas siempre bajo tu control. Nuestros honorarios por un lado; licencias de terceros, por otro.' },
        { t: 'Para toda España', d: 'Desde A Coruña y Valencia, con reuniones por videollamada y todo lo importante por escrito.' },
      ],
    },
    cuesta: {
      titulo: 'Tres planes, <em>un mismo método</em>',
      intro: 'Está publicado a propósito: si tu presupuesto está por debajo, te ahorramos la llamada.',
      nota: 'Son los mismos precios que publicamos en la web: no hay tarifa distinta por venir de un anuncio. Sin permanencia.',
    },
    garantias: {
      titulo: 'Tu tranquilidad <em>no es negociable</em>',
      intro: 'Nos ganamos tu confianza mes a mes.',
      items: [
        { t: 'Sin permanencia', d: 'No pedimos contratos de 6 o 12 meses. Si no aportamos el valor que tu empresa necesita, eres libre de irte.' },
        { t: 'Transparencia total', d: 'Informes claros con las métricas que de verdad importan: contactos, ventas y retorno de la inversión.' },
        { t: 'Expectativas honestas', d: 'No prometemos posiciones concretas ni apariciones garantizadas en la IA. Nadie puede hacerlo con honestidad.' },
        { t: 'Equipo certificado', d: 'Certificaciones de Google Analytics, HubSpot y SEO para ecommerce, entre otras. Están en [nuestros perfiles](/sobre-nosotros/).' },
      ],
    },
    faq: {
      titulo: 'Lo que nos preguntáis antes de contratar',
      preguntas: [
        { p: '¿Cuánto cuesta?', r: 'El Plan SEO Esencial son 690 € al mes y el Crecimiento, 990 €. Para proyectos grandes, el Plan Expert va desde 1.490 €. La auditoría suelta va desde 1.290 € de pago único. Sin permanencia.' },
        { p: '¿Cuánto tarda en notarse?', r: 'Depende del estado de tu web, de la competencia y de lo rápido que se apliquen los cambios. El Plan Esencial se plantea con objetivos a 3 meses. Desconfía de quien te dé una fecha exacta para una posición.' },
        { p: '¿Me garantizáis salir en ChatGPT o en Google?', r: 'No, y nadie puede hacerlo con honestidad. Lo que sí hacemos es trabajar lo que aumenta tus opciones de aparecer y de ser citado, y medirlo cada mes con indicadores claros.' },
        { p: '¿Qué necesitáis de mí para empezar?', r: 'Acceso a tu web, a Google Search Console y a Analytics. Si no los tienes configurados, te los montamos nosotros.' },
        { p: '¿Y si mi presupuesto es menor?', r: 'Te lo decimos y no te hacemos perder el tiempo: por eso los precios están escritos y el formulario pregunta por la inversión. Si tienes un negocio local, el SEO Local Start (240 € de pago único) puede ser un buen punto de partida.' },
        { p: '¿Puedo contratar solo la auditoría?', r: 'Sí. La Auditoría SEO Completa va desde 1.290 € de pago único, con su documento de hallazgos priorizado y una hoja de ruta a 6-12 meses. No obliga a contratar nada después.' },
        { p: '¿Trabajáis fuera de A Coruña y Valencia?', r: 'Sí. Tenemos sede en las dos ciudades y trabajamos para empresas de toda España por videollamada.' },
      ],
    },
    cierre: {
      titulo: 'Dinos tu web y <em>te decimos qué le pasa</em>',
      texto: 'Sin compromiso y sin llamada comercial de por medio. Si no hay nada que mejorar, también te lo decimos.',
    },
  },
];

export const landing = (slug: string) => LANDINGS.find((l) => l.slug === slug);
