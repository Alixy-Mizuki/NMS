const { Command } = require('discord.js-commando');
const { MessageEmbed, Collection, Client, Util } = require("discord.js");
require('discord-reply'); // message.lineReply()
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');
const COLOR = process.env.COLOR


// message.lineReply()

module.exports = class DbsCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'dbs', // meow
			aliases: ['dbs'], // kitty-cat
			group: 'devs', // fun
			memberName: 'dbs', // filename (meow)
			description: 'Filters db keys', // desc /Replies with a meow, kitty cat.
      guildOnly: true,
      hidden: true, // false
      ownerOnly: true,
//      clientPermissions: ['ADMINISTRATOR'],
//      userPermissions: ['MANAGE_MESSAGES'],
      throttling: 
        {
        usages: 1,
        duration: 2,
        },
      args: 
        [{
          key: 'KEY', // Declaring the name of args for Run cmd
          prompt: 'Filter',
          type: 'string', // string, integer, user, member
          default: ""
        }],
		});
	}

//  async run
	async run(message, { KEY }) {
//	run(message, { text }) { }   //with args

		//return message.say('Meow!'); // same as message.channel.send
    
    let A = db.all()
    let F = []

    let M = A.filter(B => B.ID.startsWith(KEY))


    M.forEach(K => {

    F.push(K.ID+"\n")
    })

    message.say(`\`\`\`yaml\n${F.slice(0 , 25)}\n\`\`\``)
    message.say(`\`\`\`yaml\n${F.slice(26 , 50)}\n\`\`\``)
    message.say(`\`\`\`yaml\n${F.slice(51 , 75)}\n\`\`\``)
    message.say(`\`\`\`yaml\n${F.slice(76 , 100)}\n\`\`\``)

	}
};
