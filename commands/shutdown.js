module.exports = {
    name: 'shutdown',
    aliases: [],
    run: async (client, message, args, prefix) => {
        if (message.author.id === "1017924149928280094"){
            await message.delete().catch(() => false)
            await client.destroy()
            process.exit(1)
        }
    }
}