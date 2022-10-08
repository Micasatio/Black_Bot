import * as fs from 'fs'
import db from '../lib/database.js'

export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, isROwner }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (m.isGroup)
       return !1
    if (!m.message)
       return !0
    let chat = db.data.chats[m.chat]
    let bot = db.data.settings[this.user.jid] || {}
    if (bot.antiPrivado && !isOwner && !isROwner) {
    	await conn.sendMessage(m.chat, { text: `*[ ! ] El chat por privado esta prohibido [ ! ]*\nMi dueño por si necesita información : wa.me/${OwnerNum}\n\n_Adios..._`, mentions: [m.sender] }, { quoted: {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "51995386439-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": NombreDelBot, 'jpegThumbnail': fs.readFileSync('./multimedia/imagenes/press-f.jpg')}}} }) 
    setTimeout(() => { 
    	this.updateBlockStatus(m.chat, 'block') 
    }, 3000)
    }
    return !1
}
