// Genera las imágenes para compartir (public/og/<ruta>.png, 1200×630) y el logo
// en PNG (public/logo.png 512×512, public/apple-touch-icon.png 180×180).
//
// Se ejecuta a mano, después de compilar, cuando cambian títulos o ilustraciones:
//   npm run build && npm run og && npm run build
// (la segunda compilación enlaza las imágenes nuevas en las páginas).
//
// Lee las páginas ya compiladas (.vercel/output/static): de cada una toma el
// antetítulo, el H1 y su ilustración. Necesita Playwright con Chromium (no se
// instala con el proyecto: no hace falta en Vercel, las PNG van en el repo).
const { chromium } = require('playwright');
const fs = require('node:fs');
const path = require('node:path');

const RAIZ = path.join(__dirname, '../..');
const COMPILADO = path.join(RAIZ, '.vercel/output/static');
const FUENTES = path.join(RAIZ, 'public/fonts');
const SALIDA = path.join(RAIZ, 'public/og');
const ESCENA_POR_DEFECTO = fs.readFileSync(path.join(RAIZ, 'src/assets/ilustraciones/hero.svg'), 'utf8');

// Páginas que no se comparten: legales, errores y herramientas internas.
const FUERA = /^(legal|404|firmas|lp$)/;

const css = `
@font-face{font-family:'Instrument Serif';font-style:normal;src:url('file://${FUENTES}/instrument-serif-latin-400-normal.woff2')}
@font-face{font-family:'Instrument Serif';font-style:italic;src:url('file://${FUENTES}/instrument-serif-latin-400-italic.woff2')}
@font-face{font-family:'Inter Tight';font-weight:100 900;src:url('file://${FUENTES}/inter-tight-latin-wght-normal.woff2')}
@font-face{font-family:'Cinzel';font-weight:400 900;src:url('file://${FUENTES}/cinzel-latin-wght-normal.woff2')}
*{margin:0;box-sizing:border-box}
body{width:1200px;height:630px;overflow:hidden;font-family:'Inter Tight';color:#1B1412;
  background:radial-gradient(60% 70% at 78% 60%,rgba(240,122,69,.22),transparent 70%),linear-gradient(180deg,#F8E6DE,#F4F1EB)}
.marco{position:absolute;inset:26px;border:1px solid rgba(200,100,59,.28);border-radius:28px}
.texto{position:absolute;left:72px;top:70px;width:590px;height:490px;display:flex;flex-direction:column;justify-content:space-between}
.logo{display:flex;align-items:flex-end;gap:12px}
.logo b{font-family:'Cinzel';font-weight:700;font-size:30px;letter-spacing:.16em}
.logo i{font-family:'Instrument Serif';font-size:24px;color:#A8431C}
.ante{font-family:'Cinzel';font-size:19px;letter-spacing:.14em;color:#5A4E4A;margin-bottom:18px;text-transform:uppercase}
h1{font-family:'Instrument Serif';font-weight:400;line-height:1;letter-spacing:-.015em;font-size:var(--t)}
h1 em{font-style:italic;background:linear-gradient(90deg,#E98C83,#F07A45 55%,#E8A33D);-webkit-background-clip:text;color:transparent}
.pie{font-size:20px;color:#5A4E4A}
.escena{position:absolute;right:34px;bottom:44px;width:470px}
.escena svg{width:100%;height:auto}
`;
const sol = (color = '#1B1412') => `<svg viewBox="0 0 48 32" width="__W" height="__H"><g stroke="#E8A33D" stroke-width="2.6" stroke-linecap="round"><path d="M24 3v5M12 7.5l3.2 3.8M36 7.5l-3.2 3.8M5 17h5M38 17h5"/></g><path d="M13 27a11 11 0 0 1 22 0z" fill="#F07A45"/><path d="M3 29.5h42" stroke="${color}" stroke-width="2.6" stroke-linecap="round"/></svg>`;

function paginas() {
  const lista = [];
  const recorrer = (dir) => {
    for (const f of fs.readdirSync(dir)) {
      const p = path.join(dir, f);
      if (fs.statSync(p).isDirectory()) recorrer(p);
      else if (f === 'index.html') {
        const ruta = path.relative(COMPILADO, dir).replace(/\\/g, '/');
        if (!FUERA.test(ruta)) lista.push({ ruta, nombre: ruta.replace(/\//g, '-') || 'inicio', html: fs.readFileSync(p, 'utf8') });
      }
    }
  };
  recorrer(COMPILADO);
  return lista;
}

const limpiar = (s) => s.replace(/<(?!\/?em\b)[^>]+>/g, '').replace(/\s+/g, ' ').trim();

(async () => {
  if (!fs.existsSync(COMPILADO)) throw new Error('Primero: npm run build');
  fs.mkdirSync(SALIDA, { recursive: true });
  const navegador = await chromium.launch();
  const pagina = await navegador.newPage({ viewport: { width: 1200, height: 630 } });
  const tmp = path.join(require('node:os').tmpdir(), 'eos-og.html');

  for (const p of paginas()) {
    if (/http-equiv="refresh"/.test(p.html)) continue;
    const h1 = limpiar((p.html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [, 'EOS Studio'])[1]);
    const ante = limpiar((p.html.match(/class="eyebrow"[^>]*>([\s\S]*?)<\/span>\s*<h1/) || [, ''])[1]).replace(/^[^A-Za-zÁÉÍÓÚáéíóúÑñ¿]+/, '');
    const escena = (p.html.match(/<figure class="escena[^"]*"[^>]*>([\s\S]*?<\/svg>)/) || [, ESCENA_POR_DEFECTO])[1];
    const largo = h1.replace(/<[^>]+>/g, '').length;
    const tam = largo > 70 ? 50 : largo > 50 ? 58 : 68;
    fs.writeFileSync(tmp, `<!doctype html><meta charset="utf-8"><style>${css}</style><body>
      <div class="marco"></div>
      <div class="texto">
        <div class="logo">${sol().replace('__W', '44').replace('__H', '30')}<b>EOS</b><i>Studio</i></div>
        <div><p class="ante">${ante}</p><h1 style="--t:${tam}px">${h1}</h1></div>
        <p class="pie">eosstudio.es</p>
      </div>
      <div class="escena">${escena}</div></body>`);
    await pagina.goto('file://' + tmp);
    await pagina.evaluate(() => document.fonts.ready);
    await pagina.screenshot({ path: path.join(SALIDA, `${p.nombre}.png`) });
    console.log('og/' + p.nombre + '.png');
  }

  // Logo cuadrado: el sol sobre fondo mármol.
  for (const [tam, nombre] of [[512, 'logo.png'], [180, 'apple-touch-icon.png']]) {
    await pagina.setViewportSize({ width: tam, height: tam });
    fs.writeFileSync(tmp, `<!doctype html><style>*{margin:0}body{width:${tam}px;height:${tam}px;display:grid;place-items:center;background:#F4F1EB}</style><body>${sol().replace('__W', String(tam * 0.72)).replace('__H', String(tam * 0.48))}</body>`);
    await pagina.goto('file://' + tmp);
    await pagina.screenshot({ path: path.join(RAIZ, 'public', nombre) });
    console.log(nombre);
  }
  await navegador.close();
})();
