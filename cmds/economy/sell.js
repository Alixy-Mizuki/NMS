const { Command } = require('discord.js-commando');
const { MessageEmbed, Collection, Client } = require("discord.js");
require('discord-reply'); // message.lineReply()
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');


module.exports = class SellCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'sell', // meow
			aliases: [], // kitty-cat
			group: 'economy', // fun
			memberName: 'sell', // filename (meow)
			description: 'Sell an Item', // desc /Replies with a meow, kitty cat.
      guildOnly: true,
      throttling: 
        {
        usages: 1,
        duration: 2,
        },
      args: 
        [{
          key: 'type', // Declaring the name of args for Run cmd
          prompt: 'What would you like to sell?',
          type: 'string', // string, integer, user, member
        },
        {
          key: 'count', // Declaring the name of args for Run cmd
          prompt: 'how Many?',
          type: 'integer', // string, integer, user, member 
          default: 1          
        }],
		});
	}

	async run(message, { type, count }) { 
    
       // let purchase = args.join(" ");
        
        //let items = await db.fetch(message.author.id, { items: [] });
        let amount = await db.fetch(`money_${message.author.id}`)
        let user = message.author;
        
        let Car = await db.fetch(`car_${user.id}`);
        let Watch =  await db.fetch(`watch_${user.id}`);


        let Ccar = count * 1
        let Cwatch = count * 1


        let FSELL = new MessageEmbed()
        .setTimestamp()
        .setColor("RED")

        let SSELL = new MessageEmbed()
        .setTimestamp()
        .setColor("GREEN")


        if (type == 'car') 
        {
          if(Car < 1) 
          {
            FSELL.setDescription(`:x: You don't have any Car to sell`);

            message.lineReply(FSELL);
          }
          else if(Car < Ccar)
          {
            FSELL.setDescription("Where you got those Car?\nFrom air?")

            message.lineReply(FSELL);
          }
          else if(count < 0 || count == 0)
          {
            FSELL.setDescription("; - ; Bruh Moment")

            message.lineReply(FSELL);
          }
          else if(count > 0)
          { 
            db.fetch(`car_${user.id}`)
            db.subtract(`car_${user.id}`, count * 1)

            db.add(`money_${user.id}`, count * 500)
            
            SSELL.setDescription(`:white_check_mark: Sold a ${count} Car For 🪙 ${count * 500}`);

            message.lineReply(SSELL)
          }
        }
        else if (type == 'watch') 
        {
          if(Watch < 1) 
          {
            FSELL.setDescription(`:x: You don't have any Watch to sell`);

            message.lineReply(FSELL);
          }
          else if(Watch < Cwatch)
          {
            FSELL.setDescription("Where you got those Watch?\nFrom air?")

            message.lineReply(FSELL);
          }
          else if(count < 0 || count == 0)
          {
            FSELL.setDescription("; - ; Bruh Moment")

            message.lineReply(FSELL);
          }
          else if(count > 0)
          {   
            db.fetch(`watch_${user.id}`)
            db.subtract(`watch_${user.id}`, count * 1)

            db.add(`money_${user.id}`, count * 250)

            SSELL.setDescription(`:white_check_mark: Sold a ${count} Watch For 🪙 ${count * 250}`);
            message.lineReply(SSELL)
          }
        }    
//--
  }
};
