// Copy: «PR Digital Copy» (documento de estructura).
// El documento no trae title ni meta description: los de abajo son una
// propuesta (pendiente de validar). Se usa la opción 1 del subtítulo del H1.
// El bloque de casos de éxito queda fuera hasta tener casos reales con cifras.
// Los cuatro beneficios del primer H2 («Más visibilidad, más marca, más ventas»)
// repetían los de «¿Qué conseguimos?»: se dejan solo en ese bloque.
import type { PaginaServicio } from '../tipos';

export const pagina: PaginaServicio = {
  slug: 'autoridad-digital',
  title: 'Autoridad Digital y Digital PR en la era de la IA | EOS Studio',
  description: 'Digital PR, link building, contenido experto y marca para que Google y la IA reconozcan, validen y recomienden tu negocio. Más visibilidad, más confianza, más ventas.',
  escena: 'autoridad-digital',
  hero: {
    h1: 'Autoridad digital en la <em>era de la IA</em>',
    subtitulo: 'Construimos marcas que la IA reconoce, valida y recomienda.',
    intro: [
      'La autoridad digital ya no depende únicamente de conseguir backlinks. Las marcas que destacan son las que consiguen **presencia, reconocimiento y validación** en los espacios donde sus clientes buscan información.',
      'Combinamos **Digital PR, link building, contenidos y estrategia de marca** para mejorar tu visibilidad orgánica, reforzar tu reputación y posicionarte como referente en tu sector.',
    ],
    cta: 'Quiero mejorar mi autoridad digital',
  },
  bloques: [
    {
      tipo: 'pilares',
      titulo: 'Así trabajamos <em>cada campaña</em>',
      intro: 'Construimos un ecosistema digital donde tu marca no solo aparece, sino que **demuestra conocimiento, recibe validación externa y se posiciona como una entidad experta** en su ámbito.',
      items: [
        {
          t: 'Autoridad temática', lema: 'Tu marca gana relevancia para los temas que importan a tu audiencia.',
          d: 'Construimos ecosistemas de contenido alrededor de las necesidades reales de tus usuarios, desde las primeras preguntas hasta el momento de decidir.',
          puntos: ['**Ecosistemas de contenido por área temática** para ampliar y consolidar tu presencia orgánica.', '**Contenidos útiles y especializados** que responden a las preguntas de tu audiencia.', '**Cobertura de cada fase del usuario:** información, consideración y decisión.'],
        },
        {
          t: 'Contenido experto', lema: 'Demuestra a tus clientes que tu marca sabe de lo que habla.',
          d: 'No basta con decir que eres experto: tu web y tu presencia digital tienen que demostrarlo. Auditamos tu **E-E-A-T** (experiencia, conocimiento, autoridad y confianza) para ver qué señales transmites y cuáles reforzar.',
          puntos: ['**Auditoría E-E-A-T** con oportunidades de mejora que puedas implementar.', '**Refuerzo de la experiencia de tu marca** con contenidos especializados.', '**Activos que demuestran tu expertise.**', '**Señales de confianza alineadas** para que clientes, buscadores e IA entiendan quién eres y por qué fiarse de ti.'],
        },
        {
          t: 'Validación externa', lema: 'Haz que otros hablen de tu marca.',
          d: 'Llevamos tu conocimiento y tus historias más allá de tu web para conseguir presencia en medios, publicaciones y plataformas relevantes para tu sector.',
          puntos: ['**Campañas de link building** diseñadas para generar interés y cobertura.', '**Menciones y enlaces de calidad** en medios y sitios relevantes.', '**Presencia en medios y oportunidades editoriales** para ganar visibilidad.'],
        },
        {
          t: 'Construcción de marca', lema: 'Haz que tu marca sea reconocida, coherente y digna de confianza.',
          d: 'Trabajamos tu marca en todos los puntos de contacto digitales para que transmitas el mismo mensaje y generes confianza antes incluso de que un cliente contacte contigo.',
          puntos: ['**Coherencia de marca** entre tu web, redes sociales, medios y publicaciones sectoriales.', '**Gestión de la percepción de marca** para saber qué se dice de tu negocio.', '**De estar presente a ser reconocido como referente.**'],
        },
      ],
    },
    {
      tipo: 'logros',
      titulo: 'Una estrategia de autoridad que <em>trabaja para tu negocio</em>',
      items: [
        { t: 'Más visibilidad', d: 'Presencia en búsquedas, medios y espacios relevantes.' },
        { t: 'Más credibilidad', d: 'Tu experiencia respaldada por terceros.' },
        { t: 'Más reconocimiento', d: 'Una marca asociada a los temas que quieres liderar.' },
        { t: 'Más confianza', d: 'Mejores señales para usuarios, buscadores y sistemas de IA.' },
      ],
      cta: 'Quiero mejorar mi autoridad digital',
    },
    {
      tipo: 'formula',
      titulo: 'No hacemos PR aislado. <em>Lo conectamos con tu estrategia digital.</em>',
      texto: 'Combinamos **SEO, Digital PR, contenidos y estrategia de marca** para que cada acción contribuya a construir una autoridad digital sostenible.',
      formula: ['SEO', 'PR', 'Contenido', 'Marca'],
      resultado: 'Autoridad digital',
      cierre: 'La autoridad no se compra, se construye.',
      cta: 'Quiero construir mi autoridad digital',
    },
  ],
  faq: {
    titulo: 'Preguntas frecuentes sobre PR y autoridad digital',
    preguntas: [
      { p: '¿Qué puede aportar la autoridad digital a mi negocio?', r: 'Ayuda a aumentar la visibilidad, la credibilidad y el reconocimiento de tu marca más allá de tu propia web. Con campañas estratégicas buscamos presencia en medios, publicaciones y sitios relevantes para tu sector, con menciones, referencias y enlaces que refuercen tu autoridad.\n\nEl objetivo no es conseguir publicaciones por conseguirlas, sino que tu marca esté donde tu audiencia busca información y toma decisiones.' },
      { p: '¿Cuál es la diferencia entre PR digital y link building?', r: 'El link building se centra en conseguir enlaces desde otros sitios hacia el tuyo. El PR digital tiene un enfoque más amplio: puede generar enlaces, pero también menciones de marca, cobertura en medios, reconocimiento y nuevas oportunidades de visibilidad.\n\nPor eso combinamos ambos: el PR digital construye autoridad y reconocimiento, y el link building es una de las herramientas para conseguirlo.' },
      { p: '¿Cuánto tiempo se necesita para ver resultados?', r: 'El PR digital construye autoridad y sus resultados no suelen ser inmediatos. Depende del sector, la autoridad actual de tu marca, los objetivos y el tipo de acciones.\n\nAlgunas campañas generan cobertura y menciones en pocas semanas; una autoridad sólida requiere una estrategia continuada. Combinamos resultados a corto plazo con una estrategia sostenible.' },
      { p: '¿Cómo se mide el éxito de una campaña de PR digital?', r: 'No solo por el número de enlaces. Analizamos menciones y cobertura obtenida, calidad y relevancia de los medios, enlaces conseguidos, evolución de la visibilidad y la autoridad, reconocimiento de marca e impacto en las búsquedas de marca y en los términos estratégicos.\n\nElegimos los indicadores según los objetivos de cada negocio.' },
      { p: '¿Mi negocio necesita PR digital?', r: 'No todas las empresas necesitan la misma estrategia. El PR digital es especialmente interesante si quieres aumentar la visibilidad de tu marca, mejorar tu autoridad, diferenciarte de la competencia o reforzar tu SEO.\n\nAntes de plantear una campaña analizamos tu situación, tu sector, tus competidores y tus objetivos para ver dónde hay oportunidades reales.' },
      { p: '¿El PR digital ayuda al SEO?', r: 'Sí. Genera enlaces, menciones y señales de relevancia y autoridad desde sitios externos. Pero el SEO no depende solo de los enlaces: por eso integramos el PR digital con contenido, autoridad temática y el resto de la estrategia SEO.' },
      { p: '¿El PR digital puede ayudar a que mi marca aparezca en respuestas de IA?', r: 'Sí. Los buscadores y los sistemas de IA usan información de distintas fuentes para entender marcas, temas y entidades. Una presencia consistente, con contenido especializado y referencias de fuentes relevantes, refuerza la visibilidad de una marca en este nuevo ecosistema de búsqueda.' },
      { p: '¿Cuánto cuesta una estrategia de PR digital?', r: 'Depende de los objetivos, la competencia del sector, los mercados y el tipo y volumen de campañas. Por eso no trabajamos con una estrategia cerrada: primero analizamos tu situación y después planteamos una estrategia y un presupuesto a tu medida.' },
    ],
  },
};
