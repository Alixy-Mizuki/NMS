const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { Collection, Client } = require("discord.js");
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');


module.exports = class LinksCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'links', // meow
			aliases: [], // kitty-cat
			group: 'misc', // fun
			memberName: 'links', // filename (meow)
			description: 'Some Sort of links', // desc /Replies with a meow, kitty cat.
      throttling: 
        {
        usages: 1,
        duration: 10,
        },

		});
	}

//  async run
	run(message) {

        var PermissionsR = 238419265;
        var PermissionsA = 8;

        const invEmbed = new MessageEmbed()
        .addField("`YOUTUBE`", "[Youtube Link](https://www.youtube.com/channel/UCoMlAgkd_L7g3a2rHV-KO8Q)")
        .addField("`TWITCH.TV`", "[Twitch Link](https://www.twitch.tv/alixy_tr)")
        .addField('`Support Server!`', '[Click Here!](https://discord.gg/NsHp9egH8C)')
        .addField('`Join My Server!`', '[Click Here!](https://dsc.gg/kona)')
        .addField('`BotInvite`', `[Invite Link (ADMIN)](https://discord.com/oauth2/authorize?client_id=${this.client.user.id}&permissions=${PermissionsA}&scope=bot)\n[Invite Link (Recommended)](https://discord.com/oauth2/authorize?client_id=${this.client.user.id}&permissions=${PermissionsR}&scope=bot)`)


        .setColor("RANDOM")
        message.channel.send(invEmbed)

  }
};