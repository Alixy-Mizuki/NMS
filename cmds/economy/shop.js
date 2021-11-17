const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { Collection, Client } = require("discord.js");
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');


module.exports = class ShopCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'shop', // meow
			aliases: ['shop'], // kitty-cat
			group: 'economy', // fun
			memberName: 'shop', // filename (meow)
			description: 'BUY items on SHOP', // desc /Replies with a meow, kitty cat.
      guildOnly: true,
      throttling: 
        {
        usages: 1,
        duration: 2,
        },

		});
	}

	run(message) {


        const embed = new MessageEmbed()
        .setTitle('Store')
        .addField(`Car 🚗`, `🪙 500`)
        .addField(`Watch ⌚`, `🪙 250`)
        
        //.addField(``, ``)
        //.addField(`item name`, `Coins`)
        .setColor('RANDOM')
        .setTimestamp();

        message.channel.send(embed);
    

  }
};
