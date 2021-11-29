import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'hi',
            description: 'Say hi to the bot.',
            category: 'misc',
            usage: `${client.config.prefix}hi`
        })
    }


 run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/videos/well/well-hi.mp4'
        ]
        let well = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: well }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `𝚠𝚎𝚕𝚕...? ` }
        )
    }
}

    
        
           
           
            
            
        
    

    
        
           
           
           
   
