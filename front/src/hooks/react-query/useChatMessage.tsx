import { useQuery } from "@tanstack/react-query";
import { z } from 'zod';

const inputChatSchema = z.object({
    topic: z.string(),
    message: z.string()
});

export type inputChatData = z.infer<typeof inputChatSchema>;

const outputSchema = z.object({
    answer: z.string()
});

export type outputChatData = z.infer<typeof outputSchema>;

export const useChatMessage = (inputTopic: string, inputMessage: string) => {
    return useQuery({
        queryKey: ["chat-message"],
        queryFn: async (): Promise<outputChatData> => {
            const respose = await fetch("", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    topic: inputTopic,
                    message: inputMessage
                })
            });
            const anwser: outputChatData = await respose.json()
            return anwser
        }
    })
}
