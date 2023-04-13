const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js')
const fetch = require('node-fetch')
module.exports = {
    name: 'allserveur',
    aliases: [],
    run: async (client, message, args, prefix) => {
        const embed = new MessageEmbed()
        .setTitle(`Liste des serveurs du bot`)
        .setColor("BLUE")
        .setDescription( "** **" + client.guilds.cache
          .sort((a, b) => b.memberCount - a.memberCount)
          .map(r => r)
          .map((r, i) => `${r.name} : (${r.id})`)
            .slice(0, 60).join("\n")
            )
            .setFooter({text: "Demandé par : " + message.author.username + "", iconURL: message.author.displayAvatarURL({ dynamic: true })})
            message.reply({embeds: [embed]})
    }
}