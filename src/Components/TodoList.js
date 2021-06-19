import { useDispatch, useSelector } from "react-redux"
import TodoCell from './TodoCell'


export default function TodoList(){

    const todos = useSelector(state => state.todos)
    // const dispatch = useDispatch()

    const showTodos = () => {
        return todos.map((todo) => {
            <TodoCell date={todo.date} name={todo.name} completed={todo.completed} />
        })
    }
    return(
        <div className="todo-list">
            {showTodos()}
            <TodoCell date={"06/19/2020"} name={"work on todo app"}  />
        </div>
    )
}