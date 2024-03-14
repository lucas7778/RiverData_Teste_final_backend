import IChat from "../../core/repositories/IChat";
import Message from "../../core/domain/entities/Message";


export default class ChatRepositoryImpl implements IChat {
    messages: Message[];

    constructor() {
        this.messages = [];
    }

    async Createmessage(input: Message): Promise<any> {
        const message = await this.messages.push(input);
        return message
    }

}