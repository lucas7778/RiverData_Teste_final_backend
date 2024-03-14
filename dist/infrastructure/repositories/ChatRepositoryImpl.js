"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ChatRepositoryImpl {
    constructor() {
        this.messages = [];
    }
    async Createmessage(input) {
        const message = await this.messages.push(input);
        return message;
    }
}
exports.default = ChatRepositoryImpl;
