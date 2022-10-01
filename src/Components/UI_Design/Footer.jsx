import React from 'react'

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className='flex justify-between px-3 py-1 text-[11px] md:text-sm lg:text-sm xl:text-sm bg-[#04293A] text-[#fff]'>
     <p>&copy; {year} GitHub Finder. All rights reserved</p>
     <p>created by <a className='font-bold cursor-pointer' target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/subhadip-das-04b48b205'>Subhadip Das</a></p>
    </footer>
  )
}

export default Footer