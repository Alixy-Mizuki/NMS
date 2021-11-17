const { Command } = require('discord.js-commando');
const { MessageEmbed, MessageAttachment, Collection, Client } = require("discord.js");
require('discord-reply'); // message.lineReply()
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');

// message.lineReply()
const CHOICES = [
'mailbox',
'couch',
'pantry',
'fridge',
'bank',
'car',
'dog',
'tree',
'drawer',
'lamp',
'air',
'discord',
'facebook',
'twitter',
'youtube',
'snapchat',
'internet',
'whale',
'zoo',
'taxi',
'pouch',
'pocket',
'shoes',
'sock',
'box',
'pizzahut',
'trashbin',
'microwave',
'sofa',
'carpet',
'grass',
'ceiling',
'cupboard',
'cup',
'warehouse',
'garage',
'cerealbox',
'toolbox',
'jacket',
//'',
'bed'
];





module.exports = class SearchCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'search', // meow
			aliases: ['scout'], // kitty-cat
			group: 'economy', // fun
			memberName: 'search', // filename (meow)
			description: 'search money', // desc /Replies with a meow, kitty cat.
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
	async run(message) {


//	run(message, { text }) {    //with args
const Filter = (m) => m.author.id == message.author.id

const CH1 = Math.floor(Math.random() * CHOICES.length)
const CH2 = Math.floor(Math.random() * (CHOICES.length - 1) + 1)
const CH3 = Math.floor(Math.random() * (CHOICES.length + 1) + 1)

if(CH1 == null || CH1 == 'undefined') CH1 = 1
else if(CH2 == null || CH2 == 'undefined') CH2 = 1
else if(CH3 == null || CH3 == 'undefined') CH3 = 1


let C1 = CHOICES[CH1]
let C2 = CHOICES[CH2]
let C3 = CHOICES[CH3]



let user = message.author;

//let timeout = 1000; //300000 //5m
let timeout = 300000; //300000 //5m

let author = await db.fetch(`SCms_${user.id}`);
    if(author !== null && timeout - (Date.now() - author) > 0){
      let time = ms(timeout - (Date.now() - author));
              
      const Embed = new MessageEmbed()
      .setDescription(`You can **search** again after **${time.minutes}m and ${time.seconds}s**`)
      .setColor("RED")

      return message.channel.send(Embed)
    } 
    else 
    {
      let ASK = new MessageEmbed()
      .setDescription(`**Where do you want to search?**
Pick from the list below and type the name in chat.

\`${C1}\`, \`${C2}\`, \`${C3}\``)
      .setColor("YELLOW")
      
      message.lineReply(ASK);

      message.channel.awaitMessages(Filter, {max: 1, time: 10000, errors: ['Time']})
      .then(Collected => {

        let Outp = Collected.first()//.content

      // message.lineReply(Outp)
      if(Collected.first().content.toLowerCase() == C1 || Collected.first().content.toLowerCase() == C2 || Collected.first().content.toLowerCase() == C3 ) 
      {
        //message.say(`u choose \`${Collected.first()}\``)
        
  //amount
        let CAM = Math.floor(Math.random() * 400) + 1;       
  //text







//author name

        let AUTN = message.author.username

// last response
        let EF = Collected.first().content
        //message.reply(`${P1[P1Index]}\nAmount : ${LAM}`)
        let Done = new MessageEmbed()
        .setTitle(`${AUTN} searched the ${EF}`)
        .setDescription(`You found 🪙 ${CAM}, cool?`)
        .setColor("GREEN")

        message.lineReply(Done)
        // //message.reply(`${P1[P1Index]}`)
         db.add(`money_${user.id}`, CAM)
         db.set(`SCms_${user.id}`, Date.now())
      }
      else
      {
        message.say(`\`${Collected.first()} wasn't an option my friend\``)
      }

      }).catch((e) => message.say(`**; - ;** tf you go?`));
    }

	}
};