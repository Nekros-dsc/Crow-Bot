const { MessageEmbed } = require('discord.js');
const db = require('quick.db')

module.exports = async (client, message) => {
    const guild = message.guild
    if (!guild) return;
    let logs = guild.channels.cache.get(db.get(`logs_${guild.id}`))

if (db.get(`link_${message.guild.id}`) === true){
if (message.content.includes("discord.gg" || "discord.com/invite" || "discordapp.com/invite")){
    if (message.member.permissions.has("ADMINISTRATOR")) return;
    if (message.author.id === client.user.id) return;
message.delete().catch(() => false)
let protected = new MessageEmbed()
.setTitle("**LOGS**")
.setDescription(`L'anti-invite vien d'être detectée une personne a envoyé une invitation non autorisée.
La personne est <@${action.executor.id}>`)
.setColor("RED")
if (logs) logs.send({embeds: [protected]}).catch(() => false)
}
}
}