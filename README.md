# EOS Studio — web

Web de EOS Studio, agencia de SEO, GEO y marketing digital en Valencia. Astro 7 + Vercel, mismo montaje que gmvsolutions.es.

## Comandos

```bash
npm install
npm run dev            # desarrollo en http://localhost:4321
npm run build          # genera las ilustraciones y compila el sitio
npm run ilustraciones  # solo regenera los SVG de las escenas
```

## Dónde está cada cosa

| Qué | Dónde |
|---|---|
| Datos de marca (dominio, correo) | `src/data/sitio.ts` |
| Catálogo de servicios (menú, hub, sitemap) | `src/data/servicios.ts` |
| Copy de cada servicio | `src/data/paginas/<slug>.ts` |
| Plantilla de página de servicio | `src/layouts/PaginaServicio.astro` |
| Sistema de diseño | `src/styles/global.css` |
| Decoración de los laterales | `src/components/Marco.astro` |
| Personajes y escenas ilustradas | `scripts/ilustraciones/` (generan `src/assets/ilustraciones/`) |
| Documentos de copy originales | `docs/copy/` |
| Plan de estructura, URLs y pendientes | `docs/PLAN_ESTRUCTURA_WEB.md` |

## Publicar un servicio nuevo

1. Escribir `src/data/paginas/<slug>.ts` (ver `tipos.ts` y cualquiera de los existentes).
2. Añadirlo a `src/data/paginas/index.ts`.
3. Poner `publicado: true` en `src/data/servicios.ts`.

El build falla si los pasos 2 y 3 no coinciden.

## Ilustraciones

Los SVG de `src/assets/ilustraciones/` se generan: no se editan a mano. Los personajes (`personajes.mjs`) son paramétricos (pose de brazos y piernas, hacia dónde miran, escala) y el atrezo (`atrezo.mjs`) son piezas sueltas: columnas, laurel, ánfora, bocadillos... Cada escena se compone en `generar.mjs`.

## Despliegue

Proyecto de Vercel conectado a este repositorio, framework Astro, sin variables de entorno de momento.
