/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "help6",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}rider`,
		        dm: true,
                        aliases: ['h6','?6','menu6']
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const rider = 
			"https://c.tenor.com/e2NMPP0SCdIAAAPo/medusa-rider.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: rider },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `-πππΈπ»π π

ββββββββββββββββ

γ½ ${this.client.config.prefix}ππ‘πͺπ§ 
γ½ ${this.client.config.prefix}πππ©πππ 
γ½ ${this.client.config.prefix}ππ€π€ππ‘π 
γ½ ${this.client.config.prefix}π§ππ©π§πππ«π 
γ½ ${this.client.config.prefix}π¨ππ§πππ£π¨ππ€π© 
γ½ ${this.client.config.prefix}π¨π©πππ‘ 
γ½ ${this.client.config.prefix}π¨π©πππ ππ§ 
γ½ ${this.client.config.prefix}π¨πͺππ§ππ 
γ½ ${this.client.config.prefix}π©π§ππ£π¨π‘ππ©π 
γ½ ${this.client.config.prefix}π¬ππ ππ₯ππππ
    
ββββββββββββββββ

 `,
			}
		);
	};
}
