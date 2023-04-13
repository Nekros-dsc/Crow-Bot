const db = require('quick.db')
const Discord = require('discord.js')
module.exports = {
    name: 'invite-guild',
    aliases: [],
    run: async (client, message, args, prefix) => {
        let invite = await message.channel
   .createInvite({
    maxAge: 0,
    maxUses: 0,
   })

await message.delete().catch(() => false)
message.author.send(`**Invite de __${message.guild.name} :__**\n\n${invite}`)
    }
}