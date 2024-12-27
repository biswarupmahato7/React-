import React, { useCallback, useContext } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Section from './components/Section'
import { DataContext } from './context/UserContext'

const App = () => {
  const data = useContext(DataContext)
  console.log(data)
  return (
    <div>
      <h1 className='text-white font-bold'> i am App</h1>
      <Header/>
      <Section/>
      <Footer/>
    </div>
  )
}

export default App
