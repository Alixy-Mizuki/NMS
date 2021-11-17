const { Command } = require('discord.js-commando');
const { MessageEmbed, Collection, Client } = require("discord.js");
require('discord-reply'); // message.lineReply()
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');

// message.lineReply()

module.exports = class SayCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'say', // meow
			aliases: [], // kitty-cat
			group: 'misc', // fun
			memberName: 'say', // filename (meow)
			description: 'Bot Say ... ?', // desc /Replies with a meow, kitty cat.
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
      args: 
        [{
          key: 'text', // Declaring the name of args for Run cmd
          prompt: 'What text would you like the bot to say?',
          type: 'string', // string, integer, user, member
//          default: 1
        }],
		});
	}

//  async run
//	run(message) {
	run(message, { text }) {    //with args

		//return message.say('Meow!'); // same as message.channel.send
  message.say(text)

	}
};