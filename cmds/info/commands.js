const { stripIndents, oneLine } = require('common-tags');
const { Command , disambiguation } = require('discord.js-commando');
const { MessageEmbed, Collection, Client } = require("discord.js");
//const { disambiguation } = require('../../util');

module.exports = class CmdsCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'commands',
			group: 'info',
			memberName: 'commands',
			aliases: ['c','cmd', 'cmds'],
			description: 'Displays a list of available commands.',
      hidden: true, // false      
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

  	if(args.command && !showAll) 
    {
      return 
		} 
    else
    {
      const CMDC = this.client.registry.commands.size
      const Embed = new MessageEmbed()
      .setColor("GREEN")
      .setFooter(`Created by ${this.client.owners[0].tag}`, this.client.owners[0].avatarURL());

			const messages = [];
			try {
				Embed.setDescription(stripIndents`
					[__**${showAll ? 'All commands' : `Available commands in ${msg.guild || 'this DM'}`}**__](https://dsc.gg/null)
          \n**Commands Count:**
          \`\`\`yaml\n${CMDC}\n\`\`\`
        ${groups.filter(grp => grp.commands.some(cmd => !cmd.hidden && (showAll || cmd.isUsable(msg))))
						.map(grp => stripIndents`
							**${grp.name}**:\n${grp.commands.filter(cmd => !cmd.hidden && (showAll || cmd.isUsable(msg)))
								.map(cmd => `\`${cmd.name}${cmd.nsfw ? ' (NSFW)' : ''}\``).join(', ')}`).join('\n')}`, { split: true })
        


        msg.say(Embed)
			} catch(err) {
				messages.push(await msg.reply(`${err.message}`));
			}
			return messages;
		}
	}
};