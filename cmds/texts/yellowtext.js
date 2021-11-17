const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { Collection, Client } = require("discord.js");
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');


module.exports = class YellowtextCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'yellowtext', // meow
			aliases: ['ytxt'], // kitty-cat
			group: 'texts', // fun
			memberName: 'yellowtext', // filename (meow)
			description: 'Make the bot say whatever you want in yellow text', // desc /Replies with a meow, kitty cat.
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

      message.channel.send(`\`\`\`fix\n${text}\n\`\`\``)

  }
};
