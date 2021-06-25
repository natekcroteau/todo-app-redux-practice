import { useState } from 'react'
import { useDispatch } from 'react-redux'



export default function TodoForm(){

    const dispatch = useDispatch()
    
    const [todoName, setTodoName] = useState('')

    function handleChange(event){
        setTodoName(event.target.value)
    }

    function submitTodo(event){
        event.preventDefault()
        fetch("http://localhost:3000/todos", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({"name": todoName})
        })
        .then(dispatch({type: "ADD_TODO", name: todoName}))
    }

    return(
        <div className="todo-form">
            <h1>Add Todo</h1>
            <form className="todo-form-input" onSubmit={submitTodo}>
                <label htmlFor="todo-name" />
                <input id="todo-name" type="text" onChange={handleChange} value={todoName} />
                <input type="submit" />
            </form>
        </div>
    )
}