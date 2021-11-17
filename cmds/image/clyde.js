const { Command } = require('discord.js-commando');
const { MessageEmbed, MessageAttachment, Collection, Client } = require("discord.js");
require('discord-reply'); // message.lineReply()
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');
const canvacord = require("canvacord")

// message.lineReply()

module.exports = class ClydeCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'clyde', // meow
			aliases: [], // kitty-cat
			group: 'image', // fun
			memberName: 'clyde', // filename (meow)
			description: 'Clyde Image', // desc /Replies with a meow, kitty cat.
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

    let IMG = await canvacord.Canvas.clyde(Text)
    let ATTCH = new MessageAttachment(IMG, `clyde.png`)
    const AW = await message.channel.send("Generating Image...")
    await delay(600)
    await AW.edit("Image Generated")
    await message.channel.send(ATTCH)

	}
};