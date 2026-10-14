// Atrezo de las escenas, en el mismo estilo plano que los personajes: sin
// contorno, colores planos y un segundo tono para el volumen.
// Lo griego va en los objetos (columnas jónicas, laurel, ánfora, el sol de la
// aurora), no en la ropa: el reparto son profesionales de hoy.
import { nuevoId, sombra } from './personajes.mjs';

const f = (n) => Math.round(n * 10) / 10;

// Paleta del atrezo
const MARMOL = '#FFFFFF', MARMOL_S = '#EAE4F0', MARMOL_L = '#DCD5E6';
const CORAL = '#F07A45', AZAFRAN = '#E7A93A', AZUL = '#2D3E8C', NOCHE = '#1B2250', BERENJENA = '#4A2E4C';
const SUELO = '#ECE4D8', DECO = '#D8CDBE', LINEA = '#CDBFAE', OLIVO = '#8A9A4B';

export const suelo = (cx = 360, y = 486, ancho = 640) => {
  const a = ancho / 2;
  return `<path d="M${cx - a} ${y}Q${cx - a + 20} ${y - 22} ${cx - a / 2} ${y - 18}Q${cx - a / 8} ${y - 30} ${cx + a / 3} ${y - 20}Q${cx + a - 10} ${y - 26} ${cx + a} ${y - 2}Q${cx + a - 30} ${y + 22} ${cx + a / 2} ${y + 18}Q${cx} ${y + 30} ${cx - a / 2} ${y + 20}Q${cx - a + 4} ${y + 22} ${cx - a} ${y}Z" fill="${SUELO}"/>`;
};

// Mancha suave de fondo detrás de la escena (no toca los bordes del dibujo,
// para que no se vea el corte del encuadre sobre la página).
export const mancha = (espejo = false) =>
  `<path transform="${espejo ? 'translate(720 0) scale(-1 1)' : ''}" d="M110 190Q130 70 300 70Q470 40 590 120Q700 200 650 330Q610 430 360 440Q130 452 96 340Q74 262 110 190Z" fill="${SUELO}" opacity=".55"/>`;

// Sol de la aurora asomando por el horizonte, con halo y rayos que giran.
export function aurora(cx, cy, r = 110) {
  const id = nuevoId('halo'), clip = nuevoId('horiz');
  const rayos = Array.from({ length: 12 }, (_, i) => {
    const a = (i * Math.PI * 2) / 12;
    const r1 = r + 20, r2 = r + (i % 2 ? 42 : 64);
    return `<path d="M${f(cx + Math.cos(a) * r1)} ${f(cy + Math.sin(a) * r1)}L${f(cx + Math.cos(a) * r2)} ${f(cy + Math.sin(a) * r2)}"/>`;
  }).join('');
  return `<defs><clipPath id="${clip}"><rect x="${cx - r * 3}" y="${cy - r * 3}" width="${r * 6}" height="${r * 3}"/></clipPath>` +
    `<radialGradient id="${id}"><stop offset="0" stop-color="${AZAFRAN}" stop-opacity=".4"/><stop offset=".6" stop-color="#F4C9A8" stop-opacity=".18"/><stop offset="1" stop-color="#F6F0E6" stop-opacity="0"/></radialGradient></defs>` +
    `<g clip-path="url(#${clip})">` +
    `<circle cx="${cx}" cy="${cy}" r="${r * 2.4}" fill="url(#${id})"/>` +
    `<g class="esc-sol" style="transform-origin:${cx}px ${cy}px" stroke="${AZAFRAN}" stroke-width="5" stroke-linecap="round" opacity=".55">${rayos}</g>` +
    `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#F6C98A"/>` +
    `<circle cx="${cx}" cy="${cy}" r="${r * 0.74}" fill="#F3A672"/>` +
    `<circle cx="${cx}" cy="${cy}" r="${r * 0.48}" fill="${CORAL}"/></g>`;
}

