const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { Collection, Client } = require("discord.js");
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');
const randomPuppy = require('random-puppy');

module.exports = class MeirlCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'meirl', // meow
			aliases: [], // kitty-cat
			group: 'fun', // fun
			memberName: 'meirl', // filename (meow)
			description: 'ME IN REAL LIFE XD', // desc /Replies with a meow, kitty cat.
      guildOnly: true,
      throttling: 
        {
        usages: 1,
        duration: 1,
        },
		});
	}

  async run(message) {
    const subReddits = ["me_irl"] //, "me_irl", "dankmeme"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random);

    const embed = new MessageEmbed()
    .setImage(img)
    .setTitle(`From /r/${random}`)
    .setURL(`http://reddit.com/${random}`)
    .setColor("RANDOM")

    message.channel.send(embed); 

  }
};
