const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { Collection, Client } = require("discord.js");
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');


module.exports = class INVCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'inventory', // meow
			aliases: ['inv'], // kitty-cat
			group: 'economy', // fun
			memberName: 'inventory', // filename (meow)
			description: 'User\'s inventory or other\'s ', // desc /Replies with a meow, kitty cat.
      guildOnly: true,
      throttling: 
        {
        usages: 1,
        duration: 2,
        }

		});
	}


	run(message) {
        let user = message.mentions.members.first() || message.author;

        let money = db.fetch(`money_${user.id}`)
        if (money === null) money = 0;

        let BK = db.fetch(`bank_${user.id}`)
        if (BK === null) BK = 0;

        let car = db.fetch(`car_${user.id}`)
        if (car === null) car = 0;

        let watch = db.fetch(`watch_${user.id}`)
        if (watch === null) watch = 0;


        let moneyEmbed = new MessageEmbed()
        .setDescription(`**${user}'s Inventory**\n
        **Pocket**
        🪙 : **${money}**
        **Bank**
        🪙 : **${BK}**\n
        **Inventory**
        🚗 : **${car}**
        ⌚ : **${watch}**
        `)
        .setColor("RANDOM")        
        //.setFooter('Noice')
        .setTimestamp()

  message.channel.send(moneyEmbed)

    }
};