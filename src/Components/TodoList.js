import { useDispatch, useSelector } from "react-redux"
import TodoCell from './TodoCell'


export default function TodoList(){

    const todos = useSelector(state => state.todos)

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