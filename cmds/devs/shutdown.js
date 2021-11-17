const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { Collection, Client } = require("discord.js");
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');


module.exports = class ShutdownCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'shutdown', // meow
			aliases: [], // kitty-cat
			group: 'devs', // fun
			memberName: 'shutdown', // filename (meow)
			description: 'Shutdown the bot', // desc /Replies with a meow, kitty cat.
      hidden: true, // false
      ownerOnly: true,

		});
	}

//  async run
async	run(message) {

const BO = '692632336961110087';
const bot = this.client.user
  if(message.author.id === BO) 
    {

      const STD = await message.channel.send(`Shutting Down... in 3`);
      await delay(1500);
      await STD.edit('Shutting Down... in 2');
      await delay(1500);
      await STD.edit(`Shutting Down... in 1`);
      await delay(1500);
      await STD.edit('Shutting Down...');
      await delay(1500);
      await process.exit()
      
    }
    else
    {
      message.reply(`\`\`\`yaml\nMissing Permission To access Devs Commands\n\`\`\``)
    }
  }
};