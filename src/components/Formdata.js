import React from 'react';
import '../styles/Formdata.css';
import Status from './Status';
import Type from './Type';
import Launch from './Launch';
import Button from '@mui/material/Button';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

//component which consists html form tag

function Formdata(props) {

  let statusValue = '';
  let typeValue = '';
  let launchValue = '';

  const getStatus = (status) => { // get current value from status input
    statusValue = status;
  }

  const getType = (type) => {  // get current value from type input
    typeValue = type;
  }

  const getLaunch = (launch) => {  // get current value from launch input
    launchValue = launch;
  }

  const postRequest = async (obj) => { // post request to PHP API
    try{
      const res = await fetch('http://localhost:8000/api/index.php',{
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      });
      const data = await res.json();
      setTimeout(() => {
        props.filter(data)
      },300)
    }catch(e){
      console.log(`Error Occured`)
    }
    
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let obj = {
      'status': statusValue,
      'type': typeValue,
      'launch': launchValue,
    }
    postRequest(obj);
  }

  return (
    <>
        <form onSubmit={handleSubmit}>
          <div className='container-fluid'>
            <p className='h4 filter-p'>Filters
              <FilterAltIcon></FilterAltIcon>
            </p>
            <div className='row'>
              <div className='col-6'>
                <Status getstatus={getStatus}></Status>
              </div>
              <div className='col-6'>
                <Type gettype={getType}></Type>
              </div>
            </div>

            <div className='row'>
              <div className='col-6'>
                  <Launch getlaunch={getLaunch}></Launch>
                </div>
                <div className='col-6'>
                <Button className='submit-btn' type="submit" variant="contained">Fetch Data</Button>
              </div>
            </div>
              
          </div>
        </form>
    </>
  )
}

export default Formdata