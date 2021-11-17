const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { Collection, Client } = require("discord.js");
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');

module.exports = class AvatarCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'avatar', // meow
			aliases: ['av'], // kitty-cat
			group: 'util', // fun
			memberName: 'avatar', // filename (meow)
			description: 'Shows User\'s Avatar', // desc /Replies with a meow, kitty cat.
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
	run(message) { 

  let member = message.mentions.users.first() || message.author
  let avatar = member.displayAvatarURL({size: 2048})
  let avurl = member.avatarURL()


        const embed = new MessageEmbed()
        .setTitle(`${member.username}'s avatar`)
        .setDescription(`[Avatar Link](${avurl})`)
        .setImage(avatar)
        .setColor("BLUE")

  message.channel.send(embed)


  }
};
