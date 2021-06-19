export default function TodoForm(){

    return(
        <div className="todo-form">
            <h1>Add Todo</h1>
            <form>
                <label htmlFor="todo-name" />
                <input id="todo-name" type="text" />
                <input type="submit" />
            </form>
        </div>
    )
}