const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
require('discord-reply'); // message.lineReply()
const { Collection, Client } = require("discord.js");
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');
const BO = process.env['BOTOWNER']

// message.lineReply()

module.exports = class ModnickCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'modnick', // meow
			aliases: ['mdn'], // kitty-cat
			group: 'devs', // fun
			memberName: 'modnick', // filename (meow)
			description: 'Moderate Someone Nicknames', // desc /Replies with a meow, kitty cat.
      guildOnly: true,
      hidden: true, // false
      ownerOnly: true,
     clientPermissions: ['MANAGE_NICKNAMES'],
     //userPermissions: ['MANAGE_NICKNAMES'],
      throttling: 
        {
        usages: 1,
        duration: 30,
        },
      args: 
        [{
          key: 'User', // Declaring the name of args for Run cmd
          prompt: 'who? [ ID ] ',
          type: 'string', // string, integer, user, member
        },
        {
          key: 'Name', // Declaring the name of args for Run cmd
          prompt: 'What is the new new name?',
          type: 'string', // string, integer, user, member
//          default: ''
        }],

		});
	}

//  async run
	async run(message, { Name }) {
//	run(message, { text }) {    //with args

    let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);     
    let User = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0])

    let TARGET = message.guild.member(User)  

    // console.log(TARGET)

    if(TARGET == null) 
    {
      const M = await message.lineReply(`Can't Find User (Try using User ID or Mention Them)`)
      await delay(4000)  
      M.delete()
    }
    else if(TARGET == message.guild.ownerID) 
    {
      const M = await message.lineReply(`Cannot Change Their Nickname, Because They're the \`Owner\` of the Server`)
      await delay(4000)  
      M.delete()
    }
    else if(message.author.id == BO) 
    {
      // if(TARGET.roles.highest.comparePositionTo(message.guild.me.roles.highest) >= 0) 
      return message.lineReply(`Cannot Set or Change Nickname of \`${TARGET.user.username}\` Because They have Higher or Equal Role Than Me`)
      .then(async M => 
      {
        await delay(4000)  
        M.delete()
      })

      if (!TARGET) return message.channel.send("Can't find mentioned user or User ID");

    
      await TARGET.setNickname(`${Name}`)
      const ME = await message.lineReply(`Successfully Changed \`${TARGET.user.username}'s\` Nickname to \`${Name}\``)
      await delay(4000)  
      ME.delete()
    }
    else if(message.member.hasPermission("MANAGE_NICKNAMES")) 
    {
      if (TARGET.roles.highest.comparePositionTo(message.guild.me.roles.highest) >= 0) 
      return message.lineReply(`Cannot Set or Change Nickname of \`${TARGET.user.username}\` Because They have Higher Role Than Me`)
      .then(async M => 
      {
        await delay(4000)  
        M.delete()
      })      

      if (!TARGET) return message.channel.send("Can't find mentioned user or User ID");

    
      await TARGET.setNickname(`${Name}`)
      const ME = await message.lineReply(`Successfully Changed \`${TARGET.user.username}'s\` Nickname to \`${Name}\``)
      await delay(4000)  
      ME.delete()
    }
//--    
	}
};
