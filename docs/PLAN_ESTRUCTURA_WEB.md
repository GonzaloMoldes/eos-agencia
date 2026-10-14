# Plan de estructura web — EOS Studio

> **Propósito:** decidir la arquitectura de URLs antes de publicar nada, fijar qué página ataca qué búsqueda y dejar a la vista lo que falta para lanzar.
>
> **Fecha:** 2026-10-13 · **Estado:** propuesta, pendiente de validar
>
> Documento vivo: cada decisión y cada pendiente lleva su estado.

---

## 1. Decisión: servicios bajo `/servicios/`

**Recomendación: `/servicios/<servicio>/`** (p. ej. `/servicios/seo-local/`), con `/servicios/` como página hub.

| | `/servicios/seo-local/` (anidada) | `/seo-local/` (en raíz) |
|---|---|---|
| Efecto directo en el ranking | Prácticamente nulo | Prácticamente nulo |
| Silo temático y enlazado | El hub enlaza a cada servicio y cada servicio cuelga del hub: la jerarquía que ve Google coincide con la URL | Hay que construir la jerarquía solo con enlaces |
| Migas de pan (BreadcrumbList) | Inicio › Servicios › SEO local, coherente con la URL | Inicio › SEO local, o unas migas que no casan con la URL |
| Search Console y GA4 | Un filtro por prefijo `/servicios/` agrupa todo el negocio de servicios | Hay que mantener a mano una lista de URLs |
| Crecer | Caben `/servicios/seo-local/` y, más adelante, `/casos-de-exito/…` o `/blog/…` sin chocar | Raíz cada vez más poblada; más riesgo de choques de slug |
| Longitud de URL | 11 caracteres más | Más corta |

**Por qué:** la posición de la palabra clave en la URL apenas cuenta. Lo que sí cuenta es una arquitectura clara (hub → servicio → hub), migas coherentes y poder medir el negocio por secciones. Con 11 servicios y la intención de crecer (casos, blog), la carpeta compensa los 11 caracteres de más.

**Lo importante es decidir ahora y no cambiarlo.** Cambiar de estructura con la web ya indexada obliga a redirecciones 301 y a semanas de recolocación.

## 2. Mapa de URLs

| URL | Página | Búsqueda principal | Estado |
|---|---|---|---|
| `/` | Inicio | marca + «agencia de marketing digital Valencia» | ✅ hecha |
| `/servicios/` | Hub de servicios | «servicios SEO», «servicios marketing digital» | ✅ hecha |
| `/servicios/seo-geo-valencia/` | SEO y GEO en Valencia | **agencia SEO Valencia**, posicionamiento web Valencia, GEO | ⏳ falta copy |
| `/servicios/seo-local/` | SEO local | **SEO local Valencia**, Google Maps, Google Business Profile | ✅ hecha |
| `/servicios/seo-ecommerce/` | SEO para ecommerce | SEO ecommerce, SEO tiendas online | ⏳ falta copy |
| `/servicios/seo-youtube/` | SEO para YouTube | SEO YouTube, posicionamiento vídeos YouTube | ✅ hecha |
| `/servicios/seo-pinterest/` | SEO para Pinterest | SEO Pinterest | ⏳ falta copy |
| `/servicios/chatgpt-ads/` | ChatGPT Ads | anuncios en ChatGPT, publicidad en IA | ⏳ falta copy |
| `/servicios/seo-marca-blanca/` | SEO en marca blanca | SEO marca blanca, SEO white label | ⏳ falta copy |
| `/servicios/autoridad-digital/` | Autoridad digital | digital PR, autoridad digital, link building | ✅ hecha |
| `/servicios/marketing-contenidos/` | Marketing de contenidos | marketing de contenidos, agencia de contenidos | ⏳ falta copy |
| `/servicios/marketing-automation/` | Marketing automation | marketing automation, automatización de marketing | ✅ hecha |
| `/servicios/consultoria-crm/` | Consultoría CRM | **consultoría CRM**, implementación de CRM | ✅ hecha |
| `/el-por-que/` | El porqué (el mito, la misión) | marca | ⏳ falta copy |
| `/sobre-nosotros/` | Sobre nosotros | marca, E-E-A-T (quiénes sois) | ⏳ falta copy y fotos |
| `/casos-de-exito/` | Casos de éxito | marca, prueba social | ⏳ faltan casos reales |
| `/preguntas-frecuentes/` | Preguntas frecuentes | dudas generales | ⏳ falta copy |

Cambios respecto a la lista inicial:

- **`/CRM/` → `/servicios/consultoria-crm/`.** Las URLs en mayúsculas dan problemas (`/CRM/` y `/crm/` son URLs distintas para Google) y «consultoría CRM» es la keyword principal del documento.
- **Las páginas sin copy no se publican.** En el hub y en la home aparecen como «Próximamente», sin enlace. Una página vacía o fina resta más de lo que suma. Al tener el copy: se crea `src/data/paginas/<slug>.ts`, se añade a `src/data/paginas/index.ts` y se marca `publicado: true` en `src/data/servicios.ts`. El build falla si algo de esto queda a medias.

## 3. Riesgo de canibalización: Valencia

Dos páginas pueden pelear por «SEO Valencia»:

