const db = require('quick.db')
const Discord = require('discord.js')
module.exports = {
    name: 'ping',
    aliases: [],
    run: async (client, message, args, prefix) => {
let embed = new Discord.MessageEmbed()
.setDescription(`🏓 Mon ping est de : **${client.ws.ping}ms**`)
.setColor("RANDOM")
.setFooter({text: "Demandé par : " + message.author.username + "", iconURL: message.author.displayAvatarURL({ dynamic: true })})
message.reply({embeds: [embed]})
    }
}