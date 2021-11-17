const { Command } = require('discord.js-commando');
const Discord = require("discord.js");
const { MessageEmbed, Collection, Client, Util } = require("discord.js");
require('discord-reply'); // message.lineReply()
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');
const COLOR = process.env.COLOR
const { parse } = require("twemoji-parser");

// message.lineReply()

module.exports = class EnlargeCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'enlarge', // meow
			aliases: ['enl'], // kitty-cat
			group: 'image', // fun
			memberName: 'enlarge', // filename (meow)
			description: 'Enlarge an Emoji', // desc /Replies with a meow, kitty cat.
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
	async run(message) {

    let AGS = message.content.split(' ')

    const emoji = AGS[1];

    if (!emoji) return message.channel.send("No emoji provided!");
    let custom = Discord.Util.parseEmoji(emoji);

    const embed = new MessageEmbed()
    .setTitle(`Enlarged version of ${emoji}`)
    .setColor(COLOR);
    

    if (custom.id) {
        embed.setImage(`https://cdn.discordapp.com/emojis/${custom.id}.${custom.animated ? "gif" : "png"}`);
        return message.channel.send(embed);
    }
    else 
    {
        //console.log('emoji' ,emoji)
        let parsed = parse(emoji, { assetType: "png" });
        //console.log('parsed', parsed)
        if (!parsed[0]) return message.channel.send("Invalid emoji!");

        embed.setImage(parsed[0].url);
        return message.channel.send(embed);
    }
//
	}
};