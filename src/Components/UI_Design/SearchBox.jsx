import React, { useContext } from 'react'
import AlertContext from '../../Context/AlertContext';
import UserDataContext from '../../Context/userDataContext'

function SearchBox() {
    const {setText, text, getUserData, clearData, users} = useContext(UserDataContext);
    const {setAlert} = useContext(AlertContext)
    const handleSubmit = (e) => {
      e.preventDefault();
      if( text.trim() === '') {
        setAlert('Please fill something', 'error');
      }else {
        getUserData();
      }
    }
  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 md:grid-cols-2 mb-10 gap-8'>
        <div>
            <form onSubmit={handleSubmit}>
                <div className='form-control '>
                    <div className='relative'>
                        <input onChange={ e => setText(e.target.value)} value={text} className='w-full pr-40 bg-gray-200 input input-lg text-black' placeholder='Search' />
                        <button type='submit' className='absolute right-0 top-0 rounded-l-none w-36 btn btn-lg'>Search</button>
                    </div>
                </div>
            </form>
        </div>
        {
          users.length !== 0 && (
            <div >
              <button onClick={clearData} className='btn - btn-ghost btn-lg'>Clear all</button>
            </div>
          )
        }
    </div>
  )
}

export default SearchBox