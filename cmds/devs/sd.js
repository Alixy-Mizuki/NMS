const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { Collection, Client } = require("discord.js");
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');


module.exports = class SdCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'sd', // meow
			aliases: [], // kitty-cat
			group: 'devs', // fun
			memberName: 'sd', // filename (meow)
			description: 'send msg to a specific channel through bot cmd', // desc /Replies with a meow, kitty cat.
      hidden: true, // false
      ownerOnly: true,
      throttling: 
        {
        usages: 1,
        duration: 10,
        },
      args: 
        [{
          key: 'ChannelID', // Declaring the name of args for Run cmd
          prompt: 'i need channel id',
          type: 'string', // string, integer, user, member
        },
        {
          key: 'Msg', // Declaring the name of args for Run cmd
          prompt: 'What message do you want me to send?',
          type: 'string', // string, integer, user, member
        }],
		});
	}

//  async run
async	run(message, { ChannelID, Msg }) {    

const BO = '692632336961110087';
const bot = this.client.user

  if(message.author.id === BO) 
    {
        const CLID = ChannelID

        const CHLNAME = this.client.channels.cache.get(ChannelID)
        const Message = Msg

            this.client.channels.cache.get(`${CLID}`).send(Message).then(AFTER =>{
            const GUILD = AFTER.guild

             message.channel.send(`\`\`\`yaml\nMessage Successfully Sended to [ ${CHLNAME.name} ]\nMessage: ${Message}\nGuilds: ${GUILD.name}\n\`\`\``)

          })
    }
    else 
    {
      message.reply(`\`\`\`yaml\nMissing Permission To access Devs Commands\n\`\`\``)
    }


  }
};