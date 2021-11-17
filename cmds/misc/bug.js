const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { Collection, Client } = require("discord.js");
const db = require('quick.db');
const ms = require('parse-ms');
const delay = require('delay');


module.exports = class BugCommand extends Command { //MeowCommand
	constructor(client) {
		super(client, {
			name: 'bug', // meow
			aliases: [], // kitty-cat
			group: 'misc', // fun
			memberName: 'bug', // filename (meow)
			description: 'Send a bug report to support server. Detailed report really Appreciated', // desc /Replies with a meow, kitty cat.
      throttling: 
        {
        usages: 1,
        duration: 10,
        },
      args: 
        [{
          key: 'args', // Declaring the name of args for Run cmd
          prompt: '```Pleae provide a valid report```',
          type: 'string', // string, integer, user, member
        }],
		});
	}

	async run(message, { args }) {

        let user = message.author;
        let timeout = 5000;
        let author = await db.fetch(`Bugtm_${message.guild.id}_${user.id}`);

        if(author !== null && timeout - (Date.now() - author) > 0){
            let time = ms(timeout - (Date.now() - author));
            const nope = new MessageEmbed() 
            .setTitle(`Cooldown`)
            .setDescription(`You can use this command again after **${time.seconds} seconds**`)
            .setColor("RED")
            .setTimestamp()

            return message.channel.send(nope)
              } 
          else {
      
        let sl = new MessageEmbed()
          .setDescription(`${message.author}, Thanks For Submitting the bug. We Appreciated That`)
          .setColor("RANDOM")
          .setTimestamp()

       // message.channel.send(`${message.author}, Thanks For Submitting the bug. We Appriciated That`);


   let clog = new MessageEmbed()
    .setTitle(`**Bug Report**`)
    .setDescription(`\`Author  :\` **${message.author.username}#${message.author.discriminator}**\n\`ID      :\` **${message.author.id}**\n\`Guild   :\` **${message.guild}** \n\`Channel :\` **${message.channel} | ${message.channel.id}**\n\n\`Message :\` **${args}**`)
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter(`Dev can Reply Using ( ${this.client.commandPrefix}sd <Channel_ID> <message> )`)

            db.set(`Bugtm_${message.guild.id}_${user.id}`, Date.now())
        message.channel.send(sl)
        //bugchl.send(clog)
  this.client.channels.cache.get('819949871149875230').send(clog);  // modlog
  //message.channel.send(clog) //test modlog
 message.delete()
          }

  }
};

