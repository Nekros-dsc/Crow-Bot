const db = require('quick.db')
const Discord = require('discord.js')
module.exports = {
    name: 'set-status',
    aliases: [],
    run: async (client, message, args, prefix) => {
        if (message.member.permissions.has("ADMINISTRATOR")){
            let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0])
            let status = args.slice(1).join(' ')
            if (!role) return message.reply(`Veuillez écrire comme ça : \`${prefix}set-statut @rôle <status>\``)
            if (!status) return message.reply(`Veuillez écrire comme ça : \`${prefix}set-statut @rôle <status>\``)

            db.set(`${message.guild.id}.statusrole`, role.id)
            db.set(`${message.guild.id}.statusmessage`, status)

            const embed = new Discord.MessageEmbed()
            .setTitle("Set Status")
            .addFields(
                {name: "**Rôle**", value: `<@${role.id}>`, inline: true},             
                {name: "**Status**", value: `${status}`, inline: true},
            )
            .setFooter({text: message.author.username, iconURL: message.author.displayAvatarURL({ dynamic: true })})
            .setTimestamp()
            message.reply({embeds: [embed]})
        }
    }
}