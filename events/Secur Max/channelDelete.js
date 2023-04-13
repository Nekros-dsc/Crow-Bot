const { MessageEmbed } = require('discord.js');
const db = require('quick.db')

module.exports = async (client, channel) => {
    const guild = channel.guild
    if (!guild) return;
if (db.get(`channels_${guild.id}`) === true){
    let logs = guild.channels.cache.get(db.get(`logs_${guild.id}`))

    const action = await guild.fetchAuditLogs({ limit: 1, type: "CHANNEL_DELETE" }).then(async (audit) => audit.entries.first()) 

    if (!action.executor) return;
    if (action.executor.id){
        if (action.executor.id === client.user.id) return;
        await guild.members.fetch(action.executor.id).then((member) => {
            member.kick(`Antichannel`).catch(() => false)
            let protected = new MessageEmbed()
            .setTitle("**LOGS**")
            .setDescription(`L'anti-Channel vien d'être detectée une personne à suprimée un channel non autorisée.
            La personne est <@${action.executor.id}>`)
            .setColor("RED")
           if (logs) logs.send({embeds: [protected]}).catch(() => false)
        })
    }
    channel.clone({
        name: channel.setName(channel.name),
        permissions: channel.permissionOverwrites,
        type: channel.setType(channel.type),
        topic: channel.setTopic(channel.topic),
        nsfw: channel.setNSFW(channel.nsfw),
        bitrate: channel.setBitrate(channel.bitrate),
        userLimi: channel.setUserLimit(channel.userLimit),
        rateLlimitPerUser: channel.setRateLimitPerUser(channel.rateLimitPerUser),
        position: channel.setPosition(channel.rawPosition),
        reason: `Antichannel`
      })
}
}