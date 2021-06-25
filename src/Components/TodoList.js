import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import TodoCell from './TodoCell'


export default function TodoList(){

    const dispatch = useDispatch()

    const todos = useSelector(state => state.todos)

    function retrieveTodosToState(){
        fetch("http://localhost:3000/todos")
        .then(response => response.json())
        .then(todos => dispatch({type: "SET_TODOS", todos}))
    }

    const showTodos = () => {
        return todos.map((todo) => {
            return <TodoCell id={todo.id} date={todo.date} name={todo.name} completed={todo.completed} />
        })
    }


    useEffect(retrieveTodosToState, [])

    return(
        <div className="todo-list">
            {showTodos()}
        </div>
    )
}