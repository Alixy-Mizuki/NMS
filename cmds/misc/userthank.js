const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { Collection, Client } = require("discord.js");
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');


module.exports = class UserthankCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'userthank', // meow
			aliases: ['urtk'], // kitty-cat
			group: 'misc', // fun
			memberName: 'userthank', // filename (meow)
			description: 'Check How Much User\'s thanks', // desc /Replies with a meow, kitty cat.
      guildOnly: true,
      throttling: 
        {
        usages: 1,
        duration: 5,
        },

		});
	}


async	run(message) {

        let user = message.mentions.users.first() || message.author;
        
        let THX = await db.fetch(`thanks_${message.guild.id}_${user.id}`)
        if (THX === null) THX = 0;
        
        const yay = new MessageEmbed() 
        .setTitle(`${user.username}'s Thanks`)
        .setDescription(`\`Thanks :\` **${THX}**`)
        .setColor("RANDOM")
        .setTimestamp(`\`\``)


        message.channel.send(yay)    


  }
};
