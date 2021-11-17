const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { Collection, Client } = require("discord.js");
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');


module.exports = class CinvCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'cinv', // meow
			aliases: [], // kitty-cat
			group: 'devs', // fun
			memberName: 'cinv', // filename (meow)
			description: 'INVITE', // desc /Replies with a meow, kitty cat.
      hidden: true, // false            
      throttling: 
        {
        usages: 1,
        duration: 4,
        },
      args: 
        [{
          key: 'Chid', // Declaring the name of args for Run cmd
          prompt: '`I need a channel id `',
          type: 'string', // string, integer, user, member
        }],
		});
	}

	run(message, { Chid }) { 

const BO = ['692632336961110087' , "791682875224490014"]
const bot = this.client.user
      if(!BO.includes(message.author.id)) return message.reply(`\`\`\`yaml\nMissing Permission To access Devs Commands\n\`\`\``)


const CHL = this.client.channels.cache.get(Chid);
  
const INV = CHL

INV.createInvite({ maxAge: 0, unique: true, maxUses: 0 })
  .then(invite => message.channel.send(`Created an invite with a code of ${invite}`))
  

  
  }
};