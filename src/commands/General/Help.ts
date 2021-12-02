/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "help",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}kacchan`,
		        dm: true,
                        aliases: ['h','?','well','menu']
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const kacchan = 
			"https://c.tenor.com/LhRhrogP7WgAAAPo/bakugou-katsuki-bakugou.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: kacchan },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `¬ hello! *@${M.sender.username}*.
¬ ɪ'ᴍ 𝙠𝙖𝙘𝙘𝙝𝙖𝙣 💣 〽
¬ ᴍʏ ᴘʀᴇꜰɪx ɪꜱ - "${this.client.config.prefix}"
¬ ᴄᴏᴍᴍᴀɴᴅꜱ ᴀʀᴇ ʟɪꜱᴛᴇᴅ ʙᴇʟᴏᴡ.⬇

- 🄴🄳🅄🄲🄰🅃🄸🅅🄴 🎗

🎐 ${this.client.config.prefix}h1

- 🄵🅄🄽 🎗

🎐 ${this.client.config.prefix}h2

- 🄶🄴🄽🄴🅁🄰🄻 🎗

🎐 ${this.client.config.prefix}h3

- 🄼🄴🄳🄸🄰 🎗

🎐 ${this.client.config.prefix}h4

- 🄼🄾🄳🄴🅁🄰🅃🄸🄾🄽 🎗

🎐 ${this.client.config.prefix}h5

- 🅄🅃🄸🄻🅂 🎗

🎐 ${this.client.config.prefix}h6

- 🅆🄴🄴🄱 🎗

🎐 ${this.client.config.prefix}h7

- 🄽🅂🄵🅆 🍒

🎐 ${this.client.config.prefix}h8

📝 𝙉𝙤𝙩𝙚: 𝙐𝙨𝙚 !𝙝𝙚𝙡𝙥 <𝙘𝙤𝙢𝙢𝙖𝙣𝙙_𝙣𝙖𝙢𝙚> 𝙩𝙤 𝙫𝙞𝙚𝙬 𝙩𝙝𝙚 𝙘𝙤𝙢𝙢𝙖𝙣𝙙 𝙞𝙣𝙛𝙤

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
