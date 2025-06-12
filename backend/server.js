// server.js

import express from 'express';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const cors = require('cors');
const dotenv = require('dotenv');

import OpenAI from 'openai';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: 'https://openrouter.ai/api/v1',
});

console.log("API Key:", process.env.OPENROUTER_API_KEY); // Debugging check

app.post('/api/explain', async (req, res) => {
  const { code } = req.body;

  if (!code) {
    return res.status(400).json({ error: 'Code is required' });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: 'openai/gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful assistant that explains code clearly and concisely.' },
        { role: 'user', content: `Explain this code:\n${code}` },
      ],
    });

    const explanation = completion.choices[0]?.message?.content.trim();
    res.json({ explanation });

  } catch (error) {
    console.error('Error explaining code:', error);
    res.status(500).json({ error: 'Failed to generate explanation' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
