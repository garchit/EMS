import React, { useState , createContext, useEffect } from 'react'
import { getLocalStorage , setLocalStorage} from '../utils/localstorage';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  const [userData , setUserData] = useState(null);

    useEffect(() =>{
        const {employees , admin} = getLocalStorage();
        setUserData({employees,admin})
    } , []);

    const updateUserData = (newData) => {
      setUserData(newData);
      setLocalStorage(newData);
    };  


  return (
    <div>
        <AuthContext.Provider value={{userData , updateUserData}}>
      {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
