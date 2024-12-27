import React from 'react'
import './App.css'
import Card from './components/Card'

const App = () => {
  return (
    <div className='flex'>
      <h1 className='bg-green-400 p-4 rounded-xl'>Hello Tailwind</h1>
      <Card name="Biswarup" surname="Mahato"/>
      <Card name="Amit" surname="Roy"/>
    </div>
  )
}

export default App
