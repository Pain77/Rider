
import { MessageType } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import request from '../../lib/request'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'mods',
            description: "Displays the Moderators' contact info",
            category: 'general',
            usage: `${client.config.prefix}mods`,
            dm: true,
            aliases: ['moderators', 'mod', 'owner'],
        })
    }



    run = async (M: ISimplifiedMessage): Promise<void> => {




return void M.reply(await request.buffer('https://i.imgur.com/mKGLNx4_d.webp?maxwidth=640&shape=thumb&fidelity=medium'),
MessageType.image,
            undefined,
            undefined,
            `🌠 ᴍᴏᴅᴇʀᴀᴛᴏʀꜱ \n╰• ᴄᴏɴᴛᴀᴄᴛ🍁: wa.me/919662713165?text=𝙝𝙚𝙡𝙡𝙤`
                    

)


    }



}
