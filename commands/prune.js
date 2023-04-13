const db = require('quick.db')
const Discord = require('discord.js')
module.exports = {
    name: 'prune',
    aliases: [],
    run: async (client, message, args, prefix) => {
        if (message.member.permissions.has("MANAGE_MESSAGES")){
            let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
            if (!member) return message.reply(`❌ Aucune personne trouvée !`).catch(() => false)
            if (!args[1]) return message.reply("🗣️ Veuillez indiquer un nombre entre `1` et `100` inclus !")
            let amount = 0;
            if (args[1] === '1' || args[1] === '0') {
                amount = 1;
            }
            else {
                amount = args[1]
                if (amount > 100) {
                  amount = 100;
                }
            }
           message.channel.messages.fetch({limit: amount})
            .then((messages) => {
          var filtered = messages.filter(m => m.author.id === member.user.id)
          message.channel.bulkDelete(filtered, true)  
          .then(async() => {  
            let slt = await message.channel.send(`✅ Le robot a supprimé \`${amount}\` messages avec succès !`)
            setTimeout(() => {
               if (slt) slt.delete().catch(() => false)
            }, 5000);
    }).catch(() => false)
            })
    }
}
}