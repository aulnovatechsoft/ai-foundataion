import OpenAI from "openai";

const userApiKey = process.env.OPENAI_API_KEY;

if (!userApiKey && !process.env.AI_INTEGRATIONS_OPENAI_API_KEY) {
  throw new Error(
    "OPENAI_API_KEY (or the Replit OpenAI AI integration) must be configured.",
  );
}

export const openai = userApiKey
  ? new OpenAI({ apiKey: userApiKey })
  : new OpenAI({
      apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
      baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
    });
