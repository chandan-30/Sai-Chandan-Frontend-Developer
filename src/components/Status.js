import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// status input component

export default function Status(props) {
  const [status, setStatus] = React.useState('');

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  React.useEffect( () => {
    props.getstatus(status);
  }, [props, status]);


  return (
    <Box sx={{ minWidth: 120}} className='input'>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          label="Status"
          onChange={handleChange}
          data-testid="Status-id"
        >
          <MenuItem value={'active'}>Active</MenuItem>
          <MenuItem value={'retired'}>retired</MenuItem>
          <MenuItem value={'unknown'}>Unknown</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}