// Columna jónica de mármol. (x = eje, y = base)
export function columna(x, y, alto, ancho = 46, clase = '') {
  const a = ancho / 2, fuste = alto - 34;
  const estrias = [-a / 2, 0, a / 2].map((dx) => `<path d="M${f(x + dx)} ${f(y - 20)}V${f(y - 14 - fuste)}" stroke="${MARMOL_L}" stroke-width="2.4" stroke-linecap="round"/>`).join('');
  const voluta = (vx) => `<circle cx="${f(vx)}" cy="${f(y - alto + 9)}" r="7.5" fill="${MARMOL_S}"/><circle cx="${f(vx)}" cy="${f(y - alto + 9)}" r="3" fill="${MARMOL_L}"/>`;
  return `<g class="${clase}">` +
    `<rect x="${f(x - a - 8)}" y="${f(y - 10)}" width="${ancho + 16}" height="10" rx="2" fill="${MARMOL_S}"/>` +
    `<rect x="${f(x - a - 3)}" y="${f(y - 18)}" width="${ancho + 6}" height="8" rx="2" fill="${MARMOL}"/>` +
    `<rect x="${f(x - a)}" y="${f(y - 18 - fuste)}" width="${ancho}" height="${fuste}" fill="${MARMOL}"/>` +
    `<rect x="${f(x)}" y="${f(y - 18 - fuste)}" width="${a}" height="${fuste}" fill="${MARMOL_S}" opacity=".7"/>` +
    estrias +
    `<rect x="${f(x - a - 6)}" y="${f(y - alto + 2)}" width="${ancho + 12}" height="14" rx="3" fill="${MARMOL}"/>` +
    voluta(x - a - 4) + voluta(x + a + 4) +
    `<rect x="${f(x - a - 10)}" y="${f(y - alto - 6)}" width="${ancho + 20}" height="9" rx="2" fill="${MARMOL_S}"/>` +
    `</g>`;
}

// Bocadillo de diálogo: forma redondeada con cola. `suave` = el gris de respuesta.
export function bocadillo({ x, y, texto, cola = 'izq', i = 0, icono = null, suave = false, tam = 21, color }) {
  const lineas = Array.isArray(texto) ? texto : [texto];
  const larga = Math.max(...lineas.map((l) => l.length));
  const sangria = icono ? 50 : 24;
  const ancho = Math.round(larga * tam * 0.55 + sangria + 24);
  const alto = Math.round(lineas.length * tam * 1.2 + 28);
  const fondo = color ?? (suave ? '#E6DED2' : CORAL);
  const tinta = suave ? '#7A7062' : '#FFFFFF';
  const cx = cola === 'izq' ? x + 30 : x + ancho - 30, dir = cola === 'izq' ? 1 : -1;
  const ic = icono === 'estrella'
    ? `<path transform="translate(${x + 30} ${y + alto / 2})" d="M0 -10L3 -3.2 10.4 -3.2 4.4 1.4 6.6 8.8 0 4.4 -6.6 8.8 -4.4 1.4 -10.4 -3.2 -3 -3.2Z" fill="${tinta}"/>`
    : icono === 'check'
      ? `<path d="M${x + 20} ${y + alto / 2}l6 6 12-13" fill="none" stroke="${tinta}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`
      : icono === 'sol'
        ? `<g transform="translate(${x + 30} ${y + alto / 2 + 5})" stroke="${tinta}" stroke-width="2.6" stroke-linecap="round" fill="none"><path d="M0 -17v4M-10 -12l2.6 2.6M10 -12l-2.6 2.6M-15 -2h3M12 -2h3"/><path d="M-7 0a7 7 0 0 1 14 0"/><path d="M-11 4h22"/></g>`
        : '';
  const texto_ = lineas.map((l, k) => `<text x="${x + sangria}" y="${f(y + 14 + tam * 0.95 + k * tam * 1.2)}" font-family="DM Sans, sans-serif" font-weight="700" font-size="${tam}" fill="${tinta}">${l}</text>`).join('');
  return `<g class="esc-burbuja" style="--i:${i}">` +
    `<path d="M${x + 22} ${y}H${x + ancho - 22}Q${x + ancho} ${y} ${x + ancho} ${y + 22}V${y + alto - 22}Q${x + ancho} ${y + alto} ${x + ancho - 22} ${y + alto}H${cx + dir * 18}Q${cx + dir * 2} ${y + alto + 6} ${cx - dir * 8} ${y + alto + 24}Q${cx - dir * 4} ${y + alto + 8} ${cx - dir * 6} ${y + alto}H${x + 22}Q${x} ${y + alto} ${x} ${y + alto - 22}V${y + 22}Q${x} ${y} ${x + 22} ${y}Z" fill="${fondo}"/>` +
    ic + texto_ + `</g>`;
}

