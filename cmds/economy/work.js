const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { Collection, Client } = require("discord.js");
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');


module.exports = class WorkCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'work', // meow
			aliases: [], // kitty-cat
			group: 'economy', // fun
			memberName: 'work', // filename (meow)
			description: 'Standard Work Commands for now', // desc /Replies with a meow, kitty cat.
      guildOnly: true,
      throttling: 
        {
        usages: 1,
        duration: 2,
        },
		});
	}

async	run(message) {

        let user = message.author;
        let timeout = 600000; //10m
        let author = await db.fetch(`workin_${user.id}`);

        if(author !== null && timeout - (Date.now() - author) > 0){
            let time = ms(timeout - (Date.now() - author));
            
            const Embed = new MessageEmbed()
            .setDescription(`You can work again after **${time.minutes}m and ${time.seconds}s**`)
            .setColor("RED")

            return message.channel.send(Embed)
        } else {
            let amount = Math.floor(Math.random() * 800) + 1;
            db.add(`money_${user.id}`, amount)
            db.set(`workin_${user.id}`, Date.now())
            
            const Embed2 = new MessageEmbed()
            .setDescription(`${user} you worked and earned **🪙 ${amount}**`)
            .setColor("GREEN")

            message.channel.send(Embed2)
        }


  }
};
