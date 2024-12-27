import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Hader from './components/Hader'

const App = () => {
  return (
    <div>
     <Hader/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/product' element={<Product/>}/>

       
      </Routes>
    </div>
  )
}

export default App
