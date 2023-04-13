const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js')
const fetch = require('node-fetch')
module.exports = {
    name: 'stat',
    aliases: [],
    run: async (client, message, args, prefix) => {
const embed = new MessageEmbed()
.setDescription(`Le bot est présent sûr : **__${client.guilds.cache.size} serveurs !__**`)
.setColor("RED")
message.reply({embeds: [embed]})
    }
}