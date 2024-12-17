import React, { useState } from 'react';
import { TextField, IconButton, Box, Typography, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const SearchSection = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

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
        InputProps={{
          endAdornment: (
            <IconButton>
              <SendIcon />
            </IconButton>
          ),
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
            onChange={handleFileChange}
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

export default SearchSection;
