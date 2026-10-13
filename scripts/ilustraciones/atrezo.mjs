// Atrezo de las escenas: el mismo contorno de tinta que los personajes.
// Lo griego va en los objetos (columnas jónicas, laurel, ánforas, el sol de la
// aurora), no en la ropa: el reparto son profesionales de hoy.
import { TINTA, nuevoId } from './personajes.mjs';

const T = 3.2;
const f = (n) => Math.round(n * 10) / 10;
const MARMOL = '#FBF6EC', MARMOL_SOMBRA = '#E8DDCA', CORAL = '#E2683F', AZAFRAN = '#E7A93A', NOCHE = '#2B2F52';

export const suelo = (cx = 360, y = 486, ancho = 640) => {
  const a = ancho / 2;
  return `<path d="M${cx - a} ${y}Q${cx - a + 30} ${y - 30} ${cx - a / 2} ${y - 24}Q${cx} ${y - 36} ${cx + a / 2} ${y - 26}Q${cx + a - 10} ${y - 30} ${cx + a} ${y}Q${cx + a - 16} ${y + 28} ${cx + a / 2} ${y + 26}Q${cx} ${y + 38} ${cx - a / 2} ${y + 26}Q${cx - a + 6} ${y + 26} ${cx - a} ${y}Z" fill="#EADFCC"/>`;
};

// Sol de la aurora asomando por el horizonte, con halo y rayos que giran.
export function aurora(cx, cy, r = 110) {
  const id = nuevoId('halo');
  const rayos = Array.from({ length: 12 }, (_, i) => {
    const a = (i * Math.PI * 2) / 12;
    const r1 = r + 18, r2 = r + (i % 2 ? 46 : 70);
    return `<path d="M${f(cx + Math.cos(a) * r1)} ${f(cy + Math.sin(a) * r1)}L${f(cx + Math.cos(a) * r2)} ${f(cy + Math.sin(a) * r2)}"/>`;
  }).join('');
  const clip = nuevoId('horiz');
  return `<defs><clipPath id="${clip}"><rect x="${cx - r * 3}" y="${cy - r * 3}" width="${r * 6}" height="${r * 3}"/></clipPath><radialGradient id="${id}"><stop offset="0" stop-color="${AZAFRAN}" stop-opacity=".55"/><stop offset=".55" stop-color="#F2B98F" stop-opacity=".28"/><stop offset="1" stop-color="#F6F0E6" stop-opacity="0"/></radialGradient></defs>` +
    `<g clip-path="url(#${clip})">` +
    `<circle cx="${cx}" cy="${cy}" r="${r * 2.4}" fill="url(#${id})"/>` +
    `<g class="esc-sol" style="transform-origin:${cx}px ${cy}px" stroke="${AZAFRAN}" stroke-width="7" stroke-linecap="round" opacity=".9">${rayos}</g>` +
    `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${AZAFRAN}"/>` +
    `<circle cx="${cx}" cy="${cy}" r="${r * 0.78}" fill="#EE9150"/>` +
    `<circle cx="${cx}" cy="${cy}" r="${r * 0.56}" fill="${CORAL}"/></g>`;
}

