
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`lastik!`);
});

client.on('message', message => {
	if (message.content.startsWith(`${prefix}QwertyWahtsUrGender`)) {       
        message.channel.send('tbh i don\'t know but definitely machi rajel :)');
    }else if (message.content.startsWith(`${prefix}hey`)) {       
        message.channel.send('Hey smit sidi');
    }
});

bot.login(process.env.token);
