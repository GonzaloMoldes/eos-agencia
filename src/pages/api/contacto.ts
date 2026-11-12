// POST /api/contacto/ (con barra final: trailingSlash es «always») — formulario de contacto y petición de diagnóstico.
// Se ejecuta en el servidor (función de Vercel) y envía el mensaje por correo a
// las dos direcciones del equipo con Resend (https://resend.com). La clave
// nunca llega al navegador.
//
// Variables de entorno (Vercel → Project → Settings → Environment Variables):
//   RESEND_API_KEY      Clave de la API de Resend (obligatoria)
//   CONTACTO_DESTINO    Opcional. Correos de destino separados por comas.
//                       Por defecto: anamaria@eosstudio.es, gonzalomoldes@eosstudio.es
//   CONTACTO_REMITENTE  Opcional. Por defecto «EOS Studio <web@eosstudio.es>».
//                       El dominio del remitente tiene que estar verificado en Resend.
//
// Sin RESEND_API_KEY responde 503 y el formulario ofrece escribir por WhatsApp
// o por correo: nunca se pierde un contacto sin que la persona lo sepa.
import type { APIRoute } from 'astro';
import { recurso as buscarRecurso } from '../../data/recursos';
import { SITIO } from '../../data/sitio';

export const prerender = false;

const DESTINO_POR_DEFECTO = ['anamaria@eosstudio.es', 'gonzalomoldes@eosstudio.es'];
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const MAX = 4000;

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json; charset=utf-8' } });

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const limpio = (v: unknown, max = 300) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

const CAMPOS: Record<string, string> = {
  nombre: 'Nombre', email: 'Correo', telefono: 'Teléfono', empresa: 'Empresa', web: 'Web',
  servicio: 'Le interesa', plan: 'Plan', objetivo: 'Objetivo / necesita', inversion: 'Inversión mensual', herramienta: 'Herramienta actual', mensaje: 'Mensaje',
  recurso: 'Recurso descargado', novedades: 'Acepta recibir consejos',
  pagina: 'Página', origen: 'Origen de la visita',
};
const TITULOS = { contacto: 'Nuevo contacto desde eosstudio.es', diagnostico: 'Petición de diagnóstico gratuito', landing: 'Lead desde una landing page', recurso: 'Descarga de un recurso gratuito' };