// Columna jónica. (x = eje, y = base)
export function columna(x, y, alto, ancho = 46, clase = '') {
  const a = ancho / 2;
  const fuste = alto - 34;
  const estrias = [-a / 2, 0, a / 2].map((dx) => `<path d="M${f(x + dx)} ${f(y - 16)}V${f(y - 16 - fuste + 6)}" stroke="${MARMOL_SOMBRA}" stroke-width="3.4" stroke-linecap="round"/>`).join('');
  const voluta = (vx, dir) => `<circle cx="${f(vx)}" cy="${f(y - alto + 9)}" r="8.5" fill="${MARMOL}" stroke="${TINTA}" stroke-width="${T}"/><path d="M${f(vx)} ${f(y - alto + 9)}m${dir * 3.5} 0a3.5 3.5 0 1 1 ${-dir * 3.5} -3.5" fill="none" stroke="${TINTA}" stroke-width="2"/>`;
  return `<g class="${clase}">` +
    `<rect x="${f(x - a - 8)}" y="${f(y - 10)}" width="${ancho + 16}" height="10" rx="2" fill="${MARMOL}" stroke="${TINTA}" stroke-width="${T}"/>` +
    `<rect x="${f(x - a - 3)}" y="${f(y - 18)}" width="${ancho + 6}" height="8" rx="2" fill="${MARMOL}" stroke="${TINTA}" stroke-width="${T}"/>` +
    `<rect x="${f(x - a)}" y="${f(y - 18 - fuste)}" width="${ancho}" height="${fuste}" fill="${MARMOL}" stroke="${TINTA}" stroke-width="${T}"/>` +
    estrias +
    `<rect x="${f(x - a)}" y="${f(y - 18 - fuste)}" width="${f(a * 0.5)}" height="${fuste}" fill="${TINTA}" opacity=".06"/>` +
    `<rect x="${f(x - a - 6)}" y="${f(y - alto + 2)}" width="${ancho + 12}" height="14" rx="3" fill="${MARMOL}" stroke="${TINTA}" stroke-width="${T}"/>` +
    voluta(x - a - 4, 1) + voluta(x + a + 4, -1) +
    `<rect x="${f(x - a - 10)}" y="${f(y - alto - 6)}" width="${ancho + 20}" height="9" rx="2" fill="${MARMOL}" stroke="${TINTA}" stroke-width="${T}"/>` +
    `</g>`;
}

// Bocadillo de diálogo al estilo de las escenas de GMV: píldora coral con check.
export function bocadillo({ x, y, texto, cola = 'izq', i = 0, icono = 'check', color = CORAL, tinta = TINTA, tam = 21 }) {
  const sangria = icono === 'sol' ? 62 : icono ? 54 : 22;
  const ancho = Math.round(texto.length * tam * 0.55 + sangria + 22);
  const alto = tam + 34;
  const cx = cola === 'izq' ? x + 34 : x + ancho - 34;
  const dir = cola === 'izq' ? 1 : -1;
  const ic = icono === 'check'
    ? `<path d="M${x + 22} ${y + alto / 2}l7 7 13-14" fill="none" stroke="${tinta}" stroke-width="4.4" stroke-linecap="round" stroke-linejoin="round"/>`
    : icono === 'estrella'
      ? `<path transform="translate(${x + 32} ${y + alto / 2})" d="M0 -11L3.2 -3.4 11.4 -3.4 4.8 1.6 7.2 9.6 0 4.8 -7.2 9.6 -4.8 1.6 -11.4 -3.4 -3.2 -3.4Z" fill="${tinta}"/>`
      : icono === 'sol'
        ? `<g transform="translate(${x + 32} ${y + alto / 2 + 6})" stroke="${tinta}" stroke-width="3" stroke-linecap="round"><path d="M0 -20v4M-11 -15l3 3M11 -15l-3 3M-17 -3h3M14 -3h3"/><path d="M-8 -1a8 8 0 0 1 16 0" fill="none"/><path d="M-13 4h26"/></g>`
        : '';
  return `<g class="esc-burbuja" style="--i:${i}">` +
    `<path d="M${x + 18} ${y}H${x + ancho - 18}Q${x + ancho} ${y} ${x + ancho} ${y + 18}V${y + alto - 18}Q${x + ancho} ${y + alto} ${x + ancho - 18} ${y + alto}H${cx + dir * 22}L${cx - dir * 4} ${y + alto + 20}L${cx - dir * 2} ${y + alto}H${x + 18}Q${x} ${y + alto} ${x} ${y + alto - 18}V${y + 18}Q${x} ${y} ${x + 18} ${y}Z" fill="${color}" stroke="${TINTA}" stroke-width="${T}" stroke-linejoin="round"/>` +
    ic +
    `<text x="${x + sangria}" y="${y + alto / 2 + tam * 0.36}" font-family="DM Sans, sans-serif" font-weight="700" font-size="${tam}" fill="${tinta}">${texto}</text>` +
    `</g>`;
}

// Destello de cuatro puntas (parpadea). La posición va en un <g> aparte: si el
// mismo elemento lleva transform y transform-origin, Chrome desplaza la figura.
export const destello = (x, y, s = 1, i = 0, color = AZAFRAN) =>
  `<g transform="translate(${x} ${y}) scale(${s})"><path class="esc-brilla" style="--i:${i}" d="M0 -16Q2 -2 16 0Q2 2 0 16Q-2 2 -16 0Q-2 -2 0 -16Z" fill="${color}"/></g>`;

