// Copy: «Agencia GEO y SEO en Valencia» (documento de Google Docs facilitado por el equipo).
// Palabra clave: «agencia SEO Valencia» / «agencia GEO Valencia» — posicionamiento de la web
// completa más GEO. Lo de fichas de Google y Maps vive en /servicios/seo-local/ (no canibalizar).
import type { PaginaServicio } from '../tipos';

export const pagina: PaginaServicio = {
  slug: 'seo-geo-valencia',
  title: 'Agencia GEO y SEO en Valencia | Visibilidad que genera oportunidades',
  description: 'Mejora la visibilidad de tu empresa en Google y en las respuestas de IA con una estrategia GEO y SEO basada en tu mercado, tus objetivos y métricas claras.',
  escena: 'seo-geo-valencia',
  precioDesde: 690,
  hero: {
    h1: 'Agencia GEO y SEO en Valencia para que <em>te encuentren y te elijan</em>',
    intro: [
      'Ayudamos a empresas de Valencia a mejorar su visibilidad en buscadores y en experiencias de búsqueda impulsadas por IA. Combinamos estrategia SEO, contenidos útiles, optimización técnica y medición para atraer visitas con potencial de convertirse en clientes.',
    ],
    cta: 'Cuéntanos tus objetivos',
  },
  bloques: [
    {
      tipo: 'problema',
      titulo: '¿Tu empresa aparece cuando un cliente busca lo que ofreces <em>en Google o en ChatGPT</em>?',
      intro: 'Tener una web no basta si tus clientes no la encuentran o no entienden rápidamente por qué deberían elegirte. ¿Qué está frenando tu visibilidad y qué conviene mejorar para que más clientes potenciales te encuentren, entiendan lo que ofreces y den el siguiente paso?',
      puntos: [
        'Tu negocio apenas aparece en las búsquedas importantes de tu sector.',
        'Recibes visitas, pero no se traducen en consultas o ventas.',
        'No sabes qué páginas o acciones están contribuyendo a captar clientes.',
        'Quieres mejorar tu presencia en buscadores y explorar la búsqueda con IA con una estrategia clara.',
      ],
    },
    {
      tipo: 'enfoque',
      titulo: '¿SEO, GEO, IA? Te ofrecemos crecimiento y claridad, <em>no una etiqueta nueva</em>',
      intro: 'Una estrategia pensada para tu empresa.',
      items: [
        { t: 'Enfoque comercial', d: 'Priorizamos las búsquedas y páginas relacionadas con tus objetivos, no solo el volumen de visitas.' },
        { t: 'SEO y GEO integrados', d: 'El trabajo de visibilidad se conecta con tu estrategia orgánica existente.' },
        { t: 'Comunicación clara', d: 'Sabrás qué recomendamos, por qué y qué se ha implementado.' },
        { t: 'Expectativas honestas', d: 'No prometemos posiciones concretas ni apariciones garantizadas en sistemas de IA.' },
        { t: 'Colaboración con tu equipo', d: 'Trabajamos con responsables de marketing, desarrollo y dirección para que la estrategia pueda ejecutarse.' },
      ],
    },
    {
      tipo: 'paraQuien',
      titulo: 'GEO y SEO para negocios, tiendas online y <em>equipos de marketing</em>',
      intro: 'Te podemos ayudar a conseguir tus objetivos si:',
      puntos: [
        'Tienes un negocio o una tienda online y quieres aumentar las oportunidades que llegan desde canales orgánicos.',
        'Ya inviertes en marketing digital, pero necesitas una hoja de ruta más clara.',
        'Tu equipo necesita apoyo especializado para mejorar el SEO y explorar el GEO.',
        'Quieres entender mejor qué dicen los datos y cómo conectarlos con leads o ventas.',
      ],
    },
    {
      tipo: 'planes',
      titulo: 'Más visibilidad, más clientes. <em>Planes SEO para cada tipo de negocio</em>',
      planes: [
        {
          nombre: 'Plan SEO Esencial', precio: '690 €', periodo: '/mes',
          paraQuien: 'Para webs ya funcionando que quieren empezar a ganar visibilidad orgánica de forma ordenada. Ideal para negocios de servicios, despachos profesionales, clínicas pequeñas o tiendas online con catálogo reducido.',
          base: 'Objetivo a 3 meses:',
          incluye: [
            'Optimización de hasta 100 URLs.',
            'Onboarding inicial y auditoría parcial mensual.',
            'Configuración de GA4 y Search Console.',
            'Propuesta y redacción de contenidos.',
            'Optimización del enlazado interno.',
            'Panel de seguimiento e informe mensual detallado.',
            'Reunión mensual.',
          ],
        },
        {
          nombre: 'Plan SEO Crecimiento', precio: '990 €', periodo: '/mes', destacado: true, cinta: 'Lo más contratado',
          paraQuien: 'Empresas que ya tienen una base y quieren escalar: ecommerce medianos, empresas B2B, clínicas con varios servicios y negocios en sectores competitivos.',
          base: 'Todo lo del Plan Esencial, más:',
          incluye: [
            'Análisis de competencia y brecha de visibilidad.',
            'Estrategia de contenidos ampliada.',
            'Propuestas de negocio y mejoras de UX/UI.',
            'Propuesta avanzada de conversión.',
          ],
        },
        {
          nombre: 'Plan SEO Expert', precio: 'desde 1.490 €', periodo: '/mes',
          paraQuien: 'Proyectos grandes y complejos que necesitan una estrategia a medida: ecommerce con muchas referencias, webs con varios idiomas o países, portales con mucho contenido y empresas con equipos internos que necesitan un socio SEO senior.',
          base: 'Todo lo del Plan Crecimiento, adaptado a la escala del proyecto, más:',
          incluye: [
            'Estrategia SEO personalizada con objetivos de negocio y KPIs acordados.',
            'SEO internacional: implementación y revisión de hreflang, estructura por idioma o país y estrategia de contenidos localizada.',
            'SEO para ecommerce a gran escala: categorías, fichas de producto, filtros y navegación facetada.',
            'Gestión de rastreo e indexación en webs grandes (crawl budget, sitemaps segmentados, paginaciones).',
            'Monitorización técnica continua con alertas de errores críticos.',
            'Coordinación con tu equipo de desarrollo, diseño y marketing, con acompañamiento en migraciones y cambios importantes.',
            'Dashboard personalizado en tiempo real (Looker Studio).',
            'Informe mensual ejecutivo.',
          ],
        },
      ],
    },
    {
      tipo: 'extras',
      titulo: 'Y si necesitas <em>algo puntual</em>',
      items: [
        {
          nombre: 'Auditoría SEO Completa', precio: 'desde 1.290 €',
          paraQuien: 'Empresas que no saben por qué su web no rinde, que van a rediseñar o migrar su web, o que quieren una segunda opinión antes de invertir en SEO continuo.',
          incluye: [
            'Auditoría técnica completa: rastreo, indexación, arquitectura, velocidad y móvil.',
            'Auditoría de contenidos y canibalizaciones.',
            'Análisis de competencia y de brechas de palabras clave.',
            'Revisión del SEO on-page de las páginas principales.',
            'Documento de hallazgos priorizado por impacto y esfuerzo.',
            'Hoja de ruta de acciones a 6-12 meses.',
            'Reunión de presentación de resultados (1-2 h).',
          ],
        },
        {
          nombre: 'SEO Local Start', precio: '240 € · pago único',
          paraQuien: 'Negocios con presencia física o que atienden en una zona concreta: restaurantes, peluquerías, talleres, clínicas dentales, inmobiliarias, fontaneros, academias, comercios.',
          incluye: [
            'Optimización completa de la ficha de Google Business Profile.',
            'Estrategia de reseñas: plantillas de respuesta y captación.',
            'Optimización de la web para búsquedas locales («fontanero en Valencia»).',
            'Seguimiento de posiciones en el mapa local.',
            'Informe mensual.',
          ],
          nota: 'Todo sobre Google Maps y la ficha de empresa, en [SEO local](/servicios/seo-local/).',
        },
      ],
    },
    {
      tipo: 'proceso',
      titulo: 'Cómo trabajamos. <em>Una hoja de ruta adaptada a tu negocio</em>',
      pasos: [
        { t: 'Entendemos el negocio', d: 'Hablamos de tus servicios, clientes, zonas prioritarias y objetivos comerciales. El plan parte de lo que necesitas conseguir, no de una lista estándar de tareas.' },
        { t: 'Analizamos tu situación', d: 'Revisamos la web, la visibilidad actual y el contexto competitivo. Identificamos qué está funcionando, qué limita el crecimiento y dónde conviene empezar.' },
        { t: 'Priorizamos y ejecutamos', d: 'Preparamos una hoja de ruta y coordinamos la implementación contigo o con tu equipo. Cada acción tiene una razón, una prioridad y una forma de seguimiento.' },
        { t: 'Medimos y ajustamos', d: 'Analizamos los datos disponibles, explicamos los avances y redefinimos prioridades cuando cambian el mercado, la competencia o tus objetivos.' },
      ],
      cta: 'Solicita un diagnóstico de visibilidad',
    },
    {
      tipo: 'beneficios',
      titulo: 'Lo que gana tu negocio con <em>SEO y GEO</em>',
      items: [
        { t: 'Gana visibilidad en las búsquedas con IA', d: 'Adelantarte a los cambios en la forma de buscar puede ayudar a que tu negocio tenga más oportunidades de aparecer en respuestas generadas por inteligencia artificial. Trabajamos para que tu marca sea más fácil de encontrar, entender y valorar en los canales de búsqueda relevantes para tus clientes.' },
        { t: 'Amplía la presencia de tu marca', d: 'Cuando tu empresa cuenta con información clara, útil y coherente, puede tener más oportunidades de ser descubierta tanto en buscadores como en respuestas de IA. Así, tu negocio puede llegar a personas que están investigando opciones antes de tomar una decisión.' },
        { t: 'Refuerza la confianza en tu negocio', d: 'Una presencia digital sólida ayuda a que tus clientes potenciales comprendan qué ofreces y por qué pueden confiar en tu empresa. Mejoramos la información y los contenidos de tu web para comunicar tu experiencia con claridad y construir credibilidad a largo plazo.' },
      ],
    },
    {
      tipo: 'garantias',
      titulo: 'Resultados transparentes, <em>cero ataduras</em>',
      intro: 'En el mundo del SEO abundan las promesas vacías y los contratos perpetuos. Nuestro enfoque es diferente: nos ganamos tu confianza mes a mes. Confiamos en la estrategia que diseñamos para cada proyecto; por eso no exigimos permanencias de 6 o 12 meses. Tú decides cuánto tiempo trabajamos juntos, según la evolución y el impacto real que veas en tu negocio.',
      puntos: [
        { t: 'Sin letra pequeña', d: 'Estrategias SEO éticas, sostenibles y alineadas con tus objetivos.' },
        { t: 'Transparencia total', d: 'Informes claros y directos con las métricas que de verdad importan: conversiones y retorno de la inversión.' },
        { t: 'Flexibilidad absoluta', d: 'Tú tienes el control. Si no aportamos el valor que tu empresa necesita, eres libre de irte en cualquier momento.' },
      ],
    },
    {
      tipo: 'cta',
      titulo: 'Hablemos de tus <em>objetivos de captación</em>',
      texto: 'Si quieres mejorar tu posicionamiento en buscadores y entender qué oportunidades ofrece el GEO para tu empresa, empecemos por analizar tu situación actual.',
      boton: 'Solicitar una primera valoración',
      nota: 'Cuéntanos tu web, tu sector y el objetivo que quieres priorizar.',
    },
    {
      tipo: 'garantias',
      etiqueta: 'En qué te ayudamos',
      titulo: '¿En qué te <em>podemos ayudar</em>?',
      puntos: [
        { t: 'Auditorías SEO', d: 'diagnóstico profundo de la salud de tu sitio web.' },
        { t: 'SEO para ecommerce', d: 'optimización orientada a aumentar tus ventas y conversiones.' },
        { t: 'SEO on-page e intención de búsqueda', d: 'mejora estratégica del contenido y la arquitectura de tus páginas.' },
        { t: 'SEO técnico', d: 'solución de problemas de indexación, rastreo, velocidad y Core Web Vitals.' },
        { t: 'Estrategia y creación de contenidos', d: 'planificación de contenidos enfocados en atraer tráfico cualificado.' },
        { t: 'Revisión de tu estrategia SEO actual', d: 'análisis detallado de lo que está funcionando y lo que debes corregir.' },
      ],
    },
  ],
  faq: {
    titulo: 'Preguntas frecuentes sobre SEO y GEO',
    preguntas: [
      { p: '¿Qué diferencia hay entre SEO y GEO?', r: 'El SEO trabaja la visibilidad de tu web en buscadores como Google. El GEO busca mejorar la presencia y comprensión de tu marca en respuestas generadas por sistemas de inteligencia artificial. Son enfoques relacionados: en muchos proyectos se trabajan de forma complementaria, según los objetivos y el punto de partida de la empresa.' },
      { p: '¿El GEO sustituye al SEO?', r: 'No. El GEO no debería sustituir automáticamente una estrategia SEO. Google indica que sus prácticas SEO habituales siguen siendo relevantes para sus [funciones de búsqueda con IA](https://developers.google.com/search/docs/appearance/ai-features) y no ofrece una optimización especial que garantice aparecer en ellas.' },
      { p: '¿Mi empresa puede aparecer en ChatGPT, Gemini o Perplexity?', r: 'Es posible trabajar para que tu empresa tenga más opciones de ser encontrada, entendida y citada, pero no se puede garantizar una mención concreta. Las respuestas pueden variar según la consulta, el sistema y la información disponible.' },
      { p: '¿Qué incluye un servicio de GEO y SEO?', r: 'El alcance depende de las necesidades de cada negocio. Puede incluir una auditoría, mejoras técnicas, optimización de páginas, estrategia de contenidos, SEO local, análisis de competencia y seguimiento de la visibilidad orgánica y en respuestas de IA.' },
      { p: '¿Cuánto tiempo se tarda en ver resultados?', r: 'No hay un plazo único. Depende del estado de la web, la competencia, las acciones necesarias y el tiempo que se tarde en implementarlas. Tras analizar tu proyecto, podemos proponer prioridades e indicadores para revisar la evolución, sin prometer fechas ni posiciones garantizadas.' },
      { p: '¿Cómo se mide una estrategia de GEO y SEO?', r: 'Se pueden analizar indicadores como visibilidad orgánica, impresiones, clics, visitas cualificadas, contactos y conversiones. Para el GEO, también puede hacerse un seguimiento periódico de consultas relevantes y comprobar si la marca o sus contenidos aparecen citados. Conviene interpretar estas observaciones como señales, no como posiciones fijas.' },
      { p: '¿El servicio sirve para un negocio local de Valencia?', r: 'Sí. Podemos orientar la estrategia a Valencia y a las localidades donde trabaja tu empresa. El enfoque puede incluir búsquedas locales, contenidos relacionados con tus servicios y la revisión de la información de negocio en los canales relevantes. Si lo que necesitas es sobre todo Google Maps y tu ficha de empresa, mira nuestro servicio de [SEO local](/servicios/seo-local/).' },
      { p: '¿Necesito rehacer mi página web para trabajar el GEO?', r: 'No necesariamente. Primero revisamos la web para identificar qué conviene conservar, mejorar o crear. A veces bastan ajustes en páginas concretas; otras, puede ser necesario abordar problemas técnicos o reorganizar la información.' },
      { p: '¿Trabajáis con el equipo interno de marketing?', r: 'Sí. La colaboración puede adaptarse a tu organización: podemos asesorar a tu equipo, coordinar tareas con otros proveedores o encargarnos de las acciones acordadas. Definimos responsabilidades y prioridades antes de empezar.' },
      { p: '¿Cómo empiezo?', r: 'Cuéntanos qué servicios ofrece tu empresa, a qué clientes quieres llegar y qué objetivo quieres priorizar. Revisaremos el punto de partida para valorar qué acciones de GEO y SEO pueden tener sentido para tu negocio.' },
    ],
  },
};
