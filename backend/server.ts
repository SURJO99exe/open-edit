import express from "express";
import axios from "axios";

const app = express();
app.use(express.json());

app.get("/models", async (req, res) => {
  try {
    const result = await axios.get("http://localhost:11434/api/tags");
    res.json(result.data.models);
  } catch {
    res.json([]);
  }
});

app.post("/chat", async (req, res) => {
  const { prompt } = req.body;

  try {
    const result = await axios.post("http://localhost:11434/api/generate", {
      model: "llama3",
      prompt
    });

    res.json(result.data);
  } catch (err) {
    res.status(500).json({ error: "AI error" });
  }
});

app.listen(3001, () => {
  console.log("Backend running on http://localhost:3001");
});