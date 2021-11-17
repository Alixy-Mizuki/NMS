const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { Collection, Client } = require("discord.js");
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');


module.exports = class InviteCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'invite', // meow
			aliases: [], // kitty-cat
			group: 'util', // fun
			memberName: 'invite', // filename (meow)
			description: 'To add/invite the bot to your server', // desc /Replies with a meow, kitty cat.
      throttling: 
        {
        usages: 1,
        duration: 2,
        },

		});
	}

//  async run
	run(message) {
    
    //set the permissions id here (https://discordapi.com/permissions.html)
    var PermissionsR = 238419265;
    var PermissionsA = 8;
    
    let invite = new MessageEmbed()
    .setTitle(`Invite ${this.client.user.username}`)
    .setDescription(`Want me in your server? Invite me today! 
    \n[Invite Link (Recommended)](https://discord.com/oauth2/authorize?client_id=${this.client.user.id}&permissions=${PermissionsR}&scope=bot)
    \n[Invite Link (ADMIN)](https://discord.com/oauth2/authorize?client_id=${this.client.user.id}&permissions=${PermissionsA}&scope=bot)`)
    .setColor("BLUE")
    .setTimestamp()
    return message.channel.send(invite);

  }
};
