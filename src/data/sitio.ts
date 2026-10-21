// Datos de la marca en un solo sitio. Lo que está vacío ('') se oculta en la
// web hasta que se rellene.
export const SITIO = {
  nombre: 'EOS Studio',
  url: 'https://www.eosstudio.es',
  email: 'hola@eosstudio.es',
  sedes: ['A Coruña', 'Valencia'],
  ciudad: 'A Coruña y Valencia',
  descripcion:
    'Agencia de SEO, GEO y marketing con sede en A Coruña y Valencia. Posicionamiento en Google y en la IA, autoridad digital, marketing automation y CRM para que tu marca amanezca en cada búsqueda.',

  // WhatsApp: número en formato internacional, sin «+» ni espacios.
  whatsapp: '34671887372',
  whatsappVisible: '671 887 372',
  whatsappMensaje: 'Hola, EOS Studio. Me gustaría hablar sobre mi proyecto.',

  // Agenda de citas de Google Calendar (Calendar → Crear → Agenda de citas →
  // Compartir → enlace de la página de reservas). Vacío = no se muestra.
  agenda: '',

  // Google Analytics 4. Solo se carga si la persona acepta las cookies de
  // analítica (banner en src/components/Cookies.astro). Vacío = sin analítica.
  ga4: 'G-B5NKN1BHDN',

  // Redes de la agencia. Vacío = el icono se muestra como «próximamente».
  redes: {
    linkedin: '',
    instagram: '',
  },

  // Datos del titular para el aviso legal y la privacidad. COMPLETAR antes de
  // publicar: mientras estén vacíos, las páginas legales lo indican.
  legal: {
    titular: '',     // razón social o nombre y apellidos
    nif: '',
    domicilio: '',   // domicilio fiscal completo
    registro: '',    // datos registrales, si es sociedad (Registro Mercantil...)
  },
};

export const whatsappUrl = (mensaje = SITIO.whatsappMensaje) =>
  `https://wa.me/${SITIO.whatsapp}?text=${encodeURIComponent(mensaje)}`;
