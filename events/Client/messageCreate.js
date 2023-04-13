const db = require('quick.db')

module.exports = async (client, message) => {
    if (!message.guild) return;
    if (message.author.bot) return;

  let prefix = db.get(`${message.guild.id}.prefix`)
  if (!prefix) prefix = process.env.prefix

      if (message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) {
        return message.channel.send(`Mon prefix sur ce serveur est : \`${prefix}\``).catch(() => { })
      }
    if (!message.content.startsWith(prefix)) return;
    if (!message.guild.me.permissions.has("ADMINISTRATOR")) return message.channel.send(":x: **Je n'ai pas la permission `ADMINISTRATEUR`**").catch(() => false)
  
    let messageArray = message.content.split(" ");
    const args1 = message.content.slice(prefix.length).split(/ +/);
    const commandName = args1.shift().toLowerCase();
    let args = messageArray.slice(1);
    let command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
  
    if (command) command.run(client, message, args, prefix);
  
  
  }