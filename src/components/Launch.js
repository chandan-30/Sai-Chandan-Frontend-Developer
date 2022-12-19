import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useContext } from 'react';
import { DataContext } from './Datacontext';


// Launch input component

export default function Launch(props) {
  const [launch, setLaunch] = React.useState('');

  const handleChange = (event) => {
    setLaunch(event.target.value);
  };

  React.useEffect( () => {
    props.getlaunch(launch);
  },[props, launch]);

  let data = useContext(DataContext);

  if(data && data.length){
    data = JSON.parse(data);
  }

  return (
    <Box sx={{ minWidth: 120}} className='input'>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">launch</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={launch}
          label="Type"
          onChange={handleChange}
          data-testid="Launch-id"
        >
            {
                data && data.length > 0 && 
                data.map( (item) => {
                    return (
                        <MenuItem key={item["capsule_serial"]} value={item["original_launch"]}>{item["original_launch"]}</MenuItem>
                    )
                })
            }
          
        </Select>
      </FormControl>
    </Box>
  );
}