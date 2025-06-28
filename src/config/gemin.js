// const apiKey = "AIzaSyAKDYSDdmTP7IyTpa7t5ore5Bqc3JcfxQs";

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyAKDYSDdmTP7IyTpa7t5ore5Bqc3JcfxQs" });

async function runChat(prompt) {
  const response = await ai.models.generateContent({  
    model: "gemini-2.5-flash",
    contents: [prompt],
  });
  console.log(response.text);
  return response.text;
}

export default runChat;