const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { Collection, Client } = require("discord.js");
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');
const math = require('mathjs');


module.exports = class CalculateCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'calculate', // meow
			aliases: ["cal", "math", "cals"], // kitty-cat
			group: 'util', // fun
			memberName: 'calculate', // filename (meow)
			description: 'Calculates for you an calculation', // desc /Replies with a meow, kitty cat.
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
          key: 'INT', // Declaring the name of args for Run cmd
          prompt: 'Please provide a **valid** question about math',
          type: 'string', // string, integer, user, member
        }],
		});
	}

//  async run
	run(message, { INT }) {

        let resp;

        try {
            resp = math.evaluate(INT)
        } catch (e) {
            return message.channel.send('E')
        }

        const embed = new MessageEmbed()
        .setColor(0x808080)
        .setTitle('Calculator')
        .addField('Question', `\`\`\`css\n${INT}\`\`\``)
        .addField('Answer', `\`\`\`css\n${resp}\`\`\``)

        message.channel.send(embed);

  }
};
