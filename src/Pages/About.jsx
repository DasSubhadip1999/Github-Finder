import React from 'react'

function About() {
  return (
    <div className='mx-8'>
      <h1 className='text-6xl mb-4'>Github Finder</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub profiles and see profile details.
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        Created By:
        <a className='text-white' href='https://www.linkedin.com/in/subhadip-das-04b48b205' rel='noreferrer' target='_blank'>
          Subhadip Das
        </a>
      </p>
    </div>
  )
}

export default About