// Destello de cuatro puntas (parpadea). La posición va en un <g> aparte: si el
// mismo elemento lleva transform y transform-origin, Chrome desplaza la figura.
export const destello = (x, y, s = 1, i = 0, color = AZAFRAN) =>
  `<g transform="translate(${x} ${y}) scale(${s})"><path class="esc-brilla" style="--i:${i}" d="M0 -14Q1.6 -1.6 14 0Q1.6 1.6 0 14Q-1.6 1.6 -14 0Q-1.6 -1.6 0 -14Z" fill="${color}"/></g>`;

// Adornos sueltos del fondo: cruces, zigzag y círculos con símbolo.
export const cruz = (x, y, s = 1) => `<path d="M${x} ${y - 9 * s}v${18 * s}M${x - 9 * s} ${y}h${18 * s}" stroke="${DECO}" stroke-width="2" stroke-linecap="round"/>`;
export const zigzag = (x, y) => `<path d="M${x} ${y}l9 9 9-9 9 9 9-9 9 9 9-9" fill="none" stroke="${DECO}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>`;
export const moneda = (x, y, simbolo = '€', i = 0) =>
  `<g class="esc-flota" style="animation-delay:${i * 0.6}s"><circle cx="${x}" cy="${y}" r="16" fill="#FFFFFF"/><text x="${x}" y="${y + 6}" text-anchor="middle" font-family="DM Sans, sans-serif" font-weight="700" font-size="17" fill="${DECO}">${simbolo}</text></g>`;

// Planta de línea en maceta blanca (como en la referencia), o rama de olivo.
export function planta(x, y, s = 1) {
  const hoja = (px, py, rot) => `<path transform="translate(${px} ${py}) rotate(${rot})" d="M0 0Q14 -18 0 -44Q-14 -18 0 0Z" fill="#E7E1EC"/>` +
    `<path transform="translate(${px} ${py}) rotate(${rot})" d="M0 -2V-38" stroke="#FFFFFF" stroke-width="1.6"/>`;
  return `<g transform="translate(${x} ${y}) scale(${s})">` +
    `<path d="M0 -40C-2 -80 -6 -110 -4 -150M-2 -80Q-26 -96 -34 -120M-3 -104Q18 -118 26 -140" fill="none" stroke="#E7E1EC" stroke-width="3" stroke-linecap="round"/>` +
    hoja(-34, -120, -30) + hoja(26, -140, 25) + hoja(-4, -150, 0) + hoja(-18, -90, -60) + hoja(10, -100, 55) + hoja(-6, -64, -100) + hoja(4, -70, 100) +
    `<path d="M-24 -42H24L18 0H-18Z" fill="#FFFFFF"/><rect x="-27" y="-48" width="54" height="9" rx="2" fill="${MARMOL_S}"/>` +
    `</g>`;
}

