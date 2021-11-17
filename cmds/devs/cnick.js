const { Command } = require('discord.js-commando');
const { MessageEmbed, MessageAttachment, Collection, Client } = require("discord.js");
require('discord-reply'); // message.lineReply()
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');

// message.lineReply()

module.exports = class CnickCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'cnick', // meow
			aliases: ['cn'], // kitty-cat
			group: 'devs', // fun
			memberName: 'cnick', // filename (meow)
			description: 'Change Bot\'s nickaname', // desc /Replies with a meow, kitty cat.
      guildOnly: true,
//      hidden: true, // false
      ownerOnly: true,
      clientPermissions: ['CHANGE_NICKNAME'],
//      userPermissions: ['MANAGE_MESSAGES'],
      throttling: 
        {
        usages: 1,
        duration: 4,
        },
      args: 
        [{
          key: 'NICK', // Declaring the name of args for Run cmd
          prompt: 'What is my new nickname?',
          type: 'string', // string, integer, user, member
//          default: 1          
        }],
		});
	}

//  async run
	run(message, { NICK }) {
//	run(message, { text }) {    //with args
const Bot = this.client.user.id
const BotN = message.guild.members.cache.get(`${Bot}`)

BotN.setNickname(`${NICK}`)
    .then(user => message.lineReply(`My new Nickname is \`${BotN.nickname || 'Default Name'}\``))


	}
};