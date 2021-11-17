const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { Collection, Client } = require("discord.js");
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');
const version = process.env.VERSION


module.exports = class UptimeCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'uptime', // meow
			aliases: [], // kitty-cat
			group: 'util', // fun
			memberName: 'uptime', // filename (meow)
			description: 'Displays bot uptime', // desc /Replies with a meow, kitty cat.
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

    
      let Days = Math.floor(this.client.uptime / 86400000);
      let Hours = Math.floor(this.client.uptime / 3600000) % 24;
      let Minutes = Math.floor(this.client.uptime / 60000) % 60;
      let Seconds = Math.floor(this.client.uptime / 1000) % 60;

    const embed = new MessageEmbed()
      .setAuthor(`${this.client.user.username} been Online for`, this.client.user.displayAvatarURL())
      .setDescription(`\`\`\`yaml\n${Days}d ${Hours}h ${Minutes}m ${Seconds}s\n\`\`\``)

      .setColor('BLUE')
      .setTimestamp()
    message.channel.send(embed)

  }
};
