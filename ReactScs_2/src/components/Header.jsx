import React from 'react'

const Header = () => {
  return (
   <nav className='flex bg-green-500 px-10 py-5 justify-between '>
    <h2 className='text-2xl'>Biswarup</h2>
    <div className='flex gap-10 items-center justify-between'>
        <h4 className='text-xl font-bold'>About</h4>
        <h4 className='text-xl font-bold'>Service</h4>
        <h4 className='text-xl font-bold'>Contact</h4>
        <h4 className='text-xl font-bold'>Help</h4>
    </div>
   </nav>
  )
}

export default Header
