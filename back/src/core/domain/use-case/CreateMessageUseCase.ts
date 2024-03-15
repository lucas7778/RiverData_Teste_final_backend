import IChat from "../../repositories/IChat";
import IAiMessenger from "../../services/IAiMessenger";
import Message from "../entities/Message";

type CreateMessageInput = {
    topic: string;
    content: string;
};

type chatOutput = {
    anwser: string;
};

interface UseCase<T, U> {
    execute(input: T): Promise<U>
}

export default class CreateMessageUseCase implements UseCase<CreateMessageInput, chatOutput> {
    private chatRepository: IChat;
    private aiMessenger: IAiMessenger;

    constructor(chatRepository: IChat, aiMessenger: IAiMessenger) {
        this.chatRepository = chatRepository;
        this.aiMessenger = aiMessenger;
    }

    async execute(input: CreateMessageInput): Promise<chatOutput> {
        const { topic, content } = input;
        const answer = await this.aiMessenger.send(topic, content)
        const message = new Message(input.topic, input.content, answer);
        await this.chatRepository.Createmessage(message)
        return { anwser: answer }
    }
}