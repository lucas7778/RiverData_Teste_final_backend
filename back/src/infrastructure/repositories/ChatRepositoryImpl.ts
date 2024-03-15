import IChat from "../../core/repositories/IChat";
import Message from "../../core/domain/entities/Message";


export default class ChatRepositoryImpl implements IChat {
    messages: Message[];

    constructor() {
        this.messages = [];
    }

    async Createmessage(inputmessage: Message): Promise<any> {
        const message = await this.messages.push(inputmessage);
        return message
    }

}