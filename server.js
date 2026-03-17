require('dotenv').config();
const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Basic route
app.get('/', (req, res) => {
  res.send('Mini AI Assistant Server');
});

// API route for generating AI response
app.post('/api/generate', async (req, res) => {
  const { prompt } = req.body;

  // Validate prompt
  if (!prompt || typeof prompt !== 'string') {
    return res.status(400).json({ error: 'Prompt is required and must be a string' });
  }

  if (prompt.length > 1000) {
    return res.status(400).json({ error: 'Prompt must be 1000 characters or less' });
  }

  try {
    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
    });

    const aiResponse = completion.choices[0].message.content;
    res.json({ response: aiResponse });
  } catch (error) {
    console.error('OpenAI API error:', error);
    res.status(500).json({ error: 'Failed to generate response' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});