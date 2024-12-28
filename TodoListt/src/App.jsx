/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
//import './App.css'
import {TodoProvider} from './context/index.js'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import Header from './components/Header.jsx'

const App = () => {
  const [todos, setTodos] = useState([])
//add
  const addTodo = (todo)=>{
    console.log(todo)
    setTodos((prev)=> [{id: Date.now(),...todo},...prev])

  }
//edit or update
  const updateTodo = (id,todo)=>{
    setTodos((prev)=> prev.map((prevTodo)=>
      (prevTodo.id === id ? todo : prevTodo)))
  }
  //delete
   const deleteTodo = (id)=>{
    setTodos((prev)=> prev.filter((todo)=> todo.id !== id))
   }

  //toggleComplete
  const toggleComplete = (id)=>{
    console.log(id)
    setTodos((prev)=> prev.map((prevTodo)=>
      
       prevTodo.id === id ? {...prevTodo, complete:!prevTodo.complete} : prevTodo))
  }
//fetch data from local storage

useEffect(()=>{
  const todos = JSON.parse(localStorage.getItem('todos'))
  if(todos && todos.length >0){
    setTodos(todos)
  }
},[])

//set data in localstorage
useEffect(()=>{
  localStorage.setItem('todos',JSON.stringify(todos))
},[todos])

  return (
   
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
       <Header/>
      <div className="bg-[#172842] min-h-screen py-5 rounded-xl w-full">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */}
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key={todo.id}
                          className='w-full'>
                            <TodoItem todo={todo}/>

                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
