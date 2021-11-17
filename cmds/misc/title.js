const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { Collection, Client } = require("discord.js");
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');


module.exports = class TitleCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'title', // meow
			aliases: [], // kitty-cat
			group: 'misc', // fun
			memberName: 'title', // filename (meow)
			description: 'Giving a Random title for you', // desc /Replies with a meow, kitty cat.
      guildOnly: true,
      throttling: 
        {
        usages: 1,
        duration: 2,
        },
		});
	}

async	run(message) {

const nick = 
 [
 "The Bully",
 "Gentleman",
 "Raider Of Panties",
 "Karen",
 "Boss",
 //"",
 "CEO of Cupcakes"
 ];

  const index2 = Math.floor(Math.random() * (nick.length - 1) + 1);
  const NICK = nick[index2]

  let member = message.guild.member(message.author)
  let Owner = member.id
  let user = message.author;
  let timeout = 600000;

  let Old = member.user.username
  let LIMIT = member.nickname

  let cooldown = await db.fetch(`cd_${message.guild.id}`);

  if(cooldown !== null && timeout - (Date.now() - cooldown) > 0) {
    let time = ms(timeout - (Date.now() - cooldown));
    message.reply(`\`\`\`yaml\nTitle Commands Still on server cooldown. You can use it again after :\n${time.minutes} minutes and ${time.seconds} seconds\n\`\`\``)
    }
    else if(Owner == message.guild.ownerID) {
    message.lineReply(`Cannot Change Your Nickname, Because You're the \`Owner\` of the Server`)  
    }        
    else if(member.roles.highest.comparePositionTo(message.guild.me.roles.highest) >= 0) {
    message.lineReply(`Cannot Change Your Nickname, Because You \`Have Higher Role\` Than Me`)  
    }    
    else {
      try {
          member.setNickname(`${Old} | ${NICK}`)
          .then(user => message.reply(`\`\`\`yaml\nYou'll be Known as ${member.nickname}\n\`\`\``))
          .catch(console.error);
          db.set(`cd_${message.guild.id}`, Date.now());
        }
        catch(err) {
          message.say('I Can\'t Change Your nickname For Some Reason, Maybe I lack in Permisson or The One That I Try Change the Nick are way superior than me')
        }
    }
  }
};
