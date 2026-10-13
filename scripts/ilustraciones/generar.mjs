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

const ESCENAS = {
  // Inicio: la aurora sale detrás de un gráfico de columnas que crece.
  hero: () => svg(
    'Ilustración: al amanecer, una estratega señala un gráfico de columnas griegas que crece mientras su compañero revisa los datos en la tablet',
    A.aurora(372, 470, 120) +
    A.suelo(360, 486, 660) +
    A.columna(300, 470, 120, 40, 'esc-crece') + A.columna(372, 470, 170, 40, 'esc-crece esc-c2') + A.columna(444, 470, 230, 40, 'esc-crece esc-c3') +
    A.coronaLaurel(444, 190, 0.9, 'esc-flota') +
    A.destello(520, 150, 0.9, 0) + A.destello(240, 210, 0.6, 1) + A.destello(610, 250, 0.7, 2) +
    personaje(AU, { x: 160, y: 486, mira: 1, brazoDel: 'senala', brazoTra: 'cadera', respira: 0 }) +
    personaje(teo, { x: 580, y: 486, mira: -1, brazoDel: 'sostiene', brazoTra: 'reposo', respira: 0.8,
      accesorio: ({ mano }) => A.tablet(mano[0] - 6, mano[1] - 22, 0.9, 'grafico') }) +
    A.bocadillo({ x: 40, y: 72, texto: 'Primera página en Google', i: 0 }) +
    A.bocadillo({ x: 396, y: 56, texto: 'Y citados por la IA', i: 1, icono: 'sol', color: '#E7A93A', cola: 'der' }),
  ),

  // Hub de servicios: el equipo despliega el plan.
  servicios: () => svg(
    'Ilustración: tres personas del equipo despliegan un pergamino con el plan junto a una columna y un ánfora',
    A.suelo(360, 486, 660) +
    A.columna(84, 476, 250, 44) + A.anfora(668, 480, 1) +
    A.destello(560, 130, 0.8, 0) + A.destello(170, 150, 0.6, 1) +
    personaje(dafne, { x: 230, y: 486, mira: 1, brazoDel: 'sostiene', brazoTra: 'cadera', respira: 0.4 }) +
    A.pergamino(352, 330, 1) +
    personaje(AU, { x: 470, y: 486, mira: -1, brazoDel: 'sostiene', brazoTra: 'reposo', respira: 0 }) +
    personaje(nika, { x: 586, y: 492, mira: -1, brazoDel: 'cadera', brazoTra: 'reposo', escala: 0.8, respira: 1.1 }) +
    A.bocadillo({ x: 200, y: 66, texto: '¿Por dónde empezamos?', i: 0, icono: 'sol' }),
  ),

  // SEO local: la tienda de barrio y el pin de Maps.
  'seo-local': () => svg(
    'Ilustración: la dueña de un comercio saluda en la puerta mientras un gran pin de mapa con una estrella marca su tienda y una consultora le enseña las reseñas en el móvil',
    A.suelo(360, 486, 660) +
    A.tienda(250, 476, 1.05) +
    A.pin(250, 150, 0.95) +
    A.destello(110, 140, 0.7, 0) + A.destello(390, 110, 0.8, 1) +
    personaje(dafne, { x: 110, y: 488, mira: 1, brazoDel: 'saluda', brazoTra: 'cadera', escala: 0.92, respira: 0.3 }) +
    personaje(AU, { x: 540, y: 486, mira: -1, brazoDel: 'sostieneAlto', brazoTra: 'cadera', respira: 0,
      accesorio: ({ mano }) => A.tablet(mano[0] - 8, mano[1] - 20, 0.8, 'estrellas') }) +
    A.bocadillo({ x: 420, y: 90, texto: '4,9 en Google Maps', i: 0, icono: 'estrella', cola: 'der' }),
  ),

  // SEO para YouTube: la pantalla con el play y el contador que sube.
  'seo-youtube': () => svg(
    'Ilustración: una creadora con una claqueta y un consultor que señala una gran pantalla de vídeo cuya barra de reproducción avanza',
    A.suelo(360, 486, 660) +
    A.pantallaVideo(380, 470, 1.05) +
    A.destello(560, 120, 0.8, 0) + A.destello(170, 170, 0.6, 1) +
    personaje(nika, { x: 130, y: 486, mira: 1, brazoDel: 'sostieneAlto', brazoTra: 'reposo', respira: 0.5,
      accesorio: ({ mano }) => A.claqueta(mano[0] + 2, mano[1] - 10, 0.9, -8) }) +
    personaje(teo, { x: 610, y: 486, mira: -1, brazoDel: 'senala', brazoTra: 'cadera', respira: 0 }) +
    A.bocadillo({ x: 120, y: 64, texto: 'Tu vídeo, el primero', i: 0 }) +
    A.bocadillo({ x: 440, y: 60, texto: '+ suscriptores', i: 1, icono: 'sol', color: '#E7A93A', cola: 'der' }),
  ),

  // Autoridad digital: el podio, la corona de laurel y la prensa.
  'autoridad-digital': () => svg(
    'Ilustración: una empresaria con corona de laurel celebra en lo alto de un podio de mármol mientras notas de prensa flotan a su alrededor',
    A.aurora(360, 486, 90) +
    A.suelo(360, 490, 660) +
    A.podio(360, 482, 1) +
    personaje({ ...dafne, corona: true }, { x: 360, y: 374, mira: 1, brazoDel: 'arriba', brazoTra: 'arriba', piernas: 'firme', escala: 0.9, respira: 0 }) +
    personaje(AU, { x: 120, y: 488, mira: 1, brazoDel: 'senala', brazoTra: 'reposo', escala: 0.9, respira: 0.6 }) +
    personaje(leo, { x: 610, y: 488, mira: -1, brazoDel: 'saluda', brazoTra: 'reposo', escala: 0.9, respira: 1 }) +
    A.prensa(540, 150, 0.95, 8, 1, 'DIARIO') + A.prensa(170, 170, 0.85, -8, 2, 'REVISTA') +
    A.destello(470, 90, 0.8, 0) + A.destello(255, 100, 0.6, 2) +
    A.bocadillo({ x: 230, y: 36, texto: 'La IA te recomienda', i: 0, icono: 'sol' }),
  ),

  // Marketing automation: un flujo con nodos y un avión de papel que lo recorre.
  'marketing-automation': () => svg(
    'Ilustración: una consultora en su portátil activa un flujo automático que conecta email, chat, notificaciones y móvil hasta un cliente convertido',
    A.suelo(360, 486, 660) +
    A.flecha('M190 300C240 300 250 200 300 200S380 140 430 140S520 170 560 170S640 200 650 240', 'esc-flujo') +
    A.flecha('M300 200C330 250 380 290 430 290S600 300 650 240', 'esc-flujo') +
    A.nodo(190, 300, 'persona', '#FBF6EC', 0) + A.nodo(300, 200, 'sobre', '#F7E1B7', 1) + A.nodo(430, 140, 'chat', '#F7E1B7', 2) +
    A.nodo(430, 290, 'campana', '#F7E1B7', 2) + A.nodo(560, 170, 'movil', '#F7E1B7', 3) + A.nodo(650, 240, 'check', '#CFE3B4', 4) +
    `<g class="esc-avion" style="offset-path:path('M190 300C240 300 250 200 300 200S380 140 430 140S520 170 560 170S640 200 650 240')">${A.avionPapel(0, 0, 1, 0)}</g>` +
    personaje(AU, { x: 120, y: 486, mira: 1, brazoDel: 'teclea', brazoTra: 'teclea', respira: 0 }) +
    A.mesaAlta(196, 486, 1) + A.portatil(190, 382, 0.9, -1) + A.taza(240, 380, 1) +
    personaje(leo, { x: 640, y: 488, mira: -1, brazoDel: 'saluda', brazoTra: 'reposo', escala: 0.72, respira: 0.7 }) +
    A.bocadillo({ x: 26, y: 70, texto: 'Flujo activado', i: 0 }),
  ),

  // CRM: el pipeline en una pizarra y la tarjeta que pasa a «ganado».
  'consultoria-crm': () => svg(
    'Ilustración: un consultor señala una pizarra con el pipeline de ventas donde una oportunidad pasa a ganada, ante un cliente con un café',
    A.suelo(360, 486, 660) +
    A.pipeline(330, 482, 1) +
    A.destello(560, 120, 0.8, 0) + A.destello(110, 160, 0.6, 1) +
    personaje(teo, { x: 108, y: 486, mira: 1, brazoDel: 'senala', brazoTra: 'cadera', respira: 0 }) +
    personaje(leo, { x: 590, y: 486, mira: -1, brazoDel: 'sostiene', brazoTra: 'reposo', respira: 0.8,
      accesorio: ({ mano }) => A.taza(mano[0] - 4, mano[1] - 6, 1.2) }) +
    A.bocadillo({ x: 420, y: 60, texto: 'Oportunidad ganada', i: 0, cola: 'der' }),
  ),

  // 404: el analista busca con el pergamino al revés.
  '404': () => svg(
    'Ilustración: un consultor mira desconcertado un pergamino junto a una columna rota',
    A.suelo(360, 486, 560) +
    A.columna(470, 476, 150, 44) +
    personaje(teo, { x: 290, y: 486, mira: 1, brazoDel: 'sostiene', brazoTra: 'sostiene', respira: 0,
      accesorio: ({ mano }) => A.pergamino(mano[0] - 20, mano[1] - 14, 0.6) }) +
    A.bocadillo({ x: 180, y: 90, texto: '¿Y esta página?', i: 0, icono: null }),
  ),
};

mkdirSync(SALIDA, { recursive: true });
for (const [nombre, dibujar] of Object.entries(ESCENAS)) {
  reiniciarIds(`esc-${nombre}`);
  writeFileSync(join(SALIDA, `${nombre}.svg`), dibujar());
}
console.log(`ilustraciones: ${Object.keys(ESCENAS).length} escenas en src/assets/ilustraciones/`);
