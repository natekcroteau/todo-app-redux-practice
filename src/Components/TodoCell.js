import { useDispatch } from "react-redux"



export default function TodoCell(props){

    const dispatch = useDispatch()

    const { date, name, completed, id } = props

    function deleteTodo(){

        fetch(`http://localhost:3000/todos/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({"name": name})
        })
        .then(dispatch({type: "DELETE_TODO", id}))
    }
    console.log(props)
    return(
        <div className="todo-cell">
            <h2>Todo: {name}</h2>
            <h3>{date}</h3>
            <button onClick={deleteTodo}>Done?</button>
        </div>
    )
}