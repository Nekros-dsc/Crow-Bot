const { MessageEmbed } = require('discord.js')
const db = require('quick.db')

module.exports = async (client, channel) => {
    const guild = channel.guild
    if (!guild) return;
    let logs = guild.channels.cache.get(db.get(`logs_${guild.id}`))

if (db.get(`channels_${guild.id}`) === true){
    const action = await guild.fetchAuditLogs({ limit: 1, type: "CHANNEL_CREATE" }).then(async (audit) => audit.entries.first()) 

    if (!action.executor) return;
    if (action.executor.id){
        if (action.executor.id === client.user.id) return;
        await guild.members.fetch(action.executor.id).then((member) => {
            member.kick(`Antichannel`).catch(() => false)
            let protected = new MessageEmbed()
            .setTitle("**LOGS**")
            .setColor("RED")
            .setDescription(`L'anti-Channel create vien d'être detectée une personne à crée un channel non autorisée.\nLa personne est <${action.executor.id}>`)
            if (logs) logs.send({embeds: [protected]}).catch(() => false)
        })
    }
    channel.delete(`Antichannel`).catch(() => false)
}
}