const db = require('quick.db')
const Discord = require('discord.js')
module.exports = {
    name: 'gay',
    aliases: [],
    run: async (client, message, args, prefix) => {

let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member

let replies = ["⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛ 0% !", "🏳️‍🌈⬛⬛⬛⬛⬛⬛⬛⬛⬛ 10%", "🏳️‍🌈🏳️‍🌈⬛⬛⬛⬛⬛⬛⬛⬛ 20% !", "🏳️‍🌈🏳️‍🌈🏳️‍🌈⬛⬛⬛⬛⬛⬛⬛ 30%", "🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈⬛⬛⬛⬛⬛⬛ 40% !", "🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈⬛⬛⬛⬛⬛ 50%", "🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈⬛⬛⬛⬛ 60% !", "🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈⬛⬛⬛ 70%", "🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈⬛⬛ 80%", "🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈⬛ 90%", "🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈 100%",, "🏳️‍🌈⬛⬛⬛⬛⬛⬛⬛⬛⬛ 10%", "🏳️‍🌈🏳️‍🌈⬛⬛⬛⬛⬛⬛⬛⬛ 20% !", "🏳️‍🌈🏳️‍🌈🏳️‍🌈⬛⬛⬛⬛⬛⬛⬛ 30%", "🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈⬛⬛⬛⬛⬛⬛ 40% !", "🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈⬛⬛⬛⬛⬛ 50%", "🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈⬛⬛⬛⬛ 60% !", "🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈⬛⬛⬛ 70%", "🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈⬛⬛ 80%", "🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈⬛ 90%", "🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈 100%",];
	
let result = Math.floor((Math.random() * replies.length));

const embed = new Discord.MessageEmbed()
.setDescription(`Niveau de **Gay** de __<@${member.user.id}>__ !`)
.addFields(
    {name: `**Gay à :**`, value: `${replies[result]}`}
)
.setFooter({text: `Demandé par : ${message.author.tag}`})
.setColor("RANDOM")

message.reply({embeds: [embed]}).catch(() => false)
    }
}