export function laurel(x, y, s = 1, girar = 0) {
  const hojas = [];
  for (let k = 0; k < 6; k++) {
    const t = k / 5, px = -40 + t * 80, py = -Math.sin(t * Math.PI) * 16;
    hojas.push(`<ellipse cx="${f(px)}" cy="${f(py - 9)}" rx="5" ry="11" transform="rotate(${f(30 + t * 30)} ${f(px)} ${f(py - 9)})"/>`);
    hojas.push(`<ellipse cx="${f(px + 2)}" cy="${f(py + 9)}" rx="5" ry="11" transform="rotate(${f(150 - t * 30)} ${f(px + 2)} ${f(py + 9)})"/>`);
  }
  return `<g transform="translate(${x} ${y}) rotate(${girar}) scale(${s})"><path d="M-46 4Q0 -26 46 0" fill="none" stroke="${sombra(OLIVO)}" stroke-width="2.4"/><g fill="${OLIVO}">${hojas.join('')}</g></g>`;
}

export function coronaLaurel(x, y, s = 1, clase = '') {
  const R = 34, hojas = [];
  for (let k = 0; k < 7; k++) {
    const a = ((112 + k * 21) * Math.PI) / 180;
    const px = Math.cos(a) * R, py = Math.sin(a) * R, rot = (a * 180) / Math.PI;
    const col = k % 2 ? OLIVO : sombra(OLIVO, 0.85);
    hojas.push(`<ellipse fill="${col}" cx="${f(px)}" cy="${f(py)}" rx="6" ry="12.5" transform="rotate(${f(rot + 30)} ${f(px)} ${f(py)})"/>`);
    hojas.push(`<ellipse fill="${col}" cx="${f(-px)}" cy="${f(py)}" rx="6" ry="12.5" transform="rotate(${f(180 - rot - 30)} ${f(-px)} ${f(py)})"/>`);
  }
  return `<g class="${clase}"><g transform="translate(${x} ${y}) scale(${s})">` +
    `<path d="M-12 ${R + 2}A${R} ${R} 0 0 1 -14 ${-R + 3}M12 ${R + 2}A${R} ${R} 0 0 0 14 ${-R + 3}" fill="none" stroke="${sombra(OLIVO)}" stroke-width="2.4"/>` +
    hojas.join('') +
    `<path d="M-12 ${R + 2}l12 9 12 -9" fill="none" stroke="${CORAL}" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>` +
    `</g></g>`;
}

// Ánfora de terracota con rama de olivo.
export function anfora(x, y, s = 1) {
  const terracota = '#D9774A';
  return `<g transform="translate(${x} ${y}) scale(${s})">` +
    `<path d="M-6 -78Q-30 -100 -12 -122M6 -80Q20 -104 2 -130" fill="none" stroke="${sombra(OLIVO)}" stroke-width="2.4"/>` +
    `<g fill="${OLIVO}"><ellipse cx="-22" cy="-104" rx="5" ry="10" transform="rotate(-40 -22 -104)"/><ellipse cx="-8" cy="-116" rx="5" ry="10" transform="rotate(30 -8 -116)"/><ellipse cx="14" cy="-108" rx="5" ry="10" transform="rotate(40 14 -108)"/><ellipse cx="6" cy="-124" rx="5" ry="10" transform="rotate(-20 6 -124)"/></g>` +
    `<path d="M-12 -72Q-32 -74 -30 -54M12 -72Q32 -74 30 -54" fill="none" stroke="${sombra(terracota)}" stroke-width="4"/>` +
    `<path d="M-14 -80h28M-12 -80Q-14 -66 -26 -54Q-40 -36 -30 -14Q-22 0 0 0Q22 0 30 -14Q40 -36 26 -54Q14 -66 12 -80Z" fill="${terracota}"/>` +
    `<path d="M0 -80Q14 -66 26 -54Q40 -36 30 -14Q22 0 0 0Z" fill="${sombra(terracota, 0.88)}"/>` +
    `<path d="M-33 -36H33M-31 -24H31" stroke="#2A1F2E" stroke-width="2"/><path d="M-30 -30h60" stroke="#F6E2C6" stroke-width="3.4" stroke-dasharray="6 5"/>` +
    `</g>`;
}

