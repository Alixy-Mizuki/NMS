const express = require("express")
const app = express()

  app.get("/", (req, res) => {
  res.send("Hello World!!")
})
  app.listen(3000, () => {
  console.log("Ok I'm Online.")//
})

const { CommandoClient } = require('discord.js-commando');
const { MessageEmbed , Structures } = require('discord.js');
const path = require('path');
const { readdirSync } = require('fs');
const client = new CommandoClient({
	commandPrefix: ']',
	owner: '692632336961110087',
//	invite: 'https://discord.gg/NsHp9egH8C',
});




client.registry
	.registerDefaultTypes()
	.registerGroups([      
		['devs', 'Developers'],
    ['bots', 'Order The Bot'],
		['economy', 'Economy'],
    ['fun', 'Fun'],
    ['info', 'Infomations'],
    ['image', 'Image Manipulation'],
    ['misc', 'Miscellaneous'],
    ['texts', 'Texts'],
    ['useless', 'Useless Commands'],
    ['util', 'Utility']
//    ['second', 'Your Second Command Group'],
	])

	.registerDefaultGroups()
  .registerDefaultCommands({
    unknownCommand: false,
  	help: false,
    ping: false,
    prefix: false,
    commandState: true,
  })
	.registerCommandsIn(path.join(__dirname, 'cmds'));




// Statuses
client.on('ready', () => {
//MAINTANCE
		const MNTC = [
			`I'M Under Maintenance, So My Old Commands Maybe Doesn't Work`,
			`Maintenance, Please DO NOT USE THE BOT AT THE MOMENT`,
			`Maintenance, NO COMMANDS AT THE MOMENT`
		];
//NORMAL 
		const activities = [
			`${client.guilds.cache.size} servers!`,
			`${client.channels.cache.size} channels!`,
			`${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} users!`
		];

		let i = 0;

//MAINTANCE

//    setInterval(() => client.user.setPresence({ activity: { name: `${MNTC[i++ % MNTC.length]}`, type: 'PLAYING' }, status: "dnd"}), 6000)
    
//NORMAL  

    setInterval(() => client.user.setPresence({ activity: { name: `${client.commandPrefix}commands | ${activities[i++ % activities.length]}`, type: 'WATCHING' }, status: "dnd"}), 12000)


	console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
	//client.user.setActivity('with Commando');

});

//error
client.on('error', console.error)

//Login
client.login(process.env.TOKEN)


//Send Messages Upon join new server
const prefix = client.commandPrefix
client.on('guildCreate', guild => {
    const channel = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
    let INVITES = new MessageEmbed()
    .setTitle("Thanks For Inviting Me")
    .setDescription(`**My Prefix is** \`${prefix}\` \n**To Get Started Type** \`${prefix}help\`
    I'm Still **WIP** Bot, So if you found any bugs or errors, You can do \`${prefix}bug\` to make a bug report. I'll send it to my Support Server. Thank you.
    This bot Made by \`${client.owners[0].tag}\`\n
    Links
    **[Support Server](https://discord.gg/NsHp9egH8C)**
    **[Youtube Link](https://www.youtube.com/channel/UCoMlAgkd_L7g3a2rHV-KO8Q)**
    **[Twitch Link](https://www.twitch.tv/alixy_tr)**
    `)
    .setColor("GREEN")
    .setTimestamp()
//
    let EM = new MessageEmbed()
    .setTitle(`Server Number ${client.guilds.cache.size}`)
    .addFields(
      {
        name: "Guild Name",
        value: guild.name,
        inline: true
      },
      {
        name: "Guild ID",
        value: guild.id,
        inline: true
      },
      {
        name: "Owner",
        value: guild.owner,
        inline: true
      },
      {
        name: "Owner ID",
        value: guild.owner.id,
        inline: true
      }
      // {
      //   name: ,
      //   value: ,
      //   inline: true
      // }
    )
    .setThumbnail(guild.iconURL({ dynamic: true }))
    .setColor("GREEN")
    .setTimestamp()
//
    client.channels.cache.get("850197480230486026").send(EM)
    channel.send(INVITES)
})


// Left a guild
client.on("guildDelete", guild => {
    //
    let EM = new MessageEmbed()
    .addField("Left The Guild", "Guild Name: \n**"+guild.name+"**")
    .setColor("RED")
    .setTimestamp()
//
    client.channels.cache.get("850197480230486026").send(EM)
    //remove from guildArray
})



//Logging in to discord
//client.login(process.env.TOKEN)





