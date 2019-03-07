const Discord = require('discord.js');
const { prefix, token } =  require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!')
})


client.on('message', message => {
	if (message.content.startsWith(`${prefix}QwertyWahtsUrGender`)) {       
        message.channel.send('tbh i don\'t know but definitely machi rajel :)');
    }else if (message.content.startsWith(`${prefix}hey`)) {       
        message.channel.send('Hey smit sidi');
    }
});


client.login(token);