export default function TodoForm(){

    return(
        <div className="todo-form">
            <h1>Add Todo</h1>
            <form className="todo-form-input">
                <label htmlFor="todo-name" />
                <input id="todo-name" type="text" />
                <input type="submit" />
            </form>
        </div>
    )
}