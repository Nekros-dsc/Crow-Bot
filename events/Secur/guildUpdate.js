const db = require("quick.db")
const request = require('request')
const { MessageEmbed } = require("discord.js");

module.exports = async (client, oldGuild, newGuild) => {
    const guild = oldGuild
    if (db.get(`antiguildupdate_${guild.id}`) === true){

        let logs = guild.channels.cache.get(db.get(`logs_${guild.id}`))

    
        const action = await guild.fetchAuditLogs({ limit: 1, type: "GUILD_UPDATE" }).then(async (audit) => audit.entries.first()) 

        if (action.executor.id){
            if (action.executor.id === client.user.id) return; 
            await guild.members.fetch(action.executor.id).then(async (member) => {
                update(oldGuild, newGuild)
                member.kick(`Anti Guild Update`).catch(() => false)
            })
        }

        async function update(oldGuild, newGuild) {
        
            if (oldGuild.name === newGuild.name) {
        
            } else {
                await newGuild.setName(oldGuild.name)
        
            }
            if (oldGuild.iconURL({ dynamic: true }) === newGuild.iconURL({ dynamic: true })) {
        
            } else {
                await newGuild.setIcon(oldGuild.iconURL({ dynamic: true }))
        
            }
            if (oldGuild.bannerURL() === newGuild.bannerURL()
            ) {
        
            } else {
                await newGuild.setBanner(oldGuild.bannerURL({ dynamic: true}))
        
            }
            if (oldGuild.position === newGuild.position
            ) {
        
            } else {
                await newGuild.setChannelPositions([{ channel: oldGuild.id, position: oldGuild.position }])
        
            }
        
            if (oldGuild.systemChannel === newGuild.systemChannel
            ) {
        
            } else {
                await newGuild.setSystemChannel(oldGuild.systemChannel)
        
            }
            if (oldGuild.systemChannelFlags === newGuild.systemChannelFlags
            ) {
        
            } else {
                await newGuild.setSystemChannelFlags(oldGuild.systemChannelFlags)
        
        
            }
            if (oldGuild.verificationLevel === newGuild.verificationLevel
            ) {
        
            } else {
                await newGuild.setVerificationLevel(oldGuild.verificationLevel)
        
        
            }
            if (oldGuild.widget === newGuild.widget
            ) {
        
            } else {
                await newGuild.setWidget(oldGuild.widget)
        
        
            }
            if (oldGuild.splashURL === newGuild.splashURL
            ) {
        
            } else {
                await newGuild.setSplash(oldGuild.splashURL)
        
        
            }
            if (oldGuild.rulesChannel === newGuild.rulesChannel
            ) {
        
            } else {
                await newGuild.setRulesChannel(oldGuild.rulesChannel)
        
        
            }
            if (oldGuild.publicUpdatesChannel === newGuild.publicUpdatesChannel
            ) {
        
            } else {
                await newGuild.setPublicUpdatesChannel(oldGuild.publicUpdatesChannel)
        
        
            }
            if (oldGuild.defaultMessageNotifications === newGuild.defaultMessageNotifications
            ) {
        
            } else {
                await newGuild.setDefaultMessageNotifications(oldGuild.defaultMessageNotifications)
        
        
            }
            if (oldGuild.afkChannel === newGuild.afkChannel
            ) {
        
            } else {
                await newGuild.setAFKChannel(oldGuild.afkChannel)
        
        
            }
            if (oldGuild.region === newGuild.region
            ) {
        
            } else {
                await newGuild.setRegion(oldGuild.region)
        
        
            }
        
            if (oldGuild.afkTimeout === newGuild.afkTimeout
            ) {
        
            } else {
                await newGuild.setAFKTimeout(oldGuild.afkTimeout)
        
            }
            if (oldGuild.vanityURLCode === newGuild.vanityURLCode
            ) {
                const settings = {
                    url: `https://discord.com/api/v6/guilds/${oldGuild.id}/vanity-url`,
                    body: {
                        code: oldGuild.vanityURLCode
                    },
                    json: true,
                    method: 'PATCH',
                    headers: {
                        "Authorization": `Bot ${process.env.TOKEN}`
                    }
                };
                await request(settings, (err, res, body) => {
                    if (err) {
                        return;
                    }
                });
            }
        }
    }
}
