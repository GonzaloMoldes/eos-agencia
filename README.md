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

## Firmas de correo

Generador interno en `/firmas/` (`public/firmas/index.html`, no indexado y sin enlazar desde la web): se elige a la persona o se rellenan sus datos, y se copia la firma para pegarla en Gmail, Outlook o Apple Mail.

- La firma es HTML con tablas y estilos en línea: es lo único que respetan todos los clientes de correo.
- El sol animado es un GIF (`public/firmas/sol-eos.gif`) y la greca un PNG (`public/firmas/greca.png`). Las firmas los cargan desde `https://www.eosstudio.es/firmas/`, así que tienen que estar publicados en producción.
- Se regeneran con `python3 scripts/firmas/sol.py` y `python3 scripts/firmas/greca.py` (necesitan Pillow).
- Para añadir a alguien del equipo a la lista: una entrada más en `EQUIPO`, dentro de `public/firmas/index.html`.
- Outlook de escritorio muestra el GIF quieto (su primer fotograma); el resto lo anima.
