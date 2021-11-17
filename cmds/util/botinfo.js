const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { Collection, Client } = require("discord.js");
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');
const version = process.env.VERSION


module.exports = class BotinfoCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'botinfo', // meow
			aliases: [], // kitty-cat
			group: 'util', // fun
			memberName: 'botinfo', // filename (meow)
			description: 'Displays bot information', // desc /Replies with a meow, kitty cat.
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

    
      let days = Math.floor(this.client.uptime / 86400000) % 1;
      let hours = Math.floor(this.client.uptime / 3600000) % 24;
      let minutes = Math.floor(this.client.uptime / 60000) % 60;
      let seconds = Math.floor(this.client.uptime / 1000) % 60;

    const embed = new MessageEmbed()
      .setAuthor(`Information about the ${this.client.user.username} Bot`, this.client.user.displayAvatarURL())
      .addField(`Latency is:`, `\`\`\`yaml\n${Date.now() - message.createdTimestamp} ms \`\`\``)
      .addField(`API Latency is:`, `\`\`\`yaml\n${this.client.ws.ping} ms\`\`\``)      
      .addField(`Bot tag`, `\`\`\`yaml\n${this.client.user.username} # ${this.client.user.discriminator}\n\`\`\``)
      .addField(`Version`, `\`\`\`yaml\n${version}\n\`\`\``)
      .addField(`Bot owner ID`, `\`\`\`yaml\n692632336961110087\`\`\``)
      .addField(`Server's Prefix`, `\`\`\`yaml\n${this.client.commandPrefix}\n\`\`\``)
      .addField(`Time since last restart`, `\`\`\`yaml\n${days}d ${hours}h ${minutes}m ${seconds}s\n\`\`\``)
      .addField(`Server count`, `\`\`\`yaml\n${this.client.guilds.cache.size}\n\`\`\``)

      .setColor('BLUE')
      .setTimestamp()
    message.channel.send(embed)

  }
};
