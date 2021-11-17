const { Command } = require('discord.js-commando');
const { MessageEmbed, MessageAttachment, Collection, Client } = require("discord.js");
require('discord-reply'); // message.lineReply()
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');
const canvacord = require("canvacord")

// message.lineReply()

module.exports = class TriggerCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'trigger', // meow
			aliases: ['triggered'], // kitty-cat
			group: 'image', // fun
			memberName: 'trigger', // filename (meow)
			description: 'Trigger Image Manipulation', // desc /Replies with a meow, kitty cat.
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
	async run(message, { Text }) {
//	run(message, { text }) {    //with args

    let V = message.mentions.users.first() || message.author
    let AV = V.displayAvatarURL({dynamic: false, format: "png"})

    let IMG = await canvacord.Canvas.trigger(AV)
    let ATTCH = new MessageAttachment(IMG, `trigger.gif`)
    const AW = await message.channel.send("Generating Image...")
    await delay(600)
    await AW.edit("Image Generated")
    await message.channel.send(ATTCH)

	}
};