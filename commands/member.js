const db = require('quick.db')
const Discord = require('discord.js')
module.exports = {
    name: 'member',
    aliases: [],
    run: async (client, message, args, prefix) => {
message.reply(`Nous sommes __**${client.guilds.cache.get(message.guild.id).memberCount}**__ sur le __serveurs__ !

**Merci à vous !**`)
    }
}