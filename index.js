const Discord = require('discord.js')
require('dotenv').config();
let client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MEMBERS, Discord.Intents.FLAGS.GUILD_BANS, Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.DIRECT_MESSAGES]});

client.on('ready', () => {
    console.log('Yes')
})

client.login(process.env.DISCORD_TOKEN)