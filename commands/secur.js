const db = require('quick.db')
const Discord = require('discord.js')
const { truncate } = require('fs')
module.exports = {
    name: 'secur',
    aliases: [],
    run: async (client, message, args, prefix) => {
        if (message.member.permissions.has("ADMINISTRATOR")){
            return message.reply("Veuillez indiquer: `secur-off` / `secur-on` / `secur-max` !")
        }
        }
}