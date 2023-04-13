const db = require('quick.db')
const { joinVoiceChannel } = require('@discordjs/voice');
const Discord = require('discord.js')
module.exports = {
    name: 'leave',
    aliases: [],
    run: async (client, message, args, prefix) => {
        if (message.member.permissions.has("ADMINISTRATOR")){
            if (!args[0]) return message.reply("Je suis pas dessus bb !")
           const guild = client.guilds.cache.get(args[0])
           if (!guild) return message.reply("Je suis pas dessus bb !")
           await message.reply("Serveur quitté !")
           await guild.leave().catch(() => false)
        }
    }
}