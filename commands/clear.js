const db = require('quick.db')
const Discord = require('discord.js')
module.exports = {
    name: 'clear',
    aliases: [],
    run: async (client, message, args, prefix) => {
        if (message.member.permissions.has("MANAGE_MESSAGES")){
            if (!args[0]) return message.reply("🗣️ Veuillez indiquer un nombre entre `0` et `100` !")
            let amount = 0;
            if (message.content.split(' ')[1] === '1' || message.content.split(' ')[1] === '0') {
                amount = 1;
            }
            else {
                amount = message.content.split(' ')[1]
                if (amount > 100) {
                  amount = 100;
                }
            }
            await message.channel.bulkDelete(amount, true).then(async (_message) => {
               let slt = await message.channel.send(`✅ <@${message.author.id}> a supprimé \`${amount}\` messages avec succès !`)
                    setTimeout(() => {
                       if (slt) slt.delete().catch(() => false)
                    }, 5000);
                })
            .catch(() => false)
        }
    }
}