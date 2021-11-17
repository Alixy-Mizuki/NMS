const { MessageEmbed } = require('discord.js');
const { Collection, Client } = require("discord.js");
const { Command } = require('discord.js-commando');
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');



module.exports = class CountCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'count', // meow
			aliases: [], // kitty-cat
			group: 'fun', // fun
			memberName: 'count', // filename (meow)
			description: 'iM nOT a BoT oKAy', // desc /Replies with a meow, kitty cat.
      throttling: {
		  usages: 1,
		  duration: 10,
      },
		});
	}

	run(message) {
      const DOT = ''
      message.channel.send(`YES`).then(E1 => 
        {
          setTimeout(function() 
            {
              E1.edit(`${DOT + 1}`)
            }, 2000) // milisec
          setTimeout(function() 
            {
              E1.edit(`${DOT + 2}`)
            }, 4000)
          setTimeout(function() 
            {
              E1.edit(`${DOT + 3}`)
            }, 6000)
          setTimeout(function() 
            {
              E1.edit(`${DOT + 4}`)
            }, 8000)
          setTimeout(function() 
            {
              E1.edit(`${DOT + 5}`)
            }, 10000)
          setTimeout(function() 
            {
              E1.edit(`${DOT + 6}`)
            }, 12000)
          setTimeout(function() 
            {
              E1.edit(`${DOT + 7}`)
            }, 14000)
          setTimeout(function() 
            {
              E1.edit(`${DOT + 8}`)
            }, 16000)
          setTimeout(function() 
            {
              E1.edit(`${DOT + 9}`)
            }, 18000)
          setTimeout(function() 
            {
              E1.edit(`${DOT + 10}`)
            }, 20000)
          setTimeout(function() 
            {
              E1.edit(`Done`)
            }, 22000)
          setTimeout(function() 
            {
              E1.delete()
            }, 24000)
        })
  }
};
