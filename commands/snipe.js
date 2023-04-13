const Discord = require("discord.js");
const db = require('quick.db')
function slm(str) {
if(str === 1) return `●`
if(str === 2) return `●●`
if(str === 3) return `●●●`
if(str === 4) return `●●●●`
if(str === 5) return `●●●●●`
if(str === 6) return `●●●●●●`
if(str === 7) return `●●●●●●●`
if(str === 8) return `●●●●●●●●`
if(str === 9) return `●●●●●●●●●`
if(str === 10) return`●●●●●●●●●●`
if(str === 11) return`●●●●●●●●●●●`
if(str === 12) return`●●●●●●●●●●●●`
if(str === 13) return`●●●●●●●●●●●●●`
if(str === 14) return`●●●●●●●●●●●●●●`
if(str === 15) return`●●●●●●●●●●●●●●●`
if(str === 16) return`●●●●●●●●●●●●●●●●`
if(str === 17) return`●●●●●●●●●●●●●●●●●`
if(str === 18) return`●●●●●●●●●●●●●●●●●●`
if(str === 19) return`●●●●●●●●●●●●●●●●●●●`
if(str === 20) return`●●●●●●●●●●●●●●●●●●●●`

}

module.exports = {
  name: 'snipe',
  aliases: [],
  run: async (client, message, args, prefix, color) => {


    const msg = client.snipes.get(message.channel.id)
    if(!msg) return message.reply("Aucun message enregistré.")
let ttt = msg.content

if(msg.content.includes("discord.gg/")) ttt = msg.content.replace(msg.content.split("gg/")[1], slm(msg.content.split("gg/")[1].length ||0))

// ●●●●●●●●
    const embed = new Discord.MessageEmbed()
    .setTitle(`Message supprimé de ${msg.author.tag}`)
    .setAuthor(msg.author.username , msg.author.displayAvatarURL({dynamic : true }))
    .setDescription(ttt)
    .setColor("FF0000")
    
message.reply({embeds: [embed]}) 

}


}