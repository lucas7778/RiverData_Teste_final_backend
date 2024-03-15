"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createChatmessage = void 0;
const CreateMessageUseCase_1 = __importDefault(require("../../core/domain/use-case/CreateMessageUseCase"));
const ChatRepositoryImpl_1 = __importDefault(require("../../infrastructure/repositories/ChatRepositoryImpl"));
const Llama2_1 = __importDefault(require("../../infrastructure/adapter/Llama2"));
const chatRepositoryImpl = new ChatRepositoryImpl_1.default();
const llama2Messenger = new Llama2_1.default();
const createChatmessage = async (req, res) => {
    try {
        const { topic, content } = req.body;
        const createmessageUseCase = new CreateMessageUseCase_1.default(chatRepositoryImpl, llama2Messenger);
        // const answer = Llama2Messenger.send(content);
        console.log(topic, content);
        const answer = await createmessageUseCase.execute({ topic, content });
        res.status(200).send(answer);
    }
    catch (erro) {
        console.log(erro);
        res.status(400).send("erro");
    }
};
exports.createChatmessage = createChatmessage;
module.exports = {
    createChatmessage: exports.createChatmessage
};
