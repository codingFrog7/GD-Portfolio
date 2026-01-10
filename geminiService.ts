
import { GoogleGenAI } from "@google/genai";
import { RESUME_DATA } from "./constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getGeminiResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: `You are Deepu Kashyap's AI Portfolio Assistant. 
        Deepu is a Graphic Designer and Frontend Developer. 
        Current details: 
        - Education: ${RESUME_DATA.education.degree} at ${RESUME_DATA.education.school}.
        - Skills: ${RESUME_DATA.skills.map(s => s.name).join(', ')}.
        - Experience: ${RESUME_DATA.experiences.map(e => e.role).join(', ')}.
        Be bold, helpful, and creative in your tone, matching the vibrant neo-retro aesthetic of the portfolio. 
        Keep answers concise. If asked about contact info, provide ${RESUME_DATA.contact.email}.`,
      },
    });
    return response.text || "I'm a bit overwhelmed by the colors right now! Try asking again.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The colors are too bright! I hit an error. Please try again later.";
  }
};
