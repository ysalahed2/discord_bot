const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!')
})

client.on('guildMemberAdd', member => {
    let role = member.guild.roles.find('name', 'Nomies');
    let Dev = member.guild.roles.find('name', 'Dev');
    if (!member.roles.exists(member.displayName,role)) {
        if(!member.roles.has(Dev.id))
        member.addRole(role.id);
    }
});


client.on('message', message => {
    
    const dev = message.guild.roles.find('name', 'Dev');
    const normies = message.guild.roles.find('name', 'Nomies');
    const Mod = message.guild.roles.find('name', 'Mod');
    const Admin = message.guild.roles.find('name', 'Admin');

    if (message.content.toLowerCase().startsWith("!setdev"))
    {
        if(message.member.roles.has(Admin.id) || message.member.roles.has(Mod.id))
        {
            if(message.content.toLowerCase() === "!setdev")
                return message.reply("You didn't specify the user!");

            const user = message.guild.member(message.mentions.users.first());

            if(!user) 
            {
                message.reply("Invalid user");
                return;
            }
            else{
                if(user.roles.has(dev.id))
                {
                    message.channel.send(user.displayName + " has the Dev role already!");
                    return;
                }
                else
                {
                    if(user.roles.has(normies.id))
                    {
                        user.removeRole(normies.id);
                    }
                    user.addRole(dev.id);
                    message.reply("Congrats you are now one of our developpers team!");
                }
            }
        }
        else
            return message.channel.send("You don't have the right to use this command!");
    
    }
});


client.login(process.env.token);
