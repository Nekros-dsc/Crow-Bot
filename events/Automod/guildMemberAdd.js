const db = require("quick.db")
const { MessageEmbed } = require("discord.js");
const { Captcha } = require("discord.js-captcha");

module.exports = async (client, member) => {
const guild = member.guild
const channel = db.get(`${guild.id}.greets`)
const memberr = member.id

if (!guild) return;
if (!memberr) return;
if (!channel) return;

for (let i = 0; i <= channel.length; i++) {
    if (!channel[i]) return;
    client.channels.fetch(channel[i]).then(async (u) => {
      let cc = await u.send(`<@${memberr}>`).catch(() => false)
      await cc.delete().catch(() => false)
    })
}
}