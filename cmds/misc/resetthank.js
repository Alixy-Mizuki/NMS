const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { Collection, Client } = require("discord.js");
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');


module.exports = class ResetthankCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'resetthank', // meow
			aliases: ['rstt', 'resetthanks'], // kitty-cat
			group: 'misc', // fun
			memberName: 'resetthank', // filename (meow)
			description: '', // desc /Replies with a meow, kitty cat.
      guildOnly: true,
      throttling: 
        {
        usages: 1,
        duration: 10,
        },

		});
	}

	async run(message) { 

const BO = '692632336961110087';
const bot = this.client.user
  if(message.author.id === BO || message.member.hasPermission("MANAGE_GUILD")) 
    {
        let USER = message.mentions.users.first();
        if(!USER) return message.channel.send('```Please specify a user, via mention or ID```');


        let THX = await db.fetch(`thanks_${message.guild.id}_${USER.id}`)
        if (THX === null) THX = 0;


          let amount = 0
          //if(amount < 1) return message.channel.send('how many, coins?');

          db.fetch(`thanks_${message.guild.id}_${USER.id}`)
          db.set(`thanks_${message.guild.id}_${USER.id}`, `${amount}`)
            message.channel.send(`Successfully reset \`${USER.username}\` thanks`)  


    }
    else
    {
      message.reply(`\`\`\`yaml\nMissing Permission To access Devs Commands\nIf You Not the Bot Developer\nMANAGE_GUILD Permission Needed\n\`\`\``)
    }
  }
};
