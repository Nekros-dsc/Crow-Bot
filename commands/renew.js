const db = require('quick.db')
const Discord = require('discord.js')
module.exports = {
    name: 'renew',
    aliases: ["nuke"],
    run: async (client, message, args, prefix) => {
        if (message.member.permissions.has("MANAGE_CHANNELS")){
            const channel = message.channel
            if(channel === message.channel) {
                try {
                    let ee =  await channel.clone({
                        name: channel.name,
                        permissions: channel.permissionsOverwrites,
                        type: channel.type,
                        topic: channel.withTopic,
                        nsfw: channel.nsfw,
                        birate: channel.bitrate,
                        userLimit: channel.userLimit,
                        rateLimitPerUser: channel.rateLimitPerUser,
                        permissions: channel.withPermissions,
                        position: channel.rawPosition,
                        reason:  `Salon recréé par ${message.author.tag} (${message.author.id})`
                    })
                    channel.delete() 
                    ee.send(`Le Channel a été re-créé`)
                } catch (error) {
                    return;
                }
            }
            }
        }
    }