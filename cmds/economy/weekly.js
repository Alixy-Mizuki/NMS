const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { Collection, Client } = require("discord.js");
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');


module.exports = class WeeklyCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'weekly', // meow
			aliases: [], // kitty-cat
			group: 'economy', // fun
			memberName: 'weekly', // filename (meow)
			description: 'Receive a weekly award of coins', // desc /Replies with a meow, kitty cat.
      guildOnly: true,
      throttling: 
        {
        usages: 1,
        duration: 5,
        },

		});
	}


	run(message) {

        let user = message.author;
        let timeout = 604000000;
        let amount = 25000;

        let week = db.fetch(`week_${user.id}`);

        if(week !== null && timeout - (Date.now() - week) > 0){
            let time = ms(timeout - (Date.now() - week));

            const Embed = new MessageEmbed()
            .setDescription(`You've already collected your weekly award. Come back in **${time.days}d, ${time.hours}h, and ${time.minutes}m**`)
            .setColor("RED")

            return message.channel.send(Embed)
        } else {
            db.add(`money_${user.id}`, amount);
            db.set(`week_${user.id}`, Date.now());

            const Embed2 = new MessageEmbed()
            .setDescription(`Successfully added 🪙 **${amount}** to your account`)
            .setColor("GREEN")

            message.channel.send(Embed2)
        }
    

  }
};
