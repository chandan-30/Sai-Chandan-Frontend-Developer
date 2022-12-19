import React from 'react'
import '../styles/Banner.css';

// Component to render Hero image
function Banner() {
  return (
    <>
        <div className='container' style={{marginTop: '30px'}}>
            <div className='row banner'>
                <div className='col-12'>
                    
                    <img src={require('../images/7.jpg')} alt='banner'/>
                    
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Banner