const { MessageEmbed } = require('discord.js');
const db = require('quick.db')

module.exports = async (client, member) => {
    const guild = member.guild
    if (!guild) return;
    let logs = guild.channels.cache.get(db.get(`logs_${guild.id}`))
if (db.get(`kick_${member.guild.id}`) === true){
    const action = await guild.fetchAuditLogs({ limit: 1, type: "MEMBER_KICK" }).then(async (audit) => audit.entries.first()) 

    if (!action.executor) return;
    if (action.executor.id){
        if (action.executor.id === client.user.id) return;
        await guild.members.fetch(action.executor.id).then((member) => {
            member.kick(`antikick`).catch(() => false)
            let protected = new MessageEmbed()
            .setTitle("**LOGS**")
            .setDescription(`L'anti-kick vien d'être detectée une personne à kick un membre.
            La personne est <@${action.executor.id}>`)
            .setColor("RED")
           if (logs) logs.send({embeds: [protected]}).catch(() => false)
        })
    }
}
}