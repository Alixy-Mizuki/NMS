const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { Collection, Client } = require("discord.js");
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');

module.exports = class ServerinfoCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'serverinfo', // meow
			aliases: ['server'], // kitty-cat
			group: 'util', // fun
			memberName: 'serverinfo', // filename (meow)
			description: 'Server or Guild Information', // desc /Replies with a meow, kitty cat.
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


      let Owner = message.guild.owner

      let Tchannel = message.guild.channels.cache.size
      let Ccategory = message.guild.channels.cache.filter(X => X.type === "category").size
      let Ctext =  message.guild.channels.cache.filter(X => X.type === "text").size
      let Cvoice = message.guild.channels.cache.filter(X => X.type === "voice").size
      let Cnews = message.guild.channels.cache.filter(X => X.type === "news").size

      let Troles = message.guild.roles.cache.size
      let Hrole = "<@&"+message.guild.roles.highest.id+">" //<@&>

      let VL = message.guild.verificationLevel

      let Temoji = message.guild.emojis.cache.size
      let Aemoji = message.guild.emojis.cache.filter(X => X.animated).size
      let NAemoji = Temoji - Aemoji

      let Sboost = message.guild.premiumSubscriptionCount
      let Sblvl = message.guild.premiumTier

      let Tmember = message.guild.members.cache.size
      let Hmember = message.guild.members.cache.filter(member => !member.user.bot).size
      let Bmember = message.guild.members.cache.filter(member => member.user.bot).size

      let DND = message.guild.presences.cache.filter(P => P.status === "dnd").size
      let ONLINE = message.guild.presences.cache.filter(P => P.status === "online").size
      let IDLE = message.guild.presences.cache.filter(P => P.status === "idle").size
      let ALL = message.guild.members.cache.size
      let OFFLINE = ALL - IDLE - ONLINE - DND

      let Sregion = message.guild.region

      let ISP = message.guild.partnered


      //emojies

      let DND_E = '<:S_dnd:829371072843087882>';
      let ON_E = '<:S_online:829337249765261333>';
      let IDLE_E = '<:S_idle:829370935609393173>';
      let OFF_E = '<:S_offline:829371005540761610>';

      let embed = new MessageEmbed()
      .setColor("BLUE")
      .setAuthor(`Info for ${message.guild}`, message.guild.iconURL({ dynamic: true }))
      .addFields(
        {
          name: "Owner",
          value: Owner,
          inline: true
        },
        {
          name: "Owner ID",
          value: "`"+Owner.id+"`",
          inline: true
        },
        {
          name: "Channels",
          value: `Total: \`${Tchannel}\`\nCategory: \`${Ccategory}\`\nText: \`${Ctext}\`\nVoice: \`${Cvoice}\`\nNews: \`${Cnews}\``
        },
        {
          name: "Emojis",
          value: `Total: \`${Temoji}\`\nAnimated: \`${Aemoji}\`\nNormal: \`${NAemoji}\``,
          inline: true
        },
        {
          name: "Members",
          value: `Total: \`${Tmember}\`\nHumans: \`${Hmember}\`\nBots: \`${Bmember}\``,
          inline: true
        },
        {
          name: "Presences",
          value: `${ON_E}: \`${ONLINE}\`\n${IDLE_E}: \`${IDLE}\`\n${DND_E}: \`${DND}\`\n${OFF_E}: \`${OFFLINE}\``,
          inline: true
        },
        {
          name: "Server Boost",
          value: `Boost Count: \`${Sboost}\`\nServer Level: \`${Sblvl}\``,
          inline: true
        },
        {
          name: "Roles",
          value: `Total: \`${Troles}\`\nHighest Role: ${Hrole}`,
          inline: true
        },
        {
          name: "Verification Level",
          value: `\`${VL}\`` || 'None'
        },
        {
          name: "Region",
          value: `\`${Sregion.toUpperCase()}\``,
          inline: true
        },
        {
          name: "Is Partnered",
          value: "`"+ISP+"`",
          inline: true
        },
        {
          name: "Server Created At",
          value: "`"+message.guild.createdAt.toDateString()+"`",
          inline: true
        },
        {
          name: "Server ID",
          value: "`"+message.guild.id+"`"
        }
      )

    //  .addField("", )
//       .addField("Roles", `Total: ${} | : ${} | : ${} | : ${} | : ${}`)

      
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      message.channel.send(embed)


  }
};
