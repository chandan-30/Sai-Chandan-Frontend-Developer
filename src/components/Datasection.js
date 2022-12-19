import React from 'react'
import '../styles/Datasection.css';
import { useState, useContext } from 'react';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { DataContext } from './Datacontext';

import animationData from '../lotties/astronaut-with-space-shuttle.json';
import Modal from './Modal';
import Pagination from './Pagination';
import Lottie from 'react-lottie';

// component to render data grids
function Datasection() {

  const [cardVal, setCardVal] = useState(''); // state data to pass into the modal component
  const [currentPage, setCurrentPage] = useState(1); //state data for pagination functionality
  const [postsPerPage] = useState(10);

  
  

  let obj = {};

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };


  let data = useContext(DataContext);
  if(data && data.length){
    data = JSON.parse(data);
  }

  const cardClick = (e) => { // to display modal with data filled in it
    setCardVal(obj[e.currentTarget.attributes['data-serial'].value]);
    
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  //Get current posts
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost)
  //change page

  const paginate = (pageNumber) => setCurrentPage(pageNumber) // setting the pagenumber
  return (
    <>
    <section className='grid-container' data-testid="Datasection-id">
      {
          currentPosts.length === 0 &&
          <div>
            <Lottie 
            options={defaultOptions}
              height={250}
              width={250}
            />
          </div> 
      }
      {
        
        currentPosts.length > 0 && 
        currentPosts.map( (item) => {
            obj[item['capsule_serial']] = item;
          
            return (
              <article onClick={cardClick} className='card' key={item['capsule_serial']} data-serial={item['capsule_serial']} data-toggle="modal" data-target="#myModal">
                <div >
                  <RocketLaunchIcon className='rocket'></RocketLaunchIcon>
                  <p className='h5 text-slate-100 one'>{item['capsule_serial']}</p>
                  <p className='h7 text-slate-500 two'>{
                    item['details'] ? item['details']: 'Details Not Found'
                    } </p>
                </div>
                
              </article>
            )
          })
    
      }
      <Modal object={cardVal}></Modal>
      
    </section>
    <footer>
      <Pagination postsPerPage={postsPerPage} totalPosts={data.length} paginate={paginate}  />
    </footer>
    </>
  )
}

export default Datasection