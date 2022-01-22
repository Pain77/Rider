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
		const rider =
			"https://c.tenor.com/zRZ6cobATxMAAAPo/rider-fate.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: rider },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `ᴅᴏ ʏᴏᴜ ɴᴇᴇᴅ ᴍʏ ᴍᴀꜱᴛᴇʀ? ᴏʀᴅᴇʀ! \n🎗 ᴍᴏᴅᴇʀᴀᴛᴏʀꜱ \n╰• ᴄᴏɴᴛᴀᴄᴛ💣: wa.me/919662713165?text=well`,
			}
		);
	};
}
