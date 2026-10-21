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

## Formularios de contacto y diagnóstico

`/contacto/` y `/diagnostico/` envían a `/api/contacto/` (función de Vercel), que manda el mensaje por correo a **anamaria@eosstudio.es** y **gonzalomoldes@eosstudio.es** con [Resend](https://resend.com). Responder al correo contesta directamente a quien escribió.

Para activarlo (una vez):

1. Crear una cuenta en Resend y, en **Domains**, añadir `eosstudio.es`. Resend da unos registros DNS (TXT/MX de un subdominio): crearlos en el registrador del dominio y esperar a que salga «Verified».
2. En Resend → **API Keys**, crear una clave con permiso de envío.
3. En Vercel → proyecto → **Settings → Environment Variables**, añadir `RESEND_API_KEY` con esa clave (entorno Production y Preview) y volver a desplegar.
4. Opcional: `CONTACTO_DESTINO` (otros correos, separados por comas) y `CONTACTO_REMITENTE` (por defecto `EOS Studio <web@eosstudio.es>`).

Mientras no haya clave, el formulario no se pierde: muestra a la persona los botones de WhatsApp y correo para escribir directamente.

## Agenda de Google Calendar

1. Google Calendar → **Crear → Agenda de citas**: duración 30 min, horarios disponibles, y en «Formulario de reserva» los datos que se piden.
2. Guardar → **Compartir** → copiar el enlace de la página de reservas.
3. Pegarlo en `agenda` dentro de `src/data/sitio.ts`. Aparecen solos el botón «Reserva una llamada» y la agenda incrustada en `/contacto/`.

## Datos pendientes de completar

- `src/data/sitio.ts` → `legal`: razón social, NIF y domicilio (los usan el aviso legal y la privacidad; mientras falten se marcan en rojo en esas páginas). `redes`: URL de LinkedIn e Instagram de la agencia.
- `src/data/equipo.ts`: lo marcado como `COMPLETAR` (cargo de Gonzalo, especialidades, trayectoria), fotos en `public/equipo/` y el nombre exacto y el sello de cada certificación en `public/certificaciones/`.
- Las páginas legales son un punto de partida redactado sobre la LSSI-CE y el RGPD: conviene que las revise un profesional.

## Blog

Cada artículo es un archivo Markdown en `src/content/blog/` (el nombre del archivo es la URL). Cabecera:

```yaml
---
titulo: "…"
descripcion: "…"            # 150-160 caracteres, sale en Google
fecha: 2026-10-21
tipo: guia                   # guia | articulo
autor: AnaMaria Vaduva       # o 'equipo'
etiquetas: ["SEO local"]
servicio: seo-local          # opcional: enlaza al servicio al final
borrador: false              # true = solo se ve en local
---
```

## Google Analytics 4

- ID en `src/data/sitio.ts` (`ga4: 'G-B5NKN1BHDN'`). Vacío = sin analítica.
- Solo se carga si la persona acepta en el banner de cookies (`src/components/Cookies.astro`): sin consentimiento no se descarga nada de Google. La decisión se guarda 12 meses y se cambia desde «Configurar cookies» en el pie.
- Consent Mode v2: publicidad siempre denegada; analítica concedida solo al aceptar. Google Signals desactivado.
- Eventos: `generate_lead` (formulario enviado: `form_tipo`, `servicio`), `contacto_whatsapp`, `contacto_email`, `contacto_telefono`, `ver_plan` (`servicio`, `plan`), `clic_diagnostico` y `reserva_llamada`. Todos llevan `pagina`.
- En GA4 → Administrar → Eventos, marcar `generate_lead` y `contacto_whatsapp` como eventos clave.
