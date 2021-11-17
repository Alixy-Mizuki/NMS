const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { Collection, Client } = require("discord.js");
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');


module.exports = class GuildleaveCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'guildleave', // meow
			aliases: ['gld'], // kitty-cat
			group: 'devs', // fun
			memberName: 'guildleave', // filename (meow)
			description: 'guild leave commands', // desc /Replies with a meow, kitty cat.
      hidden: true, // false 
      ownerOnly: true,     
      args: 
        [{
          key: 'GID', // Declaring the name of args for Run cmd
          prompt: `I need a guild id so i can leave that specific guild`,
          type: 'string', // string, integer, user, member
        }],
		});
	}

//  async run
	run(message, { GID }) {

const BO = ['692632336961110087' , "791682875224490014"]
const bot = this.client.user

      if(!BO.includes(message.author.id)) return message.reply(`\`\`\`yaml\nMissing Permission To access Devs Commands\n\`\`\``)

  let G = this.client.guilds.cache.get(GID)

  G.leave()
  message.channel.send(`Succesfully Leaving ${G}`)
     
      
  }
};