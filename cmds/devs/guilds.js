const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { Collection, Client } = require("discord.js");
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');


module.exports = class GuildsCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'guilds', // meow
			aliases: [], // kitty-cat
			group: 'devs', // fun
			memberName: 'guilds', // filename (meow)
			description: 'Show All guild where the bot has in | Only Bot Owner can use the commands.', // desc /Replies with a meow, kitty cat.
      hidden: true, // false
      ownerOnly: true,
      throttling: 
        {
        usages: 1,
        duration: 5,
        },

		});
	}

//  async run
	run(message) {

const BO = '692632336961110087';

if(message.author.id === BO) {
    const LG = [];

    this.client.guilds.cache.forEach(server => {
    LG.push(`${server.name} : ${server.id}\n`);
    //console.log(server.name + " id: " + server.id);
    })   
   
    let chid = new MessageEmbed()
    .setDescription(`\`\`\`yaml\n${LG.join('')}\nServer Count : ${this.client.guilds.cache.size}\n\`\`\``)
  
  message.channel.send(chid)

  }
  else 
  {
    message.reply(`\`\`\`yaml\nOnly Devs can use this command\n\`\`\``)
  }



  }
};
