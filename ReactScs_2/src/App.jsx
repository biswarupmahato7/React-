import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './components/Cart'

const App = () => {
  const users = [
    {
      "name": "Alice Johnson",
      "age": 28,
      "city": "New York",
      "profession": "Software Engineer",
      "profilePhoto": "https://media.gettyimages.com/id/2155145085/photo/india-portraits-icc-mens-t20-cricket-world-cup-west-indies-usa-2024.jpg?s=2048x2048&w=gi&k=20&c=KCcErwxVrAoAuFCCkEv3VyRNCLIjPKCKh-qKyhbD-3o="
    },
    {
      "name": "Brian Smith",
      "age": 34,
      "city": "Los Angeles",
      "profession": "Graphic Designer",
      "profilePhoto": "https://example.com/photos/brian.jpg"
    },
    {
      "name": "Catherine Lee",
      "age": 24,
      "city": "Chicago",
      "profession": "Marketing Specialist",
      "profilePhoto": "https://example.com/photos/catherine.jpg"
    },
    {
      "name": "David Brown",
      "age": 40,
      "city": "Houston",
      "profession": "Project Manager",
      "profilePhoto": "https://example.com/photos/david.jpg"
    },
    {
      "name": "Eleanor Wilson",
      "age": 31,
      "city": "San Francisco",
      "profession": "Data Scientist",
      "profilePhoto": "https://example.com/photos/eleanor.jpg"
    }
  ]
  

  return (
    <div>
      <Header/>
      <div className='m-5'>
       {users.map((users,idx)=>{
        return <Cart key={idx} name={users.name} profession={users.profession} age={users.age} city={users.city} photo={users.profilePhoto}/>
       })}
      </div>
      
     <Footer/>
    </div>
  )
}

export default App
