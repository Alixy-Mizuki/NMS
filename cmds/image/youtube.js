const { Command } = require('discord.js-commando');
const { MessageEmbed, MessageAttachment, Collection, Client } = require("discord.js");
require('discord-reply'); // message.lineReply()
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');
const canvacord = require("canvacord")

// message.lineReply()

module.exports = class YtimgCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'youtube', // meow
			aliases: ['yti'], // kitty-cat
			group: 'image', // fun
			memberName: 'youtube', // filename (meow)
			description: 'Youtube Image Manipulation', // desc /Replies with a meow, kitty cat.
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
    const args = message.content.split(" ")

    let V = message.mentions.users.first() || message.guild.members.cache.get(args[1])
    console.log(args[1])

    if(!V) return message.lineReply("Mention Someone or use UserID!")

    let VID = V.id

    let NIK = message.guild.members.cache.get(VID)

    let AV2 = NIK.user.displayAvatarURL({dynamic: false, format: "png"}) 

    let MSG = message.content.split(" ")
    let Message = MSG.slice(2).join(' ')

    let Text = Message
    if(!Text) return message.lineReply('Please provide the text for the image!')
  
    let IMG = await canvacord.Canvas.youtube({
    username: NIK.nickname || V.username,
    content: Text.slice(0),
    avatar: AV2, 
    dark: true
    })
    let ATTCH = new MessageAttachment(IMG, `youtube.png`)
    const AW = await message.channel.send("Generating Image...")
    await delay(600)
    await AW.edit("Image Generated")
    await message.channel.send(ATTCH)

	}
};