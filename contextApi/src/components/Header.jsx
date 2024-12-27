import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const Header = () => {
    const userName = useContext(DataContext)
  return (
    <div>
      <h1 className='text-white'>Header {userName.name}</h1>
    </div>
  )
}

export default Header
