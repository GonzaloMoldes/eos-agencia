// Personajes de EOS Studio, en SVG y paramétricos.
//
// Estilo: ilustración plana editorial. Proporciones alargadas (cabeza pequeña,
// piernas largas), sin contorno, caras sin rasgos y volumen a base de un
// segundo tono: el brazo y la pierna de detrás van más oscuros.
//
// El reparto es el de las escenas de GMV Solutions (la del moño, el de barba y
// camisa azul, el de gafas y corbata) más dos personajes nuevos.
//
// Coordenadas locales: los pies en y=0, el eje del cuerpo en x=0. El personaje
// mide unos 300 px a escala 1. `mira` = 1 mira a la derecha, -1 a la izquierda.

// Se mantiene el nombre: el atrezo lo usa como color de detalle.
export const TINTA = '#27304F';

// Los id (clipPath, degradados) llevan el nombre de la escena delante: dos
// escenas en la misma página no pueden compartir id.
let contador = 0, prefijo = 'e';
export const nuevoId = (p) => `${prefijo}-${p}${++contador}`;
export const reiniciarIds = (pre = 'e') => { contador = 0; prefijo = pre; };

const f = (n) => Math.round(n * 10) / 10;

// Oscurece un color #rrggbb (para el lado en sombra).
export function sombra(hex, k = 0.82) {
  const n = parseInt(hex.slice(1), 16);
  const c = [n >> 16, (n >> 8) & 255, n & 255].map((v) => Math.round(v * k));
  return '#' + c.map((v) => v.toString(16).padStart(2, '0')).join('');
}

// Extremidad afilada: un polígono que une puntos con anchos distintos en cada
// articulación, suavizado con un trazo del mismo color.
function miembro(puntos, anchos, color) {
  const izq = [], der = [];
  for (let i = 0; i < puntos.length; i++) {
    const a = puntos[Math.max(0, i - 1)], b = puntos[Math.min(puntos.length - 1, i + 1)];
    let dx = b[0] - a[0], dy = b[1] - a[1];
    const l = Math.hypot(dx, dy) || 1;
    const nx = -dy / l, ny = dx / l, w = anchos[i] / 2;
    izq.push([puntos[i][0] + nx * w, puntos[i][1] + ny * w]);
    der.push([puntos[i][0] - nx * w, puntos[i][1] - ny * w]);
  }
  const pts = [...izq, ...der.reverse()];
  const d = 'M' + pts.map((p) => `${f(p[0])} ${f(p[1])}`).join('L') + 'Z';
  return `<path d="${d}" fill="${color}" stroke="${color}" stroke-width="3" stroke-linejoin="round"/>`;
}

// ── Poses ── (relativas al hombro / la cadera; x positiva = hacia delante)
const BRAZOS = {
  reposo:       { codo: [5, 56], mano: [9, 108] },
  cadera:       { codo: [30, 42], mano: [7, 80] },
  saluda:       { codo: [34, 18], mano: [44, -36] },
  senala:       { codo: [48, -2], mano: [102, -22] },
  senalaAbajo:  { codo: [46, 30], mano: [96, 42] },
  sostiene:     { codo: [12, 56], mano: [56, 44] },
  sostieneAlto: { codo: [18, 50], mano: [58, 10] },
  arriba:       { codo: [14, -50], mano: [20, -104] },
  teclea:       { codo: [14, 58], mano: [56, 68] },
  estrecha:     { codo: [26, 52], mano: [78, 60] },
};
const PIERNAS = {
  pie:   { del: { rodilla: [3, 72], tobillo: [4, 142] }, tra: { rodilla: [-2, 72], tobillo: [-4, 142] } },
  paso:  { del: { rodilla: [24, 68], tobillo: [42, 136] }, tra: { rodilla: [-12, 72], tobillo: [-40, 136] } },
  firme: { del: { rodilla: [8, 72], tobillo: [12, 142] }, tra: { rodilla: [-8, 72], tobillo: [-12, 142] } },
};

const CADERA_Y = -150, HOMBRO_Y = -234, CABEZA_Y = -270;

