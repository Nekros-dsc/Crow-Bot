const db = require("quick.db")
const { MessageEmbed } = require("discord.js");

module.exports = async (client, member) => {
if (db.get(`antiraid_${member.guild.id}`) === true){
    await member.send("Le serveur est actuellement en mode raid").then(() => member.kick(`Raid Mode Activé`).catch(() => false)).catch(() => false)
}
}