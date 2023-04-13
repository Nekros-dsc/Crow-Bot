const db = require('quick.db')
const Discord = require('discord.js')
module.exports = {
    name: 'antilien',
    aliases: [],
    run: async (client, message, args, prefix) => {
        if (message.member.permissions.has("ADMINISTRATOR")){
            if (!args[0]) return message.reply("🗣️ Veuillez indiquer `on` ou `off` !")
            if(args[0] === "on") {
                if(db.get(`link_${message.guild.id}`) === true) return message.channel.send(`👻 L'antilien est déjà activé`)
                  db.set(`link_${message.guild.id}`, true)
                message.channel.send(`✅ L'antilien est maintenant activé`)
            }  else if(args[0] === "off") {
                if(db.get(`link_${message.guild.id}`) === null) return message.channel.send(`👻 L'antilien est déjà désactivé`)
                db.set(`link_${message.guild.id}`, null)
                message.channel.send(`✅ L'antilien est maintenant désactivé`)
            }
        }
    }
}