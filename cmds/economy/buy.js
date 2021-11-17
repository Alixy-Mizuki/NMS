const { Command } = require('discord.js-commando');
const { MessageEmbed, Collection, Client } = require("discord.js");
require('discord-reply'); // message.lineReply()
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');


module.exports = class BuyCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'buy', // meow
			aliases: [], // kitty-cat
			group: 'economy', // fun
			memberName: 'buy', // filename (meow)
			description: 'Buy Something from the shop', // desc /Replies with a meow, kitty cat.
      guildOnly: true,
      throttling: 
        {
        usages: 1,
        duration: 2,
        },
      args: 
        [{
          key: 'type', // Declaring the name of args for Run cmd
          prompt: `What would you like to buy?\n\`buy <item> <count>\``,
          type: 'string', // string, integer, user, member
        },
        {
          key: 'count', // Declaring the name of args for Run cmd
          prompt: 'How Many?',
          type: 'integer', // string, integer, user, member 
          default: 1          
        }],
		});
	}

	async run(message, { type, count }) { 
        
        let amount = await db.fetch(`money_${message.author.id}`)
        let user = message.author;

        let Car = await db.fetch(`car_${user.id}`);
        let Watch =  await db.fetch(`watch_${user.id}`);


        let Ccar = count * 500
        let Cwatch = count * 250


        let FBUY = new MessageEmbed()
        .setTimestamp()
        .setColor("RED")

        let SBUY = new MessageEmbed()
        .setTimestamp()
        .setColor("GREEN")



        if (type == 'car' )
        {
          if(amount < 500) 
          {
            FBUY.setDescription("You do not have enough money to buy this item. Please try another one")

            message.lineReply(FBUY);
          }
          else if(amount < Ccar)
          {
            FBUY.setDescription("Where you got those money?\nFrom air?")

            message.lineReply(FBUY);
          }
          else if(count < 0 || count == 0)
          {
            FBUY.setDescription("; - ; Bruh Moment")

            message.lineReply(FBUY);
          }
          else if(count > 0)
          { 
            db.fetch(`car_${user.id}`);
            db.add(`car_${message.author.id}`, count)
  
            db.subtract(`money_${message.author.id}`, count * 500);
            db.add(`money_${this.client.user.id}`, count * 500)  

            SBUY.setDescription(`Successfully bought ${count} 🚗`)

            message.channel.send(SBUY)
          }
        }
        else if (type == 'watch')
        {
          if(amount < 250) 
          {
            FBUY.setDescription("You do not have enough money to buy this item. Please try another one")

            message.lineReply(FBUY);
          }
          else if(amount < Cwatch)
          {
            FBUY.setDescription("Where you got those money?\nFrom air?")

            message.lineReply(FBUY);
          }
          else if(count < 0 || count == 0)
          {
            FBUY.setDescription("; - ; Bruh Moment")

            message.lineReply(FBUY);
          }
          else if(count > 0)
          { 
            db.fetch(`watch_${user.id}`);
            db.add(`watch_${message.author.id}`, count)

            db.subtract(`money_${message.author.id}`, count * 250);
            db.add(`money_${this.client.user.id}`, count * 250)  

            SBUY.setDescription(`Successfully bought ${count} ⌚`)

            message.channel.send(SBUY)
          }
        }
  }
};    