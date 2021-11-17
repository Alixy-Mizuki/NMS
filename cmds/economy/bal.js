const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { Collection, Client } = require("discord.js");
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');


module.exports = class BalCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'balance', // meow
			aliases: ['bal'], // kitty-cat
			group: 'economy', // fun
			memberName: 'bal', // filename (meow)
			description: 'User\'s Balance', // desc /Replies with a meow, kitty cat.
      guildOnly: true,
      throttling: 
        {
        usages: 1,
        duration: 2,
        },

		});
	}

//  async run
	async run(message) {

        let user = message.mentions.users.first() || message.author;
        
        let money = await db.fetch(`money_${user.id}`)
        if (money === null) money = 0;

        
        let BK = db.fetch(`bank_${user.id}`)
        if (BK === null) BK = 0;
        
        const yay = new MessageEmbed() 
        .setTitle(`${user.username}'s Balance`)
        .setDescription(`\`POCKET :\` **🪙 ${money}**\n\`BANK   :\` **🪙 ${BK}**`)
        .setColor("RANDOM")
        .setTimestamp(`\`\``)


        message.channel.send(yay)    


  }
};