export function maletin(x, y, s = 1, rot = 0) {
  return `<g transform="translate(${x} ${y}) rotate(${rot}) scale(${s})"><path d="M-9 -4V-14Q-9 -20 -3 -20H3Q9 -20 9 -14V-4" fill="none" stroke="${BERENJENA}" stroke-width="3.4"/><rect x="-26" y="-6" width="52" height="38" rx="3" fill="${BERENJENA}"/><rect x="0" y="-6" width="26" height="38" fill="#000" opacity=".12"/></g>`;
}

export function portatil(x, y, s = 1, mira = 1) {
  return `<g transform="translate(${x} ${y}) scale(${s * mira} ${s})">` +
    `<path d="M-40 0L-30 -52H38L32 0Z" fill="${NOCHE}"/>` +
    `<path d="M-22 -42h44M-24 -30h30" stroke="${CORAL}" stroke-width="5" stroke-linecap="round"/><path d="M-26 -16h20" stroke="#5A6295" stroke-width="5" stroke-linecap="round"/>` +
    `<path d="M-56 0H44L40 6H-52Z" fill="#D7D2E3"/></g>`;
}

export function tablet(x, y, s = 1, contenido = 'grafico') {
  const c = contenido === 'grafico'
    ? `<path d="M-14 12L-4 0 4 6 15 -10" fill="none" stroke="${CORAL}" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="15" cy="-10" r="3" fill="${CORAL}"/>`
    : `<g fill="${AZAFRAN}">${[-12, -4, 4, 12].map((dx) => `<path transform="translate(${dx} 2) scale(.42)" d="M0 -11L3.2 -3.4 11.4 -3.4 4.8 1.6 7.2 9.6 0 4.8 -7.2 9.6 -4.8 1.6 -11.4 -3.4 -3.2 -3.4Z"/>`).join('')}</g>`;
  return `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-24" y="-30" width="48" height="60" rx="6" fill="${NOCHE}"/><rect x="-19" y="-24" width="38" height="48" rx="3" fill="#FFFFFF"/>${c}</g>`;
}

export function movil(x, y, s = 1) {
  return `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-13" y="-24" width="26" height="46" rx="5" fill="${NOCHE}"/><rect x="-10" y="-19" width="20" height="34" rx="2" fill="#FFFFFF"/><path d="M0 -12a6 6 0 0 1 6 6c0 5-6 11-6 11s-6-6-6-11a6 6 0 0 1 6-6z" fill="${CORAL}"/></g>`;
}

export function pin(x, y, s = 1, clase = 'esc-flota') {
  return `<g class="${clase}"><g transform="translate(${x} ${y}) scale(${s})">` +
    `<ellipse cx="0" cy="8" rx="20" ry="5" fill="#000" opacity=".06"/>` +
    `<path d="M0 0C-8 -18 -40 -42 -40 -72A40 40 0 0 1 40 -72C40 -42 8 -18 0 0Z" fill="${CORAL}"/>` +
    `<path d="M0 0C8 -18 40 -42 40 -72A40 40 0 0 0 0 -112Z" fill="${sombra(CORAL, 0.9)}"/>` +
    `<circle cx="0" cy="-72" r="20" fill="#FFFFFF"/>` +
    `<path transform="translate(0 -72) scale(.95)" d="M0 -11L3.2 -3.4 11.4 -3.4 4.8 1.6 7.2 9.6 0 4.8 -7.2 9.6 -4.8 1.6 -11.4 -3.4 -3.2 -3.4Z" fill="${AZAFRAN}"/>` +
    `</g></g>`;
}

