// Colecciones de contenido. El blog vive en src/content/blog/*.md: cada archivo
// es un artículo o una guía; el nombre del archivo es la URL (/blog/<archivo>/).
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string(),           // meta description (≈150-160 caracteres)
    fecha: z.coerce.date(),
    actualizado: z.coerce.date().optional(),
    tipo: z.enum(['guia', 'articulo']),
    // 'equipo' o el nombre de una persona de src/data/equipo.ts
    autor: z.string().default('equipo'),
    etiquetas: z.array(z.string()).default([]),
    servicio: z.string().optional(),   // slug de servicio relacionado (enlaza al final)
    borrador: z.boolean().default(false),
  }),
});

export const collections = { blog };
