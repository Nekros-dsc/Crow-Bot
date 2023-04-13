const db = require('quick.db')
const Discord = require('discord.js')
module.exports = {
    name: '8ball',
    aliases: [],
    run: async (client, message, args, prefix) => {
if (!args[0]) return message.reply(":x: Question incorrecte")

let replies = ["Oui !", "Non !", "Probablement que oui !", "Probablement que non !", "Peut-être !"];
	
let result = Math.floor((Math.random() * replies.length));

message.reply(`La réponse est : ||${replies[result]}||`).catch(() => false)
    }
}