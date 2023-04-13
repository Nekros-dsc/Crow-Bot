const {Client, Intents, Collection} = require('discord.js')
const fs = require("fs")
const db = require('quick.db')
const ms = require("ms")
require('dotenv').config()

const client = new Client({intents: new Intents(32767)})

client.commands = new Collection()
client.aliases = new Collection()
client.snipes = new Map()


const loadEvents = (dir = "./events/") => {
  fs.readdirSync(dir).forEach(dirs => {
    const events = fs.readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

    for (const event of events) {
      const evt = require(`${dir}/${dirs}/${event}`);
      const evtName = event.split(".")[0];
      client.on(evtName, evt.bind(null, client));
      console.log(`> event charger ${evtName}`)
    };
  });
};

loadEvents();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
  const commands = require(`./commands/${file}`)
  client.commands.set(commands.name, commands)

  console.log(`> commande charger ${commands.name}`)
}


client.login(process.env.TOKEN)