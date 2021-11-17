const { Command } = require('discord.js-commando');
const { MessageEmbed, MessageAttachment, Collection, Client } = require("discord.js");
require('discord-reply'); // message.lineReply()
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');

// message.lineReply()

module.exports = class WithdrawCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'withdraw', // meow
			aliases: ["with"], // kitty-cat
			group: 'economy', // fun
			memberName: 'withdraw', // filename (meow)
			description: 'Withdraws money from your bank', // desc /Replies with a meow, kitty cat.
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

		});
	}

//  async run
	async run(message) {


      let User = message.author;

      let MSG = message.content.split(" ")
      let MSG1 = MSG.slice(1)

      let AM = MSG[1]

      //embed
      const EMBED = new MessageEmbed() 
      .setTimestamp()

      if(MSG1.length < 1) return message.say(this.client.commandPrefix+"with <amount/all>")

      if(AM.toLowerCase() === "all")
      {
        let BK = db.fetch(`bank_${User.id}`)
        if (BK === null) BK = 0;

        let CN = await db.fetch(`money_${User.id}`)
        if (CN === null) CN = 0;
        if(BK === 0) 
        {
          EMBED.setDescription("You doesn't have `any` coins inside your bank")
          EMBED.setColor("RED")
          message.lineReply(EMBED)          
        }
        else if(BK !== 0) 
        {

          db.subtract(`bank_${User.id}`, BK)
          db.add(`money_${User.id}`, BK)

          let CCL = db.fetch(`bank_${User.id}`)


          EMBED.setDescription(`**🪙 ${BK} withdrawn**, current bank balance is **🪙 ${CCL}**`)
          EMBED.setColor("GREEN")


          message.lineReply(EMBED)         
          
        }
      }
      else if(!isNaN(AM))
      {

        let BK = db.fetch(`bank_${User.id}`)
        if (BK === null) BK = 0;

        let CN = await db.fetch(`money_${User.id}`)
        if (CN === null) CN = 0;
        if(AM > BK) 
        {
          EMBED.setDescription("You doesn't have `that much` inside your bank")
          EMBED.setColor("RED")
          message.lineReply(EMBED)          
        }
        else if(BK === 0) 
        {
          EMBED.setDescription("You doesn't have `any` coins inside your bank")
          EMBED.setColor("RED")
          message.lineReply(EMBED)          
        }
        else if(AM < 0) 
        {
          EMBED.setDescription("; - ; Bruh Moment")
          EMBED.setColor("RED")
          message.lineReply(EMBED) 
        }
        else if(AM == 0) 
        {
          EMBED.setDescription("; - ; Bruh Moment")
          EMBED.setColor("RED")
          message.lineReply(EMBED) 
        }
        else if(BK !== 0) 
        {
          db.subtract(`bank_${User.id}`, AM)
          db.add(`money_${User.id}`, AM)

          let CCL = db.fetch(`bank_${User.id}`)

          EMBED.setDescription(`**🪙 ${AM} withdrawn**, current bank balance is **🪙 ${CCL}**`)
          EMBED.setColor("GREEN")

          message.lineReply(EMBED)
        }
      }
      else if(isNaN(AM))
      {
        EMBED.setDescription("Your argument should be either a `number` or `all`")
        EMBED.setColor("RED")
        message.lineReply(EMBED)
      }
        // db.set(`deptm_${User.id}`, Date.now())

//
	}
};