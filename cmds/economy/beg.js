const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { Collection, Client } = require("discord.js");
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');


module.exports = class BegCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'beg', // meow
			aliases: [], // kitty-cat
			group: 'economy', // fun
			memberName: 'beg', // filename (meow)
			description: 'Beg For Money', // desc /Replies with a meow, kitty cat.
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
        let timeout = 5000;
        let author = db.fetch(`begtm_${user.id}`);

        if(author !== null && timeout - (Date.now() - author) > 0){
            let time = ms(timeout - (Date.now() - author));
            const nope = new MessageEmbed() 
            .setTitle(`${beg_list[index]}`)
            .setDescription(`Stop begging so much. \nYou can have more coins in **${time.seconds} seconds**`)
            .setColor("RED")
            .setTimestamp()

            return message.channel.send(nope)
        } else {
            let amount = Math.floor(Math.random() * 40) + 1;
            db.add(`money_${user.id}`, amount)
            db.set(`begtm_${user.id}`, Date.now())

            const yay = new MessageEmbed() 
           // .setTitle(`Easy Mate..`)
            .setDescription(`${user} you got 🪙 **${amount}** from begging`)
            .setColor("GREEN")
            .setTimestamp()

            message.channel.send(yay)
        }
    }
}