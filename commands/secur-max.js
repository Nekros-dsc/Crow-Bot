const db = require('quick.db')
const Discord = require('discord.js')
const { truncate } = require('fs')
module.exports = {
    name: 'secur-max',
    aliases: [],
    run: async (client, message, args, prefix) => {
        if (message.member.permissions.has("ADMINISTRATOR")){
                  db.set(`bots_${message.guild.id}`, true)
                  db.set(`spam_${message.guild.id}`, true)
                  db.set(`link_${message.guild.id}`, true)
                  db.set(`massbans_${message.guild.id}`, true)
                  db.set(`masskick_${message.guild.id}`, true)
                  db.set(`massping_${message.guild.id}`, true)
                  db.set(`antiguildupdate_${message.guild.id}`, true)
                  db.set(`channels_${message.guild.id}`, true)
                  db.set(`bans_${message.guild.id}`, true)
                  db.set(`kick_${message.guild.id}`, true)
                  db.set(`anticreainvite_${message.guild.id}`, true)

                  let embed = new Discord.MessageEmbed()
                  .setTitle("Liste des Sécurité :")
                  .setDescription(`__Activé :__

**Anti-Bot :** :white_check_mark:
**Anti-Spam :** :white_check_mark:
**Anti-Lien :** :white_check_mark:
**Anti-Masse-Ban :** :white_check_mark:
**Anti-Masse-Kick :** :white_check_mark:
**Anti-Masse-Mention :** :white_check_mark:
**Anti-Guild-Update :** :white_check_mark:
**Raid-Mode :** :white_check_mark:
**Anti-Channel :** :white_check_mark:
**Anti-Ban:** :white_check_mark:
**Anti-Kick:** :white_check_mark:
**Anti-Invite :** :white_check_mark:

Sanction par défaut : \`Kick\`
(Ne peut pas être changé actuellement !)`)
.setFooter({text: "**Demandé par : " + message.author.username + "**", iconURL: message.author.displayAvatarURL({ dynamic: true })})
message.reply({embeds: [embed]})
                }
        }
}