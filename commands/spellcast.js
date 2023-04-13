const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js')
const fetch = require('node-fetch')
module.exports = {
    name: 'spellcast',
    aliases: [],
    run: async (client, message, args, prefix) => {
        if (!message.member.voice.channel) return message.reply(":x: Tu dois être dans un salon vocal")
        const channel = message.member.voice.channel
        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "852509694341283871",
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${process.env.TOKEN}`,
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(invite => {
            const embed = new MessageEmbed()
            embed.setDescription(`***Spell Cast :***`)
            embed.setColor("000001")

            const row = new MessageActionRow()
            .addComponents(
            new MessageButton()
            .setLabel('Cliquez ici pour lancer votre activité')
            .setURL(`https://discord.gg/${invite.code}`)
            .setStyle('LINK'),
            );


            message.reply({
                embeds: [embed], components: [row]
            });
        })
    }
}