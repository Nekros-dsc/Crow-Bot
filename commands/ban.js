const db = require('quick.db')
const Discord = require('discord.js')
module.exports = {
    name: 'ban',
    aliases: [],
    run: async (client, message, args, prefix) => {
        if (message.member.permissions.has("BAN_MEMBERS")){
            let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
            if (!member) member = await message.guild.members.fetch(args[0]).catch(() => {return message.reply(`❌ Aucune personne trouvée !`)})

            if (member){
                if (member.user.id === message.author.id) return message.reply("❌ Vous ne pouvez pas vous bannir vous-même !")
                let raison = args.slice(1).join(' ')
                if (!raison) raison = "Aucune raison donnée"
                await member.ban(`Banni par ${message.author.tag} pour ${raison}`).then(() => {
                    message.reply(`✅ ${member.user.username}#${member.user.tag} a été banni par ${message.author.tag} pour la raison ${raison}`)
                })
            }
        }
    }
}