// Rama de laurel (o corona, con dos ramas enfrentadas).
export function laurel(x, y, s = 1, girar = 0) {
  const hojas = [];
  for (let k = 0; k < 6; k++) {
    const t = k / 5;
    const px = -40 + t * 80, py = -Math.sin(t * Math.PI) * 16;
    hojas.push(`<ellipse cx="${f(px)}" cy="${f(py - 9)}" rx="5.5" ry="11" transform="rotate(${f(30 + t * 30)} ${f(px)} ${f(py - 9)})"/>`);
    hojas.push(`<ellipse cx="${f(px + 2)}" cy="${f(py + 9)}" rx="5.5" ry="11" transform="rotate(${f(150 - t * 30)} ${f(px + 2)} ${f(py + 9)})"/>`);
  }
  return `<g transform="translate(${x} ${y}) rotate(${girar}) scale(${s})"><path d="M-46 4Q0 -26 46 0" fill="none" stroke="${TINTA}" stroke-width="3"/><g fill="#7F8F3E" stroke="${TINTA}" stroke-width="2.4">${hojas.join('')}</g></g>`;
}

export function coronaLaurel(x, y, s = 1, clase = '') {
  const R = 34, hojas = [];
  for (let k = 0; k < 7; k++) {
    const a = ((112 + k * 21) * Math.PI) / 180;
    const px = Math.cos(a) * R, py = Math.sin(a) * R, rot = (a * 180) / Math.PI;
    hojas.push(`<ellipse cx="${f(px)}" cy="${f(py)}" rx="6" ry="12.5" transform="rotate(${f(rot + 30)} ${f(px)} ${f(py)})"/>`);
    hojas.push(`<ellipse cx="${f(-px)}" cy="${f(py)}" rx="6" ry="12.5" transform="rotate(${f(180 - rot - 30)} ${f(-px)} ${f(py)})"/>`);
  }
  return `<g class="${clase}"><g transform="translate(${x} ${y}) scale(${s})">` +
    `<path d="M-12 ${R + 2}A${R} ${R} 0 0 1 -14 ${-R + 3}M12 ${R + 2}A${R} ${R} 0 0 0 14 ${-R + 3}" fill="none" stroke="${TINTA}" stroke-width="3"/>` +
    `<g fill="#7F8F3E" stroke="${TINTA}" stroke-width="2.4">${hojas.join('')}</g>` +
    `<path d="M-12 ${R + 2}l12 10 12 -10" fill="none" stroke="${CORAL}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>` +
    `</g></g>`;
}

// Ánfora con rama de olivo.
export function anfora(x, y, s = 1) {
  return `<g transform="translate(${x} ${y}) scale(${s})">` +
    `<path d="M-6 -78Q-30 -100 -12 -122M6 -80Q20 -104 2 -130" fill="none" stroke="${TINTA}" stroke-width="3"/>` +
    `<g fill="#7F8F3E" stroke="${TINTA}" stroke-width="2.2"><ellipse cx="-22" cy="-104" rx="5" ry="10" transform="rotate(-40 -22 -104)"/><ellipse cx="-8" cy="-116" rx="5" ry="10" transform="rotate(30 -8 -116)"/><ellipse cx="14" cy="-108" rx="5" ry="10" transform="rotate(40 14 -108)"/><ellipse cx="6" cy="-124" rx="5" ry="10" transform="rotate(-20 6 -124)"/></g>` +
    `<path d="M-14 -80h28M-12 -80Q-14 -66 -26 -54Q-40 -36 -30 -14Q-22 0 0 0Q22 0 30 -14Q40 -36 26 -54Q14 -66 12 -80" fill="#C8693F" stroke="${TINTA}" stroke-width="${T}" stroke-linejoin="round"/>` +
    `<path d="M-12 -72Q-32 -74 -30 -54M12 -72Q32 -74 30 -54" fill="none" stroke="${TINTA}" stroke-width="${T}"/>` +
    `<path d="M-33 -36H33M-31 -24H31" stroke="${TINTA}" stroke-width="2.4"/><path d="M-30 -30h60" stroke="#F6E2C6" stroke-width="4" stroke-dasharray="6 5"/>` +
    `</g>`;
}

