const db = require('quick.db')
const Discord = require('discord.js')
module.exports = {
    name: 'say',
    aliases: [],
    run: async (client, message, args, prefix) => {
if (message.member.permissions.has("MANAGE_MESSAGES")){
    if (!args[0]) return await message.reply("Vous devez spécifier le message que je dois envoyer !") && await message.delete().catch(() => false)
    await message.delete().catch(() => false)
    message.channel.send(args.slice(0).join(' ')).catch(() => false)
}
    }
}