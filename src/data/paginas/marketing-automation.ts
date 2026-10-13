// Copy: «Marketing Automation y Automatización de Marketing» (documento de estructura).
// Keyword principal: marketing automation.
// Secundarias: automatización de marketing, agencia de email marketing, automatización
// de email, campañas SMS, notificaciones push, automatización de WhatsApp, chatbot para
// empresas, comunicación omnicanal, automatización comercial, lead nurturing.
import type { PaginaServicio } from '../tipos';

export const pagina: PaginaServicio = {
  slug: 'marketing-automation',
  title: 'Marketing Automation y Automatización de Marketing | EOS Studio',
  description: 'Automatiza tus campañas de email marketing, SMS, notificaciones push y conversaciones por WhatsApp y chat. Conecta tus canales, mejora el seguimiento comercial y convierte más oportunidades en clientes.',
  escena: 'marketing-automation',
  precioDesde: 249,
  hero: {
    h1: 'Marketing automation para conectar tus canales y <em>convertir más clientes</em>',
    intro: [
      'Ayudamos a empresas a automatizar sus comunicaciones comerciales mediante email marketing, SMS, notificaciones push, chat y WhatsApp.',
      'Diseñamos campañas, flujos automáticos y procesos de seguimiento para acompañar a cada contacto desde el primer interés hasta la conversión y la fidelización.',
    ],
    cta: 'Cuéntanos tus objetivos',
  },
  bloques: [
    {
      tipo: 'problema',
      titulo: '¿Sigues enviando mensajes a mano y <em>perdiendo oportunidades</em> de venta?',
      intro: 'Captar un contacto es solo el principio. Si no existe un sistema para responder a tiempo, hacer seguimiento y mantener una comunicación relevante, muchas oportunidades terminan perdiéndose.',
      puntos: [
        'Tu equipo dedica demasiado tiempo a enviar mensajes y realizar seguimientos manuales.',
        'Captas contactos, pero no dispones de un proceso para convertirlos en clientes.',
        'Envías campañas sin segmentar o sin adaptar los mensajes al comportamiento de cada usuario.',
        'Usas varios canales, pero no tienes una estrategia que conecte email, SMS, WhatsApp, chat y notificaciones push.',
      ],
    },
    {
      tipo: 'enfoque',
      titulo: 'Automatización sin complicaciones: <em>la comunicación adecuada en cada momento</em>',
      intro: 'No se trata de enviar más mensajes, sino de automatizar las comunicaciones que aportan valor y facilitan el siguiente paso del cliente.',
      items: [
        { t: 'Automatización orientada al negocio', d: 'Cada flujo responde a un objetivo concreto: captar contactos, recuperar oportunidades o fidelizar clientes.' },
        { t: 'Comunicación omnicanal', d: 'Coordinamos email, SMS, push, chat y WhatsApp según el proceso y las preferencias de cada contacto.' },
        { t: 'Segmentación inteligente', d: 'Adaptamos las comunicaciones a los datos disponibles, los intereses y las interacciones de los usuarios.' },
        { t: 'Medición y optimización', d: 'Analizamos el rendimiento de las campañas y los flujos para identificar oportunidades de mejora.' },
        { t: 'Integración con tus herramientas', d: 'Conectamos los sistemas de marketing y ventas cuando la tecnología y los accesos lo permiten.' },
      ],
    },
    {
      tipo: 'paraQuien',
      titulo: 'Marketing automation para <em>B2B, ecommerce</em> y negocios de servicios',
      intro: 'Te podemos ayudar si:',
      puntos: [
        'Tienes una base de datos de contactos y quieres aprovecharla para generar más oportunidades comerciales.',
        'Gestionas un ecommerce y necesitas automatizar el registro, la compra, la recompra o la recuperación de clientes.',
        'Vendes servicios B2B y necesitas seguimientos comerciales consistentes con tus oportunidades.',
        'Ya usas herramientas de email marketing, CRM o mensajería, pero necesitas conectarlas y sacarles más partido.',
      ],
    },
    {
      tipo: 'planes',
      titulo: 'Automatización de marketing para <em>cada fase de tu negocio</em>',
      intro: 'Los precios dependen de las herramientas, el volumen de contactos, los canales contratados y la complejidad de cada implementación.',
      planes: [
        {
          nombre: 'Automation Esencial', precio: 'desde 249 €', periodo: '/mes',
          paraQuien: 'Para empresas que quieren empezar a automatizar comunicaciones y seguimientos sin una infraestructura compleja.',
          objetivo: 'reducir tareas manuales y mantener una comunicación constante con los contactos.',
          incluye: ['Revisión inicial de los procesos de comunicación.', 'Diseño y gestión de un flujo de automatización acordado.', 'Configuración de disparadores y condiciones básicas.', 'Automatización de comunicaciones por email.', 'Segmentación básica de contactos.', 'Configuración de métricas de seguimiento.', 'Revisión mensual del funcionamiento del flujo.', 'Propuestas de mejora según los resultados.'],
          condiciones: 'Alcance limitado a un flujo y a las integraciones acordadas. Los canales adicionales, las licencias y los costes de envío se presupuestan aparte.',
        },
        {
          nombre: 'Automation Crecimiento', precio: 'desde 599 €', periodo: '/mes', destacado: true,
          paraQuien: 'Para empresas que necesitan combinar campañas, automatizaciones y seguimiento de oportunidades comerciales.',
          objetivo: 'coordinar las comunicaciones de marketing y ventas para gestionar mejor contactos y oportunidades.',
          base: 'Todo lo del Plan Esencial, más:',
          incluye: ['Varios flujos de automatización, según el alcance acordado.', 'Campañas de email marketing y segmentación avanzada.', 'Secuencias de bienvenida y seguimiento de contactos.', 'Automatizaciones para reactivar contactos inactivos.', 'Integración con el CRM, cuando sea técnicamente viable.', 'Reglas de asignación o notificación de oportunidades.', 'Configuración de objetivos y conversiones.', 'Informe mensual de actividad y recomendaciones.'],
          condiciones: 'El número de flujos, campañas e integraciones se define en la propuesta. SMS, WhatsApp, chat y push se incorporan según el alcance contratado.',
        },
        {
          nombre: 'Automation Omnicanal', precio: 'desde 990 €', periodo: '/mes',
          paraQuien: 'Para empresas con varios canales, procesos comerciales complejos o necesidades avanzadas de automatización.',
          objetivo: 'coordinar la comunicación con clientes y oportunidades en todos los canales y puntos de contacto.',
          base: 'Todo lo del Plan Crecimiento, más:',
          incluye: ['Estrategia de comunicación omnicanal.', 'Coordinación de email, SMS, push y WhatsApp o chat, según los canales contratados.', 'Recorridos de cliente con condiciones y ramificaciones.', 'Automatización según eventos y comportamiento.', 'Integración avanzada con CRM y otras herramientas compatibles.', 'Reglas de seguimiento y recuperación de oportunidades.', 'Pruebas y optimización de flujos.', 'Cuadro de mando con los indicadores acordados.', 'Reunión de seguimiento y planificación de mejoras.'],
          condiciones: 'La disponibilidad de cada canal depende de la plataforma, las integraciones, las autorizaciones necesarias y las condiciones de cada proveedor.',
        },
      ],
    },
    {
      tipo: 'extras',
      titulo: 'Servicios de marketing automation para <em>necesidades específicas</em>',
      items: [
        {
          nombre: 'Implementación de marketing automation', precio: 'desde 490 € · pago único',
          paraQuien: 'Empresas que quieren empezar a automatizar o necesitan configurar bien su herramienta antes de lanzar campañas.',
          incluye: ['Análisis del proceso que se quiere automatizar.', 'Revisión de la herramienta y de los datos disponibles.', 'Diseño del flujo inicial.', 'Configuración de disparadores, condiciones y acciones.', 'Pruebas funcionales.', 'Documentación básica de la implementación.', 'Entrega y explicación del funcionamiento.'],
          nota: 'El precio final depende de la plataforma, las integraciones y la complejidad del proceso.',
        },
        {
          nombre: 'Campañas de email marketing', precio: 'desde 550 €',
          paraQuien: 'Empresas que necesitan planificar y ejecutar campañas de email sin un equipo interno especializado.',
          incluye: ['Planificación de cinco campañas de email.', 'Preparación de los contenidos a partir de la información facilitada o acordada.', 'Diseño y maquetación de los emails.', 'Segmentación de los destinatarios.', 'Configuración y programación de los envíos.', 'Revisión de métricas y recomendaciones.'],
          nota: 'La licencia de la plataforma y otros servicios no incluidos se presupuestan por separado.',
        },
        {
          nombre: 'Automatización de seguimiento comercial', precio: 'desde 249 €/mes',
          paraQuien: 'Empresas B2B que necesitan mantener el contacto con sus leads y dar continuidad al proceso comercial.',
          incluye: ['Diseño de una secuencia de seguimiento.', 'Automatización de las comunicaciones acordadas.', 'Reglas de activación según el estado del contacto.', 'Notificaciones internas para el equipo comercial.', 'Criterios de salida cuando hay respuesta o conversión.', 'Seguimiento del funcionamiento y propuestas de mejora.'],
          nota: 'La integración con el CRM y los canales adicionales se definen según las herramientas disponibles.',
        },
      ],
    },
    {
      tipo: 'proceso',
      titulo: 'Cómo trabajamos. Una estrategia de automatización <em>adaptada a tu negocio</em>',
      pasos: [
        { t: 'Entendemos el negocio', d: 'Analizamos tus objetivos, tus clientes, el proceso comercial y los canales que usas. Identificamos qué comunicaciones requieren intervención manual y dónde automatizar aporta valor.' },
        { t: 'Analizamos datos y herramientas', d: 'Revisamos la base de contactos, el CRM, las plataformas de marketing y las integraciones. Comprobamos qué información hay y qué condiciones deben cumplirse para automatizar.' },
        { t: 'Diseñamos e implementamos los flujos', d: 'Definimos disparadores, condiciones, mensajes y acciones de cada recorrido. Configuramos las automatizaciones acordadas y comprobamos que funcionan antes de activarlas.' },
        { t: 'Medimos y optimizamos', d: 'Analizamos interacciones, conversiones y funcionamiento de los flujos para detectar abandonos, mensajes poco eficaces y oportunidades de mejora.' },
      ],
      cta: 'Solicita un diagnóstico de automatización',
    },
    {
      tipo: 'beneficios',
      titulo: 'Más eficiencia, comunicaciones relevantes y <em>mejores oportunidades</em>',
      items: [
        { t: 'Automatiza las tareas repetitivas', d: 'Menos trabajo manual en envíos, notificaciones y seguimientos. Tu equipo dedica más tiempo a lo que requiere criterio, atención comercial y relación directa con el cliente.' },
        { t: 'Conecta tus canales', d: 'Email, SMS, push, chat y WhatsApp coordinados para que ningún canal funcione aislado, según tus objetivos y las posibilidades de integración.' },
        { t: 'Aprovecha mejor tus contactos', d: 'Segmenta, haz seguimientos relevantes y recupera oportunidades que, de otro modo, quedarían olvidadas en una base de datos o en el CRM.' },
      ],
    },
    {
      tipo: 'garantias',
      titulo: 'Transparencia en la automatización, <em>sin costes ocultos</em>',
      intro: 'Definimos el alcance, las herramientas y las responsabilidades antes de implementar cada solución.',
      puntos: [
        { t: 'Alcance definido', d: 'conocerás los flujos, las campañas y las integraciones incluidos en el servicio.' },
        { t: 'Costes diferenciados', d: 'los honorarios de gestión se separan de las licencias, los créditos de mensajería y otros costes de terceros.' },
        { t: 'Control de tus sistemas', d: 'las cuentas, los datos y los accesos se gestionan conforme a las condiciones acordadas.' },
        { t: 'Medición transparente', d: 'recibirás información sobre las acciones realizadas y los indicadores disponibles.' },
        { t: 'Automatizaciones documentadas', d: 'cada flujo implementado tiene documentación proporcional a su complejidad.' },
      ],
      nota: 'Las condiciones de permanencia, cancelación, propiedad de las configuraciones y soporte se especifican en cada propuesta.',
    },
    {
      tipo: 'cta',
      titulo: 'Hablemos de cómo <em>automatizar tus comunicaciones</em>',
      texto: 'Cuéntanos qué herramientas utilizas, cómo gestionas tus comunicaciones y qué proceso quieres mejorar. Te propondremos un alcance adaptado a tus necesidades.',
      boton: 'Solicitar una primera valoración',
    },
    {
      tipo: 'ayuda',
      titulo: '¿En qué te podemos ayudar?',
      items: [
        { t: 'Marketing automation', d: 'Diseño e implementación de flujos automáticos para marketing y ventas.' },
        { t: 'Email marketing', d: 'Planificación, diseño, segmentación y optimización de campañas de correo electrónico.' },
        { t: 'Automatización de SMS', d: 'Mensajes transaccionales, notificaciones y comunicaciones comerciales autorizadas.' },
        { t: 'Notificaciones push', d: 'Comunicaciones para aplicaciones o sitios web compatibles.' },
        { t: 'WhatsApp Business', d: 'Conversaciones, notificaciones y seguimiento con soluciones compatibles con las condiciones de la plataforma.' },
        { t: 'Chat y chatbots', d: 'Atención inicial, preguntas frecuentes, cualificación de contactos y derivación a una persona cuando hace falta.' },
        { t: 'Integración con CRM', d: 'Conexión de las comunicaciones con la gestión de contactos, oportunidades y clientes.' },
        { t: 'Lead nurturing', d: 'Secuencias que acompañan a los contactos durante el proceso de decisión.' },
        { t: 'Reactivación y fidelización', d: 'Campañas para recuperar contactos inactivos, fomentar la recompra y mantener la relación.' },
        { t: 'Analítica y optimización', d: 'Seguimiento de campañas, automatizaciones y conversiones para identificar mejoras.' },
      ],
    },
  ],
  faq: {
    titulo: 'Preguntas frecuentes sobre marketing automation',
    preguntas: [
      { p: '¿Qué es el marketing automation?', r: 'Es el uso de herramientas y reglas para automatizar comunicaciones y procesos de marketing según condiciones como el registro de un contacto, una compra, una respuesta o un cambio de estado. Permite seguimientos consistentes y menos tareas manuales.' },
      { p: '¿Qué diferencia hay entre marketing automation y email marketing?', r: 'El email marketing se centra en el correo electrónico. El marketing automation abarca la automatización de procesos y puede usar el email como uno de sus canales, junto con SMS, notificaciones push, WhatsApp y otras herramientas compatibles.' },
      { p: '¿Qué canales se pueden automatizar?', r: 'Según las herramientas, se pueden automatizar campañas de email, SMS, notificaciones push y conversaciones por WhatsApp y chat. Las funciones dependen de las integraciones, las autorizaciones y las condiciones de cada proveedor.' },
      { p: '¿Necesito un CRM para automatizar mis comunicaciones?', r: 'No siempre. Algunas automatizaciones funcionan desde una plataforma de marketing. Un CRM resulta útil cuando necesitas coordinar las comunicaciones con el estado comercial de cada contacto y las acciones del equipo de ventas.' },
      { p: '¿Se pueden integrar email, SMS, WhatsApp y push en un mismo flujo?', r: 'Sí, cuando la plataforma y sus integraciones lo permiten. Un flujo puede empezar por email y activar otro canal si se cumple una condición. La lógica debe evitar mensajes redundantes y respetar las preferencias y autorizaciones del destinatario.' },
      { p: '¿Cuánto cuesta un servicio de marketing automation?', r: 'Depende del número y la complejidad de los flujos, los canales, las integraciones y el volumen de comunicaciones. Como referencia, la gestión mensual empieza en 249 €/mes y la implementación en 490 € de pago único. Las licencias y los costes de envío se identifican por separado.' },
      { p: '¿Cuánto se tarda en implementar una automatización?', r: 'Depende de la complejidad del proceso, la calidad de los datos y las integraciones. Una automatización sencilla requiere mucho menos trabajo que un sistema omnicanal conectado con un CRM. Tras analizar el proyecto, se define un calendario realista.' },
      { p: '¿Cómo se mide el rendimiento de las automatizaciones?', r: 'Con indicadores como entregas, clics, respuestas, conversiones, oportunidades generadas y tiempo ahorrado. En SMS, WhatsApp y push, los indicadores dependen del proveedor. Para valorar el impacto comercial, se relacionan las interacciones con los objetivos de negocio.' },
      { p: '¿Se pueden automatizar conversaciones por WhatsApp o chat?', r: 'Sí. Se pueden configurar respuestas automáticas, preguntas frecuentes, cualificación inicial y derivación a una persona. La automatización debe permitir la intervención humana cuando la consulta lo requiera.' },
      { p: '¿Qué ocurre con el consentimiento y la protección de datos?', r: 'Las comunicaciones deben ajustarse a la normativa aplicable, a la finalidad del tratamiento y a las condiciones de cada canal. Antes de activar las automatizaciones se revisan las autorizaciones, la gestión de bajas y las preferencias de los contactos.' },
      { p: '¿Cómo puedo empezar?', r: 'Cuéntanos qué canales utilizas, qué herramientas tienes y qué objetivo quieres priorizar. Revisaremos tu situación para decidir qué automatizaciones aportan más valor y por dónde empezar.' },
    ],
  },
};
