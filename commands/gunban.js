const db = require('quick.db')
const Discord = require('discord.js')
module.exports = {
    name: 'gunban',
    aliases: [],
    run: async (client, message, args, prefix) => {
        if (message.member.permissions.has("BAN_MEMBERS")){
            let member = args[0]
            if (!member) return message.reply(`Veuillez mentionner un utilisateur ou fournir un ID valide !`)
            if (db.get(`${member}.bl`) === null) return message.reply(`Veuillez mentionner un utilisateur ou fournir un ID valide !`)

            if (member){
                if (member === message.author.id) return message.reply("Veuillez mentionner un utilisateur ou fournir un ID valide !")
                if (member === client.user.id) return message.reply("Veuillez mentionner un utilisateur ou fournir un ID valide !")
                    message.reply(`<@${member}> a bien été retiré de la **blacklist** !`)
                    db.set(`${member}.bl`, null)
            }
        }
    }
}