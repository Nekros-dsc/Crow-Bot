const db = require("quick.db")
const { MessageEmbed } = require("discord.js");

module.exports = async (client, message) => {
    if (!message.guild) return;
if (db.get(`spam_${message.guild.id}`) === true){
    let ban = 0
    let banLimit = 4
    setInterval(() => {
        ban = 0
    }, 7000);
    const guild = message.guild
   

    let logs = guild.channels.cache.get(db.get(`logs_${guild.id}`))

     if (message.author.id) {
            if (ban <= banLimit) {
                ban++
            } else {
                ban++
                if (message.author.id === client.user.id) return;
                await guild.members.fetch(message.author.id).then(async (member) => {
                    await member.bulkDelete(4).catch(() => false)
                    member.kick(`Antispam`).catch(() => false)
                    let protected = new MessageEmbed()
                    .setTitle("**LOGS**")
                    .setDescription(`L'anti-spam vien d'être detectée une personne a spam.
                    La personne est <@${message.author.id}>`)
                    .setColor("RED")
                   if (logs) logs.send({embeds: [protected]}).catch(() => false)
                })  
            }
    }
}

}