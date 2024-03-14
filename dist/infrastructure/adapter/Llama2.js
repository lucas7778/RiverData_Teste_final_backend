"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMenssageWithLlama2 = void 0;
const sendMenssageWithLlama2 = async (content) => {
    const response = await fetch("https://rivia-rthzn.brazilsouth.inference.ml.azure.com/score", {
        method: "post",
        headers: {
            Authorization: "Bearer 4CUdm3xRF52khe94GYJSOKZcP83z0TAf",
        },
        body: JSON.stringify({
            "input_data": {
                "input_string": [
                    {
                        "role": "user",
                        "content": content
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
};
exports.sendMenssageWithLlama2 = sendMenssageWithLlama2;
