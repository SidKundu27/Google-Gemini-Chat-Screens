import React, { useState } from 'react';
import { TextField, IconButton, Box, Typography, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';

export default function SearchSection({ query, setQuery, handleSubmit, selectedFile, setFile }) {
  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      gap={2}
      p={2} 
      borderRadius={2}
      boxShadow={1}
      sx={{ backgroundColor: '#f8f9fa', width: '50%' }}
    >
      {/* Search Input */}
      <TextField
        variant="outlined"
        placeholder="Let me know how I can help you!"
        fullWidth
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        sx={{
          '& .MuiOutlinedInput-root': {
            paddingRight: 0,
          },
        }}
        slotProps={{
          input: {
            endAdornment: (
              <IconButton onClick={handleSubmit}>
                <SendIcon />
              </IconButton>
            ),
          },
        }}
      />

      {/* Add Documents Section */}
      <Box 
        display="flex" 
        alignItems="center" 
        justifyContent="space-between"
      >
        <Typography variant="body2" color="textSecondary">
          Add documents (meeting notes, client briefings) to start a new project
        </Typography>

        <Button
          variant="outlined"
          component="label"
          startIcon={<AttachFileIcon />}
        >
          Upload
          <input
            type="file"
            hidden
            onChange={(e) => setFile(e.target.files[0])}
          />
        </Button>
      </Box>

      {/* Selected File Display */}
      {selectedFile && (
        <Typography variant="body2" color="primary">
          Uploaded: {selectedFile.name}
        </Typography>
      )}
    </Box>
  );
};