// Fachada de comercio con toldo a rayas.
export function tienda(x, y, s = 1) {
  const rayas = Array.from({ length: 7 }, (_, i) => `<path d="M${-105 + i * 30} -170h30v24q-15 11-30 0z" fill="${i % 2 ? '#FFFFFF' : CORAL}"/>`).join('');
  return `<g transform="translate(${x} ${y}) scale(${s})">` +
    `<rect x="-96" y="-230" width="192" height="230" fill="#FFFFFF"/><rect x="0" y="-230" width="96" height="230" fill="${MARMOL_S}" opacity=".6"/>` +
    `<rect x="-96" y="-230" width="192" height="40" fill="${AZUL}"/>` +
    `<text x="0" y="-202" text-anchor="middle" font-family="Cinzel, serif" font-weight="700" font-size="18" letter-spacing="3" fill="#FFFFFF">ABIERTO</text>` +
    `<path d="M-105 -190h210v20h-210z" fill="${sombra(CORAL, 0.9)}"/>` + rayas +
    `<rect x="-80" y="-120" width="80" height="70" rx="3" fill="#DCE6F2"/><path d="M-70 -110l24 0M-70 -98l14 0" stroke="#fff" stroke-width="5" stroke-linecap="round"/>` +
    `<rect x="16" y="-124" width="64" height="124" rx="3" fill="${BERENJENA}"/><circle cx="66" cy="-60" r="3.5" fill="${AZAFRAN}"/>` +
    `<rect x="-86" y="-50" width="92" height="10" fill="${MARMOL_S}"/>` +
    `</g>`;
}

// Pantalla grande de vídeo sobre pie.
export function pantallaVideo(x, y, s = 1) {
  return `<g transform="translate(${x} ${y}) scale(${s})">` +
    `<path d="M0 -40V0M-34 0h68" stroke="${NOCHE}" stroke-width="6" stroke-linecap="round"/>` +
    `<rect x="-130" y="-196" width="260" height="156" rx="14" fill="${NOCHE}"/>` +
    `<rect x="-118" y="-184" width="236" height="132" rx="6" fill="#2F3A75"/>` +
    `<circle cx="-70" cy="-150" r="40" fill="#36428A"/><path d="M-118 -70Q-60 -110 -10 -84Q40 -60 118 -96V-58Q118 -52 112 -52H-112Q-118 -52 -118 -58Z" fill="#3B4894"/>` +
    `<g class="esc-late" style="transform-origin:0px -118px"><circle cx="0" cy="-118" r="28" fill="${CORAL}"/><path d="M-8 -131L14 -118 -8 -105Z" fill="#FFFFFF"/></g>` +
    `<path d="M-104 -64H104" stroke="#5A6295" stroke-width="5" stroke-linecap="round"/><path class="esc-progreso" pathLength="1" d="M-104 -64H40" stroke="${AZAFRAN}" stroke-width="5" stroke-linecap="round"/>` +
    `</g>`;
}

export function claqueta(x, y, s = 1, rot = 0) {
  return `<g transform="translate(${x} ${y}) rotate(${rot}) scale(${s})"><rect x="-26" y="-14" width="52" height="38" rx="3" fill="${NOCHE}"/><path d="M-26 -14L-28 -30 24 -38 26 -22Z" fill="#FFFFFF"/><path d="M-16 -30l6 12M0 -33l6 12M14 -35l6 12" stroke="${NOCHE}" stroke-width="5"/><path d="M-18 2h36M-18 12h22" stroke="#5A6295" stroke-width="4" stroke-linecap="round"/></g>`;
}

