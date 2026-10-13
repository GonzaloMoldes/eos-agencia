// Marcado mínimo para el copy de src/data: **negrita**. El texto es nuestro,
// pero se escapa igualmente antes de convertir el marcado.
const escapar = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
export const md = (s: string) => escapar(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
// Para el schema: el mismo texto sin marcado.
export const plano = (s: string) => s.replace(/\*\*(.+?)\*\*/g, '$1');
