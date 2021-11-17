const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { Collection, Client } = require("discord.js");
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');


module.exports = class MonthlyCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'monthly', // meow
			aliases: [], // kitty-cat
			group: 'economy', // fun
			memberName: 'monthly', // filename (meow)
			description: 'Receive a monthly award of coins', // desc /Replies with a meow, kitty cat.
      guildOnly: true,
      throttling: 
        {
        usages: 1,
        duration: 8,
        },
		});
	}

//  async run
	run(message) {

        let user = message.author;
        let timeout = 2528002880;
        let amount = 50000;

        let month = db.fetch(`month_${user.id}`);

        if(month !== null && timeout - (Date.now() - month) > 0){
            let time = ms(timeout - (Date.now() - month));

            const Embed = new MessageEmbed()
            .setDescription(`You've already collected your monthly award. Come back in **${time.days}d, ${time.hours}h, and ${time.minutes}m**`)
            .setColor("RED")

            return message.channel.send(Embed)
        } else {
            db.add(`money_${user.id}`, amount);
            db.set(`month_${user.id}`, Date.now());

            const Embed2 = new MessageEmbed()
            .setDescription(`Successfully added 🪙 **${amount}** to your account`)
            .setColor("GREEN")

            message.channel.send(Embed2)
        }
    }
};
