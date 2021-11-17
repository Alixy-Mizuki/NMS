const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { Collection, Client } = require("discord.js");
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');


module.exports = class CinfoCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'cinfo', // meow
			aliases: [], // kitty-cat
			group: 'devs', // fun
			memberName: 'cinfo', // filename (meow)
			description: 'INFO', // desc /Replies with a meow, kitty cat.
      hidden: true, // false      
      throttling: 
        {
        usages: 1,
        duration: 4,
        },
      args: 
        [{
          key: 'guildID', // Declaring the name of args for Run cmd
          prompt: '`I need a guild id`',
          type: 'string', // string, integer, user, member
        }],
		});
	}

 run(message, { guildID }) {   

const BO = ['692632336961110087' , "791682875224490014"]
const bot = this.client.user
      if(!BO.includes(message.author.id)) return message.reply(`\`\`\`yaml\nMissing Permission To access Devs Commands\n\`\`\``)


  let G = this.client.guilds.cache.get(guildID)
  



const Gchl = G.channels.cache.array().join(" | | ")

const E = new MessageEmbed()
 .addField("ID", `\`${Gchl}\``)
 .addField("ID", `${Gchl}`)
//const F = new MessageEmbed()
// .addField("NAME (strings)", `${Gchl}`) 

  message.channel.send(`\`${Gchl}\``)
  message.channel.send(`${Gchl}`)
  //message.channel.send(`${E}${F}`)


  
  }
};