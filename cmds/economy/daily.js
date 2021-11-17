const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { Collection, Client } = require("discord.js");
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');


module.exports = class DailyCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'daily', // meow
			aliases: [], // kitty-cat
			group: 'economy', // fun
			memberName: 'daily', // filename (meow)
			description: 'Receive a daily award of coins', // desc /Replies with a meow, kitty cat.
      guildOnly: true,
      throttling: 
        {
        usages: 1,
        duration: 5,
        },

		});
	}

//  async run
	run(message) {

        let user = message.author;
        let timeout = 85000000;
        let amount = 2500;

        let daily = db.fetch(`daily_${user.id}`);

        if(daily !== null && timeout - (Date.now() - daily) > 0){
            let time = ms(timeout - (Date.now() - daily));

            const Embed = new MessageEmbed()
            .setDescription(`You've already collected your daily award. Come back in **${time.hours}h, ${time.minutes}m, and ${time.seconds}s**`)
            .setColor("RED")

            return message.channel.send(Embed)
        } else {
            db.add(`money_${user.id}`, amount);
            db.set(`daily_${user.id}`, Date.now());

            const Embed2 = new MessageEmbed()
            .setDescription(`Successfully added 🪙 **${amount}** to your account`)
            .setColor("GREEN")

            message.channel.send(Embed2)
        }
    }
};    