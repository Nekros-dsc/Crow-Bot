const db = require('quick.db')
const Discord = require('discord.js')
module.exports = {
    name: 'pp',
    aliases: [],
    run: async (client, message, args, prefix) => {

        const member = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author

 const Embed = new Discord.MessageEmbed()
Embed.setTitle(`**Voici la pp de : ${member.tag} !**`);
Embed.setImage(`${member.displayAvatarURL({  dynamic: true, size: 4096 })}`);
Embed.setColor("RANDOM")
.setFooter({text:  message.author.username, iconURL: message.author.displayAvatarURL({ dynamic: true })})
.setTimestamp()
message.channel.send({embeds: [Embed]}) 
}
    }
