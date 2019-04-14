const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready to roll!');
})

client.on('guildMemberAdd', member => {
    const role = member.guild.roles.find('name', 'New');
    const dev = member.guild.roles.find('name', 'Dev');
    if (!member.roles.exists(member.displayName,role)) {
        if (!member.roles.exists(member.displayName,dev))
        {
            member.addRole(role.id);
            member.send("Hello i'm treize and i'm here ot help you :)");
            member.send("Welcome to the GameDev Club Discord Server!\n" +
            "GameDev Club encourages different talents to join the creative " +
            "process of creating video-games. Whether you're interested in art, " +
            "game design, sound design, or story telling. You can participate in " +
            "projects and focus on what you're interested in the most, although " + 
            "you're more than welcomed to take different roles at once if you're up to it.");
        }
    }
});

client.on('message', message => {
    
    const guild = client.guilds.get("507640762738147329");
    const rDev = guild.roles.find('name', 'Dev');
    const rNew = guild.roles.find('name', 'New');
    const rMod = guild.roles.find('name', 'Mod');
    const rAdmin = guild.roles.find('name', 'Admin');

    if(message.content.toLowerCase() === "!hey")
        message.reply("Howdy dude!");

    if (message.content.toLowerCase().startsWith("!setdev"))
    {
        if(message.member.roles.has(rAdmin.id) || message.member.roles.has(rMod.id))
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
                if(user.roles.has(rDev.id))
                {
                    message.channel.send(user.displayName + " has the Dev role already!");
                    return;
                }
                else
                {
                    if(user.roles.has(rNew.id))
                        user.removeRole(rNew.id);
                    user.addRole(rDev.id);
                    message.reply("Congrats you are now one of our developpers team!");
                }
            }
        }
        else
            return message.channel.send("You don't have the right to use this command!");
    
    }

    if(message.content.toLowerCase() === "!faq")
    {   
        faq(message.member);
        message.reply("done! check your direct messages!");
    }
});

function faq(member)
{
    member.send(setBold("Where to start?") +
    "\nTo get started please check the two projects in **Projects-New** channel and work on them :).\n\n"+
    setBold("How can I correct my projects?") +
    "\nAs you know this is just a club so it has nothing to do with moulinette or norminette, with that being said to correct one of your finished projects " +
    "all you have to do is to ask one of the club members to come check your work kindly, if everything is working as expected that member should confirm that" +
    "you have finished the project and eventualy you will get 'Dev' role and unlock new projects.\n\n"+
    setBold("Do you have a game idea and want to work on it?") +
    "\nIf you have an idea and want to work on realizing it you can ask one of the club mods or the club leader and if enough members like it we can all work on " + 
    "it else you can always work with one of your friends and the club will help you whenever it's needed\n\n" +
    setBold("What can i do besides coding?") +
    "\nYou are not required to code, creativity can come in many ways, and to boost it you can work on whatever you want : coding, graphic design, 3D modeling, sound design" +
    ", story telling... you name it just make sure that you contact one of the mods so that we know what you are interested in and count on you in the future projects.\n\n" +
    setBold("How can i get the \"Dev\" tag?") +
    "\nWell it's not that hard to get it, all you need to do is finish the two introductory projects from the list of projects that " +
    "can be found in **Projects-New** channel to get familiar with Unity/Engine\n\n");
}

function setBold(text)
{
    return "**"+text+"**";
}

client.login(process.env.token);
