const { MessageEmbed } = require('discord.js');
const { Collection, Client } = require("discord.js");
const { Command } = require('discord.js-commando');
require('discord-reply'); // message.lineReply()
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');
const BO = process.env['BOTOWNER']



module.exports = class HackCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'hack', // meow
			aliases: [], // kitty-cat
			group: 'fun', // fun
			memberName: 'hack', // filename (meow)
			description: 'Hack People or Hack Someone', // desc /Replies with a meow, kitty cat.
      guildOnly: true,
      throttling: {
		  usages: 1,
		  duration: 3,
      },
      args: [
      {
        key: 'victim',
        prompt: 'Tell me who you want to hack?',
        type: 'user', // string, integer, user, member
      }],
		});
	}

  async run(message, { victim }) { 

//--
const length = 20
var PWS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
 var PW = '';
 for ( var i = 0; i < length; i++ ) 
 {
 PW += PWS.charAt(Math.floor(Math.random() * PWS.length));
 }
//--
const Dl = 4
var NUM = '0123456789';
 var DISC = '';
 for ( var i = 0; i < Dl; i++ ) 
 {
 DISC += NUM.charAt(Math.floor(Math.random() * NUM.length));
 }
//--
const IPL = 3
var IP1 = '123456789';
 var IP = '';
 for ( var i = 0; i < IPL; i++ ) 
 {
 IP += IP1.charAt(Math.floor(Math.random() * IP1.length));
 }
//--


if(victim === this.client.user) return message.lineReply("`Eh, I Don't Think So`")
if(victim === message.author) return message.lineReply("`Why? Just WHY?`")
if(victim === BO) return message.lineReply("`Hahahaha, Protected Person Goes BRRRRRR `")

      const TROJAN = DISC + victim.discriminator   
      const prompt = await message.channel.send(`Hacking ${victim.username} now...`);
      await delay(1500);
      await prompt.edit('Finding discord login...');
      await delay(1700);
      await prompt.edit(`Found:\n**Email**: \`${victim.username}******@gmail.com\`\n**Password**: \`${PW}\``);
      await delay(1700);
      await prompt.edit('Fetching dms...');
      await delay(4000);
      await prompt.edit('Listing all contacts...');
      await delay(2000);
      await prompt.edit('Writing Fake email...');
      await delay(5000);
      await prompt.edit(`Injecting virus discriminator #${DISC} into emails`);
      await delay(1500);
      await prompt.edit('Virus injected');
      await delay(1000);
      await prompt.edit('Sending fake emails to all contacts...');
      await delay(6000);
      await prompt.edit('Finding Home Internet Connection...');
      await delay(6000);
      await prompt.edit('Connection Found');
      await delay(1200);      
      await prompt.edit('Finding IP address...');
      await delay(5000);
      await prompt.edit(`IP address Found : \`127.168.1.${IP}\``);
      await delay(2000);
      await prompt.edit(`Send virus Trojan#${TROJAN} to ${victim.username}'s PC`);
      await delay(1700);
      await prompt.edit(`Complete gain access to ${victim.username}'s PC`);
      await delay(1300);
      await prompt.edit('Selling data to Dankweb...');
      await delay(6000);
      await prompt.edit(`Deleting all ${victim.username}'s Social Media account...`)
      await delay(5000);
      await prompt.edit(`Deleting System32...`)
      await delay(7000);
      await prompt.edit(`Initialized Self - Desctruct`)
      await delay(1300);
      await prompt.edit(`Malware Exit...`)
      await delay(1300);
      await prompt.edit(`Finished hacking **${victim.username}** and **TOTALLY REAL HACKs**`)

/*      
      await delay();
      await prompt.edit(``)
*/   

  }
};