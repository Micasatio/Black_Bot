let handler = async (m, { conn }) => {
m.reply(`
*Hola usuario*
_Estado del Bot_
Bot activo: ✅
Bot uso público: ✅
handler.command = /^(estado)$/i
module.exports = handler