// Zapato plano y afilado, apoyado en el suelo.
function zapato([x, y], dir, color) {
  const d = (n) => f(x + n * dir);
  return `<path d="M${d(-7)} ${f(y - 6)}Q${d(4)} ${f(y - 9)} ${d(12)} ${f(y - 4)}L${d(24)} ${f(y + 6)}Q${d(25)} ${f(y + 9)} ${d(20)} ${f(y + 9)}L${d(-8)} ${f(y + 9)}Q${d(-10)} ${f(y + 1)} ${d(-7)} ${f(y - 6)}Z" fill="${color}"/>`;
}

// ── Pelo ──
function pelo(estilo, c, m) {
  const cs = sombra(c, 0.8);
  switch (estilo) {
    case 'larga': // melena larga y ondulada que cae por la espalda
      return {
        detras: `<path d="M${f(m * 6)} -292Q${f(-m * 22)} -296 ${f(-m * 20)} -266Q${f(-m * 18)} -246 ${f(-m * 30)} -228Q${f(-m * 44)} -208 ${f(-m * 30)} -192Q${f(-m * 20)} -182 ${f(-m * 34)} -170Q${f(-m * 50)} -176 ${f(-m * 52)} -196Q${f(-m * 56)} -222 ${f(-m * 40)} -244Q${f(-m * 30)} -262 ${f(-m * 34)} -280Q${f(-m * 30)} -298 ${f(m * 6)} -292Z" fill="${c}"/>` +
          `<path d="M${f(-m * 34)} -238Q${f(-m * 44)} -214 ${f(-m * 36)} -196" fill="none" stroke="${cs}" stroke-width="3" stroke-linecap="round"/>`,
        delante: `<path d="M${f(-m * 16)} -270Q${f(-m * 18)} -294 ${f(m * 2)} -292Q${f(m * 18)} -290 ${f(m * 16)} -276Q${f(m * 4)} -284 ${f(-m * 6)} -276Q${f(-m * 10)} -268 ${f(-m * 16)} -258Z" fill="${c}"/>`,
      };
    case 'mono':
      return {
        detras: `<circle cx="${f(-m * 10)}" cy="-293" r="10" fill="${c}"/>`,
        delante: `<path d="M${f(-m * 16)} -264Q${f(-m * 19)} -292 ${f(m * 2)} -290Q${f(m * 19)} -288 ${f(m * 15)} -270Q${f(m * 6)} -282 ${f(-m * 6)} -274Q${f(-m * 10)} -266 ${f(-m * 16)} -256Z" fill="${c}"/>`,
      };
    case 'corto': // tupé con volumen hacia delante
      return {
        detras: '',
        delante: `<path d="M${f(-m * 15)} -262Q${f(-m * 20)} -290 ${f(-m * 4)} -294Q${f(m * 4)} -302 ${f(m * 16)} -296Q${f(m * 24)} -292 ${f(m * 18)} -282Q${f(m * 22)} -276 ${f(m * 14)} -276Q${f(m * 2)} -280 ${f(-m * 6)} -276Q${f(-m * 10)} -268 ${f(-m * 15)} -256Z" fill="${c}"/>`,
      };
    case 'rizos': {
      const bolas = [[-18, -280, 11], [-10, -293, 12], [4, -297, 12], [16, -288, 11], [-22, -264, 10], [-20, -250, 8], [18, -274, 8]];
      return {
        detras: `<g fill="${c}">${bolas.map(([x, y, r]) => `<circle cx="${f(x * m)}" cy="${y}" r="${r}"/>`).join('')}</g>`,
        delante: `<path d="M${f(-m * 15)} -278Q${f(-m * 2)} -296 ${f(m * 15)} -282Q${f(m * 2)} -286 ${f(-m * 15)} -270Z" fill="${c}"/>`,
      };
    }
    case 'melena': // media melena recta hasta los hombros
      return {
        detras: `<path d="M${f(-m * 20)} -276Q${f(-m * 28)} -240 ${f(-m * 22)} -228Q${f(-m * 4)} -224 ${f(m * 10)} -232Q${f(m * 14)} -252 ${f(m * 6)} -276Z" fill="${c}"/>`,
        delante: `<path d="M${f(-m * 17)} -262Q${f(-m * 21)} -296 ${f(m * 2)} -294Q${f(m * 21)} -292 ${f(m * 17)} -266Q${f(m * 8)} -282 ${f(-m * 4)} -276Q${f(-m * 10)} -262 ${f(-m * 17)} -244Z" fill="${c}"/>`,
      };
    default:
      return { detras: '', delante: '' };
  }
}

