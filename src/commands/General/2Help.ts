import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ICommand, IParsedArgs, ISimplifiedMessage } from '../../typings'
import { MessageType, Mimetype } from "@adiwajshing/baileys";
export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "2help",
			description:
				"Displays the help menu or shows the info of the command provided",
			category: "general",
			usage: `${client.config.prefix}help (command_name)`,
			aliases: ["2h"],
			baseXp: 30,
		});
	}

	run = async (
		M: ISimplifiedMessage,
		parsedArgs: IParsedArgs
	): Promise<void> => {
		const user = M.sender.jid;
		const rider =
			"https://c.tenor.com/pgij9sLbS68AAAPo/medusa-rider.mp4";
		if (!parsedArgs.joined) {
			const commands = this.handler.commands.keys();
			const categories: { [key: string]: ICommand[] } = {};
			for (const command of commands) {
				const info = this.handler.commands.get(command);
				if (!command) continue;
				if (!info?.config?.category || info.config.category === "dev") continue;
				if (
					!info?.config?.category ||
					(info.config.category === "nsfw" &&
						!(await this.client.getGroupData(M.from)).nsfw)
				)
					continue;
				if (Object.keys(categories).includes(info.config.category))
					categories[info.config.category].push(info);
				else {
					categories[info.config.category] = [];
					categories[info.config.category].push(info);
				}
			}
			let text = `šš» (š£Ļš£) Konichiwa! *@${
				user.split("@")[0]
			}*, I'm Rider.\n\nMy prefix is - "${
				this.client.config.prefix
			}"\n\nThe usable commands are listed below.\n\n`;
			const keys = Object.keys(categories);
			for (const key of keys)
				text += `*āāāā° ${this.client.util.capitalize(
					key
				)} ā±āāā*\nā \`\`\`${categories[key]
					.map((command) => command.config?.command)
					.join(" \n ")}\`\`\`\n\n`;
			return void this.client.sendMessage(
				M.from,
				{ url: rider },
				MessageType.video,
				{
					quoted: M.WAMessage,
					mimetype: Mimetype.gif,
					caption: `${text} š *Note: Use ${this.client.config.prefix}help <command_name> to view the command info*`,
					contextInfo: { mentionedJid: [user] },
				}
			);
		}
		const key = parsedArgs.joined.toLowerCase();
		const command =
			this.handler.commands.get(key) || this.handler.aliases.get(key);
		if (!command) return void M.reply(`No Command of Alias Found | "${key}"`);
		const state = await this.client.DB.disabledcommands.findOne({
			command: command.config.command,
		});
		M.reply(
			`š *Command:* ${this.client.util.capitalize(
				command.config?.command
			)}\nš *Status:* ${
				state ? "Disabled" : "Available"
			}\nā© *Category:* ${this.client.util.capitalize(
				command.config?.category || ""
			)}${
				command.config.aliases
					? `\nā¦ļø *Aliases:* ${command.config.aliases
							.map(this.client.util.capitalize)
							.join(", ")}`
					: ""
			}\nš *Group Only:* ${this.client.util.capitalize(
				JSON.stringify(!command.config.dm ?? true)
			)}\nš *Usage:* ${command.config?.usage || ""}\n\nš *Description:* ${
				command.config?.description || ""
			}`
		);
	};
}
