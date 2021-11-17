const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { Collection, Client } = require("discord.js");
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');
const version = process.env.VERSION
const moment = require('moment');

module.exports = class WhoisCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'whois', // meow
			aliases: ['userinfo'], // kitty-cat
			group: 'util', // fun
			memberName: 'whois', // filename (meow)
			description: 'User\'s Infomation', // desc /Replies with a meow, kitty cat.
      guildOnly: true,
      throttling: 
        {
        usages: 1,
        duration: 2,
        },

		});
	}

//  async run
	run(message) {

      let user = message.mentions.users.first() || 
      message.guild.members.cache.get() || 
      message.mentions.users.get() || 
      message.author;
      // let user = target.id;
     

      let userArray = message.content.split(" ");
      let userArgs = userArray.slice(1);     

      // console.log(userArgs)
      // console.log(userArgs.slice(0).join(" "))

      let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs.slice(0).join(" ")) || message.member;
      let avatar = member.user.displayAvatarURL({ dynamic: true });    

      let x = Date.now() - member.createdAt;
      let y = Date.now() - message.guild.members.cache.get(member.id).joinedAt;
      const joined = Math.floor(y / 86400000);

// DEFINING ALL THINGS      

      const joineddate = moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss");
      let Status = member.presence.status || '<:S_offline:829371005540761610>' ;
      let ISBOT = member.user.bot
      // let FetchFlag = member.user
      // let Flag = FetchFlag.flags.toArray()
      // let AV = user.displayAvatarURL({ dynamic: true })
      const UJoinD = moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY")
      const UjoinS = moment.utc(member.user.joinedAt).format("dddd, MMMM Do YYYY")

// IF STATEMENTS
      // if (Flag == "" ) Flag = '`None`'
      // if (Flag == 'HOUSE_BRAVERY') Flag = `<:HP_Bravery:828894005873737739>`; // BRAVERY
      // if (Flag == 'HOUSE_BALANCE') Flag = `<:HP_Balance:828897135063728130>`; // BALANCE
      // if (Flag == 'HOUSE_BRILLIANCE') Flag = `<:HP_Brilliance:828897242928513046>`; // BRILLIANCE
      // if (Flag == 'VERIFIED_BOT') Flag = `<:B_verifiedbot:829363220401094686>`; // VERIFIED BOT
      // if (Flag == 'EARLY_VERIFIED_BOT_DEVELOPER') Flag = `<:B_EVbotdev:829363845583208470>`; // EVBotDev
      // if (Flag == 'VERIFIED_DEVELOPER') Flag = `<:B_EVbotdev:829363845583208470>`; // VERIFIED_DEVELOPER
      // if (Flag == 'EARLY_SUPPORTER') Flag = `<:B_earlysupporter:829366596946493501>`; // EARLY_SUPPORTER
      // if (Flag == 'BUGHUNTER_LEVEL_1') Flag = `<:B_bhlvl1:829367905681801267>`; // BUGHUNTER_LEVEL_1
      // if (Flag == 'BUGHUNTER_LEVEL_2') Flag = `<:B_bhlvl2:829368003761537074>`; // BUGHUNTER_LEVEL_2
    /*  if (Flag == 'HOUSE_BRILLIANCE') Flag = `<:HP_Brilliance:828897242928513046>`; // BRILLIANCE
      if (Flag == 'HOUSE_BRILLIANCE') Flag = `<:HP_Brilliance:828897242928513046>`; // BRILLIANCE
      if (Flag == 'HOUSE_BRILLIANCE') Flag = `<:HP_Brilliance:828897242928513046>`; // BRILLIANCE
      
/*
DISCORD_EMPLOYEE
PARTNERED_SERVER_OWNER
DISCORD_PARTNER (deprecated)
HYPESQUAD_EVENTS
BUGHUNTER_LEVEL_1
HOUSE_BRAVERY
HOUSE_BRILLIANCE
HOUSE_BALANCE
EARLY_SUPPORTER
TEAM_USER
SYSTEM
BUGHUNTER_LEVEL_2
VERIFIED_BOT
EARLY_VERIFIED_BOT_DEVELOPER
VERIFIED_DEVELOPER (deprecated)
*/

     // const FLAGS = Flag.join(' ');

      // if(AV.includes(".gif")) AV = "<:Nitro:829369955773710366>"
      // if(AV.includes(".webp")) AV = ""
      // if(AV.includes(".png")) AV = ""
      // if(AV.includes(".jpeg")) AV = ""
      // if(AV.includes(".jpg")) AV = ""


      if(Status == 'dnd') Status = '<:S_dnd:829371072843087882>';
      if(Status == 'online') Status = '<:S_online:829337249765261333>';
      if(Status == 'idle') Status = '<:S_idle:829370935609393173>';
      if(Status == "offline") Status = '<:S_offline:829371005540761610>';



// EMBED
      
      let e = new MessageEmbed()
      .setColor("#C724B1")
      .setTimestamp()
      .addField(`**User**`, `${member}\n\`${member.user.tag}\`\n\`Status:\` ${Status}\n**User ID**\n\`${member.id}\``, true)
      .addField("**Is Bot?**", `\`${ISBOT}\`\n\n\n**Nickname**\n\`${member.nickname || 'None'}\``, true)
      .addField("**Joined Discord**", `\`${UJoinD}\`\n\n\n**Joined Server**\n\`${UjoinS}\``, true)
    //  .addField("**Badges**", `${Flag}${AV}` || '`None`', true)  
      .addField('**Roles**', `<@&${member._roles.join('> <@&') || ' '}>`, true)
    
    


      .setThumbnail(avatar)
      message.channel.send(e);





  }
};
