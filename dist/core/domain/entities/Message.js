"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
class Message {
    constructor(topic, content, answer) {
        this.id = generateId();
        this.topic = topic;
        this.content = content;
        this.answer = answer;
    }
}
exports.default = Message;
function generateId() {
    const _id = (0, crypto_1.randomUUID)();
    return _id;
}
;
