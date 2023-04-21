import React, { createContext, useState } from 'react'
 
export const UserContext = createContext({})

const UserProvider = ({children}) => {
  const [userData, setData] = useState({})

  const logout = () =>{
    setData(null)
  }

  return (
    <div>
      <UserContext.Provider value={{userData, setData, logout}}>
        {children}
      </UserContext.Provider>
    </div>
  )
}

export default UserProvider