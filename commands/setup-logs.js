const db = require('quick.db')
const Discord = require('discord.js')
module.exports = {
    name: 'setup-logs',
    aliases: [],
    run: async (client, message, args, prefix) => {
        if (message.member.permissions.has("ADMINISTRATOR")){
            if (!args[0]) return message.reply("Veuillez écrire comme ça :`"+prefix+"setup-logs #salon` !")
            let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
            if (!channel) return message.reply("Veuillez écrire comme ça :`"+prefix+"setup-logs #salon` !")

            if(channel) {
                  db.set(`logs_${message.guild.id}`, channel.id)
                message.channel.send(`✅ Votre salon de logs a bien été mis sur <#${channel.id}>`)
            }
        }
        }
}