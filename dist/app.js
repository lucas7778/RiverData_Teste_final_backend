"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ChatControllers_1 = require("./application/controllers/ChatControllers");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/chat-message", ChatControllers_1.createChatmessage);
app.listen(3000, () => {
    console.log("ok");
});
