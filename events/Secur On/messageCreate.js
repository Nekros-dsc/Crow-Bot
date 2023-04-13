const db = require("quick.db")
const { MessageEmbed } = require("discord.js");

module.exports = async (client, message) => {
    if (!message.guild) return;
if (db.get(`massping_${message.guild.id}`) === true){
    let ban = 0
    let banLimit = 2
    setInterval(() => {
        ban = 0
    }, 20000);
    const guild = message.guild
   

    let logs = guild.channels.cache.get(db.get(`logs_${guild.id}`))

    if (message.content.includes("@everyone" || "@here")){
     if (message.author.id) {
            if (ban <= banLimit) {
                ban++
            } else {
                ban++
                if (message.author.id === client.user.id) return;
                await guild.members.fetch(message.author.id).then((member) => {
                    member.kick(`Anti-mass-ping`).catch(() => false)
                    let protected = new MessageEmbed()
                    .setTitle("**LOGS**")
                    .setDescription(`L'anti-mass-mentions vien d'être detectée une personne a ping à plusieurs reprises.
                    La personne est <@${message.author.id}>`)
                    .setColor("RED")
                   if (logs) logs.send({embeds: [protected]}).catch(() => false)
                })  
            }
    }
}
}

}