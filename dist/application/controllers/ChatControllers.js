"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createChatmessage = void 0;
const CreateMessage_1 = __importDefault(require("../../core/domain/use-case/CreateMessage"));
const ChatRepositoryImpl_1 = __importDefault(require("../../infrastructure/repositories/ChatRepositoryImpl"));
const Llama2_1 = require("../../infrastructure/adapter/Llama2");
const chatRepositoryImpl = new ChatRepositoryImpl_1.default();
const createChatmessage = async (req, res) => {
    try {
        const { topic, content } = req.body;
        const createmessageUseCase = new CreateMessage_1.default(chatRepositoryImpl);
        const answer = (0, Llama2_1.sendMenssageWithLlama2)(content);
        //const newmessage = await createmessageUseCase.execute({ topic, content, answer. });
        res.status(200).send(content);
    }
    catch {
        res.status(400).send("erro");
    }
};
exports.createChatmessage = createChatmessage;
module.exports = {
    createChatmessage: exports.createChatmessage
};
