import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';

const Matrix = ({ matrixOptions, onSelectMatrix }) => {
  const [selectedMatrix, setSelectedMatrix] = useState('');

  const handleChange = (event) => {
    const matrix = event.target.value;
    setSelectedMatrix(matrix);
    onSelectMatrix(matrix);
  };

  return (
    <Box mt={3}>
      <FormControl fullWidth>
        <InputLabel id="matrix-selector-label">Select Matrix</InputLabel>
        <Select
          labelId="matrix-selector-label"
          id="matrix-selector"
          value={selectedMatrix}
          label="Select Matrix"
          onChange={handleChange}
        >
          {matrixOptions.map((matrix, index) => (
            <MenuItem key={index} value={matrix}>
              {matrix}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Matrix;
