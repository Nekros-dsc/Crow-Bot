const db = require('quick.db')
const Discord = require('discord.js')
const ms = require('ms')
module.exports = {
    name: 'set-bio',
    aliases: [],
    run: async (client, message, args, prefix) => {
        if (!args[0]) return message.reply("Vous devez me dire le texte que vous souhaitez !").catch(() => false)
    message.reply("Votre __statut__ viens d'être **update** ! *(Il apparait au bout de 30 secondes max)*")    
    db.push(`status`, args.slice(0).join(' '))    
    }
}