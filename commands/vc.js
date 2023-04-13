const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js')
const fetch = require('node-fetch')
module.exports = {
    name: 'vc',
    aliases: [],
    run: async (client, message, args, prefix) => {
message.reply(`🎙️ | Membre en vocal: **${message.guild.members.cache.filter(m => m.voice.channel).size}** (**${client.guilds.cache.get(message.guild.id).memberCount} membres**)`)
    }
}