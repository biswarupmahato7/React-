import React from 'react'

const Cart = (props) => {
  return (
    <div className='bg-green-300 text-black inline-block p-6 m-4 text-center h-96 w-80 rounded-md '>
        <img src={props.photo} alt="" className='h-32 w-32 rounded-full mb-3  object-scale-down'/>
        <h1 className='text-2xl font-semibold mb-4'>{props.name}</h1>
        <h1 className='text-2xl font-light mb-4'>{props.profession}</h1>
        <h2>{props.age} {props.city}</h2>
        <button className='bg-green-800 text-white font-medium px-4 py-2 rounded-md'>Add Friend</button>
      
    </div>
  )
}

export default Cart