- **`/servicios/seo-local/`** (copy ya escrito) apunta a «**SEO local en Valencia**»: Google Maps, ficha de empresa, reseñas, negocios de barrio.
- **`/servicios/seo-geo-valencia/`** debe apuntar a «**agencia SEO Valencia**» y «posicionamiento web Valencia»: SEO de la web completa más GEO, para empresas que venden en toda España.

Al escribir el copy de `seo-geo-valencia`: no hablar de fichas de Google ni de Maps más allá de una línea que enlace a SEO local, y que SEO local enlace a `seo-geo-valencia` cuando hable de posicionar la web completa.

La home ataca «agencia de marketing digital Valencia» y la marca, no «agencia SEO Valencia», para no competir con esa página.

## 4. Lo que hay hecho

- **Proyecto Astro 7 + adaptador de Vercel.** Sitio estático, CSS en línea, `trailingSlash: always`, redirección de `eosstudio.es` a `www`.
- **Sistema de diseño «aurora moderna».** Mezcla de historia y modernidad. Historia: titulares en Instrument Serif con cursivas en degradado de amanecer, letras griegas numerando las secciones, logo en Cinzel, columnas y laurel. Modernidad: orbes de aurora difuminados detrás de cada hero, textura de grano, retícula fina de fondo, Inter Tight en el texto, etiquetas en DM Mono, cabecera de cristal flotante, cinta de servicios en movimiento y bandas de «noche antes del amanecer» con el sol asomando por el horizonte.
- **Marco lateral** (`src/components/Marco.astro`), como el marco de taller de gmvsolutions: piezas fijas en los bordes de la ventana (columna rota con pistas de circuito, laurel que se deshace en píxeles, pluma de fénix, sol pixelado en la esquina, cursor y greca). Solo decoran: no se pueden pulsar, no las lee el lector de pantalla, desaparecen en pantallas estrechas y respetan «reducir movimiento».
- **Ilustraciones.** El reparto de GMV Solutions (la del moño, el de barba y camisa azul, el de gafas y corbata) más dos personajes nuevos, en ilustración plana editorial: proporciones alargadas, sin contorno, caras sin rasgos y volumen con un segundo tono. Lo griego va en el atrezo: columnas jónicas, laurel, ánfora, podio de mármol y el sol de la aurora. Son SVG generados por código (`scripts/ilustraciones/`), con animaciones que respetan «reducir movimiento».
- **Páginas:** home, hub de servicios, 5 servicios con el copy de los documentos y 404.
- **SEO técnico:** canonical, Open Graph, `ProfessionalService` en todo el sitio, `BreadcrumbList`, `Service` con precio desde, `FAQPage` en cada FAQ, `ItemList` en el hub, sitemap curado, `robots.txt` con los bots de IA permitidos y `llms.txt`.

## 5. Cambios hechos al copy de los documentos

| Página | Cambio | Motivo |
|---|---|---|
| CRM, automation | Se quitó «Los siguientes planes constituyen una propuesta de catálogo… deben validarse» | Es una nota interna, no texto para el cliente |
| Automation | Se quitó «El alcance debe especificar si el importe corresponde a un lote de cinco campañas…» | Nota interna. **Decidir:** ¿los 550 € son un lote de 5 campañas o una cuota? |
| CRM, automation, YouTube, local | La FAQ «¿Cuánto cuesta…?» incluye los precios desde | Las IAs y los fragmentos destacados citan cifras concretas |
| SEO local | El plan Start (pago único) decía «Informe mensual»; ahora «Informe de resultados» | Un pago único no lleva informe mensual. **Confirmar** |
| SEO local | Se añadió «Sin permanencia» al plan Active | Lo promete la meta description. **Confirmar** |
| Autoridad digital | Title y meta description nuevos | El documento no los traía. **Validar** |
| Autoridad digital | Subtítulo = opción 1 («Construimos marcas que la IA reconoce, valida y recomienda») | El documento ofrecía dos opciones |
| Autoridad digital | Fuera el bloque de casos de éxito | No hay casos reales; no se publican cifras inventadas (+XX %) |
| Autoridad digital | Los 4 beneficios del primer H2 se fusionaron con «¿Qué conseguimos?» | Eran casi iguales |
| SEO YouTube | «videos» → «vídeos» en el title | Ortografía |

## 6. Pendiente antes de lanzar

- [ ] **Repositorio en GitHub** `eos-agencia` (la integración no tiene permiso para crearlo) y proyecto en Vercel conectado a él.
- [ ] **Dominio definitivo.** Hoy es `eosstudio.es` de relleno: cambiarlo en `src/data/sitio.ts`, `astro.config.mjs`, `vercel.json` y `public/robots.txt`.
- [ ] **Correo de contacto.** Hoy es `hola@eosstudio.es`. Los botones abren el correo; si preferís un formulario, se añade como ruta on-demand de Vercel.
- [ ] **Precios con o sin IVA.** Ningún documento lo dice: hay que indicarlo en la página.
- [ ] **Páginas legales** (aviso legal, privacidad, cookies) y banner de cookies antes de meter analítica.
- [ ] **Analítica:** GA4 o Plausible, y Search Console.
- [ ] **Imagen Open Graph** (1200×630) con la marca.
- [ ] **Sobre nosotros:** nombres, fotos y trayectoria. Es la principal señal E-E-A-T de una agencia nueva.
- [ ] **Copy de las páginas pendientes** (ver tabla del punto 2).
- [ ] **Datos de la empresa** para el schema: dirección, teléfono y perfiles (LinkedIn, Google Business Profile de la propia agencia).
