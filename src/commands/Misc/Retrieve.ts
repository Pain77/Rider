/* eslint-disable @typescript-eslint/no-explicit-any */
import { MessageType } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'retrieve',
            description: 'Well....',
            adminOnly: true,
            category: 'misc',
            usage: `${client.config.prefix}retrieve`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        if (!M.quoted) return void (await M.reply(`Please quote the message you want to retrive`))
        if (!(M?.quoted?.message?.message as any)?.viewOnceMessage?.message?.imageMessage)
            return void M.reply('Tag the "viewOnceMessage" that you want to retrive')
        return void M.reply(
            await this.client.downloadMediaMessage((M.quoted.message?.message as any).viewOnceMessage),
            MessageType.image,
            undefined,
            undefined,
            'Here you go.'
        )
    }
}
