'use client'
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SalesForm from '../components/SalesForm';
import TopDeals from '../components/TopDeals';
import AssistantHeader from '../components/AssistantHeader';

const SalesPage = () => {
  const [query, setQuery] = useState('');
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the query and file to the backend API
    const formData = new FormData();
    formData.append('query', query);
    formData.append('file', file);

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_API + "/api/generate", {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      setResponse(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 4
      }}>
        <AssistantHeader />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2, width: '100%', maxWidth: 600 }}>
          <Button variant="contained" sx={{ flex: 1, mx: 1 }}>RFP</Button>
          <Button variant="contained" sx={{ flex: 1, mx: 1 }}>Pricing</Button>
          <Button variant="contained" sx={{ flex: 1, mx: 1 }}>Marketing</Button>
          <Button variant="contained" sx={{ flex: 1, mx: 1 }}>Contract</Button>
        </Box>

        <SalesForm
          query={query} 
          setQuery={setQuery}
          selectedFile={file} 
          setFile={setFile}
          handleSubmit={handleSubmit} 
        />;
        <TopDeals />

      </Box>
    </div>
  );
};

export default SalesPage;