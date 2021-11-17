const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { Collection, Client } = require("discord.js");
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');

const { tictactoe } = require("reconlx");

module.exports = class TttCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'tictactoe', // meow
			aliases: ['ttt'], // kitty-cat
			group: 'fun', // fun
			memberName: 'tictactoe', // filename (meow)
			description: 'Play tictactoe With your friend', // desc /Replies with a meow, kitty cat.
      guildOnly: true,

		});
	}

//  async run
	run(message) {

    const member = message.mentions.members.first() 
    if(!member) return message.channel.send('```yaml\nCan you please specify a member\n```')

    new tictactoe
    ({
    player_two: member, 
    message: message
    })

  }
};

