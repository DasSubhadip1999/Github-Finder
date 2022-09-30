import React, {useContext, useEffect} from 'react'
import UserDataContext from '../../Context/userDataContext'
import {v4 as uuidv4} from 'uuid'
import Spinner from './Spinner';
import UserItem from './UserItem';


function UserResults() {
  const {users, loading} = useContext(UserDataContext);

  if(!loading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {
          users.map( user =>  <UserItem key={uuidv4()} data={user} />)
        }
      </div>
    )
  }else {
    return <Spinner />
  }
}

export default UserResults