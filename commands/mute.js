const db = require('quick.db')
const Discord = require('discord.js')
const ms = require('ms')
module.exports = {
    name: 'mute',
    aliases: [],
    run: async (client, message, args, prefix) => {
        if (message.member.permissions.has("MUTE_MEMBERS")){
            let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
            if (!member) return message.reply(`❌ Aucune personne trouvée !`).catch(() => false)

                const temps = args[1]
                if (!temps) return message.reply("🗣️ Veuillez un indiquer une durée !").catch(() => false)
                if(isNaN(ms(temps))) return message.reply("❌ Le temps indiqué est invalide !").catch(() => false)
                let raison = args.slice(2).join(" ")
                if (!raison) raison = "Aucune raison donnée"
                member.timeout({timeout: ms(temps), reason: raison}).then(() => message.reply(`<@${member.user.id}> a été __mute__ pour \`${raison}\``).catch(() => false))
                .catch(() => message.reply("Je n'ai pas pu __mute__ ce membre").catch(() => false))                
        }
    }
}