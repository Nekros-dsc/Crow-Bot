const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch')
const banner = require('discord-banners-js')

module.exports = {
    name: 'banner',
    aliases: [],
    run: async (client, message, args, prefix) => {        
          

        let uid = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author

        const bannerurl = await banner(uid.id, process.env.TOKEN, { size : 4096 }) // in first you have to give the userid, after your bot token, and the size you want, i recommend you 4096

    const embed = new MessageEmbed()
    embed.setTitle(`**Bannière de : ${uid.tag}**`)
    embed.setFooter({text: message.author.username, iconURL: message.author.displayAvatarURL({ dynamic: true })})
   if (bannerurl) embed.setImage(bannerurl)
    embed.setColor('RANDOM')
    embed.setTimestamp()
    message.reply({embeds: [embed]}).catch(() => false)

    }
}
