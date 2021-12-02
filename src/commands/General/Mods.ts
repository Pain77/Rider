/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "mods",
			description: "Generally used to check if bot is Up",
			category: "general",
            usage: `${client.config.prefix}mods`,
            dm: true,
            aliases: ['moderators', 'mod', 'owner'],
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const kacchan =
			"https://c.tenor.com/iv8N2t7pEXAAAAPo/bakugou-katsuki-anime.mp4";
			"https://c.tenor.com/93eUTFPXSyYAAAPo/bakugo-my-hero-academia.mp4";
			"https://c.tenor.com/LhRhrogP7WgAAAPo/bakugou-katsuki-bakugou.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: kacchan },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `🎗 ᴍᴏᴅᴇʀᴀᴛᴏʀꜱ \n╰• ᴄᴏɴᴛᴀᴄᴛ💣: wa.me/917842346461?text=𝙝𝙚𝙡𝙡𝙤`,
			}
		);
	};
}
