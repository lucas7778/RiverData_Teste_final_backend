import { useQuery } from "@tanstack/react-query";
import { z } from 'zod';

const inputChatSchema = z.object({
    topic: z.string(),
    message: z.string()
});

export type inputChatData = z.infer<typeof inputChatSchema>;

const outputSchema = z.object({
    output: z.string()
});

export type outputChatData = z.infer<typeof outputSchema>;

export const useChatMessage = (inputTopic: string | undefined, inputMessage: string | undefined) => {
    return useQuery({
        queryKey: ["chat-message", inputTopic, inputMessage],

        queryFn: async (): Promise<outputChatData> => {
            const respose = await fetch("http://localhost:3000/chat-message", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    topic: inputTopic,
                    content: inputMessage
                })
            });
            const anwser = await respose.json();
            outputSchema.parse(anwser);
            return outputSchema.parse(anwser)
        },
        enabled: !!inputTopic && !!inputMessage
    })
}
