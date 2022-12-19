import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// Type input component

export default function Type(props) {
  const [type, setType] = React.useState('');

  const handleChange = (event) => {
    setType(event.target.value);
  };

  React.useEffect( () => {
    props.gettype(type);
  }, [props, type]);

  return (
    <Box sx={{ minWidth: 120}} className='input'>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="Type"
          onChange={handleChange}
          data-testid = "Type-id"
        >
          <MenuItem value={'Dragon 1.0'}>dragon 1.0</MenuItem>
          <MenuItem value={'Dragon 1.1'}>dragon 1.1</MenuItem>
          <MenuItem value={'Dragon 2.0'}>dragon 2.0</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}