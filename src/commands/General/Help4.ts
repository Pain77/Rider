/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "help4",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}kacchan`,
		        dm: true,
                        aliases: ['h4','?4','well4','menu4']
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const kacchan = 
			"https://c.tenor.com/d_ILALmYwTAAAAPo/bakugou-katsuki-bakugou.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: kacchan },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `- 🄼🄴🄳🄸🄰 🎐

🎗 ${this.client.config.prefix}𝙠𝙖𝙧𝙖𝙤𝙠𝙚 
🎗 ${this.client.config.prefix}𝙡𝙮𝙧𝙞𝙘𝙨 
🎗 ${this.client.config.prefix}𝙥𝙡𝙖𝙮 
🎗 ${this.client.config.prefix}𝙨𝙥𝙤𝙩𝙞𝙛𝙮 
🎗 ${this.client.config.prefix}𝙮𝙩𝙖𝙪𝙙𝙞𝙤 
🎗 ${this.client.config.prefix}𝙮𝙩𝙨𝙚𝙖𝙧𝙘𝙝 
🎗 ${this.client.config.prefix}𝙮𝙩𝙫𝙞𝙙𝙚𝙤
🎗 ${this.client.config.prefix}𝙞𝙜𝙪𝙨𝙚𝙧[𝙣𝙖𝙢𝙚]
🎗 ${this.client.config.prefix}𝙥𝙞𝙣𝙩𝙚𝙧𝙚𝙨𝙩

───▄▄─▄████▄▐▄▄▄▌
──▐──████▀███▄█▄▌
▐─▌──█▀▌──▐▀▌▀█▀
─▀───▌─▌──▐─▌
─────█─█──▐▌█
💣💣💣💣💣💣💣💣
 `,
			}
		);
	};
}
