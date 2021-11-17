const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
require('discord-reply'); // message.lineReply()
const { Collection, Client } = require("discord.js");
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');

// message.lineReply()

module.exports = class SlotsCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'slots', // meow
			aliases: ['slot'], // kitty-cat
			group: 'economy', // fun
			memberName: 'slots', // filename (meow)
			description: '', // desc /Replies with a meow, kitty cat.
      guildOnly: true,
//      hidden: true, // false
//      ownerOnly: true,
//      clientPermissions: ['ADMINISTRATOR'],
//      userPermissions: ['MANAGE_MESSAGES'],
      throttling: 
        {
        usages: 1,
        duration: 2,
        },
      args: 
        [{
          key: 'amount', // Declaring the name of args for Run cmd
          prompt: '`What you Gonna Bet? an AIR?, You Need bet 50 or more.`',
          type: 'integer', // string, integer, user, member
        }],
		});
	}

//  async run
	async run(message, { amount }) {

const length = 1
var NUMBERS = '012456789';
var NO1 = '';
 for ( var i = 0; i < length; i++ ) 
 {
 NO1 += NUMBERS.charAt(Math.floor(Math.random() * NUMBERS.length));
 }
//--
var NO2 = '';
 for ( var i = 0; i < length; i++ ) 
 {
 NO2 += NUMBERS.charAt(Math.floor(Math.random() * NUMBERS.length));
 }
//--
var NO3 = '';
 for ( var i = 0; i < length; i++ ) 
 {
 NO3 += NUMBERS.charAt(Math.floor(Math.random() * NUMBERS.length));
 }
//--

    let user = message.author;
    let Money = await db.fetch(`money_${user.id}`)    
    
    const LIMIT = 5000

    if(amount < 50 ) return message.lineReply('`You Need bet 50 or more.`')
    if(amount > Money) return message.lineReply('`Haha, Funny. Where You got those Coins`, ||Air?||')
    if(amount) 
    {    
      if(Money < 50 ) return message.lineReply('`You doesnt\'t have any coins, Kiddo`') 
      if(amount > LIMIT) return message.lineReply('`Bet limit is 5000 coins`') 
      if(Money) 
      {
        if(NO1 == NO2 || NO2 == NO3 || NO1 == NO3 ) 
        {
          db.fetch(`money_${user.id}`)    
          db.add(`money_${user.id}`, amount * 2)
          let NMW = db.fetch(`money_${user.id}`)    

          let WON = new MessageEmbed()
          .setTitle(`${user.username}'s Slots`)
          .setDescription(`**S L O T**\n**${NO1} | ${NO2} | ${NO3}**\n
          Nice You Won!. 2x 🪙 ${amount}\nNow You Have 🪙 ${NMW}`)
          .setColor("GREEN")      


          message.say(WON)          
        }
        else 
        {
          db.fetch(`money_${user.id}`)    
          db.subtract(`money_${user.id}`, amount)
          db.add(`money_${this.client.user.id}`, amount)          
          
          let NML = db.fetch(`money_${user.id}`)    

          let LOSE = new MessageEmbed()
          .setTitle(`${user.username}'s Slots`)
          .setDescription(`**S L O T**\n**${NO1} | ${NO2} | ${NO3}**\n
          Say Goodbye to 🪙 ${amount}\nNow You Have 🪙 ${NML}`)
          .setColor("RED")      


          message.say(LOSE) 

        }
      } 
      else 
      {
        //
      }
    }
    
//--
	}
};