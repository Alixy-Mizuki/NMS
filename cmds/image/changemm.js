const { Command } = require('discord.js-commando');
const { MessageEmbed, MessageAttachment, Collection, Client } = require("discord.js");
require('discord-reply'); // message.lineReply()
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');
const canvacord = require("canvacord")

// message.lineReply()

module.exports = class ChangemmCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'changemymind', // meow
			aliases: ['changemm', 'cmm'], // kitty-cat
			group: 'image', // fun
			memberName: 'changemm', // filename (meow)
			description: 'Change My Mind Image Manipulation', // desc /Replies with a meow, kitty cat.
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
          key: 'Text', // Declaring the name of args for Run cmd
          prompt: 'Please provide the text for the image!',
          type: 'string', // string, integer, user, member
//          default: 1          
        }],
		});
	}

//  async run
	async run(message, { Text }) {
//	run(message, { text }) {    //with args

    let IMG = await canvacord.Canvas.changemymind(Text)
    let ATTCH = new MessageAttachment(IMG, `changemymind.png`)
    const AW = await message.channel.send("Generating Image...")
    await delay(600)
    await AW.edit("Image Generated")
    await message.channel.send(ATTCH)

	}
};