export function portatil(x, y, s = 1, mira = 1) {
  return `<g transform="translate(${x} ${y}) scale(${s * mira} ${s})">` +
    `<path d="M-40 0L-30 -52H38L32 0Z" fill="${NOCHE}" stroke="${TINTA}" stroke-width="${T}" stroke-linejoin="round"/>` +
    `<path d="M-22 -42h44M-24 -30h30" stroke="${CORAL}" stroke-width="5" stroke-linecap="round"/><path d="M-26 -16h20" stroke="#8A8DB0" stroke-width="5" stroke-linecap="round"/>` +
    `<path d="M-56 0H44L40 7H-52Z" fill="#C9C3D6" stroke="${TINTA}" stroke-width="${T}" stroke-linejoin="round"/></g>`;
}

export function tablet(x, y, s = 1, contenido = 'grafico') {
  const c = contenido === 'grafico'
    ? `<path d="M-14 12L-4 0 4 6 15 -10" fill="none" stroke="${CORAL}" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"/><circle cx="15" cy="-10" r="3" fill="${CORAL}"/>`
    : `<g fill="${AZAFRAN}">${[-12, -4, 4, 12].map((dx) => `<path transform="translate(${dx} 2) scale(.42)" d="M0 -11L3.2 -3.4 11.4 -3.4 4.8 1.6 7.2 9.6 0 4.8 -7.2 9.6 -4.8 1.6 -11.4 -3.4 -3.2 -3.4Z"/>`).join('')}</g>`;
  return `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-24" y="-30" width="48" height="60" rx="7" fill="${NOCHE}" stroke="${TINTA}" stroke-width="${T}"/><rect x="-18" y="-23" width="36" height="46" rx="3" fill="#FBF6EC"/>${c}</g>`;
}

export function movil(x, y, s = 1) {
  return `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-13" y="-24" width="26" height="46" rx="6" fill="${NOCHE}" stroke="${TINTA}" stroke-width="${T}"/><rect x="-9" y="-18" width="18" height="32" rx="2" fill="#FBF6EC"/><path d="M0 -12a6 6 0 0 1 6 6c0 5-6 11-6 11s-6-6-6-11a6 6 0 0 1 6-6z" fill="${CORAL}"/></g>`;
}

export function pin(x, y, s = 1, clase = 'esc-flota') {
  return `<g class="${clase}"><g transform="translate(${x} ${y}) scale(${s})">` +
    `<ellipse cx="0" cy="6" rx="22" ry="6" fill="${TINTA}" opacity=".14"/>` +
    `<path d="M0 0C-8 -18 -40 -42 -40 -72A40 40 0 0 1 40 -72C40 -42 8 -18 0 0Z" fill="${CORAL}" stroke="${TINTA}" stroke-width="${T}" stroke-linejoin="round"/>` +
    `<circle cx="0" cy="-72" r="20" fill="#FBF6EC" stroke="${TINTA}" stroke-width="${T}"/>` +
    `<path transform="translate(0 -72) scale(.95)" d="M0 -11L3.2 -3.4 11.4 -3.4 4.8 1.6 7.2 9.6 0 4.8 -7.2 9.6 -4.8 1.6 -11.4 -3.4 -3.2 -3.4Z" fill="${AZAFRAN}" stroke="${TINTA}" stroke-width="1.6" stroke-linejoin="round"/>` +
    `<path d="M-26 -92Q-20 -104 -8 -108" fill="none" stroke="#fff" stroke-opacity=".45" stroke-width="4" stroke-linecap="round"/>` +
    `</g></g>`;
}

