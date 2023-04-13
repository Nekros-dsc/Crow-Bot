const db = require('quick.db')
const Discord = require('discord.js')
module.exports = {
    name: 'antikick',
    aliases: [],
    run: async (client, message, args, prefix) => {
        if (message.member.permissions.has("ADMINISTRATOR")){
            if (!args[0]) return message.reply("🗣️ Veuillez indiquer `on` ou `off` !")
            if(args[0] === "on") {
                if(db.get(`kick_${message.guild.id}`) === true) return message.channel.send(`👻 L'antikick est déjà activé`)
                  db.set(`kick_${message.guild.id}`, true)
                message.channel.send(`✅ L'antikick est maintenant activé`)
            }  else if(args[0] === "off") {
                if(db.get(`kick_${message.guild.id}`) === null) return message.channel.send(`👻 L'antikick est déjà désactivé`)
                db.set(`kick_${message.guild.id}`, null)
                message.channel.send(`✅ L'antikick est maintenant désactivé`)
            }
        }
        }
}