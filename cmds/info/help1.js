const { stripIndents, oneLine } = require('common-tags');
const { Command , disambiguation } = require('discord.js-commando');
const { MessageEmbed, Collection, Client } = require("discord.js");
//const { disambiguation } = require('../../util');

module.exports = class Help1Command extends Command {
	constructor(client) {
		super(client, {
			name: 'help',
			group: 'info',
			memberName: 'help1',
			aliases: [],
			description: 'Displays detailed information for a specified command.',
			args: [
				{
					key: 'command',
					prompt: 'Which command would you like to view the help for?',
					type: 'string',
					default: ''
				}
			]
		});
	}

	async run(msg, args) { // eslint-disable-line complexity
		const groups = this.client.registry.groups;
		const commands = this.client.registry.findCommands(args.command, false, msg);
		const showAll = args.command && args.command.toLowerCase() === 'all';

  		if(args.command && !showAll) {
			if(commands.length === 1) {
				let help = stripIndents`
					${oneLine`
						__Command **${commands[0].name}**:__ ${commands[0].description}
						${commands[0].guildOnly ? ' (Usable only in servers)' : ''}
						${commands[0].nsfw ? ' (NSFW)' : ''}
					`}
					**Format:** ${msg.anyUsage(`${commands[0].name}${commands[0].format ? ` ${commands[0].format}` : ''}`)}
				`;
				if(commands[0].aliases.length > 0) help += `\n**Aliases:** ${commands[0].aliases.join(', ')}`;
				help += `\n${oneLine`
					**Group:** ${commands[0].group.name}
					(\`${commands[0].groupID}:${commands[0].memberName}\`)
				`}`;
				if(commands[0].details) help += `\n**Details:** ${commands[0].details}`;
				if(commands[0].examples) help += `\n**Examples:**\n${commands[0].examples.join('\n')}`;

				const messages = [];
				try {
					messages.push(await msg.direct(help));
					if(msg.channel.type !== 'dm') messages.push(await msg.reply('Sent you a DM with information.'));
				} catch(err) {
					messages.push(await msg.reply('Unable to send you the help DM. You probably have DMs disabled.'));
				}
				return messages;
			} else if(commands.length > 15) {
				return msg.reply('Multiple commands found. Please be more specific.');
			} else if(commands.length > 1) {
				return msg.reply(disambiguation(commands, 'commands'));
			} else {
				return msg.reply(
					`Unable to identify command. Use ${msg.usage(
						null, msg.channel.type === 'dm' ? null : undefined, msg.channel.type === 'dm' ? null : undefined
					)} to view the list of all commands.`
				);
			}
		} 
    else
    {
      var PermissionsR = 238419265; //Smilef Recommended Perms
      var PermissionsA = 8;

      const Emb = new MessageEmbed()
        .setColor("AQUA")
        .setTitle(`${this.client.user.username}'s Documentation`)
        .setThumbnail(this.client.user.avatarURL())
        .setDescription(`For a full list of commands, please type \`${this.client.commandPrefix}commands\` \n\nTo see more info about a specific command, please type \`${this.client.commandPrefix}help <command>\` without the \`<>\``)
        // .addField('About', "This bot is used for testing some sort of commands :smile:")
        .addField('Links', `[YouTube](https://www.youtube.com/channel/UCoMlAgkd_L7g3a2rHV-KO8Q)\n[Twitch](https://www.twitch.tv/alixy_tr)\n[Support Server](https://discord.gg/NsHp9egH8C)\n[Discord Server (Not a Support Server)](https://dsc.gg/kona)\n[Bot Invite Link (ADMIN)](https://discord.com/oauth2/authorize?client_id=${this.client.user.id}&permissions=${PermissionsA}&scope=bot)\n[Bot Invite Link (Recommended)](https://discord.com/oauth2/authorize?client_id=${this.client.user.id}&permissions=${PermissionsR}&scope=bot)`)        
        .setFooter(`Created by ${this.client.owners[0].tag}`, this.client.owners[0].avatarURL());
    
        msg.say(Emb);
    }
//--
  }
}