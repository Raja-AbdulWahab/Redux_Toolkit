import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

const AddTodo = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const todoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
    return (

        <form onSubmit={todoHandler}>
            <h1>Learning Redux</h1>
            <input type="text" placeholder='Enter a Todo' value={input} onChange={(e) => setInput(e.target.value)} />
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default AddTodo
