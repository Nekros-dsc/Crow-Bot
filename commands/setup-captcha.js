const db = require('quick.db')
const Discord = require('discord.js')
const { truncate } = require('fs')
module.exports = {
    name: 'setup-captcha',
    aliases: [],
    run: async (client, message, args, prefix) => {
        if (message.member.permissions.has("ADMINISTRATOR")){
            let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
            let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1])
            if (!role) return message.reply("Veuillez écrire comme ça : `"+prefix+"setup-captcha on #salon @rôle` !")
            if (!channel) return message.reply("Veuillez écrire comme ça : `"+prefix+"setup-captcha on #salon @rôle` !")

            if (channel && role){
                message.reply("✅ Votre salon de captcha a bien été mis sur <#"+channel.id+">")
                db.set(`captchachannel_${message.guild.id}`, channel.id)
                db.set(`captcharole_${message.guild.id}`, role.id)
                db.set(`captcha_${message.guild.id}`, true)
            }
        }
    }
}