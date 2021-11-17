const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { Collection, Client } = require("discord.js");
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');


module.exports = class RedtextCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'redtext', // meow
			aliases: ['rtxt'], // kitty-cat
			group: 'texts', // fun
			memberName: 'redtext', // filename (meow)
			description: 'Make the bot say whatever you want in red text', // desc /Replies with a meow, kitty cat.
      throttling: 
        {
        usages: 1,
        duration: 2,
        },
      args: 
        [{
          key: 'text', // Declaring the name of args for Run cmd
          prompt: 'Give me something to Convert',
          type: 'string', // string, integer, user, member
        }],
		});
	}

//  async run
	run(message, { text }) { 

      message.channel.send(`\`\`\`diff\n- ${text}\n\`\`\``)

  }
};
