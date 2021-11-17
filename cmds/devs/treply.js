const { Command } = require('discord.js-commando');
const { MessageEmbed, Collection, Client } = require("discord.js");
require('discord-reply'); // message.lineReply()
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');

// message.lineReply()

module.exports = class TreplyCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'treply', // meow
			aliases: ['tr'], // kitty-cat
			group: 'devs', // fun
			memberName: 'treply', // filename (meow)
			description: 'treply', // desc /Replies with a meow, kitty cat.
      //guildOnly: true,
      hidden: true, // false
      ownerOnly: true,
//      clientPermissions: ['ADMINISTRATOR'],
//      userPermissions: ['MANAGE_MESSAGES'],
      throttling: 
        {
        usages: 1,
        duration: 2,
        },
       args: 
         [{
           key: 'ChannelID', // Declaring the name of args for Run cmd
           prompt: 'Channel ID?',
           type: 'string', // string, integer, user, member
// //          default: 1
         },
         {
           key: 'MessageID', // Declaring the name of args for Run cmd
           prompt: 'Message ID?',
           type: 'string', // string, integer, user, member
// //          default: 1
         },
         {
           key: 'Text', // Declaring the name of args for Run cmd
           prompt: 'What text would you like the bot to edit?',
           type: 'string', // string, integer, user, member
// //          default: 1
         }],
		});
	}

//  async run
	async run(message, { ChannelID, MessageID, Text }) {
//	run(message, { text })     //with args

const CHID = ChannelID
const MSGID = MessageID
const Embed = new MessageEmbed()
.setTimestamp()
.setColor('AQUA')
		
    this.client.channels.cache.get(`${CHID}`).messages.fetch(`${MSGID}`)
    .then(x => x.lineReply(Text))
    .then(async r => 
    {
      Embed.setTitle("Message Replied")
      await message.author.send(Embed)
    })

//===    
	}
};