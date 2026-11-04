// Marcado mínimo para el copy de src/data: **negrita** y [enlace](/ruta/ o https://…).
// El texto es nuestro, pero se escapa igualmente antes de convertir el marcado.
const escapar = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const ENLACE = /\[([^\]]+)\]\((\/[^)\s]*|https:\/\/[^)\s]+)\)/g;
export const md = (s: string) => escapar(s)
  .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  .replace(ENLACE, (_, t, u) => u.startsWith('/') ? `<a href="${u}">${t}</a>` : `<a href="${u}" target="_blank" rel="noopener">${t}</a>`);
// Para el schema: el mismo texto sin marcado.
export const plano = (s: string) => s.replace(/\*\*(.+?)\*\*/g, '$1').replace(ENLACE, '$1');
