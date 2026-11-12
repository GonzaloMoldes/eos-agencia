// Recursos descargables (lead magnets). Se descargan dejando nombre y correo:
// /api/contacto/ (tipo «recurso») avisa al equipo, manda el enlace al lead y
// devuelve la URL de descarga. El archivo vive en public/recursos/<carpeta con
// sufijo aleatorio>/ para que no se pueda adivinar ni indexar (X-Robots-Tag en
// vercel.json). Un artículo lo muestra con «recurso: <id>» en su frontmatter.
export interface Recurso {
  id: string;
  titulo: string;
  subtitulo: string;
  incluye: string[];
  archivo: string;     // ruta pública del descargable
  imagen: string;      // vista previa (public/)
  servicio: string;    // servicio relacionado (para el aviso al equipo)
}

export const RECURSOS: Recurso[] = [
  {
    id: 'kit-seguimiento',
    titulo: 'Kit de seguimiento de clientes',
    subtitulo: 'Plantilla de Google Sheets, aviso diario por correo y guía en PDF. Gratis y en 10 minutos.',
    incluye: [
      'Plantilla con fases, fechas de seguimiento que se calculan solas y colores para lo atrasado.',
      'Script de Google que cada mañana te envía los seguimientos del día (y, si quieres, los correos).',
      '5 plantillas de correo listas para usar y guía paso a paso en PDF.',
    ],
    archivo: '/recursos/kit-seguimiento-a16ce69eb1/EOS-Kit-seguimiento-clientes.zip',
    imagen: '/recursos/kit-seguimiento.webp',
    servicio: 'Marketing automation',
  },
];

export const recurso = (id?: string) => RECURSOS.find((r) => r.id === id);
