const { Command } = require('discord.js-commando');
const { MessageEmbed, Collection, Client } = require("discord.js");
require('discord-reply'); // message.lineReply()
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');

// message.lineReply()

module.exports = class ReplyCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'reply', // meow
			aliases: [], // kitty-cat
			group: 'bots', // fun
			memberName: 'reply', // filename (meow)
			description: 'Reply someone message using bot', // desc /Replies with a meow, kitty cat.
      guildOnly: true,
      // hidden: true, // false
      // ownerOnly: true,
//      clientPermissions: ['ADMINISTRATOR'],
//      userPermissions: ['MANAGE_MESSAGES'],
      throttling: 
        {
        usages: 1,
        duration: 20,
        },
       args: 
         [{
           key: 'ChannelID', // Declaring the name of args for Run cmd
           prompt: 'I Need Channel ID to Fetch The Message.',
           type: 'string', // string, integer, user, member
// //          default: 1
         },
         {
           key: 'MessageID', // Declaring the name of args for Run cmd
           prompt: 'I Need Message ID',
           type: 'string', // string, integer, user, member
// //          default: 1
         },
         {
           key: 'Text', // Declaring the name of args for Run cmd
           prompt: 'What things would you like the bot to reply?',
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
.setTitle("Message Replied")
.setTimestamp()
.setColor('AQUA')

		//return message.say('Meow!'); // same as message.channel.send
    try 
    {
      this.client.channels.cache.get(`${CHID}`).messages.fetch(`${MSGID}`)
      .then(x => x.lineReply(Text)).then(r => message.author.send(Embed))
    } catch(e) {
      message.lineReply('Can\'t Fetch the Message')
    }

	}
};