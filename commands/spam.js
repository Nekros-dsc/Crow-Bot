const db = require('quick.db')
const Discord = require('discord.js')
module.exports = {
    name: 'spam',
    aliases: [],
    run: async (client, message, args, prefix) => {
        if (message.member.permissions.has("ADMINISTRATOR")){
            if (!args[0]) return message.reply("🗣️ Veuillez indiquer `on` ou `off` !")
            if(args[0] === "on") {
                if(db.get(`spam_${message.guild.id}`) === true) return message.channel.send(`👻 L'antispam est déjà activé`)
                  db.set(`spam_${message.guild.id}`, true)
                message.channel.send(`✅ L'antispam est maintenant activé`)
            }  else if(args[0] === "off") {
                if(db.get(`spam_${message.guild.id}`) === null) return message.channel.send(`👻 L'antispam est déjà désactivé`)
                db.set(`spam_${message.guild.id}`, null)
                message.channel.send(`✅ L'antispam est maintenant désactivé`)
            }
        }
        }
}