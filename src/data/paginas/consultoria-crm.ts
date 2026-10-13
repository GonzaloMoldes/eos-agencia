// Copy: «Gestión de CRM y Ventas para empresas» (documento de estructura).
// Keyword principal: consultoría CRM.
// Secundarias: gestión de CRM, implementación de CRM, consultoría de ventas,
// automatización comercial, gestión de oportunidades, pipeline de ventas,
// optimización del proceso comercial, CRM para pymes, reporting comercial, Sales Operations.
import type { PaginaServicio } from '../tipos';

export const pagina: PaginaServicio = {
  slug: 'consultoria-crm',
  title: 'Consultoría CRM y Gestión de Ventas para Empresas | EOS Studio',
  description: 'Organiza tu proceso comercial, optimiza tu CRM y mejora el seguimiento de oportunidades de venta. Consultoría, automatización y reporting adaptados a tu empresa.',
  escena: 'consultoria-crm',
  precioDesde: 290,
  hero: {
    h1: 'Consultoría CRM y gestión de ventas para <em>vender mejor</em>',
    intro: [
      'Ayudamos a empresas a organizar sus procesos comerciales, configurar su CRM y mejorar el seguimiento de oportunidades y clientes.',
      'Diseñamos sistemas de trabajo que conectan la actividad comercial con los objetivos del negocio, automatizan tareas repetitivas y permiten tomar decisiones basadas en datos.',
    ],
    cta: 'Cuéntanos tus objetivos comerciales',
  },
  bloques: [
    {
      tipo: 'problema',
      titulo: '¿Tu empresa tiene un CRM, pero sigue <em>perdiendo oportunidades</em> de venta?',
      intro: 'Disponer de un CRM no garantiza que el equipo comercial lo utilice correctamente ni que la empresa tenga una visión clara de sus oportunidades. Sin procesos definidos, datos fiables y criterios de seguimiento, el CRM puede convertirse en una base de datos desactualizada.',
      puntos: [
        'Tus comerciales registran la información de forma irregular y faltan datos importantes sobre clientes y oportunidades.',
        'No tienes una visión clara de las oportunidades abiertas, su estado real o las ventas previstas.',
        'Se pierden contactos porque no existe un sistema consistente de seguimiento comercial.',
        'Dedicas demasiado tiempo a preparar informes y no dispones de indicadores fiables para evaluar el rendimiento del equipo.',
      ],
    },
    {
      tipo: 'enfoque',
      titulo: 'Un CRM debe ayudarte a vender, <em>no convertirse en una tarea administrativa</em>',
      intro: 'Diseñamos y optimizamos procesos comerciales para que tu CRM refleje la realidad del negocio y facilite el trabajo diario del equipo.',
      items: [
        { t: 'Procesos comerciales definidos', d: 'Establecemos etapas, criterios de avance y responsabilidades para que todos trabajen con un método común.' },
        { t: 'CRM adaptado a tu negocio', d: 'Configuramos campos, pipelines, actividades, vistas y automatizaciones según tu proceso comercial.' },
        { t: 'Seguimiento sistemático', d: 'Definimos reglas y recordatorios para reducir las oportunidades olvidadas y mejorar la continuidad de las conversaciones.' },
        { t: 'Datos útiles para decidir', d: 'Organizamos los indicadores y los informes para comprender qué está ocurriendo en el pipeline y dónde actuar.' },
        { t: 'Adopción por parte del equipo', d: 'Priorizamos una configuración práctica, documentada y fácil de utilizar en el trabajo diario.' },
      ],
    },
    {
      tipo: 'paraQuien',
      titulo: 'Gestión de CRM y ventas para <em>pymes, empresas B2B</em> y equipos comerciales',
      intro: 'Te podemos ayudar si:',
      puntos: [
        'Tu empresa está creciendo y necesitas profesionalizar la gestión de clientes y oportunidades.',
        'Utilizas un CRM, pero no tienes bien definidos los procesos, los pipelines o los indicadores comerciales.',
        'Tu equipo comercial trabaja con hojas de cálculo, correos y herramientas desconectadas.',
        'Necesitas mejorar la previsión de ventas, el seguimiento de leads y la coordinación entre marketing y ventas.',
      ],
    },
    {
      tipo: 'planes',
      titulo: 'Planes de CRM y gestión comercial <em>adaptados a tu empresa</em>',
      intro: 'Tres niveles de acompañamiento mensual. El alcance final depende de la plataforma, el número de usuarios, las integraciones y la complejidad de tus procesos.',
      planes: [
        {
          nombre: 'CRM Esencial', precio: 'desde 290 €', periodo: '/mes',
          paraQuien: 'Para pequeñas empresas y equipos comerciales que necesitan ordenar su actividad y empezar a trabajar con un proceso de ventas estructurado.',
          objetivo: 'disponer de una gestión organizada de contactos, oportunidades y tareas comerciales.',
          incluye: [
            'Revisión inicial del proceso comercial.', 'Configuración básica del CRM existente.', 'Organización de contactos, empresas y oportunidades.',
            'Definición de un pipeline comercial.', 'Configuración de etapas y campos esenciales.', 'Creación de tareas y recordatorios de seguimiento.',
            'Configuración de informes básicos de actividad.', 'Revisión mensual del funcionamiento.', 'Recomendaciones de mejora.',
          ],
          condiciones: 'Orientado a una configuración sencilla y a una plataforma existente. Las licencias, migraciones complejas y desarrollos a medida se presupuestan por separado.',
        },
        {
          nombre: 'CRM Crecimiento', precio: 'desde 590 €', periodo: '/mes', destacado: true,
          paraQuien: 'Para empresas con un equipo comercial activo que necesitan mejorar la organización del pipeline, automatizar tareas y disponer de una visión más precisa de su actividad.',
          objetivo: 'mejorar la eficiencia comercial y establecer un sistema de seguimiento y reporting consistente.',
          base: 'Todo lo del Plan Esencial, más:',
          incluye: [
            'Optimización del pipeline y de los criterios de avance.', 'Automatización de tareas y notificaciones comerciales.', 'Configuración de procesos de seguimiento de leads.',
            'Segmentación de clientes y oportunidades.', 'Diseño de dashboards e informes comerciales.', 'Análisis de oportunidades estancadas y puntos de abandono.',
            'Revisión de indicadores de actividad y conversión.', 'Coordinación de procesos entre marketing y ventas.', 'Reunión mensual de seguimiento.',
          ],
          condiciones: 'El número de usuarios, automatizaciones, dashboards e integraciones se definirá en la propuesta comercial.',
        },
        {
          nombre: 'CRM Expert', precio: 'desde 990 €', periodo: '/mes',
          paraQuien: 'Para empresas con procesos comerciales complejos, varios equipos, distintas líneas de negocio o necesidades avanzadas de integración y análisis.',
          objetivo: 'convertir el CRM en el sistema central de gestión y seguimiento de la actividad comercial.',
          base: 'Todo lo del Plan Crecimiento, adaptado a la escala del proyecto, más:',
          incluye: [
            'Diseño y optimización avanzada de procesos comerciales.', 'Configuración de varios pipelines o unidades de negocio.', 'Automatizaciones comerciales avanzadas.',
            'Integración con marketing, ERP u otras herramientas compatibles.', 'Diseño de dashboards ejecutivos y reporting personalizado.', 'Análisis de conversión por etapa, canal, segmento o comercial.',
            'Revisión de criterios de cualificación y asignación de leads.', 'Apoyo en la previsión comercial y la planificación del pipeline.', 'Documentación de procesos y criterios de utilización del CRM.',
            'Coordinación con dirección, marketing, ventas y otros responsables.', 'Planificación de mejoras continuas.',
          ],
          condiciones: 'Sujeto a un diagnóstico previo. Las migraciones de gran volumen, desarrollos personalizados, licencias y proyectos de integración se presupuestan según su alcance.',
        },
      ],
    },
    {
      tipo: 'extras',
      titulo: 'Servicios de CRM y ventas para <em>necesidades específicas</em>',
      items: [
        {
          nombre: 'Implementación de CRM', precio: 'desde 790 € · pago único',
          paraQuien: 'Empresas que necesitan implantar un CRM por primera vez o configurar una plataforma que todavía no responde a sus necesidades.',
          incluye: ['Análisis de los procesos comerciales.', 'Selección o revisión de la herramienta, si forma parte del alcance.', 'Diseño del pipeline comercial.', 'Configuración de contactos, empresas y oportunidades.', 'Creación de campos, vistas y tareas.', 'Configuración de automatizaciones básicas.', 'Pruebas de funcionamiento.', 'Documentación inicial y formación básica al equipo.'],
          nota: 'La licencia del CRM, las migraciones complejas y las integraciones adicionales se presupuestan por separado.',
        },
        {
          nombre: 'Auditoría y optimización de CRM', precio: 'desde 490 € · pago único',
          paraQuien: 'Empresas que ya utilizan un CRM, pero necesitan detectar problemas de configuración, adopción, calidad de datos o gestión comercial.',
          incluye: ['Revisión de la configuración actual.', 'Análisis del pipeline y las etapas comerciales.', 'Revisión de campos, registros y calidad de los datos.', 'Identificación de tareas manuales automatizables.', 'Evaluación de los informes y dashboards existentes.', 'Detección de oportunidades de mejora.', 'Documento de hallazgos priorizado.', 'Hoja de ruta de optimización.', 'Reunión de presentación de resultados.'],
        },
        {
          nombre: 'Automatización del proceso comercial', precio: 'desde 390 € · pago único',
          paraQuien: 'Empresas que quieren reducir tareas manuales y mejorar el seguimiento de sus oportunidades.',
          incluye: ['Identificación del proceso que se quiere automatizar.', 'Diseño del flujo de trabajo.', 'Configuración de disparadores y condiciones.', 'Automatización de tareas, avisos y cambios de estado.', 'Configuración de reglas de asignación o seguimiento, cuando proceda.', 'Pruebas funcionales.', 'Documentación de la automatización implementada.'],
          nota: 'El precio final depende de la herramienta, las integraciones y la complejidad del flujo.',
        },
      ],
    },
    {
      tipo: 'proceso',
      titulo: 'Cómo trabajamos. Un proceso comercial <em>organizado y medible</em>',
      pasos: [
        { t: 'Entendemos tu proceso de ventas', d: 'Analizamos cómo captas clientes, cómo gestionas las oportunidades y cómo trabaja tu equipo. Identificamos los objetivos, las dificultades y los puntos donde se pierden oportunidades o tiempo.' },
        { t: 'Analizamos el CRM y los datos', d: 'Revisamos la configuración, los pipelines, los campos, las actividades, los informes y las integraciones. Comprobamos si el sistema refleja el proceso real y si los datos permiten decidir con fiabilidad.' },
        { t: 'Configuramos y mejoramos el sistema', d: 'Definimos las etapas comerciales, organizamos los datos y configuramos las automatizaciones y los informes acordados, para que el CRM facilite el día a día en lugar de añadir complejidad.' },
        { t: 'Medimos y optimizamos', d: 'Analizamos la actividad comercial, las conversiones, las oportunidades estancadas y la evolución del pipeline. Revisamos los resultados con el equipo y priorizamos las siguientes mejoras.' },
      ],
      cta: 'Solicita un diagnóstico de tu CRM',
    },
    {
      tipo: 'beneficios',
      titulo: 'Más control comercial, menos tareas manuales y <em>mejores decisiones</em>',
      items: [
        { t: 'Organiza tus oportunidades de venta', d: 'Centraliza contactos, empresas, actividades y oportunidades para que el equipo comparta una visión común del proceso comercial y dependa menos de hojas de cálculo y notas dispersas.' },
        { t: 'Mejora la eficiencia de tu equipo', d: 'Automatiza tareas repetitivas, recordatorios y acciones administrativas para que los comerciales dediquen más tiempo a conversar, cualificar oportunidades y cuidar la relación con el cliente.' },
        { t: 'Toma decisiones basadas en datos', d: 'Usa informes y dashboards para entender la evolución del pipeline, analizar las conversiones y detectar dónde se producen los principales problemas.' },
      ],
    },
    {
      tipo: 'garantias',
      titulo: 'Un CRM transparente, útil y <em>adaptado a tu forma de vender</em>',
      intro: 'Nuestro enfoque prioriza la utilidad operativa, la claridad de los procesos y el control de la empresa sobre sus sistemas.',
      puntos: [
        { t: 'Procesos documentados', d: 'el equipo dispone de criterios claros para gestionar contactos, oportunidades y actividades.' },
        { t: 'Datos organizados', d: 'definimos criterios de calidad y mantenimiento para mejorar la fiabilidad de la información.' },
        { t: 'Herramientas bajo control', d: 'la configuración, los accesos y la documentación se gestionan conforme a las condiciones acordadas.' },
        { t: 'Informes comprensibles', d: 'los indicadores se relacionan con las decisiones que debe tomar la empresa.' },
        { t: 'Alcance definido', d: 'las tareas, las integraciones, el soporte y las condiciones económicas se establecen antes de empezar.' },
      ],
      nota: 'La permanencia, la cancelación, el soporte y la propiedad de las configuraciones se especifican en cada propuesta comercial.',
    },
    {
      tipo: 'cta',
      titulo: 'Hablemos de cómo mejorar tu <em>gestión comercial</em>',
      texto: 'Cuéntanos qué CRM utilizas, cómo trabaja tu equipo comercial y qué problema quieres resolver. Te propondremos un alcance adaptado a las necesidades de tu empresa.',
      boton: 'Solicitar una primera valoración',
    },
    {
      tipo: 'ayuda',
      titulo: '¿En qué te podemos ayudar?',
      items: [
        { t: 'Consultoría CRM', d: 'Definición de procesos, necesidades y configuración del sistema según los objetivos comerciales.' },
        { t: 'Implementación de CRM', d: 'Puesta en marcha de pipelines, contactos, empresas, oportunidades y actividades.' },
        { t: 'Gestión y optimización de CRM', d: 'Mejora continua de la configuración, los datos, los procesos y la adopción por parte del equipo.' },
        { t: 'Automatización comercial', d: 'Flujos, recordatorios, tareas y notificaciones para reducir trabajo manual.' },
        { t: 'Gestión del pipeline de ventas', d: 'Definición de etapas, criterios de avance y seguimiento de oportunidades.' },
        { t: 'Reporting comercial', d: 'Dashboards e informes para analizar actividad, conversión, oportunidades y previsiones.' },
        { t: 'Lead management', d: 'Organización, cualificación, asignación y seguimiento de contactos comerciales.' },
        { t: 'Integración entre marketing y ventas', d: 'Conexión de los procesos de captación, cualificación y seguimiento comercial.' },
        { t: 'Migración y limpieza de datos', d: 'Revisión, organización y traslado de información entre herramientas, según el alcance contratado.' },
        { t: 'Sales Operations', d: 'Mejora de procesos, indicadores, herramientas y coordinación para facilitar el trabajo del equipo comercial.' },
      ],
    },
  ],
  faq: {
    titulo: 'Preguntas frecuentes sobre CRM y gestión de ventas',
    preguntas: [
      { p: '¿Qué es un CRM y para qué sirve?', r: 'Un CRM es un sistema para gestionar la información y las relaciones con clientes y contactos comerciales. Permite centralizar empresas, oportunidades, actividades y comunicaciones para mejorar el seguimiento y facilitar la gestión de ventas.' },
      { p: '¿Qué diferencia hay entre implementar un CRM y gestionarlo?', r: 'La implementación consiste en configurar el sistema y ponerlo en marcha. La gestión y optimización implican mantenerlo alineado con el proceso comercial, revisar los datos, mejorar las automatizaciones y adaptar los informes a las necesidades del negocio.' },
      { p: '¿Qué CRM es mejor para mi empresa?', r: 'Depende del tamaño del equipo, el proceso comercial, las integraciones necesarias, el presupuesto y la complejidad de la actividad. La elección debe partir de los requisitos del negocio y no únicamente del número de funcionalidades de cada herramienta.' },
      { p: '¿Podéis trabajar con el CRM que ya utilizamos?', r: 'Sí, siempre que la plataforma permita realizar las modificaciones necesarias y existan los permisos correspondientes. El primer paso es revisar la configuración actual y determinar qué conviene conservar, corregir o ampliar.' },
      { p: '¿Se puede automatizar el seguimiento de ventas?', r: 'Sí. Se pueden configurar recordatorios, tareas, asignaciones de leads, notificaciones y cambios de estado según determinadas condiciones. Las automatizaciones deben facilitar el trabajo comercial y contemplar las excepciones del proceso.' },
      { p: '¿Qué indicadores comerciales conviene medir?', r: 'Entre los habituales están el número de oportunidades, la conversión entre etapas, la duración del ciclo de ventas, el valor del pipeline, la tasa de cierre y el cumplimiento de objetivos. Los KPI deben adaptarse al modelo comercial y a la calidad de los datos disponibles.' },
      { p: '¿Cuánto cuesta implementar o gestionar un CRM?', r: 'Depende de la herramienta, el número de usuarios, la complejidad del pipeline, las migraciones, las automatizaciones y las integraciones. Como referencia, la gestión mensual empieza en 290 €/mes y la implementación en 790 € de pago único.' },
      { p: '¿Cuánto tiempo se tarda en implantar un CRM?', r: 'Depende de la complejidad del proceso, la disponibilidad de los datos y las integraciones necesarias. Una configuración básica puede ser relativamente rápida; una implantación con migración, varios equipos y procesos complejos requiere más planificación.' },
      { p: '¿Necesita mi equipo formación para utilizar el CRM?', r: 'Sí, cuando se implanta una nueva forma de trabajo o se modifican procesos importantes. La formación ayuda a que el equipo entienda qué debe registrar, cómo gestionar las oportunidades y qué criterios utilizar en cada etapa.' },
      { p: '¿Podéis conectar el CRM con el email marketing y otras herramientas?', r: 'Sí, cuando las plataformas ofrecen integraciones compatibles. La conexión facilita la sincronización de contactos, el seguimiento de campañas, la asignación de oportunidades y la coordinación entre marketing y ventas.' },
      { p: '¿Cómo puedo empezar?', r: 'Cuéntanos qué herramientas utilizas, cómo gestionas las oportunidades y qué dificultades encuentra tu equipo comercial. Revisaremos el punto de partida para identificar las mejoras prioritarias y definir un plan de trabajo.' },
    ],
  },
};
