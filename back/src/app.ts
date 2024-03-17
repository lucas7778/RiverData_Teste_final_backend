import express from 'express';
import { createChatmessage } from "./application/controllers/ChatControllers";
import * as dotenv from 'dotenv';
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());

app.post("/chat-message", createChatmessage);

app.listen(3000, () => {
    console.log("ok")
})