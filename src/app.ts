import express from 'express';
import { createChatmessage } from "./application/controllers/ChatControllers";


const app = express();

app.use(express.json());

app.post("/chat-message", createChatmessage);

app.listen(3000, () => {
    console.log("ok")
})