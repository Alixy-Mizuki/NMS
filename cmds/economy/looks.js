const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { Collection, Client } = require("discord.js");
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');


module.exports = class LooksCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'looks', // meow
			aliases: ['look'], // kitty-cat
			group: 'economy', // fun
			memberName: 'looks', // filename (meow)
			description: 'search money on the ground', // desc /Replies with a meow, kitty cat.
      guildOnly: true,
      throttling: 
        {
        usages: 1,
        duration: 8,
        },
		});
	}

	async run(message) {

const beg_list = 
    [
    "Easy Mate..",
    "Chill, Take it slowly.",
    "Ugh....",
    "-_-",
    "Bro...",
    "._____.",
    "Take a Chill Pill Mate"
    ]; // creates an arraylist containing phrases you want your bot to switch through.
        const index = Math.floor(Math.random() * (beg_list.length - 1) + 1);


        let user = message.author;
        let timeout = 15000;
        let author = db.fetch(`ltm_${user.id}`);

        if(author !== null && timeout - (Date.now() - author) > 0){
            let time = ms(timeout - (Date.now() - author));
            const nope = new MessageEmbed() 
            .setTitle(`${beg_list[index]}`)
            .setDescription(`You need rest. You can find money again in **${time.seconds} seconds**`)
            .setColor("RED")
            .setTimestamp()

            return message.channel.send(nope)
        } else {
            let amount = Math.floor(Math.random() * 400) + 1;
            db.add(`money_${user.id}`, amount)
            db.set(`ltm_${user.id}`, Date.now())

            const yay = new MessageEmbed() 
           // .setTitle(`Easy Mate..`)
            .setDescription(`${user} you find 🪙 **${amount}** on the ground.`)
            .setColor("GREEN")
            .setTimestamp()

            message.channel.send(yay)
        }    

  }
};
