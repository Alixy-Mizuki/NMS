const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { Collection, Client } = require("discord.js");
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');
const version = process.env.VERSION


module.exports = class ServercountCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'servercount', // meow
			aliases: ['ssc'], // kitty-cat
			group: 'devs', // fun
			memberName: 'servercount', // filename (meow)
			description: 'Displays server count for the bot', // desc /Replies with a meow, kitty cat.
      hidden: true, // false
      ownerOnly: true,
//      clientPermissions: ['ADMINISTRATOR'],
//      userPermissions: ['MANAGE_MESSAGES'],
      throttling: 
        {
        usages: 1,
        duration: 2,
        },

		});
	}

//  async run
	async run(message) {

    const embed = new MessageEmbed()
      .setAuthor(`Server Count for ${this.client.user.username}`, this.client.user.displayAvatarURL())
      .addField(`Bot Currently In`, `\`\`\`yaml\n${this.client.guilds.cache.size} Server\n\`\`\``)

      .setColor('BLUE')
      .setTimestamp()
    message.channel.send(embed)

  }
};
