import IChat from "../../repositories/IChat";
import IAiMessenger from "../../services/IAiMessenger";
import Message from "../entities/Message";

type CreateMessageInput = {
    topic: string;
    content: string;
}
interface UseCase<T,U>{
execute(input: T): Promise<U>
}

export default class CreateMessageUseCase implements UseCase<CreateMessageInput, void> {
    private chatRepository: IChat;
    private aiMessenger: IAiMessenger;

    constructor(chatRepository: IChat, aiMessenger: IAiMessenger) {
        this.chatRepository = chatRepository;
        this.aiMessenger = aiMessenger;
    }

    async execute(input: CreateMessageInput) {
        const { topic, content,  } = input;
        const answer = await this.aiMessenger.send(content)
        const message = new Message(input.topic, input.content, answer);
        
        await this.chatRepository.Createmessage(message)
    }
}