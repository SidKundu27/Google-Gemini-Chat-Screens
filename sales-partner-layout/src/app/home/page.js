'use client'
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SalesForm from '../components/SalesForm';
import TopDeals from '../components/TopDeals';
import AssistantHeader from '../components/AssistantHeader';

const SalesPage = () => {
  const [showDeals, setShowDeals] = React.useState(true);

  return (
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

      <SalesForm />
      <TopDeals />

    </Box>
  );
};

export default SalesPage;