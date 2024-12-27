import React from 'react'
import { useState } from 'react'

const App = () => {
  const [username, setUsername] = useState("")

  const formHandler = (e)=>{
    e.preventDefault()
    //console.log('Hello',e)
    console.log(username)
    setUsername('')
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        formHandler(e)
      }} >
        <input
        value={username}
        onChange={(e)=>{
          setUsername(e.target.value)
        }}
        type="text" placeholder='Enter Your Name' 
        className='text-black text-2xl h-20 w-80 m-1 p-1 bg-gray-600 rounded-md' 

        />
        <button className='text-black text-xl bg-green-400 p-4 m-1 rounded-md'> Submit</button>
      </form>
      
    </div>
  )
}

export default App