// ── Tronco y ropa ──
function tronco(ropa, m, idClip) {
  const c = ropa.color;
  const sil = `M-20 -244Q0 -249 20 -244Q26 -241 26 -232L21 -162Q20 -150 12 -150L-12 -150Q-20 -150 -21 -162L-26 -232Q-26 -241 -20 -244Z`;
  const sombraLado = `<clipPath id="${idClip}"><path d="${sil}"/></clipPath>` +
    `<path clip-path="url(#${idClip})" d="M${f(-m * 8)} -250L${f(-m * 40)} -250L${f(-m * 40)} -140L${f(-m * 14)} -140Z" fill="#000" opacity=".1"/>`;
  let det = '';
  switch (ropa.tipo) {
    case 'quiton': // blusa drapeada con cinturón dorado
      det = `<path d="M${f(-m * 18)} -244Q${f(m * 4)} -214 ${f(m * 22)} -186" fill="none" stroke="#fff" stroke-opacity=".28" stroke-width="2.4" stroke-linecap="round"/>` +
        `<path d="M${f(-m * 6)} -245Q${f(m * 10)} -228 ${f(m * 24)} -214" fill="none" stroke="#fff" stroke-opacity=".2" stroke-width="2" stroke-linecap="round"/>` +
        `<rect x="-21" y="-172" width="42" height="5" rx="2" fill="${ropa.cinturon}"/>`;
      break;
    case 'camisa':
      det = `<path d="M-8 -246L0 -234L8 -246" fill="${sombra(c, 0.88)}"/>` +
        `<path d="M${f(m * 1)} -234V-152" stroke="#fff" stroke-opacity=".3" stroke-width="1.6"/>`;
      break;
    case 'corbata':
      det = `<path d="M-9 -246L0 -236L9 -246Z" fill="#fff"/>` +
        `<path d="M-3 -237L3 -237L5 -196L0 -188L-5 -196Z" fill="${ropa.corbata}"/>`;
      break;
    case 'americana':
      det = `<path d="M-8 -246L0 -214L8 -246Z" fill="${ropa.interior}"/>` +
        `<path d="M-9 -246L-2 -214L-14 -226L-14 -244Z" fill="${sombra(c, 0.86)}"/>` +
        `<path d="M9 -246L2 -214L14 -226L14 -244Z" fill="${sombra(c, 0.86)}"/>` +
        `<path d="M0 -214V-152" stroke="${sombra(c, 0.75)}" stroke-width="1.6"/>`;
      break;
    case 'jersey':
      det = `<path d="M-9 -247Q0 -240 9 -247" fill="none" stroke="${sombra(c, 0.8)}" stroke-width="2.4"/>` +
        `<path d="M-20 -158H20" stroke="${sombra(c, 0.85)}" stroke-width="3"/>`;
      break;
  }
  return `<path d="${sil}" fill="${c}"/>` + det + sombraLado;
}

