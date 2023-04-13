const db = require('quick.db')
module.exports = async (client, oldPresence, newPresence) => {
    const oldMember = oldPresence
    const newMember = newPresence
    const guild = newMember.guild
    if (!guild) return;

    if (!oldMember || !newMember) return;
    if(oldMember.status !== newMember.status) return
    const roleId = db.get(`${oldMember.guild.id}.statusrole`);
    const message = db.get(`${oldMember.guild.id}.statusmessage`);
    const role = guild.roles.cache.get(roleId)
    if (!role) return;
    if (!message) return;
    let status = newMember.activities.map(a => a.state)
    const member = guild.members.cache.get(newMember.user.id);
    if (!member) return;
    if (status[0] && status[0].includes(message)) {
        member.roles.add(roleId, 'Status ajouté')
    } else {
        if (member.roles.cache.some((r) => r.id === roleId)) {
            member.roles.remove(roleId, 'Status retiré')
        }
      }


};  