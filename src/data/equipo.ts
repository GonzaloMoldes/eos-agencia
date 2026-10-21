// El equipo. Lo marcado como COMPLETAR no se ha podido comprobar (LinkedIn no
// es accesible desde el entorno donde se montó la web): revisarlo.
// Foto: dejarla en public/equipo/<archivo> (cuadrada, 800x800, .jpg o .webp)
// y poner el nombre del archivo; mientras esté vacío se muestran las iniciales.
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
}

export const EQUIPO: Persona[] = [
  {
    nombre: 'Gonzalo Moldes',
    iniciales: 'GM',
    cargo: 'Cofundador',                                   // COMPLETAR: cargo
    sede: 'A Coruña',
    especialidades: ['SEO', 'GEO', 'CRM', 'Marketing automation'], // COMPLETAR
    bio: '', // COMPLETAR: dos o tres líneas de trayectoria (vacío = no se muestra)
    linkedin: 'https://www.linkedin.com/in/gonzalomoldes/',
    email: 'gonzalomoldes@eosstudio.es',
    foto: '',
  },
  {
    nombre: 'AnaMaria Vaduva',
    iniciales: 'AV',
    cargo: 'Cofundadora · Adquisición y generación de leads',
    sede: 'Valencia',
    especialidades: ['SEO', 'GEO', 'Paid Media', 'Lead Generation'],
    bio: '', // COMPLETAR: dos o tres líneas de trayectoria (vacío = no se muestra)
    linkedin: 'https://www.linkedin.com/in/anamariavaduva/',
    email: 'anamaria@eosstudio.es',
    foto: '',
  },
];

// Marcas en las que hemos trabajado, como parte de sus equipos (antes de EOS).
export const EXPERIENCIA = [
  'Onlygal', 'Cueros Vélez', 'Telepizza', 'D-Link', 'Donpiso', 'Honda', 'Universitat de Barcelona', 'Worten',
];

// Certificaciones del equipo. `detalle` = nombre exacto de la certificación
// (p. ej. «Inbound Marketing»); COMPLETAR desde LinkedIn. Para mostrar el sello
// oficial: dejar la imagen en public/certificaciones/ y poner el archivo en `logo`.
export const CERTIFICACIONES = [
  { nombre: 'HubSpot', detalle: '', logo: '' },
  { nombre: 'Semrush', detalle: '', logo: '' },
  { nombre: 'Google Analytics', detalle: '', logo: '' },
  { nombre: 'Klaviyo', detalle: '', logo: '' },
];
