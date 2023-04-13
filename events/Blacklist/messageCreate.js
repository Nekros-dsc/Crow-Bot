const db = require("quick.db")
const { MessageEmbed } = require("discord.js");
const { Captcha } = require("discord.js-captcha");

module.exports = async (client, message) => {
    const guild = message.guild
    if (!guild) return;

    if (message.author.id === client.user.id) return;

    if (db.get(`${message.author.id}.bl`) === true){
        const member = message.guild.members.cache.get(message.author.id)
        if (!member) return;
        message.channel.send(':warning: Vous êtes **GBAN** vous allez être banni dans __5 secondes !__')
        setTimeout(async () => {
            await member.ban({reason: `Blacklist`}).catch(() => false)
            message.delete().catch(() => false)
        }, 5000);
    }
}