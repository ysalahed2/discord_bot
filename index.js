
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const prefix = '!';

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`lastik!`);
});

bot.on('message', message => {
	if (message.content.startsWith(`${prefix}QwertyWahtsUrGender`)) {       
        message.channel.send('tbh i don\'t know but definitely machi rajel :)');
    }else if (message.content.startsWith(`${prefix}hey`)) {       
        message.channel.send('Hey smit sidi');
    }else if (message.content.startsWith(`${prefix}tebi`)) {       
        message.channel.send('give it to me pls');
    }
});

bot.login(process.env.token);
