const ms = require('ms')

module.exports = {
    name: 'unban',
    aliases: [],
    run: async (client, message, args, prefix, color) => {
        if (message.member.permissions.has("BAN_MEMBERS")){
            let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if (!member) return message.reply(`❌ Aucune personne trouvée !`)

        
        member.unban(`Unbanni par ${message.author.tag} pour ${raison}`).then(() => message.reply(`<@${member.user.id}> a été débanni`).catch(() => false)).catch(() => message.reply("Impossible de debannir ce membre").catch(() => false))
        }
    }
}