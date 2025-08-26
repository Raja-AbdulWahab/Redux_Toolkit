import {useSelector,useDispatch} from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'
const Todos = () => {
  
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  return (
    <>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key = {todo.id}>
            {todo.text}
          <button onClick = {() => dispatch(removeTodo(todo.id))} >Remove</button>
          </li>
          
        ))}
      </ul>
    </>
  )
}

export default Todos
