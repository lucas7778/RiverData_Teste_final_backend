import { randomUUID } from "crypto";

export default class Message {
    id: string;
    topic: string;
    content: string;
    answer: string;

    constructor(topic: string, content: string, answer: string) {
        this.id = generateId();
        this.topic = topic;
        this.content = content;
        this.answer = answer;
    }

}

function generateId(): string {
    const _id: string = randomUUID()
    return _id
};
