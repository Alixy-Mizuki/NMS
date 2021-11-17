const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { Collection, Client } = require("discord.js");
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');

const pp = [
'',
'=',
'==',
'===',
'====',
'=====',
'======',
'=======',
'========',
'=========',
'==========',
'===========',
'============',
'=============',
'==============',
'===============',
'================',
'================='
];


module.exports = class PpCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'peperate', // meow
			aliases: ['pp', 'ratepp', 'ratepepe'], // kitty-cat
			group: 'fun', // fun
			memberName: 'pp', // filename (meow)
			description: 'Rate your PP or others PP', // desc /Replies with a meow, kitty cat.

		});
	}

	run(message) {

const index = Math.floor(Math.random() * (pp.length - 1) + 1)

let user = message.mentions.users.first() || message.author;
let pepe = new MessageEmbed()
 .setTitle("Peepee Size Machine")
 .setDescription(`${user.username}'s PP \n**8${pp[index]}D**`)
 .setColor("BLUE")
 //.setFooter("This is embed footer")
 message.channel.send(pepe)

  }
};
