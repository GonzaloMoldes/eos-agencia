import { getCollection, type CollectionEntry } from 'astro:content';

export type Entrada = CollectionEntry<'blog'>;

// Publicadas, de la más reciente a la más antigua. Los borradores solo se ven
// en local (npm run dev).
export async function entradas(): Promise<Entrada[]> {
  const todas = await getCollection('blog', (e) => import.meta.env.DEV || !e.data.borrador);
  return todas.sort((a, b) => b.data.fecha.getTime() - a.data.fecha.getTime());
}

export const TIPOS = { guia: 'Guía', articulo: 'Artículo' } as const;

export const minutosLectura = (texto = '') => Math.max(1, Math.round(texto.split(/\s+/).length / 220));

export const fechaLarga = (d: Date) =>
  d.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
