const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { Collection, Client } = require("discord.js");
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');


module.exports = class ThanksCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'thanks', // meow
			aliases: ['thank'], // kitty-cat
			group: 'misc', // fun
			memberName: 'thanks', // filename (meow)
			description: 'Thanks a person', // desc /Replies with a meow, kitty cat.
      guildOnly: true,
      throttling: 
        {
        usages: 1,
        duration: 2,
        },
		});
	}

async	run(message) {

        let User = message.mentions.users.first() 
        let User2 = message.author;
        if(!User) return message.reply('you need to mention someone')  
        let timeout = 1200000;
        
        let author = await db.fetch(`thxtm_${message.guild.id}_${User2.id}`);
        let THX = await db.fetch(`thanks_${message.guild.id}_${User.id}`);
        if (THX === null) THX = 0;

        if(author !== null && timeout - (Date.now() - author) > 0){
            let time = ms(timeout - (Date.now() - author));
            const nope = new MessageEmbed() 
            .setTitle(`No`)
            .setDescription(`Slow Down \nYou can thank people after\n**${time.minutes} minutes and ${time.seconds} seconds**`)
            .setColor("RED")
            .setTimestamp()

            return message.channel.send(nope)
              } 
          else 
          {
              if(User == User2) 
              {
                const No2 = new MessageEmbed() 
              // .setTitle(`Easy Mate..`)
                .setDescription(`${User2} you can't thank yourself. **LOL**`)
                .setColor("GREEN")
                .setTimestamp()

                message.channel.send(No2)
              }
              else 
              {
                let amount = 0;
                db.add(`thanks_${message.guild.id}_${User.id}`, amount + 1)
                db.set(`thxtm_${message.guild.id}_${User2.id}`, Date.now())

                const yay = new MessageEmbed() 
                .setDescription(`${User} you got thanked by ${User2}. Now they have ${THX + 1} thanks`)
                .setColor("GREEN")
                .setTimestamp()

                message.channel.send(yay)
              }
          }
      }
};
