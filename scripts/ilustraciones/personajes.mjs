// Personajes de EOS Studio, en SVG y paramétricos.
//
// Es el mismo reparto que las escenas de GMV Solutions (la del moño, el de la
// barba y camisa azul, el de gafas y camisa clara), redibujado en clave de
// dibujo animado: cabeza grande, contorno de tinta, ojos con brillo, mejillas,
// extremidades «de manguera» con codo y rodilla, y sombreado suave.
//
// Coordenadas locales: los pies en y=0, el eje del cuerpo en x=0. El personaje
// mide unos 280 px a escala 1. El tronco se dibuja en sus propias coordenadas
// (cadera en y=-114) y se baja SUBIR px para dejar las piernas cortas, de dibujo
// animado; por eso las manos que reciben los accesorios van en esas coordenadas. `mira` = 1 mira a la derecha, -1 a la izquierda.

export const TINTA = '#2A2440';
const TRAZO = 3.4;
const SUBIR = 20; // cuánto se baja el tronco sobre las piernas

// Los id (clipPath, degradados) llevan el nombre de la escena delante: dos
// escenas en la misma página no pueden compartir id.
let contador = 0, prefijo = 'e';
export const nuevoId = (p) => `${prefijo}-${p}${++contador}`;
export const reiniciarIds = (pre = 'e') => { contador = 0; prefijo = pre; };

const f = (n) => Math.round(n * 10) / 10;

// Curva que pasa (aprox.) por el punto medio: control = 2·medio − (a+b)/2.
function curva(a, m, b) {
  const c = [2 * m[0] - (a[0] + b[0]) / 2, 2 * m[1] - (a[1] + b[1]) / 2];
  return `M${f(a[0])} ${f(a[1])}Q${f(c[0])} ${f(c[1])} ${f(b[0])} ${f(b[1])}`;
}

// Extremidad con contorno: un trazo grueso de tinta y encima el de color.
function extremidad(a, m, b, color, ancho) {
  const d = curva(a, m, b);
  return `<path d="${d}" fill="none" stroke="${TINTA}" stroke-width="${ancho + TRAZO * 2}" stroke-linecap="round" stroke-linejoin="round"/>` +
    `<path d="${d}" fill="none" stroke="${color}" stroke-width="${ancho}" stroke-linecap="round" stroke-linejoin="round"/>`;
}

const mano = (p, piel) => `<circle cx="${f(p[0])}" cy="${f(p[1])}" r="9.5" fill="${piel}" stroke="${TINTA}" stroke-width="${TRAZO}"/>`;

function zapato([x, y], dir, color) {
  const d = (n) => f(x + n * dir);
  return `<path d="M${d(-12)} ${f(y + 13)}L${d(-12)} ${f(y + 1)}Q${d(-11)} ${f(y - 9)} ${d(2)} ${f(y - 9)}Q${d(20)} ${f(y - 7)} ${d(25)} ${f(y + 5)}Q${d(26)} ${f(y + 13)} ${d(18)} ${f(y + 13)}Z" fill="${color}" stroke="${TINTA}" stroke-width="${TRAZO}" stroke-linejoin="round"/>` +
    `<path d="M${d(-8)} ${f(y - 2)}Q${d(2)} ${f(y - 6)} ${d(10)} ${f(y - 4)}" fill="none" stroke="#fff" stroke-opacity=".28" stroke-width="2.4" stroke-linecap="round"/>`;
}

// ── Poses de brazos: codo y mano relativos al hombro, con x hacia «delante» ──
// (delante = hacia donde mira el personaje). Brazo «frontal» y «trasero».
const BRAZOS = {
  reposo:   { codo: [8, 52], mano: [10, 100] },
  cadera:   { codo: [34, 40], mano: [6, 78] },
  saluda:   { codo: [34, 10], mano: [44, -44] },
  senala:   { codo: [44, -6], mano: [92, -30] },
  senalaAbajo: { codo: [46, 30], mano: [92, 40] },
  sostiene: { codo: [24, 56], mano: [56, 36] },
  sostieneAlto: { codo: [26, 44], mano: [58, 6] },
  arriba:   { codo: [20, -40], mano: [28, -92] },
  teclea:   { codo: [20, 58], mano: [60, 70] },
};