// ── Cabeza: sin rasgos; oreja, sombra del lado contrario y, si toca, barba y gafas ──
function cabeza(p, m, idClip) {
  const piel = p.piel, pielS = sombra(piel, 0.88);
  const forma = `M${f(-m * 14)} -282Q${f(-m * 16)} -258 ${f(-m * 10)} -252Q${f(-m * 2)} -246 ${f(m * 8)} -250Q${f(m * 15)} -254 ${f(m * 15)} -264L${f(m * 18)} -268Q${f(m * 18)} -271 ${f(m * 15)} -273Q${f(m * 15)} -292 ${f(-m * 2)} -292Q${f(-m * 12)} -292 ${f(-m * 14)} -282Z`;
  const barba = p.barba
    ? `<path d="M${f(-m * 13)} -268Q${f(-m * 13)} -250 ${f(-m * 4)} -246Q${f(m * 6)} -242 ${f(m * 14)} -252Q${f(m * 16)} -258 ${f(m * 14)} -262Q${f(m * 6)} -256 ${f(-m * 2)} -262Q${f(-m * 8)} -266 ${f(-m * 13)} -268Z" fill="${p.peloColor}"/>`
    : '';
  const gafas = p.gafas
    ? `<path d="M${f(m * 2)} -269h${f(m * 9)}v6h${f(-m * 9)}zM${f(m * 11)} -267h${f(m * 6)}M${f(m * 2)} -267h${f(-m * 12)}" fill="none" stroke="${TINTA}" stroke-width="1.8" stroke-linejoin="round"/>`
    : '';
  return `<path d="${forma}" fill="${piel}"/>` +
    `<clipPath id="${idClip}"><path d="${forma}"/></clipPath>` +
    `<ellipse clip-path="url(#${idClip})" cx="${f(-m * 14)}" cy="-270" rx="8" ry="26" fill="${pielS}"/>` +
    `<ellipse cx="${f(-m * 4)}" cy="-268" rx="3.4" ry="5" fill="${pielS}"/>` +
    barba + gafas;
}

// ── Personaje completo ──
// p: { piel, peloColor, pelo, ropa, pantalon | falda, zapatos, gafas, barba }
// o: { x, y, escala, mira, brazoDel, brazoTra, piernas, accesorio, accesorioDetras, respira }
export function personaje(p, o = {}) {
  const { x = 0, y = 0, escala = 1, mira = 1, brazoDel = 'reposo', brazoTra = 'reposo', piernas = 'pie', respira = 0 } = o;
  const m = mira;
  const idT = nuevoId('t'), idC = nuevoId('c');
  const pel = pelo(p.pelo, p.peloColor, m);
  const manga = p.manga ?? p.ropa.color;

  // Piernas: con pantalón, la tela cubre la pierna; con falda, se ve la piel.
  const pp = PIERNAS[piernas];
  const colorPierna = p.falda ? p.piel : p.pantalon;
  const anchos = p.falda ? [17, 12, 9] : p.pantalonAncho ? [24, 21, 20] : [21, 16, 13];
  const pierna = (lado) => {
    const c = [lado === 'del' ? m * 8 : -m * 8, CADERA_Y];
    const d = pp[lado];
    const rod = [c[0] + m * d.rodilla[0], c[1] + d.rodilla[1]];
    const tob = [c[0] + m * d.tobillo[0], c[1] + d.tobillo[1]];
    const col = lado === 'tra' ? sombra(colorPierna, 0.8) : colorPierna;
    const raya = !p.falda && lado === 'del'
      ? `<path d="M${f(c[0] + m * 3)} ${c[1] + 14}L${f(rod[0] + m * 3)} ${f(rod[1])}L${f(tob[0] + m * 2)} ${f(tob[1] - 8)}" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="1.4"/>`
      : '';
    return { svg: miembro([c, rod, tob], anchos, col) + raya, tob };
  };
  const pt = pierna('tra'), pd = pierna('del');

  // Brazos
  const hombros = { del: [m * 19, HOMBRO_Y + 6], tra: [-m * 19, HOMBRO_Y + 6] };
  const brazo = (lado, pose) => {
    const h = hombros[lado], b = BRAZOS[pose];
    const haciaDelante = ['sostiene', 'teclea', 'sostieneAlto', 'estrecha'].includes(pose);
    const dirX = lado === 'del' ? m : (haciaDelante ? m : -m);
    const codo = [h[0] + dirX * b.codo[0], h[1] + b.codo[1]];
    const mn = [h[0] + dirX * b.mano[0], h[1] + b.mano[1]];
    const col = lado === 'tra' ? sombra(manga, 0.82) : manga;
    const piel = lado === 'tra' ? sombra(p.piel, 0.9) : p.piel;
    return {
      svg: miembro([h, codo, mn], [20, 15, 11], col) +
        `<ellipse cx="${f(mn[0])}" cy="${f(mn[1] + 3)}" rx="6.5" ry="8" fill="${piel}"/>`,
      mano: mn,
    };
  };
  const bt = brazo('tra', brazoTra), bd = brazo('del', brazoDel);
  const ctx = { mano: bd.mano, manoTra: bt.mano, mira: m };

  const falda = p.falda
    ? `<path d="M-19 -166L19 -166L${m > 0 ? 34 : 30} -92Q0 -84 ${m > 0 ? -30 : -34} -92Z" fill="${p.falda}"/>` +
      `<path d="M${f(m * 6)} -160L${f(m * 14)} -96" stroke="#fff" stroke-opacity=".3" stroke-width="1.4"/>`
    : '';

  const cuerpo =
    `<ellipse cx="0" cy="8" rx="46" ry="6" fill="${TINTA}" opacity=".08"/>` +
    pel.detras +
    pt.svg + zapato(pt.tob, m, sombra(p.zapatos, 0.85)) +
    pd.svg + zapato(pd.tob, m, p.zapatos) +
    bt.svg + (o.accesorioDetras ? o.accesorioDetras(ctx) : '') +
    `<path d="M-6 -256V-240H6V-256Z" fill="${sombra(p.piel, 0.9)}"/>` +
    tronco(p.ropa, m, idT) + falda +
    cabeza(p, m, idC) +
    pel.delante +
    (p.corona ? corona(m) : '') +
    bd.svg + (o.accesorio ? o.accesorio(ctx) : '');

  const anim = respira !== false ? ` class="esc-respira" style="--d:${respira}s"` : '';
  return `<g transform="translate(${f(x)} ${f(y)}) scale(${escala})"><g${anim}>${cuerpo}</g></g>`;
}

