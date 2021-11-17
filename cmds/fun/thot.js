const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { Collection, Client } = require("discord.js");
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');

module.exports = class ThotCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'thot', // meow
			aliases: [], // kitty-cat
			group: 'fun', // fun
			memberName: 'thot', // filename (meow)
			description: 'Rate Your Thot-ness or other\'s', // desc /Replies with a meow, kitty cat.

		});
	}

//  async run
	run(message) {

const user = message.mentions.users.first() || message.author

const thotr8 = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100" ]

let R8 = thotr8[Math.floor(Math.random() * thotr8.length)]
let R8F = R8

if(R8F == '69') R8F = 'DAMN THAT NUMBER THO';
else if(R8F == '100') R8F = "YOU'RE CERTIFIED THOT";
else if(R8F != '69' || R8F != '100') R8F = 'BEGONE THOT';



let embed = new MessageEmbed()
.setTitle("THOT R8 o` Machine")
.setDescription(`${user} is a ${R8}% THOT`)
.setFooter(R8F)
.setColor("RANDOM")
message.channel.send(embed)


  }
};