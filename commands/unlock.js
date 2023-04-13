const db = require('quick.db')
const Discord = require('discord.js')
module.exports = {
    name: 'unlock',
    aliases: [],
    run: async (client, message, args, prefix) => {
        if (message.member.permissions.has("MANAGE_CHANNELS")){
            let channel = message.channel

            if (channel){
                channel.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: null,
                    SPEAK: null,
                    ADD_REACTIONS: null 
                  })
                  message.reply("Le salon à bien été **ré-Ouvert** !")
            }
        }
    }
}