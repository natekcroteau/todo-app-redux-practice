import { useDispatch, useSelector } from "react-redux"
import TodoCell from './TodoCell'


export default function TodoList(){

    const todos = useSelector(state => state.todos)
    // const dispatch = useDispatch()

    const showTodos = () => {
        return todos.map((todo) => {
            <TodoCell name={todo.name} completed={todo.completed} />
        })
    }
    return(
        <div>
            {showTodos()}
        </div>
    )
}