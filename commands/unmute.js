const db = require('quick.db')
const Discord = require('discord.js')
const ms = require('ms')
module.exports = {
    name: 'unmute',
    aliases: [],
    run: async (client, message, args, prefix) => {
        if (message.member.permissions.has("MUTE_MEMBERS")){
            let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
            if (!member) return message.reply(`❌ Aucune personne trouvée !`).catch(() => false)

            if (member){
                if(!member.isCommunicationDisabled()) return message.reply("❌ Cette personne n'est pas mute !")
                member.timeout(0).then(() => message.reply(`<@${member.user.id}> a été __unmute__`).catch(() => false))
                .catch(() => message.reply("Je n'ai pas pu __unmute__ ce membre").catch(() => false))                
            }
        }
    }
}