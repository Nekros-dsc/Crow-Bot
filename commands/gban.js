const db = require('quick.db')
const Discord = require('discord.js')
module.exports = {
    name: 'gban',
    aliases: [],
    run: async (client, message, args, prefix) => {
        if (message.member.permissions.has("BAN_MEMBERS")){
            let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
            if (!member) return message.reply(`Veuillez mentionner un utilisateur ou fournir un ID valide !`)

                if (member.user.id === message.author.id) return message.reply("Veuillez mentionner un utilisateur ou fournir un ID valide !")
                if (member.user.id === client.user.id) return message.reply("Veuillez mentionner un utilisateur ou fournir un ID valide !")
                    message.reply(`<@${member.user.id}> a bien été ajouté à **blacklist** !`)
                    db.set(`${member.user.id}.bl`, true)
        }
    }
}