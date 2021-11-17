const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { Collection, Client } = require("discord.js");
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');


module.exports = class ResetbalanceCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'resetbalance', // meow
			aliases: ['rstbal', 'resetbal'], // kitty-cat
			group: 'economy', // fun
			memberName: 'resetbalance', // filename (meow)
			description: '', // desc /Replies with a meow, kitty cat.
      guildOnly: true,
      hidden: true, // false
      ownerOnly: true,      
      throttling: 
        {
        usages: 1,
        duration: 10,
        },

		});
	}

	async run(message) { 

        let USER = message.mentions.users.first();
        if(!USER) return message.channel.send('```Please specify a user, via mention or ID```');

        let money = await db.fetch(`money_${USER.id}`)
        let car = await db.fetch(`car_${USER.id}`)
        let watch = await db.fetch(`watch_${USER.id}`)
        if (money === null) money = 0;
        if (car === null) money = 0;
        if (watch === null) money = 0;

          let amount = 1000
          let amount2 = 0
          //if(amount < 1) return message.channel.send('how many, coins?');

          db.fetch(`money_${USER.id}`)
          db.fetch(`car_${USER.id}`)
          db.fetch(`watch_${USER.id}`)    
                
          db.set(`money_${USER.id}`, amount)
          db.set(`car_${USER.id}`, amount2)
          db.set(`watch_${USER.id}`, amount2)
            message.channel.send(`Successfully reset \`${USER.username}\`\nbalance to ${amount} coins\ncar to ${amount2}\nwatch to ${amount2}`)  



  }
};
