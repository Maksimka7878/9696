import { GoogleGenAI, Type, Schema } from "@google/genai";
import { SetlistResponse } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const setlistSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    vibe: { type: Type.STRING, description: "Общее настроение сета (на русском)" },
    songs: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          description: { type: Type.STRING, description: "Краткое описание барабанного ритма (на русском)" },
          tempo: { type: Type.STRING, description: "BPM или описание скорости (на русском)" },
        },
        required: ["title", "description", "tempo"],
      },
    },
    lightingSuggestion: { type: Type.STRING, description: "Идеи по сценическому свету (на русском)" },
  },
  required: ["vibe", "songs", "lightingSuggestion"],
};

export const generateSetlist = async (mood: string): Promise<SetlistResponse | null> => {
  if (!apiKey) {
    console.warn("No API Key provided");
    return null;
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Создай уникальный сет-лист из 3 песен для барабанного шоу "Grimerka96" на основе настроения: "${mood}". Группа играет тяжелую, индустриальную и трайбл-электронику. Ответ должен быть на русском языке.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: setlistSchema,
        systemInstruction: "Ты креативный директор перкуссионной группы. Будь креативным, дерзким и точным. Используй русский язык.",
      },
    });

    const text = response.text;
    if (!text) return null;
    return JSON.parse(text) as SetlistResponse;
  } catch (error) {
    console.error("Gemini generation error:", error);
    return null;
  }
};