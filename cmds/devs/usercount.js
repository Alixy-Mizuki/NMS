const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
require('discord-reply'); // message.lineReply()
const { Collection, Client } = require("discord.js");
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');

// message.lineReply()

module.exports = class UsercountCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'usercount', // meow
			aliases: ['usc'], // kitty-cat
			group: 'devs', // fun
			memberName: 'usercount', // filename (meow)
			description: 'User Count Duh', // desc /Replies with a meow, kitty cat.
//      guildOnly: true,
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
	run(message) {
//	run(message, { text }) {    //with args

		//return message.say('Meow!'); // same as message.channel.send
  let S = this.client.guilds.cache.size
  let U = this.client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)

  message.lineReply(`This bot is currently serving **${U}** members in **${S}** Servers!`)

	}
};