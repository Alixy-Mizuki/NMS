const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { Collection, Client } = require("discord.js");
const delay = require('delay');

module.exports = class ChannelinfoCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'channelinfo', // meow
			aliases: ['chlinf'], // kitty-cat
			group: 'util', // fun
			memberName: 'channelinfo', // filename (meow)
			description: 'Channel Information', // desc /Replies with a meow, kitty cat.
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
	run(message) {

      let CHL = message.channel

      let LCmsg = CHL.lastMessage.content
      let LIDmsg = CHL.lastMessage.id

      let Fmsg = `https://discord.com/channels/${message.guild.id}/${CHL.id}/0`

      let PRT = CHL.parent
      let Pname = CHL.parent.name
      let Pid = CHL.parent.id

      let Cname = CHL.name
      let Cid = CHL.id

      let CD = CHL.rateLimitPerUser
      let Crt = CHL.createdAt.toDateString()

      let Ctopic = CHL.topic
      let Cnsfw = CHL.nsfw


      let embed = new MessageEmbed()
      .setColor("BLUE")
      .setAuthor(`Info for ${Cname}`, message.guild.iconURL({ dynamic: true }))
      .addFields(
        {
          name: "Channel",
          value: "<#"+CHL+">\n`"+Cid+"`",
          inline: true
        },
        {
          name: "Channel Parent",
          value: "<#"+PRT+">\n`"+Pid+"`",
          inline: true
        },
        {
          name: "First Message",
          value: `[Click Here](${Fmsg})`
        },
        {
          name: "Latest Message",
          value: `${LCmsg}\n\`${LIDmsg}\``,
          inline: true
        },
        {
          name: "Channel Cooldown",
          value: `\`${CD} Secs\``
        },
        {
          name: "Channel Topic",
          value: `\`${Ctopic}\``,
          inline: true
        },
        {
          name: "Is Nsfw",
          value: `\`${Cnsfw}\``,
          inline: true
        }
      )

    //  .addField("", )
//       .addField("Roles", `Total: ${} | : ${} | : ${} | : ${} | : ${}`)

      
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      message.channel.send(embed)


  }
};
