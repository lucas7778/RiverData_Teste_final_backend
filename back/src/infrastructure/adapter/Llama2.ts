import { env } from "process";
import IAiMessenger from "../../core/services/IAiMessenger";

export default class Llama2Messenger implements IAiMessenger {
    static send(content: any) {
        throw new Error("Method not implemented.");
    }
    async send(message: string, topic: string): Promise<string> {
        const response = await fetch(`${env.LLAMA2_URL}`, {
            method: "post",
            headers: {
                Authorization: `Bearer ${env.LLAMA2_TOKEN} `,
            },
            body: JSON.stringify({
                "input_data": {
                    "input_string": [
                        {
                            "role": "system",
                            "content": "you only answer about" + topic
                        },
                        {
                            "role": "user",
                            "content": message
                        }
                    ],
                    "parameters": {
                        "temperature": 0.6,
                        "top_p": 0.9,
                        "do_sample": true,
                        "max_new_tokens": 200
                    }
                }
            })
        });
        const answer = await response.json();
        return answer
    }

}