// Fachada de comercio con toldo a rayas.
export function tienda(x, y, s = 1) {
  const rayas = Array.from({ length: 7 }, (_, i) => `<path d="M${-105 + i * 30} -170h30v26q-15 12-30 0z" fill="${i % 2 ? '#FBF6EC' : CORAL}" stroke="${TINTA}" stroke-width="${T}" stroke-linejoin="round"/>`).join('');
  return `<g transform="translate(${x} ${y}) scale(${s})">` +
    `<rect x="-96" y="-230" width="192" height="230" fill="#F1E6D3" stroke="${TINTA}" stroke-width="${T}"/>` +
    `<rect x="-96" y="-230" width="192" height="40" fill="${NOCHE}" stroke="${TINTA}" stroke-width="${T}"/>` +
    `<text x="0" y="-202" text-anchor="middle" font-family="Cinzel, serif" font-weight="700" font-size="18" letter-spacing="3" fill="#FBF4E8">ABIERTO</text>` +
    `<path d="M-105 -190h210v20h-210z" fill="${CORAL}" stroke="${TINTA}" stroke-width="${T}"/>` + rayas +
    `<rect x="-80" y="-120" width="80" height="70" rx="4" fill="#CFE0E6" stroke="${TINTA}" stroke-width="${T}"/><path d="M-70 -110l24 0M-70 -98l14 0" stroke="#fff" stroke-width="5" stroke-linecap="round"/>` +
    `<rect x="16" y="-124" width="64" height="124" rx="4" fill="#A9573A" stroke="${TINTA}" stroke-width="${T}"/><circle cx="66" cy="-60" r="4" fill="${AZAFRAN}" stroke="${TINTA}" stroke-width="2"/>` +
    `<rect x="-86" y="-50" width="92" height="12" fill="#E8DDCA" stroke="${TINTA}" stroke-width="${T}"/>` +
    `</g>`;
}

// Pantalla grande de vídeo sobre pie.
export function pantallaVideo(x, y, s = 1) {
  return `<g transform="translate(${x} ${y}) scale(${s})">` +
    `<path d="M0 -40V0M-34 0h68" stroke="${TINTA}" stroke-width="6" stroke-linecap="round"/>` +
    `<rect x="-130" y="-196" width="260" height="156" rx="16" fill="${NOCHE}" stroke="${TINTA}" stroke-width="${T}"/>` +
    `<rect x="-116" y="-182" width="232" height="128" rx="8" fill="#3A3F6E"/>` +
    `<circle cx="-70" cy="-150" r="40" fill="#454A7C"/><path d="M-116 -70Q-60 -110 -10 -84Q40 -60 116 -96V-62Q116 -54 108 -54H-108Q-116 -54 -116 -62Z" fill="#4C5285"/>` +
    `<g class="esc-late" style="transform-origin:0px -118px"><circle cx="0" cy="-118" r="30" fill="${CORAL}" stroke="${TINTA}" stroke-width="${T}"/><path d="M-9 -132L15 -118 -9 -104Z" fill="#FBF4E8" stroke="${TINTA}" stroke-width="2.6" stroke-linejoin="round"/></g>` +
    `<path d="M-104 -66H104" stroke="#6B6F9C" stroke-width="5" stroke-linecap="round"/><path class="esc-progreso" pathLength="1" d="M-104 -66H40" stroke="${AZAFRAN}" stroke-width="5" stroke-linecap="round"/>` +
    `</g>`;
}

export function claqueta(x, y, s = 1, rot = 0) {
  return `<g transform="translate(${x} ${y}) rotate(${rot}) scale(${s})"><rect x="-26" y="-14" width="52" height="38" rx="3" fill="${NOCHE}" stroke="${TINTA}" stroke-width="${T}"/><path d="M-26 -14L-28 -30 24 -38 26 -22Z" fill="#FBF6EC" stroke="${TINTA}" stroke-width="${T}" stroke-linejoin="round"/><path d="M-16 -30l6 12M0 -33l6 12M14 -35l6 12" stroke="${TINTA}" stroke-width="5"/><path d="M-18 2h36M-18 12h22" stroke="#8A8DB0" stroke-width="4" stroke-linecap="round"/></g>`;
}

