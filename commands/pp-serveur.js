const db = require('quick.db')
const Discord = require('discord.js')
module.exports = {
    name: 'pp-serveur',
    aliases: [],
    run: async (client, message, args, prefix) => {

if(!message.guild.iconURL({  dynamic: true })) return message.channel.send("Il n'y a pas d'icone sur ce serveur")

 const Embed = new Discord.MessageEmbed()
Embed.setTitle(`**Voici la pp de : ${message.guild.name} :**`);
Embed.setImage(`${message.guild.iconURL({  dynamic: true, size: 4096 })}`);
Embed.setColor("RANDOM")
.setFooter({text:  message.author.username, iconURL: message.author.displayAvatarURL({ dynamic: true })})
.setTimestamp()
message.channel.send({embeds: [Embed]}) 
}
    }
