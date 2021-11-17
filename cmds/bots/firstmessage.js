const { Command } = require('discord.js-commando');
const { MessageEmbed, Collection, Client, Util } = require("discord.js");
require('discord-reply'); // message.lineReply()
const delay = require('delay');
const COLOR = process.env.COLOR


// message.lineReply()

module.exports = class FirstmessageCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'firstmessage', // meow
			aliases: ["fmsg"], // kitty-cat
			group: 'bots', // fun
			memberName: 'firstmessage', // filename (meow)
			description: 'Go back to the first message on this channel', // desc /Replies with a meow, kitty cat.
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
//	run(message, { text }) {    //with args

let FM_1 = new MessageEmbed()
.setTitle(message.channel.name+" first message")
.setColor(COLOR)
.setDescription(`Fetching...`)


let FM_2 = new MessageEmbed()
.setTitle(message.channel.name+" first message")
.setColor(COLOR)
.setDescription(`[Click Here to Jump to the First Message](https://discord.com/channels/${message.guild.id}/${message.channel.id}/0)`)


const MSG = await message.lineReply(FM_1)
await delay(3000)
await MSG.edit(FM_2)



	}
};