// Pizarra kanban sobre caballete: el pipeline de ventas.
export function pipeline(x, y, s = 1) {
  const col = (cx, titulo, n, color) =>
    `<text x="${cx}" y="-238" text-anchor="middle" font-family="DM Mono, monospace" font-size="13" fill="#5A5872">${titulo}</text>` +
    Array.from({ length: n }, (_, i) => `<rect x="${cx - 36}" y="${-224 + i * 40}" width="72" height="30" rx="6" fill="${color}" stroke="${TINTA}" stroke-width="2.6"/><path d="M${cx - 26} ${-213 + i * 40}h34M${cx - 26} ${-203 + i * 40}h20" stroke="${TINTA}" stroke-opacity=".35" stroke-width="3.4" stroke-linecap="round"/>`).join('');
  return `<g transform="translate(${x} ${y}) scale(${s})">` +
    `<path d="M-110 0L-80 -270M110 0L80 -270M0 -270V-30" stroke="#9A6A45" stroke-width="9" stroke-linecap="round"/>` +
    `<rect x="-150" y="-262" width="300" height="200" rx="10" fill="#FBF6EC" stroke="${TINTA}" stroke-width="${T}"/>` +
    `<path d="M-50 -250V-74M50 -250V-74" stroke="${MARMOL_SOMBRA}" stroke-width="3"/>` +
    col(-100, 'NUEVO', 3, '#E6E1F0') + col(0, 'PROPUESTA', 2, '#F7E1B7') +
    `<text x="100" y="-238" text-anchor="middle" font-family="DM Mono, monospace" font-size="13" fill="#5A5872">GANADO</text>` +
    `<g class="esc-tarjeta"><rect x="64" y="-224" width="72" height="30" rx="6" fill="#CFE3B4" stroke="${TINTA}" stroke-width="2.6"/><path class="esc-traza" pathLength="1" d="M88 -210l7 7 13-13" fill="none" stroke="#4E6B22" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>` +
    `<path d="M-60 -62h120" stroke="#9A6A45" stroke-width="9" stroke-linecap="round"/>` +
    `</g>`;
}

// Nodo de un flujo de automatización (círculo con icono).
export function nodo(x, y, icono, color = '#FBF6EC', i = 0) {
  const ic = {
    sobre: `<rect x="-14" y="-10" width="28" height="20" rx="3" fill="none" stroke="${TINTA}" stroke-width="3"/><path d="M-14 -8L0 3 14 -8" fill="none" stroke="${TINTA}" stroke-width="3" stroke-linejoin="round"/>`,
    chat: `<path d="M-14 -10h28v18H-2l-8 7v-7h-4z" fill="none" stroke="${TINTA}" stroke-width="3" stroke-linejoin="round"/><path d="M-7 -1h14" stroke="${TINTA}" stroke-width="3" stroke-linecap="round"/>`,
    campana: `<path d="M-11 6V-2a11 11 0 0 1 22 0v8l3 4h-28z" fill="none" stroke="${TINTA}" stroke-width="3" stroke-linejoin="round"/><path d="M-4 13a4 4 0 0 0 8 0" fill="none" stroke="${TINTA}" stroke-width="3"/>`,
    movil: `<rect x="-9" y="-15" width="18" height="30" rx="4" fill="none" stroke="${TINTA}" stroke-width="3"/><path d="M-3 9h6" stroke="${TINTA}" stroke-width="3" stroke-linecap="round"/>`,
    persona: `<circle cx="0" cy="-6" r="7" fill="none" stroke="${TINTA}" stroke-width="3"/><path d="M-13 14a13 11 0 0 1 26 0" fill="none" stroke="${TINTA}" stroke-width="3"/>`,
    check: `<path d="M-11 0l7 7 15-15" fill="none" stroke="${TINTA}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`,
  }[icono];
  return `<g class="esc-nodo" style="--i:${i}"><circle cx="${x}" cy="${y}" r="30" fill="${color}" stroke="${TINTA}" stroke-width="${T}"/><g transform="translate(${x} ${y})">${ic}</g></g>`;
}

export function avionPapel(x, y, s = 1, rot = -12) {
  return `<g transform="translate(${x} ${y}) rotate(${rot}) scale(${s})"><path d="M-24 0L26 -16 6 18 0 4Z" fill="#FBF6EC" stroke="${TINTA}" stroke-width="2.8" stroke-linejoin="round"/><path d="M0 4L26 -16" stroke="${TINTA}" stroke-width="2.4"/></g>`;
}

