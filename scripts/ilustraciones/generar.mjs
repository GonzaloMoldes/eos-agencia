// Genera las escenas ilustradas en src/assets/ilustraciones/*.svg.
// Se ejecuta en cada build (npm run build) y a mano con `npm run ilustraciones`.
// Para cambiar una escena se toca aquí, nunca el SVG generado.
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { personaje, REPARTO, reiniciarIds } from './personajes.mjs';
import * as A from './atrezo.mjs';

const SALIDA = join(dirname(fileURLToPath(import.meta.url)), '../../src/assets/ilustraciones');
const { aurora: AU, teo, dafne, leo, nika } = REPARTO;

// El encuadre recorta el aire de arriba y abajo: nada se dibuja fuera de y 24-534.
const svg = (etiqueta, cuerpo, vb = '0 24 720 510') =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" role="img" aria-label="${etiqueta}">${cuerpo}</svg>\n`;

// Adornos de fondo comunes: forma curva, cruces y zigzag.
const fondo = (variante = 0) =>
  A.mancha(Boolean(variante)) +
  A.cruz(variante ? 120 : 600, 200) + A.cruz(variante ? 640 : 110, 380, 0.8) + A.zigzag(variante ? 520 : 330, 250);

const ESCENAS = {
  // Inicio: la aurora sale detrás de un gráfico de columnas que crece.
  hero: () => svg(
    'Ilustración: al amanecer, una estratega señala un gráfico de columnas griegas que crece mientras su compañero revisa los datos en la tablet',
    fondo() +
    A.aurora(372, 470, 110) +
    A.suelo(360, 486, 660) +
    A.columna(300, 470, 120, 40, 'esc-crece') + A.columna(372, 470, 170, 40, 'esc-crece esc-c2') + A.columna(444, 470, 230, 40, 'esc-crece esc-c3') +
    A.coronaLaurel(444, 190, 0.9, 'esc-flota') +
    A.moneda(560, 170, '€', 0) + A.destello(250, 200, 0.7, 1) +
    personaje(AU, { x: 165, y: 486, mira: 1, brazoDel: 'senala', brazoTra: 'cadera', piernas: 'firme', respira: 0 }) +
    personaje(teo, { x: 590, y: 486, mira: -1, brazoDel: 'sostiene', brazoTra: 'reposo', respira: 0.8,
      accesorio: ({ mano }) => A.tablet(mano[0] - 4, mano[1] - 20, 0.85, 'grafico') }) +
    A.bocadillo({ x: 60, y: 60, texto: ['Primera página', 'en Google'], i: 0 }) +
    A.bocadillo({ x: 470, y: 50, texto: ['Y citados', 'por la IA'], i: 1, suave: true, cola: 'der' }),
  ),

  // Hub de servicios: el equipo despliega el plan.
  servicios: () => svg(
    'Ilustración: tres personas del equipo despliegan un pergamino con el plan junto a una columna y un ánfora',
    fondo(1) +
    A.suelo(360, 486, 660) +
    A.columna(84, 476, 250, 44) + A.anfora(660, 480, 1) +
    A.moneda(560, 140, '€', 0) +
    personaje(dafne, { x: 235, y: 486, mira: 1, brazoDel: 'sostiene', brazoTra: 'cadera', respira: 0.4 }) +
    A.pergamino(352, 330, 1) +
    personaje(AU, { x: 470, y: 486, mira: -1, brazoDel: 'sostiene', brazoTra: 'reposo', respira: 0 }) +
    personaje(nika, { x: 580, y: 490, mira: -1, brazoDel: 'cadera', brazoTra: 'reposo', escala: 0.86, respira: 1.1 }) +
    A.bocadillo({ x: 150, y: 70, texto: ['¿Por dónde', 'empezamos?'], i: 0 }) +
    A.bocadillo({ x: 410, y: 80, texto: ['Por lo que', 'más te urja'], i: 1, suave: true, cola: 'der' }),
  ),

  // SEO local: la tienda de barrio y el pin de Maps.
  'seo-local': () => svg(
    'Ilustración: la dueña de un comercio saluda en la puerta mientras un gran pin de mapa con una estrella marca su tienda y una consultora le enseña las reseñas en el móvil',
    fondo(1) +
    A.suelo(360, 486, 660) +
    A.tienda(270, 476, 1.05) +
    A.pin(270, 150, 0.95) +
    A.planta(640, 486, 0.8) +
    personaje(dafne, { x: 105, y: 488, mira: 1, brazoDel: 'saluda', brazoTra: 'cadera', respira: 0.3 }) +
    personaje(AU, { x: 530, y: 486, mira: -1, brazoDel: 'sostieneAlto', brazoTra: 'cadera', respira: 0,
      accesorio: ({ mano }) => A.tablet(mano[0] - 6, mano[1] - 18, 0.75, 'estrellas') }) +
    A.bocadillo({ x: 440, y: 70, texto: ['4,9 en', 'Google Maps'], i: 0, icono: 'estrella', cola: 'der' }),
  ),

  // SEO para YouTube: la pantalla con el play y la barra que avanza.
  'seo-youtube': () => svg(
    'Ilustración: una creadora con una claqueta y un consultor que señala una gran pantalla de vídeo cuya barra de reproducción avanza',
    fondo() +
    A.suelo(360, 486, 660) +
    A.pantallaVideo(380, 470, 1.05) +
    A.moneda(560, 130, '▶', 0) +
    personaje(nika, { x: 130, y: 486, mira: 1, brazoDel: 'sostieneAlto', brazoTra: 'reposo', respira: 0.5,
      accesorio: ({ mano }) => A.claqueta(mano[0] + 4, mano[1] - 8, 0.8, -8) }) +
    personaje(teo, { x: 615, y: 486, mira: -1, brazoDel: 'senala', brazoTra: 'cadera', respira: 0 }) +
    A.bocadillo({ x: 60, y: 60, texto: ['Tu vídeo,', 'el primero'], i: 0 }) +
    A.bocadillo({ x: 470, y: 50, texto: ['+ suscriptores'], i: 1, suave: true, cola: 'der' }),
  ),

  // Autoridad digital: el podio, la corona de laurel y la prensa.
  'autoridad-digital': () => svg(
    'Ilustración: una empresaria con corona de laurel celebra en lo alto de un podio de mármol mientras notas de prensa flotan a su alrededor',
    fondo(1) +
    A.aurora(360, 486, 90) +
    A.suelo(360, 490, 660) +
    A.podio(360, 482, 1) +
    personaje({ ...dafne, corona: true }, { x: 360, y: 372, mira: 1, brazoDel: 'arriba', brazoTra: 'arriba', piernas: 'firme', escala: 0.9, respira: 0 }) +
    personaje(AU, { x: 120, y: 488, mira: 1, brazoDel: 'senala', brazoTra: 'reposo', escala: 0.92, respira: 0.6 }) +
    personaje(leo, { x: 615, y: 488, mira: -1, brazoDel: 'saluda', brazoTra: 'reposo', escala: 0.92, respira: 1 }) +
    A.prensa(545, 160, 0.95, 8, 1, 'DIARIO') + A.prensa(235, 150, 0.8, -8, 2, 'REVISTA') +
    A.destello(470, 100, 0.7, 0) + A.destello(260, 110, 0.55, 2) +
    A.bocadillo({ x: 24, y: 34, texto: ['La IA', 'te recomienda'], i: 0, icono: 'sol' }),
  ),

  // Marketing automation: un flujo con nodos y un avión de papel que lo recorre.
  'marketing-automation': () => svg(
    'Ilustración: una consultora en su portátil activa un flujo automático que conecta email, chat, notificaciones y móvil hasta un cliente convertido',
    fondo(1) +
    A.suelo(360, 486, 660) +
    A.flecha('M190 300C240 300 250 200 300 200S380 140 430 140S520 170 560 170S640 200 650 240', 'esc-flujo') +
    A.flecha('M300 200C330 250 380 290 430 290S600 300 650 240', 'esc-flujo') +
    A.nodo(190, 300, 'persona', '#FFFFFF', 0) + A.nodo(300, 200, 'sobre', '#F07A45', 1) + A.nodo(430, 140, 'chat', '#2D3E8C', 2) +
    A.nodo(430, 290, 'campana', '#E7A93A', 2) + A.nodo(560, 170, 'movil', '#F07A45', 3) + A.nodo(650, 240, 'check', '#8A9A4B', 4) +
    `<g class="esc-avion" style="offset-path:path('M190 300C240 300 250 200 300 200S380 140 430 140S520 170 560 170S640 200 650 240')">${A.avionPapel(0, 0, 1, 0)}</g>` +
    personaje(AU, { x: 115, y: 486, mira: 1, brazoDel: 'teclea', brazoTra: 'teclea', respira: 0 }) +
    A.mesaAlta(196, 486, 1) + A.portatil(190, 382, 0.9, -1) + A.taza(240, 380, 1) +
    personaje(leo, { x: 640, y: 488, mira: -1, brazoDel: 'saluda', brazoTra: 'reposo', escala: 0.74, respira: 0.7 }) +
    A.bocadillo({ x: 30, y: 60, texto: ['Flujo activado'], i: 0, icono: 'check' }),
  ),

  // CRM: el pipeline en una pizarra y la tarjeta que pasa a «ganado».
  'consultoria-crm': () => svg(
    'Ilustración: un consultor señala una pizarra con el pipeline de ventas donde una oportunidad pasa a ganada, ante un cliente con un café',
    fondo() +
    A.suelo(360, 486, 660) +
    A.pipeline(360, 482, 1) +
    A.moneda(520, 150, '€', 0) +
    personaje(teo, { x: 92, y: 486, mira: 1, brazoDel: 'senala', brazoTra: 'cadera', respira: 0 }) +
    personaje(leo, { x: 600, y: 486, mira: -1, brazoDel: 'sostiene', brazoTra: 'reposo', respira: 0.8,
      accesorio: ({ mano }) => A.taza(mano[0] - 2, mano[1] - 4, 1.1) }) +
    A.bocadillo({ x: 40, y: 60, texto: ['Oportunidad', 'ganada'], i: 0, icono: 'check' }) +
    A.bocadillo({ x: 470, y: 60, texto: ['¿Y la siguiente?'], i: 1, suave: true, cola: 'der' }),
  ),

  // 404: el analista busca con el pergamino.
  '404': () => svg(
    'Ilustración: un consultor mira desconcertado un pergamino junto a una columna',
    fondo() +
    A.suelo(360, 486, 560) +
    A.columna(480, 476, 150, 44) + A.planta(560, 486, 0.7) +
    personaje(teo, { x: 290, y: 486, mira: 1, brazoDel: 'sostiene', brazoTra: 'sostiene', respira: 0,
      accesorio: ({ mano }) => A.pergamino(mano[0] - 20, mano[1] - 14, 0.6) }) +
    A.bocadillo({ x: 190, y: 90, texto: ['¿Y esta página?'], i: 0 }),
  ),
};

mkdirSync(SALIDA, { recursive: true });
for (const [nombre, dibujar] of Object.entries(ESCENAS)) {
  reiniciarIds(`esc-${nombre}`);
  writeFileSync(join(SALIDA, `${nombre}.svg`), dibujar());
}
console.log(`ilustraciones: ${Object.keys(ESCENAS).length} escenas en src/assets/ilustraciones/`);
