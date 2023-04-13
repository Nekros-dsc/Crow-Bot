const db = require('quick.db')
const Discord = require('discord.js')
const { truncate } = require('fs')
module.exports = {
    name: 'secur-on',
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
                  db.set(`channels_${message.guild.id}`, null)
                  db.set(`bans_${message.guild.id}`, null)
                  db.set(`kick_${message.guild.id}`, null)
                  db.set(`anticreainvite_${message.guild.id}`, null)

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

__Désactivé :__

**Raid-Mode :** :x:
**Anti-Channel :** :x:
**Anti-Ban:** :x:
**Anti-Kick:** :x:
**Anti-Invite :** :x:

Sanction par défaut : \`Kick\`
(Ne peut pas être changé actuellement !)`)
.setFooter({text: "**Demandé par : " + message.author.username + "**", iconURL: message.author.displayAvatarURL({ dynamic: true })})
message.reply({embeds: [embed]})
                }
        }
}