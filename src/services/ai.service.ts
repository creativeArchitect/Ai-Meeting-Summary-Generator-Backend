import OpenAI from "openai";
import dotenv from 'dotenv'

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.API_KEY,
});

const generateSummary = async (content: string, instruction: string) => {
  try {
    const prompt = `${instruction}\n\nTranscript:\n${content}`;
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });
    return response.choices[0]?.message?.content;
  } catch (err) {
    // console.log("error in gen summary service: ", err);
  }
};

export default generateSummary;
