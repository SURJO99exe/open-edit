import axios from "axios";
export async function askAI(prompt, model) {
    const res = await axios.post("http://localhost:11434/api/generate", {
        model,
        prompt,
        stream: false
    });
    return res
        .data
        .response;
}
