// Copy: «SEO Local Copys» (documento de estructura).
// Ojo con la canibalización: esta página apunta a «SEO local en Valencia»
// (Google Maps, ficha de empresa, reseñas). /servicios/seo-geo-valencia/ debe ir a
// «agencia SEO Valencia» / posicionamiento web + IA. Ver docs/PLAN_ESTRUCTURA_WEB.md.
import type { PaginaServicio } from '../tipos';

export const pagina: PaginaServicio = {
  slug: 'seo-local',
  title: 'SEO Local en Valencia | Más visibilidad para tu negocio',
  description: 'Mejora la presencia de tu negocio en Google y Google Maps. SEO local en Valencia con servicios claros, acciones a medida y sin permanencia.',
  escena: 'seo-local',
  precioDesde: 190,
  hero: {
    h1: 'SEO local en Valencia para que <em>más clientes encuentren</em> tu negocio',
    intro: [
      'Te ayudamos a mejorar tu presencia en las búsquedas locales y en Google Maps con acciones de SEO adaptadas a tu empresa y a la zona donde trabajas.',
      'Cuéntanos qué haces y en qué zonas trabajas. Te recomendaremos por dónde empezar.',
    ],
    cta: 'Solicita una valoración de SEO local',
  },
  bloques: [
    {
      tipo: 'problema',
      titulo: '¿Te encuentran los clientes cuando buscan <em>servicios en tu zona</em>?',
      intro: 'Tu negocio puede ofrecer exactamente lo que alguien necesita, pero si tu web o tu ficha de empresa no muestran información clara y actualizada, esa persona quizá termine contactando con otra opción.',
      puntos: [
        'Tu negocio tiene poca visibilidad en búsquedas locales.',
        'Tu ficha de Google está incompleta o no representa bien tus servicios.',
        'Tu web no explica con claridad qué haces ni dónde trabajas.',
        'Recibes visitas, pero no suficientes llamadas, reservas o solicitudes.',
        'Quieres mejorar tu presencia local, pero no sabes qué priorizar.',
      ],
    },
    {
      tipo: 'zona',
      titulo: 'SEO local en Valencia <em>y alrededores</em>',
      parrafos: [
        'Trabajamos la presencia local de empresas que quieren llegar a clientes de Valencia y de las zonas donde realmente ofrecen sus servicios. El área prioritaria depende de tu ubicación, tu tipo de negocio y la competencia.',
        'Si prestas servicio en varios municipios, definimos contigo qué zonas tiene sentido trabajar y qué páginas o contenidos ayudan a explicarlo con claridad.',
      ],
    },
    {
      tipo: 'paraQuien',
      titulo: '¿Qué negocios pueden beneficiarse del <em>SEO local</em>?',
      puntos: [
        '**Tiendas y comercios:** ropa, floristerías, ferreterías, ópticas o concesionarios.',
        '**Restaurantes y hostelería:** bares, cafeterías, restaurantes, panaderías y catering.',
        '**Servicios a domicilio:** fontaneros, electricistas, limpieza, reformas y control de plagas.',
        '**Salud y bienestar:** clínicas, dentistas, fisioterapeutas, gimnasios, centros de estética y peluquerías.',
        '**Servicios profesionales con atención presencial:** abogados, gestorías, arquitectos, inmobiliarias y asesorías.',
        '**Educación y actividades:** academias, centros de formación, escuelas de música y estudios deportivos.',
        '**Negocios con varias sedes:** cadenas o empresas con distintos establecimientos y equipos locales.',
      ],
    },
    {
      tipo: 'planes',
      titulo: 'Planes que acompañan, <em>más clientes para tu negocio</em>',
      planes: [
        {
          nombre: 'SEO Local Start', precio: '240 €', periodo: 'pago único',
          paraQuien: 'Para negocios con presencia física o que atienden en una zona concreta: restaurantes, peluquerías, talleres, clínicas dentales, inmobiliarias, fontaneros, academias, comercios.',
          incluye: [
            'Optimización completa de la ficha de Google Business Profile.',
            'Estrategia de reseñas: plantillas de respuesta y captación.',
            'Optimización de la web para búsquedas locales («fontanero en Valencia»).',
            'Seguimiento de posiciones en el mapa local.',
            'Informe de resultados.',
          ],
        },
        {
          nombre: 'SEO Local Active', precio: '190 €', periodo: '/mes', destacado: true,
          paraQuien: 'Para negocios que quieren trabajar su visibilidad local de forma sostenida y adaptar las acciones según los avances, las prioridades y los cambios del negocio.',
          incluye: [
            'Seguimiento de la visibilidad y las consultas locales relevantes.',
            'Revisión periódica de tu ficha de Google Business Profile.',
            'Optimización de páginas locales y contenidos acordados.',
            'Recomendaciones sobre reseñas y reputación online.',
            'Análisis de competidores y nuevas oportunidades.',
            'Informe periódico con acciones realizadas y siguientes prioridades.',
          ],
          condiciones: 'Sin permanencia.',
        },
      ],
    },
    {
      tipo: 'proceso',
      titulo: 'De la situación actual a un plan claro. <em>SEO local transparente</em>',
      pasos: [
        { t: 'Conocemos tu negocio', d: 'Nos explicas qué servicios ofreces, quiénes son tus clientes y en qué zonas quieres trabajar.' },
        { t: 'Revisamos tu presencia local', d: 'Analizamos tu web, tu ficha de empresa y las oportunidades de búsqueda relevantes para tu actividad.' },
        { t: 'Priorizamos las mejoras', d: 'Te proponemos acciones concretas, con alcance y entregables definidos. Tú decides qué necesitas contratar.' },
        { t: 'Medimos y ajustamos', d: 'Revisamos la evolución de las acciones acordadas y planteamos los siguientes pasos según los datos y tus objetivos.' },
      ],
    },
    {
      tipo: 'cta',
      titulo: 'Da el siguiente paso para mejorar tu <em>visibilidad local</em>',
      texto: 'Si quieres que más personas de tu zona encuentren y entiendan tu negocio, empecemos por revisar tu presencia en Google y en tu web. Te propondremos opciones concretas para que decidas cuáles encajan con tus objetivos.',
      boton: 'Hablemos de tu negocio',
    },
  ],
  faq: {
    titulo: 'Preguntas frecuentes sobre SEO local',
    preguntas: [
      { p: '¿Qué es el SEO local?', r: 'Es la optimización de la presencia digital de un negocio para búsquedas relacionadas con una ubicación o un área de servicio. Puede incluir la web, la ficha de Google Business Profile, la información del negocio y contenidos locales.' },
      { p: '¿El SEO local sirve para mi empresa?', r: 'Puede ser útil si tus clientes buscan tus servicios en una zona concreta, si tienes un establecimiento que recibe público o si trabajas en un área geográfica definida. La estrategia depende de tu tipo de negocio y de cómo prestas tus servicios.' },
      { p: '¿Qué diferencia hay entre SEO local y SEO tradicional?', r: 'El SEO local prioriza la relación entre el negocio, sus servicios y una ubicación o zona de actividad. El SEO también trabaja búsquedas nacionales o temáticas sin intención geográfica explícita. Ambos enfoques se pueden combinar.' },
      { p: '¿Necesito tener un local físico en Valencia?', r: 'No siempre. Algunos negocios reciben clientes en una dirección física; otros dan servicio en casa del cliente o en un área determinada. La información de tu ficha debe representar cómo funciona tu negocio y ajustarse a las normas de Google.' },
      { p: '¿Cuánto cuesta el SEO local?', r: 'El plan SEO Local Start cuesta 240 € de pago único y el seguimiento continuo SEO Local Active, 190 € al mes sin permanencia.' },
    ],
  },
};
