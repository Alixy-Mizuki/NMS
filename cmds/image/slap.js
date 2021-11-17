const { Command } = require('discord.js-commando');
const { MessageEmbed, MessageAttachment, Collection, Client } = require("discord.js");
require('discord-reply'); // message.lineReply()
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');
const canvacord = require("canvacord")

// message.lineReply()

module.exports = class SlapCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'slap', // meow
			aliases: [], // kitty-cat
			group: 'image', // fun
			memberName: 'slap', // filename (meow)
			description: 'Slap Image Manipulation', // desc /Replies with a meow, kitty cat.
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

    let V = message.mentions.users.first()
    let V2 = message.author

    if(!V) return message.lineReply("Mention someone to slap")

    let AV = V.displayAvatarURL({dynamic: false, format: "png"})
    let AV2 = V2.displayAvatarURL({dynamic: false, format: "png"})

    let IMG = await canvacord.Canvas.slap(AV2, AV)
    let ATTCH = new MessageAttachment(IMG, `slap.png`)
    const AW = await message.channel.send("Generating Image...")
    await delay(600)
    await AW.edit("Image Generated")
    await message.channel.send(ATTCH)

	}
};