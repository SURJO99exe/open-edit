import axios from "axios";

export async function
askAI(
  prompt:string,
  model:string
){

  const res =
    await axios.post(

      "http://localhost:11434/api/generate",

      {
        model,
        prompt,
        stream:false
      }
    );

  return res
    .data
    .response;
}