const db = require('quick.db')
const Discord = require('discord.js')
module.exports = {
    name: 'greet',
    aliases: [],
    run: async (client, message, args, prefix) => {
if (message.member.permissions.has("MANAGE_CHANNELS")){
let greets =  db.get(`${message.guild.id}.greets`)
if (greets) if (greets.includes(message.channel.id)) return message.reply("Le salon **"+message.channel.name+"** à déjà le Greet !")
db.push(`${message.guild.id}.greets`, message.channel.id)
message.reply("Le salon **"+message.channel.name+"** à bien le Greet d'actif !")
}
    }
}