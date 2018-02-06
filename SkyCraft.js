const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});
message.channel.send("test")
    		.then(function (message) {
          message.react("👍")
          message.react("👎")
       		message.pin()
          message.delete()
});

client.login(process.env.BOT_TOKEN);
