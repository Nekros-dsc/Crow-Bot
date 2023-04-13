const db = require('quick.db')
const Discord = require('discord.js')
const { truncate } = require('fs')
module.exports = {
    name: 'secur-off',
    aliases: [],
    run: async (client, message, args, prefix) => {
        if (message.member.permissions.has("ADMINISTRATOR")){
                if(db.get(`secur_${message.guild.id}`) === null) return message.channel.send(`👻 La secur est déjà désactivée`)
                  db.set(`secur_${message.guild.id}`, null)
                message.channel.send(`✅ La secur est maintenant désactivée`)
        }
        }
}