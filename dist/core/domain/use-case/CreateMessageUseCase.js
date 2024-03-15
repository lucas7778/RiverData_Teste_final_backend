"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Message_1 = __importDefault(require("../entities/Message"));
class CreateMessageUseCase {
    constructor(chatRepository, aiMessenger) {
        this.chatRepository = chatRepository;
        this.aiMessenger = aiMessenger;
    }
    async execute(input) {
        const { topic, content } = input;
        const answer = await this.aiMessenger.send(topic, content);
        const message = new Message_1.default(input.topic, input.content, answer);
        await this.chatRepository.Createmessage(message);
        return { anwser: answer };
    }
}
exports.default = CreateMessageUseCase;
