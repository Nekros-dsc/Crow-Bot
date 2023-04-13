const db = require('quick.db')
const Discord = require('discord.js')
module.exports = {
    name: 'serveurinfo',
    aliases: [],
    run: async (client, message, args, prefix) => {

        
        let afk = message.guild.afkChannelID
        if (afk) afk = `<#${message.guild.afkChannelID}>`
        if (!afk) afk = "Aucun"

        let rules = message.guild.rulesChannelID
        if (rules) rules = `<#${message.guild.rulesChannelID}>`
        if (!rules) rules = "Aucun"

        let desc = message.guild.description
        if (!desc) desc = "Aucune"
        const embed = new Discord.MessageEmbed()
        .setColor("FF0000")
        .setDescription(`**Informations sur le serveur**
        **Nom** : ${message.guild.name}
        **Propriétaire** : <@${message.guild.ownerId}>
        **ID** : ${message.guild.id}
        **Description** : ${desc}
        **Boosts** : ${message.guild.premiumSubscriptionCount} (${message.guild.premiumTier})
        **Date de création** : <t:${Math.round(message.guild.createdAt / 1000)}:F>
        
        **Informations sur les stats**
        **Salons** : ${message.guild.channels.cache.size}
        **Rôles** :  ${message.guild.roles.cache.size}
        **Emojis** :  ${message.guild.emojis.cache.size}
        **Membres** : ${client.guilds.cache.get(message.guild.id).memberCount}
        
        **Informations sur les salons spéciaux**
        **AFK** : ${afk}
        **Règles** : ${rules}`)
        .setTimestamp()
        .setFooter({text: message.author.username, iconURL: message.author.displayAvatarURL({ dynamic: true })})
        if (message.guild.iconURL({  dynamic: true })) embed.setThumbnail(`${message.guild.iconURL({  dynamic: true })}`)
        message.reply({embeds: [embed]});
    }
}