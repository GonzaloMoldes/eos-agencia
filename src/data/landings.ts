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
    herramientas?: string[];             // «¿Qué herramienta usas ahora?» (opcional)
    ayudaWeb?: string;                   // texto de ayuda bajo «URL de tu web»
    siguientes: { t: string; d: string }[];  // «¿Qué pasa ahora?» tras enviar
  };
  llevas: { titulo: string; intro: string; items: Item[] };
  // Opcional: áreas de trabajo con sus casos concretos («qué hacemos», en detalle).
  areas?: { titulo: string; intro: string; items: (Item & { puntos: string[] })[] };
  // Opcional: modelo de trabajo, de tu empresa al resultado.
  modelo?: { titulo: string; intro: string; items: Item[] };
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
      entrada: 'Somos antiguos colegas de los equipos de marketing de grandes marcas. Trabajamos en remoto para empresas de toda España. Lo que cambia entre una agencia y otra no son las promesas: es qué hacen cada mes con tu web y si te lo cuentan.',
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
        { t: 'Para toda España', d: 'En remoto, con reuniones por videollamada y todo lo importante por escrito.' },
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
        { t: 'Equipo certificado', d: 'Certificaciones de Google Analytics, HubSpot y SEO para ecommerce, entre otras. Están en [Sobre nosotros](/sobre-nosotros/).' },
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
        { p: '¿Trabajáis con empresas de toda España?', r: 'Sí. Trabajamos en remoto para empresas de cualquier zona, con reuniones por videollamada.' },
      ],
    },
    cierre: {
      titulo: 'Dinos tu web y <em>te decimos qué le pasa</em>',
      texto: 'Sin compromiso y sin llamada comercial de por medio. Si no hay nada que mejorar, también te lo decimos.',
    },
  },
  {
    slug: 'marketing-automation',
    servicio: 'marketing-automation',
    title: 'Agencia de marketing automation | Flujos que convierten · EOS Studio',
    description: 'Automatizamos tus comunicaciones por email, SMS, push y WhatsApp para que ningún contacto se quede sin seguimiento. Precios publicados, alcance cerrado y licencias aparte. Cuéntanos qué quieres automatizar.',
    hero: {
      antetitulo: 'Marketing automation con método de gran marca',
      h1: 'Agencia de marketing automation <em>para que ningún contacto se enfríe</em>',
      entrada: 'Venimos de los equipos de marketing de grandes marcas y llevamos ese método a tu negocio: menos envíos a mano, seguimientos a tiempo y datos que te dicen qué funciona.',
      datos: [
        { t: 'Desde 249 €/mes', d: 'precio publicado, alcance por escrito' },
        { t: 'Desde 490 €', d: 'para implementar tu primer flujo' },
        { t: 'Licencias aparte', d: 'nuestros honorarios, sin costes escondidos' },
      ],
    },
    formulario: {
      titulo: 'Cuéntanos qué quieres automatizar',
      subtitulo: 'Te respondemos con una primera lectura por escrito: qué automatizaríamos primero y con qué herramienta.',
      boton: 'Quiero mi diagnóstico',
      servicio: 'Marketing automation',
      necesidades: [
        'Hacer seguimiento automático de mis leads',
        'Email marketing y newsletters',
        'Flujos de ecommerce (bienvenida, carrito, recompra)',
        'Conectar mi CRM con el marketing',
        'Automatizar WhatsApp, SMS o chat',
        'Otra cosa',
      ],
      inversiones: [
        'Menos de 250 €/mes',
        'Entre 250 y 600 €/mes',
        'Entre 600 y 1.000 €/mes',
        'Más de 1.000 €/mes',
        'Prefiero un pago único (implementación)',
      ],
      herramientas: [
        'Ninguna todavía',
        'Klaviyo',
        'HubSpot',
        'Mailchimp o Brevo',
        'ActiveCampaign',
        'Salesforce',
        'Otra',
      ],
      ayudaWeb: 'Para ver cómo captas contactos hoy.',
      siguientes: [
        { t: 'Revisamos lo que nos cuentas', d: 'Tu web, cómo captas contactos y la herramienta que usas.' },
        { t: 'Te decimos qué automatizaríamos', d: 'Por escrito y por orden: el primer flujo, qué necesita y qué esperar de él.' },
        { t: 'Decides tú', d: 'Si encaja, te pasamos una propuesta con alcance cerrado. Si no lo vemos, también te lo decimos.' },
      ],
    },
    llevas: {
      titulo: 'Lo que entra en el servicio, <em>escrito antes de empezar</em>',
      intro: 'Alcance definido, costes separados y flujos que puedes entender.',
      items: [
        { t: 'Una persona de referencia', d: 'Alguien que conoce tu negocio y coordina a los especialistas del equipo. Sin intermediarios ni cuentas que pasan de mano en mano.' },
        { t: 'Precio publicado', d: 'Desde 249 €, 599 € o 990 € al mes según el plan, e implementación desde 490 €. Está escrito más abajo, no detrás de una llamada.' },
        { t: 'Alcance por escrito', d: 'Sabes qué flujos, campañas e integraciones entran antes de empezar. Lo que no está en la propuesta no aparece después en la factura.' },
        { t: 'Probado antes de activar', d: 'Cada automatización se comprueba antes de ponerla en marcha, para que tus contactos no reciban un mensaje equivocado.' },
        { t: 'Flujos documentados', d: 'Cada flujo queda documentado según su complejidad: qué lo dispara, qué envía y cuándo termina.' },
        { t: 'Costes separados', d: 'Nuestros honorarios por un lado; licencias, créditos de mensajería y costes de envío, por otro.' },
        { t: 'Revisión cada mes', d: 'Miramos cómo funcionan los flujos y te proponemos mejoras según los resultados.' },
        { t: 'Consentimiento revisado', d: 'Antes de activar nada repasamos las autorizaciones, las bajas y las preferencias de tus contactos.' },
      ],
    },
    areas: {
      titulo: 'Las posibilidades dependen de tu negocio. <em>Partimos de tu objetivo</em>',
      intro: 'Primero decidimos qué quieres conseguir; después, qué automatizar, con qué datos y en qué canal.',
      items: [
        {
          t: 'Flujos y recorridos',
          d: 'Comunicaciones que se envían solas cuando pasa algo: un registro, una compra, una respuesta o un silencio.',
          puntos: [
            'Bienvenida y lead nurturing para acompañar la decisión.',
            'Seguimiento comercial con avisos a tu equipo de ventas.',
            'Carrito abandonado, poscompra y recompra en ecommerce.',
            'Reactivación de contactos inactivos.',
            'Recorridos con email, SMS, push y WhatsApp coordinados.',
          ],
        },
        {
          t: 'Datos y segmentación',
          d: 'Los datos son la materia prima: sin una base ordenada no hay automatización que funcione.',
          puntos: [
            'Revisión de tu base de contactos y de lo que sabes de ellos.',
            'Segmentos por datos, intereses y comportamiento.',
            'Altas, bajas y preferencias bien gestionadas.',
            'Integración con tu CRM y otras herramientas cuando es viable.',
          ],
        },
        {
          t: 'Mensajes y materiales',
          d: 'Cada flujo necesita mensajes que la gente quiera abrir y que lleven al siguiente paso.',
          puntos: [
            'Diseño y maquetación de emails y newsletters.',
            'Contenidos de las secuencias a partir de tu información.',
            'Mensajes para SMS, notificaciones push y WhatsApp.',
            'Criterios de salida para no insistir a quien ya respondió.',
          ],
        },
        {
          t: 'Medición y mejora',
          d: 'Una automatización no se deja en marcha y se olvida: se mide y se ajusta.',
          puntos: [
            'Métricas de cada flujo: entregas, clics, respuestas y conversiones.',
            'Objetivos y conversiones configurados.',
            'Pruebas y optimización de los flujos.',
            'Cuadro de mando con los indicadores acordados.',
          ],
        },
      ],
    },
    modelo: {
      titulo: 'De tu objetivo al flujo en marcha, <em>con un solo interlocutor</em>',
      intro: 'Un equipo multidisciplinar detrás y una persona delante.',
      items: [
        { t: 'Tu empresa', d: 'Nos cuentas tus objetivos, tus clientes y las herramientas que ya usas.' },
        { t: 'Tu persona de referencia', d: 'Coordina el proyecto, te cuenta lo que se hace y por qué, y prioriza contigo.' },
        { t: 'Especialistas del equipo', d: 'Estrategia, datos, contenidos y configuración técnica de cada flujo.' },
        { t: 'Revisión mensual', d: 'Medimos, te explicamos los resultados y proponemos los siguientes pasos.' },
      ],
    },
    cuesta: {
      titulo: 'Tres planes para <em>cada fase de tu negocio</em>',
      intro: 'Está publicado a propósito: si tu presupuesto está por debajo, te ahorramos la llamada.',
      nota: 'Son precios de partida: el alcance final depende de la herramienta, el volumen de contactos, los canales y las integraciones, y se cierra por escrito en la propuesta. Licencias, créditos de mensajería y costes de envío, aparte.',
    },
    garantias: {
      titulo: 'Transparencia en la automatización, <em>sin costes ocultos</em>',
      intro: 'Definimos el alcance, las herramientas y las responsabilidades antes de implementar nada.',
      items: [
        { t: 'Alcance definido', d: 'Conoces los flujos, las campañas y las integraciones incluidos en el servicio.' },
        { t: 'Tus sistemas, bajo tu control', d: 'Las cuentas, los datos y los accesos se gestionan conforme a lo acordado en la propuesta.' },
        { t: 'Medición transparente', d: 'Recibes información de las acciones realizadas y de los indicadores disponibles, sin adornos.' },
        { t: 'Equipo certificado', d: 'Certificaciones de Klaviyo (producto y entregabilidad) y de HubSpot en inbound marketing, entre otras. Están en [Sobre nosotros](/sobre-nosotros/).' },
      ],
    },
    faq: {
      titulo: 'Lo que nos preguntáis antes de contratar',
      preguntas: [
        { p: '¿Cuánto cuesta?', r: 'La gestión mensual va desde 249 € (Automation Esencial), 599 € (Crecimiento) o 990 € (Omnicanal). Implementar tu primera automatización va desde 490 € de pago único. Las licencias y los costes de envío se presupuestan aparte.' },
        { p: '¿Puedo empezar con un solo flujo?', r: 'Sí. El plan Esencial está pensado para eso: un flujo acordado, bien configurado y medido. Cuando funciona, se añaden los siguientes.' },
        { p: '¿Necesito un CRM?', r: 'No siempre. Muchas automatizaciones funcionan desde una plataforma de marketing. Un CRM resulta útil cuando quieres coordinar los mensajes con el estado comercial de cada contacto y con tu equipo de ventas.' },
        { p: '¿Con qué herramientas trabajáis?', r: 'Con la que mejor encaje con tu negocio y tu volumen. Si ya usas una, partimos de ella; si no, te recomendamos una. El equipo está certificado en Klaviyo y HubSpot, entre otras.' },
        { p: '¿Cuánto se tarda en tener un flujo en marcha?', r: 'Depende de la complejidad, de la calidad de los datos y de las integraciones. Una automatización sencilla lleva mucho menos que un sistema omnicanal conectado con un CRM. Tras revisar tu caso, te damos un calendario realista.' },
        { p: '¿Qué necesitáis de mí para empezar?', r: 'Acceso a tu herramienta de email o CRM (o la decisión de cuál usar), saber cómo captas contactos hoy y el objetivo que quieres priorizar.' },
        { p: '¿Y la protección de datos?', r: 'Antes de activar las automatizaciones revisamos las autorizaciones, la gestión de bajas y las preferencias de los contactos, para que cada comunicación se ajuste a la normativa y a las condiciones de cada canal.' },
      ],
    },
    cierre: {
      titulo: 'Cuéntanos qué haces a mano y <em>te decimos qué automatizar</em>',
      texto: 'Sin compromiso. Si no vemos dónde aportar, también te lo decimos.',
    },
  },
];

export const landing = (slug: string) => LANDINGS.find((l) => l.slug === slug);
