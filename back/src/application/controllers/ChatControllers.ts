import { Request, Response } from "express";
import CreateMessageUseCase from "../../core/domain/use-case/CreateMessageUseCase";
import ChatRepositoryImpl from "../../infrastructure/repositories/ChatRepositoryImpl";
import Llama2Messenger from "../../infrastructure/adapter/Llama2";

const chatRepositoryImpl = new ChatRepositoryImpl()
const llama2Messenger = new Llama2Messenger()

export const createChatmessage = async (req: Request, res: Response) => {
    try {
        const { topic, content } = req.body;
        const createmessageUseCase = new CreateMessageUseCase(chatRepositoryImpl, llama2Messenger);
        const answer = await createmessageUseCase.execute({ topic, content });

        res.status(200).send(answer.anwser);
    } catch (erro) {
        console.log(erro)
        res.status(400).send("erro");
    }
}

module.exports = {
    createChatmessage
}