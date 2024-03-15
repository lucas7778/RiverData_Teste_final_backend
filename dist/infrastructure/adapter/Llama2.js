"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Llama2Messenger {
    static send(content) {
        throw new Error("Method not implemented.");
    }
    async send(message, topic) {
        const response = await fetch(`https://rivia-rthzn.brazilsouth.inference.ml.azure.com/score`, {
            method: "post",
            headers: {
                Authorization: `Bearer 4CUdm3xRF52khe94GYJSOKZcP83z0TAf `,
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
        console.log(answer);
        return answer;
    }
}
exports.default = Llama2Messenger;
