const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { Collection, Client } = require("discord.js");
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');


module.exports = class ReverseCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'reverse', // meow
			aliases: [], // kitty-cat
			group: 'texts', // fun
			memberName: 'reverse', // filename (meow)
			description: 'Reversed a input text', // desc /Replies with a meow, kitty cat.
//      hidden: true, // false
//      ownerOnly: true,
//      clientPermissions: ['ADMINISTRATOR'],
//      userPermissions: ['MANAGE_MESSAGES'],
      throttling: 
        {
        usages: 1,
        duration: 2,
        },
      args: 
        [{
          key: 'text', // Declaring the name of args for Run cmd
          prompt: 'What text would you like the bot to send in reverse?',
          type: 'string', // string, integer, user, member
        }],
		});
	}

//  async run
	run(message, { text }) {    //with args

 var R = '';
 var i = text.length;

 while (i > 0) 
 {
 R += text.substring(i - 1, i);
 i--;
 }

message.say(`\`\`\`yaml\n${R}\n\`\`\``)
	}
}