import IAiMessenger from "../../core/services/IAiMessenger";

export default class Llama2Messenger implements IAiMessenger {
   async send(message: string): Promise<string> {
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

