/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import {useTodo} from '../context/TodoContext'

const TodoForm = () => {
    const [todo,setTodo] = useState("");
    const {addTodo} = useTodo();

    const add = (e) =>{
        e.preventDefault()

        if(!todo) return
        addTodo({todo, complete: false})
        setTodo("");

    }

    const addDate = ()=>{
        const date = Date.now()
        console.log(date)
    }
    return (
        <form onSubmit={add} className="flex">
            <input
                onSubmit={add}
                value={todo}
                onChange={(e)=> setTodo(e.target.value)}
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button onClick={addDate} type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm
