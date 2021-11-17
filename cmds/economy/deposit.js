const { Command } = require('discord.js-commando');
const { MessageEmbed, MessageAttachment, Collection, Client } = require("discord.js");
require('discord-reply'); // message.lineReply()
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');

// message.lineReply()

module.exports = class DepositCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'deposit', // meow
			aliases: ["dep"], // kitty-cat
			group: 'economy', // fun
			memberName: 'deposit', // filename (meow)
			description: 'Deposit money into your bank account from your pocket!', // desc /Replies with a meow, kitty cat.
      guildOnly: true,
//      hidden: true, // false
//      ownerOnly: true,
//      clientPermissions: ['ADMINISTRATOR'],
//      userPermissions: ['MANAGE_MESSAGES'],
      throttling: 
        {
        usages: 1,
        duration: 6,
        },

		});
	}

//  async run
	async run(message) {
//	run(message, { text }) {    //with args

      let User = message.author;

      let MSG = message.content.split(" ")
      let MSG1 = MSG.slice(1)

      let AM = MSG[1]

      //embed
      const EMBED = new MessageEmbed() 
      .setTimestamp()


      if(MSG1.length < 1) return message.say(this.client.commandPrefix+"dep <amount/all | max>")


      if(AM.toLowerCase() === "all" || AM.toLowerCase() === "max")
      {
        let BK = db.fetch(`bank_${User.id}`)
        if (BK === null) BK = 0;

        let CN = await db.fetch(`money_${User.id}`)
        if (CN === null) CN = 0;
        if(CN === 0) 
        {
          EMBED.setDescription("You doesn't have `any` coins inside your pocket")
          EMBED.setColor("RED")
          message.lineReply(EMBED)          
        }
        else if(CN !== 0) 
        {
          db.add(`bank_${User.id}`, CN)
          db.subtract(`money_${User.id}`, CN)

          let CCL = db.fetch(`bank_${User.id}`)

          EMBED.setDescription(`**🪙 ${CN} deposited**, current bank balance is **🪙 ${CCL}**`)
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
        if(AM > CN)
        {
          EMBED.setDescription("You doesn't have `that much` inside your pocket")
          EMBED.setColor("RED")
          message.lineReply(EMBED)          
        }
        else if(CN === 0) 
        {
          EMBED.setDescription("You doesn't have `any` coins inside your pocket")
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
        else if(CN !== 0) 
        {
          db.add(`bank_${User.id}`, AM)
          db.subtract(`money_${User.id}`, AM)

          let CCL = db.fetch(`bank_${User.id}`)

          EMBED.setDescription(`**🪙 ${AM} deposited**, current bank balance is **🪙 ${CCL}**`)
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