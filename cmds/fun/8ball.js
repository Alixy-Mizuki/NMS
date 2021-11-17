const { MessageEmbed } = require("discord.js");
const { Collection, Client } = require("discord.js");
const client = new Client()
const prefix = process.env.PREFIX

const { Command } = require('discord.js-commando');

const replies = [
'Yes',
'No',
'Maybe',
'Not sure',
'Sure, why not',
'When you grow a braincell, yes',
'THAT\'S A SOLID ***NO***',
'Nah that sucks tbh',
'Maybe Not Right now',
'I supposed'
];


module.exports = class BallCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: '8ball', // meow
			aliases: [], // kitty-cat
			group: 'fun', // fun
			memberName: '8ball', // filename (meow)
			description: 'Ask anything from mighty 8ball', // desc /Replies with a meow, kitty cat.
      args: [
      {
        key: 'text',
        prompt: '```WHAT DO YOU WANT TO ASK 8BALL?```',
        type: 'string', // string, integer, user, member
      }]
		})
	}

	run(message, { text }) {

const index = Math.floor(Math.random() * (replies.length - 1) + 1)


 let embed = new MessageEmbed()
 .setTitle("8 Ball Answers")
 .addField("Your Question", `${text}`)
 .addField("8Ball:", `${replies[index]}`)
 .setColor("RANDOM")
 //.setFooter(" ")
 message.channel.send(embed)   

  }
};

 