const db = require('quick.db')
const Discord = require('discord.js')
module.exports = {
    name: 'pp-random',
    aliases: [],
    run: async (client, message, args, prefix) => {
await message.reply("Recherche d'un avatar aléatoire ...")

const member = client.users.cache.random()

const embed = new Discord.MessageEmbed()
.setTitle(`**Avatar de : __${member.tag}__**`)
.setImage(member.displayAvatarURL())
.setColor("RANDOM")
.setTimestamp()
.setFooter({text: "Demandé par : " + message.author.username + "", iconURL: message.author.displayAvatarURL({ dynamic: true })})
message.reply({embeds: [embed]}).catch(() => false)
    }
}