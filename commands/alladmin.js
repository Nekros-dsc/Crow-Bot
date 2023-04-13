const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch')
module.exports = {
    name: 'alladmin',
    aliases: [],
    run: async (client, message, args, prefix) => {
        if (message.member.permissions.has("ADMINISTRATOR")){
            var filtre = message.guild.members.cache.filter(member => member.permissions.has("ADMINISTRATOR") && !member.user.bot)
            const embed = new MessageEmbed()
            .setTitle(`**Liste des Admins du serveur :**`)
            .setDescription("** **" + filtre
            .map(r => r)
            .map((m,i) => `[${i+1}] - **${m.user.username}** : *(${m.user.id})*\n\n`))
            .setColor("RED")
            .setFooter({text: "Demandé par : " + message.author.username + "", iconURL: message.author.displayAvatarURL({ dynamic: true })})
            
            message.reply({embeds: [embed]})
        }
    }
}