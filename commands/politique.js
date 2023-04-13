const db = require('quick.db')
const Discord = require('discord.js')
module.exports = {
    name: '8ball',
    aliases: [],
    run: async (client, message, args, prefix) => {
if (!args[0]) return message.reply(":x: Question incorrecte")

let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member

let replies = ["Mélenchon !", "Poutine !", "Valérie Pécresse !", "Biden !", "Zemmour !", "Fabien Roussel !", "FTNL !", "Elexyr22 !", "Trump !"];
	
let result = Math.floor((Math.random() * replies.length));

const embed = new Discord.MessageEmbed()
.setDescription(`<@${member.user.id}> vote pour : **${replies[result]}**`)
message.reply(`La réponse est : ||${replies[result]}||`).catch(() => false)
    }
}