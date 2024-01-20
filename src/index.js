require('dotenv').config()
const {Client, IntentsBitField, messageLink, EmbedBuilder} = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});

client.on('ready', (c) => {
    console.log(`${c.user.tag} is online`);

    client.user.setActivity({
        name: 'Valorant'
    })
});

const prefix = "!";

client.on("messageCreate", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
  }
  
});

client.on('messageCreate', (message) => {
    if (message.author.bot) {return;}


    if (message.content === 'hello') {
        message.reply('Oh Hi!');
    }
    if (message.content === 'Crazy') {
        message.reply('Crazy? I was crazy once. They put me in a room. A rubber room. A rubber room with rats. Rubber rats? I hate rubber rats. They make me crazy. Crazy? I was crazy once. They put me in a room. A rubber room. A rubber room with rats. Rubber rats? I hate rubber rats. They make me crazy. Crazy? I was crazy once. They put me in a room. A rubber room. A rubber room with rats. Rubber rats? I hate rubber rats. They make me crazy. Crazy? I was crazy once. They put me in a room. A rubber room. A rubber room with rats. Rubber rats? I hate rubber rats. They make me crazy.Crazy? I was crazy once. They put me in a room. A rubber room. A rubber room with rats. Rubber rats? I hate rubber rats. They make me crazy. Crazy? I was crazy once. They put me in a room. A rubber room. A rubber room with rats. Rubber rats? I hate rubber rats. They make me crazy. Crazy? I was crazy once. They put me in a room. A rubber room. A rubber room with rats. Rubber rats? I hate rubber rats. They make me crazy. Crazy? I was crazy once. They put me in a room. A rubber room. A rubber room with rats. Rubber rats? I hate rubber rats. They make me crazy. Crazy? I was crazy once. They put me in a room. A rubber room. A rubber room with rats. Rubber rats? I hate rubber rats. They make me crazy. Crazy? I was crazy once. They put me in a room. A rubber room. A rubber room with rats. Rubber rats? I hate rubber rats. They make me crazy. Crazy? I was crazy once. They put me in a room. A rubber room. A rubber room with rats. Rubber rats? I hate rubber rats. They make me crazy. Crazy? I was crazy once. They put me in a room. A rubber room. A rubber room with rats. Rubber rats? I hate rubber rats. They make me crazy. Crazy? I was crazy once. They put me in a room. A rubber room. A rubber room with rats. ');
    }

});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'hey') {
        interaction.reply('hey!');
    }
    if (interaction.commandName === 'ping') {
        interaction.reply('Pong!');
    }
    if (interaction.commandName === 'valorant-roulette') {
        interaction.reply('Play Valorant Roulette Here: https://valorantroulette.games')
    }
});

client.login(process.env.TOKEN);