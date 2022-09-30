import React from 'react'

import UserResults from '../Components/UI_Design/UserResults';
import SearchBox from '../Components/UI_Design/SearchBox';
import Alert from '../Components/UI_Design/Alert';


function Home() {
  
  return (
    <div className='px-6'>
      <Alert />
      <SearchBox />
      <UserResults />
    </div>
  )
}

export default Home