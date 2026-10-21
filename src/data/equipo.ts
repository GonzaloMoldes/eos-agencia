// El equipo. Lo marcado como COMPLETAR falta por confirmar.
// Foto: dejarla en public/equipo/<archivo> (cuadrada, 800x800, .jpg o .webp)
// y poner el nombre del archivo; mientras esté vacío se muestran las iniciales.
export interface Certificacion {
  nombre: string;
  emisor: string;
  fecha: string;      // año de expedición (o «2026»)
  vence?: string;     // año de vencimiento, si lo tiene
  id?: string;        // ID de la credencial
}

export interface Persona {
  nombre: string;
  iniciales: string;
  cargo: string;
  sede: string;
  especialidades: string[];
  bio: string;
  linkedin: string;
  email: string;
  foto: string;
  certificaciones: Certificacion[];
}

export const EQUIPO: Persona[] = [
  {
    nombre: 'Gonzalo Moldes',
    iniciales: 'GM',
    cargo: 'Cofundador · Desarrollo de proyectos',
    sede: 'A Coruña',
    // Sacadas de sus certificaciones. COMPLETAR si quiere otras.
    especialidades: ['Inbound marketing', 'Email marketing', 'Automatización con IA', 'Gestión de proyectos'],
    bio: '', // COMPLETAR: dos o tres líneas de trayectoria (vacío = no se muestra)
    linkedin: 'https://www.linkedin.com/in/gonzalomoldes/',
    email: 'gonzalomoldes@eosstudio.es',
    foto: '',
    certificaciones: [
      { nombre: 'Inbound Marketing', emisor: 'HubSpot Academy', fecha: '2026', vence: '2028', id: '939ec047b6c241489e2feba49a7c3ca3' },
      { nombre: 'Klaviyo Product Certificate', emisor: 'Klaviyo', fecha: '2026', vence: '2028', id: '175530806' },
      { nombre: 'Deliverability Certificate', emisor: 'Klaviyo', fecha: '2026', vence: '2028', id: '175479175' },
      { nombre: 'Project Management: Initiation, Planning, Execution, Agile y Capstone', emisor: 'Google', fecha: '2026' },
      { nombre: 'Prompt Engineering for ChatGPT', emisor: 'Vanderbilt University', fecha: '2026', id: 'QJZEI4ZSLFW6' },
      { nombre: 'ChatGPT + Zapier: Automate Email Replies with AI', emisor: 'Vanderbilt University', fecha: '2026', id: '0D5WW2MBH18Q' },
      { nombre: 'ChatGPT + Zapier: Easy Inbox Intelligence', emisor: 'Vanderbilt University', fecha: '2026', id: 'KFAEPW5Q938D' },
      { nombre: 'Social Media Marketing', emisor: 'Instituto Europeo de Posgrado (IEP)', fecha: '2026' },
      { nombre: 'Microsoft Certified: Power BI Data', emisor: 'Fundae', fecha: '2023', id: '717/01' },
    ],
  },
  {
    nombre: 'AnaMaria Vaduva',
    iniciales: 'AV',
    cargo: 'Cofundadora · Adquisición y generación de leads',
    sede: 'Valencia',
    especialidades: ['SEO', 'SEO para ecommerce', 'GEO', 'Paid Media', 'Lead Generation'],
    bio: '', // COMPLETAR: dos o tres líneas de trayectoria (vacío = no se muestra)
    linkedin: 'https://www.linkedin.com/in/anamariavaduva/',
    email: 'anamaria@eosstudio.es',
    foto: '',
    certificaciones: [
      { nombre: 'SEO Manager Certification', emisor: 'Blue Array', fecha: '2020', id: 'gtbwnvmlol' },
      { nombre: 'eCommerce SEO Certification', emisor: 'Blue Array', fecha: '2021', id: 'yx6q8dct5e' },
      { nombre: 'Google Analytics', emisor: 'Google', fecha: '2022', id: '104494618' },
    ],
  },
];

// Resumen de certificaciones por emisor, para la franja de la home y de
// Sobre nosotros. El detalle completo sale de EQUIPO. Para mostrar el sello
// oficial: dejar la imagen en public/certificaciones/ y poner el archivo en `logo`.
export const CERTIFICACIONES = [
  { nombre: 'HubSpot Academy', detalle: 'Inbound Marketing', logo: '' },
  { nombre: 'Blue Array', detalle: 'SEO Manager y SEO para ecommerce', logo: '' },
  { nombre: 'Google', detalle: 'Analytics y gestión de proyectos', logo: '' },
  { nombre: 'Klaviyo', detalle: 'Producto y entregabilidad', logo: '' },
  { nombre: 'Vanderbilt University', detalle: 'IA aplicada: ChatGPT y Zapier', logo: '' },
  { nombre: 'IEP', detalle: 'Social Media Marketing', logo: '' },
  { nombre: 'Microsoft Power BI', detalle: 'Análisis de datos', logo: '' },
];
