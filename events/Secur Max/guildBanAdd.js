const { MessageEmbed } = require('discord.js');
const db = require('quick.db')

module.exports = async (client, member) => {
    const guild = member.guild
    if (!guild) return;
    let logs = guild.channels.cache.get(db.get(`logs_${guild.id}`))

if (db.get(`bans_${guild.id}`) === true){
    const action = await guild.fetchAuditLogs({ limit: 1, type: "MEMBER_BAN_ADD" }).then(async (audit) => audit.entries.first()) 

    if (!action.executor) return;
    if (action.executor.id){
        if (action.executor.id === client.user.id) return;
        await guild.members.fetch(action.executor.id).then((member) => {
            member.kick(`Antiban`).catch(() => false)
            let protected = new MessageEmbed()
            .setTitle("**LOGS**")
            .setDescription(`L'anti-ban vien d'être detectée une personne à banni un membre.
            La personne est <@${action.executor.id}>`)
            .setColor("RED")
           if (logs) logs.send({embeds: [protected]}).catch(() => false)
        })
    }
    guild.members.unban(member, `Antiban`)
}
}