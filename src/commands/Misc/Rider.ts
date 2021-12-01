import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'Rider',
            description: 'Displays the info.',
            category: 'misc',
            usage: `${client.config.prefix}yatori`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/videos/pain/pain-git.mp4'
        ]
        let pain = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: pain }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
           caption: `ʀɪᴅᴇʀ 🍁!\n⚜ *Description: Pain...*\n` }
        )
    }
}
          
       


    
        
           
           
            
            
        
    

    
        
           
           
           
   
