/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "help2",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}kacchan`,
		        dm: true,
                        aliases: ['h1','?1','well1','menu1']
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const kacchan = 
			"https://c.tenor.com/do4JyZjqXpMAAAPo/medusa-rider.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: kacchan },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `-🄴🄳🅄🄲🄰🅃🄸🅅🄴 🍁
────────────────				

〽 ${this.client.config.prefix}𝙘𝙖𝙡𝙘𝙪𝙡𝙖𝙩𝙤𝙧 
〽 ${this.client.config.prefix}𝙚𝙡𝙚𝙢𝙚𝙣𝙩 
〽 ${this.client.config.prefix}𝙩𝙧𝙞𝙫𝙞𝙖 
〽 ${this.client.config.prefix}𝙪𝙧𝙗𝙖𝙣𝙙𝙞𝙘𝙩𝙞𝙤𝙣𝙖𝙧𝙮 
〽 ${this.client.config.prefix}𝙬𝙚𝙖𝙩𝙝𝙚𝙧
〽 ${this.client.config.prefix}𝙜𝙞𝙩𝙝𝙪𝙗
    
────────────────

 `,
			}
		);
	};
}
