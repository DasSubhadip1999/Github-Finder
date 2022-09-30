import React, { useContext } from 'react'
import AlertContext from '../../Context/AlertContext'

function Alert() {
    const {alert} = useContext(AlertContext)
  return (
    alert !== null && (
        <p className='flex items-center py-2 font-bold text-red-500'>
            <i className="fa-solid fa-circle-xmark mx-1"></i>
            {alert.msg}
        </p>
    )
  )
}

export default Alert