// ── Poses de piernas: rodilla y tobillo relativos a la cadera ──
const PIERNAS = {
  pie:   { del: { rodilla: [4, 44], tobillo: [4, 86] }, tra: { rodilla: [-2, 44], tobillo: [-4, 86] } },
  paso:  { del: { rodilla: [16, 42], tobillo: [24, 84] }, tra: { rodilla: [-8, 44], tobillo: [-22, 82] } },
  firme: { del: { rodilla: [8, 44], tobillo: [12, 86] }, tra: { rodilla: [-8, 44], tobillo: [-12, 86] } },
};

// ── Peinados ──
function pelo(estilo, color, mira, id) {
  const m = mira;
  const brillo = (d) => `<path d="${d}" fill="none" stroke="#fff" stroke-opacity=".32" stroke-width="3" stroke-linecap="round"/>`;
  switch (estilo) {
    case 'mono': // moño alto, raya ladeada
      return {
        detras: `<circle cx="${f(-m * 14)}" cy="-306" r="19" fill="${color}" stroke="${TINTA}" stroke-width="${TRAZO}"/>` +
          `<path d="M${f(-m * 4)} -292 q${f(-m * 10)} -6 ${f(-m * 20)} 2" fill="none" stroke="${TINTA}" stroke-width="2.4" stroke-opacity=".5"/>`,
        delante: `<path d="M-43 -246Q-48 -300 0 -300Q46 -302 43 -250Q40 -270 ${f(m * 22)} -280Q${f(-m * 4)} -262 -43 -246Z" fill="${color}" stroke="${TINTA}" stroke-width="${TRAZO}" stroke-linejoin="round"/>` +
          brillo(`M${f(-m * 24)} -288Q${f(-m * 8)} -296 ${f(m * 10)} -294`),
      };
    case 'corto':
      return {
        detras: '',
        delante: `<path d="M-42 -248Q-50 -306 2 -302Q50 -300 43 -246Q40 -266 30 -272Q14 -262 -4 -276Q-20 -262 -42 -248Z" fill="${color}" stroke="${TINTA}" stroke-width="${TRAZO}" stroke-linejoin="round"/>` +
          brillo(`M${f(-m * 22)} -290Q${f(-m * 4)} -298 ${f(m * 16)} -292`),
      };
    case 'rizos': // nube de rizos
      {
        const bolas = [[-40, -262, 18], [-32, -292, 20], [-8, -308, 21], [20, -304, 20], [40, -282, 18], [44, -256, 14], [-46, -240, 12]];
        const c = bolas.map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}"/>`).join('');
        return {
          detras: `<g fill="${color}" stroke="${TINTA}" stroke-width="${TRAZO}">${c}</g><g fill="${color}">${bolas.map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r - 3.4}"/>`).join('')}</g>`,
          delante: `<path d="M-40 -256Q-38 -286 -6 -288Q30 -290 40 -258Q24 -272 -2 -270Q-24 -272 -40 -256Z" fill="${color}"/>` +
            brillo(`M-26 -298Q-12 -306 4 -304`),
        };
      }
    case 'melena': // media melena con flequillo
      return {
        detras: `<path d="M-46 -260Q-56 -196 -38 -184L38 -184Q56 -196 46 -260Z" fill="${color}" stroke="${TINTA}" stroke-width="${TRAZO}" stroke-linejoin="round"/>`,
        delante: `<path d="M-44 -244Q-50 -302 2 -302Q52 -302 44 -244Q38 -262 ${f(m * 14)} -270Q${f(-m * 10)} -258 -44 -244Z" fill="${color}" stroke="${TINTA}" stroke-width="${TRAZO}" stroke-linejoin="round"/>` +
          brillo(`M${f(-m * 24)} -288Q${f(-m * 6)} -296 ${f(m * 12)} -292`),
      };
    default:
      return { detras: '', delante: '' };
  }
}

// ── Torsos (ropa) ──
function torso(ropa, mira, idClip) {
  const silueta = 'M-30 -210Q0 -216 30 -210Q44 -206 44 -190L37 -122Q36 -112 26 -112L-26 -112Q-36 -112 -37 -122L-44 -190Q-44 -206 -30 -210Z';
  const sombra = `<clipPath id="${idClip}"><path d="${silueta}"/></clipPath>` +
    `<path clip-path="url(#${idClip})" d="M${f(-mira * 20)} -220L${f(-mira * 60)} -220L${f(-mira * 60)} -100L${f(-mira * 26)} -100Z" fill="${TINTA}" opacity=".13"/>`;
  const base = `<path d="${silueta}" fill="${ropa.color}" stroke="${TINTA}" stroke-width="${TRAZO}" stroke-linejoin="round"/>`;
  let det = '';
  switch (ropa.tipo) {
    case 'quiton': // blusa drapeada con cinturón dorado: guiño al quitón griego
      det = `<path d="M${f(-mira * 30)} -208Q${f(mira * 2)} -176 ${f(mira * 34)} -140" fill="none" stroke="${TINTA}" stroke-width="2.4" stroke-opacity=".35" stroke-linecap="round"/>` +
        `<path d="M${f(-mira * 16)} -208Q${f(mira * 10)} -184 ${f(mira * 38)} -166" fill="none" stroke="${TINTA}" stroke-width="2.2" stroke-opacity=".25" stroke-linecap="round"/>` +
        `<rect x="-38" y="-136" width="76" height="11" rx="5" fill="${ropa.cinturon}" stroke="${TINTA}" stroke-width="${TRAZO}"/>` +
        `<circle cx="${f(mira * 2)}" cy="-130.5" r="4" fill="#FFF4D6" stroke="${TINTA}" stroke-width="2"/>`;
      break;
    case 'camisa':
      det = `<path d="M-14 -210L0 -190L14 -210" fill="${ropa.cuello ?? '#fff'}" stroke="${TINTA}" stroke-width="2.6" stroke-linejoin="round"/>` +
        `<path d="M0 -190V-116" stroke="${TINTA}" stroke-width="2" stroke-opacity=".35"/>` +
        [-176, -158, -140].map((y) => `<circle cx="${f(mira * 3)}" cy="${y}" r="2.2" fill="${TINTA}" opacity=".45"/>`).join('') +
        `<path d="M${f(mira * 14)} -180h${f(mira * 14)}v12h${f(-mira * 14)}z" fill="none" stroke="${TINTA}" stroke-width="2" stroke-opacity=".35"/>`;
      break;
    case 'corbata':
      det = `<path d="M-15 -210L0 -194L15 -210" fill="#fff" stroke="${TINTA}" stroke-width="2.6" stroke-linejoin="round"/>` +
        `<path d="M-5 -196L5 -196L8 -150L0 -140L-8 -150Z" fill="${ropa.corbata}" stroke="${TINTA}" stroke-width="2.6" stroke-linejoin="round"/>`;
      break;
    case 'americana':
      det = `<path d="M-12 -210L0 -170L12 -210Z" fill="${ropa.interior ?? '#fff'}" stroke="${TINTA}" stroke-width="2.6" stroke-linejoin="round"/>` +
        `<path d="M-14 -210L-4 -170L-20 -186L-22 -206" fill="${ropa.solapa ?? ropa.color}" stroke="${TINTA}" stroke-width="2.6" stroke-linejoin="round"/>` +
        `<path d="M14 -210L4 -170L20 -186L22 -206" fill="${ropa.solapa ?? ropa.color}" stroke="${TINTA}" stroke-width="2.6" stroke-linejoin="round"/>` +
        `<path d="M0 -170V-114" stroke="${TINTA}" stroke-width="2.4"/>` +
        `<circle cx="${f(mira * 5)}" cy="-150" r="3" fill="${TINTA}"/>`;
      break;
    case 'jersey':
      det = `<path d="M-16 -211Q0 -198 16 -211" fill="none" stroke="${TINTA}" stroke-width="2.6"/>` +
        `<path d="M-37 -126H37" stroke="${TINTA}" stroke-width="2.2" stroke-opacity=".35"/>`;
      break;
  }
  return base + det + sombra;
}

// ── Cara ──
function cara(p, mira, idClip) {
  const fx = mira * 6;
  const ojo = (x) => `<ellipse cx="${f(x)}" cy="-254" rx="7.2" ry="8.8" fill="#fff" stroke="${TINTA}" stroke-width="2.6"/>` +
    `<circle cx="${f(x + mira * 1.8)}" cy="-252.5" r="4.4" fill="${TINTA}"/>` +
    `<circle cx="${f(x + mira * 3.2)}" cy="-255.5" r="1.6" fill="#fff"/>`;
  const ceja = (x) => `<path d="M${f(x - 7)} -268Q${f(x)} ${p.ceja === 'alta' ? -275 : -272} ${f(x + 7)} -268" fill="none" stroke="${p.peloColor}" stroke-width="3.6" stroke-linecap="round"/>`;
  const boca = p.boca === 'abierta'
    ? `<path d="M${f(fx - 10)} -230Q${f(fx)} -230 ${f(fx + 10)} -230Q${f(fx + 8)} -216 ${f(fx)} -216Q${f(fx - 8)} -216 ${f(fx - 10)} -230Z" fill="#8E2F2B" stroke="${TINTA}" stroke-width="2.6" stroke-linejoin="round"/>` +
      `<path d="M${f(fx - 5)} -220Q${f(fx)} -224 ${f(fx + 5)} -220" fill="none" stroke="#E98A7E" stroke-width="3" stroke-linecap="round"/>`
    : `<path d="M${f(fx - 9)} -229Q${f(fx)} -220 ${f(fx + 9)} -229" fill="none" stroke="${TINTA}" stroke-width="3" stroke-linecap="round"/>`;
  const gafas = p.gafas
    ? `<g fill="#fff" fill-opacity=".25" stroke="${TINTA}" stroke-width="3"><rect x="${f(fx - 24)}" y="-264" width="20" height="18" rx="6"/><rect x="${f(fx + 4)}" y="-264" width="20" height="18" rx="6"/></g>` +
      `<path d="M${f(fx - 4)} -257h8" stroke="${TINTA}" stroke-width="3"/>`
    : '';
  const barba = p.barba
    ? `<path d="M-41 -254Q-42 -204 0 -201Q42 -204 41 -254Q34 -234 18 -233Q0 -240 -18 -233Q-34 -234 -41 -254Z" fill="${p.peloColor}" stroke="${TINTA}" stroke-width="${TRAZO}" stroke-linejoin="round"/>`
    : '';
  // Sombra de la cara del lado contrario a la mirada, recortada a la cabeza.
  const sombra = `<clipPath id="${idClip}"><ellipse cx="0" cy="-254" rx="41" ry="44"/></clipPath>` +
    `<ellipse clip-path="url(#${idClip})" cx="${f(-mira * 46)}" cy="-250" rx="26" ry="52" fill="${TINTA}" opacity=".1"/>`;
  return `<ellipse cx="0" cy="-254" rx="41" ry="44" fill="${p.piel}" stroke="${TINTA}" stroke-width="${TRAZO}"/>` +
    sombra + barba +
    `<circle cx="${f(fx - 23)}" cy="-236" r="6.5" fill="#F07C6A" opacity=".45"/><circle cx="${f(fx + 23)}" cy="-236" r="6.5" fill="#F07C6A" opacity=".45"/>` +
    ojo(fx - 13) + ojo(fx + 13) + ceja(fx - 13) + ceja(fx + 13) +
    `<path d="M${f(fx + mira * 1)} -248Q${f(fx + mira * 7)} -240 ${f(fx)} -238" fill="none" stroke="${TINTA}" stroke-width="2.6" stroke-linecap="round" stroke-opacity=".7"/>` +
    boca + gafas;
}

// ── Personaje completo ──
// p: { piel, peloColor, pelo, ropa, pantalon, zapatos, gafas, barba, boca, ceja }
// opts: { x, y, escala, mira, brazoDel, brazoTra, piernas, accesorio(mano)->svg, respira }
export function personaje(p, o = {}) {
  const { x = 0, y = 0, escala = 1, mira = 1, brazoDel = 'reposo', brazoTra = 'reposo', piernas = 'pie', respira = 0 } = o;
  const m = mira;
  const idT = nuevoId('t'), idC = nuevoId('c');
  const pel = pelo(p.pelo, p.peloColor, m, nuevoId('p'));

  const caderas = { del: [m * 13, -114 + SUBIR], tra: [-m * 13, -114 + SUBIR] };
  const pp = PIERNAS[piernas];
  const pierna = (lado) => {
    const c = caderas[lado], d = pp[lado];
    const rod = [c[0] + m * d.rodilla[0], c[1] + d.rodilla[1]];
    const tob = [c[0] + m * d.tobillo[0], c[1] + d.tobillo[1]];
    return { svg: extremidad(c, rod, tob, p.pantalon, 25), tob };
  };
  const pt = pierna('tra'), pd = pierna('del');

  const hombros = { del: [m * 34, -196], tra: [-m * 34, -196] };
  const brazo = (lado, pose) => {
    const h = hombros[lado], b = BRAZOS[pose];
    // El brazo trasero apunta hacia atrás salvo en poses que van hacia delante.
    const dirX = lado === 'del' ? m : (['sostiene', 'teclea', 'sostieneAlto'].includes(pose) ? m : -m);
    const codo = [h[0] + dirX * b.codo[0], h[1] + b.codo[1]];
    const mn = [h[0] + dirX * b.mano[0], h[1] + b.mano[1]];
    return { svg: extremidad(h, codo, mn, p.manga ?? p.ropa.color, 19) + mano(mn, p.piel), mano: mn };
  };
  const bt = brazo('tra', brazoTra), bd = brazo('del', brazoDel);

  const acc = o.accesorio ? o.accesorio({ mano: bd.mano, manoTra: bt.mano, mira: m }) : '';
  const accDetras = o.accesorioDetras ? o.accesorioDetras({ mano: bd.mano, manoTra: bt.mano, mira: m }) : '';

  const cuerpo =
    `<ellipse cx="0" cy="4" rx="${56}" ry="9" fill="${TINTA}" opacity=".12"/>` +
    pt.svg + zapato(pt.tob, m, p.zapatos) + pd.svg + zapato(pd.tob, m, p.zapatos) +
    `<g transform="translate(0 ${SUBIR})">` + bt.svg + accDetras +
    `<path d="M-10 -222V-204H10V-222" fill="${p.piel}" stroke="${TINTA}" stroke-width="${TRAZO}" stroke-linejoin="round"/>` +
    torso(p.ropa, m, idT) +
    pel.detras +
    `<circle cx="${f(-m * 39)}" cy="-250" r="8.5" fill="${p.piel}" stroke="${TINTA}" stroke-width="${TRAZO}"/>` +
    cara(p, m, idC) +
    pel.delante +
    (p.corona ? corona() : '') +
    bd.svg + acc + '</g>';

  const anim = respira !== false ? ` class="esc-respira" style="--d:${respira}s"` : '';
  return `<g transform="translate(${f(x)} ${f(y)}) scale(${escala})"><g${anim}>${cuerpo}</g></g>`;
}

// Corona de laurel (para quien gana)
export function corona() {
  const hojas = [];
  for (let i = 0; i < 6; i++) {
    const t = -2.6 + i * 0.36;
    const x = Math.cos(t) * 44, y = -262 + Math.sin(t) * 44;
    const xr = -x;
    const rot = (t * 180) / Math.PI + 90;
    hojas.push(`<ellipse cx="${f(x)}" cy="${f(y)}" rx="5" ry="10" transform="rotate(${f(rot + 30)} ${f(x)} ${f(y)})"/>`);
    hojas.push(`<ellipse cx="${f(xr)}" cy="${f(y)}" rx="5" ry="10" transform="rotate(${f(-rot - 30)} ${f(xr)} ${f(y)})"/>`);
  }
  return `<g fill="#7F8F3E" stroke="${TINTA}" stroke-width="2.4">${hojas.join('')}</g>`;
}

// ── El reparto ──
export const REPARTO = {
  // La estratega: moño, blusa coral drapeada con cinturón dorado.
  aurora: { piel: '#F3C9A6', peloColor: '#5A3324', pelo: 'mono', ropa: { tipo: 'quiton', color: '#E2683F', cinturon: '#E7A93A' }, pantalon: '#2B2F52', zapatos: '#3B2F45', boca: 'abierta' },
  // El analista: barba y camisa azul Egeo.
  teo: { piel: '#DDA27C', peloColor: '#3A2620', pelo: 'corto', barba: true, boca: 'abierta', ropa: { tipo: 'camisa', color: '#3E7598', cuello: '#3E7598' }, pantalon: '#3A3A4C', zapatos: '#2A2440' },
  // La empresaria: rizos y americana azafrán.
  dafne: { piel: '#9C6548', peloColor: '#24202C', pelo: 'rizos', ropa: { tipo: 'americana', color: '#E7A93A', interior: '#FBF4E8', solapa: '#D69A2E' }, pantalon: '#5E6A34', zapatos: '#2A2440', boca: 'abierta' },
  // El cliente: gafas, camisa clara y corbata.
  leo: { piel: '#F1C3A0', peloColor: '#26232F', pelo: 'corto', gafas: true, ropa: { tipo: 'corbata', color: '#F4ECDD', corbata: '#2E5E7E' }, pantalon: '#4A4D66', zapatos: '#2A2440' },
  // La creadora: melena y jersey oliva.
  nika: { piel: '#E8B48E', peloColor: '#B5652E', pelo: 'melena', ropa: { tipo: 'jersey', color: '#7F8F3E' }, pantalon: '#2B2F52', zapatos: '#3B2F45', ceja: 'alta' },
};
