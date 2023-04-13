const { MessageEmbed } = require('discord.js');
const db = require('quick.db')

module.exports = async (client, invite) => {
    const guild = invite.guild
    if (!guild) return;
    let logs = guild.channels.cache.get(db.get(`logs_${guild.id}`))

if (db.get(`anticreainvite_${invite.guild.id}`) === true){
if (invite.inviterId === client.user.id) return;
if (invite.deletable) invite.delete().catch(() => false)
let protected = new MessageEmbed()
.setTitle("**LOGS**")
.setDescription(`L'anti-crea-invite vien d'être detectée une personne à créé une invitation.
La personne est <@${invite.inviterId}>`)
.setColor("RED")
if (logs) logs.send({embeds: [protected]}).catch(() => false)
}
}