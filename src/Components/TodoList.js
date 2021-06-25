import { useDispatch, useSelector } from "react-redux"
import TodoCell from './TodoCell'


export default function TodoList(){

    const dispatch = useDispatch()

    const todos = useSelector(state => state.todos)

    fetch("http://localhost:3000/todos")
        .then(response => response.json())
        .then(todos => dispatch({type: "SET_TODOs", todos}))

    const showTodos = () => {
        return todos.map((todo) => {
            return <TodoCell date={todo.date} name={todo.name} completed={todo.completed} />
        })
    }

    return(
        <div className="todo-list">
            {showTodos()}
        </div>
    )
}