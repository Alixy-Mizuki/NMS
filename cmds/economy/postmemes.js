const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
require('discord-reply'); // message.lineReply()
const { Collection, Client } = require("discord.js");
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');

// message.lineReply()

module.exports = class PostmemesCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'postmemes', // meow
			aliases: ['pm'], // kitty-cat
			group: 'economy', // fun
			memberName: 'postmemes', // filename (meow)
			description: 'Use a laptop to post memes. Randomly on each command, there is a chance you will have an exploding meme (big payout) or a dead meme (possible punishment). There is no pattern, it is randomly chosen each time!', // desc /Replies with a meow, kitty cat.
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
	async run(message) 
//	run(message, { text }) {    //with args
  {
const Filter = (m) => m.author.id == message.author.id
let user = message.author;
let timeout = 300000; //5m
let author = await db.fetch(`psms_${user.id}`);
    if(author !== null && timeout - (Date.now() - author) > 0){
      let time = ms(timeout - (Date.now() - author));
              
      const Embed = new MessageEmbed()
      .setDescription(`You can **post** another meme after **${time.minutes}m and ${time.seconds}s**`)
      .setColor("RED")

      return message.channel.send(Embed)
    } 
    else 
    {
      let ASK = new MessageEmbed()
      .setDescription(`**__What type of meme do you want to post?__**
  \`f\` **■  Fresh Meme**
  \`r\` **■  Reposted Meme**
  \`i\` **■  Intellectual Meme**
  \`c\` **■  Copypasta**
  \`k\` **■  Kind Meme**`)
      .setColor("YELLOW")
      
      message.lineReply(ASK);

      message.channel.awaitMessages(Filter, {max: 1, time: 10000, errors: ['Time']})
      .then(Collected => {

        let Outp = Collected.first()//.content

      // message.lineReply(Outp)
      if(Collected.first().content == 'f' || Collected.first().content == 'r' || Collected.first().content == 'i' || Collected.first().content == 'c' || Collected.first().content == 'k' ) 
      {
        //message.say(`u choose \`${Collected.first()}\``)
  //amount
        let A0 = 0
        let A1 = Math.floor(Math.random() * 500) + 1;
        let A2 = Math.floor(Math.random() * 2000) + 1;

        let AM = [
          `${A0}`,
          `${A1}`,
          `${A2}`
        ]

        const AMIndex = Math.floor(Math.random() * (AM.length - 1) + 1);
        let LAM = AM[AMIndex]         
  //text
        let P1 = [
          `Everyone **hates** your meme. You get 🪙 ${LAM} from the ads.`, //${}
          `Not Bad, some people likes your meme. You get 🪙 ${LAM} from the ads.`,
          `Your meme got a **decent** response online. You get 🪙 ${LAM} from the ads.`,
          `Your meme is **EXPLODING** online. You get 🪙 ${LAM} from the ads.`
        ]

        const P1Index = Math.floor(Math.random() * (P1.length - 1) + 1);      


        //message.reply(`${P1[P1Index]}\nAmount : ${LAM}`)
        let Done = new MessageEmbed()
        .setDescription(`${P1[P1Index]}`)
        .setColor("GREEN")

        message.lineReply(Done)
        //message.reply(`${P1[P1Index]}`)
        db.add(`money_${user.id}`, LAM)
        db.set(`psms_${user.id}`, Date.now())
      }
      else
      {
        message.say(`\`${Collected.first()} wasn't an option my friend\``)
      }

      }).catch((e) => message.say(`**; - ;** tf you go?`));
    }
	}
};