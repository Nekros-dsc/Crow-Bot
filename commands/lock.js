const db = require('quick.db')
const Discord = require('discord.js')
module.exports = {
    name: 'lock',
    aliases: [],
    run: async (client, message, args, prefix) => {
        if (message.member.permissions.has("MANAGE_CHANNELS")){
            const channel = message.channel

            if (channel){
                channel.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: false,
                    SPEAK: false,
                    ADD_REACTIONS: false 
                  })
                  message.reply("Le salon à bien été **Fermé** !")
            }
        }
    }
}