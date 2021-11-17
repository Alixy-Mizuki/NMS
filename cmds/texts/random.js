const { Command } = require('discord.js-commando');
const { MessageEmbed, MessageAttachment, Collection, Client } = require("discord.js");
require('discord-reply'); // message.lineReply()
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');

// message.lineReply()

module.exports = class RandomCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'random', // meow
			aliases: ['rdm'], // kitty-cat
			group: 'texts', // fun
			memberName: 'random', // filename (meow)
			description: 'randomize letter cases', // desc /Replies with a meow, kitty cat.
      // guildOnly: true,
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
	run(message, args) {
//	run(message, { text })    //with args


        //Checks if there is something to randomize
        if (!args[0]) return message.lineReply("Please also provide text to case randomize");

        //Text needs to be in a const here
        const str = args.split("");

        //Randomizes the text
        const randified = str.map(char => Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase()).join('')

        // //Gets the randomized text and sends it
        // const randified = randify(str);
        message.lineReply(randified);





	}
};