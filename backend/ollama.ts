import axios from "axios";

export async function askAI(prompt: string) {
  const response = await axios.post(
    "http://localhost:11434/api/generate",
    {
      model: "qwen3-coder",
      prompt,
      stream: false
    }
  );

  return response.data.response;
}