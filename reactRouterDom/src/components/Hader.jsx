import React from 'react'
import { Link } from 'react-router-dom'

const Hader = () => {

  return (
    <div className='px-6 py-10 bg-red-500 flex items-center justify-between'>
      <h2 className='text-2xl text-white'>Biswarup</h2>
      <div className='flex gap-10'>
        <Link to='/'> Home</Link>
        <Link to='/about'> About</Link>
        <Link to='/contact'> Contact</Link>
        <Link to='/product'> Product</Link>
      </div>
    </div>
  )
}

export default Hader
