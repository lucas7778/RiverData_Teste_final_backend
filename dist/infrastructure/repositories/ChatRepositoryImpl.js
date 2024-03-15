"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ChatRepositoryImpl {
    constructor() {
        this.messages = [];
    }
    async Createmessage(inputmessage) {
        const message = await this.messages.push(inputmessage);
        return message;
    }
}
exports.default = ChatRepositoryImpl;
