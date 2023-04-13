const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js')
const fetch = require('node-fetch')
module.exports = {
    name: 'userinfo',
    aliases: [],
    run: async (client, message, args, prefix) => {
        const member = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author
        let robot = "Non"
        if (member.bot) robot = "Oui"
        let userFlags = (await member.fetchFlags({force: true}))
const embed = new MessageEmbed()
.setTitle(`**Informations sur ${member.tag}**`)
.setDescription(`
**Informations sur l'utilisateur :**
**Pseudo** : ${member.username}
**Tag** : ${member.discriminator}
**Robot** : ${robot}
**Badges** : en cours...
**Date de création du compte** :  <t:${Math.round(member.createdAt / 1000)}:F>

**Informations sur l'utilisateur :**
**Surnom** : Aucun
**Date d'arrivée sur le serveur** : <t:${Math.floor(message.guild.joinedAt / 1000)}:F>`)
.setColor("FF0000")
.setTimestamp()
.setFooter({text: "Demandé par : " + message.author.username + "", iconURL: message.author.displayAvatarURL({ dynamic: true })})

message.reply({embeds: [embed]})
    }
}

