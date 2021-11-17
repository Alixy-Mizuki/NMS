const { Command } = require('discord.js-commando');
const { MessageEmbed, Collection, Client } = require("discord.js");
require('discord-reply'); // message.lineReply()
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');
const COLOR = process.env.COLOR

// message.lineReply()

module.exports = class CringeCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'cringe', // meow
			aliases: [], // kitty-cat
			group: 'useless', // fun
			memberName: 'cringe', // filename (meow)
			description: 'cringe command', // desc /Replies with a meow, kitty cat.
      guildOnly: true,
//      hidden: true, // false
//      ownerOnly: true,
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
    let Cringe = await db.fetch('cringe')
    if (Cringe === null) Cringe = 0;

    db.add(`cringe`, 1)

    let CR = await db.fetch('cringe')

    const EM = new MessageEmbed()
    .setColor(COLOR)
    .setDescription(`Cringe command has been trigger for total: **${CR}** times`)

    message.lineReply(EM)

	}
};