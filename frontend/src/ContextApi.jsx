import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import { useState } from 'react'
const AppContext=createContext();
export const GlobalContext=()=>useContext(AppContext);
const ContextApi = ({children}) => {
 const [user,setUser]=useState(true);



const data={
 user,setUser
}
  return (
    <div>
     <AppContext.Provider value={data}>
      {children}
     </AppContext.Provider>
    </div>
  )
}

export default ContextApi
