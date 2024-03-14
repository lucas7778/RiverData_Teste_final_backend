import { Request, Response } from "express";
import CreateMessageUseCase from "../../core/domain/use-case/CreateMessageUseCase";
import ChatRepositoryImpl from "../../infrastructure/repositories/ChatRepositoryImpl";
import { sendMenssageWithLlama2 } from "../../infrastructure/adapter/Llama2";
const chatRepositoryImpl = new ChatRepositoryImpl()


export const createChatmessage = async (req: Request, res: Response) => {
    try {
        const { topic, content } = req.body;
        const createmessageUseCase = new CreateMessageUseCase(chatRepositoryImpl);
        const answer = sendMenssageWithLlama2(content);
        //const newmessage = await createmessageUseCase.execute({ topic, content, answer. });
        res.status(200).send(content);
    } catch {
        res.status(400).send("erro");
    }
}

module.exports = {
    createChatmessage
}