// Pizarra kanban sobre caballete: el pipeline de ventas.
export function pipeline(x, y, s = 1) {
  const madera = '#B98A62';
  const col = (cx, titulo, n, color) =>
    `<text x="${cx}" y="-238" text-anchor="middle" font-family="DM Mono, monospace" font-size="12" fill="#8A8496">${titulo}</text>` +
    Array.from({ length: n }, (_, i) => `<rect x="${cx - 36}" y="${-224 + i * 40}" width="72" height="30" rx="5" fill="${color}"/><path d="M${cx - 26} ${-213 + i * 40}h34M${cx - 26} ${-203 + i * 40}h20" stroke="#FFFFFF" stroke-opacity=".8" stroke-width="3.4" stroke-linecap="round"/>`).join('');
  return `<g transform="translate(${x} ${y}) scale(${s})">` +
    `<path d="M-110 0L-80 -270M110 0L80 -270M0 -270V-30" stroke="${madera}" stroke-width="8" stroke-linecap="round"/>` +
    `<rect x="-150" y="-262" width="300" height="200" rx="8" fill="#FFFFFF"/>` +
    `<path d="M-50 -250V-74M50 -250V-74" stroke="${MARMOL_S}" stroke-width="2.4"/>` +
    col(-100, 'NUEVO', 3, '#C9CEE6') + col(0, 'PROPUESTA', 2, '#F3CF93') +
    `<text x="100" y="-238" text-anchor="middle" font-family="DM Mono, monospace" font-size="12" fill="#8A8496">GANADO</text>` +
    `<g class="esc-tarjeta"><rect x="64" y="-224" width="72" height="30" rx="5" fill="#A9C27A"/><path class="esc-traza" pathLength="1" d="M88 -210l7 7 13-13" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>` +
    `<path d="M-60 -62h120" stroke="${madera}" stroke-width="8" stroke-linecap="round"/>` +
    `</g>`;
}

// Nodo de un flujo de automatización (círculo con icono).
export function nodo(x, y, icono, color = '#FFFFFF', i = 0) {
  const t = color === '#FFFFFF' ? AZUL : '#FFFFFF';
  const ic = {
    sobre: `<rect x="-13" y="-9" width="26" height="18" rx="2" fill="none" stroke="${t}" stroke-width="2.6"/><path d="M-13 -7L0 3 13 -7" fill="none" stroke="${t}" stroke-width="2.6" stroke-linejoin="round"/>`,
    chat: `<path d="M-13 -10h26v17H-2l-7 6v-6h-4z" fill="none" stroke="${t}" stroke-width="2.6" stroke-linejoin="round"/><path d="M-6 -1h12" stroke="${t}" stroke-width="2.6" stroke-linecap="round"/>`,
    campana: `<path d="M-10 6V-2a10 10 0 0 1 20 0v8l3 4h-26z" fill="none" stroke="${t}" stroke-width="2.6" stroke-linejoin="round"/><path d="M-4 13a4 4 0 0 0 8 0" fill="none" stroke="${t}" stroke-width="2.6"/>`,
    movil: `<rect x="-8" y="-14" width="16" height="28" rx="3" fill="none" stroke="${t}" stroke-width="2.6"/><path d="M-3 8h6" stroke="${t}" stroke-width="2.6" stroke-linecap="round"/>`,
    persona: `<circle cx="0" cy="-6" r="6.5" fill="none" stroke="${t}" stroke-width="2.6"/><path d="M-12 13a12 10 0 0 1 24 0" fill="none" stroke="${t}" stroke-width="2.6"/>`,
    check: `<path d="M-10 0l6 6 14-14" fill="none" stroke="${t}" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"/>`,
  }[icono];
  return `<g class="esc-nodo" style="--i:${i}"><circle cx="${x}" cy="${y + 4}" r="30" fill="#000" opacity=".05"/><circle cx="${x}" cy="${y}" r="30" fill="${color}"/><g transform="translate(${x} ${y})">${ic}</g></g>`;
}

export function avionPapel(x, y, s = 1, rot = -12) {
  return `<g transform="translate(${x} ${y}) rotate(${rot}) scale(${s})"><path d="M-24 0L26 -16 6 18 0 4Z" fill="#FFFFFF"/><path d="M0 4L26 -16 -6 10Z" fill="${MARMOL_L}"/></g>`;
}

