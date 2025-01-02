import React from 'react'
import { setLocalStorage } from '../../utils/localstorage'

const Header = ({data,changeUser}) => {
  // console.log(data)
  const logOutUser=()=>{
    localStorage.setItem('loggedInUser',null);
    // window.location.reload();
    changeUser('')
  }
  return (
    <div>

        <div className='flex items-end justify-between'>
            <h1 className="text-2xl font-meduim"> Hello <br/> <span className='text-3xl font-semibold'>admin 👋</span> </h1>
            <button onClick={logOutUser} className='bg-red-600 text-lg font-meduim text-white py-2 px-4 rounded-md mb-2'>Log out </button>
        </div>
      
    </div>
  )
}

export default Header
