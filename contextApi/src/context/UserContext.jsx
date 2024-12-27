import React, { createContext } from 'react'

export const DataContext = createContext()

const UserContext = ({children}) => {

    const userData = {
        name:'Biswarup',
        age:23,
        city:'Purulia'
    }
  return (
    <div>
        <DataContext.Provider value={userData}>

            <h1 className='text-white font-bold'>{children}</h1>
        </DataContext.Provider>
    </div>
  )
}

export default UserContext
