const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { Collection, Client } = require("discord.js");
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');


module.exports = class BotnameCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'botname', // meow
			aliases: ["setbotname", 'sbn'], // kitty-cat
			group: 'devs', // fun
			memberName: 'botname', // filename (meow)
			description: 'Set Bot Tag on command instead going to Discord Developer Page manually | Only Bot Owner can use the commands', // desc /Replies with a meow, kitty cat.
      //hidden: true, // false      
      throttling: 
        {
        usages: 2,
        duration: 1800,
        },
      args: 
        [{
          key: 'name', // Declaring the name of args for Run cmd
          prompt: 'What is my new name?',
          type: 'string', // string, integer, user, member
        }],
		});
	}

//  async run
  async run(message, { name }) {    
const BO = '692632336961110087';
const bot = this.client.user
  if(message.author.id === BO) 
    {
        bot.setUsername(`${name}`).then(user => message.reply(`My new UserTag is \`${this.client.user.username}\``))
    }
    else 
    {
      message.reply(`\`\`\`yaml\nMissing Permission To access Devs Commands\n\`\`\``)
    }
  }
};
