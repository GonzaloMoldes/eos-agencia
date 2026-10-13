// Estructura de una página de servicio. El copy de cada servicio vive en
// src/data/paginas/<slug>.ts y la plantilla (PaginaServicio.astro) lo pinta en
// el orden en que vienen los bloques.
//
// En los textos se admite **negrita** y, en los títulos, <em>cursiva</em>
// (sale en coral). El copy lo escribimos nosotros: no entra HTML de terceros.

export interface Item { t: string; d: string }

export interface Plan {
  nombre: string;
  precio: string;          // «desde 290 €», «240 €»
  periodo: string;         // «/mes», «pago único»
  destacado?: boolean;     // se pinta en oscuro con la cinta «Recomendado»
  paraQuien?: string;
  objetivo?: string;
  base?: string;           // «Incluye todo lo del Plan Esencial, más:»
  incluye: string[];
  condiciones?: string;
}

export interface Extra {
  nombre: string;
  precio: string;
  paraQuien: string;
  incluye: string[];
  nota?: string;
}

export type Bloque =
  | { tipo: 'problema'; titulo: string; intro?: string; puntos: string[] }
  | { tipo: 'enfoque'; titulo: string; intro?: string; items: Item[] }
  | { tipo: 'paraQuien'; titulo: string; intro?: string; puntos: string[] }
  | { tipo: 'zona'; titulo: string; parrafos: string[] }
  | { tipo: 'planes'; titulo: string; intro?: string; planes: Plan[]; nota?: string }
  | { tipo: 'extras'; titulo: string; intro?: string; items: Extra[] }
  | { tipo: 'proceso'; titulo: string; pasos: Item[]; cta?: string }
  | { tipo: 'beneficios'; titulo: string; items: Item[] }
  | { tipo: 'garantias'; titulo: string; intro?: string; puntos: Item[]; nota?: string }
  | { tipo: 'pilares'; titulo: string; intro?: string; items: (Item & { lema: string; puntos: string[] })[] }
  | { tipo: 'logros'; titulo: string; items: Item[]; cta?: string }
  | { tipo: 'formula'; titulo: string; texto: string; formula: string[]; resultado: string; cierre: string; cta?: string }
  | { tipo: 'ayuda'; titulo: string; items: Item[] }
  | { tipo: 'cta'; titulo: string; texto: string; boton: string; nota?: string };

export interface PaginaServicio {
  slug: string;
  title: string;
  description: string;
  escena: string;
  hero: { h1: string; subtitulo?: string; intro: string[]; cta: string };
  bloques: Bloque[];
  faq: { titulo: string; preguntas: { p: string; r: string }[] };
  precioDesde?: number;   // para el schema Service
}
