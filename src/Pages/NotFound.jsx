import React from 'react'
import {FaHome} from 'react-icons/fa';
import {Link} from 'react-router-dom';


function NotFound() {
  return (
    <div className='flex flex-col items-center'>
        <h1 className='text-6xl font-bold text-[#0096FF]'>Oops!</h1>
        <p className='my-3 text-3xl'>404 - Page Not Found</p>
        <Link to='/' className='btn btn-primary my-2'>
            <FaHome className='mr-2' />
            Back to Home
        </Link>
    </div>
  )
}

export default NotFound