const { MessageEmbed } = require('discord.js');
const db = require('quick.db')

module.exports = async (client, oldChannel, newChannel) => {
    const guild = oldChannel.guild
    if (!guild) return;
    let logs = guild.channels.cache.get(db.get(`logs_${guild.id}`))

if (db.get(`channels_${guild.id}`) === true){
    const action = await guild.fetchAuditLogs({ limit: 1, type: "CHANNEL_UPDATE" }).then(async (audit) => audit.entries.first()) 

    if (!action.executor) return;
    if (action.executor.id){
        if (action.executor.id === client.user.id) return;
        await guild.members.fetch(action.executor.id).then((member) => {
            member.kick(`Antichannel`).catch(() => false)
            let protected = new MessageEmbed()
            .setTitle("**LOGS**")
            .setDescription(`L'anti-Channel vien d'être detectée une personne à modifié un channel non autorisée.
            La personne est <@${action.executor.id}>`)
            .setColor("RED")
           if (logs) logs.send({embeds: [protected]}).catch(() => false)
        })
    }
    newChannel.edit({
        name: oldChannel.setName(oldChannel.name),
        permissions: oldChannel.permissionOverwrites,
        type: oldChannel.setType(oldChannel.type),
        topic: oldChannel.setTopic(oldChannel.topic),
        nsfw: oldChannel.setNSFW(oldChannel.nsfw),
        bitrate: oldChannel.setBitrate(oldChannel.bitrate),
        userLimi: oldChannel.setUserLimit(oldChannel.userLimit),
        rateLlimitPerUser: oldChannel.setRateLimitPerUser(oldChannel.rateLimitPerUser),
        position: oldChannel.setPosition(oldChannel.rawPosition),
        reason: `Antichannel`
      })
      
}
}