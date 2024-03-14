"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Message_1 = __importDefault(require("../entities/Message"));
class CreateMessage {
    constructor(chatRepository) {
        this.chatRepository = chatRepository;
    }
    async execute(inputMessage) {
        const { topic, content, answer } = inputMessage;
        const message = new Message_1.default(inputMessage.topic, inputMessage.content, inputMessage.answer);
        await this.chatRepository.Createmessage(message);
    }
}
exports.default = CreateMessage;
