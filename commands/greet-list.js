const db = require('quick.db')
const Discord = require('discord.js')
module.exports = {
    name: 'greet-list',
    aliases: [],
    run: async (client, message, args, prefix) => {
if (message.member.permissions.has("MANAGE_CHANNELS")){
const own = db.get(`${message.guild.id}.greets`)
        const embed = new Discord.MessageEmbed()
.setTitle("**Salons des greet :**")
.setDescription(!own ? "Aucun":own .map((user, i) => `<#${user}>`).slice(0, 30).join("\n"))
.setColor("RANDOM")
message.reply({embeds: [embed]}).catch(() => false)
    }
}
}