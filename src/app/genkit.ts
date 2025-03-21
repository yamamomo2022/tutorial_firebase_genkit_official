'use server';

import { gemini20FlashLitePreview0205, vertexAI } from "@genkit-ai/vertexai";
import { genkit, z } from "genkit";

const ai = genkit({
  plugins: [vertexAI()],
  model: gemini20FlashLitePreview0205,
});

export const menuSuggestionFlow = ai.defineFlow(
  {
    name: "menuSuggestionFlow",
    inputSchema: z.string(),
    outputSchema: z.string(),
  },
  async (restaurantTheme) => {
    const { text } = await ai.generate('Invent a menu item for a ${restaurantTheme} themed restaurant.');
    return text;
  }
);