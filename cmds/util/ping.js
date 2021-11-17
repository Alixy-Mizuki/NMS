const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { Collection, Client } = require("discord.js");
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');


module.exports = class PingCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'ping', // meow
			aliases: [], // kitty-cat
			group: 'util', // fun
			memberName: 'ping', // filename (meow)
			description: 'Bot Ping', // desc /Replies with a meow, kitty cat.
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
	run(message) {
   const ping = new MessageEmbed()
      //.setDescription(`🏓**${Date.now() - message.createdTimestamp}ms**`);
      .setAuthor(this.client.user.username+ "'s Latency", this.client.user.avatarURL())
      .setTitle('🏓')
      .addField(`Ping Latency is:`, `\`\`\`yaml\n${Date.now() - message.createdTimestamp} ms \`\`\``)
      .addField(`API Latency is:`, `\`\`\`yaml\n${this.client.ws.ping} ms\`\`\``)
      .setColor('BLUE')
    message.channel.send(ping)
  
  }
};
