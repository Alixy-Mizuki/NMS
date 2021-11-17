const { Command } = require('discord.js-commando');
const { MessageEmbed, Collection, Client, Util } = require("discord.js");
require('discord-reply'); // message.lineReply()
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');
const COLOR = process.env.COLOR


// message.lineReply()

module.exports = class DbdelCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'dbdel', // meow
			aliases: ['dbd'], // kitty-cat
			group: 'devs', // fun
			memberName: 'dbdel', // filename (meow)
			description: 'del db keys', // desc /Replies with a meow, kitty cat.
      guildOnly: true,
     hidden: true, // false
     ownerOnly: true,
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
//	run(message, { text }) { }   //with args


    let M = message.content.split(" ")
    let MSG = M.slice(1)//.join(" ").replace(/ /gi, "")

    if(!MSG.length) return message.lineReply("KEY?")

    try
    {
        for (let i = 0; i < MSG.length; i++) 
        {
          db.delete(`${MSG[i]}`)
        }
        await message.lineReply("Succesfully Deleted the Key")
    }
    catch(E)
    {
      throw E
      message.lineReply("Failed to delete the key")
    }


	}
};
