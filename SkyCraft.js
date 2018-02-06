const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Starting Bot.');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

client.login(process.env.BOT_TOKEN);
