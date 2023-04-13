const db = require('quick.db')
const Discord = require('discord.js')
module.exports = {
    name: 'antiguildupdate',
    aliases: [],
    run: async (client, message, args, prefix) => {
        if (message.member.permissions.has("ADMINISTRATOR")){
            if (!args[0]) return message.reply("🗣️ Veuillez indiquer `on` ou `off` !")
            if(args[0] === "on") {
                if(db.get(`antiguildupdate_${message.guild.id}`) === true) return message.channel.send(`👻 L'antiguildupdate est déjà activé`)
                  db.set(`antiguildupdate_${message.guild.id}`, true)
                message.channel.send(`✅ L'antiguildupdate est maintenant activé`)
            }  else if(args[0] === "off") {
                if(db.get(`antiguildupdate_${message.guild.id}`) === null) return message.channel.send(`👻 L'antiguildupdate est déjà désactivé`)
                db.set(`antiguildupdate_${message.guild.id}`, null)
                message.channel.send(`✅ L'antiguildupdate est maintenant désactivé`)
            }
        }
        }
}