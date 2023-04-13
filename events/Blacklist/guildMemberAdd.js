const db = require("quick.db")
const { MessageEmbed } = require("discord.js");
const { Captcha } = require("discord.js-captcha");

module.exports = async (client, member) => {
    const guild = member.guild
    if (!guild) return;

    if (member.id === client.user.id) return;

    if (db.get(`${member.id}.bl`) === true){
        await member.ban({reason: `Blacklist`}).catch(() => false)
    }
}