// Podio de tres alturas, de mármol.
export function podio(x, y, s = 1) {
  const bloque = (bx, alto, ancho, num) =>
    `<rect x="${bx - ancho / 2}" y="${-alto}" width="${ancho}" height="${alto}" fill="${MARMOL}" stroke="${TINTA}" stroke-width="${T}"/>` +
    `<path d="M${bx - ancho / 2} ${-alto + 12}h${ancho}" stroke="${MARMOL_SOMBRA}" stroke-width="3"/>` +
    `<text x="${bx}" y="${-alto / 2 + 14}" text-anchor="middle" font-family="Cinzel, serif" font-weight="700" font-size="34" fill="${num === 'I' ? CORAL : '#B4A68E'}">${num}</text>`;
  return `<g transform="translate(${x} ${y}) scale(${s})">${bloque(-110, 70, 110, 'II')}${bloque(110, 50, 110, 'III')}${bloque(0, 110, 112, 'I')}</g>`;
}

// Periódico / nota de prensa flotante.
export function prensa(x, y, s = 1, rot = 0, i = 0, titular = 'PRENSA') {
  return `<g class="esc-burbuja" style="--i:${i}"><g transform="translate(${x} ${y}) rotate(${rot}) scale(${s})">` +
    `<rect x="-52" y="-38" width="104" height="76" rx="6" fill="#FBF6EC" stroke="${TINTA}" stroke-width="${T}"/>` +
    `<text x="0" y="-16" text-anchor="middle" font-family="Cinzel, serif" font-weight="700" font-size="13" letter-spacing="1.5" fill="${TINTA}">${titular}</text>` +
    `<path d="M-40 -8h80" stroke="${TINTA}" stroke-width="2"/><rect x="-40" y="0" width="32" height="26" rx="2" fill="#F7E1B7"/><path d="M0 4h40M0 13h40M0 22h28" stroke="${TINTA}" stroke-opacity=".35" stroke-width="3.2" stroke-linecap="round"/>` +
    `</g></g>`;
}

// Pergamino desplegado (el plan).
export function pergamino(x, y, s = 1) {
  return `<g transform="translate(${x} ${y}) scale(${s})">` +
    `<path d="M-60 -40H60V40H-60Z" fill="#F7EBD3" stroke="${TINTA}" stroke-width="${T}"/>` +
    `<rect x="-70" y="-48" width="14" height="96" rx="7" fill="#D9B98A" stroke="${TINTA}" stroke-width="${T}"/><rect x="56" y="-48" width="14" height="96" rx="7" fill="#D9B98A" stroke="${TINTA}" stroke-width="${T}"/>` +
    `<path d="M-42 -22h50M-42 -8h70M-42 6h40" stroke="${TINTA}" stroke-opacity=".4" stroke-width="3.4" stroke-linecap="round"/>` +
    `<path class="esc-traza" pathLength="1" d="M-40 24Q-10 6 10 22T44 14" fill="none" stroke="${CORAL}" stroke-width="3.6" stroke-linecap="round" stroke-dasharray="1"/>` +
    `</g>`;
}

export const taza = (x, y, s = 1) =>
  `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-10 -14h20v18a6 6 0 0 1-6 6h-8a6 6 0 0 1-6-6z" fill="#FBF6EC" stroke="${TINTA}" stroke-width="2.8"/><path d="M10 -8a5 5 0 0 1 0 10" fill="none" stroke="${TINTA}" stroke-width="2.8"/><path d="M-3 -20q-3-5 0-9M4 -20q-3-5 0-9" fill="none" stroke="#B4A68E" stroke-width="2.4" stroke-linecap="round"/></g>`;

export const mesaAlta = (x, y, s = 1) =>
  `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 -6V-96M-30 -2h60" stroke="${TINTA}" stroke-width="6" stroke-linecap="round"/><rect x="-74" y="-104" width="148" height="12" rx="6" fill="#9A6A45" stroke="${TINTA}" stroke-width="${T}"/></g>`;

export const flecha = (d, clase = 'esc-traza') =>
  `<path class="${clase}" pathLength="1" d="${d}" fill="none" stroke="${TINTA}" stroke-width="3.2" stroke-dasharray="0.02 0.03" stroke-linecap="round"/>`;
