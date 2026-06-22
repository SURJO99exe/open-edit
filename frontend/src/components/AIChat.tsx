import { useState } from "react";
import axios from "axios";

export default function AIChat() {

  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");

  async function send() {

    const res = await axios.post(
      "http://localhost:11434/api/generate",
      {
        model: "qwen3-coder",
        prompt,
        stream: false
      }
    );

    setAnswer(
      res.data.response
    );
  }

  return (
    <div className="chat">

      <textarea
        value={prompt}
        onChange={(e) =>
          setPrompt(e.target.value)
        }
      />

      <button onClick={send}>
        Send
      </button>

      <pre>{answer}</pre>

    </div>
  );
}