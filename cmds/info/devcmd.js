const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
require('discord-reply'); // message.lineReply()
const { Collection, Client } = require("discord.js");
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');

// message.lineReply()

module.exports = class DevcmdCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'devcmd', // meow
			aliases: ['devhelp'], // kitty-cat
			group: 'info', // fun
			memberName: 'devcmd', // filename (meow)
			description: 'Dev cmd duh', // desc /Replies with a meow, kitty cat.
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
  let DEV = new MessageEmbed()
  .setTitle("Developer CMDS")
  .setDescription(`args-info, botname, cinfo, cinv, cnick, dbdel, dbs, guildleave, guilds, modnick, sd, servercount, shutdown, tedit, treply, usercount`)
  .setColor("GREEN")
  .setTimestamp()
  message.author.send(DEV)
  if(message.channel.type !== 'dm') 
  {
    message.lineReply('Sent you a DM with information.')
  }

	}
};