/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "help7",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}kacchan`,
		        dm: true,
                        aliases: ['h7','?7','well7','menu7']
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const kacchan = 
			"https://c.tenor.com/93eUTFPXSyYAAAPo/bakugo-my-hero-academia.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: kacchan },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `- 🅆🄴🄴🄱 🎐

🎗 ${this.client.config.prefix}𝙖𝙣𝙞𝙢𝙚 
🎗 ${this.client.config.prefix}𝙖𝙣𝙞𝙢𝙚𝙥𝙖𝙥𝙚𝙧 
🎗 ${this.client.config.prefix}𝙖𝙣𝙞𝙢𝙚𝙦𝙪𝙤𝙩𝙚 
🎗 ${this.client.config.prefix}𝙘𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 
🎗 ${this.client.config.prefix}𝙜𝙚𝙣𝙨𝙝𝙞𝙣𝙘𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 
🎗 ${this.client.config.prefix}𝙝𝙖𝙞𝙜𝙪𝙨𝙝𝙖 
🎗 ${this.client.config.prefix}𝙠𝙞𝙩𝙨𝙪𝙣𝙚 
🎗 ${this.client.config.prefix}𝙡𝙤𝙡𝙞 
🎗 ${this.client.config.prefix}𝙢𝙖𝙣𝙜𝙖 
🎗 ${this.client.config.prefix}𝙣𝙚𝙠𝙤 
🎗 ${this.client.config.prefix}𝙥𝙤𝙠𝙚𝙢𝙤𝙣 
🎗 ${this.client.config.prefix}𝙧𝙥𝙖𝙥𝙚𝙧 
🎗 ${this.client.config.prefix}𝙨𝙖𝙪𝙘𝙚 
🎗 ${this.client.config.prefix}𝙫𝙩𝙪𝙗𝙚𝙧 
🎗 ${this.client.config.prefix}𝙬𝙖𝙞𝙛𝙪 
🎗 ${this.client.config.prefix}𝙬𝙖𝙡𝙡𝙥𝙖𝙥𝙚𝙧
    
    
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
