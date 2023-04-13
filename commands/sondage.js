const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'sondage',
    aliases: [],
    run: async (client, message, args, prefix, color) => {
        if (message.member.permissions.has("MANAGE_MESSAGES")){
            await message.delete().catch(() => false)
            if (!args[0]) return message.channel.send("Veuillez fournir une question !").catch(() => false)
            const embed = new MessageEmbed()
            .setTitle(args.slice(0).join(' '))
            .setColor("RANDOM")
            .setDescription(`**Oui :** :white_check_mark: 
            
            **Non :** :x:`)
            .setFooter({text: "Sondage par : " + message.author.username + "", iconURL: message.author.displayAvatarURL({ dynamic: true })})

            let slt = await message.channel.send({embeds: [embed]})

            await slt.react("✅")
            await slt.react("❌")
        }
    }
}