import React from 'react'

// page number component

function Pagination({postsPerPage, totalPosts, paginate}) {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }
    const clickHandler = (number) => {
        //e.preventDefault();
        paginate(number)
    }
  return (
    <nav>
        <ul className='pagination'>
            {
                pageNumbers.map(number => {
                    return <li key={number} className="page-item">
                        <a href="#!" onClick={() => clickHandler(number)} className='page-link'>
                            {number}
                        </a>
                    </li>
                })
            }
        </ul>
    </nav>
  )
}

export default Pagination