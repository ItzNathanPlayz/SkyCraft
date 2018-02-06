const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Starting Bot.');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('PoNg');
  	}
});

client.login(process.env.BOT_TOKEN);




const tokenfile = require("process.env.BOT_TOKEN");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true})

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setGame("OriginPvP | /help");
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = '-';
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd === `${prefix}serverinfo`){

let sicon = message.guild.displayAvatarURL;
let serverembed = new Discord.RichEmbed()
.setDescription("Server Information")
.setColor("#ff5555")
.setThumbnail(sicon)
.addField("Server Name:", message.guild.name)
.addField("Created On:", message.guild.createdAt)
.addField("You Joined:", message.member.joinedAt)
.addField("Total Members:", message.guild.memberCount);

    return message.channel.send(serverembed);
  }



  if(cmd === `${prefix}botinfo`){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#ffff55")
    .setThumbnail(bicon)
    .addField("Bot Name:", bot.user.username)
    .addField("Created On:", bot.user.createdAt);

    return message.channel.send(botembed);
  }
  
});

bot.login(process.env.BOT_TOKEN);


