const { Command } = require('discord.js-commando');
const { MessageEmbed, Collection, Client } = require("discord.js");
require('discord-reply'); // message.lineReply()
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');
// message.lineReply()

module.exports = class RemindCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'remind', // meow
			aliases: ['timer'], // kitty-cat
			group: 'misc', // fun
			memberName: 'remind', // filename (meow)
			description: 'Make a Reminder', // desc /Replies with a meow, kitty cat.
//      guildOnly: true,
//      hidden: true, // false
//      ownerOnly: true,
//      clientPermissions: ['ADMINISTRATOR'],
//      userPermissions: ['MANAGE_MESSAGES'],
      throttling: 
        {
        usages: 1,
        duration: 5,
        },
      args: 
          [{
          key: 'Time', // Declaring the name of args for Run cmd
          prompt: 'You didn\'t specify any time (`use second [ 20 sec = 20]`)',
          type: 'integer', // string, integer, user, member
 //          default: 1
          },
          {
          key: 'Text', // Declaring the name of args for Run cmd
          prompt: 'You didn\'t specify anything to remind of',
          type: 'string', // string, integer, user, member
 //          default: 1
          }],
		});
	}

//  async run
	async run(message, { Time, Text }) {
    let T = Time * 1000


setTimeout(function() {
  message.author.send(`You asked me to remind you after ${Time} seconds with the reason:\n> ${Text}`)
}, Time * 1000);

      let Hours = Math.floor(T / 3600000) ;
      let Minutes = Math.floor(T / 60000) % 60;
      let Seconds = Math.floor(T / 1000) % 60;

  let E = ''

  if(Hours >= 1 ) E = `I will remind you after ${Hours}h ${Minutes}m ${Seconds}s`
  else if(Minutes >= 1 ) E = `I will remind you after ${Minutes}m ${Seconds}s`
  else if(Seconds >= 1 ) E = `I will remind you after ${Seconds}s`

  message.lineReply(E)
	}
};