// Corona de laurel sobre la cabeza.
export function corona(m = 1) {
  const hojas = [];
  for (let i = 0; i < 5; i++) {
    const t = -2.5 + i * 0.32;
    const px = Math.cos(t) * 17, py = -272 + Math.sin(t) * 17;
    const rot = (t * 180) / Math.PI + 90;
    hojas.push(`<ellipse cx="${f(px)}" cy="${f(py)}" rx="2.6" ry="5.5" transform="rotate(${f(rot + 30)} ${f(px)} ${f(py)})"/>`);
    hojas.push(`<ellipse cx="${f(-px)}" cy="${f(py)}" rx="2.6" ry="5.5" transform="rotate(${f(-rot - 30)} ${f(-px)} ${f(py)})"/>`);
  }
  return `<g fill="#8A9A4B">${hojas.join('')}</g>`;
}

// ── El reparto ──
export const REPARTO = {
  // La estratega: moño, blusa coral drapeada con cinturón dorado y falda azul.
  aurora: { piel: '#F2B8A2', peloColor: '#3A2A4A', pelo: 'larga', ropa: { tipo: 'quiton', color: '#F07A45', cinturon: '#E7A93A' }, falda: '#2D3E8C', zapatos: '#4A2E4C' },
  // El analista: barba y camisa azul Egeo.
  teo: { piel: '#E3A88C', peloColor: '#2A2440', pelo: 'corto', barba: true, ropa: { tipo: 'camisa', color: '#3E6FA0' }, pantalon: '#1B2250', pantalonAncho: true, zapatos: '#4A2E4C' },
  // La empresaria: rizos y americana azafrán.
  dafne: { piel: '#A86A4E', peloColor: '#221C2C', pelo: 'rizos', ropa: { tipo: 'americana', color: '#E7A93A', interior: '#FBF4E8' }, pantalon: '#2D3E8C', zapatos: '#4A2E4C' },
  // El cliente: gafas, camisa blanca y corbata.
  leo: { piel: '#F3BFA6', peloColor: '#1F2347', pelo: 'corto', gafas: true, ropa: { tipo: 'corbata', color: '#FFFFFF', corbata: '#2D3E8C' }, manga: '#F4F2F8', pantalon: '#2D3E8C', pantalonAncho: true, zapatos: '#4A2E4C' },
  // La creadora: melena y jersey oliva.
  nika: { piel: '#EDB596', peloColor: '#B5652E', pelo: 'melena', ropa: { tipo: 'jersey', color: '#7F8F3E' }, pantalon: '#1B2250', zapatos: '#4A2E4C' },
};