// Podio de tres alturas, de mármol.
export function podio(x, y, s = 1) {
  const bloque = (bx, alto, ancho, num) =>
    `<rect x="${bx - ancho / 2}" y="${-alto}" width="${ancho}" height="${alto}" fill="${MARMOL}"/>` +
    `<rect x="${bx}" y="${-alto}" width="${ancho / 2}" height="${alto}" fill="${MARMOL_S}" opacity=".6"/>` +
    `<rect x="${bx - ancho / 2}" y="${-alto}" width="${ancho}" height="8" fill="${MARMOL_S}"/>` +
    `<text x="${bx}" y="${-alto / 2 + 14}" text-anchor="middle" font-family="Cinzel, serif" font-weight="700" font-size="32" fill="${num === 'I' ? CORAL : MARMOL_L}">${num}</text>`;
  return `<g transform="translate(${x} ${y}) scale(${s})">${bloque(-110, 70, 110, 'II')}${bloque(110, 50, 110, 'III')}${bloque(0, 110, 112, 'I')}</g>`;
}

// Periódico / nota de prensa flotante.
export function prensa(x, y, s = 1, rot = 0, i = 0, titular = 'PRENSA') {
  return `<g class="esc-burbuja" style="--i:${i}"><g transform="translate(${x} ${y}) rotate(${rot}) scale(${s})">` +
    `<rect x="-50" y="-34" width="104" height="76" rx="4" fill="#000" opacity=".05"/>` +
    `<rect x="-52" y="-38" width="104" height="76" rx="4" fill="#FFFFFF"/>` +
    `<text x="0" y="-16" text-anchor="middle" font-family="Cinzel, serif" font-weight="700" font-size="13" letter-spacing="1.5" fill="${NOCHE}">${titular}</text>` +
    `<path d="M-40 -8h80" stroke="${NOCHE}" stroke-width="1.6"/><rect x="-40" y="0" width="32" height="26" rx="2" fill="#F3CF93"/><path d="M0 4h40M0 13h40M0 22h28" stroke="${MARMOL_L}" stroke-width="3.2" stroke-linecap="round"/>` +
    `</g></g>`;
}

// Pergamino desplegado (el plan).
export function pergamino(x, y, s = 1) {
  return `<g transform="translate(${x} ${y}) scale(${s})">` +
    `<path d="M-60 -40H60V40H-60Z" fill="#FBF1DE"/>` +
    `<rect x="-70" y="-48" width="14" height="96" rx="7" fill="#D9B98A"/><rect x="56" y="-48" width="14" height="96" rx="7" fill="#C9A577"/>` +
    `<path d="M-42 -22h50M-42 -8h70M-42 6h40" stroke="#E2CFAE" stroke-width="3.4" stroke-linecap="round"/>` +
    `<path class="esc-traza" pathLength="1" d="M-40 24Q-10 6 10 22T44 14" fill="none" stroke="${CORAL}" stroke-width="3.4" stroke-linecap="round" stroke-dasharray="1"/>` +
    `</g>`;
}

export const taza = (x, y, s = 1) =>
  `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-10 -14h20v18a6 6 0 0 1-6 6h-8a6 6 0 0 1-6-6z" fill="#FFFFFF"/><path d="M10 -8a5 5 0 0 1 0 10" fill="none" stroke="#FFFFFF" stroke-width="3"/><path d="M-3 -20q-3-5 0-9M4 -20q-3-5 0-9" fill="none" stroke="${DECO}" stroke-width="2" stroke-linecap="round"/></g>`;

export const mesaAlta = (x, y, s = 1) =>
  `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 -6V-96M-30 -2h60" stroke="${NOCHE}" stroke-width="5" stroke-linecap="round"/><rect x="-74" y="-104" width="148" height="10" rx="5" fill="#B98A62"/></g>`;

export const flecha = (d, clase = 'esc-traza') =>
  `<path class="${clase}" pathLength="1" d="${d}" fill="none" stroke="${LINEA}" stroke-width="2.6" stroke-dasharray="0.02 0.03" stroke-linecap="round"/>`;
