import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"],
});

interface Prompt {
  role: string;
  content: string;
}

const GPT_MODEL: string = "gpt-4-1106-preview";

export async function getGPTResponse(promptContent: string) {
  try {
    const chatCompletion = await openai.chat.completions.create({
      model: GPT_MODEL,
      messages: [
        {
          role: "user",
          content: promptContent,
        },
      ],
    });
    const content = chatCompletion.choices[0].message.content;
    if (!content) return null;
    //info: quick hack using gpt
    const jsonPart = content.replace("```json\n", "").replace("\n```", "");
    const jsonObject = JSON.parse(jsonPart);
    return jsonObject[0];
  } catch (error) {
    console.error({ error });
    return null;
  }
}
