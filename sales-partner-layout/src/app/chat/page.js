'use client';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ChatPage = () => {
  const [query, setQuery] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Append the user's query to the chat history
    setChatHistory([...chatHistory, { role: 'user', text: query }]);

    try {
      const response = await fetch('http://localhost:3001/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query })
      });

      const data = await response.json();
      // Append the AI response to the chat history
      setChatHistory([...chatHistory, { role: 'user', text: query }, { role: 'ai', text: data.response }]);
      setQuery('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Chat with AI
      </Typography>
      <Box sx={{ mb: 2 }}>
        {chatHistory.map((message, index) => (
          <Typography key={index} sx={{ mt: 1, textAlign: message.role === 'user' ? 'right' : 'left' }}>
            <strong>{message.role === 'user' ? 'You' : 'AI'}:</strong> {message.text}
          </Typography>
        ))}
      </Box>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          placeholder="Enter your message"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button variant="contained" fullWidth sx={{ mt: 2 }} type="submit" disabled={!query}>
          Send
        </Button>
      </form>
    </Box>
  );
};

export default ChatPage;
