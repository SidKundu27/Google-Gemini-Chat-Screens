const express = require('express');
const multer = require('multer');
const cors = require('cors');
const { GeminiClient } = require('@google-ai/generativeai');

const app = express();
const port = 3001;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage: storage });

const geminiClient = new GeminiClient({
  apiKey: 'YOUR_GOOGLE_AI_API_KEY' // Replace with your Google AI API key
});

app.use(cors());
app.use(express.json());

app.post('/api/generate', upload.single('file'), async (req, res) => {
  const query = req.body.query;
  const filePath = req.file.path;

  // Read the file content
  const fs = require('fs');
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  // Send the prompt and file content to the AI model
  const response = await geminiClient.generateText({
    model: 'text-davinci-003', // Replace with your desired model
    prompt: `Prompt: ${query}\nDocument: ${fileContent}`,
    maxTokens: 1024,
    temperature: 0.5
  });

  res.json({ response: response.data.choices[0].text });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
