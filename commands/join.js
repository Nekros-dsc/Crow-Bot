const db = require('quick.db')
const { joinVoiceChannel } = require('@discordjs/voice');
const Discord = require('discord.js')
module.exports = {
    name: 'join',
    aliases: [],
    run: async (client, message, args, prefix) => {
if (!message.member.voice.channel) return message.reply("Vous devez etre dans un salon voc")
const channel = message.guild.channels.cache.get(message.member.voice.channel.id)
if(!channel) return console.log("no channel")
const connection = joinVoiceChannel({
	channelId: channel.id,
	guildId: message.channel.guild.id,
	adapterCreator: message.channel.guild.voiceAdapterCreator,
});
connection.on(VoiceConnectionStatus.Ready, () => {
message.reply("✅ Connecté au Vocal !")
})
}
}