export const POST: APIRoute = async ({ request }) => {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: 'bad_request' }, 400);
  }

  // Trampa para bots: un campo oculto que una persona nunca rellena.
  if (limpio(body.website)) return json({ ok: true });

  const tipo = body.tipo === 'diagnostico' || body.tipo === 'landing' || body.tipo === 'recurso' ? body.tipo : 'contacto';
  const rec = tipo === 'recurso' ? buscarRecurso(limpio(body.recurso)) : undefined;
  if (tipo === 'recurso' && !rec) return json({ ok: false, error: 'invalid_input' }, 422);
  const datos: Record<string, string> = {};
  for (const k of Object.keys(CAMPOS)) datos[k] = limpio(body[k], k === 'mensaje' || k === 'objetivo' ? MAX : 300);
  datos.email = datos.email.toLowerCase();
  if (rec) { datos.recurso = rec.titulo; datos.servicio = datos.servicio || rec.servicio; datos.novedades = datos.novedades === 'Sí' ? 'Sí' : 'No'; }

  if (!datos.nombre || !EMAIL_RE.test(datos.email)) return json({ ok: false, error: 'invalid_input' }, 422);
  if ((tipo === 'diagnostico' || tipo === 'landing') && !datos.web) return json({ ok: false, error: 'invalid_input' }, 422);
  if (body.consent !== true) return json({ ok: false, error: 'consent_required' }, 422);

  const { RESEND_API_KEY, CONTACTO_DESTINO, CONTACTO_REMITENTE } = import.meta.env;
  if (!RESEND_API_KEY) return json({ ok: false, error: 'not_configured' }, 503);

  const destino = CONTACTO_DESTINO ? CONTACTO_DESTINO.split(',').map((x: string) => x.trim()).filter(Boolean) : DESTINO_POR_DEFECTO;
  const asunto = tipo === 'recurso'
    ? `Descarga: ${rec!.titulo} · ${datos.nombre}${datos.empresa ? ` (${datos.empresa})` : ''}`
    : tipo === 'landing'
    ? `Lead landing${datos.servicio ? ` ${datos.servicio}` : ''}: ${datos.nombre} · ${datos.web}`
    : tipo === 'diagnostico'
      ? `Diagnóstico gratuito: ${datos.web} (${datos.nombre})`
      : `Nuevo contacto desde la web: ${datos.nombre}${datos.empresa ? ` · ${datos.empresa}` : ''}`;

  const filas = Object.entries(CAMPOS)
    .filter(([k]) => datos[k])
    .map(([k, etiqueta]) => `<tr><td style="padding:6px 14px 6px 0;color:#7A6E78;vertical-align:top;white-space:nowrap;">${etiqueta}</td><td style="padding:6px 0;color:#1B1412;">${esc(datos[k]).replace(/\n/g, '<br>')}</td></tr>`)
    .join('');
  const html = `<div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.5;">
<p style="margin:0 0 14px;color:#C8643B;font-family:Georgia,serif;font-style:italic;font-size:17px;">${TITULOS[tipo]}</p>
<table cellpadding="0" cellspacing="0" border="0">${filas}</table>
<p style="margin:18px 0 0;color:#7A6E78;font-size:13px;">Responde a este correo para contestar directamente a ${esc(datos.nombre)}.</p></div>`;
  const texto = Object.entries(CAMPOS).filter(([k]) => datos[k]).map(([k, e]) => `${e}: ${datos[k]}`).join('\n');

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: CONTACTO_REMITENTE || 'EOS Studio <web@eosstudio.es>',
        to: destino,
        reply_to: datos.email,
        subject: asunto,
        html,
        text: texto,
      }),
    });
    if (!r.ok) {
      console.error('Resend', r.status, await r.text());
      return json({ ok: false, error: 'send_failed' }, 502);
    }
  } catch (e) {
    console.error('Resend', e);
    return json({ ok: false, error: 'send_failed' }, 502);
  }

  if (rec) {
    // Enlace al lead por correo. Si falla, la descarga sigue disponible en la página.
    const url = `${SITIO.url}${rec.archivo}`;
    const nombre = esc(datos.nombre.split(' ')[0]);
    const cuerpo = `<div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#1B1412;max-width:560px;">
<p style="margin:0 0 6px;font-family:Georgia,serif;font-size:22px;">Hola, ${nombre}:</p>
<p style="margin:0 0 16px;">Aquí tienes tu <b>${esc(rec.titulo)}</b>. ${esc(rec.subtitulo)}</p>
<p style="margin:0 0 20px;"><a href="${url}" style="display:inline-block;background:#F07A45;color:#1B1412;text-decoration:none;font-weight:bold;padding:12px 22px;border-radius:999px;">Descargar el kit</a></p>
<p style="margin:0 0 16px;color:#4A3F3B;">Empieza por la guía en PDF que va dentro: en 10 minutos lo tienes funcionando. Si te atascas, responde a este correo y te echamos una mano.</p>
<p style="margin:24px 0 0;color:#7A6E78;font-size:13px;">EOS Studio · <a href="${SITIO.url}/" style="color:#A8431C;">eosstudio.es</a></p></div>`;
    try {
      const r2 = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: CONTACTO_REMITENTE || 'EOS Studio <web@eosstudio.es>',
          to: [datos.email],
          reply_to: SITIO.email,
          subject: `Tu ${rec.titulo.toLowerCase()} de EOS Studio`,
          html: cuerpo,
          text: `Hola, ${datos.nombre.split(' ')[0]}:\n\nAquí tienes tu ${rec.titulo}: ${url}\n\nEmpieza por la guía en PDF que va dentro.\n\nEOS Studio · eosstudio.es`,
        }),
      });
      if (!r2.ok) console.error('Resend (lead)', r2.status, await r2.text());
    } catch (e) {
      console.error('Resend (lead)', e);
    }
    return json({ ok: true, url: rec.archivo });
  }
  return json({ ok: true });
};
