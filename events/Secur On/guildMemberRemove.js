const db = require("quick.db")
const { MessageEmbed } = require("discord.js");

module.exports = async (client, member) => {
if (db.get(`masskick_${member.guild.id}`) === true){
    let ban = 0
    let banLimit = 2
    setInterval(() => {
        ban = 0
    }, 10000);
    const guild = member.guild
   

    let logs = guild.channels.cache.get(db.get(`logs_${guild.id}`))

    
    const action = await guild.fetchAuditLogs({ limit: 1, type: "MEMBER_KICK" }).then(async (audit) => audit.entries.first()) 

     if (action.executor.id) {
            if (ban <= banLimit) {
                ban++
            } else {
                ban++
                if (action.executor.id === client.user.id) return;
                await guild.members.fetch(action.executor.id).then((member) => {
                    member.kick(`Antikick`).catch(() => false)
                    let protected = new MessageEmbed()
                    .setTitle("**LOGS**")
                    .setDescription(`L'anti-kick vien d'être detectée une personne à kick des membres.
                    La personne est <@${action.executor.id}>`)
                    .setColor("RED")
                   if (logs) logs.send({embeds: [protected]}).catch(() => false)
                })  
            }
    }
}

}