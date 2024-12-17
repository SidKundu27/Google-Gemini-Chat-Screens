import React from 'react';
import { Box, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star'; // Replace with your custom logo if needed

const AssistantHeader = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      p={3}
      gap={2}
    >
      {/* Logo/Icon */}
      <Box>
        <StarIcon sx={{ fontSize: 60 }} /> {/* Placeholder for the symbol */}
      </Box>

      {/* Introduction Text */}
      <Typography variant="h4" color="textPrimary" fontWeight="500">
        Hi Kim, I’m Tyce, your Sales Partner.
      </Typography>
      <Typography variant="body1" color="textSecondary">
        I’m here to help you sell projects.
      </Typography>

      {/* Assistance Question */}
      <Typography variant="h6" color="primary" mt={1}>
        What do you need assistance with today?
      </Typography>
    </Box>
  );
};

export default AssistantHeader;
