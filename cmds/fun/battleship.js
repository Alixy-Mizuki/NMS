const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
require('discord-reply'); // message.lineReply()
const { Collection, Client } = require("discord.js");
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');

const { DiscordBattleShip } = require("discord-battleship");
// message.lineReply()

module.exports = class BattleshipCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'battleship', // meow
			aliases: ['btsp'], // kitty-cat
			group: 'fun', // fun
			memberName: 'battleship', // filename (meow)
			description: 'Fucking battleship', // desc /Replies with a meow, kitty cat.
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

		});
	}

//  async run
//	run(message) {
	run(message) {    //with args
  let User = message.mentions.members.first();
    if (!User || User.id === message.member.id || User.user.bot) return message.lineReply("Please include a user!")

    const BSHIP = new DiscordBattleShip({
    embedColor: "RED", /* Any Discord.js Color Resolvable will work. */
    prefix: "x", /* This is the prefix that will be used in the users DM's for commands. You can set this to any string. */
    })
    BSHIP.createGame(message);
    
	}
};