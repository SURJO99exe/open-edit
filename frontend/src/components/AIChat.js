import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import axios from "axios";
export default function AIChat() {
    const [prompt, setPrompt] = useState("");
    const [answer, setAnswer] = useState("");
    async function send() {
        const res = await axios.post("http://localhost:11434/api/generate", {
            model: "qwen3-coder",
            prompt,
            stream: false
        });
        setAnswer(res.data.response);
    }
    return (_jsxs("div", { className: "chat", children: [_jsx("textarea", { value: prompt, onChange: (e) => setPrompt(e.target.value) }), _jsx("button", { onClick: send, children: "Send" }), _jsx("pre", { children: answer })] }));
}
