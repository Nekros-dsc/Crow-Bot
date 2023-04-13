const db = require('quick.db')

module.exports = {
    name: 'prefix',
    aliases: ["setprefix"],
    run: async (client, message, args, prefix) => {

if (message.member.permissions.has("ADMINISTRATOR")){
if (!args[0]) return message.reply("🗣️ Veuillez indiquer un préfixe !").catch(() => false)
message.reply(`Le préfix à été changé par : \`${prefix}\` à \`${args[0]}\` !`).then(() => db.set(`${message.guild.id}.prefix`, args[0])).catch(() => false)
}
    }
}