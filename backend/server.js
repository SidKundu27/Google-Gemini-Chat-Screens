const express = require('express');
const multer = require('multer');
const fs = require('fs');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config()

const app = express();
const port = process.env.PORT || 4000;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage: storage });

require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

app.use(cors());
app.use(express.json());

// app.get('/api/test', upload.single('file'), async (req, res) => {
//   try {
//     const prompt = "Explain how AI works";

//     const result = await model.generateContent(prompt);
//     console.log(result.response.text());
//     res.json({ response: result.response.text() });
//   } catch (error) {
//     console.error('Error generating content:', error);
//     res.status(500).json({ error: 'Failed to generate content' });
//   }
// });

app.post('/api/generate', upload.single('file'), async (req, res) => {
  try {
    const query = req.body.query;
    const filePath = req.file?.path;

    if (!filePath) {
      return res.status(400).json({ error: query, query: query });
    }

    // Read the file content
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    fs.unlinkSync(filePath);

    // Send the prompt and file content to the AI model
    const response = await model.generateContent({
      contents: [
        { role: 'user', parts: [{ text: `Prompt: ${query}\nDocument: ${fileContent}` }] }
      ]
    });

    res.json({ response: response.response.text() });
  } catch (error) {
    console.error('Error generating content:', error);
    res.status(500).json({ error: 'Failed to generate content' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
